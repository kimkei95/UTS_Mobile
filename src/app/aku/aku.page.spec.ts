import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AkuPage } from './aku.page';

describe('AkuPage', () => {
  let component: AkuPage;
  let fixture: ComponentFixture<AkuPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AkuPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AkuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
