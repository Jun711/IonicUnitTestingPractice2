import { TestBed, inject, async } from '@angular/core/testing';
import { WishlistService } from './wishlist-service';

describe('Provider: Wishlist Service', () => {
	let testProduct;
 
  beforeEach(async(() => {

      TestBed.configureTestingModule({

          declarations: [

          ],

          providers: [
              WishlistService
          ],

          imports: [

          ]

      }).compileComponents();

  }));
 
    beforeEach(() => {
 
        testProduct = {
            title: 'Test Product',
            description: 'Test Description',
            price: '39.99'
        };
 
    });
 
    it('should be able to add a single product to product array', inject([WishlistService], (wishlistService) => {
 
        let arrayLengthBefore = wishlistService.products.length;
        wishlistService.addProduct(testProduct);
 
        expect(wishlistService.products).toContain(testProduct);
        expect(wishlistService.products.length).toEqual(arrayLengthBefore + 1);
 
    }));
 
});