import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LunaIconButtonComponent } from 'projects/lunaui-angular/src/lib/buttons/icon-button/icon-button.component';
import { queryById } from '../../helpers/selector';


describe('IconButtonComponent', () => {
  let component: LunaIconButtonComponent;
  let fixture: ComponentFixture<LunaIconButtonComponent>;
  let testId = 'luna-icon-button'
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LunaIconButtonComponent]
    })
      .compileComponents();
    fixture = TestBed.createComponent(LunaIconButtonComponent);
    component = fixture.componentInstance;


    spyOn(console, 'error').and.stub()
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should have a default size of medium', () => {
    const [_, button] = queryById<LunaIconButtonComponent, HTMLButtonElement>(fixture, testId)

    expect(button.classList.contains('luna-icon-btn-medium')).toBeTruthy()
    expect(component.size).toBe('medium');
  });
  it('Button variant should be filled by default', () => {
    const [_, button] = queryById<LunaIconButtonComponent, HTMLButtonElement>(fixture, testId)

    expect(button.classList.contains('luna-icon-btn-filled')).toBeTruthy()
    expect(component.variant).toBe('filled');
  })
  it('should have a default type of "button"', () => {
    const [_, button] = queryById<LunaIconButtonComponent, HTMLButtonElement>(fixture, testId)

    expect(button.type).toBe('button');
    expect(component.type).toBe('button');
  })
  it('Should emit when click buttton', () => {
    component.onClick.subscribe((event) => {
      expect(event).toBeTruthy();
    })

    const [_, button] = queryById<LunaIconButtonComponent, HTMLButtonElement>(fixture, testId)

    button.click();
  });
  it('Should fire focus and blur events', () => {
    component.focus.subscribe((event) => {
      expect(event).toBeTruthy();
    })
    component.blur.subscribe((event) => {
      expect(event).toBeTruthy();
    })
    const [_, button] = queryById<LunaIconButtonComponent, HTMLButtonElement>(fixture, testId)
    button.focus();
    button.blur();
  })
});

