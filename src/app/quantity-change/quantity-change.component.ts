import { Component, ElementRef,ViewChild } from '@angular/core';

@Component({
  selector: 'app-quantity-change',
  standalone: true,
  templateUrl: './quantity-change.component.html',
  styleUrl: './quantity-change.component.scss'
})
export class QuantityChangeComponent {
  currentValue: number = 0;

  @ViewChild('numberInput') numberInput: ElementRef | undefined;

  increaseValue() {
    this.currentValue = isNaN(this.currentValue) ? 0 : this.currentValue;
    this.currentValue++;
    if(this.numberInput && this.numberInput.nativeElement){
      this.numberInput.nativeElement.value = this.currentValue;
    }
  }

  decreaseValue() {
    this.currentValue = isNaN(this.currentValue) ? 0 : this.currentValue;
    this.currentValue = this.currentValue < 1 ? 1 : this.currentValue;
    this.currentValue--;
     if(this.numberInput && this.numberInput.nativeElement){
      this.numberInput.nativeElement.value = this.currentValue;
    }
  }
}
