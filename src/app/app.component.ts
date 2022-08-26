import { Component } from '@angular/core';
import * as data from '../assets/config.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'example-for-docker-deployment';
  config = [data]
}
