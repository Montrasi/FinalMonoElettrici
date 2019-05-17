import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { AgmCoreModule } from '@agm/core';
import { HttpClientModule } from '@angular/common/http';
import { MappingComponent } from './mapping/mapping.component';
import { LoggingComponent } from './logging/logging.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  imports:      [
    BrowserModule,
    NgbModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCzUI8LYmnHPyFrtRT8Q8IEREZfOygUl-U'
    }),
    HttpClientModule
  ],
  declarations: [
    AppComponent,
    MappingComponent,
    LoggingComponent,
    RegisterComponent
  ],
  bootstrap:    [
    AppComponent
  ]
})

export class AppModule {

}
