import { Component, OnInit } from '@angular/core';
import { HeaderConfig, SidenavConfig, SidenavItemAction } from '../shared/models';
import { Store } from '@ngrx/store';
import * as fromStore from '../store';

@Component({
    selector: 'friends-root',
    templateUrl: './friends.component.html',
    styleUrls: ['./friends.component.scss']
})
export class FriendsComponent implements OnInit {
    private readonly headerConfig: HeaderConfig = {
        showSearchInput: true
    };

    private readonly sidenavConfig: SidenavConfig = {
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

    constructor(
        private store: Store<fromStore.State>
    ) {}

    ngOnInit() {
        this.store.dispatch(new fromStore.SetSidenav(this.sidenavConfig));
        this.store.dispatch(new fromStore.SetHeader(this.headerConfig));
    }
}
