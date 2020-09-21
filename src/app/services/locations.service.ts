import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CityInterface, CountryInterface } from '../interfaces/locations.interface';

@Injectable({
  providedIn: 'root'
})
export class LocationsService {
  constructor(private http: HttpClient) { }

  // TODO actualizar endpoints

   getCountries(): Observable<any> {
    return this.http.get<any[]>(`http://localhost:8082/api/country`);
  }

  getRegions(countryId: number): Observable<any> {
    return this.http.get(`http://localhost:8082/api/region/country/${countryId}`);
  }

  getCities(regionId: number): Observable<{ data: CityInterface[] }> {
    return this.http.get<{ data: CityInterface[] }>(`http://localhost:8082/api/city/region/${regionId}`);
  } 
}
