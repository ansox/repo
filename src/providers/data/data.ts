import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the DataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataProvider {
  private key = 'xvkzd3q-kTEQyxNfr-d6';

  constructor(public http: HttpClient) {
    console.log('Hello DataProvider Provider');
  }

  getCurrency(): Promise<any> {
    //https://blog.quandl.com/api-for-currency-data?utm_source=blog-quandl&utm_medium=organic&utm_campaign=&utm_content=(homepage)
    //USD Exchange Rates (FRED)

    const currencyCode = 'DEXBZUS';// Brazilian Real

    return this.http
      .get(`https://www.quandl.com/api/v3/datasets/FRED/${currencyCode}/data.json?api_key=${this.key}&limit=1`)
      .toPromise();
  }

  getCommodityData(commodity: string): Promise<any> {
    let commodityCode = this.getCommodityCode(commodity);

    return this.http
      .get(`https://www.quandl.com/api/v3/datasets/${commodityCode}/data.json?api_key=${this.key}&limit=1`)
      .toPromise();
  }

  private getCommodityCode(commodity: string): string {
    switch (commodity) {
      case 'coffee':
        return 'CHRIS/ICE_KC1'
      case 'cocoa': 
        return 'CHRIS/ICE_CC1'
      case 'cotton': 
        return 'CHRIS/ICE_CT1'
      default:
        return '';
    }
  }

}
