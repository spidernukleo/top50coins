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

  ngOnInit(): void {
    this.top.top50coins().subscribe((data: any[]) => {this.coins = data;});
  }
}
