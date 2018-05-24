import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedMaterialModule } from './shared-material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        RouterModule,
        SharedMaterialModule
    ],
    exports: [
        CommonModule,
        ReactiveFormsModule,
        RouterModule,
        SharedMaterialModule
    ],
    declarations: []
})
export class SharedModule { }
