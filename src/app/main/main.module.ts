import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [LoginComponent, RegisterComponent, HomeComponent]
})
export class MainModule { }
