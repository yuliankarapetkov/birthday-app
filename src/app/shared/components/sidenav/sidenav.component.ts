import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SidenavConfig, SidenavItem } from '../../models/sidenav-config.model';

@Component({
    selector: 'app-side-nav',
    templateUrl: './sidenav.component.html',
    styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
    @Input() user: any;
    @Input() config: SidenavConfig;

    @Output() itemClicked = new EventEmitter<SidenavItem>();

    // This might be declared in a constants file/folder.
    readonly githubUrl = 'https://github.com/yuliankarapetkov/birthday-app';

    constructor() { }

    clickItem(item: SidenavItem) {
        this.itemClicked.emit(item);
    }

    ngOnInit() {
    }
}
