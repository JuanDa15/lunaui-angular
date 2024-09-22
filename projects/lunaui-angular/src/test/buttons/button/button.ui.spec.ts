import { Component } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { LunaButtonComponent } from "projects/lunaui-angular/src/public-api";
import { getText, queryById } from "../../helpers/selector";
import { clickElement } from "../../helpers/click";
import { triggerEvent } from "../../helpers/events";

@Component({
  selector: 'test-wrapper',
  standalone: true,
  imports: [LunaButtonComponent],
  template: `
    <button
      data-testid="size-btn"
      (click)="changeSize()"
    >
      ChangeSize
    </button>
    <button
      data-testid="variant-btn"
      (click)="changeVariant()"
    >
      ChangeSize
    </button>
    <luna-button
      ariaLabel="test-button"
      type="button"
      name="test-button"
      [size]="size"
      [variant]="variant"
      (onClick)="listenClick($event)"
      (focus)="listenFocus($event)"
      (blur)="listenBlur($event)"
    >
      Test button
    </luna-button>
  `,
})
class TestWrapperComponent {
  public size: 'small' | 'medium' | 'large' = 'medium';
  public variant: 'filled' | 'tonal' | 'text' | 'outlined' | 'elevated' = 'filled';

  public changeVariant() {
    this.variant = 'tonal';
  }
  public changeSize() {
    this.size = 'small';
  }
  public listenClick(event: Event) {
    console.log(event)
  }
  public listenFocus(event: Event) {
    console.log(event)
  }
  public listenBlur(event: Event) {
    console.log(event)
  }
}

describe('LunaButtonComponent-Integration', () => {
  let component: TestWrapperComponent;
  let fixture: ComponentFixture<TestWrapperComponent>;
  let testId: string;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestWrapperComponent]
    }).compileComponents();
    fixture = TestBed.createComponent(TestWrapperComponent);
    component = fixture.componentInstance;
    testId = 'luna-button';
    fixture.detectChanges();
  });

  it('should render button with reflected content', () => {
    const text = getText(fixture, testId);
    expect(component).toBeTruthy();
    expect(text).toContain('Test button');
  })
  it('should change button size correctly', () => {
    const [_, button] = queryById<TestWrapperComponent, HTMLButtonElement>(fixture, testId)

    expect(button.classList).toContain('luna-btn-medium')

    clickElement({
      fixture,
      selector: 'size-btn',
      withTestId: true,
    })
    fixture.detectChanges();

    expect(button.classList).toContain('luna-btn-small')
  })
  it('should change button variant correctly', () => {
    const [_, button] = queryById<TestWrapperComponent, HTMLButtonElement>(fixture, testId)

    expect(button.classList).toContain('luna-btn-filled')

    clickElement({
      fixture,
      selector: 'variant-btn',
      withTestId: true,
    })
    fixture.detectChanges();

    expect(button.classList).toContain('luna-btn-tonal')
  })
  it('Should add correctly other input attributtes', () => {
    const [_, button] = queryById<TestWrapperComponent, HTMLButtonElement>(fixture, testId)

    expect(button.getAttribute('aria-label')).toBe('test-button')
    expect(button.getAttribute('type')).toBe('button')
    expect(button.getAttribute('name')).toBe('test-button')
  })
  it('Should call the click handler', () => {
    const spy = spyOn(component, 'listenClick');

    triggerEvent({
      eventName: 'click',
      fixture: fixture,
      selector: testId,
      withTestId: true
    })

    expect(spy).toHaveBeenCalledTimes(1)
  })
  it('Should call the focus and blur handler', () => {
    const spyFocus = spyOn(component, 'listenFocus');
    const spyBlur = spyOn(component, 'listenBlur');

    const [_, button] = queryById<TestWrapperComponent, HTMLButtonElement>(fixture, testId)

    button.focus()
    expect(spyFocus).toHaveBeenCalledTimes(1)

    button.blur()
    expect(spyBlur).toHaveBeenCalledTimes(1)
  })
})
