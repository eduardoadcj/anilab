import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { AngularFireDatabase } from '@angular/fire/database';

import { Anime } from '../../model/anime';

@Component({
  selector: 'app-view-anime',
  templateUrl: './view-anime.page.html',
  styleUrls: ['./view-anime.page.scss'],
})
export class ViewAnimePage implements OnInit {

  key: string;
  anime: Observable<any>;

  constructor(private route: ActivatedRoute, private fire: AngularFireDatabase) { }

  ngOnInit() {
    this.route.queryParams.subscribe( params => {
      if(params['key']){
        this.key = params['key'];
        this.anime = this.fire.object('anime/'+this.key).valueChanges();
      }
    });
  }

}
