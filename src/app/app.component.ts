import { Component } from '@angular/core';
import '../../public/css/styles.css';
import { DashboardComponent } from './components/dashboard/dashboard.component';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  directives: [DashboardComponent]
})

export class AppComponent { }
