import { NgModule } from '@angular/core';
import {
    MatBadgeModule,
    MatButtonModule,
    MatCardModule,
    MatDatepickerModule,
    MatIconModule,
    MatInputModule,
    MatNativeDateModule, MatSidenavModule, MatToolbarModule, MatTooltipModule
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
        MatToolbarModule,
        MatTooltipModule
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
        MatToolbarModule,
        MatTooltipModule
    ],
    declarations: []
})
export class SharedMaterialModule { }
