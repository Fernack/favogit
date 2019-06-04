import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { UserService } from '../../shared/services/userService';
import { FavoriteService } from '../../shared/services/favoriteService';
import { User } from '../../shared/models/user';

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {

  private user : User;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private userService: UserService,
    private favoriteService: FavoriteService
  ){}

  ngOnInit(): void {
    this.getUser();
  }

  getUser(): void {
    const username = this.route.snapshot.paramMap.get('username');

    this.userService.getUser(username)
      .subscribe(user => this.user = user);
  }

  onFavoriteManagement(user: User): void{
    this.favoriteService.updateFavorite(user);
  }
}
