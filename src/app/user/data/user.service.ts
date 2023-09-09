import { Injectable, Inject,  } from '@angular/core';
import { BASE_URL } from './constants.injectables';

import { HttpClient } from "@angular/common/http";
import { map } from 'rxjs';

@Injectable(
  // {providedIn: 'root' }
)
export class UserService {

  constructor(private http: HttpClient, @Inject(BASE_URL) private BASE_URL: string) { }

  createUser(data: {}) {
    return this.http.post(`${BASE_URL}/register`, data)
      .pipe(
        map(res => res),
      );
  }
  LoginUser(data: {}) {
    return this.http.post(`${BASE_URL}/login`, data)
      .pipe(
        map(res => res),
      );
  }

}
