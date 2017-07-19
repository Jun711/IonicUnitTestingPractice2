import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

/*
  Generated class for the WishlistService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class WishlistService {
	products: any[] = [];
	
  constructor() {
    console.log('Hello WishlistService Provider');
  }

  addProduct(product: Object): void {
		this.products.push(product);
	}

}
