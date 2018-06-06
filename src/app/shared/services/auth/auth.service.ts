import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';

import { AngularFireAuth } from 'angularfire2/auth';

import { Store } from '../../../../store';
import { SharedModule } from '../../shared.module';
import { Observable } from 'rxjs';
import { fromPromise } from 'rxjs/internal/observable/fromPromise';

export interface  User {
    email: string;
    uid: string;
    authenticated: boolean;
}

@Injectable({
  providedIn: SharedModule
})
export class AuthService {
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

    createUser(email: string, password: string): Observable<any> {
        return fromPromise(this.angularFire.auth.createUserWithEmailAndPassword(email, password));
    }

    loginUser(email: string, password: string): Observable<any> {
        return fromPromise(this.angularFire.auth.signInWithEmailAndPassword(email, password));
    }

    logoutUser() {
        return this.angularFire.auth.signOut();
    }
}
