import { Component, OnInit } from '@angular/core';
import { UserService } from '../../shared/services/userService';
import { FavoriteService } from '../../shared/services/favoriteService';
import { User } from '../../shared/models/user';
import { Observable } from 'rxjs';

@Component({
  selector: 'user-list',
  templateUrl: './userList.component.html',
  styleUrls: ['./userList.component.css']
})

export class UserListComponent implements OnInit {
  private users$: Observable<User[]>;
  private numberUsers$: Observable<number>;
  private sorted : boolean = null;

  constructor(private userService: UserService, private favoriteService: FavoriteService) {}

  sortBy(): void {
    this.sorted = !this.sorted;
    this.userService.sortUsers(this.sorted ? 1 : -1);
  }

  ngOnInit(): void {
    this.numberUsers$ = this.userService.getNumberUsers();
    this.users$ = this.userService.getUsers();
  }

  onFavoriteManagement(user: User): void{
    this.favoriteService.updateFavorite(user);
  }

}
