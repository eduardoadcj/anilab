import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireDatabase } from '@angular/fire/database';
import { map } from 'rxjs/operators';

import { Anime } from '../../model/anime';

@Component({
  selector: 'app-list-anime',
  templateUrl: './list-anime.page.html',
  styleUrls: ['./list-anime.page.scss'],
})
export class ListAnimePage implements OnInit {

  listAnime: Observable<Anime[]>;

  constructor(private fire: AngularFireDatabase) {
    this.listAnime = this.fire.list<Anime>('anime').snapshotChanges().pipe(
      map( lista => lista.map( linha => ({key: linha.payload.key, ... linha.payload.val() }) ) )
    );
  }

  ngOnInit() {
  }

  excluir(key: string, anime: Anime){
    this.fire.object('anime/'+key).remove();
    this.fire.object('message/'+key).remove();
  }

}
