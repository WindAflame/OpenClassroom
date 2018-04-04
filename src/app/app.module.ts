import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SignupComponent } from './authentification/signup/signup.component';
import { SigninComponent } from './authentification/signin/signin.component';
import { ListComponent } from './book/list/list.component';
import { DetailComponent } from './book/detail/detail.component';
import { NewComponent } from './book/new/new.component';
import { HeaderComponent } from './header/header.component';
import { AuthentificationService } from './services/authentification.service';
import { AuthentificationGuardService } from './services/authentification-guard.service';
import { BookService } from './services/book.service';


@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    SigninComponent,
    ListComponent,
    DetailComponent,
    NewComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    AuthentificationService,
    AuthentificationGuardService,
    BookService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
