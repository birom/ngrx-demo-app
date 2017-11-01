import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { circleReducer } from './state-management/circle.reducer';
import { CircleComponent } from './circle.component';
import { CircleBoxComponent } from './circle-box.component';
import { TrackingDataComponent } from './tracking-data.component';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { CircleEffects } from './state-management/circle.effects';
import { ColorService } from './color.service';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    CircleComponent,
    CircleBoxComponent,
    TrackingDataComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({ 'circle': circleReducer }),
    EffectsModule.forRoot([CircleEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25 }),
    HttpModule
  ],
  providers: [
    ColorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
