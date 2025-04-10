import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { HomepageDataService } from '../../homepage-data.service';
import { FeaturedCategories } from '../../homepage-interfaces';


@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss',
  standalone: false
})

export class CategoriesComponent implements OnInit, OnDestroy{
  private subscription: Subscription | undefined;
  featuredCategories: FeaturedCategories[] = [];

  constructor(private homepageDataService: HomepageDataService){}

  async ngOnInit(): Promise<void> {
    this.subscription = this.homepageDataService.homepageData$.subscribe({
      next: (data) => {
        this.featuredCategories = data.featuredCategories;
      },
      error: (err) => {
        this.featuredCategories = [];
      },
    })
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}
