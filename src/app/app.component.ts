import { Component, OnInit } from '@angular/core';
import { Top50Service } from './top50.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  coins: any[]=[];
  constructor(private top: Top50Service){}
  search="";

  ngOnInit(): void {
    this.top.top50coins().subscribe((data: any[]) => {this.coins = data;});
  }
  onSearch(value: string){
    this.search=value;
  }

  get filteredCoins(): any[]{
    return this.coins.filter(coin=>coin.name.toLowerCase().includes(this.search.toLowerCase()));
  }

  scrollTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
