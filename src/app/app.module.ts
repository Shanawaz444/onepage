import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutComponent } from './about/about.component';
import { BannerComponent } from './banner/banner.component';
import { LanguagesihaveworkedComponent } from './languagesihaveworked/languagesihaveworked.component';
import { MyeducationComponent } from './myeducation/myeducation.component';
import { ProjectsComponent } from './projects/projects.component';
import { AboutEducationComponent } from './about-education/about-education.component';
import { NavbarV2Component } from './navbar-v2/navbar-v2.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutComponent,
    BannerComponent,
    LanguagesihaveworkedComponent,
    MyeducationComponent,
    ProjectsComponent,
    AboutEducationComponent,
    NavbarV2Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
