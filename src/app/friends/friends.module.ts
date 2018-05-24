import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { FriendsRoutingModule } from './friends-routing.module';
import { FriendsComponent } from './friends.component';
import { FriendComponent } from './friend/friend.component';

import {
    MatButtonModule,
    MatCardModule,
    MatDatepickerModule,
    MatIconModule,
    MatInputModule,
    MatNativeDateModule
} from '@angular/material';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FriendsRoutingModule,
        MatCardModule,
        MatInputModule,
        MatButtonModule,
        MatIconModule,
        MatDatepickerModule,
        MatNativeDateModule
    ],
    declarations: [
        FriendsComponent,
        FriendComponent
    ]
})
export class FriendsModule { }
