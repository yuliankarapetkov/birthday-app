import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService, User } from './shared/services/auth/auth.service';
import { Observable } from 'rxjs/index';
import { Router } from '@angular/router';
import { Store } from '../store';
import { takeWhile } from 'rxjs/internal/operators';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
    private componentAlive = true;

    user$: Observable<User>;

    constructor(
        private router: Router,
        private store: Store,
        private authService: AuthService
    ) {}

    // async handleOnLogout() {
    //     await this.authService.logoutUser();
    //     this.router.navigate(['/login']);
    // }

    ngOnInit() {
        this.authService.auth$
            .pipe(takeWhile(() => this.componentAlive))
            .subscribe();

        this.user$ = this.store.select<User>('user');
    }

    ngOnDestroy() {
        this.componentAlive = false;
    }
}
