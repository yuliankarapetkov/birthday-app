import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

import { Observable } from 'rxjs';

import * as fromStore from './store';
import { User } from './shared/services';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    user$: Observable<User>

    constructor(
        private store: Store<fromStore.State>,
        private router: Router
    ) {}

    logOut() {
        this.store.dispatch(new fromStore.LogoutUser());
    }

    ngOnInit() {
        this.store.dispatch(new fromStore.GetUser());
        this.user$ = this.store.select(fromStore.getUser);
    }
}
