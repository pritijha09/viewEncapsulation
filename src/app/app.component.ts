import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ],
  encapsulation: ViewEncapsulation.Emulated
})
export class AppComponent  {
  name = 'Angular';
   title = 'parent component';
}
