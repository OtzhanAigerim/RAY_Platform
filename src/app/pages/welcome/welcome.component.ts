import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mc-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log('WelcomeComponent.ngOnInit()');

  }

}
