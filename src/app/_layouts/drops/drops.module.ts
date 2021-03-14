import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { DropsComponent } from "./drops.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        FormsModule
    ],
    declarations: [
        DropsComponent
    ],
    exports: [
        DropsComponent
    ]
})
export class DropsModule { }
