import { Injectable } from "@angular/core";
import { CookieService } from "ngx-cookie-service";
import LZUTF8 from "lzutf8";

@Injectable({
    providedIn: "root"
})
export class CookieStorageService {
    constructor(
        private cookieService: CookieService
    ) { }

    public set(key: string, text: string): void {
        if (key == "c") {
            let keys = this.cookieService.get("c");
            let oldKeyList = [];
            if (keys != null && keys != "") {
                oldKeyList = JSON.parse(keys);
            }

            let keyList = [];
            let remaining: string = LZUTF8.compress(
                JSON.stringify(text), {outputEncoding: "Base64"}
            );
            let encoded = encodeURIComponent(remaining);
            for (let i = 1; remaining.length > 0 && i < 10; i++) {
                let encodedLength = 4080;
                let decodedLength = 0;
                let part = encoded.slice(0, encodedLength);
                while (part.length > 0) {
                    try {
                        let decoded = decodeURIComponent(part);
                        decodedLength = decoded.length;
                        break;
                    } catch {
                        encodedLength--;
                        part = encoded.slice(0, encodedLength);
                    }
                }
                this.cookieService.set("c" + i, remaining.slice(0, decodedLength));
                keyList.push("c" + i);
                remaining = remaining.slice(decodedLength);
            }

            for (let k of oldKeyList) {
                if (!keyList.includes(k))
                    this.cookieService.delete(k);
            }

            this.cookieService.set("c", JSON.stringify(keyList));

            if (remaining.length > 0) {
                this.delete("c");
                console.log("Data too large to be stored.");
            }
        } else {
            this.cookieService.set(key, text);
        }
    }

    public get(key: string): string {
        if (key == "c") {
            let keys = this.cookieService.get("c");
            if (keys == null || keys == "") {
                return "";
            } else {
                let keyList = JSON.parse(keys);
                let result = "";
                for (let k of keyList) {
                    result += this.cookieService.get(k);
                }
                return JSON.parse(LZUTF8.decompress(
                    result, {inputEncoding: "Base64"}
                ));
            }
        } else {
            return this.cookieService.get(key);
        }
    }

    public delete(key: string): void {
        if (key == "c") {
            let keys = this.cookieService.get("c");
            if (keys == null || keys == "") {
                return;
            } else {
                let keyList = JSON.parse(keys);
                for (let k of keyList) {
                    this.cookieService.delete(k);
                }
                this.cookieService.delete("c");
            }
        } else {
            this.cookieService.delete(key);
        }
    }
}
