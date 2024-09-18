
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LunaButtonComponent } from 'projects/lunaui-angular/src/public-api';
import { queryById } from '../../helpers/selector';

describe('LunaButtonComponent', () => {
  let component: LunaButtonComponent;
  let fixture: ComponentFixture<LunaButtonComponent>;
  let testId: string;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LunaButtonComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(LunaButtonComponent);
    component = fixture.componentInstance;
    testId = 'luna-button';
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should have a default size of medium', () => {
    const [_, button] = queryById<LunaButtonComponent, HTMLButtonElement>(fixture, testId)

    expect(button.classList.contains('luna-btn-medium')).toBeTruthy()
    expect(component.size).toBe('medium');
  });
  it('Button variant should be filled by default', () => {
    const [_, button] = queryById<LunaButtonComponent, HTMLButtonElement>(fixture, testId)

    expect(button.classList.contains('luna-btn-filled')).toBeTruthy()
    expect(component.variant).toBe('filled');
  })
  it('should have a default type of "button"', () => {
    const [_, button] = queryById<LunaButtonComponent, HTMLButtonElement>(fixture, testId)

    expect(button.type).toBe('button');
    expect(component.type).toBe('button');
  })
  it('Should emit when click buttton', () => {
    component.onClick.subscribe((event) => {
      expect(event).toBeTruthy();
    })

    const [_, button] = queryById<LunaButtonComponent, HTMLButtonElement>(fixture, testId)

    button.click();
  });
  it('Should fire focus and blur events', () => {
    component.focus.subscribe((event) => {
      expect(event).toBeTruthy();
    })
    component.blur.subscribe((event) => {
      expect(event).toBeTruthy();
    })
    const [_, button] = queryById<LunaButtonComponent, HTMLButtonElement>(fixture, testId)
    button.focus();
    button.blur();
  })
});
