import { Component, OnInit} from '@angular/core';
import { FavoriteService } from '../../shared/services/favoriteService';
import { UserService } from '../../shared/services/userService';
import { User } from '../../shared/models/user';
import { Observable } from 'rxjs';

@Component({
  selector: 'favorites-list',
  templateUrl: './favoritesList.component.html',
  styleUrls: ['./favoritesList.component.css']
})

export class FavoritesListComponent implements OnInit {
  private favorites$: Observable<User[]>;

  constructor(private favoriteService: FavoriteService, private userService: UserService){}

  ngOnInit(): void {
    this.favorites$ = this.favoriteService.getFavorites();
  }

  onRemoveFavorite(favorite : User): void {
    this.favoriteService.updateFavorite(favorite);
    this.userService.refresh();
  }

}
