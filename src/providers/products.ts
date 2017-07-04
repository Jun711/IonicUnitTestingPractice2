import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the Products provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class Products {

	products: any;

  constructor(public http: Http) {
		// this.products = [
		// 	{ title: 'Cool shoes', description: 'Isn\'t it obvious?', price: '39.99' },
		// 	{ title: 'Broken shoes', description: 'You should probably get the other ones', price: '89.99' },
		// 	{ title: 'Socks', description: 'The essential footwear companion', price: '2.99' }
		// ];
  }

	load() {

		this.http.get('assets/data/products.json').map(res => res.json()).subscribe(data => {
			this.products = data.products;
		});

	}

}
