import { Injectable } from '@angular/core';
import { User } from '../../shared/models/user';
import { Observable, BehaviorSubject} from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class FavoriteService {
  private favorites: User[] = [];
  private favoritesSubject;

  constructor(){
    this.favorites = JSON.parse(localStorage.getItem('favorites'));
    this.favoritesSubject = new BehaviorSubject(this.favorites);
  }

  getFavorites(): Observable<User[]> {
    return this.favoritesSubject.asObservable();
  }

  updateFavorite(user: User): void {
    if (user.isFavorite){
      let favoriteIndex = this.favorites.findIndex(favorite => favorite.id === user.id);

      if (favoriteIndex > -1) {
        this.favorites.splice(favoriteIndex, 1);
      }
    }
    else {
      this.favorites.push(user);
    }

    user.isFavorite = !user.isFavorite;

    this.favoritesSubject.next(this.favorites);

    localStorage.setItem('favorites', JSON.stringify(this.favorites));
  }

  isFavorite(id): boolean {
    return this.favorites.findIndex(favorite => favorite.id === id) > -1;
  }

}
