import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

import { Anime } from '../../model/anime';

@Component({
  selector: 'app-form-anime',
  templateUrl: './form-anime.page.html',
  styleUrls: ['./form-anime.page.scss'],
})
export class FormAnimePage implements OnInit {

  anime: Anime = new Anime();

  constructor(private fire: AngularFireDatabase) { }

  ngOnInit() {
  }

  salvar() : void{
    this.fire.list('anime').push(this.anime);
    this.anime = new Anime();
  }

}
