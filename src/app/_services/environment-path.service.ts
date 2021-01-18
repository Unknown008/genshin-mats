import { Injectable } from "@angular/core";

@Injectable({
    providedIn: "root"
})
export class EnvironmentPathService {
    public url: string;

    constructor() { 
        const parsedUrl = new URL(window.location.href);
        this.url = parsedUrl.origin;
    }

    public getUrl(path: string) {
        if (this.url.includes("localhost"))
            return path;
        else
            return "/angular-page-test/" + path.replace(/^[./]*/, "");
    }
}
