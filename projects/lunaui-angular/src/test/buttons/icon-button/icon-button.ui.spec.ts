import { Component } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { LunaIconButtonComponent } from "projects/lunaui-angular/src/public-api";
import { queryById } from "../../helpers/selector";
import { LunaBtnSizes, LunaBtnVariants } from "projects/lunaui-angular/src/lib/buttons/button/button";
import { clickElement } from "../../helpers/click";


@Component({
  selector: 'test-wrapper',
  standalone: true,
  imports: [LunaIconButtonComponent],
  template: `
    <button data-testid="change-btn" (click)="changeSize()">
      Change Size
    </button>
    <button data-testid="change-variant" (click)="changeVariant()">
      Change Size
    </button>
    <luna-icon-button
      ariaLabel="test-button"
      type="button"
      name="test-button"
      [size]="size"
      [variant]="variant"
      (onClick)="listenClick($event)"
      (focus)="listenFocus($event)"
      (blur)="listenBlur($event)"
    >
      <svg
        #icon fill="none" viewBox="0 0 24 24"
        stroke-width="1.5" stroke="currentColor"
      >
        <path
          stroke-linecap="round" stroke-linejoin="round"
          d="M6 18 18 6M6 6l12 12"
        />
      </svg>
    </luna-icon-button>
  `
})
class TestWrapperComponent {
  public size: LunaBtnSizes = 'medium'
  public variant: LunaBtnVariants = 'filled'

  changeSize() {
    this.size = 'large'
  }
  changeVariant() {
    this.variant = 'outlined'
  }
  listenClick(e: Event) {
    console.log('clicked')
  }
  public listenFocus(event: Event) {
    console.log(event)
  }
  public listenBlur(event: Event) {
    console.log(event)
  }
}

describe('LunaIconButtonComponent - Integration', () => {
  let component: TestWrapperComponent;
  let fixture: ComponentFixture<TestWrapperComponent>;
  let testId: string;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestWrapperComponent]
    }).compileComponents()

    fixture = TestBed.createComponent(TestWrapperComponent);
    component = fixture.componentInstance;
    testId = 'luna-icon-button';
    fixture.detectChanges()
  })

  it('Should run', () => {
    expect(component).toBeTruthy();
  })

  it('Should render the icon button component', () => {
    const button = queryById(fixture, testId);
    expect(button).toBeTruthy();
  })
  it('Should change the button size correctly', () => {
    const [debugBtn, ele] = queryById<TestWrapperComponent, HTMLButtonElement>(fixture, testId);

    expect(ele.classList).toContain('luna-icon-btn-medium')

    clickElement({
      fixture,
      selector: 'change-btn',
      withTestId: true
    })

    fixture.detectChanges()

    expect(debugBtn.classes['luna-icon-btn-large']).toBeTrue()
  })
  it('Should change the button variant correctly', () => {
    const [debugBtn, ele] = queryById<TestWrapperComponent, HTMLButtonElement>(fixture, testId);

    expect(ele.classList).toContain('luna-icon-btn-filled')

    clickElement({
      fixture,
      selector: 'change-variant',
      withTestId: true
    })

    fixture.detectChanges()

    expect(debugBtn.classes['luna-icon-btn-outlined']).toBeTrue()
  })
  it('Should emit click event events', () => {

    const clickSpy = spyOn(component, 'listenClick');

    clickElement({
      fixture,
      selector: testId,
      withTestId: true
    })

    expect(clickSpy).toHaveBeenCalledTimes(1)
  })
  it('Should emit focus and blur events', () => {
    const [_, button] = queryById<TestWrapperComponent, HTMLButtonElement>(fixture, testId);

    const focusSpy = spyOn(component, 'listenFocus');
    const blurSpy = spyOn(component, 'listenBlur');

    button.focus()

    expect(focusSpy).toHaveBeenCalledTimes(1)

    button.blur()

    expect(blurSpy).toHaveBeenCalledTimes(1)
  });
  it('Should add correctly other input attributtes', () => {
    const [_, button] = queryById<TestWrapperComponent, HTMLButtonElement>(fixture, testId)

    expect(button.getAttribute('aria-label')).toBe('test-button')
    expect(button.getAttribute('type')).toBe('button')
    expect(button.getAttribute('name')).toBe('test-button')
  })
})
