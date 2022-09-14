import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public isLogged = false;
  constructor() {
    setTimeout(() => {
      this.isLogged = true;
  }, 3000);
  }


}
