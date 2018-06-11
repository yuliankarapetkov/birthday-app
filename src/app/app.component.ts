import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as fromStore from './store';
import * as fromModels from './shared/models';
import { SearchInputService } from './shared/services/search-input/search-input.service';

import { SidenavConfig, SidenavItem, SidenavItemAction } from './shared/components';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    @ViewChild('sideNav') sideNav: MatSidenav;

    user$: Observable<fromModels.User>

    sidenavConfig: SidenavConfig;

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

    onSidenavItemClicked(item: SidenavItem) {
        if (item.isLinkItem) {
            this.store.dispatch(new fromStore.Go({ path: [item.link]}));
        } else {
            if (item.action === SidenavItemAction.SignOut) {
                this.logOut();
            }
        }
    }

    onSearchInputValueChanged(value: string) {
        this.searchBarService.emitInputValueChangedEvent(value);
    }

    ngOnInit() {
        this.store.dispatch(new fromStore.GetUser());
        this.user$ = this.store.select(fromStore.getUser);

        this.sidenavConfig = {
            sections: [{
                hasDivider: false,
                items: [{
                    name: 'See all friends',
                    icon: 'people',
                    isLinkItem: true,
                    link: '/friends'
                }, {
                    name: 'Add a friend',
                    icon: 'person_add',
                    isLinkItem: true,
                    link: '/friends/new'
                }]
            }, {
                name: 'Settings',
                hasDivider: true,
                items: [{
                    name: 'Sign out',
                    icon: 'exit_to_app',
                    isLinkItem: false,
                    action: SidenavItemAction.SignOut
                }]
            }]
        };
    }
}
