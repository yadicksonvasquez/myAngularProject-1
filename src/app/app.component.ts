import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {TestComponent} from './test/test.component.js';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TestComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'myAngularProject-1';
}
