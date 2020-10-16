import { Component, OnInit } from '@angular/core';
import {RAM} from '../home.model';
import {ActivatedRoute} from '@angular/router';
import {HomeService} from '../home.service';

@Component({
  selector: 'app-home-detail',
  templateUrl: './home-detail.page.html',
  styleUrls: ['./home-detail.page.scss'],
})
export class HomeDetailPage implements OnInit {
  loaded;
  constructor(
      private activatedRoute: ActivatedRoute,
      private homeService: HomeService

  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has('id')) {return; }
      const id = paramMap.get('id');
      if (id.includes('ram')){
        this.loaded = this.homeService.getRAM(id);
      }
      else if (id.includes('mot')) {
        this.loaded = this.homeService.getMotherboard(id);
      }
      else if (id.includes('gpu')){
        this.loaded = this.homeService.getGPU(id);
      }
      else if (id.includes('proc')) {
        this.loaded = this.homeService.getProcessor(id);
      }
    });
  }

}
