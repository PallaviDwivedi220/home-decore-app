import { Component, OnInit, OnDestroy } from '@angular/core';
import { HomepageDataService } from '../../homepage-data.service';
import { BannerCarousel } from '../../homepage-interfaces';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.scss',
  standalone: false
})

export class BannerComponent implements OnInit, OnDestroy{

  private subscription: Subscription | undefined;
  bannerCarousel: BannerCarousel[] = [];
  loading: boolean = true;
  error: any;

  constructor(private homepagedataService: HomepageDataService){}

  ngOnInit(): void {
    this.subscription = this.homepagedataService.homepageData$.subscribe({
      next: (data) => {
        this.bannerCarousel = data.bannerCarousel;
        this.loading = false;
        this.error = null;
      },
      error: (err) => {
        this.error = err;
        this.loading = false;
        this.bannerCarousel = [];
      },
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}

// Check https://angular.dev/api/common/NgOptimizedImage
