import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  inputValue = '';


  getInput(event: Event) {
    this.inputValue = (<HTMLInputElement>event.target).value
  }

  getBlur(str: string) {
    this.inputValue = str
  }
}
