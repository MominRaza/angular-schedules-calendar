import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AngularSchedulesCalendarComponent } from 'angular-schedules-calendar';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AngularSchedulesCalendarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'demo-app';
}
