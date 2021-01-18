import { Component, OnInit } from "@angular/core";
import { EnvironmentPathService } from "src/app/_services/environment-path.service";

@Component({
    selector: "app-navbar",
    templateUrl: "./navbar.component.html",
    styleUrls: ["./navbar.component.css"]
})
export class NavbarComponent implements OnInit {
    public logoPath: string = "";

    constructor(
        private url: EnvironmentPathService
    ) { }

    ngOnInit() {
        this.logoPath = this.url.getUrl("../../../assets/resources/logo.png", true);
    }
}
