import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { Product } from '../pages/product/product';
import { Wishlist } from '../pages/wishlist/wishlist';
import { WishlistService } from '../providers/wishlist-service';
import { Products } from '../providers/products';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    Product,
    Wishlist
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    Product,
    Wishlist
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Products,
    WishlistService
  ]
})
export class AppModule {}
