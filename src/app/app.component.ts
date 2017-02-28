import { Component } from '@angular/core';

export class Gadget {
  gadgetName: string;
  gadgetPrice: number;
  gadgetPopular: boolean;
  gadgetDate: number;
}

@Component({
  selector: 'my-app',
  template: `
          <h1>{{title}}</h1>
          <div class="col-lg-8">
            <div class="row"  *ngFor="let gadget of gadgets">
              <div class="col-lg-6">
                <div class="thumbnail">
                  <div class="caption">
                    <div><label>Название:</label>     {{gadget.gadgetName}} </div>
                    <div><label>Цена:</label>         {{gadget.gadgetPrice}} грн</div>
                    <div><label>Популярность:</label> {{gadget.gadgetPopular | modifyPopular}}</div>
                    <div><label>Дата:</label>         {{gadget.gadgetDate | modifyDate | date:"dd/MM/yyyy"}}</div>
                  </div>
                </div>
              </div>
              <div class="col-lg-2">
                <div class="btn btn-default" data-class="btnEdit">Редактировать</div>
              </div>
             </div>
           </div>
           <div class="col-lg-4">
           
           </div>
          `
})

export class AppComponent {
  title = 'Gadgets Catalog';
  gadgets = GADGETS;
  gadget: Gadget = {
    gadgetName: 'HTC',
    gadgetPrice: 2222,
    gadgetPopular: true,
    gadgetDate: 1467440203727
  };
}

const GADGETS: Gadget[] = [
  {
    "gadgetName": "HTC",
    "gadgetPrice": 12458,
    "gadgetPopular": true,
    "gadgetDate": 1467440203
  },
  {
    "gadgetName": "Sony",
    "gadgetPrice": 12458,
    "gadgetPopular": true,
    "gadgetDate": 1467440207
  },
  {
    "gadgetName": "HTC",
    "gadgetPrice": 12458,
    "gadgetPopular": true,
    "gadgetDate": 146744727
  },
  {
    "gadgetName": "HTC",
    "gadgetPrice": 12458,
    "gadgetPopular": true,
    "gadgetDate": 1467440227
  },
  {
    "gadgetName": "Sony",
    "gadgetPrice": 32458,
    "gadgetPopular": false,
    "gadgetDate": 14674402037
  },
  {
    "gadgetName": "Sony",
    "gadgetPrice": 32458,
    "gadgetPopular": false,
    "gadgetDate": 146744020327
  },
  {
    "gadgetName": "Sony",
    "gadgetPrice": 12458,
    "gadgetPopular": false,
    "gadgetDate": 1467440207
  },
  {
    "gadgetName": "HTC",
    "gadgetPrice": 12458,
    "gadgetPopular": true,
    "gadgetDate": 14644003727
  },
  {
    "gadgetName": "HTC",
    "gadgetPrice": 12458,
    "gadgetPopular": true,
    "gadgetDate": 146744203727
  },
  {
    "gadgetName": "HTC",
    "gadgetPrice": 12458,
    "gadgetPopular": true,
    "gadgetDate": 1467440203727
  },
  {
    "gadgetName": "HTC",
    "gadgetPrice": 12458,
    "gadgetPopular": true,
    "gadgetDate": 1467440203727
  }
];
