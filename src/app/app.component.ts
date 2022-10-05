import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  toggle: string | boolean = false
  array: number[] = [1, 2, 3, 4, 5]
}
