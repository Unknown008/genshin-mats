import { Component, OnInit } from '@angular/core';
import PerfectScrollbar from 'perfect-scrollbar';
@Component({
    selector: 'app-default',
    templateUrl: './default.component.html',
    styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {

    constructor() { }

    ngOnInit() {
        let mainPanel = document.querySelector('.main-panel');
        if (mainPanel)
            new PerfectScrollbar(mainPanel);
        
        let modalPanel = document.querySelector('.modal-panel');
        if (modalPanel)
            new PerfectScrollbar(modalPanel);
    }
}
