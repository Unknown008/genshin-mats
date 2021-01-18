import { enableProdMode } from "@angular/core";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";

import { AppModule } from "./app/app.module";
import { environment } from "./environments/environment";
import OverlayScrollbars from 'overlayscrollbars';

declare var $: any;

if (environment.production) {
    enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
    .catch(err => console.error(err));

// OverlayScrollbars(document.body, {
//     scrollbars: {
//         autoHide: "move"
//     }
// });