import { Observable, BehaviorSubject } from 'rxjs/index';
import { pluck, distinctUntilChanged } from 'rxjs/operators';
import { Friend } from './app/friends/shared/services/friends/friends.service';

export interface State {
    user: any;
    friends: Friend[];
    [key: string]: any;
}

const state: State = {
    user: undefined,
    friends: undefined
};

export class Store {

    private subject = new BehaviorSubject<State>(state);
    private store = this.subject.asObservable()
        .pipe(distinctUntilChanged());

    get value() {
        return this.subject.value;
    }

    select<T>(name: string): Observable<T> {
        return this.store.pipe(pluck(name));
    }

    set(name: string, state: any) {
        this.subject.next({ ...this.value, [name]: state });
    }

}