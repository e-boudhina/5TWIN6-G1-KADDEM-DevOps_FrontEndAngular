import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Item } from '../Models/item';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  private itemAdminUrl: string;

  constructor(private http: HttpClient) {
    this.itemAdminUrl = environment.baseUrl + "Item/";
  }

  public getAllItems(): Observable<Item[]> {
    return this.http.get<Item[]>(this.itemAdminUrl + "All");
  }

  public addItem(item: Item): Observable<Item> {
    return this.http.post<Item>(this.itemAdminUrl + "createitem", item);
  }

  public updateItem(id: number, item: Item): Observable<Item> {
    return this.http.put<Item>(`${this.itemAdminUrl}updateItem/${id}`, item);
  }

  public getItemById(id: number): Observable<Item> {
    return this.http.get<Item>(this.itemAdminUrl + `items/${id}`);
  }

  public deleteItem(id: number): Observable<Object> {
    return this.http.delete(`${this.itemAdminUrl}${id}`);
  }
}
