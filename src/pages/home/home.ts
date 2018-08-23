import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  openCards() {
    this.navCtrl.push('TinderCardsPage')
  }

  openWeather() {
    this.navCtrl.push('WeatherPage');
  }

  openAgroData() {
    this.navCtrl.push('DataPage');
  }

  openAnimate() {
    this.navCtrl.push('AnimatePage');
  }

}
