import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { coinCreateDTO, coinDTO } from './coin';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoinService {

  private apiURL = environment.apiURL+"coin";
  constructor(private http: HttpClient) {}

  public getAll(): Observable<coinDTO[]> {
    return this.http.get<coinDTO[]>(this.apiURL);
  }
  public create(coin:coinCreateDTO){
    return this.http.post<coinCreateDTO[]>(this.apiURL,coin);
    
  }
}
