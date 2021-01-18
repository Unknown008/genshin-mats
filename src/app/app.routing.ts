import { Routes } from "@angular/router";
import { DefaultComponent } from "./_layouts/default/default.component";

export const AppRoutes: Routes = [
    { path: "", redirectTo: "/home", pathMatch: "full" },
    { 
        path: "",
        component: DefaultComponent,
        children: [
            {
                path: "home",
                loadChildren: "./home/home.module#HomeModule"
            },
            {
                path: "customize",
                loadChildren: "./customize/customize.module#CustomizeModule"
            },
            {
                path: "404",
                loadChildren: "./page-not-found/page-not-found.module#PageNotFoundModule"
            }
        ]
    },
    { path: "**", redirectTo: "404", pathMatch: "full" }
];
