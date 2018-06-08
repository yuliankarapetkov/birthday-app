import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FriendsComponent } from './friends.component';
import { FriendComponent } from './friend/friend.component';
import { FriendsGuard } from './shared/guards/friends/friends.guard';

export const ROUTES: Routes = [
    {
        path: '',
        component: FriendsComponent,
        canActivate: [FriendsGuard]
    },
    {
        path: 'new',
        component: FriendComponent,
        canActivate: [FriendsGuard]
    },
    {
        path: ':friendId',
        component: FriendComponent,
        canActivate: [FriendsGuard]
    }
];

@NgModule({
    imports: [RouterModule.forChild(ROUTES)],
    exports: [RouterModule]
})
export class FriendsRoutingModule { }
