
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model parameter
 * 
 */
export type parameter = $Result.DefaultSelection<Prisma.$parameterPayload>
/**
 * Model score
 * 
 */
export type score = $Result.DefaultSelection<Prisma.$scorePayload>
/**
 * Model suggest
 * 
 */
export type suggest = $Result.DefaultSelection<Prisma.$suggestPayload>
/**
 * Model users
 * 
 */
export type users = $Result.DefaultSelection<Prisma.$usersPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const users_gender: {
  male: 'male',
  female: 'female'
};

export type users_gender = (typeof users_gender)[keyof typeof users_gender]

}

export type users_gender = $Enums.users_gender

export const users_gender: typeof $Enums.users_gender

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Parameters
 * const parameters = await prisma.parameter.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Parameters
   * const parameters = await prisma.parameter.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.parameter`: Exposes CRUD operations for the **parameter** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Parameters
    * const parameters = await prisma.parameter.findMany()
    * ```
    */
  get parameter(): Prisma.parameterDelegate<ExtArgs>;

  /**
   * `prisma.score`: Exposes CRUD operations for the **score** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Scores
    * const scores = await prisma.score.findMany()
    * ```
    */
  get score(): Prisma.scoreDelegate<ExtArgs>;

  /**
   * `prisma.suggest`: Exposes CRUD operations for the **suggest** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Suggests
    * const suggests = await prisma.suggest.findMany()
    * ```
    */
  get suggest(): Prisma.suggestDelegate<ExtArgs>;

  /**
   * `prisma.users`: Exposes CRUD operations for the **users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.usersDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.15.0
   * Query Engine version: b9a39a7ee606c28e3455d0fd60e78c3ba82b1a2b
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    parameter: 'parameter',
    score: 'score',
    suggest: 'suggest',
    users: 'users'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'parameter' | 'score' | 'suggest' | 'users'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      parameter: {
        payload: Prisma.$parameterPayload<ExtArgs>
        fields: Prisma.parameterFieldRefs
        operations: {
          findUnique: {
            args: Prisma.parameterFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$parameterPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.parameterFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$parameterPayload>
          }
          findFirst: {
            args: Prisma.parameterFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$parameterPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.parameterFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$parameterPayload>
          }
          findMany: {
            args: Prisma.parameterFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$parameterPayload>[]
          }
          create: {
            args: Prisma.parameterCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$parameterPayload>
          }
          createMany: {
            args: Prisma.parameterCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.parameterDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$parameterPayload>
          }
          update: {
            args: Prisma.parameterUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$parameterPayload>
          }
          deleteMany: {
            args: Prisma.parameterDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.parameterUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.parameterUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$parameterPayload>
          }
          aggregate: {
            args: Prisma.ParameterAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateParameter>
          }
          groupBy: {
            args: Prisma.parameterGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ParameterGroupByOutputType>[]
          }
          count: {
            args: Prisma.parameterCountArgs<ExtArgs>,
            result: $Utils.Optional<ParameterCountAggregateOutputType> | number
          }
        }
      }
      score: {
        payload: Prisma.$scorePayload<ExtArgs>
        fields: Prisma.scoreFieldRefs
        operations: {
          findUnique: {
            args: Prisma.scoreFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$scorePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.scoreFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$scorePayload>
          }
          findFirst: {
            args: Prisma.scoreFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$scorePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.scoreFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$scorePayload>
          }
          findMany: {
            args: Prisma.scoreFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$scorePayload>[]
          }
          create: {
            args: Prisma.scoreCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$scorePayload>
          }
          createMany: {
            args: Prisma.scoreCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.scoreDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$scorePayload>
          }
          update: {
            args: Prisma.scoreUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$scorePayload>
          }
          deleteMany: {
            args: Prisma.scoreDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.scoreUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.scoreUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$scorePayload>
          }
          aggregate: {
            args: Prisma.ScoreAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateScore>
          }
          groupBy: {
            args: Prisma.scoreGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ScoreGroupByOutputType>[]
          }
          count: {
            args: Prisma.scoreCountArgs<ExtArgs>,
            result: $Utils.Optional<ScoreCountAggregateOutputType> | number
          }
        }
      }
      suggest: {
        payload: Prisma.$suggestPayload<ExtArgs>
        fields: Prisma.suggestFieldRefs
        operations: {
          findUnique: {
            args: Prisma.suggestFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$suggestPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.suggestFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$suggestPayload>
          }
          findFirst: {
            args: Prisma.suggestFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$suggestPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.suggestFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$suggestPayload>
          }
          findMany: {
            args: Prisma.suggestFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$suggestPayload>[]
          }
          create: {
            args: Prisma.suggestCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$suggestPayload>
          }
          createMany: {
            args: Prisma.suggestCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.suggestDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$suggestPayload>
          }
          update: {
            args: Prisma.suggestUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$suggestPayload>
          }
          deleteMany: {
            args: Prisma.suggestDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.suggestUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.suggestUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$suggestPayload>
          }
          aggregate: {
            args: Prisma.SuggestAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateSuggest>
          }
          groupBy: {
            args: Prisma.suggestGroupByArgs<ExtArgs>,
            result: $Utils.Optional<SuggestGroupByOutputType>[]
          }
          count: {
            args: Prisma.suggestCountArgs<ExtArgs>,
            result: $Utils.Optional<SuggestCountAggregateOutputType> | number
          }
        }
      }
      users: {
        payload: Prisma.$usersPayload<ExtArgs>
        fields: Prisma.usersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usersFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usersFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findFirst: {
            args: Prisma.usersFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usersFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findMany: {
            args: Prisma.usersFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          create: {
            args: Prisma.usersCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          createMany: {
            args: Prisma.usersCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.usersDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          update: {
            args: Prisma.usersUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          deleteMany: {
            args: Prisma.usersDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.usersUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.usersUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.usersGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.usersCountArgs<ExtArgs>,
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type ScoreCountOutputType
   */

  export type ScoreCountOutputType = {
    parameter: number
  }

  export type ScoreCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parameter?: boolean | ScoreCountOutputTypeCountParameterArgs
  }

  // Custom InputTypes
  /**
   * ScoreCountOutputType without action
   */
  export type ScoreCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScoreCountOutputType
     */
    select?: ScoreCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ScoreCountOutputType without action
   */
  export type ScoreCountOutputTypeCountParameterArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: parameterWhereInput
  }


  /**
   * Count Type SuggestCountOutputType
   */

  export type SuggestCountOutputType = {
    parameter: number
  }

  export type SuggestCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parameter?: boolean | SuggestCountOutputTypeCountParameterArgs
  }

  // Custom InputTypes
  /**
   * SuggestCountOutputType without action
   */
  export type SuggestCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuggestCountOutputType
     */
    select?: SuggestCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SuggestCountOutputType without action
   */
  export type SuggestCountOutputTypeCountParameterArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: parameterWhereInput
  }


  /**
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    parameter: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parameter?: boolean | UsersCountOutputTypeCountParameterArgs
  }

  // Custom InputTypes
  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountParameterArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: parameterWhereInput
  }


  /**
   * Models
   */

  /**
   * Model parameter
   */

  export type AggregateParameter = {
    _count: ParameterCountAggregateOutputType | null
    _avg: ParameterAvgAggregateOutputType | null
    _sum: ParameterSumAggregateOutputType | null
    _min: ParameterMinAggregateOutputType | null
    _max: ParameterMaxAggregateOutputType | null
  }

  export type ParameterAvgAggregateOutputType = {
    parameterId: number | null
    height: Decimal | null
    weight: Decimal | null
    calorie: number | null
    protein: number | null
    cabohydrate: number | null
    fat: number | null
    userId: number | null
    scoreId: number | null
    suggestId: number | null
  }

  export type ParameterSumAggregateOutputType = {
    parameterId: number | null
    height: Decimal | null
    weight: Decimal | null
    calorie: number | null
    protein: number | null
    cabohydrate: number | null
    fat: number | null
    userId: number | null
    scoreId: number | null
    suggestId: number | null
  }

  export type ParameterMinAggregateOutputType = {
    parameterId: number | null
    date: Date | null
    height: Decimal | null
    weight: Decimal | null
    sleepStart: Date | null
    sleepEnd: Date | null
    calorie: number | null
    protein: number | null
    cabohydrate: number | null
    fat: number | null
    userId: number | null
    scoreId: number | null
    suggestId: number | null
  }

  export type ParameterMaxAggregateOutputType = {
    parameterId: number | null
    date: Date | null
    height: Decimal | null
    weight: Decimal | null
    sleepStart: Date | null
    sleepEnd: Date | null
    calorie: number | null
    protein: number | null
    cabohydrate: number | null
    fat: number | null
    userId: number | null
    scoreId: number | null
    suggestId: number | null
  }

  export type ParameterCountAggregateOutputType = {
    parameterId: number
    date: number
    height: number
    weight: number
    sleepStart: number
    sleepEnd: number
    calorie: number
    protein: number
    cabohydrate: number
    fat: number
    userId: number
    scoreId: number
    suggestId: number
    _all: number
  }


  export type ParameterAvgAggregateInputType = {
    parameterId?: true
    height?: true
    weight?: true
    calorie?: true
    protein?: true
    cabohydrate?: true
    fat?: true
    userId?: true
    scoreId?: true
    suggestId?: true
  }

  export type ParameterSumAggregateInputType = {
    parameterId?: true
    height?: true
    weight?: true
    calorie?: true
    protein?: true
    cabohydrate?: true
    fat?: true
    userId?: true
    scoreId?: true
    suggestId?: true
  }

  export type ParameterMinAggregateInputType = {
    parameterId?: true
    date?: true
    height?: true
    weight?: true
    sleepStart?: true
    sleepEnd?: true
    calorie?: true
    protein?: true
    cabohydrate?: true
    fat?: true
    userId?: true
    scoreId?: true
    suggestId?: true
  }

  export type ParameterMaxAggregateInputType = {
    parameterId?: true
    date?: true
    height?: true
    weight?: true
    sleepStart?: true
    sleepEnd?: true
    calorie?: true
    protein?: true
    cabohydrate?: true
    fat?: true
    userId?: true
    scoreId?: true
    suggestId?: true
  }

  export type ParameterCountAggregateInputType = {
    parameterId?: true
    date?: true
    height?: true
    weight?: true
    sleepStart?: true
    sleepEnd?: true
    calorie?: true
    protein?: true
    cabohydrate?: true
    fat?: true
    userId?: true
    scoreId?: true
    suggestId?: true
    _all?: true
  }

  export type ParameterAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which parameter to aggregate.
     */
    where?: parameterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of parameters to fetch.
     */
    orderBy?: parameterOrderByWithRelationInput | parameterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: parameterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` parameters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` parameters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned parameters
    **/
    _count?: true | ParameterCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ParameterAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ParameterSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ParameterMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ParameterMaxAggregateInputType
  }

  export type GetParameterAggregateType<T extends ParameterAggregateArgs> = {
        [P in keyof T & keyof AggregateParameter]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateParameter[P]>
      : GetScalarType<T[P], AggregateParameter[P]>
  }




  export type parameterGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: parameterWhereInput
    orderBy?: parameterOrderByWithAggregationInput | parameterOrderByWithAggregationInput[]
    by: ParameterScalarFieldEnum[] | ParameterScalarFieldEnum
    having?: parameterScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ParameterCountAggregateInputType | true
    _avg?: ParameterAvgAggregateInputType
    _sum?: ParameterSumAggregateInputType
    _min?: ParameterMinAggregateInputType
    _max?: ParameterMaxAggregateInputType
  }

  export type ParameterGroupByOutputType = {
    parameterId: number
    date: Date
    height: Decimal
    weight: Decimal
    sleepStart: Date
    sleepEnd: Date
    calorie: number
    protein: number
    cabohydrate: number
    fat: number
    userId: number
    scoreId: number
    suggestId: number
    _count: ParameterCountAggregateOutputType | null
    _avg: ParameterAvgAggregateOutputType | null
    _sum: ParameterSumAggregateOutputType | null
    _min: ParameterMinAggregateOutputType | null
    _max: ParameterMaxAggregateOutputType | null
  }

  type GetParameterGroupByPayload<T extends parameterGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ParameterGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ParameterGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ParameterGroupByOutputType[P]>
            : GetScalarType<T[P], ParameterGroupByOutputType[P]>
        }
      >
    >


  export type parameterSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    parameterId?: boolean
    date?: boolean
    height?: boolean
    weight?: boolean
    sleepStart?: boolean
    sleepEnd?: boolean
    calorie?: boolean
    protein?: boolean
    cabohydrate?: boolean
    fat?: boolean
    userId?: boolean
    scoreId?: boolean
    suggestId?: boolean
    score?: boolean | scoreDefaultArgs<ExtArgs>
    suggest?: boolean | suggestDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["parameter"]>


  export type parameterSelectScalar = {
    parameterId?: boolean
    date?: boolean
    height?: boolean
    weight?: boolean
    sleepStart?: boolean
    sleepEnd?: boolean
    calorie?: boolean
    protein?: boolean
    cabohydrate?: boolean
    fat?: boolean
    userId?: boolean
    scoreId?: boolean
    suggestId?: boolean
  }

  export type parameterInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    score?: boolean | scoreDefaultArgs<ExtArgs>
    suggest?: boolean | suggestDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }

  export type $parameterPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "parameter"
    objects: {
      score: Prisma.$scorePayload<ExtArgs>
      suggest: Prisma.$suggestPayload<ExtArgs>
      users: Prisma.$usersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      parameterId: number
      date: Date
      height: Prisma.Decimal
      weight: Prisma.Decimal
      sleepStart: Date
      sleepEnd: Date
      calorie: number
      protein: number
      cabohydrate: number
      fat: number
      userId: number
      scoreId: number
      suggestId: number
    }, ExtArgs["result"]["parameter"]>
    composites: {}
  }

  type parameterGetPayload<S extends boolean | null | undefined | parameterDefaultArgs> = $Result.GetResult<Prisma.$parameterPayload, S>

  type parameterCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<parameterFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ParameterCountAggregateInputType | true
    }

  export interface parameterDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['parameter'], meta: { name: 'parameter' } }
    /**
     * Find zero or one Parameter that matches the filter.
     * @param {parameterFindUniqueArgs} args - Arguments to find a Parameter
     * @example
     * // Get one Parameter
     * const parameter = await prisma.parameter.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends parameterFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, parameterFindUniqueArgs<ExtArgs>>
    ): Prisma__parameterClient<$Result.GetResult<Prisma.$parameterPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Parameter that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {parameterFindUniqueOrThrowArgs} args - Arguments to find a Parameter
     * @example
     * // Get one Parameter
     * const parameter = await prisma.parameter.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends parameterFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, parameterFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__parameterClient<$Result.GetResult<Prisma.$parameterPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Parameter that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {parameterFindFirstArgs} args - Arguments to find a Parameter
     * @example
     * // Get one Parameter
     * const parameter = await prisma.parameter.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends parameterFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, parameterFindFirstArgs<ExtArgs>>
    ): Prisma__parameterClient<$Result.GetResult<Prisma.$parameterPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Parameter that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {parameterFindFirstOrThrowArgs} args - Arguments to find a Parameter
     * @example
     * // Get one Parameter
     * const parameter = await prisma.parameter.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends parameterFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, parameterFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__parameterClient<$Result.GetResult<Prisma.$parameterPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Parameters that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {parameterFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Parameters
     * const parameters = await prisma.parameter.findMany()
     * 
     * // Get first 10 Parameters
     * const parameters = await prisma.parameter.findMany({ take: 10 })
     * 
     * // Only select the `parameterId`
     * const parameterWithParameterIdOnly = await prisma.parameter.findMany({ select: { parameterId: true } })
     * 
    **/
    findMany<T extends parameterFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, parameterFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$parameterPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Parameter.
     * @param {parameterCreateArgs} args - Arguments to create a Parameter.
     * @example
     * // Create one Parameter
     * const Parameter = await prisma.parameter.create({
     *   data: {
     *     // ... data to create a Parameter
     *   }
     * })
     * 
    **/
    create<T extends parameterCreateArgs<ExtArgs>>(
      args: SelectSubset<T, parameterCreateArgs<ExtArgs>>
    ): Prisma__parameterClient<$Result.GetResult<Prisma.$parameterPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Parameters.
     * @param {parameterCreateManyArgs} args - Arguments to create many Parameters.
     * @example
     * // Create many Parameters
     * const parameter = await prisma.parameter.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends parameterCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, parameterCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Parameter.
     * @param {parameterDeleteArgs} args - Arguments to delete one Parameter.
     * @example
     * // Delete one Parameter
     * const Parameter = await prisma.parameter.delete({
     *   where: {
     *     // ... filter to delete one Parameter
     *   }
     * })
     * 
    **/
    delete<T extends parameterDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, parameterDeleteArgs<ExtArgs>>
    ): Prisma__parameterClient<$Result.GetResult<Prisma.$parameterPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Parameter.
     * @param {parameterUpdateArgs} args - Arguments to update one Parameter.
     * @example
     * // Update one Parameter
     * const parameter = await prisma.parameter.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends parameterUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, parameterUpdateArgs<ExtArgs>>
    ): Prisma__parameterClient<$Result.GetResult<Prisma.$parameterPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Parameters.
     * @param {parameterDeleteManyArgs} args - Arguments to filter Parameters to delete.
     * @example
     * // Delete a few Parameters
     * const { count } = await prisma.parameter.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends parameterDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, parameterDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Parameters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {parameterUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Parameters
     * const parameter = await prisma.parameter.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends parameterUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, parameterUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Parameter.
     * @param {parameterUpsertArgs} args - Arguments to update or create a Parameter.
     * @example
     * // Update or create a Parameter
     * const parameter = await prisma.parameter.upsert({
     *   create: {
     *     // ... data to create a Parameter
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Parameter we want to update
     *   }
     * })
    **/
    upsert<T extends parameterUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, parameterUpsertArgs<ExtArgs>>
    ): Prisma__parameterClient<$Result.GetResult<Prisma.$parameterPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Parameters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {parameterCountArgs} args - Arguments to filter Parameters to count.
     * @example
     * // Count the number of Parameters
     * const count = await prisma.parameter.count({
     *   where: {
     *     // ... the filter for the Parameters we want to count
     *   }
     * })
    **/
    count<T extends parameterCountArgs>(
      args?: Subset<T, parameterCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ParameterCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Parameter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParameterAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ParameterAggregateArgs>(args: Subset<T, ParameterAggregateArgs>): Prisma.PrismaPromise<GetParameterAggregateType<T>>

    /**
     * Group by Parameter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {parameterGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends parameterGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: parameterGroupByArgs['orderBy'] }
        : { orderBy?: parameterGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, parameterGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetParameterGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the parameter model
   */
  readonly fields: parameterFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for parameter.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__parameterClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    score<T extends scoreDefaultArgs<ExtArgs> = {}>(args?: Subset<T, scoreDefaultArgs<ExtArgs>>): Prisma__scoreClient<$Result.GetResult<Prisma.$scorePayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    suggest<T extends suggestDefaultArgs<ExtArgs> = {}>(args?: Subset<T, suggestDefaultArgs<ExtArgs>>): Prisma__suggestClient<$Result.GetResult<Prisma.$suggestPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    users<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the parameter model
   */ 
  interface parameterFieldRefs {
    readonly parameterId: FieldRef<"parameter", 'Int'>
    readonly date: FieldRef<"parameter", 'DateTime'>
    readonly height: FieldRef<"parameter", 'Decimal'>
    readonly weight: FieldRef<"parameter", 'Decimal'>
    readonly sleepStart: FieldRef<"parameter", 'DateTime'>
    readonly sleepEnd: FieldRef<"parameter", 'DateTime'>
    readonly calorie: FieldRef<"parameter", 'Int'>
    readonly protein: FieldRef<"parameter", 'Int'>
    readonly cabohydrate: FieldRef<"parameter", 'Int'>
    readonly fat: FieldRef<"parameter", 'Int'>
    readonly userId: FieldRef<"parameter", 'Int'>
    readonly scoreId: FieldRef<"parameter", 'Int'>
    readonly suggestId: FieldRef<"parameter", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * parameter findUnique
   */
  export type parameterFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the parameter
     */
    select?: parameterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: parameterInclude<ExtArgs> | null
    /**
     * Filter, which parameter to fetch.
     */
    where: parameterWhereUniqueInput
  }

  /**
   * parameter findUniqueOrThrow
   */
  export type parameterFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the parameter
     */
    select?: parameterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: parameterInclude<ExtArgs> | null
    /**
     * Filter, which parameter to fetch.
     */
    where: parameterWhereUniqueInput
  }

  /**
   * parameter findFirst
   */
  export type parameterFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the parameter
     */
    select?: parameterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: parameterInclude<ExtArgs> | null
    /**
     * Filter, which parameter to fetch.
     */
    where?: parameterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of parameters to fetch.
     */
    orderBy?: parameterOrderByWithRelationInput | parameterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for parameters.
     */
    cursor?: parameterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` parameters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` parameters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of parameters.
     */
    distinct?: ParameterScalarFieldEnum | ParameterScalarFieldEnum[]
  }

  /**
   * parameter findFirstOrThrow
   */
  export type parameterFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the parameter
     */
    select?: parameterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: parameterInclude<ExtArgs> | null
    /**
     * Filter, which parameter to fetch.
     */
    where?: parameterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of parameters to fetch.
     */
    orderBy?: parameterOrderByWithRelationInput | parameterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for parameters.
     */
    cursor?: parameterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` parameters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` parameters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of parameters.
     */
    distinct?: ParameterScalarFieldEnum | ParameterScalarFieldEnum[]
  }

  /**
   * parameter findMany
   */
  export type parameterFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the parameter
     */
    select?: parameterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: parameterInclude<ExtArgs> | null
    /**
     * Filter, which parameters to fetch.
     */
    where?: parameterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of parameters to fetch.
     */
    orderBy?: parameterOrderByWithRelationInput | parameterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing parameters.
     */
    cursor?: parameterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` parameters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` parameters.
     */
    skip?: number
    distinct?: ParameterScalarFieldEnum | ParameterScalarFieldEnum[]
  }

  /**
   * parameter create
   */
  export type parameterCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the parameter
     */
    select?: parameterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: parameterInclude<ExtArgs> | null
    /**
     * The data needed to create a parameter.
     */
    data: XOR<parameterCreateInput, parameterUncheckedCreateInput>
  }

  /**
   * parameter createMany
   */
  export type parameterCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many parameters.
     */
    data: parameterCreateManyInput | parameterCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * parameter update
   */
  export type parameterUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the parameter
     */
    select?: parameterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: parameterInclude<ExtArgs> | null
    /**
     * The data needed to update a parameter.
     */
    data: XOR<parameterUpdateInput, parameterUncheckedUpdateInput>
    /**
     * Choose, which parameter to update.
     */
    where: parameterWhereUniqueInput
  }

  /**
   * parameter updateMany
   */
  export type parameterUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update parameters.
     */
    data: XOR<parameterUpdateManyMutationInput, parameterUncheckedUpdateManyInput>
    /**
     * Filter which parameters to update
     */
    where?: parameterWhereInput
  }

  /**
   * parameter upsert
   */
  export type parameterUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the parameter
     */
    select?: parameterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: parameterInclude<ExtArgs> | null
    /**
     * The filter to search for the parameter to update in case it exists.
     */
    where: parameterWhereUniqueInput
    /**
     * In case the parameter found by the `where` argument doesn't exist, create a new parameter with this data.
     */
    create: XOR<parameterCreateInput, parameterUncheckedCreateInput>
    /**
     * In case the parameter was found with the provided `where` argument, update it with this data.
     */
    update: XOR<parameterUpdateInput, parameterUncheckedUpdateInput>
  }

  /**
   * parameter delete
   */
  export type parameterDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the parameter
     */
    select?: parameterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: parameterInclude<ExtArgs> | null
    /**
     * Filter which parameter to delete.
     */
    where: parameterWhereUniqueInput
  }

  /**
   * parameter deleteMany
   */
  export type parameterDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which parameters to delete
     */
    where?: parameterWhereInput
  }

  /**
   * parameter without action
   */
  export type parameterDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the parameter
     */
    select?: parameterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: parameterInclude<ExtArgs> | null
  }


  /**
   * Model score
   */

  export type AggregateScore = {
    _count: ScoreCountAggregateOutputType | null
    _avg: ScoreAvgAggregateOutputType | null
    _sum: ScoreSumAggregateOutputType | null
    _min: ScoreMinAggregateOutputType | null
    _max: ScoreMaxAggregateOutputType | null
  }

  export type ScoreAvgAggregateOutputType = {
    scoreId: number | null
    totalScore: number | null
    BMIScore: number | null
    sleepScore: number | null
    calorieScore: number | null
    proteinScore: number | null
    cabohydrateScore: number | null
    fatScore: number | null
  }

  export type ScoreSumAggregateOutputType = {
    scoreId: number | null
    totalScore: number | null
    BMIScore: number | null
    sleepScore: number | null
    calorieScore: number | null
    proteinScore: number | null
    cabohydrateScore: number | null
    fatScore: number | null
  }

  export type ScoreMinAggregateOutputType = {
    scoreId: number | null
    totalScore: number | null
    BMIScore: number | null
    sleepScore: number | null
    calorieScore: number | null
    proteinScore: number | null
    cabohydrateScore: number | null
    fatScore: number | null
    name: string | null
  }

  export type ScoreMaxAggregateOutputType = {
    scoreId: number | null
    totalScore: number | null
    BMIScore: number | null
    sleepScore: number | null
    calorieScore: number | null
    proteinScore: number | null
    cabohydrateScore: number | null
    fatScore: number | null
    name: string | null
  }

  export type ScoreCountAggregateOutputType = {
    scoreId: number
    totalScore: number
    BMIScore: number
    sleepScore: number
    calorieScore: number
    proteinScore: number
    cabohydrateScore: number
    fatScore: number
    name: number
    _all: number
  }


  export type ScoreAvgAggregateInputType = {
    scoreId?: true
    totalScore?: true
    BMIScore?: true
    sleepScore?: true
    calorieScore?: true
    proteinScore?: true
    cabohydrateScore?: true
    fatScore?: true
  }

  export type ScoreSumAggregateInputType = {
    scoreId?: true
    totalScore?: true
    BMIScore?: true
    sleepScore?: true
    calorieScore?: true
    proteinScore?: true
    cabohydrateScore?: true
    fatScore?: true
  }

  export type ScoreMinAggregateInputType = {
    scoreId?: true
    totalScore?: true
    BMIScore?: true
    sleepScore?: true
    calorieScore?: true
    proteinScore?: true
    cabohydrateScore?: true
    fatScore?: true
    name?: true
  }

  export type ScoreMaxAggregateInputType = {
    scoreId?: true
    totalScore?: true
    BMIScore?: true
    sleepScore?: true
    calorieScore?: true
    proteinScore?: true
    cabohydrateScore?: true
    fatScore?: true
    name?: true
  }

  export type ScoreCountAggregateInputType = {
    scoreId?: true
    totalScore?: true
    BMIScore?: true
    sleepScore?: true
    calorieScore?: true
    proteinScore?: true
    cabohydrateScore?: true
    fatScore?: true
    name?: true
    _all?: true
  }

  export type ScoreAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which score to aggregate.
     */
    where?: scoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of scores to fetch.
     */
    orderBy?: scoreOrderByWithRelationInput | scoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: scoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` scores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` scores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned scores
    **/
    _count?: true | ScoreCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ScoreAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ScoreSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ScoreMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ScoreMaxAggregateInputType
  }

  export type GetScoreAggregateType<T extends ScoreAggregateArgs> = {
        [P in keyof T & keyof AggregateScore]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateScore[P]>
      : GetScalarType<T[P], AggregateScore[P]>
  }




  export type scoreGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: scoreWhereInput
    orderBy?: scoreOrderByWithAggregationInput | scoreOrderByWithAggregationInput[]
    by: ScoreScalarFieldEnum[] | ScoreScalarFieldEnum
    having?: scoreScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ScoreCountAggregateInputType | true
    _avg?: ScoreAvgAggregateInputType
    _sum?: ScoreSumAggregateInputType
    _min?: ScoreMinAggregateInputType
    _max?: ScoreMaxAggregateInputType
  }

  export type ScoreGroupByOutputType = {
    scoreId: number
    totalScore: number
    BMIScore: number
    sleepScore: number
    calorieScore: number
    proteinScore: number
    cabohydrateScore: number
    fatScore: number
    name: string
    _count: ScoreCountAggregateOutputType | null
    _avg: ScoreAvgAggregateOutputType | null
    _sum: ScoreSumAggregateOutputType | null
    _min: ScoreMinAggregateOutputType | null
    _max: ScoreMaxAggregateOutputType | null
  }

  type GetScoreGroupByPayload<T extends scoreGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ScoreGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ScoreGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ScoreGroupByOutputType[P]>
            : GetScalarType<T[P], ScoreGroupByOutputType[P]>
        }
      >
    >


  export type scoreSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    scoreId?: boolean
    totalScore?: boolean
    BMIScore?: boolean
    sleepScore?: boolean
    calorieScore?: boolean
    proteinScore?: boolean
    cabohydrateScore?: boolean
    fatScore?: boolean
    name?: boolean
    parameter?: boolean | score$parameterArgs<ExtArgs>
    _count?: boolean | ScoreCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["score"]>


  export type scoreSelectScalar = {
    scoreId?: boolean
    totalScore?: boolean
    BMIScore?: boolean
    sleepScore?: boolean
    calorieScore?: boolean
    proteinScore?: boolean
    cabohydrateScore?: boolean
    fatScore?: boolean
    name?: boolean
  }

  export type scoreInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parameter?: boolean | score$parameterArgs<ExtArgs>
    _count?: boolean | ScoreCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $scorePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "score"
    objects: {
      parameter: Prisma.$parameterPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      scoreId: number
      totalScore: number
      BMIScore: number
      sleepScore: number
      calorieScore: number
      proteinScore: number
      cabohydrateScore: number
      fatScore: number
      name: string
    }, ExtArgs["result"]["score"]>
    composites: {}
  }

  type scoreGetPayload<S extends boolean | null | undefined | scoreDefaultArgs> = $Result.GetResult<Prisma.$scorePayload, S>

  type scoreCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<scoreFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ScoreCountAggregateInputType | true
    }

  export interface scoreDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['score'], meta: { name: 'score' } }
    /**
     * Find zero or one Score that matches the filter.
     * @param {scoreFindUniqueArgs} args - Arguments to find a Score
     * @example
     * // Get one Score
     * const score = await prisma.score.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends scoreFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, scoreFindUniqueArgs<ExtArgs>>
    ): Prisma__scoreClient<$Result.GetResult<Prisma.$scorePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Score that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {scoreFindUniqueOrThrowArgs} args - Arguments to find a Score
     * @example
     * // Get one Score
     * const score = await prisma.score.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends scoreFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, scoreFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__scoreClient<$Result.GetResult<Prisma.$scorePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Score that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {scoreFindFirstArgs} args - Arguments to find a Score
     * @example
     * // Get one Score
     * const score = await prisma.score.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends scoreFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, scoreFindFirstArgs<ExtArgs>>
    ): Prisma__scoreClient<$Result.GetResult<Prisma.$scorePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Score that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {scoreFindFirstOrThrowArgs} args - Arguments to find a Score
     * @example
     * // Get one Score
     * const score = await prisma.score.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends scoreFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, scoreFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__scoreClient<$Result.GetResult<Prisma.$scorePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Scores that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {scoreFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Scores
     * const scores = await prisma.score.findMany()
     * 
     * // Get first 10 Scores
     * const scores = await prisma.score.findMany({ take: 10 })
     * 
     * // Only select the `scoreId`
     * const scoreWithScoreIdOnly = await prisma.score.findMany({ select: { scoreId: true } })
     * 
    **/
    findMany<T extends scoreFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, scoreFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$scorePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Score.
     * @param {scoreCreateArgs} args - Arguments to create a Score.
     * @example
     * // Create one Score
     * const Score = await prisma.score.create({
     *   data: {
     *     // ... data to create a Score
     *   }
     * })
     * 
    **/
    create<T extends scoreCreateArgs<ExtArgs>>(
      args: SelectSubset<T, scoreCreateArgs<ExtArgs>>
    ): Prisma__scoreClient<$Result.GetResult<Prisma.$scorePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Scores.
     * @param {scoreCreateManyArgs} args - Arguments to create many Scores.
     * @example
     * // Create many Scores
     * const score = await prisma.score.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends scoreCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, scoreCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Score.
     * @param {scoreDeleteArgs} args - Arguments to delete one Score.
     * @example
     * // Delete one Score
     * const Score = await prisma.score.delete({
     *   where: {
     *     // ... filter to delete one Score
     *   }
     * })
     * 
    **/
    delete<T extends scoreDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, scoreDeleteArgs<ExtArgs>>
    ): Prisma__scoreClient<$Result.GetResult<Prisma.$scorePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Score.
     * @param {scoreUpdateArgs} args - Arguments to update one Score.
     * @example
     * // Update one Score
     * const score = await prisma.score.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends scoreUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, scoreUpdateArgs<ExtArgs>>
    ): Prisma__scoreClient<$Result.GetResult<Prisma.$scorePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Scores.
     * @param {scoreDeleteManyArgs} args - Arguments to filter Scores to delete.
     * @example
     * // Delete a few Scores
     * const { count } = await prisma.score.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends scoreDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, scoreDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Scores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {scoreUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Scores
     * const score = await prisma.score.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends scoreUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, scoreUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Score.
     * @param {scoreUpsertArgs} args - Arguments to update or create a Score.
     * @example
     * // Update or create a Score
     * const score = await prisma.score.upsert({
     *   create: {
     *     // ... data to create a Score
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Score we want to update
     *   }
     * })
    **/
    upsert<T extends scoreUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, scoreUpsertArgs<ExtArgs>>
    ): Prisma__scoreClient<$Result.GetResult<Prisma.$scorePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Scores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {scoreCountArgs} args - Arguments to filter Scores to count.
     * @example
     * // Count the number of Scores
     * const count = await prisma.score.count({
     *   where: {
     *     // ... the filter for the Scores we want to count
     *   }
     * })
    **/
    count<T extends scoreCountArgs>(
      args?: Subset<T, scoreCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ScoreCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Score.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScoreAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ScoreAggregateArgs>(args: Subset<T, ScoreAggregateArgs>): Prisma.PrismaPromise<GetScoreAggregateType<T>>

    /**
     * Group by Score.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {scoreGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends scoreGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: scoreGroupByArgs['orderBy'] }
        : { orderBy?: scoreGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, scoreGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetScoreGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the score model
   */
  readonly fields: scoreFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for score.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__scoreClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    parameter<T extends score$parameterArgs<ExtArgs> = {}>(args?: Subset<T, score$parameterArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$parameterPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the score model
   */ 
  interface scoreFieldRefs {
    readonly scoreId: FieldRef<"score", 'Int'>
    readonly totalScore: FieldRef<"score", 'Float'>
    readonly BMIScore: FieldRef<"score", 'Float'>
    readonly sleepScore: FieldRef<"score", 'Float'>
    readonly calorieScore: FieldRef<"score", 'Float'>
    readonly proteinScore: FieldRef<"score", 'Float'>
    readonly cabohydrateScore: FieldRef<"score", 'Float'>
    readonly fatScore: FieldRef<"score", 'Float'>
    readonly name: FieldRef<"score", 'String'>
  }
    

  // Custom InputTypes
  /**
   * score findUnique
   */
  export type scoreFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the score
     */
    select?: scoreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: scoreInclude<ExtArgs> | null
    /**
     * Filter, which score to fetch.
     */
    where: scoreWhereUniqueInput
  }

  /**
   * score findUniqueOrThrow
   */
  export type scoreFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the score
     */
    select?: scoreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: scoreInclude<ExtArgs> | null
    /**
     * Filter, which score to fetch.
     */
    where: scoreWhereUniqueInput
  }

  /**
   * score findFirst
   */
  export type scoreFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the score
     */
    select?: scoreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: scoreInclude<ExtArgs> | null
    /**
     * Filter, which score to fetch.
     */
    where?: scoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of scores to fetch.
     */
    orderBy?: scoreOrderByWithRelationInput | scoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for scores.
     */
    cursor?: scoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` scores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` scores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of scores.
     */
    distinct?: ScoreScalarFieldEnum | ScoreScalarFieldEnum[]
  }

  /**
   * score findFirstOrThrow
   */
  export type scoreFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the score
     */
    select?: scoreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: scoreInclude<ExtArgs> | null
    /**
     * Filter, which score to fetch.
     */
    where?: scoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of scores to fetch.
     */
    orderBy?: scoreOrderByWithRelationInput | scoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for scores.
     */
    cursor?: scoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` scores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` scores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of scores.
     */
    distinct?: ScoreScalarFieldEnum | ScoreScalarFieldEnum[]
  }

  /**
   * score findMany
   */
  export type scoreFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the score
     */
    select?: scoreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: scoreInclude<ExtArgs> | null
    /**
     * Filter, which scores to fetch.
     */
    where?: scoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of scores to fetch.
     */
    orderBy?: scoreOrderByWithRelationInput | scoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing scores.
     */
    cursor?: scoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` scores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` scores.
     */
    skip?: number
    distinct?: ScoreScalarFieldEnum | ScoreScalarFieldEnum[]
  }

  /**
   * score create
   */
  export type scoreCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the score
     */
    select?: scoreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: scoreInclude<ExtArgs> | null
    /**
     * The data needed to create a score.
     */
    data: XOR<scoreCreateInput, scoreUncheckedCreateInput>
  }

  /**
   * score createMany
   */
  export type scoreCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many scores.
     */
    data: scoreCreateManyInput | scoreCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * score update
   */
  export type scoreUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the score
     */
    select?: scoreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: scoreInclude<ExtArgs> | null
    /**
     * The data needed to update a score.
     */
    data: XOR<scoreUpdateInput, scoreUncheckedUpdateInput>
    /**
     * Choose, which score to update.
     */
    where: scoreWhereUniqueInput
  }

  /**
   * score updateMany
   */
  export type scoreUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update scores.
     */
    data: XOR<scoreUpdateManyMutationInput, scoreUncheckedUpdateManyInput>
    /**
     * Filter which scores to update
     */
    where?: scoreWhereInput
  }

  /**
   * score upsert
   */
  export type scoreUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the score
     */
    select?: scoreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: scoreInclude<ExtArgs> | null
    /**
     * The filter to search for the score to update in case it exists.
     */
    where: scoreWhereUniqueInput
    /**
     * In case the score found by the `where` argument doesn't exist, create a new score with this data.
     */
    create: XOR<scoreCreateInput, scoreUncheckedCreateInput>
    /**
     * In case the score was found with the provided `where` argument, update it with this data.
     */
    update: XOR<scoreUpdateInput, scoreUncheckedUpdateInput>
  }

  /**
   * score delete
   */
  export type scoreDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the score
     */
    select?: scoreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: scoreInclude<ExtArgs> | null
    /**
     * Filter which score to delete.
     */
    where: scoreWhereUniqueInput
  }

  /**
   * score deleteMany
   */
  export type scoreDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which scores to delete
     */
    where?: scoreWhereInput
  }

  /**
   * score.parameter
   */
  export type score$parameterArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the parameter
     */
    select?: parameterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: parameterInclude<ExtArgs> | null
    where?: parameterWhereInput
    orderBy?: parameterOrderByWithRelationInput | parameterOrderByWithRelationInput[]
    cursor?: parameterWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ParameterScalarFieldEnum | ParameterScalarFieldEnum[]
  }

  /**
   * score without action
   */
  export type scoreDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the score
     */
    select?: scoreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: scoreInclude<ExtArgs> | null
  }


  /**
   * Model suggest
   */

  export type AggregateSuggest = {
    _count: SuggestCountAggregateOutputType | null
    _avg: SuggestAvgAggregateOutputType | null
    _sum: SuggestSumAggregateOutputType | null
    _min: SuggestMinAggregateOutputType | null
    _max: SuggestMaxAggregateOutputType | null
  }

  export type SuggestAvgAggregateOutputType = {
    suggestId: number | null
  }

  export type SuggestSumAggregateOutputType = {
    suggestId: number | null
  }

  export type SuggestMinAggregateOutputType = {
    suggestId: number | null
    BMISuggest: string | null
    sleepSuggest: string | null
    calorieSuggest: string | null
    proteinSuggest: string | null
    cabohydrateSuggest: string | null
    fatSuggest: string | null
  }

  export type SuggestMaxAggregateOutputType = {
    suggestId: number | null
    BMISuggest: string | null
    sleepSuggest: string | null
    calorieSuggest: string | null
    proteinSuggest: string | null
    cabohydrateSuggest: string | null
    fatSuggest: string | null
  }

  export type SuggestCountAggregateOutputType = {
    suggestId: number
    BMISuggest: number
    sleepSuggest: number
    calorieSuggest: number
    proteinSuggest: number
    cabohydrateSuggest: number
    fatSuggest: number
    _all: number
  }


  export type SuggestAvgAggregateInputType = {
    suggestId?: true
  }

  export type SuggestSumAggregateInputType = {
    suggestId?: true
  }

  export type SuggestMinAggregateInputType = {
    suggestId?: true
    BMISuggest?: true
    sleepSuggest?: true
    calorieSuggest?: true
    proteinSuggest?: true
    cabohydrateSuggest?: true
    fatSuggest?: true
  }

  export type SuggestMaxAggregateInputType = {
    suggestId?: true
    BMISuggest?: true
    sleepSuggest?: true
    calorieSuggest?: true
    proteinSuggest?: true
    cabohydrateSuggest?: true
    fatSuggest?: true
  }

  export type SuggestCountAggregateInputType = {
    suggestId?: true
    BMISuggest?: true
    sleepSuggest?: true
    calorieSuggest?: true
    proteinSuggest?: true
    cabohydrateSuggest?: true
    fatSuggest?: true
    _all?: true
  }

  export type SuggestAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which suggest to aggregate.
     */
    where?: suggestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of suggests to fetch.
     */
    orderBy?: suggestOrderByWithRelationInput | suggestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: suggestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` suggests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` suggests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned suggests
    **/
    _count?: true | SuggestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SuggestAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SuggestSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SuggestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SuggestMaxAggregateInputType
  }

  export type GetSuggestAggregateType<T extends SuggestAggregateArgs> = {
        [P in keyof T & keyof AggregateSuggest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSuggest[P]>
      : GetScalarType<T[P], AggregateSuggest[P]>
  }




  export type suggestGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: suggestWhereInput
    orderBy?: suggestOrderByWithAggregationInput | suggestOrderByWithAggregationInput[]
    by: SuggestScalarFieldEnum[] | SuggestScalarFieldEnum
    having?: suggestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SuggestCountAggregateInputType | true
    _avg?: SuggestAvgAggregateInputType
    _sum?: SuggestSumAggregateInputType
    _min?: SuggestMinAggregateInputType
    _max?: SuggestMaxAggregateInputType
  }

  export type SuggestGroupByOutputType = {
    suggestId: number
    BMISuggest: string
    sleepSuggest: string
    calorieSuggest: string
    proteinSuggest: string
    cabohydrateSuggest: string
    fatSuggest: string
    _count: SuggestCountAggregateOutputType | null
    _avg: SuggestAvgAggregateOutputType | null
    _sum: SuggestSumAggregateOutputType | null
    _min: SuggestMinAggregateOutputType | null
    _max: SuggestMaxAggregateOutputType | null
  }

  type GetSuggestGroupByPayload<T extends suggestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SuggestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SuggestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SuggestGroupByOutputType[P]>
            : GetScalarType<T[P], SuggestGroupByOutputType[P]>
        }
      >
    >


  export type suggestSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    suggestId?: boolean
    BMISuggest?: boolean
    sleepSuggest?: boolean
    calorieSuggest?: boolean
    proteinSuggest?: boolean
    cabohydrateSuggest?: boolean
    fatSuggest?: boolean
    parameter?: boolean | suggest$parameterArgs<ExtArgs>
    _count?: boolean | SuggestCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["suggest"]>


  export type suggestSelectScalar = {
    suggestId?: boolean
    BMISuggest?: boolean
    sleepSuggest?: boolean
    calorieSuggest?: boolean
    proteinSuggest?: boolean
    cabohydrateSuggest?: boolean
    fatSuggest?: boolean
  }

  export type suggestInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parameter?: boolean | suggest$parameterArgs<ExtArgs>
    _count?: boolean | SuggestCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $suggestPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "suggest"
    objects: {
      parameter: Prisma.$parameterPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      suggestId: number
      BMISuggest: string
      sleepSuggest: string
      calorieSuggest: string
      proteinSuggest: string
      cabohydrateSuggest: string
      fatSuggest: string
    }, ExtArgs["result"]["suggest"]>
    composites: {}
  }

  type suggestGetPayload<S extends boolean | null | undefined | suggestDefaultArgs> = $Result.GetResult<Prisma.$suggestPayload, S>

  type suggestCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<suggestFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SuggestCountAggregateInputType | true
    }

  export interface suggestDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['suggest'], meta: { name: 'suggest' } }
    /**
     * Find zero or one Suggest that matches the filter.
     * @param {suggestFindUniqueArgs} args - Arguments to find a Suggest
     * @example
     * // Get one Suggest
     * const suggest = await prisma.suggest.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends suggestFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, suggestFindUniqueArgs<ExtArgs>>
    ): Prisma__suggestClient<$Result.GetResult<Prisma.$suggestPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Suggest that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {suggestFindUniqueOrThrowArgs} args - Arguments to find a Suggest
     * @example
     * // Get one Suggest
     * const suggest = await prisma.suggest.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends suggestFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, suggestFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__suggestClient<$Result.GetResult<Prisma.$suggestPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Suggest that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {suggestFindFirstArgs} args - Arguments to find a Suggest
     * @example
     * // Get one Suggest
     * const suggest = await prisma.suggest.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends suggestFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, suggestFindFirstArgs<ExtArgs>>
    ): Prisma__suggestClient<$Result.GetResult<Prisma.$suggestPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Suggest that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {suggestFindFirstOrThrowArgs} args - Arguments to find a Suggest
     * @example
     * // Get one Suggest
     * const suggest = await prisma.suggest.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends suggestFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, suggestFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__suggestClient<$Result.GetResult<Prisma.$suggestPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Suggests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {suggestFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Suggests
     * const suggests = await prisma.suggest.findMany()
     * 
     * // Get first 10 Suggests
     * const suggests = await prisma.suggest.findMany({ take: 10 })
     * 
     * // Only select the `suggestId`
     * const suggestWithSuggestIdOnly = await prisma.suggest.findMany({ select: { suggestId: true } })
     * 
    **/
    findMany<T extends suggestFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, suggestFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$suggestPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Suggest.
     * @param {suggestCreateArgs} args - Arguments to create a Suggest.
     * @example
     * // Create one Suggest
     * const Suggest = await prisma.suggest.create({
     *   data: {
     *     // ... data to create a Suggest
     *   }
     * })
     * 
    **/
    create<T extends suggestCreateArgs<ExtArgs>>(
      args: SelectSubset<T, suggestCreateArgs<ExtArgs>>
    ): Prisma__suggestClient<$Result.GetResult<Prisma.$suggestPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Suggests.
     * @param {suggestCreateManyArgs} args - Arguments to create many Suggests.
     * @example
     * // Create many Suggests
     * const suggest = await prisma.suggest.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends suggestCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, suggestCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Suggest.
     * @param {suggestDeleteArgs} args - Arguments to delete one Suggest.
     * @example
     * // Delete one Suggest
     * const Suggest = await prisma.suggest.delete({
     *   where: {
     *     // ... filter to delete one Suggest
     *   }
     * })
     * 
    **/
    delete<T extends suggestDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, suggestDeleteArgs<ExtArgs>>
    ): Prisma__suggestClient<$Result.GetResult<Prisma.$suggestPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Suggest.
     * @param {suggestUpdateArgs} args - Arguments to update one Suggest.
     * @example
     * // Update one Suggest
     * const suggest = await prisma.suggest.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends suggestUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, suggestUpdateArgs<ExtArgs>>
    ): Prisma__suggestClient<$Result.GetResult<Prisma.$suggestPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Suggests.
     * @param {suggestDeleteManyArgs} args - Arguments to filter Suggests to delete.
     * @example
     * // Delete a few Suggests
     * const { count } = await prisma.suggest.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends suggestDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, suggestDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Suggests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {suggestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Suggests
     * const suggest = await prisma.suggest.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends suggestUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, suggestUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Suggest.
     * @param {suggestUpsertArgs} args - Arguments to update or create a Suggest.
     * @example
     * // Update or create a Suggest
     * const suggest = await prisma.suggest.upsert({
     *   create: {
     *     // ... data to create a Suggest
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Suggest we want to update
     *   }
     * })
    **/
    upsert<T extends suggestUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, suggestUpsertArgs<ExtArgs>>
    ): Prisma__suggestClient<$Result.GetResult<Prisma.$suggestPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Suggests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {suggestCountArgs} args - Arguments to filter Suggests to count.
     * @example
     * // Count the number of Suggests
     * const count = await prisma.suggest.count({
     *   where: {
     *     // ... the filter for the Suggests we want to count
     *   }
     * })
    **/
    count<T extends suggestCountArgs>(
      args?: Subset<T, suggestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SuggestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Suggest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuggestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SuggestAggregateArgs>(args: Subset<T, SuggestAggregateArgs>): Prisma.PrismaPromise<GetSuggestAggregateType<T>>

    /**
     * Group by Suggest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {suggestGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends suggestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: suggestGroupByArgs['orderBy'] }
        : { orderBy?: suggestGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, suggestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSuggestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the suggest model
   */
  readonly fields: suggestFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for suggest.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__suggestClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    parameter<T extends suggest$parameterArgs<ExtArgs> = {}>(args?: Subset<T, suggest$parameterArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$parameterPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the suggest model
   */ 
  interface suggestFieldRefs {
    readonly suggestId: FieldRef<"suggest", 'Int'>
    readonly BMISuggest: FieldRef<"suggest", 'String'>
    readonly sleepSuggest: FieldRef<"suggest", 'String'>
    readonly calorieSuggest: FieldRef<"suggest", 'String'>
    readonly proteinSuggest: FieldRef<"suggest", 'String'>
    readonly cabohydrateSuggest: FieldRef<"suggest", 'String'>
    readonly fatSuggest: FieldRef<"suggest", 'String'>
  }
    

  // Custom InputTypes
  /**
   * suggest findUnique
   */
  export type suggestFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the suggest
     */
    select?: suggestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: suggestInclude<ExtArgs> | null
    /**
     * Filter, which suggest to fetch.
     */
    where: suggestWhereUniqueInput
  }

  /**
   * suggest findUniqueOrThrow
   */
  export type suggestFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the suggest
     */
    select?: suggestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: suggestInclude<ExtArgs> | null
    /**
     * Filter, which suggest to fetch.
     */
    where: suggestWhereUniqueInput
  }

  /**
   * suggest findFirst
   */
  export type suggestFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the suggest
     */
    select?: suggestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: suggestInclude<ExtArgs> | null
    /**
     * Filter, which suggest to fetch.
     */
    where?: suggestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of suggests to fetch.
     */
    orderBy?: suggestOrderByWithRelationInput | suggestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for suggests.
     */
    cursor?: suggestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` suggests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` suggests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of suggests.
     */
    distinct?: SuggestScalarFieldEnum | SuggestScalarFieldEnum[]
  }

  /**
   * suggest findFirstOrThrow
   */
  export type suggestFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the suggest
     */
    select?: suggestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: suggestInclude<ExtArgs> | null
    /**
     * Filter, which suggest to fetch.
     */
    where?: suggestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of suggests to fetch.
     */
    orderBy?: suggestOrderByWithRelationInput | suggestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for suggests.
     */
    cursor?: suggestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` suggests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` suggests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of suggests.
     */
    distinct?: SuggestScalarFieldEnum | SuggestScalarFieldEnum[]
  }

  /**
   * suggest findMany
   */
  export type suggestFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the suggest
     */
    select?: suggestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: suggestInclude<ExtArgs> | null
    /**
     * Filter, which suggests to fetch.
     */
    where?: suggestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of suggests to fetch.
     */
    orderBy?: suggestOrderByWithRelationInput | suggestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing suggests.
     */
    cursor?: suggestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` suggests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` suggests.
     */
    skip?: number
    distinct?: SuggestScalarFieldEnum | SuggestScalarFieldEnum[]
  }

  /**
   * suggest create
   */
  export type suggestCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the suggest
     */
    select?: suggestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: suggestInclude<ExtArgs> | null
    /**
     * The data needed to create a suggest.
     */
    data: XOR<suggestCreateInput, suggestUncheckedCreateInput>
  }

  /**
   * suggest createMany
   */
  export type suggestCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many suggests.
     */
    data: suggestCreateManyInput | suggestCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * suggest update
   */
  export type suggestUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the suggest
     */
    select?: suggestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: suggestInclude<ExtArgs> | null
    /**
     * The data needed to update a suggest.
     */
    data: XOR<suggestUpdateInput, suggestUncheckedUpdateInput>
    /**
     * Choose, which suggest to update.
     */
    where: suggestWhereUniqueInput
  }

  /**
   * suggest updateMany
   */
  export type suggestUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update suggests.
     */
    data: XOR<suggestUpdateManyMutationInput, suggestUncheckedUpdateManyInput>
    /**
     * Filter which suggests to update
     */
    where?: suggestWhereInput
  }

  /**
   * suggest upsert
   */
  export type suggestUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the suggest
     */
    select?: suggestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: suggestInclude<ExtArgs> | null
    /**
     * The filter to search for the suggest to update in case it exists.
     */
    where: suggestWhereUniqueInput
    /**
     * In case the suggest found by the `where` argument doesn't exist, create a new suggest with this data.
     */
    create: XOR<suggestCreateInput, suggestUncheckedCreateInput>
    /**
     * In case the suggest was found with the provided `where` argument, update it with this data.
     */
    update: XOR<suggestUpdateInput, suggestUncheckedUpdateInput>
  }

  /**
   * suggest delete
   */
  export type suggestDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the suggest
     */
    select?: suggestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: suggestInclude<ExtArgs> | null
    /**
     * Filter which suggest to delete.
     */
    where: suggestWhereUniqueInput
  }

  /**
   * suggest deleteMany
   */
  export type suggestDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which suggests to delete
     */
    where?: suggestWhereInput
  }

  /**
   * suggest.parameter
   */
  export type suggest$parameterArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the parameter
     */
    select?: parameterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: parameterInclude<ExtArgs> | null
    where?: parameterWhereInput
    orderBy?: parameterOrderByWithRelationInput | parameterOrderByWithRelationInput[]
    cursor?: parameterWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ParameterScalarFieldEnum | ParameterScalarFieldEnum[]
  }

  /**
   * suggest without action
   */
  export type suggestDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the suggest
     */
    select?: suggestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: suggestInclude<ExtArgs> | null
  }


  /**
   * Model users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersAvgAggregateOutputType = {
    id: number | null
    birthyear: number | null
  }

  export type UsersSumAggregateOutputType = {
    id: number | null
    birthyear: number | null
  }

  export type UsersMinAggregateOutputType = {
    id: number | null
    username: string | null
    password: string | null
    birthyear: number | null
    gender: $Enums.users_gender | null
    image: string | null
  }

  export type UsersMaxAggregateOutputType = {
    id: number | null
    username: string | null
    password: string | null
    birthyear: number | null
    gender: $Enums.users_gender | null
    image: string | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    username: number
    password: number
    birthyear: number
    gender: number
    image: number
    _all: number
  }


  export type UsersAvgAggregateInputType = {
    id?: true
    birthyear?: true
  }

  export type UsersSumAggregateInputType = {
    id?: true
    birthyear?: true
  }

  export type UsersMinAggregateInputType = {
    id?: true
    username?: true
    password?: true
    birthyear?: true
    gender?: true
    image?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    username?: true
    password?: true
    birthyear?: true
    gender?: true
    image?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    username?: true
    password?: true
    birthyear?: true
    gender?: true
    image?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to aggregate.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type usersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersWhereInput
    orderBy?: usersOrderByWithAggregationInput | usersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: usersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _avg?: UsersAvgAggregateInputType
    _sum?: UsersSumAggregateInputType
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    id: number
    username: string
    password: string
    birthyear: number
    gender: $Enums.users_gender
    image: string | null
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends usersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type usersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
    birthyear?: boolean
    gender?: boolean
    image?: boolean
    parameter?: boolean | users$parameterArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>


  export type usersSelectScalar = {
    id?: boolean
    username?: boolean
    password?: boolean
    birthyear?: boolean
    gender?: boolean
    image?: boolean
  }

  export type usersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parameter?: boolean | users$parameterArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $usersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "users"
    objects: {
      parameter: Prisma.$parameterPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      username: string
      password: string
      birthyear: number
      gender: $Enums.users_gender
      image: string | null
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type usersGetPayload<S extends boolean | null | undefined | usersDefaultArgs> = $Result.GetResult<Prisma.$usersPayload, S>

  type usersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<usersFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface usersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['users'], meta: { name: 'users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {usersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends usersFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, usersFindUniqueArgs<ExtArgs>>
    ): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {usersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends usersFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, usersFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends usersFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, usersFindFirstArgs<ExtArgs>>
    ): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends usersFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, usersFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends usersFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, usersFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Users.
     * @param {usersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
    **/
    create<T extends usersCreateArgs<ExtArgs>>(
      args: SelectSubset<T, usersCreateArgs<ExtArgs>>
    ): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Users.
     * @param {usersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends usersCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, usersCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Users.
     * @param {usersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
    **/
    delete<T extends usersDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, usersDeleteArgs<ExtArgs>>
    ): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Users.
     * @param {usersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends usersUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, usersUpdateArgs<ExtArgs>>
    ): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {usersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends usersDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, usersDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends usersUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, usersUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Users.
     * @param {usersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
    **/
    upsert<T extends usersUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, usersUpsertArgs<ExtArgs>>
    ): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends usersCountArgs>(
      args?: Subset<T, usersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends usersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usersGroupByArgs['orderBy'] }
        : { orderBy?: usersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, usersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the users model
   */
  readonly fields: usersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    parameter<T extends users$parameterArgs<ExtArgs> = {}>(args?: Subset<T, users$parameterArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$parameterPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the users model
   */ 
  interface usersFieldRefs {
    readonly id: FieldRef<"users", 'Int'>
    readonly username: FieldRef<"users", 'String'>
    readonly password: FieldRef<"users", 'String'>
    readonly birthyear: FieldRef<"users", 'Int'>
    readonly gender: FieldRef<"users", 'users_gender'>
    readonly image: FieldRef<"users", 'String'>
  }
    

  // Custom InputTypes
  /**
   * users findUnique
   */
  export type usersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findUniqueOrThrow
   */
  export type usersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findFirst
   */
  export type usersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findFirstOrThrow
   */
  export type usersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findMany
   */
  export type usersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users create
   */
  export type usersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to create a users.
     */
    data: XOR<usersCreateInput, usersUncheckedCreateInput>
  }

  /**
   * users createMany
   */
  export type usersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users update
   */
  export type usersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to update a users.
     */
    data: XOR<usersUpdateInput, usersUncheckedUpdateInput>
    /**
     * Choose, which users to update.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users updateMany
   */
  export type usersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
  }

  /**
   * users upsert
   */
  export type usersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The filter to search for the users to update in case it exists.
     */
    where: usersWhereUniqueInput
    /**
     * In case the users found by the `where` argument doesn't exist, create a new users with this data.
     */
    create: XOR<usersCreateInput, usersUncheckedCreateInput>
    /**
     * In case the users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usersUpdateInput, usersUncheckedUpdateInput>
  }

  /**
   * users delete
   */
  export type usersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter which users to delete.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users deleteMany
   */
  export type usersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: usersWhereInput
  }

  /**
   * users.parameter
   */
  export type users$parameterArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the parameter
     */
    select?: parameterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: parameterInclude<ExtArgs> | null
    where?: parameterWhereInput
    orderBy?: parameterOrderByWithRelationInput | parameterOrderByWithRelationInput[]
    cursor?: parameterWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ParameterScalarFieldEnum | ParameterScalarFieldEnum[]
  }

  /**
   * users without action
   */
  export type usersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const ParameterScalarFieldEnum: {
    parameterId: 'parameterId',
    date: 'date',
    height: 'height',
    weight: 'weight',
    sleepStart: 'sleepStart',
    sleepEnd: 'sleepEnd',
    calorie: 'calorie',
    protein: 'protein',
    cabohydrate: 'cabohydrate',
    fat: 'fat',
    userId: 'userId',
    scoreId: 'scoreId',
    suggestId: 'suggestId'
  };

  export type ParameterScalarFieldEnum = (typeof ParameterScalarFieldEnum)[keyof typeof ParameterScalarFieldEnum]


  export const ScoreScalarFieldEnum: {
    scoreId: 'scoreId',
    totalScore: 'totalScore',
    BMIScore: 'BMIScore',
    sleepScore: 'sleepScore',
    calorieScore: 'calorieScore',
    proteinScore: 'proteinScore',
    cabohydrateScore: 'cabohydrateScore',
    fatScore: 'fatScore',
    name: 'name'
  };

  export type ScoreScalarFieldEnum = (typeof ScoreScalarFieldEnum)[keyof typeof ScoreScalarFieldEnum]


  export const SuggestScalarFieldEnum: {
    suggestId: 'suggestId',
    BMISuggest: 'BMISuggest',
    sleepSuggest: 'sleepSuggest',
    calorieSuggest: 'calorieSuggest',
    proteinSuggest: 'proteinSuggest',
    cabohydrateSuggest: 'cabohydrateSuggest',
    fatSuggest: 'fatSuggest'
  };

  export type SuggestScalarFieldEnum = (typeof SuggestScalarFieldEnum)[keyof typeof SuggestScalarFieldEnum]


  export const UsersScalarFieldEnum: {
    id: 'id',
    username: 'username',
    password: 'password',
    birthyear: 'birthyear',
    gender: 'gender',
    image: 'image'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'users_gender'
   */
  export type Enumusers_genderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'users_gender'>
    
  /**
   * Deep Input Types
   */


  export type parameterWhereInput = {
    AND?: parameterWhereInput | parameterWhereInput[]
    OR?: parameterWhereInput[]
    NOT?: parameterWhereInput | parameterWhereInput[]
    parameterId?: IntFilter<"parameter"> | number
    date?: DateTimeFilter<"parameter"> | Date | string
    height?: DecimalFilter<"parameter"> | Decimal | DecimalJsLike | number | string
    weight?: DecimalFilter<"parameter"> | Decimal | DecimalJsLike | number | string
    sleepStart?: DateTimeFilter<"parameter"> | Date | string
    sleepEnd?: DateTimeFilter<"parameter"> | Date | string
    calorie?: IntFilter<"parameter"> | number
    protein?: IntFilter<"parameter"> | number
    cabohydrate?: IntFilter<"parameter"> | number
    fat?: IntFilter<"parameter"> | number
    userId?: IntFilter<"parameter"> | number
    scoreId?: IntFilter<"parameter"> | number
    suggestId?: IntFilter<"parameter"> | number
    score?: XOR<ScoreRelationFilter, scoreWhereInput>
    suggest?: XOR<SuggestRelationFilter, suggestWhereInput>
    users?: XOR<UsersRelationFilter, usersWhereInput>
  }

  export type parameterOrderByWithRelationInput = {
    parameterId?: SortOrder
    date?: SortOrder
    height?: SortOrder
    weight?: SortOrder
    sleepStart?: SortOrder
    sleepEnd?: SortOrder
    calorie?: SortOrder
    protein?: SortOrder
    cabohydrate?: SortOrder
    fat?: SortOrder
    userId?: SortOrder
    scoreId?: SortOrder
    suggestId?: SortOrder
    score?: scoreOrderByWithRelationInput
    suggest?: suggestOrderByWithRelationInput
    users?: usersOrderByWithRelationInput
  }

  export type parameterWhereUniqueInput = Prisma.AtLeast<{
    parameterId?: number
    AND?: parameterWhereInput | parameterWhereInput[]
    OR?: parameterWhereInput[]
    NOT?: parameterWhereInput | parameterWhereInput[]
    date?: DateTimeFilter<"parameter"> | Date | string
    height?: DecimalFilter<"parameter"> | Decimal | DecimalJsLike | number | string
    weight?: DecimalFilter<"parameter"> | Decimal | DecimalJsLike | number | string
    sleepStart?: DateTimeFilter<"parameter"> | Date | string
    sleepEnd?: DateTimeFilter<"parameter"> | Date | string
    calorie?: IntFilter<"parameter"> | number
    protein?: IntFilter<"parameter"> | number
    cabohydrate?: IntFilter<"parameter"> | number
    fat?: IntFilter<"parameter"> | number
    userId?: IntFilter<"parameter"> | number
    scoreId?: IntFilter<"parameter"> | number
    suggestId?: IntFilter<"parameter"> | number
    score?: XOR<ScoreRelationFilter, scoreWhereInput>
    suggest?: XOR<SuggestRelationFilter, suggestWhereInput>
    users?: XOR<UsersRelationFilter, usersWhereInput>
  }, "parameterId">

  export type parameterOrderByWithAggregationInput = {
    parameterId?: SortOrder
    date?: SortOrder
    height?: SortOrder
    weight?: SortOrder
    sleepStart?: SortOrder
    sleepEnd?: SortOrder
    calorie?: SortOrder
    protein?: SortOrder
    cabohydrate?: SortOrder
    fat?: SortOrder
    userId?: SortOrder
    scoreId?: SortOrder
    suggestId?: SortOrder
    _count?: parameterCountOrderByAggregateInput
    _avg?: parameterAvgOrderByAggregateInput
    _max?: parameterMaxOrderByAggregateInput
    _min?: parameterMinOrderByAggregateInput
    _sum?: parameterSumOrderByAggregateInput
  }

  export type parameterScalarWhereWithAggregatesInput = {
    AND?: parameterScalarWhereWithAggregatesInput | parameterScalarWhereWithAggregatesInput[]
    OR?: parameterScalarWhereWithAggregatesInput[]
    NOT?: parameterScalarWhereWithAggregatesInput | parameterScalarWhereWithAggregatesInput[]
    parameterId?: IntWithAggregatesFilter<"parameter"> | number
    date?: DateTimeWithAggregatesFilter<"parameter"> | Date | string
    height?: DecimalWithAggregatesFilter<"parameter"> | Decimal | DecimalJsLike | number | string
    weight?: DecimalWithAggregatesFilter<"parameter"> | Decimal | DecimalJsLike | number | string
    sleepStart?: DateTimeWithAggregatesFilter<"parameter"> | Date | string
    sleepEnd?: DateTimeWithAggregatesFilter<"parameter"> | Date | string
    calorie?: IntWithAggregatesFilter<"parameter"> | number
    protein?: IntWithAggregatesFilter<"parameter"> | number
    cabohydrate?: IntWithAggregatesFilter<"parameter"> | number
    fat?: IntWithAggregatesFilter<"parameter"> | number
    userId?: IntWithAggregatesFilter<"parameter"> | number
    scoreId?: IntWithAggregatesFilter<"parameter"> | number
    suggestId?: IntWithAggregatesFilter<"parameter"> | number
  }

  export type scoreWhereInput = {
    AND?: scoreWhereInput | scoreWhereInput[]
    OR?: scoreWhereInput[]
    NOT?: scoreWhereInput | scoreWhereInput[]
    scoreId?: IntFilter<"score"> | number
    totalScore?: FloatFilter<"score"> | number
    BMIScore?: FloatFilter<"score"> | number
    sleepScore?: FloatFilter<"score"> | number
    calorieScore?: FloatFilter<"score"> | number
    proteinScore?: FloatFilter<"score"> | number
    cabohydrateScore?: FloatFilter<"score"> | number
    fatScore?: FloatFilter<"score"> | number
    name?: StringFilter<"score"> | string
    parameter?: ParameterListRelationFilter
  }

  export type scoreOrderByWithRelationInput = {
    scoreId?: SortOrder
    totalScore?: SortOrder
    BMIScore?: SortOrder
    sleepScore?: SortOrder
    calorieScore?: SortOrder
    proteinScore?: SortOrder
    cabohydrateScore?: SortOrder
    fatScore?: SortOrder
    name?: SortOrder
    parameter?: parameterOrderByRelationAggregateInput
  }

  export type scoreWhereUniqueInput = Prisma.AtLeast<{
    scoreId?: number
    AND?: scoreWhereInput | scoreWhereInput[]
    OR?: scoreWhereInput[]
    NOT?: scoreWhereInput | scoreWhereInput[]
    totalScore?: FloatFilter<"score"> | number
    BMIScore?: FloatFilter<"score"> | number
    sleepScore?: FloatFilter<"score"> | number
    calorieScore?: FloatFilter<"score"> | number
    proteinScore?: FloatFilter<"score"> | number
    cabohydrateScore?: FloatFilter<"score"> | number
    fatScore?: FloatFilter<"score"> | number
    name?: StringFilter<"score"> | string
    parameter?: ParameterListRelationFilter
  }, "scoreId">

  export type scoreOrderByWithAggregationInput = {
    scoreId?: SortOrder
    totalScore?: SortOrder
    BMIScore?: SortOrder
    sleepScore?: SortOrder
    calorieScore?: SortOrder
    proteinScore?: SortOrder
    cabohydrateScore?: SortOrder
    fatScore?: SortOrder
    name?: SortOrder
    _count?: scoreCountOrderByAggregateInput
    _avg?: scoreAvgOrderByAggregateInput
    _max?: scoreMaxOrderByAggregateInput
    _min?: scoreMinOrderByAggregateInput
    _sum?: scoreSumOrderByAggregateInput
  }

  export type scoreScalarWhereWithAggregatesInput = {
    AND?: scoreScalarWhereWithAggregatesInput | scoreScalarWhereWithAggregatesInput[]
    OR?: scoreScalarWhereWithAggregatesInput[]
    NOT?: scoreScalarWhereWithAggregatesInput | scoreScalarWhereWithAggregatesInput[]
    scoreId?: IntWithAggregatesFilter<"score"> | number
    totalScore?: FloatWithAggregatesFilter<"score"> | number
    BMIScore?: FloatWithAggregatesFilter<"score"> | number
    sleepScore?: FloatWithAggregatesFilter<"score"> | number
    calorieScore?: FloatWithAggregatesFilter<"score"> | number
    proteinScore?: FloatWithAggregatesFilter<"score"> | number
    cabohydrateScore?: FloatWithAggregatesFilter<"score"> | number
    fatScore?: FloatWithAggregatesFilter<"score"> | number
    name?: StringWithAggregatesFilter<"score"> | string
  }

  export type suggestWhereInput = {
    AND?: suggestWhereInput | suggestWhereInput[]
    OR?: suggestWhereInput[]
    NOT?: suggestWhereInput | suggestWhereInput[]
    suggestId?: IntFilter<"suggest"> | number
    BMISuggest?: StringFilter<"suggest"> | string
    sleepSuggest?: StringFilter<"suggest"> | string
    calorieSuggest?: StringFilter<"suggest"> | string
    proteinSuggest?: StringFilter<"suggest"> | string
    cabohydrateSuggest?: StringFilter<"suggest"> | string
    fatSuggest?: StringFilter<"suggest"> | string
    parameter?: ParameterListRelationFilter
  }

  export type suggestOrderByWithRelationInput = {
    suggestId?: SortOrder
    BMISuggest?: SortOrder
    sleepSuggest?: SortOrder
    calorieSuggest?: SortOrder
    proteinSuggest?: SortOrder
    cabohydrateSuggest?: SortOrder
    fatSuggest?: SortOrder
    parameter?: parameterOrderByRelationAggregateInput
  }

  export type suggestWhereUniqueInput = Prisma.AtLeast<{
    suggestId?: number
    AND?: suggestWhereInput | suggestWhereInput[]
    OR?: suggestWhereInput[]
    NOT?: suggestWhereInput | suggestWhereInput[]
    BMISuggest?: StringFilter<"suggest"> | string
    sleepSuggest?: StringFilter<"suggest"> | string
    calorieSuggest?: StringFilter<"suggest"> | string
    proteinSuggest?: StringFilter<"suggest"> | string
    cabohydrateSuggest?: StringFilter<"suggest"> | string
    fatSuggest?: StringFilter<"suggest"> | string
    parameter?: ParameterListRelationFilter
  }, "suggestId">

  export type suggestOrderByWithAggregationInput = {
    suggestId?: SortOrder
    BMISuggest?: SortOrder
    sleepSuggest?: SortOrder
    calorieSuggest?: SortOrder
    proteinSuggest?: SortOrder
    cabohydrateSuggest?: SortOrder
    fatSuggest?: SortOrder
    _count?: suggestCountOrderByAggregateInput
    _avg?: suggestAvgOrderByAggregateInput
    _max?: suggestMaxOrderByAggregateInput
    _min?: suggestMinOrderByAggregateInput
    _sum?: suggestSumOrderByAggregateInput
  }

  export type suggestScalarWhereWithAggregatesInput = {
    AND?: suggestScalarWhereWithAggregatesInput | suggestScalarWhereWithAggregatesInput[]
    OR?: suggestScalarWhereWithAggregatesInput[]
    NOT?: suggestScalarWhereWithAggregatesInput | suggestScalarWhereWithAggregatesInput[]
    suggestId?: IntWithAggregatesFilter<"suggest"> | number
    BMISuggest?: StringWithAggregatesFilter<"suggest"> | string
    sleepSuggest?: StringWithAggregatesFilter<"suggest"> | string
    calorieSuggest?: StringWithAggregatesFilter<"suggest"> | string
    proteinSuggest?: StringWithAggregatesFilter<"suggest"> | string
    cabohydrateSuggest?: StringWithAggregatesFilter<"suggest"> | string
    fatSuggest?: StringWithAggregatesFilter<"suggest"> | string
  }

  export type usersWhereInput = {
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    id?: IntFilter<"users"> | number
    username?: StringFilter<"users"> | string
    password?: StringFilter<"users"> | string
    birthyear?: IntFilter<"users"> | number
    gender?: Enumusers_genderFilter<"users"> | $Enums.users_gender
    image?: StringNullableFilter<"users"> | string | null
    parameter?: ParameterListRelationFilter
  }

  export type usersOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    birthyear?: SortOrder
    gender?: SortOrder
    image?: SortOrderInput | SortOrder
    parameter?: parameterOrderByRelationAggregateInput
  }

  export type usersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    username?: StringFilter<"users"> | string
    password?: StringFilter<"users"> | string
    birthyear?: IntFilter<"users"> | number
    gender?: Enumusers_genderFilter<"users"> | $Enums.users_gender
    image?: StringNullableFilter<"users"> | string | null
    parameter?: ParameterListRelationFilter
  }, "id">

  export type usersOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    birthyear?: SortOrder
    gender?: SortOrder
    image?: SortOrderInput | SortOrder
    _count?: usersCountOrderByAggregateInput
    _avg?: usersAvgOrderByAggregateInput
    _max?: usersMaxOrderByAggregateInput
    _min?: usersMinOrderByAggregateInput
    _sum?: usersSumOrderByAggregateInput
  }

  export type usersScalarWhereWithAggregatesInput = {
    AND?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    OR?: usersScalarWhereWithAggregatesInput[]
    NOT?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"users"> | number
    username?: StringWithAggregatesFilter<"users"> | string
    password?: StringWithAggregatesFilter<"users"> | string
    birthyear?: IntWithAggregatesFilter<"users"> | number
    gender?: Enumusers_genderWithAggregatesFilter<"users"> | $Enums.users_gender
    image?: StringNullableWithAggregatesFilter<"users"> | string | null
  }

  export type parameterCreateInput = {
    date: Date | string
    height: Decimal | DecimalJsLike | number | string
    weight: Decimal | DecimalJsLike | number | string
    sleepStart: Date | string
    sleepEnd: Date | string
    calorie: number
    protein: number
    cabohydrate: number
    fat: number
    score: scoreCreateNestedOneWithoutParameterInput
    suggest: suggestCreateNestedOneWithoutParameterInput
    users: usersCreateNestedOneWithoutParameterInput
  }

  export type parameterUncheckedCreateInput = {
    parameterId?: number
    date: Date | string
    height: Decimal | DecimalJsLike | number | string
    weight: Decimal | DecimalJsLike | number | string
    sleepStart: Date | string
    sleepEnd: Date | string
    calorie: number
    protein: number
    cabohydrate: number
    fat: number
    userId: number
    scoreId: number
    suggestId: number
  }

  export type parameterUpdateInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    height?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    weight?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    sleepStart?: DateTimeFieldUpdateOperationsInput | Date | string
    sleepEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    calorie?: IntFieldUpdateOperationsInput | number
    protein?: IntFieldUpdateOperationsInput | number
    cabohydrate?: IntFieldUpdateOperationsInput | number
    fat?: IntFieldUpdateOperationsInput | number
    score?: scoreUpdateOneRequiredWithoutParameterNestedInput
    suggest?: suggestUpdateOneRequiredWithoutParameterNestedInput
    users?: usersUpdateOneRequiredWithoutParameterNestedInput
  }

  export type parameterUncheckedUpdateInput = {
    parameterId?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    height?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    weight?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    sleepStart?: DateTimeFieldUpdateOperationsInput | Date | string
    sleepEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    calorie?: IntFieldUpdateOperationsInput | number
    protein?: IntFieldUpdateOperationsInput | number
    cabohydrate?: IntFieldUpdateOperationsInput | number
    fat?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    scoreId?: IntFieldUpdateOperationsInput | number
    suggestId?: IntFieldUpdateOperationsInput | number
  }

  export type parameterCreateManyInput = {
    parameterId?: number
    date: Date | string
    height: Decimal | DecimalJsLike | number | string
    weight: Decimal | DecimalJsLike | number | string
    sleepStart: Date | string
    sleepEnd: Date | string
    calorie: number
    protein: number
    cabohydrate: number
    fat: number
    userId: number
    scoreId: number
    suggestId: number
  }

  export type parameterUpdateManyMutationInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    height?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    weight?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    sleepStart?: DateTimeFieldUpdateOperationsInput | Date | string
    sleepEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    calorie?: IntFieldUpdateOperationsInput | number
    protein?: IntFieldUpdateOperationsInput | number
    cabohydrate?: IntFieldUpdateOperationsInput | number
    fat?: IntFieldUpdateOperationsInput | number
  }

  export type parameterUncheckedUpdateManyInput = {
    parameterId?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    height?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    weight?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    sleepStart?: DateTimeFieldUpdateOperationsInput | Date | string
    sleepEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    calorie?: IntFieldUpdateOperationsInput | number
    protein?: IntFieldUpdateOperationsInput | number
    cabohydrate?: IntFieldUpdateOperationsInput | number
    fat?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    scoreId?: IntFieldUpdateOperationsInput | number
    suggestId?: IntFieldUpdateOperationsInput | number
  }

  export type scoreCreateInput = {
    totalScore: number
    BMIScore: number
    sleepScore: number
    calorieScore: number
    proteinScore: number
    cabohydrateScore: number
    fatScore: number
    name: string
    parameter?: parameterCreateNestedManyWithoutScoreInput
  }

  export type scoreUncheckedCreateInput = {
    scoreId?: number
    totalScore: number
    BMIScore: number
    sleepScore: number
    calorieScore: number
    proteinScore: number
    cabohydrateScore: number
    fatScore: number
    name: string
    parameter?: parameterUncheckedCreateNestedManyWithoutScoreInput
  }

  export type scoreUpdateInput = {
    totalScore?: FloatFieldUpdateOperationsInput | number
    BMIScore?: FloatFieldUpdateOperationsInput | number
    sleepScore?: FloatFieldUpdateOperationsInput | number
    calorieScore?: FloatFieldUpdateOperationsInput | number
    proteinScore?: FloatFieldUpdateOperationsInput | number
    cabohydrateScore?: FloatFieldUpdateOperationsInput | number
    fatScore?: FloatFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    parameter?: parameterUpdateManyWithoutScoreNestedInput
  }

  export type scoreUncheckedUpdateInput = {
    scoreId?: IntFieldUpdateOperationsInput | number
    totalScore?: FloatFieldUpdateOperationsInput | number
    BMIScore?: FloatFieldUpdateOperationsInput | number
    sleepScore?: FloatFieldUpdateOperationsInput | number
    calorieScore?: FloatFieldUpdateOperationsInput | number
    proteinScore?: FloatFieldUpdateOperationsInput | number
    cabohydrateScore?: FloatFieldUpdateOperationsInput | number
    fatScore?: FloatFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    parameter?: parameterUncheckedUpdateManyWithoutScoreNestedInput
  }

  export type scoreCreateManyInput = {
    scoreId?: number
    totalScore: number
    BMIScore: number
    sleepScore: number
    calorieScore: number
    proteinScore: number
    cabohydrateScore: number
    fatScore: number
    name: string
  }

  export type scoreUpdateManyMutationInput = {
    totalScore?: FloatFieldUpdateOperationsInput | number
    BMIScore?: FloatFieldUpdateOperationsInput | number
    sleepScore?: FloatFieldUpdateOperationsInput | number
    calorieScore?: FloatFieldUpdateOperationsInput | number
    proteinScore?: FloatFieldUpdateOperationsInput | number
    cabohydrateScore?: FloatFieldUpdateOperationsInput | number
    fatScore?: FloatFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type scoreUncheckedUpdateManyInput = {
    scoreId?: IntFieldUpdateOperationsInput | number
    totalScore?: FloatFieldUpdateOperationsInput | number
    BMIScore?: FloatFieldUpdateOperationsInput | number
    sleepScore?: FloatFieldUpdateOperationsInput | number
    calorieScore?: FloatFieldUpdateOperationsInput | number
    proteinScore?: FloatFieldUpdateOperationsInput | number
    cabohydrateScore?: FloatFieldUpdateOperationsInput | number
    fatScore?: FloatFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type suggestCreateInput = {
    BMISuggest: string
    sleepSuggest: string
    calorieSuggest: string
    proteinSuggest: string
    cabohydrateSuggest: string
    fatSuggest: string
    parameter?: parameterCreateNestedManyWithoutSuggestInput
  }

  export type suggestUncheckedCreateInput = {
    suggestId?: number
    BMISuggest: string
    sleepSuggest: string
    calorieSuggest: string
    proteinSuggest: string
    cabohydrateSuggest: string
    fatSuggest: string
    parameter?: parameterUncheckedCreateNestedManyWithoutSuggestInput
  }

  export type suggestUpdateInput = {
    BMISuggest?: StringFieldUpdateOperationsInput | string
    sleepSuggest?: StringFieldUpdateOperationsInput | string
    calorieSuggest?: StringFieldUpdateOperationsInput | string
    proteinSuggest?: StringFieldUpdateOperationsInput | string
    cabohydrateSuggest?: StringFieldUpdateOperationsInput | string
    fatSuggest?: StringFieldUpdateOperationsInput | string
    parameter?: parameterUpdateManyWithoutSuggestNestedInput
  }

  export type suggestUncheckedUpdateInput = {
    suggestId?: IntFieldUpdateOperationsInput | number
    BMISuggest?: StringFieldUpdateOperationsInput | string
    sleepSuggest?: StringFieldUpdateOperationsInput | string
    calorieSuggest?: StringFieldUpdateOperationsInput | string
    proteinSuggest?: StringFieldUpdateOperationsInput | string
    cabohydrateSuggest?: StringFieldUpdateOperationsInput | string
    fatSuggest?: StringFieldUpdateOperationsInput | string
    parameter?: parameterUncheckedUpdateManyWithoutSuggestNestedInput
  }

  export type suggestCreateManyInput = {
    suggestId?: number
    BMISuggest: string
    sleepSuggest: string
    calorieSuggest: string
    proteinSuggest: string
    cabohydrateSuggest: string
    fatSuggest: string
  }

  export type suggestUpdateManyMutationInput = {
    BMISuggest?: StringFieldUpdateOperationsInput | string
    sleepSuggest?: StringFieldUpdateOperationsInput | string
    calorieSuggest?: StringFieldUpdateOperationsInput | string
    proteinSuggest?: StringFieldUpdateOperationsInput | string
    cabohydrateSuggest?: StringFieldUpdateOperationsInput | string
    fatSuggest?: StringFieldUpdateOperationsInput | string
  }

  export type suggestUncheckedUpdateManyInput = {
    suggestId?: IntFieldUpdateOperationsInput | number
    BMISuggest?: StringFieldUpdateOperationsInput | string
    sleepSuggest?: StringFieldUpdateOperationsInput | string
    calorieSuggest?: StringFieldUpdateOperationsInput | string
    proteinSuggest?: StringFieldUpdateOperationsInput | string
    cabohydrateSuggest?: StringFieldUpdateOperationsInput | string
    fatSuggest?: StringFieldUpdateOperationsInput | string
  }

  export type usersCreateInput = {
    username: string
    password: string
    birthyear: number
    gender: $Enums.users_gender
    image?: string | null
    parameter?: parameterCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateInput = {
    id?: number
    username: string
    password: string
    birthyear: number
    gender: $Enums.users_gender
    image?: string | null
    parameter?: parameterUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    birthyear?: IntFieldUpdateOperationsInput | number
    gender?: Enumusers_genderFieldUpdateOperationsInput | $Enums.users_gender
    image?: NullableStringFieldUpdateOperationsInput | string | null
    parameter?: parameterUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    birthyear?: IntFieldUpdateOperationsInput | number
    gender?: Enumusers_genderFieldUpdateOperationsInput | $Enums.users_gender
    image?: NullableStringFieldUpdateOperationsInput | string | null
    parameter?: parameterUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type usersCreateManyInput = {
    id?: number
    username: string
    password: string
    birthyear: number
    gender: $Enums.users_gender
    image?: string | null
  }

  export type usersUpdateManyMutationInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    birthyear?: IntFieldUpdateOperationsInput | number
    gender?: Enumusers_genderFieldUpdateOperationsInput | $Enums.users_gender
    image?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type usersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    birthyear?: IntFieldUpdateOperationsInput | number
    gender?: Enumusers_genderFieldUpdateOperationsInput | $Enums.users_gender
    image?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type ScoreRelationFilter = {
    is?: scoreWhereInput
    isNot?: scoreWhereInput
  }

  export type SuggestRelationFilter = {
    is?: suggestWhereInput
    isNot?: suggestWhereInput
  }

  export type UsersRelationFilter = {
    is?: usersWhereInput
    isNot?: usersWhereInput
  }

  export type parameterCountOrderByAggregateInput = {
    parameterId?: SortOrder
    date?: SortOrder
    height?: SortOrder
    weight?: SortOrder
    sleepStart?: SortOrder
    sleepEnd?: SortOrder
    calorie?: SortOrder
    protein?: SortOrder
    cabohydrate?: SortOrder
    fat?: SortOrder
    userId?: SortOrder
    scoreId?: SortOrder
    suggestId?: SortOrder
  }

  export type parameterAvgOrderByAggregateInput = {
    parameterId?: SortOrder
    height?: SortOrder
    weight?: SortOrder
    calorie?: SortOrder
    protein?: SortOrder
    cabohydrate?: SortOrder
    fat?: SortOrder
    userId?: SortOrder
    scoreId?: SortOrder
    suggestId?: SortOrder
  }

  export type parameterMaxOrderByAggregateInput = {
    parameterId?: SortOrder
    date?: SortOrder
    height?: SortOrder
    weight?: SortOrder
    sleepStart?: SortOrder
    sleepEnd?: SortOrder
    calorie?: SortOrder
    protein?: SortOrder
    cabohydrate?: SortOrder
    fat?: SortOrder
    userId?: SortOrder
    scoreId?: SortOrder
    suggestId?: SortOrder
  }

  export type parameterMinOrderByAggregateInput = {
    parameterId?: SortOrder
    date?: SortOrder
    height?: SortOrder
    weight?: SortOrder
    sleepStart?: SortOrder
    sleepEnd?: SortOrder
    calorie?: SortOrder
    protein?: SortOrder
    cabohydrate?: SortOrder
    fat?: SortOrder
    userId?: SortOrder
    scoreId?: SortOrder
    suggestId?: SortOrder
  }

  export type parameterSumOrderByAggregateInput = {
    parameterId?: SortOrder
    height?: SortOrder
    weight?: SortOrder
    calorie?: SortOrder
    protein?: SortOrder
    cabohydrate?: SortOrder
    fat?: SortOrder
    userId?: SortOrder
    scoreId?: SortOrder
    suggestId?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type ParameterListRelationFilter = {
    every?: parameterWhereInput
    some?: parameterWhereInput
    none?: parameterWhereInput
  }

  export type parameterOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type scoreCountOrderByAggregateInput = {
    scoreId?: SortOrder
    totalScore?: SortOrder
    BMIScore?: SortOrder
    sleepScore?: SortOrder
    calorieScore?: SortOrder
    proteinScore?: SortOrder
    cabohydrateScore?: SortOrder
    fatScore?: SortOrder
    name?: SortOrder
  }

  export type scoreAvgOrderByAggregateInput = {
    scoreId?: SortOrder
    totalScore?: SortOrder
    BMIScore?: SortOrder
    sleepScore?: SortOrder
    calorieScore?: SortOrder
    proteinScore?: SortOrder
    cabohydrateScore?: SortOrder
    fatScore?: SortOrder
  }

  export type scoreMaxOrderByAggregateInput = {
    scoreId?: SortOrder
    totalScore?: SortOrder
    BMIScore?: SortOrder
    sleepScore?: SortOrder
    calorieScore?: SortOrder
    proteinScore?: SortOrder
    cabohydrateScore?: SortOrder
    fatScore?: SortOrder
    name?: SortOrder
  }

  export type scoreMinOrderByAggregateInput = {
    scoreId?: SortOrder
    totalScore?: SortOrder
    BMIScore?: SortOrder
    sleepScore?: SortOrder
    calorieScore?: SortOrder
    proteinScore?: SortOrder
    cabohydrateScore?: SortOrder
    fatScore?: SortOrder
    name?: SortOrder
  }

  export type scoreSumOrderByAggregateInput = {
    scoreId?: SortOrder
    totalScore?: SortOrder
    BMIScore?: SortOrder
    sleepScore?: SortOrder
    calorieScore?: SortOrder
    proteinScore?: SortOrder
    cabohydrateScore?: SortOrder
    fatScore?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type suggestCountOrderByAggregateInput = {
    suggestId?: SortOrder
    BMISuggest?: SortOrder
    sleepSuggest?: SortOrder
    calorieSuggest?: SortOrder
    proteinSuggest?: SortOrder
    cabohydrateSuggest?: SortOrder
    fatSuggest?: SortOrder
  }

  export type suggestAvgOrderByAggregateInput = {
    suggestId?: SortOrder
  }

  export type suggestMaxOrderByAggregateInput = {
    suggestId?: SortOrder
    BMISuggest?: SortOrder
    sleepSuggest?: SortOrder
    calorieSuggest?: SortOrder
    proteinSuggest?: SortOrder
    cabohydrateSuggest?: SortOrder
    fatSuggest?: SortOrder
  }

  export type suggestMinOrderByAggregateInput = {
    suggestId?: SortOrder
    BMISuggest?: SortOrder
    sleepSuggest?: SortOrder
    calorieSuggest?: SortOrder
    proteinSuggest?: SortOrder
    cabohydrateSuggest?: SortOrder
    fatSuggest?: SortOrder
  }

  export type suggestSumOrderByAggregateInput = {
    suggestId?: SortOrder
  }

  export type Enumusers_genderFilter<$PrismaModel = never> = {
    equals?: $Enums.users_gender | Enumusers_genderFieldRefInput<$PrismaModel>
    in?: $Enums.users_gender[]
    notIn?: $Enums.users_gender[]
    not?: NestedEnumusers_genderFilter<$PrismaModel> | $Enums.users_gender
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type usersCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    birthyear?: SortOrder
    gender?: SortOrder
    image?: SortOrder
  }

  export type usersAvgOrderByAggregateInput = {
    id?: SortOrder
    birthyear?: SortOrder
  }

  export type usersMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    birthyear?: SortOrder
    gender?: SortOrder
    image?: SortOrder
  }

  export type usersMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    birthyear?: SortOrder
    gender?: SortOrder
    image?: SortOrder
  }

  export type usersSumOrderByAggregateInput = {
    id?: SortOrder
    birthyear?: SortOrder
  }

  export type Enumusers_genderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.users_gender | Enumusers_genderFieldRefInput<$PrismaModel>
    in?: $Enums.users_gender[]
    notIn?: $Enums.users_gender[]
    not?: NestedEnumusers_genderWithAggregatesFilter<$PrismaModel> | $Enums.users_gender
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumusers_genderFilter<$PrismaModel>
    _max?: NestedEnumusers_genderFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type scoreCreateNestedOneWithoutParameterInput = {
    create?: XOR<scoreCreateWithoutParameterInput, scoreUncheckedCreateWithoutParameterInput>
    connectOrCreate?: scoreCreateOrConnectWithoutParameterInput
    connect?: scoreWhereUniqueInput
  }

  export type suggestCreateNestedOneWithoutParameterInput = {
    create?: XOR<suggestCreateWithoutParameterInput, suggestUncheckedCreateWithoutParameterInput>
    connectOrCreate?: suggestCreateOrConnectWithoutParameterInput
    connect?: suggestWhereUniqueInput
  }

  export type usersCreateNestedOneWithoutParameterInput = {
    create?: XOR<usersCreateWithoutParameterInput, usersUncheckedCreateWithoutParameterInput>
    connectOrCreate?: usersCreateOrConnectWithoutParameterInput
    connect?: usersWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type scoreUpdateOneRequiredWithoutParameterNestedInput = {
    create?: XOR<scoreCreateWithoutParameterInput, scoreUncheckedCreateWithoutParameterInput>
    connectOrCreate?: scoreCreateOrConnectWithoutParameterInput
    upsert?: scoreUpsertWithoutParameterInput
    connect?: scoreWhereUniqueInput
    update?: XOR<XOR<scoreUpdateToOneWithWhereWithoutParameterInput, scoreUpdateWithoutParameterInput>, scoreUncheckedUpdateWithoutParameterInput>
  }

  export type suggestUpdateOneRequiredWithoutParameterNestedInput = {
    create?: XOR<suggestCreateWithoutParameterInput, suggestUncheckedCreateWithoutParameterInput>
    connectOrCreate?: suggestCreateOrConnectWithoutParameterInput
    upsert?: suggestUpsertWithoutParameterInput
    connect?: suggestWhereUniqueInput
    update?: XOR<XOR<suggestUpdateToOneWithWhereWithoutParameterInput, suggestUpdateWithoutParameterInput>, suggestUncheckedUpdateWithoutParameterInput>
  }

  export type usersUpdateOneRequiredWithoutParameterNestedInput = {
    create?: XOR<usersCreateWithoutParameterInput, usersUncheckedCreateWithoutParameterInput>
    connectOrCreate?: usersCreateOrConnectWithoutParameterInput
    upsert?: usersUpsertWithoutParameterInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutParameterInput, usersUpdateWithoutParameterInput>, usersUncheckedUpdateWithoutParameterInput>
  }

  export type parameterCreateNestedManyWithoutScoreInput = {
    create?: XOR<parameterCreateWithoutScoreInput, parameterUncheckedCreateWithoutScoreInput> | parameterCreateWithoutScoreInput[] | parameterUncheckedCreateWithoutScoreInput[]
    connectOrCreate?: parameterCreateOrConnectWithoutScoreInput | parameterCreateOrConnectWithoutScoreInput[]
    createMany?: parameterCreateManyScoreInputEnvelope
    connect?: parameterWhereUniqueInput | parameterWhereUniqueInput[]
  }

  export type parameterUncheckedCreateNestedManyWithoutScoreInput = {
    create?: XOR<parameterCreateWithoutScoreInput, parameterUncheckedCreateWithoutScoreInput> | parameterCreateWithoutScoreInput[] | parameterUncheckedCreateWithoutScoreInput[]
    connectOrCreate?: parameterCreateOrConnectWithoutScoreInput | parameterCreateOrConnectWithoutScoreInput[]
    createMany?: parameterCreateManyScoreInputEnvelope
    connect?: parameterWhereUniqueInput | parameterWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type parameterUpdateManyWithoutScoreNestedInput = {
    create?: XOR<parameterCreateWithoutScoreInput, parameterUncheckedCreateWithoutScoreInput> | parameterCreateWithoutScoreInput[] | parameterUncheckedCreateWithoutScoreInput[]
    connectOrCreate?: parameterCreateOrConnectWithoutScoreInput | parameterCreateOrConnectWithoutScoreInput[]
    upsert?: parameterUpsertWithWhereUniqueWithoutScoreInput | parameterUpsertWithWhereUniqueWithoutScoreInput[]
    createMany?: parameterCreateManyScoreInputEnvelope
    set?: parameterWhereUniqueInput | parameterWhereUniqueInput[]
    disconnect?: parameterWhereUniqueInput | parameterWhereUniqueInput[]
    delete?: parameterWhereUniqueInput | parameterWhereUniqueInput[]
    connect?: parameterWhereUniqueInput | parameterWhereUniqueInput[]
    update?: parameterUpdateWithWhereUniqueWithoutScoreInput | parameterUpdateWithWhereUniqueWithoutScoreInput[]
    updateMany?: parameterUpdateManyWithWhereWithoutScoreInput | parameterUpdateManyWithWhereWithoutScoreInput[]
    deleteMany?: parameterScalarWhereInput | parameterScalarWhereInput[]
  }

  export type parameterUncheckedUpdateManyWithoutScoreNestedInput = {
    create?: XOR<parameterCreateWithoutScoreInput, parameterUncheckedCreateWithoutScoreInput> | parameterCreateWithoutScoreInput[] | parameterUncheckedCreateWithoutScoreInput[]
    connectOrCreate?: parameterCreateOrConnectWithoutScoreInput | parameterCreateOrConnectWithoutScoreInput[]
    upsert?: parameterUpsertWithWhereUniqueWithoutScoreInput | parameterUpsertWithWhereUniqueWithoutScoreInput[]
    createMany?: parameterCreateManyScoreInputEnvelope
    set?: parameterWhereUniqueInput | parameterWhereUniqueInput[]
    disconnect?: parameterWhereUniqueInput | parameterWhereUniqueInput[]
    delete?: parameterWhereUniqueInput | parameterWhereUniqueInput[]
    connect?: parameterWhereUniqueInput | parameterWhereUniqueInput[]
    update?: parameterUpdateWithWhereUniqueWithoutScoreInput | parameterUpdateWithWhereUniqueWithoutScoreInput[]
    updateMany?: parameterUpdateManyWithWhereWithoutScoreInput | parameterUpdateManyWithWhereWithoutScoreInput[]
    deleteMany?: parameterScalarWhereInput | parameterScalarWhereInput[]
  }

  export type parameterCreateNestedManyWithoutSuggestInput = {
    create?: XOR<parameterCreateWithoutSuggestInput, parameterUncheckedCreateWithoutSuggestInput> | parameterCreateWithoutSuggestInput[] | parameterUncheckedCreateWithoutSuggestInput[]
    connectOrCreate?: parameterCreateOrConnectWithoutSuggestInput | parameterCreateOrConnectWithoutSuggestInput[]
    createMany?: parameterCreateManySuggestInputEnvelope
    connect?: parameterWhereUniqueInput | parameterWhereUniqueInput[]
  }

  export type parameterUncheckedCreateNestedManyWithoutSuggestInput = {
    create?: XOR<parameterCreateWithoutSuggestInput, parameterUncheckedCreateWithoutSuggestInput> | parameterCreateWithoutSuggestInput[] | parameterUncheckedCreateWithoutSuggestInput[]
    connectOrCreate?: parameterCreateOrConnectWithoutSuggestInput | parameterCreateOrConnectWithoutSuggestInput[]
    createMany?: parameterCreateManySuggestInputEnvelope
    connect?: parameterWhereUniqueInput | parameterWhereUniqueInput[]
  }

  export type parameterUpdateManyWithoutSuggestNestedInput = {
    create?: XOR<parameterCreateWithoutSuggestInput, parameterUncheckedCreateWithoutSuggestInput> | parameterCreateWithoutSuggestInput[] | parameterUncheckedCreateWithoutSuggestInput[]
    connectOrCreate?: parameterCreateOrConnectWithoutSuggestInput | parameterCreateOrConnectWithoutSuggestInput[]
    upsert?: parameterUpsertWithWhereUniqueWithoutSuggestInput | parameterUpsertWithWhereUniqueWithoutSuggestInput[]
    createMany?: parameterCreateManySuggestInputEnvelope
    set?: parameterWhereUniqueInput | parameterWhereUniqueInput[]
    disconnect?: parameterWhereUniqueInput | parameterWhereUniqueInput[]
    delete?: parameterWhereUniqueInput | parameterWhereUniqueInput[]
    connect?: parameterWhereUniqueInput | parameterWhereUniqueInput[]
    update?: parameterUpdateWithWhereUniqueWithoutSuggestInput | parameterUpdateWithWhereUniqueWithoutSuggestInput[]
    updateMany?: parameterUpdateManyWithWhereWithoutSuggestInput | parameterUpdateManyWithWhereWithoutSuggestInput[]
    deleteMany?: parameterScalarWhereInput | parameterScalarWhereInput[]
  }

  export type parameterUncheckedUpdateManyWithoutSuggestNestedInput = {
    create?: XOR<parameterCreateWithoutSuggestInput, parameterUncheckedCreateWithoutSuggestInput> | parameterCreateWithoutSuggestInput[] | parameterUncheckedCreateWithoutSuggestInput[]
    connectOrCreate?: parameterCreateOrConnectWithoutSuggestInput | parameterCreateOrConnectWithoutSuggestInput[]
    upsert?: parameterUpsertWithWhereUniqueWithoutSuggestInput | parameterUpsertWithWhereUniqueWithoutSuggestInput[]
    createMany?: parameterCreateManySuggestInputEnvelope
    set?: parameterWhereUniqueInput | parameterWhereUniqueInput[]
    disconnect?: parameterWhereUniqueInput | parameterWhereUniqueInput[]
    delete?: parameterWhereUniqueInput | parameterWhereUniqueInput[]
    connect?: parameterWhereUniqueInput | parameterWhereUniqueInput[]
    update?: parameterUpdateWithWhereUniqueWithoutSuggestInput | parameterUpdateWithWhereUniqueWithoutSuggestInput[]
    updateMany?: parameterUpdateManyWithWhereWithoutSuggestInput | parameterUpdateManyWithWhereWithoutSuggestInput[]
    deleteMany?: parameterScalarWhereInput | parameterScalarWhereInput[]
  }

  export type parameterCreateNestedManyWithoutUsersInput = {
    create?: XOR<parameterCreateWithoutUsersInput, parameterUncheckedCreateWithoutUsersInput> | parameterCreateWithoutUsersInput[] | parameterUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: parameterCreateOrConnectWithoutUsersInput | parameterCreateOrConnectWithoutUsersInput[]
    createMany?: parameterCreateManyUsersInputEnvelope
    connect?: parameterWhereUniqueInput | parameterWhereUniqueInput[]
  }

  export type parameterUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<parameterCreateWithoutUsersInput, parameterUncheckedCreateWithoutUsersInput> | parameterCreateWithoutUsersInput[] | parameterUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: parameterCreateOrConnectWithoutUsersInput | parameterCreateOrConnectWithoutUsersInput[]
    createMany?: parameterCreateManyUsersInputEnvelope
    connect?: parameterWhereUniqueInput | parameterWhereUniqueInput[]
  }

  export type Enumusers_genderFieldUpdateOperationsInput = {
    set?: $Enums.users_gender
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type parameterUpdateManyWithoutUsersNestedInput = {
    create?: XOR<parameterCreateWithoutUsersInput, parameterUncheckedCreateWithoutUsersInput> | parameterCreateWithoutUsersInput[] | parameterUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: parameterCreateOrConnectWithoutUsersInput | parameterCreateOrConnectWithoutUsersInput[]
    upsert?: parameterUpsertWithWhereUniqueWithoutUsersInput | parameterUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: parameterCreateManyUsersInputEnvelope
    set?: parameterWhereUniqueInput | parameterWhereUniqueInput[]
    disconnect?: parameterWhereUniqueInput | parameterWhereUniqueInput[]
    delete?: parameterWhereUniqueInput | parameterWhereUniqueInput[]
    connect?: parameterWhereUniqueInput | parameterWhereUniqueInput[]
    update?: parameterUpdateWithWhereUniqueWithoutUsersInput | parameterUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: parameterUpdateManyWithWhereWithoutUsersInput | parameterUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: parameterScalarWhereInput | parameterScalarWhereInput[]
  }

  export type parameterUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<parameterCreateWithoutUsersInput, parameterUncheckedCreateWithoutUsersInput> | parameterCreateWithoutUsersInput[] | parameterUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: parameterCreateOrConnectWithoutUsersInput | parameterCreateOrConnectWithoutUsersInput[]
    upsert?: parameterUpsertWithWhereUniqueWithoutUsersInput | parameterUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: parameterCreateManyUsersInputEnvelope
    set?: parameterWhereUniqueInput | parameterWhereUniqueInput[]
    disconnect?: parameterWhereUniqueInput | parameterWhereUniqueInput[]
    delete?: parameterWhereUniqueInput | parameterWhereUniqueInput[]
    connect?: parameterWhereUniqueInput | parameterWhereUniqueInput[]
    update?: parameterUpdateWithWhereUniqueWithoutUsersInput | parameterUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: parameterUpdateManyWithWhereWithoutUsersInput | parameterUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: parameterScalarWhereInput | parameterScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedEnumusers_genderFilter<$PrismaModel = never> = {
    equals?: $Enums.users_gender | Enumusers_genderFieldRefInput<$PrismaModel>
    in?: $Enums.users_gender[]
    notIn?: $Enums.users_gender[]
    not?: NestedEnumusers_genderFilter<$PrismaModel> | $Enums.users_gender
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumusers_genderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.users_gender | Enumusers_genderFieldRefInput<$PrismaModel>
    in?: $Enums.users_gender[]
    notIn?: $Enums.users_gender[]
    not?: NestedEnumusers_genderWithAggregatesFilter<$PrismaModel> | $Enums.users_gender
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumusers_genderFilter<$PrismaModel>
    _max?: NestedEnumusers_genderFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type scoreCreateWithoutParameterInput = {
    totalScore: number
    BMIScore: number
    sleepScore: number
    calorieScore: number
    proteinScore: number
    cabohydrateScore: number
    fatScore: number
    name: string
  }

  export type scoreUncheckedCreateWithoutParameterInput = {
    scoreId?: number
    totalScore: number
    BMIScore: number
    sleepScore: number
    calorieScore: number
    proteinScore: number
    cabohydrateScore: number
    fatScore: number
    name: string
  }

  export type scoreCreateOrConnectWithoutParameterInput = {
    where: scoreWhereUniqueInput
    create: XOR<scoreCreateWithoutParameterInput, scoreUncheckedCreateWithoutParameterInput>
  }

  export type suggestCreateWithoutParameterInput = {
    BMISuggest: string
    sleepSuggest: string
    calorieSuggest: string
    proteinSuggest: string
    cabohydrateSuggest: string
    fatSuggest: string
  }

  export type suggestUncheckedCreateWithoutParameterInput = {
    suggestId?: number
    BMISuggest: string
    sleepSuggest: string
    calorieSuggest: string
    proteinSuggest: string
    cabohydrateSuggest: string
    fatSuggest: string
  }

  export type suggestCreateOrConnectWithoutParameterInput = {
    where: suggestWhereUniqueInput
    create: XOR<suggestCreateWithoutParameterInput, suggestUncheckedCreateWithoutParameterInput>
  }

  export type usersCreateWithoutParameterInput = {
    username: string
    password: string
    birthyear: number
    gender: $Enums.users_gender
    image?: string | null
  }

  export type usersUncheckedCreateWithoutParameterInput = {
    id?: number
    username: string
    password: string
    birthyear: number
    gender: $Enums.users_gender
    image?: string | null
  }

  export type usersCreateOrConnectWithoutParameterInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutParameterInput, usersUncheckedCreateWithoutParameterInput>
  }

  export type scoreUpsertWithoutParameterInput = {
    update: XOR<scoreUpdateWithoutParameterInput, scoreUncheckedUpdateWithoutParameterInput>
    create: XOR<scoreCreateWithoutParameterInput, scoreUncheckedCreateWithoutParameterInput>
    where?: scoreWhereInput
  }

  export type scoreUpdateToOneWithWhereWithoutParameterInput = {
    where?: scoreWhereInput
    data: XOR<scoreUpdateWithoutParameterInput, scoreUncheckedUpdateWithoutParameterInput>
  }

  export type scoreUpdateWithoutParameterInput = {
    totalScore?: FloatFieldUpdateOperationsInput | number
    BMIScore?: FloatFieldUpdateOperationsInput | number
    sleepScore?: FloatFieldUpdateOperationsInput | number
    calorieScore?: FloatFieldUpdateOperationsInput | number
    proteinScore?: FloatFieldUpdateOperationsInput | number
    cabohydrateScore?: FloatFieldUpdateOperationsInput | number
    fatScore?: FloatFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type scoreUncheckedUpdateWithoutParameterInput = {
    scoreId?: IntFieldUpdateOperationsInput | number
    totalScore?: FloatFieldUpdateOperationsInput | number
    BMIScore?: FloatFieldUpdateOperationsInput | number
    sleepScore?: FloatFieldUpdateOperationsInput | number
    calorieScore?: FloatFieldUpdateOperationsInput | number
    proteinScore?: FloatFieldUpdateOperationsInput | number
    cabohydrateScore?: FloatFieldUpdateOperationsInput | number
    fatScore?: FloatFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type suggestUpsertWithoutParameterInput = {
    update: XOR<suggestUpdateWithoutParameterInput, suggestUncheckedUpdateWithoutParameterInput>
    create: XOR<suggestCreateWithoutParameterInput, suggestUncheckedCreateWithoutParameterInput>
    where?: suggestWhereInput
  }

  export type suggestUpdateToOneWithWhereWithoutParameterInput = {
    where?: suggestWhereInput
    data: XOR<suggestUpdateWithoutParameterInput, suggestUncheckedUpdateWithoutParameterInput>
  }

  export type suggestUpdateWithoutParameterInput = {
    BMISuggest?: StringFieldUpdateOperationsInput | string
    sleepSuggest?: StringFieldUpdateOperationsInput | string
    calorieSuggest?: StringFieldUpdateOperationsInput | string
    proteinSuggest?: StringFieldUpdateOperationsInput | string
    cabohydrateSuggest?: StringFieldUpdateOperationsInput | string
    fatSuggest?: StringFieldUpdateOperationsInput | string
  }

  export type suggestUncheckedUpdateWithoutParameterInput = {
    suggestId?: IntFieldUpdateOperationsInput | number
    BMISuggest?: StringFieldUpdateOperationsInput | string
    sleepSuggest?: StringFieldUpdateOperationsInput | string
    calorieSuggest?: StringFieldUpdateOperationsInput | string
    proteinSuggest?: StringFieldUpdateOperationsInput | string
    cabohydrateSuggest?: StringFieldUpdateOperationsInput | string
    fatSuggest?: StringFieldUpdateOperationsInput | string
  }

  export type usersUpsertWithoutParameterInput = {
    update: XOR<usersUpdateWithoutParameterInput, usersUncheckedUpdateWithoutParameterInput>
    create: XOR<usersCreateWithoutParameterInput, usersUncheckedCreateWithoutParameterInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutParameterInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutParameterInput, usersUncheckedUpdateWithoutParameterInput>
  }

  export type usersUpdateWithoutParameterInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    birthyear?: IntFieldUpdateOperationsInput | number
    gender?: Enumusers_genderFieldUpdateOperationsInput | $Enums.users_gender
    image?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type usersUncheckedUpdateWithoutParameterInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    birthyear?: IntFieldUpdateOperationsInput | number
    gender?: Enumusers_genderFieldUpdateOperationsInput | $Enums.users_gender
    image?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type parameterCreateWithoutScoreInput = {
    date: Date | string
    height: Decimal | DecimalJsLike | number | string
    weight: Decimal | DecimalJsLike | number | string
    sleepStart: Date | string
    sleepEnd: Date | string
    calorie: number
    protein: number
    cabohydrate: number
    fat: number
    suggest: suggestCreateNestedOneWithoutParameterInput
    users: usersCreateNestedOneWithoutParameterInput
  }

  export type parameterUncheckedCreateWithoutScoreInput = {
    parameterId?: number
    date: Date | string
    height: Decimal | DecimalJsLike | number | string
    weight: Decimal | DecimalJsLike | number | string
    sleepStart: Date | string
    sleepEnd: Date | string
    calorie: number
    protein: number
    cabohydrate: number
    fat: number
    userId: number
    suggestId: number
  }

  export type parameterCreateOrConnectWithoutScoreInput = {
    where: parameterWhereUniqueInput
    create: XOR<parameterCreateWithoutScoreInput, parameterUncheckedCreateWithoutScoreInput>
  }

  export type parameterCreateManyScoreInputEnvelope = {
    data: parameterCreateManyScoreInput | parameterCreateManyScoreInput[]
    skipDuplicates?: boolean
  }

  export type parameterUpsertWithWhereUniqueWithoutScoreInput = {
    where: parameterWhereUniqueInput
    update: XOR<parameterUpdateWithoutScoreInput, parameterUncheckedUpdateWithoutScoreInput>
    create: XOR<parameterCreateWithoutScoreInput, parameterUncheckedCreateWithoutScoreInput>
  }

  export type parameterUpdateWithWhereUniqueWithoutScoreInput = {
    where: parameterWhereUniqueInput
    data: XOR<parameterUpdateWithoutScoreInput, parameterUncheckedUpdateWithoutScoreInput>
  }

  export type parameterUpdateManyWithWhereWithoutScoreInput = {
    where: parameterScalarWhereInput
    data: XOR<parameterUpdateManyMutationInput, parameterUncheckedUpdateManyWithoutScoreInput>
  }

  export type parameterScalarWhereInput = {
    AND?: parameterScalarWhereInput | parameterScalarWhereInput[]
    OR?: parameterScalarWhereInput[]
    NOT?: parameterScalarWhereInput | parameterScalarWhereInput[]
    parameterId?: IntFilter<"parameter"> | number
    date?: DateTimeFilter<"parameter"> | Date | string
    height?: DecimalFilter<"parameter"> | Decimal | DecimalJsLike | number | string
    weight?: DecimalFilter<"parameter"> | Decimal | DecimalJsLike | number | string
    sleepStart?: DateTimeFilter<"parameter"> | Date | string
    sleepEnd?: DateTimeFilter<"parameter"> | Date | string
    calorie?: IntFilter<"parameter"> | number
    protein?: IntFilter<"parameter"> | number
    cabohydrate?: IntFilter<"parameter"> | number
    fat?: IntFilter<"parameter"> | number
    userId?: IntFilter<"parameter"> | number
    scoreId?: IntFilter<"parameter"> | number
    suggestId?: IntFilter<"parameter"> | number
  }

  export type parameterCreateWithoutSuggestInput = {
    date: Date | string
    height: Decimal | DecimalJsLike | number | string
    weight: Decimal | DecimalJsLike | number | string
    sleepStart: Date | string
    sleepEnd: Date | string
    calorie: number
    protein: number
    cabohydrate: number
    fat: number
    score: scoreCreateNestedOneWithoutParameterInput
    users: usersCreateNestedOneWithoutParameterInput
  }

  export type parameterUncheckedCreateWithoutSuggestInput = {
    parameterId?: number
    date: Date | string
    height: Decimal | DecimalJsLike | number | string
    weight: Decimal | DecimalJsLike | number | string
    sleepStart: Date | string
    sleepEnd: Date | string
    calorie: number
    protein: number
    cabohydrate: number
    fat: number
    userId: number
    scoreId: number
  }

  export type parameterCreateOrConnectWithoutSuggestInput = {
    where: parameterWhereUniqueInput
    create: XOR<parameterCreateWithoutSuggestInput, parameterUncheckedCreateWithoutSuggestInput>
  }

  export type parameterCreateManySuggestInputEnvelope = {
    data: parameterCreateManySuggestInput | parameterCreateManySuggestInput[]
    skipDuplicates?: boolean
  }

  export type parameterUpsertWithWhereUniqueWithoutSuggestInput = {
    where: parameterWhereUniqueInput
    update: XOR<parameterUpdateWithoutSuggestInput, parameterUncheckedUpdateWithoutSuggestInput>
    create: XOR<parameterCreateWithoutSuggestInput, parameterUncheckedCreateWithoutSuggestInput>
  }

  export type parameterUpdateWithWhereUniqueWithoutSuggestInput = {
    where: parameterWhereUniqueInput
    data: XOR<parameterUpdateWithoutSuggestInput, parameterUncheckedUpdateWithoutSuggestInput>
  }

  export type parameterUpdateManyWithWhereWithoutSuggestInput = {
    where: parameterScalarWhereInput
    data: XOR<parameterUpdateManyMutationInput, parameterUncheckedUpdateManyWithoutSuggestInput>
  }

  export type parameterCreateWithoutUsersInput = {
    date: Date | string
    height: Decimal | DecimalJsLike | number | string
    weight: Decimal | DecimalJsLike | number | string
    sleepStart: Date | string
    sleepEnd: Date | string
    calorie: number
    protein: number
    cabohydrate: number
    fat: number
    score: scoreCreateNestedOneWithoutParameterInput
    suggest: suggestCreateNestedOneWithoutParameterInput
  }

  export type parameterUncheckedCreateWithoutUsersInput = {
    parameterId?: number
    date: Date | string
    height: Decimal | DecimalJsLike | number | string
    weight: Decimal | DecimalJsLike | number | string
    sleepStart: Date | string
    sleepEnd: Date | string
    calorie: number
    protein: number
    cabohydrate: number
    fat: number
    scoreId: number
    suggestId: number
  }

  export type parameterCreateOrConnectWithoutUsersInput = {
    where: parameterWhereUniqueInput
    create: XOR<parameterCreateWithoutUsersInput, parameterUncheckedCreateWithoutUsersInput>
  }

  export type parameterCreateManyUsersInputEnvelope = {
    data: parameterCreateManyUsersInput | parameterCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type parameterUpsertWithWhereUniqueWithoutUsersInput = {
    where: parameterWhereUniqueInput
    update: XOR<parameterUpdateWithoutUsersInput, parameterUncheckedUpdateWithoutUsersInput>
    create: XOR<parameterCreateWithoutUsersInput, parameterUncheckedCreateWithoutUsersInput>
  }

  export type parameterUpdateWithWhereUniqueWithoutUsersInput = {
    where: parameterWhereUniqueInput
    data: XOR<parameterUpdateWithoutUsersInput, parameterUncheckedUpdateWithoutUsersInput>
  }

  export type parameterUpdateManyWithWhereWithoutUsersInput = {
    where: parameterScalarWhereInput
    data: XOR<parameterUpdateManyMutationInput, parameterUncheckedUpdateManyWithoutUsersInput>
  }

  export type parameterCreateManyScoreInput = {
    parameterId?: number
    date: Date | string
    height: Decimal | DecimalJsLike | number | string
    weight: Decimal | DecimalJsLike | number | string
    sleepStart: Date | string
    sleepEnd: Date | string
    calorie: number
    protein: number
    cabohydrate: number
    fat: number
    userId: number
    suggestId: number
  }

  export type parameterUpdateWithoutScoreInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    height?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    weight?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    sleepStart?: DateTimeFieldUpdateOperationsInput | Date | string
    sleepEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    calorie?: IntFieldUpdateOperationsInput | number
    protein?: IntFieldUpdateOperationsInput | number
    cabohydrate?: IntFieldUpdateOperationsInput | number
    fat?: IntFieldUpdateOperationsInput | number
    suggest?: suggestUpdateOneRequiredWithoutParameterNestedInput
    users?: usersUpdateOneRequiredWithoutParameterNestedInput
  }

  export type parameterUncheckedUpdateWithoutScoreInput = {
    parameterId?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    height?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    weight?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    sleepStart?: DateTimeFieldUpdateOperationsInput | Date | string
    sleepEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    calorie?: IntFieldUpdateOperationsInput | number
    protein?: IntFieldUpdateOperationsInput | number
    cabohydrate?: IntFieldUpdateOperationsInput | number
    fat?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    suggestId?: IntFieldUpdateOperationsInput | number
  }

  export type parameterUncheckedUpdateManyWithoutScoreInput = {
    parameterId?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    height?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    weight?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    sleepStart?: DateTimeFieldUpdateOperationsInput | Date | string
    sleepEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    calorie?: IntFieldUpdateOperationsInput | number
    protein?: IntFieldUpdateOperationsInput | number
    cabohydrate?: IntFieldUpdateOperationsInput | number
    fat?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    suggestId?: IntFieldUpdateOperationsInput | number
  }

  export type parameterCreateManySuggestInput = {
    parameterId?: number
    date: Date | string
    height: Decimal | DecimalJsLike | number | string
    weight: Decimal | DecimalJsLike | number | string
    sleepStart: Date | string
    sleepEnd: Date | string
    calorie: number
    protein: number
    cabohydrate: number
    fat: number
    userId: number
    scoreId: number
  }

  export type parameterUpdateWithoutSuggestInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    height?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    weight?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    sleepStart?: DateTimeFieldUpdateOperationsInput | Date | string
    sleepEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    calorie?: IntFieldUpdateOperationsInput | number
    protein?: IntFieldUpdateOperationsInput | number
    cabohydrate?: IntFieldUpdateOperationsInput | number
    fat?: IntFieldUpdateOperationsInput | number
    score?: scoreUpdateOneRequiredWithoutParameterNestedInput
    users?: usersUpdateOneRequiredWithoutParameterNestedInput
  }

  export type parameterUncheckedUpdateWithoutSuggestInput = {
    parameterId?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    height?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    weight?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    sleepStart?: DateTimeFieldUpdateOperationsInput | Date | string
    sleepEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    calorie?: IntFieldUpdateOperationsInput | number
    protein?: IntFieldUpdateOperationsInput | number
    cabohydrate?: IntFieldUpdateOperationsInput | number
    fat?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    scoreId?: IntFieldUpdateOperationsInput | number
  }

  export type parameterUncheckedUpdateManyWithoutSuggestInput = {
    parameterId?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    height?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    weight?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    sleepStart?: DateTimeFieldUpdateOperationsInput | Date | string
    sleepEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    calorie?: IntFieldUpdateOperationsInput | number
    protein?: IntFieldUpdateOperationsInput | number
    cabohydrate?: IntFieldUpdateOperationsInput | number
    fat?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    scoreId?: IntFieldUpdateOperationsInput | number
  }

  export type parameterCreateManyUsersInput = {
    parameterId?: number
    date: Date | string
    height: Decimal | DecimalJsLike | number | string
    weight: Decimal | DecimalJsLike | number | string
    sleepStart: Date | string
    sleepEnd: Date | string
    calorie: number
    protein: number
    cabohydrate: number
    fat: number
    scoreId: number
    suggestId: number
  }

  export type parameterUpdateWithoutUsersInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    height?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    weight?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    sleepStart?: DateTimeFieldUpdateOperationsInput | Date | string
    sleepEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    calorie?: IntFieldUpdateOperationsInput | number
    protein?: IntFieldUpdateOperationsInput | number
    cabohydrate?: IntFieldUpdateOperationsInput | number
    fat?: IntFieldUpdateOperationsInput | number
    score?: scoreUpdateOneRequiredWithoutParameterNestedInput
    suggest?: suggestUpdateOneRequiredWithoutParameterNestedInput
  }

  export type parameterUncheckedUpdateWithoutUsersInput = {
    parameterId?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    height?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    weight?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    sleepStart?: DateTimeFieldUpdateOperationsInput | Date | string
    sleepEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    calorie?: IntFieldUpdateOperationsInput | number
    protein?: IntFieldUpdateOperationsInput | number
    cabohydrate?: IntFieldUpdateOperationsInput | number
    fat?: IntFieldUpdateOperationsInput | number
    scoreId?: IntFieldUpdateOperationsInput | number
    suggestId?: IntFieldUpdateOperationsInput | number
  }

  export type parameterUncheckedUpdateManyWithoutUsersInput = {
    parameterId?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    height?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    weight?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    sleepStart?: DateTimeFieldUpdateOperationsInput | Date | string
    sleepEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    calorie?: IntFieldUpdateOperationsInput | number
    protein?: IntFieldUpdateOperationsInput | number
    cabohydrate?: IntFieldUpdateOperationsInput | number
    fat?: IntFieldUpdateOperationsInput | number
    scoreId?: IntFieldUpdateOperationsInput | number
    suggestId?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use ScoreCountOutputTypeDefaultArgs instead
     */
    export type ScoreCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ScoreCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SuggestCountOutputTypeDefaultArgs instead
     */
    export type SuggestCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SuggestCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UsersCountOutputTypeDefaultArgs instead
     */
    export type UsersCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UsersCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use parameterDefaultArgs instead
     */
    export type parameterArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = parameterDefaultArgs<ExtArgs>
    /**
     * @deprecated Use scoreDefaultArgs instead
     */
    export type scoreArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = scoreDefaultArgs<ExtArgs>
    /**
     * @deprecated Use suggestDefaultArgs instead
     */
    export type suggestArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = suggestDefaultArgs<ExtArgs>
    /**
     * @deprecated Use usersDefaultArgs instead
     */
    export type usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = usersDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}