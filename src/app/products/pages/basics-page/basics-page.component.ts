import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
})
export class BasicsPageComponent {
  testText: string = 'tEXto PRueBa';
  customDate = new Date();
}
