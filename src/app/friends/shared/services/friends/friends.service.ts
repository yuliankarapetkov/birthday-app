import { Injectable } from '@angular/core';
import { map, tap } from 'rxjs/internal/operators';

import { AngularFireDatabase } from 'angularfire2/database';

import { FriendsSharedModule } from '../../shared.module';

import { Store } from '../../../../../store';
import { AuthService } from '../../../../shared/services/auth/auth.service';
import { Observable } from 'rxjs/index';

export interface Friend {
    name: string;
    birthday: any;
    $key: string;
}

@Injectable({
  providedIn: FriendsSharedModule
})
export class FriendsService {
    friends$ = this.database.list(`friends/${this.uid}`)
        .snapshotChanges()
        .pipe(
            map(changes => changes.map(c => ({ ...c.payload.val(), $key: c.payload.key }))),
            tap(next => this.store.set('friends', next))
        );

    constructor(
        private store: Store,
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
        const birthdayTimestamp = friend.birthday.getTime() - (friend.birthday.getTimezoneOffset() * 60 * 1000);
        const friendFormatted = { ...friend, birthday: birthdayTimestamp };
        return this.database.list(`friends/${this.uid}`).push(friendFormatted);
    }

    // getMeal(key: string) {
    //     if (!key) {
    //         return Observable.of({});
    //     }
    //
    //     return this.store.select<Meal>('meals')
    //     // A quick tip to remove all falsy (false, null, undefined, 0, NaN or an empty string) items out of an array
    //     // Since Boolean constructor is also a function, it returns either true for ‘truthy’ argument
    //     // or false for ‘falsy’ argument.
    //         .filter(Boolean)
    //         .map(meals => meals.find((meal: Meal) => meal.$key === key));
    // }

    // updateMeal(key: string, meal: Meal) {
    //     return this.database.object(`meals/${this.uid}/${key}`).update(meal);
    // }
    //
    // removeMeal(key: string) {
    //     return this.database.list(`meals/${this.uid}`).remove(key);
    // }
}
