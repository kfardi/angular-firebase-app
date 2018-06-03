import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor() {
    const config = {
      apiKey: 'AIzaSyBM7ESZeoqGbioVVRG9V67zyw1__bPMZfs',
      authDomain: 'angular-firebase-app-1301e.firebaseapp.com',
      databaseURL: 'https://angular-firebase-app-1301e.firebaseio.com',
      projectId: 'angular-firebase-app-1301e',
      messagingSenderId: '298007598379',
      storageBucket: 'gs://angular-firebase-app-1301e.appspot.com'
    };
    firebase.initializeApp(config);
  }
}
