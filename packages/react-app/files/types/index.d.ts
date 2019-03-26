// commonly used in HoCs where either an object or function can be passed as
// configuration to the Hoc
type FnParams<TParams, TResult> = (passedProps: TParams) => TResult;
type FnOrObject<TParams, TResult> = TResult | FnParams<TParams, TResult>;
