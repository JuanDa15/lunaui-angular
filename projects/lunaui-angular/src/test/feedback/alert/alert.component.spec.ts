import { ComponentFixture, TestBed } from '@angular/core/testing';

import { queryById } from '../../helpers/selector';
import { LunaAlertComponent } from 'projects/lunaui-angular/src/public-api';

describe('AlertComponent', () => {
  let component: LunaAlertComponent;
  let fixture: ComponentFixture<LunaAlertComponent>;
  const testId = 'luna-alert'

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LunaAlertComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(LunaAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should have default variant "info"', () => {
    const [debug, element] = queryById(fixture, testId)

    expect(debug.classes['luna-alert__info']).toBeTruthy()
  })
  it('Should have "medium" size default', () => {
    const [debug, element] = queryById(fixture, testId)

    expect(debug.classes['luna-alert__medium']).toBeTruthy()
  })
  it('Should have "box" style default', () => {
    const [debug, element] = queryById(fixture, testId)
    expect(debug.classes['luna-alert-box']).toBeTruthy()
  })
});
