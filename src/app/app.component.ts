import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public appLogo = '/assets/img/logo.png'; // In case we want to get the logo from a config

  constructor() { }

}
