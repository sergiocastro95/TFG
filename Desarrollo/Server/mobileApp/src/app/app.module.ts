import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';
import { LocalNotifications } from '@ionic-native/local-notifications';
import {BLE} from '@ionic-native/ble';
import { SMS } from '@ionic-native/sms';
import { MyApp } from './app.component';
import { TratamientoPage } from '../pages/tratamiento/tratamiento';
import { HistorialPage } from '../pages/historial/historial';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import {MonitorPage} from '../pages/monitor/monitor'
import { DetailTratamientoPage } from '../pages/detailtratamiento/detailtratamiento';
import {DetailHistorialPage} from '../pages/detailhistorial/detailhistorial';
import{BuscarpulseraPage} from '../pages/buscarpulsera/buscarpulsera'
import { LogoutComponent } from '../components/logout/logout';

@NgModule({
  declarations: [
    MyApp,
    TratamientoPage,
    HistorialPage,
    HomePage,
    TabsPage,
    LoginPage,
    MonitorPage,
    DetailTratamientoPage,
    DetailHistorialPage,
    BuscarpulseraPage,
    LogoutComponent
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TratamientoPage,
    HistorialPage,
    HomePage,
    TabsPage,
    LoginPage,
    DetailTratamientoPage,
    DetailHistorialPage,
    BuscarpulseraPage,
    MonitorPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, LocalNotifications, BLE, SMS]
})
export class AppModule {}
