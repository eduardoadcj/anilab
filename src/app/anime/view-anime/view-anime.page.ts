import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { AngularFireDatabase } from '@angular/fire/database';
import { map } from 'rxjs/operators';
import { AngularFireAuth } from "angularfire2/auth";
import { Router } from '@angular/router';

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

  constructor(private route: ActivatedRoute, 
    private fire: AngularFireDatabase,
    private rota: Router,
    private authService: AngularFireAuth) { }

  ngOnInit() {

    this.authService.authState.subscribe( (user) => {
      if(user){
        if(user.displayName){
          this.message.autor = user.displayName;
        }else{
          this.message.autor = user.email;
        }
        this.message.user_id = user.uid;
      }else{
        this.rota.navigate(['login']);
      }
    });

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
    if(this.message.conteudo){

      if(!this.message.autor)
        this.message.autor = "Anônimo";

      this.fire.list('message/'+this.key).push(this.message);
      this.message = new Message();
      
    }
  }

}
