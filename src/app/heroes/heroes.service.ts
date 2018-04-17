import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';


import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError } from 'rxjs/operators';

import { Recipe } from './hero';
import { HttpErrorHandler, HandleError } from '../http-error-handler.service';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable()
export class HeroesService {
  receipeUrl = 'http://localhost:8080/receipe/';  // URL to web api
  addUrl = 'http://localhost:8080/receipe/save';
  private handleError: HandleError;

  constructor(
    private http: HttpClient,
    httpErrorHandler: HttpErrorHandler) {
    this.handleError = httpErrorHandler.createHandleError('HeroesService');
  }

  /** GET receipe from the server */
  getreceipe (): Observable<Recipe[]> {
    return this.http.get<Recipe[]>(this.receipeUrl)
      .pipe(
        catchError(this.handleError('getHeroes', []))
      );
  }

  //////// Save methods //////////

  /** POST: add a new receipe to the database */
  addReceipe (recipe: Recipe): Observable<Recipe> {
    return this.http.post<Recipe>(this.addUrl, recipe, httpOptions)
      .pipe(
        catchError(this.handleError('addHero', recipe))
      );
  }
}
