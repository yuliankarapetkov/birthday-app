import { NgModule } from '@angular/core';

import { FriendsSharedModule } from './shared/shared.module';
import { FriendsRoutingModule } from './friends-routing.module';

import { FriendsComponent } from './friends.component';
import { FriendComponent } from './friend/friend.component';

@NgModule({
    imports: [
        FriendsSharedModule,
        FriendsRoutingModule,
    ],
    declarations: [
        FriendsComponent,
        FriendComponent
    ]
})
export class FriendsModule { }
