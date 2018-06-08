import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

import { Store } from '@ngrx/store';

import * as fromStore from '../../../store';
import { SharedModule } from '../../shared.module';

@Injectable({
    providedIn: SharedModule
})
export class AuthGuard implements CanActivate {
    constructor(private store: Store<fromStore.State>) { }

    canActivate() {
        return this.store.select(fromStore.getIsLoggedIn);
    }
}