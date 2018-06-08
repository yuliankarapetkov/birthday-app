import { Injectable } from '@angular/core';

import { map } from 'rxjs/operators';
import { from, Observable } from 'rxjs';

import { AngularFireDatabase } from 'angularfire2/database';

import * as fromServices from '../../../../shared/services';
import * as fromModels from '../../models';
import { FriendsSharedModule } from '../../shared.module';

@Injectable({
  providedIn: FriendsSharedModule
})
export class FriendsService {
    constructor(
        private database: AngularFireDatabase,
        private authService: fromServices.AuthService
    ) { }

    get uid() {
        return this.authService.user.uid;
    }

    private convertToTimestampFriend(friend: fromModels.Friend) {
        const birthday = friend.birthday.getTime() - (friend.birthday.getTimezoneOffset() * 60 * 1000);
        return { ...friend, birthday };
    }

    getFriends(): Observable<any> {
        return this.database.list(`friends/${this.uid}`)
            .snapshotChanges()
            .pipe(
                map(changes => changes.map(c => ({ ...c.payload.val(), key: c.payload.key })))
            );
    }

    addFriend(friend: fromModels.Friend) {
        const friendFormatted = this.convertToTimestampFriend(friend);
        return from(this.database.list(`friends/${this.uid}`).push(friendFormatted));
    }

    updateFriend(key: string, friend: fromModels.Friend) {
        const friendFormatted = this.convertToTimestampFriend(friend);
        return from(this.database.object(`friends/${this.uid}/${key}`).update(friendFormatted));
    }

    removeFriend(key: string) {
        return from(this.database.list(`friends/${this.uid}`).remove(key));
    }
}
