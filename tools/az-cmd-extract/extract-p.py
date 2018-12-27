from __future__ import print_function
from multiprocessing.dummy import Pool as ThreadPool 
import threading
import subprocess
import re
import json
from datetime import datetime

TOKEN_SUBGROUPS = "__s"
TOKEN_COMMAND = "__c"
TOKEN_ARGS = "__a"
TOKEN_GARGS = "__ga"
TOKEN_RIDARGS = "__rida"

lock = threading.Lock()
tc = 0 

def get_commands(command = "az"):
    global tc
    pool = ThreadPool(4) 
    
    lock.acquire()    
    tc += 1
    print("{} - {}".format(tc, command))    
    lock.release()

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
                #print(se[b:e])
                e = se.index(TOKEN_COMMAND)                
                r = pool.map(get_commands, [command + " " + g for g in se[b:e]])
                d = dict(zip(se[b:e], r))

        if TOKEN_SUBGROUPS not in se:            
            d = {}
            if TOKEN_COMMAND in se:
                #print(se[b:e])
                b = se.index(TOKEN_COMMAND)+1
                r = pool.map(get_commands, [command + " " + g for g in se[b:e]])
                d = dict(zip(se[b:e], r))

        if TOKEN_ARGS in se:            
            d = []
            b = se.index(TOKEN_ARGS)+1
            e = se.index(TOKEN_GARGS)
            #print(se[b:e])
            for a in se[b:e]:
                if a.startswith("-"):
                    d.append(a.split(":")[0].split(" ")[0].replace("--", "").strip())
    
    lock.acquire()    
    tc -= 1 
    lock.release()

    return d

if __name__ == "__main__":    
    s = datetime.now()
    print("starting at: {0}".format(s))
    
    data = get_commands("az")
    
    e = datetime.now()
    print("done at: {0}".format(e))
    
    t = (e-s)
    print("total time taken: {0}".format(t.total_seconds()))

    with open('az-command-map.json', 'w') as outfile:  
        json.dump(data, outfile, indent=4)
