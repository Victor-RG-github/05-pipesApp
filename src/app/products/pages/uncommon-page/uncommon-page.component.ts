import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styles: `
  .p-fieldset{
    height : 100%;
  }
  `,
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

  //i18nPlural
  clients = ['Fernando', 'Carlos', 'Juan', 'Miguel', 'Ana', 'Luisa', 'Carmen'];
  clientsMap = {
    '=0': 'no tenemos ningún cliente esperando.',
    '=1': 'tenemos 1 cliente esperando.',
    other: 'tenemos # clientes esperando.',
  };

  deleteClient(): void {
    this.clients.shift();
  }

  //KeyValue Pipe
  person = {
    name: 'Víctor',
    lastname: 'Rodríguez García',
    age: 45,
    address: 'Anxo Senra Fernandez, 15',
  };

  //Async Pipe
  myObservableTimer = interval(1000);

  promiseValue = new Promise<string>((resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos info en la promesa.');
    }, 4000);
  });
}
