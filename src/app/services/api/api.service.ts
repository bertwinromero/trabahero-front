import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { HttpResponse } from '@angular/common/http';
import { HttpParams } from '@angular/common/http';

import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { LocalStorageService } from './local-storage.service';
import { environment } from '../../../environments/environment';

@Injectable()
export class ApiService {
  constructor(
    private http: HttpClient,
    private localStorageService: LocalStorageService,
  ) {}

  private setHeaders(): HttpHeaders {
    const headersConfig = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    };

    if (this.localStorageService.getToken()) {
      headersConfig[
        `Authorization`
      ] = `Token ${this.localStorageService.getToken()}`;
    }
    return new HttpHeaders(headersConfig);
  }

  get(
    path: string,
    params: HttpParams = new HttpParams(),
    config?: { url: string },
  ): Observable<any> {
    const url = (config && config.url) || environment.apiUrl;
    return this.http
      .get(`${url}${path}`, {
        headers: this.setHeaders(),
        params,
      })
      .pipe(
        map((res: HttpResponse<any>) => res),
        catchError((err: any) => throwError(err.error)),
      );
  }

  put(path: string, body: object = {}): Observable<any> {
    return this.http
      .put(`${environment.apiUrl}${path}`, body, {
        headers: this.setHeaders(),
      })
      .pipe(
        map((res: HttpResponse<any>) => res),
        catchError((err: any) => throwError(err.error)),
      );
  }

  post(
    path: string,
    body: object = {},
    config?: { url: string },
  ): Observable<any> {
    const url = (config && config.url) || environment.apiUrl;
    return this.http
      .post(`${url}${path}`, body, {
        headers: this.setHeaders(),
      })
      .pipe(
        map((res: HttpResponse<any>) => res),
        catchError((err: any) => throwError(err.error)),
      );
  }

  delete(
    path: string,
    params:
      | HttpParams
      | {
          [param: string]: string | string[];
        } = {},
  ): Observable<any> {
    return this.http
      .delete(`${environment.apiUrl}${path}`, {
        headers: this.setHeaders(),
        params,
      })
      .pipe(
        map((res: HttpResponse<any>) => res),
        catchError((err: any) => throwError(err.error)),
      );
  }
}
