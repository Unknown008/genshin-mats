import { Routes } from '@angular/router';
import { DefaultComponent } from '../_layouts/default/default.component';
import { HomeComponent } from './home.component';

export const HomeRoutes: Routes = [
    {
        path: '',
        component: DefaultComponent,
        children: [{
            path: '',
            component: HomeComponent
        }]
    }
];
