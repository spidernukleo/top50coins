import { Component, Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrl: './searchbar.component.scss'
})
export class SearchbarComponent {
  value = '';
  @Output() search: EventEmitter<string> = new EventEmitter<string>();
  onInput(event: any){
    this.search.emit(this.value);
  }
  clear(){
    this.value="";
    this.search.emit(this.value);
  }
}
