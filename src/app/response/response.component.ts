import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-response',
  templateUrl: './response.component.html',
  styleUrls: ['./response.component.css']
})
export class ResponseComponent implements OnInit {

  emailAdress = '';
  selectedSubscription = 'Advanced';
  password = '';
  constructor() {

    const formsValue = JSON.parse((localStorage.getItem('formValues') || '{}'));
    this.emailAdress = formsValue.email || '';
    this.password = formsValue.password || '';
    this.selectedSubscription = formsValue.subscription || 'Advanced';
  }

  ngOnInit() {
  }

}
