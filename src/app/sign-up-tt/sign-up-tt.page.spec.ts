import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SignUpTtPage } from './sign-up-tt.page';

describe('SignUpTtPage', () => {
  let component: SignUpTtPage;
  let fixture: ComponentFixture<SignUpTtPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignUpTtPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SignUpTtPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
