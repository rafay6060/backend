
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
 * Model claim_coins
 * 
 */
export type claim_coins = $Result.DefaultSelection<Prisma.$claim_coinsPayload>
/**
 * Model deposits
 * 
 */
export type deposits = $Result.DefaultSelection<Prisma.$depositsPayload>
/**
 * Model earn_coins
 * 
 */
export type earn_coins = $Result.DefaultSelection<Prisma.$earn_coinsPayload>
/**
 * Model mine_coins
 * 
 */
export type mine_coins = $Result.DefaultSelection<Prisma.$mine_coinsPayload>
/**
 * Model referral_progress
 * 
 */
export type referral_progress = $Result.DefaultSelection<Prisma.$referral_progressPayload>
/**
 * Model temp_otps
 * 
 */
export type temp_otps = $Result.DefaultSelection<Prisma.$temp_otpsPayload>
/**
 * Model users
 * 
 */
export type users = $Result.DefaultSelection<Prisma.$usersPayload>
/**
 * Model wallets
 * 
 */
export type wallets = $Result.DefaultSelection<Prisma.$walletsPayload>
/**
 * Model withdrawals
 * 
 */
export type withdrawals = $Result.DefaultSelection<Prisma.$withdrawalsPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Claim_coins
 * const claim_coins = await prisma.claim_coins.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Claim_coins
   * const claim_coins = await prisma.claim_coins.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.claim_coins`: Exposes CRUD operations for the **claim_coins** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Claim_coins
    * const claim_coins = await prisma.claim_coins.findMany()
    * ```
    */
  get claim_coins(): Prisma.claim_coinsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.deposits`: Exposes CRUD operations for the **deposits** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Deposits
    * const deposits = await prisma.deposits.findMany()
    * ```
    */
  get deposits(): Prisma.depositsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.earn_coins`: Exposes CRUD operations for the **earn_coins** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Earn_coins
    * const earn_coins = await prisma.earn_coins.findMany()
    * ```
    */
  get earn_coins(): Prisma.earn_coinsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.mine_coins`: Exposes CRUD operations for the **mine_coins** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Mine_coins
    * const mine_coins = await prisma.mine_coins.findMany()
    * ```
    */
  get mine_coins(): Prisma.mine_coinsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.referral_progress`: Exposes CRUD operations for the **referral_progress** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Referral_progresses
    * const referral_progresses = await prisma.referral_progress.findMany()
    * ```
    */
  get referral_progress(): Prisma.referral_progressDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.temp_otps`: Exposes CRUD operations for the **temp_otps** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Temp_otps
    * const temp_otps = await prisma.temp_otps.findMany()
    * ```
    */
  get temp_otps(): Prisma.temp_otpsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.users`: Exposes CRUD operations for the **users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.usersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.wallets`: Exposes CRUD operations for the **wallets** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Wallets
    * const wallets = await prisma.wallets.findMany()
    * ```
    */
  get wallets(): Prisma.walletsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.withdrawals`: Exposes CRUD operations for the **withdrawals** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Withdrawals
    * const withdrawals = await prisma.withdrawals.findMany()
    * ```
    */
  get withdrawals(): Prisma.withdrawalsDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.13.0
   * Query Engine version: 361e86d0ea4987e9f53a565309b3eed797a6bcbd
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
    claim_coins: 'claim_coins',
    deposits: 'deposits',
    earn_coins: 'earn_coins',
    mine_coins: 'mine_coins',
    referral_progress: 'referral_progress',
    temp_otps: 'temp_otps',
    users: 'users',
    wallets: 'wallets',
    withdrawals: 'withdrawals'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "claim_coins" | "deposits" | "earn_coins" | "mine_coins" | "referral_progress" | "temp_otps" | "users" | "wallets" | "withdrawals"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      claim_coins: {
        payload: Prisma.$claim_coinsPayload<ExtArgs>
        fields: Prisma.claim_coinsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.claim_coinsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$claim_coinsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.claim_coinsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$claim_coinsPayload>
          }
          findFirst: {
            args: Prisma.claim_coinsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$claim_coinsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.claim_coinsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$claim_coinsPayload>
          }
          findMany: {
            args: Prisma.claim_coinsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$claim_coinsPayload>[]
          }
          create: {
            args: Prisma.claim_coinsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$claim_coinsPayload>
          }
          createMany: {
            args: Prisma.claim_coinsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.claim_coinsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$claim_coinsPayload>[]
          }
          delete: {
            args: Prisma.claim_coinsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$claim_coinsPayload>
          }
          update: {
            args: Prisma.claim_coinsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$claim_coinsPayload>
          }
          deleteMany: {
            args: Prisma.claim_coinsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.claim_coinsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.claim_coinsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$claim_coinsPayload>[]
          }
          upsert: {
            args: Prisma.claim_coinsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$claim_coinsPayload>
          }
          aggregate: {
            args: Prisma.Claim_coinsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateClaim_coins>
          }
          groupBy: {
            args: Prisma.claim_coinsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Claim_coinsGroupByOutputType>[]
          }
          count: {
            args: Prisma.claim_coinsCountArgs<ExtArgs>
            result: $Utils.Optional<Claim_coinsCountAggregateOutputType> | number
          }
        }
      }
      deposits: {
        payload: Prisma.$depositsPayload<ExtArgs>
        fields: Prisma.depositsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.depositsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$depositsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.depositsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$depositsPayload>
          }
          findFirst: {
            args: Prisma.depositsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$depositsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.depositsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$depositsPayload>
          }
          findMany: {
            args: Prisma.depositsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$depositsPayload>[]
          }
          create: {
            args: Prisma.depositsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$depositsPayload>
          }
          createMany: {
            args: Prisma.depositsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.depositsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$depositsPayload>[]
          }
          delete: {
            args: Prisma.depositsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$depositsPayload>
          }
          update: {
            args: Prisma.depositsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$depositsPayload>
          }
          deleteMany: {
            args: Prisma.depositsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.depositsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.depositsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$depositsPayload>[]
          }
          upsert: {
            args: Prisma.depositsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$depositsPayload>
          }
          aggregate: {
            args: Prisma.DepositsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDeposits>
          }
          groupBy: {
            args: Prisma.depositsGroupByArgs<ExtArgs>
            result: $Utils.Optional<DepositsGroupByOutputType>[]
          }
          count: {
            args: Prisma.depositsCountArgs<ExtArgs>
            result: $Utils.Optional<DepositsCountAggregateOutputType> | number
          }
        }
      }
      earn_coins: {
        payload: Prisma.$earn_coinsPayload<ExtArgs>
        fields: Prisma.earn_coinsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.earn_coinsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$earn_coinsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.earn_coinsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$earn_coinsPayload>
          }
          findFirst: {
            args: Prisma.earn_coinsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$earn_coinsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.earn_coinsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$earn_coinsPayload>
          }
          findMany: {
            args: Prisma.earn_coinsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$earn_coinsPayload>[]
          }
          create: {
            args: Prisma.earn_coinsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$earn_coinsPayload>
          }
          createMany: {
            args: Prisma.earn_coinsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.earn_coinsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$earn_coinsPayload>[]
          }
          delete: {
            args: Prisma.earn_coinsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$earn_coinsPayload>
          }
          update: {
            args: Prisma.earn_coinsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$earn_coinsPayload>
          }
          deleteMany: {
            args: Prisma.earn_coinsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.earn_coinsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.earn_coinsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$earn_coinsPayload>[]
          }
          upsert: {
            args: Prisma.earn_coinsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$earn_coinsPayload>
          }
          aggregate: {
            args: Prisma.Earn_coinsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEarn_coins>
          }
          groupBy: {
            args: Prisma.earn_coinsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Earn_coinsGroupByOutputType>[]
          }
          count: {
            args: Prisma.earn_coinsCountArgs<ExtArgs>
            result: $Utils.Optional<Earn_coinsCountAggregateOutputType> | number
          }
        }
      }
      mine_coins: {
        payload: Prisma.$mine_coinsPayload<ExtArgs>
        fields: Prisma.mine_coinsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.mine_coinsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mine_coinsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.mine_coinsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mine_coinsPayload>
          }
          findFirst: {
            args: Prisma.mine_coinsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mine_coinsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.mine_coinsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mine_coinsPayload>
          }
          findMany: {
            args: Prisma.mine_coinsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mine_coinsPayload>[]
          }
          create: {
            args: Prisma.mine_coinsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mine_coinsPayload>
          }
          createMany: {
            args: Prisma.mine_coinsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.mine_coinsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mine_coinsPayload>[]
          }
          delete: {
            args: Prisma.mine_coinsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mine_coinsPayload>
          }
          update: {
            args: Prisma.mine_coinsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mine_coinsPayload>
          }
          deleteMany: {
            args: Prisma.mine_coinsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.mine_coinsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.mine_coinsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mine_coinsPayload>[]
          }
          upsert: {
            args: Prisma.mine_coinsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mine_coinsPayload>
          }
          aggregate: {
            args: Prisma.Mine_coinsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMine_coins>
          }
          groupBy: {
            args: Prisma.mine_coinsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Mine_coinsGroupByOutputType>[]
          }
          count: {
            args: Prisma.mine_coinsCountArgs<ExtArgs>
            result: $Utils.Optional<Mine_coinsCountAggregateOutputType> | number
          }
        }
      }
      referral_progress: {
        payload: Prisma.$referral_progressPayload<ExtArgs>
        fields: Prisma.referral_progressFieldRefs
        operations: {
          findUnique: {
            args: Prisma.referral_progressFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$referral_progressPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.referral_progressFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$referral_progressPayload>
          }
          findFirst: {
            args: Prisma.referral_progressFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$referral_progressPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.referral_progressFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$referral_progressPayload>
          }
          findMany: {
            args: Prisma.referral_progressFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$referral_progressPayload>[]
          }
          create: {
            args: Prisma.referral_progressCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$referral_progressPayload>
          }
          createMany: {
            args: Prisma.referral_progressCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.referral_progressCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$referral_progressPayload>[]
          }
          delete: {
            args: Prisma.referral_progressDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$referral_progressPayload>
          }
          update: {
            args: Prisma.referral_progressUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$referral_progressPayload>
          }
          deleteMany: {
            args: Prisma.referral_progressDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.referral_progressUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.referral_progressUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$referral_progressPayload>[]
          }
          upsert: {
            args: Prisma.referral_progressUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$referral_progressPayload>
          }
          aggregate: {
            args: Prisma.Referral_progressAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReferral_progress>
          }
          groupBy: {
            args: Prisma.referral_progressGroupByArgs<ExtArgs>
            result: $Utils.Optional<Referral_progressGroupByOutputType>[]
          }
          count: {
            args: Prisma.referral_progressCountArgs<ExtArgs>
            result: $Utils.Optional<Referral_progressCountAggregateOutputType> | number
          }
        }
      }
      temp_otps: {
        payload: Prisma.$temp_otpsPayload<ExtArgs>
        fields: Prisma.temp_otpsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.temp_otpsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$temp_otpsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.temp_otpsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$temp_otpsPayload>
          }
          findFirst: {
            args: Prisma.temp_otpsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$temp_otpsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.temp_otpsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$temp_otpsPayload>
          }
          findMany: {
            args: Prisma.temp_otpsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$temp_otpsPayload>[]
          }
          create: {
            args: Prisma.temp_otpsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$temp_otpsPayload>
          }
          createMany: {
            args: Prisma.temp_otpsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.temp_otpsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$temp_otpsPayload>[]
          }
          delete: {
            args: Prisma.temp_otpsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$temp_otpsPayload>
          }
          update: {
            args: Prisma.temp_otpsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$temp_otpsPayload>
          }
          deleteMany: {
            args: Prisma.temp_otpsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.temp_otpsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.temp_otpsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$temp_otpsPayload>[]
          }
          upsert: {
            args: Prisma.temp_otpsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$temp_otpsPayload>
          }
          aggregate: {
            args: Prisma.Temp_otpsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTemp_otps>
          }
          groupBy: {
            args: Prisma.temp_otpsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Temp_otpsGroupByOutputType>[]
          }
          count: {
            args: Prisma.temp_otpsCountArgs<ExtArgs>
            result: $Utils.Optional<Temp_otpsCountAggregateOutputType> | number
          }
        }
      }
      users: {
        payload: Prisma.$usersPayload<ExtArgs>
        fields: Prisma.usersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findFirst: {
            args: Prisma.usersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findMany: {
            args: Prisma.usersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          create: {
            args: Prisma.usersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          createMany: {
            args: Prisma.usersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.usersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          delete: {
            args: Prisma.usersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          update: {
            args: Prisma.usersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          deleteMany: {
            args: Prisma.usersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.usersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.usersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          upsert: {
            args: Prisma.usersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.usersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.usersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
      wallets: {
        payload: Prisma.$walletsPayload<ExtArgs>
        fields: Prisma.walletsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.walletsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$walletsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.walletsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$walletsPayload>
          }
          findFirst: {
            args: Prisma.walletsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$walletsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.walletsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$walletsPayload>
          }
          findMany: {
            args: Prisma.walletsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$walletsPayload>[]
          }
          create: {
            args: Prisma.walletsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$walletsPayload>
          }
          createMany: {
            args: Prisma.walletsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.walletsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$walletsPayload>[]
          }
          delete: {
            args: Prisma.walletsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$walletsPayload>
          }
          update: {
            args: Prisma.walletsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$walletsPayload>
          }
          deleteMany: {
            args: Prisma.walletsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.walletsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.walletsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$walletsPayload>[]
          }
          upsert: {
            args: Prisma.walletsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$walletsPayload>
          }
          aggregate: {
            args: Prisma.WalletsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWallets>
          }
          groupBy: {
            args: Prisma.walletsGroupByArgs<ExtArgs>
            result: $Utils.Optional<WalletsGroupByOutputType>[]
          }
          count: {
            args: Prisma.walletsCountArgs<ExtArgs>
            result: $Utils.Optional<WalletsCountAggregateOutputType> | number
          }
        }
      }
      withdrawals: {
        payload: Prisma.$withdrawalsPayload<ExtArgs>
        fields: Prisma.withdrawalsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.withdrawalsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$withdrawalsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.withdrawalsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$withdrawalsPayload>
          }
          findFirst: {
            args: Prisma.withdrawalsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$withdrawalsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.withdrawalsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$withdrawalsPayload>
          }
          findMany: {
            args: Prisma.withdrawalsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$withdrawalsPayload>[]
          }
          create: {
            args: Prisma.withdrawalsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$withdrawalsPayload>
          }
          createMany: {
            args: Prisma.withdrawalsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.withdrawalsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$withdrawalsPayload>[]
          }
          delete: {
            args: Prisma.withdrawalsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$withdrawalsPayload>
          }
          update: {
            args: Prisma.withdrawalsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$withdrawalsPayload>
          }
          deleteMany: {
            args: Prisma.withdrawalsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.withdrawalsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.withdrawalsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$withdrawalsPayload>[]
          }
          upsert: {
            args: Prisma.withdrawalsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$withdrawalsPayload>
          }
          aggregate: {
            args: Prisma.WithdrawalsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWithdrawals>
          }
          groupBy: {
            args: Prisma.withdrawalsGroupByArgs<ExtArgs>
            result: $Utils.Optional<WithdrawalsGroupByOutputType>[]
          }
          count: {
            args: Prisma.withdrawalsCountArgs<ExtArgs>
            result: $Utils.Optional<WithdrawalsCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
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
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
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
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    claim_coins?: claim_coinsOmit
    deposits?: depositsOmit
    earn_coins?: earn_coinsOmit
    mine_coins?: mine_coinsOmit
    referral_progress?: referral_progressOmit
    temp_otps?: temp_otpsOmit
    users?: usersOmit
    wallets?: walletsOmit
    withdrawals?: withdrawalsOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
    | 'updateManyAndReturn'
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
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    claim_coins: number
    deposits: number
    earn_coins: number
    mine_coins: number
    referral_progress: number
    wallets: number
    withdrawals: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    claim_coins?: boolean | UsersCountOutputTypeCountClaim_coinsArgs
    deposits?: boolean | UsersCountOutputTypeCountDepositsArgs
    earn_coins?: boolean | UsersCountOutputTypeCountEarn_coinsArgs
    mine_coins?: boolean | UsersCountOutputTypeCountMine_coinsArgs
    referral_progress?: boolean | UsersCountOutputTypeCountReferral_progressArgs
    wallets?: boolean | UsersCountOutputTypeCountWalletsArgs
    withdrawals?: boolean | UsersCountOutputTypeCountWithdrawalsArgs
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
  export type UsersCountOutputTypeCountClaim_coinsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: claim_coinsWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountDepositsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: depositsWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountEarn_coinsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: earn_coinsWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountMine_coinsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: mine_coinsWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountReferral_progressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: referral_progressWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountWalletsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: walletsWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountWithdrawalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: withdrawalsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model claim_coins
   */

  export type AggregateClaim_coins = {
    _count: Claim_coinsCountAggregateOutputType | null
    _avg: Claim_coinsAvgAggregateOutputType | null
    _sum: Claim_coinsSumAggregateOutputType | null
    _min: Claim_coinsMinAggregateOutputType | null
    _max: Claim_coinsMaxAggregateOutputType | null
  }

  export type Claim_coinsAvgAggregateOutputType = {
    amount: Decimal | null
  }

  export type Claim_coinsSumAggregateOutputType = {
    amount: Decimal | null
  }

  export type Claim_coinsMinAggregateOutputType = {
    id: string | null
    user_id: string | null
    date: Date | null
    amount: Decimal | null
    status: boolean | null
  }

  export type Claim_coinsMaxAggregateOutputType = {
    id: string | null
    user_id: string | null
    date: Date | null
    amount: Decimal | null
    status: boolean | null
  }

  export type Claim_coinsCountAggregateOutputType = {
    id: number
    user_id: number
    date: number
    amount: number
    status: number
    _all: number
  }


  export type Claim_coinsAvgAggregateInputType = {
    amount?: true
  }

  export type Claim_coinsSumAggregateInputType = {
    amount?: true
  }

  export type Claim_coinsMinAggregateInputType = {
    id?: true
    user_id?: true
    date?: true
    amount?: true
    status?: true
  }

  export type Claim_coinsMaxAggregateInputType = {
    id?: true
    user_id?: true
    date?: true
    amount?: true
    status?: true
  }

  export type Claim_coinsCountAggregateInputType = {
    id?: true
    user_id?: true
    date?: true
    amount?: true
    status?: true
    _all?: true
  }

  export type Claim_coinsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which claim_coins to aggregate.
     */
    where?: claim_coinsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of claim_coins to fetch.
     */
    orderBy?: claim_coinsOrderByWithRelationInput | claim_coinsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: claim_coinsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` claim_coins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` claim_coins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned claim_coins
    **/
    _count?: true | Claim_coinsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Claim_coinsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Claim_coinsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Claim_coinsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Claim_coinsMaxAggregateInputType
  }

  export type GetClaim_coinsAggregateType<T extends Claim_coinsAggregateArgs> = {
        [P in keyof T & keyof AggregateClaim_coins]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClaim_coins[P]>
      : GetScalarType<T[P], AggregateClaim_coins[P]>
  }




  export type claim_coinsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: claim_coinsWhereInput
    orderBy?: claim_coinsOrderByWithAggregationInput | claim_coinsOrderByWithAggregationInput[]
    by: Claim_coinsScalarFieldEnum[] | Claim_coinsScalarFieldEnum
    having?: claim_coinsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Claim_coinsCountAggregateInputType | true
    _avg?: Claim_coinsAvgAggregateInputType
    _sum?: Claim_coinsSumAggregateInputType
    _min?: Claim_coinsMinAggregateInputType
    _max?: Claim_coinsMaxAggregateInputType
  }

  export type Claim_coinsGroupByOutputType = {
    id: string
    user_id: string
    date: Date | null
    amount: Decimal
    status: boolean | null
    _count: Claim_coinsCountAggregateOutputType | null
    _avg: Claim_coinsAvgAggregateOutputType | null
    _sum: Claim_coinsSumAggregateOutputType | null
    _min: Claim_coinsMinAggregateOutputType | null
    _max: Claim_coinsMaxAggregateOutputType | null
  }

  type GetClaim_coinsGroupByPayload<T extends claim_coinsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Claim_coinsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Claim_coinsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Claim_coinsGroupByOutputType[P]>
            : GetScalarType<T[P], Claim_coinsGroupByOutputType[P]>
        }
      >
    >


  export type claim_coinsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    date?: boolean
    amount?: boolean
    status?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["claim_coins"]>

  export type claim_coinsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    date?: boolean
    amount?: boolean
    status?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["claim_coins"]>

  export type claim_coinsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    date?: boolean
    amount?: boolean
    status?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["claim_coins"]>

  export type claim_coinsSelectScalar = {
    id?: boolean
    user_id?: boolean
    date?: boolean
    amount?: boolean
    status?: boolean
  }

  export type claim_coinsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "date" | "amount" | "status", ExtArgs["result"]["claim_coins"]>
  export type claim_coinsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type claim_coinsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type claim_coinsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
  }

  export type $claim_coinsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "claim_coins"
    objects: {
      users: Prisma.$usersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      user_id: string
      date: Date | null
      amount: Prisma.Decimal
      status: boolean | null
    }, ExtArgs["result"]["claim_coins"]>
    composites: {}
  }

  type claim_coinsGetPayload<S extends boolean | null | undefined | claim_coinsDefaultArgs> = $Result.GetResult<Prisma.$claim_coinsPayload, S>

  type claim_coinsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<claim_coinsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Claim_coinsCountAggregateInputType | true
    }

  export interface claim_coinsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['claim_coins'], meta: { name: 'claim_coins' } }
    /**
     * Find zero or one Claim_coins that matches the filter.
     * @param {claim_coinsFindUniqueArgs} args - Arguments to find a Claim_coins
     * @example
     * // Get one Claim_coins
     * const claim_coins = await prisma.claim_coins.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends claim_coinsFindUniqueArgs>(args: SelectSubset<T, claim_coinsFindUniqueArgs<ExtArgs>>): Prisma__claim_coinsClient<$Result.GetResult<Prisma.$claim_coinsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Claim_coins that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {claim_coinsFindUniqueOrThrowArgs} args - Arguments to find a Claim_coins
     * @example
     * // Get one Claim_coins
     * const claim_coins = await prisma.claim_coins.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends claim_coinsFindUniqueOrThrowArgs>(args: SelectSubset<T, claim_coinsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__claim_coinsClient<$Result.GetResult<Prisma.$claim_coinsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Claim_coins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {claim_coinsFindFirstArgs} args - Arguments to find a Claim_coins
     * @example
     * // Get one Claim_coins
     * const claim_coins = await prisma.claim_coins.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends claim_coinsFindFirstArgs>(args?: SelectSubset<T, claim_coinsFindFirstArgs<ExtArgs>>): Prisma__claim_coinsClient<$Result.GetResult<Prisma.$claim_coinsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Claim_coins that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {claim_coinsFindFirstOrThrowArgs} args - Arguments to find a Claim_coins
     * @example
     * // Get one Claim_coins
     * const claim_coins = await prisma.claim_coins.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends claim_coinsFindFirstOrThrowArgs>(args?: SelectSubset<T, claim_coinsFindFirstOrThrowArgs<ExtArgs>>): Prisma__claim_coinsClient<$Result.GetResult<Prisma.$claim_coinsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Claim_coins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {claim_coinsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Claim_coins
     * const claim_coins = await prisma.claim_coins.findMany()
     * 
     * // Get first 10 Claim_coins
     * const claim_coins = await prisma.claim_coins.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const claim_coinsWithIdOnly = await prisma.claim_coins.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends claim_coinsFindManyArgs>(args?: SelectSubset<T, claim_coinsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$claim_coinsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Claim_coins.
     * @param {claim_coinsCreateArgs} args - Arguments to create a Claim_coins.
     * @example
     * // Create one Claim_coins
     * const Claim_coins = await prisma.claim_coins.create({
     *   data: {
     *     // ... data to create a Claim_coins
     *   }
     * })
     * 
     */
    create<T extends claim_coinsCreateArgs>(args: SelectSubset<T, claim_coinsCreateArgs<ExtArgs>>): Prisma__claim_coinsClient<$Result.GetResult<Prisma.$claim_coinsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Claim_coins.
     * @param {claim_coinsCreateManyArgs} args - Arguments to create many Claim_coins.
     * @example
     * // Create many Claim_coins
     * const claim_coins = await prisma.claim_coins.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends claim_coinsCreateManyArgs>(args?: SelectSubset<T, claim_coinsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Claim_coins and returns the data saved in the database.
     * @param {claim_coinsCreateManyAndReturnArgs} args - Arguments to create many Claim_coins.
     * @example
     * // Create many Claim_coins
     * const claim_coins = await prisma.claim_coins.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Claim_coins and only return the `id`
     * const claim_coinsWithIdOnly = await prisma.claim_coins.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends claim_coinsCreateManyAndReturnArgs>(args?: SelectSubset<T, claim_coinsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$claim_coinsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Claim_coins.
     * @param {claim_coinsDeleteArgs} args - Arguments to delete one Claim_coins.
     * @example
     * // Delete one Claim_coins
     * const Claim_coins = await prisma.claim_coins.delete({
     *   where: {
     *     // ... filter to delete one Claim_coins
     *   }
     * })
     * 
     */
    delete<T extends claim_coinsDeleteArgs>(args: SelectSubset<T, claim_coinsDeleteArgs<ExtArgs>>): Prisma__claim_coinsClient<$Result.GetResult<Prisma.$claim_coinsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Claim_coins.
     * @param {claim_coinsUpdateArgs} args - Arguments to update one Claim_coins.
     * @example
     * // Update one Claim_coins
     * const claim_coins = await prisma.claim_coins.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends claim_coinsUpdateArgs>(args: SelectSubset<T, claim_coinsUpdateArgs<ExtArgs>>): Prisma__claim_coinsClient<$Result.GetResult<Prisma.$claim_coinsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Claim_coins.
     * @param {claim_coinsDeleteManyArgs} args - Arguments to filter Claim_coins to delete.
     * @example
     * // Delete a few Claim_coins
     * const { count } = await prisma.claim_coins.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends claim_coinsDeleteManyArgs>(args?: SelectSubset<T, claim_coinsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Claim_coins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {claim_coinsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Claim_coins
     * const claim_coins = await prisma.claim_coins.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends claim_coinsUpdateManyArgs>(args: SelectSubset<T, claim_coinsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Claim_coins and returns the data updated in the database.
     * @param {claim_coinsUpdateManyAndReturnArgs} args - Arguments to update many Claim_coins.
     * @example
     * // Update many Claim_coins
     * const claim_coins = await prisma.claim_coins.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Claim_coins and only return the `id`
     * const claim_coinsWithIdOnly = await prisma.claim_coins.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends claim_coinsUpdateManyAndReturnArgs>(args: SelectSubset<T, claim_coinsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$claim_coinsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Claim_coins.
     * @param {claim_coinsUpsertArgs} args - Arguments to update or create a Claim_coins.
     * @example
     * // Update or create a Claim_coins
     * const claim_coins = await prisma.claim_coins.upsert({
     *   create: {
     *     // ... data to create a Claim_coins
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Claim_coins we want to update
     *   }
     * })
     */
    upsert<T extends claim_coinsUpsertArgs>(args: SelectSubset<T, claim_coinsUpsertArgs<ExtArgs>>): Prisma__claim_coinsClient<$Result.GetResult<Prisma.$claim_coinsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Claim_coins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {claim_coinsCountArgs} args - Arguments to filter Claim_coins to count.
     * @example
     * // Count the number of Claim_coins
     * const count = await prisma.claim_coins.count({
     *   where: {
     *     // ... the filter for the Claim_coins we want to count
     *   }
     * })
    **/
    count<T extends claim_coinsCountArgs>(
      args?: Subset<T, claim_coinsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Claim_coinsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Claim_coins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Claim_coinsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Claim_coinsAggregateArgs>(args: Subset<T, Claim_coinsAggregateArgs>): Prisma.PrismaPromise<GetClaim_coinsAggregateType<T>>

    /**
     * Group by Claim_coins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {claim_coinsGroupByArgs} args - Group by arguments.
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
      T extends claim_coinsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: claim_coinsGroupByArgs['orderBy'] }
        : { orderBy?: claim_coinsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, claim_coinsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClaim_coinsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the claim_coins model
   */
  readonly fields: claim_coinsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for claim_coins.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__claim_coinsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the claim_coins model
   */
  interface claim_coinsFieldRefs {
    readonly id: FieldRef<"claim_coins", 'String'>
    readonly user_id: FieldRef<"claim_coins", 'String'>
    readonly date: FieldRef<"claim_coins", 'DateTime'>
    readonly amount: FieldRef<"claim_coins", 'Decimal'>
    readonly status: FieldRef<"claim_coins", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * claim_coins findUnique
   */
  export type claim_coinsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the claim_coins
     */
    select?: claim_coinsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the claim_coins
     */
    omit?: claim_coinsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: claim_coinsInclude<ExtArgs> | null
    /**
     * Filter, which claim_coins to fetch.
     */
    where: claim_coinsWhereUniqueInput
  }

  /**
   * claim_coins findUniqueOrThrow
   */
  export type claim_coinsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the claim_coins
     */
    select?: claim_coinsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the claim_coins
     */
    omit?: claim_coinsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: claim_coinsInclude<ExtArgs> | null
    /**
     * Filter, which claim_coins to fetch.
     */
    where: claim_coinsWhereUniqueInput
  }

  /**
   * claim_coins findFirst
   */
  export type claim_coinsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the claim_coins
     */
    select?: claim_coinsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the claim_coins
     */
    omit?: claim_coinsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: claim_coinsInclude<ExtArgs> | null
    /**
     * Filter, which claim_coins to fetch.
     */
    where?: claim_coinsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of claim_coins to fetch.
     */
    orderBy?: claim_coinsOrderByWithRelationInput | claim_coinsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for claim_coins.
     */
    cursor?: claim_coinsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` claim_coins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` claim_coins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of claim_coins.
     */
    distinct?: Claim_coinsScalarFieldEnum | Claim_coinsScalarFieldEnum[]
  }

  /**
   * claim_coins findFirstOrThrow
   */
  export type claim_coinsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the claim_coins
     */
    select?: claim_coinsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the claim_coins
     */
    omit?: claim_coinsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: claim_coinsInclude<ExtArgs> | null
    /**
     * Filter, which claim_coins to fetch.
     */
    where?: claim_coinsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of claim_coins to fetch.
     */
    orderBy?: claim_coinsOrderByWithRelationInput | claim_coinsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for claim_coins.
     */
    cursor?: claim_coinsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` claim_coins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` claim_coins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of claim_coins.
     */
    distinct?: Claim_coinsScalarFieldEnum | Claim_coinsScalarFieldEnum[]
  }

  /**
   * claim_coins findMany
   */
  export type claim_coinsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the claim_coins
     */
    select?: claim_coinsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the claim_coins
     */
    omit?: claim_coinsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: claim_coinsInclude<ExtArgs> | null
    /**
     * Filter, which claim_coins to fetch.
     */
    where?: claim_coinsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of claim_coins to fetch.
     */
    orderBy?: claim_coinsOrderByWithRelationInput | claim_coinsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing claim_coins.
     */
    cursor?: claim_coinsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` claim_coins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` claim_coins.
     */
    skip?: number
    distinct?: Claim_coinsScalarFieldEnum | Claim_coinsScalarFieldEnum[]
  }

  /**
   * claim_coins create
   */
  export type claim_coinsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the claim_coins
     */
    select?: claim_coinsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the claim_coins
     */
    omit?: claim_coinsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: claim_coinsInclude<ExtArgs> | null
    /**
     * The data needed to create a claim_coins.
     */
    data: XOR<claim_coinsCreateInput, claim_coinsUncheckedCreateInput>
  }

  /**
   * claim_coins createMany
   */
  export type claim_coinsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many claim_coins.
     */
    data: claim_coinsCreateManyInput | claim_coinsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * claim_coins createManyAndReturn
   */
  export type claim_coinsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the claim_coins
     */
    select?: claim_coinsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the claim_coins
     */
    omit?: claim_coinsOmit<ExtArgs> | null
    /**
     * The data used to create many claim_coins.
     */
    data: claim_coinsCreateManyInput | claim_coinsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: claim_coinsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * claim_coins update
   */
  export type claim_coinsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the claim_coins
     */
    select?: claim_coinsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the claim_coins
     */
    omit?: claim_coinsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: claim_coinsInclude<ExtArgs> | null
    /**
     * The data needed to update a claim_coins.
     */
    data: XOR<claim_coinsUpdateInput, claim_coinsUncheckedUpdateInput>
    /**
     * Choose, which claim_coins to update.
     */
    where: claim_coinsWhereUniqueInput
  }

  /**
   * claim_coins updateMany
   */
  export type claim_coinsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update claim_coins.
     */
    data: XOR<claim_coinsUpdateManyMutationInput, claim_coinsUncheckedUpdateManyInput>
    /**
     * Filter which claim_coins to update
     */
    where?: claim_coinsWhereInput
    /**
     * Limit how many claim_coins to update.
     */
    limit?: number
  }

  /**
   * claim_coins updateManyAndReturn
   */
  export type claim_coinsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the claim_coins
     */
    select?: claim_coinsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the claim_coins
     */
    omit?: claim_coinsOmit<ExtArgs> | null
    /**
     * The data used to update claim_coins.
     */
    data: XOR<claim_coinsUpdateManyMutationInput, claim_coinsUncheckedUpdateManyInput>
    /**
     * Filter which claim_coins to update
     */
    where?: claim_coinsWhereInput
    /**
     * Limit how many claim_coins to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: claim_coinsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * claim_coins upsert
   */
  export type claim_coinsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the claim_coins
     */
    select?: claim_coinsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the claim_coins
     */
    omit?: claim_coinsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: claim_coinsInclude<ExtArgs> | null
    /**
     * The filter to search for the claim_coins to update in case it exists.
     */
    where: claim_coinsWhereUniqueInput
    /**
     * In case the claim_coins found by the `where` argument doesn't exist, create a new claim_coins with this data.
     */
    create: XOR<claim_coinsCreateInput, claim_coinsUncheckedCreateInput>
    /**
     * In case the claim_coins was found with the provided `where` argument, update it with this data.
     */
    update: XOR<claim_coinsUpdateInput, claim_coinsUncheckedUpdateInput>
  }

  /**
   * claim_coins delete
   */
  export type claim_coinsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the claim_coins
     */
    select?: claim_coinsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the claim_coins
     */
    omit?: claim_coinsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: claim_coinsInclude<ExtArgs> | null
    /**
     * Filter which claim_coins to delete.
     */
    where: claim_coinsWhereUniqueInput
  }

  /**
   * claim_coins deleteMany
   */
  export type claim_coinsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which claim_coins to delete
     */
    where?: claim_coinsWhereInput
    /**
     * Limit how many claim_coins to delete.
     */
    limit?: number
  }

  /**
   * claim_coins without action
   */
  export type claim_coinsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the claim_coins
     */
    select?: claim_coinsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the claim_coins
     */
    omit?: claim_coinsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: claim_coinsInclude<ExtArgs> | null
  }


  /**
   * Model deposits
   */

  export type AggregateDeposits = {
    _count: DepositsCountAggregateOutputType | null
    _avg: DepositsAvgAggregateOutputType | null
    _sum: DepositsSumAggregateOutputType | null
    _min: DepositsMinAggregateOutputType | null
    _max: DepositsMaxAggregateOutputType | null
  }

  export type DepositsAvgAggregateOutputType = {
    amount: Decimal | null
  }

  export type DepositsSumAggregateOutputType = {
    amount: Decimal | null
  }

  export type DepositsMinAggregateOutputType = {
    id: string | null
    transaction_id: string | null
    user_id: string | null
    date: Date | null
    amount: Decimal | null
    address: string | null
    to_address: string | null
    trc_type: string | null
    status: boolean | null
  }

  export type DepositsMaxAggregateOutputType = {
    id: string | null
    transaction_id: string | null
    user_id: string | null
    date: Date | null
    amount: Decimal | null
    address: string | null
    to_address: string | null
    trc_type: string | null
    status: boolean | null
  }

  export type DepositsCountAggregateOutputType = {
    id: number
    transaction_id: number
    user_id: number
    date: number
    amount: number
    address: number
    to_address: number
    trc_type: number
    status: number
    _all: number
  }


  export type DepositsAvgAggregateInputType = {
    amount?: true
  }

  export type DepositsSumAggregateInputType = {
    amount?: true
  }

  export type DepositsMinAggregateInputType = {
    id?: true
    transaction_id?: true
    user_id?: true
    date?: true
    amount?: true
    address?: true
    to_address?: true
    trc_type?: true
    status?: true
  }

  export type DepositsMaxAggregateInputType = {
    id?: true
    transaction_id?: true
    user_id?: true
    date?: true
    amount?: true
    address?: true
    to_address?: true
    trc_type?: true
    status?: true
  }

  export type DepositsCountAggregateInputType = {
    id?: true
    transaction_id?: true
    user_id?: true
    date?: true
    amount?: true
    address?: true
    to_address?: true
    trc_type?: true
    status?: true
    _all?: true
  }

  export type DepositsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which deposits to aggregate.
     */
    where?: depositsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of deposits to fetch.
     */
    orderBy?: depositsOrderByWithRelationInput | depositsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: depositsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` deposits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` deposits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned deposits
    **/
    _count?: true | DepositsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DepositsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DepositsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DepositsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DepositsMaxAggregateInputType
  }

  export type GetDepositsAggregateType<T extends DepositsAggregateArgs> = {
        [P in keyof T & keyof AggregateDeposits]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDeposits[P]>
      : GetScalarType<T[P], AggregateDeposits[P]>
  }




  export type depositsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: depositsWhereInput
    orderBy?: depositsOrderByWithAggregationInput | depositsOrderByWithAggregationInput[]
    by: DepositsScalarFieldEnum[] | DepositsScalarFieldEnum
    having?: depositsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DepositsCountAggregateInputType | true
    _avg?: DepositsAvgAggregateInputType
    _sum?: DepositsSumAggregateInputType
    _min?: DepositsMinAggregateInputType
    _max?: DepositsMaxAggregateInputType
  }

  export type DepositsGroupByOutputType = {
    id: string
    transaction_id: string
    user_id: string
    date: Date | null
    amount: Decimal
    address: string
    to_address: string
    trc_type: string
    status: boolean | null
    _count: DepositsCountAggregateOutputType | null
    _avg: DepositsAvgAggregateOutputType | null
    _sum: DepositsSumAggregateOutputType | null
    _min: DepositsMinAggregateOutputType | null
    _max: DepositsMaxAggregateOutputType | null
  }

  type GetDepositsGroupByPayload<T extends depositsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DepositsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DepositsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DepositsGroupByOutputType[P]>
            : GetScalarType<T[P], DepositsGroupByOutputType[P]>
        }
      >
    >


  export type depositsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    transaction_id?: boolean
    user_id?: boolean
    date?: boolean
    amount?: boolean
    address?: boolean
    to_address?: boolean
    trc_type?: boolean
    status?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["deposits"]>

  export type depositsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    transaction_id?: boolean
    user_id?: boolean
    date?: boolean
    amount?: boolean
    address?: boolean
    to_address?: boolean
    trc_type?: boolean
    status?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["deposits"]>

  export type depositsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    transaction_id?: boolean
    user_id?: boolean
    date?: boolean
    amount?: boolean
    address?: boolean
    to_address?: boolean
    trc_type?: boolean
    status?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["deposits"]>

  export type depositsSelectScalar = {
    id?: boolean
    transaction_id?: boolean
    user_id?: boolean
    date?: boolean
    amount?: boolean
    address?: boolean
    to_address?: boolean
    trc_type?: boolean
    status?: boolean
  }

  export type depositsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "transaction_id" | "user_id" | "date" | "amount" | "address" | "to_address" | "trc_type" | "status", ExtArgs["result"]["deposits"]>
  export type depositsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type depositsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type depositsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
  }

  export type $depositsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "deposits"
    objects: {
      users: Prisma.$usersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      transaction_id: string
      user_id: string
      date: Date | null
      amount: Prisma.Decimal
      address: string
      to_address: string
      trc_type: string
      status: boolean | null
    }, ExtArgs["result"]["deposits"]>
    composites: {}
  }

  type depositsGetPayload<S extends boolean | null | undefined | depositsDefaultArgs> = $Result.GetResult<Prisma.$depositsPayload, S>

  type depositsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<depositsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DepositsCountAggregateInputType | true
    }

  export interface depositsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['deposits'], meta: { name: 'deposits' } }
    /**
     * Find zero or one Deposits that matches the filter.
     * @param {depositsFindUniqueArgs} args - Arguments to find a Deposits
     * @example
     * // Get one Deposits
     * const deposits = await prisma.deposits.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends depositsFindUniqueArgs>(args: SelectSubset<T, depositsFindUniqueArgs<ExtArgs>>): Prisma__depositsClient<$Result.GetResult<Prisma.$depositsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Deposits that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {depositsFindUniqueOrThrowArgs} args - Arguments to find a Deposits
     * @example
     * // Get one Deposits
     * const deposits = await prisma.deposits.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends depositsFindUniqueOrThrowArgs>(args: SelectSubset<T, depositsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__depositsClient<$Result.GetResult<Prisma.$depositsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Deposits that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {depositsFindFirstArgs} args - Arguments to find a Deposits
     * @example
     * // Get one Deposits
     * const deposits = await prisma.deposits.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends depositsFindFirstArgs>(args?: SelectSubset<T, depositsFindFirstArgs<ExtArgs>>): Prisma__depositsClient<$Result.GetResult<Prisma.$depositsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Deposits that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {depositsFindFirstOrThrowArgs} args - Arguments to find a Deposits
     * @example
     * // Get one Deposits
     * const deposits = await prisma.deposits.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends depositsFindFirstOrThrowArgs>(args?: SelectSubset<T, depositsFindFirstOrThrowArgs<ExtArgs>>): Prisma__depositsClient<$Result.GetResult<Prisma.$depositsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Deposits that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {depositsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Deposits
     * const deposits = await prisma.deposits.findMany()
     * 
     * // Get first 10 Deposits
     * const deposits = await prisma.deposits.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const depositsWithIdOnly = await prisma.deposits.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends depositsFindManyArgs>(args?: SelectSubset<T, depositsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$depositsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Deposits.
     * @param {depositsCreateArgs} args - Arguments to create a Deposits.
     * @example
     * // Create one Deposits
     * const Deposits = await prisma.deposits.create({
     *   data: {
     *     // ... data to create a Deposits
     *   }
     * })
     * 
     */
    create<T extends depositsCreateArgs>(args: SelectSubset<T, depositsCreateArgs<ExtArgs>>): Prisma__depositsClient<$Result.GetResult<Prisma.$depositsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Deposits.
     * @param {depositsCreateManyArgs} args - Arguments to create many Deposits.
     * @example
     * // Create many Deposits
     * const deposits = await prisma.deposits.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends depositsCreateManyArgs>(args?: SelectSubset<T, depositsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Deposits and returns the data saved in the database.
     * @param {depositsCreateManyAndReturnArgs} args - Arguments to create many Deposits.
     * @example
     * // Create many Deposits
     * const deposits = await prisma.deposits.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Deposits and only return the `id`
     * const depositsWithIdOnly = await prisma.deposits.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends depositsCreateManyAndReturnArgs>(args?: SelectSubset<T, depositsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$depositsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Deposits.
     * @param {depositsDeleteArgs} args - Arguments to delete one Deposits.
     * @example
     * // Delete one Deposits
     * const Deposits = await prisma.deposits.delete({
     *   where: {
     *     // ... filter to delete one Deposits
     *   }
     * })
     * 
     */
    delete<T extends depositsDeleteArgs>(args: SelectSubset<T, depositsDeleteArgs<ExtArgs>>): Prisma__depositsClient<$Result.GetResult<Prisma.$depositsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Deposits.
     * @param {depositsUpdateArgs} args - Arguments to update one Deposits.
     * @example
     * // Update one Deposits
     * const deposits = await prisma.deposits.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends depositsUpdateArgs>(args: SelectSubset<T, depositsUpdateArgs<ExtArgs>>): Prisma__depositsClient<$Result.GetResult<Prisma.$depositsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Deposits.
     * @param {depositsDeleteManyArgs} args - Arguments to filter Deposits to delete.
     * @example
     * // Delete a few Deposits
     * const { count } = await prisma.deposits.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends depositsDeleteManyArgs>(args?: SelectSubset<T, depositsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Deposits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {depositsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Deposits
     * const deposits = await prisma.deposits.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends depositsUpdateManyArgs>(args: SelectSubset<T, depositsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Deposits and returns the data updated in the database.
     * @param {depositsUpdateManyAndReturnArgs} args - Arguments to update many Deposits.
     * @example
     * // Update many Deposits
     * const deposits = await prisma.deposits.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Deposits and only return the `id`
     * const depositsWithIdOnly = await prisma.deposits.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends depositsUpdateManyAndReturnArgs>(args: SelectSubset<T, depositsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$depositsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Deposits.
     * @param {depositsUpsertArgs} args - Arguments to update or create a Deposits.
     * @example
     * // Update or create a Deposits
     * const deposits = await prisma.deposits.upsert({
     *   create: {
     *     // ... data to create a Deposits
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Deposits we want to update
     *   }
     * })
     */
    upsert<T extends depositsUpsertArgs>(args: SelectSubset<T, depositsUpsertArgs<ExtArgs>>): Prisma__depositsClient<$Result.GetResult<Prisma.$depositsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Deposits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {depositsCountArgs} args - Arguments to filter Deposits to count.
     * @example
     * // Count the number of Deposits
     * const count = await prisma.deposits.count({
     *   where: {
     *     // ... the filter for the Deposits we want to count
     *   }
     * })
    **/
    count<T extends depositsCountArgs>(
      args?: Subset<T, depositsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DepositsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Deposits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepositsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DepositsAggregateArgs>(args: Subset<T, DepositsAggregateArgs>): Prisma.PrismaPromise<GetDepositsAggregateType<T>>

    /**
     * Group by Deposits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {depositsGroupByArgs} args - Group by arguments.
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
      T extends depositsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: depositsGroupByArgs['orderBy'] }
        : { orderBy?: depositsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, depositsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDepositsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the deposits model
   */
  readonly fields: depositsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for deposits.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__depositsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the deposits model
   */
  interface depositsFieldRefs {
    readonly id: FieldRef<"deposits", 'String'>
    readonly transaction_id: FieldRef<"deposits", 'String'>
    readonly user_id: FieldRef<"deposits", 'String'>
    readonly date: FieldRef<"deposits", 'DateTime'>
    readonly amount: FieldRef<"deposits", 'Decimal'>
    readonly address: FieldRef<"deposits", 'String'>
    readonly to_address: FieldRef<"deposits", 'String'>
    readonly trc_type: FieldRef<"deposits", 'String'>
    readonly status: FieldRef<"deposits", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * deposits findUnique
   */
  export type depositsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the deposits
     */
    select?: depositsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the deposits
     */
    omit?: depositsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: depositsInclude<ExtArgs> | null
    /**
     * Filter, which deposits to fetch.
     */
    where: depositsWhereUniqueInput
  }

  /**
   * deposits findUniqueOrThrow
   */
  export type depositsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the deposits
     */
    select?: depositsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the deposits
     */
    omit?: depositsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: depositsInclude<ExtArgs> | null
    /**
     * Filter, which deposits to fetch.
     */
    where: depositsWhereUniqueInput
  }

  /**
   * deposits findFirst
   */
  export type depositsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the deposits
     */
    select?: depositsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the deposits
     */
    omit?: depositsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: depositsInclude<ExtArgs> | null
    /**
     * Filter, which deposits to fetch.
     */
    where?: depositsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of deposits to fetch.
     */
    orderBy?: depositsOrderByWithRelationInput | depositsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for deposits.
     */
    cursor?: depositsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` deposits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` deposits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of deposits.
     */
    distinct?: DepositsScalarFieldEnum | DepositsScalarFieldEnum[]
  }

  /**
   * deposits findFirstOrThrow
   */
  export type depositsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the deposits
     */
    select?: depositsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the deposits
     */
    omit?: depositsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: depositsInclude<ExtArgs> | null
    /**
     * Filter, which deposits to fetch.
     */
    where?: depositsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of deposits to fetch.
     */
    orderBy?: depositsOrderByWithRelationInput | depositsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for deposits.
     */
    cursor?: depositsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` deposits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` deposits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of deposits.
     */
    distinct?: DepositsScalarFieldEnum | DepositsScalarFieldEnum[]
  }

  /**
   * deposits findMany
   */
  export type depositsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the deposits
     */
    select?: depositsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the deposits
     */
    omit?: depositsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: depositsInclude<ExtArgs> | null
    /**
     * Filter, which deposits to fetch.
     */
    where?: depositsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of deposits to fetch.
     */
    orderBy?: depositsOrderByWithRelationInput | depositsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing deposits.
     */
    cursor?: depositsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` deposits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` deposits.
     */
    skip?: number
    distinct?: DepositsScalarFieldEnum | DepositsScalarFieldEnum[]
  }

  /**
   * deposits create
   */
  export type depositsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the deposits
     */
    select?: depositsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the deposits
     */
    omit?: depositsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: depositsInclude<ExtArgs> | null
    /**
     * The data needed to create a deposits.
     */
    data: XOR<depositsCreateInput, depositsUncheckedCreateInput>
  }

  /**
   * deposits createMany
   */
  export type depositsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many deposits.
     */
    data: depositsCreateManyInput | depositsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * deposits createManyAndReturn
   */
  export type depositsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the deposits
     */
    select?: depositsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the deposits
     */
    omit?: depositsOmit<ExtArgs> | null
    /**
     * The data used to create many deposits.
     */
    data: depositsCreateManyInput | depositsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: depositsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * deposits update
   */
  export type depositsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the deposits
     */
    select?: depositsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the deposits
     */
    omit?: depositsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: depositsInclude<ExtArgs> | null
    /**
     * The data needed to update a deposits.
     */
    data: XOR<depositsUpdateInput, depositsUncheckedUpdateInput>
    /**
     * Choose, which deposits to update.
     */
    where: depositsWhereUniqueInput
  }

  /**
   * deposits updateMany
   */
  export type depositsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update deposits.
     */
    data: XOR<depositsUpdateManyMutationInput, depositsUncheckedUpdateManyInput>
    /**
     * Filter which deposits to update
     */
    where?: depositsWhereInput
    /**
     * Limit how many deposits to update.
     */
    limit?: number
  }

  /**
   * deposits updateManyAndReturn
   */
  export type depositsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the deposits
     */
    select?: depositsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the deposits
     */
    omit?: depositsOmit<ExtArgs> | null
    /**
     * The data used to update deposits.
     */
    data: XOR<depositsUpdateManyMutationInput, depositsUncheckedUpdateManyInput>
    /**
     * Filter which deposits to update
     */
    where?: depositsWhereInput
    /**
     * Limit how many deposits to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: depositsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * deposits upsert
   */
  export type depositsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the deposits
     */
    select?: depositsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the deposits
     */
    omit?: depositsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: depositsInclude<ExtArgs> | null
    /**
     * The filter to search for the deposits to update in case it exists.
     */
    where: depositsWhereUniqueInput
    /**
     * In case the deposits found by the `where` argument doesn't exist, create a new deposits with this data.
     */
    create: XOR<depositsCreateInput, depositsUncheckedCreateInput>
    /**
     * In case the deposits was found with the provided `where` argument, update it with this data.
     */
    update: XOR<depositsUpdateInput, depositsUncheckedUpdateInput>
  }

  /**
   * deposits delete
   */
  export type depositsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the deposits
     */
    select?: depositsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the deposits
     */
    omit?: depositsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: depositsInclude<ExtArgs> | null
    /**
     * Filter which deposits to delete.
     */
    where: depositsWhereUniqueInput
  }

  /**
   * deposits deleteMany
   */
  export type depositsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which deposits to delete
     */
    where?: depositsWhereInput
    /**
     * Limit how many deposits to delete.
     */
    limit?: number
  }

  /**
   * deposits without action
   */
  export type depositsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the deposits
     */
    select?: depositsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the deposits
     */
    omit?: depositsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: depositsInclude<ExtArgs> | null
  }


  /**
   * Model earn_coins
   */

  export type AggregateEarn_coins = {
    _count: Earn_coinsCountAggregateOutputType | null
    _avg: Earn_coinsAvgAggregateOutputType | null
    _sum: Earn_coinsSumAggregateOutputType | null
    _min: Earn_coinsMinAggregateOutputType | null
    _max: Earn_coinsMaxAggregateOutputType | null
  }

  export type Earn_coinsAvgAggregateOutputType = {
    amount: Decimal | null
  }

  export type Earn_coinsSumAggregateOutputType = {
    amount: Decimal | null
  }

  export type Earn_coinsMinAggregateOutputType = {
    id: string | null
    user_id: string | null
    date: Date | null
    amount: Decimal | null
    status: boolean | null
  }

  export type Earn_coinsMaxAggregateOutputType = {
    id: string | null
    user_id: string | null
    date: Date | null
    amount: Decimal | null
    status: boolean | null
  }

  export type Earn_coinsCountAggregateOutputType = {
    id: number
    user_id: number
    date: number
    amount: number
    status: number
    _all: number
  }


  export type Earn_coinsAvgAggregateInputType = {
    amount?: true
  }

  export type Earn_coinsSumAggregateInputType = {
    amount?: true
  }

  export type Earn_coinsMinAggregateInputType = {
    id?: true
    user_id?: true
    date?: true
    amount?: true
    status?: true
  }

  export type Earn_coinsMaxAggregateInputType = {
    id?: true
    user_id?: true
    date?: true
    amount?: true
    status?: true
  }

  export type Earn_coinsCountAggregateInputType = {
    id?: true
    user_id?: true
    date?: true
    amount?: true
    status?: true
    _all?: true
  }

  export type Earn_coinsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which earn_coins to aggregate.
     */
    where?: earn_coinsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of earn_coins to fetch.
     */
    orderBy?: earn_coinsOrderByWithRelationInput | earn_coinsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: earn_coinsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` earn_coins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` earn_coins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned earn_coins
    **/
    _count?: true | Earn_coinsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Earn_coinsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Earn_coinsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Earn_coinsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Earn_coinsMaxAggregateInputType
  }

  export type GetEarn_coinsAggregateType<T extends Earn_coinsAggregateArgs> = {
        [P in keyof T & keyof AggregateEarn_coins]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEarn_coins[P]>
      : GetScalarType<T[P], AggregateEarn_coins[P]>
  }




  export type earn_coinsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: earn_coinsWhereInput
    orderBy?: earn_coinsOrderByWithAggregationInput | earn_coinsOrderByWithAggregationInput[]
    by: Earn_coinsScalarFieldEnum[] | Earn_coinsScalarFieldEnum
    having?: earn_coinsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Earn_coinsCountAggregateInputType | true
    _avg?: Earn_coinsAvgAggregateInputType
    _sum?: Earn_coinsSumAggregateInputType
    _min?: Earn_coinsMinAggregateInputType
    _max?: Earn_coinsMaxAggregateInputType
  }

  export type Earn_coinsGroupByOutputType = {
    id: string
    user_id: string
    date: Date | null
    amount: Decimal
    status: boolean | null
    _count: Earn_coinsCountAggregateOutputType | null
    _avg: Earn_coinsAvgAggregateOutputType | null
    _sum: Earn_coinsSumAggregateOutputType | null
    _min: Earn_coinsMinAggregateOutputType | null
    _max: Earn_coinsMaxAggregateOutputType | null
  }

  type GetEarn_coinsGroupByPayload<T extends earn_coinsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Earn_coinsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Earn_coinsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Earn_coinsGroupByOutputType[P]>
            : GetScalarType<T[P], Earn_coinsGroupByOutputType[P]>
        }
      >
    >


  export type earn_coinsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    date?: boolean
    amount?: boolean
    status?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["earn_coins"]>

  export type earn_coinsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    date?: boolean
    amount?: boolean
    status?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["earn_coins"]>

  export type earn_coinsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    date?: boolean
    amount?: boolean
    status?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["earn_coins"]>

  export type earn_coinsSelectScalar = {
    id?: boolean
    user_id?: boolean
    date?: boolean
    amount?: boolean
    status?: boolean
  }

  export type earn_coinsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "date" | "amount" | "status", ExtArgs["result"]["earn_coins"]>
  export type earn_coinsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type earn_coinsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type earn_coinsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
  }

  export type $earn_coinsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "earn_coins"
    objects: {
      users: Prisma.$usersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      user_id: string
      date: Date | null
      amount: Prisma.Decimal
      status: boolean | null
    }, ExtArgs["result"]["earn_coins"]>
    composites: {}
  }

  type earn_coinsGetPayload<S extends boolean | null | undefined | earn_coinsDefaultArgs> = $Result.GetResult<Prisma.$earn_coinsPayload, S>

  type earn_coinsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<earn_coinsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Earn_coinsCountAggregateInputType | true
    }

  export interface earn_coinsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['earn_coins'], meta: { name: 'earn_coins' } }
    /**
     * Find zero or one Earn_coins that matches the filter.
     * @param {earn_coinsFindUniqueArgs} args - Arguments to find a Earn_coins
     * @example
     * // Get one Earn_coins
     * const earn_coins = await prisma.earn_coins.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends earn_coinsFindUniqueArgs>(args: SelectSubset<T, earn_coinsFindUniqueArgs<ExtArgs>>): Prisma__earn_coinsClient<$Result.GetResult<Prisma.$earn_coinsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Earn_coins that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {earn_coinsFindUniqueOrThrowArgs} args - Arguments to find a Earn_coins
     * @example
     * // Get one Earn_coins
     * const earn_coins = await prisma.earn_coins.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends earn_coinsFindUniqueOrThrowArgs>(args: SelectSubset<T, earn_coinsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__earn_coinsClient<$Result.GetResult<Prisma.$earn_coinsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Earn_coins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {earn_coinsFindFirstArgs} args - Arguments to find a Earn_coins
     * @example
     * // Get one Earn_coins
     * const earn_coins = await prisma.earn_coins.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends earn_coinsFindFirstArgs>(args?: SelectSubset<T, earn_coinsFindFirstArgs<ExtArgs>>): Prisma__earn_coinsClient<$Result.GetResult<Prisma.$earn_coinsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Earn_coins that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {earn_coinsFindFirstOrThrowArgs} args - Arguments to find a Earn_coins
     * @example
     * // Get one Earn_coins
     * const earn_coins = await prisma.earn_coins.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends earn_coinsFindFirstOrThrowArgs>(args?: SelectSubset<T, earn_coinsFindFirstOrThrowArgs<ExtArgs>>): Prisma__earn_coinsClient<$Result.GetResult<Prisma.$earn_coinsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Earn_coins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {earn_coinsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Earn_coins
     * const earn_coins = await prisma.earn_coins.findMany()
     * 
     * // Get first 10 Earn_coins
     * const earn_coins = await prisma.earn_coins.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const earn_coinsWithIdOnly = await prisma.earn_coins.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends earn_coinsFindManyArgs>(args?: SelectSubset<T, earn_coinsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$earn_coinsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Earn_coins.
     * @param {earn_coinsCreateArgs} args - Arguments to create a Earn_coins.
     * @example
     * // Create one Earn_coins
     * const Earn_coins = await prisma.earn_coins.create({
     *   data: {
     *     // ... data to create a Earn_coins
     *   }
     * })
     * 
     */
    create<T extends earn_coinsCreateArgs>(args: SelectSubset<T, earn_coinsCreateArgs<ExtArgs>>): Prisma__earn_coinsClient<$Result.GetResult<Prisma.$earn_coinsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Earn_coins.
     * @param {earn_coinsCreateManyArgs} args - Arguments to create many Earn_coins.
     * @example
     * // Create many Earn_coins
     * const earn_coins = await prisma.earn_coins.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends earn_coinsCreateManyArgs>(args?: SelectSubset<T, earn_coinsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Earn_coins and returns the data saved in the database.
     * @param {earn_coinsCreateManyAndReturnArgs} args - Arguments to create many Earn_coins.
     * @example
     * // Create many Earn_coins
     * const earn_coins = await prisma.earn_coins.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Earn_coins and only return the `id`
     * const earn_coinsWithIdOnly = await prisma.earn_coins.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends earn_coinsCreateManyAndReturnArgs>(args?: SelectSubset<T, earn_coinsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$earn_coinsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Earn_coins.
     * @param {earn_coinsDeleteArgs} args - Arguments to delete one Earn_coins.
     * @example
     * // Delete one Earn_coins
     * const Earn_coins = await prisma.earn_coins.delete({
     *   where: {
     *     // ... filter to delete one Earn_coins
     *   }
     * })
     * 
     */
    delete<T extends earn_coinsDeleteArgs>(args: SelectSubset<T, earn_coinsDeleteArgs<ExtArgs>>): Prisma__earn_coinsClient<$Result.GetResult<Prisma.$earn_coinsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Earn_coins.
     * @param {earn_coinsUpdateArgs} args - Arguments to update one Earn_coins.
     * @example
     * // Update one Earn_coins
     * const earn_coins = await prisma.earn_coins.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends earn_coinsUpdateArgs>(args: SelectSubset<T, earn_coinsUpdateArgs<ExtArgs>>): Prisma__earn_coinsClient<$Result.GetResult<Prisma.$earn_coinsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Earn_coins.
     * @param {earn_coinsDeleteManyArgs} args - Arguments to filter Earn_coins to delete.
     * @example
     * // Delete a few Earn_coins
     * const { count } = await prisma.earn_coins.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends earn_coinsDeleteManyArgs>(args?: SelectSubset<T, earn_coinsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Earn_coins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {earn_coinsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Earn_coins
     * const earn_coins = await prisma.earn_coins.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends earn_coinsUpdateManyArgs>(args: SelectSubset<T, earn_coinsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Earn_coins and returns the data updated in the database.
     * @param {earn_coinsUpdateManyAndReturnArgs} args - Arguments to update many Earn_coins.
     * @example
     * // Update many Earn_coins
     * const earn_coins = await prisma.earn_coins.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Earn_coins and only return the `id`
     * const earn_coinsWithIdOnly = await prisma.earn_coins.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends earn_coinsUpdateManyAndReturnArgs>(args: SelectSubset<T, earn_coinsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$earn_coinsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Earn_coins.
     * @param {earn_coinsUpsertArgs} args - Arguments to update or create a Earn_coins.
     * @example
     * // Update or create a Earn_coins
     * const earn_coins = await prisma.earn_coins.upsert({
     *   create: {
     *     // ... data to create a Earn_coins
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Earn_coins we want to update
     *   }
     * })
     */
    upsert<T extends earn_coinsUpsertArgs>(args: SelectSubset<T, earn_coinsUpsertArgs<ExtArgs>>): Prisma__earn_coinsClient<$Result.GetResult<Prisma.$earn_coinsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Earn_coins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {earn_coinsCountArgs} args - Arguments to filter Earn_coins to count.
     * @example
     * // Count the number of Earn_coins
     * const count = await prisma.earn_coins.count({
     *   where: {
     *     // ... the filter for the Earn_coins we want to count
     *   }
     * })
    **/
    count<T extends earn_coinsCountArgs>(
      args?: Subset<T, earn_coinsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Earn_coinsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Earn_coins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Earn_coinsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Earn_coinsAggregateArgs>(args: Subset<T, Earn_coinsAggregateArgs>): Prisma.PrismaPromise<GetEarn_coinsAggregateType<T>>

    /**
     * Group by Earn_coins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {earn_coinsGroupByArgs} args - Group by arguments.
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
      T extends earn_coinsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: earn_coinsGroupByArgs['orderBy'] }
        : { orderBy?: earn_coinsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, earn_coinsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEarn_coinsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the earn_coins model
   */
  readonly fields: earn_coinsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for earn_coins.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__earn_coinsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the earn_coins model
   */
  interface earn_coinsFieldRefs {
    readonly id: FieldRef<"earn_coins", 'String'>
    readonly user_id: FieldRef<"earn_coins", 'String'>
    readonly date: FieldRef<"earn_coins", 'DateTime'>
    readonly amount: FieldRef<"earn_coins", 'Decimal'>
    readonly status: FieldRef<"earn_coins", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * earn_coins findUnique
   */
  export type earn_coinsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the earn_coins
     */
    select?: earn_coinsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the earn_coins
     */
    omit?: earn_coinsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: earn_coinsInclude<ExtArgs> | null
    /**
     * Filter, which earn_coins to fetch.
     */
    where: earn_coinsWhereUniqueInput
  }

  /**
   * earn_coins findUniqueOrThrow
   */
  export type earn_coinsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the earn_coins
     */
    select?: earn_coinsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the earn_coins
     */
    omit?: earn_coinsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: earn_coinsInclude<ExtArgs> | null
    /**
     * Filter, which earn_coins to fetch.
     */
    where: earn_coinsWhereUniqueInput
  }

  /**
   * earn_coins findFirst
   */
  export type earn_coinsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the earn_coins
     */
    select?: earn_coinsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the earn_coins
     */
    omit?: earn_coinsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: earn_coinsInclude<ExtArgs> | null
    /**
     * Filter, which earn_coins to fetch.
     */
    where?: earn_coinsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of earn_coins to fetch.
     */
    orderBy?: earn_coinsOrderByWithRelationInput | earn_coinsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for earn_coins.
     */
    cursor?: earn_coinsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` earn_coins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` earn_coins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of earn_coins.
     */
    distinct?: Earn_coinsScalarFieldEnum | Earn_coinsScalarFieldEnum[]
  }

  /**
   * earn_coins findFirstOrThrow
   */
  export type earn_coinsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the earn_coins
     */
    select?: earn_coinsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the earn_coins
     */
    omit?: earn_coinsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: earn_coinsInclude<ExtArgs> | null
    /**
     * Filter, which earn_coins to fetch.
     */
    where?: earn_coinsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of earn_coins to fetch.
     */
    orderBy?: earn_coinsOrderByWithRelationInput | earn_coinsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for earn_coins.
     */
    cursor?: earn_coinsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` earn_coins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` earn_coins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of earn_coins.
     */
    distinct?: Earn_coinsScalarFieldEnum | Earn_coinsScalarFieldEnum[]
  }

  /**
   * earn_coins findMany
   */
  export type earn_coinsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the earn_coins
     */
    select?: earn_coinsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the earn_coins
     */
    omit?: earn_coinsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: earn_coinsInclude<ExtArgs> | null
    /**
     * Filter, which earn_coins to fetch.
     */
    where?: earn_coinsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of earn_coins to fetch.
     */
    orderBy?: earn_coinsOrderByWithRelationInput | earn_coinsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing earn_coins.
     */
    cursor?: earn_coinsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` earn_coins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` earn_coins.
     */
    skip?: number
    distinct?: Earn_coinsScalarFieldEnum | Earn_coinsScalarFieldEnum[]
  }

  /**
   * earn_coins create
   */
  export type earn_coinsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the earn_coins
     */
    select?: earn_coinsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the earn_coins
     */
    omit?: earn_coinsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: earn_coinsInclude<ExtArgs> | null
    /**
     * The data needed to create a earn_coins.
     */
    data: XOR<earn_coinsCreateInput, earn_coinsUncheckedCreateInput>
  }

  /**
   * earn_coins createMany
   */
  export type earn_coinsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many earn_coins.
     */
    data: earn_coinsCreateManyInput | earn_coinsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * earn_coins createManyAndReturn
   */
  export type earn_coinsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the earn_coins
     */
    select?: earn_coinsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the earn_coins
     */
    omit?: earn_coinsOmit<ExtArgs> | null
    /**
     * The data used to create many earn_coins.
     */
    data: earn_coinsCreateManyInput | earn_coinsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: earn_coinsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * earn_coins update
   */
  export type earn_coinsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the earn_coins
     */
    select?: earn_coinsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the earn_coins
     */
    omit?: earn_coinsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: earn_coinsInclude<ExtArgs> | null
    /**
     * The data needed to update a earn_coins.
     */
    data: XOR<earn_coinsUpdateInput, earn_coinsUncheckedUpdateInput>
    /**
     * Choose, which earn_coins to update.
     */
    where: earn_coinsWhereUniqueInput
  }

  /**
   * earn_coins updateMany
   */
  export type earn_coinsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update earn_coins.
     */
    data: XOR<earn_coinsUpdateManyMutationInput, earn_coinsUncheckedUpdateManyInput>
    /**
     * Filter which earn_coins to update
     */
    where?: earn_coinsWhereInput
    /**
     * Limit how many earn_coins to update.
     */
    limit?: number
  }

  /**
   * earn_coins updateManyAndReturn
   */
  export type earn_coinsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the earn_coins
     */
    select?: earn_coinsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the earn_coins
     */
    omit?: earn_coinsOmit<ExtArgs> | null
    /**
     * The data used to update earn_coins.
     */
    data: XOR<earn_coinsUpdateManyMutationInput, earn_coinsUncheckedUpdateManyInput>
    /**
     * Filter which earn_coins to update
     */
    where?: earn_coinsWhereInput
    /**
     * Limit how many earn_coins to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: earn_coinsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * earn_coins upsert
   */
  export type earn_coinsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the earn_coins
     */
    select?: earn_coinsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the earn_coins
     */
    omit?: earn_coinsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: earn_coinsInclude<ExtArgs> | null
    /**
     * The filter to search for the earn_coins to update in case it exists.
     */
    where: earn_coinsWhereUniqueInput
    /**
     * In case the earn_coins found by the `where` argument doesn't exist, create a new earn_coins with this data.
     */
    create: XOR<earn_coinsCreateInput, earn_coinsUncheckedCreateInput>
    /**
     * In case the earn_coins was found with the provided `where` argument, update it with this data.
     */
    update: XOR<earn_coinsUpdateInput, earn_coinsUncheckedUpdateInput>
  }

  /**
   * earn_coins delete
   */
  export type earn_coinsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the earn_coins
     */
    select?: earn_coinsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the earn_coins
     */
    omit?: earn_coinsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: earn_coinsInclude<ExtArgs> | null
    /**
     * Filter which earn_coins to delete.
     */
    where: earn_coinsWhereUniqueInput
  }

  /**
   * earn_coins deleteMany
   */
  export type earn_coinsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which earn_coins to delete
     */
    where?: earn_coinsWhereInput
    /**
     * Limit how many earn_coins to delete.
     */
    limit?: number
  }

  /**
   * earn_coins without action
   */
  export type earn_coinsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the earn_coins
     */
    select?: earn_coinsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the earn_coins
     */
    omit?: earn_coinsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: earn_coinsInclude<ExtArgs> | null
  }


  /**
   * Model mine_coins
   */

  export type AggregateMine_coins = {
    _count: Mine_coinsCountAggregateOutputType | null
    _avg: Mine_coinsAvgAggregateOutputType | null
    _sum: Mine_coinsSumAggregateOutputType | null
    _min: Mine_coinsMinAggregateOutputType | null
    _max: Mine_coinsMaxAggregateOutputType | null
  }

  export type Mine_coinsAvgAggregateOutputType = {
    amount: Decimal | null
  }

  export type Mine_coinsSumAggregateOutputType = {
    amount: Decimal | null
  }

  export type Mine_coinsMinAggregateOutputType = {
    id: string | null
    user_id: string | null
    is_start: boolean | null
    date: Date | null
    amount: Decimal | null
    start_time: Date | null
    status: boolean | null
  }

  export type Mine_coinsMaxAggregateOutputType = {
    id: string | null
    user_id: string | null
    is_start: boolean | null
    date: Date | null
    amount: Decimal | null
    start_time: Date | null
    status: boolean | null
  }

  export type Mine_coinsCountAggregateOutputType = {
    id: number
    user_id: number
    is_start: number
    date: number
    amount: number
    start_time: number
    status: number
    _all: number
  }


  export type Mine_coinsAvgAggregateInputType = {
    amount?: true
  }

  export type Mine_coinsSumAggregateInputType = {
    amount?: true
  }

  export type Mine_coinsMinAggregateInputType = {
    id?: true
    user_id?: true
    is_start?: true
    date?: true
    amount?: true
    start_time?: true
    status?: true
  }

  export type Mine_coinsMaxAggregateInputType = {
    id?: true
    user_id?: true
    is_start?: true
    date?: true
    amount?: true
    start_time?: true
    status?: true
  }

  export type Mine_coinsCountAggregateInputType = {
    id?: true
    user_id?: true
    is_start?: true
    date?: true
    amount?: true
    start_time?: true
    status?: true
    _all?: true
  }

  export type Mine_coinsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which mine_coins to aggregate.
     */
    where?: mine_coinsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mine_coins to fetch.
     */
    orderBy?: mine_coinsOrderByWithRelationInput | mine_coinsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: mine_coinsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mine_coins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mine_coins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned mine_coins
    **/
    _count?: true | Mine_coinsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Mine_coinsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Mine_coinsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Mine_coinsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Mine_coinsMaxAggregateInputType
  }

  export type GetMine_coinsAggregateType<T extends Mine_coinsAggregateArgs> = {
        [P in keyof T & keyof AggregateMine_coins]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMine_coins[P]>
      : GetScalarType<T[P], AggregateMine_coins[P]>
  }




  export type mine_coinsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: mine_coinsWhereInput
    orderBy?: mine_coinsOrderByWithAggregationInput | mine_coinsOrderByWithAggregationInput[]
    by: Mine_coinsScalarFieldEnum[] | Mine_coinsScalarFieldEnum
    having?: mine_coinsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Mine_coinsCountAggregateInputType | true
    _avg?: Mine_coinsAvgAggregateInputType
    _sum?: Mine_coinsSumAggregateInputType
    _min?: Mine_coinsMinAggregateInputType
    _max?: Mine_coinsMaxAggregateInputType
  }

  export type Mine_coinsGroupByOutputType = {
    id: string
    user_id: string
    is_start: boolean | null
    date: Date | null
    amount: Decimal
    start_time: Date | null
    status: boolean | null
    _count: Mine_coinsCountAggregateOutputType | null
    _avg: Mine_coinsAvgAggregateOutputType | null
    _sum: Mine_coinsSumAggregateOutputType | null
    _min: Mine_coinsMinAggregateOutputType | null
    _max: Mine_coinsMaxAggregateOutputType | null
  }

  type GetMine_coinsGroupByPayload<T extends mine_coinsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Mine_coinsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Mine_coinsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Mine_coinsGroupByOutputType[P]>
            : GetScalarType<T[P], Mine_coinsGroupByOutputType[P]>
        }
      >
    >


  export type mine_coinsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    is_start?: boolean
    date?: boolean
    amount?: boolean
    start_time?: boolean
    status?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mine_coins"]>

  export type mine_coinsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    is_start?: boolean
    date?: boolean
    amount?: boolean
    start_time?: boolean
    status?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mine_coins"]>

  export type mine_coinsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    is_start?: boolean
    date?: boolean
    amount?: boolean
    start_time?: boolean
    status?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mine_coins"]>

  export type mine_coinsSelectScalar = {
    id?: boolean
    user_id?: boolean
    is_start?: boolean
    date?: boolean
    amount?: boolean
    start_time?: boolean
    status?: boolean
  }

  export type mine_coinsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "is_start" | "date" | "amount" | "start_time" | "status", ExtArgs["result"]["mine_coins"]>
  export type mine_coinsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type mine_coinsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type mine_coinsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
  }

  export type $mine_coinsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "mine_coins"
    objects: {
      users: Prisma.$usersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      user_id: string
      is_start: boolean | null
      date: Date | null
      amount: Prisma.Decimal
      start_time: Date | null
      status: boolean | null
    }, ExtArgs["result"]["mine_coins"]>
    composites: {}
  }

  type mine_coinsGetPayload<S extends boolean | null | undefined | mine_coinsDefaultArgs> = $Result.GetResult<Prisma.$mine_coinsPayload, S>

  type mine_coinsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<mine_coinsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Mine_coinsCountAggregateInputType | true
    }

  export interface mine_coinsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['mine_coins'], meta: { name: 'mine_coins' } }
    /**
     * Find zero or one Mine_coins that matches the filter.
     * @param {mine_coinsFindUniqueArgs} args - Arguments to find a Mine_coins
     * @example
     * // Get one Mine_coins
     * const mine_coins = await prisma.mine_coins.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends mine_coinsFindUniqueArgs>(args: SelectSubset<T, mine_coinsFindUniqueArgs<ExtArgs>>): Prisma__mine_coinsClient<$Result.GetResult<Prisma.$mine_coinsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Mine_coins that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {mine_coinsFindUniqueOrThrowArgs} args - Arguments to find a Mine_coins
     * @example
     * // Get one Mine_coins
     * const mine_coins = await prisma.mine_coins.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends mine_coinsFindUniqueOrThrowArgs>(args: SelectSubset<T, mine_coinsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__mine_coinsClient<$Result.GetResult<Prisma.$mine_coinsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Mine_coins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mine_coinsFindFirstArgs} args - Arguments to find a Mine_coins
     * @example
     * // Get one Mine_coins
     * const mine_coins = await prisma.mine_coins.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends mine_coinsFindFirstArgs>(args?: SelectSubset<T, mine_coinsFindFirstArgs<ExtArgs>>): Prisma__mine_coinsClient<$Result.GetResult<Prisma.$mine_coinsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Mine_coins that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mine_coinsFindFirstOrThrowArgs} args - Arguments to find a Mine_coins
     * @example
     * // Get one Mine_coins
     * const mine_coins = await prisma.mine_coins.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends mine_coinsFindFirstOrThrowArgs>(args?: SelectSubset<T, mine_coinsFindFirstOrThrowArgs<ExtArgs>>): Prisma__mine_coinsClient<$Result.GetResult<Prisma.$mine_coinsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Mine_coins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mine_coinsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Mine_coins
     * const mine_coins = await prisma.mine_coins.findMany()
     * 
     * // Get first 10 Mine_coins
     * const mine_coins = await prisma.mine_coins.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mine_coinsWithIdOnly = await prisma.mine_coins.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends mine_coinsFindManyArgs>(args?: SelectSubset<T, mine_coinsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$mine_coinsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Mine_coins.
     * @param {mine_coinsCreateArgs} args - Arguments to create a Mine_coins.
     * @example
     * // Create one Mine_coins
     * const Mine_coins = await prisma.mine_coins.create({
     *   data: {
     *     // ... data to create a Mine_coins
     *   }
     * })
     * 
     */
    create<T extends mine_coinsCreateArgs>(args: SelectSubset<T, mine_coinsCreateArgs<ExtArgs>>): Prisma__mine_coinsClient<$Result.GetResult<Prisma.$mine_coinsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Mine_coins.
     * @param {mine_coinsCreateManyArgs} args - Arguments to create many Mine_coins.
     * @example
     * // Create many Mine_coins
     * const mine_coins = await prisma.mine_coins.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends mine_coinsCreateManyArgs>(args?: SelectSubset<T, mine_coinsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Mine_coins and returns the data saved in the database.
     * @param {mine_coinsCreateManyAndReturnArgs} args - Arguments to create many Mine_coins.
     * @example
     * // Create many Mine_coins
     * const mine_coins = await prisma.mine_coins.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Mine_coins and only return the `id`
     * const mine_coinsWithIdOnly = await prisma.mine_coins.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends mine_coinsCreateManyAndReturnArgs>(args?: SelectSubset<T, mine_coinsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$mine_coinsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Mine_coins.
     * @param {mine_coinsDeleteArgs} args - Arguments to delete one Mine_coins.
     * @example
     * // Delete one Mine_coins
     * const Mine_coins = await prisma.mine_coins.delete({
     *   where: {
     *     // ... filter to delete one Mine_coins
     *   }
     * })
     * 
     */
    delete<T extends mine_coinsDeleteArgs>(args: SelectSubset<T, mine_coinsDeleteArgs<ExtArgs>>): Prisma__mine_coinsClient<$Result.GetResult<Prisma.$mine_coinsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Mine_coins.
     * @param {mine_coinsUpdateArgs} args - Arguments to update one Mine_coins.
     * @example
     * // Update one Mine_coins
     * const mine_coins = await prisma.mine_coins.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends mine_coinsUpdateArgs>(args: SelectSubset<T, mine_coinsUpdateArgs<ExtArgs>>): Prisma__mine_coinsClient<$Result.GetResult<Prisma.$mine_coinsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Mine_coins.
     * @param {mine_coinsDeleteManyArgs} args - Arguments to filter Mine_coins to delete.
     * @example
     * // Delete a few Mine_coins
     * const { count } = await prisma.mine_coins.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends mine_coinsDeleteManyArgs>(args?: SelectSubset<T, mine_coinsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Mine_coins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mine_coinsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Mine_coins
     * const mine_coins = await prisma.mine_coins.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends mine_coinsUpdateManyArgs>(args: SelectSubset<T, mine_coinsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Mine_coins and returns the data updated in the database.
     * @param {mine_coinsUpdateManyAndReturnArgs} args - Arguments to update many Mine_coins.
     * @example
     * // Update many Mine_coins
     * const mine_coins = await prisma.mine_coins.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Mine_coins and only return the `id`
     * const mine_coinsWithIdOnly = await prisma.mine_coins.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends mine_coinsUpdateManyAndReturnArgs>(args: SelectSubset<T, mine_coinsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$mine_coinsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Mine_coins.
     * @param {mine_coinsUpsertArgs} args - Arguments to update or create a Mine_coins.
     * @example
     * // Update or create a Mine_coins
     * const mine_coins = await prisma.mine_coins.upsert({
     *   create: {
     *     // ... data to create a Mine_coins
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Mine_coins we want to update
     *   }
     * })
     */
    upsert<T extends mine_coinsUpsertArgs>(args: SelectSubset<T, mine_coinsUpsertArgs<ExtArgs>>): Prisma__mine_coinsClient<$Result.GetResult<Prisma.$mine_coinsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Mine_coins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mine_coinsCountArgs} args - Arguments to filter Mine_coins to count.
     * @example
     * // Count the number of Mine_coins
     * const count = await prisma.mine_coins.count({
     *   where: {
     *     // ... the filter for the Mine_coins we want to count
     *   }
     * })
    **/
    count<T extends mine_coinsCountArgs>(
      args?: Subset<T, mine_coinsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Mine_coinsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Mine_coins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Mine_coinsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Mine_coinsAggregateArgs>(args: Subset<T, Mine_coinsAggregateArgs>): Prisma.PrismaPromise<GetMine_coinsAggregateType<T>>

    /**
     * Group by Mine_coins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mine_coinsGroupByArgs} args - Group by arguments.
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
      T extends mine_coinsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: mine_coinsGroupByArgs['orderBy'] }
        : { orderBy?: mine_coinsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, mine_coinsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMine_coinsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the mine_coins model
   */
  readonly fields: mine_coinsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for mine_coins.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__mine_coinsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the mine_coins model
   */
  interface mine_coinsFieldRefs {
    readonly id: FieldRef<"mine_coins", 'String'>
    readonly user_id: FieldRef<"mine_coins", 'String'>
    readonly is_start: FieldRef<"mine_coins", 'Boolean'>
    readonly date: FieldRef<"mine_coins", 'DateTime'>
    readonly amount: FieldRef<"mine_coins", 'Decimal'>
    readonly start_time: FieldRef<"mine_coins", 'DateTime'>
    readonly status: FieldRef<"mine_coins", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * mine_coins findUnique
   */
  export type mine_coinsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mine_coins
     */
    select?: mine_coinsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mine_coins
     */
    omit?: mine_coinsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mine_coinsInclude<ExtArgs> | null
    /**
     * Filter, which mine_coins to fetch.
     */
    where: mine_coinsWhereUniqueInput
  }

  /**
   * mine_coins findUniqueOrThrow
   */
  export type mine_coinsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mine_coins
     */
    select?: mine_coinsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mine_coins
     */
    omit?: mine_coinsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mine_coinsInclude<ExtArgs> | null
    /**
     * Filter, which mine_coins to fetch.
     */
    where: mine_coinsWhereUniqueInput
  }

  /**
   * mine_coins findFirst
   */
  export type mine_coinsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mine_coins
     */
    select?: mine_coinsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mine_coins
     */
    omit?: mine_coinsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mine_coinsInclude<ExtArgs> | null
    /**
     * Filter, which mine_coins to fetch.
     */
    where?: mine_coinsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mine_coins to fetch.
     */
    orderBy?: mine_coinsOrderByWithRelationInput | mine_coinsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for mine_coins.
     */
    cursor?: mine_coinsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mine_coins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mine_coins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of mine_coins.
     */
    distinct?: Mine_coinsScalarFieldEnum | Mine_coinsScalarFieldEnum[]
  }

  /**
   * mine_coins findFirstOrThrow
   */
  export type mine_coinsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mine_coins
     */
    select?: mine_coinsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mine_coins
     */
    omit?: mine_coinsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mine_coinsInclude<ExtArgs> | null
    /**
     * Filter, which mine_coins to fetch.
     */
    where?: mine_coinsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mine_coins to fetch.
     */
    orderBy?: mine_coinsOrderByWithRelationInput | mine_coinsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for mine_coins.
     */
    cursor?: mine_coinsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mine_coins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mine_coins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of mine_coins.
     */
    distinct?: Mine_coinsScalarFieldEnum | Mine_coinsScalarFieldEnum[]
  }

  /**
   * mine_coins findMany
   */
  export type mine_coinsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mine_coins
     */
    select?: mine_coinsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mine_coins
     */
    omit?: mine_coinsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mine_coinsInclude<ExtArgs> | null
    /**
     * Filter, which mine_coins to fetch.
     */
    where?: mine_coinsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mine_coins to fetch.
     */
    orderBy?: mine_coinsOrderByWithRelationInput | mine_coinsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing mine_coins.
     */
    cursor?: mine_coinsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mine_coins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mine_coins.
     */
    skip?: number
    distinct?: Mine_coinsScalarFieldEnum | Mine_coinsScalarFieldEnum[]
  }

  /**
   * mine_coins create
   */
  export type mine_coinsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mine_coins
     */
    select?: mine_coinsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mine_coins
     */
    omit?: mine_coinsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mine_coinsInclude<ExtArgs> | null
    /**
     * The data needed to create a mine_coins.
     */
    data: XOR<mine_coinsCreateInput, mine_coinsUncheckedCreateInput>
  }

  /**
   * mine_coins createMany
   */
  export type mine_coinsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many mine_coins.
     */
    data: mine_coinsCreateManyInput | mine_coinsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * mine_coins createManyAndReturn
   */
  export type mine_coinsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mine_coins
     */
    select?: mine_coinsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the mine_coins
     */
    omit?: mine_coinsOmit<ExtArgs> | null
    /**
     * The data used to create many mine_coins.
     */
    data: mine_coinsCreateManyInput | mine_coinsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mine_coinsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * mine_coins update
   */
  export type mine_coinsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mine_coins
     */
    select?: mine_coinsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mine_coins
     */
    omit?: mine_coinsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mine_coinsInclude<ExtArgs> | null
    /**
     * The data needed to update a mine_coins.
     */
    data: XOR<mine_coinsUpdateInput, mine_coinsUncheckedUpdateInput>
    /**
     * Choose, which mine_coins to update.
     */
    where: mine_coinsWhereUniqueInput
  }

  /**
   * mine_coins updateMany
   */
  export type mine_coinsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update mine_coins.
     */
    data: XOR<mine_coinsUpdateManyMutationInput, mine_coinsUncheckedUpdateManyInput>
    /**
     * Filter which mine_coins to update
     */
    where?: mine_coinsWhereInput
    /**
     * Limit how many mine_coins to update.
     */
    limit?: number
  }

  /**
   * mine_coins updateManyAndReturn
   */
  export type mine_coinsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mine_coins
     */
    select?: mine_coinsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the mine_coins
     */
    omit?: mine_coinsOmit<ExtArgs> | null
    /**
     * The data used to update mine_coins.
     */
    data: XOR<mine_coinsUpdateManyMutationInput, mine_coinsUncheckedUpdateManyInput>
    /**
     * Filter which mine_coins to update
     */
    where?: mine_coinsWhereInput
    /**
     * Limit how many mine_coins to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mine_coinsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * mine_coins upsert
   */
  export type mine_coinsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mine_coins
     */
    select?: mine_coinsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mine_coins
     */
    omit?: mine_coinsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mine_coinsInclude<ExtArgs> | null
    /**
     * The filter to search for the mine_coins to update in case it exists.
     */
    where: mine_coinsWhereUniqueInput
    /**
     * In case the mine_coins found by the `where` argument doesn't exist, create a new mine_coins with this data.
     */
    create: XOR<mine_coinsCreateInput, mine_coinsUncheckedCreateInput>
    /**
     * In case the mine_coins was found with the provided `where` argument, update it with this data.
     */
    update: XOR<mine_coinsUpdateInput, mine_coinsUncheckedUpdateInput>
  }

  /**
   * mine_coins delete
   */
  export type mine_coinsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mine_coins
     */
    select?: mine_coinsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mine_coins
     */
    omit?: mine_coinsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mine_coinsInclude<ExtArgs> | null
    /**
     * Filter which mine_coins to delete.
     */
    where: mine_coinsWhereUniqueInput
  }

  /**
   * mine_coins deleteMany
   */
  export type mine_coinsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which mine_coins to delete
     */
    where?: mine_coinsWhereInput
    /**
     * Limit how many mine_coins to delete.
     */
    limit?: number
  }

  /**
   * mine_coins without action
   */
  export type mine_coinsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mine_coins
     */
    select?: mine_coinsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mine_coins
     */
    omit?: mine_coinsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mine_coinsInclude<ExtArgs> | null
  }


  /**
   * Model referral_progress
   */

  export type AggregateReferral_progress = {
    _count: Referral_progressCountAggregateOutputType | null
    _avg: Referral_progressAvgAggregateOutputType | null
    _sum: Referral_progressSumAggregateOutputType | null
    _min: Referral_progressMinAggregateOutputType | null
    _max: Referral_progressMaxAggregateOutputType | null
  }

  export type Referral_progressAvgAggregateOutputType = {
    level: number | null
    required_count: number | null
  }

  export type Referral_progressSumAggregateOutputType = {
    level: number | null
    required_count: number | null
  }

  export type Referral_progressMinAggregateOutputType = {
    id: string | null
    user_id: string | null
    level: number | null
    unlocked: boolean | null
    required_count: number | null
    unlocked_at: Date | null
  }

  export type Referral_progressMaxAggregateOutputType = {
    id: string | null
    user_id: string | null
    level: number | null
    unlocked: boolean | null
    required_count: number | null
    unlocked_at: Date | null
  }

  export type Referral_progressCountAggregateOutputType = {
    id: number
    user_id: number
    level: number
    referred_users: number
    unlocked: number
    required_count: number
    unlocked_at: number
    _all: number
  }


  export type Referral_progressAvgAggregateInputType = {
    level?: true
    required_count?: true
  }

  export type Referral_progressSumAggregateInputType = {
    level?: true
    required_count?: true
  }

  export type Referral_progressMinAggregateInputType = {
    id?: true
    user_id?: true
    level?: true
    unlocked?: true
    required_count?: true
    unlocked_at?: true
  }

  export type Referral_progressMaxAggregateInputType = {
    id?: true
    user_id?: true
    level?: true
    unlocked?: true
    required_count?: true
    unlocked_at?: true
  }

  export type Referral_progressCountAggregateInputType = {
    id?: true
    user_id?: true
    level?: true
    referred_users?: true
    unlocked?: true
    required_count?: true
    unlocked_at?: true
    _all?: true
  }

  export type Referral_progressAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which referral_progress to aggregate.
     */
    where?: referral_progressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of referral_progresses to fetch.
     */
    orderBy?: referral_progressOrderByWithRelationInput | referral_progressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: referral_progressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` referral_progresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` referral_progresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned referral_progresses
    **/
    _count?: true | Referral_progressCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Referral_progressAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Referral_progressSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Referral_progressMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Referral_progressMaxAggregateInputType
  }

  export type GetReferral_progressAggregateType<T extends Referral_progressAggregateArgs> = {
        [P in keyof T & keyof AggregateReferral_progress]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReferral_progress[P]>
      : GetScalarType<T[P], AggregateReferral_progress[P]>
  }




  export type referral_progressGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: referral_progressWhereInput
    orderBy?: referral_progressOrderByWithAggregationInput | referral_progressOrderByWithAggregationInput[]
    by: Referral_progressScalarFieldEnum[] | Referral_progressScalarFieldEnum
    having?: referral_progressScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Referral_progressCountAggregateInputType | true
    _avg?: Referral_progressAvgAggregateInputType
    _sum?: Referral_progressSumAggregateInputType
    _min?: Referral_progressMinAggregateInputType
    _max?: Referral_progressMaxAggregateInputType
  }

  export type Referral_progressGroupByOutputType = {
    id: string
    user_id: string
    level: number
    referred_users: string[]
    unlocked: boolean | null
    required_count: number
    unlocked_at: Date | null
    _count: Referral_progressCountAggregateOutputType | null
    _avg: Referral_progressAvgAggregateOutputType | null
    _sum: Referral_progressSumAggregateOutputType | null
    _min: Referral_progressMinAggregateOutputType | null
    _max: Referral_progressMaxAggregateOutputType | null
  }

  type GetReferral_progressGroupByPayload<T extends referral_progressGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Referral_progressGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Referral_progressGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Referral_progressGroupByOutputType[P]>
            : GetScalarType<T[P], Referral_progressGroupByOutputType[P]>
        }
      >
    >


  export type referral_progressSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    level?: boolean
    referred_users?: boolean
    unlocked?: boolean
    required_count?: boolean
    unlocked_at?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["referral_progress"]>

  export type referral_progressSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    level?: boolean
    referred_users?: boolean
    unlocked?: boolean
    required_count?: boolean
    unlocked_at?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["referral_progress"]>

  export type referral_progressSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    level?: boolean
    referred_users?: boolean
    unlocked?: boolean
    required_count?: boolean
    unlocked_at?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["referral_progress"]>

  export type referral_progressSelectScalar = {
    id?: boolean
    user_id?: boolean
    level?: boolean
    referred_users?: boolean
    unlocked?: boolean
    required_count?: boolean
    unlocked_at?: boolean
  }

  export type referral_progressOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "level" | "referred_users" | "unlocked" | "required_count" | "unlocked_at", ExtArgs["result"]["referral_progress"]>
  export type referral_progressInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type referral_progressIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type referral_progressIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
  }

  export type $referral_progressPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "referral_progress"
    objects: {
      users: Prisma.$usersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      user_id: string
      level: number
      referred_users: string[]
      unlocked: boolean | null
      required_count: number
      unlocked_at: Date | null
    }, ExtArgs["result"]["referral_progress"]>
    composites: {}
  }

  type referral_progressGetPayload<S extends boolean | null | undefined | referral_progressDefaultArgs> = $Result.GetResult<Prisma.$referral_progressPayload, S>

  type referral_progressCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<referral_progressFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Referral_progressCountAggregateInputType | true
    }

  export interface referral_progressDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['referral_progress'], meta: { name: 'referral_progress' } }
    /**
     * Find zero or one Referral_progress that matches the filter.
     * @param {referral_progressFindUniqueArgs} args - Arguments to find a Referral_progress
     * @example
     * // Get one Referral_progress
     * const referral_progress = await prisma.referral_progress.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends referral_progressFindUniqueArgs>(args: SelectSubset<T, referral_progressFindUniqueArgs<ExtArgs>>): Prisma__referral_progressClient<$Result.GetResult<Prisma.$referral_progressPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Referral_progress that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {referral_progressFindUniqueOrThrowArgs} args - Arguments to find a Referral_progress
     * @example
     * // Get one Referral_progress
     * const referral_progress = await prisma.referral_progress.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends referral_progressFindUniqueOrThrowArgs>(args: SelectSubset<T, referral_progressFindUniqueOrThrowArgs<ExtArgs>>): Prisma__referral_progressClient<$Result.GetResult<Prisma.$referral_progressPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Referral_progress that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {referral_progressFindFirstArgs} args - Arguments to find a Referral_progress
     * @example
     * // Get one Referral_progress
     * const referral_progress = await prisma.referral_progress.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends referral_progressFindFirstArgs>(args?: SelectSubset<T, referral_progressFindFirstArgs<ExtArgs>>): Prisma__referral_progressClient<$Result.GetResult<Prisma.$referral_progressPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Referral_progress that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {referral_progressFindFirstOrThrowArgs} args - Arguments to find a Referral_progress
     * @example
     * // Get one Referral_progress
     * const referral_progress = await prisma.referral_progress.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends referral_progressFindFirstOrThrowArgs>(args?: SelectSubset<T, referral_progressFindFirstOrThrowArgs<ExtArgs>>): Prisma__referral_progressClient<$Result.GetResult<Prisma.$referral_progressPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Referral_progresses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {referral_progressFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Referral_progresses
     * const referral_progresses = await prisma.referral_progress.findMany()
     * 
     * // Get first 10 Referral_progresses
     * const referral_progresses = await prisma.referral_progress.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const referral_progressWithIdOnly = await prisma.referral_progress.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends referral_progressFindManyArgs>(args?: SelectSubset<T, referral_progressFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$referral_progressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Referral_progress.
     * @param {referral_progressCreateArgs} args - Arguments to create a Referral_progress.
     * @example
     * // Create one Referral_progress
     * const Referral_progress = await prisma.referral_progress.create({
     *   data: {
     *     // ... data to create a Referral_progress
     *   }
     * })
     * 
     */
    create<T extends referral_progressCreateArgs>(args: SelectSubset<T, referral_progressCreateArgs<ExtArgs>>): Prisma__referral_progressClient<$Result.GetResult<Prisma.$referral_progressPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Referral_progresses.
     * @param {referral_progressCreateManyArgs} args - Arguments to create many Referral_progresses.
     * @example
     * // Create many Referral_progresses
     * const referral_progress = await prisma.referral_progress.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends referral_progressCreateManyArgs>(args?: SelectSubset<T, referral_progressCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Referral_progresses and returns the data saved in the database.
     * @param {referral_progressCreateManyAndReturnArgs} args - Arguments to create many Referral_progresses.
     * @example
     * // Create many Referral_progresses
     * const referral_progress = await prisma.referral_progress.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Referral_progresses and only return the `id`
     * const referral_progressWithIdOnly = await prisma.referral_progress.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends referral_progressCreateManyAndReturnArgs>(args?: SelectSubset<T, referral_progressCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$referral_progressPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Referral_progress.
     * @param {referral_progressDeleteArgs} args - Arguments to delete one Referral_progress.
     * @example
     * // Delete one Referral_progress
     * const Referral_progress = await prisma.referral_progress.delete({
     *   where: {
     *     // ... filter to delete one Referral_progress
     *   }
     * })
     * 
     */
    delete<T extends referral_progressDeleteArgs>(args: SelectSubset<T, referral_progressDeleteArgs<ExtArgs>>): Prisma__referral_progressClient<$Result.GetResult<Prisma.$referral_progressPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Referral_progress.
     * @param {referral_progressUpdateArgs} args - Arguments to update one Referral_progress.
     * @example
     * // Update one Referral_progress
     * const referral_progress = await prisma.referral_progress.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends referral_progressUpdateArgs>(args: SelectSubset<T, referral_progressUpdateArgs<ExtArgs>>): Prisma__referral_progressClient<$Result.GetResult<Prisma.$referral_progressPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Referral_progresses.
     * @param {referral_progressDeleteManyArgs} args - Arguments to filter Referral_progresses to delete.
     * @example
     * // Delete a few Referral_progresses
     * const { count } = await prisma.referral_progress.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends referral_progressDeleteManyArgs>(args?: SelectSubset<T, referral_progressDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Referral_progresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {referral_progressUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Referral_progresses
     * const referral_progress = await prisma.referral_progress.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends referral_progressUpdateManyArgs>(args: SelectSubset<T, referral_progressUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Referral_progresses and returns the data updated in the database.
     * @param {referral_progressUpdateManyAndReturnArgs} args - Arguments to update many Referral_progresses.
     * @example
     * // Update many Referral_progresses
     * const referral_progress = await prisma.referral_progress.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Referral_progresses and only return the `id`
     * const referral_progressWithIdOnly = await prisma.referral_progress.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends referral_progressUpdateManyAndReturnArgs>(args: SelectSubset<T, referral_progressUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$referral_progressPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Referral_progress.
     * @param {referral_progressUpsertArgs} args - Arguments to update or create a Referral_progress.
     * @example
     * // Update or create a Referral_progress
     * const referral_progress = await prisma.referral_progress.upsert({
     *   create: {
     *     // ... data to create a Referral_progress
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Referral_progress we want to update
     *   }
     * })
     */
    upsert<T extends referral_progressUpsertArgs>(args: SelectSubset<T, referral_progressUpsertArgs<ExtArgs>>): Prisma__referral_progressClient<$Result.GetResult<Prisma.$referral_progressPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Referral_progresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {referral_progressCountArgs} args - Arguments to filter Referral_progresses to count.
     * @example
     * // Count the number of Referral_progresses
     * const count = await prisma.referral_progress.count({
     *   where: {
     *     // ... the filter for the Referral_progresses we want to count
     *   }
     * })
    **/
    count<T extends referral_progressCountArgs>(
      args?: Subset<T, referral_progressCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Referral_progressCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Referral_progress.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Referral_progressAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Referral_progressAggregateArgs>(args: Subset<T, Referral_progressAggregateArgs>): Prisma.PrismaPromise<GetReferral_progressAggregateType<T>>

    /**
     * Group by Referral_progress.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {referral_progressGroupByArgs} args - Group by arguments.
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
      T extends referral_progressGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: referral_progressGroupByArgs['orderBy'] }
        : { orderBy?: referral_progressGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, referral_progressGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReferral_progressGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the referral_progress model
   */
  readonly fields: referral_progressFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for referral_progress.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__referral_progressClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the referral_progress model
   */
  interface referral_progressFieldRefs {
    readonly id: FieldRef<"referral_progress", 'String'>
    readonly user_id: FieldRef<"referral_progress", 'String'>
    readonly level: FieldRef<"referral_progress", 'Int'>
    readonly referred_users: FieldRef<"referral_progress", 'String[]'>
    readonly unlocked: FieldRef<"referral_progress", 'Boolean'>
    readonly required_count: FieldRef<"referral_progress", 'Int'>
    readonly unlocked_at: FieldRef<"referral_progress", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * referral_progress findUnique
   */
  export type referral_progressFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the referral_progress
     */
    select?: referral_progressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the referral_progress
     */
    omit?: referral_progressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: referral_progressInclude<ExtArgs> | null
    /**
     * Filter, which referral_progress to fetch.
     */
    where: referral_progressWhereUniqueInput
  }

  /**
   * referral_progress findUniqueOrThrow
   */
  export type referral_progressFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the referral_progress
     */
    select?: referral_progressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the referral_progress
     */
    omit?: referral_progressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: referral_progressInclude<ExtArgs> | null
    /**
     * Filter, which referral_progress to fetch.
     */
    where: referral_progressWhereUniqueInput
  }

  /**
   * referral_progress findFirst
   */
  export type referral_progressFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the referral_progress
     */
    select?: referral_progressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the referral_progress
     */
    omit?: referral_progressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: referral_progressInclude<ExtArgs> | null
    /**
     * Filter, which referral_progress to fetch.
     */
    where?: referral_progressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of referral_progresses to fetch.
     */
    orderBy?: referral_progressOrderByWithRelationInput | referral_progressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for referral_progresses.
     */
    cursor?: referral_progressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` referral_progresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` referral_progresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of referral_progresses.
     */
    distinct?: Referral_progressScalarFieldEnum | Referral_progressScalarFieldEnum[]
  }

  /**
   * referral_progress findFirstOrThrow
   */
  export type referral_progressFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the referral_progress
     */
    select?: referral_progressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the referral_progress
     */
    omit?: referral_progressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: referral_progressInclude<ExtArgs> | null
    /**
     * Filter, which referral_progress to fetch.
     */
    where?: referral_progressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of referral_progresses to fetch.
     */
    orderBy?: referral_progressOrderByWithRelationInput | referral_progressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for referral_progresses.
     */
    cursor?: referral_progressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` referral_progresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` referral_progresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of referral_progresses.
     */
    distinct?: Referral_progressScalarFieldEnum | Referral_progressScalarFieldEnum[]
  }

  /**
   * referral_progress findMany
   */
  export type referral_progressFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the referral_progress
     */
    select?: referral_progressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the referral_progress
     */
    omit?: referral_progressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: referral_progressInclude<ExtArgs> | null
    /**
     * Filter, which referral_progresses to fetch.
     */
    where?: referral_progressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of referral_progresses to fetch.
     */
    orderBy?: referral_progressOrderByWithRelationInput | referral_progressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing referral_progresses.
     */
    cursor?: referral_progressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` referral_progresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` referral_progresses.
     */
    skip?: number
    distinct?: Referral_progressScalarFieldEnum | Referral_progressScalarFieldEnum[]
  }

  /**
   * referral_progress create
   */
  export type referral_progressCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the referral_progress
     */
    select?: referral_progressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the referral_progress
     */
    omit?: referral_progressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: referral_progressInclude<ExtArgs> | null
    /**
     * The data needed to create a referral_progress.
     */
    data: XOR<referral_progressCreateInput, referral_progressUncheckedCreateInput>
  }

  /**
   * referral_progress createMany
   */
  export type referral_progressCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many referral_progresses.
     */
    data: referral_progressCreateManyInput | referral_progressCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * referral_progress createManyAndReturn
   */
  export type referral_progressCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the referral_progress
     */
    select?: referral_progressSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the referral_progress
     */
    omit?: referral_progressOmit<ExtArgs> | null
    /**
     * The data used to create many referral_progresses.
     */
    data: referral_progressCreateManyInput | referral_progressCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: referral_progressIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * referral_progress update
   */
  export type referral_progressUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the referral_progress
     */
    select?: referral_progressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the referral_progress
     */
    omit?: referral_progressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: referral_progressInclude<ExtArgs> | null
    /**
     * The data needed to update a referral_progress.
     */
    data: XOR<referral_progressUpdateInput, referral_progressUncheckedUpdateInput>
    /**
     * Choose, which referral_progress to update.
     */
    where: referral_progressWhereUniqueInput
  }

  /**
   * referral_progress updateMany
   */
  export type referral_progressUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update referral_progresses.
     */
    data: XOR<referral_progressUpdateManyMutationInput, referral_progressUncheckedUpdateManyInput>
    /**
     * Filter which referral_progresses to update
     */
    where?: referral_progressWhereInput
    /**
     * Limit how many referral_progresses to update.
     */
    limit?: number
  }

  /**
   * referral_progress updateManyAndReturn
   */
  export type referral_progressUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the referral_progress
     */
    select?: referral_progressSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the referral_progress
     */
    omit?: referral_progressOmit<ExtArgs> | null
    /**
     * The data used to update referral_progresses.
     */
    data: XOR<referral_progressUpdateManyMutationInput, referral_progressUncheckedUpdateManyInput>
    /**
     * Filter which referral_progresses to update
     */
    where?: referral_progressWhereInput
    /**
     * Limit how many referral_progresses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: referral_progressIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * referral_progress upsert
   */
  export type referral_progressUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the referral_progress
     */
    select?: referral_progressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the referral_progress
     */
    omit?: referral_progressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: referral_progressInclude<ExtArgs> | null
    /**
     * The filter to search for the referral_progress to update in case it exists.
     */
    where: referral_progressWhereUniqueInput
    /**
     * In case the referral_progress found by the `where` argument doesn't exist, create a new referral_progress with this data.
     */
    create: XOR<referral_progressCreateInput, referral_progressUncheckedCreateInput>
    /**
     * In case the referral_progress was found with the provided `where` argument, update it with this data.
     */
    update: XOR<referral_progressUpdateInput, referral_progressUncheckedUpdateInput>
  }

  /**
   * referral_progress delete
   */
  export type referral_progressDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the referral_progress
     */
    select?: referral_progressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the referral_progress
     */
    omit?: referral_progressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: referral_progressInclude<ExtArgs> | null
    /**
     * Filter which referral_progress to delete.
     */
    where: referral_progressWhereUniqueInput
  }

  /**
   * referral_progress deleteMany
   */
  export type referral_progressDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which referral_progresses to delete
     */
    where?: referral_progressWhereInput
    /**
     * Limit how many referral_progresses to delete.
     */
    limit?: number
  }

  /**
   * referral_progress without action
   */
  export type referral_progressDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the referral_progress
     */
    select?: referral_progressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the referral_progress
     */
    omit?: referral_progressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: referral_progressInclude<ExtArgs> | null
  }


  /**
   * Model temp_otps
   */

  export type AggregateTemp_otps = {
    _count: Temp_otpsCountAggregateOutputType | null
    _min: Temp_otpsMinAggregateOutputType | null
    _max: Temp_otpsMaxAggregateOutputType | null
  }

  export type Temp_otpsMinAggregateOutputType = {
    id: string | null
    email: string | null
    otp: string | null
    expires_at: Date | null
    verified: boolean | null
  }

  export type Temp_otpsMaxAggregateOutputType = {
    id: string | null
    email: string | null
    otp: string | null
    expires_at: Date | null
    verified: boolean | null
  }

  export type Temp_otpsCountAggregateOutputType = {
    id: number
    email: number
    otp: number
    expires_at: number
    verified: number
    _all: number
  }


  export type Temp_otpsMinAggregateInputType = {
    id?: true
    email?: true
    otp?: true
    expires_at?: true
    verified?: true
  }

  export type Temp_otpsMaxAggregateInputType = {
    id?: true
    email?: true
    otp?: true
    expires_at?: true
    verified?: true
  }

  export type Temp_otpsCountAggregateInputType = {
    id?: true
    email?: true
    otp?: true
    expires_at?: true
    verified?: true
    _all?: true
  }

  export type Temp_otpsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which temp_otps to aggregate.
     */
    where?: temp_otpsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of temp_otps to fetch.
     */
    orderBy?: temp_otpsOrderByWithRelationInput | temp_otpsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: temp_otpsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` temp_otps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` temp_otps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned temp_otps
    **/
    _count?: true | Temp_otpsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Temp_otpsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Temp_otpsMaxAggregateInputType
  }

  export type GetTemp_otpsAggregateType<T extends Temp_otpsAggregateArgs> = {
        [P in keyof T & keyof AggregateTemp_otps]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTemp_otps[P]>
      : GetScalarType<T[P], AggregateTemp_otps[P]>
  }




  export type temp_otpsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: temp_otpsWhereInput
    orderBy?: temp_otpsOrderByWithAggregationInput | temp_otpsOrderByWithAggregationInput[]
    by: Temp_otpsScalarFieldEnum[] | Temp_otpsScalarFieldEnum
    having?: temp_otpsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Temp_otpsCountAggregateInputType | true
    _min?: Temp_otpsMinAggregateInputType
    _max?: Temp_otpsMaxAggregateInputType
  }

  export type Temp_otpsGroupByOutputType = {
    id: string
    email: string
    otp: string
    expires_at: Date
    verified: boolean | null
    _count: Temp_otpsCountAggregateOutputType | null
    _min: Temp_otpsMinAggregateOutputType | null
    _max: Temp_otpsMaxAggregateOutputType | null
  }

  type GetTemp_otpsGroupByPayload<T extends temp_otpsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Temp_otpsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Temp_otpsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Temp_otpsGroupByOutputType[P]>
            : GetScalarType<T[P], Temp_otpsGroupByOutputType[P]>
        }
      >
    >


  export type temp_otpsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    otp?: boolean
    expires_at?: boolean
    verified?: boolean
  }, ExtArgs["result"]["temp_otps"]>

  export type temp_otpsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    otp?: boolean
    expires_at?: boolean
    verified?: boolean
  }, ExtArgs["result"]["temp_otps"]>

  export type temp_otpsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    otp?: boolean
    expires_at?: boolean
    verified?: boolean
  }, ExtArgs["result"]["temp_otps"]>

  export type temp_otpsSelectScalar = {
    id?: boolean
    email?: boolean
    otp?: boolean
    expires_at?: boolean
    verified?: boolean
  }

  export type temp_otpsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "otp" | "expires_at" | "verified", ExtArgs["result"]["temp_otps"]>

  export type $temp_otpsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "temp_otps"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      otp: string
      expires_at: Date
      verified: boolean | null
    }, ExtArgs["result"]["temp_otps"]>
    composites: {}
  }

  type temp_otpsGetPayload<S extends boolean | null | undefined | temp_otpsDefaultArgs> = $Result.GetResult<Prisma.$temp_otpsPayload, S>

  type temp_otpsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<temp_otpsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Temp_otpsCountAggregateInputType | true
    }

  export interface temp_otpsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['temp_otps'], meta: { name: 'temp_otps' } }
    /**
     * Find zero or one Temp_otps that matches the filter.
     * @param {temp_otpsFindUniqueArgs} args - Arguments to find a Temp_otps
     * @example
     * // Get one Temp_otps
     * const temp_otps = await prisma.temp_otps.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends temp_otpsFindUniqueArgs>(args: SelectSubset<T, temp_otpsFindUniqueArgs<ExtArgs>>): Prisma__temp_otpsClient<$Result.GetResult<Prisma.$temp_otpsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Temp_otps that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {temp_otpsFindUniqueOrThrowArgs} args - Arguments to find a Temp_otps
     * @example
     * // Get one Temp_otps
     * const temp_otps = await prisma.temp_otps.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends temp_otpsFindUniqueOrThrowArgs>(args: SelectSubset<T, temp_otpsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__temp_otpsClient<$Result.GetResult<Prisma.$temp_otpsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Temp_otps that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {temp_otpsFindFirstArgs} args - Arguments to find a Temp_otps
     * @example
     * // Get one Temp_otps
     * const temp_otps = await prisma.temp_otps.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends temp_otpsFindFirstArgs>(args?: SelectSubset<T, temp_otpsFindFirstArgs<ExtArgs>>): Prisma__temp_otpsClient<$Result.GetResult<Prisma.$temp_otpsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Temp_otps that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {temp_otpsFindFirstOrThrowArgs} args - Arguments to find a Temp_otps
     * @example
     * // Get one Temp_otps
     * const temp_otps = await prisma.temp_otps.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends temp_otpsFindFirstOrThrowArgs>(args?: SelectSubset<T, temp_otpsFindFirstOrThrowArgs<ExtArgs>>): Prisma__temp_otpsClient<$Result.GetResult<Prisma.$temp_otpsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Temp_otps that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {temp_otpsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Temp_otps
     * const temp_otps = await prisma.temp_otps.findMany()
     * 
     * // Get first 10 Temp_otps
     * const temp_otps = await prisma.temp_otps.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const temp_otpsWithIdOnly = await prisma.temp_otps.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends temp_otpsFindManyArgs>(args?: SelectSubset<T, temp_otpsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$temp_otpsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Temp_otps.
     * @param {temp_otpsCreateArgs} args - Arguments to create a Temp_otps.
     * @example
     * // Create one Temp_otps
     * const Temp_otps = await prisma.temp_otps.create({
     *   data: {
     *     // ... data to create a Temp_otps
     *   }
     * })
     * 
     */
    create<T extends temp_otpsCreateArgs>(args: SelectSubset<T, temp_otpsCreateArgs<ExtArgs>>): Prisma__temp_otpsClient<$Result.GetResult<Prisma.$temp_otpsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Temp_otps.
     * @param {temp_otpsCreateManyArgs} args - Arguments to create many Temp_otps.
     * @example
     * // Create many Temp_otps
     * const temp_otps = await prisma.temp_otps.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends temp_otpsCreateManyArgs>(args?: SelectSubset<T, temp_otpsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Temp_otps and returns the data saved in the database.
     * @param {temp_otpsCreateManyAndReturnArgs} args - Arguments to create many Temp_otps.
     * @example
     * // Create many Temp_otps
     * const temp_otps = await prisma.temp_otps.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Temp_otps and only return the `id`
     * const temp_otpsWithIdOnly = await prisma.temp_otps.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends temp_otpsCreateManyAndReturnArgs>(args?: SelectSubset<T, temp_otpsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$temp_otpsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Temp_otps.
     * @param {temp_otpsDeleteArgs} args - Arguments to delete one Temp_otps.
     * @example
     * // Delete one Temp_otps
     * const Temp_otps = await prisma.temp_otps.delete({
     *   where: {
     *     // ... filter to delete one Temp_otps
     *   }
     * })
     * 
     */
    delete<T extends temp_otpsDeleteArgs>(args: SelectSubset<T, temp_otpsDeleteArgs<ExtArgs>>): Prisma__temp_otpsClient<$Result.GetResult<Prisma.$temp_otpsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Temp_otps.
     * @param {temp_otpsUpdateArgs} args - Arguments to update one Temp_otps.
     * @example
     * // Update one Temp_otps
     * const temp_otps = await prisma.temp_otps.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends temp_otpsUpdateArgs>(args: SelectSubset<T, temp_otpsUpdateArgs<ExtArgs>>): Prisma__temp_otpsClient<$Result.GetResult<Prisma.$temp_otpsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Temp_otps.
     * @param {temp_otpsDeleteManyArgs} args - Arguments to filter Temp_otps to delete.
     * @example
     * // Delete a few Temp_otps
     * const { count } = await prisma.temp_otps.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends temp_otpsDeleteManyArgs>(args?: SelectSubset<T, temp_otpsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Temp_otps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {temp_otpsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Temp_otps
     * const temp_otps = await prisma.temp_otps.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends temp_otpsUpdateManyArgs>(args: SelectSubset<T, temp_otpsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Temp_otps and returns the data updated in the database.
     * @param {temp_otpsUpdateManyAndReturnArgs} args - Arguments to update many Temp_otps.
     * @example
     * // Update many Temp_otps
     * const temp_otps = await prisma.temp_otps.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Temp_otps and only return the `id`
     * const temp_otpsWithIdOnly = await prisma.temp_otps.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends temp_otpsUpdateManyAndReturnArgs>(args: SelectSubset<T, temp_otpsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$temp_otpsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Temp_otps.
     * @param {temp_otpsUpsertArgs} args - Arguments to update or create a Temp_otps.
     * @example
     * // Update or create a Temp_otps
     * const temp_otps = await prisma.temp_otps.upsert({
     *   create: {
     *     // ... data to create a Temp_otps
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Temp_otps we want to update
     *   }
     * })
     */
    upsert<T extends temp_otpsUpsertArgs>(args: SelectSubset<T, temp_otpsUpsertArgs<ExtArgs>>): Prisma__temp_otpsClient<$Result.GetResult<Prisma.$temp_otpsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Temp_otps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {temp_otpsCountArgs} args - Arguments to filter Temp_otps to count.
     * @example
     * // Count the number of Temp_otps
     * const count = await prisma.temp_otps.count({
     *   where: {
     *     // ... the filter for the Temp_otps we want to count
     *   }
     * })
    **/
    count<T extends temp_otpsCountArgs>(
      args?: Subset<T, temp_otpsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Temp_otpsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Temp_otps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Temp_otpsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Temp_otpsAggregateArgs>(args: Subset<T, Temp_otpsAggregateArgs>): Prisma.PrismaPromise<GetTemp_otpsAggregateType<T>>

    /**
     * Group by Temp_otps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {temp_otpsGroupByArgs} args - Group by arguments.
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
      T extends temp_otpsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: temp_otpsGroupByArgs['orderBy'] }
        : { orderBy?: temp_otpsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, temp_otpsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTemp_otpsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the temp_otps model
   */
  readonly fields: temp_otpsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for temp_otps.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__temp_otpsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the temp_otps model
   */
  interface temp_otpsFieldRefs {
    readonly id: FieldRef<"temp_otps", 'String'>
    readonly email: FieldRef<"temp_otps", 'String'>
    readonly otp: FieldRef<"temp_otps", 'String'>
    readonly expires_at: FieldRef<"temp_otps", 'DateTime'>
    readonly verified: FieldRef<"temp_otps", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * temp_otps findUnique
   */
  export type temp_otpsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the temp_otps
     */
    select?: temp_otpsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the temp_otps
     */
    omit?: temp_otpsOmit<ExtArgs> | null
    /**
     * Filter, which temp_otps to fetch.
     */
    where: temp_otpsWhereUniqueInput
  }

  /**
   * temp_otps findUniqueOrThrow
   */
  export type temp_otpsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the temp_otps
     */
    select?: temp_otpsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the temp_otps
     */
    omit?: temp_otpsOmit<ExtArgs> | null
    /**
     * Filter, which temp_otps to fetch.
     */
    where: temp_otpsWhereUniqueInput
  }

  /**
   * temp_otps findFirst
   */
  export type temp_otpsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the temp_otps
     */
    select?: temp_otpsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the temp_otps
     */
    omit?: temp_otpsOmit<ExtArgs> | null
    /**
     * Filter, which temp_otps to fetch.
     */
    where?: temp_otpsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of temp_otps to fetch.
     */
    orderBy?: temp_otpsOrderByWithRelationInput | temp_otpsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for temp_otps.
     */
    cursor?: temp_otpsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` temp_otps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` temp_otps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of temp_otps.
     */
    distinct?: Temp_otpsScalarFieldEnum | Temp_otpsScalarFieldEnum[]
  }

  /**
   * temp_otps findFirstOrThrow
   */
  export type temp_otpsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the temp_otps
     */
    select?: temp_otpsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the temp_otps
     */
    omit?: temp_otpsOmit<ExtArgs> | null
    /**
     * Filter, which temp_otps to fetch.
     */
    where?: temp_otpsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of temp_otps to fetch.
     */
    orderBy?: temp_otpsOrderByWithRelationInput | temp_otpsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for temp_otps.
     */
    cursor?: temp_otpsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` temp_otps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` temp_otps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of temp_otps.
     */
    distinct?: Temp_otpsScalarFieldEnum | Temp_otpsScalarFieldEnum[]
  }

  /**
   * temp_otps findMany
   */
  export type temp_otpsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the temp_otps
     */
    select?: temp_otpsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the temp_otps
     */
    omit?: temp_otpsOmit<ExtArgs> | null
    /**
     * Filter, which temp_otps to fetch.
     */
    where?: temp_otpsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of temp_otps to fetch.
     */
    orderBy?: temp_otpsOrderByWithRelationInput | temp_otpsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing temp_otps.
     */
    cursor?: temp_otpsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` temp_otps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` temp_otps.
     */
    skip?: number
    distinct?: Temp_otpsScalarFieldEnum | Temp_otpsScalarFieldEnum[]
  }

  /**
   * temp_otps create
   */
  export type temp_otpsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the temp_otps
     */
    select?: temp_otpsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the temp_otps
     */
    omit?: temp_otpsOmit<ExtArgs> | null
    /**
     * The data needed to create a temp_otps.
     */
    data: XOR<temp_otpsCreateInput, temp_otpsUncheckedCreateInput>
  }

  /**
   * temp_otps createMany
   */
  export type temp_otpsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many temp_otps.
     */
    data: temp_otpsCreateManyInput | temp_otpsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * temp_otps createManyAndReturn
   */
  export type temp_otpsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the temp_otps
     */
    select?: temp_otpsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the temp_otps
     */
    omit?: temp_otpsOmit<ExtArgs> | null
    /**
     * The data used to create many temp_otps.
     */
    data: temp_otpsCreateManyInput | temp_otpsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * temp_otps update
   */
  export type temp_otpsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the temp_otps
     */
    select?: temp_otpsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the temp_otps
     */
    omit?: temp_otpsOmit<ExtArgs> | null
    /**
     * The data needed to update a temp_otps.
     */
    data: XOR<temp_otpsUpdateInput, temp_otpsUncheckedUpdateInput>
    /**
     * Choose, which temp_otps to update.
     */
    where: temp_otpsWhereUniqueInput
  }

  /**
   * temp_otps updateMany
   */
  export type temp_otpsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update temp_otps.
     */
    data: XOR<temp_otpsUpdateManyMutationInput, temp_otpsUncheckedUpdateManyInput>
    /**
     * Filter which temp_otps to update
     */
    where?: temp_otpsWhereInput
    /**
     * Limit how many temp_otps to update.
     */
    limit?: number
  }

  /**
   * temp_otps updateManyAndReturn
   */
  export type temp_otpsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the temp_otps
     */
    select?: temp_otpsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the temp_otps
     */
    omit?: temp_otpsOmit<ExtArgs> | null
    /**
     * The data used to update temp_otps.
     */
    data: XOR<temp_otpsUpdateManyMutationInput, temp_otpsUncheckedUpdateManyInput>
    /**
     * Filter which temp_otps to update
     */
    where?: temp_otpsWhereInput
    /**
     * Limit how many temp_otps to update.
     */
    limit?: number
  }

  /**
   * temp_otps upsert
   */
  export type temp_otpsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the temp_otps
     */
    select?: temp_otpsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the temp_otps
     */
    omit?: temp_otpsOmit<ExtArgs> | null
    /**
     * The filter to search for the temp_otps to update in case it exists.
     */
    where: temp_otpsWhereUniqueInput
    /**
     * In case the temp_otps found by the `where` argument doesn't exist, create a new temp_otps with this data.
     */
    create: XOR<temp_otpsCreateInput, temp_otpsUncheckedCreateInput>
    /**
     * In case the temp_otps was found with the provided `where` argument, update it with this data.
     */
    update: XOR<temp_otpsUpdateInput, temp_otpsUncheckedUpdateInput>
  }

  /**
   * temp_otps delete
   */
  export type temp_otpsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the temp_otps
     */
    select?: temp_otpsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the temp_otps
     */
    omit?: temp_otpsOmit<ExtArgs> | null
    /**
     * Filter which temp_otps to delete.
     */
    where: temp_otpsWhereUniqueInput
  }

  /**
   * temp_otps deleteMany
   */
  export type temp_otpsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which temp_otps to delete
     */
    where?: temp_otpsWhereInput
    /**
     * Limit how many temp_otps to delete.
     */
    limit?: number
  }

  /**
   * temp_otps without action
   */
  export type temp_otpsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the temp_otps
     */
    select?: temp_otpsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the temp_otps
     */
    omit?: temp_otpsOmit<ExtArgs> | null
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
    amount: Decimal | null
    remaining_balance: Decimal | null
    deposit_amount: Decimal | null
    withdrawal_amount: Decimal | null
  }

  export type UsersSumAggregateOutputType = {
    amount: Decimal | null
    remaining_balance: Decimal | null
    deposit_amount: Decimal | null
    withdrawal_amount: Decimal | null
  }

  export type UsersMinAggregateOutputType = {
    id: string | null
    username: string | null
    uid: string | null
    email: string | null
    number: string | null
    phone: string | null
    mail_otp: string | null
    password: string | null
    plain_password: string | null
    status: boolean | null
    amount: Decimal | null
    remaining_balance: Decimal | null
    deposit_amount: Decimal | null
    withdrawal_amount: Decimal | null
    referral_code: string | null
    referred_by: string | null
    image: string | null
    role: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UsersMaxAggregateOutputType = {
    id: string | null
    username: string | null
    uid: string | null
    email: string | null
    number: string | null
    phone: string | null
    mail_otp: string | null
    password: string | null
    plain_password: string | null
    status: boolean | null
    amount: Decimal | null
    remaining_balance: Decimal | null
    deposit_amount: Decimal | null
    withdrawal_amount: Decimal | null
    referral_code: string | null
    referred_by: string | null
    image: string | null
    role: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    username: number
    uid: number
    email: number
    number: number
    phone: number
    mail_otp: number
    password: number
    plain_password: number
    status: number
    amount: number
    remaining_balance: number
    deposit_amount: number
    withdrawal_amount: number
    referral_code: number
    referred_by: number
    image: number
    role: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type UsersAvgAggregateInputType = {
    amount?: true
    remaining_balance?: true
    deposit_amount?: true
    withdrawal_amount?: true
  }

  export type UsersSumAggregateInputType = {
    amount?: true
    remaining_balance?: true
    deposit_amount?: true
    withdrawal_amount?: true
  }

  export type UsersMinAggregateInputType = {
    id?: true
    username?: true
    uid?: true
    email?: true
    number?: true
    phone?: true
    mail_otp?: true
    password?: true
    plain_password?: true
    status?: true
    amount?: true
    remaining_balance?: true
    deposit_amount?: true
    withdrawal_amount?: true
    referral_code?: true
    referred_by?: true
    image?: true
    role?: true
    created_at?: true
    updated_at?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    username?: true
    uid?: true
    email?: true
    number?: true
    phone?: true
    mail_otp?: true
    password?: true
    plain_password?: true
    status?: true
    amount?: true
    remaining_balance?: true
    deposit_amount?: true
    withdrawal_amount?: true
    referral_code?: true
    referred_by?: true
    image?: true
    role?: true
    created_at?: true
    updated_at?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    username?: true
    uid?: true
    email?: true
    number?: true
    phone?: true
    mail_otp?: true
    password?: true
    plain_password?: true
    status?: true
    amount?: true
    remaining_balance?: true
    deposit_amount?: true
    withdrawal_amount?: true
    referral_code?: true
    referred_by?: true
    image?: true
    role?: true
    created_at?: true
    updated_at?: true
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
    id: string
    username: string
    uid: string
    email: string
    number: string
    phone: string | null
    mail_otp: string | null
    password: string
    plain_password: string | null
    status: boolean | null
    amount: Decimal | null
    remaining_balance: Decimal | null
    deposit_amount: Decimal | null
    withdrawal_amount: Decimal | null
    referral_code: string | null
    referred_by: string | null
    image: string | null
    role: string | null
    created_at: Date | null
    updated_at: Date | null
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
    uid?: boolean
    email?: boolean
    number?: boolean
    phone?: boolean
    mail_otp?: boolean
    password?: boolean
    plain_password?: boolean
    status?: boolean
    amount?: boolean
    remaining_balance?: boolean
    deposit_amount?: boolean
    withdrawal_amount?: boolean
    referral_code?: boolean
    referred_by?: boolean
    image?: boolean
    role?: boolean
    created_at?: boolean
    updated_at?: boolean
    claim_coins?: boolean | users$claim_coinsArgs<ExtArgs>
    deposits?: boolean | users$depositsArgs<ExtArgs>
    earn_coins?: boolean | users$earn_coinsArgs<ExtArgs>
    mine_coins?: boolean | users$mine_coinsArgs<ExtArgs>
    referral_progress?: boolean | users$referral_progressArgs<ExtArgs>
    wallets?: boolean | users$walletsArgs<ExtArgs>
    withdrawals?: boolean | users$withdrawalsArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type usersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    uid?: boolean
    email?: boolean
    number?: boolean
    phone?: boolean
    mail_otp?: boolean
    password?: boolean
    plain_password?: boolean
    status?: boolean
    amount?: boolean
    remaining_balance?: boolean
    deposit_amount?: boolean
    withdrawal_amount?: boolean
    referral_code?: boolean
    referred_by?: boolean
    image?: boolean
    role?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["users"]>

  export type usersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    uid?: boolean
    email?: boolean
    number?: boolean
    phone?: boolean
    mail_otp?: boolean
    password?: boolean
    plain_password?: boolean
    status?: boolean
    amount?: boolean
    remaining_balance?: boolean
    deposit_amount?: boolean
    withdrawal_amount?: boolean
    referral_code?: boolean
    referred_by?: boolean
    image?: boolean
    role?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["users"]>

  export type usersSelectScalar = {
    id?: boolean
    username?: boolean
    uid?: boolean
    email?: boolean
    number?: boolean
    phone?: boolean
    mail_otp?: boolean
    password?: boolean
    plain_password?: boolean
    status?: boolean
    amount?: boolean
    remaining_balance?: boolean
    deposit_amount?: boolean
    withdrawal_amount?: boolean
    referral_code?: boolean
    referred_by?: boolean
    image?: boolean
    role?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type usersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "uid" | "email" | "number" | "phone" | "mail_otp" | "password" | "plain_password" | "status" | "amount" | "remaining_balance" | "deposit_amount" | "withdrawal_amount" | "referral_code" | "referred_by" | "image" | "role" | "created_at" | "updated_at", ExtArgs["result"]["users"]>
  export type usersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    claim_coins?: boolean | users$claim_coinsArgs<ExtArgs>
    deposits?: boolean | users$depositsArgs<ExtArgs>
    earn_coins?: boolean | users$earn_coinsArgs<ExtArgs>
    mine_coins?: boolean | users$mine_coinsArgs<ExtArgs>
    referral_progress?: boolean | users$referral_progressArgs<ExtArgs>
    wallets?: boolean | users$walletsArgs<ExtArgs>
    withdrawals?: boolean | users$withdrawalsArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type usersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type usersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $usersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "users"
    objects: {
      claim_coins: Prisma.$claim_coinsPayload<ExtArgs>[]
      deposits: Prisma.$depositsPayload<ExtArgs>[]
      earn_coins: Prisma.$earn_coinsPayload<ExtArgs>[]
      mine_coins: Prisma.$mine_coinsPayload<ExtArgs>[]
      referral_progress: Prisma.$referral_progressPayload<ExtArgs>[]
      wallets: Prisma.$walletsPayload<ExtArgs>[]
      withdrawals: Prisma.$withdrawalsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      username: string
      uid: string
      email: string
      number: string
      phone: string | null
      mail_otp: string | null
      password: string
      plain_password: string | null
      status: boolean | null
      amount: Prisma.Decimal | null
      remaining_balance: Prisma.Decimal | null
      deposit_amount: Prisma.Decimal | null
      withdrawal_amount: Prisma.Decimal | null
      referral_code: string | null
      referred_by: string | null
      image: string | null
      role: string | null
      created_at: Date | null
      updated_at: Date | null
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type usersGetPayload<S extends boolean | null | undefined | usersDefaultArgs> = $Result.GetResult<Prisma.$usersPayload, S>

  type usersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<usersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface usersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
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
     */
    findUnique<T extends usersFindUniqueArgs>(args: SelectSubset<T, usersFindUniqueArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

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
     */
    findUniqueOrThrow<T extends usersFindUniqueOrThrowArgs>(args: SelectSubset<T, usersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
     */
    findFirst<T extends usersFindFirstArgs>(args?: SelectSubset<T, usersFindFirstArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

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
     */
    findFirstOrThrow<T extends usersFindFirstOrThrowArgs>(args?: SelectSubset<T, usersFindFirstOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
     */
    findMany<T extends usersFindManyArgs>(args?: SelectSubset<T, usersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

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
     */
    create<T extends usersCreateArgs>(args: SelectSubset<T, usersCreateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
     */
    createMany<T extends usersCreateManyArgs>(args?: SelectSubset<T, usersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {usersCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends usersCreateManyAndReturnArgs>(args?: SelectSubset<T, usersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

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
     */
    delete<T extends usersDeleteArgs>(args: SelectSubset<T, usersDeleteArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
     */
    update<T extends usersUpdateArgs>(args: SelectSubset<T, usersUpdateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
     */
    deleteMany<T extends usersDeleteManyArgs>(args?: SelectSubset<T, usersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

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
     */
    updateMany<T extends usersUpdateManyArgs>(args: SelectSubset<T, usersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {usersUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends usersUpdateManyAndReturnArgs>(args: SelectSubset<T, usersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

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
     */
    upsert<T extends usersUpsertArgs>(args: SelectSubset<T, usersUpsertArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


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
  export interface Prisma__usersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    claim_coins<T extends users$claim_coinsArgs<ExtArgs> = {}>(args?: Subset<T, users$claim_coinsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$claim_coinsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    deposits<T extends users$depositsArgs<ExtArgs> = {}>(args?: Subset<T, users$depositsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$depositsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    earn_coins<T extends users$earn_coinsArgs<ExtArgs> = {}>(args?: Subset<T, users$earn_coinsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$earn_coinsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    mine_coins<T extends users$mine_coinsArgs<ExtArgs> = {}>(args?: Subset<T, users$mine_coinsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$mine_coinsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    referral_progress<T extends users$referral_progressArgs<ExtArgs> = {}>(args?: Subset<T, users$referral_progressArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$referral_progressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    wallets<T extends users$walletsArgs<ExtArgs> = {}>(args?: Subset<T, users$walletsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$walletsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    withdrawals<T extends users$withdrawalsArgs<ExtArgs> = {}>(args?: Subset<T, users$withdrawalsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$withdrawalsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the users model
   */
  interface usersFieldRefs {
    readonly id: FieldRef<"users", 'String'>
    readonly username: FieldRef<"users", 'String'>
    readonly uid: FieldRef<"users", 'String'>
    readonly email: FieldRef<"users", 'String'>
    readonly number: FieldRef<"users", 'String'>
    readonly phone: FieldRef<"users", 'String'>
    readonly mail_otp: FieldRef<"users", 'String'>
    readonly password: FieldRef<"users", 'String'>
    readonly plain_password: FieldRef<"users", 'String'>
    readonly status: FieldRef<"users", 'Boolean'>
    readonly amount: FieldRef<"users", 'Decimal'>
    readonly remaining_balance: FieldRef<"users", 'Decimal'>
    readonly deposit_amount: FieldRef<"users", 'Decimal'>
    readonly withdrawal_amount: FieldRef<"users", 'Decimal'>
    readonly referral_code: FieldRef<"users", 'String'>
    readonly referred_by: FieldRef<"users", 'String'>
    readonly image: FieldRef<"users", 'String'>
    readonly role: FieldRef<"users", 'String'>
    readonly created_at: FieldRef<"users", 'DateTime'>
    readonly updated_at: FieldRef<"users", 'DateTime'>
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
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
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
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
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
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
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
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
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
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
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
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
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
   * users createManyAndReturn
   */
  export type usersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
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
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
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
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users updateManyAndReturn
   */
  export type usersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
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
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
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
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
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
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * users.claim_coins
   */
  export type users$claim_coinsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the claim_coins
     */
    select?: claim_coinsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the claim_coins
     */
    omit?: claim_coinsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: claim_coinsInclude<ExtArgs> | null
    where?: claim_coinsWhereInput
    orderBy?: claim_coinsOrderByWithRelationInput | claim_coinsOrderByWithRelationInput[]
    cursor?: claim_coinsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Claim_coinsScalarFieldEnum | Claim_coinsScalarFieldEnum[]
  }

  /**
   * users.deposits
   */
  export type users$depositsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the deposits
     */
    select?: depositsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the deposits
     */
    omit?: depositsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: depositsInclude<ExtArgs> | null
    where?: depositsWhereInput
    orderBy?: depositsOrderByWithRelationInput | depositsOrderByWithRelationInput[]
    cursor?: depositsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DepositsScalarFieldEnum | DepositsScalarFieldEnum[]
  }

  /**
   * users.earn_coins
   */
  export type users$earn_coinsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the earn_coins
     */
    select?: earn_coinsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the earn_coins
     */
    omit?: earn_coinsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: earn_coinsInclude<ExtArgs> | null
    where?: earn_coinsWhereInput
    orderBy?: earn_coinsOrderByWithRelationInput | earn_coinsOrderByWithRelationInput[]
    cursor?: earn_coinsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Earn_coinsScalarFieldEnum | Earn_coinsScalarFieldEnum[]
  }

  /**
   * users.mine_coins
   */
  export type users$mine_coinsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mine_coins
     */
    select?: mine_coinsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mine_coins
     */
    omit?: mine_coinsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mine_coinsInclude<ExtArgs> | null
    where?: mine_coinsWhereInput
    orderBy?: mine_coinsOrderByWithRelationInput | mine_coinsOrderByWithRelationInput[]
    cursor?: mine_coinsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Mine_coinsScalarFieldEnum | Mine_coinsScalarFieldEnum[]
  }

  /**
   * users.referral_progress
   */
  export type users$referral_progressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the referral_progress
     */
    select?: referral_progressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the referral_progress
     */
    omit?: referral_progressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: referral_progressInclude<ExtArgs> | null
    where?: referral_progressWhereInput
    orderBy?: referral_progressOrderByWithRelationInput | referral_progressOrderByWithRelationInput[]
    cursor?: referral_progressWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Referral_progressScalarFieldEnum | Referral_progressScalarFieldEnum[]
  }

  /**
   * users.wallets
   */
  export type users$walletsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the wallets
     */
    select?: walletsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the wallets
     */
    omit?: walletsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: walletsInclude<ExtArgs> | null
    where?: walletsWhereInput
    orderBy?: walletsOrderByWithRelationInput | walletsOrderByWithRelationInput[]
    cursor?: walletsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WalletsScalarFieldEnum | WalletsScalarFieldEnum[]
  }

  /**
   * users.withdrawals
   */
  export type users$withdrawalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the withdrawals
     */
    select?: withdrawalsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the withdrawals
     */
    omit?: withdrawalsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: withdrawalsInclude<ExtArgs> | null
    where?: withdrawalsWhereInput
    orderBy?: withdrawalsOrderByWithRelationInput | withdrawalsOrderByWithRelationInput[]
    cursor?: withdrawalsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WithdrawalsScalarFieldEnum | WithdrawalsScalarFieldEnum[]
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
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
  }


  /**
   * Model wallets
   */

  export type AggregateWallets = {
    _count: WalletsCountAggregateOutputType | null
    _avg: WalletsAvgAggregateOutputType | null
    _sum: WalletsSumAggregateOutputType | null
    _min: WalletsMinAggregateOutputType | null
    _max: WalletsMaxAggregateOutputType | null
  }

  export type WalletsAvgAggregateOutputType = {
    amount: Decimal | null
  }

  export type WalletsSumAggregateOutputType = {
    amount: Decimal | null
  }

  export type WalletsMinAggregateOutputType = {
    id: string | null
    user_id: string | null
    private_key: string | null
    public_key: string | null
    type: string | null
    amount: Decimal | null
    status: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type WalletsMaxAggregateOutputType = {
    id: string | null
    user_id: string | null
    private_key: string | null
    public_key: string | null
    type: string | null
    amount: Decimal | null
    status: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type WalletsCountAggregateOutputType = {
    id: number
    user_id: number
    private_key: number
    public_key: number
    type: number
    amount: number
    status: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type WalletsAvgAggregateInputType = {
    amount?: true
  }

  export type WalletsSumAggregateInputType = {
    amount?: true
  }

  export type WalletsMinAggregateInputType = {
    id?: true
    user_id?: true
    private_key?: true
    public_key?: true
    type?: true
    amount?: true
    status?: true
    created_at?: true
    updated_at?: true
  }

  export type WalletsMaxAggregateInputType = {
    id?: true
    user_id?: true
    private_key?: true
    public_key?: true
    type?: true
    amount?: true
    status?: true
    created_at?: true
    updated_at?: true
  }

  export type WalletsCountAggregateInputType = {
    id?: true
    user_id?: true
    private_key?: true
    public_key?: true
    type?: true
    amount?: true
    status?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type WalletsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which wallets to aggregate.
     */
    where?: walletsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of wallets to fetch.
     */
    orderBy?: walletsOrderByWithRelationInput | walletsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: walletsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` wallets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` wallets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned wallets
    **/
    _count?: true | WalletsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WalletsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WalletsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WalletsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WalletsMaxAggregateInputType
  }

  export type GetWalletsAggregateType<T extends WalletsAggregateArgs> = {
        [P in keyof T & keyof AggregateWallets]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWallets[P]>
      : GetScalarType<T[P], AggregateWallets[P]>
  }




  export type walletsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: walletsWhereInput
    orderBy?: walletsOrderByWithAggregationInput | walletsOrderByWithAggregationInput[]
    by: WalletsScalarFieldEnum[] | WalletsScalarFieldEnum
    having?: walletsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WalletsCountAggregateInputType | true
    _avg?: WalletsAvgAggregateInputType
    _sum?: WalletsSumAggregateInputType
    _min?: WalletsMinAggregateInputType
    _max?: WalletsMaxAggregateInputType
  }

  export type WalletsGroupByOutputType = {
    id: string
    user_id: string
    private_key: string
    public_key: string
    type: string
    amount: Decimal | null
    status: boolean | null
    created_at: Date | null
    updated_at: Date | null
    _count: WalletsCountAggregateOutputType | null
    _avg: WalletsAvgAggregateOutputType | null
    _sum: WalletsSumAggregateOutputType | null
    _min: WalletsMinAggregateOutputType | null
    _max: WalletsMaxAggregateOutputType | null
  }

  type GetWalletsGroupByPayload<T extends walletsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WalletsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WalletsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WalletsGroupByOutputType[P]>
            : GetScalarType<T[P], WalletsGroupByOutputType[P]>
        }
      >
    >


  export type walletsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    private_key?: boolean
    public_key?: boolean
    type?: boolean
    amount?: boolean
    status?: boolean
    created_at?: boolean
    updated_at?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["wallets"]>

  export type walletsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    private_key?: boolean
    public_key?: boolean
    type?: boolean
    amount?: boolean
    status?: boolean
    created_at?: boolean
    updated_at?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["wallets"]>

  export type walletsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    private_key?: boolean
    public_key?: boolean
    type?: boolean
    amount?: boolean
    status?: boolean
    created_at?: boolean
    updated_at?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["wallets"]>

  export type walletsSelectScalar = {
    id?: boolean
    user_id?: boolean
    private_key?: boolean
    public_key?: boolean
    type?: boolean
    amount?: boolean
    status?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type walletsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "private_key" | "public_key" | "type" | "amount" | "status" | "created_at" | "updated_at", ExtArgs["result"]["wallets"]>
  export type walletsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type walletsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type walletsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
  }

  export type $walletsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "wallets"
    objects: {
      users: Prisma.$usersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      user_id: string
      private_key: string
      public_key: string
      type: string
      amount: Prisma.Decimal | null
      status: boolean | null
      created_at: Date | null
      updated_at: Date | null
    }, ExtArgs["result"]["wallets"]>
    composites: {}
  }

  type walletsGetPayload<S extends boolean | null | undefined | walletsDefaultArgs> = $Result.GetResult<Prisma.$walletsPayload, S>

  type walletsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<walletsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WalletsCountAggregateInputType | true
    }

  export interface walletsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['wallets'], meta: { name: 'wallets' } }
    /**
     * Find zero or one Wallets that matches the filter.
     * @param {walletsFindUniqueArgs} args - Arguments to find a Wallets
     * @example
     * // Get one Wallets
     * const wallets = await prisma.wallets.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends walletsFindUniqueArgs>(args: SelectSubset<T, walletsFindUniqueArgs<ExtArgs>>): Prisma__walletsClient<$Result.GetResult<Prisma.$walletsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Wallets that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {walletsFindUniqueOrThrowArgs} args - Arguments to find a Wallets
     * @example
     * // Get one Wallets
     * const wallets = await prisma.wallets.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends walletsFindUniqueOrThrowArgs>(args: SelectSubset<T, walletsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__walletsClient<$Result.GetResult<Prisma.$walletsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Wallets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {walletsFindFirstArgs} args - Arguments to find a Wallets
     * @example
     * // Get one Wallets
     * const wallets = await prisma.wallets.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends walletsFindFirstArgs>(args?: SelectSubset<T, walletsFindFirstArgs<ExtArgs>>): Prisma__walletsClient<$Result.GetResult<Prisma.$walletsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Wallets that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {walletsFindFirstOrThrowArgs} args - Arguments to find a Wallets
     * @example
     * // Get one Wallets
     * const wallets = await prisma.wallets.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends walletsFindFirstOrThrowArgs>(args?: SelectSubset<T, walletsFindFirstOrThrowArgs<ExtArgs>>): Prisma__walletsClient<$Result.GetResult<Prisma.$walletsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Wallets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {walletsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Wallets
     * const wallets = await prisma.wallets.findMany()
     * 
     * // Get first 10 Wallets
     * const wallets = await prisma.wallets.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const walletsWithIdOnly = await prisma.wallets.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends walletsFindManyArgs>(args?: SelectSubset<T, walletsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$walletsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Wallets.
     * @param {walletsCreateArgs} args - Arguments to create a Wallets.
     * @example
     * // Create one Wallets
     * const Wallets = await prisma.wallets.create({
     *   data: {
     *     // ... data to create a Wallets
     *   }
     * })
     * 
     */
    create<T extends walletsCreateArgs>(args: SelectSubset<T, walletsCreateArgs<ExtArgs>>): Prisma__walletsClient<$Result.GetResult<Prisma.$walletsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Wallets.
     * @param {walletsCreateManyArgs} args - Arguments to create many Wallets.
     * @example
     * // Create many Wallets
     * const wallets = await prisma.wallets.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends walletsCreateManyArgs>(args?: SelectSubset<T, walletsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Wallets and returns the data saved in the database.
     * @param {walletsCreateManyAndReturnArgs} args - Arguments to create many Wallets.
     * @example
     * // Create many Wallets
     * const wallets = await prisma.wallets.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Wallets and only return the `id`
     * const walletsWithIdOnly = await prisma.wallets.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends walletsCreateManyAndReturnArgs>(args?: SelectSubset<T, walletsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$walletsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Wallets.
     * @param {walletsDeleteArgs} args - Arguments to delete one Wallets.
     * @example
     * // Delete one Wallets
     * const Wallets = await prisma.wallets.delete({
     *   where: {
     *     // ... filter to delete one Wallets
     *   }
     * })
     * 
     */
    delete<T extends walletsDeleteArgs>(args: SelectSubset<T, walletsDeleteArgs<ExtArgs>>): Prisma__walletsClient<$Result.GetResult<Prisma.$walletsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Wallets.
     * @param {walletsUpdateArgs} args - Arguments to update one Wallets.
     * @example
     * // Update one Wallets
     * const wallets = await prisma.wallets.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends walletsUpdateArgs>(args: SelectSubset<T, walletsUpdateArgs<ExtArgs>>): Prisma__walletsClient<$Result.GetResult<Prisma.$walletsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Wallets.
     * @param {walletsDeleteManyArgs} args - Arguments to filter Wallets to delete.
     * @example
     * // Delete a few Wallets
     * const { count } = await prisma.wallets.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends walletsDeleteManyArgs>(args?: SelectSubset<T, walletsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Wallets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {walletsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Wallets
     * const wallets = await prisma.wallets.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends walletsUpdateManyArgs>(args: SelectSubset<T, walletsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Wallets and returns the data updated in the database.
     * @param {walletsUpdateManyAndReturnArgs} args - Arguments to update many Wallets.
     * @example
     * // Update many Wallets
     * const wallets = await prisma.wallets.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Wallets and only return the `id`
     * const walletsWithIdOnly = await prisma.wallets.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends walletsUpdateManyAndReturnArgs>(args: SelectSubset<T, walletsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$walletsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Wallets.
     * @param {walletsUpsertArgs} args - Arguments to update or create a Wallets.
     * @example
     * // Update or create a Wallets
     * const wallets = await prisma.wallets.upsert({
     *   create: {
     *     // ... data to create a Wallets
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Wallets we want to update
     *   }
     * })
     */
    upsert<T extends walletsUpsertArgs>(args: SelectSubset<T, walletsUpsertArgs<ExtArgs>>): Prisma__walletsClient<$Result.GetResult<Prisma.$walletsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Wallets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {walletsCountArgs} args - Arguments to filter Wallets to count.
     * @example
     * // Count the number of Wallets
     * const count = await prisma.wallets.count({
     *   where: {
     *     // ... the filter for the Wallets we want to count
     *   }
     * })
    **/
    count<T extends walletsCountArgs>(
      args?: Subset<T, walletsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WalletsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Wallets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WalletsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WalletsAggregateArgs>(args: Subset<T, WalletsAggregateArgs>): Prisma.PrismaPromise<GetWalletsAggregateType<T>>

    /**
     * Group by Wallets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {walletsGroupByArgs} args - Group by arguments.
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
      T extends walletsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: walletsGroupByArgs['orderBy'] }
        : { orderBy?: walletsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, walletsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWalletsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the wallets model
   */
  readonly fields: walletsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for wallets.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__walletsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the wallets model
   */
  interface walletsFieldRefs {
    readonly id: FieldRef<"wallets", 'String'>
    readonly user_id: FieldRef<"wallets", 'String'>
    readonly private_key: FieldRef<"wallets", 'String'>
    readonly public_key: FieldRef<"wallets", 'String'>
    readonly type: FieldRef<"wallets", 'String'>
    readonly amount: FieldRef<"wallets", 'Decimal'>
    readonly status: FieldRef<"wallets", 'Boolean'>
    readonly created_at: FieldRef<"wallets", 'DateTime'>
    readonly updated_at: FieldRef<"wallets", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * wallets findUnique
   */
  export type walletsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the wallets
     */
    select?: walletsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the wallets
     */
    omit?: walletsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: walletsInclude<ExtArgs> | null
    /**
     * Filter, which wallets to fetch.
     */
    where: walletsWhereUniqueInput
  }

  /**
   * wallets findUniqueOrThrow
   */
  export type walletsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the wallets
     */
    select?: walletsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the wallets
     */
    omit?: walletsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: walletsInclude<ExtArgs> | null
    /**
     * Filter, which wallets to fetch.
     */
    where: walletsWhereUniqueInput
  }

  /**
   * wallets findFirst
   */
  export type walletsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the wallets
     */
    select?: walletsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the wallets
     */
    omit?: walletsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: walletsInclude<ExtArgs> | null
    /**
     * Filter, which wallets to fetch.
     */
    where?: walletsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of wallets to fetch.
     */
    orderBy?: walletsOrderByWithRelationInput | walletsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for wallets.
     */
    cursor?: walletsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` wallets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` wallets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of wallets.
     */
    distinct?: WalletsScalarFieldEnum | WalletsScalarFieldEnum[]
  }

  /**
   * wallets findFirstOrThrow
   */
  export type walletsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the wallets
     */
    select?: walletsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the wallets
     */
    omit?: walletsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: walletsInclude<ExtArgs> | null
    /**
     * Filter, which wallets to fetch.
     */
    where?: walletsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of wallets to fetch.
     */
    orderBy?: walletsOrderByWithRelationInput | walletsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for wallets.
     */
    cursor?: walletsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` wallets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` wallets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of wallets.
     */
    distinct?: WalletsScalarFieldEnum | WalletsScalarFieldEnum[]
  }

  /**
   * wallets findMany
   */
  export type walletsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the wallets
     */
    select?: walletsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the wallets
     */
    omit?: walletsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: walletsInclude<ExtArgs> | null
    /**
     * Filter, which wallets to fetch.
     */
    where?: walletsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of wallets to fetch.
     */
    orderBy?: walletsOrderByWithRelationInput | walletsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing wallets.
     */
    cursor?: walletsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` wallets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` wallets.
     */
    skip?: number
    distinct?: WalletsScalarFieldEnum | WalletsScalarFieldEnum[]
  }

  /**
   * wallets create
   */
  export type walletsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the wallets
     */
    select?: walletsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the wallets
     */
    omit?: walletsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: walletsInclude<ExtArgs> | null
    /**
     * The data needed to create a wallets.
     */
    data: XOR<walletsCreateInput, walletsUncheckedCreateInput>
  }

  /**
   * wallets createMany
   */
  export type walletsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many wallets.
     */
    data: walletsCreateManyInput | walletsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * wallets createManyAndReturn
   */
  export type walletsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the wallets
     */
    select?: walletsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the wallets
     */
    omit?: walletsOmit<ExtArgs> | null
    /**
     * The data used to create many wallets.
     */
    data: walletsCreateManyInput | walletsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: walletsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * wallets update
   */
  export type walletsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the wallets
     */
    select?: walletsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the wallets
     */
    omit?: walletsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: walletsInclude<ExtArgs> | null
    /**
     * The data needed to update a wallets.
     */
    data: XOR<walletsUpdateInput, walletsUncheckedUpdateInput>
    /**
     * Choose, which wallets to update.
     */
    where: walletsWhereUniqueInput
  }

  /**
   * wallets updateMany
   */
  export type walletsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update wallets.
     */
    data: XOR<walletsUpdateManyMutationInput, walletsUncheckedUpdateManyInput>
    /**
     * Filter which wallets to update
     */
    where?: walletsWhereInput
    /**
     * Limit how many wallets to update.
     */
    limit?: number
  }

  /**
   * wallets updateManyAndReturn
   */
  export type walletsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the wallets
     */
    select?: walletsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the wallets
     */
    omit?: walletsOmit<ExtArgs> | null
    /**
     * The data used to update wallets.
     */
    data: XOR<walletsUpdateManyMutationInput, walletsUncheckedUpdateManyInput>
    /**
     * Filter which wallets to update
     */
    where?: walletsWhereInput
    /**
     * Limit how many wallets to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: walletsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * wallets upsert
   */
  export type walletsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the wallets
     */
    select?: walletsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the wallets
     */
    omit?: walletsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: walletsInclude<ExtArgs> | null
    /**
     * The filter to search for the wallets to update in case it exists.
     */
    where: walletsWhereUniqueInput
    /**
     * In case the wallets found by the `where` argument doesn't exist, create a new wallets with this data.
     */
    create: XOR<walletsCreateInput, walletsUncheckedCreateInput>
    /**
     * In case the wallets was found with the provided `where` argument, update it with this data.
     */
    update: XOR<walletsUpdateInput, walletsUncheckedUpdateInput>
  }

  /**
   * wallets delete
   */
  export type walletsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the wallets
     */
    select?: walletsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the wallets
     */
    omit?: walletsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: walletsInclude<ExtArgs> | null
    /**
     * Filter which wallets to delete.
     */
    where: walletsWhereUniqueInput
  }

  /**
   * wallets deleteMany
   */
  export type walletsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which wallets to delete
     */
    where?: walletsWhereInput
    /**
     * Limit how many wallets to delete.
     */
    limit?: number
  }

  /**
   * wallets without action
   */
  export type walletsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the wallets
     */
    select?: walletsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the wallets
     */
    omit?: walletsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: walletsInclude<ExtArgs> | null
  }


  /**
   * Model withdrawals
   */

  export type AggregateWithdrawals = {
    _count: WithdrawalsCountAggregateOutputType | null
    _avg: WithdrawalsAvgAggregateOutputType | null
    _sum: WithdrawalsSumAggregateOutputType | null
    _min: WithdrawalsMinAggregateOutputType | null
    _max: WithdrawalsMaxAggregateOutputType | null
  }

  export type WithdrawalsAvgAggregateOutputType = {
    amount: Decimal | null
  }

  export type WithdrawalsSumAggregateOutputType = {
    amount: Decimal | null
  }

  export type WithdrawalsMinAggregateOutputType = {
    id: string | null
    user_id: string | null
    date: Date | null
    type: string | null
    amount: Decimal | null
    address: string | null
    status: boolean | null
    status_withdraw: string | null
    reason: string | null
  }

  export type WithdrawalsMaxAggregateOutputType = {
    id: string | null
    user_id: string | null
    date: Date | null
    type: string | null
    amount: Decimal | null
    address: string | null
    status: boolean | null
    status_withdraw: string | null
    reason: string | null
  }

  export type WithdrawalsCountAggregateOutputType = {
    id: number
    user_id: number
    date: number
    type: number
    amount: number
    address: number
    status: number
    status_withdraw: number
    reason: number
    _all: number
  }


  export type WithdrawalsAvgAggregateInputType = {
    amount?: true
  }

  export type WithdrawalsSumAggregateInputType = {
    amount?: true
  }

  export type WithdrawalsMinAggregateInputType = {
    id?: true
    user_id?: true
    date?: true
    type?: true
    amount?: true
    address?: true
    status?: true
    status_withdraw?: true
    reason?: true
  }

  export type WithdrawalsMaxAggregateInputType = {
    id?: true
    user_id?: true
    date?: true
    type?: true
    amount?: true
    address?: true
    status?: true
    status_withdraw?: true
    reason?: true
  }

  export type WithdrawalsCountAggregateInputType = {
    id?: true
    user_id?: true
    date?: true
    type?: true
    amount?: true
    address?: true
    status?: true
    status_withdraw?: true
    reason?: true
    _all?: true
  }

  export type WithdrawalsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which withdrawals to aggregate.
     */
    where?: withdrawalsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of withdrawals to fetch.
     */
    orderBy?: withdrawalsOrderByWithRelationInput | withdrawalsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: withdrawalsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` withdrawals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` withdrawals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned withdrawals
    **/
    _count?: true | WithdrawalsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WithdrawalsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WithdrawalsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WithdrawalsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WithdrawalsMaxAggregateInputType
  }

  export type GetWithdrawalsAggregateType<T extends WithdrawalsAggregateArgs> = {
        [P in keyof T & keyof AggregateWithdrawals]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWithdrawals[P]>
      : GetScalarType<T[P], AggregateWithdrawals[P]>
  }




  export type withdrawalsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: withdrawalsWhereInput
    orderBy?: withdrawalsOrderByWithAggregationInput | withdrawalsOrderByWithAggregationInput[]
    by: WithdrawalsScalarFieldEnum[] | WithdrawalsScalarFieldEnum
    having?: withdrawalsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WithdrawalsCountAggregateInputType | true
    _avg?: WithdrawalsAvgAggregateInputType
    _sum?: WithdrawalsSumAggregateInputType
    _min?: WithdrawalsMinAggregateInputType
    _max?: WithdrawalsMaxAggregateInputType
  }

  export type WithdrawalsGroupByOutputType = {
    id: string
    user_id: string
    date: Date | null
    type: string
    amount: Decimal
    address: string
    status: boolean | null
    status_withdraw: string
    reason: string | null
    _count: WithdrawalsCountAggregateOutputType | null
    _avg: WithdrawalsAvgAggregateOutputType | null
    _sum: WithdrawalsSumAggregateOutputType | null
    _min: WithdrawalsMinAggregateOutputType | null
    _max: WithdrawalsMaxAggregateOutputType | null
  }

  type GetWithdrawalsGroupByPayload<T extends withdrawalsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WithdrawalsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WithdrawalsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WithdrawalsGroupByOutputType[P]>
            : GetScalarType<T[P], WithdrawalsGroupByOutputType[P]>
        }
      >
    >


  export type withdrawalsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    date?: boolean
    type?: boolean
    amount?: boolean
    address?: boolean
    status?: boolean
    status_withdraw?: boolean
    reason?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["withdrawals"]>

  export type withdrawalsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    date?: boolean
    type?: boolean
    amount?: boolean
    address?: boolean
    status?: boolean
    status_withdraw?: boolean
    reason?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["withdrawals"]>

  export type withdrawalsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    date?: boolean
    type?: boolean
    amount?: boolean
    address?: boolean
    status?: boolean
    status_withdraw?: boolean
    reason?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["withdrawals"]>

  export type withdrawalsSelectScalar = {
    id?: boolean
    user_id?: boolean
    date?: boolean
    type?: boolean
    amount?: boolean
    address?: boolean
    status?: boolean
    status_withdraw?: boolean
    reason?: boolean
  }

  export type withdrawalsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "date" | "type" | "amount" | "address" | "status" | "status_withdraw" | "reason", ExtArgs["result"]["withdrawals"]>
  export type withdrawalsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type withdrawalsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type withdrawalsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
  }

  export type $withdrawalsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "withdrawals"
    objects: {
      users: Prisma.$usersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      user_id: string
      date: Date | null
      type: string
      amount: Prisma.Decimal
      address: string
      status: boolean | null
      status_withdraw: string
      reason: string | null
    }, ExtArgs["result"]["withdrawals"]>
    composites: {}
  }

  type withdrawalsGetPayload<S extends boolean | null | undefined | withdrawalsDefaultArgs> = $Result.GetResult<Prisma.$withdrawalsPayload, S>

  type withdrawalsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<withdrawalsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WithdrawalsCountAggregateInputType | true
    }

  export interface withdrawalsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['withdrawals'], meta: { name: 'withdrawals' } }
    /**
     * Find zero or one Withdrawals that matches the filter.
     * @param {withdrawalsFindUniqueArgs} args - Arguments to find a Withdrawals
     * @example
     * // Get one Withdrawals
     * const withdrawals = await prisma.withdrawals.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends withdrawalsFindUniqueArgs>(args: SelectSubset<T, withdrawalsFindUniqueArgs<ExtArgs>>): Prisma__withdrawalsClient<$Result.GetResult<Prisma.$withdrawalsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Withdrawals that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {withdrawalsFindUniqueOrThrowArgs} args - Arguments to find a Withdrawals
     * @example
     * // Get one Withdrawals
     * const withdrawals = await prisma.withdrawals.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends withdrawalsFindUniqueOrThrowArgs>(args: SelectSubset<T, withdrawalsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__withdrawalsClient<$Result.GetResult<Prisma.$withdrawalsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Withdrawals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {withdrawalsFindFirstArgs} args - Arguments to find a Withdrawals
     * @example
     * // Get one Withdrawals
     * const withdrawals = await prisma.withdrawals.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends withdrawalsFindFirstArgs>(args?: SelectSubset<T, withdrawalsFindFirstArgs<ExtArgs>>): Prisma__withdrawalsClient<$Result.GetResult<Prisma.$withdrawalsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Withdrawals that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {withdrawalsFindFirstOrThrowArgs} args - Arguments to find a Withdrawals
     * @example
     * // Get one Withdrawals
     * const withdrawals = await prisma.withdrawals.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends withdrawalsFindFirstOrThrowArgs>(args?: SelectSubset<T, withdrawalsFindFirstOrThrowArgs<ExtArgs>>): Prisma__withdrawalsClient<$Result.GetResult<Prisma.$withdrawalsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Withdrawals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {withdrawalsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Withdrawals
     * const withdrawals = await prisma.withdrawals.findMany()
     * 
     * // Get first 10 Withdrawals
     * const withdrawals = await prisma.withdrawals.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const withdrawalsWithIdOnly = await prisma.withdrawals.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends withdrawalsFindManyArgs>(args?: SelectSubset<T, withdrawalsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$withdrawalsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Withdrawals.
     * @param {withdrawalsCreateArgs} args - Arguments to create a Withdrawals.
     * @example
     * // Create one Withdrawals
     * const Withdrawals = await prisma.withdrawals.create({
     *   data: {
     *     // ... data to create a Withdrawals
     *   }
     * })
     * 
     */
    create<T extends withdrawalsCreateArgs>(args: SelectSubset<T, withdrawalsCreateArgs<ExtArgs>>): Prisma__withdrawalsClient<$Result.GetResult<Prisma.$withdrawalsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Withdrawals.
     * @param {withdrawalsCreateManyArgs} args - Arguments to create many Withdrawals.
     * @example
     * // Create many Withdrawals
     * const withdrawals = await prisma.withdrawals.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends withdrawalsCreateManyArgs>(args?: SelectSubset<T, withdrawalsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Withdrawals and returns the data saved in the database.
     * @param {withdrawalsCreateManyAndReturnArgs} args - Arguments to create many Withdrawals.
     * @example
     * // Create many Withdrawals
     * const withdrawals = await prisma.withdrawals.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Withdrawals and only return the `id`
     * const withdrawalsWithIdOnly = await prisma.withdrawals.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends withdrawalsCreateManyAndReturnArgs>(args?: SelectSubset<T, withdrawalsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$withdrawalsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Withdrawals.
     * @param {withdrawalsDeleteArgs} args - Arguments to delete one Withdrawals.
     * @example
     * // Delete one Withdrawals
     * const Withdrawals = await prisma.withdrawals.delete({
     *   where: {
     *     // ... filter to delete one Withdrawals
     *   }
     * })
     * 
     */
    delete<T extends withdrawalsDeleteArgs>(args: SelectSubset<T, withdrawalsDeleteArgs<ExtArgs>>): Prisma__withdrawalsClient<$Result.GetResult<Prisma.$withdrawalsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Withdrawals.
     * @param {withdrawalsUpdateArgs} args - Arguments to update one Withdrawals.
     * @example
     * // Update one Withdrawals
     * const withdrawals = await prisma.withdrawals.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends withdrawalsUpdateArgs>(args: SelectSubset<T, withdrawalsUpdateArgs<ExtArgs>>): Prisma__withdrawalsClient<$Result.GetResult<Prisma.$withdrawalsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Withdrawals.
     * @param {withdrawalsDeleteManyArgs} args - Arguments to filter Withdrawals to delete.
     * @example
     * // Delete a few Withdrawals
     * const { count } = await prisma.withdrawals.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends withdrawalsDeleteManyArgs>(args?: SelectSubset<T, withdrawalsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Withdrawals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {withdrawalsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Withdrawals
     * const withdrawals = await prisma.withdrawals.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends withdrawalsUpdateManyArgs>(args: SelectSubset<T, withdrawalsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Withdrawals and returns the data updated in the database.
     * @param {withdrawalsUpdateManyAndReturnArgs} args - Arguments to update many Withdrawals.
     * @example
     * // Update many Withdrawals
     * const withdrawals = await prisma.withdrawals.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Withdrawals and only return the `id`
     * const withdrawalsWithIdOnly = await prisma.withdrawals.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends withdrawalsUpdateManyAndReturnArgs>(args: SelectSubset<T, withdrawalsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$withdrawalsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Withdrawals.
     * @param {withdrawalsUpsertArgs} args - Arguments to update or create a Withdrawals.
     * @example
     * // Update or create a Withdrawals
     * const withdrawals = await prisma.withdrawals.upsert({
     *   create: {
     *     // ... data to create a Withdrawals
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Withdrawals we want to update
     *   }
     * })
     */
    upsert<T extends withdrawalsUpsertArgs>(args: SelectSubset<T, withdrawalsUpsertArgs<ExtArgs>>): Prisma__withdrawalsClient<$Result.GetResult<Prisma.$withdrawalsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Withdrawals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {withdrawalsCountArgs} args - Arguments to filter Withdrawals to count.
     * @example
     * // Count the number of Withdrawals
     * const count = await prisma.withdrawals.count({
     *   where: {
     *     // ... the filter for the Withdrawals we want to count
     *   }
     * })
    **/
    count<T extends withdrawalsCountArgs>(
      args?: Subset<T, withdrawalsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WithdrawalsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Withdrawals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WithdrawalsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WithdrawalsAggregateArgs>(args: Subset<T, WithdrawalsAggregateArgs>): Prisma.PrismaPromise<GetWithdrawalsAggregateType<T>>

    /**
     * Group by Withdrawals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {withdrawalsGroupByArgs} args - Group by arguments.
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
      T extends withdrawalsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: withdrawalsGroupByArgs['orderBy'] }
        : { orderBy?: withdrawalsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, withdrawalsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWithdrawalsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the withdrawals model
   */
  readonly fields: withdrawalsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for withdrawals.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__withdrawalsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the withdrawals model
   */
  interface withdrawalsFieldRefs {
    readonly id: FieldRef<"withdrawals", 'String'>
    readonly user_id: FieldRef<"withdrawals", 'String'>
    readonly date: FieldRef<"withdrawals", 'DateTime'>
    readonly type: FieldRef<"withdrawals", 'String'>
    readonly amount: FieldRef<"withdrawals", 'Decimal'>
    readonly address: FieldRef<"withdrawals", 'String'>
    readonly status: FieldRef<"withdrawals", 'Boolean'>
    readonly status_withdraw: FieldRef<"withdrawals", 'String'>
    readonly reason: FieldRef<"withdrawals", 'String'>
  }
    

  // Custom InputTypes
  /**
   * withdrawals findUnique
   */
  export type withdrawalsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the withdrawals
     */
    select?: withdrawalsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the withdrawals
     */
    omit?: withdrawalsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: withdrawalsInclude<ExtArgs> | null
    /**
     * Filter, which withdrawals to fetch.
     */
    where: withdrawalsWhereUniqueInput
  }

  /**
   * withdrawals findUniqueOrThrow
   */
  export type withdrawalsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the withdrawals
     */
    select?: withdrawalsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the withdrawals
     */
    omit?: withdrawalsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: withdrawalsInclude<ExtArgs> | null
    /**
     * Filter, which withdrawals to fetch.
     */
    where: withdrawalsWhereUniqueInput
  }

  /**
   * withdrawals findFirst
   */
  export type withdrawalsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the withdrawals
     */
    select?: withdrawalsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the withdrawals
     */
    omit?: withdrawalsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: withdrawalsInclude<ExtArgs> | null
    /**
     * Filter, which withdrawals to fetch.
     */
    where?: withdrawalsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of withdrawals to fetch.
     */
    orderBy?: withdrawalsOrderByWithRelationInput | withdrawalsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for withdrawals.
     */
    cursor?: withdrawalsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` withdrawals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` withdrawals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of withdrawals.
     */
    distinct?: WithdrawalsScalarFieldEnum | WithdrawalsScalarFieldEnum[]
  }

  /**
   * withdrawals findFirstOrThrow
   */
  export type withdrawalsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the withdrawals
     */
    select?: withdrawalsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the withdrawals
     */
    omit?: withdrawalsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: withdrawalsInclude<ExtArgs> | null
    /**
     * Filter, which withdrawals to fetch.
     */
    where?: withdrawalsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of withdrawals to fetch.
     */
    orderBy?: withdrawalsOrderByWithRelationInput | withdrawalsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for withdrawals.
     */
    cursor?: withdrawalsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` withdrawals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` withdrawals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of withdrawals.
     */
    distinct?: WithdrawalsScalarFieldEnum | WithdrawalsScalarFieldEnum[]
  }

  /**
   * withdrawals findMany
   */
  export type withdrawalsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the withdrawals
     */
    select?: withdrawalsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the withdrawals
     */
    omit?: withdrawalsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: withdrawalsInclude<ExtArgs> | null
    /**
     * Filter, which withdrawals to fetch.
     */
    where?: withdrawalsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of withdrawals to fetch.
     */
    orderBy?: withdrawalsOrderByWithRelationInput | withdrawalsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing withdrawals.
     */
    cursor?: withdrawalsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` withdrawals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` withdrawals.
     */
    skip?: number
    distinct?: WithdrawalsScalarFieldEnum | WithdrawalsScalarFieldEnum[]
  }

  /**
   * withdrawals create
   */
  export type withdrawalsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the withdrawals
     */
    select?: withdrawalsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the withdrawals
     */
    omit?: withdrawalsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: withdrawalsInclude<ExtArgs> | null
    /**
     * The data needed to create a withdrawals.
     */
    data: XOR<withdrawalsCreateInput, withdrawalsUncheckedCreateInput>
  }

  /**
   * withdrawals createMany
   */
  export type withdrawalsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many withdrawals.
     */
    data: withdrawalsCreateManyInput | withdrawalsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * withdrawals createManyAndReturn
   */
  export type withdrawalsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the withdrawals
     */
    select?: withdrawalsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the withdrawals
     */
    omit?: withdrawalsOmit<ExtArgs> | null
    /**
     * The data used to create many withdrawals.
     */
    data: withdrawalsCreateManyInput | withdrawalsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: withdrawalsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * withdrawals update
   */
  export type withdrawalsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the withdrawals
     */
    select?: withdrawalsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the withdrawals
     */
    omit?: withdrawalsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: withdrawalsInclude<ExtArgs> | null
    /**
     * The data needed to update a withdrawals.
     */
    data: XOR<withdrawalsUpdateInput, withdrawalsUncheckedUpdateInput>
    /**
     * Choose, which withdrawals to update.
     */
    where: withdrawalsWhereUniqueInput
  }

  /**
   * withdrawals updateMany
   */
  export type withdrawalsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update withdrawals.
     */
    data: XOR<withdrawalsUpdateManyMutationInput, withdrawalsUncheckedUpdateManyInput>
    /**
     * Filter which withdrawals to update
     */
    where?: withdrawalsWhereInput
    /**
     * Limit how many withdrawals to update.
     */
    limit?: number
  }

  /**
   * withdrawals updateManyAndReturn
   */
  export type withdrawalsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the withdrawals
     */
    select?: withdrawalsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the withdrawals
     */
    omit?: withdrawalsOmit<ExtArgs> | null
    /**
     * The data used to update withdrawals.
     */
    data: XOR<withdrawalsUpdateManyMutationInput, withdrawalsUncheckedUpdateManyInput>
    /**
     * Filter which withdrawals to update
     */
    where?: withdrawalsWhereInput
    /**
     * Limit how many withdrawals to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: withdrawalsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * withdrawals upsert
   */
  export type withdrawalsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the withdrawals
     */
    select?: withdrawalsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the withdrawals
     */
    omit?: withdrawalsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: withdrawalsInclude<ExtArgs> | null
    /**
     * The filter to search for the withdrawals to update in case it exists.
     */
    where: withdrawalsWhereUniqueInput
    /**
     * In case the withdrawals found by the `where` argument doesn't exist, create a new withdrawals with this data.
     */
    create: XOR<withdrawalsCreateInput, withdrawalsUncheckedCreateInput>
    /**
     * In case the withdrawals was found with the provided `where` argument, update it with this data.
     */
    update: XOR<withdrawalsUpdateInput, withdrawalsUncheckedUpdateInput>
  }

  /**
   * withdrawals delete
   */
  export type withdrawalsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the withdrawals
     */
    select?: withdrawalsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the withdrawals
     */
    omit?: withdrawalsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: withdrawalsInclude<ExtArgs> | null
    /**
     * Filter which withdrawals to delete.
     */
    where: withdrawalsWhereUniqueInput
  }

  /**
   * withdrawals deleteMany
   */
  export type withdrawalsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which withdrawals to delete
     */
    where?: withdrawalsWhereInput
    /**
     * Limit how many withdrawals to delete.
     */
    limit?: number
  }

  /**
   * withdrawals without action
   */
  export type withdrawalsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the withdrawals
     */
    select?: withdrawalsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the withdrawals
     */
    omit?: withdrawalsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: withdrawalsInclude<ExtArgs> | null
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


  export const Claim_coinsScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    date: 'date',
    amount: 'amount',
    status: 'status'
  };

  export type Claim_coinsScalarFieldEnum = (typeof Claim_coinsScalarFieldEnum)[keyof typeof Claim_coinsScalarFieldEnum]


  export const DepositsScalarFieldEnum: {
    id: 'id',
    transaction_id: 'transaction_id',
    user_id: 'user_id',
    date: 'date',
    amount: 'amount',
    address: 'address',
    to_address: 'to_address',
    trc_type: 'trc_type',
    status: 'status'
  };

  export type DepositsScalarFieldEnum = (typeof DepositsScalarFieldEnum)[keyof typeof DepositsScalarFieldEnum]


  export const Earn_coinsScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    date: 'date',
    amount: 'amount',
    status: 'status'
  };

  export type Earn_coinsScalarFieldEnum = (typeof Earn_coinsScalarFieldEnum)[keyof typeof Earn_coinsScalarFieldEnum]


  export const Mine_coinsScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    is_start: 'is_start',
    date: 'date',
    amount: 'amount',
    start_time: 'start_time',
    status: 'status'
  };

  export type Mine_coinsScalarFieldEnum = (typeof Mine_coinsScalarFieldEnum)[keyof typeof Mine_coinsScalarFieldEnum]


  export const Referral_progressScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    level: 'level',
    referred_users: 'referred_users',
    unlocked: 'unlocked',
    required_count: 'required_count',
    unlocked_at: 'unlocked_at'
  };

  export type Referral_progressScalarFieldEnum = (typeof Referral_progressScalarFieldEnum)[keyof typeof Referral_progressScalarFieldEnum]


  export const Temp_otpsScalarFieldEnum: {
    id: 'id',
    email: 'email',
    otp: 'otp',
    expires_at: 'expires_at',
    verified: 'verified'
  };

  export type Temp_otpsScalarFieldEnum = (typeof Temp_otpsScalarFieldEnum)[keyof typeof Temp_otpsScalarFieldEnum]


  export const UsersScalarFieldEnum: {
    id: 'id',
    username: 'username',
    uid: 'uid',
    email: 'email',
    number: 'number',
    phone: 'phone',
    mail_otp: 'mail_otp',
    password: 'password',
    plain_password: 'plain_password',
    status: 'status',
    amount: 'amount',
    remaining_balance: 'remaining_balance',
    deposit_amount: 'deposit_amount',
    withdrawal_amount: 'withdrawal_amount',
    referral_code: 'referral_code',
    referred_by: 'referred_by',
    image: 'image',
    role: 'role',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const WalletsScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    private_key: 'private_key',
    public_key: 'public_key',
    type: 'type',
    amount: 'amount',
    status: 'status',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type WalletsScalarFieldEnum = (typeof WalletsScalarFieldEnum)[keyof typeof WalletsScalarFieldEnum]


  export const WithdrawalsScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    date: 'date',
    type: 'type',
    amount: 'amount',
    address: 'address',
    status: 'status',
    status_withdraw: 'status_withdraw',
    reason: 'reason'
  };

  export type WithdrawalsScalarFieldEnum = (typeof WithdrawalsScalarFieldEnum)[keyof typeof WithdrawalsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type claim_coinsWhereInput = {
    AND?: claim_coinsWhereInput | claim_coinsWhereInput[]
    OR?: claim_coinsWhereInput[]
    NOT?: claim_coinsWhereInput | claim_coinsWhereInput[]
    id?: StringFilter<"claim_coins"> | string
    user_id?: StringFilter<"claim_coins"> | string
    date?: DateTimeNullableFilter<"claim_coins"> | Date | string | null
    amount?: DecimalFilter<"claim_coins"> | Decimal | DecimalJsLike | number | string
    status?: BoolNullableFilter<"claim_coins"> | boolean | null
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }

  export type claim_coinsOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    date?: SortOrderInput | SortOrder
    amount?: SortOrder
    status?: SortOrderInput | SortOrder
    users?: usersOrderByWithRelationInput
  }

  export type claim_coinsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: claim_coinsWhereInput | claim_coinsWhereInput[]
    OR?: claim_coinsWhereInput[]
    NOT?: claim_coinsWhereInput | claim_coinsWhereInput[]
    user_id?: StringFilter<"claim_coins"> | string
    date?: DateTimeNullableFilter<"claim_coins"> | Date | string | null
    amount?: DecimalFilter<"claim_coins"> | Decimal | DecimalJsLike | number | string
    status?: BoolNullableFilter<"claim_coins"> | boolean | null
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }, "id">

  export type claim_coinsOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    date?: SortOrderInput | SortOrder
    amount?: SortOrder
    status?: SortOrderInput | SortOrder
    _count?: claim_coinsCountOrderByAggregateInput
    _avg?: claim_coinsAvgOrderByAggregateInput
    _max?: claim_coinsMaxOrderByAggregateInput
    _min?: claim_coinsMinOrderByAggregateInput
    _sum?: claim_coinsSumOrderByAggregateInput
  }

  export type claim_coinsScalarWhereWithAggregatesInput = {
    AND?: claim_coinsScalarWhereWithAggregatesInput | claim_coinsScalarWhereWithAggregatesInput[]
    OR?: claim_coinsScalarWhereWithAggregatesInput[]
    NOT?: claim_coinsScalarWhereWithAggregatesInput | claim_coinsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"claim_coins"> | string
    user_id?: StringWithAggregatesFilter<"claim_coins"> | string
    date?: DateTimeNullableWithAggregatesFilter<"claim_coins"> | Date | string | null
    amount?: DecimalWithAggregatesFilter<"claim_coins"> | Decimal | DecimalJsLike | number | string
    status?: BoolNullableWithAggregatesFilter<"claim_coins"> | boolean | null
  }

  export type depositsWhereInput = {
    AND?: depositsWhereInput | depositsWhereInput[]
    OR?: depositsWhereInput[]
    NOT?: depositsWhereInput | depositsWhereInput[]
    id?: StringFilter<"deposits"> | string
    transaction_id?: StringFilter<"deposits"> | string
    user_id?: StringFilter<"deposits"> | string
    date?: DateTimeNullableFilter<"deposits"> | Date | string | null
    amount?: DecimalFilter<"deposits"> | Decimal | DecimalJsLike | number | string
    address?: StringFilter<"deposits"> | string
    to_address?: StringFilter<"deposits"> | string
    trc_type?: StringFilter<"deposits"> | string
    status?: BoolNullableFilter<"deposits"> | boolean | null
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }

  export type depositsOrderByWithRelationInput = {
    id?: SortOrder
    transaction_id?: SortOrder
    user_id?: SortOrder
    date?: SortOrderInput | SortOrder
    amount?: SortOrder
    address?: SortOrder
    to_address?: SortOrder
    trc_type?: SortOrder
    status?: SortOrderInput | SortOrder
    users?: usersOrderByWithRelationInput
  }

  export type depositsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    transaction_id?: string
    AND?: depositsWhereInput | depositsWhereInput[]
    OR?: depositsWhereInput[]
    NOT?: depositsWhereInput | depositsWhereInput[]
    user_id?: StringFilter<"deposits"> | string
    date?: DateTimeNullableFilter<"deposits"> | Date | string | null
    amount?: DecimalFilter<"deposits"> | Decimal | DecimalJsLike | number | string
    address?: StringFilter<"deposits"> | string
    to_address?: StringFilter<"deposits"> | string
    trc_type?: StringFilter<"deposits"> | string
    status?: BoolNullableFilter<"deposits"> | boolean | null
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }, "id" | "transaction_id">

  export type depositsOrderByWithAggregationInput = {
    id?: SortOrder
    transaction_id?: SortOrder
    user_id?: SortOrder
    date?: SortOrderInput | SortOrder
    amount?: SortOrder
    address?: SortOrder
    to_address?: SortOrder
    trc_type?: SortOrder
    status?: SortOrderInput | SortOrder
    _count?: depositsCountOrderByAggregateInput
    _avg?: depositsAvgOrderByAggregateInput
    _max?: depositsMaxOrderByAggregateInput
    _min?: depositsMinOrderByAggregateInput
    _sum?: depositsSumOrderByAggregateInput
  }

  export type depositsScalarWhereWithAggregatesInput = {
    AND?: depositsScalarWhereWithAggregatesInput | depositsScalarWhereWithAggregatesInput[]
    OR?: depositsScalarWhereWithAggregatesInput[]
    NOT?: depositsScalarWhereWithAggregatesInput | depositsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"deposits"> | string
    transaction_id?: StringWithAggregatesFilter<"deposits"> | string
    user_id?: StringWithAggregatesFilter<"deposits"> | string
    date?: DateTimeNullableWithAggregatesFilter<"deposits"> | Date | string | null
    amount?: DecimalWithAggregatesFilter<"deposits"> | Decimal | DecimalJsLike | number | string
    address?: StringWithAggregatesFilter<"deposits"> | string
    to_address?: StringWithAggregatesFilter<"deposits"> | string
    trc_type?: StringWithAggregatesFilter<"deposits"> | string
    status?: BoolNullableWithAggregatesFilter<"deposits"> | boolean | null
  }

  export type earn_coinsWhereInput = {
    AND?: earn_coinsWhereInput | earn_coinsWhereInput[]
    OR?: earn_coinsWhereInput[]
    NOT?: earn_coinsWhereInput | earn_coinsWhereInput[]
    id?: StringFilter<"earn_coins"> | string
    user_id?: StringFilter<"earn_coins"> | string
    date?: DateTimeNullableFilter<"earn_coins"> | Date | string | null
    amount?: DecimalFilter<"earn_coins"> | Decimal | DecimalJsLike | number | string
    status?: BoolNullableFilter<"earn_coins"> | boolean | null
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }

  export type earn_coinsOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    date?: SortOrderInput | SortOrder
    amount?: SortOrder
    status?: SortOrderInput | SortOrder
    users?: usersOrderByWithRelationInput
  }

  export type earn_coinsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: earn_coinsWhereInput | earn_coinsWhereInput[]
    OR?: earn_coinsWhereInput[]
    NOT?: earn_coinsWhereInput | earn_coinsWhereInput[]
    user_id?: StringFilter<"earn_coins"> | string
    date?: DateTimeNullableFilter<"earn_coins"> | Date | string | null
    amount?: DecimalFilter<"earn_coins"> | Decimal | DecimalJsLike | number | string
    status?: BoolNullableFilter<"earn_coins"> | boolean | null
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }, "id">

  export type earn_coinsOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    date?: SortOrderInput | SortOrder
    amount?: SortOrder
    status?: SortOrderInput | SortOrder
    _count?: earn_coinsCountOrderByAggregateInput
    _avg?: earn_coinsAvgOrderByAggregateInput
    _max?: earn_coinsMaxOrderByAggregateInput
    _min?: earn_coinsMinOrderByAggregateInput
    _sum?: earn_coinsSumOrderByAggregateInput
  }

  export type earn_coinsScalarWhereWithAggregatesInput = {
    AND?: earn_coinsScalarWhereWithAggregatesInput | earn_coinsScalarWhereWithAggregatesInput[]
    OR?: earn_coinsScalarWhereWithAggregatesInput[]
    NOT?: earn_coinsScalarWhereWithAggregatesInput | earn_coinsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"earn_coins"> | string
    user_id?: StringWithAggregatesFilter<"earn_coins"> | string
    date?: DateTimeNullableWithAggregatesFilter<"earn_coins"> | Date | string | null
    amount?: DecimalWithAggregatesFilter<"earn_coins"> | Decimal | DecimalJsLike | number | string
    status?: BoolNullableWithAggregatesFilter<"earn_coins"> | boolean | null
  }

  export type mine_coinsWhereInput = {
    AND?: mine_coinsWhereInput | mine_coinsWhereInput[]
    OR?: mine_coinsWhereInput[]
    NOT?: mine_coinsWhereInput | mine_coinsWhereInput[]
    id?: StringFilter<"mine_coins"> | string
    user_id?: StringFilter<"mine_coins"> | string
    is_start?: BoolNullableFilter<"mine_coins"> | boolean | null
    date?: DateTimeNullableFilter<"mine_coins"> | Date | string | null
    amount?: DecimalFilter<"mine_coins"> | Decimal | DecimalJsLike | number | string
    start_time?: DateTimeNullableFilter<"mine_coins"> | Date | string | null
    status?: BoolNullableFilter<"mine_coins"> | boolean | null
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }

  export type mine_coinsOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    is_start?: SortOrderInput | SortOrder
    date?: SortOrderInput | SortOrder
    amount?: SortOrder
    start_time?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    users?: usersOrderByWithRelationInput
  }

  export type mine_coinsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: mine_coinsWhereInput | mine_coinsWhereInput[]
    OR?: mine_coinsWhereInput[]
    NOT?: mine_coinsWhereInput | mine_coinsWhereInput[]
    user_id?: StringFilter<"mine_coins"> | string
    is_start?: BoolNullableFilter<"mine_coins"> | boolean | null
    date?: DateTimeNullableFilter<"mine_coins"> | Date | string | null
    amount?: DecimalFilter<"mine_coins"> | Decimal | DecimalJsLike | number | string
    start_time?: DateTimeNullableFilter<"mine_coins"> | Date | string | null
    status?: BoolNullableFilter<"mine_coins"> | boolean | null
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }, "id">

  export type mine_coinsOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    is_start?: SortOrderInput | SortOrder
    date?: SortOrderInput | SortOrder
    amount?: SortOrder
    start_time?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    _count?: mine_coinsCountOrderByAggregateInput
    _avg?: mine_coinsAvgOrderByAggregateInput
    _max?: mine_coinsMaxOrderByAggregateInput
    _min?: mine_coinsMinOrderByAggregateInput
    _sum?: mine_coinsSumOrderByAggregateInput
  }

  export type mine_coinsScalarWhereWithAggregatesInput = {
    AND?: mine_coinsScalarWhereWithAggregatesInput | mine_coinsScalarWhereWithAggregatesInput[]
    OR?: mine_coinsScalarWhereWithAggregatesInput[]
    NOT?: mine_coinsScalarWhereWithAggregatesInput | mine_coinsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"mine_coins"> | string
    user_id?: StringWithAggregatesFilter<"mine_coins"> | string
    is_start?: BoolNullableWithAggregatesFilter<"mine_coins"> | boolean | null
    date?: DateTimeNullableWithAggregatesFilter<"mine_coins"> | Date | string | null
    amount?: DecimalWithAggregatesFilter<"mine_coins"> | Decimal | DecimalJsLike | number | string
    start_time?: DateTimeNullableWithAggregatesFilter<"mine_coins"> | Date | string | null
    status?: BoolNullableWithAggregatesFilter<"mine_coins"> | boolean | null
  }

  export type referral_progressWhereInput = {
    AND?: referral_progressWhereInput | referral_progressWhereInput[]
    OR?: referral_progressWhereInput[]
    NOT?: referral_progressWhereInput | referral_progressWhereInput[]
    id?: StringFilter<"referral_progress"> | string
    user_id?: StringFilter<"referral_progress"> | string
    level?: IntFilter<"referral_progress"> | number
    referred_users?: StringNullableListFilter<"referral_progress">
    unlocked?: BoolNullableFilter<"referral_progress"> | boolean | null
    required_count?: IntFilter<"referral_progress"> | number
    unlocked_at?: DateTimeNullableFilter<"referral_progress"> | Date | string | null
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }

  export type referral_progressOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    level?: SortOrder
    referred_users?: SortOrder
    unlocked?: SortOrderInput | SortOrder
    required_count?: SortOrder
    unlocked_at?: SortOrderInput | SortOrder
    users?: usersOrderByWithRelationInput
  }

  export type referral_progressWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    user_id_level?: referral_progressUser_idLevelCompoundUniqueInput
    AND?: referral_progressWhereInput | referral_progressWhereInput[]
    OR?: referral_progressWhereInput[]
    NOT?: referral_progressWhereInput | referral_progressWhereInput[]
    user_id?: StringFilter<"referral_progress"> | string
    level?: IntFilter<"referral_progress"> | number
    referred_users?: StringNullableListFilter<"referral_progress">
    unlocked?: BoolNullableFilter<"referral_progress"> | boolean | null
    required_count?: IntFilter<"referral_progress"> | number
    unlocked_at?: DateTimeNullableFilter<"referral_progress"> | Date | string | null
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }, "id" | "user_id_level">

  export type referral_progressOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    level?: SortOrder
    referred_users?: SortOrder
    unlocked?: SortOrderInput | SortOrder
    required_count?: SortOrder
    unlocked_at?: SortOrderInput | SortOrder
    _count?: referral_progressCountOrderByAggregateInput
    _avg?: referral_progressAvgOrderByAggregateInput
    _max?: referral_progressMaxOrderByAggregateInput
    _min?: referral_progressMinOrderByAggregateInput
    _sum?: referral_progressSumOrderByAggregateInput
  }

  export type referral_progressScalarWhereWithAggregatesInput = {
    AND?: referral_progressScalarWhereWithAggregatesInput | referral_progressScalarWhereWithAggregatesInput[]
    OR?: referral_progressScalarWhereWithAggregatesInput[]
    NOT?: referral_progressScalarWhereWithAggregatesInput | referral_progressScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"referral_progress"> | string
    user_id?: StringWithAggregatesFilter<"referral_progress"> | string
    level?: IntWithAggregatesFilter<"referral_progress"> | number
    referred_users?: StringNullableListFilter<"referral_progress">
    unlocked?: BoolNullableWithAggregatesFilter<"referral_progress"> | boolean | null
    required_count?: IntWithAggregatesFilter<"referral_progress"> | number
    unlocked_at?: DateTimeNullableWithAggregatesFilter<"referral_progress"> | Date | string | null
  }

  export type temp_otpsWhereInput = {
    AND?: temp_otpsWhereInput | temp_otpsWhereInput[]
    OR?: temp_otpsWhereInput[]
    NOT?: temp_otpsWhereInput | temp_otpsWhereInput[]
    id?: StringFilter<"temp_otps"> | string
    email?: StringFilter<"temp_otps"> | string
    otp?: StringFilter<"temp_otps"> | string
    expires_at?: DateTimeFilter<"temp_otps"> | Date | string
    verified?: BoolNullableFilter<"temp_otps"> | boolean | null
  }

  export type temp_otpsOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    otp?: SortOrder
    expires_at?: SortOrder
    verified?: SortOrderInput | SortOrder
  }

  export type temp_otpsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: temp_otpsWhereInput | temp_otpsWhereInput[]
    OR?: temp_otpsWhereInput[]
    NOT?: temp_otpsWhereInput | temp_otpsWhereInput[]
    email?: StringFilter<"temp_otps"> | string
    otp?: StringFilter<"temp_otps"> | string
    expires_at?: DateTimeFilter<"temp_otps"> | Date | string
    verified?: BoolNullableFilter<"temp_otps"> | boolean | null
  }, "id">

  export type temp_otpsOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    otp?: SortOrder
    expires_at?: SortOrder
    verified?: SortOrderInput | SortOrder
    _count?: temp_otpsCountOrderByAggregateInput
    _max?: temp_otpsMaxOrderByAggregateInput
    _min?: temp_otpsMinOrderByAggregateInput
  }

  export type temp_otpsScalarWhereWithAggregatesInput = {
    AND?: temp_otpsScalarWhereWithAggregatesInput | temp_otpsScalarWhereWithAggregatesInput[]
    OR?: temp_otpsScalarWhereWithAggregatesInput[]
    NOT?: temp_otpsScalarWhereWithAggregatesInput | temp_otpsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"temp_otps"> | string
    email?: StringWithAggregatesFilter<"temp_otps"> | string
    otp?: StringWithAggregatesFilter<"temp_otps"> | string
    expires_at?: DateTimeWithAggregatesFilter<"temp_otps"> | Date | string
    verified?: BoolNullableWithAggregatesFilter<"temp_otps"> | boolean | null
  }

  export type usersWhereInput = {
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    id?: StringFilter<"users"> | string
    username?: StringFilter<"users"> | string
    uid?: StringFilter<"users"> | string
    email?: StringFilter<"users"> | string
    number?: StringFilter<"users"> | string
    phone?: StringNullableFilter<"users"> | string | null
    mail_otp?: StringNullableFilter<"users"> | string | null
    password?: StringFilter<"users"> | string
    plain_password?: StringNullableFilter<"users"> | string | null
    status?: BoolNullableFilter<"users"> | boolean | null
    amount?: DecimalNullableFilter<"users"> | Decimal | DecimalJsLike | number | string | null
    remaining_balance?: DecimalNullableFilter<"users"> | Decimal | DecimalJsLike | number | string | null
    deposit_amount?: DecimalNullableFilter<"users"> | Decimal | DecimalJsLike | number | string | null
    withdrawal_amount?: DecimalNullableFilter<"users"> | Decimal | DecimalJsLike | number | string | null
    referral_code?: StringNullableFilter<"users"> | string | null
    referred_by?: StringNullableFilter<"users"> | string | null
    image?: StringNullableFilter<"users"> | string | null
    role?: StringNullableFilter<"users"> | string | null
    created_at?: DateTimeNullableFilter<"users"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"users"> | Date | string | null
    claim_coins?: Claim_coinsListRelationFilter
    deposits?: DepositsListRelationFilter
    earn_coins?: Earn_coinsListRelationFilter
    mine_coins?: Mine_coinsListRelationFilter
    referral_progress?: Referral_progressListRelationFilter
    wallets?: WalletsListRelationFilter
    withdrawals?: WithdrawalsListRelationFilter
  }

  export type usersOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    uid?: SortOrder
    email?: SortOrder
    number?: SortOrder
    phone?: SortOrderInput | SortOrder
    mail_otp?: SortOrderInput | SortOrder
    password?: SortOrder
    plain_password?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    amount?: SortOrderInput | SortOrder
    remaining_balance?: SortOrderInput | SortOrder
    deposit_amount?: SortOrderInput | SortOrder
    withdrawal_amount?: SortOrderInput | SortOrder
    referral_code?: SortOrderInput | SortOrder
    referred_by?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    role?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    claim_coins?: claim_coinsOrderByRelationAggregateInput
    deposits?: depositsOrderByRelationAggregateInput
    earn_coins?: earn_coinsOrderByRelationAggregateInput
    mine_coins?: mine_coinsOrderByRelationAggregateInput
    referral_progress?: referral_progressOrderByRelationAggregateInput
    wallets?: walletsOrderByRelationAggregateInput
    withdrawals?: withdrawalsOrderByRelationAggregateInput
  }

  export type usersWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    referral_code?: string
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    username?: StringFilter<"users"> | string
    uid?: StringFilter<"users"> | string
    number?: StringFilter<"users"> | string
    phone?: StringNullableFilter<"users"> | string | null
    mail_otp?: StringNullableFilter<"users"> | string | null
    password?: StringFilter<"users"> | string
    plain_password?: StringNullableFilter<"users"> | string | null
    status?: BoolNullableFilter<"users"> | boolean | null
    amount?: DecimalNullableFilter<"users"> | Decimal | DecimalJsLike | number | string | null
    remaining_balance?: DecimalNullableFilter<"users"> | Decimal | DecimalJsLike | number | string | null
    deposit_amount?: DecimalNullableFilter<"users"> | Decimal | DecimalJsLike | number | string | null
    withdrawal_amount?: DecimalNullableFilter<"users"> | Decimal | DecimalJsLike | number | string | null
    referred_by?: StringNullableFilter<"users"> | string | null
    image?: StringNullableFilter<"users"> | string | null
    role?: StringNullableFilter<"users"> | string | null
    created_at?: DateTimeNullableFilter<"users"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"users"> | Date | string | null
    claim_coins?: Claim_coinsListRelationFilter
    deposits?: DepositsListRelationFilter
    earn_coins?: Earn_coinsListRelationFilter
    mine_coins?: Mine_coinsListRelationFilter
    referral_progress?: Referral_progressListRelationFilter
    wallets?: WalletsListRelationFilter
    withdrawals?: WithdrawalsListRelationFilter
  }, "id" | "email" | "referral_code">

  export type usersOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    uid?: SortOrder
    email?: SortOrder
    number?: SortOrder
    phone?: SortOrderInput | SortOrder
    mail_otp?: SortOrderInput | SortOrder
    password?: SortOrder
    plain_password?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    amount?: SortOrderInput | SortOrder
    remaining_balance?: SortOrderInput | SortOrder
    deposit_amount?: SortOrderInput | SortOrder
    withdrawal_amount?: SortOrderInput | SortOrder
    referral_code?: SortOrderInput | SortOrder
    referred_by?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    role?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
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
    id?: StringWithAggregatesFilter<"users"> | string
    username?: StringWithAggregatesFilter<"users"> | string
    uid?: StringWithAggregatesFilter<"users"> | string
    email?: StringWithAggregatesFilter<"users"> | string
    number?: StringWithAggregatesFilter<"users"> | string
    phone?: StringNullableWithAggregatesFilter<"users"> | string | null
    mail_otp?: StringNullableWithAggregatesFilter<"users"> | string | null
    password?: StringWithAggregatesFilter<"users"> | string
    plain_password?: StringNullableWithAggregatesFilter<"users"> | string | null
    status?: BoolNullableWithAggregatesFilter<"users"> | boolean | null
    amount?: DecimalNullableWithAggregatesFilter<"users"> | Decimal | DecimalJsLike | number | string | null
    remaining_balance?: DecimalNullableWithAggregatesFilter<"users"> | Decimal | DecimalJsLike | number | string | null
    deposit_amount?: DecimalNullableWithAggregatesFilter<"users"> | Decimal | DecimalJsLike | number | string | null
    withdrawal_amount?: DecimalNullableWithAggregatesFilter<"users"> | Decimal | DecimalJsLike | number | string | null
    referral_code?: StringNullableWithAggregatesFilter<"users"> | string | null
    referred_by?: StringNullableWithAggregatesFilter<"users"> | string | null
    image?: StringNullableWithAggregatesFilter<"users"> | string | null
    role?: StringNullableWithAggregatesFilter<"users"> | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"users"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"users"> | Date | string | null
  }

  export type walletsWhereInput = {
    AND?: walletsWhereInput | walletsWhereInput[]
    OR?: walletsWhereInput[]
    NOT?: walletsWhereInput | walletsWhereInput[]
    id?: StringFilter<"wallets"> | string
    user_id?: StringFilter<"wallets"> | string
    private_key?: StringFilter<"wallets"> | string
    public_key?: StringFilter<"wallets"> | string
    type?: StringFilter<"wallets"> | string
    amount?: DecimalNullableFilter<"wallets"> | Decimal | DecimalJsLike | number | string | null
    status?: BoolNullableFilter<"wallets"> | boolean | null
    created_at?: DateTimeNullableFilter<"wallets"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"wallets"> | Date | string | null
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }

  export type walletsOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    private_key?: SortOrder
    public_key?: SortOrder
    type?: SortOrder
    amount?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    users?: usersOrderByWithRelationInput
  }

  export type walletsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: walletsWhereInput | walletsWhereInput[]
    OR?: walletsWhereInput[]
    NOT?: walletsWhereInput | walletsWhereInput[]
    user_id?: StringFilter<"wallets"> | string
    private_key?: StringFilter<"wallets"> | string
    public_key?: StringFilter<"wallets"> | string
    type?: StringFilter<"wallets"> | string
    amount?: DecimalNullableFilter<"wallets"> | Decimal | DecimalJsLike | number | string | null
    status?: BoolNullableFilter<"wallets"> | boolean | null
    created_at?: DateTimeNullableFilter<"wallets"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"wallets"> | Date | string | null
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }, "id">

  export type walletsOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    private_key?: SortOrder
    public_key?: SortOrder
    type?: SortOrder
    amount?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: walletsCountOrderByAggregateInput
    _avg?: walletsAvgOrderByAggregateInput
    _max?: walletsMaxOrderByAggregateInput
    _min?: walletsMinOrderByAggregateInput
    _sum?: walletsSumOrderByAggregateInput
  }

  export type walletsScalarWhereWithAggregatesInput = {
    AND?: walletsScalarWhereWithAggregatesInput | walletsScalarWhereWithAggregatesInput[]
    OR?: walletsScalarWhereWithAggregatesInput[]
    NOT?: walletsScalarWhereWithAggregatesInput | walletsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"wallets"> | string
    user_id?: StringWithAggregatesFilter<"wallets"> | string
    private_key?: StringWithAggregatesFilter<"wallets"> | string
    public_key?: StringWithAggregatesFilter<"wallets"> | string
    type?: StringWithAggregatesFilter<"wallets"> | string
    amount?: DecimalNullableWithAggregatesFilter<"wallets"> | Decimal | DecimalJsLike | number | string | null
    status?: BoolNullableWithAggregatesFilter<"wallets"> | boolean | null
    created_at?: DateTimeNullableWithAggregatesFilter<"wallets"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"wallets"> | Date | string | null
  }

  export type withdrawalsWhereInput = {
    AND?: withdrawalsWhereInput | withdrawalsWhereInput[]
    OR?: withdrawalsWhereInput[]
    NOT?: withdrawalsWhereInput | withdrawalsWhereInput[]
    id?: StringFilter<"withdrawals"> | string
    user_id?: StringFilter<"withdrawals"> | string
    date?: DateTimeNullableFilter<"withdrawals"> | Date | string | null
    type?: StringFilter<"withdrawals"> | string
    amount?: DecimalFilter<"withdrawals"> | Decimal | DecimalJsLike | number | string
    address?: StringFilter<"withdrawals"> | string
    status?: BoolNullableFilter<"withdrawals"> | boolean | null
    status_withdraw?: StringFilter<"withdrawals"> | string
    reason?: StringNullableFilter<"withdrawals"> | string | null
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }

  export type withdrawalsOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    date?: SortOrderInput | SortOrder
    type?: SortOrder
    amount?: SortOrder
    address?: SortOrder
    status?: SortOrderInput | SortOrder
    status_withdraw?: SortOrder
    reason?: SortOrderInput | SortOrder
    users?: usersOrderByWithRelationInput
  }

  export type withdrawalsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: withdrawalsWhereInput | withdrawalsWhereInput[]
    OR?: withdrawalsWhereInput[]
    NOT?: withdrawalsWhereInput | withdrawalsWhereInput[]
    user_id?: StringFilter<"withdrawals"> | string
    date?: DateTimeNullableFilter<"withdrawals"> | Date | string | null
    type?: StringFilter<"withdrawals"> | string
    amount?: DecimalFilter<"withdrawals"> | Decimal | DecimalJsLike | number | string
    address?: StringFilter<"withdrawals"> | string
    status?: BoolNullableFilter<"withdrawals"> | boolean | null
    status_withdraw?: StringFilter<"withdrawals"> | string
    reason?: StringNullableFilter<"withdrawals"> | string | null
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }, "id">

  export type withdrawalsOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    date?: SortOrderInput | SortOrder
    type?: SortOrder
    amount?: SortOrder
    address?: SortOrder
    status?: SortOrderInput | SortOrder
    status_withdraw?: SortOrder
    reason?: SortOrderInput | SortOrder
    _count?: withdrawalsCountOrderByAggregateInput
    _avg?: withdrawalsAvgOrderByAggregateInput
    _max?: withdrawalsMaxOrderByAggregateInput
    _min?: withdrawalsMinOrderByAggregateInput
    _sum?: withdrawalsSumOrderByAggregateInput
  }

  export type withdrawalsScalarWhereWithAggregatesInput = {
    AND?: withdrawalsScalarWhereWithAggregatesInput | withdrawalsScalarWhereWithAggregatesInput[]
    OR?: withdrawalsScalarWhereWithAggregatesInput[]
    NOT?: withdrawalsScalarWhereWithAggregatesInput | withdrawalsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"withdrawals"> | string
    user_id?: StringWithAggregatesFilter<"withdrawals"> | string
    date?: DateTimeNullableWithAggregatesFilter<"withdrawals"> | Date | string | null
    type?: StringWithAggregatesFilter<"withdrawals"> | string
    amount?: DecimalWithAggregatesFilter<"withdrawals"> | Decimal | DecimalJsLike | number | string
    address?: StringWithAggregatesFilter<"withdrawals"> | string
    status?: BoolNullableWithAggregatesFilter<"withdrawals"> | boolean | null
    status_withdraw?: StringWithAggregatesFilter<"withdrawals"> | string
    reason?: StringNullableWithAggregatesFilter<"withdrawals"> | string | null
  }

  export type claim_coinsCreateInput = {
    id: string
    date?: Date | string | null
    amount: Decimal | DecimalJsLike | number | string
    status?: boolean | null
    users: usersCreateNestedOneWithoutClaim_coinsInput
  }

  export type claim_coinsUncheckedCreateInput = {
    id: string
    user_id: string
    date?: Date | string | null
    amount: Decimal | DecimalJsLike | number | string
    status?: boolean | null
  }

  export type claim_coinsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: NullableBoolFieldUpdateOperationsInput | boolean | null
    users?: usersUpdateOneRequiredWithoutClaim_coinsNestedInput
  }

  export type claim_coinsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type claim_coinsCreateManyInput = {
    id: string
    user_id: string
    date?: Date | string | null
    amount: Decimal | DecimalJsLike | number | string
    status?: boolean | null
  }

  export type claim_coinsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type claim_coinsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type depositsCreateInput = {
    id: string
    transaction_id: string
    date?: Date | string | null
    amount: Decimal | DecimalJsLike | number | string
    address: string
    to_address: string
    trc_type: string
    status?: boolean | null
    users: usersCreateNestedOneWithoutDepositsInput
  }

  export type depositsUncheckedCreateInput = {
    id: string
    transaction_id: string
    user_id: string
    date?: Date | string | null
    amount: Decimal | DecimalJsLike | number | string
    address: string
    to_address: string
    trc_type: string
    status?: boolean | null
  }

  export type depositsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    transaction_id?: StringFieldUpdateOperationsInput | string
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    address?: StringFieldUpdateOperationsInput | string
    to_address?: StringFieldUpdateOperationsInput | string
    trc_type?: StringFieldUpdateOperationsInput | string
    status?: NullableBoolFieldUpdateOperationsInput | boolean | null
    users?: usersUpdateOneRequiredWithoutDepositsNestedInput
  }

  export type depositsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    transaction_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    address?: StringFieldUpdateOperationsInput | string
    to_address?: StringFieldUpdateOperationsInput | string
    trc_type?: StringFieldUpdateOperationsInput | string
    status?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type depositsCreateManyInput = {
    id: string
    transaction_id: string
    user_id: string
    date?: Date | string | null
    amount: Decimal | DecimalJsLike | number | string
    address: string
    to_address: string
    trc_type: string
    status?: boolean | null
  }

  export type depositsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    transaction_id?: StringFieldUpdateOperationsInput | string
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    address?: StringFieldUpdateOperationsInput | string
    to_address?: StringFieldUpdateOperationsInput | string
    trc_type?: StringFieldUpdateOperationsInput | string
    status?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type depositsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    transaction_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    address?: StringFieldUpdateOperationsInput | string
    to_address?: StringFieldUpdateOperationsInput | string
    trc_type?: StringFieldUpdateOperationsInput | string
    status?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type earn_coinsCreateInput = {
    id: string
    date?: Date | string | null
    amount: Decimal | DecimalJsLike | number | string
    status?: boolean | null
    users: usersCreateNestedOneWithoutEarn_coinsInput
  }

  export type earn_coinsUncheckedCreateInput = {
    id: string
    user_id: string
    date?: Date | string | null
    amount: Decimal | DecimalJsLike | number | string
    status?: boolean | null
  }

  export type earn_coinsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: NullableBoolFieldUpdateOperationsInput | boolean | null
    users?: usersUpdateOneRequiredWithoutEarn_coinsNestedInput
  }

  export type earn_coinsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type earn_coinsCreateManyInput = {
    id: string
    user_id: string
    date?: Date | string | null
    amount: Decimal | DecimalJsLike | number | string
    status?: boolean | null
  }

  export type earn_coinsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type earn_coinsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type mine_coinsCreateInput = {
    id: string
    is_start?: boolean | null
    date?: Date | string | null
    amount: Decimal | DecimalJsLike | number | string
    start_time?: Date | string | null
    status?: boolean | null
    users: usersCreateNestedOneWithoutMine_coinsInput
  }

  export type mine_coinsUncheckedCreateInput = {
    id: string
    user_id: string
    is_start?: boolean | null
    date?: Date | string | null
    amount: Decimal | DecimalJsLike | number | string
    start_time?: Date | string | null
    status?: boolean | null
  }

  export type mine_coinsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    is_start?: NullableBoolFieldUpdateOperationsInput | boolean | null
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    start_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableBoolFieldUpdateOperationsInput | boolean | null
    users?: usersUpdateOneRequiredWithoutMine_coinsNestedInput
  }

  export type mine_coinsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    is_start?: NullableBoolFieldUpdateOperationsInput | boolean | null
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    start_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type mine_coinsCreateManyInput = {
    id: string
    user_id: string
    is_start?: boolean | null
    date?: Date | string | null
    amount: Decimal | DecimalJsLike | number | string
    start_time?: Date | string | null
    status?: boolean | null
  }

  export type mine_coinsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    is_start?: NullableBoolFieldUpdateOperationsInput | boolean | null
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    start_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type mine_coinsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    is_start?: NullableBoolFieldUpdateOperationsInput | boolean | null
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    start_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type referral_progressCreateInput = {
    id: string
    level: number
    referred_users?: referral_progressCreatereferred_usersInput | string[]
    unlocked?: boolean | null
    required_count: number
    unlocked_at?: Date | string | null
    users: usersCreateNestedOneWithoutReferral_progressInput
  }

  export type referral_progressUncheckedCreateInput = {
    id: string
    user_id: string
    level: number
    referred_users?: referral_progressCreatereferred_usersInput | string[]
    unlocked?: boolean | null
    required_count: number
    unlocked_at?: Date | string | null
  }

  export type referral_progressUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    referred_users?: referral_progressUpdatereferred_usersInput | string[]
    unlocked?: NullableBoolFieldUpdateOperationsInput | boolean | null
    required_count?: IntFieldUpdateOperationsInput | number
    unlocked_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: usersUpdateOneRequiredWithoutReferral_progressNestedInput
  }

  export type referral_progressUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    referred_users?: referral_progressUpdatereferred_usersInput | string[]
    unlocked?: NullableBoolFieldUpdateOperationsInput | boolean | null
    required_count?: IntFieldUpdateOperationsInput | number
    unlocked_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type referral_progressCreateManyInput = {
    id: string
    user_id: string
    level: number
    referred_users?: referral_progressCreatereferred_usersInput | string[]
    unlocked?: boolean | null
    required_count: number
    unlocked_at?: Date | string | null
  }

  export type referral_progressUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    referred_users?: referral_progressUpdatereferred_usersInput | string[]
    unlocked?: NullableBoolFieldUpdateOperationsInput | boolean | null
    required_count?: IntFieldUpdateOperationsInput | number
    unlocked_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type referral_progressUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    referred_users?: referral_progressUpdatereferred_usersInput | string[]
    unlocked?: NullableBoolFieldUpdateOperationsInput | boolean | null
    required_count?: IntFieldUpdateOperationsInput | number
    unlocked_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type temp_otpsCreateInput = {
    id: string
    email: string
    otp: string
    expires_at: Date | string
    verified?: boolean | null
  }

  export type temp_otpsUncheckedCreateInput = {
    id: string
    email: string
    otp: string
    expires_at: Date | string
    verified?: boolean | null
  }

  export type temp_otpsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    otp?: StringFieldUpdateOperationsInput | string
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    verified?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type temp_otpsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    otp?: StringFieldUpdateOperationsInput | string
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    verified?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type temp_otpsCreateManyInput = {
    id: string
    email: string
    otp: string
    expires_at: Date | string
    verified?: boolean | null
  }

  export type temp_otpsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    otp?: StringFieldUpdateOperationsInput | string
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    verified?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type temp_otpsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    otp?: StringFieldUpdateOperationsInput | string
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    verified?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type usersCreateInput = {
    id: string
    username: string
    uid: string
    email: string
    number: string
    phone?: string | null
    mail_otp?: string | null
    password: string
    plain_password?: string | null
    status?: boolean | null
    amount?: Decimal | DecimalJsLike | number | string | null
    remaining_balance?: Decimal | DecimalJsLike | number | string | null
    deposit_amount?: Decimal | DecimalJsLike | number | string | null
    withdrawal_amount?: Decimal | DecimalJsLike | number | string | null
    referral_code?: string | null
    referred_by?: string | null
    image?: string | null
    role?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    claim_coins?: claim_coinsCreateNestedManyWithoutUsersInput
    deposits?: depositsCreateNestedManyWithoutUsersInput
    earn_coins?: earn_coinsCreateNestedManyWithoutUsersInput
    mine_coins?: mine_coinsCreateNestedManyWithoutUsersInput
    referral_progress?: referral_progressCreateNestedManyWithoutUsersInput
    wallets?: walletsCreateNestedManyWithoutUsersInput
    withdrawals?: withdrawalsCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateInput = {
    id: string
    username: string
    uid: string
    email: string
    number: string
    phone?: string | null
    mail_otp?: string | null
    password: string
    plain_password?: string | null
    status?: boolean | null
    amount?: Decimal | DecimalJsLike | number | string | null
    remaining_balance?: Decimal | DecimalJsLike | number | string | null
    deposit_amount?: Decimal | DecimalJsLike | number | string | null
    withdrawal_amount?: Decimal | DecimalJsLike | number | string | null
    referral_code?: string | null
    referred_by?: string | null
    image?: string | null
    role?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    claim_coins?: claim_coinsUncheckedCreateNestedManyWithoutUsersInput
    deposits?: depositsUncheckedCreateNestedManyWithoutUsersInput
    earn_coins?: earn_coinsUncheckedCreateNestedManyWithoutUsersInput
    mine_coins?: mine_coinsUncheckedCreateNestedManyWithoutUsersInput
    referral_progress?: referral_progressUncheckedCreateNestedManyWithoutUsersInput
    wallets?: walletsUncheckedCreateNestedManyWithoutUsersInput
    withdrawals?: withdrawalsUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    uid?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    mail_otp?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    plain_password?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableBoolFieldUpdateOperationsInput | boolean | null
    amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    remaining_balance?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    deposit_amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    withdrawal_amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    referral_code?: NullableStringFieldUpdateOperationsInput | string | null
    referred_by?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    claim_coins?: claim_coinsUpdateManyWithoutUsersNestedInput
    deposits?: depositsUpdateManyWithoutUsersNestedInput
    earn_coins?: earn_coinsUpdateManyWithoutUsersNestedInput
    mine_coins?: mine_coinsUpdateManyWithoutUsersNestedInput
    referral_progress?: referral_progressUpdateManyWithoutUsersNestedInput
    wallets?: walletsUpdateManyWithoutUsersNestedInput
    withdrawals?: withdrawalsUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    uid?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    mail_otp?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    plain_password?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableBoolFieldUpdateOperationsInput | boolean | null
    amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    remaining_balance?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    deposit_amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    withdrawal_amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    referral_code?: NullableStringFieldUpdateOperationsInput | string | null
    referred_by?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    claim_coins?: claim_coinsUncheckedUpdateManyWithoutUsersNestedInput
    deposits?: depositsUncheckedUpdateManyWithoutUsersNestedInput
    earn_coins?: earn_coinsUncheckedUpdateManyWithoutUsersNestedInput
    mine_coins?: mine_coinsUncheckedUpdateManyWithoutUsersNestedInput
    referral_progress?: referral_progressUncheckedUpdateManyWithoutUsersNestedInput
    wallets?: walletsUncheckedUpdateManyWithoutUsersNestedInput
    withdrawals?: withdrawalsUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type usersCreateManyInput = {
    id: string
    username: string
    uid: string
    email: string
    number: string
    phone?: string | null
    mail_otp?: string | null
    password: string
    plain_password?: string | null
    status?: boolean | null
    amount?: Decimal | DecimalJsLike | number | string | null
    remaining_balance?: Decimal | DecimalJsLike | number | string | null
    deposit_amount?: Decimal | DecimalJsLike | number | string | null
    withdrawal_amount?: Decimal | DecimalJsLike | number | string | null
    referral_code?: string | null
    referred_by?: string | null
    image?: string | null
    role?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type usersUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    uid?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    mail_otp?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    plain_password?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableBoolFieldUpdateOperationsInput | boolean | null
    amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    remaining_balance?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    deposit_amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    withdrawal_amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    referral_code?: NullableStringFieldUpdateOperationsInput | string | null
    referred_by?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type usersUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    uid?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    mail_otp?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    plain_password?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableBoolFieldUpdateOperationsInput | boolean | null
    amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    remaining_balance?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    deposit_amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    withdrawal_amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    referral_code?: NullableStringFieldUpdateOperationsInput | string | null
    referred_by?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type walletsCreateInput = {
    id: string
    private_key: string
    public_key: string
    type: string
    amount?: Decimal | DecimalJsLike | number | string | null
    status?: boolean | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    users: usersCreateNestedOneWithoutWalletsInput
  }

  export type walletsUncheckedCreateInput = {
    id: string
    user_id: string
    private_key: string
    public_key: string
    type: string
    amount?: Decimal | DecimalJsLike | number | string | null
    status?: boolean | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type walletsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    private_key?: StringFieldUpdateOperationsInput | string
    public_key?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: usersUpdateOneRequiredWithoutWalletsNestedInput
  }

  export type walletsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    private_key?: StringFieldUpdateOperationsInput | string
    public_key?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type walletsCreateManyInput = {
    id: string
    user_id: string
    private_key: string
    public_key: string
    type: string
    amount?: Decimal | DecimalJsLike | number | string | null
    status?: boolean | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type walletsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    private_key?: StringFieldUpdateOperationsInput | string
    public_key?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type walletsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    private_key?: StringFieldUpdateOperationsInput | string
    public_key?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type withdrawalsCreateInput = {
    id: string
    date?: Date | string | null
    type: string
    amount: Decimal | DecimalJsLike | number | string
    address: string
    status?: boolean | null
    status_withdraw: string
    reason?: string | null
    users: usersCreateNestedOneWithoutWithdrawalsInput
  }

  export type withdrawalsUncheckedCreateInput = {
    id: string
    user_id: string
    date?: Date | string | null
    type: string
    amount: Decimal | DecimalJsLike | number | string
    address: string
    status?: boolean | null
    status_withdraw: string
    reason?: string | null
  }

  export type withdrawalsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    type?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    address?: StringFieldUpdateOperationsInput | string
    status?: NullableBoolFieldUpdateOperationsInput | boolean | null
    status_withdraw?: StringFieldUpdateOperationsInput | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    users?: usersUpdateOneRequiredWithoutWithdrawalsNestedInput
  }

  export type withdrawalsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    type?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    address?: StringFieldUpdateOperationsInput | string
    status?: NullableBoolFieldUpdateOperationsInput | boolean | null
    status_withdraw?: StringFieldUpdateOperationsInput | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type withdrawalsCreateManyInput = {
    id: string
    user_id: string
    date?: Date | string | null
    type: string
    amount: Decimal | DecimalJsLike | number | string
    address: string
    status?: boolean | null
    status_withdraw: string
    reason?: string | null
  }

  export type withdrawalsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    type?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    address?: StringFieldUpdateOperationsInput | string
    status?: NullableBoolFieldUpdateOperationsInput | boolean | null
    status_withdraw?: StringFieldUpdateOperationsInput | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type withdrawalsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    type?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    address?: StringFieldUpdateOperationsInput | string
    status?: NullableBoolFieldUpdateOperationsInput | boolean | null
    status_withdraw?: StringFieldUpdateOperationsInput | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type UsersScalarRelationFilter = {
    is?: usersWhereInput
    isNot?: usersWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type claim_coinsCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    date?: SortOrder
    amount?: SortOrder
    status?: SortOrder
  }

  export type claim_coinsAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type claim_coinsMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    date?: SortOrder
    amount?: SortOrder
    status?: SortOrder
  }

  export type claim_coinsMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    date?: SortOrder
    amount?: SortOrder
    status?: SortOrder
  }

  export type claim_coinsSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
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

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type depositsCountOrderByAggregateInput = {
    id?: SortOrder
    transaction_id?: SortOrder
    user_id?: SortOrder
    date?: SortOrder
    amount?: SortOrder
    address?: SortOrder
    to_address?: SortOrder
    trc_type?: SortOrder
    status?: SortOrder
  }

  export type depositsAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type depositsMaxOrderByAggregateInput = {
    id?: SortOrder
    transaction_id?: SortOrder
    user_id?: SortOrder
    date?: SortOrder
    amount?: SortOrder
    address?: SortOrder
    to_address?: SortOrder
    trc_type?: SortOrder
    status?: SortOrder
  }

  export type depositsMinOrderByAggregateInput = {
    id?: SortOrder
    transaction_id?: SortOrder
    user_id?: SortOrder
    date?: SortOrder
    amount?: SortOrder
    address?: SortOrder
    to_address?: SortOrder
    trc_type?: SortOrder
    status?: SortOrder
  }

  export type depositsSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type earn_coinsCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    date?: SortOrder
    amount?: SortOrder
    status?: SortOrder
  }

  export type earn_coinsAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type earn_coinsMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    date?: SortOrder
    amount?: SortOrder
    status?: SortOrder
  }

  export type earn_coinsMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    date?: SortOrder
    amount?: SortOrder
    status?: SortOrder
  }

  export type earn_coinsSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type mine_coinsCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    is_start?: SortOrder
    date?: SortOrder
    amount?: SortOrder
    start_time?: SortOrder
    status?: SortOrder
  }

  export type mine_coinsAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type mine_coinsMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    is_start?: SortOrder
    date?: SortOrder
    amount?: SortOrder
    start_time?: SortOrder
    status?: SortOrder
  }

  export type mine_coinsMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    is_start?: SortOrder
    date?: SortOrder
    amount?: SortOrder
    start_time?: SortOrder
    status?: SortOrder
  }

  export type mine_coinsSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type referral_progressUser_idLevelCompoundUniqueInput = {
    user_id: string
    level: number
  }

  export type referral_progressCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    level?: SortOrder
    referred_users?: SortOrder
    unlocked?: SortOrder
    required_count?: SortOrder
    unlocked_at?: SortOrder
  }

  export type referral_progressAvgOrderByAggregateInput = {
    level?: SortOrder
    required_count?: SortOrder
  }

  export type referral_progressMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    level?: SortOrder
    unlocked?: SortOrder
    required_count?: SortOrder
    unlocked_at?: SortOrder
  }

  export type referral_progressMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    level?: SortOrder
    unlocked?: SortOrder
    required_count?: SortOrder
    unlocked_at?: SortOrder
  }

  export type referral_progressSumOrderByAggregateInput = {
    level?: SortOrder
    required_count?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type temp_otpsCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    otp?: SortOrder
    expires_at?: SortOrder
    verified?: SortOrder
  }

  export type temp_otpsMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    otp?: SortOrder
    expires_at?: SortOrder
    verified?: SortOrder
  }

  export type temp_otpsMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    otp?: SortOrder
    expires_at?: SortOrder
    verified?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type Claim_coinsListRelationFilter = {
    every?: claim_coinsWhereInput
    some?: claim_coinsWhereInput
    none?: claim_coinsWhereInput
  }

  export type DepositsListRelationFilter = {
    every?: depositsWhereInput
    some?: depositsWhereInput
    none?: depositsWhereInput
  }

  export type Earn_coinsListRelationFilter = {
    every?: earn_coinsWhereInput
    some?: earn_coinsWhereInput
    none?: earn_coinsWhereInput
  }

  export type Mine_coinsListRelationFilter = {
    every?: mine_coinsWhereInput
    some?: mine_coinsWhereInput
    none?: mine_coinsWhereInput
  }

  export type Referral_progressListRelationFilter = {
    every?: referral_progressWhereInput
    some?: referral_progressWhereInput
    none?: referral_progressWhereInput
  }

  export type WalletsListRelationFilter = {
    every?: walletsWhereInput
    some?: walletsWhereInput
    none?: walletsWhereInput
  }

  export type WithdrawalsListRelationFilter = {
    every?: withdrawalsWhereInput
    some?: withdrawalsWhereInput
    none?: withdrawalsWhereInput
  }

  export type claim_coinsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type depositsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type earn_coinsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type mine_coinsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type referral_progressOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type walletsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type withdrawalsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type usersCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    uid?: SortOrder
    email?: SortOrder
    number?: SortOrder
    phone?: SortOrder
    mail_otp?: SortOrder
    password?: SortOrder
    plain_password?: SortOrder
    status?: SortOrder
    amount?: SortOrder
    remaining_balance?: SortOrder
    deposit_amount?: SortOrder
    withdrawal_amount?: SortOrder
    referral_code?: SortOrder
    referred_by?: SortOrder
    image?: SortOrder
    role?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type usersAvgOrderByAggregateInput = {
    amount?: SortOrder
    remaining_balance?: SortOrder
    deposit_amount?: SortOrder
    withdrawal_amount?: SortOrder
  }

  export type usersMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    uid?: SortOrder
    email?: SortOrder
    number?: SortOrder
    phone?: SortOrder
    mail_otp?: SortOrder
    password?: SortOrder
    plain_password?: SortOrder
    status?: SortOrder
    amount?: SortOrder
    remaining_balance?: SortOrder
    deposit_amount?: SortOrder
    withdrawal_amount?: SortOrder
    referral_code?: SortOrder
    referred_by?: SortOrder
    image?: SortOrder
    role?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type usersMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    uid?: SortOrder
    email?: SortOrder
    number?: SortOrder
    phone?: SortOrder
    mail_otp?: SortOrder
    password?: SortOrder
    plain_password?: SortOrder
    status?: SortOrder
    amount?: SortOrder
    remaining_balance?: SortOrder
    deposit_amount?: SortOrder
    withdrawal_amount?: SortOrder
    referral_code?: SortOrder
    referred_by?: SortOrder
    image?: SortOrder
    role?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type usersSumOrderByAggregateInput = {
    amount?: SortOrder
    remaining_balance?: SortOrder
    deposit_amount?: SortOrder
    withdrawal_amount?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type walletsCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    private_key?: SortOrder
    public_key?: SortOrder
    type?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type walletsAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type walletsMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    private_key?: SortOrder
    public_key?: SortOrder
    type?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type walletsMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    private_key?: SortOrder
    public_key?: SortOrder
    type?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type walletsSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type withdrawalsCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    date?: SortOrder
    type?: SortOrder
    amount?: SortOrder
    address?: SortOrder
    status?: SortOrder
    status_withdraw?: SortOrder
    reason?: SortOrder
  }

  export type withdrawalsAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type withdrawalsMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    date?: SortOrder
    type?: SortOrder
    amount?: SortOrder
    address?: SortOrder
    status?: SortOrder
    status_withdraw?: SortOrder
    reason?: SortOrder
  }

  export type withdrawalsMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    date?: SortOrder
    type?: SortOrder
    amount?: SortOrder
    address?: SortOrder
    status?: SortOrder
    status_withdraw?: SortOrder
    reason?: SortOrder
  }

  export type withdrawalsSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type usersCreateNestedOneWithoutClaim_coinsInput = {
    create?: XOR<usersCreateWithoutClaim_coinsInput, usersUncheckedCreateWithoutClaim_coinsInput>
    connectOrCreate?: usersCreateOrConnectWithoutClaim_coinsInput
    connect?: usersWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type usersUpdateOneRequiredWithoutClaim_coinsNestedInput = {
    create?: XOR<usersCreateWithoutClaim_coinsInput, usersUncheckedCreateWithoutClaim_coinsInput>
    connectOrCreate?: usersCreateOrConnectWithoutClaim_coinsInput
    upsert?: usersUpsertWithoutClaim_coinsInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutClaim_coinsInput, usersUpdateWithoutClaim_coinsInput>, usersUncheckedUpdateWithoutClaim_coinsInput>
  }

  export type usersCreateNestedOneWithoutDepositsInput = {
    create?: XOR<usersCreateWithoutDepositsInput, usersUncheckedCreateWithoutDepositsInput>
    connectOrCreate?: usersCreateOrConnectWithoutDepositsInput
    connect?: usersWhereUniqueInput
  }

  export type usersUpdateOneRequiredWithoutDepositsNestedInput = {
    create?: XOR<usersCreateWithoutDepositsInput, usersUncheckedCreateWithoutDepositsInput>
    connectOrCreate?: usersCreateOrConnectWithoutDepositsInput
    upsert?: usersUpsertWithoutDepositsInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutDepositsInput, usersUpdateWithoutDepositsInput>, usersUncheckedUpdateWithoutDepositsInput>
  }

  export type usersCreateNestedOneWithoutEarn_coinsInput = {
    create?: XOR<usersCreateWithoutEarn_coinsInput, usersUncheckedCreateWithoutEarn_coinsInput>
    connectOrCreate?: usersCreateOrConnectWithoutEarn_coinsInput
    connect?: usersWhereUniqueInput
  }

  export type usersUpdateOneRequiredWithoutEarn_coinsNestedInput = {
    create?: XOR<usersCreateWithoutEarn_coinsInput, usersUncheckedCreateWithoutEarn_coinsInput>
    connectOrCreate?: usersCreateOrConnectWithoutEarn_coinsInput
    upsert?: usersUpsertWithoutEarn_coinsInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutEarn_coinsInput, usersUpdateWithoutEarn_coinsInput>, usersUncheckedUpdateWithoutEarn_coinsInput>
  }

  export type usersCreateNestedOneWithoutMine_coinsInput = {
    create?: XOR<usersCreateWithoutMine_coinsInput, usersUncheckedCreateWithoutMine_coinsInput>
    connectOrCreate?: usersCreateOrConnectWithoutMine_coinsInput
    connect?: usersWhereUniqueInput
  }

  export type usersUpdateOneRequiredWithoutMine_coinsNestedInput = {
    create?: XOR<usersCreateWithoutMine_coinsInput, usersUncheckedCreateWithoutMine_coinsInput>
    connectOrCreate?: usersCreateOrConnectWithoutMine_coinsInput
    upsert?: usersUpsertWithoutMine_coinsInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutMine_coinsInput, usersUpdateWithoutMine_coinsInput>, usersUncheckedUpdateWithoutMine_coinsInput>
  }

  export type referral_progressCreatereferred_usersInput = {
    set: string[]
  }

  export type usersCreateNestedOneWithoutReferral_progressInput = {
    create?: XOR<usersCreateWithoutReferral_progressInput, usersUncheckedCreateWithoutReferral_progressInput>
    connectOrCreate?: usersCreateOrConnectWithoutReferral_progressInput
    connect?: usersWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type referral_progressUpdatereferred_usersInput = {
    set?: string[]
    push?: string | string[]
  }

  export type usersUpdateOneRequiredWithoutReferral_progressNestedInput = {
    create?: XOR<usersCreateWithoutReferral_progressInput, usersUncheckedCreateWithoutReferral_progressInput>
    connectOrCreate?: usersCreateOrConnectWithoutReferral_progressInput
    upsert?: usersUpsertWithoutReferral_progressInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutReferral_progressInput, usersUpdateWithoutReferral_progressInput>, usersUncheckedUpdateWithoutReferral_progressInput>
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type claim_coinsCreateNestedManyWithoutUsersInput = {
    create?: XOR<claim_coinsCreateWithoutUsersInput, claim_coinsUncheckedCreateWithoutUsersInput> | claim_coinsCreateWithoutUsersInput[] | claim_coinsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: claim_coinsCreateOrConnectWithoutUsersInput | claim_coinsCreateOrConnectWithoutUsersInput[]
    createMany?: claim_coinsCreateManyUsersInputEnvelope
    connect?: claim_coinsWhereUniqueInput | claim_coinsWhereUniqueInput[]
  }

  export type depositsCreateNestedManyWithoutUsersInput = {
    create?: XOR<depositsCreateWithoutUsersInput, depositsUncheckedCreateWithoutUsersInput> | depositsCreateWithoutUsersInput[] | depositsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: depositsCreateOrConnectWithoutUsersInput | depositsCreateOrConnectWithoutUsersInput[]
    createMany?: depositsCreateManyUsersInputEnvelope
    connect?: depositsWhereUniqueInput | depositsWhereUniqueInput[]
  }

  export type earn_coinsCreateNestedManyWithoutUsersInput = {
    create?: XOR<earn_coinsCreateWithoutUsersInput, earn_coinsUncheckedCreateWithoutUsersInput> | earn_coinsCreateWithoutUsersInput[] | earn_coinsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: earn_coinsCreateOrConnectWithoutUsersInput | earn_coinsCreateOrConnectWithoutUsersInput[]
    createMany?: earn_coinsCreateManyUsersInputEnvelope
    connect?: earn_coinsWhereUniqueInput | earn_coinsWhereUniqueInput[]
  }

  export type mine_coinsCreateNestedManyWithoutUsersInput = {
    create?: XOR<mine_coinsCreateWithoutUsersInput, mine_coinsUncheckedCreateWithoutUsersInput> | mine_coinsCreateWithoutUsersInput[] | mine_coinsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: mine_coinsCreateOrConnectWithoutUsersInput | mine_coinsCreateOrConnectWithoutUsersInput[]
    createMany?: mine_coinsCreateManyUsersInputEnvelope
    connect?: mine_coinsWhereUniqueInput | mine_coinsWhereUniqueInput[]
  }

  export type referral_progressCreateNestedManyWithoutUsersInput = {
    create?: XOR<referral_progressCreateWithoutUsersInput, referral_progressUncheckedCreateWithoutUsersInput> | referral_progressCreateWithoutUsersInput[] | referral_progressUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: referral_progressCreateOrConnectWithoutUsersInput | referral_progressCreateOrConnectWithoutUsersInput[]
    createMany?: referral_progressCreateManyUsersInputEnvelope
    connect?: referral_progressWhereUniqueInput | referral_progressWhereUniqueInput[]
  }

  export type walletsCreateNestedManyWithoutUsersInput = {
    create?: XOR<walletsCreateWithoutUsersInput, walletsUncheckedCreateWithoutUsersInput> | walletsCreateWithoutUsersInput[] | walletsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: walletsCreateOrConnectWithoutUsersInput | walletsCreateOrConnectWithoutUsersInput[]
    createMany?: walletsCreateManyUsersInputEnvelope
    connect?: walletsWhereUniqueInput | walletsWhereUniqueInput[]
  }

  export type withdrawalsCreateNestedManyWithoutUsersInput = {
    create?: XOR<withdrawalsCreateWithoutUsersInput, withdrawalsUncheckedCreateWithoutUsersInput> | withdrawalsCreateWithoutUsersInput[] | withdrawalsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: withdrawalsCreateOrConnectWithoutUsersInput | withdrawalsCreateOrConnectWithoutUsersInput[]
    createMany?: withdrawalsCreateManyUsersInputEnvelope
    connect?: withdrawalsWhereUniqueInput | withdrawalsWhereUniqueInput[]
  }

  export type claim_coinsUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<claim_coinsCreateWithoutUsersInput, claim_coinsUncheckedCreateWithoutUsersInput> | claim_coinsCreateWithoutUsersInput[] | claim_coinsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: claim_coinsCreateOrConnectWithoutUsersInput | claim_coinsCreateOrConnectWithoutUsersInput[]
    createMany?: claim_coinsCreateManyUsersInputEnvelope
    connect?: claim_coinsWhereUniqueInput | claim_coinsWhereUniqueInput[]
  }

  export type depositsUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<depositsCreateWithoutUsersInput, depositsUncheckedCreateWithoutUsersInput> | depositsCreateWithoutUsersInput[] | depositsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: depositsCreateOrConnectWithoutUsersInput | depositsCreateOrConnectWithoutUsersInput[]
    createMany?: depositsCreateManyUsersInputEnvelope
    connect?: depositsWhereUniqueInput | depositsWhereUniqueInput[]
  }

  export type earn_coinsUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<earn_coinsCreateWithoutUsersInput, earn_coinsUncheckedCreateWithoutUsersInput> | earn_coinsCreateWithoutUsersInput[] | earn_coinsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: earn_coinsCreateOrConnectWithoutUsersInput | earn_coinsCreateOrConnectWithoutUsersInput[]
    createMany?: earn_coinsCreateManyUsersInputEnvelope
    connect?: earn_coinsWhereUniqueInput | earn_coinsWhereUniqueInput[]
  }

  export type mine_coinsUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<mine_coinsCreateWithoutUsersInput, mine_coinsUncheckedCreateWithoutUsersInput> | mine_coinsCreateWithoutUsersInput[] | mine_coinsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: mine_coinsCreateOrConnectWithoutUsersInput | mine_coinsCreateOrConnectWithoutUsersInput[]
    createMany?: mine_coinsCreateManyUsersInputEnvelope
    connect?: mine_coinsWhereUniqueInput | mine_coinsWhereUniqueInput[]
  }

  export type referral_progressUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<referral_progressCreateWithoutUsersInput, referral_progressUncheckedCreateWithoutUsersInput> | referral_progressCreateWithoutUsersInput[] | referral_progressUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: referral_progressCreateOrConnectWithoutUsersInput | referral_progressCreateOrConnectWithoutUsersInput[]
    createMany?: referral_progressCreateManyUsersInputEnvelope
    connect?: referral_progressWhereUniqueInput | referral_progressWhereUniqueInput[]
  }

  export type walletsUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<walletsCreateWithoutUsersInput, walletsUncheckedCreateWithoutUsersInput> | walletsCreateWithoutUsersInput[] | walletsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: walletsCreateOrConnectWithoutUsersInput | walletsCreateOrConnectWithoutUsersInput[]
    createMany?: walletsCreateManyUsersInputEnvelope
    connect?: walletsWhereUniqueInput | walletsWhereUniqueInput[]
  }

  export type withdrawalsUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<withdrawalsCreateWithoutUsersInput, withdrawalsUncheckedCreateWithoutUsersInput> | withdrawalsCreateWithoutUsersInput[] | withdrawalsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: withdrawalsCreateOrConnectWithoutUsersInput | withdrawalsCreateOrConnectWithoutUsersInput[]
    createMany?: withdrawalsCreateManyUsersInputEnvelope
    connect?: withdrawalsWhereUniqueInput | withdrawalsWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type claim_coinsUpdateManyWithoutUsersNestedInput = {
    create?: XOR<claim_coinsCreateWithoutUsersInput, claim_coinsUncheckedCreateWithoutUsersInput> | claim_coinsCreateWithoutUsersInput[] | claim_coinsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: claim_coinsCreateOrConnectWithoutUsersInput | claim_coinsCreateOrConnectWithoutUsersInput[]
    upsert?: claim_coinsUpsertWithWhereUniqueWithoutUsersInput | claim_coinsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: claim_coinsCreateManyUsersInputEnvelope
    set?: claim_coinsWhereUniqueInput | claim_coinsWhereUniqueInput[]
    disconnect?: claim_coinsWhereUniqueInput | claim_coinsWhereUniqueInput[]
    delete?: claim_coinsWhereUniqueInput | claim_coinsWhereUniqueInput[]
    connect?: claim_coinsWhereUniqueInput | claim_coinsWhereUniqueInput[]
    update?: claim_coinsUpdateWithWhereUniqueWithoutUsersInput | claim_coinsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: claim_coinsUpdateManyWithWhereWithoutUsersInput | claim_coinsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: claim_coinsScalarWhereInput | claim_coinsScalarWhereInput[]
  }

  export type depositsUpdateManyWithoutUsersNestedInput = {
    create?: XOR<depositsCreateWithoutUsersInput, depositsUncheckedCreateWithoutUsersInput> | depositsCreateWithoutUsersInput[] | depositsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: depositsCreateOrConnectWithoutUsersInput | depositsCreateOrConnectWithoutUsersInput[]
    upsert?: depositsUpsertWithWhereUniqueWithoutUsersInput | depositsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: depositsCreateManyUsersInputEnvelope
    set?: depositsWhereUniqueInput | depositsWhereUniqueInput[]
    disconnect?: depositsWhereUniqueInput | depositsWhereUniqueInput[]
    delete?: depositsWhereUniqueInput | depositsWhereUniqueInput[]
    connect?: depositsWhereUniqueInput | depositsWhereUniqueInput[]
    update?: depositsUpdateWithWhereUniqueWithoutUsersInput | depositsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: depositsUpdateManyWithWhereWithoutUsersInput | depositsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: depositsScalarWhereInput | depositsScalarWhereInput[]
  }

  export type earn_coinsUpdateManyWithoutUsersNestedInput = {
    create?: XOR<earn_coinsCreateWithoutUsersInput, earn_coinsUncheckedCreateWithoutUsersInput> | earn_coinsCreateWithoutUsersInput[] | earn_coinsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: earn_coinsCreateOrConnectWithoutUsersInput | earn_coinsCreateOrConnectWithoutUsersInput[]
    upsert?: earn_coinsUpsertWithWhereUniqueWithoutUsersInput | earn_coinsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: earn_coinsCreateManyUsersInputEnvelope
    set?: earn_coinsWhereUniqueInput | earn_coinsWhereUniqueInput[]
    disconnect?: earn_coinsWhereUniqueInput | earn_coinsWhereUniqueInput[]
    delete?: earn_coinsWhereUniqueInput | earn_coinsWhereUniqueInput[]
    connect?: earn_coinsWhereUniqueInput | earn_coinsWhereUniqueInput[]
    update?: earn_coinsUpdateWithWhereUniqueWithoutUsersInput | earn_coinsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: earn_coinsUpdateManyWithWhereWithoutUsersInput | earn_coinsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: earn_coinsScalarWhereInput | earn_coinsScalarWhereInput[]
  }

  export type mine_coinsUpdateManyWithoutUsersNestedInput = {
    create?: XOR<mine_coinsCreateWithoutUsersInput, mine_coinsUncheckedCreateWithoutUsersInput> | mine_coinsCreateWithoutUsersInput[] | mine_coinsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: mine_coinsCreateOrConnectWithoutUsersInput | mine_coinsCreateOrConnectWithoutUsersInput[]
    upsert?: mine_coinsUpsertWithWhereUniqueWithoutUsersInput | mine_coinsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: mine_coinsCreateManyUsersInputEnvelope
    set?: mine_coinsWhereUniqueInput | mine_coinsWhereUniqueInput[]
    disconnect?: mine_coinsWhereUniqueInput | mine_coinsWhereUniqueInput[]
    delete?: mine_coinsWhereUniqueInput | mine_coinsWhereUniqueInput[]
    connect?: mine_coinsWhereUniqueInput | mine_coinsWhereUniqueInput[]
    update?: mine_coinsUpdateWithWhereUniqueWithoutUsersInput | mine_coinsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: mine_coinsUpdateManyWithWhereWithoutUsersInput | mine_coinsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: mine_coinsScalarWhereInput | mine_coinsScalarWhereInput[]
  }

  export type referral_progressUpdateManyWithoutUsersNestedInput = {
    create?: XOR<referral_progressCreateWithoutUsersInput, referral_progressUncheckedCreateWithoutUsersInput> | referral_progressCreateWithoutUsersInput[] | referral_progressUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: referral_progressCreateOrConnectWithoutUsersInput | referral_progressCreateOrConnectWithoutUsersInput[]
    upsert?: referral_progressUpsertWithWhereUniqueWithoutUsersInput | referral_progressUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: referral_progressCreateManyUsersInputEnvelope
    set?: referral_progressWhereUniqueInput | referral_progressWhereUniqueInput[]
    disconnect?: referral_progressWhereUniqueInput | referral_progressWhereUniqueInput[]
    delete?: referral_progressWhereUniqueInput | referral_progressWhereUniqueInput[]
    connect?: referral_progressWhereUniqueInput | referral_progressWhereUniqueInput[]
    update?: referral_progressUpdateWithWhereUniqueWithoutUsersInput | referral_progressUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: referral_progressUpdateManyWithWhereWithoutUsersInput | referral_progressUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: referral_progressScalarWhereInput | referral_progressScalarWhereInput[]
  }

  export type walletsUpdateManyWithoutUsersNestedInput = {
    create?: XOR<walletsCreateWithoutUsersInput, walletsUncheckedCreateWithoutUsersInput> | walletsCreateWithoutUsersInput[] | walletsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: walletsCreateOrConnectWithoutUsersInput | walletsCreateOrConnectWithoutUsersInput[]
    upsert?: walletsUpsertWithWhereUniqueWithoutUsersInput | walletsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: walletsCreateManyUsersInputEnvelope
    set?: walletsWhereUniqueInput | walletsWhereUniqueInput[]
    disconnect?: walletsWhereUniqueInput | walletsWhereUniqueInput[]
    delete?: walletsWhereUniqueInput | walletsWhereUniqueInput[]
    connect?: walletsWhereUniqueInput | walletsWhereUniqueInput[]
    update?: walletsUpdateWithWhereUniqueWithoutUsersInput | walletsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: walletsUpdateManyWithWhereWithoutUsersInput | walletsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: walletsScalarWhereInput | walletsScalarWhereInput[]
  }

  export type withdrawalsUpdateManyWithoutUsersNestedInput = {
    create?: XOR<withdrawalsCreateWithoutUsersInput, withdrawalsUncheckedCreateWithoutUsersInput> | withdrawalsCreateWithoutUsersInput[] | withdrawalsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: withdrawalsCreateOrConnectWithoutUsersInput | withdrawalsCreateOrConnectWithoutUsersInput[]
    upsert?: withdrawalsUpsertWithWhereUniqueWithoutUsersInput | withdrawalsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: withdrawalsCreateManyUsersInputEnvelope
    set?: withdrawalsWhereUniqueInput | withdrawalsWhereUniqueInput[]
    disconnect?: withdrawalsWhereUniqueInput | withdrawalsWhereUniqueInput[]
    delete?: withdrawalsWhereUniqueInput | withdrawalsWhereUniqueInput[]
    connect?: withdrawalsWhereUniqueInput | withdrawalsWhereUniqueInput[]
    update?: withdrawalsUpdateWithWhereUniqueWithoutUsersInput | withdrawalsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: withdrawalsUpdateManyWithWhereWithoutUsersInput | withdrawalsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: withdrawalsScalarWhereInput | withdrawalsScalarWhereInput[]
  }

  export type claim_coinsUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<claim_coinsCreateWithoutUsersInput, claim_coinsUncheckedCreateWithoutUsersInput> | claim_coinsCreateWithoutUsersInput[] | claim_coinsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: claim_coinsCreateOrConnectWithoutUsersInput | claim_coinsCreateOrConnectWithoutUsersInput[]
    upsert?: claim_coinsUpsertWithWhereUniqueWithoutUsersInput | claim_coinsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: claim_coinsCreateManyUsersInputEnvelope
    set?: claim_coinsWhereUniqueInput | claim_coinsWhereUniqueInput[]
    disconnect?: claim_coinsWhereUniqueInput | claim_coinsWhereUniqueInput[]
    delete?: claim_coinsWhereUniqueInput | claim_coinsWhereUniqueInput[]
    connect?: claim_coinsWhereUniqueInput | claim_coinsWhereUniqueInput[]
    update?: claim_coinsUpdateWithWhereUniqueWithoutUsersInput | claim_coinsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: claim_coinsUpdateManyWithWhereWithoutUsersInput | claim_coinsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: claim_coinsScalarWhereInput | claim_coinsScalarWhereInput[]
  }

  export type depositsUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<depositsCreateWithoutUsersInput, depositsUncheckedCreateWithoutUsersInput> | depositsCreateWithoutUsersInput[] | depositsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: depositsCreateOrConnectWithoutUsersInput | depositsCreateOrConnectWithoutUsersInput[]
    upsert?: depositsUpsertWithWhereUniqueWithoutUsersInput | depositsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: depositsCreateManyUsersInputEnvelope
    set?: depositsWhereUniqueInput | depositsWhereUniqueInput[]
    disconnect?: depositsWhereUniqueInput | depositsWhereUniqueInput[]
    delete?: depositsWhereUniqueInput | depositsWhereUniqueInput[]
    connect?: depositsWhereUniqueInput | depositsWhereUniqueInput[]
    update?: depositsUpdateWithWhereUniqueWithoutUsersInput | depositsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: depositsUpdateManyWithWhereWithoutUsersInput | depositsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: depositsScalarWhereInput | depositsScalarWhereInput[]
  }

  export type earn_coinsUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<earn_coinsCreateWithoutUsersInput, earn_coinsUncheckedCreateWithoutUsersInput> | earn_coinsCreateWithoutUsersInput[] | earn_coinsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: earn_coinsCreateOrConnectWithoutUsersInput | earn_coinsCreateOrConnectWithoutUsersInput[]
    upsert?: earn_coinsUpsertWithWhereUniqueWithoutUsersInput | earn_coinsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: earn_coinsCreateManyUsersInputEnvelope
    set?: earn_coinsWhereUniqueInput | earn_coinsWhereUniqueInput[]
    disconnect?: earn_coinsWhereUniqueInput | earn_coinsWhereUniqueInput[]
    delete?: earn_coinsWhereUniqueInput | earn_coinsWhereUniqueInput[]
    connect?: earn_coinsWhereUniqueInput | earn_coinsWhereUniqueInput[]
    update?: earn_coinsUpdateWithWhereUniqueWithoutUsersInput | earn_coinsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: earn_coinsUpdateManyWithWhereWithoutUsersInput | earn_coinsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: earn_coinsScalarWhereInput | earn_coinsScalarWhereInput[]
  }

  export type mine_coinsUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<mine_coinsCreateWithoutUsersInput, mine_coinsUncheckedCreateWithoutUsersInput> | mine_coinsCreateWithoutUsersInput[] | mine_coinsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: mine_coinsCreateOrConnectWithoutUsersInput | mine_coinsCreateOrConnectWithoutUsersInput[]
    upsert?: mine_coinsUpsertWithWhereUniqueWithoutUsersInput | mine_coinsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: mine_coinsCreateManyUsersInputEnvelope
    set?: mine_coinsWhereUniqueInput | mine_coinsWhereUniqueInput[]
    disconnect?: mine_coinsWhereUniqueInput | mine_coinsWhereUniqueInput[]
    delete?: mine_coinsWhereUniqueInput | mine_coinsWhereUniqueInput[]
    connect?: mine_coinsWhereUniqueInput | mine_coinsWhereUniqueInput[]
    update?: mine_coinsUpdateWithWhereUniqueWithoutUsersInput | mine_coinsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: mine_coinsUpdateManyWithWhereWithoutUsersInput | mine_coinsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: mine_coinsScalarWhereInput | mine_coinsScalarWhereInput[]
  }

  export type referral_progressUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<referral_progressCreateWithoutUsersInput, referral_progressUncheckedCreateWithoutUsersInput> | referral_progressCreateWithoutUsersInput[] | referral_progressUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: referral_progressCreateOrConnectWithoutUsersInput | referral_progressCreateOrConnectWithoutUsersInput[]
    upsert?: referral_progressUpsertWithWhereUniqueWithoutUsersInput | referral_progressUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: referral_progressCreateManyUsersInputEnvelope
    set?: referral_progressWhereUniqueInput | referral_progressWhereUniqueInput[]
    disconnect?: referral_progressWhereUniqueInput | referral_progressWhereUniqueInput[]
    delete?: referral_progressWhereUniqueInput | referral_progressWhereUniqueInput[]
    connect?: referral_progressWhereUniqueInput | referral_progressWhereUniqueInput[]
    update?: referral_progressUpdateWithWhereUniqueWithoutUsersInput | referral_progressUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: referral_progressUpdateManyWithWhereWithoutUsersInput | referral_progressUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: referral_progressScalarWhereInput | referral_progressScalarWhereInput[]
  }

  export type walletsUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<walletsCreateWithoutUsersInput, walletsUncheckedCreateWithoutUsersInput> | walletsCreateWithoutUsersInput[] | walletsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: walletsCreateOrConnectWithoutUsersInput | walletsCreateOrConnectWithoutUsersInput[]
    upsert?: walletsUpsertWithWhereUniqueWithoutUsersInput | walletsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: walletsCreateManyUsersInputEnvelope
    set?: walletsWhereUniqueInput | walletsWhereUniqueInput[]
    disconnect?: walletsWhereUniqueInput | walletsWhereUniqueInput[]
    delete?: walletsWhereUniqueInput | walletsWhereUniqueInput[]
    connect?: walletsWhereUniqueInput | walletsWhereUniqueInput[]
    update?: walletsUpdateWithWhereUniqueWithoutUsersInput | walletsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: walletsUpdateManyWithWhereWithoutUsersInput | walletsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: walletsScalarWhereInput | walletsScalarWhereInput[]
  }

  export type withdrawalsUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<withdrawalsCreateWithoutUsersInput, withdrawalsUncheckedCreateWithoutUsersInput> | withdrawalsCreateWithoutUsersInput[] | withdrawalsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: withdrawalsCreateOrConnectWithoutUsersInput | withdrawalsCreateOrConnectWithoutUsersInput[]
    upsert?: withdrawalsUpsertWithWhereUniqueWithoutUsersInput | withdrawalsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: withdrawalsCreateManyUsersInputEnvelope
    set?: withdrawalsWhereUniqueInput | withdrawalsWhereUniqueInput[]
    disconnect?: withdrawalsWhereUniqueInput | withdrawalsWhereUniqueInput[]
    delete?: withdrawalsWhereUniqueInput | withdrawalsWhereUniqueInput[]
    connect?: withdrawalsWhereUniqueInput | withdrawalsWhereUniqueInput[]
    update?: withdrawalsUpdateWithWhereUniqueWithoutUsersInput | withdrawalsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: withdrawalsUpdateManyWithWhereWithoutUsersInput | withdrawalsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: withdrawalsScalarWhereInput | withdrawalsScalarWhereInput[]
  }

  export type usersCreateNestedOneWithoutWalletsInput = {
    create?: XOR<usersCreateWithoutWalletsInput, usersUncheckedCreateWithoutWalletsInput>
    connectOrCreate?: usersCreateOrConnectWithoutWalletsInput
    connect?: usersWhereUniqueInput
  }

  export type usersUpdateOneRequiredWithoutWalletsNestedInput = {
    create?: XOR<usersCreateWithoutWalletsInput, usersUncheckedCreateWithoutWalletsInput>
    connectOrCreate?: usersCreateOrConnectWithoutWalletsInput
    upsert?: usersUpsertWithoutWalletsInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutWalletsInput, usersUpdateWithoutWalletsInput>, usersUncheckedUpdateWithoutWalletsInput>
  }

  export type usersCreateNestedOneWithoutWithdrawalsInput = {
    create?: XOR<usersCreateWithoutWithdrawalsInput, usersUncheckedCreateWithoutWithdrawalsInput>
    connectOrCreate?: usersCreateOrConnectWithoutWithdrawalsInput
    connect?: usersWhereUniqueInput
  }

  export type usersUpdateOneRequiredWithoutWithdrawalsNestedInput = {
    create?: XOR<usersCreateWithoutWithdrawalsInput, usersUncheckedCreateWithoutWithdrawalsInput>
    connectOrCreate?: usersCreateOrConnectWithoutWithdrawalsInput
    upsert?: usersUpsertWithoutWithdrawalsInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutWithdrawalsInput, usersUpdateWithoutWithdrawalsInput>, usersUncheckedUpdateWithoutWithdrawalsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
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

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
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

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
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

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type usersCreateWithoutClaim_coinsInput = {
    id: string
    username: string
    uid: string
    email: string
    number: string
    phone?: string | null
    mail_otp?: string | null
    password: string
    plain_password?: string | null
    status?: boolean | null
    amount?: Decimal | DecimalJsLike | number | string | null
    remaining_balance?: Decimal | DecimalJsLike | number | string | null
    deposit_amount?: Decimal | DecimalJsLike | number | string | null
    withdrawal_amount?: Decimal | DecimalJsLike | number | string | null
    referral_code?: string | null
    referred_by?: string | null
    image?: string | null
    role?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deposits?: depositsCreateNestedManyWithoutUsersInput
    earn_coins?: earn_coinsCreateNestedManyWithoutUsersInput
    mine_coins?: mine_coinsCreateNestedManyWithoutUsersInput
    referral_progress?: referral_progressCreateNestedManyWithoutUsersInput
    wallets?: walletsCreateNestedManyWithoutUsersInput
    withdrawals?: withdrawalsCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutClaim_coinsInput = {
    id: string
    username: string
    uid: string
    email: string
    number: string
    phone?: string | null
    mail_otp?: string | null
    password: string
    plain_password?: string | null
    status?: boolean | null
    amount?: Decimal | DecimalJsLike | number | string | null
    remaining_balance?: Decimal | DecimalJsLike | number | string | null
    deposit_amount?: Decimal | DecimalJsLike | number | string | null
    withdrawal_amount?: Decimal | DecimalJsLike | number | string | null
    referral_code?: string | null
    referred_by?: string | null
    image?: string | null
    role?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deposits?: depositsUncheckedCreateNestedManyWithoutUsersInput
    earn_coins?: earn_coinsUncheckedCreateNestedManyWithoutUsersInput
    mine_coins?: mine_coinsUncheckedCreateNestedManyWithoutUsersInput
    referral_progress?: referral_progressUncheckedCreateNestedManyWithoutUsersInput
    wallets?: walletsUncheckedCreateNestedManyWithoutUsersInput
    withdrawals?: withdrawalsUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutClaim_coinsInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutClaim_coinsInput, usersUncheckedCreateWithoutClaim_coinsInput>
  }

  export type usersUpsertWithoutClaim_coinsInput = {
    update: XOR<usersUpdateWithoutClaim_coinsInput, usersUncheckedUpdateWithoutClaim_coinsInput>
    create: XOR<usersCreateWithoutClaim_coinsInput, usersUncheckedCreateWithoutClaim_coinsInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutClaim_coinsInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutClaim_coinsInput, usersUncheckedUpdateWithoutClaim_coinsInput>
  }

  export type usersUpdateWithoutClaim_coinsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    uid?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    mail_otp?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    plain_password?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableBoolFieldUpdateOperationsInput | boolean | null
    amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    remaining_balance?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    deposit_amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    withdrawal_amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    referral_code?: NullableStringFieldUpdateOperationsInput | string | null
    referred_by?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deposits?: depositsUpdateManyWithoutUsersNestedInput
    earn_coins?: earn_coinsUpdateManyWithoutUsersNestedInput
    mine_coins?: mine_coinsUpdateManyWithoutUsersNestedInput
    referral_progress?: referral_progressUpdateManyWithoutUsersNestedInput
    wallets?: walletsUpdateManyWithoutUsersNestedInput
    withdrawals?: withdrawalsUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutClaim_coinsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    uid?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    mail_otp?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    plain_password?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableBoolFieldUpdateOperationsInput | boolean | null
    amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    remaining_balance?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    deposit_amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    withdrawal_amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    referral_code?: NullableStringFieldUpdateOperationsInput | string | null
    referred_by?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deposits?: depositsUncheckedUpdateManyWithoutUsersNestedInput
    earn_coins?: earn_coinsUncheckedUpdateManyWithoutUsersNestedInput
    mine_coins?: mine_coinsUncheckedUpdateManyWithoutUsersNestedInput
    referral_progress?: referral_progressUncheckedUpdateManyWithoutUsersNestedInput
    wallets?: walletsUncheckedUpdateManyWithoutUsersNestedInput
    withdrawals?: withdrawalsUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type usersCreateWithoutDepositsInput = {
    id: string
    username: string
    uid: string
    email: string
    number: string
    phone?: string | null
    mail_otp?: string | null
    password: string
    plain_password?: string | null
    status?: boolean | null
    amount?: Decimal | DecimalJsLike | number | string | null
    remaining_balance?: Decimal | DecimalJsLike | number | string | null
    deposit_amount?: Decimal | DecimalJsLike | number | string | null
    withdrawal_amount?: Decimal | DecimalJsLike | number | string | null
    referral_code?: string | null
    referred_by?: string | null
    image?: string | null
    role?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    claim_coins?: claim_coinsCreateNestedManyWithoutUsersInput
    earn_coins?: earn_coinsCreateNestedManyWithoutUsersInput
    mine_coins?: mine_coinsCreateNestedManyWithoutUsersInput
    referral_progress?: referral_progressCreateNestedManyWithoutUsersInput
    wallets?: walletsCreateNestedManyWithoutUsersInput
    withdrawals?: withdrawalsCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutDepositsInput = {
    id: string
    username: string
    uid: string
    email: string
    number: string
    phone?: string | null
    mail_otp?: string | null
    password: string
    plain_password?: string | null
    status?: boolean | null
    amount?: Decimal | DecimalJsLike | number | string | null
    remaining_balance?: Decimal | DecimalJsLike | number | string | null
    deposit_amount?: Decimal | DecimalJsLike | number | string | null
    withdrawal_amount?: Decimal | DecimalJsLike | number | string | null
    referral_code?: string | null
    referred_by?: string | null
    image?: string | null
    role?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    claim_coins?: claim_coinsUncheckedCreateNestedManyWithoutUsersInput
    earn_coins?: earn_coinsUncheckedCreateNestedManyWithoutUsersInput
    mine_coins?: mine_coinsUncheckedCreateNestedManyWithoutUsersInput
    referral_progress?: referral_progressUncheckedCreateNestedManyWithoutUsersInput
    wallets?: walletsUncheckedCreateNestedManyWithoutUsersInput
    withdrawals?: withdrawalsUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutDepositsInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutDepositsInput, usersUncheckedCreateWithoutDepositsInput>
  }

  export type usersUpsertWithoutDepositsInput = {
    update: XOR<usersUpdateWithoutDepositsInput, usersUncheckedUpdateWithoutDepositsInput>
    create: XOR<usersCreateWithoutDepositsInput, usersUncheckedCreateWithoutDepositsInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutDepositsInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutDepositsInput, usersUncheckedUpdateWithoutDepositsInput>
  }

  export type usersUpdateWithoutDepositsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    uid?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    mail_otp?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    plain_password?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableBoolFieldUpdateOperationsInput | boolean | null
    amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    remaining_balance?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    deposit_amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    withdrawal_amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    referral_code?: NullableStringFieldUpdateOperationsInput | string | null
    referred_by?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    claim_coins?: claim_coinsUpdateManyWithoutUsersNestedInput
    earn_coins?: earn_coinsUpdateManyWithoutUsersNestedInput
    mine_coins?: mine_coinsUpdateManyWithoutUsersNestedInput
    referral_progress?: referral_progressUpdateManyWithoutUsersNestedInput
    wallets?: walletsUpdateManyWithoutUsersNestedInput
    withdrawals?: withdrawalsUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutDepositsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    uid?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    mail_otp?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    plain_password?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableBoolFieldUpdateOperationsInput | boolean | null
    amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    remaining_balance?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    deposit_amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    withdrawal_amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    referral_code?: NullableStringFieldUpdateOperationsInput | string | null
    referred_by?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    claim_coins?: claim_coinsUncheckedUpdateManyWithoutUsersNestedInput
    earn_coins?: earn_coinsUncheckedUpdateManyWithoutUsersNestedInput
    mine_coins?: mine_coinsUncheckedUpdateManyWithoutUsersNestedInput
    referral_progress?: referral_progressUncheckedUpdateManyWithoutUsersNestedInput
    wallets?: walletsUncheckedUpdateManyWithoutUsersNestedInput
    withdrawals?: withdrawalsUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type usersCreateWithoutEarn_coinsInput = {
    id: string
    username: string
    uid: string
    email: string
    number: string
    phone?: string | null
    mail_otp?: string | null
    password: string
    plain_password?: string | null
    status?: boolean | null
    amount?: Decimal | DecimalJsLike | number | string | null
    remaining_balance?: Decimal | DecimalJsLike | number | string | null
    deposit_amount?: Decimal | DecimalJsLike | number | string | null
    withdrawal_amount?: Decimal | DecimalJsLike | number | string | null
    referral_code?: string | null
    referred_by?: string | null
    image?: string | null
    role?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    claim_coins?: claim_coinsCreateNestedManyWithoutUsersInput
    deposits?: depositsCreateNestedManyWithoutUsersInput
    mine_coins?: mine_coinsCreateNestedManyWithoutUsersInput
    referral_progress?: referral_progressCreateNestedManyWithoutUsersInput
    wallets?: walletsCreateNestedManyWithoutUsersInput
    withdrawals?: withdrawalsCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutEarn_coinsInput = {
    id: string
    username: string
    uid: string
    email: string
    number: string
    phone?: string | null
    mail_otp?: string | null
    password: string
    plain_password?: string | null
    status?: boolean | null
    amount?: Decimal | DecimalJsLike | number | string | null
    remaining_balance?: Decimal | DecimalJsLike | number | string | null
    deposit_amount?: Decimal | DecimalJsLike | number | string | null
    withdrawal_amount?: Decimal | DecimalJsLike | number | string | null
    referral_code?: string | null
    referred_by?: string | null
    image?: string | null
    role?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    claim_coins?: claim_coinsUncheckedCreateNestedManyWithoutUsersInput
    deposits?: depositsUncheckedCreateNestedManyWithoutUsersInput
    mine_coins?: mine_coinsUncheckedCreateNestedManyWithoutUsersInput
    referral_progress?: referral_progressUncheckedCreateNestedManyWithoutUsersInput
    wallets?: walletsUncheckedCreateNestedManyWithoutUsersInput
    withdrawals?: withdrawalsUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutEarn_coinsInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutEarn_coinsInput, usersUncheckedCreateWithoutEarn_coinsInput>
  }

  export type usersUpsertWithoutEarn_coinsInput = {
    update: XOR<usersUpdateWithoutEarn_coinsInput, usersUncheckedUpdateWithoutEarn_coinsInput>
    create: XOR<usersCreateWithoutEarn_coinsInput, usersUncheckedCreateWithoutEarn_coinsInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutEarn_coinsInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutEarn_coinsInput, usersUncheckedUpdateWithoutEarn_coinsInput>
  }

  export type usersUpdateWithoutEarn_coinsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    uid?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    mail_otp?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    plain_password?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableBoolFieldUpdateOperationsInput | boolean | null
    amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    remaining_balance?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    deposit_amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    withdrawal_amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    referral_code?: NullableStringFieldUpdateOperationsInput | string | null
    referred_by?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    claim_coins?: claim_coinsUpdateManyWithoutUsersNestedInput
    deposits?: depositsUpdateManyWithoutUsersNestedInput
    mine_coins?: mine_coinsUpdateManyWithoutUsersNestedInput
    referral_progress?: referral_progressUpdateManyWithoutUsersNestedInput
    wallets?: walletsUpdateManyWithoutUsersNestedInput
    withdrawals?: withdrawalsUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutEarn_coinsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    uid?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    mail_otp?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    plain_password?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableBoolFieldUpdateOperationsInput | boolean | null
    amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    remaining_balance?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    deposit_amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    withdrawal_amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    referral_code?: NullableStringFieldUpdateOperationsInput | string | null
    referred_by?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    claim_coins?: claim_coinsUncheckedUpdateManyWithoutUsersNestedInput
    deposits?: depositsUncheckedUpdateManyWithoutUsersNestedInput
    mine_coins?: mine_coinsUncheckedUpdateManyWithoutUsersNestedInput
    referral_progress?: referral_progressUncheckedUpdateManyWithoutUsersNestedInput
    wallets?: walletsUncheckedUpdateManyWithoutUsersNestedInput
    withdrawals?: withdrawalsUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type usersCreateWithoutMine_coinsInput = {
    id: string
    username: string
    uid: string
    email: string
    number: string
    phone?: string | null
    mail_otp?: string | null
    password: string
    plain_password?: string | null
    status?: boolean | null
    amount?: Decimal | DecimalJsLike | number | string | null
    remaining_balance?: Decimal | DecimalJsLike | number | string | null
    deposit_amount?: Decimal | DecimalJsLike | number | string | null
    withdrawal_amount?: Decimal | DecimalJsLike | number | string | null
    referral_code?: string | null
    referred_by?: string | null
    image?: string | null
    role?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    claim_coins?: claim_coinsCreateNestedManyWithoutUsersInput
    deposits?: depositsCreateNestedManyWithoutUsersInput
    earn_coins?: earn_coinsCreateNestedManyWithoutUsersInput
    referral_progress?: referral_progressCreateNestedManyWithoutUsersInput
    wallets?: walletsCreateNestedManyWithoutUsersInput
    withdrawals?: withdrawalsCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutMine_coinsInput = {
    id: string
    username: string
    uid: string
    email: string
    number: string
    phone?: string | null
    mail_otp?: string | null
    password: string
    plain_password?: string | null
    status?: boolean | null
    amount?: Decimal | DecimalJsLike | number | string | null
    remaining_balance?: Decimal | DecimalJsLike | number | string | null
    deposit_amount?: Decimal | DecimalJsLike | number | string | null
    withdrawal_amount?: Decimal | DecimalJsLike | number | string | null
    referral_code?: string | null
    referred_by?: string | null
    image?: string | null
    role?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    claim_coins?: claim_coinsUncheckedCreateNestedManyWithoutUsersInput
    deposits?: depositsUncheckedCreateNestedManyWithoutUsersInput
    earn_coins?: earn_coinsUncheckedCreateNestedManyWithoutUsersInput
    referral_progress?: referral_progressUncheckedCreateNestedManyWithoutUsersInput
    wallets?: walletsUncheckedCreateNestedManyWithoutUsersInput
    withdrawals?: withdrawalsUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutMine_coinsInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutMine_coinsInput, usersUncheckedCreateWithoutMine_coinsInput>
  }

  export type usersUpsertWithoutMine_coinsInput = {
    update: XOR<usersUpdateWithoutMine_coinsInput, usersUncheckedUpdateWithoutMine_coinsInput>
    create: XOR<usersCreateWithoutMine_coinsInput, usersUncheckedCreateWithoutMine_coinsInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutMine_coinsInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutMine_coinsInput, usersUncheckedUpdateWithoutMine_coinsInput>
  }

  export type usersUpdateWithoutMine_coinsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    uid?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    mail_otp?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    plain_password?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableBoolFieldUpdateOperationsInput | boolean | null
    amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    remaining_balance?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    deposit_amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    withdrawal_amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    referral_code?: NullableStringFieldUpdateOperationsInput | string | null
    referred_by?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    claim_coins?: claim_coinsUpdateManyWithoutUsersNestedInput
    deposits?: depositsUpdateManyWithoutUsersNestedInput
    earn_coins?: earn_coinsUpdateManyWithoutUsersNestedInput
    referral_progress?: referral_progressUpdateManyWithoutUsersNestedInput
    wallets?: walletsUpdateManyWithoutUsersNestedInput
    withdrawals?: withdrawalsUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutMine_coinsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    uid?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    mail_otp?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    plain_password?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableBoolFieldUpdateOperationsInput | boolean | null
    amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    remaining_balance?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    deposit_amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    withdrawal_amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    referral_code?: NullableStringFieldUpdateOperationsInput | string | null
    referred_by?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    claim_coins?: claim_coinsUncheckedUpdateManyWithoutUsersNestedInput
    deposits?: depositsUncheckedUpdateManyWithoutUsersNestedInput
    earn_coins?: earn_coinsUncheckedUpdateManyWithoutUsersNestedInput
    referral_progress?: referral_progressUncheckedUpdateManyWithoutUsersNestedInput
    wallets?: walletsUncheckedUpdateManyWithoutUsersNestedInput
    withdrawals?: withdrawalsUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type usersCreateWithoutReferral_progressInput = {
    id: string
    username: string
    uid: string
    email: string
    number: string
    phone?: string | null
    mail_otp?: string | null
    password: string
    plain_password?: string | null
    status?: boolean | null
    amount?: Decimal | DecimalJsLike | number | string | null
    remaining_balance?: Decimal | DecimalJsLike | number | string | null
    deposit_amount?: Decimal | DecimalJsLike | number | string | null
    withdrawal_amount?: Decimal | DecimalJsLike | number | string | null
    referral_code?: string | null
    referred_by?: string | null
    image?: string | null
    role?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    claim_coins?: claim_coinsCreateNestedManyWithoutUsersInput
    deposits?: depositsCreateNestedManyWithoutUsersInput
    earn_coins?: earn_coinsCreateNestedManyWithoutUsersInput
    mine_coins?: mine_coinsCreateNestedManyWithoutUsersInput
    wallets?: walletsCreateNestedManyWithoutUsersInput
    withdrawals?: withdrawalsCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutReferral_progressInput = {
    id: string
    username: string
    uid: string
    email: string
    number: string
    phone?: string | null
    mail_otp?: string | null
    password: string
    plain_password?: string | null
    status?: boolean | null
    amount?: Decimal | DecimalJsLike | number | string | null
    remaining_balance?: Decimal | DecimalJsLike | number | string | null
    deposit_amount?: Decimal | DecimalJsLike | number | string | null
    withdrawal_amount?: Decimal | DecimalJsLike | number | string | null
    referral_code?: string | null
    referred_by?: string | null
    image?: string | null
    role?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    claim_coins?: claim_coinsUncheckedCreateNestedManyWithoutUsersInput
    deposits?: depositsUncheckedCreateNestedManyWithoutUsersInput
    earn_coins?: earn_coinsUncheckedCreateNestedManyWithoutUsersInput
    mine_coins?: mine_coinsUncheckedCreateNestedManyWithoutUsersInput
    wallets?: walletsUncheckedCreateNestedManyWithoutUsersInput
    withdrawals?: withdrawalsUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutReferral_progressInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutReferral_progressInput, usersUncheckedCreateWithoutReferral_progressInput>
  }

  export type usersUpsertWithoutReferral_progressInput = {
    update: XOR<usersUpdateWithoutReferral_progressInput, usersUncheckedUpdateWithoutReferral_progressInput>
    create: XOR<usersCreateWithoutReferral_progressInput, usersUncheckedCreateWithoutReferral_progressInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutReferral_progressInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutReferral_progressInput, usersUncheckedUpdateWithoutReferral_progressInput>
  }

  export type usersUpdateWithoutReferral_progressInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    uid?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    mail_otp?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    plain_password?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableBoolFieldUpdateOperationsInput | boolean | null
    amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    remaining_balance?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    deposit_amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    withdrawal_amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    referral_code?: NullableStringFieldUpdateOperationsInput | string | null
    referred_by?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    claim_coins?: claim_coinsUpdateManyWithoutUsersNestedInput
    deposits?: depositsUpdateManyWithoutUsersNestedInput
    earn_coins?: earn_coinsUpdateManyWithoutUsersNestedInput
    mine_coins?: mine_coinsUpdateManyWithoutUsersNestedInput
    wallets?: walletsUpdateManyWithoutUsersNestedInput
    withdrawals?: withdrawalsUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutReferral_progressInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    uid?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    mail_otp?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    plain_password?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableBoolFieldUpdateOperationsInput | boolean | null
    amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    remaining_balance?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    deposit_amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    withdrawal_amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    referral_code?: NullableStringFieldUpdateOperationsInput | string | null
    referred_by?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    claim_coins?: claim_coinsUncheckedUpdateManyWithoutUsersNestedInput
    deposits?: depositsUncheckedUpdateManyWithoutUsersNestedInput
    earn_coins?: earn_coinsUncheckedUpdateManyWithoutUsersNestedInput
    mine_coins?: mine_coinsUncheckedUpdateManyWithoutUsersNestedInput
    wallets?: walletsUncheckedUpdateManyWithoutUsersNestedInput
    withdrawals?: withdrawalsUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type claim_coinsCreateWithoutUsersInput = {
    id: string
    date?: Date | string | null
    amount: Decimal | DecimalJsLike | number | string
    status?: boolean | null
  }

  export type claim_coinsUncheckedCreateWithoutUsersInput = {
    id: string
    date?: Date | string | null
    amount: Decimal | DecimalJsLike | number | string
    status?: boolean | null
  }

  export type claim_coinsCreateOrConnectWithoutUsersInput = {
    where: claim_coinsWhereUniqueInput
    create: XOR<claim_coinsCreateWithoutUsersInput, claim_coinsUncheckedCreateWithoutUsersInput>
  }

  export type claim_coinsCreateManyUsersInputEnvelope = {
    data: claim_coinsCreateManyUsersInput | claim_coinsCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type depositsCreateWithoutUsersInput = {
    id: string
    transaction_id: string
    date?: Date | string | null
    amount: Decimal | DecimalJsLike | number | string
    address: string
    to_address: string
    trc_type: string
    status?: boolean | null
  }

  export type depositsUncheckedCreateWithoutUsersInput = {
    id: string
    transaction_id: string
    date?: Date | string | null
    amount: Decimal | DecimalJsLike | number | string
    address: string
    to_address: string
    trc_type: string
    status?: boolean | null
  }

  export type depositsCreateOrConnectWithoutUsersInput = {
    where: depositsWhereUniqueInput
    create: XOR<depositsCreateWithoutUsersInput, depositsUncheckedCreateWithoutUsersInput>
  }

  export type depositsCreateManyUsersInputEnvelope = {
    data: depositsCreateManyUsersInput | depositsCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type earn_coinsCreateWithoutUsersInput = {
    id: string
    date?: Date | string | null
    amount: Decimal | DecimalJsLike | number | string
    status?: boolean | null
  }

  export type earn_coinsUncheckedCreateWithoutUsersInput = {
    id: string
    date?: Date | string | null
    amount: Decimal | DecimalJsLike | number | string
    status?: boolean | null
  }

  export type earn_coinsCreateOrConnectWithoutUsersInput = {
    where: earn_coinsWhereUniqueInput
    create: XOR<earn_coinsCreateWithoutUsersInput, earn_coinsUncheckedCreateWithoutUsersInput>
  }

  export type earn_coinsCreateManyUsersInputEnvelope = {
    data: earn_coinsCreateManyUsersInput | earn_coinsCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type mine_coinsCreateWithoutUsersInput = {
    id: string
    is_start?: boolean | null
    date?: Date | string | null
    amount: Decimal | DecimalJsLike | number | string
    start_time?: Date | string | null
    status?: boolean | null
  }

  export type mine_coinsUncheckedCreateWithoutUsersInput = {
    id: string
    is_start?: boolean | null
    date?: Date | string | null
    amount: Decimal | DecimalJsLike | number | string
    start_time?: Date | string | null
    status?: boolean | null
  }

  export type mine_coinsCreateOrConnectWithoutUsersInput = {
    where: mine_coinsWhereUniqueInput
    create: XOR<mine_coinsCreateWithoutUsersInput, mine_coinsUncheckedCreateWithoutUsersInput>
  }

  export type mine_coinsCreateManyUsersInputEnvelope = {
    data: mine_coinsCreateManyUsersInput | mine_coinsCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type referral_progressCreateWithoutUsersInput = {
    id: string
    level: number
    referred_users?: referral_progressCreatereferred_usersInput | string[]
    unlocked?: boolean | null
    required_count: number
    unlocked_at?: Date | string | null
  }

  export type referral_progressUncheckedCreateWithoutUsersInput = {
    id: string
    level: number
    referred_users?: referral_progressCreatereferred_usersInput | string[]
    unlocked?: boolean | null
    required_count: number
    unlocked_at?: Date | string | null
  }

  export type referral_progressCreateOrConnectWithoutUsersInput = {
    where: referral_progressWhereUniqueInput
    create: XOR<referral_progressCreateWithoutUsersInput, referral_progressUncheckedCreateWithoutUsersInput>
  }

  export type referral_progressCreateManyUsersInputEnvelope = {
    data: referral_progressCreateManyUsersInput | referral_progressCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type walletsCreateWithoutUsersInput = {
    id: string
    private_key: string
    public_key: string
    type: string
    amount?: Decimal | DecimalJsLike | number | string | null
    status?: boolean | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type walletsUncheckedCreateWithoutUsersInput = {
    id: string
    private_key: string
    public_key: string
    type: string
    amount?: Decimal | DecimalJsLike | number | string | null
    status?: boolean | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type walletsCreateOrConnectWithoutUsersInput = {
    where: walletsWhereUniqueInput
    create: XOR<walletsCreateWithoutUsersInput, walletsUncheckedCreateWithoutUsersInput>
  }

  export type walletsCreateManyUsersInputEnvelope = {
    data: walletsCreateManyUsersInput | walletsCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type withdrawalsCreateWithoutUsersInput = {
    id: string
    date?: Date | string | null
    type: string
    amount: Decimal | DecimalJsLike | number | string
    address: string
    status?: boolean | null
    status_withdraw: string
    reason?: string | null
  }

  export type withdrawalsUncheckedCreateWithoutUsersInput = {
    id: string
    date?: Date | string | null
    type: string
    amount: Decimal | DecimalJsLike | number | string
    address: string
    status?: boolean | null
    status_withdraw: string
    reason?: string | null
  }

  export type withdrawalsCreateOrConnectWithoutUsersInput = {
    where: withdrawalsWhereUniqueInput
    create: XOR<withdrawalsCreateWithoutUsersInput, withdrawalsUncheckedCreateWithoutUsersInput>
  }

  export type withdrawalsCreateManyUsersInputEnvelope = {
    data: withdrawalsCreateManyUsersInput | withdrawalsCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type claim_coinsUpsertWithWhereUniqueWithoutUsersInput = {
    where: claim_coinsWhereUniqueInput
    update: XOR<claim_coinsUpdateWithoutUsersInput, claim_coinsUncheckedUpdateWithoutUsersInput>
    create: XOR<claim_coinsCreateWithoutUsersInput, claim_coinsUncheckedCreateWithoutUsersInput>
  }

  export type claim_coinsUpdateWithWhereUniqueWithoutUsersInput = {
    where: claim_coinsWhereUniqueInput
    data: XOR<claim_coinsUpdateWithoutUsersInput, claim_coinsUncheckedUpdateWithoutUsersInput>
  }

  export type claim_coinsUpdateManyWithWhereWithoutUsersInput = {
    where: claim_coinsScalarWhereInput
    data: XOR<claim_coinsUpdateManyMutationInput, claim_coinsUncheckedUpdateManyWithoutUsersInput>
  }

  export type claim_coinsScalarWhereInput = {
    AND?: claim_coinsScalarWhereInput | claim_coinsScalarWhereInput[]
    OR?: claim_coinsScalarWhereInput[]
    NOT?: claim_coinsScalarWhereInput | claim_coinsScalarWhereInput[]
    id?: StringFilter<"claim_coins"> | string
    user_id?: StringFilter<"claim_coins"> | string
    date?: DateTimeNullableFilter<"claim_coins"> | Date | string | null
    amount?: DecimalFilter<"claim_coins"> | Decimal | DecimalJsLike | number | string
    status?: BoolNullableFilter<"claim_coins"> | boolean | null
  }

  export type depositsUpsertWithWhereUniqueWithoutUsersInput = {
    where: depositsWhereUniqueInput
    update: XOR<depositsUpdateWithoutUsersInput, depositsUncheckedUpdateWithoutUsersInput>
    create: XOR<depositsCreateWithoutUsersInput, depositsUncheckedCreateWithoutUsersInput>
  }

  export type depositsUpdateWithWhereUniqueWithoutUsersInput = {
    where: depositsWhereUniqueInput
    data: XOR<depositsUpdateWithoutUsersInput, depositsUncheckedUpdateWithoutUsersInput>
  }

  export type depositsUpdateManyWithWhereWithoutUsersInput = {
    where: depositsScalarWhereInput
    data: XOR<depositsUpdateManyMutationInput, depositsUncheckedUpdateManyWithoutUsersInput>
  }

  export type depositsScalarWhereInput = {
    AND?: depositsScalarWhereInput | depositsScalarWhereInput[]
    OR?: depositsScalarWhereInput[]
    NOT?: depositsScalarWhereInput | depositsScalarWhereInput[]
    id?: StringFilter<"deposits"> | string
    transaction_id?: StringFilter<"deposits"> | string
    user_id?: StringFilter<"deposits"> | string
    date?: DateTimeNullableFilter<"deposits"> | Date | string | null
    amount?: DecimalFilter<"deposits"> | Decimal | DecimalJsLike | number | string
    address?: StringFilter<"deposits"> | string
    to_address?: StringFilter<"deposits"> | string
    trc_type?: StringFilter<"deposits"> | string
    status?: BoolNullableFilter<"deposits"> | boolean | null
  }

  export type earn_coinsUpsertWithWhereUniqueWithoutUsersInput = {
    where: earn_coinsWhereUniqueInput
    update: XOR<earn_coinsUpdateWithoutUsersInput, earn_coinsUncheckedUpdateWithoutUsersInput>
    create: XOR<earn_coinsCreateWithoutUsersInput, earn_coinsUncheckedCreateWithoutUsersInput>
  }

  export type earn_coinsUpdateWithWhereUniqueWithoutUsersInput = {
    where: earn_coinsWhereUniqueInput
    data: XOR<earn_coinsUpdateWithoutUsersInput, earn_coinsUncheckedUpdateWithoutUsersInput>
  }

  export type earn_coinsUpdateManyWithWhereWithoutUsersInput = {
    where: earn_coinsScalarWhereInput
    data: XOR<earn_coinsUpdateManyMutationInput, earn_coinsUncheckedUpdateManyWithoutUsersInput>
  }

  export type earn_coinsScalarWhereInput = {
    AND?: earn_coinsScalarWhereInput | earn_coinsScalarWhereInput[]
    OR?: earn_coinsScalarWhereInput[]
    NOT?: earn_coinsScalarWhereInput | earn_coinsScalarWhereInput[]
    id?: StringFilter<"earn_coins"> | string
    user_id?: StringFilter<"earn_coins"> | string
    date?: DateTimeNullableFilter<"earn_coins"> | Date | string | null
    amount?: DecimalFilter<"earn_coins"> | Decimal | DecimalJsLike | number | string
    status?: BoolNullableFilter<"earn_coins"> | boolean | null
  }

  export type mine_coinsUpsertWithWhereUniqueWithoutUsersInput = {
    where: mine_coinsWhereUniqueInput
    update: XOR<mine_coinsUpdateWithoutUsersInput, mine_coinsUncheckedUpdateWithoutUsersInput>
    create: XOR<mine_coinsCreateWithoutUsersInput, mine_coinsUncheckedCreateWithoutUsersInput>
  }

  export type mine_coinsUpdateWithWhereUniqueWithoutUsersInput = {
    where: mine_coinsWhereUniqueInput
    data: XOR<mine_coinsUpdateWithoutUsersInput, mine_coinsUncheckedUpdateWithoutUsersInput>
  }

  export type mine_coinsUpdateManyWithWhereWithoutUsersInput = {
    where: mine_coinsScalarWhereInput
    data: XOR<mine_coinsUpdateManyMutationInput, mine_coinsUncheckedUpdateManyWithoutUsersInput>
  }

  export type mine_coinsScalarWhereInput = {
    AND?: mine_coinsScalarWhereInput | mine_coinsScalarWhereInput[]
    OR?: mine_coinsScalarWhereInput[]
    NOT?: mine_coinsScalarWhereInput | mine_coinsScalarWhereInput[]
    id?: StringFilter<"mine_coins"> | string
    user_id?: StringFilter<"mine_coins"> | string
    is_start?: BoolNullableFilter<"mine_coins"> | boolean | null
    date?: DateTimeNullableFilter<"mine_coins"> | Date | string | null
    amount?: DecimalFilter<"mine_coins"> | Decimal | DecimalJsLike | number | string
    start_time?: DateTimeNullableFilter<"mine_coins"> | Date | string | null
    status?: BoolNullableFilter<"mine_coins"> | boolean | null
  }

  export type referral_progressUpsertWithWhereUniqueWithoutUsersInput = {
    where: referral_progressWhereUniqueInput
    update: XOR<referral_progressUpdateWithoutUsersInput, referral_progressUncheckedUpdateWithoutUsersInput>
    create: XOR<referral_progressCreateWithoutUsersInput, referral_progressUncheckedCreateWithoutUsersInput>
  }

  export type referral_progressUpdateWithWhereUniqueWithoutUsersInput = {
    where: referral_progressWhereUniqueInput
    data: XOR<referral_progressUpdateWithoutUsersInput, referral_progressUncheckedUpdateWithoutUsersInput>
  }

  export type referral_progressUpdateManyWithWhereWithoutUsersInput = {
    where: referral_progressScalarWhereInput
    data: XOR<referral_progressUpdateManyMutationInput, referral_progressUncheckedUpdateManyWithoutUsersInput>
  }

  export type referral_progressScalarWhereInput = {
    AND?: referral_progressScalarWhereInput | referral_progressScalarWhereInput[]
    OR?: referral_progressScalarWhereInput[]
    NOT?: referral_progressScalarWhereInput | referral_progressScalarWhereInput[]
    id?: StringFilter<"referral_progress"> | string
    user_id?: StringFilter<"referral_progress"> | string
    level?: IntFilter<"referral_progress"> | number
    referred_users?: StringNullableListFilter<"referral_progress">
    unlocked?: BoolNullableFilter<"referral_progress"> | boolean | null
    required_count?: IntFilter<"referral_progress"> | number
    unlocked_at?: DateTimeNullableFilter<"referral_progress"> | Date | string | null
  }

  export type walletsUpsertWithWhereUniqueWithoutUsersInput = {
    where: walletsWhereUniqueInput
    update: XOR<walletsUpdateWithoutUsersInput, walletsUncheckedUpdateWithoutUsersInput>
    create: XOR<walletsCreateWithoutUsersInput, walletsUncheckedCreateWithoutUsersInput>
  }

  export type walletsUpdateWithWhereUniqueWithoutUsersInput = {
    where: walletsWhereUniqueInput
    data: XOR<walletsUpdateWithoutUsersInput, walletsUncheckedUpdateWithoutUsersInput>
  }

  export type walletsUpdateManyWithWhereWithoutUsersInput = {
    where: walletsScalarWhereInput
    data: XOR<walletsUpdateManyMutationInput, walletsUncheckedUpdateManyWithoutUsersInput>
  }

  export type walletsScalarWhereInput = {
    AND?: walletsScalarWhereInput | walletsScalarWhereInput[]
    OR?: walletsScalarWhereInput[]
    NOT?: walletsScalarWhereInput | walletsScalarWhereInput[]
    id?: StringFilter<"wallets"> | string
    user_id?: StringFilter<"wallets"> | string
    private_key?: StringFilter<"wallets"> | string
    public_key?: StringFilter<"wallets"> | string
    type?: StringFilter<"wallets"> | string
    amount?: DecimalNullableFilter<"wallets"> | Decimal | DecimalJsLike | number | string | null
    status?: BoolNullableFilter<"wallets"> | boolean | null
    created_at?: DateTimeNullableFilter<"wallets"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"wallets"> | Date | string | null
  }

  export type withdrawalsUpsertWithWhereUniqueWithoutUsersInput = {
    where: withdrawalsWhereUniqueInput
    update: XOR<withdrawalsUpdateWithoutUsersInput, withdrawalsUncheckedUpdateWithoutUsersInput>
    create: XOR<withdrawalsCreateWithoutUsersInput, withdrawalsUncheckedCreateWithoutUsersInput>
  }

  export type withdrawalsUpdateWithWhereUniqueWithoutUsersInput = {
    where: withdrawalsWhereUniqueInput
    data: XOR<withdrawalsUpdateWithoutUsersInput, withdrawalsUncheckedUpdateWithoutUsersInput>
  }

  export type withdrawalsUpdateManyWithWhereWithoutUsersInput = {
    where: withdrawalsScalarWhereInput
    data: XOR<withdrawalsUpdateManyMutationInput, withdrawalsUncheckedUpdateManyWithoutUsersInput>
  }

  export type withdrawalsScalarWhereInput = {
    AND?: withdrawalsScalarWhereInput | withdrawalsScalarWhereInput[]
    OR?: withdrawalsScalarWhereInput[]
    NOT?: withdrawalsScalarWhereInput | withdrawalsScalarWhereInput[]
    id?: StringFilter<"withdrawals"> | string
    user_id?: StringFilter<"withdrawals"> | string
    date?: DateTimeNullableFilter<"withdrawals"> | Date | string | null
    type?: StringFilter<"withdrawals"> | string
    amount?: DecimalFilter<"withdrawals"> | Decimal | DecimalJsLike | number | string
    address?: StringFilter<"withdrawals"> | string
    status?: BoolNullableFilter<"withdrawals"> | boolean | null
    status_withdraw?: StringFilter<"withdrawals"> | string
    reason?: StringNullableFilter<"withdrawals"> | string | null
  }

  export type usersCreateWithoutWalletsInput = {
    id: string
    username: string
    uid: string
    email: string
    number: string
    phone?: string | null
    mail_otp?: string | null
    password: string
    plain_password?: string | null
    status?: boolean | null
    amount?: Decimal | DecimalJsLike | number | string | null
    remaining_balance?: Decimal | DecimalJsLike | number | string | null
    deposit_amount?: Decimal | DecimalJsLike | number | string | null
    withdrawal_amount?: Decimal | DecimalJsLike | number | string | null
    referral_code?: string | null
    referred_by?: string | null
    image?: string | null
    role?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    claim_coins?: claim_coinsCreateNestedManyWithoutUsersInput
    deposits?: depositsCreateNestedManyWithoutUsersInput
    earn_coins?: earn_coinsCreateNestedManyWithoutUsersInput
    mine_coins?: mine_coinsCreateNestedManyWithoutUsersInput
    referral_progress?: referral_progressCreateNestedManyWithoutUsersInput
    withdrawals?: withdrawalsCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutWalletsInput = {
    id: string
    username: string
    uid: string
    email: string
    number: string
    phone?: string | null
    mail_otp?: string | null
    password: string
    plain_password?: string | null
    status?: boolean | null
    amount?: Decimal | DecimalJsLike | number | string | null
    remaining_balance?: Decimal | DecimalJsLike | number | string | null
    deposit_amount?: Decimal | DecimalJsLike | number | string | null
    withdrawal_amount?: Decimal | DecimalJsLike | number | string | null
    referral_code?: string | null
    referred_by?: string | null
    image?: string | null
    role?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    claim_coins?: claim_coinsUncheckedCreateNestedManyWithoutUsersInput
    deposits?: depositsUncheckedCreateNestedManyWithoutUsersInput
    earn_coins?: earn_coinsUncheckedCreateNestedManyWithoutUsersInput
    mine_coins?: mine_coinsUncheckedCreateNestedManyWithoutUsersInput
    referral_progress?: referral_progressUncheckedCreateNestedManyWithoutUsersInput
    withdrawals?: withdrawalsUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutWalletsInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutWalletsInput, usersUncheckedCreateWithoutWalletsInput>
  }

  export type usersUpsertWithoutWalletsInput = {
    update: XOR<usersUpdateWithoutWalletsInput, usersUncheckedUpdateWithoutWalletsInput>
    create: XOR<usersCreateWithoutWalletsInput, usersUncheckedCreateWithoutWalletsInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutWalletsInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutWalletsInput, usersUncheckedUpdateWithoutWalletsInput>
  }

  export type usersUpdateWithoutWalletsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    uid?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    mail_otp?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    plain_password?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableBoolFieldUpdateOperationsInput | boolean | null
    amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    remaining_balance?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    deposit_amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    withdrawal_amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    referral_code?: NullableStringFieldUpdateOperationsInput | string | null
    referred_by?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    claim_coins?: claim_coinsUpdateManyWithoutUsersNestedInput
    deposits?: depositsUpdateManyWithoutUsersNestedInput
    earn_coins?: earn_coinsUpdateManyWithoutUsersNestedInput
    mine_coins?: mine_coinsUpdateManyWithoutUsersNestedInput
    referral_progress?: referral_progressUpdateManyWithoutUsersNestedInput
    withdrawals?: withdrawalsUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutWalletsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    uid?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    mail_otp?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    plain_password?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableBoolFieldUpdateOperationsInput | boolean | null
    amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    remaining_balance?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    deposit_amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    withdrawal_amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    referral_code?: NullableStringFieldUpdateOperationsInput | string | null
    referred_by?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    claim_coins?: claim_coinsUncheckedUpdateManyWithoutUsersNestedInput
    deposits?: depositsUncheckedUpdateManyWithoutUsersNestedInput
    earn_coins?: earn_coinsUncheckedUpdateManyWithoutUsersNestedInput
    mine_coins?: mine_coinsUncheckedUpdateManyWithoutUsersNestedInput
    referral_progress?: referral_progressUncheckedUpdateManyWithoutUsersNestedInput
    withdrawals?: withdrawalsUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type usersCreateWithoutWithdrawalsInput = {
    id: string
    username: string
    uid: string
    email: string
    number: string
    phone?: string | null
    mail_otp?: string | null
    password: string
    plain_password?: string | null
    status?: boolean | null
    amount?: Decimal | DecimalJsLike | number | string | null
    remaining_balance?: Decimal | DecimalJsLike | number | string | null
    deposit_amount?: Decimal | DecimalJsLike | number | string | null
    withdrawal_amount?: Decimal | DecimalJsLike | number | string | null
    referral_code?: string | null
    referred_by?: string | null
    image?: string | null
    role?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    claim_coins?: claim_coinsCreateNestedManyWithoutUsersInput
    deposits?: depositsCreateNestedManyWithoutUsersInput
    earn_coins?: earn_coinsCreateNestedManyWithoutUsersInput
    mine_coins?: mine_coinsCreateNestedManyWithoutUsersInput
    referral_progress?: referral_progressCreateNestedManyWithoutUsersInput
    wallets?: walletsCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutWithdrawalsInput = {
    id: string
    username: string
    uid: string
    email: string
    number: string
    phone?: string | null
    mail_otp?: string | null
    password: string
    plain_password?: string | null
    status?: boolean | null
    amount?: Decimal | DecimalJsLike | number | string | null
    remaining_balance?: Decimal | DecimalJsLike | number | string | null
    deposit_amount?: Decimal | DecimalJsLike | number | string | null
    withdrawal_amount?: Decimal | DecimalJsLike | number | string | null
    referral_code?: string | null
    referred_by?: string | null
    image?: string | null
    role?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    claim_coins?: claim_coinsUncheckedCreateNestedManyWithoutUsersInput
    deposits?: depositsUncheckedCreateNestedManyWithoutUsersInput
    earn_coins?: earn_coinsUncheckedCreateNestedManyWithoutUsersInput
    mine_coins?: mine_coinsUncheckedCreateNestedManyWithoutUsersInput
    referral_progress?: referral_progressUncheckedCreateNestedManyWithoutUsersInput
    wallets?: walletsUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutWithdrawalsInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutWithdrawalsInput, usersUncheckedCreateWithoutWithdrawalsInput>
  }

  export type usersUpsertWithoutWithdrawalsInput = {
    update: XOR<usersUpdateWithoutWithdrawalsInput, usersUncheckedUpdateWithoutWithdrawalsInput>
    create: XOR<usersCreateWithoutWithdrawalsInput, usersUncheckedCreateWithoutWithdrawalsInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutWithdrawalsInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutWithdrawalsInput, usersUncheckedUpdateWithoutWithdrawalsInput>
  }

  export type usersUpdateWithoutWithdrawalsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    uid?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    mail_otp?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    plain_password?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableBoolFieldUpdateOperationsInput | boolean | null
    amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    remaining_balance?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    deposit_amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    withdrawal_amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    referral_code?: NullableStringFieldUpdateOperationsInput | string | null
    referred_by?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    claim_coins?: claim_coinsUpdateManyWithoutUsersNestedInput
    deposits?: depositsUpdateManyWithoutUsersNestedInput
    earn_coins?: earn_coinsUpdateManyWithoutUsersNestedInput
    mine_coins?: mine_coinsUpdateManyWithoutUsersNestedInput
    referral_progress?: referral_progressUpdateManyWithoutUsersNestedInput
    wallets?: walletsUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutWithdrawalsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    uid?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    mail_otp?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    plain_password?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableBoolFieldUpdateOperationsInput | boolean | null
    amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    remaining_balance?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    deposit_amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    withdrawal_amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    referral_code?: NullableStringFieldUpdateOperationsInput | string | null
    referred_by?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    claim_coins?: claim_coinsUncheckedUpdateManyWithoutUsersNestedInput
    deposits?: depositsUncheckedUpdateManyWithoutUsersNestedInput
    earn_coins?: earn_coinsUncheckedUpdateManyWithoutUsersNestedInput
    mine_coins?: mine_coinsUncheckedUpdateManyWithoutUsersNestedInput
    referral_progress?: referral_progressUncheckedUpdateManyWithoutUsersNestedInput
    wallets?: walletsUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type claim_coinsCreateManyUsersInput = {
    id: string
    date?: Date | string | null
    amount: Decimal | DecimalJsLike | number | string
    status?: boolean | null
  }

  export type depositsCreateManyUsersInput = {
    id: string
    transaction_id: string
    date?: Date | string | null
    amount: Decimal | DecimalJsLike | number | string
    address: string
    to_address: string
    trc_type: string
    status?: boolean | null
  }

  export type earn_coinsCreateManyUsersInput = {
    id: string
    date?: Date | string | null
    amount: Decimal | DecimalJsLike | number | string
    status?: boolean | null
  }

  export type mine_coinsCreateManyUsersInput = {
    id: string
    is_start?: boolean | null
    date?: Date | string | null
    amount: Decimal | DecimalJsLike | number | string
    start_time?: Date | string | null
    status?: boolean | null
  }

  export type referral_progressCreateManyUsersInput = {
    id: string
    level: number
    referred_users?: referral_progressCreatereferred_usersInput | string[]
    unlocked?: boolean | null
    required_count: number
    unlocked_at?: Date | string | null
  }

  export type walletsCreateManyUsersInput = {
    id: string
    private_key: string
    public_key: string
    type: string
    amount?: Decimal | DecimalJsLike | number | string | null
    status?: boolean | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type withdrawalsCreateManyUsersInput = {
    id: string
    date?: Date | string | null
    type: string
    amount: Decimal | DecimalJsLike | number | string
    address: string
    status?: boolean | null
    status_withdraw: string
    reason?: string | null
  }

  export type claim_coinsUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type claim_coinsUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type claim_coinsUncheckedUpdateManyWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type depositsUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    transaction_id?: StringFieldUpdateOperationsInput | string
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    address?: StringFieldUpdateOperationsInput | string
    to_address?: StringFieldUpdateOperationsInput | string
    trc_type?: StringFieldUpdateOperationsInput | string
    status?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type depositsUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    transaction_id?: StringFieldUpdateOperationsInput | string
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    address?: StringFieldUpdateOperationsInput | string
    to_address?: StringFieldUpdateOperationsInput | string
    trc_type?: StringFieldUpdateOperationsInput | string
    status?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type depositsUncheckedUpdateManyWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    transaction_id?: StringFieldUpdateOperationsInput | string
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    address?: StringFieldUpdateOperationsInput | string
    to_address?: StringFieldUpdateOperationsInput | string
    trc_type?: StringFieldUpdateOperationsInput | string
    status?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type earn_coinsUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type earn_coinsUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type earn_coinsUncheckedUpdateManyWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type mine_coinsUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    is_start?: NullableBoolFieldUpdateOperationsInput | boolean | null
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    start_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type mine_coinsUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    is_start?: NullableBoolFieldUpdateOperationsInput | boolean | null
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    start_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type mine_coinsUncheckedUpdateManyWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    is_start?: NullableBoolFieldUpdateOperationsInput | boolean | null
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    start_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type referral_progressUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    referred_users?: referral_progressUpdatereferred_usersInput | string[]
    unlocked?: NullableBoolFieldUpdateOperationsInput | boolean | null
    required_count?: IntFieldUpdateOperationsInput | number
    unlocked_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type referral_progressUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    referred_users?: referral_progressUpdatereferred_usersInput | string[]
    unlocked?: NullableBoolFieldUpdateOperationsInput | boolean | null
    required_count?: IntFieldUpdateOperationsInput | number
    unlocked_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type referral_progressUncheckedUpdateManyWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    referred_users?: referral_progressUpdatereferred_usersInput | string[]
    unlocked?: NullableBoolFieldUpdateOperationsInput | boolean | null
    required_count?: IntFieldUpdateOperationsInput | number
    unlocked_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type walletsUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    private_key?: StringFieldUpdateOperationsInput | string
    public_key?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type walletsUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    private_key?: StringFieldUpdateOperationsInput | string
    public_key?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type walletsUncheckedUpdateManyWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    private_key?: StringFieldUpdateOperationsInput | string
    public_key?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type withdrawalsUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    type?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    address?: StringFieldUpdateOperationsInput | string
    status?: NullableBoolFieldUpdateOperationsInput | boolean | null
    status_withdraw?: StringFieldUpdateOperationsInput | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type withdrawalsUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    type?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    address?: StringFieldUpdateOperationsInput | string
    status?: NullableBoolFieldUpdateOperationsInput | boolean | null
    status_withdraw?: StringFieldUpdateOperationsInput | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type withdrawalsUncheckedUpdateManyWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    type?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    address?: StringFieldUpdateOperationsInput | string
    status?: NullableBoolFieldUpdateOperationsInput | boolean | null
    status_withdraw?: StringFieldUpdateOperationsInput | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
  }



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