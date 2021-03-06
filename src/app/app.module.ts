// Angular modules
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";

// Custom modules
import { NavbarModule } from "./_shared/navbar/navbar.module";
import { FooterModule } from "./_shared/footer/footer.module";
import { HomeModule } from "./home/home.module";
import { PageNotFoundModule } from "./page-not-found/page-not-found.module";

// Components
import { AppComponent } from "./app.component";

// Routing
import { AppRoutes } from "./app.routing";

// Providers
import { CookieService } from "ngx-cookie-service";

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        RouterModule.forRoot(AppRoutes),
        NavbarModule,
        FooterModule,
        HomeModule,
        PageNotFoundModule
    ],
    providers: [CookieService],
    bootstrap: [AppComponent]
})
export class AppModule { }
