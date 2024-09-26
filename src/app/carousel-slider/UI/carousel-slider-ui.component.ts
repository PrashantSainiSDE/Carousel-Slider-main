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
  @Input({required: true}) data: string[] = []
  @Input() previousBtn: boolean = true
  @Input() nextBtn: boolean = true

  currentIndex: number = 0
  isDragging: boolean = false;
  startX: number = 0;
  currentTranslate: number = 0;
  prevTranslate: number = 0;

  previousImage() {
    if(this.currentIndex === 0) {
      this.currentIndex = this.data.length - 1;
      return
    }
    this.currentIndex--;
  }

  nextImage() {
    this.currentIndex = (this.currentIndex + 1) % this.data.length;
  }

  startDrag(event: MouseEvent | TouchEvent) {
    event.preventDefault();

    this.isDragging = true;
    this.startX = event instanceof MouseEvent ? event.pageX : event.touches[0].clientX;
    this.prevTranslate = this.currentTranslate;
  }

  dragging(event: MouseEvent | TouchEvent) {
    if (!this.isDragging) return;

    const currentX = event instanceof MouseEvent ? event.pageX : event.touches[0].clientX;
    const deltaX = currentX - this.startX;
    this.currentTranslate = this.prevTranslate + deltaX;
  }

  endDrag(event: MouseEvent | TouchEvent) {
    if (!this.isDragging) return;
    this.isDragging = false;

    const movedBy = this.currentTranslate - this.prevTranslate;
    const threshold = 100;

    if (movedBy < -threshold && this.currentIndex < this.data.length - 1) {
      this.nextImage();
    }

    if (movedBy > threshold && this.currentIndex > 0) {
      this.previousImage();
    }
  }
}
