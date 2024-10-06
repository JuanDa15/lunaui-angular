/* eslint-disable @typescript-eslint/no-explicit-any */
import { DebugElement, Type } from "@angular/core";
import { ComponentFixture } from "@angular/core/testing";
import { By } from "@angular/platform-browser";




export function queryById<F = any, T = any>(
  scope: ComponentFixture<F> | DebugElement,
  id: string
): [DebugElement, T] {
  if (!id) throw new Error('Test ID is required');

  const templateSelector = `[data-testid="${id}"]`;
  let debug;

  if (scope instanceof ComponentFixture) {
    debug = scope.debugElement.query(By.css(templateSelector));
  }
  if (scope instanceof DebugElement) {
    debug = scope.query(By.css(templateSelector));
  }

  let element;

  if (!debug) {
    throw new Error(`Element with id: ${id} not found`);
  }

  element = debug.nativeElement as T;
  return [debug, element];
}

export function queryBySelector<F = any, T = any>(
  scope: ComponentFixture<F> | DebugElement,
  selector: string
): [DebugElement, T] {
  if (!selector) throw new Error('Test selector is required');

  let debug;

  if (scope instanceof ComponentFixture) {
    debug = scope.debugElement.query(By.css(selector));
  }
  if (scope instanceof DebugElement) {
    debug = scope.query(By.css(selector));
  }

  let element;

  if (!debug) {
    throw new Error(`Element with selector: ${selector} not found`);
  }

  element = debug.nativeElement as T;
  return [debug, element];
}

export function queryAll<F = any>(
  scope: ComponentFixture<F> | DebugElement,
  selector: string
): DebugElement[] {
  if (!selector) throw new Error('Test selector is required');

  let debug;

  if (scope instanceof ComponentFixture) {
    debug = scope.debugElement.queryAll(By.css(selector));
  }
  if (scope instanceof DebugElement) {
    debug = scope.queryAll(By.css(selector));
  }

  if (!debug) {
    throw new Error(`Elements with selector: ${selector} not found`);
  }

  return debug;
}

export function queryAllByDirective<T, D>(
  scope: ComponentFixture<T> | DebugElement,
  directive: Type<D>
): DebugElement[] {
  let debug;

  if (scope instanceof ComponentFixture) {
    debug = scope.debugElement.queryAll(By.directive(directive));
  }

  if (scope instanceof DebugElement) {
    debug = scope.queryAll(By.directive(directive));
  }
  return debug || [];
}

export function getText<F = any>(
  fixture: ComponentFixture<F>,
  id?: string,
  selector?: string
): string {
  if (!id && !selector) throw new Error('Test ID or selector is required');

  if (id) {
    const [_, ele]: [DebugElement, HTMLElement] = queryById(fixture, id);
    return ele.textContent ?? '';
  }
  if (selector) {
    const [_, ele]: [DebugElement, HTMLElement] = queryBySelector(fixture, selector);
    return ele.textContent ?? '';
  }

  return ''
}

