import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { MatTableComponent } from "./mat-table.component";
import { NumberFormatPipeModule } from "./../../_shared/directives/number-format";

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        NumberFormatPipeModule
    ],
    declarations: [
        MatTableComponent
    ],
    exports: [
        MatTableComponent
    ]
})
export class MatTableModule { }
