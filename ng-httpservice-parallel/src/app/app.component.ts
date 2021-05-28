import { Component, OnInit } from '@angular/core';
import { MultiCallService } from './app.service';
import { State, Product, City } from './app.model';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  states: Array<any>;
  cities: Array<any>;
  products: Array<any>;
  constructor(private serv:MultiCallService){
    this.states = new Array(),
    this.cities = new Array(),
    this.products = new Array()
  }

  ngOnInit():void{
    const statePromise=this.serv.getStates();
    const cityPromise = this.serv.getCities();
    const prodPromise = this.serv.getProducts();

    forkJoin([statePromise, cityPromise, prodPromise]).subscribe(response =>{
      this.states = response[0];
      this.cities = response[1],
      this.products = response[2];

    });

  }
}