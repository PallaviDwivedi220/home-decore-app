import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartCountSource = new BehaviorSubject<number>(0);
  cartCount$ = this.cartCountSource.asObservable();

  private cartItems: any[] = [];

  private cartItemsWithCounts: any[] = [];

  addToCart(item: any): void {
    this.cartItems.push(item);
    this.cartCountSource.next(this.cartItems.length); // Update cart count
  }

  getCartItems(): any[] {
    this.cartItemsWithCounts = this.getCartItemsWithCount(this.cartItems);
    return this.cartItemsWithCounts;
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

  getCartItemQuantity(item: any): number {
    const cartItem = this.cartItems.find((cartItem) => cartItem.id === item.id);
    return cartItem ? cartItem.quantity : 0;
  }

  getTotalPrice(): number {
    return this.cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  }

  clearCart(): void {
    this.cartItems = [];
    this.cartCountSource.next(0); 
  }


  getCartCount(): number {
    return this.cartItems.length;
  }


  getCartItemsWithCount(arr: { id: number; name: string; image: string; price: string;  }[]): any[] {
    const counts = new Map();
    const uniqueObjects = [];
  
    for (const obj of arr) {
      const key = JSON.stringify(obj); 
      counts.set(key, (counts.get(key) || 0) + 1);
    }
  
    for (const obj of arr) {
      const key = JSON.stringify(obj);
      if (counts.get(key) > 0) {
        uniqueObjects.push({
          ...obj,
          count: counts.get(key),
        });
        counts.delete(key); 
      }
    }
  
    return uniqueObjects;
  }
}
