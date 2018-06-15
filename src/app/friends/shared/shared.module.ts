import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared/shared.module';
import { RemoveFriendDialogComponent } from './components/remove-friend-dialog/remove-friend-dialog.component';

import { components } from './components';
import { pipes } from './pipes';



@NgModule({
    imports: [
        SharedModule
    ],
    declarations: [
        ...components,
        ...pipes
    ],
    exports: [
        SharedModule,
        ...components,
        ...pipes
    ],
    entryComponents: [
        RemoveFriendDialogComponent
    ]
})
export class FriendsSharedModule {
}
