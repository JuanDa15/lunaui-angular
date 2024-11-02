export declare type Nullable<T = void> = T | null | undefined;
export declare type Booleanish = boolean | 'true' | 'false';

export function isTruthy<T>(value: Nullable<T>): value is T {
  if (value === 'false') return false;
  return !!value;
}
export function isFalsy<T>(value: Nullable<T>): value is T {
  if (value === 'false') return true;

  return !value;
}
