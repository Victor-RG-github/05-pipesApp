import { Component } from '@angular/core';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
})
export class UncommonPageComponent {
  //i18nSelect
  name: String = 'Víctor';
  gender: 'male' | 'female' = 'male';
  invitationMap = {
    male: 'invitarlo',
    female: 'invitarla',
  };

  changeClient(): void {
    if (this.name === 'Víctor') {
      this.name = 'Melissa';
      this.gender = 'female';
    } else {
      this.name = 'Víctor';
      this.gender = 'male';
    }
  }
}
