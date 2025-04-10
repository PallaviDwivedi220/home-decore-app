import { Injectable } from '@angular/core';
import {  
         HomepageData } from './homepage-interfaces';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class HomepageDataService {
  private url = 'http://localhost:3000/data';
  
  // private headerLinksSubject = new Subject<HeaderLinks[]>();
  // headerLinks$ = this.headerLinksSubject.asObservable();

  // private bestSellersSubject = new Subject<BestsellerProducts[]>();
  // bestSellers$ = this.bestSellersSubject.asObservable();

  // private bannerCarouselSubject = new Subject<BannerCarousel[]>();
  // bannerCarousel$ = this.bannerCarouselSubject.asObservable();

  // private featuredCategoriesSubject = new Subject<FeaturedCategories[]>();
  // featuredCategories$ = this.featuredCategoriesSubject.asObservable();

  // private featuresSubject = new Subject<Features[]>();
  // featuresSubject$ = this.featuresSubject.asObservable();

   private homepageDataSubject = new Subject<HomepageData>(); // Single Subject
  homepageData$ = this.homepageDataSubject.asObservable();

  constructor() {
    this.fetchData();
  }

  private async fetchData(): Promise<void> {
    const response = await fetch(this.url);
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json() as HomepageData;

    // this.headerLinksSubject.next(data.headerLinks);
    // this.bestSellersSubject.next(data.bestSellers);
    // this.bannerCarouselSubject.next(data.bannerCarousel);
    // this.featuredCategoriesSubject.next(data.featuredCategories);
    // this.featuresSubject.next(data.features);

    this.homepageDataSubject.next(data);
}

  get apiUrl(): string {
    return this.url;
  }
}