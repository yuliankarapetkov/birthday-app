import { NgModule } from '@angular/core';
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
        MatCardModule,
        MatInputModule,
        MatButtonModule,
        MatIconModule,
        MatDatepickerModule,
        MatNativeDateModule
    ],
    exports: [
        MatCardModule,
        MatInputModule,
        MatButtonModule,
        MatIconModule,
        MatDatepickerModule,
        MatNativeDateModule
    ],
    declarations: []
})
export class SharedMaterialModule { }
