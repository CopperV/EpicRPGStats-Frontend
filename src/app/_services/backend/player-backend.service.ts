import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { DetailPlayer } from '../../_models/player-detail-interfaces';
import { ListPlayer } from '../../_models/player-list-interfaces';
import { SearchPlayer } from '../../_models/player-search-interfaces';

const PLAYER_API = 'http://epic-rpg.pl:24565/players';

@Injectable({
  providedIn: 'root'
})
export class PlayerBackendService {

constructor(private http: HttpClient) { }

getPlayerPage(_page: number, _size: number): Observable<ListPlayer[]> {
  return this.http.get<ListPlayer[]>(PLAYER_API, {
    params: {
      page: _page,
      size: _size
    }
  });
}

getPlayerById(_id: number): Observable<DetailPlayer> {
  return this.http.get<DetailPlayer>(PLAYER_API+"/get", {
    params: {
      id: _id
    }
  });
}

getPlayerByUid(_uid: string): Observable<DetailPlayer> {
  return this.http.get<DetailPlayer>(PLAYER_API+"/get", {
    params: {
      uid: _uid
    }
  });
}

getPlayerByNick(_nick: string): Observable<DetailPlayer> {
  return this.http.get<DetailPlayer>(PLAYER_API+"/get", {
    params: {
      nick: _nick
    }
  });
}

getPlayersAmount(): Observable<number> {
  return this.http.get<number>(PLAYER_API+"/get-player-amount");
}

getPlayerListByName(_name: string): Observable<SearchPlayer[]> {
  return this.http.get<SearchPlayer[]>(PLAYER_API+"/search-players-by-name", {
    params: {
      name: _name
    }
  });
}

}
