import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { UserDataComponent } from './user-data.component';
import { NumberFormatPipeModule } from 'src/app/_shared/directives/number-format';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        NumberFormatPipeModule
    ],
    declarations: [
        UserDataComponent
    ],
    exports: [
        UserDataComponent
    ]
})
export class UserDataModule { }
