import { Component, OnInit } from '@angular/core';
import { PlayerBackendService } from '../../_services/backend/player-backend.service';

import { MatDialog } from '@angular/material/dialog';
import { PlayerDetailComponent } from '../player-detail/player-detail.component';
import { BehaviorSubject, switchMap } from 'rxjs';
import { ListPlayer } from '../../_models/player-list-interfaces';
import { PlayerImageService } from '../../_services/images/player-image.service';
import { HttpErrorResponse } from '@angular/common/http';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.scss']
})
export class PlayerListComponent implements OnInit {

  playersAmount!: number;
  page: number = 0;
  size: number = 25;
  possibleSizes: number[] = [10, 25, 50, 100]
  sizeControl = new FormControl(this.possibleSizes[1]);

  players!: ListPlayer[];
  fetchPlayers$ = new BehaviorSubject<{page: number, size: number}>({page: this.page, size: this.size});

  displayedColumns: string[] = ['position', 'nick', 'level', 'exp', 'next-level', 'klasa'];

  constructor(
    private playerBackend: PlayerBackendService,
    private playerImage: PlayerImageService,
    private dialogRef: MatDialog
  ) { }

  ngOnInit() {
    this.setupPlayersSubscription();
    this.playerBackend
      .getPlayersAmount().subscribe(data => {
        this.playersAmount = data;
      });
  }

  private setupPlayersSubscription(){
    this.fetchPlayers$.pipe(
      switchMap(({ page, size }) => this.playerBackend.getPlayerPage(page, size))
    ).subscribe(data => {
      this.players = data;
      this.players.forEach((player, index) => {
        player.position = this.page * this.size + index + 1;
        player.headUrl = this.playerImage.HEAD_DEFAULT_URL;
        this.playerImage.getPlayerHead(player.nick).subscribe({
          next: v => {
            player.headUrl = v;
          },
          error: (e: HttpErrorResponse) => {
            if (e.status === 200) {
              player.headUrl = e.url;
            } else {
              player.headUrl = this.playerImage.HEAD_DEFAULT_URL;
            }
          }
        });
      });
    });
  }

  getPageAmount() : number{
    if(!this.playersAmount || this.playersAmount < 1)
      return 1;
    return Math.ceil(this.playersAmount/this.size)
  }
  
  openWindow(_id: number){
    this.dialogRef.open(PlayerDetailComponent, {
      height: '90vh',
      width: '90vw',
      maxWidth: "none",
      maxHeight: "none",
      data: {id: _id}
    });
  }

  onPageChange(newPage: number, newSize: number){
    this.page = newPage;
    this.size = newSize
    this.fetchPlayers$.next({ page: this.page, size: this.size });
  }

  getPositionColor(position: number): string {
    switch (position) {
      case 1:
        return '#DBAC34';
      case 2:
        return '#A5A9B4';
      case 3:
        return '#C4A484';
      default:
        return '#656565';
    }
  }

  getBackgroundColor(position: number): string {
    if(position % 2 === 0)
      return "#101010";
    else
      return "#202020";
  }

}
