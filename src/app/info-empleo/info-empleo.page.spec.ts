import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InfoEmpleoPage } from './info-empleo.page';

describe('InfoEmpleoPage', () => {
  let component: InfoEmpleoPage;
  let fixture: ComponentFixture<InfoEmpleoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoEmpleoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InfoEmpleoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
