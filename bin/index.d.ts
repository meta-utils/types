/**
 * Take only array types from a type union
 */
export declare type ArrayType<T> = T extends any[] ? T : never;
/**
 * Make all properties in T required, but keep undefined in their type
 */
export declare type Explicit<T> = {
    [K in keyof Required<T>]: T[K];
};
/**
 * Make all properties that contain undefined in their type optional
 */
export declare type Implicit<T> = {
    [K in keyof _Implicit<T>]: _Implicit<T>[K];
};
declare type _Implicit<T> = {
    [K in DefinedKnownKeys<T> & keyof T]: T[K];
} & {
    [K in UndefinedKnownKeys<T> & keyof T]?: T[K];
} & {
    [K in IndexSignatureKeys<T> & keyof T]: string extends K ? T[K] : number extends K ? T[K] : never;
};
/**
 * Remove undefined from the type of all properties
 */
export declare type Defined<T> = {
    [K in keyof T]: Exclude<T[K], undefined>;
};
/**
 * Make all properties possibly undefined, but keep their requiredness
 */
export declare type Undefined<T> = {
    [K in keyof T]: T[K] | undefined;
};
/**
 * Make all properties in T required and remove undefined from their types
 */
export declare type RequiredDefined<T> = Defined<Required<T>>;
/**
 * Turn type union into type intersection
 */
export declare type UnionToIntersection<U> = (U extends any ? (k: U) => void : never) extends ((k: infer I) => void) ? I : never;
/**
 * Similar to `keyof T` but excludes index signatures
 */
export declare type KnownKeys<T> = {
    [K in keyof T]: string extends K ? never : number extends K ? never : K;
} extends {
    [_ in keyof T]: infer U;
} ? U : never;
/**
 * All keys that correspond to required properties of T, excluding index signatures
 */
export declare type RequiredKnownKeys<T> = {
    [K in keyof T]: {} extends Pick<T, K> ? never : K;
} extends {
    [_ in keyof T]: infer U;
} ? U : never;
/**
 * All keys that correspond to optional properties of T, excluding index signatures
 */
export declare type OptionalKnownKeys<T> = {
    [K in keyof T]: string extends K ? never : number extends K ? never : {} extends Pick<T, K> ? K : never;
} extends {
    [_ in keyof T]: infer U;
} ? U : never;
/**
 * All keys that correspond to properties of T which cannot be undefined, excluding index signatures
 */
export declare type DefinedKnownKeys<T> = {
    [K in keyof T]: string extends K ? never : number extends K ? never : undefined extends T[K] ? never : K;
} extends {
    [_ in keyof T]: infer U;
} ? U : never;
/**
 * All keys that correspond to properties of T which can be undefined, excluding index signatures
 */
export declare type UndefinedKnownKeys<T> = {
    [K in keyof T]: string extends K ? never : number extends K ? never : undefined extends T[K] ? K : never;
} extends {
    [_ in keyof T]: infer U;
} ? U : never;
/**
 * `string` if T has index signature which takes string,
 * `number` if T has index singature which takes number,
 * `never` otherwise
 */
export declare type IndexSignatureKeys<T> = string extends keyof T ? string : number extends keyof T ? number : never;
export {};
//# sourceMappingURL=index.d.ts.map