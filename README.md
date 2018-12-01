# types
[![Build Status](https://travis-ci.org/meta-utils/types.svg?branch=master)](https://travis-ci.org/meta-utils/types)

A package containing useful TypeScript types

<br/><br/>

## Key types
### `KnownKeys<T>`
Similar to `keyof T` but excludes index signatures. This is useful because if `T` had a index signature
for string keys, you'd only get `string` from `keyof T` and there aren't many interesting things you
can do with that.

### `RequiredKnownKeys<T>`
All keys that correspond to required properties of T, excluding index signatures.

### `OptionalKnownKeys<T>`
All keys that correspond to optional properties of T, excluding index signatures.

### `UndefinedKnownKeys<T>`
All keys that correspond to properties of T which can be undefined, excluding index signatures.

### `IndexSignatureKeys<T>`
 * `string` if T has index signature which takes string,
 * `number` if T has index singature which takes number,
 * `never` otherwise

<br/><br/>

## Property access types
These mapped types are similar in function to `Required<T>` and `Partial<T>`, the two types
that are already present in TypeScript. In fact, `Required` and `Partial` modify two orthogonal
qualities of the object at the same time, those are *optionality/requiredness* and *definedness*.
The types included in this library try to explore the whole extent of this space.

![diagram of requiredness v. definedness](https://user-images.githubusercontent.com/1671665/49328745-c92dc980-f575-11e8-89d8-cd7f48797fc8.png)

### `Explicit<T>`
Make all properties in T required, but keep undefined in their type.
The difference between `Required` and `Explicit` is that `Required` not only makes optional properties
required, it also removes undefined from their type. `Explicit` doesn't do that if you could assign a
value to a property of `T`, you can assign it to `Explicit<T>`. You just have to be explicit and list
all properties when defining a `Explicit<T>` object, even if they're undefined.

### `Implicit<T>`
The opposite of `Explicit` in the sense that it marks as optional
those properties which can be assigned `undefined`.

### `Defined<T>`
Removes `undefined` from the type of all properties. Required properties, that is.

### `Undefined<T>`
Makes all properties possibly undefined, but keep their requiredness.
The difference between `Undefined` and `Partial` is that `Partial` also marks all properties as optional.

### `RequiredDefined<T>`
Makes all properties in `T` required and removes undefined from their types. A shorthand for `Defined<Required<T>>`.

<br/><br/>

## Misc
### `ArrayType<T>`
From a type union it extracts those types that are assignable to `any[]`.

### `UnionToIntersection<T>`
Turns type union into type intersection. This is useful, for example, when you need to create
a _mapped overloaded function_: imagine you have an interface `T` and you want to generate
an overloaded method which takes the property key as an argument and returns the corresponding
property value. (This particular example isn't very useful but it demonstrates the potential
of this type for overloaded methods). It's quite easy to create a mapped type which has got the
to-be overloads:
```typescript
type ObjectOfOverloads<T> =
{
    [K in keyof T]: (key: K) => T[K]
};
```
Now you can turn the object of overloads to an union of overloads with an index type:
```typescript
type UnionOfOverloads<T> = ObjectOfOverloads<T>[keyof T];
```
The only thing we're left to do is to convert the union into
an intersection and we've got overloaded method we wanted:
```typescript
type AccessorMethodTo<T> = UnionToIntersection<UnionOfOverloads<T>>;
```
Or in the full form:
```typescript
type  AccessorMethodTo<T> =
  UnionToIntersection<
    {
      [K in keyof T]: (key: K) => T[K]
    }[keyof T]
  >;
```

![vs code overload screenshot](https://user-images.githubusercontent.com/1671665/49329415-d8fddb80-f57e-11e8-8dda-14137a05cd89.png)
