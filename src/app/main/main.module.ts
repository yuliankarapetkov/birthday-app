import { NgModule } from '@angular/core';

import { MainRoutingModule } from './main-routing.module';
import { MainSharedModule } from './shared/shared.module';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';

@NgModule({
    imports: [
        MainRoutingModule,
        MainSharedModule,
    ],
    declarations: [
        LoginComponent,
        RegisterComponent,
        HomeComponent
    ]
})
export class MainModule { }
