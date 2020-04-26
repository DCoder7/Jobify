import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SignUpTPage } from './sign-up-t.page';

describe('SignUpTPage', () => {
  let component: SignUpTPage;
  let fixture: ComponentFixture<SignUpTPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignUpTPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SignUpTPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
