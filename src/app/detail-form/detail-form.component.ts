import { DialogueBoxComponent } from './../dialogue-box/dialogue-box.component';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-detail-form',
  templateUrl: './detail-form.component.html',
  styleUrls: ['./detail-form.component.css']
})
export class DetailFormComponent implements OnInit {

  emailAdress = '';
  selectedSubscription = 'Advanced';
  password = '';
  emailPasswordRequire = false;
  emailRequire = false;
  passwordRequire = false;
  constructor(private dialog: MatDialog) { }

  ngOnInit() {

  }

  submitClick(email, password) {

    if (!this.emailAdress && !this.password) {

      this.emailPasswordRequire = true;
      this.emailRequire = false;
      this.passwordRequire = false;
    } else if (!this.emailAdress) {

      this.emailPasswordRequire = false;
      this.emailRequire = true;
      this.passwordRequire = false;

    } else if (!this.password) {

      this.emailPasswordRequire = false;
      this.emailRequire = false;
      this.passwordRequire = true;
    } else if (email.valid &&  password.valid) {

      const item = JSON.stringify({email : this.emailAdress, subscription : this.selectedSubscription, password :  this.password });
      localStorage.setItem('formValues', item);
      window.location.href = '/#response';

    } else {

      this.emailPasswordRequire = false;
      this.emailRequire = false;
      this.passwordRequire = false;
    }
  }

  emailChange() {

    if (!!this.emailAdress) {

      this.emailPasswordRequire = false;
      this.emailRequire = false;
    }
  }

  passwordChange() {

    if (!!this.password) {

      this.emailPasswordRequire = false;
      this.passwordRequire = false;
    }
  }

  cancleClick() {

    if (!this.emailAdress && !this.password && this.selectedSubscription === 'Advanced') {

      this.emailPasswordRequire = false;
      this.emailRequire = false;
      this.passwordRequire = false;
    } else {

      this.openDialog();

    }
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogueBoxComponent, {
      width: '250px'
    });

    dialogRef.afterClosed().subscribe(result => {

      if (result === 'Yes') {

        this.password = '';
        this.emailAdress = '';
        this.selectedSubscription = 'Advanced';
      }
    });
  }

}
