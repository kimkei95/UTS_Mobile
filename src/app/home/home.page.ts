import { Component, OnInit } from '@angular/core';
import {GPU, Motherboard, Processor, RAM} from './home.model';
import {HomeService} from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  ram: RAM[];
  processor: Processor[];
  gpu: GPU[];
  motherboard: Motherboard[];
  constructor(private HomeService: HomeService ) { }

  ngOnInit() {
    this.gpu = this.HomeService.getAllGPU();
    this.motherboard = this.HomeService.getAllMotherboard();
    this.processor = this.HomeService.getAllProcessor();
    this.ram = this.HomeService.getAllRAM();
  }

}
