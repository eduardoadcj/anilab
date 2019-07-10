import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-anime',
  templateUrl: './view-anime.page.html',
  styleUrls: ['./view-anime.page.scss'],
})
export class ViewAnimePage implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe( params => {
      if(params['key']){
        console.log(params['key']);
      }
    });
  }

}
