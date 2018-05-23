import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../shared/services/auth/auth.service';

@Component({
    selector: 'main-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    loginError: string;

    constructor(
        private router: Router,
        private authService: AuthService
    ) { }

    ngOnInit() {
    }

    private async registerUser(email: string, password: string) {
        try {
            await this.authService.loginUser(email, password);
            this.router.navigate(['/']);
        } catch (error) {
            this.loginError = error;
        }
    }

    handleFormSubmit(formValue: any) {
        const { email, password } = formValue;
        this.registerUser(email, password);
    }
}
