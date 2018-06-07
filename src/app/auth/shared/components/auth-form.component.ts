import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'auth-form',
    templateUrl: './auth-form.component.html',
    styleUrls: ['./auth-form.component.scss']
})
export class AuthFormComponent implements OnInit {
    @Output() formSubmit: EventEmitter<any> = new EventEmitter<any>();

    authForm = this.formBuilder.group({
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]]
    });

    constructor(
        private formBuilder: FormBuilder
    ) { }

    private hasError(controlName: string, errorName: string) {
        const control = this.authForm.get(controlName);
        return control.hasError(errorName) && control.touched;
    }

    get passwordRequiredError() {
        return this.hasError('password', 'required');
    }

    get passwordMinLengthError() {
        return this.hasError('password', 'minlength');
    }

    get emailRequiredError() {
        return this.hasError('email', 'required');
    }

    get emailFormatError() {
        return this.hasError('email', 'email');
    }

    submitForm() {
        if (this.authForm.valid) {
            this.formSubmit.emit(this.authForm.value);
        }
    }

    ngOnInit() {
    }
}
