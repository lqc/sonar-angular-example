import { Component } from '@angular/core';
import { Foo, Bar } from './helper';
import { help } from './helper2';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sonar-angular-example';

  constructor() {
    help();
  }
}
