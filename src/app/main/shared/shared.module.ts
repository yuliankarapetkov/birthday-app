import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared/shared.module';

import { AuthFormComponent } from './components/auth-form.component';

@NgModule({
    imports: [
        SharedModule
    ],
    declarations: [
        // Components
        AuthFormComponent
    ],
    exports: [
        SharedModule,
        AuthFormComponent
    ]
})
export class MainSharedModule {
}
