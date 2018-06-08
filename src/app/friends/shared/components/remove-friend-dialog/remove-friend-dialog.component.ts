import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
    selector: 'friends-remove-friend-dialog',
    templateUrl: './remove-friend-dialog.component.html',
    styleUrls: ['./remove-friend-dialog.component.scss']
})
export class RemoveFriendDialogComponent implements OnInit {
    constructor(
        public dialogRef: MatDialogRef<RemoveFriendDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any
    ) {}

    clickNo(): void {
        this.dialogRef.close();
    }

    ngOnInit() {
    }
}
