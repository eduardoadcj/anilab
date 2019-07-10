import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
     BrowserModule,
     IonicModule.forRoot(),
     AppRoutingModule
     AngularFireModule.inicializeApp({
       apiKey: "AIzaSyCPmEZMaLKI_iLp4yYj09AgfBz2hnAdSL8",
       authDomain: "anilab-c5e5a.firebaseapp.com",
       databaseURL: "https://anilab-c5e5a.firebaseio.com",
       projectId: "anilab-c5e5a",
       storageBucket: "",
       messagingSenderId: "437504453400",
       appId: "1:437504453400:web:6423880c3c7744bb"
     }),
     AngularFireDatabaseModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
