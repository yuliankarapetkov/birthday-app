import { Component, OnInit } from '@angular/core';
import { HeaderConfig, SidenavConfig } from '../shared/models';
import { Store } from '@ngrx/store';

import * as fromStore from '../store';

@Component({
    selector: 'auth-root',
    templateUrl: './auth.component.html',
    styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
    private readonly headerConfig: HeaderConfig = {
        showSearchInput: false
    };

    private readonly sidenavConfig: SidenavConfig = {
        sections: [{
            hasDivider: false,
            items: [{
                name: 'Sign in',
                icon: 'exit_to_app',
                isLinkItem: true,
                link: '/auth/login'
            }, {
                name: 'Create account',
                icon: 'person',
                isLinkItem: true,
                link: '/auth/register'
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
