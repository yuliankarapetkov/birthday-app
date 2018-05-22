import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { MainRoutingModule } from './main-routing.module';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        RouterModule,
        MainRoutingModule
    ],
    declarations: [
        LoginComponent,
        RegisterComponent,
        HomeComponent
    ]
})
export class MainModule { }
