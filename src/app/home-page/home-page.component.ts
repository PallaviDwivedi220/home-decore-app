import { Component } from '@angular/core';
import { PageContentsModule } from './page-contents.module';

@Component({
  selector: 'app-home-page',
  standalone: true,
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
  imports: [
    PageContentsModule
  ]
})
export class HomePageComponent {

}
