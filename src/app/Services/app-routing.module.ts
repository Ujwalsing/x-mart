import { NgModule} from "@angular/core"
import { RouterModule, Routes } from "@angular/router"
import { AboutComponent } from "../about/about.component"
import { CartComponent } from "../cart/cart.component"
import { ContactComponent } from "../contact/contact.component"
import { ErrorComponent } from "../error/error.component"
import { HomeComponent } from "../home/home.component"
import { ProductComponent } from "../product/product.component"
import { SingleProductComponent } from "../product/single-product/single-product.component"
import { ProductGuardService } from "src/product-guard.service"
import { LoginComponent } from "../login/login.component"
import { CanDeactivateGuardService } from "../candeactivate-guard.service"
import { ProductResolveService } from "../product-resolve.service"
import { ProfileResolveService } from "../profile-resole.service"
import { PipeComponent } from "../pipe/pipe.component"
import { RegistrationComponent } from "../registration/registration.component"
import { ReactiveFormComponent } from "../reactive-form/reactive-form.component"
import { ProductFormComponent } from "../product-form/product-form.component"




const appRoute: Routes = [
    // {path:'',component:HomeComponent},
    {path: '', redirectTo: 'Home', pathMatch: 'full'},
    {path:'Home',component:HomeComponent},
    {path:'Cart',component:CartComponent},
    {path: 'Contact',component:ContactComponent, canDeactivate:[CanDeactivateGuardService]},
    {path: 'Product', component: ProductComponent, resolve: {products: ProductResolveService}},
    {path: 'About', component: AboutComponent, resolve: {profiles: ProfileResolveService}},
    // {path: 'product/single-product/:id', component: SingleProductComponent},
    {path: '', canActivateChild: [ProductGuardService], children:[
      {path: 'single-product/:id', component: SingleProductComponent}]
    },
    {path: 'Login',component:LoginComponent},
    {path: 'DataForPipe', component: PipeComponent},
    {path: 'Registration', component: RegistrationComponent},
    {path: 'ReactiveRegisteration', component: ReactiveFormComponent},
    {path: 'ProductRegistration', component: ProductFormComponent},
    {path:'**', component:ErrorComponent}
  ]

@NgModule({
    imports: [
        RouterModule.forRoot(appRoute, {enableTracing: true})
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule{

}