import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, switchMap } from 'rxjs';
import { MojangPlayerService } from '../mojang/mojang-player.service';
import { MojangPlayerInfo } from '../../_models/mojang-player-interface';

// const HEAD_API = "https://mc-heads.net/head";
// const BODY_API = "https://mc-heads.net/body";

const HEAD_API = "https://vzge.me/head/64";
const BODY_API = "https://vzge.me/bust/256";

// export const HEAD_DEFAULT_URL = "https://mc-heads.net/head/MHF_Steve/64.png";
// export const BODY_DEFAULT_URL = "https://mc-heads.net/body/MHF_Steve/120.png";

@Injectable({
  providedIn: 'root'
})
export class PlayerImageService {

HEAD_DEFAULT_URL = "https://vzge.me/head/64/X-Steve.png?no=shadow,cape&y=70";
BODY_DEFAULT_URL = "https://vzge.me/bust/256/X-Steve.png?no=shadow,cape";

constructor(
  private http: HttpClient,
  private mojangService: MojangPlayerService
) { 
}

getPlayerHead(nick: string): Observable<string> {
  return this.mojangService.getMojandPlayerInfo(nick).pipe(
    switchMap((playerInfo: MojangPlayerInfo) => {
      const uuid = playerInfo.isPremium ? playerInfo.data : "X-Steve";
      return this.http.get<string>(`${HEAD_API}/${uuid}.png`, {
        params: {
          no: ["shadow","cape"],
          y: 70
        }
      })
    })
  );
}

getPlayerBody(nick: string): Observable<string> {
  return this.mojangService.getMojandPlayerInfo(nick).pipe(
    switchMap((playerInfo: MojangPlayerInfo) => {
      const uuid = playerInfo.isPremium ? playerInfo.data : "X-Steve";
      return this.http.get<string>(`${BODY_API}/${uuid}.png`, {
        params: {
          no: ["shadow","cape"]
        }
      })
    })
  );
}

}
