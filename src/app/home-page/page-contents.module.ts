import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BannerComponent } from '../home-page/components/banner/banner.component';
import { DiscountsComponent } from '../home-page/components/discounts/discounts.component';
import { CategoriesComponent } from '../home-page/components/categories/categories.component';
import { FeaturesComponent } from '../home-page/components/features/features.component';
import { BestSellersComponent } from '../home-page/components/best-sellers/best-sellers.component';
import { NewArrivalsComponent } from '../home-page/components/new-arrivals/new-arrivals.component';
import { NgOptimizedImage } from '@angular/common';
import { PartnersComponent } from './components/partners/partners.component';

@NgModule({
  declarations: [
    BannerComponent, 
    DiscountsComponent, 
    CategoriesComponent, 
    FeaturesComponent, 
    BestSellersComponent,
    NewArrivalsComponent,
    PartnersComponent
    ],
  imports: [
    CommonModule,
    NgOptimizedImage,
],
  exports : [
    BannerComponent, 
    DiscountsComponent, 
    CategoriesComponent, 
    FeaturesComponent, 
    BestSellersComponent,
    NewArrivalsComponent,
    PartnersComponent
  ]
})
export class PageContentsModule { }
