import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { HttpService } from '../services/app.http.service';
import { switchMap } from "rxjs/operators";
import { ProductActions } from '../actions';
import { of } from 'rxjs';
import { Product } from '../models/app.product.model';