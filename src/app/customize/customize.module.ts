import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomizeComponent } from './customize.component';
import { RouterModule } from '@angular/router';
import { CustomizeRoutes } from './customize.routing';
import { FooterModule } from '../_shared/footer/footer.module';
import { CharacterModule } from '../_layouts/character/character.module';
import { MatTableModule } from '../_layouts/mat-table/mat-table.module';
import { UserDataModule } from '../_layouts/user-data/user-data.module';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        FooterModule,
        CharacterModule,
        MatTableModule,
        UserDataModule,
        FormsModule,
        RouterModule.forChild(CustomizeRoutes),
    ],
    declarations: [
        CustomizeComponent
    ],
    exports: [
        CustomizeComponent
    ]
})
export class CustomizeModule { }
