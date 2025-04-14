import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { QuantityChangeComponent } from '../quantity-change/quantity-change.component';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart-page',
  standalone: true,
  templateUrl: './cart-page.component.html',
  styleUrl: './cart-page.component.scss',
  imports: [
   // QuantityChangeComponent,
    CommonModule
  ]
})
export class CartPageComponent implements OnInit{
  cartItems: any[] = [];
  cartItemsCount: number = 0;
  constructor(private cartService: CartService) {
  }

  ngOnInit() {
    this.cartService.cartCount$.subscribe((count) => {
      console.log('Cart count updated:', count);
      this.cartItemsCount = count;
    });

    this.cartItems = this.cartService.getCartItems();
    
  }

  get totalPrice() {
    return this.cartService.getTotalPrice();
  }

  removeItem(item: any) {
    this.cartService.removeItem(item);
  }

  updateQuantity(item: any, quantity: number) {
    this.cartService.updateQuantity(item, quantity);
  }
  addQuantity(item: any) {
    this.cartService.addQuantity(item);
  }
  removeQuantity(item: any) {
    this.cartService.removeQuantity(item);
  }
  getCartItemQuantity(item: any) {
    return this.cartService.getCartItemQuantity(item);
  }
  getCartItemPrice(item: any) {
    return item.price * this.getCartItemQuantity(item);
  }


}
