import { Injectable } from "@angular/core";
import * as fs from "tns-core-modules/file-system";

@Injectable()
export class FileReaderService {

    constructor() { }

    readJSON(path: string): Promise<Object> {
        return new Promise<Object>((resolve, reject) => {
            let documents = fs.knownFolders.currentApp();

            try {
                let jsonFile = documents.getFile(path);
                // console.log(file);

                jsonFile.readText().then((content: string) => {

                    let data = <Array<Object>>JSON.parse(content);
                    resolve(data);
                })
                    .catch((err) => {
                        reject(err);
                    });
            } catch (err) {
                reject(err);

            }
        });
    }
}
