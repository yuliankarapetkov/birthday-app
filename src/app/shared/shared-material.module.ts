import { NgModule } from '@angular/core';
import {
    MatBadgeModule,
    MatButtonModule,
    MatCardModule,
    MatDatepickerModule,
    MatIconModule,
    MatInputModule,
    MatNativeDateModule, MatSidenavModule, MatToolbarModule
} from '@angular/material';

@NgModule({
    imports: [
        MatCardModule,
        MatInputModule,
        MatButtonModule,
        MatIconModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatBadgeModule,
        MatSidenavModule,
        MatToolbarModule
    ],
    exports: [
        MatCardModule,
        MatInputModule,
        MatButtonModule,
        MatIconModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatBadgeModule,
        MatSidenavModule,
        MatToolbarModule
    ],
    declarations: []
})
export class SharedMaterialModule { }
