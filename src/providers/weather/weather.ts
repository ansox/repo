import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the WeatherProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class WeatherProvider {
  private key = 'a1510aecde60eb943bd531193bfed86b';

  constructor(private http: HttpClient) {
    console.log('Hello WeatherProvider Provider');
  }

  get(lat: string, lng: string): Promise<any> {
    return this.http
    .get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&APPID=${this.key}`)
    .toPromise();
  }

}
