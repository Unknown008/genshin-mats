import { Routes } from "@angular/router";
import { PageNotFoundComponent } from "./page-not-found.component";

export const PageNotFoundRoutes: Routes = [
    {
        path: "",
        children: [{
            path: "",
            component: PageNotFoundComponent
        }]
    }
];
