import { Component, OnInit, Inject } from '@angular/core';
import { PlayerBackendService } from '../../_services/backend/player-backend.service';
import { DetailPlayer } from '../../_models/player-detail-interfaces';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { PlayerImageService } from '../../_services/images/player-image.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-player-detail',
  templateUrl: './player-detail.component.html',
  styleUrls: ['./player-detail.component.scss']
})
export class PlayerDetailComponent implements OnInit {

  player!: DetailPlayer;

  //CHART
  public radarChartLabels: string[] = [
    "Siła", "Wytrzymałość", "Zdolności Myśliwskie",
    "Zręczność", "Inteligencja", "Mana"
  ]
  public radarCharType = "radar";
  public radarChartOptions = {
    responsive: true,
    scale: {
      ticks: {
        beginAtZero: true,
        min: 0,
        max: 2500
      }
    }
  };

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

  getReputationLevelName(level: number): string {
    switch (level) {
      case 0:
        return "NIEUFNY";
      case 1:
        return "NEUTRALNY";
      case 2:
        return "PRZYJAZNY";
      case 3:
        return "HONOROWANY";
      case 4:
        return "CZCZONY";
      case 5:
        return "PODNIOSŁY";
      case 6:
        return "DOSKONAŁY";
    }
    return "NIEUFNY";
  }

  public getRadarChartData(player: DetailPlayer): any[] {
    let stats = player.stats;
    return [{
      data: [
        stats.sila, stats.wytrzymalosc, stats.zdolnosci,
        stats.zrecznosc, stats.inteligencja, stats.mana
      ],
      label: 'Statystyki'
    },
    {
      data: [
        stats.potionSila, stats.potionWytrzymalosc, stats.potionZdolnosci,
        stats.potionZrecznosc, stats.potionInteligencja, stats.potionMana
      ],
      label: 'Mikstury'
    }];
  }

  public getSkillsAsString(player: DetailPlayer): string {
    let result = "";
    let skills = player.skills;

    if(skills.hungerless)
      result += "Wiecznie najedzony, ";
    if(skills.unlimitedArrows)
      result += "Bezdenny kołczan, ";
    if(skills.manaRegeneration)
      result += "Regeneracja many, ";
    if(skills.slugaBeliara)
      result += "Sługa Beliara, ";
    if(skills.ciosKrytyczny)
      result += "Cios krytyczny, ";
    if(skills.magKrwi)
      result += "Mag krwi, ";
    if(skills.polnocnyBarbarzynca)
      result += "Północny barbarzyńca, ";
    if(skills.rozprucie)
      result += "Rozprucie, ";
    if(skills.silaZywiolow)
      result += "Siła żywiołów, ";

    if(result === "")
      return "BRAK";

    return result.substring(0, result.length-2);
  }

  public getRzemioslaAsString(player: DetailPlayer): string {
    let result = "";
    let rzemiosla = player.rzemioslo;

    if(rzemiosla.kowalstwo)
      result += "Kowalstwo, ";
    if(rzemiosla.platnerstwo)
      result += "Płatnerstwo, ";
    if(rzemiosla.luczarstwo)
      result += "Łuczarstwo, ";
    if(rzemiosla.alchemia)
      result += "Alchemia, ";
    if(rzemiosla.jubilerstwo)
      result += "Jubilerstwo, ";

    if(result === "")
      return "BRAK";

    return result.substring(0, result.length-2);
  }

}
