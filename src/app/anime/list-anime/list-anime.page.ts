import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireDatabase } from '@angular/fire/database';
import { map } from 'rxjs/operators';
import { AngularFireAuth } from "angularfire2/auth";

import { Anime } from '../../model/anime';

@Component({
  selector: 'app-list-anime',
  templateUrl: './list-anime.page.html',
  styleUrls: ['./list-anime.page.scss'],
})
export class ListAnimePage implements OnInit {

  user_id: Observable<string>;
  listAnime: Observable<Anime[]>;

  constructor(private fire: AngularFireDatabase,
     private authService: AngularFireAuth) {

    this.listAnime = this.fire.list<Anime>('anime').snapshotChanges().pipe(
      map( lista => lista.map( linha => ({key: linha.payload.key, ... linha.payload.val() }) ) )
    );

    this.user_id = this.authService.authState.pipe(map(user => user.uid));
  
  }

  ngOnInit() {
  }

  excluir(key: string, anime: Anime){
    this.fire.object('anime/'+key).remove();
    this.fire.object('message/'+key).remove();
  }

  // Consulta
  // db.list('/items', ref => ref.orderByChild('size').equalTo('large'))

}
