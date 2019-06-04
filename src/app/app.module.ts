import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { SearchBarComponent } from './components/searchBar/searchBar.component';
import { UserListComponent } from './components/userList/userList.component';
import { AppRoutingModule } from './app-routing.module';
import { ProfileComponent } from './components/profile/profile.component';
import { FavoritesListComponent } from './components/favoritesList/favoritesList.component';


@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    UserListComponent,
    ProfileComponent,
    FavoritesListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
