import { Injectable } from '@angular/core';


declare var firebase;

@Injectable()
export class FirebaseService {
  firestore: any;

  constructor() {
    let config = {
        apiKey: "AIzaSyA-vw5z0MfGGnF2tvYslosN8ny-5UEy4DE",
        authDomain: " repo-c67d1.firebaseapp.com",
        projectId: "repo-c67d1",
      };

    let fire = firebase.initializeApp(config);

    this.firestore = fire.firestore();
  }

  fire(): any {
    return this.firestore;
  }
}
