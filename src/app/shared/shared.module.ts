import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { SharedMaterialModule } from './shared-material.module';

import { components } from './components';

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
    declarations: [
        ...components
    ],
    exports: [
        ...modules,
        ...components
    ]
})
export class SharedModule { }
