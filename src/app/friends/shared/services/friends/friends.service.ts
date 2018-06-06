import { Injectable } from '@angular/core';
import { map, tap } from 'rxjs/internal/operators';

import { AngularFireDatabase } from 'angularfire2/database';

import { FriendsSharedModule } from '../../shared.module';

import { AuthService } from '../../../../shared/services/auth/auth.service';
import { from, Observable } from 'rxjs';

export interface Friend {
    name: string;
    birthday: any;
    $key: string;
}

@Injectable({
  providedIn: FriendsSharedModule
})
export class FriendsService {
    constructor(
        private database: AngularFireDatabase,
        private authService: AuthService
    ) { }

    get uid() {
        return this.authService.user.uid;
    }

    getFriends(): Observable<any> {
        return this.database.list(`friends/${this.uid}`)
            .snapshotChanges()
            .pipe(
                map(changes => changes.map(c => ({ ...c.payload.val(), $key: c.payload.key })))
            );
    }

    addFriend(friend: Friend) {
        const birthday = friend.birthday.getTime() - (friend.birthday.getTimezoneOffset() * 60 * 1000);
        const friendFormatted = { ...friend, birthday };
        return from(this.database.list(`friends/${this.uid}`).push(friendFormatted));
    }
}
