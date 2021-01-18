// Angular modules
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";

// Custom modules
import { OverlayscrollbarsModule } from "overlayscrollbars-ngx";
import { NavbarModule } from "./_shared/navbar/navbar.module";
import { FooterModule } from "./_shared/footer/footer.module";
import { CustomizeModule } from "./customize/customize.module";
import { HomeModule } from "./home/home.module";
import { PageNotFoundModule } from "./page-not-found/page-not-found.module";

// Components
import { AppComponent } from "./app.component";
import { DefaultComponent } from "./_layouts/default/default.component";

// Routing
import { AppRoutes } from "./app.routing";
import { FormsModule } from "@angular/forms";

// Providers
import { CookieService } from 'ngx-cookie-service';

@NgModule({
    declarations: [
        AppComponent,
        DefaultComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        OverlayscrollbarsModule,
        HttpClientModule,
        RouterModule.forRoot(AppRoutes),
        NavbarModule,
        FooterModule,
        HomeModule,
        CustomizeModule,
        PageNotFoundModule
    ],
    providers: [CookieService],
    bootstrap: [AppComponent]
})
export class AppModule { }
