import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { MainRoutingModule } from './main-routing.module';
import { RouterModule } from '@angular/router';
import { SharedModule } from './shared/shared.module';
import { MatButtonModule, MatCardModule, MatIconModule, MatInputModule } from '@angular/material';

@NgModule({
    imports: [
        RouterModule,
        MainRoutingModule,
        SharedModule,
        MatCardModule,
        MatInputModule,
        MatButtonModule,
        MatIconModule
    ],
    declarations: [
        LoginComponent,
        RegisterComponent,
        HomeComponent
    ]
})
export class MainModule { }
