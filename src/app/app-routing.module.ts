import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotfoundComponent } from './BackEnd/dashboard/notfound/notfound.component';
import { AllUsersComponent } from './BackEnd/users/all-users/all-users.component';
import { BoardAdminComponent } from './BackEnd/users/Folder/board-admin/board-admin.component';
import { BoardModeratorComponent } from './BackEnd/users/Folder/board-moderator/board-moderator.component';
import { BoardUserComponent } from './BackEnd/users/Folder/board-user/board-user.component';
import { HomeComponent } from './BackEnd/users/Folder/home/home.component';
import { LoginComponent } from './BackEnd/users/Folder/login/login.component';
import { ProfileComponent } from './BackEnd/users/Folder/profile/profile.component';
import { RegisterComponent } from './BackEnd/users/Folder/register/register.component';


const routes: Routes = [
  { path: 'user', component: BoardUserComponent },
  { path: 'mod', component: BoardModeratorComponent },
  { path: 'admin', component: BoardAdminComponent },
  { path: 'home', component: HomeComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {path: 'dashboard',
    children: [
      { path: 'users', component: AllUsersComponent },
      { path: '', redirectTo: 'home', pathMatch: 'full' }
    ],
  },
  { path: '**', component: NotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
