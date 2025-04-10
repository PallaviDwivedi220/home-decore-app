import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageDataService } from '../../homepage-data.service';
import { Features } from '../../homepage-interfaces';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrl: './features.component.scss',
  standalone: false
})
export class FeaturesComponent implements OnInit, OnDestroy{

  private subscription: Subscription | undefined;
  features:Features[] =[];

  constructor(private homepageDataService: HomepageDataService){}

  async ngOnInit(): Promise<void> {
    this.subscription = this.homepageDataService.homepageData$.subscribe({
      next: (data) => {
        this.features = data.features;
      },
      error : (err) =>{
        this.features = [];
      }
    })
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

}
