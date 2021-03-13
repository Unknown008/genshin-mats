import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';
import { HomeRoutes } from './home.routing';
import { FooterModule } from '../_shared/footer/footer.module';
import { CharacterModule } from '../_layouts/character/character.module';
import { MatTableModule } from '../_layouts/mat-table/mat-table.module';
import { UserDataModule } from '../_layouts/user-data/user-data.module';
import { DropsModule } from '../_layouts/drops/drops.module';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        FooterModule,
        CharacterModule,
        MatTableModule,
        UserDataModule,
        DropsModule,
        FormsModule,
        RouterModule.forChild(HomeRoutes),
    ],
    declarations: [
        HomeComponent
    ],
    exports: [
        HomeComponent
    ]
})
export class HomeModule { }
