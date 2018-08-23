import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { WeatherProvider } from '../../providers/weather/weather';

/**
 * Generated class for the WeatherPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-weather',
  templateUrl: 'weather.html',
})
export class WeatherPage {
  weather: string;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private weatherProvider: WeatherProvider
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WeatherPage');
  }

  getWeather() {
    let lat = '-23.4698043';
    let lng = '-47.5768764';
   
    this.weatherProvider.get(lat, lng)
      .then(result => {
        this.weather = JSON.stringify(result);
      })
      .catch(error => {
        alert(error);
      })
  }

}
