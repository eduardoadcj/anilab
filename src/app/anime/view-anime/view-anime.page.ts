import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { AngularFireDatabase } from '@angular/fire/database';
import { map } from 'rxjs/operators';

import { Anime } from '../../model/anime';
import { Message } from '../../model/message';

@Component({
  selector: 'app-view-anime',
  templateUrl: './view-anime.page.html',
  styleUrls: ['./view-anime.page.scss'],
})
export class ViewAnimePage implements OnInit {

  key: string;
  anime: Observable<any>;

  message: Message = new Message();
  listMessage: Observable<Message[]>;

  constructor(private route: ActivatedRoute, private fire: AngularFireDatabase) { }

  ngOnInit() {
    this.route.queryParams.subscribe( params => {
      if(params['key']){
        this.key = params['key'];
        this.anime = this.fire.object('anime/'+this.key).valueChanges();
        this.listMessage = this.fire.list<Message>('message/'+this.key).snapshotChanges().pipe(
          map( lista => lista.map( linha => ({key: linha.payload.key, ...linha.payload.val() }) ) )
        );
      }
    });
  }

  comentar(){
    this.fire.list('message/'+this.key).push(this.message);
    this.message = new Message();
  }

}
