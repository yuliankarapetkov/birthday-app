import { Component, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';

import { Observable } from 'rxjs';

import * as fromStore from './store';
import * as fromModels from './shared/models';
import { SearchInputService } from './shared/services/search-input/search-input.service';
import { MatSidenav } from '@angular/material';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    @ViewChild('sideNav') sideNav: MatSidenav;

    user$: Observable<fromModels.User>

    constructor(
        private store: Store<fromStore.State>,
        private searchBarService: SearchInputService
    ) {}

    logOut() {
        this.store.dispatch(new fromStore.LogoutUser());
    }

    onSideNavToggled() {
        this.sideNav.toggle();
    }

    onSearchInputValueChanged(value: string) {
        this.searchBarService.emitInputValueChangedEvent(value);
    }

    ngOnInit() {
        this.store.dispatch(new fromStore.GetUser());
        this.user$ = this.store.select(fromStore.getUser);
    }
}
