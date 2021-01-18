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

    public getUrl() {
        console.log(this.url);
        if (this.url.includes("localhost"))
            return "./";
        else
            return this.url + "/angular-page-test/";
    }
}
