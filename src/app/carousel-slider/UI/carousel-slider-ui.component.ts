import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-carousel-slider-ui',
  standalone: true,
  imports: [NgClass],
  templateUrl: './carousel-slider-ui.component.html',
  styleUrl: './carousel-slider-ui.component.scss'
})
export class CarouselSliderUiComponent {
  // @Input({required: true, alias: "data"}) data$!: Observable<string[]>
  @Input({required: true}) data: string[] = []
  @Input() previousBtn: boolean = true
  @Input() nextBtn: boolean = true

  currentIndex: number = 0

  previousImage() {
    if(this.currentIndex === 0) {
      this.currentIndex = this.data.length - 1;
      return
    }
    this.currentIndex--;
    
  }
  
  nextImage() {
    this.currentIndex = (this.currentIndex + 1) % this.data.length; 
    
    // if(this.currentIndex === this.data.length - 1) {
    //   this.currentIndex = 0;
    //   return
    // }
    // this.currentIndex++;
  }


}
