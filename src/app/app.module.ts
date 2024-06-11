import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ProductGuardService } from 'src/product-guard.service';
import { ContainerComponent } from './Container/container.component';
import { AppRoutingModule } from './Services/app-routing.module';
import { EnrollService } from './Services/eroll.service';
import { product } from './Services/productdetails.service';
import { ProfileDataService } from './Services/profiledata.service';
import { TableForPipeService } from './Services/tableforpipe.service';
import { AboutComponent } from './about/about.component';
import { AddUserComponent } from './add-user/add-user.component';
import { AppComponent } from './app.component';
import { AuthService } from './auth.service';
import { CanDeactivateGuardService } from './candeactivate-guard.service';
import { CartComponent } from './cart/cart.component';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';
import { ContactComponent } from './contact/contact.component';
import { DemoComponent } from './demo/demo.component';
import { FilterComponent } from './filter/filter.component';
import { FinalSaleComponent } from './final-sale/final-sale.component';
import { FirstComponent } from './first/first.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { Homedesign1Component } from './homedesign1/homedesign1.component';
import { Homedesign2Component } from './homedesign2/homedesign2.component';
import { LoginComponent } from './login/login.component';
import { MainCompComponent } from './main-comp/main-comp.component';
import { NavComponent } from './nav/nav.component';
import { NewProductComponent } from './new-product/new-product.component';
import { NotificationComponent } from './notification/notification.component';
import { PercentagePipe } from './percentage.pipe';
import { PipeComponent } from './pipe/pipe.component';
import { ProductResolveService } from './product-resolve.service';
import { ProductComponent } from './product/product.component';
import { SingleProductComponent } from './product/single-product/single-product.component';
import { ProfileResolveService } from './profile-resole.service';
import { RefernceComponent } from './refernce/refernce.component';
import { SalesDetailComponent } from './sales-detail/sales-detail.component';
import { SalesComponent } from './sales/sales.component';
import { SearchComponent } from './search/search.component';
import { SecondComponent } from './second/second.component';
import { UsersComponent } from './users/users.component';
import { FilterPipe } from './filter.pipe';
import { RegistrationComponent } from './registration/registration.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { NgImageSliderModule } from 'ng-image-slider';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    AddUserComponent,
    NavComponent,
    UsersComponent,
    HeaderComponent,
    NotificationComponent,
    SearchComponent,
    FilterComponent,
    FirstComponent,
    SecondComponent,
    DemoComponent,
    Comp1Component,
    Comp2Component,
    MainCompComponent,
    NewProductComponent,
    SalesDetailComponent,
    SalesComponent,
    FinalSaleComponent,
    AboutComponent,
    CartComponent,
    ProductComponent,
    ContainerComponent,
    RefernceComponent,
    HomeComponent,
    SingleProductComponent,
    Homedesign1Component,
    Homedesign2Component,
    FooterComponent,
    LoginComponent,
    PipeComponent,
    PercentagePipe,
    FilterPipe,
    RegistrationComponent,
    ReactiveFormComponent,
    ProductFormComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    NgxSpinnerModule,
    NgxSpinnerModule.forRoot({ type: 'ball-beat' }),
    BrowserAnimationsModule,
    ReactiveFormsModule,
    NgImageSliderModule,
    HttpClientModule
  ],
  providers: [
    EnrollService,
    product,
    ProductGuardService,
    AuthService,
    ProductResolveService,
    ProfileDataService,
    ProfileResolveService,
    TableForPipeService,
    CanDeactivateGuardService
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
