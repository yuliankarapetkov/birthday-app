import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/services/auth/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

    constructor(
        private authService: AuthService
    ) { }

    ngOnInit() {
        this.authService.createUser('chris@example.com', 'parola');
    }

}
