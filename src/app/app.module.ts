import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { Store } from '../store';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';

const firebaseConfig = {
    apiKey: 'AIzaSyAhOOX-f85OhK-ue-y4Tal7DsqLs2dTcSM',
    authDomain: 'birthday-app-a47f3.firebaseapp.com',
    databaseURL: 'https://birthday-app-a47f3.firebaseio.com',
    projectId: 'birthday-app-a47f3',
    storageBucket: 'birthday-app-a47f3.appspot.com',
    messagingSenderId: '919203605330'
};

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        // Angular
        BrowserModule,
        RouterModule,
        AngularFireModule.initializeApp(firebaseConfig),
        AngularFireAuthModule,
        AngularFireDatabaseModule,
        // Custom
        AppRoutingModule,
        SharedModule
    ],
    providers: [
        Store
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }

