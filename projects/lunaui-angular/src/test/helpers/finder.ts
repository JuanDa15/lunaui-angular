/* eslint-disable @typescript-eslint/no-explicit-any */
import { DebugElement } from "@angular/core";
import { ComponentFixture } from "@angular/core/testing";
import { By } from "@angular/platform-browser";

export function existByTestId<T = any>({
  scope,
  id,
}: {
  scope: ComponentFixture<T> | DebugElement;
  id: string;
}): boolean {
  const selector = `[data-testid="${id}"]`;

  if (scope instanceof ComponentFixture) {
    return !!scope.debugElement.query(By.css(selector));
  }
  return !!scope.query(By.css(selector));
}

export function existBySelector<T = any>({
  scope,
  selector
}: {
  scope: ComponentFixture<T> | DebugElement;
  selector: string;
}) {
  if (scope instanceof ComponentFixture) {
    return !!scope.debugElement.query(By.css(selector));
  }
  return !!scope.query(By.css(selector));
}
