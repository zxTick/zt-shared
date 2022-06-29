export type Keys<T> = keyof T

export type MaybeNull<T> = T | null
export type MaybeUndefined<T> = T | undefined
export type MaybeUndefinedOrNull<T> = MaybeNull<MaybeUndefined<T>>
export type MaybeVoid<T> = T | void
export type MaybeVoidOrNull<T> = MaybeNull<MaybeVoid<T>>
export type MaybeVoidOrUndefined<T> = MaybeUndefined<MaybeVoid<T>>
export type MaybeVoidOrUndefinedOrNull<T> = MaybeNull<MaybeVoidOrUndefined<T>>
export type MaybePromiseVoid<T> = Promise<T | void>
export type MaybePromiseVoidOrNull<T> = Promise<T | void | null>
export type MaybePromiseVoidOrUndefined<T> = Promise<T | void | undefined>

