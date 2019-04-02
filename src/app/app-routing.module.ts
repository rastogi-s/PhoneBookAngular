import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {LoginComponent} from './components/login/login.component';
import {RegisterComponent} from './components/register/register.component';
import {AddContactComponent} from './components/add-contact/add-contact.component';
import {UpdateContactComponent} from './components/update-contact/update-contact.component';
import {ContactListComponent} from './components/contact-list/contact-list.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {
    path: 'home', component: HomeComponent, children: [
      {path: '', redirectTo: 'list', pathMatch: 'full'},
      {path: 'list', component: ContactListComponent},
      {path: 'add', component: AddContactComponent},
      {path: 'update/:id', component: UpdateContactComponent},
      {path: '**', component: ContactListComponent}
    ]
  },
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},

  {path: '**', component: HomeComponent} // last
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
