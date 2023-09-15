import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';
import { BASE_URL } from 'src/app/data/constants.injectables';

@Injectable()
export class BrandService {

  constructor(
    private http: HttpClient,
    @Inject(BASE_URL) private baseUrl: string
  ) { }

  private listPush = new BehaviorSubject<any>('');
  listPush$ = this.listPush.asObservable();

  add(data: {}) {
    let headers: HttpHeaders = new HttpHeaders({
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    });

    return this.http.post(`${this.baseUrl}/brand`, data, { headers })
      .pipe(map(res => res));
  }

  all() {
    return this.http.get(`${this.baseUrl}/brand`)
      .pipe(map(res => res))
  }

  pushList(){
    this.listPush.next('');
  }

  delete(id:any){
    let headers: HttpHeaders = new HttpHeaders({
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    });

    return this.http.delete(`${this.baseUrl}/brand/${id}`, 
      {headers}
      ).pipe(map(res => res));
  }
}
