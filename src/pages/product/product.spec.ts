import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { IonicModule, NavController } from 'ionic-angular';
import { MyApp } from '../../app/app.component';
import { Product } from './product';
import { Wishlist } from '../wishlist/wishlist';
import { Products } from '../../providers/products';
import { ProductsMock, NavMock } from '../../mocks';
 
let comp: Product;
let fixture: ComponentFixture<Product>;
let de: DebugElement;
let el: HTMLElement;
 
describe('Page: Product Page', () => {
 
    beforeEach(async(() => {
 
        TestBed.configureTestingModule({
 
            declarations: [MyApp, Product],
 
            providers: [
                {
                    provide: NavController,
                    useClass: NavMock
                },
                {
                    provide: Products,
                    useClass: ProductsMock
                }
            ],
 
            imports: [
                IonicModule.forRoot(MyApp)
            ]
 
        }).compileComponents();
 
    }));
 
    beforeEach(() => {
 
        fixture = TestBed.createComponent(Product);
        comp    = fixture.componentInstance;
 
    });
 
    afterEach(() => {
        fixture.destroy();
        comp = null;
        de = null;
        el = null;
    });
 
    it('is created', () => {
 
        expect(fixture).toBeTruthy();
        expect(comp).toBeTruthy();
 
    });
 
    it('displays products containing a title, description, and price in the list', () => {
 
        let productsService = fixture.debugElement.injector.get(Products);
        let firstProduct = productsService.products[0];
 
        fixture.detectChanges();
 
        de = fixture.debugElement.query(By.css('ion-list ion-item'));
        el = de.nativeElement; 
 
        expect(el.textContent).toContain(firstProduct.title);
        expect(el.textContent).toContain(firstProduct.description);
        expect(el.textContent).toContain(firstProduct.price);
 
    });
     
    it('should be able to launch wishlist page', () => {
    
      let navCtrl = fixture.debugElement.injector.get(NavController);
      spyOn(navCtrl, 'push');

      de = fixture.debugElement.query(By.css('ion-buttons button'));

      de.triggerEventHandler('click', null);

      expect(navCtrl.push).toHaveBeenCalledWith(Wishlist);

    });
});