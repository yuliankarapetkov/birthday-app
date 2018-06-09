import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs/index';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
    @Output() sideNavToggled = new EventEmitter<void>();
    @Output() searchInputValueChanged = new EventEmitter<string>();

    private searchInputSubscription: Subscription;

    searchInput = new FormControl();

    constructor() { }

    toggleSideNav() {
        this.sideNavToggled.emit();
    }

    ngOnInit() {
        this.searchInputSubscription = this.searchInput
            .valueChanges
            .subscribe(value => this.searchInputValueChanged.emit(value));
    }

    ngOnDestroy() {
        this.searchInputSubscription.unsubscribe();
    }
}
