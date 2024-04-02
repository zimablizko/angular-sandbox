import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SecondComponent } from './second/second.component';
import { FirstComponent } from './first/first.component';
import { UnitComponent } from './first/unit/unit.component';
import { APP_CONFIG } from './app.config';
import { AFirstComponent } from './second/components/a-first.component';
import { AThirdComponent } from './second/components/a-third.component';
import { ASecondComponent } from './second/components/a-second.component';

@NgModule({
  declarations: [
    AppComponent,
    SecondComponent,
    FirstComponent,
    UnitComponent,
    AFirstComponent,
    ASecondComponent,
    AThirdComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [{ provide: APP_CONFIG, useValue: 'Angular Sandbox' }],
  bootstrap: [AppComponent],
})
export class AppModule {}
