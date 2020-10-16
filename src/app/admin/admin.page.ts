import { Component, OnInit } from '@angular/core';
import {GPU, Motherboard, Processor, RAM} from '../home/home.model';
import {HomeService} from '../home/home.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {
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
