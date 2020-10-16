import { Injectable } from '@angular/core';
import {GPU, Motherboard, Processor, RAM} from './home.model';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  private gpu: GPU[] = [ {
    id: 'gpu1',
    merek: 'NVIDIA',
    model: '3090',
    harga: '10000000',
    foto: 'https://www.tweaktown.com/images/news/7/4/74741_201_there-is-no-rtx-3080-ti-3090-has-24gb-ram-10gb_full.png',
    stok: '5000'
  }];
  private processor: Processor[] = [{
    id: 'proc1',
    merek: 'intel',
  model: 'i9-9820x',
  harga: '4500000',
  foto:  'https://cf.shopee.co.th/file/1432c2b551068aa4de7d6ba2c80565f8',

  baseclock: '3.3GHz',
  boostclock: '4.1GHz',
  core: '10 ',
  thread: '20',
  stok: '33'

  }];
private ram: RAM[] = [{
  id: 'ram1',
  merek: 'corsair',
  model: 'vengeance rgb pro ddr4',
  harga: '1539000',
  foto: 'https://ecs7.tokopedia.net/img/cache/700/product-1/2018/7/10/13757756/13757756_9717eac9-4c3a-43aa-ae2b-bbec690d7155_700_526.jpg',
  stok: '33',
  speed: '3200',
  ukuran: '16gb(2x8)'
}];

private motherboard: Motherboard[] = [{
  id: 'mot1',
  merek: 'ROG',
  model: 'Crosshair VIII dark hero',
  harga: '4449000',
  foto: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSKF2x21Qh8cbVtS-Q75IGp4WCxuPVTk8n7r7TGlFnHoeIAeZIVSd2-eKfI9_UEDnyafnfxEqRkUusLTRU_yO1UlwBNVFmL8gUSOEpoaxHZrflcYO1eAXeAow&usqp=CAE',
  stok: '33',
  chipset: 'LGA 1151',
  untukmerekapa: 'AMD'
}];
  constructor() { }

  getAllProcessor(){
    return[...this.processor];
  }
  getAllMotherboard(){
    return[...this.motherboard];
  }
  getAllRAM(){
    return[...this.ram];
  }

  getAllGPU(){
    return[...this.gpu];
  }
  getProcessor(processorid: string){
    return{...this.processor.find(processor => {
      return processor.id === processorid;
    })};
}
getRAM(ramid: string){
    return{...this.ram.find(ram => {
        return ram.id === ramid;
      })};

}
getMotherboard(motherboardid: string){
    return{...this.motherboard.find(motherboard => {
        return motherboard.id === motherboardid;
      })};
}
getGPU(gpuid: string){
    return{...this.gpu.find(gpu => {
       return gpu.id === gpuid;
      })};
}
}
