import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthComponent } from './auth.component';

export const ROUTES: Routes = [
    {
        path: '',
        component: AuthComponent,
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'login',
            },
            {
                path: 'login',
                component: LoginComponent
            },
            {
                path: 'register',
                component: RegisterComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(ROUTES)],
    exports: [RouterModule]
})
export class AuthRoutingModule { }
