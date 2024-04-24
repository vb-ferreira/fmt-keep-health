import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { DataViewModule } from 'primeng/dataview';


@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [DataViewModule, CommonModule],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.scss'
})
export class CardsComponent {

  @Input() item = '';
  cards: any[] = [];
  layout: string = 'grid';

  ngOnInit() {
    if (this.item) {
      this.cards = Array.from(this.item);
    }
  }

}
