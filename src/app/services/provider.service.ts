import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ASC } from '../constants/queries';
import { createPageHttp } from '../utils/request';

import { ProviderDetails, Provider } from '../interfaces/provider.interface';

import { ListResponse, Paginator } from '../interfaces/paginator.interface';

@Injectable({
  providedIn: 'root'
})
export class ProviderService {
  constructor(private http: HttpClient) { }

  createProvider(data: any, cityId: string): Observable<any> {
    return this.http.post(
       `http://localhost:8081/api/provider?city_id=${cityId}`,
       data
     );
  }

  getProviders(
    page:0, 
    order = 'id', orderBy = ASC, limit = 10): 
    Observable<any> {
    const params = new HttpParams()
    .set('page', page.toString())
    .set('order_by', orderBy.toString())
    .set('order', order.toString())
    .set('limit', limit.toString());
    return this.http
      .get<ListResponse>(`http://localhost:8081/api/provider`, { params })
      .pipe(
        map(({ content, ...paginator }) => ({
          data: content,
          ...paginator,
        }))
      );
  }

   toggleProvider(id:any) {
    /*return this.http.put(
      `${environment.BACK_ENDPOINT}/provider/active/${id}`,
      {}
    );*/
  } 

  getProviderProfile(id: string): Observable<ProviderDetails> {
   return this.http.get<ProviderDetails>(
      `http://localhost:8081/api/provider/${id}`
    );
  }

   putProviderProfile(data:any, cityId:any) {
    return this.http.put(
      `http://localhost:8081/api/provider?city_id=${cityId}`,
      data
    );
  }
}
