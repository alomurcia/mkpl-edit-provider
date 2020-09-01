import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ASC } from '../constants/queries';
import { createPageHttp } from '../utils/request';

//import { environment } from '../environments/environment';
import { ProviderDetails, Provider } from '../interfaces/provider.interface';

import { ListResponse, Paginator } from '../interfaces/paginator.interface';

@Injectable({
  providedIn: 'root'
})
export class ProviderService {
  constructor(private http: HttpClient) { }

  createProvider(data: any, cityId: string): Observable<any> {
   /* return this.http.post(
      `${environment.BACK_ENDPOINT}/provider?city_id=${cityId}`,
      data
    );*/
    return;
  }

  getProviders(page = 0, order = 'id', orderBy = ASC, limit = 10): Observable<Paginator> {
    const params = createPageHttp({ page, order, orderBy, limit});
   /* return this.http
      .get<ListResponse>(`${environment.BACK_ENDPOINT}/provider`, { params })
      .pipe(
        map(({ content, ...paginator }) => ({
          data: content as Provider[],
          dataPaginator: paginator
        }))
      );*/
      return;
  }

   toggleProvider(id:any) {
    /*return this.http.put(
      `${environment.BACK_ENDPOINT}/provider/active/${id}`,
      {}
    );*/
  } 

  getProviderProfile(id: string): Observable<ProviderDetails> {
   /* return this.http.get<ProviderDetails>(
      `${environment.BACK_ENDPOINT}/provider/${id}`
    );*/
    return;
  }

   putProviderProfile(data:any, cityId:any) {
   /* return this.http.put(
      `${environment.BACK_ENDPOINT}/provider?city_id=${cityId}`,
      data
    );*/
  }
}
