import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Router } from '@angular/router';

import { Anime } from '../../model/anime';

@Component({
  selector: 'app-form-anime',
  templateUrl: './form-anime.page.html',
  styleUrls: ['./form-anime.page.scss'],
})
export class FormAnimePage implements OnInit {

  anime: Anime = new Anime();

  constructor(private fire: AngularFireDatabase, private rota: Router) { }

  ngOnInit() {
  }

  salvar() : void{
    this.fire.list('anime').push(this.anime);
    this.anime = new Anime();
    this.rota.navigate(['list-anime']);
  }

}
