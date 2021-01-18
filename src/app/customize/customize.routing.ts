import { Routes } from '@angular/router';
import { CustomizeComponent } from './customize.component';

export const CustomizeRoutes: Routes = [
    {
        path: '',
        children: [{
            path: '',
            component: CustomizeComponent
        }]
    }
];
