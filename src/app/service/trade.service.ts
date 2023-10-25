import { Injectable } from '@angular/core';
import {Trade} from "../Models/trade";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class TradeService {
  private apiURL = 'http://localhost:8090/MSTRADE-S';

  constructor(private http: HttpClient) { }
  getAllTrades(): Observable<Trade[]> {
    return this.http.get<Trade[]>(`${this.apiURL}/`);
  }


  addTrade(trade: Trade): Observable<Trade> {
    return this.http.post<Trade>(`${this.apiURL}/`, trade);
  }


  updateTrade(id: number, trade: Trade): Observable<Trade> {
    return this.http.put<Trade>(`${this.apiURL}/${id}`, trade);
  }

  deleteTrade(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiURL}/${id}`);
  }


  getTrade(id: number): Observable<Trade> {
    return this.http.get<Trade>(`${this.apiURL}/${id}`);
  }
}
