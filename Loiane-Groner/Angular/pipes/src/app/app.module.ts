import { NgModule,LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExemplosPipeComponent } from './exemplos-pipe/exemplos-pipe.component';
import { CamelCasePipe } from './camel-case.pipe';
import { SettingsService } from './settings.service';

@NgModule({
  declarations: [
    AppComponent,
    ExemplosPipeComponent,
    CamelCasePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    /*{
      provide: LOCALE_ID,
      useValue :'pt-BR'

    }*/
    SettingsService,
    {
      provide: LOCALE_ID,
      deps:[SettingsService],
      useFactory : (SettingsService:any) => SettingsService.getlocale()
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
