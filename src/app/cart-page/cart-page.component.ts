import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuantityChangeComponent } from '../quantity-change/quantity-change.component';

@Component({
  selector: 'app-cart-page',
  standalone: true,
  templateUrl: './cart-page.component.html',
  styleUrl: './cart-page.component.scss',
  imports: [
    QuantityChangeComponent
  ]
})
export class CartPageComponent {

}
