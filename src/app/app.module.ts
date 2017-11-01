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
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({ maxAge: 25 })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
