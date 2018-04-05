import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {

  constructor(){
    const config = {
      apiKey: "AIzaSyC2uz0gkNWajVS_zmQH5fEgG5JRe5o1bSI",
      authDomain: "httpclientdemo-22a68.firebaseapp.com",
      databaseURL: "https://httpclientdemo-22a68.firebaseio.com",
      projectId: "httpclientdemo-22a68",
      storageBucket: "httpclientdemo-22a68.appspot.com",
      messagingSenderId: "427216420458"
    };
    firebase.initializeApp(config);
  }
}
