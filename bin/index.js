"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
interface Foo
{
    a: number;
    b: number | undefined;
    c?: number;
    d?: number | undefined;

    [k: string]: number | undefined;
}

type X = {[K in keyof Foo]: Foo[K]}

type A = RequiredDefined<Foo>;
type B = Required<Foo>;
type C = Defined<Foo>;
type D = Explicit<Foo>;
type E = Implicit<Foo>;
type F = Undefined<Foo>;
type G = Partial<Foo>;

type K = keyof Foo;
type L = KnownKeys<Foo>;
type M = RequiredKnownKeys<Foo>;
type N = OptionalKnownKeys<Foo>;
//*/
