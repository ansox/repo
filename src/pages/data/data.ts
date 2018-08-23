import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';

/**
 * Generated class for the DataPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-data',
  templateUrl: 'data.html',
})
export class DataPage {
  result: string;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams, 
    private dataProvider: DataProvider
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DataPage');
  }

  getCurrency() {
    this.dataProvider.getCurrency()
      .then(currency => {
        this.result = JSON.stringify(currency);
      })
      .catch(error => {
        alert(error.message);
      })
  }

  getCommodityData(commodity: string) {
    this.dataProvider.getCommodityData(commodity)
    .then(data => {
      this.result = JSON.stringify(data);
    })
    .catch(error => {
      alert(error.message);
    })
  }

}
