import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/Database';


import { AppComponent } from './app.component';

  export const config = {
    apiKey: "AIzaSyDONsnPXhrd9w7bT2k317IyRc5GtW46xOI",
    authDomain: "todoappinangular4.firebaseapp.com",
    databaseURL: "https://todoappinangular4.firebaseio.com",
    projectId: "todoappinangular4",
    storageBucket: "todoappinangular4.appspot.com",
    messagingSenderId: "493900254126"
  };
  

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(config),
    AngularFireDatabaseModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
