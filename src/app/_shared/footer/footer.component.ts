import { Component, OnInit } from "@angular/core";
import { EnvironmentPathService } from "src/app/_services/environment-path.service";

@Component({
    selector: "app-footer",
    templateUrl: "./footer.component.html",
    styleUrls: ["./footer.component.scss"]
})
export class FooterComponent implements OnInit {
    public path: string = this.url.getUrl("./../../assets/resources/", true);
    public githubLogo: string = "";

    constructor(
        private url: EnvironmentPathService
    ) { }

    ngOnInit() {
        this.githubLogo = this.path + "other/GitHub-Mark-32px.png";
    }
}
