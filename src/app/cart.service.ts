import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartCountSource = new BehaviorSubject<number>(0);
  cartCount$ = this.cartCountSource.asObservable();

  private cartItems: any[] = [];

  addToCart(item: any): void {
    this.cartItems.push(item);
    this.cartCountSource.next(this.cartItems.length); // Update cart count
  }

  getCartItems(): any[] {
    return this.cartItems;
  }

  removeItem(item: any): void {
    const index = this.cartItems.indexOf(item);
    if (index > -1) {
      this.cartItems.splice(index, 1);
      this.cartCountSource.next(this.cartItems.length); // Update cart count
    }
  }

  updateQuantity(item: any, quantity: number): void {
    const index = this.cartItems.indexOf(item);
    if (index > -1) {
      this.cartItems[index].quantity = quantity;
    }
  }
  addQuantity(item: any): void {
    const cartItem = this.cartItems.find((cartItem) => cartItem.id === item.id);
    if (cartItem) {
      cartItem.quantity++;
    }
  }

  removeQuantity(item: any): void {
    const cartItem = this.cartItems.find((cartItem) => cartItem.id === item.id);
    if (cartItem && cartItem.quantity > 1) {
      cartItem.quantity--;
    } else {
      this.removeItem(item);
    }
  }

  getCartItemQuantity(item: any): number {
    const cartItem = this.cartItems.find((cartItem) => cartItem.id === item.id);
    return cartItem ? cartItem.quantity : 0;
  }

  getTotalPrice(): number {
    return this.cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  }

  clearCart(): void {
    this.cartItems = [];
    this.cartCountSource.next(0); // Reset cart count
  }


  getCartCount(): number {
    return this.cartItems.length;
  }
}