import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SearchPlayer } from '../../_models/player-search-interfaces';
import { PlayerBackendService } from '../../_services/backend/player-backend.service';
import { PlayerDetailComponent } from '../player-detail/player-detail.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-player-search',
  templateUrl: './player-search.component.html',
  styleUrls: ['./player-search.component.css']
})
export class PlayerSearchComponent implements OnInit {

  searchSub!: Subscription;
  searchOptions: SearchPlayer[] = [];
  searchName: string = "";

  constructor(
    private playerBackend: PlayerBackendService,
    private dialogRef: MatDialog
  ) { }

  ngOnInit() {
  }

  trySetupSearchSubscription() {
    if(this.searchSub)
      this.searchSub.unsubscribe

    if(!this.searchName){
      this.searchOptions = [];
      return;
    }

    this.searchSub = this.playerBackend
      .getPlayerListByName(this.searchName).subscribe(data => {
        this.searchOptions = data;
      });
  }
  
  openWindow(_id: number){
    this.dialogRef.open(PlayerDetailComponent, {
      height: '80%',
      width: '80%',
      maxWidth: "none",
      maxHeight: "none",
      data: {id: _id}
    });
  }

}
