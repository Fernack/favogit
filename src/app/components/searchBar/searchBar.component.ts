import { Component, EventEmitter, Output } from '@angular/core';
import { UserService } from '../../shared/services/userService';
import { Router } from '@angular/router';

@Component({
  selector: 'search-bar',
  templateUrl: './searchBar.component.html',
  styleUrls: ['./searchBar.component.css']
})

export class SearchBarComponent {
  @Output() onShowFavoritesInBar = new EventEmitter<string>();

  constructor(private userService: UserService, private router: Router) { }

  searchUser(query){
    this.userService.searchUsers(query.value);
    this.router.navigate(['favoGit']);
  }

  onShowFavorites(){
    this.onShowFavoritesInBar.emit();
  }
}
