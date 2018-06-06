import { NgModule } from '@angular/core';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { reducers, effects } from './store';

import { FriendsSharedModule } from './shared/shared.module';
import { FriendsRoutingModule } from './friends-routing.module';

import { FriendsComponent } from './friends.component';
import { FriendComponent } from './friend/friend.component';

@NgModule({
    imports: [
        FriendsSharedModule,
        FriendsRoutingModule,
        StoreModule.forFeature('birthday', reducers),
        EffectsModule.forFeature(effects)
    ],
    declarations: [
        FriendsComponent,
        FriendComponent
    ]
})
export class FriendsModule { }
