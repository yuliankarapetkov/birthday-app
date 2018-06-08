import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared/shared.module';

import { components } from './components';

@NgModule({
    imports: [
        SharedModule
    ],
    declarations: [
        // Components
        ...components
    ],
    exports: [
        SharedModule,
        ...components
    ]
})
export class AuthSharedModule {
}
