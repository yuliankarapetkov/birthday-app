import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatCardModule, MatIconModule, MatInputModule } from '@angular/material';

import { AuthFormComponent } from './components/auth-form.component';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        // Angular Material
        MatCardModule,
        MatInputModule,
        MatButtonModule,
        MatIconModule
    ],
    declarations: [
        // Components
        AuthFormComponent
    ],
    exports: [
        AuthFormComponent
    ]
})
export class SharedModule {
}
