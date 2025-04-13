import { Component, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { SubHeaderComponent } from '../sub-header/sub-header.component';
import { Subscription } from 'rxjs';
import { AutocompleteComponent } from '../autocomplete/autocomplete.component';
import { CartService } from '../cart.service';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  imports: [
    RouterLink,
    RouterLinkActive,
    CommonModule,
    SubHeaderComponent,
    AutocompleteComponent],
  standalone: true,
  encapsulation: ViewEncapsulation.None
})

export class HeaderComponent implements OnInit, OnDestroy{

  private subscription: Subscription | undefined;
  cartCount: number = 0;
  showSubheader: boolean = false;

  constructor(private cartService: CartService,
              private activatedRoute: ActivatedRoute,
              private router: Router){}

  async ngOnInit(): Promise<void> {
    this.cartService.cartCount$.subscribe((count) => {
      this.cartCount = count; // Update cart count when it changes
    });

    this.router.events
    .pipe(
      filter((event) => event instanceof NavigationEnd), // Listen for navigation end events
      map(() => this.activatedRoute), // Start with the root route
      map((route) => {
        while (route.firstChild) {
          route = route.firstChild; // Navigate to the deepest child route
        }
        return route;
      }),
      map((route) => route.snapshot.data) // Access the data property
    )
    .subscribe((data) => {
      console.log('Route Data:', data);
      this.showSubheader = data['hideSubheader'] !== 'true'; // Example usage
    });
    
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
