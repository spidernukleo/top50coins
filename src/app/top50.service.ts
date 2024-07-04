import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class Top50Service {
  private url = 'https://api.coingecko.com/api/v3/coins/markets'
  constructor(private http: HttpClient) { }

  top50coins(): Observable<any[]>{
    const headers = new HttpHeaders({
      'Accept': 'application/json',
      'x-cg-demo-api-key': 'CG-WCvuE1kDHHPWXJdZB6w7uNur	'
    });
    const params = {
      vs_currency: 'usd',
      order: 'market_cap_desc',
      per_page: '56',
      page: '1'
    };

    return this.http.get<any[]>(this.url, { headers, params }).pipe(
      map(coins => {
        return coins.sort((a, b) => b.current_price - a.current_price).slice(0, 50).map(coin => {
          const trend = coin.market_cap_change_percentage_24h > 0 ? 'green' : 'red';
          return {...coin,trend};
        });
      })
    );
    
  }
}
