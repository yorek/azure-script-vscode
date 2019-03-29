/* --------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */
'use strict';

import {
	createConnection,
	TextDocuments,
	TextDocument,
	Diagnostic,
	DiagnosticSeverity,
	ProposedFeatures,
	InitializeParams,
	DidChangeConfigurationNotification,
	CompletionItem,
	CompletionItemKind,
	TextDocumentPositionParams,
	Range,
	Position
} from 'vscode-languageserver';

import { azcmdmap } from "./az_command_map";

// Create a connection for the server. The connection uses Node's IPC as a transport.
// Also include all preview / proposed LSP features.
let connection = createConnection(ProposedFeatures.all);

// Create a simple text document manager. The text document manager
// supports full document sync only
let documents: TextDocuments = new TextDocuments();

let hasConfigurationCapability: boolean = false;
let hasWorkspaceFolderCapability: boolean = false;
let hasDiagnosticRelatedInformationCapability: boolean = false;
let activeCommand: string = "";

connection.onInitialize((params: InitializeParams) => {
	let capabilities = params.capabilities;

	// Does the client support the `workspace/configuration` request?
	// If not, we will fall back using global settings
	hasConfigurationCapability =
		capabilities.workspace && !!capabilities.workspace.configuration;
	hasWorkspaceFolderCapability =
		capabilities.workspace && !!capabilities.workspace.workspaceFolders;
	hasDiagnosticRelatedInformationCapability =
		capabilities.textDocument &&
		capabilities.textDocument.publishDiagnostics &&
		capabilities.textDocument.publishDiagnostics.relatedInformation;

	return {
		capabilities: {
			textDocumentSync: documents.syncKind,
			// Tell the client that the server supports code completion
			completionProvider: {
				resolveProvider: true
			}
		}
	};
});

connection.onInitialized(() => {
	if (hasConfigurationCapability) {
		// Register for all configuration changes.
		connection.client.register(
			DidChangeConfigurationNotification.type,
			undefined
		);
	}
	if (hasWorkspaceFolderCapability) {
		connection.workspace.onDidChangeWorkspaceFolders(_event => {
			connection.console.log('Workspace folder change event received.');
		});
	}
});

// This handler provides the initial list of the completion items.
connection.onCompletion(
	(_textDocumentPosition: TextDocumentPositionParams): CompletionItem[] => {
		// The pass parameter contains the position of the text document in
		// which code complete got requested. For the example we ignore this
		// info and always provide the same completion items.

		var document = documents.get(_textDocumentPosition.textDocument.uri)	
		var position = _textDocumentPosition.position;

		// Get all text from beginning to current cursor position
		let rc: Range = {
			start: { line: 0, character: 0 },
			end: { line: position.line, character: position.character }
		};
		const dc = document.getText(rc);

		// Find the closest semicolon		
		const lines: string[] = dc.split("\n");

		var ic: number = -1;
		var il: number = -1;
		
		if (lines != null)
		{
			for(var i: number=lines.length; i>0 ; i--){
				const s: string = lines[i-1];
				ic = s.lastIndexOf(";");
				if (ic >= 0) { il = i; break; }
			}
		}

		// Take all the text from the last semicolon if any
		// or from the beginning of document if no semicolon is found
		let r: Range;

		if (ic >= 0)
		{
			r = {
				start: {
					line: il,
					character: ic
				},
				end: {
					line: position.line,
					character: position.character
				}
			};
		} else {
			r = {
				start: {
					line: position.line,
					character: 0
				},
				end: {
					line: position.line,
					character: position.character
				}
			};
		}

		const line = document.getText(r);
		//connection.console.log(line)

		// Get list of keywords
		let keywordList: string[] = getCompletionText(line);
		
		// Create result
		let result:CompletionItem[] = [];
		keywordList.forEach(k =>
			{
				result.push(
					{
						label: k,
						kind: CompletionItemKind.Keyword
					}
				)
			});

		return result;
	}
);

function getCompletionText(command:string): string[]
{
	const lines: string[] = command.split("\n");
	var cleaned: string = "";

	// remove comments
	lines.forEach(line => {
		var l = line.trim();
		if (!l.startsWith("//")) {
			cleaned += l = " "
		}
	});
	cleaned = cleaned.trim();

	if (cleaned == "") cleaned = command.trim();
	
	var terms = cleaned.split(" ");
	var document:any = azcmdmap

	terms.forEach(term => {
		// stop looking for terms when the 
		// open "{" is found as only $args contant should
		// always be returned now, as cursors is inside a 
		// parameter block 
		if (term == "{") return;
		if (term in document)
		{
			document = document[term] 
		}        
	});

	//console.log(document)

	var result:string[] = []    

	if ("$args" in document)
	{
		result = document["$args"]
	} else 
	{
		var nodes = document;        
		for (var n in nodes) 
		{
			result.push(n)        
		}    
	}

	return result;
}

// This handler resolve additional information for the item selected in
// the completion list.

connection.onCompletionResolve(
	(item: CompletionItem): CompletionItem => {
		/*
		if (item.data === 1) {
			item.detail = 'TypeScript details',
			item.documentation = 'TypeScript documentation'
		} else if (item.data === 2) {
			item.detail = 'JavaScript details',
			item.documentation = 'JavaScript documentation'
		}
		*/
		return item;
	}
);

/*
connection.onDidOpenTextDocument((params) => {
	// A text document got opened in VSCode.
	// params.uri uniquely identifies the document. For documents store on disk this is a file URI.
	// params.text the initial full content of the document.
	connection.console.log(`${params.textDocument.uri} opened.`);
});
connection.onDidChangeTextDocument((params) => {
	// The content of a text document did change in VSCode.
	// params.uri uniquely identifies the document.
	// params.contentChanges describe the content changes to the document.
	connection.console.log(`${params.textDocument.uri} changed: ${JSON.stringify(params.contentChanges)}`);
});
connection.onDidCloseTextDocument((params) => {
	// A text document got closed in VSCode.
	// params.uri uniquely identifies the document.
	connection.console.log(`${params.textDocument.uri} closed.`);
});
*/

// Make the text document manager listen on the connection
// for open, change and close text document events
documents.listen(connection);

// Listen on the connection
connection.listen();
