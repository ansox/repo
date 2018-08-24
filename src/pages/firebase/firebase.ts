import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FirebaseService } from '../../service/firebase-service';

/**
 * Generated class for the FirebasePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-firebase',
  templateUrl: 'firebase.html',
})
export class FirebasePage {
  users: string = '';

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private firebaseService: FirebaseService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FirebasePage');
  }

  add() {
    let db = this.firebaseService.fire();

    db.collection("users").add({
      first: "Ada",
      last: "Lovelace",
      born: 1815
    })
      .then(function (docRef) {
        console.log("Document written with ID: ", docRef.id);
      })
      .catch(function (error) {
        console.error("Error adding document: ", error);
      });
  }

  get() {
    let db = this.firebaseService.fire();

    db.collection("users").get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        this.users += JSON.stringify(doc.data());
        console.log(`${doc.id} => ${JSON.stringify(doc.data())}`);
      });
    });
  }

}
