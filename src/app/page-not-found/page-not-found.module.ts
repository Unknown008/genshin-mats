import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { PageNotFoundComponent } from "./page-not-found.component";
import { PageNotFoundRoutes } from "./page-not-found.routing";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(PageNotFoundRoutes)
    ],
    declarations: [
        PageNotFoundComponent
    ],
    exports: [
        PageNotFoundComponent
    ]
})
export class PageNotFoundModule { }
