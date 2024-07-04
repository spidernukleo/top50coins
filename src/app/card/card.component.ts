import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input() image = '';
  @Input() name="";
  @Input() price="";
  @Input() trend="";
}
