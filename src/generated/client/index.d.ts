
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
 * Model VideoJob
 * 
 */
export type VideoJob = $Result.DefaultSelection<Prisma.$VideoJobPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const VideoStatus: {
  PENDING: 'PENDING',
  PROCESSING: 'PROCESSING',
  READY: 'READY',
  FAILED: 'FAILED'
};

export type VideoStatus = (typeof VideoStatus)[keyof typeof VideoStatus]

}

export type VideoStatus = $Enums.VideoStatus

export const VideoStatus: typeof $Enums.VideoStatus

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more VideoJobs
 * const videoJobs = await prisma.videoJob.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more VideoJobs
   * const videoJobs = await prisma.videoJob.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.videoJob`: Exposes CRUD operations for the **VideoJob** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VideoJobs
    * const videoJobs = await prisma.videoJob.findMany()
    * ```
    */
  get videoJob(): Prisma.VideoJobDelegate<ExtArgs>;
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
   * Prisma Client JS version: 5.22.0
   * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
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
    VideoJob: 'VideoJob'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "videoJob"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      VideoJob: {
        payload: Prisma.$VideoJobPayload<ExtArgs>
        fields: Prisma.VideoJobFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VideoJobFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoJobPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VideoJobFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoJobPayload>
          }
          findFirst: {
            args: Prisma.VideoJobFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoJobPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VideoJobFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoJobPayload>
          }
          findMany: {
            args: Prisma.VideoJobFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoJobPayload>[]
          }
          create: {
            args: Prisma.VideoJobCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoJobPayload>
          }
          createMany: {
            args: Prisma.VideoJobCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VideoJobCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoJobPayload>[]
          }
          delete: {
            args: Prisma.VideoJobDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoJobPayload>
          }
          update: {
            args: Prisma.VideoJobUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoJobPayload>
          }
          deleteMany: {
            args: Prisma.VideoJobDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VideoJobUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.VideoJobUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoJobPayload>
          }
          aggregate: {
            args: Prisma.VideoJobAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVideoJob>
          }
          groupBy: {
            args: Prisma.VideoJobGroupByArgs<ExtArgs>
            result: $Utils.Optional<VideoJobGroupByOutputType>[]
          }
          count: {
            args: Prisma.VideoJobCountArgs<ExtArgs>
            result: $Utils.Optional<VideoJobCountAggregateOutputType> | number
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
   * Models
   */

  /**
   * Model VideoJob
   */

  export type AggregateVideoJob = {
    _count: VideoJobCountAggregateOutputType | null
    _min: VideoJobMinAggregateOutputType | null
    _max: VideoJobMaxAggregateOutputType | null
  }

  export type VideoJobMinAggregateOutputType = {
    id: string | null
    status: $Enums.VideoStatus | null
    videoUrl: string | null
    error: string | null
  }

  export type VideoJobMaxAggregateOutputType = {
    id: string | null
    status: $Enums.VideoStatus | null
    videoUrl: string | null
    error: string | null
  }

  export type VideoJobCountAggregateOutputType = {
    id: number
    status: number
    videoUrl: number
    error: number
    _all: number
  }


  export type VideoJobMinAggregateInputType = {
    id?: true
    status?: true
    videoUrl?: true
    error?: true
  }

  export type VideoJobMaxAggregateInputType = {
    id?: true
    status?: true
    videoUrl?: true
    error?: true
  }

  export type VideoJobCountAggregateInputType = {
    id?: true
    status?: true
    videoUrl?: true
    error?: true
    _all?: true
  }

  export type VideoJobAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VideoJob to aggregate.
     */
    where?: VideoJobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VideoJobs to fetch.
     */
    orderBy?: VideoJobOrderByWithRelationInput | VideoJobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VideoJobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VideoJobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VideoJobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VideoJobs
    **/
    _count?: true | VideoJobCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VideoJobMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VideoJobMaxAggregateInputType
  }

  export type GetVideoJobAggregateType<T extends VideoJobAggregateArgs> = {
        [P in keyof T & keyof AggregateVideoJob]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVideoJob[P]>
      : GetScalarType<T[P], AggregateVideoJob[P]>
  }




  export type VideoJobGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VideoJobWhereInput
    orderBy?: VideoJobOrderByWithAggregationInput | VideoJobOrderByWithAggregationInput[]
    by: VideoJobScalarFieldEnum[] | VideoJobScalarFieldEnum
    having?: VideoJobScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VideoJobCountAggregateInputType | true
    _min?: VideoJobMinAggregateInputType
    _max?: VideoJobMaxAggregateInputType
  }

  export type VideoJobGroupByOutputType = {
    id: string
    status: $Enums.VideoStatus
    videoUrl: string | null
    error: string | null
    _count: VideoJobCountAggregateOutputType | null
    _min: VideoJobMinAggregateOutputType | null
    _max: VideoJobMaxAggregateOutputType | null
  }

  type GetVideoJobGroupByPayload<T extends VideoJobGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VideoJobGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VideoJobGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VideoJobGroupByOutputType[P]>
            : GetScalarType<T[P], VideoJobGroupByOutputType[P]>
        }
      >
    >


  export type VideoJobSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    status?: boolean
    videoUrl?: boolean
    error?: boolean
  }, ExtArgs["result"]["videoJob"]>

  export type VideoJobSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    status?: boolean
    videoUrl?: boolean
    error?: boolean
  }, ExtArgs["result"]["videoJob"]>

  export type VideoJobSelectScalar = {
    id?: boolean
    status?: boolean
    videoUrl?: boolean
    error?: boolean
  }


  export type $VideoJobPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VideoJob"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      status: $Enums.VideoStatus
      videoUrl: string | null
      error: string | null
    }, ExtArgs["result"]["videoJob"]>
    composites: {}
  }

  type VideoJobGetPayload<S extends boolean | null | undefined | VideoJobDefaultArgs> = $Result.GetResult<Prisma.$VideoJobPayload, S>

  type VideoJobCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<VideoJobFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: VideoJobCountAggregateInputType | true
    }

  export interface VideoJobDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VideoJob'], meta: { name: 'VideoJob' } }
    /**
     * Find zero or one VideoJob that matches the filter.
     * @param {VideoJobFindUniqueArgs} args - Arguments to find a VideoJob
     * @example
     * // Get one VideoJob
     * const videoJob = await prisma.videoJob.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VideoJobFindUniqueArgs>(args: SelectSubset<T, VideoJobFindUniqueArgs<ExtArgs>>): Prisma__VideoJobClient<$Result.GetResult<Prisma.$VideoJobPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one VideoJob that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {VideoJobFindUniqueOrThrowArgs} args - Arguments to find a VideoJob
     * @example
     * // Get one VideoJob
     * const videoJob = await prisma.videoJob.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VideoJobFindUniqueOrThrowArgs>(args: SelectSubset<T, VideoJobFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VideoJobClient<$Result.GetResult<Prisma.$VideoJobPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first VideoJob that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoJobFindFirstArgs} args - Arguments to find a VideoJob
     * @example
     * // Get one VideoJob
     * const videoJob = await prisma.videoJob.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VideoJobFindFirstArgs>(args?: SelectSubset<T, VideoJobFindFirstArgs<ExtArgs>>): Prisma__VideoJobClient<$Result.GetResult<Prisma.$VideoJobPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first VideoJob that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoJobFindFirstOrThrowArgs} args - Arguments to find a VideoJob
     * @example
     * // Get one VideoJob
     * const videoJob = await prisma.videoJob.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VideoJobFindFirstOrThrowArgs>(args?: SelectSubset<T, VideoJobFindFirstOrThrowArgs<ExtArgs>>): Prisma__VideoJobClient<$Result.GetResult<Prisma.$VideoJobPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more VideoJobs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoJobFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VideoJobs
     * const videoJobs = await prisma.videoJob.findMany()
     * 
     * // Get first 10 VideoJobs
     * const videoJobs = await prisma.videoJob.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const videoJobWithIdOnly = await prisma.videoJob.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VideoJobFindManyArgs>(args?: SelectSubset<T, VideoJobFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VideoJobPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a VideoJob.
     * @param {VideoJobCreateArgs} args - Arguments to create a VideoJob.
     * @example
     * // Create one VideoJob
     * const VideoJob = await prisma.videoJob.create({
     *   data: {
     *     // ... data to create a VideoJob
     *   }
     * })
     * 
     */
    create<T extends VideoJobCreateArgs>(args: SelectSubset<T, VideoJobCreateArgs<ExtArgs>>): Prisma__VideoJobClient<$Result.GetResult<Prisma.$VideoJobPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many VideoJobs.
     * @param {VideoJobCreateManyArgs} args - Arguments to create many VideoJobs.
     * @example
     * // Create many VideoJobs
     * const videoJob = await prisma.videoJob.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VideoJobCreateManyArgs>(args?: SelectSubset<T, VideoJobCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many VideoJobs and returns the data saved in the database.
     * @param {VideoJobCreateManyAndReturnArgs} args - Arguments to create many VideoJobs.
     * @example
     * // Create many VideoJobs
     * const videoJob = await prisma.videoJob.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many VideoJobs and only return the `id`
     * const videoJobWithIdOnly = await prisma.videoJob.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VideoJobCreateManyAndReturnArgs>(args?: SelectSubset<T, VideoJobCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VideoJobPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a VideoJob.
     * @param {VideoJobDeleteArgs} args - Arguments to delete one VideoJob.
     * @example
     * // Delete one VideoJob
     * const VideoJob = await prisma.videoJob.delete({
     *   where: {
     *     // ... filter to delete one VideoJob
     *   }
     * })
     * 
     */
    delete<T extends VideoJobDeleteArgs>(args: SelectSubset<T, VideoJobDeleteArgs<ExtArgs>>): Prisma__VideoJobClient<$Result.GetResult<Prisma.$VideoJobPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one VideoJob.
     * @param {VideoJobUpdateArgs} args - Arguments to update one VideoJob.
     * @example
     * // Update one VideoJob
     * const videoJob = await prisma.videoJob.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VideoJobUpdateArgs>(args: SelectSubset<T, VideoJobUpdateArgs<ExtArgs>>): Prisma__VideoJobClient<$Result.GetResult<Prisma.$VideoJobPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more VideoJobs.
     * @param {VideoJobDeleteManyArgs} args - Arguments to filter VideoJobs to delete.
     * @example
     * // Delete a few VideoJobs
     * const { count } = await prisma.videoJob.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VideoJobDeleteManyArgs>(args?: SelectSubset<T, VideoJobDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VideoJobs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoJobUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VideoJobs
     * const videoJob = await prisma.videoJob.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VideoJobUpdateManyArgs>(args: SelectSubset<T, VideoJobUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one VideoJob.
     * @param {VideoJobUpsertArgs} args - Arguments to update or create a VideoJob.
     * @example
     * // Update or create a VideoJob
     * const videoJob = await prisma.videoJob.upsert({
     *   create: {
     *     // ... data to create a VideoJob
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VideoJob we want to update
     *   }
     * })
     */
    upsert<T extends VideoJobUpsertArgs>(args: SelectSubset<T, VideoJobUpsertArgs<ExtArgs>>): Prisma__VideoJobClient<$Result.GetResult<Prisma.$VideoJobPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of VideoJobs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoJobCountArgs} args - Arguments to filter VideoJobs to count.
     * @example
     * // Count the number of VideoJobs
     * const count = await prisma.videoJob.count({
     *   where: {
     *     // ... the filter for the VideoJobs we want to count
     *   }
     * })
    **/
    count<T extends VideoJobCountArgs>(
      args?: Subset<T, VideoJobCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VideoJobCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VideoJob.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoJobAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VideoJobAggregateArgs>(args: Subset<T, VideoJobAggregateArgs>): Prisma.PrismaPromise<GetVideoJobAggregateType<T>>

    /**
     * Group by VideoJob.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoJobGroupByArgs} args - Group by arguments.
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
      T extends VideoJobGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VideoJobGroupByArgs['orderBy'] }
        : { orderBy?: VideoJobGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VideoJobGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVideoJobGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VideoJob model
   */
  readonly fields: VideoJobFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VideoJob.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VideoJobClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the VideoJob model
   */ 
  interface VideoJobFieldRefs {
    readonly id: FieldRef<"VideoJob", 'String'>
    readonly status: FieldRef<"VideoJob", 'VideoStatus'>
    readonly videoUrl: FieldRef<"VideoJob", 'String'>
    readonly error: FieldRef<"VideoJob", 'String'>
  }
    

  // Custom InputTypes
  /**
   * VideoJob findUnique
   */
  export type VideoJobFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoJob
     */
    select?: VideoJobSelect<ExtArgs> | null
    /**
     * Filter, which VideoJob to fetch.
     */
    where: VideoJobWhereUniqueInput
  }

  /**
   * VideoJob findUniqueOrThrow
   */
  export type VideoJobFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoJob
     */
    select?: VideoJobSelect<ExtArgs> | null
    /**
     * Filter, which VideoJob to fetch.
     */
    where: VideoJobWhereUniqueInput
  }

  /**
   * VideoJob findFirst
   */
  export type VideoJobFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoJob
     */
    select?: VideoJobSelect<ExtArgs> | null
    /**
     * Filter, which VideoJob to fetch.
     */
    where?: VideoJobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VideoJobs to fetch.
     */
    orderBy?: VideoJobOrderByWithRelationInput | VideoJobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VideoJobs.
     */
    cursor?: VideoJobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VideoJobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VideoJobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VideoJobs.
     */
    distinct?: VideoJobScalarFieldEnum | VideoJobScalarFieldEnum[]
  }

  /**
   * VideoJob findFirstOrThrow
   */
  export type VideoJobFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoJob
     */
    select?: VideoJobSelect<ExtArgs> | null
    /**
     * Filter, which VideoJob to fetch.
     */
    where?: VideoJobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VideoJobs to fetch.
     */
    orderBy?: VideoJobOrderByWithRelationInput | VideoJobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VideoJobs.
     */
    cursor?: VideoJobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VideoJobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VideoJobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VideoJobs.
     */
    distinct?: VideoJobScalarFieldEnum | VideoJobScalarFieldEnum[]
  }

  /**
   * VideoJob findMany
   */
  export type VideoJobFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoJob
     */
    select?: VideoJobSelect<ExtArgs> | null
    /**
     * Filter, which VideoJobs to fetch.
     */
    where?: VideoJobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VideoJobs to fetch.
     */
    orderBy?: VideoJobOrderByWithRelationInput | VideoJobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VideoJobs.
     */
    cursor?: VideoJobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VideoJobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VideoJobs.
     */
    skip?: number
    distinct?: VideoJobScalarFieldEnum | VideoJobScalarFieldEnum[]
  }

  /**
   * VideoJob create
   */
  export type VideoJobCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoJob
     */
    select?: VideoJobSelect<ExtArgs> | null
    /**
     * The data needed to create a VideoJob.
     */
    data: XOR<VideoJobCreateInput, VideoJobUncheckedCreateInput>
  }

  /**
   * VideoJob createMany
   */
  export type VideoJobCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VideoJobs.
     */
    data: VideoJobCreateManyInput | VideoJobCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VideoJob createManyAndReturn
   */
  export type VideoJobCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoJob
     */
    select?: VideoJobSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many VideoJobs.
     */
    data: VideoJobCreateManyInput | VideoJobCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VideoJob update
   */
  export type VideoJobUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoJob
     */
    select?: VideoJobSelect<ExtArgs> | null
    /**
     * The data needed to update a VideoJob.
     */
    data: XOR<VideoJobUpdateInput, VideoJobUncheckedUpdateInput>
    /**
     * Choose, which VideoJob to update.
     */
    where: VideoJobWhereUniqueInput
  }

  /**
   * VideoJob updateMany
   */
  export type VideoJobUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VideoJobs.
     */
    data: XOR<VideoJobUpdateManyMutationInput, VideoJobUncheckedUpdateManyInput>
    /**
     * Filter which VideoJobs to update
     */
    where?: VideoJobWhereInput
  }

  /**
   * VideoJob upsert
   */
  export type VideoJobUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoJob
     */
    select?: VideoJobSelect<ExtArgs> | null
    /**
     * The filter to search for the VideoJob to update in case it exists.
     */
    where: VideoJobWhereUniqueInput
    /**
     * In case the VideoJob found by the `where` argument doesn't exist, create a new VideoJob with this data.
     */
    create: XOR<VideoJobCreateInput, VideoJobUncheckedCreateInput>
    /**
     * In case the VideoJob was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VideoJobUpdateInput, VideoJobUncheckedUpdateInput>
  }

  /**
   * VideoJob delete
   */
  export type VideoJobDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoJob
     */
    select?: VideoJobSelect<ExtArgs> | null
    /**
     * Filter which VideoJob to delete.
     */
    where: VideoJobWhereUniqueInput
  }

  /**
   * VideoJob deleteMany
   */
  export type VideoJobDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VideoJobs to delete
     */
    where?: VideoJobWhereInput
  }

  /**
   * VideoJob without action
   */
  export type VideoJobDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoJob
     */
    select?: VideoJobSelect<ExtArgs> | null
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


  export const VideoJobScalarFieldEnum: {
    id: 'id',
    status: 'status',
    videoUrl: 'videoUrl',
    error: 'error'
  };

  export type VideoJobScalarFieldEnum = (typeof VideoJobScalarFieldEnum)[keyof typeof VideoJobScalarFieldEnum]


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
   * Reference to a field of type 'VideoStatus'
   */
  export type EnumVideoStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'VideoStatus'>
    


  /**
   * Reference to a field of type 'VideoStatus[]'
   */
  export type ListEnumVideoStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'VideoStatus[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type VideoJobWhereInput = {
    AND?: VideoJobWhereInput | VideoJobWhereInput[]
    OR?: VideoJobWhereInput[]
    NOT?: VideoJobWhereInput | VideoJobWhereInput[]
    id?: StringFilter<"VideoJob"> | string
    status?: EnumVideoStatusFilter<"VideoJob"> | $Enums.VideoStatus
    videoUrl?: StringNullableFilter<"VideoJob"> | string | null
    error?: StringNullableFilter<"VideoJob"> | string | null
  }

  export type VideoJobOrderByWithRelationInput = {
    id?: SortOrder
    status?: SortOrder
    videoUrl?: SortOrderInput | SortOrder
    error?: SortOrderInput | SortOrder
  }

  export type VideoJobWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: VideoJobWhereInput | VideoJobWhereInput[]
    OR?: VideoJobWhereInput[]
    NOT?: VideoJobWhereInput | VideoJobWhereInput[]
    status?: EnumVideoStatusFilter<"VideoJob"> | $Enums.VideoStatus
    videoUrl?: StringNullableFilter<"VideoJob"> | string | null
    error?: StringNullableFilter<"VideoJob"> | string | null
  }, "id">

  export type VideoJobOrderByWithAggregationInput = {
    id?: SortOrder
    status?: SortOrder
    videoUrl?: SortOrderInput | SortOrder
    error?: SortOrderInput | SortOrder
    _count?: VideoJobCountOrderByAggregateInput
    _max?: VideoJobMaxOrderByAggregateInput
    _min?: VideoJobMinOrderByAggregateInput
  }

  export type VideoJobScalarWhereWithAggregatesInput = {
    AND?: VideoJobScalarWhereWithAggregatesInput | VideoJobScalarWhereWithAggregatesInput[]
    OR?: VideoJobScalarWhereWithAggregatesInput[]
    NOT?: VideoJobScalarWhereWithAggregatesInput | VideoJobScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"VideoJob"> | string
    status?: EnumVideoStatusWithAggregatesFilter<"VideoJob"> | $Enums.VideoStatus
    videoUrl?: StringNullableWithAggregatesFilter<"VideoJob"> | string | null
    error?: StringNullableWithAggregatesFilter<"VideoJob"> | string | null
  }

  export type VideoJobCreateInput = {
    id: string
    status?: $Enums.VideoStatus
    videoUrl?: string | null
    error?: string | null
  }

  export type VideoJobUncheckedCreateInput = {
    id: string
    status?: $Enums.VideoStatus
    videoUrl?: string | null
    error?: string | null
  }

  export type VideoJobUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumVideoStatusFieldUpdateOperationsInput | $Enums.VideoStatus
    videoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    error?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type VideoJobUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumVideoStatusFieldUpdateOperationsInput | $Enums.VideoStatus
    videoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    error?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type VideoJobCreateManyInput = {
    id: string
    status?: $Enums.VideoStatus
    videoUrl?: string | null
    error?: string | null
  }

  export type VideoJobUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumVideoStatusFieldUpdateOperationsInput | $Enums.VideoStatus
    videoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    error?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type VideoJobUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumVideoStatusFieldUpdateOperationsInput | $Enums.VideoStatus
    videoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    error?: NullableStringFieldUpdateOperationsInput | string | null
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

  export type EnumVideoStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.VideoStatus | EnumVideoStatusFieldRefInput<$PrismaModel>
    in?: $Enums.VideoStatus[] | ListEnumVideoStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.VideoStatus[] | ListEnumVideoStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumVideoStatusFilter<$PrismaModel> | $Enums.VideoStatus
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

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type VideoJobCountOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    videoUrl?: SortOrder
    error?: SortOrder
  }

  export type VideoJobMaxOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    videoUrl?: SortOrder
    error?: SortOrder
  }

  export type VideoJobMinOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    videoUrl?: SortOrder
    error?: SortOrder
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

  export type EnumVideoStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.VideoStatus | EnumVideoStatusFieldRefInput<$PrismaModel>
    in?: $Enums.VideoStatus[] | ListEnumVideoStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.VideoStatus[] | ListEnumVideoStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumVideoStatusWithAggregatesFilter<$PrismaModel> | $Enums.VideoStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumVideoStatusFilter<$PrismaModel>
    _max?: NestedEnumVideoStatusFilter<$PrismaModel>
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

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumVideoStatusFieldUpdateOperationsInput = {
    set?: $Enums.VideoStatus
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
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

  export type NestedEnumVideoStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.VideoStatus | EnumVideoStatusFieldRefInput<$PrismaModel>
    in?: $Enums.VideoStatus[] | ListEnumVideoStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.VideoStatus[] | ListEnumVideoStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumVideoStatusFilter<$PrismaModel> | $Enums.VideoStatus
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

  export type NestedEnumVideoStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.VideoStatus | EnumVideoStatusFieldRefInput<$PrismaModel>
    in?: $Enums.VideoStatus[] | ListEnumVideoStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.VideoStatus[] | ListEnumVideoStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumVideoStatusWithAggregatesFilter<$PrismaModel> | $Enums.VideoStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumVideoStatusFilter<$PrismaModel>
    _max?: NestedEnumVideoStatusFilter<$PrismaModel>
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



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use VideoJobDefaultArgs instead
     */
    export type VideoJobArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = VideoJobDefaultArgs<ExtArgs>

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