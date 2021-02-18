import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageEdUptcComponent } from './page-ed-uptc/page-ed-uptc.component';
import { NavBarEncabezado1Component } from './page-ed-uptc/nav-bar-encabezado1/nav-bar-encabezado1.component';
import { NavEditorialComponent } from './page-ed-uptc/nav-editorial/nav-editorial.component';
import { BannerComponent } from './page-ed-uptc/banner/banner.component';
import { CarruselEventosComponent } from './page-ed-uptc/carrusel-eventos/carrusel-eventos.component';
import { FooterComponent } from './page-ed-uptc/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    PageEdUptcComponent,
    NavBarEncabezado1Component,
    NavEditorialComponent,
    BannerComponent,
    CarruselEventosComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
