from __future__ import print_function
import subprocess
import re
import json

TOKEN_SUBGROUPS = "__s"
TOKEN_COMMAND = "__c"
TOKEN_ARGS = "__a"
TOKEN_GARGS = "__ga"
TOKEN_RIDARGS = "__rida"

def get_commands(command = "az"):
    print(command)

    az_result = subprocess.check_output(
        "{0} --help; exit 0".format(command), 
        stderr=subprocess.STDOUT, 
        shell=True
    )

    #print (az_result)

    az_result = az_result \
        .lower() \
        .replace("subgroups:", TOKEN_SUBGROUPS + ":") \
        .replace("commands:", TOKEN_COMMAND + ":") \
        .replace("global arguments", TOKEN_GARGS + ":") \
        .replace("resource id arguments", TOKEN_RIDARGS + ":") \
        .replace("arguments", TOKEN_ARGS + ":")

    #print (az_result)

    se = re.findall(r"^(.*):", az_result, re.M|re.I)
    if se is not None:
        se = [s.strip() for s in se]
        #print(se)
        b = 0
        e = len(se)

        if TOKEN_SUBGROUPS in se:
            d = {}
            b = se.index(TOKEN_SUBGROUPS)+1
            if TOKEN_COMMAND in se:
                e = se.index(TOKEN_COMMAND)
            for g in se[b:e]:
                d[g] = get_commands(command + " " + g)        

        if TOKEN_SUBGROUPS not in se:            
            d = {}
            if TOKEN_COMMAND in se:
                b = se.index(TOKEN_COMMAND)+1
                for g in se[b:e]:
                    d[g] = get_commands(command + " " + g)

        if TOKEN_ARGS in se:            
            d = []
            b = se.index(TOKEN_ARGS)+1
            e = se.index(TOKEN_GARGS)
            for a in se[b:e]:
                if a.startswith("-"):
                    d.append(a.split(":")[0].split(" ")[0].replace("--", "").strip())
    
    return d

if __name__ == "__main__":
    data = get_commands("az")
    with open('az-command-map.json', 'w') as outfile:  
        json.dump(data, outfile, indent=4)
