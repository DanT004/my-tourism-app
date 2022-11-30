import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { CitiesComponent } from './components/cities/cities.component';
import { WeatherComponent } from './components/weather/weather.component';
import { TechIdeasComponent } from './components/tech-ideas/tech-ideas.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { WeatherDetailsComponent } from './components/weather-details/weather-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ImportantTextDirective } from './directives/important-text.directive';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    CitiesComponent,
    WeatherComponent,
    TechIdeasComponent,
    NotfoundComponent,
    WeatherDetailsComponent,
    ImportantTextDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
