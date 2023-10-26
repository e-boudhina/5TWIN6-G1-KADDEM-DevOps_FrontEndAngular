import { Injectable } from '@angular/core';
import {Trade} from "../Models/trade";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Item} from "../Models/item";
import {User} from "../Models/user";


@Injectable({
  providedIn: 'root'
})
export class TradeService {
  private apiURL = 'http://localhost:8090/MSTRADE-S';
  private baseUrl = 'http://localhost:8086';

  constructor(private http: HttpClient) { }
  getAllTrades(): Observable<Trade[]> {
    return this.http.get<Trade[]>(`${this.apiURL}/`);
  }
  getAllItems(): Observable<Item[]> {
    return this.http.get<Item[]>(`${this.apiURL}/items`);
  }
  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiURL}/users`);
  }

  addTrade(trade: Trade): Observable<Trade> {
    console.log(trade);
    return this.http.post<Trade>(`${this.baseUrl}/`, trade);

  }


  updateTrade(id: number, trade: Trade): Observable<Trade> {
    return this.http.put<Trade>(`${this.baseUrl}/${id}`, trade);
  }

  deleteTrade(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }


  getTrade(id: number): Observable<Trade> {
    return this.http.get<Trade>(`${this.baseUrl}/${id}`);
  }
}
