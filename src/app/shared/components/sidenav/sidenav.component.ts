import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

export const enum SidenavItemAction {
    SignOut
}

export interface SidenavItem {
    name: string;
    icon: string;
    isLinkItem: boolean;
    link?: string;
    action?: SidenavItemAction;
}

export interface SidenavSection {
    name?: string;
    hasDivider: boolean;
    items: SidenavItem[];
}

export interface SidenavConfig {
    sections: SidenavSection[];
}

@Component({
    selector: 'app-side-nav',
    templateUrl: './sidenav.component.html',
    styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
    @Input() user: any;
    @Input() config: SidenavConfig;

    @Output() itemClicked = new EventEmitter<SidenavItem>();

    constructor() { }

    clickItem(item: SidenavItem) {
        this.itemClicked.emit(item);
    }

    ngOnInit() {
    }
}
