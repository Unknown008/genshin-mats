import { Component } from "@angular/core";
import { EnvironmentPathService } from "../_services/environment-path.service";

@Component({
    selector: "app-page-not-found",
    templateUrl: "./page-not-found.component.html",
    styleUrls: ["./page-not-found.component.css"]
})
export class PageNotFoundComponent {
    public path: string = this.url.getUrl("./../../../assets/resources/404.png");

    constructor(
        private url: EnvironmentPathService
    ) { }

}
