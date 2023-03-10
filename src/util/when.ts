/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
type ChainedWhen<T, R> = {
  on: <A>(pred: (v: T) => boolean, fn: () => A) => ChainedWhen<T, R | A>;
  otherwise: <A>(fn: () => A) => R | A;
};

const match = <T, R>(val: any): ChainedWhen<T, R> => ({
  on: <A>(_pred: (v: T) => boolean, _fn: () => A) => match<T, R | A>(val),
  otherwise: <A>(_fn: () => A): A | R => val,
});

const chain = <T, R>(val: T): ChainedWhen<T, R> => ({
  on: <A>(pred: (v: T) => boolean, fn: () => A) =>
    pred(val) ? match(fn()) : chain<T, A | R>(val),
  otherwise: <A>(fn: () => A) => fn(),
});

export const eq =
  <T>(val1: T) =>
  (val2: T) =>
    val1 === val2;
export const when = <T>(val: T) => ({
  on: <A>(pred: (v: T) => boolean, fn: () => A) =>
    pred(val) ? match<T, A>(fn()) : chain<T, A>(val),
});
