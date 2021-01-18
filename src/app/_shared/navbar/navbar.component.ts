import { Component, OnInit } from "@angular/core";

@Component({
    selector: "app-navbar",
    templateUrl: "./navbar.component.html",
    styleUrls: ["./navbar.component.css"]
})
export class NavbarComponent implements OnInit {
    public logoPath: string = "";
    constructor() { }

    ngOnInit() {
        this.logoPath = "../../../assets/resources/logo.png"
    }

}
