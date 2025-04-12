import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { SubHeaderComponent } from '../sub-header/sub-header.component';
import { Subscription } from 'rxjs';
import { AutocompleteComponent } from '../autocomplete/autocomplete.component';
import { CartService } from '../cart.service';

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
  standalone: true
})

export class HeaderComponent implements OnInit, OnDestroy{

  private subscription: Subscription | undefined;

  cartCount: number = 0;
    
  constructor(private cartService: CartService
  ){}

  async ngOnInit(): Promise<void> {

    this.cartService.cartCount$.subscribe((count) => {
      this.cartCount = count; // Update cart count when it changes
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
