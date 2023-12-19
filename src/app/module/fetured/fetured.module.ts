import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeturedComponent } from './components/fetured.component';
import { HomeComponent } from './components/home/home.component';
import { MainCarouselComponent } from 'src/app/module/fetured/components/home/main-carousel/main-carousel.component';
import { ProductSliderComponent } from './components/home/product-slider/product-slider.component';
import { HomeProductCardComponent } from './components/home/home-product-card/home-product-card.component';
import { ProductsComponent } from './components/products/products.component';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [
    FeturedComponent,
    HomeComponent,
    MainCarouselComponent,
    ProductSliderComponent,
    HomeProductCardComponent,
    ProductsComponent,
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatMenuModule,
    MatDividerModule,
    MatIconModule
  ],
  exports:[
    FeturedComponent,
    HomeComponent,
    ProductsComponent
  ]
})
export class FeturedModule { }
