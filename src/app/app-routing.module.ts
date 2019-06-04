import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './components/profile/profile.component';
import { UserListComponent } from './components/userList/userList.component';

const routes: Routes = [{
    path: '',
    redirectTo: '/favoGit',
    pathMatch: 'full'
  }, {
    path: 'favoGit',
    component: UserListComponent
  }, {
    path: 'profile/:username',
    component: ProfileComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
