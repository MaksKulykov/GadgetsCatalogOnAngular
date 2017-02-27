import { Component } from '@angular/core';

export class Gadget {
  gadgetName: string;
  gadgetPrice: string;
  gadgetPopular: boolean;
  gadgetDate: string;
}

@Component({
  selector: 'my-app',
  template: `
          <h1>{{title}}</h1>
          <div class="row">
            <div class="col-lg-6">
              <div class="thumbnail">
                <div class="caption">
                  <p><b>Название    :</b> {{gadget.gadgetName}} </p>
                  <p><b>Цена        :</b> {{gadget.gadgetPrice}}</p>
                  <p><b>Популярность:</b> {{gadget.gadgetPopular}}</p>
                  <p><b>Дата        :</b> {{gadget.gadgetDate |  date:"dd/MM/yyyy"}}</p>
                </div>
              </div>
            </div>
            <div class="col-lg-2">
              <div class="btn btn-default" data-class="btnEdit">Редактировать</div>
            </div>
           </div>`
})

export class AppComponent {
  title = 'Gadgets Catalog';
  gadget: Gadget = {
    gadgetName: 'HTC',
    gadgetPrice: '2222',
    gadgetPopular: true,
    gadgetDate: '1467440203727'
  };
}
