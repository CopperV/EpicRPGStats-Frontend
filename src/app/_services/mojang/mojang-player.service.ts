import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MojangPlayerInfo } from '../../_models/mojang-player-interface';
import { Observable } from 'rxjs';
import { of, map, catchError } from 'rxjs';

const MOJANG_API = "https://api.ashcon.app/mojang/v2/user/"

@Injectable({
  providedIn: 'root'
})
export class MojangPlayerService {

constructor(private http: HttpClient) { }

getMojandPlayerInfo(nick: string): Observable<MojangPlayerInfo> {
  return this.http.get<any>(MOJANG_API + nick).pipe(
    map(response => ({
      isPremium: true,
      data: response.uuid
    })),
    catchError(error => {
      if(error.status === 404) {
        console.warn(`${nick} nie jest graczem premium! [404]`);
      }
      return of({
        isPremium: false,
        data: nick
      })
    })
  );
}

}