import { Injectable } from '@angular/core';
import { User } from '../../shared/models/user';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject} from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { FavoriteService } from './favoriteService';

@Injectable({ providedIn: 'root' })
export class UserService {
  private gitHubUrl = 'https://api.github.com';

  private usersSubject = new BehaviorSubject([]);

  private users: User[];

  constructor( private http: HttpClient, private favoriteService: FavoriteService ) {}

  getUsers(): Observable<User[]> {
    return this.usersSubject.asObservable();
  }

  searchUsers(term: string) {
    if (!term.trim()) {
      this.users = [];
      this.usersSubject.next(this.users);
    }
    else {
      this.http.get<User[]>(`${this.gitHubUrl}/search/users?q=${term}&per_page=20`)
        .pipe( map(users => users['items']) )
        .subscribe(incompleteUsers => {
          this.users = [];

          for (var i = 0; i < incompleteUsers.length; i++) {

            let incompleteUser = incompleteUsers[i];

            this.http.get<User>(incompleteUser.url).subscribe(
              user => {
                this.users.push({
                  id : incompleteUser.id,
                  name: user.name,
                  avatar_url: incompleteUser.avatar_url,
                  login: incompleteUser.login,
                  email: user.email,
                  created_at: user.created_at,
                  followers: user.followers,
                  location: user.location,
                  public_repos: user.public_repos,
                  html_url: user.html_url,
                  isFavorite: this.favoriteService.isFavorite(incompleteUser.id)
                });

                this.usersSubject.next(this.users);
              }
            );
          }

          this.usersSubject.next(this.users);
        }
      );
    }
  }

  sortUsers(order: number) {
    if (this.users){
      this.users.sort((a : User, b : User) => {
        return order * a.login.localeCompare(b.login);
      });

      this.usersSubject.next(this.users);
    }
  }

  getUser(username: string): Observable<User> {
    var user = this.users ? this.users.find(user => user.login === username ) : null;

    if (user){
      return new Observable(observer => {
        setInterval(() => {
          observer.next(user);
        }, 1000)
      })
    }
    else {
      return this.http.get<User>(`${this.gitHubUrl}/users/${username}`)
      .pipe(
        map(user => {
          user.isFavorite = this.favoriteService.isFavorite(user.id)
          ; return user;
        })
      );
    }
  }

  refresh(): void{
    this.usersSubject.next(this.users);
  }

}
