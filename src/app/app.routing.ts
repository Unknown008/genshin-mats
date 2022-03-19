import { Routes } from "@angular/router";

export const AppRoutes: Routes = [
    { path: "", redirectTo: "/home", pathMatch: "full" },
    { 
        path: "",
        children: [
            {
                path: "home",
                loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
            },
            {
                path: "404",
                loadChildren: () => import('./page-not-found/page-not-found.module').then(m => m.PageNotFoundModule)
            }
        ]
    },
    { path: "**", redirectTo: "404", pathMatch: "full" }
];
