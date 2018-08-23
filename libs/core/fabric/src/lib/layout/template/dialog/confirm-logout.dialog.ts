import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

export interface DialogData {
  animal: string;
  name: string;
}
@Component({
  styleUrls: ['confirm-logout.dialog.css'],
  selector: 'fabric-overview-example-dialog',
  templateUrl: 'confirm-logout.dialog.html'
})
export class ConfirmLogoutDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<ConfirmLogoutDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}

  onNoClick(): void {
    this.dialogRef.beforeClose();
    this.dialogRef.close({
      action: 'stay logged in'
    });
  }
  onYesClick() {
    this.dialogRef.beforeClose();
    this.dialogRef.close({
      action: 'logout'
    });
  }
}
