import { Component, OnInit, Inject } from '@angular/core';
import { PlayerBackendService } from '../../_services/backend/player-backend.service';
import { DetailPlayer } from '../../_models/player-detail-interfaces';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { PlayerImageService } from '../../_services/images/player-image.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-player-detail',
  templateUrl: './player-detail.component.html',
  styleUrls: ['./player-detail.component.css']
})
export class PlayerDetailComponent implements OnInit {

  player!: DetailPlayer;

  constructor(
    private playerBackend: PlayerBackendService,
    private playerImage: PlayerImageService,
    private dialogRef: MatDialogRef<PlayerDetailComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {id: number}
  ) { }

  ngOnInit() {
    this.dialogRef.updateSize("350px","350px");
    this.playerBackend.getPlayerById(this.data.id).subscribe(data => {
      this.dialogRef.updateSize("80%","80%");
      this.player = data;
      this.player.bodyUrl = this.playerImage.BODY_DEFAULT_URL;
      this.playerImage.getPlayerBody(this.player.nick).subscribe({
        error: (err: HttpErrorResponse) => this.player.bodyUrl = err.url
      })
    });
  }

}
