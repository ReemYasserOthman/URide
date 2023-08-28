import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes ,RouterModule } from '@angular/router';
import {CarouselModule} from 'ngx-owl-carousel-o';
import { HttpClientModule , HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { WorkingProcessComponent } from './working-process/working-process.component';
import { DriverComponent } from './driver/driver.component';
import { PassengerComponent } from './passenger/passenger.component';
import { DownloadOurAppComponent } from './download-our-app/download-our-app.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AddJourneyComponent } from './add-journey/add-journey.component';
import { ProfileComponent } from './profile/profile.component';
import { NavAfterSignUpComponent } from './nav-after-sign-up/nav-after-sign-up.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { HomeAfterSignupComponent } from './home-after-signup/home-after-signup.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BookTripComponent } from './book-trip/book-trip.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { DriverSignupComponent } from './driver-signup/driver-signup.component';
import { PassengerSignupComponent } from './passenger-signup/passenger-signup.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { AppAdvantagesComponent } from './app-advantages/app-advantages.component';
import { DailyComponent } from './daily/daily.component';
import { DailyHeaderComponent } from './daily-header/daily-header.component';
import { BusinessComponent } from './business/business.component';
import { CaptionsComponent } from './captions/captions.component';
import { PeopleComponent } from './people/people.component';
import { ViewTripComponent } from './view-trip/view-trip.component';
import { ChooseTripComponent } from './choose-trip/choose-trip.component';
import { SearchJourneyComponent } from './search-journey/search-journey.component';
import { TokenInterceptorService } from './token-interceptor.service';
import { SecondNavbarComponent } from './second-navbar/second-navbar.component';
import { EditPasswordComponent } from './edit-password/edit-password.component';
import { EditTripComponent } from './edit-trip/edit-trip.component';

const appRoutes:Routes = [
  {path: '' , component: HomeComponent},
  {path: 'home' , component: HomeComponent},
  {path:'daily' , component: DailyComponent},
  {path:'travel' , component: AddJourneyComponent},
  {path:'search' , component: SearchJourneyComponent},
  {path:'business' , component: BusinessComponent},
  {path:'captains' , component: CaptionsComponent},
  {path:'people' , component: PeopleComponent},
  {path: 'profile' , component: ProfileComponent},
  {path:'login' , component: SignInComponent},
  {path:'logout' , component: SignInComponent},
  {path:'passenger' , component: PassengerSignupComponent},
  {path:'driver' , component: DriverSignupComponent},
  {path:'booktrip' , component: BookTripComponent},
  {path:'editTrip' , component: EditTripComponent}
  
  // {path: 'signup' , component: SignUpComponent},
  // {path: 'homesignup' , component: HomeAfterSignupComponent},
  // {path: 'journey' , component: AddJourneyComponent},
  // {path: 'profile' , component: ProfileComponent},
  // {path:'home' , component: HomeComponent},
  // {path:'editprofile' , component: EditProfileComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WorkingProcessComponent,
    DriverComponent,
    PassengerComponent,
    DownloadOurAppComponent,
    ReviewsComponent,
    SignUpComponent,
    AddJourneyComponent,
    ProfileComponent,
    NavAfterSignUpComponent,
    EditProfileComponent,
    FooterComponent,
    HomeComponent,
    HomeAfterSignupComponent,
    NavbarComponent,
    BookTripComponent,
    SignInComponent,
    DriverSignupComponent,
    PassengerSignupComponent,
    TestimonialComponent,
    BlogComponent,
    ContactComponent,
    AppAdvantagesComponent,
    DailyComponent,
    DailyHeaderComponent,
    BusinessComponent,
    CaptionsComponent,
    PeopleComponent,
    ViewTripComponent,
    ChooseTripComponent,
    SearchJourneyComponent,
    SecondNavbarComponent,
    EditPasswordComponent,
    EditTripComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    CarouselModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS,
      useClass : TokenInterceptorService,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
