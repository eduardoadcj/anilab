import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { Anime } from '../../model/anime';

@Component({
  selector: 'app-form-anime',
  templateUrl: './form-anime.page.html',
  styleUrls: ['./form-anime.page.scss'],
})
export class FormAnimePage implements OnInit {

  key: string;
  anime: Anime = new Anime();

  constructor(private fire: AngularFireDatabase,
     private rota: Router,
     private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe( params => {
      if(params['key']){
        this.key = params['key'];
        (this.fire.object('anime/'+this.key)
          .valueChanges() as Observable<Anime>)
          .subscribe(value => this.anime = value);
      }
    });
  }

  salvar() : void{
    
    if(this.key){
      this.fire.object('anime/'+this.key).update(this.anime);
    }else{
      this.fire.list('anime').push(this.anime);
    }

    this.anime = new Anime();
    this.rota.navigate(['list-anime']);
  }

}
