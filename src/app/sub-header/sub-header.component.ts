import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { HomepageDataService } from '../home-page/homepage-data.service';
import { HomepageData } from '../home-page/homepage-interfaces';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-sub-header',
  standalone: true,
  templateUrl: './sub-header.component.html',
  styleUrl: './sub-header.component.scss',
  imports: [RouterLink, RouterLinkActive, CommonModule]
})
export class SubHeaderComponent implements OnInit, OnDestroy{
  private subscription: Subscription | undefined;
  subHeaderLinks: HomepageData['subHeaderLinks'] | null = null;

  constructor(private homepageDataService: HomepageDataService){}

  async ngOnInit(): Promise<void> {
    this.subscription = this.homepageDataService.homepageData$.subscribe({
      next: (data) => {
        this.subHeaderLinks = data.subHeaderLinks; 
      },
      error: (err) => {
        this.subHeaderLinks = []; 
      },
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }


}
