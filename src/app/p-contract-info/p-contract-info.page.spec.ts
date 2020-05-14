import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PContractInfoPage } from './p-contract-info.page';

describe('PContractInfoPage', () => {
  let component: PContractInfoPage;
  let fixture: ComponentFixture<PContractInfoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PContractInfoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PContractInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
