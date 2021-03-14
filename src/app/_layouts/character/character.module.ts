import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CharacterComponent } from "./character.component";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        FormsModule
    ],
    declarations: [
        CharacterComponent
    ],
    exports: [
        CharacterComponent
    ]
})
export class CharacterModule { }
