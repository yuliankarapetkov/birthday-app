import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

import * as fromStore from './store';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    constructor(
        private store: Store<fromStore.State>,
        private router: Router
    ) {}


    ngOnInit() {
        this.store.dispatch(new fromStore.CheckAuthState());
    }
}
