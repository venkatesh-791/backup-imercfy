import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LandingComponent } from './landing/landing.component';
import { FooterComponent } from './footer/footer.component';
import { NgxUsefulSwiperModule } from 'ngx-useful-swiper';
import { WhyimrcfyComponent } from './whyimrcfy/whyimrcfy.component';
import { FeaturesComponent } from './features/features.component';
import { SolutionsComponent } from './solutions/solutions.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LandingComponent,
    FooterComponent,
    WhyimrcfyComponent,
    FeaturesComponent,
    SolutionsComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxUsefulSwiperModule,
    NgbModule,
    // BrowserAnimationsModule
  ],
  providers: [
     
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
