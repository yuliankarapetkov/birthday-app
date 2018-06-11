import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FriendsComponent } from './friends.component';
import { FriendComponent } from './friend/friend.component';
import { FriendsGuard } from './shared/guards/friends/friends.guard';
import { FriendsListComponent } from './friends-list/friends-list.component';

export const ROUTES: Routes = [
    {
        path: '',
        component: FriendsComponent,
        canActivate: [FriendsGuard],
        children: [
            {
                path: '',
                component: FriendsListComponent,
            },
            {
                path: 'new',
                component: FriendComponent,
            },
            {
                path: ':friendId',
                component: FriendComponent,
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(ROUTES)],
    exports: [RouterModule]
})
export class FriendsRoutingModule { }
