import { Routes } from "@angular/router";

export const AppRoutes: Routes = [
    { path: "", redirectTo: "/home", pathMatch: "full" },
    { 
        path: "",
        children: [
            {
                path: "home",
                loadChildren: "./home/home.module#HomeModule"
            },
            {
                path: "404",
                loadChildren: "./page-not-found/page-not-found.module#PageNotFoundModule"
            }
        ]
    },
    { path: "**", redirectTo: "404", pathMatch: "full" }
];
