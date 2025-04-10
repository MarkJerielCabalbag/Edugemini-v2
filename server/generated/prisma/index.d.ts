
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Student
 * 
 */
export type Student = $Result.DefaultSelection<Prisma.$StudentPayload>
/**
 * Model Professor
 * 
 */
export type Professor = $Result.DefaultSelection<Prisma.$ProfessorPayload>
/**
 * Model ClassworkType
 * 
 */
export type ClassworkType = $Result.DefaultSelection<Prisma.$ClassworkTypePayload>
/**
 * Model Files
 * 
 */
export type Files = $Result.DefaultSelection<Prisma.$FilesPayload>
/**
 * Model Announcements
 * 
 */
export type Announcements = $Result.DefaultSelection<Prisma.$AnnouncementsPayload>
/**
 * Model Classroom
 * 
 */
export type Classroom = $Result.DefaultSelection<Prisma.$ClassroomPayload>
/**
 * Model Classwork
 * 
 */
export type Classwork = $Result.DefaultSelection<Prisma.$ClassworkPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
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
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.student`: Exposes CRUD operations for the **Student** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Students
    * const students = await prisma.student.findMany()
    * ```
    */
  get student(): Prisma.StudentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.professor`: Exposes CRUD operations for the **Professor** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Professors
    * const professors = await prisma.professor.findMany()
    * ```
    */
  get professor(): Prisma.ProfessorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.classworkType`: Exposes CRUD operations for the **ClassworkType** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ClassworkTypes
    * const classworkTypes = await prisma.classworkType.findMany()
    * ```
    */
  get classworkType(): Prisma.ClassworkTypeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.files`: Exposes CRUD operations for the **Files** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Files
    * const files = await prisma.files.findMany()
    * ```
    */
  get files(): Prisma.FilesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.announcements`: Exposes CRUD operations for the **Announcements** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Announcements
    * const announcements = await prisma.announcements.findMany()
    * ```
    */
  get announcements(): Prisma.AnnouncementsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.classroom`: Exposes CRUD operations for the **Classroom** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Classrooms
    * const classrooms = await prisma.classroom.findMany()
    * ```
    */
  get classroom(): Prisma.ClassroomDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.classwork`: Exposes CRUD operations for the **Classwork** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Classworks
    * const classworks = await prisma.classwork.findMany()
    * ```
    */
  get classwork(): Prisma.ClassworkDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
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
    User: 'User',
    Student: 'Student',
    Professor: 'Professor',
    ClassworkType: 'ClassworkType',
    Files: 'Files',
    Announcements: 'Announcements',
    Classroom: 'Classroom',
    Classwork: 'Classwork'
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
      modelProps: "user" | "student" | "professor" | "classworkType" | "files" | "announcements" | "classroom" | "classwork"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Student: {
        payload: Prisma.$StudentPayload<ExtArgs>
        fields: Prisma.StudentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StudentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StudentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          findFirst: {
            args: Prisma.StudentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StudentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          findMany: {
            args: Prisma.StudentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>[]
          }
          create: {
            args: Prisma.StudentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          createMany: {
            args: Prisma.StudentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StudentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>[]
          }
          delete: {
            args: Prisma.StudentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          update: {
            args: Prisma.StudentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          deleteMany: {
            args: Prisma.StudentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StudentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StudentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>[]
          }
          upsert: {
            args: Prisma.StudentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          aggregate: {
            args: Prisma.StudentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStudent>
          }
          groupBy: {
            args: Prisma.StudentGroupByArgs<ExtArgs>
            result: $Utils.Optional<StudentGroupByOutputType>[]
          }
          count: {
            args: Prisma.StudentCountArgs<ExtArgs>
            result: $Utils.Optional<StudentCountAggregateOutputType> | number
          }
        }
      }
      Professor: {
        payload: Prisma.$ProfessorPayload<ExtArgs>
        fields: Prisma.ProfessorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProfessorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProfessorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessorPayload>
          }
          findFirst: {
            args: Prisma.ProfessorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProfessorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessorPayload>
          }
          findMany: {
            args: Prisma.ProfessorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessorPayload>[]
          }
          create: {
            args: Prisma.ProfessorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessorPayload>
          }
          createMany: {
            args: Prisma.ProfessorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProfessorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessorPayload>[]
          }
          delete: {
            args: Prisma.ProfessorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessorPayload>
          }
          update: {
            args: Prisma.ProfessorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessorPayload>
          }
          deleteMany: {
            args: Prisma.ProfessorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProfessorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProfessorUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessorPayload>[]
          }
          upsert: {
            args: Prisma.ProfessorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessorPayload>
          }
          aggregate: {
            args: Prisma.ProfessorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProfessor>
          }
          groupBy: {
            args: Prisma.ProfessorGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProfessorGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProfessorCountArgs<ExtArgs>
            result: $Utils.Optional<ProfessorCountAggregateOutputType> | number
          }
        }
      }
      ClassworkType: {
        payload: Prisma.$ClassworkTypePayload<ExtArgs>
        fields: Prisma.ClassworkTypeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClassworkTypeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassworkTypePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClassworkTypeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassworkTypePayload>
          }
          findFirst: {
            args: Prisma.ClassworkTypeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassworkTypePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClassworkTypeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassworkTypePayload>
          }
          findMany: {
            args: Prisma.ClassworkTypeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassworkTypePayload>[]
          }
          create: {
            args: Prisma.ClassworkTypeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassworkTypePayload>
          }
          createMany: {
            args: Prisma.ClassworkTypeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ClassworkTypeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassworkTypePayload>[]
          }
          delete: {
            args: Prisma.ClassworkTypeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassworkTypePayload>
          }
          update: {
            args: Prisma.ClassworkTypeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassworkTypePayload>
          }
          deleteMany: {
            args: Prisma.ClassworkTypeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ClassworkTypeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ClassworkTypeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassworkTypePayload>[]
          }
          upsert: {
            args: Prisma.ClassworkTypeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassworkTypePayload>
          }
          aggregate: {
            args: Prisma.ClassworkTypeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateClassworkType>
          }
          groupBy: {
            args: Prisma.ClassworkTypeGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClassworkTypeGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClassworkTypeCountArgs<ExtArgs>
            result: $Utils.Optional<ClassworkTypeCountAggregateOutputType> | number
          }
        }
      }
      Files: {
        payload: Prisma.$FilesPayload<ExtArgs>
        fields: Prisma.FilesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FilesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FilesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilesPayload>
          }
          findFirst: {
            args: Prisma.FilesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FilesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilesPayload>
          }
          findMany: {
            args: Prisma.FilesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilesPayload>[]
          }
          create: {
            args: Prisma.FilesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilesPayload>
          }
          createMany: {
            args: Prisma.FilesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FilesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilesPayload>[]
          }
          delete: {
            args: Prisma.FilesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilesPayload>
          }
          update: {
            args: Prisma.FilesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilesPayload>
          }
          deleteMany: {
            args: Prisma.FilesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FilesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FilesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilesPayload>[]
          }
          upsert: {
            args: Prisma.FilesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilesPayload>
          }
          aggregate: {
            args: Prisma.FilesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFiles>
          }
          groupBy: {
            args: Prisma.FilesGroupByArgs<ExtArgs>
            result: $Utils.Optional<FilesGroupByOutputType>[]
          }
          count: {
            args: Prisma.FilesCountArgs<ExtArgs>
            result: $Utils.Optional<FilesCountAggregateOutputType> | number
          }
        }
      }
      Announcements: {
        payload: Prisma.$AnnouncementsPayload<ExtArgs>
        fields: Prisma.AnnouncementsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AnnouncementsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnouncementsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AnnouncementsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnouncementsPayload>
          }
          findFirst: {
            args: Prisma.AnnouncementsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnouncementsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AnnouncementsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnouncementsPayload>
          }
          findMany: {
            args: Prisma.AnnouncementsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnouncementsPayload>[]
          }
          create: {
            args: Prisma.AnnouncementsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnouncementsPayload>
          }
          createMany: {
            args: Prisma.AnnouncementsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AnnouncementsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnouncementsPayload>[]
          }
          delete: {
            args: Prisma.AnnouncementsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnouncementsPayload>
          }
          update: {
            args: Prisma.AnnouncementsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnouncementsPayload>
          }
          deleteMany: {
            args: Prisma.AnnouncementsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AnnouncementsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AnnouncementsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnouncementsPayload>[]
          }
          upsert: {
            args: Prisma.AnnouncementsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnouncementsPayload>
          }
          aggregate: {
            args: Prisma.AnnouncementsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAnnouncements>
          }
          groupBy: {
            args: Prisma.AnnouncementsGroupByArgs<ExtArgs>
            result: $Utils.Optional<AnnouncementsGroupByOutputType>[]
          }
          count: {
            args: Prisma.AnnouncementsCountArgs<ExtArgs>
            result: $Utils.Optional<AnnouncementsCountAggregateOutputType> | number
          }
        }
      }
      Classroom: {
        payload: Prisma.$ClassroomPayload<ExtArgs>
        fields: Prisma.ClassroomFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClassroomFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassroomPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClassroomFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassroomPayload>
          }
          findFirst: {
            args: Prisma.ClassroomFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassroomPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClassroomFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassroomPayload>
          }
          findMany: {
            args: Prisma.ClassroomFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassroomPayload>[]
          }
          create: {
            args: Prisma.ClassroomCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassroomPayload>
          }
          createMany: {
            args: Prisma.ClassroomCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ClassroomCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassroomPayload>[]
          }
          delete: {
            args: Prisma.ClassroomDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassroomPayload>
          }
          update: {
            args: Prisma.ClassroomUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassroomPayload>
          }
          deleteMany: {
            args: Prisma.ClassroomDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ClassroomUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ClassroomUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassroomPayload>[]
          }
          upsert: {
            args: Prisma.ClassroomUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassroomPayload>
          }
          aggregate: {
            args: Prisma.ClassroomAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateClassroom>
          }
          groupBy: {
            args: Prisma.ClassroomGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClassroomGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClassroomCountArgs<ExtArgs>
            result: $Utils.Optional<ClassroomCountAggregateOutputType> | number
          }
        }
      }
      Classwork: {
        payload: Prisma.$ClassworkPayload<ExtArgs>
        fields: Prisma.ClassworkFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClassworkFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassworkPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClassworkFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassworkPayload>
          }
          findFirst: {
            args: Prisma.ClassworkFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassworkPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClassworkFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassworkPayload>
          }
          findMany: {
            args: Prisma.ClassworkFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassworkPayload>[]
          }
          create: {
            args: Prisma.ClassworkCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassworkPayload>
          }
          createMany: {
            args: Prisma.ClassworkCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ClassworkCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassworkPayload>[]
          }
          delete: {
            args: Prisma.ClassworkDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassworkPayload>
          }
          update: {
            args: Prisma.ClassworkUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassworkPayload>
          }
          deleteMany: {
            args: Prisma.ClassworkDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ClassworkUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ClassworkUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassworkPayload>[]
          }
          upsert: {
            args: Prisma.ClassworkUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassworkPayload>
          }
          aggregate: {
            args: Prisma.ClassworkAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateClasswork>
          }
          groupBy: {
            args: Prisma.ClassworkGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClassworkGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClassworkCountArgs<ExtArgs>
            result: $Utils.Optional<ClassworkCountAggregateOutputType> | number
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
    user?: UserOmit
    student?: StudentOmit
    professor?: ProfessorOmit
    classworkType?: ClassworkTypeOmit
    files?: FilesOmit
    announcements?: AnnouncementsOmit
    classroom?: ClassroomOmit
    classwork?: ClassworkOmit
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
   * Count Type StudentCountOutputType
   */

  export type StudentCountOutputType = {
    listOfEnrolledClassrooms: number
    listOfClasswork: number
  }

  export type StudentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    listOfEnrolledClassrooms?: boolean | StudentCountOutputTypeCountListOfEnrolledClassroomsArgs
    listOfClasswork?: boolean | StudentCountOutputTypeCountListOfClassworkArgs
  }

  // Custom InputTypes
  /**
   * StudentCountOutputType without action
   */
  export type StudentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentCountOutputType
     */
    select?: StudentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * StudentCountOutputType without action
   */
  export type StudentCountOutputTypeCountListOfEnrolledClassroomsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClassroomWhereInput
  }

  /**
   * StudentCountOutputType without action
   */
  export type StudentCountOutputTypeCountListOfClassworkArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClassworkWhereInput
  }


  /**
   * Count Type ProfessorCountOutputType
   */

  export type ProfessorCountOutputType = {
    listOfCreatedClassrooms: number
  }

  export type ProfessorCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    listOfCreatedClassrooms?: boolean | ProfessorCountOutputTypeCountListOfCreatedClassroomsArgs
  }

  // Custom InputTypes
  /**
   * ProfessorCountOutputType without action
   */
  export type ProfessorCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfessorCountOutputType
     */
    select?: ProfessorCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProfessorCountOutputType without action
   */
  export type ProfessorCountOutputTypeCountListOfCreatedClassroomsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClassroomWhereInput
  }


  /**
   * Count Type AnnouncementsCountOutputType
   */

  export type AnnouncementsCountOutputType = {
    listOfFiles: number
  }

  export type AnnouncementsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    listOfFiles?: boolean | AnnouncementsCountOutputTypeCountListOfFilesArgs
  }

  // Custom InputTypes
  /**
   * AnnouncementsCountOutputType without action
   */
  export type AnnouncementsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnnouncementsCountOutputType
     */
    select?: AnnouncementsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AnnouncementsCountOutputType without action
   */
  export type AnnouncementsCountOutputTypeCountListOfFilesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FilesWhereInput
  }


  /**
   * Count Type ClassroomCountOutputType
   */

  export type ClassroomCountOutputType = {
    enrolledStudents: number
    listOfCreatedClassworkType: number
    listOfCreatedAnnouncements: number
    listOfClasswork: number
  }

  export type ClassroomCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    enrolledStudents?: boolean | ClassroomCountOutputTypeCountEnrolledStudentsArgs
    listOfCreatedClassworkType?: boolean | ClassroomCountOutputTypeCountListOfCreatedClassworkTypeArgs
    listOfCreatedAnnouncements?: boolean | ClassroomCountOutputTypeCountListOfCreatedAnnouncementsArgs
    listOfClasswork?: boolean | ClassroomCountOutputTypeCountListOfClassworkArgs
  }

  // Custom InputTypes
  /**
   * ClassroomCountOutputType without action
   */
  export type ClassroomCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassroomCountOutputType
     */
    select?: ClassroomCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ClassroomCountOutputType without action
   */
  export type ClassroomCountOutputTypeCountEnrolledStudentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudentWhereInput
  }

  /**
   * ClassroomCountOutputType without action
   */
  export type ClassroomCountOutputTypeCountListOfCreatedClassworkTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClassworkTypeWhereInput
  }

  /**
   * ClassroomCountOutputType without action
   */
  export type ClassroomCountOutputTypeCountListOfCreatedAnnouncementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnnouncementsWhereInput
  }

  /**
   * ClassroomCountOutputType without action
   */
  export type ClassroomCountOutputTypeCountListOfClassworkArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClassworkWhereInput
  }


  /**
   * Count Type ClassworkCountOutputType
   */

  export type ClassworkCountOutputType = {
    listOfOutputs: number
  }

  export type ClassworkCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    listOfOutputs?: boolean | ClassworkCountOutputTypeCountListOfOutputsArgs
  }

  // Custom InputTypes
  /**
   * ClassworkCountOutputType without action
   */
  export type ClassworkCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassworkCountOutputType
     */
    select?: ClassworkCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ClassworkCountOutputType without action
   */
  export type ClassworkCountOutputTypeCountListOfOutputsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FilesWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    email: string | null
    username: string | null
    password: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    email: string | null
    username: string | null
    password: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    username: number
    password: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    username?: true
    password?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    username?: true
    password?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    username?: true
    password?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    email: string | null
    username: string | null
    password: string | null
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    username?: boolean
    password?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    username?: boolean
    password?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    username?: boolean
    password?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    username?: boolean
    password?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "username" | "password", ExtArgs["result"]["user"]>

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string | null
      username: string | null
      password: string | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly email: FieldRef<"User", 'String'>
    readonly username: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data?: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
  }


  /**
   * Model Student
   */

  export type AggregateStudent = {
    _count: StudentCountAggregateOutputType | null
    _avg: StudentAvgAggregateOutputType | null
    _sum: StudentSumAggregateOutputType | null
    _min: StudentMinAggregateOutputType | null
    _max: StudentMaxAggregateOutputType | null
  }

  export type StudentAvgAggregateOutputType = {
    id: number | null
  }

  export type StudentSumAggregateOutputType = {
    id: number | null
  }

  export type StudentMinAggregateOutputType = {
    id: number | null
    firstname: string | null
    middlename: string | null
    lastname: string | null
    gender: string | null
    approvalStatus: string | null
    profile: string | null
  }

  export type StudentMaxAggregateOutputType = {
    id: number | null
    firstname: string | null
    middlename: string | null
    lastname: string | null
    gender: string | null
    approvalStatus: string | null
    profile: string | null
  }

  export type StudentCountAggregateOutputType = {
    id: number
    firstname: number
    middlename: number
    lastname: number
    gender: number
    approvalStatus: number
    profile: number
    _all: number
  }


  export type StudentAvgAggregateInputType = {
    id?: true
  }

  export type StudentSumAggregateInputType = {
    id?: true
  }

  export type StudentMinAggregateInputType = {
    id?: true
    firstname?: true
    middlename?: true
    lastname?: true
    gender?: true
    approvalStatus?: true
    profile?: true
  }

  export type StudentMaxAggregateInputType = {
    id?: true
    firstname?: true
    middlename?: true
    lastname?: true
    gender?: true
    approvalStatus?: true
    profile?: true
  }

  export type StudentCountAggregateInputType = {
    id?: true
    firstname?: true
    middlename?: true
    lastname?: true
    gender?: true
    approvalStatus?: true
    profile?: true
    _all?: true
  }

  export type StudentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Student to aggregate.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Students
    **/
    _count?: true | StudentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StudentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StudentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StudentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StudentMaxAggregateInputType
  }

  export type GetStudentAggregateType<T extends StudentAggregateArgs> = {
        [P in keyof T & keyof AggregateStudent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStudent[P]>
      : GetScalarType<T[P], AggregateStudent[P]>
  }




  export type StudentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudentWhereInput
    orderBy?: StudentOrderByWithAggregationInput | StudentOrderByWithAggregationInput[]
    by: StudentScalarFieldEnum[] | StudentScalarFieldEnum
    having?: StudentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StudentCountAggregateInputType | true
    _avg?: StudentAvgAggregateInputType
    _sum?: StudentSumAggregateInputType
    _min?: StudentMinAggregateInputType
    _max?: StudentMaxAggregateInputType
  }

  export type StudentGroupByOutputType = {
    id: number
    firstname: string
    middlename: string
    lastname: string
    gender: string
    approvalStatus: string
    profile: string
    _count: StudentCountAggregateOutputType | null
    _avg: StudentAvgAggregateOutputType | null
    _sum: StudentSumAggregateOutputType | null
    _min: StudentMinAggregateOutputType | null
    _max: StudentMaxAggregateOutputType | null
  }

  type GetStudentGroupByPayload<T extends StudentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StudentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StudentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StudentGroupByOutputType[P]>
            : GetScalarType<T[P], StudentGroupByOutputType[P]>
        }
      >
    >


  export type StudentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstname?: boolean
    middlename?: boolean
    lastname?: boolean
    gender?: boolean
    approvalStatus?: boolean
    profile?: boolean
    listOfEnrolledClassrooms?: boolean | Student$listOfEnrolledClassroomsArgs<ExtArgs>
    listOfClasswork?: boolean | Student$listOfClassworkArgs<ExtArgs>
    _count?: boolean | StudentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["student"]>

  export type StudentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstname?: boolean
    middlename?: boolean
    lastname?: boolean
    gender?: boolean
    approvalStatus?: boolean
    profile?: boolean
  }, ExtArgs["result"]["student"]>

  export type StudentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstname?: boolean
    middlename?: boolean
    lastname?: boolean
    gender?: boolean
    approvalStatus?: boolean
    profile?: boolean
  }, ExtArgs["result"]["student"]>

  export type StudentSelectScalar = {
    id?: boolean
    firstname?: boolean
    middlename?: boolean
    lastname?: boolean
    gender?: boolean
    approvalStatus?: boolean
    profile?: boolean
  }

  export type StudentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "firstname" | "middlename" | "lastname" | "gender" | "approvalStatus" | "profile", ExtArgs["result"]["student"]>
  export type StudentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    listOfEnrolledClassrooms?: boolean | Student$listOfEnrolledClassroomsArgs<ExtArgs>
    listOfClasswork?: boolean | Student$listOfClassworkArgs<ExtArgs>
    _count?: boolean | StudentCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type StudentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type StudentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $StudentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Student"
    objects: {
      listOfEnrolledClassrooms: Prisma.$ClassroomPayload<ExtArgs>[]
      listOfClasswork: Prisma.$ClassworkPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      firstname: string
      middlename: string
      lastname: string
      gender: string
      approvalStatus: string
      profile: string
    }, ExtArgs["result"]["student"]>
    composites: {}
  }

  type StudentGetPayload<S extends boolean | null | undefined | StudentDefaultArgs> = $Result.GetResult<Prisma.$StudentPayload, S>

  type StudentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StudentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StudentCountAggregateInputType | true
    }

  export interface StudentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Student'], meta: { name: 'Student' } }
    /**
     * Find zero or one Student that matches the filter.
     * @param {StudentFindUniqueArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StudentFindUniqueArgs>(args: SelectSubset<T, StudentFindUniqueArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Student that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StudentFindUniqueOrThrowArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StudentFindUniqueOrThrowArgs>(args: SelectSubset<T, StudentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Student that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentFindFirstArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StudentFindFirstArgs>(args?: SelectSubset<T, StudentFindFirstArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Student that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentFindFirstOrThrowArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StudentFindFirstOrThrowArgs>(args?: SelectSubset<T, StudentFindFirstOrThrowArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Students that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Students
     * const students = await prisma.student.findMany()
     * 
     * // Get first 10 Students
     * const students = await prisma.student.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const studentWithIdOnly = await prisma.student.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StudentFindManyArgs>(args?: SelectSubset<T, StudentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Student.
     * @param {StudentCreateArgs} args - Arguments to create a Student.
     * @example
     * // Create one Student
     * const Student = await prisma.student.create({
     *   data: {
     *     // ... data to create a Student
     *   }
     * })
     * 
     */
    create<T extends StudentCreateArgs>(args: SelectSubset<T, StudentCreateArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Students.
     * @param {StudentCreateManyArgs} args - Arguments to create many Students.
     * @example
     * // Create many Students
     * const student = await prisma.student.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StudentCreateManyArgs>(args?: SelectSubset<T, StudentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Students and returns the data saved in the database.
     * @param {StudentCreateManyAndReturnArgs} args - Arguments to create many Students.
     * @example
     * // Create many Students
     * const student = await prisma.student.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Students and only return the `id`
     * const studentWithIdOnly = await prisma.student.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StudentCreateManyAndReturnArgs>(args?: SelectSubset<T, StudentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Student.
     * @param {StudentDeleteArgs} args - Arguments to delete one Student.
     * @example
     * // Delete one Student
     * const Student = await prisma.student.delete({
     *   where: {
     *     // ... filter to delete one Student
     *   }
     * })
     * 
     */
    delete<T extends StudentDeleteArgs>(args: SelectSubset<T, StudentDeleteArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Student.
     * @param {StudentUpdateArgs} args - Arguments to update one Student.
     * @example
     * // Update one Student
     * const student = await prisma.student.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StudentUpdateArgs>(args: SelectSubset<T, StudentUpdateArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Students.
     * @param {StudentDeleteManyArgs} args - Arguments to filter Students to delete.
     * @example
     * // Delete a few Students
     * const { count } = await prisma.student.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StudentDeleteManyArgs>(args?: SelectSubset<T, StudentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Students.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Students
     * const student = await prisma.student.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StudentUpdateManyArgs>(args: SelectSubset<T, StudentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Students and returns the data updated in the database.
     * @param {StudentUpdateManyAndReturnArgs} args - Arguments to update many Students.
     * @example
     * // Update many Students
     * const student = await prisma.student.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Students and only return the `id`
     * const studentWithIdOnly = await prisma.student.updateManyAndReturn({
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
    updateManyAndReturn<T extends StudentUpdateManyAndReturnArgs>(args: SelectSubset<T, StudentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Student.
     * @param {StudentUpsertArgs} args - Arguments to update or create a Student.
     * @example
     * // Update or create a Student
     * const student = await prisma.student.upsert({
     *   create: {
     *     // ... data to create a Student
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Student we want to update
     *   }
     * })
     */
    upsert<T extends StudentUpsertArgs>(args: SelectSubset<T, StudentUpsertArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Students.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentCountArgs} args - Arguments to filter Students to count.
     * @example
     * // Count the number of Students
     * const count = await prisma.student.count({
     *   where: {
     *     // ... the filter for the Students we want to count
     *   }
     * })
    **/
    count<T extends StudentCountArgs>(
      args?: Subset<T, StudentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StudentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Student.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StudentAggregateArgs>(args: Subset<T, StudentAggregateArgs>): Prisma.PrismaPromise<GetStudentAggregateType<T>>

    /**
     * Group by Student.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentGroupByArgs} args - Group by arguments.
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
      T extends StudentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StudentGroupByArgs['orderBy'] }
        : { orderBy?: StudentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, StudentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStudentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Student model
   */
  readonly fields: StudentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Student.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StudentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    listOfEnrolledClassrooms<T extends Student$listOfEnrolledClassroomsArgs<ExtArgs> = {}>(args?: Subset<T, Student$listOfEnrolledClassroomsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClassroomPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    listOfClasswork<T extends Student$listOfClassworkArgs<ExtArgs> = {}>(args?: Subset<T, Student$listOfClassworkArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClassworkPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Student model
   */
  interface StudentFieldRefs {
    readonly id: FieldRef<"Student", 'Int'>
    readonly firstname: FieldRef<"Student", 'String'>
    readonly middlename: FieldRef<"Student", 'String'>
    readonly lastname: FieldRef<"Student", 'String'>
    readonly gender: FieldRef<"Student", 'String'>
    readonly approvalStatus: FieldRef<"Student", 'String'>
    readonly profile: FieldRef<"Student", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Student findUnique
   */
  export type StudentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where: StudentWhereUniqueInput
  }

  /**
   * Student findUniqueOrThrow
   */
  export type StudentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where: StudentWhereUniqueInput
  }

  /**
   * Student findFirst
   */
  export type StudentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Students.
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Students.
     */
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * Student findFirstOrThrow
   */
  export type StudentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Students.
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Students.
     */
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * Student findMany
   */
  export type StudentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Students to fetch.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Students.
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * Student create
   */
  export type StudentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * The data needed to create a Student.
     */
    data: XOR<StudentCreateInput, StudentUncheckedCreateInput>
  }

  /**
   * Student createMany
   */
  export type StudentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Students.
     */
    data: StudentCreateManyInput | StudentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Student createManyAndReturn
   */
  export type StudentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * The data used to create many Students.
     */
    data: StudentCreateManyInput | StudentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Student update
   */
  export type StudentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * The data needed to update a Student.
     */
    data: XOR<StudentUpdateInput, StudentUncheckedUpdateInput>
    /**
     * Choose, which Student to update.
     */
    where: StudentWhereUniqueInput
  }

  /**
   * Student updateMany
   */
  export type StudentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Students.
     */
    data: XOR<StudentUpdateManyMutationInput, StudentUncheckedUpdateManyInput>
    /**
     * Filter which Students to update
     */
    where?: StudentWhereInput
    /**
     * Limit how many Students to update.
     */
    limit?: number
  }

  /**
   * Student updateManyAndReturn
   */
  export type StudentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * The data used to update Students.
     */
    data: XOR<StudentUpdateManyMutationInput, StudentUncheckedUpdateManyInput>
    /**
     * Filter which Students to update
     */
    where?: StudentWhereInput
    /**
     * Limit how many Students to update.
     */
    limit?: number
  }

  /**
   * Student upsert
   */
  export type StudentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * The filter to search for the Student to update in case it exists.
     */
    where: StudentWhereUniqueInput
    /**
     * In case the Student found by the `where` argument doesn't exist, create a new Student with this data.
     */
    create: XOR<StudentCreateInput, StudentUncheckedCreateInput>
    /**
     * In case the Student was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StudentUpdateInput, StudentUncheckedUpdateInput>
  }

  /**
   * Student delete
   */
  export type StudentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter which Student to delete.
     */
    where: StudentWhereUniqueInput
  }

  /**
   * Student deleteMany
   */
  export type StudentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Students to delete
     */
    where?: StudentWhereInput
    /**
     * Limit how many Students to delete.
     */
    limit?: number
  }

  /**
   * Student.listOfEnrolledClassrooms
   */
  export type Student$listOfEnrolledClassroomsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Classroom
     */
    select?: ClassroomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Classroom
     */
    omit?: ClassroomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassroomInclude<ExtArgs> | null
    where?: ClassroomWhereInput
    orderBy?: ClassroomOrderByWithRelationInput | ClassroomOrderByWithRelationInput[]
    cursor?: ClassroomWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ClassroomScalarFieldEnum | ClassroomScalarFieldEnum[]
  }

  /**
   * Student.listOfClasswork
   */
  export type Student$listOfClassworkArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Classwork
     */
    select?: ClassworkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Classwork
     */
    omit?: ClassworkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassworkInclude<ExtArgs> | null
    where?: ClassworkWhereInput
    orderBy?: ClassworkOrderByWithRelationInput | ClassworkOrderByWithRelationInput[]
    cursor?: ClassworkWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ClassworkScalarFieldEnum | ClassworkScalarFieldEnum[]
  }

  /**
   * Student without action
   */
  export type StudentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
  }


  /**
   * Model Professor
   */

  export type AggregateProfessor = {
    _count: ProfessorCountAggregateOutputType | null
    _avg: ProfessorAvgAggregateOutputType | null
    _sum: ProfessorSumAggregateOutputType | null
    _min: ProfessorMinAggregateOutputType | null
    _max: ProfessorMaxAggregateOutputType | null
  }

  export type ProfessorAvgAggregateOutputType = {
    id: number | null
  }

  export type ProfessorSumAggregateOutputType = {
    id: number | null
  }

  export type ProfessorMinAggregateOutputType = {
    id: number | null
    fullname: string | null
    profile: string | null
  }

  export type ProfessorMaxAggregateOutputType = {
    id: number | null
    fullname: string | null
    profile: string | null
  }

  export type ProfessorCountAggregateOutputType = {
    id: number
    fullname: number
    profile: number
    _all: number
  }


  export type ProfessorAvgAggregateInputType = {
    id?: true
  }

  export type ProfessorSumAggregateInputType = {
    id?: true
  }

  export type ProfessorMinAggregateInputType = {
    id?: true
    fullname?: true
    profile?: true
  }

  export type ProfessorMaxAggregateInputType = {
    id?: true
    fullname?: true
    profile?: true
  }

  export type ProfessorCountAggregateInputType = {
    id?: true
    fullname?: true
    profile?: true
    _all?: true
  }

  export type ProfessorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Professor to aggregate.
     */
    where?: ProfessorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Professors to fetch.
     */
    orderBy?: ProfessorOrderByWithRelationInput | ProfessorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProfessorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Professors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Professors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Professors
    **/
    _count?: true | ProfessorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProfessorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProfessorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProfessorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProfessorMaxAggregateInputType
  }

  export type GetProfessorAggregateType<T extends ProfessorAggregateArgs> = {
        [P in keyof T & keyof AggregateProfessor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProfessor[P]>
      : GetScalarType<T[P], AggregateProfessor[P]>
  }




  export type ProfessorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProfessorWhereInput
    orderBy?: ProfessorOrderByWithAggregationInput | ProfessorOrderByWithAggregationInput[]
    by: ProfessorScalarFieldEnum[] | ProfessorScalarFieldEnum
    having?: ProfessorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProfessorCountAggregateInputType | true
    _avg?: ProfessorAvgAggregateInputType
    _sum?: ProfessorSumAggregateInputType
    _min?: ProfessorMinAggregateInputType
    _max?: ProfessorMaxAggregateInputType
  }

  export type ProfessorGroupByOutputType = {
    id: number
    fullname: string
    profile: string
    _count: ProfessorCountAggregateOutputType | null
    _avg: ProfessorAvgAggregateOutputType | null
    _sum: ProfessorSumAggregateOutputType | null
    _min: ProfessorMinAggregateOutputType | null
    _max: ProfessorMaxAggregateOutputType | null
  }

  type GetProfessorGroupByPayload<T extends ProfessorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProfessorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProfessorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProfessorGroupByOutputType[P]>
            : GetScalarType<T[P], ProfessorGroupByOutputType[P]>
        }
      >
    >


  export type ProfessorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullname?: boolean
    profile?: boolean
    listOfCreatedClassrooms?: boolean | Professor$listOfCreatedClassroomsArgs<ExtArgs>
    _count?: boolean | ProfessorCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["professor"]>

  export type ProfessorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullname?: boolean
    profile?: boolean
  }, ExtArgs["result"]["professor"]>

  export type ProfessorSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullname?: boolean
    profile?: boolean
  }, ExtArgs["result"]["professor"]>

  export type ProfessorSelectScalar = {
    id?: boolean
    fullname?: boolean
    profile?: boolean
  }

  export type ProfessorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "fullname" | "profile", ExtArgs["result"]["professor"]>
  export type ProfessorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    listOfCreatedClassrooms?: boolean | Professor$listOfCreatedClassroomsArgs<ExtArgs>
    _count?: boolean | ProfessorCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProfessorIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ProfessorIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ProfessorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Professor"
    objects: {
      listOfCreatedClassrooms: Prisma.$ClassroomPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      fullname: string
      profile: string
    }, ExtArgs["result"]["professor"]>
    composites: {}
  }

  type ProfessorGetPayload<S extends boolean | null | undefined | ProfessorDefaultArgs> = $Result.GetResult<Prisma.$ProfessorPayload, S>

  type ProfessorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProfessorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProfessorCountAggregateInputType | true
    }

  export interface ProfessorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Professor'], meta: { name: 'Professor' } }
    /**
     * Find zero or one Professor that matches the filter.
     * @param {ProfessorFindUniqueArgs} args - Arguments to find a Professor
     * @example
     * // Get one Professor
     * const professor = await prisma.professor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProfessorFindUniqueArgs>(args: SelectSubset<T, ProfessorFindUniqueArgs<ExtArgs>>): Prisma__ProfessorClient<$Result.GetResult<Prisma.$ProfessorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Professor that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProfessorFindUniqueOrThrowArgs} args - Arguments to find a Professor
     * @example
     * // Get one Professor
     * const professor = await prisma.professor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProfessorFindUniqueOrThrowArgs>(args: SelectSubset<T, ProfessorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProfessorClient<$Result.GetResult<Prisma.$ProfessorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Professor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfessorFindFirstArgs} args - Arguments to find a Professor
     * @example
     * // Get one Professor
     * const professor = await prisma.professor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProfessorFindFirstArgs>(args?: SelectSubset<T, ProfessorFindFirstArgs<ExtArgs>>): Prisma__ProfessorClient<$Result.GetResult<Prisma.$ProfessorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Professor that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfessorFindFirstOrThrowArgs} args - Arguments to find a Professor
     * @example
     * // Get one Professor
     * const professor = await prisma.professor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProfessorFindFirstOrThrowArgs>(args?: SelectSubset<T, ProfessorFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProfessorClient<$Result.GetResult<Prisma.$ProfessorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Professors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfessorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Professors
     * const professors = await prisma.professor.findMany()
     * 
     * // Get first 10 Professors
     * const professors = await prisma.professor.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const professorWithIdOnly = await prisma.professor.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProfessorFindManyArgs>(args?: SelectSubset<T, ProfessorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfessorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Professor.
     * @param {ProfessorCreateArgs} args - Arguments to create a Professor.
     * @example
     * // Create one Professor
     * const Professor = await prisma.professor.create({
     *   data: {
     *     // ... data to create a Professor
     *   }
     * })
     * 
     */
    create<T extends ProfessorCreateArgs>(args: SelectSubset<T, ProfessorCreateArgs<ExtArgs>>): Prisma__ProfessorClient<$Result.GetResult<Prisma.$ProfessorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Professors.
     * @param {ProfessorCreateManyArgs} args - Arguments to create many Professors.
     * @example
     * // Create many Professors
     * const professor = await prisma.professor.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProfessorCreateManyArgs>(args?: SelectSubset<T, ProfessorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Professors and returns the data saved in the database.
     * @param {ProfessorCreateManyAndReturnArgs} args - Arguments to create many Professors.
     * @example
     * // Create many Professors
     * const professor = await prisma.professor.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Professors and only return the `id`
     * const professorWithIdOnly = await prisma.professor.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProfessorCreateManyAndReturnArgs>(args?: SelectSubset<T, ProfessorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfessorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Professor.
     * @param {ProfessorDeleteArgs} args - Arguments to delete one Professor.
     * @example
     * // Delete one Professor
     * const Professor = await prisma.professor.delete({
     *   where: {
     *     // ... filter to delete one Professor
     *   }
     * })
     * 
     */
    delete<T extends ProfessorDeleteArgs>(args: SelectSubset<T, ProfessorDeleteArgs<ExtArgs>>): Prisma__ProfessorClient<$Result.GetResult<Prisma.$ProfessorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Professor.
     * @param {ProfessorUpdateArgs} args - Arguments to update one Professor.
     * @example
     * // Update one Professor
     * const professor = await prisma.professor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProfessorUpdateArgs>(args: SelectSubset<T, ProfessorUpdateArgs<ExtArgs>>): Prisma__ProfessorClient<$Result.GetResult<Prisma.$ProfessorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Professors.
     * @param {ProfessorDeleteManyArgs} args - Arguments to filter Professors to delete.
     * @example
     * // Delete a few Professors
     * const { count } = await prisma.professor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProfessorDeleteManyArgs>(args?: SelectSubset<T, ProfessorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Professors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfessorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Professors
     * const professor = await prisma.professor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProfessorUpdateManyArgs>(args: SelectSubset<T, ProfessorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Professors and returns the data updated in the database.
     * @param {ProfessorUpdateManyAndReturnArgs} args - Arguments to update many Professors.
     * @example
     * // Update many Professors
     * const professor = await prisma.professor.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Professors and only return the `id`
     * const professorWithIdOnly = await prisma.professor.updateManyAndReturn({
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
    updateManyAndReturn<T extends ProfessorUpdateManyAndReturnArgs>(args: SelectSubset<T, ProfessorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfessorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Professor.
     * @param {ProfessorUpsertArgs} args - Arguments to update or create a Professor.
     * @example
     * // Update or create a Professor
     * const professor = await prisma.professor.upsert({
     *   create: {
     *     // ... data to create a Professor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Professor we want to update
     *   }
     * })
     */
    upsert<T extends ProfessorUpsertArgs>(args: SelectSubset<T, ProfessorUpsertArgs<ExtArgs>>): Prisma__ProfessorClient<$Result.GetResult<Prisma.$ProfessorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Professors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfessorCountArgs} args - Arguments to filter Professors to count.
     * @example
     * // Count the number of Professors
     * const count = await prisma.professor.count({
     *   where: {
     *     // ... the filter for the Professors we want to count
     *   }
     * })
    **/
    count<T extends ProfessorCountArgs>(
      args?: Subset<T, ProfessorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProfessorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Professor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfessorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProfessorAggregateArgs>(args: Subset<T, ProfessorAggregateArgs>): Prisma.PrismaPromise<GetProfessorAggregateType<T>>

    /**
     * Group by Professor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfessorGroupByArgs} args - Group by arguments.
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
      T extends ProfessorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProfessorGroupByArgs['orderBy'] }
        : { orderBy?: ProfessorGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProfessorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProfessorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Professor model
   */
  readonly fields: ProfessorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Professor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProfessorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    listOfCreatedClassrooms<T extends Professor$listOfCreatedClassroomsArgs<ExtArgs> = {}>(args?: Subset<T, Professor$listOfCreatedClassroomsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClassroomPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Professor model
   */
  interface ProfessorFieldRefs {
    readonly id: FieldRef<"Professor", 'Int'>
    readonly fullname: FieldRef<"Professor", 'String'>
    readonly profile: FieldRef<"Professor", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Professor findUnique
   */
  export type ProfessorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Professor
     */
    select?: ProfessorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Professor
     */
    omit?: ProfessorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessorInclude<ExtArgs> | null
    /**
     * Filter, which Professor to fetch.
     */
    where: ProfessorWhereUniqueInput
  }

  /**
   * Professor findUniqueOrThrow
   */
  export type ProfessorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Professor
     */
    select?: ProfessorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Professor
     */
    omit?: ProfessorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessorInclude<ExtArgs> | null
    /**
     * Filter, which Professor to fetch.
     */
    where: ProfessorWhereUniqueInput
  }

  /**
   * Professor findFirst
   */
  export type ProfessorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Professor
     */
    select?: ProfessorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Professor
     */
    omit?: ProfessorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessorInclude<ExtArgs> | null
    /**
     * Filter, which Professor to fetch.
     */
    where?: ProfessorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Professors to fetch.
     */
    orderBy?: ProfessorOrderByWithRelationInput | ProfessorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Professors.
     */
    cursor?: ProfessorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Professors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Professors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Professors.
     */
    distinct?: ProfessorScalarFieldEnum | ProfessorScalarFieldEnum[]
  }

  /**
   * Professor findFirstOrThrow
   */
  export type ProfessorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Professor
     */
    select?: ProfessorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Professor
     */
    omit?: ProfessorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessorInclude<ExtArgs> | null
    /**
     * Filter, which Professor to fetch.
     */
    where?: ProfessorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Professors to fetch.
     */
    orderBy?: ProfessorOrderByWithRelationInput | ProfessorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Professors.
     */
    cursor?: ProfessorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Professors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Professors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Professors.
     */
    distinct?: ProfessorScalarFieldEnum | ProfessorScalarFieldEnum[]
  }

  /**
   * Professor findMany
   */
  export type ProfessorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Professor
     */
    select?: ProfessorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Professor
     */
    omit?: ProfessorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessorInclude<ExtArgs> | null
    /**
     * Filter, which Professors to fetch.
     */
    where?: ProfessorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Professors to fetch.
     */
    orderBy?: ProfessorOrderByWithRelationInput | ProfessorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Professors.
     */
    cursor?: ProfessorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Professors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Professors.
     */
    skip?: number
    distinct?: ProfessorScalarFieldEnum | ProfessorScalarFieldEnum[]
  }

  /**
   * Professor create
   */
  export type ProfessorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Professor
     */
    select?: ProfessorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Professor
     */
    omit?: ProfessorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessorInclude<ExtArgs> | null
    /**
     * The data needed to create a Professor.
     */
    data: XOR<ProfessorCreateInput, ProfessorUncheckedCreateInput>
  }

  /**
   * Professor createMany
   */
  export type ProfessorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Professors.
     */
    data: ProfessorCreateManyInput | ProfessorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Professor createManyAndReturn
   */
  export type ProfessorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Professor
     */
    select?: ProfessorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Professor
     */
    omit?: ProfessorOmit<ExtArgs> | null
    /**
     * The data used to create many Professors.
     */
    data: ProfessorCreateManyInput | ProfessorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Professor update
   */
  export type ProfessorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Professor
     */
    select?: ProfessorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Professor
     */
    omit?: ProfessorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessorInclude<ExtArgs> | null
    /**
     * The data needed to update a Professor.
     */
    data: XOR<ProfessorUpdateInput, ProfessorUncheckedUpdateInput>
    /**
     * Choose, which Professor to update.
     */
    where: ProfessorWhereUniqueInput
  }

  /**
   * Professor updateMany
   */
  export type ProfessorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Professors.
     */
    data: XOR<ProfessorUpdateManyMutationInput, ProfessorUncheckedUpdateManyInput>
    /**
     * Filter which Professors to update
     */
    where?: ProfessorWhereInput
    /**
     * Limit how many Professors to update.
     */
    limit?: number
  }

  /**
   * Professor updateManyAndReturn
   */
  export type ProfessorUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Professor
     */
    select?: ProfessorSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Professor
     */
    omit?: ProfessorOmit<ExtArgs> | null
    /**
     * The data used to update Professors.
     */
    data: XOR<ProfessorUpdateManyMutationInput, ProfessorUncheckedUpdateManyInput>
    /**
     * Filter which Professors to update
     */
    where?: ProfessorWhereInput
    /**
     * Limit how many Professors to update.
     */
    limit?: number
  }

  /**
   * Professor upsert
   */
  export type ProfessorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Professor
     */
    select?: ProfessorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Professor
     */
    omit?: ProfessorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessorInclude<ExtArgs> | null
    /**
     * The filter to search for the Professor to update in case it exists.
     */
    where: ProfessorWhereUniqueInput
    /**
     * In case the Professor found by the `where` argument doesn't exist, create a new Professor with this data.
     */
    create: XOR<ProfessorCreateInput, ProfessorUncheckedCreateInput>
    /**
     * In case the Professor was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProfessorUpdateInput, ProfessorUncheckedUpdateInput>
  }

  /**
   * Professor delete
   */
  export type ProfessorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Professor
     */
    select?: ProfessorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Professor
     */
    omit?: ProfessorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessorInclude<ExtArgs> | null
    /**
     * Filter which Professor to delete.
     */
    where: ProfessorWhereUniqueInput
  }

  /**
   * Professor deleteMany
   */
  export type ProfessorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Professors to delete
     */
    where?: ProfessorWhereInput
    /**
     * Limit how many Professors to delete.
     */
    limit?: number
  }

  /**
   * Professor.listOfCreatedClassrooms
   */
  export type Professor$listOfCreatedClassroomsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Classroom
     */
    select?: ClassroomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Classroom
     */
    omit?: ClassroomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassroomInclude<ExtArgs> | null
    where?: ClassroomWhereInput
    orderBy?: ClassroomOrderByWithRelationInput | ClassroomOrderByWithRelationInput[]
    cursor?: ClassroomWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ClassroomScalarFieldEnum | ClassroomScalarFieldEnum[]
  }

  /**
   * Professor without action
   */
  export type ProfessorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Professor
     */
    select?: ProfessorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Professor
     */
    omit?: ProfessorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessorInclude<ExtArgs> | null
  }


  /**
   * Model ClassworkType
   */

  export type AggregateClassworkType = {
    _count: ClassworkTypeCountAggregateOutputType | null
    _avg: ClassworkTypeAvgAggregateOutputType | null
    _sum: ClassworkTypeSumAggregateOutputType | null
    _min: ClassworkTypeMinAggregateOutputType | null
    _max: ClassworkTypeMaxAggregateOutputType | null
  }

  export type ClassworkTypeAvgAggregateOutputType = {
    id: number | null
    roomId: number | null
  }

  export type ClassworkTypeSumAggregateOutputType = {
    id: number | null
    roomId: number | null
  }

  export type ClassworkTypeMinAggregateOutputType = {
    id: number | null
    classworkType: string | null
    roomId: number | null
  }

  export type ClassworkTypeMaxAggregateOutputType = {
    id: number | null
    classworkType: string | null
    roomId: number | null
  }

  export type ClassworkTypeCountAggregateOutputType = {
    id: number
    classworkType: number
    roomId: number
    _all: number
  }


  export type ClassworkTypeAvgAggregateInputType = {
    id?: true
    roomId?: true
  }

  export type ClassworkTypeSumAggregateInputType = {
    id?: true
    roomId?: true
  }

  export type ClassworkTypeMinAggregateInputType = {
    id?: true
    classworkType?: true
    roomId?: true
  }

  export type ClassworkTypeMaxAggregateInputType = {
    id?: true
    classworkType?: true
    roomId?: true
  }

  export type ClassworkTypeCountAggregateInputType = {
    id?: true
    classworkType?: true
    roomId?: true
    _all?: true
  }

  export type ClassworkTypeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ClassworkType to aggregate.
     */
    where?: ClassworkTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClassworkTypes to fetch.
     */
    orderBy?: ClassworkTypeOrderByWithRelationInput | ClassworkTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClassworkTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClassworkTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClassworkTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ClassworkTypes
    **/
    _count?: true | ClassworkTypeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ClassworkTypeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ClassworkTypeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClassworkTypeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClassworkTypeMaxAggregateInputType
  }

  export type GetClassworkTypeAggregateType<T extends ClassworkTypeAggregateArgs> = {
        [P in keyof T & keyof AggregateClassworkType]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClassworkType[P]>
      : GetScalarType<T[P], AggregateClassworkType[P]>
  }




  export type ClassworkTypeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClassworkTypeWhereInput
    orderBy?: ClassworkTypeOrderByWithAggregationInput | ClassworkTypeOrderByWithAggregationInput[]
    by: ClassworkTypeScalarFieldEnum[] | ClassworkTypeScalarFieldEnum
    having?: ClassworkTypeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClassworkTypeCountAggregateInputType | true
    _avg?: ClassworkTypeAvgAggregateInputType
    _sum?: ClassworkTypeSumAggregateInputType
    _min?: ClassworkTypeMinAggregateInputType
    _max?: ClassworkTypeMaxAggregateInputType
  }

  export type ClassworkTypeGroupByOutputType = {
    id: number
    classworkType: string
    roomId: number
    _count: ClassworkTypeCountAggregateOutputType | null
    _avg: ClassworkTypeAvgAggregateOutputType | null
    _sum: ClassworkTypeSumAggregateOutputType | null
    _min: ClassworkTypeMinAggregateOutputType | null
    _max: ClassworkTypeMaxAggregateOutputType | null
  }

  type GetClassworkTypeGroupByPayload<T extends ClassworkTypeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClassworkTypeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClassworkTypeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClassworkTypeGroupByOutputType[P]>
            : GetScalarType<T[P], ClassworkTypeGroupByOutputType[P]>
        }
      >
    >


  export type ClassworkTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    classworkType?: boolean
    roomId?: boolean
    relatedToClassroom?: boolean | ClassroomDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["classworkType"]>

  export type ClassworkTypeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    classworkType?: boolean
    roomId?: boolean
    relatedToClassroom?: boolean | ClassroomDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["classworkType"]>

  export type ClassworkTypeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    classworkType?: boolean
    roomId?: boolean
    relatedToClassroom?: boolean | ClassroomDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["classworkType"]>

  export type ClassworkTypeSelectScalar = {
    id?: boolean
    classworkType?: boolean
    roomId?: boolean
  }

  export type ClassworkTypeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "classworkType" | "roomId", ExtArgs["result"]["classworkType"]>
  export type ClassworkTypeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    relatedToClassroom?: boolean | ClassroomDefaultArgs<ExtArgs>
  }
  export type ClassworkTypeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    relatedToClassroom?: boolean | ClassroomDefaultArgs<ExtArgs>
  }
  export type ClassworkTypeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    relatedToClassroom?: boolean | ClassroomDefaultArgs<ExtArgs>
  }

  export type $ClassworkTypePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ClassworkType"
    objects: {
      relatedToClassroom: Prisma.$ClassroomPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      classworkType: string
      roomId: number
    }, ExtArgs["result"]["classworkType"]>
    composites: {}
  }

  type ClassworkTypeGetPayload<S extends boolean | null | undefined | ClassworkTypeDefaultArgs> = $Result.GetResult<Prisma.$ClassworkTypePayload, S>

  type ClassworkTypeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ClassworkTypeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClassworkTypeCountAggregateInputType | true
    }

  export interface ClassworkTypeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ClassworkType'], meta: { name: 'ClassworkType' } }
    /**
     * Find zero or one ClassworkType that matches the filter.
     * @param {ClassworkTypeFindUniqueArgs} args - Arguments to find a ClassworkType
     * @example
     * // Get one ClassworkType
     * const classworkType = await prisma.classworkType.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClassworkTypeFindUniqueArgs>(args: SelectSubset<T, ClassworkTypeFindUniqueArgs<ExtArgs>>): Prisma__ClassworkTypeClient<$Result.GetResult<Prisma.$ClassworkTypePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ClassworkType that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ClassworkTypeFindUniqueOrThrowArgs} args - Arguments to find a ClassworkType
     * @example
     * // Get one ClassworkType
     * const classworkType = await prisma.classworkType.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClassworkTypeFindUniqueOrThrowArgs>(args: SelectSubset<T, ClassworkTypeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ClassworkTypeClient<$Result.GetResult<Prisma.$ClassworkTypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ClassworkType that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassworkTypeFindFirstArgs} args - Arguments to find a ClassworkType
     * @example
     * // Get one ClassworkType
     * const classworkType = await prisma.classworkType.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClassworkTypeFindFirstArgs>(args?: SelectSubset<T, ClassworkTypeFindFirstArgs<ExtArgs>>): Prisma__ClassworkTypeClient<$Result.GetResult<Prisma.$ClassworkTypePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ClassworkType that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassworkTypeFindFirstOrThrowArgs} args - Arguments to find a ClassworkType
     * @example
     * // Get one ClassworkType
     * const classworkType = await prisma.classworkType.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClassworkTypeFindFirstOrThrowArgs>(args?: SelectSubset<T, ClassworkTypeFindFirstOrThrowArgs<ExtArgs>>): Prisma__ClassworkTypeClient<$Result.GetResult<Prisma.$ClassworkTypePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ClassworkTypes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassworkTypeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ClassworkTypes
     * const classworkTypes = await prisma.classworkType.findMany()
     * 
     * // Get first 10 ClassworkTypes
     * const classworkTypes = await prisma.classworkType.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const classworkTypeWithIdOnly = await prisma.classworkType.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ClassworkTypeFindManyArgs>(args?: SelectSubset<T, ClassworkTypeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClassworkTypePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ClassworkType.
     * @param {ClassworkTypeCreateArgs} args - Arguments to create a ClassworkType.
     * @example
     * // Create one ClassworkType
     * const ClassworkType = await prisma.classworkType.create({
     *   data: {
     *     // ... data to create a ClassworkType
     *   }
     * })
     * 
     */
    create<T extends ClassworkTypeCreateArgs>(args: SelectSubset<T, ClassworkTypeCreateArgs<ExtArgs>>): Prisma__ClassworkTypeClient<$Result.GetResult<Prisma.$ClassworkTypePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ClassworkTypes.
     * @param {ClassworkTypeCreateManyArgs} args - Arguments to create many ClassworkTypes.
     * @example
     * // Create many ClassworkTypes
     * const classworkType = await prisma.classworkType.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ClassworkTypeCreateManyArgs>(args?: SelectSubset<T, ClassworkTypeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ClassworkTypes and returns the data saved in the database.
     * @param {ClassworkTypeCreateManyAndReturnArgs} args - Arguments to create many ClassworkTypes.
     * @example
     * // Create many ClassworkTypes
     * const classworkType = await prisma.classworkType.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ClassworkTypes and only return the `id`
     * const classworkTypeWithIdOnly = await prisma.classworkType.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ClassworkTypeCreateManyAndReturnArgs>(args?: SelectSubset<T, ClassworkTypeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClassworkTypePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ClassworkType.
     * @param {ClassworkTypeDeleteArgs} args - Arguments to delete one ClassworkType.
     * @example
     * // Delete one ClassworkType
     * const ClassworkType = await prisma.classworkType.delete({
     *   where: {
     *     // ... filter to delete one ClassworkType
     *   }
     * })
     * 
     */
    delete<T extends ClassworkTypeDeleteArgs>(args: SelectSubset<T, ClassworkTypeDeleteArgs<ExtArgs>>): Prisma__ClassworkTypeClient<$Result.GetResult<Prisma.$ClassworkTypePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ClassworkType.
     * @param {ClassworkTypeUpdateArgs} args - Arguments to update one ClassworkType.
     * @example
     * // Update one ClassworkType
     * const classworkType = await prisma.classworkType.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ClassworkTypeUpdateArgs>(args: SelectSubset<T, ClassworkTypeUpdateArgs<ExtArgs>>): Prisma__ClassworkTypeClient<$Result.GetResult<Prisma.$ClassworkTypePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ClassworkTypes.
     * @param {ClassworkTypeDeleteManyArgs} args - Arguments to filter ClassworkTypes to delete.
     * @example
     * // Delete a few ClassworkTypes
     * const { count } = await prisma.classworkType.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ClassworkTypeDeleteManyArgs>(args?: SelectSubset<T, ClassworkTypeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ClassworkTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassworkTypeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ClassworkTypes
     * const classworkType = await prisma.classworkType.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ClassworkTypeUpdateManyArgs>(args: SelectSubset<T, ClassworkTypeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ClassworkTypes and returns the data updated in the database.
     * @param {ClassworkTypeUpdateManyAndReturnArgs} args - Arguments to update many ClassworkTypes.
     * @example
     * // Update many ClassworkTypes
     * const classworkType = await prisma.classworkType.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ClassworkTypes and only return the `id`
     * const classworkTypeWithIdOnly = await prisma.classworkType.updateManyAndReturn({
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
    updateManyAndReturn<T extends ClassworkTypeUpdateManyAndReturnArgs>(args: SelectSubset<T, ClassworkTypeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClassworkTypePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ClassworkType.
     * @param {ClassworkTypeUpsertArgs} args - Arguments to update or create a ClassworkType.
     * @example
     * // Update or create a ClassworkType
     * const classworkType = await prisma.classworkType.upsert({
     *   create: {
     *     // ... data to create a ClassworkType
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ClassworkType we want to update
     *   }
     * })
     */
    upsert<T extends ClassworkTypeUpsertArgs>(args: SelectSubset<T, ClassworkTypeUpsertArgs<ExtArgs>>): Prisma__ClassworkTypeClient<$Result.GetResult<Prisma.$ClassworkTypePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ClassworkTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassworkTypeCountArgs} args - Arguments to filter ClassworkTypes to count.
     * @example
     * // Count the number of ClassworkTypes
     * const count = await prisma.classworkType.count({
     *   where: {
     *     // ... the filter for the ClassworkTypes we want to count
     *   }
     * })
    **/
    count<T extends ClassworkTypeCountArgs>(
      args?: Subset<T, ClassworkTypeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClassworkTypeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ClassworkType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassworkTypeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ClassworkTypeAggregateArgs>(args: Subset<T, ClassworkTypeAggregateArgs>): Prisma.PrismaPromise<GetClassworkTypeAggregateType<T>>

    /**
     * Group by ClassworkType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassworkTypeGroupByArgs} args - Group by arguments.
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
      T extends ClassworkTypeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClassworkTypeGroupByArgs['orderBy'] }
        : { orderBy?: ClassworkTypeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ClassworkTypeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClassworkTypeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ClassworkType model
   */
  readonly fields: ClassworkTypeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ClassworkType.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClassworkTypeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    relatedToClassroom<T extends ClassroomDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClassroomDefaultArgs<ExtArgs>>): Prisma__ClassroomClient<$Result.GetResult<Prisma.$ClassroomPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ClassworkType model
   */
  interface ClassworkTypeFieldRefs {
    readonly id: FieldRef<"ClassworkType", 'Int'>
    readonly classworkType: FieldRef<"ClassworkType", 'String'>
    readonly roomId: FieldRef<"ClassworkType", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * ClassworkType findUnique
   */
  export type ClassworkTypeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassworkType
     */
    select?: ClassworkTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClassworkType
     */
    omit?: ClassworkTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassworkTypeInclude<ExtArgs> | null
    /**
     * Filter, which ClassworkType to fetch.
     */
    where: ClassworkTypeWhereUniqueInput
  }

  /**
   * ClassworkType findUniqueOrThrow
   */
  export type ClassworkTypeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassworkType
     */
    select?: ClassworkTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClassworkType
     */
    omit?: ClassworkTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassworkTypeInclude<ExtArgs> | null
    /**
     * Filter, which ClassworkType to fetch.
     */
    where: ClassworkTypeWhereUniqueInput
  }

  /**
   * ClassworkType findFirst
   */
  export type ClassworkTypeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassworkType
     */
    select?: ClassworkTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClassworkType
     */
    omit?: ClassworkTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassworkTypeInclude<ExtArgs> | null
    /**
     * Filter, which ClassworkType to fetch.
     */
    where?: ClassworkTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClassworkTypes to fetch.
     */
    orderBy?: ClassworkTypeOrderByWithRelationInput | ClassworkTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ClassworkTypes.
     */
    cursor?: ClassworkTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClassworkTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClassworkTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ClassworkTypes.
     */
    distinct?: ClassworkTypeScalarFieldEnum | ClassworkTypeScalarFieldEnum[]
  }

  /**
   * ClassworkType findFirstOrThrow
   */
  export type ClassworkTypeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassworkType
     */
    select?: ClassworkTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClassworkType
     */
    omit?: ClassworkTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassworkTypeInclude<ExtArgs> | null
    /**
     * Filter, which ClassworkType to fetch.
     */
    where?: ClassworkTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClassworkTypes to fetch.
     */
    orderBy?: ClassworkTypeOrderByWithRelationInput | ClassworkTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ClassworkTypes.
     */
    cursor?: ClassworkTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClassworkTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClassworkTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ClassworkTypes.
     */
    distinct?: ClassworkTypeScalarFieldEnum | ClassworkTypeScalarFieldEnum[]
  }

  /**
   * ClassworkType findMany
   */
  export type ClassworkTypeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassworkType
     */
    select?: ClassworkTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClassworkType
     */
    omit?: ClassworkTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassworkTypeInclude<ExtArgs> | null
    /**
     * Filter, which ClassworkTypes to fetch.
     */
    where?: ClassworkTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClassworkTypes to fetch.
     */
    orderBy?: ClassworkTypeOrderByWithRelationInput | ClassworkTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ClassworkTypes.
     */
    cursor?: ClassworkTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClassworkTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClassworkTypes.
     */
    skip?: number
    distinct?: ClassworkTypeScalarFieldEnum | ClassworkTypeScalarFieldEnum[]
  }

  /**
   * ClassworkType create
   */
  export type ClassworkTypeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassworkType
     */
    select?: ClassworkTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClassworkType
     */
    omit?: ClassworkTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassworkTypeInclude<ExtArgs> | null
    /**
     * The data needed to create a ClassworkType.
     */
    data: XOR<ClassworkTypeCreateInput, ClassworkTypeUncheckedCreateInput>
  }

  /**
   * ClassworkType createMany
   */
  export type ClassworkTypeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ClassworkTypes.
     */
    data: ClassworkTypeCreateManyInput | ClassworkTypeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ClassworkType createManyAndReturn
   */
  export type ClassworkTypeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassworkType
     */
    select?: ClassworkTypeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ClassworkType
     */
    omit?: ClassworkTypeOmit<ExtArgs> | null
    /**
     * The data used to create many ClassworkTypes.
     */
    data: ClassworkTypeCreateManyInput | ClassworkTypeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassworkTypeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ClassworkType update
   */
  export type ClassworkTypeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassworkType
     */
    select?: ClassworkTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClassworkType
     */
    omit?: ClassworkTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassworkTypeInclude<ExtArgs> | null
    /**
     * The data needed to update a ClassworkType.
     */
    data: XOR<ClassworkTypeUpdateInput, ClassworkTypeUncheckedUpdateInput>
    /**
     * Choose, which ClassworkType to update.
     */
    where: ClassworkTypeWhereUniqueInput
  }

  /**
   * ClassworkType updateMany
   */
  export type ClassworkTypeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ClassworkTypes.
     */
    data: XOR<ClassworkTypeUpdateManyMutationInput, ClassworkTypeUncheckedUpdateManyInput>
    /**
     * Filter which ClassworkTypes to update
     */
    where?: ClassworkTypeWhereInput
    /**
     * Limit how many ClassworkTypes to update.
     */
    limit?: number
  }

  /**
   * ClassworkType updateManyAndReturn
   */
  export type ClassworkTypeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassworkType
     */
    select?: ClassworkTypeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ClassworkType
     */
    omit?: ClassworkTypeOmit<ExtArgs> | null
    /**
     * The data used to update ClassworkTypes.
     */
    data: XOR<ClassworkTypeUpdateManyMutationInput, ClassworkTypeUncheckedUpdateManyInput>
    /**
     * Filter which ClassworkTypes to update
     */
    where?: ClassworkTypeWhereInput
    /**
     * Limit how many ClassworkTypes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassworkTypeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ClassworkType upsert
   */
  export type ClassworkTypeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassworkType
     */
    select?: ClassworkTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClassworkType
     */
    omit?: ClassworkTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassworkTypeInclude<ExtArgs> | null
    /**
     * The filter to search for the ClassworkType to update in case it exists.
     */
    where: ClassworkTypeWhereUniqueInput
    /**
     * In case the ClassworkType found by the `where` argument doesn't exist, create a new ClassworkType with this data.
     */
    create: XOR<ClassworkTypeCreateInput, ClassworkTypeUncheckedCreateInput>
    /**
     * In case the ClassworkType was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClassworkTypeUpdateInput, ClassworkTypeUncheckedUpdateInput>
  }

  /**
   * ClassworkType delete
   */
  export type ClassworkTypeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassworkType
     */
    select?: ClassworkTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClassworkType
     */
    omit?: ClassworkTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassworkTypeInclude<ExtArgs> | null
    /**
     * Filter which ClassworkType to delete.
     */
    where: ClassworkTypeWhereUniqueInput
  }

  /**
   * ClassworkType deleteMany
   */
  export type ClassworkTypeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ClassworkTypes to delete
     */
    where?: ClassworkTypeWhereInput
    /**
     * Limit how many ClassworkTypes to delete.
     */
    limit?: number
  }

  /**
   * ClassworkType without action
   */
  export type ClassworkTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassworkType
     */
    select?: ClassworkTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClassworkType
     */
    omit?: ClassworkTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassworkTypeInclude<ExtArgs> | null
  }


  /**
   * Model Files
   */

  export type AggregateFiles = {
    _count: FilesCountAggregateOutputType | null
    _avg: FilesAvgAggregateOutputType | null
    _sum: FilesSumAggregateOutputType | null
    _min: FilesMinAggregateOutputType | null
    _max: FilesMaxAggregateOutputType | null
  }

  export type FilesAvgAggregateOutputType = {
    id: number | null
    size: number | null
    announceId: number | null
    classworkId: number | null
  }

  export type FilesSumAggregateOutputType = {
    id: number | null
    size: number | null
    announceId: number | null
    classworkId: number | null
  }

  export type FilesMinAggregateOutputType = {
    id: number | null
    filename: string | null
    path: string | null
    mimeType: string | null
    size: number | null
    announceId: number | null
    classworkId: number | null
  }

  export type FilesMaxAggregateOutputType = {
    id: number | null
    filename: string | null
    path: string | null
    mimeType: string | null
    size: number | null
    announceId: number | null
    classworkId: number | null
  }

  export type FilesCountAggregateOutputType = {
    id: number
    filename: number
    path: number
    mimeType: number
    size: number
    announceId: number
    classworkId: number
    _all: number
  }


  export type FilesAvgAggregateInputType = {
    id?: true
    size?: true
    announceId?: true
    classworkId?: true
  }

  export type FilesSumAggregateInputType = {
    id?: true
    size?: true
    announceId?: true
    classworkId?: true
  }

  export type FilesMinAggregateInputType = {
    id?: true
    filename?: true
    path?: true
    mimeType?: true
    size?: true
    announceId?: true
    classworkId?: true
  }

  export type FilesMaxAggregateInputType = {
    id?: true
    filename?: true
    path?: true
    mimeType?: true
    size?: true
    announceId?: true
    classworkId?: true
  }

  export type FilesCountAggregateInputType = {
    id?: true
    filename?: true
    path?: true
    mimeType?: true
    size?: true
    announceId?: true
    classworkId?: true
    _all?: true
  }

  export type FilesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Files to aggregate.
     */
    where?: FilesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Files to fetch.
     */
    orderBy?: FilesOrderByWithRelationInput | FilesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FilesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Files from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Files.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Files
    **/
    _count?: true | FilesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FilesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FilesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FilesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FilesMaxAggregateInputType
  }

  export type GetFilesAggregateType<T extends FilesAggregateArgs> = {
        [P in keyof T & keyof AggregateFiles]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFiles[P]>
      : GetScalarType<T[P], AggregateFiles[P]>
  }




  export type FilesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FilesWhereInput
    orderBy?: FilesOrderByWithAggregationInput | FilesOrderByWithAggregationInput[]
    by: FilesScalarFieldEnum[] | FilesScalarFieldEnum
    having?: FilesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FilesCountAggregateInputType | true
    _avg?: FilesAvgAggregateInputType
    _sum?: FilesSumAggregateInputType
    _min?: FilesMinAggregateInputType
    _max?: FilesMaxAggregateInputType
  }

  export type FilesGroupByOutputType = {
    id: number
    filename: string
    path: string
    mimeType: string
    size: number
    announceId: number
    classworkId: number
    _count: FilesCountAggregateOutputType | null
    _avg: FilesAvgAggregateOutputType | null
    _sum: FilesSumAggregateOutputType | null
    _min: FilesMinAggregateOutputType | null
    _max: FilesMaxAggregateOutputType | null
  }

  type GetFilesGroupByPayload<T extends FilesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FilesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FilesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FilesGroupByOutputType[P]>
            : GetScalarType<T[P], FilesGroupByOutputType[P]>
        }
      >
    >


  export type FilesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    filename?: boolean
    path?: boolean
    mimeType?: boolean
    size?: boolean
    announceId?: boolean
    classworkId?: boolean
    relatedToAnnouncement?: boolean | AnnouncementsDefaultArgs<ExtArgs>
    relatedToClasswork?: boolean | ClassworkDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["files"]>

  export type FilesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    filename?: boolean
    path?: boolean
    mimeType?: boolean
    size?: boolean
    announceId?: boolean
    classworkId?: boolean
    relatedToAnnouncement?: boolean | AnnouncementsDefaultArgs<ExtArgs>
    relatedToClasswork?: boolean | ClassworkDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["files"]>

  export type FilesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    filename?: boolean
    path?: boolean
    mimeType?: boolean
    size?: boolean
    announceId?: boolean
    classworkId?: boolean
    relatedToAnnouncement?: boolean | AnnouncementsDefaultArgs<ExtArgs>
    relatedToClasswork?: boolean | ClassworkDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["files"]>

  export type FilesSelectScalar = {
    id?: boolean
    filename?: boolean
    path?: boolean
    mimeType?: boolean
    size?: boolean
    announceId?: boolean
    classworkId?: boolean
  }

  export type FilesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "filename" | "path" | "mimeType" | "size" | "announceId" | "classworkId", ExtArgs["result"]["files"]>
  export type FilesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    relatedToAnnouncement?: boolean | AnnouncementsDefaultArgs<ExtArgs>
    relatedToClasswork?: boolean | ClassworkDefaultArgs<ExtArgs>
  }
  export type FilesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    relatedToAnnouncement?: boolean | AnnouncementsDefaultArgs<ExtArgs>
    relatedToClasswork?: boolean | ClassworkDefaultArgs<ExtArgs>
  }
  export type FilesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    relatedToAnnouncement?: boolean | AnnouncementsDefaultArgs<ExtArgs>
    relatedToClasswork?: boolean | ClassworkDefaultArgs<ExtArgs>
  }

  export type $FilesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Files"
    objects: {
      relatedToAnnouncement: Prisma.$AnnouncementsPayload<ExtArgs>
      relatedToClasswork: Prisma.$ClassworkPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      filename: string
      path: string
      mimeType: string
      size: number
      announceId: number
      classworkId: number
    }, ExtArgs["result"]["files"]>
    composites: {}
  }

  type FilesGetPayload<S extends boolean | null | undefined | FilesDefaultArgs> = $Result.GetResult<Prisma.$FilesPayload, S>

  type FilesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FilesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FilesCountAggregateInputType | true
    }

  export interface FilesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Files'], meta: { name: 'Files' } }
    /**
     * Find zero or one Files that matches the filter.
     * @param {FilesFindUniqueArgs} args - Arguments to find a Files
     * @example
     * // Get one Files
     * const files = await prisma.files.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FilesFindUniqueArgs>(args: SelectSubset<T, FilesFindUniqueArgs<ExtArgs>>): Prisma__FilesClient<$Result.GetResult<Prisma.$FilesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Files that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FilesFindUniqueOrThrowArgs} args - Arguments to find a Files
     * @example
     * // Get one Files
     * const files = await prisma.files.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FilesFindUniqueOrThrowArgs>(args: SelectSubset<T, FilesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FilesClient<$Result.GetResult<Prisma.$FilesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Files that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FilesFindFirstArgs} args - Arguments to find a Files
     * @example
     * // Get one Files
     * const files = await prisma.files.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FilesFindFirstArgs>(args?: SelectSubset<T, FilesFindFirstArgs<ExtArgs>>): Prisma__FilesClient<$Result.GetResult<Prisma.$FilesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Files that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FilesFindFirstOrThrowArgs} args - Arguments to find a Files
     * @example
     * // Get one Files
     * const files = await prisma.files.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FilesFindFirstOrThrowArgs>(args?: SelectSubset<T, FilesFindFirstOrThrowArgs<ExtArgs>>): Prisma__FilesClient<$Result.GetResult<Prisma.$FilesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Files that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FilesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Files
     * const files = await prisma.files.findMany()
     * 
     * // Get first 10 Files
     * const files = await prisma.files.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const filesWithIdOnly = await prisma.files.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FilesFindManyArgs>(args?: SelectSubset<T, FilesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FilesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Files.
     * @param {FilesCreateArgs} args - Arguments to create a Files.
     * @example
     * // Create one Files
     * const Files = await prisma.files.create({
     *   data: {
     *     // ... data to create a Files
     *   }
     * })
     * 
     */
    create<T extends FilesCreateArgs>(args: SelectSubset<T, FilesCreateArgs<ExtArgs>>): Prisma__FilesClient<$Result.GetResult<Prisma.$FilesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Files.
     * @param {FilesCreateManyArgs} args - Arguments to create many Files.
     * @example
     * // Create many Files
     * const files = await prisma.files.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FilesCreateManyArgs>(args?: SelectSubset<T, FilesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Files and returns the data saved in the database.
     * @param {FilesCreateManyAndReturnArgs} args - Arguments to create many Files.
     * @example
     * // Create many Files
     * const files = await prisma.files.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Files and only return the `id`
     * const filesWithIdOnly = await prisma.files.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FilesCreateManyAndReturnArgs>(args?: SelectSubset<T, FilesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FilesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Files.
     * @param {FilesDeleteArgs} args - Arguments to delete one Files.
     * @example
     * // Delete one Files
     * const Files = await prisma.files.delete({
     *   where: {
     *     // ... filter to delete one Files
     *   }
     * })
     * 
     */
    delete<T extends FilesDeleteArgs>(args: SelectSubset<T, FilesDeleteArgs<ExtArgs>>): Prisma__FilesClient<$Result.GetResult<Prisma.$FilesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Files.
     * @param {FilesUpdateArgs} args - Arguments to update one Files.
     * @example
     * // Update one Files
     * const files = await prisma.files.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FilesUpdateArgs>(args: SelectSubset<T, FilesUpdateArgs<ExtArgs>>): Prisma__FilesClient<$Result.GetResult<Prisma.$FilesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Files.
     * @param {FilesDeleteManyArgs} args - Arguments to filter Files to delete.
     * @example
     * // Delete a few Files
     * const { count } = await prisma.files.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FilesDeleteManyArgs>(args?: SelectSubset<T, FilesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Files.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FilesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Files
     * const files = await prisma.files.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FilesUpdateManyArgs>(args: SelectSubset<T, FilesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Files and returns the data updated in the database.
     * @param {FilesUpdateManyAndReturnArgs} args - Arguments to update many Files.
     * @example
     * // Update many Files
     * const files = await prisma.files.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Files and only return the `id`
     * const filesWithIdOnly = await prisma.files.updateManyAndReturn({
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
    updateManyAndReturn<T extends FilesUpdateManyAndReturnArgs>(args: SelectSubset<T, FilesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FilesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Files.
     * @param {FilesUpsertArgs} args - Arguments to update or create a Files.
     * @example
     * // Update or create a Files
     * const files = await prisma.files.upsert({
     *   create: {
     *     // ... data to create a Files
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Files we want to update
     *   }
     * })
     */
    upsert<T extends FilesUpsertArgs>(args: SelectSubset<T, FilesUpsertArgs<ExtArgs>>): Prisma__FilesClient<$Result.GetResult<Prisma.$FilesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Files.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FilesCountArgs} args - Arguments to filter Files to count.
     * @example
     * // Count the number of Files
     * const count = await prisma.files.count({
     *   where: {
     *     // ... the filter for the Files we want to count
     *   }
     * })
    **/
    count<T extends FilesCountArgs>(
      args?: Subset<T, FilesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FilesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Files.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FilesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FilesAggregateArgs>(args: Subset<T, FilesAggregateArgs>): Prisma.PrismaPromise<GetFilesAggregateType<T>>

    /**
     * Group by Files.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FilesGroupByArgs} args - Group by arguments.
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
      T extends FilesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FilesGroupByArgs['orderBy'] }
        : { orderBy?: FilesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FilesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFilesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Files model
   */
  readonly fields: FilesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Files.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FilesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    relatedToAnnouncement<T extends AnnouncementsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AnnouncementsDefaultArgs<ExtArgs>>): Prisma__AnnouncementsClient<$Result.GetResult<Prisma.$AnnouncementsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    relatedToClasswork<T extends ClassworkDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClassworkDefaultArgs<ExtArgs>>): Prisma__ClassworkClient<$Result.GetResult<Prisma.$ClassworkPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Files model
   */
  interface FilesFieldRefs {
    readonly id: FieldRef<"Files", 'Int'>
    readonly filename: FieldRef<"Files", 'String'>
    readonly path: FieldRef<"Files", 'String'>
    readonly mimeType: FieldRef<"Files", 'String'>
    readonly size: FieldRef<"Files", 'Int'>
    readonly announceId: FieldRef<"Files", 'Int'>
    readonly classworkId: FieldRef<"Files", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Files findUnique
   */
  export type FilesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Files
     */
    select?: FilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Files
     */
    omit?: FilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FilesInclude<ExtArgs> | null
    /**
     * Filter, which Files to fetch.
     */
    where: FilesWhereUniqueInput
  }

  /**
   * Files findUniqueOrThrow
   */
  export type FilesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Files
     */
    select?: FilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Files
     */
    omit?: FilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FilesInclude<ExtArgs> | null
    /**
     * Filter, which Files to fetch.
     */
    where: FilesWhereUniqueInput
  }

  /**
   * Files findFirst
   */
  export type FilesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Files
     */
    select?: FilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Files
     */
    omit?: FilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FilesInclude<ExtArgs> | null
    /**
     * Filter, which Files to fetch.
     */
    where?: FilesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Files to fetch.
     */
    orderBy?: FilesOrderByWithRelationInput | FilesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Files.
     */
    cursor?: FilesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Files from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Files.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Files.
     */
    distinct?: FilesScalarFieldEnum | FilesScalarFieldEnum[]
  }

  /**
   * Files findFirstOrThrow
   */
  export type FilesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Files
     */
    select?: FilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Files
     */
    omit?: FilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FilesInclude<ExtArgs> | null
    /**
     * Filter, which Files to fetch.
     */
    where?: FilesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Files to fetch.
     */
    orderBy?: FilesOrderByWithRelationInput | FilesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Files.
     */
    cursor?: FilesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Files from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Files.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Files.
     */
    distinct?: FilesScalarFieldEnum | FilesScalarFieldEnum[]
  }

  /**
   * Files findMany
   */
  export type FilesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Files
     */
    select?: FilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Files
     */
    omit?: FilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FilesInclude<ExtArgs> | null
    /**
     * Filter, which Files to fetch.
     */
    where?: FilesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Files to fetch.
     */
    orderBy?: FilesOrderByWithRelationInput | FilesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Files.
     */
    cursor?: FilesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Files from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Files.
     */
    skip?: number
    distinct?: FilesScalarFieldEnum | FilesScalarFieldEnum[]
  }

  /**
   * Files create
   */
  export type FilesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Files
     */
    select?: FilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Files
     */
    omit?: FilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FilesInclude<ExtArgs> | null
    /**
     * The data needed to create a Files.
     */
    data: XOR<FilesCreateInput, FilesUncheckedCreateInput>
  }

  /**
   * Files createMany
   */
  export type FilesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Files.
     */
    data: FilesCreateManyInput | FilesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Files createManyAndReturn
   */
  export type FilesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Files
     */
    select?: FilesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Files
     */
    omit?: FilesOmit<ExtArgs> | null
    /**
     * The data used to create many Files.
     */
    data: FilesCreateManyInput | FilesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FilesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Files update
   */
  export type FilesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Files
     */
    select?: FilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Files
     */
    omit?: FilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FilesInclude<ExtArgs> | null
    /**
     * The data needed to update a Files.
     */
    data: XOR<FilesUpdateInput, FilesUncheckedUpdateInput>
    /**
     * Choose, which Files to update.
     */
    where: FilesWhereUniqueInput
  }

  /**
   * Files updateMany
   */
  export type FilesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Files.
     */
    data: XOR<FilesUpdateManyMutationInput, FilesUncheckedUpdateManyInput>
    /**
     * Filter which Files to update
     */
    where?: FilesWhereInput
    /**
     * Limit how many Files to update.
     */
    limit?: number
  }

  /**
   * Files updateManyAndReturn
   */
  export type FilesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Files
     */
    select?: FilesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Files
     */
    omit?: FilesOmit<ExtArgs> | null
    /**
     * The data used to update Files.
     */
    data: XOR<FilesUpdateManyMutationInput, FilesUncheckedUpdateManyInput>
    /**
     * Filter which Files to update
     */
    where?: FilesWhereInput
    /**
     * Limit how many Files to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FilesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Files upsert
   */
  export type FilesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Files
     */
    select?: FilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Files
     */
    omit?: FilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FilesInclude<ExtArgs> | null
    /**
     * The filter to search for the Files to update in case it exists.
     */
    where: FilesWhereUniqueInput
    /**
     * In case the Files found by the `where` argument doesn't exist, create a new Files with this data.
     */
    create: XOR<FilesCreateInput, FilesUncheckedCreateInput>
    /**
     * In case the Files was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FilesUpdateInput, FilesUncheckedUpdateInput>
  }

  /**
   * Files delete
   */
  export type FilesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Files
     */
    select?: FilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Files
     */
    omit?: FilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FilesInclude<ExtArgs> | null
    /**
     * Filter which Files to delete.
     */
    where: FilesWhereUniqueInput
  }

  /**
   * Files deleteMany
   */
  export type FilesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Files to delete
     */
    where?: FilesWhereInput
    /**
     * Limit how many Files to delete.
     */
    limit?: number
  }

  /**
   * Files without action
   */
  export type FilesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Files
     */
    select?: FilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Files
     */
    omit?: FilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FilesInclude<ExtArgs> | null
  }


  /**
   * Model Announcements
   */

  export type AggregateAnnouncements = {
    _count: AnnouncementsCountAggregateOutputType | null
    _avg: AnnouncementsAvgAggregateOutputType | null
    _sum: AnnouncementsSumAggregateOutputType | null
    _min: AnnouncementsMinAggregateOutputType | null
    _max: AnnouncementsMaxAggregateOutputType | null
  }

  export type AnnouncementsAvgAggregateOutputType = {
    id: number | null
    roomId: number | null
  }

  export type AnnouncementsSumAggregateOutputType = {
    id: number | null
    roomId: number | null
  }

  export type AnnouncementsMinAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    roomId: number | null
  }

  export type AnnouncementsMaxAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    roomId: number | null
  }

  export type AnnouncementsCountAggregateOutputType = {
    id: number
    title: number
    description: number
    roomId: number
    _all: number
  }


  export type AnnouncementsAvgAggregateInputType = {
    id?: true
    roomId?: true
  }

  export type AnnouncementsSumAggregateInputType = {
    id?: true
    roomId?: true
  }

  export type AnnouncementsMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    roomId?: true
  }

  export type AnnouncementsMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    roomId?: true
  }

  export type AnnouncementsCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    roomId?: true
    _all?: true
  }

  export type AnnouncementsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Announcements to aggregate.
     */
    where?: AnnouncementsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Announcements to fetch.
     */
    orderBy?: AnnouncementsOrderByWithRelationInput | AnnouncementsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AnnouncementsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Announcements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Announcements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Announcements
    **/
    _count?: true | AnnouncementsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AnnouncementsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AnnouncementsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AnnouncementsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AnnouncementsMaxAggregateInputType
  }

  export type GetAnnouncementsAggregateType<T extends AnnouncementsAggregateArgs> = {
        [P in keyof T & keyof AggregateAnnouncements]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAnnouncements[P]>
      : GetScalarType<T[P], AggregateAnnouncements[P]>
  }




  export type AnnouncementsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnnouncementsWhereInput
    orderBy?: AnnouncementsOrderByWithAggregationInput | AnnouncementsOrderByWithAggregationInput[]
    by: AnnouncementsScalarFieldEnum[] | AnnouncementsScalarFieldEnum
    having?: AnnouncementsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AnnouncementsCountAggregateInputType | true
    _avg?: AnnouncementsAvgAggregateInputType
    _sum?: AnnouncementsSumAggregateInputType
    _min?: AnnouncementsMinAggregateInputType
    _max?: AnnouncementsMaxAggregateInputType
  }

  export type AnnouncementsGroupByOutputType = {
    id: number
    title: string
    description: string
    roomId: number
    _count: AnnouncementsCountAggregateOutputType | null
    _avg: AnnouncementsAvgAggregateOutputType | null
    _sum: AnnouncementsSumAggregateOutputType | null
    _min: AnnouncementsMinAggregateOutputType | null
    _max: AnnouncementsMaxAggregateOutputType | null
  }

  type GetAnnouncementsGroupByPayload<T extends AnnouncementsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AnnouncementsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AnnouncementsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AnnouncementsGroupByOutputType[P]>
            : GetScalarType<T[P], AnnouncementsGroupByOutputType[P]>
        }
      >
    >


  export type AnnouncementsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    roomId?: boolean
    listOfFiles?: boolean | Announcements$listOfFilesArgs<ExtArgs>
    relatedToClassroom?: boolean | ClassroomDefaultArgs<ExtArgs>
    _count?: boolean | AnnouncementsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["announcements"]>

  export type AnnouncementsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    roomId?: boolean
    relatedToClassroom?: boolean | ClassroomDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["announcements"]>

  export type AnnouncementsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    roomId?: boolean
    relatedToClassroom?: boolean | ClassroomDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["announcements"]>

  export type AnnouncementsSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    roomId?: boolean
  }

  export type AnnouncementsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "roomId", ExtArgs["result"]["announcements"]>
  export type AnnouncementsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    listOfFiles?: boolean | Announcements$listOfFilesArgs<ExtArgs>
    relatedToClassroom?: boolean | ClassroomDefaultArgs<ExtArgs>
    _count?: boolean | AnnouncementsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AnnouncementsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    relatedToClassroom?: boolean | ClassroomDefaultArgs<ExtArgs>
  }
  export type AnnouncementsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    relatedToClassroom?: boolean | ClassroomDefaultArgs<ExtArgs>
  }

  export type $AnnouncementsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Announcements"
    objects: {
      listOfFiles: Prisma.$FilesPayload<ExtArgs>[]
      relatedToClassroom: Prisma.$ClassroomPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      description: string
      roomId: number
    }, ExtArgs["result"]["announcements"]>
    composites: {}
  }

  type AnnouncementsGetPayload<S extends boolean | null | undefined | AnnouncementsDefaultArgs> = $Result.GetResult<Prisma.$AnnouncementsPayload, S>

  type AnnouncementsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AnnouncementsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AnnouncementsCountAggregateInputType | true
    }

  export interface AnnouncementsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Announcements'], meta: { name: 'Announcements' } }
    /**
     * Find zero or one Announcements that matches the filter.
     * @param {AnnouncementsFindUniqueArgs} args - Arguments to find a Announcements
     * @example
     * // Get one Announcements
     * const announcements = await prisma.announcements.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AnnouncementsFindUniqueArgs>(args: SelectSubset<T, AnnouncementsFindUniqueArgs<ExtArgs>>): Prisma__AnnouncementsClient<$Result.GetResult<Prisma.$AnnouncementsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Announcements that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AnnouncementsFindUniqueOrThrowArgs} args - Arguments to find a Announcements
     * @example
     * // Get one Announcements
     * const announcements = await prisma.announcements.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AnnouncementsFindUniqueOrThrowArgs>(args: SelectSubset<T, AnnouncementsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AnnouncementsClient<$Result.GetResult<Prisma.$AnnouncementsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Announcements that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnnouncementsFindFirstArgs} args - Arguments to find a Announcements
     * @example
     * // Get one Announcements
     * const announcements = await prisma.announcements.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AnnouncementsFindFirstArgs>(args?: SelectSubset<T, AnnouncementsFindFirstArgs<ExtArgs>>): Prisma__AnnouncementsClient<$Result.GetResult<Prisma.$AnnouncementsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Announcements that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnnouncementsFindFirstOrThrowArgs} args - Arguments to find a Announcements
     * @example
     * // Get one Announcements
     * const announcements = await prisma.announcements.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AnnouncementsFindFirstOrThrowArgs>(args?: SelectSubset<T, AnnouncementsFindFirstOrThrowArgs<ExtArgs>>): Prisma__AnnouncementsClient<$Result.GetResult<Prisma.$AnnouncementsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Announcements that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnnouncementsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Announcements
     * const announcements = await prisma.announcements.findMany()
     * 
     * // Get first 10 Announcements
     * const announcements = await prisma.announcements.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const announcementsWithIdOnly = await prisma.announcements.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AnnouncementsFindManyArgs>(args?: SelectSubset<T, AnnouncementsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnnouncementsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Announcements.
     * @param {AnnouncementsCreateArgs} args - Arguments to create a Announcements.
     * @example
     * // Create one Announcements
     * const Announcements = await prisma.announcements.create({
     *   data: {
     *     // ... data to create a Announcements
     *   }
     * })
     * 
     */
    create<T extends AnnouncementsCreateArgs>(args: SelectSubset<T, AnnouncementsCreateArgs<ExtArgs>>): Prisma__AnnouncementsClient<$Result.GetResult<Prisma.$AnnouncementsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Announcements.
     * @param {AnnouncementsCreateManyArgs} args - Arguments to create many Announcements.
     * @example
     * // Create many Announcements
     * const announcements = await prisma.announcements.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AnnouncementsCreateManyArgs>(args?: SelectSubset<T, AnnouncementsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Announcements and returns the data saved in the database.
     * @param {AnnouncementsCreateManyAndReturnArgs} args - Arguments to create many Announcements.
     * @example
     * // Create many Announcements
     * const announcements = await prisma.announcements.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Announcements and only return the `id`
     * const announcementsWithIdOnly = await prisma.announcements.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AnnouncementsCreateManyAndReturnArgs>(args?: SelectSubset<T, AnnouncementsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnnouncementsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Announcements.
     * @param {AnnouncementsDeleteArgs} args - Arguments to delete one Announcements.
     * @example
     * // Delete one Announcements
     * const Announcements = await prisma.announcements.delete({
     *   where: {
     *     // ... filter to delete one Announcements
     *   }
     * })
     * 
     */
    delete<T extends AnnouncementsDeleteArgs>(args: SelectSubset<T, AnnouncementsDeleteArgs<ExtArgs>>): Prisma__AnnouncementsClient<$Result.GetResult<Prisma.$AnnouncementsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Announcements.
     * @param {AnnouncementsUpdateArgs} args - Arguments to update one Announcements.
     * @example
     * // Update one Announcements
     * const announcements = await prisma.announcements.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AnnouncementsUpdateArgs>(args: SelectSubset<T, AnnouncementsUpdateArgs<ExtArgs>>): Prisma__AnnouncementsClient<$Result.GetResult<Prisma.$AnnouncementsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Announcements.
     * @param {AnnouncementsDeleteManyArgs} args - Arguments to filter Announcements to delete.
     * @example
     * // Delete a few Announcements
     * const { count } = await prisma.announcements.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AnnouncementsDeleteManyArgs>(args?: SelectSubset<T, AnnouncementsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Announcements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnnouncementsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Announcements
     * const announcements = await prisma.announcements.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AnnouncementsUpdateManyArgs>(args: SelectSubset<T, AnnouncementsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Announcements and returns the data updated in the database.
     * @param {AnnouncementsUpdateManyAndReturnArgs} args - Arguments to update many Announcements.
     * @example
     * // Update many Announcements
     * const announcements = await prisma.announcements.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Announcements and only return the `id`
     * const announcementsWithIdOnly = await prisma.announcements.updateManyAndReturn({
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
    updateManyAndReturn<T extends AnnouncementsUpdateManyAndReturnArgs>(args: SelectSubset<T, AnnouncementsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnnouncementsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Announcements.
     * @param {AnnouncementsUpsertArgs} args - Arguments to update or create a Announcements.
     * @example
     * // Update or create a Announcements
     * const announcements = await prisma.announcements.upsert({
     *   create: {
     *     // ... data to create a Announcements
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Announcements we want to update
     *   }
     * })
     */
    upsert<T extends AnnouncementsUpsertArgs>(args: SelectSubset<T, AnnouncementsUpsertArgs<ExtArgs>>): Prisma__AnnouncementsClient<$Result.GetResult<Prisma.$AnnouncementsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Announcements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnnouncementsCountArgs} args - Arguments to filter Announcements to count.
     * @example
     * // Count the number of Announcements
     * const count = await prisma.announcements.count({
     *   where: {
     *     // ... the filter for the Announcements we want to count
     *   }
     * })
    **/
    count<T extends AnnouncementsCountArgs>(
      args?: Subset<T, AnnouncementsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AnnouncementsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Announcements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnnouncementsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AnnouncementsAggregateArgs>(args: Subset<T, AnnouncementsAggregateArgs>): Prisma.PrismaPromise<GetAnnouncementsAggregateType<T>>

    /**
     * Group by Announcements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnnouncementsGroupByArgs} args - Group by arguments.
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
      T extends AnnouncementsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AnnouncementsGroupByArgs['orderBy'] }
        : { orderBy?: AnnouncementsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AnnouncementsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAnnouncementsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Announcements model
   */
  readonly fields: AnnouncementsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Announcements.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AnnouncementsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    listOfFiles<T extends Announcements$listOfFilesArgs<ExtArgs> = {}>(args?: Subset<T, Announcements$listOfFilesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FilesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    relatedToClassroom<T extends ClassroomDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClassroomDefaultArgs<ExtArgs>>): Prisma__ClassroomClient<$Result.GetResult<Prisma.$ClassroomPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Announcements model
   */
  interface AnnouncementsFieldRefs {
    readonly id: FieldRef<"Announcements", 'Int'>
    readonly title: FieldRef<"Announcements", 'String'>
    readonly description: FieldRef<"Announcements", 'String'>
    readonly roomId: FieldRef<"Announcements", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Announcements findUnique
   */
  export type AnnouncementsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Announcements
     */
    select?: AnnouncementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Announcements
     */
    omit?: AnnouncementsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnouncementsInclude<ExtArgs> | null
    /**
     * Filter, which Announcements to fetch.
     */
    where: AnnouncementsWhereUniqueInput
  }

  /**
   * Announcements findUniqueOrThrow
   */
  export type AnnouncementsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Announcements
     */
    select?: AnnouncementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Announcements
     */
    omit?: AnnouncementsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnouncementsInclude<ExtArgs> | null
    /**
     * Filter, which Announcements to fetch.
     */
    where: AnnouncementsWhereUniqueInput
  }

  /**
   * Announcements findFirst
   */
  export type AnnouncementsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Announcements
     */
    select?: AnnouncementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Announcements
     */
    omit?: AnnouncementsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnouncementsInclude<ExtArgs> | null
    /**
     * Filter, which Announcements to fetch.
     */
    where?: AnnouncementsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Announcements to fetch.
     */
    orderBy?: AnnouncementsOrderByWithRelationInput | AnnouncementsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Announcements.
     */
    cursor?: AnnouncementsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Announcements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Announcements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Announcements.
     */
    distinct?: AnnouncementsScalarFieldEnum | AnnouncementsScalarFieldEnum[]
  }

  /**
   * Announcements findFirstOrThrow
   */
  export type AnnouncementsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Announcements
     */
    select?: AnnouncementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Announcements
     */
    omit?: AnnouncementsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnouncementsInclude<ExtArgs> | null
    /**
     * Filter, which Announcements to fetch.
     */
    where?: AnnouncementsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Announcements to fetch.
     */
    orderBy?: AnnouncementsOrderByWithRelationInput | AnnouncementsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Announcements.
     */
    cursor?: AnnouncementsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Announcements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Announcements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Announcements.
     */
    distinct?: AnnouncementsScalarFieldEnum | AnnouncementsScalarFieldEnum[]
  }

  /**
   * Announcements findMany
   */
  export type AnnouncementsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Announcements
     */
    select?: AnnouncementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Announcements
     */
    omit?: AnnouncementsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnouncementsInclude<ExtArgs> | null
    /**
     * Filter, which Announcements to fetch.
     */
    where?: AnnouncementsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Announcements to fetch.
     */
    orderBy?: AnnouncementsOrderByWithRelationInput | AnnouncementsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Announcements.
     */
    cursor?: AnnouncementsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Announcements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Announcements.
     */
    skip?: number
    distinct?: AnnouncementsScalarFieldEnum | AnnouncementsScalarFieldEnum[]
  }

  /**
   * Announcements create
   */
  export type AnnouncementsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Announcements
     */
    select?: AnnouncementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Announcements
     */
    omit?: AnnouncementsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnouncementsInclude<ExtArgs> | null
    /**
     * The data needed to create a Announcements.
     */
    data: XOR<AnnouncementsCreateInput, AnnouncementsUncheckedCreateInput>
  }

  /**
   * Announcements createMany
   */
  export type AnnouncementsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Announcements.
     */
    data: AnnouncementsCreateManyInput | AnnouncementsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Announcements createManyAndReturn
   */
  export type AnnouncementsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Announcements
     */
    select?: AnnouncementsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Announcements
     */
    omit?: AnnouncementsOmit<ExtArgs> | null
    /**
     * The data used to create many Announcements.
     */
    data: AnnouncementsCreateManyInput | AnnouncementsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnouncementsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Announcements update
   */
  export type AnnouncementsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Announcements
     */
    select?: AnnouncementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Announcements
     */
    omit?: AnnouncementsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnouncementsInclude<ExtArgs> | null
    /**
     * The data needed to update a Announcements.
     */
    data: XOR<AnnouncementsUpdateInput, AnnouncementsUncheckedUpdateInput>
    /**
     * Choose, which Announcements to update.
     */
    where: AnnouncementsWhereUniqueInput
  }

  /**
   * Announcements updateMany
   */
  export type AnnouncementsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Announcements.
     */
    data: XOR<AnnouncementsUpdateManyMutationInput, AnnouncementsUncheckedUpdateManyInput>
    /**
     * Filter which Announcements to update
     */
    where?: AnnouncementsWhereInput
    /**
     * Limit how many Announcements to update.
     */
    limit?: number
  }

  /**
   * Announcements updateManyAndReturn
   */
  export type AnnouncementsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Announcements
     */
    select?: AnnouncementsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Announcements
     */
    omit?: AnnouncementsOmit<ExtArgs> | null
    /**
     * The data used to update Announcements.
     */
    data: XOR<AnnouncementsUpdateManyMutationInput, AnnouncementsUncheckedUpdateManyInput>
    /**
     * Filter which Announcements to update
     */
    where?: AnnouncementsWhereInput
    /**
     * Limit how many Announcements to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnouncementsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Announcements upsert
   */
  export type AnnouncementsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Announcements
     */
    select?: AnnouncementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Announcements
     */
    omit?: AnnouncementsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnouncementsInclude<ExtArgs> | null
    /**
     * The filter to search for the Announcements to update in case it exists.
     */
    where: AnnouncementsWhereUniqueInput
    /**
     * In case the Announcements found by the `where` argument doesn't exist, create a new Announcements with this data.
     */
    create: XOR<AnnouncementsCreateInput, AnnouncementsUncheckedCreateInput>
    /**
     * In case the Announcements was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AnnouncementsUpdateInput, AnnouncementsUncheckedUpdateInput>
  }

  /**
   * Announcements delete
   */
  export type AnnouncementsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Announcements
     */
    select?: AnnouncementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Announcements
     */
    omit?: AnnouncementsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnouncementsInclude<ExtArgs> | null
    /**
     * Filter which Announcements to delete.
     */
    where: AnnouncementsWhereUniqueInput
  }

  /**
   * Announcements deleteMany
   */
  export type AnnouncementsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Announcements to delete
     */
    where?: AnnouncementsWhereInput
    /**
     * Limit how many Announcements to delete.
     */
    limit?: number
  }

  /**
   * Announcements.listOfFiles
   */
  export type Announcements$listOfFilesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Files
     */
    select?: FilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Files
     */
    omit?: FilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FilesInclude<ExtArgs> | null
    where?: FilesWhereInput
    orderBy?: FilesOrderByWithRelationInput | FilesOrderByWithRelationInput[]
    cursor?: FilesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FilesScalarFieldEnum | FilesScalarFieldEnum[]
  }

  /**
   * Announcements without action
   */
  export type AnnouncementsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Announcements
     */
    select?: AnnouncementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Announcements
     */
    omit?: AnnouncementsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnouncementsInclude<ExtArgs> | null
  }


  /**
   * Model Classroom
   */

  export type AggregateClassroom = {
    _count: ClassroomCountAggregateOutputType | null
    _avg: ClassroomAvgAggregateOutputType | null
    _sum: ClassroomSumAggregateOutputType | null
    _min: ClassroomMinAggregateOutputType | null
    _max: ClassroomMaxAggregateOutputType | null
  }

  export type ClassroomAvgAggregateOutputType = {
    id: number | null
    profId: number | null
  }

  export type ClassroomSumAggregateOutputType = {
    id: number | null
    profId: number | null
  }

  export type ClassroomMinAggregateOutputType = {
    id: number | null
    classname: string | null
    subject: string | null
    section: string | null
    room: string | null
    classCode: string | null
    adminApprovalStatus: string | null
    profId: number | null
  }

  export type ClassroomMaxAggregateOutputType = {
    id: number | null
    classname: string | null
    subject: string | null
    section: string | null
    room: string | null
    classCode: string | null
    adminApprovalStatus: string | null
    profId: number | null
  }

  export type ClassroomCountAggregateOutputType = {
    id: number
    classname: number
    subject: number
    section: number
    room: number
    classCode: number
    adminApprovalStatus: number
    profId: number
    _all: number
  }


  export type ClassroomAvgAggregateInputType = {
    id?: true
    profId?: true
  }

  export type ClassroomSumAggregateInputType = {
    id?: true
    profId?: true
  }

  export type ClassroomMinAggregateInputType = {
    id?: true
    classname?: true
    subject?: true
    section?: true
    room?: true
    classCode?: true
    adminApprovalStatus?: true
    profId?: true
  }

  export type ClassroomMaxAggregateInputType = {
    id?: true
    classname?: true
    subject?: true
    section?: true
    room?: true
    classCode?: true
    adminApprovalStatus?: true
    profId?: true
  }

  export type ClassroomCountAggregateInputType = {
    id?: true
    classname?: true
    subject?: true
    section?: true
    room?: true
    classCode?: true
    adminApprovalStatus?: true
    profId?: true
    _all?: true
  }

  export type ClassroomAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Classroom to aggregate.
     */
    where?: ClassroomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Classrooms to fetch.
     */
    orderBy?: ClassroomOrderByWithRelationInput | ClassroomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClassroomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Classrooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Classrooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Classrooms
    **/
    _count?: true | ClassroomCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ClassroomAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ClassroomSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClassroomMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClassroomMaxAggregateInputType
  }

  export type GetClassroomAggregateType<T extends ClassroomAggregateArgs> = {
        [P in keyof T & keyof AggregateClassroom]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClassroom[P]>
      : GetScalarType<T[P], AggregateClassroom[P]>
  }




  export type ClassroomGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClassroomWhereInput
    orderBy?: ClassroomOrderByWithAggregationInput | ClassroomOrderByWithAggregationInput[]
    by: ClassroomScalarFieldEnum[] | ClassroomScalarFieldEnum
    having?: ClassroomScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClassroomCountAggregateInputType | true
    _avg?: ClassroomAvgAggregateInputType
    _sum?: ClassroomSumAggregateInputType
    _min?: ClassroomMinAggregateInputType
    _max?: ClassroomMaxAggregateInputType
  }

  export type ClassroomGroupByOutputType = {
    id: number
    classname: string
    subject: string
    section: string
    room: string
    classCode: string
    adminApprovalStatus: string
    profId: number
    _count: ClassroomCountAggregateOutputType | null
    _avg: ClassroomAvgAggregateOutputType | null
    _sum: ClassroomSumAggregateOutputType | null
    _min: ClassroomMinAggregateOutputType | null
    _max: ClassroomMaxAggregateOutputType | null
  }

  type GetClassroomGroupByPayload<T extends ClassroomGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClassroomGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClassroomGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClassroomGroupByOutputType[P]>
            : GetScalarType<T[P], ClassroomGroupByOutputType[P]>
        }
      >
    >


  export type ClassroomSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    classname?: boolean
    subject?: boolean
    section?: boolean
    room?: boolean
    classCode?: boolean
    adminApprovalStatus?: boolean
    profId?: boolean
    relatedToProfessor?: boolean | ProfessorDefaultArgs<ExtArgs>
    enrolledStudents?: boolean | Classroom$enrolledStudentsArgs<ExtArgs>
    listOfCreatedClassworkType?: boolean | Classroom$listOfCreatedClassworkTypeArgs<ExtArgs>
    listOfCreatedAnnouncements?: boolean | Classroom$listOfCreatedAnnouncementsArgs<ExtArgs>
    listOfClasswork?: boolean | Classroom$listOfClassworkArgs<ExtArgs>
    _count?: boolean | ClassroomCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["classroom"]>

  export type ClassroomSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    classname?: boolean
    subject?: boolean
    section?: boolean
    room?: boolean
    classCode?: boolean
    adminApprovalStatus?: boolean
    profId?: boolean
    relatedToProfessor?: boolean | ProfessorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["classroom"]>

  export type ClassroomSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    classname?: boolean
    subject?: boolean
    section?: boolean
    room?: boolean
    classCode?: boolean
    adminApprovalStatus?: boolean
    profId?: boolean
    relatedToProfessor?: boolean | ProfessorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["classroom"]>

  export type ClassroomSelectScalar = {
    id?: boolean
    classname?: boolean
    subject?: boolean
    section?: boolean
    room?: boolean
    classCode?: boolean
    adminApprovalStatus?: boolean
    profId?: boolean
  }

  export type ClassroomOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "classname" | "subject" | "section" | "room" | "classCode" | "adminApprovalStatus" | "profId", ExtArgs["result"]["classroom"]>
  export type ClassroomInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    relatedToProfessor?: boolean | ProfessorDefaultArgs<ExtArgs>
    enrolledStudents?: boolean | Classroom$enrolledStudentsArgs<ExtArgs>
    listOfCreatedClassworkType?: boolean | Classroom$listOfCreatedClassworkTypeArgs<ExtArgs>
    listOfCreatedAnnouncements?: boolean | Classroom$listOfCreatedAnnouncementsArgs<ExtArgs>
    listOfClasswork?: boolean | Classroom$listOfClassworkArgs<ExtArgs>
    _count?: boolean | ClassroomCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ClassroomIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    relatedToProfessor?: boolean | ProfessorDefaultArgs<ExtArgs>
  }
  export type ClassroomIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    relatedToProfessor?: boolean | ProfessorDefaultArgs<ExtArgs>
  }

  export type $ClassroomPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Classroom"
    objects: {
      relatedToProfessor: Prisma.$ProfessorPayload<ExtArgs>
      enrolledStudents: Prisma.$StudentPayload<ExtArgs>[]
      listOfCreatedClassworkType: Prisma.$ClassworkTypePayload<ExtArgs>[]
      listOfCreatedAnnouncements: Prisma.$AnnouncementsPayload<ExtArgs>[]
      listOfClasswork: Prisma.$ClassworkPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      classname: string
      subject: string
      section: string
      room: string
      classCode: string
      adminApprovalStatus: string
      profId: number
    }, ExtArgs["result"]["classroom"]>
    composites: {}
  }

  type ClassroomGetPayload<S extends boolean | null | undefined | ClassroomDefaultArgs> = $Result.GetResult<Prisma.$ClassroomPayload, S>

  type ClassroomCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ClassroomFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClassroomCountAggregateInputType | true
    }

  export interface ClassroomDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Classroom'], meta: { name: 'Classroom' } }
    /**
     * Find zero or one Classroom that matches the filter.
     * @param {ClassroomFindUniqueArgs} args - Arguments to find a Classroom
     * @example
     * // Get one Classroom
     * const classroom = await prisma.classroom.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClassroomFindUniqueArgs>(args: SelectSubset<T, ClassroomFindUniqueArgs<ExtArgs>>): Prisma__ClassroomClient<$Result.GetResult<Prisma.$ClassroomPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Classroom that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ClassroomFindUniqueOrThrowArgs} args - Arguments to find a Classroom
     * @example
     * // Get one Classroom
     * const classroom = await prisma.classroom.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClassroomFindUniqueOrThrowArgs>(args: SelectSubset<T, ClassroomFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ClassroomClient<$Result.GetResult<Prisma.$ClassroomPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Classroom that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassroomFindFirstArgs} args - Arguments to find a Classroom
     * @example
     * // Get one Classroom
     * const classroom = await prisma.classroom.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClassroomFindFirstArgs>(args?: SelectSubset<T, ClassroomFindFirstArgs<ExtArgs>>): Prisma__ClassroomClient<$Result.GetResult<Prisma.$ClassroomPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Classroom that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassroomFindFirstOrThrowArgs} args - Arguments to find a Classroom
     * @example
     * // Get one Classroom
     * const classroom = await prisma.classroom.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClassroomFindFirstOrThrowArgs>(args?: SelectSubset<T, ClassroomFindFirstOrThrowArgs<ExtArgs>>): Prisma__ClassroomClient<$Result.GetResult<Prisma.$ClassroomPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Classrooms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassroomFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Classrooms
     * const classrooms = await prisma.classroom.findMany()
     * 
     * // Get first 10 Classrooms
     * const classrooms = await prisma.classroom.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const classroomWithIdOnly = await prisma.classroom.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ClassroomFindManyArgs>(args?: SelectSubset<T, ClassroomFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClassroomPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Classroom.
     * @param {ClassroomCreateArgs} args - Arguments to create a Classroom.
     * @example
     * // Create one Classroom
     * const Classroom = await prisma.classroom.create({
     *   data: {
     *     // ... data to create a Classroom
     *   }
     * })
     * 
     */
    create<T extends ClassroomCreateArgs>(args: SelectSubset<T, ClassroomCreateArgs<ExtArgs>>): Prisma__ClassroomClient<$Result.GetResult<Prisma.$ClassroomPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Classrooms.
     * @param {ClassroomCreateManyArgs} args - Arguments to create many Classrooms.
     * @example
     * // Create many Classrooms
     * const classroom = await prisma.classroom.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ClassroomCreateManyArgs>(args?: SelectSubset<T, ClassroomCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Classrooms and returns the data saved in the database.
     * @param {ClassroomCreateManyAndReturnArgs} args - Arguments to create many Classrooms.
     * @example
     * // Create many Classrooms
     * const classroom = await prisma.classroom.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Classrooms and only return the `id`
     * const classroomWithIdOnly = await prisma.classroom.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ClassroomCreateManyAndReturnArgs>(args?: SelectSubset<T, ClassroomCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClassroomPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Classroom.
     * @param {ClassroomDeleteArgs} args - Arguments to delete one Classroom.
     * @example
     * // Delete one Classroom
     * const Classroom = await prisma.classroom.delete({
     *   where: {
     *     // ... filter to delete one Classroom
     *   }
     * })
     * 
     */
    delete<T extends ClassroomDeleteArgs>(args: SelectSubset<T, ClassroomDeleteArgs<ExtArgs>>): Prisma__ClassroomClient<$Result.GetResult<Prisma.$ClassroomPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Classroom.
     * @param {ClassroomUpdateArgs} args - Arguments to update one Classroom.
     * @example
     * // Update one Classroom
     * const classroom = await prisma.classroom.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ClassroomUpdateArgs>(args: SelectSubset<T, ClassroomUpdateArgs<ExtArgs>>): Prisma__ClassroomClient<$Result.GetResult<Prisma.$ClassroomPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Classrooms.
     * @param {ClassroomDeleteManyArgs} args - Arguments to filter Classrooms to delete.
     * @example
     * // Delete a few Classrooms
     * const { count } = await prisma.classroom.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ClassroomDeleteManyArgs>(args?: SelectSubset<T, ClassroomDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Classrooms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassroomUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Classrooms
     * const classroom = await prisma.classroom.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ClassroomUpdateManyArgs>(args: SelectSubset<T, ClassroomUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Classrooms and returns the data updated in the database.
     * @param {ClassroomUpdateManyAndReturnArgs} args - Arguments to update many Classrooms.
     * @example
     * // Update many Classrooms
     * const classroom = await prisma.classroom.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Classrooms and only return the `id`
     * const classroomWithIdOnly = await prisma.classroom.updateManyAndReturn({
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
    updateManyAndReturn<T extends ClassroomUpdateManyAndReturnArgs>(args: SelectSubset<T, ClassroomUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClassroomPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Classroom.
     * @param {ClassroomUpsertArgs} args - Arguments to update or create a Classroom.
     * @example
     * // Update or create a Classroom
     * const classroom = await prisma.classroom.upsert({
     *   create: {
     *     // ... data to create a Classroom
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Classroom we want to update
     *   }
     * })
     */
    upsert<T extends ClassroomUpsertArgs>(args: SelectSubset<T, ClassroomUpsertArgs<ExtArgs>>): Prisma__ClassroomClient<$Result.GetResult<Prisma.$ClassroomPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Classrooms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassroomCountArgs} args - Arguments to filter Classrooms to count.
     * @example
     * // Count the number of Classrooms
     * const count = await prisma.classroom.count({
     *   where: {
     *     // ... the filter for the Classrooms we want to count
     *   }
     * })
    **/
    count<T extends ClassroomCountArgs>(
      args?: Subset<T, ClassroomCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClassroomCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Classroom.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassroomAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ClassroomAggregateArgs>(args: Subset<T, ClassroomAggregateArgs>): Prisma.PrismaPromise<GetClassroomAggregateType<T>>

    /**
     * Group by Classroom.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassroomGroupByArgs} args - Group by arguments.
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
      T extends ClassroomGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClassroomGroupByArgs['orderBy'] }
        : { orderBy?: ClassroomGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ClassroomGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClassroomGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Classroom model
   */
  readonly fields: ClassroomFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Classroom.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClassroomClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    relatedToProfessor<T extends ProfessorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProfessorDefaultArgs<ExtArgs>>): Prisma__ProfessorClient<$Result.GetResult<Prisma.$ProfessorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    enrolledStudents<T extends Classroom$enrolledStudentsArgs<ExtArgs> = {}>(args?: Subset<T, Classroom$enrolledStudentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    listOfCreatedClassworkType<T extends Classroom$listOfCreatedClassworkTypeArgs<ExtArgs> = {}>(args?: Subset<T, Classroom$listOfCreatedClassworkTypeArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClassworkTypePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    listOfCreatedAnnouncements<T extends Classroom$listOfCreatedAnnouncementsArgs<ExtArgs> = {}>(args?: Subset<T, Classroom$listOfCreatedAnnouncementsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnnouncementsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    listOfClasswork<T extends Classroom$listOfClassworkArgs<ExtArgs> = {}>(args?: Subset<T, Classroom$listOfClassworkArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClassworkPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Classroom model
   */
  interface ClassroomFieldRefs {
    readonly id: FieldRef<"Classroom", 'Int'>
    readonly classname: FieldRef<"Classroom", 'String'>
    readonly subject: FieldRef<"Classroom", 'String'>
    readonly section: FieldRef<"Classroom", 'String'>
    readonly room: FieldRef<"Classroom", 'String'>
    readonly classCode: FieldRef<"Classroom", 'String'>
    readonly adminApprovalStatus: FieldRef<"Classroom", 'String'>
    readonly profId: FieldRef<"Classroom", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Classroom findUnique
   */
  export type ClassroomFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Classroom
     */
    select?: ClassroomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Classroom
     */
    omit?: ClassroomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassroomInclude<ExtArgs> | null
    /**
     * Filter, which Classroom to fetch.
     */
    where: ClassroomWhereUniqueInput
  }

  /**
   * Classroom findUniqueOrThrow
   */
  export type ClassroomFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Classroom
     */
    select?: ClassroomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Classroom
     */
    omit?: ClassroomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassroomInclude<ExtArgs> | null
    /**
     * Filter, which Classroom to fetch.
     */
    where: ClassroomWhereUniqueInput
  }

  /**
   * Classroom findFirst
   */
  export type ClassroomFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Classroom
     */
    select?: ClassroomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Classroom
     */
    omit?: ClassroomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassroomInclude<ExtArgs> | null
    /**
     * Filter, which Classroom to fetch.
     */
    where?: ClassroomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Classrooms to fetch.
     */
    orderBy?: ClassroomOrderByWithRelationInput | ClassroomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Classrooms.
     */
    cursor?: ClassroomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Classrooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Classrooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Classrooms.
     */
    distinct?: ClassroomScalarFieldEnum | ClassroomScalarFieldEnum[]
  }

  /**
   * Classroom findFirstOrThrow
   */
  export type ClassroomFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Classroom
     */
    select?: ClassroomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Classroom
     */
    omit?: ClassroomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassroomInclude<ExtArgs> | null
    /**
     * Filter, which Classroom to fetch.
     */
    where?: ClassroomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Classrooms to fetch.
     */
    orderBy?: ClassroomOrderByWithRelationInput | ClassroomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Classrooms.
     */
    cursor?: ClassroomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Classrooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Classrooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Classrooms.
     */
    distinct?: ClassroomScalarFieldEnum | ClassroomScalarFieldEnum[]
  }

  /**
   * Classroom findMany
   */
  export type ClassroomFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Classroom
     */
    select?: ClassroomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Classroom
     */
    omit?: ClassroomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassroomInclude<ExtArgs> | null
    /**
     * Filter, which Classrooms to fetch.
     */
    where?: ClassroomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Classrooms to fetch.
     */
    orderBy?: ClassroomOrderByWithRelationInput | ClassroomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Classrooms.
     */
    cursor?: ClassroomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Classrooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Classrooms.
     */
    skip?: number
    distinct?: ClassroomScalarFieldEnum | ClassroomScalarFieldEnum[]
  }

  /**
   * Classroom create
   */
  export type ClassroomCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Classroom
     */
    select?: ClassroomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Classroom
     */
    omit?: ClassroomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassroomInclude<ExtArgs> | null
    /**
     * The data needed to create a Classroom.
     */
    data: XOR<ClassroomCreateInput, ClassroomUncheckedCreateInput>
  }

  /**
   * Classroom createMany
   */
  export type ClassroomCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Classrooms.
     */
    data: ClassroomCreateManyInput | ClassroomCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Classroom createManyAndReturn
   */
  export type ClassroomCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Classroom
     */
    select?: ClassroomSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Classroom
     */
    omit?: ClassroomOmit<ExtArgs> | null
    /**
     * The data used to create many Classrooms.
     */
    data: ClassroomCreateManyInput | ClassroomCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassroomIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Classroom update
   */
  export type ClassroomUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Classroom
     */
    select?: ClassroomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Classroom
     */
    omit?: ClassroomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassroomInclude<ExtArgs> | null
    /**
     * The data needed to update a Classroom.
     */
    data: XOR<ClassroomUpdateInput, ClassroomUncheckedUpdateInput>
    /**
     * Choose, which Classroom to update.
     */
    where: ClassroomWhereUniqueInput
  }

  /**
   * Classroom updateMany
   */
  export type ClassroomUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Classrooms.
     */
    data: XOR<ClassroomUpdateManyMutationInput, ClassroomUncheckedUpdateManyInput>
    /**
     * Filter which Classrooms to update
     */
    where?: ClassroomWhereInput
    /**
     * Limit how many Classrooms to update.
     */
    limit?: number
  }

  /**
   * Classroom updateManyAndReturn
   */
  export type ClassroomUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Classroom
     */
    select?: ClassroomSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Classroom
     */
    omit?: ClassroomOmit<ExtArgs> | null
    /**
     * The data used to update Classrooms.
     */
    data: XOR<ClassroomUpdateManyMutationInput, ClassroomUncheckedUpdateManyInput>
    /**
     * Filter which Classrooms to update
     */
    where?: ClassroomWhereInput
    /**
     * Limit how many Classrooms to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassroomIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Classroom upsert
   */
  export type ClassroomUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Classroom
     */
    select?: ClassroomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Classroom
     */
    omit?: ClassroomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassroomInclude<ExtArgs> | null
    /**
     * The filter to search for the Classroom to update in case it exists.
     */
    where: ClassroomWhereUniqueInput
    /**
     * In case the Classroom found by the `where` argument doesn't exist, create a new Classroom with this data.
     */
    create: XOR<ClassroomCreateInput, ClassroomUncheckedCreateInput>
    /**
     * In case the Classroom was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClassroomUpdateInput, ClassroomUncheckedUpdateInput>
  }

  /**
   * Classroom delete
   */
  export type ClassroomDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Classroom
     */
    select?: ClassroomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Classroom
     */
    omit?: ClassroomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassroomInclude<ExtArgs> | null
    /**
     * Filter which Classroom to delete.
     */
    where: ClassroomWhereUniqueInput
  }

  /**
   * Classroom deleteMany
   */
  export type ClassroomDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Classrooms to delete
     */
    where?: ClassroomWhereInput
    /**
     * Limit how many Classrooms to delete.
     */
    limit?: number
  }

  /**
   * Classroom.enrolledStudents
   */
  export type Classroom$enrolledStudentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    where?: StudentWhereInput
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    cursor?: StudentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * Classroom.listOfCreatedClassworkType
   */
  export type Classroom$listOfCreatedClassworkTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassworkType
     */
    select?: ClassworkTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClassworkType
     */
    omit?: ClassworkTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassworkTypeInclude<ExtArgs> | null
    where?: ClassworkTypeWhereInput
    orderBy?: ClassworkTypeOrderByWithRelationInput | ClassworkTypeOrderByWithRelationInput[]
    cursor?: ClassworkTypeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ClassworkTypeScalarFieldEnum | ClassworkTypeScalarFieldEnum[]
  }

  /**
   * Classroom.listOfCreatedAnnouncements
   */
  export type Classroom$listOfCreatedAnnouncementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Announcements
     */
    select?: AnnouncementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Announcements
     */
    omit?: AnnouncementsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnouncementsInclude<ExtArgs> | null
    where?: AnnouncementsWhereInput
    orderBy?: AnnouncementsOrderByWithRelationInput | AnnouncementsOrderByWithRelationInput[]
    cursor?: AnnouncementsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AnnouncementsScalarFieldEnum | AnnouncementsScalarFieldEnum[]
  }

  /**
   * Classroom.listOfClasswork
   */
  export type Classroom$listOfClassworkArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Classwork
     */
    select?: ClassworkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Classwork
     */
    omit?: ClassworkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassworkInclude<ExtArgs> | null
    where?: ClassworkWhereInput
    orderBy?: ClassworkOrderByWithRelationInput | ClassworkOrderByWithRelationInput[]
    cursor?: ClassworkWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ClassworkScalarFieldEnum | ClassworkScalarFieldEnum[]
  }

  /**
   * Classroom without action
   */
  export type ClassroomDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Classroom
     */
    select?: ClassroomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Classroom
     */
    omit?: ClassroomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassroomInclude<ExtArgs> | null
  }


  /**
   * Model Classwork
   */

  export type AggregateClasswork = {
    _count: ClassworkCountAggregateOutputType | null
    _avg: ClassworkAvgAggregateOutputType | null
    _sum: ClassworkSumAggregateOutputType | null
    _min: ClassworkMinAggregateOutputType | null
    _max: ClassworkMaxAggregateOutputType | null
  }

  export type ClassworkAvgAggregateOutputType = {
    id: number | null
    studentId: number | null
    classroomId: number | null
  }

  export type ClassworkSumAggregateOutputType = {
    id: number | null
    studentId: number | null
    classroomId: number | null
  }

  export type ClassworkMinAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    dueDate: Date | null
    studentId: number | null
    classroomId: number | null
  }

  export type ClassworkMaxAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    dueDate: Date | null
    studentId: number | null
    classroomId: number | null
  }

  export type ClassworkCountAggregateOutputType = {
    id: number
    title: number
    description: number
    dueDate: number
    studentId: number
    classroomId: number
    _all: number
  }


  export type ClassworkAvgAggregateInputType = {
    id?: true
    studentId?: true
    classroomId?: true
  }

  export type ClassworkSumAggregateInputType = {
    id?: true
    studentId?: true
    classroomId?: true
  }

  export type ClassworkMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    dueDate?: true
    studentId?: true
    classroomId?: true
  }

  export type ClassworkMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    dueDate?: true
    studentId?: true
    classroomId?: true
  }

  export type ClassworkCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    dueDate?: true
    studentId?: true
    classroomId?: true
    _all?: true
  }

  export type ClassworkAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Classwork to aggregate.
     */
    where?: ClassworkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Classworks to fetch.
     */
    orderBy?: ClassworkOrderByWithRelationInput | ClassworkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClassworkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Classworks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Classworks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Classworks
    **/
    _count?: true | ClassworkCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ClassworkAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ClassworkSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClassworkMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClassworkMaxAggregateInputType
  }

  export type GetClassworkAggregateType<T extends ClassworkAggregateArgs> = {
        [P in keyof T & keyof AggregateClasswork]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClasswork[P]>
      : GetScalarType<T[P], AggregateClasswork[P]>
  }




  export type ClassworkGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClassworkWhereInput
    orderBy?: ClassworkOrderByWithAggregationInput | ClassworkOrderByWithAggregationInput[]
    by: ClassworkScalarFieldEnum[] | ClassworkScalarFieldEnum
    having?: ClassworkScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClassworkCountAggregateInputType | true
    _avg?: ClassworkAvgAggregateInputType
    _sum?: ClassworkSumAggregateInputType
    _min?: ClassworkMinAggregateInputType
    _max?: ClassworkMaxAggregateInputType
  }

  export type ClassworkGroupByOutputType = {
    id: number
    title: string
    description: string
    dueDate: Date
    studentId: number
    classroomId: number
    _count: ClassworkCountAggregateOutputType | null
    _avg: ClassworkAvgAggregateOutputType | null
    _sum: ClassworkSumAggregateOutputType | null
    _min: ClassworkMinAggregateOutputType | null
    _max: ClassworkMaxAggregateOutputType | null
  }

  type GetClassworkGroupByPayload<T extends ClassworkGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClassworkGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClassworkGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClassworkGroupByOutputType[P]>
            : GetScalarType<T[P], ClassworkGroupByOutputType[P]>
        }
      >
    >


  export type ClassworkSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    dueDate?: boolean
    studentId?: boolean
    classroomId?: boolean
    madeByStudent?: boolean | StudentDefaultArgs<ExtArgs>
    classroom?: boolean | ClassroomDefaultArgs<ExtArgs>
    listOfOutputs?: boolean | Classwork$listOfOutputsArgs<ExtArgs>
    _count?: boolean | ClassworkCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["classwork"]>

  export type ClassworkSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    dueDate?: boolean
    studentId?: boolean
    classroomId?: boolean
    madeByStudent?: boolean | StudentDefaultArgs<ExtArgs>
    classroom?: boolean | ClassroomDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["classwork"]>

  export type ClassworkSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    dueDate?: boolean
    studentId?: boolean
    classroomId?: boolean
    madeByStudent?: boolean | StudentDefaultArgs<ExtArgs>
    classroom?: boolean | ClassroomDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["classwork"]>

  export type ClassworkSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    dueDate?: boolean
    studentId?: boolean
    classroomId?: boolean
  }

  export type ClassworkOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "dueDate" | "studentId" | "classroomId", ExtArgs["result"]["classwork"]>
  export type ClassworkInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    madeByStudent?: boolean | StudentDefaultArgs<ExtArgs>
    classroom?: boolean | ClassroomDefaultArgs<ExtArgs>
    listOfOutputs?: boolean | Classwork$listOfOutputsArgs<ExtArgs>
    _count?: boolean | ClassworkCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ClassworkIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    madeByStudent?: boolean | StudentDefaultArgs<ExtArgs>
    classroom?: boolean | ClassroomDefaultArgs<ExtArgs>
  }
  export type ClassworkIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    madeByStudent?: boolean | StudentDefaultArgs<ExtArgs>
    classroom?: boolean | ClassroomDefaultArgs<ExtArgs>
  }

  export type $ClassworkPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Classwork"
    objects: {
      madeByStudent: Prisma.$StudentPayload<ExtArgs>
      classroom: Prisma.$ClassroomPayload<ExtArgs>
      listOfOutputs: Prisma.$FilesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      description: string
      dueDate: Date
      studentId: number
      classroomId: number
    }, ExtArgs["result"]["classwork"]>
    composites: {}
  }

  type ClassworkGetPayload<S extends boolean | null | undefined | ClassworkDefaultArgs> = $Result.GetResult<Prisma.$ClassworkPayload, S>

  type ClassworkCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ClassworkFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClassworkCountAggregateInputType | true
    }

  export interface ClassworkDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Classwork'], meta: { name: 'Classwork' } }
    /**
     * Find zero or one Classwork that matches the filter.
     * @param {ClassworkFindUniqueArgs} args - Arguments to find a Classwork
     * @example
     * // Get one Classwork
     * const classwork = await prisma.classwork.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClassworkFindUniqueArgs>(args: SelectSubset<T, ClassworkFindUniqueArgs<ExtArgs>>): Prisma__ClassworkClient<$Result.GetResult<Prisma.$ClassworkPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Classwork that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ClassworkFindUniqueOrThrowArgs} args - Arguments to find a Classwork
     * @example
     * // Get one Classwork
     * const classwork = await prisma.classwork.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClassworkFindUniqueOrThrowArgs>(args: SelectSubset<T, ClassworkFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ClassworkClient<$Result.GetResult<Prisma.$ClassworkPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Classwork that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassworkFindFirstArgs} args - Arguments to find a Classwork
     * @example
     * // Get one Classwork
     * const classwork = await prisma.classwork.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClassworkFindFirstArgs>(args?: SelectSubset<T, ClassworkFindFirstArgs<ExtArgs>>): Prisma__ClassworkClient<$Result.GetResult<Prisma.$ClassworkPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Classwork that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassworkFindFirstOrThrowArgs} args - Arguments to find a Classwork
     * @example
     * // Get one Classwork
     * const classwork = await prisma.classwork.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClassworkFindFirstOrThrowArgs>(args?: SelectSubset<T, ClassworkFindFirstOrThrowArgs<ExtArgs>>): Prisma__ClassworkClient<$Result.GetResult<Prisma.$ClassworkPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Classworks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassworkFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Classworks
     * const classworks = await prisma.classwork.findMany()
     * 
     * // Get first 10 Classworks
     * const classworks = await prisma.classwork.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const classworkWithIdOnly = await prisma.classwork.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ClassworkFindManyArgs>(args?: SelectSubset<T, ClassworkFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClassworkPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Classwork.
     * @param {ClassworkCreateArgs} args - Arguments to create a Classwork.
     * @example
     * // Create one Classwork
     * const Classwork = await prisma.classwork.create({
     *   data: {
     *     // ... data to create a Classwork
     *   }
     * })
     * 
     */
    create<T extends ClassworkCreateArgs>(args: SelectSubset<T, ClassworkCreateArgs<ExtArgs>>): Prisma__ClassworkClient<$Result.GetResult<Prisma.$ClassworkPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Classworks.
     * @param {ClassworkCreateManyArgs} args - Arguments to create many Classworks.
     * @example
     * // Create many Classworks
     * const classwork = await prisma.classwork.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ClassworkCreateManyArgs>(args?: SelectSubset<T, ClassworkCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Classworks and returns the data saved in the database.
     * @param {ClassworkCreateManyAndReturnArgs} args - Arguments to create many Classworks.
     * @example
     * // Create many Classworks
     * const classwork = await prisma.classwork.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Classworks and only return the `id`
     * const classworkWithIdOnly = await prisma.classwork.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ClassworkCreateManyAndReturnArgs>(args?: SelectSubset<T, ClassworkCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClassworkPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Classwork.
     * @param {ClassworkDeleteArgs} args - Arguments to delete one Classwork.
     * @example
     * // Delete one Classwork
     * const Classwork = await prisma.classwork.delete({
     *   where: {
     *     // ... filter to delete one Classwork
     *   }
     * })
     * 
     */
    delete<T extends ClassworkDeleteArgs>(args: SelectSubset<T, ClassworkDeleteArgs<ExtArgs>>): Prisma__ClassworkClient<$Result.GetResult<Prisma.$ClassworkPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Classwork.
     * @param {ClassworkUpdateArgs} args - Arguments to update one Classwork.
     * @example
     * // Update one Classwork
     * const classwork = await prisma.classwork.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ClassworkUpdateArgs>(args: SelectSubset<T, ClassworkUpdateArgs<ExtArgs>>): Prisma__ClassworkClient<$Result.GetResult<Prisma.$ClassworkPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Classworks.
     * @param {ClassworkDeleteManyArgs} args - Arguments to filter Classworks to delete.
     * @example
     * // Delete a few Classworks
     * const { count } = await prisma.classwork.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ClassworkDeleteManyArgs>(args?: SelectSubset<T, ClassworkDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Classworks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassworkUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Classworks
     * const classwork = await prisma.classwork.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ClassworkUpdateManyArgs>(args: SelectSubset<T, ClassworkUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Classworks and returns the data updated in the database.
     * @param {ClassworkUpdateManyAndReturnArgs} args - Arguments to update many Classworks.
     * @example
     * // Update many Classworks
     * const classwork = await prisma.classwork.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Classworks and only return the `id`
     * const classworkWithIdOnly = await prisma.classwork.updateManyAndReturn({
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
    updateManyAndReturn<T extends ClassworkUpdateManyAndReturnArgs>(args: SelectSubset<T, ClassworkUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClassworkPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Classwork.
     * @param {ClassworkUpsertArgs} args - Arguments to update or create a Classwork.
     * @example
     * // Update or create a Classwork
     * const classwork = await prisma.classwork.upsert({
     *   create: {
     *     // ... data to create a Classwork
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Classwork we want to update
     *   }
     * })
     */
    upsert<T extends ClassworkUpsertArgs>(args: SelectSubset<T, ClassworkUpsertArgs<ExtArgs>>): Prisma__ClassworkClient<$Result.GetResult<Prisma.$ClassworkPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Classworks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassworkCountArgs} args - Arguments to filter Classworks to count.
     * @example
     * // Count the number of Classworks
     * const count = await prisma.classwork.count({
     *   where: {
     *     // ... the filter for the Classworks we want to count
     *   }
     * })
    **/
    count<T extends ClassworkCountArgs>(
      args?: Subset<T, ClassworkCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClassworkCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Classwork.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassworkAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ClassworkAggregateArgs>(args: Subset<T, ClassworkAggregateArgs>): Prisma.PrismaPromise<GetClassworkAggregateType<T>>

    /**
     * Group by Classwork.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassworkGroupByArgs} args - Group by arguments.
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
      T extends ClassworkGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClassworkGroupByArgs['orderBy'] }
        : { orderBy?: ClassworkGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ClassworkGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClassworkGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Classwork model
   */
  readonly fields: ClassworkFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Classwork.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClassworkClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    madeByStudent<T extends StudentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StudentDefaultArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    classroom<T extends ClassroomDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClassroomDefaultArgs<ExtArgs>>): Prisma__ClassroomClient<$Result.GetResult<Prisma.$ClassroomPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    listOfOutputs<T extends Classwork$listOfOutputsArgs<ExtArgs> = {}>(args?: Subset<T, Classwork$listOfOutputsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FilesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Classwork model
   */
  interface ClassworkFieldRefs {
    readonly id: FieldRef<"Classwork", 'Int'>
    readonly title: FieldRef<"Classwork", 'String'>
    readonly description: FieldRef<"Classwork", 'String'>
    readonly dueDate: FieldRef<"Classwork", 'DateTime'>
    readonly studentId: FieldRef<"Classwork", 'Int'>
    readonly classroomId: FieldRef<"Classwork", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Classwork findUnique
   */
  export type ClassworkFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Classwork
     */
    select?: ClassworkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Classwork
     */
    omit?: ClassworkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassworkInclude<ExtArgs> | null
    /**
     * Filter, which Classwork to fetch.
     */
    where: ClassworkWhereUniqueInput
  }

  /**
   * Classwork findUniqueOrThrow
   */
  export type ClassworkFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Classwork
     */
    select?: ClassworkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Classwork
     */
    omit?: ClassworkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassworkInclude<ExtArgs> | null
    /**
     * Filter, which Classwork to fetch.
     */
    where: ClassworkWhereUniqueInput
  }

  /**
   * Classwork findFirst
   */
  export type ClassworkFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Classwork
     */
    select?: ClassworkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Classwork
     */
    omit?: ClassworkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassworkInclude<ExtArgs> | null
    /**
     * Filter, which Classwork to fetch.
     */
    where?: ClassworkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Classworks to fetch.
     */
    orderBy?: ClassworkOrderByWithRelationInput | ClassworkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Classworks.
     */
    cursor?: ClassworkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Classworks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Classworks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Classworks.
     */
    distinct?: ClassworkScalarFieldEnum | ClassworkScalarFieldEnum[]
  }

  /**
   * Classwork findFirstOrThrow
   */
  export type ClassworkFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Classwork
     */
    select?: ClassworkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Classwork
     */
    omit?: ClassworkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassworkInclude<ExtArgs> | null
    /**
     * Filter, which Classwork to fetch.
     */
    where?: ClassworkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Classworks to fetch.
     */
    orderBy?: ClassworkOrderByWithRelationInput | ClassworkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Classworks.
     */
    cursor?: ClassworkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Classworks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Classworks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Classworks.
     */
    distinct?: ClassworkScalarFieldEnum | ClassworkScalarFieldEnum[]
  }

  /**
   * Classwork findMany
   */
  export type ClassworkFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Classwork
     */
    select?: ClassworkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Classwork
     */
    omit?: ClassworkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassworkInclude<ExtArgs> | null
    /**
     * Filter, which Classworks to fetch.
     */
    where?: ClassworkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Classworks to fetch.
     */
    orderBy?: ClassworkOrderByWithRelationInput | ClassworkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Classworks.
     */
    cursor?: ClassworkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Classworks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Classworks.
     */
    skip?: number
    distinct?: ClassworkScalarFieldEnum | ClassworkScalarFieldEnum[]
  }

  /**
   * Classwork create
   */
  export type ClassworkCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Classwork
     */
    select?: ClassworkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Classwork
     */
    omit?: ClassworkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassworkInclude<ExtArgs> | null
    /**
     * The data needed to create a Classwork.
     */
    data: XOR<ClassworkCreateInput, ClassworkUncheckedCreateInput>
  }

  /**
   * Classwork createMany
   */
  export type ClassworkCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Classworks.
     */
    data: ClassworkCreateManyInput | ClassworkCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Classwork createManyAndReturn
   */
  export type ClassworkCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Classwork
     */
    select?: ClassworkSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Classwork
     */
    omit?: ClassworkOmit<ExtArgs> | null
    /**
     * The data used to create many Classworks.
     */
    data: ClassworkCreateManyInput | ClassworkCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassworkIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Classwork update
   */
  export type ClassworkUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Classwork
     */
    select?: ClassworkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Classwork
     */
    omit?: ClassworkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassworkInclude<ExtArgs> | null
    /**
     * The data needed to update a Classwork.
     */
    data: XOR<ClassworkUpdateInput, ClassworkUncheckedUpdateInput>
    /**
     * Choose, which Classwork to update.
     */
    where: ClassworkWhereUniqueInput
  }

  /**
   * Classwork updateMany
   */
  export type ClassworkUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Classworks.
     */
    data: XOR<ClassworkUpdateManyMutationInput, ClassworkUncheckedUpdateManyInput>
    /**
     * Filter which Classworks to update
     */
    where?: ClassworkWhereInput
    /**
     * Limit how many Classworks to update.
     */
    limit?: number
  }

  /**
   * Classwork updateManyAndReturn
   */
  export type ClassworkUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Classwork
     */
    select?: ClassworkSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Classwork
     */
    omit?: ClassworkOmit<ExtArgs> | null
    /**
     * The data used to update Classworks.
     */
    data: XOR<ClassworkUpdateManyMutationInput, ClassworkUncheckedUpdateManyInput>
    /**
     * Filter which Classworks to update
     */
    where?: ClassworkWhereInput
    /**
     * Limit how many Classworks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassworkIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Classwork upsert
   */
  export type ClassworkUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Classwork
     */
    select?: ClassworkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Classwork
     */
    omit?: ClassworkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassworkInclude<ExtArgs> | null
    /**
     * The filter to search for the Classwork to update in case it exists.
     */
    where: ClassworkWhereUniqueInput
    /**
     * In case the Classwork found by the `where` argument doesn't exist, create a new Classwork with this data.
     */
    create: XOR<ClassworkCreateInput, ClassworkUncheckedCreateInput>
    /**
     * In case the Classwork was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClassworkUpdateInput, ClassworkUncheckedUpdateInput>
  }

  /**
   * Classwork delete
   */
  export type ClassworkDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Classwork
     */
    select?: ClassworkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Classwork
     */
    omit?: ClassworkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassworkInclude<ExtArgs> | null
    /**
     * Filter which Classwork to delete.
     */
    where: ClassworkWhereUniqueInput
  }

  /**
   * Classwork deleteMany
   */
  export type ClassworkDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Classworks to delete
     */
    where?: ClassworkWhereInput
    /**
     * Limit how many Classworks to delete.
     */
    limit?: number
  }

  /**
   * Classwork.listOfOutputs
   */
  export type Classwork$listOfOutputsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Files
     */
    select?: FilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Files
     */
    omit?: FilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FilesInclude<ExtArgs> | null
    where?: FilesWhereInput
    orderBy?: FilesOrderByWithRelationInput | FilesOrderByWithRelationInput[]
    cursor?: FilesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FilesScalarFieldEnum | FilesScalarFieldEnum[]
  }

  /**
   * Classwork without action
   */
  export type ClassworkDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Classwork
     */
    select?: ClassworkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Classwork
     */
    omit?: ClassworkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassworkInclude<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    username: 'username',
    password: 'password'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const StudentScalarFieldEnum: {
    id: 'id',
    firstname: 'firstname',
    middlename: 'middlename',
    lastname: 'lastname',
    gender: 'gender',
    approvalStatus: 'approvalStatus',
    profile: 'profile'
  };

  export type StudentScalarFieldEnum = (typeof StudentScalarFieldEnum)[keyof typeof StudentScalarFieldEnum]


  export const ProfessorScalarFieldEnum: {
    id: 'id',
    fullname: 'fullname',
    profile: 'profile'
  };

  export type ProfessorScalarFieldEnum = (typeof ProfessorScalarFieldEnum)[keyof typeof ProfessorScalarFieldEnum]


  export const ClassworkTypeScalarFieldEnum: {
    id: 'id',
    classworkType: 'classworkType',
    roomId: 'roomId'
  };

  export type ClassworkTypeScalarFieldEnum = (typeof ClassworkTypeScalarFieldEnum)[keyof typeof ClassworkTypeScalarFieldEnum]


  export const FilesScalarFieldEnum: {
    id: 'id',
    filename: 'filename',
    path: 'path',
    mimeType: 'mimeType',
    size: 'size',
    announceId: 'announceId',
    classworkId: 'classworkId'
  };

  export type FilesScalarFieldEnum = (typeof FilesScalarFieldEnum)[keyof typeof FilesScalarFieldEnum]


  export const AnnouncementsScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    roomId: 'roomId'
  };

  export type AnnouncementsScalarFieldEnum = (typeof AnnouncementsScalarFieldEnum)[keyof typeof AnnouncementsScalarFieldEnum]


  export const ClassroomScalarFieldEnum: {
    id: 'id',
    classname: 'classname',
    subject: 'subject',
    section: 'section',
    room: 'room',
    classCode: 'classCode',
    adminApprovalStatus: 'adminApprovalStatus',
    profId: 'profId'
  };

  export type ClassroomScalarFieldEnum = (typeof ClassroomScalarFieldEnum)[keyof typeof ClassroomScalarFieldEnum]


  export const ClassworkScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    dueDate: 'dueDate',
    studentId: 'studentId',
    classroomId: 'classroomId'
  };

  export type ClassworkScalarFieldEnum = (typeof ClassworkScalarFieldEnum)[keyof typeof ClassworkScalarFieldEnum]


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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


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


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    email?: StringNullableFilter<"User"> | string | null
    username?: StringNullableFilter<"User"> | string | null
    password?: StringNullableFilter<"User"> | string | null
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrderInput | SortOrder
    username?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    username?: StringNullableFilter<"User"> | string | null
    password?: StringNullableFilter<"User"> | string | null
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrderInput | SortOrder
    username?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    email?: StringNullableWithAggregatesFilter<"User"> | string | null
    username?: StringNullableWithAggregatesFilter<"User"> | string | null
    password?: StringNullableWithAggregatesFilter<"User"> | string | null
  }

  export type StudentWhereInput = {
    AND?: StudentWhereInput | StudentWhereInput[]
    OR?: StudentWhereInput[]
    NOT?: StudentWhereInput | StudentWhereInput[]
    id?: IntFilter<"Student"> | number
    firstname?: StringFilter<"Student"> | string
    middlename?: StringFilter<"Student"> | string
    lastname?: StringFilter<"Student"> | string
    gender?: StringFilter<"Student"> | string
    approvalStatus?: StringFilter<"Student"> | string
    profile?: StringFilter<"Student"> | string
    listOfEnrolledClassrooms?: ClassroomListRelationFilter
    listOfClasswork?: ClassworkListRelationFilter
  }

  export type StudentOrderByWithRelationInput = {
    id?: SortOrder
    firstname?: SortOrder
    middlename?: SortOrder
    lastname?: SortOrder
    gender?: SortOrder
    approvalStatus?: SortOrder
    profile?: SortOrder
    listOfEnrolledClassrooms?: ClassroomOrderByRelationAggregateInput
    listOfClasswork?: ClassworkOrderByRelationAggregateInput
  }

  export type StudentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: StudentWhereInput | StudentWhereInput[]
    OR?: StudentWhereInput[]
    NOT?: StudentWhereInput | StudentWhereInput[]
    firstname?: StringFilter<"Student"> | string
    middlename?: StringFilter<"Student"> | string
    lastname?: StringFilter<"Student"> | string
    gender?: StringFilter<"Student"> | string
    approvalStatus?: StringFilter<"Student"> | string
    profile?: StringFilter<"Student"> | string
    listOfEnrolledClassrooms?: ClassroomListRelationFilter
    listOfClasswork?: ClassworkListRelationFilter
  }, "id">

  export type StudentOrderByWithAggregationInput = {
    id?: SortOrder
    firstname?: SortOrder
    middlename?: SortOrder
    lastname?: SortOrder
    gender?: SortOrder
    approvalStatus?: SortOrder
    profile?: SortOrder
    _count?: StudentCountOrderByAggregateInput
    _avg?: StudentAvgOrderByAggregateInput
    _max?: StudentMaxOrderByAggregateInput
    _min?: StudentMinOrderByAggregateInput
    _sum?: StudentSumOrderByAggregateInput
  }

  export type StudentScalarWhereWithAggregatesInput = {
    AND?: StudentScalarWhereWithAggregatesInput | StudentScalarWhereWithAggregatesInput[]
    OR?: StudentScalarWhereWithAggregatesInput[]
    NOT?: StudentScalarWhereWithAggregatesInput | StudentScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Student"> | number
    firstname?: StringWithAggregatesFilter<"Student"> | string
    middlename?: StringWithAggregatesFilter<"Student"> | string
    lastname?: StringWithAggregatesFilter<"Student"> | string
    gender?: StringWithAggregatesFilter<"Student"> | string
    approvalStatus?: StringWithAggregatesFilter<"Student"> | string
    profile?: StringWithAggregatesFilter<"Student"> | string
  }

  export type ProfessorWhereInput = {
    AND?: ProfessorWhereInput | ProfessorWhereInput[]
    OR?: ProfessorWhereInput[]
    NOT?: ProfessorWhereInput | ProfessorWhereInput[]
    id?: IntFilter<"Professor"> | number
    fullname?: StringFilter<"Professor"> | string
    profile?: StringFilter<"Professor"> | string
    listOfCreatedClassrooms?: ClassroomListRelationFilter
  }

  export type ProfessorOrderByWithRelationInput = {
    id?: SortOrder
    fullname?: SortOrder
    profile?: SortOrder
    listOfCreatedClassrooms?: ClassroomOrderByRelationAggregateInput
  }

  export type ProfessorWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ProfessorWhereInput | ProfessorWhereInput[]
    OR?: ProfessorWhereInput[]
    NOT?: ProfessorWhereInput | ProfessorWhereInput[]
    fullname?: StringFilter<"Professor"> | string
    profile?: StringFilter<"Professor"> | string
    listOfCreatedClassrooms?: ClassroomListRelationFilter
  }, "id">

  export type ProfessorOrderByWithAggregationInput = {
    id?: SortOrder
    fullname?: SortOrder
    profile?: SortOrder
    _count?: ProfessorCountOrderByAggregateInput
    _avg?: ProfessorAvgOrderByAggregateInput
    _max?: ProfessorMaxOrderByAggregateInput
    _min?: ProfessorMinOrderByAggregateInput
    _sum?: ProfessorSumOrderByAggregateInput
  }

  export type ProfessorScalarWhereWithAggregatesInput = {
    AND?: ProfessorScalarWhereWithAggregatesInput | ProfessorScalarWhereWithAggregatesInput[]
    OR?: ProfessorScalarWhereWithAggregatesInput[]
    NOT?: ProfessorScalarWhereWithAggregatesInput | ProfessorScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Professor"> | number
    fullname?: StringWithAggregatesFilter<"Professor"> | string
    profile?: StringWithAggregatesFilter<"Professor"> | string
  }

  export type ClassworkTypeWhereInput = {
    AND?: ClassworkTypeWhereInput | ClassworkTypeWhereInput[]
    OR?: ClassworkTypeWhereInput[]
    NOT?: ClassworkTypeWhereInput | ClassworkTypeWhereInput[]
    id?: IntFilter<"ClassworkType"> | number
    classworkType?: StringFilter<"ClassworkType"> | string
    roomId?: IntFilter<"ClassworkType"> | number
    relatedToClassroom?: XOR<ClassroomScalarRelationFilter, ClassroomWhereInput>
  }

  export type ClassworkTypeOrderByWithRelationInput = {
    id?: SortOrder
    classworkType?: SortOrder
    roomId?: SortOrder
    relatedToClassroom?: ClassroomOrderByWithRelationInput
  }

  export type ClassworkTypeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ClassworkTypeWhereInput | ClassworkTypeWhereInput[]
    OR?: ClassworkTypeWhereInput[]
    NOT?: ClassworkTypeWhereInput | ClassworkTypeWhereInput[]
    classworkType?: StringFilter<"ClassworkType"> | string
    roomId?: IntFilter<"ClassworkType"> | number
    relatedToClassroom?: XOR<ClassroomScalarRelationFilter, ClassroomWhereInput>
  }, "id">

  export type ClassworkTypeOrderByWithAggregationInput = {
    id?: SortOrder
    classworkType?: SortOrder
    roomId?: SortOrder
    _count?: ClassworkTypeCountOrderByAggregateInput
    _avg?: ClassworkTypeAvgOrderByAggregateInput
    _max?: ClassworkTypeMaxOrderByAggregateInput
    _min?: ClassworkTypeMinOrderByAggregateInput
    _sum?: ClassworkTypeSumOrderByAggregateInput
  }

  export type ClassworkTypeScalarWhereWithAggregatesInput = {
    AND?: ClassworkTypeScalarWhereWithAggregatesInput | ClassworkTypeScalarWhereWithAggregatesInput[]
    OR?: ClassworkTypeScalarWhereWithAggregatesInput[]
    NOT?: ClassworkTypeScalarWhereWithAggregatesInput | ClassworkTypeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ClassworkType"> | number
    classworkType?: StringWithAggregatesFilter<"ClassworkType"> | string
    roomId?: IntWithAggregatesFilter<"ClassworkType"> | number
  }

  export type FilesWhereInput = {
    AND?: FilesWhereInput | FilesWhereInput[]
    OR?: FilesWhereInput[]
    NOT?: FilesWhereInput | FilesWhereInput[]
    id?: IntFilter<"Files"> | number
    filename?: StringFilter<"Files"> | string
    path?: StringFilter<"Files"> | string
    mimeType?: StringFilter<"Files"> | string
    size?: IntFilter<"Files"> | number
    announceId?: IntFilter<"Files"> | number
    classworkId?: IntFilter<"Files"> | number
    relatedToAnnouncement?: XOR<AnnouncementsScalarRelationFilter, AnnouncementsWhereInput>
    relatedToClasswork?: XOR<ClassworkScalarRelationFilter, ClassworkWhereInput>
  }

  export type FilesOrderByWithRelationInput = {
    id?: SortOrder
    filename?: SortOrder
    path?: SortOrder
    mimeType?: SortOrder
    size?: SortOrder
    announceId?: SortOrder
    classworkId?: SortOrder
    relatedToAnnouncement?: AnnouncementsOrderByWithRelationInput
    relatedToClasswork?: ClassworkOrderByWithRelationInput
  }

  export type FilesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: FilesWhereInput | FilesWhereInput[]
    OR?: FilesWhereInput[]
    NOT?: FilesWhereInput | FilesWhereInput[]
    filename?: StringFilter<"Files"> | string
    path?: StringFilter<"Files"> | string
    mimeType?: StringFilter<"Files"> | string
    size?: IntFilter<"Files"> | number
    announceId?: IntFilter<"Files"> | number
    classworkId?: IntFilter<"Files"> | number
    relatedToAnnouncement?: XOR<AnnouncementsScalarRelationFilter, AnnouncementsWhereInput>
    relatedToClasswork?: XOR<ClassworkScalarRelationFilter, ClassworkWhereInput>
  }, "id">

  export type FilesOrderByWithAggregationInput = {
    id?: SortOrder
    filename?: SortOrder
    path?: SortOrder
    mimeType?: SortOrder
    size?: SortOrder
    announceId?: SortOrder
    classworkId?: SortOrder
    _count?: FilesCountOrderByAggregateInput
    _avg?: FilesAvgOrderByAggregateInput
    _max?: FilesMaxOrderByAggregateInput
    _min?: FilesMinOrderByAggregateInput
    _sum?: FilesSumOrderByAggregateInput
  }

  export type FilesScalarWhereWithAggregatesInput = {
    AND?: FilesScalarWhereWithAggregatesInput | FilesScalarWhereWithAggregatesInput[]
    OR?: FilesScalarWhereWithAggregatesInput[]
    NOT?: FilesScalarWhereWithAggregatesInput | FilesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Files"> | number
    filename?: StringWithAggregatesFilter<"Files"> | string
    path?: StringWithAggregatesFilter<"Files"> | string
    mimeType?: StringWithAggregatesFilter<"Files"> | string
    size?: IntWithAggregatesFilter<"Files"> | number
    announceId?: IntWithAggregatesFilter<"Files"> | number
    classworkId?: IntWithAggregatesFilter<"Files"> | number
  }

  export type AnnouncementsWhereInput = {
    AND?: AnnouncementsWhereInput | AnnouncementsWhereInput[]
    OR?: AnnouncementsWhereInput[]
    NOT?: AnnouncementsWhereInput | AnnouncementsWhereInput[]
    id?: IntFilter<"Announcements"> | number
    title?: StringFilter<"Announcements"> | string
    description?: StringFilter<"Announcements"> | string
    roomId?: IntFilter<"Announcements"> | number
    listOfFiles?: FilesListRelationFilter
    relatedToClassroom?: XOR<ClassroomScalarRelationFilter, ClassroomWhereInput>
  }

  export type AnnouncementsOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    roomId?: SortOrder
    listOfFiles?: FilesOrderByRelationAggregateInput
    relatedToClassroom?: ClassroomOrderByWithRelationInput
  }

  export type AnnouncementsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AnnouncementsWhereInput | AnnouncementsWhereInput[]
    OR?: AnnouncementsWhereInput[]
    NOT?: AnnouncementsWhereInput | AnnouncementsWhereInput[]
    title?: StringFilter<"Announcements"> | string
    description?: StringFilter<"Announcements"> | string
    roomId?: IntFilter<"Announcements"> | number
    listOfFiles?: FilesListRelationFilter
    relatedToClassroom?: XOR<ClassroomScalarRelationFilter, ClassroomWhereInput>
  }, "id">

  export type AnnouncementsOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    roomId?: SortOrder
    _count?: AnnouncementsCountOrderByAggregateInput
    _avg?: AnnouncementsAvgOrderByAggregateInput
    _max?: AnnouncementsMaxOrderByAggregateInput
    _min?: AnnouncementsMinOrderByAggregateInput
    _sum?: AnnouncementsSumOrderByAggregateInput
  }

  export type AnnouncementsScalarWhereWithAggregatesInput = {
    AND?: AnnouncementsScalarWhereWithAggregatesInput | AnnouncementsScalarWhereWithAggregatesInput[]
    OR?: AnnouncementsScalarWhereWithAggregatesInput[]
    NOT?: AnnouncementsScalarWhereWithAggregatesInput | AnnouncementsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Announcements"> | number
    title?: StringWithAggregatesFilter<"Announcements"> | string
    description?: StringWithAggregatesFilter<"Announcements"> | string
    roomId?: IntWithAggregatesFilter<"Announcements"> | number
  }

  export type ClassroomWhereInput = {
    AND?: ClassroomWhereInput | ClassroomWhereInput[]
    OR?: ClassroomWhereInput[]
    NOT?: ClassroomWhereInput | ClassroomWhereInput[]
    id?: IntFilter<"Classroom"> | number
    classname?: StringFilter<"Classroom"> | string
    subject?: StringFilter<"Classroom"> | string
    section?: StringFilter<"Classroom"> | string
    room?: StringFilter<"Classroom"> | string
    classCode?: StringFilter<"Classroom"> | string
    adminApprovalStatus?: StringFilter<"Classroom"> | string
    profId?: IntFilter<"Classroom"> | number
    relatedToProfessor?: XOR<ProfessorScalarRelationFilter, ProfessorWhereInput>
    enrolledStudents?: StudentListRelationFilter
    listOfCreatedClassworkType?: ClassworkTypeListRelationFilter
    listOfCreatedAnnouncements?: AnnouncementsListRelationFilter
    listOfClasswork?: ClassworkListRelationFilter
  }

  export type ClassroomOrderByWithRelationInput = {
    id?: SortOrder
    classname?: SortOrder
    subject?: SortOrder
    section?: SortOrder
    room?: SortOrder
    classCode?: SortOrder
    adminApprovalStatus?: SortOrder
    profId?: SortOrder
    relatedToProfessor?: ProfessorOrderByWithRelationInput
    enrolledStudents?: StudentOrderByRelationAggregateInput
    listOfCreatedClassworkType?: ClassworkTypeOrderByRelationAggregateInput
    listOfCreatedAnnouncements?: AnnouncementsOrderByRelationAggregateInput
    listOfClasswork?: ClassworkOrderByRelationAggregateInput
  }

  export type ClassroomWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ClassroomWhereInput | ClassroomWhereInput[]
    OR?: ClassroomWhereInput[]
    NOT?: ClassroomWhereInput | ClassroomWhereInput[]
    classname?: StringFilter<"Classroom"> | string
    subject?: StringFilter<"Classroom"> | string
    section?: StringFilter<"Classroom"> | string
    room?: StringFilter<"Classroom"> | string
    classCode?: StringFilter<"Classroom"> | string
    adminApprovalStatus?: StringFilter<"Classroom"> | string
    profId?: IntFilter<"Classroom"> | number
    relatedToProfessor?: XOR<ProfessorScalarRelationFilter, ProfessorWhereInput>
    enrolledStudents?: StudentListRelationFilter
    listOfCreatedClassworkType?: ClassworkTypeListRelationFilter
    listOfCreatedAnnouncements?: AnnouncementsListRelationFilter
    listOfClasswork?: ClassworkListRelationFilter
  }, "id">

  export type ClassroomOrderByWithAggregationInput = {
    id?: SortOrder
    classname?: SortOrder
    subject?: SortOrder
    section?: SortOrder
    room?: SortOrder
    classCode?: SortOrder
    adminApprovalStatus?: SortOrder
    profId?: SortOrder
    _count?: ClassroomCountOrderByAggregateInput
    _avg?: ClassroomAvgOrderByAggregateInput
    _max?: ClassroomMaxOrderByAggregateInput
    _min?: ClassroomMinOrderByAggregateInput
    _sum?: ClassroomSumOrderByAggregateInput
  }

  export type ClassroomScalarWhereWithAggregatesInput = {
    AND?: ClassroomScalarWhereWithAggregatesInput | ClassroomScalarWhereWithAggregatesInput[]
    OR?: ClassroomScalarWhereWithAggregatesInput[]
    NOT?: ClassroomScalarWhereWithAggregatesInput | ClassroomScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Classroom"> | number
    classname?: StringWithAggregatesFilter<"Classroom"> | string
    subject?: StringWithAggregatesFilter<"Classroom"> | string
    section?: StringWithAggregatesFilter<"Classroom"> | string
    room?: StringWithAggregatesFilter<"Classroom"> | string
    classCode?: StringWithAggregatesFilter<"Classroom"> | string
    adminApprovalStatus?: StringWithAggregatesFilter<"Classroom"> | string
    profId?: IntWithAggregatesFilter<"Classroom"> | number
  }

  export type ClassworkWhereInput = {
    AND?: ClassworkWhereInput | ClassworkWhereInput[]
    OR?: ClassworkWhereInput[]
    NOT?: ClassworkWhereInput | ClassworkWhereInput[]
    id?: IntFilter<"Classwork"> | number
    title?: StringFilter<"Classwork"> | string
    description?: StringFilter<"Classwork"> | string
    dueDate?: DateTimeFilter<"Classwork"> | Date | string
    studentId?: IntFilter<"Classwork"> | number
    classroomId?: IntFilter<"Classwork"> | number
    madeByStudent?: XOR<StudentScalarRelationFilter, StudentWhereInput>
    classroom?: XOR<ClassroomScalarRelationFilter, ClassroomWhereInput>
    listOfOutputs?: FilesListRelationFilter
  }

  export type ClassworkOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    dueDate?: SortOrder
    studentId?: SortOrder
    classroomId?: SortOrder
    madeByStudent?: StudentOrderByWithRelationInput
    classroom?: ClassroomOrderByWithRelationInput
    listOfOutputs?: FilesOrderByRelationAggregateInput
  }

  export type ClassworkWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ClassworkWhereInput | ClassworkWhereInput[]
    OR?: ClassworkWhereInput[]
    NOT?: ClassworkWhereInput | ClassworkWhereInput[]
    title?: StringFilter<"Classwork"> | string
    description?: StringFilter<"Classwork"> | string
    dueDate?: DateTimeFilter<"Classwork"> | Date | string
    studentId?: IntFilter<"Classwork"> | number
    classroomId?: IntFilter<"Classwork"> | number
    madeByStudent?: XOR<StudentScalarRelationFilter, StudentWhereInput>
    classroom?: XOR<ClassroomScalarRelationFilter, ClassroomWhereInput>
    listOfOutputs?: FilesListRelationFilter
  }, "id">

  export type ClassworkOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    dueDate?: SortOrder
    studentId?: SortOrder
    classroomId?: SortOrder
    _count?: ClassworkCountOrderByAggregateInput
    _avg?: ClassworkAvgOrderByAggregateInput
    _max?: ClassworkMaxOrderByAggregateInput
    _min?: ClassworkMinOrderByAggregateInput
    _sum?: ClassworkSumOrderByAggregateInput
  }

  export type ClassworkScalarWhereWithAggregatesInput = {
    AND?: ClassworkScalarWhereWithAggregatesInput | ClassworkScalarWhereWithAggregatesInput[]
    OR?: ClassworkScalarWhereWithAggregatesInput[]
    NOT?: ClassworkScalarWhereWithAggregatesInput | ClassworkScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Classwork"> | number
    title?: StringWithAggregatesFilter<"Classwork"> | string
    description?: StringWithAggregatesFilter<"Classwork"> | string
    dueDate?: DateTimeWithAggregatesFilter<"Classwork"> | Date | string
    studentId?: IntWithAggregatesFilter<"Classwork"> | number
    classroomId?: IntWithAggregatesFilter<"Classwork"> | number
  }

  export type UserCreateInput = {
    email?: string | null
    username?: string | null
    password?: string | null
  }

  export type UserUncheckedCreateInput = {
    id?: number
    email?: string | null
    username?: string | null
    password?: string | null
  }

  export type UserUpdateInput = {
    email?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserCreateManyInput = {
    id?: number
    email?: string | null
    username?: string | null
    password?: string | null
  }

  export type UserUpdateManyMutationInput = {
    email?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StudentCreateInput = {
    firstname: string
    middlename: string
    lastname: string
    gender: string
    approvalStatus: string
    profile: string
    listOfEnrolledClassrooms?: ClassroomCreateNestedManyWithoutEnrolledStudentsInput
    listOfClasswork?: ClassworkCreateNestedManyWithoutMadeByStudentInput
  }

  export type StudentUncheckedCreateInput = {
    id?: number
    firstname: string
    middlename: string
    lastname: string
    gender: string
    approvalStatus: string
    profile: string
    listOfEnrolledClassrooms?: ClassroomUncheckedCreateNestedManyWithoutEnrolledStudentsInput
    listOfClasswork?: ClassworkUncheckedCreateNestedManyWithoutMadeByStudentInput
  }

  export type StudentUpdateInput = {
    firstname?: StringFieldUpdateOperationsInput | string
    middlename?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    approvalStatus?: StringFieldUpdateOperationsInput | string
    profile?: StringFieldUpdateOperationsInput | string
    listOfEnrolledClassrooms?: ClassroomUpdateManyWithoutEnrolledStudentsNestedInput
    listOfClasswork?: ClassworkUpdateManyWithoutMadeByStudentNestedInput
  }

  export type StudentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstname?: StringFieldUpdateOperationsInput | string
    middlename?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    approvalStatus?: StringFieldUpdateOperationsInput | string
    profile?: StringFieldUpdateOperationsInput | string
    listOfEnrolledClassrooms?: ClassroomUncheckedUpdateManyWithoutEnrolledStudentsNestedInput
    listOfClasswork?: ClassworkUncheckedUpdateManyWithoutMadeByStudentNestedInput
  }

  export type StudentCreateManyInput = {
    id?: number
    firstname: string
    middlename: string
    lastname: string
    gender: string
    approvalStatus: string
    profile: string
  }

  export type StudentUpdateManyMutationInput = {
    firstname?: StringFieldUpdateOperationsInput | string
    middlename?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    approvalStatus?: StringFieldUpdateOperationsInput | string
    profile?: StringFieldUpdateOperationsInput | string
  }

  export type StudentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstname?: StringFieldUpdateOperationsInput | string
    middlename?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    approvalStatus?: StringFieldUpdateOperationsInput | string
    profile?: StringFieldUpdateOperationsInput | string
  }

  export type ProfessorCreateInput = {
    fullname: string
    profile: string
    listOfCreatedClassrooms?: ClassroomCreateNestedManyWithoutRelatedToProfessorInput
  }

  export type ProfessorUncheckedCreateInput = {
    id?: number
    fullname: string
    profile: string
    listOfCreatedClassrooms?: ClassroomUncheckedCreateNestedManyWithoutRelatedToProfessorInput
  }

  export type ProfessorUpdateInput = {
    fullname?: StringFieldUpdateOperationsInput | string
    profile?: StringFieldUpdateOperationsInput | string
    listOfCreatedClassrooms?: ClassroomUpdateManyWithoutRelatedToProfessorNestedInput
  }

  export type ProfessorUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullname?: StringFieldUpdateOperationsInput | string
    profile?: StringFieldUpdateOperationsInput | string
    listOfCreatedClassrooms?: ClassroomUncheckedUpdateManyWithoutRelatedToProfessorNestedInput
  }

  export type ProfessorCreateManyInput = {
    id?: number
    fullname: string
    profile: string
  }

  export type ProfessorUpdateManyMutationInput = {
    fullname?: StringFieldUpdateOperationsInput | string
    profile?: StringFieldUpdateOperationsInput | string
  }

  export type ProfessorUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullname?: StringFieldUpdateOperationsInput | string
    profile?: StringFieldUpdateOperationsInput | string
  }

  export type ClassworkTypeCreateInput = {
    classworkType: string
    relatedToClassroom: ClassroomCreateNestedOneWithoutListOfCreatedClassworkTypeInput
  }

  export type ClassworkTypeUncheckedCreateInput = {
    id?: number
    classworkType: string
    roomId: number
  }

  export type ClassworkTypeUpdateInput = {
    classworkType?: StringFieldUpdateOperationsInput | string
    relatedToClassroom?: ClassroomUpdateOneRequiredWithoutListOfCreatedClassworkTypeNestedInput
  }

  export type ClassworkTypeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    classworkType?: StringFieldUpdateOperationsInput | string
    roomId?: IntFieldUpdateOperationsInput | number
  }

  export type ClassworkTypeCreateManyInput = {
    id?: number
    classworkType: string
    roomId: number
  }

  export type ClassworkTypeUpdateManyMutationInput = {
    classworkType?: StringFieldUpdateOperationsInput | string
  }

  export type ClassworkTypeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    classworkType?: StringFieldUpdateOperationsInput | string
    roomId?: IntFieldUpdateOperationsInput | number
  }

  export type FilesCreateInput = {
    filename: string
    path: string
    mimeType: string
    size: number
    relatedToAnnouncement: AnnouncementsCreateNestedOneWithoutListOfFilesInput
    relatedToClasswork: ClassworkCreateNestedOneWithoutListOfOutputsInput
  }

  export type FilesUncheckedCreateInput = {
    id?: number
    filename: string
    path: string
    mimeType: string
    size: number
    announceId: number
    classworkId: number
  }

  export type FilesUpdateInput = {
    filename?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    mimeType?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    relatedToAnnouncement?: AnnouncementsUpdateOneRequiredWithoutListOfFilesNestedInput
    relatedToClasswork?: ClassworkUpdateOneRequiredWithoutListOfOutputsNestedInput
  }

  export type FilesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    filename?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    mimeType?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    announceId?: IntFieldUpdateOperationsInput | number
    classworkId?: IntFieldUpdateOperationsInput | number
  }

  export type FilesCreateManyInput = {
    id?: number
    filename: string
    path: string
    mimeType: string
    size: number
    announceId: number
    classworkId: number
  }

  export type FilesUpdateManyMutationInput = {
    filename?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    mimeType?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
  }

  export type FilesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    filename?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    mimeType?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    announceId?: IntFieldUpdateOperationsInput | number
    classworkId?: IntFieldUpdateOperationsInput | number
  }

  export type AnnouncementsCreateInput = {
    title: string
    description: string
    listOfFiles?: FilesCreateNestedManyWithoutRelatedToAnnouncementInput
    relatedToClassroom: ClassroomCreateNestedOneWithoutListOfCreatedAnnouncementsInput
  }

  export type AnnouncementsUncheckedCreateInput = {
    id?: number
    title: string
    description: string
    roomId: number
    listOfFiles?: FilesUncheckedCreateNestedManyWithoutRelatedToAnnouncementInput
  }

  export type AnnouncementsUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    listOfFiles?: FilesUpdateManyWithoutRelatedToAnnouncementNestedInput
    relatedToClassroom?: ClassroomUpdateOneRequiredWithoutListOfCreatedAnnouncementsNestedInput
  }

  export type AnnouncementsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    roomId?: IntFieldUpdateOperationsInput | number
    listOfFiles?: FilesUncheckedUpdateManyWithoutRelatedToAnnouncementNestedInput
  }

  export type AnnouncementsCreateManyInput = {
    id?: number
    title: string
    description: string
    roomId: number
  }

  export type AnnouncementsUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type AnnouncementsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    roomId?: IntFieldUpdateOperationsInput | number
  }

  export type ClassroomCreateInput = {
    classname: string
    subject: string
    section: string
    room: string
    classCode?: string
    adminApprovalStatus: string
    relatedToProfessor: ProfessorCreateNestedOneWithoutListOfCreatedClassroomsInput
    enrolledStudents?: StudentCreateNestedManyWithoutListOfEnrolledClassroomsInput
    listOfCreatedClassworkType?: ClassworkTypeCreateNestedManyWithoutRelatedToClassroomInput
    listOfCreatedAnnouncements?: AnnouncementsCreateNestedManyWithoutRelatedToClassroomInput
    listOfClasswork?: ClassworkCreateNestedManyWithoutClassroomInput
  }

  export type ClassroomUncheckedCreateInput = {
    id?: number
    classname: string
    subject: string
    section: string
    room: string
    classCode?: string
    adminApprovalStatus: string
    profId: number
    enrolledStudents?: StudentUncheckedCreateNestedManyWithoutListOfEnrolledClassroomsInput
    listOfCreatedClassworkType?: ClassworkTypeUncheckedCreateNestedManyWithoutRelatedToClassroomInput
    listOfCreatedAnnouncements?: AnnouncementsUncheckedCreateNestedManyWithoutRelatedToClassroomInput
    listOfClasswork?: ClassworkUncheckedCreateNestedManyWithoutClassroomInput
  }

  export type ClassroomUpdateInput = {
    classname?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    section?: StringFieldUpdateOperationsInput | string
    room?: StringFieldUpdateOperationsInput | string
    classCode?: StringFieldUpdateOperationsInput | string
    adminApprovalStatus?: StringFieldUpdateOperationsInput | string
    relatedToProfessor?: ProfessorUpdateOneRequiredWithoutListOfCreatedClassroomsNestedInput
    enrolledStudents?: StudentUpdateManyWithoutListOfEnrolledClassroomsNestedInput
    listOfCreatedClassworkType?: ClassworkTypeUpdateManyWithoutRelatedToClassroomNestedInput
    listOfCreatedAnnouncements?: AnnouncementsUpdateManyWithoutRelatedToClassroomNestedInput
    listOfClasswork?: ClassworkUpdateManyWithoutClassroomNestedInput
  }

  export type ClassroomUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    classname?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    section?: StringFieldUpdateOperationsInput | string
    room?: StringFieldUpdateOperationsInput | string
    classCode?: StringFieldUpdateOperationsInput | string
    adminApprovalStatus?: StringFieldUpdateOperationsInput | string
    profId?: IntFieldUpdateOperationsInput | number
    enrolledStudents?: StudentUncheckedUpdateManyWithoutListOfEnrolledClassroomsNestedInput
    listOfCreatedClassworkType?: ClassworkTypeUncheckedUpdateManyWithoutRelatedToClassroomNestedInput
    listOfCreatedAnnouncements?: AnnouncementsUncheckedUpdateManyWithoutRelatedToClassroomNestedInput
    listOfClasswork?: ClassworkUncheckedUpdateManyWithoutClassroomNestedInput
  }

  export type ClassroomCreateManyInput = {
    id?: number
    classname: string
    subject: string
    section: string
    room: string
    classCode?: string
    adminApprovalStatus: string
    profId: number
  }

  export type ClassroomUpdateManyMutationInput = {
    classname?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    section?: StringFieldUpdateOperationsInput | string
    room?: StringFieldUpdateOperationsInput | string
    classCode?: StringFieldUpdateOperationsInput | string
    adminApprovalStatus?: StringFieldUpdateOperationsInput | string
  }

  export type ClassroomUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    classname?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    section?: StringFieldUpdateOperationsInput | string
    room?: StringFieldUpdateOperationsInput | string
    classCode?: StringFieldUpdateOperationsInput | string
    adminApprovalStatus?: StringFieldUpdateOperationsInput | string
    profId?: IntFieldUpdateOperationsInput | number
  }

  export type ClassworkCreateInput = {
    title: string
    description: string
    dueDate: Date | string
    madeByStudent: StudentCreateNestedOneWithoutListOfClassworkInput
    classroom: ClassroomCreateNestedOneWithoutListOfClassworkInput
    listOfOutputs?: FilesCreateNestedManyWithoutRelatedToClassworkInput
  }

  export type ClassworkUncheckedCreateInput = {
    id?: number
    title: string
    description: string
    dueDate: Date | string
    studentId: number
    classroomId: number
    listOfOutputs?: FilesUncheckedCreateNestedManyWithoutRelatedToClassworkInput
  }

  export type ClassworkUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    madeByStudent?: StudentUpdateOneRequiredWithoutListOfClassworkNestedInput
    classroom?: ClassroomUpdateOneRequiredWithoutListOfClassworkNestedInput
    listOfOutputs?: FilesUpdateManyWithoutRelatedToClassworkNestedInput
  }

  export type ClassworkUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    studentId?: IntFieldUpdateOperationsInput | number
    classroomId?: IntFieldUpdateOperationsInput | number
    listOfOutputs?: FilesUncheckedUpdateManyWithoutRelatedToClassworkNestedInput
  }

  export type ClassworkCreateManyInput = {
    id?: number
    title: string
    description: string
    dueDate: Date | string
    studentId: number
    classroomId: number
  }

  export type ClassworkUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClassworkUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    studentId?: IntFieldUpdateOperationsInput | number
    classroomId?: IntFieldUpdateOperationsInput | number
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

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    password?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    password?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    password?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type ClassroomListRelationFilter = {
    every?: ClassroomWhereInput
    some?: ClassroomWhereInput
    none?: ClassroomWhereInput
  }

  export type ClassworkListRelationFilter = {
    every?: ClassworkWhereInput
    some?: ClassworkWhereInput
    none?: ClassworkWhereInput
  }

  export type ClassroomOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ClassworkOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StudentCountOrderByAggregateInput = {
    id?: SortOrder
    firstname?: SortOrder
    middlename?: SortOrder
    lastname?: SortOrder
    gender?: SortOrder
    approvalStatus?: SortOrder
    profile?: SortOrder
  }

  export type StudentAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StudentMaxOrderByAggregateInput = {
    id?: SortOrder
    firstname?: SortOrder
    middlename?: SortOrder
    lastname?: SortOrder
    gender?: SortOrder
    approvalStatus?: SortOrder
    profile?: SortOrder
  }

  export type StudentMinOrderByAggregateInput = {
    id?: SortOrder
    firstname?: SortOrder
    middlename?: SortOrder
    lastname?: SortOrder
    gender?: SortOrder
    approvalStatus?: SortOrder
    profile?: SortOrder
  }

  export type StudentSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type ProfessorCountOrderByAggregateInput = {
    id?: SortOrder
    fullname?: SortOrder
    profile?: SortOrder
  }

  export type ProfessorAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ProfessorMaxOrderByAggregateInput = {
    id?: SortOrder
    fullname?: SortOrder
    profile?: SortOrder
  }

  export type ProfessorMinOrderByAggregateInput = {
    id?: SortOrder
    fullname?: SortOrder
    profile?: SortOrder
  }

  export type ProfessorSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ClassroomScalarRelationFilter = {
    is?: ClassroomWhereInput
    isNot?: ClassroomWhereInput
  }

  export type ClassworkTypeCountOrderByAggregateInput = {
    id?: SortOrder
    classworkType?: SortOrder
    roomId?: SortOrder
  }

  export type ClassworkTypeAvgOrderByAggregateInput = {
    id?: SortOrder
    roomId?: SortOrder
  }

  export type ClassworkTypeMaxOrderByAggregateInput = {
    id?: SortOrder
    classworkType?: SortOrder
    roomId?: SortOrder
  }

  export type ClassworkTypeMinOrderByAggregateInput = {
    id?: SortOrder
    classworkType?: SortOrder
    roomId?: SortOrder
  }

  export type ClassworkTypeSumOrderByAggregateInput = {
    id?: SortOrder
    roomId?: SortOrder
  }

  export type AnnouncementsScalarRelationFilter = {
    is?: AnnouncementsWhereInput
    isNot?: AnnouncementsWhereInput
  }

  export type ClassworkScalarRelationFilter = {
    is?: ClassworkWhereInput
    isNot?: ClassworkWhereInput
  }

  export type FilesCountOrderByAggregateInput = {
    id?: SortOrder
    filename?: SortOrder
    path?: SortOrder
    mimeType?: SortOrder
    size?: SortOrder
    announceId?: SortOrder
    classworkId?: SortOrder
  }

  export type FilesAvgOrderByAggregateInput = {
    id?: SortOrder
    size?: SortOrder
    announceId?: SortOrder
    classworkId?: SortOrder
  }

  export type FilesMaxOrderByAggregateInput = {
    id?: SortOrder
    filename?: SortOrder
    path?: SortOrder
    mimeType?: SortOrder
    size?: SortOrder
    announceId?: SortOrder
    classworkId?: SortOrder
  }

  export type FilesMinOrderByAggregateInput = {
    id?: SortOrder
    filename?: SortOrder
    path?: SortOrder
    mimeType?: SortOrder
    size?: SortOrder
    announceId?: SortOrder
    classworkId?: SortOrder
  }

  export type FilesSumOrderByAggregateInput = {
    id?: SortOrder
    size?: SortOrder
    announceId?: SortOrder
    classworkId?: SortOrder
  }

  export type FilesListRelationFilter = {
    every?: FilesWhereInput
    some?: FilesWhereInput
    none?: FilesWhereInput
  }

  export type FilesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AnnouncementsCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    roomId?: SortOrder
  }

  export type AnnouncementsAvgOrderByAggregateInput = {
    id?: SortOrder
    roomId?: SortOrder
  }

  export type AnnouncementsMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    roomId?: SortOrder
  }

  export type AnnouncementsMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    roomId?: SortOrder
  }

  export type AnnouncementsSumOrderByAggregateInput = {
    id?: SortOrder
    roomId?: SortOrder
  }

  export type ProfessorScalarRelationFilter = {
    is?: ProfessorWhereInput
    isNot?: ProfessorWhereInput
  }

  export type StudentListRelationFilter = {
    every?: StudentWhereInput
    some?: StudentWhereInput
    none?: StudentWhereInput
  }

  export type ClassworkTypeListRelationFilter = {
    every?: ClassworkTypeWhereInput
    some?: ClassworkTypeWhereInput
    none?: ClassworkTypeWhereInput
  }

  export type AnnouncementsListRelationFilter = {
    every?: AnnouncementsWhereInput
    some?: AnnouncementsWhereInput
    none?: AnnouncementsWhereInput
  }

  export type StudentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ClassworkTypeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AnnouncementsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ClassroomCountOrderByAggregateInput = {
    id?: SortOrder
    classname?: SortOrder
    subject?: SortOrder
    section?: SortOrder
    room?: SortOrder
    classCode?: SortOrder
    adminApprovalStatus?: SortOrder
    profId?: SortOrder
  }

  export type ClassroomAvgOrderByAggregateInput = {
    id?: SortOrder
    profId?: SortOrder
  }

  export type ClassroomMaxOrderByAggregateInput = {
    id?: SortOrder
    classname?: SortOrder
    subject?: SortOrder
    section?: SortOrder
    room?: SortOrder
    classCode?: SortOrder
    adminApprovalStatus?: SortOrder
    profId?: SortOrder
  }

  export type ClassroomMinOrderByAggregateInput = {
    id?: SortOrder
    classname?: SortOrder
    subject?: SortOrder
    section?: SortOrder
    room?: SortOrder
    classCode?: SortOrder
    adminApprovalStatus?: SortOrder
    profId?: SortOrder
  }

  export type ClassroomSumOrderByAggregateInput = {
    id?: SortOrder
    profId?: SortOrder
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

  export type StudentScalarRelationFilter = {
    is?: StudentWhereInput
    isNot?: StudentWhereInput
  }

  export type ClassworkCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    dueDate?: SortOrder
    studentId?: SortOrder
    classroomId?: SortOrder
  }

  export type ClassworkAvgOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    classroomId?: SortOrder
  }

  export type ClassworkMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    dueDate?: SortOrder
    studentId?: SortOrder
    classroomId?: SortOrder
  }

  export type ClassworkMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    dueDate?: SortOrder
    studentId?: SortOrder
    classroomId?: SortOrder
  }

  export type ClassworkSumOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    classroomId?: SortOrder
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

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ClassroomCreateNestedManyWithoutEnrolledStudentsInput = {
    create?: XOR<ClassroomCreateWithoutEnrolledStudentsInput, ClassroomUncheckedCreateWithoutEnrolledStudentsInput> | ClassroomCreateWithoutEnrolledStudentsInput[] | ClassroomUncheckedCreateWithoutEnrolledStudentsInput[]
    connectOrCreate?: ClassroomCreateOrConnectWithoutEnrolledStudentsInput | ClassroomCreateOrConnectWithoutEnrolledStudentsInput[]
    connect?: ClassroomWhereUniqueInput | ClassroomWhereUniqueInput[]
  }

  export type ClassworkCreateNestedManyWithoutMadeByStudentInput = {
    create?: XOR<ClassworkCreateWithoutMadeByStudentInput, ClassworkUncheckedCreateWithoutMadeByStudentInput> | ClassworkCreateWithoutMadeByStudentInput[] | ClassworkUncheckedCreateWithoutMadeByStudentInput[]
    connectOrCreate?: ClassworkCreateOrConnectWithoutMadeByStudentInput | ClassworkCreateOrConnectWithoutMadeByStudentInput[]
    createMany?: ClassworkCreateManyMadeByStudentInputEnvelope
    connect?: ClassworkWhereUniqueInput | ClassworkWhereUniqueInput[]
  }

  export type ClassroomUncheckedCreateNestedManyWithoutEnrolledStudentsInput = {
    create?: XOR<ClassroomCreateWithoutEnrolledStudentsInput, ClassroomUncheckedCreateWithoutEnrolledStudentsInput> | ClassroomCreateWithoutEnrolledStudentsInput[] | ClassroomUncheckedCreateWithoutEnrolledStudentsInput[]
    connectOrCreate?: ClassroomCreateOrConnectWithoutEnrolledStudentsInput | ClassroomCreateOrConnectWithoutEnrolledStudentsInput[]
    connect?: ClassroomWhereUniqueInput | ClassroomWhereUniqueInput[]
  }

  export type ClassworkUncheckedCreateNestedManyWithoutMadeByStudentInput = {
    create?: XOR<ClassworkCreateWithoutMadeByStudentInput, ClassworkUncheckedCreateWithoutMadeByStudentInput> | ClassworkCreateWithoutMadeByStudentInput[] | ClassworkUncheckedCreateWithoutMadeByStudentInput[]
    connectOrCreate?: ClassworkCreateOrConnectWithoutMadeByStudentInput | ClassworkCreateOrConnectWithoutMadeByStudentInput[]
    createMany?: ClassworkCreateManyMadeByStudentInputEnvelope
    connect?: ClassworkWhereUniqueInput | ClassworkWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type ClassroomUpdateManyWithoutEnrolledStudentsNestedInput = {
    create?: XOR<ClassroomCreateWithoutEnrolledStudentsInput, ClassroomUncheckedCreateWithoutEnrolledStudentsInput> | ClassroomCreateWithoutEnrolledStudentsInput[] | ClassroomUncheckedCreateWithoutEnrolledStudentsInput[]
    connectOrCreate?: ClassroomCreateOrConnectWithoutEnrolledStudentsInput | ClassroomCreateOrConnectWithoutEnrolledStudentsInput[]
    upsert?: ClassroomUpsertWithWhereUniqueWithoutEnrolledStudentsInput | ClassroomUpsertWithWhereUniqueWithoutEnrolledStudentsInput[]
    set?: ClassroomWhereUniqueInput | ClassroomWhereUniqueInput[]
    disconnect?: ClassroomWhereUniqueInput | ClassroomWhereUniqueInput[]
    delete?: ClassroomWhereUniqueInput | ClassroomWhereUniqueInput[]
    connect?: ClassroomWhereUniqueInput | ClassroomWhereUniqueInput[]
    update?: ClassroomUpdateWithWhereUniqueWithoutEnrolledStudentsInput | ClassroomUpdateWithWhereUniqueWithoutEnrolledStudentsInput[]
    updateMany?: ClassroomUpdateManyWithWhereWithoutEnrolledStudentsInput | ClassroomUpdateManyWithWhereWithoutEnrolledStudentsInput[]
    deleteMany?: ClassroomScalarWhereInput | ClassroomScalarWhereInput[]
  }

  export type ClassworkUpdateManyWithoutMadeByStudentNestedInput = {
    create?: XOR<ClassworkCreateWithoutMadeByStudentInput, ClassworkUncheckedCreateWithoutMadeByStudentInput> | ClassworkCreateWithoutMadeByStudentInput[] | ClassworkUncheckedCreateWithoutMadeByStudentInput[]
    connectOrCreate?: ClassworkCreateOrConnectWithoutMadeByStudentInput | ClassworkCreateOrConnectWithoutMadeByStudentInput[]
    upsert?: ClassworkUpsertWithWhereUniqueWithoutMadeByStudentInput | ClassworkUpsertWithWhereUniqueWithoutMadeByStudentInput[]
    createMany?: ClassworkCreateManyMadeByStudentInputEnvelope
    set?: ClassworkWhereUniqueInput | ClassworkWhereUniqueInput[]
    disconnect?: ClassworkWhereUniqueInput | ClassworkWhereUniqueInput[]
    delete?: ClassworkWhereUniqueInput | ClassworkWhereUniqueInput[]
    connect?: ClassworkWhereUniqueInput | ClassworkWhereUniqueInput[]
    update?: ClassworkUpdateWithWhereUniqueWithoutMadeByStudentInput | ClassworkUpdateWithWhereUniqueWithoutMadeByStudentInput[]
    updateMany?: ClassworkUpdateManyWithWhereWithoutMadeByStudentInput | ClassworkUpdateManyWithWhereWithoutMadeByStudentInput[]
    deleteMany?: ClassworkScalarWhereInput | ClassworkScalarWhereInput[]
  }

  export type ClassroomUncheckedUpdateManyWithoutEnrolledStudentsNestedInput = {
    create?: XOR<ClassroomCreateWithoutEnrolledStudentsInput, ClassroomUncheckedCreateWithoutEnrolledStudentsInput> | ClassroomCreateWithoutEnrolledStudentsInput[] | ClassroomUncheckedCreateWithoutEnrolledStudentsInput[]
    connectOrCreate?: ClassroomCreateOrConnectWithoutEnrolledStudentsInput | ClassroomCreateOrConnectWithoutEnrolledStudentsInput[]
    upsert?: ClassroomUpsertWithWhereUniqueWithoutEnrolledStudentsInput | ClassroomUpsertWithWhereUniqueWithoutEnrolledStudentsInput[]
    set?: ClassroomWhereUniqueInput | ClassroomWhereUniqueInput[]
    disconnect?: ClassroomWhereUniqueInput | ClassroomWhereUniqueInput[]
    delete?: ClassroomWhereUniqueInput | ClassroomWhereUniqueInput[]
    connect?: ClassroomWhereUniqueInput | ClassroomWhereUniqueInput[]
    update?: ClassroomUpdateWithWhereUniqueWithoutEnrolledStudentsInput | ClassroomUpdateWithWhereUniqueWithoutEnrolledStudentsInput[]
    updateMany?: ClassroomUpdateManyWithWhereWithoutEnrolledStudentsInput | ClassroomUpdateManyWithWhereWithoutEnrolledStudentsInput[]
    deleteMany?: ClassroomScalarWhereInput | ClassroomScalarWhereInput[]
  }

  export type ClassworkUncheckedUpdateManyWithoutMadeByStudentNestedInput = {
    create?: XOR<ClassworkCreateWithoutMadeByStudentInput, ClassworkUncheckedCreateWithoutMadeByStudentInput> | ClassworkCreateWithoutMadeByStudentInput[] | ClassworkUncheckedCreateWithoutMadeByStudentInput[]
    connectOrCreate?: ClassworkCreateOrConnectWithoutMadeByStudentInput | ClassworkCreateOrConnectWithoutMadeByStudentInput[]
    upsert?: ClassworkUpsertWithWhereUniqueWithoutMadeByStudentInput | ClassworkUpsertWithWhereUniqueWithoutMadeByStudentInput[]
    createMany?: ClassworkCreateManyMadeByStudentInputEnvelope
    set?: ClassworkWhereUniqueInput | ClassworkWhereUniqueInput[]
    disconnect?: ClassworkWhereUniqueInput | ClassworkWhereUniqueInput[]
    delete?: ClassworkWhereUniqueInput | ClassworkWhereUniqueInput[]
    connect?: ClassworkWhereUniqueInput | ClassworkWhereUniqueInput[]
    update?: ClassworkUpdateWithWhereUniqueWithoutMadeByStudentInput | ClassworkUpdateWithWhereUniqueWithoutMadeByStudentInput[]
    updateMany?: ClassworkUpdateManyWithWhereWithoutMadeByStudentInput | ClassworkUpdateManyWithWhereWithoutMadeByStudentInput[]
    deleteMany?: ClassworkScalarWhereInput | ClassworkScalarWhereInput[]
  }

  export type ClassroomCreateNestedManyWithoutRelatedToProfessorInput = {
    create?: XOR<ClassroomCreateWithoutRelatedToProfessorInput, ClassroomUncheckedCreateWithoutRelatedToProfessorInput> | ClassroomCreateWithoutRelatedToProfessorInput[] | ClassroomUncheckedCreateWithoutRelatedToProfessorInput[]
    connectOrCreate?: ClassroomCreateOrConnectWithoutRelatedToProfessorInput | ClassroomCreateOrConnectWithoutRelatedToProfessorInput[]
    createMany?: ClassroomCreateManyRelatedToProfessorInputEnvelope
    connect?: ClassroomWhereUniqueInput | ClassroomWhereUniqueInput[]
  }

  export type ClassroomUncheckedCreateNestedManyWithoutRelatedToProfessorInput = {
    create?: XOR<ClassroomCreateWithoutRelatedToProfessorInput, ClassroomUncheckedCreateWithoutRelatedToProfessorInput> | ClassroomCreateWithoutRelatedToProfessorInput[] | ClassroomUncheckedCreateWithoutRelatedToProfessorInput[]
    connectOrCreate?: ClassroomCreateOrConnectWithoutRelatedToProfessorInput | ClassroomCreateOrConnectWithoutRelatedToProfessorInput[]
    createMany?: ClassroomCreateManyRelatedToProfessorInputEnvelope
    connect?: ClassroomWhereUniqueInput | ClassroomWhereUniqueInput[]
  }

  export type ClassroomUpdateManyWithoutRelatedToProfessorNestedInput = {
    create?: XOR<ClassroomCreateWithoutRelatedToProfessorInput, ClassroomUncheckedCreateWithoutRelatedToProfessorInput> | ClassroomCreateWithoutRelatedToProfessorInput[] | ClassroomUncheckedCreateWithoutRelatedToProfessorInput[]
    connectOrCreate?: ClassroomCreateOrConnectWithoutRelatedToProfessorInput | ClassroomCreateOrConnectWithoutRelatedToProfessorInput[]
    upsert?: ClassroomUpsertWithWhereUniqueWithoutRelatedToProfessorInput | ClassroomUpsertWithWhereUniqueWithoutRelatedToProfessorInput[]
    createMany?: ClassroomCreateManyRelatedToProfessorInputEnvelope
    set?: ClassroomWhereUniqueInput | ClassroomWhereUniqueInput[]
    disconnect?: ClassroomWhereUniqueInput | ClassroomWhereUniqueInput[]
    delete?: ClassroomWhereUniqueInput | ClassroomWhereUniqueInput[]
    connect?: ClassroomWhereUniqueInput | ClassroomWhereUniqueInput[]
    update?: ClassroomUpdateWithWhereUniqueWithoutRelatedToProfessorInput | ClassroomUpdateWithWhereUniqueWithoutRelatedToProfessorInput[]
    updateMany?: ClassroomUpdateManyWithWhereWithoutRelatedToProfessorInput | ClassroomUpdateManyWithWhereWithoutRelatedToProfessorInput[]
    deleteMany?: ClassroomScalarWhereInput | ClassroomScalarWhereInput[]
  }

  export type ClassroomUncheckedUpdateManyWithoutRelatedToProfessorNestedInput = {
    create?: XOR<ClassroomCreateWithoutRelatedToProfessorInput, ClassroomUncheckedCreateWithoutRelatedToProfessorInput> | ClassroomCreateWithoutRelatedToProfessorInput[] | ClassroomUncheckedCreateWithoutRelatedToProfessorInput[]
    connectOrCreate?: ClassroomCreateOrConnectWithoutRelatedToProfessorInput | ClassroomCreateOrConnectWithoutRelatedToProfessorInput[]
    upsert?: ClassroomUpsertWithWhereUniqueWithoutRelatedToProfessorInput | ClassroomUpsertWithWhereUniqueWithoutRelatedToProfessorInput[]
    createMany?: ClassroomCreateManyRelatedToProfessorInputEnvelope
    set?: ClassroomWhereUniqueInput | ClassroomWhereUniqueInput[]
    disconnect?: ClassroomWhereUniqueInput | ClassroomWhereUniqueInput[]
    delete?: ClassroomWhereUniqueInput | ClassroomWhereUniqueInput[]
    connect?: ClassroomWhereUniqueInput | ClassroomWhereUniqueInput[]
    update?: ClassroomUpdateWithWhereUniqueWithoutRelatedToProfessorInput | ClassroomUpdateWithWhereUniqueWithoutRelatedToProfessorInput[]
    updateMany?: ClassroomUpdateManyWithWhereWithoutRelatedToProfessorInput | ClassroomUpdateManyWithWhereWithoutRelatedToProfessorInput[]
    deleteMany?: ClassroomScalarWhereInput | ClassroomScalarWhereInput[]
  }

  export type ClassroomCreateNestedOneWithoutListOfCreatedClassworkTypeInput = {
    create?: XOR<ClassroomCreateWithoutListOfCreatedClassworkTypeInput, ClassroomUncheckedCreateWithoutListOfCreatedClassworkTypeInput>
    connectOrCreate?: ClassroomCreateOrConnectWithoutListOfCreatedClassworkTypeInput
    connect?: ClassroomWhereUniqueInput
  }

  export type ClassroomUpdateOneRequiredWithoutListOfCreatedClassworkTypeNestedInput = {
    create?: XOR<ClassroomCreateWithoutListOfCreatedClassworkTypeInput, ClassroomUncheckedCreateWithoutListOfCreatedClassworkTypeInput>
    connectOrCreate?: ClassroomCreateOrConnectWithoutListOfCreatedClassworkTypeInput
    upsert?: ClassroomUpsertWithoutListOfCreatedClassworkTypeInput
    connect?: ClassroomWhereUniqueInput
    update?: XOR<XOR<ClassroomUpdateToOneWithWhereWithoutListOfCreatedClassworkTypeInput, ClassroomUpdateWithoutListOfCreatedClassworkTypeInput>, ClassroomUncheckedUpdateWithoutListOfCreatedClassworkTypeInput>
  }

  export type AnnouncementsCreateNestedOneWithoutListOfFilesInput = {
    create?: XOR<AnnouncementsCreateWithoutListOfFilesInput, AnnouncementsUncheckedCreateWithoutListOfFilesInput>
    connectOrCreate?: AnnouncementsCreateOrConnectWithoutListOfFilesInput
    connect?: AnnouncementsWhereUniqueInput
  }

  export type ClassworkCreateNestedOneWithoutListOfOutputsInput = {
    create?: XOR<ClassworkCreateWithoutListOfOutputsInput, ClassworkUncheckedCreateWithoutListOfOutputsInput>
    connectOrCreate?: ClassworkCreateOrConnectWithoutListOfOutputsInput
    connect?: ClassworkWhereUniqueInput
  }

  export type AnnouncementsUpdateOneRequiredWithoutListOfFilesNestedInput = {
    create?: XOR<AnnouncementsCreateWithoutListOfFilesInput, AnnouncementsUncheckedCreateWithoutListOfFilesInput>
    connectOrCreate?: AnnouncementsCreateOrConnectWithoutListOfFilesInput
    upsert?: AnnouncementsUpsertWithoutListOfFilesInput
    connect?: AnnouncementsWhereUniqueInput
    update?: XOR<XOR<AnnouncementsUpdateToOneWithWhereWithoutListOfFilesInput, AnnouncementsUpdateWithoutListOfFilesInput>, AnnouncementsUncheckedUpdateWithoutListOfFilesInput>
  }

  export type ClassworkUpdateOneRequiredWithoutListOfOutputsNestedInput = {
    create?: XOR<ClassworkCreateWithoutListOfOutputsInput, ClassworkUncheckedCreateWithoutListOfOutputsInput>
    connectOrCreate?: ClassworkCreateOrConnectWithoutListOfOutputsInput
    upsert?: ClassworkUpsertWithoutListOfOutputsInput
    connect?: ClassworkWhereUniqueInput
    update?: XOR<XOR<ClassworkUpdateToOneWithWhereWithoutListOfOutputsInput, ClassworkUpdateWithoutListOfOutputsInput>, ClassworkUncheckedUpdateWithoutListOfOutputsInput>
  }

  export type FilesCreateNestedManyWithoutRelatedToAnnouncementInput = {
    create?: XOR<FilesCreateWithoutRelatedToAnnouncementInput, FilesUncheckedCreateWithoutRelatedToAnnouncementInput> | FilesCreateWithoutRelatedToAnnouncementInput[] | FilesUncheckedCreateWithoutRelatedToAnnouncementInput[]
    connectOrCreate?: FilesCreateOrConnectWithoutRelatedToAnnouncementInput | FilesCreateOrConnectWithoutRelatedToAnnouncementInput[]
    createMany?: FilesCreateManyRelatedToAnnouncementInputEnvelope
    connect?: FilesWhereUniqueInput | FilesWhereUniqueInput[]
  }

  export type ClassroomCreateNestedOneWithoutListOfCreatedAnnouncementsInput = {
    create?: XOR<ClassroomCreateWithoutListOfCreatedAnnouncementsInput, ClassroomUncheckedCreateWithoutListOfCreatedAnnouncementsInput>
    connectOrCreate?: ClassroomCreateOrConnectWithoutListOfCreatedAnnouncementsInput
    connect?: ClassroomWhereUniqueInput
  }

  export type FilesUncheckedCreateNestedManyWithoutRelatedToAnnouncementInput = {
    create?: XOR<FilesCreateWithoutRelatedToAnnouncementInput, FilesUncheckedCreateWithoutRelatedToAnnouncementInput> | FilesCreateWithoutRelatedToAnnouncementInput[] | FilesUncheckedCreateWithoutRelatedToAnnouncementInput[]
    connectOrCreate?: FilesCreateOrConnectWithoutRelatedToAnnouncementInput | FilesCreateOrConnectWithoutRelatedToAnnouncementInput[]
    createMany?: FilesCreateManyRelatedToAnnouncementInputEnvelope
    connect?: FilesWhereUniqueInput | FilesWhereUniqueInput[]
  }

  export type FilesUpdateManyWithoutRelatedToAnnouncementNestedInput = {
    create?: XOR<FilesCreateWithoutRelatedToAnnouncementInput, FilesUncheckedCreateWithoutRelatedToAnnouncementInput> | FilesCreateWithoutRelatedToAnnouncementInput[] | FilesUncheckedCreateWithoutRelatedToAnnouncementInput[]
    connectOrCreate?: FilesCreateOrConnectWithoutRelatedToAnnouncementInput | FilesCreateOrConnectWithoutRelatedToAnnouncementInput[]
    upsert?: FilesUpsertWithWhereUniqueWithoutRelatedToAnnouncementInput | FilesUpsertWithWhereUniqueWithoutRelatedToAnnouncementInput[]
    createMany?: FilesCreateManyRelatedToAnnouncementInputEnvelope
    set?: FilesWhereUniqueInput | FilesWhereUniqueInput[]
    disconnect?: FilesWhereUniqueInput | FilesWhereUniqueInput[]
    delete?: FilesWhereUniqueInput | FilesWhereUniqueInput[]
    connect?: FilesWhereUniqueInput | FilesWhereUniqueInput[]
    update?: FilesUpdateWithWhereUniqueWithoutRelatedToAnnouncementInput | FilesUpdateWithWhereUniqueWithoutRelatedToAnnouncementInput[]
    updateMany?: FilesUpdateManyWithWhereWithoutRelatedToAnnouncementInput | FilesUpdateManyWithWhereWithoutRelatedToAnnouncementInput[]
    deleteMany?: FilesScalarWhereInput | FilesScalarWhereInput[]
  }

  export type ClassroomUpdateOneRequiredWithoutListOfCreatedAnnouncementsNestedInput = {
    create?: XOR<ClassroomCreateWithoutListOfCreatedAnnouncementsInput, ClassroomUncheckedCreateWithoutListOfCreatedAnnouncementsInput>
    connectOrCreate?: ClassroomCreateOrConnectWithoutListOfCreatedAnnouncementsInput
    upsert?: ClassroomUpsertWithoutListOfCreatedAnnouncementsInput
    connect?: ClassroomWhereUniqueInput
    update?: XOR<XOR<ClassroomUpdateToOneWithWhereWithoutListOfCreatedAnnouncementsInput, ClassroomUpdateWithoutListOfCreatedAnnouncementsInput>, ClassroomUncheckedUpdateWithoutListOfCreatedAnnouncementsInput>
  }

  export type FilesUncheckedUpdateManyWithoutRelatedToAnnouncementNestedInput = {
    create?: XOR<FilesCreateWithoutRelatedToAnnouncementInput, FilesUncheckedCreateWithoutRelatedToAnnouncementInput> | FilesCreateWithoutRelatedToAnnouncementInput[] | FilesUncheckedCreateWithoutRelatedToAnnouncementInput[]
    connectOrCreate?: FilesCreateOrConnectWithoutRelatedToAnnouncementInput | FilesCreateOrConnectWithoutRelatedToAnnouncementInput[]
    upsert?: FilesUpsertWithWhereUniqueWithoutRelatedToAnnouncementInput | FilesUpsertWithWhereUniqueWithoutRelatedToAnnouncementInput[]
    createMany?: FilesCreateManyRelatedToAnnouncementInputEnvelope
    set?: FilesWhereUniqueInput | FilesWhereUniqueInput[]
    disconnect?: FilesWhereUniqueInput | FilesWhereUniqueInput[]
    delete?: FilesWhereUniqueInput | FilesWhereUniqueInput[]
    connect?: FilesWhereUniqueInput | FilesWhereUniqueInput[]
    update?: FilesUpdateWithWhereUniqueWithoutRelatedToAnnouncementInput | FilesUpdateWithWhereUniqueWithoutRelatedToAnnouncementInput[]
    updateMany?: FilesUpdateManyWithWhereWithoutRelatedToAnnouncementInput | FilesUpdateManyWithWhereWithoutRelatedToAnnouncementInput[]
    deleteMany?: FilesScalarWhereInput | FilesScalarWhereInput[]
  }

  export type ProfessorCreateNestedOneWithoutListOfCreatedClassroomsInput = {
    create?: XOR<ProfessorCreateWithoutListOfCreatedClassroomsInput, ProfessorUncheckedCreateWithoutListOfCreatedClassroomsInput>
    connectOrCreate?: ProfessorCreateOrConnectWithoutListOfCreatedClassroomsInput
    connect?: ProfessorWhereUniqueInput
  }

  export type StudentCreateNestedManyWithoutListOfEnrolledClassroomsInput = {
    create?: XOR<StudentCreateWithoutListOfEnrolledClassroomsInput, StudentUncheckedCreateWithoutListOfEnrolledClassroomsInput> | StudentCreateWithoutListOfEnrolledClassroomsInput[] | StudentUncheckedCreateWithoutListOfEnrolledClassroomsInput[]
    connectOrCreate?: StudentCreateOrConnectWithoutListOfEnrolledClassroomsInput | StudentCreateOrConnectWithoutListOfEnrolledClassroomsInput[]
    connect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
  }

  export type ClassworkTypeCreateNestedManyWithoutRelatedToClassroomInput = {
    create?: XOR<ClassworkTypeCreateWithoutRelatedToClassroomInput, ClassworkTypeUncheckedCreateWithoutRelatedToClassroomInput> | ClassworkTypeCreateWithoutRelatedToClassroomInput[] | ClassworkTypeUncheckedCreateWithoutRelatedToClassroomInput[]
    connectOrCreate?: ClassworkTypeCreateOrConnectWithoutRelatedToClassroomInput | ClassworkTypeCreateOrConnectWithoutRelatedToClassroomInput[]
    createMany?: ClassworkTypeCreateManyRelatedToClassroomInputEnvelope
    connect?: ClassworkTypeWhereUniqueInput | ClassworkTypeWhereUniqueInput[]
  }

  export type AnnouncementsCreateNestedManyWithoutRelatedToClassroomInput = {
    create?: XOR<AnnouncementsCreateWithoutRelatedToClassroomInput, AnnouncementsUncheckedCreateWithoutRelatedToClassroomInput> | AnnouncementsCreateWithoutRelatedToClassroomInput[] | AnnouncementsUncheckedCreateWithoutRelatedToClassroomInput[]
    connectOrCreate?: AnnouncementsCreateOrConnectWithoutRelatedToClassroomInput | AnnouncementsCreateOrConnectWithoutRelatedToClassroomInput[]
    createMany?: AnnouncementsCreateManyRelatedToClassroomInputEnvelope
    connect?: AnnouncementsWhereUniqueInput | AnnouncementsWhereUniqueInput[]
  }

  export type ClassworkCreateNestedManyWithoutClassroomInput = {
    create?: XOR<ClassworkCreateWithoutClassroomInput, ClassworkUncheckedCreateWithoutClassroomInput> | ClassworkCreateWithoutClassroomInput[] | ClassworkUncheckedCreateWithoutClassroomInput[]
    connectOrCreate?: ClassworkCreateOrConnectWithoutClassroomInput | ClassworkCreateOrConnectWithoutClassroomInput[]
    createMany?: ClassworkCreateManyClassroomInputEnvelope
    connect?: ClassworkWhereUniqueInput | ClassworkWhereUniqueInput[]
  }

  export type StudentUncheckedCreateNestedManyWithoutListOfEnrolledClassroomsInput = {
    create?: XOR<StudentCreateWithoutListOfEnrolledClassroomsInput, StudentUncheckedCreateWithoutListOfEnrolledClassroomsInput> | StudentCreateWithoutListOfEnrolledClassroomsInput[] | StudentUncheckedCreateWithoutListOfEnrolledClassroomsInput[]
    connectOrCreate?: StudentCreateOrConnectWithoutListOfEnrolledClassroomsInput | StudentCreateOrConnectWithoutListOfEnrolledClassroomsInput[]
    connect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
  }

  export type ClassworkTypeUncheckedCreateNestedManyWithoutRelatedToClassroomInput = {
    create?: XOR<ClassworkTypeCreateWithoutRelatedToClassroomInput, ClassworkTypeUncheckedCreateWithoutRelatedToClassroomInput> | ClassworkTypeCreateWithoutRelatedToClassroomInput[] | ClassworkTypeUncheckedCreateWithoutRelatedToClassroomInput[]
    connectOrCreate?: ClassworkTypeCreateOrConnectWithoutRelatedToClassroomInput | ClassworkTypeCreateOrConnectWithoutRelatedToClassroomInput[]
    createMany?: ClassworkTypeCreateManyRelatedToClassroomInputEnvelope
    connect?: ClassworkTypeWhereUniqueInput | ClassworkTypeWhereUniqueInput[]
  }

  export type AnnouncementsUncheckedCreateNestedManyWithoutRelatedToClassroomInput = {
    create?: XOR<AnnouncementsCreateWithoutRelatedToClassroomInput, AnnouncementsUncheckedCreateWithoutRelatedToClassroomInput> | AnnouncementsCreateWithoutRelatedToClassroomInput[] | AnnouncementsUncheckedCreateWithoutRelatedToClassroomInput[]
    connectOrCreate?: AnnouncementsCreateOrConnectWithoutRelatedToClassroomInput | AnnouncementsCreateOrConnectWithoutRelatedToClassroomInput[]
    createMany?: AnnouncementsCreateManyRelatedToClassroomInputEnvelope
    connect?: AnnouncementsWhereUniqueInput | AnnouncementsWhereUniqueInput[]
  }

  export type ClassworkUncheckedCreateNestedManyWithoutClassroomInput = {
    create?: XOR<ClassworkCreateWithoutClassroomInput, ClassworkUncheckedCreateWithoutClassroomInput> | ClassworkCreateWithoutClassroomInput[] | ClassworkUncheckedCreateWithoutClassroomInput[]
    connectOrCreate?: ClassworkCreateOrConnectWithoutClassroomInput | ClassworkCreateOrConnectWithoutClassroomInput[]
    createMany?: ClassworkCreateManyClassroomInputEnvelope
    connect?: ClassworkWhereUniqueInput | ClassworkWhereUniqueInput[]
  }

  export type ProfessorUpdateOneRequiredWithoutListOfCreatedClassroomsNestedInput = {
    create?: XOR<ProfessorCreateWithoutListOfCreatedClassroomsInput, ProfessorUncheckedCreateWithoutListOfCreatedClassroomsInput>
    connectOrCreate?: ProfessorCreateOrConnectWithoutListOfCreatedClassroomsInput
    upsert?: ProfessorUpsertWithoutListOfCreatedClassroomsInput
    connect?: ProfessorWhereUniqueInput
    update?: XOR<XOR<ProfessorUpdateToOneWithWhereWithoutListOfCreatedClassroomsInput, ProfessorUpdateWithoutListOfCreatedClassroomsInput>, ProfessorUncheckedUpdateWithoutListOfCreatedClassroomsInput>
  }

  export type StudentUpdateManyWithoutListOfEnrolledClassroomsNestedInput = {
    create?: XOR<StudentCreateWithoutListOfEnrolledClassroomsInput, StudentUncheckedCreateWithoutListOfEnrolledClassroomsInput> | StudentCreateWithoutListOfEnrolledClassroomsInput[] | StudentUncheckedCreateWithoutListOfEnrolledClassroomsInput[]
    connectOrCreate?: StudentCreateOrConnectWithoutListOfEnrolledClassroomsInput | StudentCreateOrConnectWithoutListOfEnrolledClassroomsInput[]
    upsert?: StudentUpsertWithWhereUniqueWithoutListOfEnrolledClassroomsInput | StudentUpsertWithWhereUniqueWithoutListOfEnrolledClassroomsInput[]
    set?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    disconnect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    delete?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    connect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    update?: StudentUpdateWithWhereUniqueWithoutListOfEnrolledClassroomsInput | StudentUpdateWithWhereUniqueWithoutListOfEnrolledClassroomsInput[]
    updateMany?: StudentUpdateManyWithWhereWithoutListOfEnrolledClassroomsInput | StudentUpdateManyWithWhereWithoutListOfEnrolledClassroomsInput[]
    deleteMany?: StudentScalarWhereInput | StudentScalarWhereInput[]
  }

  export type ClassworkTypeUpdateManyWithoutRelatedToClassroomNestedInput = {
    create?: XOR<ClassworkTypeCreateWithoutRelatedToClassroomInput, ClassworkTypeUncheckedCreateWithoutRelatedToClassroomInput> | ClassworkTypeCreateWithoutRelatedToClassroomInput[] | ClassworkTypeUncheckedCreateWithoutRelatedToClassroomInput[]
    connectOrCreate?: ClassworkTypeCreateOrConnectWithoutRelatedToClassroomInput | ClassworkTypeCreateOrConnectWithoutRelatedToClassroomInput[]
    upsert?: ClassworkTypeUpsertWithWhereUniqueWithoutRelatedToClassroomInput | ClassworkTypeUpsertWithWhereUniqueWithoutRelatedToClassroomInput[]
    createMany?: ClassworkTypeCreateManyRelatedToClassroomInputEnvelope
    set?: ClassworkTypeWhereUniqueInput | ClassworkTypeWhereUniqueInput[]
    disconnect?: ClassworkTypeWhereUniqueInput | ClassworkTypeWhereUniqueInput[]
    delete?: ClassworkTypeWhereUniqueInput | ClassworkTypeWhereUniqueInput[]
    connect?: ClassworkTypeWhereUniqueInput | ClassworkTypeWhereUniqueInput[]
    update?: ClassworkTypeUpdateWithWhereUniqueWithoutRelatedToClassroomInput | ClassworkTypeUpdateWithWhereUniqueWithoutRelatedToClassroomInput[]
    updateMany?: ClassworkTypeUpdateManyWithWhereWithoutRelatedToClassroomInput | ClassworkTypeUpdateManyWithWhereWithoutRelatedToClassroomInput[]
    deleteMany?: ClassworkTypeScalarWhereInput | ClassworkTypeScalarWhereInput[]
  }

  export type AnnouncementsUpdateManyWithoutRelatedToClassroomNestedInput = {
    create?: XOR<AnnouncementsCreateWithoutRelatedToClassroomInput, AnnouncementsUncheckedCreateWithoutRelatedToClassroomInput> | AnnouncementsCreateWithoutRelatedToClassroomInput[] | AnnouncementsUncheckedCreateWithoutRelatedToClassroomInput[]
    connectOrCreate?: AnnouncementsCreateOrConnectWithoutRelatedToClassroomInput | AnnouncementsCreateOrConnectWithoutRelatedToClassroomInput[]
    upsert?: AnnouncementsUpsertWithWhereUniqueWithoutRelatedToClassroomInput | AnnouncementsUpsertWithWhereUniqueWithoutRelatedToClassroomInput[]
    createMany?: AnnouncementsCreateManyRelatedToClassroomInputEnvelope
    set?: AnnouncementsWhereUniqueInput | AnnouncementsWhereUniqueInput[]
    disconnect?: AnnouncementsWhereUniqueInput | AnnouncementsWhereUniqueInput[]
    delete?: AnnouncementsWhereUniqueInput | AnnouncementsWhereUniqueInput[]
    connect?: AnnouncementsWhereUniqueInput | AnnouncementsWhereUniqueInput[]
    update?: AnnouncementsUpdateWithWhereUniqueWithoutRelatedToClassroomInput | AnnouncementsUpdateWithWhereUniqueWithoutRelatedToClassroomInput[]
    updateMany?: AnnouncementsUpdateManyWithWhereWithoutRelatedToClassroomInput | AnnouncementsUpdateManyWithWhereWithoutRelatedToClassroomInput[]
    deleteMany?: AnnouncementsScalarWhereInput | AnnouncementsScalarWhereInput[]
  }

  export type ClassworkUpdateManyWithoutClassroomNestedInput = {
    create?: XOR<ClassworkCreateWithoutClassroomInput, ClassworkUncheckedCreateWithoutClassroomInput> | ClassworkCreateWithoutClassroomInput[] | ClassworkUncheckedCreateWithoutClassroomInput[]
    connectOrCreate?: ClassworkCreateOrConnectWithoutClassroomInput | ClassworkCreateOrConnectWithoutClassroomInput[]
    upsert?: ClassworkUpsertWithWhereUniqueWithoutClassroomInput | ClassworkUpsertWithWhereUniqueWithoutClassroomInput[]
    createMany?: ClassworkCreateManyClassroomInputEnvelope
    set?: ClassworkWhereUniqueInput | ClassworkWhereUniqueInput[]
    disconnect?: ClassworkWhereUniqueInput | ClassworkWhereUniqueInput[]
    delete?: ClassworkWhereUniqueInput | ClassworkWhereUniqueInput[]
    connect?: ClassworkWhereUniqueInput | ClassworkWhereUniqueInput[]
    update?: ClassworkUpdateWithWhereUniqueWithoutClassroomInput | ClassworkUpdateWithWhereUniqueWithoutClassroomInput[]
    updateMany?: ClassworkUpdateManyWithWhereWithoutClassroomInput | ClassworkUpdateManyWithWhereWithoutClassroomInput[]
    deleteMany?: ClassworkScalarWhereInput | ClassworkScalarWhereInput[]
  }

  export type StudentUncheckedUpdateManyWithoutListOfEnrolledClassroomsNestedInput = {
    create?: XOR<StudentCreateWithoutListOfEnrolledClassroomsInput, StudentUncheckedCreateWithoutListOfEnrolledClassroomsInput> | StudentCreateWithoutListOfEnrolledClassroomsInput[] | StudentUncheckedCreateWithoutListOfEnrolledClassroomsInput[]
    connectOrCreate?: StudentCreateOrConnectWithoutListOfEnrolledClassroomsInput | StudentCreateOrConnectWithoutListOfEnrolledClassroomsInput[]
    upsert?: StudentUpsertWithWhereUniqueWithoutListOfEnrolledClassroomsInput | StudentUpsertWithWhereUniqueWithoutListOfEnrolledClassroomsInput[]
    set?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    disconnect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    delete?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    connect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    update?: StudentUpdateWithWhereUniqueWithoutListOfEnrolledClassroomsInput | StudentUpdateWithWhereUniqueWithoutListOfEnrolledClassroomsInput[]
    updateMany?: StudentUpdateManyWithWhereWithoutListOfEnrolledClassroomsInput | StudentUpdateManyWithWhereWithoutListOfEnrolledClassroomsInput[]
    deleteMany?: StudentScalarWhereInput | StudentScalarWhereInput[]
  }

  export type ClassworkTypeUncheckedUpdateManyWithoutRelatedToClassroomNestedInput = {
    create?: XOR<ClassworkTypeCreateWithoutRelatedToClassroomInput, ClassworkTypeUncheckedCreateWithoutRelatedToClassroomInput> | ClassworkTypeCreateWithoutRelatedToClassroomInput[] | ClassworkTypeUncheckedCreateWithoutRelatedToClassroomInput[]
    connectOrCreate?: ClassworkTypeCreateOrConnectWithoutRelatedToClassroomInput | ClassworkTypeCreateOrConnectWithoutRelatedToClassroomInput[]
    upsert?: ClassworkTypeUpsertWithWhereUniqueWithoutRelatedToClassroomInput | ClassworkTypeUpsertWithWhereUniqueWithoutRelatedToClassroomInput[]
    createMany?: ClassworkTypeCreateManyRelatedToClassroomInputEnvelope
    set?: ClassworkTypeWhereUniqueInput | ClassworkTypeWhereUniqueInput[]
    disconnect?: ClassworkTypeWhereUniqueInput | ClassworkTypeWhereUniqueInput[]
    delete?: ClassworkTypeWhereUniqueInput | ClassworkTypeWhereUniqueInput[]
    connect?: ClassworkTypeWhereUniqueInput | ClassworkTypeWhereUniqueInput[]
    update?: ClassworkTypeUpdateWithWhereUniqueWithoutRelatedToClassroomInput | ClassworkTypeUpdateWithWhereUniqueWithoutRelatedToClassroomInput[]
    updateMany?: ClassworkTypeUpdateManyWithWhereWithoutRelatedToClassroomInput | ClassworkTypeUpdateManyWithWhereWithoutRelatedToClassroomInput[]
    deleteMany?: ClassworkTypeScalarWhereInput | ClassworkTypeScalarWhereInput[]
  }

  export type AnnouncementsUncheckedUpdateManyWithoutRelatedToClassroomNestedInput = {
    create?: XOR<AnnouncementsCreateWithoutRelatedToClassroomInput, AnnouncementsUncheckedCreateWithoutRelatedToClassroomInput> | AnnouncementsCreateWithoutRelatedToClassroomInput[] | AnnouncementsUncheckedCreateWithoutRelatedToClassroomInput[]
    connectOrCreate?: AnnouncementsCreateOrConnectWithoutRelatedToClassroomInput | AnnouncementsCreateOrConnectWithoutRelatedToClassroomInput[]
    upsert?: AnnouncementsUpsertWithWhereUniqueWithoutRelatedToClassroomInput | AnnouncementsUpsertWithWhereUniqueWithoutRelatedToClassroomInput[]
    createMany?: AnnouncementsCreateManyRelatedToClassroomInputEnvelope
    set?: AnnouncementsWhereUniqueInput | AnnouncementsWhereUniqueInput[]
    disconnect?: AnnouncementsWhereUniqueInput | AnnouncementsWhereUniqueInput[]
    delete?: AnnouncementsWhereUniqueInput | AnnouncementsWhereUniqueInput[]
    connect?: AnnouncementsWhereUniqueInput | AnnouncementsWhereUniqueInput[]
    update?: AnnouncementsUpdateWithWhereUniqueWithoutRelatedToClassroomInput | AnnouncementsUpdateWithWhereUniqueWithoutRelatedToClassroomInput[]
    updateMany?: AnnouncementsUpdateManyWithWhereWithoutRelatedToClassroomInput | AnnouncementsUpdateManyWithWhereWithoutRelatedToClassroomInput[]
    deleteMany?: AnnouncementsScalarWhereInput | AnnouncementsScalarWhereInput[]
  }

  export type ClassworkUncheckedUpdateManyWithoutClassroomNestedInput = {
    create?: XOR<ClassworkCreateWithoutClassroomInput, ClassworkUncheckedCreateWithoutClassroomInput> | ClassworkCreateWithoutClassroomInput[] | ClassworkUncheckedCreateWithoutClassroomInput[]
    connectOrCreate?: ClassworkCreateOrConnectWithoutClassroomInput | ClassworkCreateOrConnectWithoutClassroomInput[]
    upsert?: ClassworkUpsertWithWhereUniqueWithoutClassroomInput | ClassworkUpsertWithWhereUniqueWithoutClassroomInput[]
    createMany?: ClassworkCreateManyClassroomInputEnvelope
    set?: ClassworkWhereUniqueInput | ClassworkWhereUniqueInput[]
    disconnect?: ClassworkWhereUniqueInput | ClassworkWhereUniqueInput[]
    delete?: ClassworkWhereUniqueInput | ClassworkWhereUniqueInput[]
    connect?: ClassworkWhereUniqueInput | ClassworkWhereUniqueInput[]
    update?: ClassworkUpdateWithWhereUniqueWithoutClassroomInput | ClassworkUpdateWithWhereUniqueWithoutClassroomInput[]
    updateMany?: ClassworkUpdateManyWithWhereWithoutClassroomInput | ClassworkUpdateManyWithWhereWithoutClassroomInput[]
    deleteMany?: ClassworkScalarWhereInput | ClassworkScalarWhereInput[]
  }

  export type StudentCreateNestedOneWithoutListOfClassworkInput = {
    create?: XOR<StudentCreateWithoutListOfClassworkInput, StudentUncheckedCreateWithoutListOfClassworkInput>
    connectOrCreate?: StudentCreateOrConnectWithoutListOfClassworkInput
    connect?: StudentWhereUniqueInput
  }

  export type ClassroomCreateNestedOneWithoutListOfClassworkInput = {
    create?: XOR<ClassroomCreateWithoutListOfClassworkInput, ClassroomUncheckedCreateWithoutListOfClassworkInput>
    connectOrCreate?: ClassroomCreateOrConnectWithoutListOfClassworkInput
    connect?: ClassroomWhereUniqueInput
  }

  export type FilesCreateNestedManyWithoutRelatedToClassworkInput = {
    create?: XOR<FilesCreateWithoutRelatedToClassworkInput, FilesUncheckedCreateWithoutRelatedToClassworkInput> | FilesCreateWithoutRelatedToClassworkInput[] | FilesUncheckedCreateWithoutRelatedToClassworkInput[]
    connectOrCreate?: FilesCreateOrConnectWithoutRelatedToClassworkInput | FilesCreateOrConnectWithoutRelatedToClassworkInput[]
    createMany?: FilesCreateManyRelatedToClassworkInputEnvelope
    connect?: FilesWhereUniqueInput | FilesWhereUniqueInput[]
  }

  export type FilesUncheckedCreateNestedManyWithoutRelatedToClassworkInput = {
    create?: XOR<FilesCreateWithoutRelatedToClassworkInput, FilesUncheckedCreateWithoutRelatedToClassworkInput> | FilesCreateWithoutRelatedToClassworkInput[] | FilesUncheckedCreateWithoutRelatedToClassworkInput[]
    connectOrCreate?: FilesCreateOrConnectWithoutRelatedToClassworkInput | FilesCreateOrConnectWithoutRelatedToClassworkInput[]
    createMany?: FilesCreateManyRelatedToClassworkInputEnvelope
    connect?: FilesWhereUniqueInput | FilesWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type StudentUpdateOneRequiredWithoutListOfClassworkNestedInput = {
    create?: XOR<StudentCreateWithoutListOfClassworkInput, StudentUncheckedCreateWithoutListOfClassworkInput>
    connectOrCreate?: StudentCreateOrConnectWithoutListOfClassworkInput
    upsert?: StudentUpsertWithoutListOfClassworkInput
    connect?: StudentWhereUniqueInput
    update?: XOR<XOR<StudentUpdateToOneWithWhereWithoutListOfClassworkInput, StudentUpdateWithoutListOfClassworkInput>, StudentUncheckedUpdateWithoutListOfClassworkInput>
  }

  export type ClassroomUpdateOneRequiredWithoutListOfClassworkNestedInput = {
    create?: XOR<ClassroomCreateWithoutListOfClassworkInput, ClassroomUncheckedCreateWithoutListOfClassworkInput>
    connectOrCreate?: ClassroomCreateOrConnectWithoutListOfClassworkInput
    upsert?: ClassroomUpsertWithoutListOfClassworkInput
    connect?: ClassroomWhereUniqueInput
    update?: XOR<XOR<ClassroomUpdateToOneWithWhereWithoutListOfClassworkInput, ClassroomUpdateWithoutListOfClassworkInput>, ClassroomUncheckedUpdateWithoutListOfClassworkInput>
  }

  export type FilesUpdateManyWithoutRelatedToClassworkNestedInput = {
    create?: XOR<FilesCreateWithoutRelatedToClassworkInput, FilesUncheckedCreateWithoutRelatedToClassworkInput> | FilesCreateWithoutRelatedToClassworkInput[] | FilesUncheckedCreateWithoutRelatedToClassworkInput[]
    connectOrCreate?: FilesCreateOrConnectWithoutRelatedToClassworkInput | FilesCreateOrConnectWithoutRelatedToClassworkInput[]
    upsert?: FilesUpsertWithWhereUniqueWithoutRelatedToClassworkInput | FilesUpsertWithWhereUniqueWithoutRelatedToClassworkInput[]
    createMany?: FilesCreateManyRelatedToClassworkInputEnvelope
    set?: FilesWhereUniqueInput | FilesWhereUniqueInput[]
    disconnect?: FilesWhereUniqueInput | FilesWhereUniqueInput[]
    delete?: FilesWhereUniqueInput | FilesWhereUniqueInput[]
    connect?: FilesWhereUniqueInput | FilesWhereUniqueInput[]
    update?: FilesUpdateWithWhereUniqueWithoutRelatedToClassworkInput | FilesUpdateWithWhereUniqueWithoutRelatedToClassworkInput[]
    updateMany?: FilesUpdateManyWithWhereWithoutRelatedToClassworkInput | FilesUpdateManyWithWhereWithoutRelatedToClassworkInput[]
    deleteMany?: FilesScalarWhereInput | FilesScalarWhereInput[]
  }

  export type FilesUncheckedUpdateManyWithoutRelatedToClassworkNestedInput = {
    create?: XOR<FilesCreateWithoutRelatedToClassworkInput, FilesUncheckedCreateWithoutRelatedToClassworkInput> | FilesCreateWithoutRelatedToClassworkInput[] | FilesUncheckedCreateWithoutRelatedToClassworkInput[]
    connectOrCreate?: FilesCreateOrConnectWithoutRelatedToClassworkInput | FilesCreateOrConnectWithoutRelatedToClassworkInput[]
    upsert?: FilesUpsertWithWhereUniqueWithoutRelatedToClassworkInput | FilesUpsertWithWhereUniqueWithoutRelatedToClassworkInput[]
    createMany?: FilesCreateManyRelatedToClassworkInputEnvelope
    set?: FilesWhereUniqueInput | FilesWhereUniqueInput[]
    disconnect?: FilesWhereUniqueInput | FilesWhereUniqueInput[]
    delete?: FilesWhereUniqueInput | FilesWhereUniqueInput[]
    connect?: FilesWhereUniqueInput | FilesWhereUniqueInput[]
    update?: FilesUpdateWithWhereUniqueWithoutRelatedToClassworkInput | FilesUpdateWithWhereUniqueWithoutRelatedToClassworkInput[]
    updateMany?: FilesUpdateManyWithWhereWithoutRelatedToClassworkInput | FilesUpdateManyWithWhereWithoutRelatedToClassworkInput[]
    deleteMany?: FilesScalarWhereInput | FilesScalarWhereInput[]
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

  export type ClassroomCreateWithoutEnrolledStudentsInput = {
    classname: string
    subject: string
    section: string
    room: string
    classCode?: string
    adminApprovalStatus: string
    relatedToProfessor: ProfessorCreateNestedOneWithoutListOfCreatedClassroomsInput
    listOfCreatedClassworkType?: ClassworkTypeCreateNestedManyWithoutRelatedToClassroomInput
    listOfCreatedAnnouncements?: AnnouncementsCreateNestedManyWithoutRelatedToClassroomInput
    listOfClasswork?: ClassworkCreateNestedManyWithoutClassroomInput
  }

  export type ClassroomUncheckedCreateWithoutEnrolledStudentsInput = {
    id?: number
    classname: string
    subject: string
    section: string
    room: string
    classCode?: string
    adminApprovalStatus: string
    profId: number
    listOfCreatedClassworkType?: ClassworkTypeUncheckedCreateNestedManyWithoutRelatedToClassroomInput
    listOfCreatedAnnouncements?: AnnouncementsUncheckedCreateNestedManyWithoutRelatedToClassroomInput
    listOfClasswork?: ClassworkUncheckedCreateNestedManyWithoutClassroomInput
  }

  export type ClassroomCreateOrConnectWithoutEnrolledStudentsInput = {
    where: ClassroomWhereUniqueInput
    create: XOR<ClassroomCreateWithoutEnrolledStudentsInput, ClassroomUncheckedCreateWithoutEnrolledStudentsInput>
  }

  export type ClassworkCreateWithoutMadeByStudentInput = {
    title: string
    description: string
    dueDate: Date | string
    classroom: ClassroomCreateNestedOneWithoutListOfClassworkInput
    listOfOutputs?: FilesCreateNestedManyWithoutRelatedToClassworkInput
  }

  export type ClassworkUncheckedCreateWithoutMadeByStudentInput = {
    id?: number
    title: string
    description: string
    dueDate: Date | string
    classroomId: number
    listOfOutputs?: FilesUncheckedCreateNestedManyWithoutRelatedToClassworkInput
  }

  export type ClassworkCreateOrConnectWithoutMadeByStudentInput = {
    where: ClassworkWhereUniqueInput
    create: XOR<ClassworkCreateWithoutMadeByStudentInput, ClassworkUncheckedCreateWithoutMadeByStudentInput>
  }

  export type ClassworkCreateManyMadeByStudentInputEnvelope = {
    data: ClassworkCreateManyMadeByStudentInput | ClassworkCreateManyMadeByStudentInput[]
    skipDuplicates?: boolean
  }

  export type ClassroomUpsertWithWhereUniqueWithoutEnrolledStudentsInput = {
    where: ClassroomWhereUniqueInput
    update: XOR<ClassroomUpdateWithoutEnrolledStudentsInput, ClassroomUncheckedUpdateWithoutEnrolledStudentsInput>
    create: XOR<ClassroomCreateWithoutEnrolledStudentsInput, ClassroomUncheckedCreateWithoutEnrolledStudentsInput>
  }

  export type ClassroomUpdateWithWhereUniqueWithoutEnrolledStudentsInput = {
    where: ClassroomWhereUniqueInput
    data: XOR<ClassroomUpdateWithoutEnrolledStudentsInput, ClassroomUncheckedUpdateWithoutEnrolledStudentsInput>
  }

  export type ClassroomUpdateManyWithWhereWithoutEnrolledStudentsInput = {
    where: ClassroomScalarWhereInput
    data: XOR<ClassroomUpdateManyMutationInput, ClassroomUncheckedUpdateManyWithoutEnrolledStudentsInput>
  }

  export type ClassroomScalarWhereInput = {
    AND?: ClassroomScalarWhereInput | ClassroomScalarWhereInput[]
    OR?: ClassroomScalarWhereInput[]
    NOT?: ClassroomScalarWhereInput | ClassroomScalarWhereInput[]
    id?: IntFilter<"Classroom"> | number
    classname?: StringFilter<"Classroom"> | string
    subject?: StringFilter<"Classroom"> | string
    section?: StringFilter<"Classroom"> | string
    room?: StringFilter<"Classroom"> | string
    classCode?: StringFilter<"Classroom"> | string
    adminApprovalStatus?: StringFilter<"Classroom"> | string
    profId?: IntFilter<"Classroom"> | number
  }

  export type ClassworkUpsertWithWhereUniqueWithoutMadeByStudentInput = {
    where: ClassworkWhereUniqueInput
    update: XOR<ClassworkUpdateWithoutMadeByStudentInput, ClassworkUncheckedUpdateWithoutMadeByStudentInput>
    create: XOR<ClassworkCreateWithoutMadeByStudentInput, ClassworkUncheckedCreateWithoutMadeByStudentInput>
  }

  export type ClassworkUpdateWithWhereUniqueWithoutMadeByStudentInput = {
    where: ClassworkWhereUniqueInput
    data: XOR<ClassworkUpdateWithoutMadeByStudentInput, ClassworkUncheckedUpdateWithoutMadeByStudentInput>
  }

  export type ClassworkUpdateManyWithWhereWithoutMadeByStudentInput = {
    where: ClassworkScalarWhereInput
    data: XOR<ClassworkUpdateManyMutationInput, ClassworkUncheckedUpdateManyWithoutMadeByStudentInput>
  }

  export type ClassworkScalarWhereInput = {
    AND?: ClassworkScalarWhereInput | ClassworkScalarWhereInput[]
    OR?: ClassworkScalarWhereInput[]
    NOT?: ClassworkScalarWhereInput | ClassworkScalarWhereInput[]
    id?: IntFilter<"Classwork"> | number
    title?: StringFilter<"Classwork"> | string
    description?: StringFilter<"Classwork"> | string
    dueDate?: DateTimeFilter<"Classwork"> | Date | string
    studentId?: IntFilter<"Classwork"> | number
    classroomId?: IntFilter<"Classwork"> | number
  }

  export type ClassroomCreateWithoutRelatedToProfessorInput = {
    classname: string
    subject: string
    section: string
    room: string
    classCode?: string
    adminApprovalStatus: string
    enrolledStudents?: StudentCreateNestedManyWithoutListOfEnrolledClassroomsInput
    listOfCreatedClassworkType?: ClassworkTypeCreateNestedManyWithoutRelatedToClassroomInput
    listOfCreatedAnnouncements?: AnnouncementsCreateNestedManyWithoutRelatedToClassroomInput
    listOfClasswork?: ClassworkCreateNestedManyWithoutClassroomInput
  }

  export type ClassroomUncheckedCreateWithoutRelatedToProfessorInput = {
    id?: number
    classname: string
    subject: string
    section: string
    room: string
    classCode?: string
    adminApprovalStatus: string
    enrolledStudents?: StudentUncheckedCreateNestedManyWithoutListOfEnrolledClassroomsInput
    listOfCreatedClassworkType?: ClassworkTypeUncheckedCreateNestedManyWithoutRelatedToClassroomInput
    listOfCreatedAnnouncements?: AnnouncementsUncheckedCreateNestedManyWithoutRelatedToClassroomInput
    listOfClasswork?: ClassworkUncheckedCreateNestedManyWithoutClassroomInput
  }

  export type ClassroomCreateOrConnectWithoutRelatedToProfessorInput = {
    where: ClassroomWhereUniqueInput
    create: XOR<ClassroomCreateWithoutRelatedToProfessorInput, ClassroomUncheckedCreateWithoutRelatedToProfessorInput>
  }

  export type ClassroomCreateManyRelatedToProfessorInputEnvelope = {
    data: ClassroomCreateManyRelatedToProfessorInput | ClassroomCreateManyRelatedToProfessorInput[]
    skipDuplicates?: boolean
  }

  export type ClassroomUpsertWithWhereUniqueWithoutRelatedToProfessorInput = {
    where: ClassroomWhereUniqueInput
    update: XOR<ClassroomUpdateWithoutRelatedToProfessorInput, ClassroomUncheckedUpdateWithoutRelatedToProfessorInput>
    create: XOR<ClassroomCreateWithoutRelatedToProfessorInput, ClassroomUncheckedCreateWithoutRelatedToProfessorInput>
  }

  export type ClassroomUpdateWithWhereUniqueWithoutRelatedToProfessorInput = {
    where: ClassroomWhereUniqueInput
    data: XOR<ClassroomUpdateWithoutRelatedToProfessorInput, ClassroomUncheckedUpdateWithoutRelatedToProfessorInput>
  }

  export type ClassroomUpdateManyWithWhereWithoutRelatedToProfessorInput = {
    where: ClassroomScalarWhereInput
    data: XOR<ClassroomUpdateManyMutationInput, ClassroomUncheckedUpdateManyWithoutRelatedToProfessorInput>
  }

  export type ClassroomCreateWithoutListOfCreatedClassworkTypeInput = {
    classname: string
    subject: string
    section: string
    room: string
    classCode?: string
    adminApprovalStatus: string
    relatedToProfessor: ProfessorCreateNestedOneWithoutListOfCreatedClassroomsInput
    enrolledStudents?: StudentCreateNestedManyWithoutListOfEnrolledClassroomsInput
    listOfCreatedAnnouncements?: AnnouncementsCreateNestedManyWithoutRelatedToClassroomInput
    listOfClasswork?: ClassworkCreateNestedManyWithoutClassroomInput
  }

  export type ClassroomUncheckedCreateWithoutListOfCreatedClassworkTypeInput = {
    id?: number
    classname: string
    subject: string
    section: string
    room: string
    classCode?: string
    adminApprovalStatus: string
    profId: number
    enrolledStudents?: StudentUncheckedCreateNestedManyWithoutListOfEnrolledClassroomsInput
    listOfCreatedAnnouncements?: AnnouncementsUncheckedCreateNestedManyWithoutRelatedToClassroomInput
    listOfClasswork?: ClassworkUncheckedCreateNestedManyWithoutClassroomInput
  }

  export type ClassroomCreateOrConnectWithoutListOfCreatedClassworkTypeInput = {
    where: ClassroomWhereUniqueInput
    create: XOR<ClassroomCreateWithoutListOfCreatedClassworkTypeInput, ClassroomUncheckedCreateWithoutListOfCreatedClassworkTypeInput>
  }

  export type ClassroomUpsertWithoutListOfCreatedClassworkTypeInput = {
    update: XOR<ClassroomUpdateWithoutListOfCreatedClassworkTypeInput, ClassroomUncheckedUpdateWithoutListOfCreatedClassworkTypeInput>
    create: XOR<ClassroomCreateWithoutListOfCreatedClassworkTypeInput, ClassroomUncheckedCreateWithoutListOfCreatedClassworkTypeInput>
    where?: ClassroomWhereInput
  }

  export type ClassroomUpdateToOneWithWhereWithoutListOfCreatedClassworkTypeInput = {
    where?: ClassroomWhereInput
    data: XOR<ClassroomUpdateWithoutListOfCreatedClassworkTypeInput, ClassroomUncheckedUpdateWithoutListOfCreatedClassworkTypeInput>
  }

  export type ClassroomUpdateWithoutListOfCreatedClassworkTypeInput = {
    classname?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    section?: StringFieldUpdateOperationsInput | string
    room?: StringFieldUpdateOperationsInput | string
    classCode?: StringFieldUpdateOperationsInput | string
    adminApprovalStatus?: StringFieldUpdateOperationsInput | string
    relatedToProfessor?: ProfessorUpdateOneRequiredWithoutListOfCreatedClassroomsNestedInput
    enrolledStudents?: StudentUpdateManyWithoutListOfEnrolledClassroomsNestedInput
    listOfCreatedAnnouncements?: AnnouncementsUpdateManyWithoutRelatedToClassroomNestedInput
    listOfClasswork?: ClassworkUpdateManyWithoutClassroomNestedInput
  }

  export type ClassroomUncheckedUpdateWithoutListOfCreatedClassworkTypeInput = {
    id?: IntFieldUpdateOperationsInput | number
    classname?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    section?: StringFieldUpdateOperationsInput | string
    room?: StringFieldUpdateOperationsInput | string
    classCode?: StringFieldUpdateOperationsInput | string
    adminApprovalStatus?: StringFieldUpdateOperationsInput | string
    profId?: IntFieldUpdateOperationsInput | number
    enrolledStudents?: StudentUncheckedUpdateManyWithoutListOfEnrolledClassroomsNestedInput
    listOfCreatedAnnouncements?: AnnouncementsUncheckedUpdateManyWithoutRelatedToClassroomNestedInput
    listOfClasswork?: ClassworkUncheckedUpdateManyWithoutClassroomNestedInput
  }

  export type AnnouncementsCreateWithoutListOfFilesInput = {
    title: string
    description: string
    relatedToClassroom: ClassroomCreateNestedOneWithoutListOfCreatedAnnouncementsInput
  }

  export type AnnouncementsUncheckedCreateWithoutListOfFilesInput = {
    id?: number
    title: string
    description: string
    roomId: number
  }

  export type AnnouncementsCreateOrConnectWithoutListOfFilesInput = {
    where: AnnouncementsWhereUniqueInput
    create: XOR<AnnouncementsCreateWithoutListOfFilesInput, AnnouncementsUncheckedCreateWithoutListOfFilesInput>
  }

  export type ClassworkCreateWithoutListOfOutputsInput = {
    title: string
    description: string
    dueDate: Date | string
    madeByStudent: StudentCreateNestedOneWithoutListOfClassworkInput
    classroom: ClassroomCreateNestedOneWithoutListOfClassworkInput
  }

  export type ClassworkUncheckedCreateWithoutListOfOutputsInput = {
    id?: number
    title: string
    description: string
    dueDate: Date | string
    studentId: number
    classroomId: number
  }

  export type ClassworkCreateOrConnectWithoutListOfOutputsInput = {
    where: ClassworkWhereUniqueInput
    create: XOR<ClassworkCreateWithoutListOfOutputsInput, ClassworkUncheckedCreateWithoutListOfOutputsInput>
  }

  export type AnnouncementsUpsertWithoutListOfFilesInput = {
    update: XOR<AnnouncementsUpdateWithoutListOfFilesInput, AnnouncementsUncheckedUpdateWithoutListOfFilesInput>
    create: XOR<AnnouncementsCreateWithoutListOfFilesInput, AnnouncementsUncheckedCreateWithoutListOfFilesInput>
    where?: AnnouncementsWhereInput
  }

  export type AnnouncementsUpdateToOneWithWhereWithoutListOfFilesInput = {
    where?: AnnouncementsWhereInput
    data: XOR<AnnouncementsUpdateWithoutListOfFilesInput, AnnouncementsUncheckedUpdateWithoutListOfFilesInput>
  }

  export type AnnouncementsUpdateWithoutListOfFilesInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    relatedToClassroom?: ClassroomUpdateOneRequiredWithoutListOfCreatedAnnouncementsNestedInput
  }

  export type AnnouncementsUncheckedUpdateWithoutListOfFilesInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    roomId?: IntFieldUpdateOperationsInput | number
  }

  export type ClassworkUpsertWithoutListOfOutputsInput = {
    update: XOR<ClassworkUpdateWithoutListOfOutputsInput, ClassworkUncheckedUpdateWithoutListOfOutputsInput>
    create: XOR<ClassworkCreateWithoutListOfOutputsInput, ClassworkUncheckedCreateWithoutListOfOutputsInput>
    where?: ClassworkWhereInput
  }

  export type ClassworkUpdateToOneWithWhereWithoutListOfOutputsInput = {
    where?: ClassworkWhereInput
    data: XOR<ClassworkUpdateWithoutListOfOutputsInput, ClassworkUncheckedUpdateWithoutListOfOutputsInput>
  }

  export type ClassworkUpdateWithoutListOfOutputsInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    madeByStudent?: StudentUpdateOneRequiredWithoutListOfClassworkNestedInput
    classroom?: ClassroomUpdateOneRequiredWithoutListOfClassworkNestedInput
  }

  export type ClassworkUncheckedUpdateWithoutListOfOutputsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    studentId?: IntFieldUpdateOperationsInput | number
    classroomId?: IntFieldUpdateOperationsInput | number
  }

  export type FilesCreateWithoutRelatedToAnnouncementInput = {
    filename: string
    path: string
    mimeType: string
    size: number
    relatedToClasswork: ClassworkCreateNestedOneWithoutListOfOutputsInput
  }

  export type FilesUncheckedCreateWithoutRelatedToAnnouncementInput = {
    id?: number
    filename: string
    path: string
    mimeType: string
    size: number
    classworkId: number
  }

  export type FilesCreateOrConnectWithoutRelatedToAnnouncementInput = {
    where: FilesWhereUniqueInput
    create: XOR<FilesCreateWithoutRelatedToAnnouncementInput, FilesUncheckedCreateWithoutRelatedToAnnouncementInput>
  }

  export type FilesCreateManyRelatedToAnnouncementInputEnvelope = {
    data: FilesCreateManyRelatedToAnnouncementInput | FilesCreateManyRelatedToAnnouncementInput[]
    skipDuplicates?: boolean
  }

  export type ClassroomCreateWithoutListOfCreatedAnnouncementsInput = {
    classname: string
    subject: string
    section: string
    room: string
    classCode?: string
    adminApprovalStatus: string
    relatedToProfessor: ProfessorCreateNestedOneWithoutListOfCreatedClassroomsInput
    enrolledStudents?: StudentCreateNestedManyWithoutListOfEnrolledClassroomsInput
    listOfCreatedClassworkType?: ClassworkTypeCreateNestedManyWithoutRelatedToClassroomInput
    listOfClasswork?: ClassworkCreateNestedManyWithoutClassroomInput
  }

  export type ClassroomUncheckedCreateWithoutListOfCreatedAnnouncementsInput = {
    id?: number
    classname: string
    subject: string
    section: string
    room: string
    classCode?: string
    adminApprovalStatus: string
    profId: number
    enrolledStudents?: StudentUncheckedCreateNestedManyWithoutListOfEnrolledClassroomsInput
    listOfCreatedClassworkType?: ClassworkTypeUncheckedCreateNestedManyWithoutRelatedToClassroomInput
    listOfClasswork?: ClassworkUncheckedCreateNestedManyWithoutClassroomInput
  }

  export type ClassroomCreateOrConnectWithoutListOfCreatedAnnouncementsInput = {
    where: ClassroomWhereUniqueInput
    create: XOR<ClassroomCreateWithoutListOfCreatedAnnouncementsInput, ClassroomUncheckedCreateWithoutListOfCreatedAnnouncementsInput>
  }

  export type FilesUpsertWithWhereUniqueWithoutRelatedToAnnouncementInput = {
    where: FilesWhereUniqueInput
    update: XOR<FilesUpdateWithoutRelatedToAnnouncementInput, FilesUncheckedUpdateWithoutRelatedToAnnouncementInput>
    create: XOR<FilesCreateWithoutRelatedToAnnouncementInput, FilesUncheckedCreateWithoutRelatedToAnnouncementInput>
  }

  export type FilesUpdateWithWhereUniqueWithoutRelatedToAnnouncementInput = {
    where: FilesWhereUniqueInput
    data: XOR<FilesUpdateWithoutRelatedToAnnouncementInput, FilesUncheckedUpdateWithoutRelatedToAnnouncementInput>
  }

  export type FilesUpdateManyWithWhereWithoutRelatedToAnnouncementInput = {
    where: FilesScalarWhereInput
    data: XOR<FilesUpdateManyMutationInput, FilesUncheckedUpdateManyWithoutRelatedToAnnouncementInput>
  }

  export type FilesScalarWhereInput = {
    AND?: FilesScalarWhereInput | FilesScalarWhereInput[]
    OR?: FilesScalarWhereInput[]
    NOT?: FilesScalarWhereInput | FilesScalarWhereInput[]
    id?: IntFilter<"Files"> | number
    filename?: StringFilter<"Files"> | string
    path?: StringFilter<"Files"> | string
    mimeType?: StringFilter<"Files"> | string
    size?: IntFilter<"Files"> | number
    announceId?: IntFilter<"Files"> | number
    classworkId?: IntFilter<"Files"> | number
  }

  export type ClassroomUpsertWithoutListOfCreatedAnnouncementsInput = {
    update: XOR<ClassroomUpdateWithoutListOfCreatedAnnouncementsInput, ClassroomUncheckedUpdateWithoutListOfCreatedAnnouncementsInput>
    create: XOR<ClassroomCreateWithoutListOfCreatedAnnouncementsInput, ClassroomUncheckedCreateWithoutListOfCreatedAnnouncementsInput>
    where?: ClassroomWhereInput
  }

  export type ClassroomUpdateToOneWithWhereWithoutListOfCreatedAnnouncementsInput = {
    where?: ClassroomWhereInput
    data: XOR<ClassroomUpdateWithoutListOfCreatedAnnouncementsInput, ClassroomUncheckedUpdateWithoutListOfCreatedAnnouncementsInput>
  }

  export type ClassroomUpdateWithoutListOfCreatedAnnouncementsInput = {
    classname?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    section?: StringFieldUpdateOperationsInput | string
    room?: StringFieldUpdateOperationsInput | string
    classCode?: StringFieldUpdateOperationsInput | string
    adminApprovalStatus?: StringFieldUpdateOperationsInput | string
    relatedToProfessor?: ProfessorUpdateOneRequiredWithoutListOfCreatedClassroomsNestedInput
    enrolledStudents?: StudentUpdateManyWithoutListOfEnrolledClassroomsNestedInput
    listOfCreatedClassworkType?: ClassworkTypeUpdateManyWithoutRelatedToClassroomNestedInput
    listOfClasswork?: ClassworkUpdateManyWithoutClassroomNestedInput
  }

  export type ClassroomUncheckedUpdateWithoutListOfCreatedAnnouncementsInput = {
    id?: IntFieldUpdateOperationsInput | number
    classname?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    section?: StringFieldUpdateOperationsInput | string
    room?: StringFieldUpdateOperationsInput | string
    classCode?: StringFieldUpdateOperationsInput | string
    adminApprovalStatus?: StringFieldUpdateOperationsInput | string
    profId?: IntFieldUpdateOperationsInput | number
    enrolledStudents?: StudentUncheckedUpdateManyWithoutListOfEnrolledClassroomsNestedInput
    listOfCreatedClassworkType?: ClassworkTypeUncheckedUpdateManyWithoutRelatedToClassroomNestedInput
    listOfClasswork?: ClassworkUncheckedUpdateManyWithoutClassroomNestedInput
  }

  export type ProfessorCreateWithoutListOfCreatedClassroomsInput = {
    fullname: string
    profile: string
  }

  export type ProfessorUncheckedCreateWithoutListOfCreatedClassroomsInput = {
    id?: number
    fullname: string
    profile: string
  }

  export type ProfessorCreateOrConnectWithoutListOfCreatedClassroomsInput = {
    where: ProfessorWhereUniqueInput
    create: XOR<ProfessorCreateWithoutListOfCreatedClassroomsInput, ProfessorUncheckedCreateWithoutListOfCreatedClassroomsInput>
  }

  export type StudentCreateWithoutListOfEnrolledClassroomsInput = {
    firstname: string
    middlename: string
    lastname: string
    gender: string
    approvalStatus: string
    profile: string
    listOfClasswork?: ClassworkCreateNestedManyWithoutMadeByStudentInput
  }

  export type StudentUncheckedCreateWithoutListOfEnrolledClassroomsInput = {
    id?: number
    firstname: string
    middlename: string
    lastname: string
    gender: string
    approvalStatus: string
    profile: string
    listOfClasswork?: ClassworkUncheckedCreateNestedManyWithoutMadeByStudentInput
  }

  export type StudentCreateOrConnectWithoutListOfEnrolledClassroomsInput = {
    where: StudentWhereUniqueInput
    create: XOR<StudentCreateWithoutListOfEnrolledClassroomsInput, StudentUncheckedCreateWithoutListOfEnrolledClassroomsInput>
  }

  export type ClassworkTypeCreateWithoutRelatedToClassroomInput = {
    classworkType: string
  }

  export type ClassworkTypeUncheckedCreateWithoutRelatedToClassroomInput = {
    id?: number
    classworkType: string
  }

  export type ClassworkTypeCreateOrConnectWithoutRelatedToClassroomInput = {
    where: ClassworkTypeWhereUniqueInput
    create: XOR<ClassworkTypeCreateWithoutRelatedToClassroomInput, ClassworkTypeUncheckedCreateWithoutRelatedToClassroomInput>
  }

  export type ClassworkTypeCreateManyRelatedToClassroomInputEnvelope = {
    data: ClassworkTypeCreateManyRelatedToClassroomInput | ClassworkTypeCreateManyRelatedToClassroomInput[]
    skipDuplicates?: boolean
  }

  export type AnnouncementsCreateWithoutRelatedToClassroomInput = {
    title: string
    description: string
    listOfFiles?: FilesCreateNestedManyWithoutRelatedToAnnouncementInput
  }

  export type AnnouncementsUncheckedCreateWithoutRelatedToClassroomInput = {
    id?: number
    title: string
    description: string
    listOfFiles?: FilesUncheckedCreateNestedManyWithoutRelatedToAnnouncementInput
  }

  export type AnnouncementsCreateOrConnectWithoutRelatedToClassroomInput = {
    where: AnnouncementsWhereUniqueInput
    create: XOR<AnnouncementsCreateWithoutRelatedToClassroomInput, AnnouncementsUncheckedCreateWithoutRelatedToClassroomInput>
  }

  export type AnnouncementsCreateManyRelatedToClassroomInputEnvelope = {
    data: AnnouncementsCreateManyRelatedToClassroomInput | AnnouncementsCreateManyRelatedToClassroomInput[]
    skipDuplicates?: boolean
  }

  export type ClassworkCreateWithoutClassroomInput = {
    title: string
    description: string
    dueDate: Date | string
    madeByStudent: StudentCreateNestedOneWithoutListOfClassworkInput
    listOfOutputs?: FilesCreateNestedManyWithoutRelatedToClassworkInput
  }

  export type ClassworkUncheckedCreateWithoutClassroomInput = {
    id?: number
    title: string
    description: string
    dueDate: Date | string
    studentId: number
    listOfOutputs?: FilesUncheckedCreateNestedManyWithoutRelatedToClassworkInput
  }

  export type ClassworkCreateOrConnectWithoutClassroomInput = {
    where: ClassworkWhereUniqueInput
    create: XOR<ClassworkCreateWithoutClassroomInput, ClassworkUncheckedCreateWithoutClassroomInput>
  }

  export type ClassworkCreateManyClassroomInputEnvelope = {
    data: ClassworkCreateManyClassroomInput | ClassworkCreateManyClassroomInput[]
    skipDuplicates?: boolean
  }

  export type ProfessorUpsertWithoutListOfCreatedClassroomsInput = {
    update: XOR<ProfessorUpdateWithoutListOfCreatedClassroomsInput, ProfessorUncheckedUpdateWithoutListOfCreatedClassroomsInput>
    create: XOR<ProfessorCreateWithoutListOfCreatedClassroomsInput, ProfessorUncheckedCreateWithoutListOfCreatedClassroomsInput>
    where?: ProfessorWhereInput
  }

  export type ProfessorUpdateToOneWithWhereWithoutListOfCreatedClassroomsInput = {
    where?: ProfessorWhereInput
    data: XOR<ProfessorUpdateWithoutListOfCreatedClassroomsInput, ProfessorUncheckedUpdateWithoutListOfCreatedClassroomsInput>
  }

  export type ProfessorUpdateWithoutListOfCreatedClassroomsInput = {
    fullname?: StringFieldUpdateOperationsInput | string
    profile?: StringFieldUpdateOperationsInput | string
  }

  export type ProfessorUncheckedUpdateWithoutListOfCreatedClassroomsInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullname?: StringFieldUpdateOperationsInput | string
    profile?: StringFieldUpdateOperationsInput | string
  }

  export type StudentUpsertWithWhereUniqueWithoutListOfEnrolledClassroomsInput = {
    where: StudentWhereUniqueInput
    update: XOR<StudentUpdateWithoutListOfEnrolledClassroomsInput, StudentUncheckedUpdateWithoutListOfEnrolledClassroomsInput>
    create: XOR<StudentCreateWithoutListOfEnrolledClassroomsInput, StudentUncheckedCreateWithoutListOfEnrolledClassroomsInput>
  }

  export type StudentUpdateWithWhereUniqueWithoutListOfEnrolledClassroomsInput = {
    where: StudentWhereUniqueInput
    data: XOR<StudentUpdateWithoutListOfEnrolledClassroomsInput, StudentUncheckedUpdateWithoutListOfEnrolledClassroomsInput>
  }

  export type StudentUpdateManyWithWhereWithoutListOfEnrolledClassroomsInput = {
    where: StudentScalarWhereInput
    data: XOR<StudentUpdateManyMutationInput, StudentUncheckedUpdateManyWithoutListOfEnrolledClassroomsInput>
  }

  export type StudentScalarWhereInput = {
    AND?: StudentScalarWhereInput | StudentScalarWhereInput[]
    OR?: StudentScalarWhereInput[]
    NOT?: StudentScalarWhereInput | StudentScalarWhereInput[]
    id?: IntFilter<"Student"> | number
    firstname?: StringFilter<"Student"> | string
    middlename?: StringFilter<"Student"> | string
    lastname?: StringFilter<"Student"> | string
    gender?: StringFilter<"Student"> | string
    approvalStatus?: StringFilter<"Student"> | string
    profile?: StringFilter<"Student"> | string
  }

  export type ClassworkTypeUpsertWithWhereUniqueWithoutRelatedToClassroomInput = {
    where: ClassworkTypeWhereUniqueInput
    update: XOR<ClassworkTypeUpdateWithoutRelatedToClassroomInput, ClassworkTypeUncheckedUpdateWithoutRelatedToClassroomInput>
    create: XOR<ClassworkTypeCreateWithoutRelatedToClassroomInput, ClassworkTypeUncheckedCreateWithoutRelatedToClassroomInput>
  }

  export type ClassworkTypeUpdateWithWhereUniqueWithoutRelatedToClassroomInput = {
    where: ClassworkTypeWhereUniqueInput
    data: XOR<ClassworkTypeUpdateWithoutRelatedToClassroomInput, ClassworkTypeUncheckedUpdateWithoutRelatedToClassroomInput>
  }

  export type ClassworkTypeUpdateManyWithWhereWithoutRelatedToClassroomInput = {
    where: ClassworkTypeScalarWhereInput
    data: XOR<ClassworkTypeUpdateManyMutationInput, ClassworkTypeUncheckedUpdateManyWithoutRelatedToClassroomInput>
  }

  export type ClassworkTypeScalarWhereInput = {
    AND?: ClassworkTypeScalarWhereInput | ClassworkTypeScalarWhereInput[]
    OR?: ClassworkTypeScalarWhereInput[]
    NOT?: ClassworkTypeScalarWhereInput | ClassworkTypeScalarWhereInput[]
    id?: IntFilter<"ClassworkType"> | number
    classworkType?: StringFilter<"ClassworkType"> | string
    roomId?: IntFilter<"ClassworkType"> | number
  }

  export type AnnouncementsUpsertWithWhereUniqueWithoutRelatedToClassroomInput = {
    where: AnnouncementsWhereUniqueInput
    update: XOR<AnnouncementsUpdateWithoutRelatedToClassroomInput, AnnouncementsUncheckedUpdateWithoutRelatedToClassroomInput>
    create: XOR<AnnouncementsCreateWithoutRelatedToClassroomInput, AnnouncementsUncheckedCreateWithoutRelatedToClassroomInput>
  }

  export type AnnouncementsUpdateWithWhereUniqueWithoutRelatedToClassroomInput = {
    where: AnnouncementsWhereUniqueInput
    data: XOR<AnnouncementsUpdateWithoutRelatedToClassroomInput, AnnouncementsUncheckedUpdateWithoutRelatedToClassroomInput>
  }

  export type AnnouncementsUpdateManyWithWhereWithoutRelatedToClassroomInput = {
    where: AnnouncementsScalarWhereInput
    data: XOR<AnnouncementsUpdateManyMutationInput, AnnouncementsUncheckedUpdateManyWithoutRelatedToClassroomInput>
  }

  export type AnnouncementsScalarWhereInput = {
    AND?: AnnouncementsScalarWhereInput | AnnouncementsScalarWhereInput[]
    OR?: AnnouncementsScalarWhereInput[]
    NOT?: AnnouncementsScalarWhereInput | AnnouncementsScalarWhereInput[]
    id?: IntFilter<"Announcements"> | number
    title?: StringFilter<"Announcements"> | string
    description?: StringFilter<"Announcements"> | string
    roomId?: IntFilter<"Announcements"> | number
  }

  export type ClassworkUpsertWithWhereUniqueWithoutClassroomInput = {
    where: ClassworkWhereUniqueInput
    update: XOR<ClassworkUpdateWithoutClassroomInput, ClassworkUncheckedUpdateWithoutClassroomInput>
    create: XOR<ClassworkCreateWithoutClassroomInput, ClassworkUncheckedCreateWithoutClassroomInput>
  }

  export type ClassworkUpdateWithWhereUniqueWithoutClassroomInput = {
    where: ClassworkWhereUniqueInput
    data: XOR<ClassworkUpdateWithoutClassroomInput, ClassworkUncheckedUpdateWithoutClassroomInput>
  }

  export type ClassworkUpdateManyWithWhereWithoutClassroomInput = {
    where: ClassworkScalarWhereInput
    data: XOR<ClassworkUpdateManyMutationInput, ClassworkUncheckedUpdateManyWithoutClassroomInput>
  }

  export type StudentCreateWithoutListOfClassworkInput = {
    firstname: string
    middlename: string
    lastname: string
    gender: string
    approvalStatus: string
    profile: string
    listOfEnrolledClassrooms?: ClassroomCreateNestedManyWithoutEnrolledStudentsInput
  }

  export type StudentUncheckedCreateWithoutListOfClassworkInput = {
    id?: number
    firstname: string
    middlename: string
    lastname: string
    gender: string
    approvalStatus: string
    profile: string
    listOfEnrolledClassrooms?: ClassroomUncheckedCreateNestedManyWithoutEnrolledStudentsInput
  }

  export type StudentCreateOrConnectWithoutListOfClassworkInput = {
    where: StudentWhereUniqueInput
    create: XOR<StudentCreateWithoutListOfClassworkInput, StudentUncheckedCreateWithoutListOfClassworkInput>
  }

  export type ClassroomCreateWithoutListOfClassworkInput = {
    classname: string
    subject: string
    section: string
    room: string
    classCode?: string
    adminApprovalStatus: string
    relatedToProfessor: ProfessorCreateNestedOneWithoutListOfCreatedClassroomsInput
    enrolledStudents?: StudentCreateNestedManyWithoutListOfEnrolledClassroomsInput
    listOfCreatedClassworkType?: ClassworkTypeCreateNestedManyWithoutRelatedToClassroomInput
    listOfCreatedAnnouncements?: AnnouncementsCreateNestedManyWithoutRelatedToClassroomInput
  }

  export type ClassroomUncheckedCreateWithoutListOfClassworkInput = {
    id?: number
    classname: string
    subject: string
    section: string
    room: string
    classCode?: string
    adminApprovalStatus: string
    profId: number
    enrolledStudents?: StudentUncheckedCreateNestedManyWithoutListOfEnrolledClassroomsInput
    listOfCreatedClassworkType?: ClassworkTypeUncheckedCreateNestedManyWithoutRelatedToClassroomInput
    listOfCreatedAnnouncements?: AnnouncementsUncheckedCreateNestedManyWithoutRelatedToClassroomInput
  }

  export type ClassroomCreateOrConnectWithoutListOfClassworkInput = {
    where: ClassroomWhereUniqueInput
    create: XOR<ClassroomCreateWithoutListOfClassworkInput, ClassroomUncheckedCreateWithoutListOfClassworkInput>
  }

  export type FilesCreateWithoutRelatedToClassworkInput = {
    filename: string
    path: string
    mimeType: string
    size: number
    relatedToAnnouncement: AnnouncementsCreateNestedOneWithoutListOfFilesInput
  }

  export type FilesUncheckedCreateWithoutRelatedToClassworkInput = {
    id?: number
    filename: string
    path: string
    mimeType: string
    size: number
    announceId: number
  }

  export type FilesCreateOrConnectWithoutRelatedToClassworkInput = {
    where: FilesWhereUniqueInput
    create: XOR<FilesCreateWithoutRelatedToClassworkInput, FilesUncheckedCreateWithoutRelatedToClassworkInput>
  }

  export type FilesCreateManyRelatedToClassworkInputEnvelope = {
    data: FilesCreateManyRelatedToClassworkInput | FilesCreateManyRelatedToClassworkInput[]
    skipDuplicates?: boolean
  }

  export type StudentUpsertWithoutListOfClassworkInput = {
    update: XOR<StudentUpdateWithoutListOfClassworkInput, StudentUncheckedUpdateWithoutListOfClassworkInput>
    create: XOR<StudentCreateWithoutListOfClassworkInput, StudentUncheckedCreateWithoutListOfClassworkInput>
    where?: StudentWhereInput
  }

  export type StudentUpdateToOneWithWhereWithoutListOfClassworkInput = {
    where?: StudentWhereInput
    data: XOR<StudentUpdateWithoutListOfClassworkInput, StudentUncheckedUpdateWithoutListOfClassworkInput>
  }

  export type StudentUpdateWithoutListOfClassworkInput = {
    firstname?: StringFieldUpdateOperationsInput | string
    middlename?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    approvalStatus?: StringFieldUpdateOperationsInput | string
    profile?: StringFieldUpdateOperationsInput | string
    listOfEnrolledClassrooms?: ClassroomUpdateManyWithoutEnrolledStudentsNestedInput
  }

  export type StudentUncheckedUpdateWithoutListOfClassworkInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstname?: StringFieldUpdateOperationsInput | string
    middlename?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    approvalStatus?: StringFieldUpdateOperationsInput | string
    profile?: StringFieldUpdateOperationsInput | string
    listOfEnrolledClassrooms?: ClassroomUncheckedUpdateManyWithoutEnrolledStudentsNestedInput
  }

  export type ClassroomUpsertWithoutListOfClassworkInput = {
    update: XOR<ClassroomUpdateWithoutListOfClassworkInput, ClassroomUncheckedUpdateWithoutListOfClassworkInput>
    create: XOR<ClassroomCreateWithoutListOfClassworkInput, ClassroomUncheckedCreateWithoutListOfClassworkInput>
    where?: ClassroomWhereInput
  }

  export type ClassroomUpdateToOneWithWhereWithoutListOfClassworkInput = {
    where?: ClassroomWhereInput
    data: XOR<ClassroomUpdateWithoutListOfClassworkInput, ClassroomUncheckedUpdateWithoutListOfClassworkInput>
  }

  export type ClassroomUpdateWithoutListOfClassworkInput = {
    classname?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    section?: StringFieldUpdateOperationsInput | string
    room?: StringFieldUpdateOperationsInput | string
    classCode?: StringFieldUpdateOperationsInput | string
    adminApprovalStatus?: StringFieldUpdateOperationsInput | string
    relatedToProfessor?: ProfessorUpdateOneRequiredWithoutListOfCreatedClassroomsNestedInput
    enrolledStudents?: StudentUpdateManyWithoutListOfEnrolledClassroomsNestedInput
    listOfCreatedClassworkType?: ClassworkTypeUpdateManyWithoutRelatedToClassroomNestedInput
    listOfCreatedAnnouncements?: AnnouncementsUpdateManyWithoutRelatedToClassroomNestedInput
  }

  export type ClassroomUncheckedUpdateWithoutListOfClassworkInput = {
    id?: IntFieldUpdateOperationsInput | number
    classname?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    section?: StringFieldUpdateOperationsInput | string
    room?: StringFieldUpdateOperationsInput | string
    classCode?: StringFieldUpdateOperationsInput | string
    adminApprovalStatus?: StringFieldUpdateOperationsInput | string
    profId?: IntFieldUpdateOperationsInput | number
    enrolledStudents?: StudentUncheckedUpdateManyWithoutListOfEnrolledClassroomsNestedInput
    listOfCreatedClassworkType?: ClassworkTypeUncheckedUpdateManyWithoutRelatedToClassroomNestedInput
    listOfCreatedAnnouncements?: AnnouncementsUncheckedUpdateManyWithoutRelatedToClassroomNestedInput
  }

  export type FilesUpsertWithWhereUniqueWithoutRelatedToClassworkInput = {
    where: FilesWhereUniqueInput
    update: XOR<FilesUpdateWithoutRelatedToClassworkInput, FilesUncheckedUpdateWithoutRelatedToClassworkInput>
    create: XOR<FilesCreateWithoutRelatedToClassworkInput, FilesUncheckedCreateWithoutRelatedToClassworkInput>
  }

  export type FilesUpdateWithWhereUniqueWithoutRelatedToClassworkInput = {
    where: FilesWhereUniqueInput
    data: XOR<FilesUpdateWithoutRelatedToClassworkInput, FilesUncheckedUpdateWithoutRelatedToClassworkInput>
  }

  export type FilesUpdateManyWithWhereWithoutRelatedToClassworkInput = {
    where: FilesScalarWhereInput
    data: XOR<FilesUpdateManyMutationInput, FilesUncheckedUpdateManyWithoutRelatedToClassworkInput>
  }

  export type ClassworkCreateManyMadeByStudentInput = {
    id?: number
    title: string
    description: string
    dueDate: Date | string
    classroomId: number
  }

  export type ClassroomUpdateWithoutEnrolledStudentsInput = {
    classname?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    section?: StringFieldUpdateOperationsInput | string
    room?: StringFieldUpdateOperationsInput | string
    classCode?: StringFieldUpdateOperationsInput | string
    adminApprovalStatus?: StringFieldUpdateOperationsInput | string
    relatedToProfessor?: ProfessorUpdateOneRequiredWithoutListOfCreatedClassroomsNestedInput
    listOfCreatedClassworkType?: ClassworkTypeUpdateManyWithoutRelatedToClassroomNestedInput
    listOfCreatedAnnouncements?: AnnouncementsUpdateManyWithoutRelatedToClassroomNestedInput
    listOfClasswork?: ClassworkUpdateManyWithoutClassroomNestedInput
  }

  export type ClassroomUncheckedUpdateWithoutEnrolledStudentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    classname?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    section?: StringFieldUpdateOperationsInput | string
    room?: StringFieldUpdateOperationsInput | string
    classCode?: StringFieldUpdateOperationsInput | string
    adminApprovalStatus?: StringFieldUpdateOperationsInput | string
    profId?: IntFieldUpdateOperationsInput | number
    listOfCreatedClassworkType?: ClassworkTypeUncheckedUpdateManyWithoutRelatedToClassroomNestedInput
    listOfCreatedAnnouncements?: AnnouncementsUncheckedUpdateManyWithoutRelatedToClassroomNestedInput
    listOfClasswork?: ClassworkUncheckedUpdateManyWithoutClassroomNestedInput
  }

  export type ClassroomUncheckedUpdateManyWithoutEnrolledStudentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    classname?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    section?: StringFieldUpdateOperationsInput | string
    room?: StringFieldUpdateOperationsInput | string
    classCode?: StringFieldUpdateOperationsInput | string
    adminApprovalStatus?: StringFieldUpdateOperationsInput | string
    profId?: IntFieldUpdateOperationsInput | number
  }

  export type ClassworkUpdateWithoutMadeByStudentInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    classroom?: ClassroomUpdateOneRequiredWithoutListOfClassworkNestedInput
    listOfOutputs?: FilesUpdateManyWithoutRelatedToClassworkNestedInput
  }

  export type ClassworkUncheckedUpdateWithoutMadeByStudentInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    classroomId?: IntFieldUpdateOperationsInput | number
    listOfOutputs?: FilesUncheckedUpdateManyWithoutRelatedToClassworkNestedInput
  }

  export type ClassworkUncheckedUpdateManyWithoutMadeByStudentInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    classroomId?: IntFieldUpdateOperationsInput | number
  }

  export type ClassroomCreateManyRelatedToProfessorInput = {
    id?: number
    classname: string
    subject: string
    section: string
    room: string
    classCode?: string
    adminApprovalStatus: string
  }

  export type ClassroomUpdateWithoutRelatedToProfessorInput = {
    classname?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    section?: StringFieldUpdateOperationsInput | string
    room?: StringFieldUpdateOperationsInput | string
    classCode?: StringFieldUpdateOperationsInput | string
    adminApprovalStatus?: StringFieldUpdateOperationsInput | string
    enrolledStudents?: StudentUpdateManyWithoutListOfEnrolledClassroomsNestedInput
    listOfCreatedClassworkType?: ClassworkTypeUpdateManyWithoutRelatedToClassroomNestedInput
    listOfCreatedAnnouncements?: AnnouncementsUpdateManyWithoutRelatedToClassroomNestedInput
    listOfClasswork?: ClassworkUpdateManyWithoutClassroomNestedInput
  }

  export type ClassroomUncheckedUpdateWithoutRelatedToProfessorInput = {
    id?: IntFieldUpdateOperationsInput | number
    classname?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    section?: StringFieldUpdateOperationsInput | string
    room?: StringFieldUpdateOperationsInput | string
    classCode?: StringFieldUpdateOperationsInput | string
    adminApprovalStatus?: StringFieldUpdateOperationsInput | string
    enrolledStudents?: StudentUncheckedUpdateManyWithoutListOfEnrolledClassroomsNestedInput
    listOfCreatedClassworkType?: ClassworkTypeUncheckedUpdateManyWithoutRelatedToClassroomNestedInput
    listOfCreatedAnnouncements?: AnnouncementsUncheckedUpdateManyWithoutRelatedToClassroomNestedInput
    listOfClasswork?: ClassworkUncheckedUpdateManyWithoutClassroomNestedInput
  }

  export type ClassroomUncheckedUpdateManyWithoutRelatedToProfessorInput = {
    id?: IntFieldUpdateOperationsInput | number
    classname?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    section?: StringFieldUpdateOperationsInput | string
    room?: StringFieldUpdateOperationsInput | string
    classCode?: StringFieldUpdateOperationsInput | string
    adminApprovalStatus?: StringFieldUpdateOperationsInput | string
  }

  export type FilesCreateManyRelatedToAnnouncementInput = {
    id?: number
    filename: string
    path: string
    mimeType: string
    size: number
    classworkId: number
  }

  export type FilesUpdateWithoutRelatedToAnnouncementInput = {
    filename?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    mimeType?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    relatedToClasswork?: ClassworkUpdateOneRequiredWithoutListOfOutputsNestedInput
  }

  export type FilesUncheckedUpdateWithoutRelatedToAnnouncementInput = {
    id?: IntFieldUpdateOperationsInput | number
    filename?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    mimeType?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    classworkId?: IntFieldUpdateOperationsInput | number
  }

  export type FilesUncheckedUpdateManyWithoutRelatedToAnnouncementInput = {
    id?: IntFieldUpdateOperationsInput | number
    filename?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    mimeType?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    classworkId?: IntFieldUpdateOperationsInput | number
  }

  export type ClassworkTypeCreateManyRelatedToClassroomInput = {
    id?: number
    classworkType: string
  }

  export type AnnouncementsCreateManyRelatedToClassroomInput = {
    id?: number
    title: string
    description: string
  }

  export type ClassworkCreateManyClassroomInput = {
    id?: number
    title: string
    description: string
    dueDate: Date | string
    studentId: number
  }

  export type StudentUpdateWithoutListOfEnrolledClassroomsInput = {
    firstname?: StringFieldUpdateOperationsInput | string
    middlename?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    approvalStatus?: StringFieldUpdateOperationsInput | string
    profile?: StringFieldUpdateOperationsInput | string
    listOfClasswork?: ClassworkUpdateManyWithoutMadeByStudentNestedInput
  }

  export type StudentUncheckedUpdateWithoutListOfEnrolledClassroomsInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstname?: StringFieldUpdateOperationsInput | string
    middlename?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    approvalStatus?: StringFieldUpdateOperationsInput | string
    profile?: StringFieldUpdateOperationsInput | string
    listOfClasswork?: ClassworkUncheckedUpdateManyWithoutMadeByStudentNestedInput
  }

  export type StudentUncheckedUpdateManyWithoutListOfEnrolledClassroomsInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstname?: StringFieldUpdateOperationsInput | string
    middlename?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    approvalStatus?: StringFieldUpdateOperationsInput | string
    profile?: StringFieldUpdateOperationsInput | string
  }

  export type ClassworkTypeUpdateWithoutRelatedToClassroomInput = {
    classworkType?: StringFieldUpdateOperationsInput | string
  }

  export type ClassworkTypeUncheckedUpdateWithoutRelatedToClassroomInput = {
    id?: IntFieldUpdateOperationsInput | number
    classworkType?: StringFieldUpdateOperationsInput | string
  }

  export type ClassworkTypeUncheckedUpdateManyWithoutRelatedToClassroomInput = {
    id?: IntFieldUpdateOperationsInput | number
    classworkType?: StringFieldUpdateOperationsInput | string
  }

  export type AnnouncementsUpdateWithoutRelatedToClassroomInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    listOfFiles?: FilesUpdateManyWithoutRelatedToAnnouncementNestedInput
  }

  export type AnnouncementsUncheckedUpdateWithoutRelatedToClassroomInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    listOfFiles?: FilesUncheckedUpdateManyWithoutRelatedToAnnouncementNestedInput
  }

  export type AnnouncementsUncheckedUpdateManyWithoutRelatedToClassroomInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type ClassworkUpdateWithoutClassroomInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    madeByStudent?: StudentUpdateOneRequiredWithoutListOfClassworkNestedInput
    listOfOutputs?: FilesUpdateManyWithoutRelatedToClassworkNestedInput
  }

  export type ClassworkUncheckedUpdateWithoutClassroomInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    studentId?: IntFieldUpdateOperationsInput | number
    listOfOutputs?: FilesUncheckedUpdateManyWithoutRelatedToClassworkNestedInput
  }

  export type ClassworkUncheckedUpdateManyWithoutClassroomInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    studentId?: IntFieldUpdateOperationsInput | number
  }

  export type FilesCreateManyRelatedToClassworkInput = {
    id?: number
    filename: string
    path: string
    mimeType: string
    size: number
    announceId: number
  }

  export type FilesUpdateWithoutRelatedToClassworkInput = {
    filename?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    mimeType?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    relatedToAnnouncement?: AnnouncementsUpdateOneRequiredWithoutListOfFilesNestedInput
  }

  export type FilesUncheckedUpdateWithoutRelatedToClassworkInput = {
    id?: IntFieldUpdateOperationsInput | number
    filename?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    mimeType?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    announceId?: IntFieldUpdateOperationsInput | number
  }

  export type FilesUncheckedUpdateManyWithoutRelatedToClassworkInput = {
    id?: IntFieldUpdateOperationsInput | number
    filename?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    mimeType?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    announceId?: IntFieldUpdateOperationsInput | number
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