import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ShowUmbrelasComponent } from './show-umbrelas/show-umbrelas.component';
import { CreateUmbrellaComponent } from './create-umbrella/create-umbrella.component';
import { ShowDbComponent } from './show-db/show-db.component';
import { routing } from './route.routing';
import { ModelNavigationComponent } from './model-navigation/model-navigation.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UpdateUmbrellaComponent } from './update-umbrella/update-umbrella.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ShowUmbrelasComponent,
    CreateUmbrellaComponent,
    ShowDbComponent,
    ModelNavigationComponent,
    UpdateUmbrellaComponent
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
