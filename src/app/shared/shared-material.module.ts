import { NgModule } from '@angular/core';
import {
    MatBadgeModule,
    MatButtonModule,
    MatCardModule,
    MatDatepickerModule, MatDialogModule,
    MatIconModule,
    MatInputModule, MatListModule,
    MatNativeDateModule, MatSidenavModule, MatToolbarModule, MatTooltipModule
} from '@angular/material';

const modules = [
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatBadgeModule,
    MatSidenavModule,
    MatToolbarModule,
    MatTooltipModule,
    MatDialogModule,
    MatListModule
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
export class SharedMaterialModule { }
