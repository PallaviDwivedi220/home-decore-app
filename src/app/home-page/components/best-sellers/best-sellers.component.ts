import { Component, OnInit, OnDestroy } from '@angular/core';
import { HomepageDataService } from '../../homepage-data.service';
import { BestsellerProducts } from '../../homepage-interfaces';
import { Subscription } from 'rxjs';

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

  constructor(private homepagedataService: HomepageDataService) {}

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
}