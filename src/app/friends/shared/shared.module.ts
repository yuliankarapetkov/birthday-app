import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared/shared.module';
import { components } from './components';
import { RemoveFriendDialogComponent } from './components/remove-friend-dialog/remove-friend-dialog.component';

@NgModule({
    imports: [
        SharedModule
    ],
    declarations: [
        ...components
    ],
    exports: [
        SharedModule,
        ...components
    ],
    entryComponents: [
        RemoveFriendDialogComponent
    ]
})
export class FriendsSharedModule {
}
