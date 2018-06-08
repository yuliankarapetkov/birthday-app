import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { SharedMaterialModule } from './shared-material.module';

const modules = [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    SharedMaterialModule
];

@NgModule({
    imports: [
        ...modules
    ],
    exports: [
        ...modules
    ],
    declarations: []
})
export class SharedModule { }
