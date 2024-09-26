import { Component, inject } from '@angular/core';
import { CarouselSliderUiComponent } from "../UI/carousel-slider-ui.component";
import { ApiService } from '../../shared/api-service.service';
import { AsyncPipe, NgIf } from '@angular/common';
import { map } from 'rxjs/operators';

@Component({
    selector: 'app-carousel-slider',
    standalone: true,
    templateUrl: './carousel-slider.component.html',
    styleUrl: './carousel-slider.component.scss',
    imports: [CarouselSliderUiComponent, NgIf, AsyncPipe]
})
export class CarouselSliderComponent{

  api = inject(ApiService);
  
  data$ = this.api.getAllImages().pipe(map((item) => {
    return item.map((x) => x.download_url)
  }))
  
}
