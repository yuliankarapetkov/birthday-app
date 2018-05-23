import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../shared/services/auth/auth.service';

@Component({
    selector: 'main-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
    constructor(
        private router: Router,
        private authService: AuthService
    ) { }

    ngOnInit() {
    }

    private async registerUser(email: string, password: string) {
        try {
            await this.authService.createUser(email, password);
            this.router.navigate(['/']);
        } catch (error) {
            // this.error = error;
        }
    }

    handleFormSubmit(formValue: any) {
        const { email, password } = formValue;
        this.registerUser(email, password);
    }
}
