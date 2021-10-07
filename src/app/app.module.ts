import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './modules/core/core.module';
import { SharedModule } from './shared/shared.module';
import { TransferHttpCacheModule } from '@nguniversal/common';
import { registerLocaleData } from '@angular/common';
import { Error404PageComponent } from './pages/error404-page/error404-page.component';
import localeEs from '@angular/common/locales/es';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';

registerLocaleData(localeEs, 'es');

@NgModule({
  imports: [
    BrowserModule.withServerTransition({ appId: 'angularexampleapp' }),
    TransferHttpCacheModule,
    HttpClientModule,
    CoreModule,
    SharedModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule
  ],
  declarations: [
    Error404PageComponent,
    AppComponent
  ]
})

export class AppModule {
}
