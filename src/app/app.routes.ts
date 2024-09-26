import { Routes } from '@angular/router';
import { CarouselSliderComponent } from './carousel-slider/Feature/carousel-slider.component';

export const routes: Routes = [
    { path:"", redirectTo:"carousel", pathMatch:'full'},
    { path: "carousel", component: CarouselSliderComponent, title: "Carousel"}
];
