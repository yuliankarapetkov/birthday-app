import 'hammerjs';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { StoreModule, MetaReducer } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { RouterStateSerializer, StoreRouterConnectingModule } from '@ngrx/router-store';

import { reducers, effects } from './store';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';

// not used in production
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { storeFreeze } from 'ngrx-store-freeze';
import { CustomSerializer } from './store/reducers';

// this would be done dynamically with webpack for builds
const environment = {
    development: true,
    production: false,
};

export const metaReducers: MetaReducer<any>[] = !environment.production
    ? [storeFreeze]
    : [];

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
        BrowserAnimationsModule,
        RouterModule,
        // Angular Fire
        AngularFireModule.initializeApp(firebaseConfig),
        AngularFireAuthModule,
        AngularFireDatabaseModule,
        // Custom
        AppRoutingModule,
        SharedModule,
        // Store
        StoreModule.forRoot(reducers, { metaReducers }),
        EffectsModule.forRoot(effects),
        StoreRouterConnectingModule,
        environment.development ? StoreDevtoolsModule.instrument() : [],
    ],
    providers: [
        { provide: RouterStateSerializer, useClass: CustomSerializer }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }

