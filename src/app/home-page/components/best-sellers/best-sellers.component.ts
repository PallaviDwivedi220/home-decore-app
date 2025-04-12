import { Component, OnInit, OnDestroy } from '@angular/core';
import { HomepageDataService } from '../../homepage-data.service';
import { BestsellerProducts } from '../../homepage-interfaces';
import { Subscription } from 'rxjs';
import { CartService } from '../../../cart.service';

@Component({
  selector: 'app-best-sellers',
  templateUrl: './best-sellers.component.html',
  styleUrl: './best-sellers.component.scss',
  standalone: false,
})
export class BestSellersComponent implements OnInit, OnDestroy {
  private subscription: Subscription | undefined;
  bestSellerProducts: BestsellerProducts[] = [];
  loading: boolean = true;
  error: any;
  addedToCart: { [key: string]: boolean } = {};

  constructor(private homepagedataService: HomepageDataService, private cartService:CartService) {}

  ngOnInit(): void {
    this.subscription = this.homepagedataService.homepageData$.subscribe({
      next: (data) => {
        this.bestSellerProducts = data.bestSellers;
        this.loading = false;
        this.error = null;
      },
      error: (err) => {
        this.error = err;
        this.loading = false;
        this.bestSellerProducts = [];
      },
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  addToCart(product: any) {
    this.cartService.addToCart(product);
    this.addedToCart[product.id] = true;
    setTimeout(() => {
      this.addedToCart[product.id] = false;
    }, 3000);;
  }
  
}