import { Component, OnDestroy, OnInit } from '@angular/core';
import { Friend, FriendsService } from './shared/services/friends/friends.service';
import { Store } from '../../store';
import { takeWhile } from 'rxjs/internal/operators';
import { Observable } from 'rxjs/index';

@Component({
    selector: 'friends-root',
    templateUrl: './friends.component.html',
    styleUrls: ['./friends.component.scss']
})
export class FriendsComponent implements OnInit, OnDestroy {
    private componentAlive = true;

    shee: any;

    friends$: Observable<Friend[]>;

    constructor(
        private store: Store,
        private friendsService: FriendsService
    ) { }

    ngOnInit() {
        this.friends$ = this.store.select<Friend[]>('friends');
        this.friendsService.friends$
            .pipe(takeWhile(() => this.componentAlive))
            .subscribe(d => {
                this.shee = d.map(a => ({ ...a, birthday: a.birthday }));

                console.log('shee', this.shee);
            });
    }

    ngOnDestroy() {
        this.componentAlive = false;
    }
}
