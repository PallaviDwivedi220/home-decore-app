import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { HomepageDataService } from '../home-page/homepage-data.service';
import { HomepageData } from '../home-page/homepage-interfaces';
import { SubHeaderComponent } from '../sub-header/sub-header.component';
import { Observable, OperatorFunction, Subscription } from 'rxjs';
// import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  imports: [
    RouterLink,
    RouterLinkActive,
    CommonModule,
    SubHeaderComponent
  ],
  standalone: true
})

export class HeaderComponent implements OnInit, OnDestroy{

  private subscription: Subscription | undefined;
  headerLinks: HomepageData['headerLinks'] | null = null
  //searchProducts: SearchProducts[] = [];
  
  constructor(private homepageDataService: HomepageDataService){}

  // search: OperatorFunction<string, readonly string[]> = (text$: Observable<string>) =>
	// 	text$.pipe(
	// 		debounceTime(200),
	// 		distinctUntilChanged(),
	// 		map((term) =>
	// 			term.length < 2 ? [] : this.searchProducts.filter((obj: { name: string; }) => obj.name.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10),
	// 		)
	// 	);

  async ngOnInit(): Promise<void> {
    this.subscription = this.homepageDataService.homepageData$.subscribe({
      next: (data) => {
        this.headerLinks = data.headerLinks;        
      },
      error: (err) => {
        this.headerLinks = [];
      },
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
