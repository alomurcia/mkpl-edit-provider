import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CityInterface } from '../interfaces/locations.interface';

@Injectable({
  providedIn: 'root'
})
export class LocationsService {
  constructor(private http: HttpClient) { }
//TODO redireccionar los endpoint
  getCountries(): Observable<any> {
    /* return this.http.get(`${environment.BACK_ENDPOINT}/country`); */
    return;
  }

  getRegions(countryId: number): Observable<any> {
    /* return this.http.get(`${environment.BACK_ENDPOINT}/region/country/${countryId}`); */
    return;
  }

  getCities(regionId: number): Observable<{ data: CityInterface[] }> {
    /* return this.http.get<{ data: CityInterface[] }>(`${environment.BACK_ENDPOINT}/city/region/${regionId}`); */
    return;
  }
}
