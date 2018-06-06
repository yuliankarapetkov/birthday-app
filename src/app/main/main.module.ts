import { NgModule } from '@angular/core';

import { MainRoutingModule } from './main-routing.module';
import { MainSharedModule } from './shared/shared.module';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
    imports: [
        MainRoutingModule,
        MainSharedModule,
    ],
    declarations: [
        LoginComponent,
        RegisterComponent
    ]
})
export class MainModule { }
