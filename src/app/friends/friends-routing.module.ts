import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FriendsComponent } from './friends.component';
import { FriendComponent } from './friend/friend.component';

export const ROUTES: Routes = [
    {
        path: '',
        component: FriendsComponent
    },
    {
        path: 'new',
        component: FriendComponent
    }
        // children: [
        //     {
        //         path: '',
        //         pathMatch: 'full',
        //         component: FriendsComponent
        //     },
        //     // {
        //     //     path: 'login',
        //     //     component: LoginComponent
        //     // },
        //     // {
        //     //     path: 'register',
        //     //     component: RegisterComponent
        //     // }
        // ]
];

@NgModule({
    imports: [RouterModule.forChild(ROUTES)],
    exports: [RouterModule]
})
export class FriendsRoutingModule { }
