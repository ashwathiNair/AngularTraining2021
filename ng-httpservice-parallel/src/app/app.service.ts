import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { State, City, Product } from './app.model';

@Injectable({
    providedIn: 'root'
  })
  export class MultiCallService {
    private url: string;
  
    constructor(private http: HttpClient) {
      this.url = 'https://localhost:44399/api';
    }
  
    getStates(): Observable<State[]> {
      let states: Observable<State[]>;
      states = this.http.get<State[]>(`${this.url}/State`);
      return states;
    }
  
    getCities(): Observable<City[]> {
      let cities: Observable<City[]>;
      cities = this.http.get<City[]>(`${this.url}/City`);
      return cities;
    }
  
    getProducts(): Observable<Product[]> {
      let products: Observable<Product[]>;
      products = this.http.get<Product[]>(`${this.url}/Product`);
      return products;
    }
  }