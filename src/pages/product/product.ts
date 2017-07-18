import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { Products } from '../../providers/products'
import { Wishlist } from '../wishlist/wishlist';
import { WishlistService } from '../../providers/wishlist-service';

/**
 * Generated class for the Product page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-product',
  templateUrl: 'product.html',
})
export class Product {

	constructor(public navCtrl: NavController, 
              public productsService: Products,
              public wishlistService: WishlistService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Product');
		this.productsService.load();
  }

  launchWishlist() {
    this.navCtrl.push(Wishlist);
  }

  addToWishlist(product){
    this.wishlistService.addProduct(product);
  }
}
