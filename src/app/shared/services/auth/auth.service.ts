import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';

import { AngularFireAuth } from 'angularfire2/auth';

import { MainSharedModule } from '../../../main/shared/shared.module';
import { Store } from '../../../../store';
import { SharedModule } from '../../shared.module';

export interface  User {
    email: string;
    uid: string;
    authenticated: boolean;
}

@Injectable({
  providedIn: SharedModule
})
export class AuthService {
    auth$ = this.angularFire.authState
        .pipe(tap(next => {
            if (!next) {
                console.log('no user');
                this.store.set('user', null);
                return;
            }

            const user: User = {
                email: next.email,
                uid: next.uid,
                authenticated: true
            };

            console.log('user', user);

            this.store.set('user', user);
        }));

    constructor(
        private store: Store,
        private angularFire: AngularFireAuth
    ) { }

    get user() {
        return this.angularFire.auth.currentUser;
    }

    get authState() {
        return this.angularFire.authState;
    }

    createUser(email: string, password: string) {
        return this.angularFire.auth.createUserWithEmailAndPassword(email, password);
    }

    loginUser(email: string, password: string) {
        return this.angularFire.auth.signInWithEmailAndPassword(email, password);
    }

    logoutUser() {
        return this.angularFire.auth.signOut();
    }
}
