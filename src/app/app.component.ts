import { Component, ViewEncapsulation } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { ReactiveFormsModule } from '@angular/forms';
//import { ModalComponent } from './modal/modal.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    HeaderComponent,
    ReactiveFormsModule,
    //ModalComponent,
    FooterComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true,
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'home-decore-app';
}
