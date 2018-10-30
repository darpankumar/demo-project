import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-dialogue-box',
  templateUrl: './dialogue-box.component.html',
  styleUrls: []
})
export class DialogueBoxComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DialogueBoxComponent>) {}

  ngOnInit() {
  }
  onNoClick() {

    this.dialogRef.close('No');
  }
  onYesClick() {

    this.dialogRef.close('Yes');
  }
}
