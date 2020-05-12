import * as React from "react";

export {};

export type ConsistentWith<DecorationTargetProps, InjectedProps> = {
  [P in keyof DecorationTargetProps]: P extends keyof InjectedProps
    ? InjectedProps[P] extends DecorationTargetProps[P]
      ? DecorationTargetProps[P]
      : InjectedProps[P]
    : DecorationTargetProps[P];
};

export type PropInjector<InjectedProps, AdditionalProps = {}> = <
  C extends React.ComponentType<
    ConsistentWith<React.ComponentProps<C>, InjectedProps>
  >
>(
  component: C
) => React.ComponentType<
  Omit<
    JSX.LibraryManagedAttributes<C, React.ComponentProps<C>>,
    keyof InjectedProps
  > &
    AdditionalProps
>;

export type Omit<T, K extends keyof any> = T extends any
  ? Pick<T, Exclude<keyof T, K>>
  : never;

export type OverridableStringUnion<T, U = {}> = GenerateStringUnion<
  Overwrite<T, U>
>;

export type Overwrite<T, U> = Omit<T, keyof U> & U;

type GenerateStringUnion<T> = Extract<
  {
    [Key in keyof T]: true extends T[Key] ? Key : never;
  }[keyof T],
  string
>;
