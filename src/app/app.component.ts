import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { Observable } from 'rxjs';

import * as fromStore from './store';
import * as fromModels from './shared/models';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    user$: Observable<fromModels.User>

    constructor(
        private store: Store<fromStore.State>
    ) {}

    logOut() {
        this.store.dispatch(new fromStore.LogoutUser());
    }

    ngOnInit() {
        this.store.dispatch(new fromStore.GetUser());
        this.user$ = this.store.select(fromStore.getUser);
    }
}
