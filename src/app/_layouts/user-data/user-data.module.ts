import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { UserDataComponent } from "./user-data.component";
import { NumberFormatPipeModule } from "./../../_shared/directives/number-format";
import { LoaderModule } from "src/app/_shared/loader/loader.module";

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        NumberFormatPipeModule,
        LoaderModule
    ],
    declarations: [
        UserDataComponent
    ],
    exports: [
        UserDataComponent
    ]
})
export class UserDataModule { }
