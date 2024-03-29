import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { PListingComponent } from './components/p-listing/p-listing.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from "@angular/flex-layout";
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { ListingComponent } from './components/listing/listing.component';
import { NavComponent } from './components/nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AddPropertyComponent } from './components/add-property/add-property.component';
import { PDetailsComponent } from './components/p-details/p-details.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';
import { MatGridListModule } from '@angular/material/grid-list';
import { ProfileComponent } from './components/profile/profile.component';
import { SearchComponent } from './components/search/search.component';
import { FeaturedListingComponent } from './components/featured-listing/featured-listing.component';
import { ProfileCardComponent } from './components/profile-card/profile-card.component';
import { FeaturedProfileComponent } from './components/featured-profile/featured-profile.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarTopComponent } from './components/navbar-top/navbar-top.component';
import { FeaturedDevelopersComponent } from './components/featured-developers/featured-developers.component';
import { DevCardComponent } from './components/dev-card/dev-card.component';
import { FeaturedAgencyComponent } from './components/featured-agency/featured-agency.component';
import { NearbyPropertyComponent } from './components/nearby-property/nearby-property.component';
import { RecentPropertyComponent } from './components/recent-property/recent-property.component';
import { BlogsComponent } from './components/blogs/blogs.component';
import { ContactComponent } from './components/contact/contact.component';
import { CalculatorComponent } from './components/calculator/calculator.component';
import { MatCarouselModule } from '@ngmodule/material-carousel';
import { CarouselModule } from 'ngx-bootstrap/carousel';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PListingComponent,
    ListingComponent,
    NavComponent,
    AddPropertyComponent,
    PDetailsComponent,
    RegisterComponent,
    LoginComponent,
    ProfileComponent,
    SearchComponent,
    FeaturedListingComponent,
    ProfileCardComponent,
    FeaturedProfileComponent,
    FooterComponent,
    NavbarTopComponent,
    FeaturedDevelopersComponent,
    DevCardComponent,
    FeaturedAgencyComponent,
    NearbyPropertyComponent,
    RecentPropertyComponent,
    BlogsComponent,
    ContactComponent,
    CalculatorComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    FlexLayoutModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    NgbModule,
    MatSnackBarModule,
    MatMenuModule,
    MatDividerModule,
    HttpClientModule,
    MatButtonToggleModule,
    MatSelectModule,
    MatExpansionModule,
    MatGridListModule,
    MatCheckboxModule,
    MatCarouselModule.forRoot(),
    CarouselModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
