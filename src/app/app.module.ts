import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './BackEnd/dashboard/dashboard/dashboard.component';
import { HeaderComponent } from './BackEnd/dashboard/header/header.component';
import { FooterComponent } from './BackEnd/dashboard/footer/footer.component';
import { SidebarComponent } from './BackEnd/dashboard/sidebar/sidebar.component';
import { ContentComponent } from './BackEnd/dashboard/content/content.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './BackEnd/users/Folder/login/login.component';
import { RegisterComponent } from './BackEnd/users/Folder/register/register.component';
import { HomeComponent } from './BackEnd/users/Folder/home/home.component';
import { BoardAdminComponent } from './BackEnd/users/Folder/board-admin/board-admin.component';
import { BoardModeratorComponent } from './BackEnd/users/Folder/board-moderator/board-moderator.component';
import { BoardUserComponent } from './BackEnd/users/Folder/board-user/board-user.component';
import { AllUsersComponent } from './BackEnd/users/all-users/all-users.component';
import { AddComponent } from './BackEnd/users/add/add.component';
import { authInterceptorProviders } from './BackEnd/users/Folder/_helpers/auth.interceptor';
import { FormsModule } from '@angular/forms';
import { HeaderFrontComponent } from './FrontEnd/template/header-front/header-front.component';
import { ContentFrontComponent } from './FrontEnd/template/content-front/content-front.component';
import { FooterFrontComponent } from './FrontEnd/template/footer-front/footer-front.component';
import { TemplateComponent } from './FrontEnd/template/template.component';
import { LogINComponent } from './FrontEnd/log-in/log-in.component';
import { ProfileComponent } from './FrontEnd/profile/profile.component';




@NgModule({
  declarations: [
    DashboardComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    ContentComponent,
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    BoardAdminComponent,
    BoardModeratorComponent,
    BoardUserComponent,
    AllUsersComponent,
    AddComponent,
    HeaderFrontComponent,
    ContentFrontComponent,
    FooterFrontComponent,
    TemplateComponent,
    LogINComponent,
    RegisterComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
