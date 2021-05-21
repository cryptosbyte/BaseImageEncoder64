import { readFile } from "fs";
import { FileError, MissingFileError } from "./lib/FileError";
import { Base64Encode } from "./lib/Base64Encode";
import fetch from "node-fetch";

const args = process.argv;

(async () => {

    if (args.length == 2) throw new MissingFileError();
    if (args.length == 4) {
    
        if (["-h", "--http"].includes(
            (args[2] as string).toLowerCase()
        )) {

            const res = await fetch(args[3]);
            const buffer = await res.buffer();

            console.log(Base64Encode(buffer));
        
        };
        
        if (["-r", "--readFile"].includes(
            (args[2] as string).toLowerCase()
        )) {

            try {
            
                readFile(args[3], "utf-8", (err, data) => {
    
                    if (err) throw console.error(err);
        
                    console.log(
                        Base64Encode(data)
                    );
        
                });
    
            } catch (error) {
    
                throw new FileError();
    
            };

        };

    };

})();