
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
 * Model Classroom
 * 
 */
export type Classroom = $Result.DefaultSelection<Prisma.$ClassroomPayload>
/**
 * Model Activity
 * 
 */
export type Activity = $Result.DefaultSelection<Prisma.$ActivityPayload>
/**
 * Model Announcement
 * 
 */
export type Announcement = $Result.DefaultSelection<Prisma.$AnnouncementPayload>
/**
 * Model Output
 * 
 */
export type Output = $Result.DefaultSelection<Prisma.$OutputPayload>
/**
 * Model Files
 * 
 */
export type Files = $Result.DefaultSelection<Prisma.$FilesPayload>
/**
 * Model Feedback
 * 
 */
export type Feedback = $Result.DefaultSelection<Prisma.$FeedbackPayload>
/**
 * Model Score
 * 
 */
export type Score = $Result.DefaultSelection<Prisma.$ScorePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const ClassroomStatus: {
  PENDING: 'PENDING',
  DECLINED: 'DECLINED',
  APPROVED: 'APPROVED'
};

export type ClassroomStatus = (typeof ClassroomStatus)[keyof typeof ClassroomStatus]


export const OutputStatus: {
  PENDING: 'PENDING',
  SUBMITTED: 'SUBMITTED',
  LATE: 'LATE'
};

export type OutputStatus = (typeof OutputStatus)[keyof typeof OutputStatus]

}

export type ClassroomStatus = $Enums.ClassroomStatus

export const ClassroomStatus: typeof $Enums.ClassroomStatus

export type OutputStatus = $Enums.OutputStatus

export const OutputStatus: typeof $Enums.OutputStatus

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
   * `prisma.classroom`: Exposes CRUD operations for the **Classroom** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Classrooms
    * const classrooms = await prisma.classroom.findMany()
    * ```
    */
  get classroom(): Prisma.ClassroomDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.activity`: Exposes CRUD operations for the **Activity** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Activities
    * const activities = await prisma.activity.findMany()
    * ```
    */
  get activity(): Prisma.ActivityDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.announcement`: Exposes CRUD operations for the **Announcement** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Announcements
    * const announcements = await prisma.announcement.findMany()
    * ```
    */
  get announcement(): Prisma.AnnouncementDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.output`: Exposes CRUD operations for the **Output** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Outputs
    * const outputs = await prisma.output.findMany()
    * ```
    */
  get output(): Prisma.OutputDelegate<ExtArgs, ClientOptions>;

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
   * `prisma.feedback`: Exposes CRUD operations for the **Feedback** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Feedbacks
    * const feedbacks = await prisma.feedback.findMany()
    * ```
    */
  get feedback(): Prisma.FeedbackDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.score`: Exposes CRUD operations for the **Score** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Scores
    * const scores = await prisma.score.findMany()
    * ```
    */
  get score(): Prisma.ScoreDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.11.1
   * Query Engine version: f40f79ec31188888a2e33acda0ecc8fd10a853a9
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
    Classroom: 'Classroom',
    Activity: 'Activity',
    Announcement: 'Announcement',
    Output: 'Output',
    Files: 'Files',
    Feedback: 'Feedback',
    Score: 'Score'
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
      modelProps: "user" | "student" | "classroom" | "activity" | "announcement" | "output" | "files" | "feedback" | "score"
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
      Activity: {
        payload: Prisma.$ActivityPayload<ExtArgs>
        fields: Prisma.ActivityFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ActivityFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ActivityFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload>
          }
          findFirst: {
            args: Prisma.ActivityFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ActivityFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload>
          }
          findMany: {
            args: Prisma.ActivityFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload>[]
          }
          create: {
            args: Prisma.ActivityCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload>
          }
          createMany: {
            args: Prisma.ActivityCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ActivityCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload>[]
          }
          delete: {
            args: Prisma.ActivityDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload>
          }
          update: {
            args: Prisma.ActivityUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload>
          }
          deleteMany: {
            args: Prisma.ActivityDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ActivityUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ActivityUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload>[]
          }
          upsert: {
            args: Prisma.ActivityUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload>
          }
          aggregate: {
            args: Prisma.ActivityAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateActivity>
          }
          groupBy: {
            args: Prisma.ActivityGroupByArgs<ExtArgs>
            result: $Utils.Optional<ActivityGroupByOutputType>[]
          }
          count: {
            args: Prisma.ActivityCountArgs<ExtArgs>
            result: $Utils.Optional<ActivityCountAggregateOutputType> | number
          }
        }
      }
      Announcement: {
        payload: Prisma.$AnnouncementPayload<ExtArgs>
        fields: Prisma.AnnouncementFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AnnouncementFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnouncementPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AnnouncementFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnouncementPayload>
          }
          findFirst: {
            args: Prisma.AnnouncementFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnouncementPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AnnouncementFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnouncementPayload>
          }
          findMany: {
            args: Prisma.AnnouncementFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnouncementPayload>[]
          }
          create: {
            args: Prisma.AnnouncementCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnouncementPayload>
          }
          createMany: {
            args: Prisma.AnnouncementCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AnnouncementCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnouncementPayload>[]
          }
          delete: {
            args: Prisma.AnnouncementDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnouncementPayload>
          }
          update: {
            args: Prisma.AnnouncementUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnouncementPayload>
          }
          deleteMany: {
            args: Prisma.AnnouncementDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AnnouncementUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AnnouncementUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnouncementPayload>[]
          }
          upsert: {
            args: Prisma.AnnouncementUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnouncementPayload>
          }
          aggregate: {
            args: Prisma.AnnouncementAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAnnouncement>
          }
          groupBy: {
            args: Prisma.AnnouncementGroupByArgs<ExtArgs>
            result: $Utils.Optional<AnnouncementGroupByOutputType>[]
          }
          count: {
            args: Prisma.AnnouncementCountArgs<ExtArgs>
            result: $Utils.Optional<AnnouncementCountAggregateOutputType> | number
          }
        }
      }
      Output: {
        payload: Prisma.$OutputPayload<ExtArgs>
        fields: Prisma.OutputFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OutputFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutputPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OutputFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutputPayload>
          }
          findFirst: {
            args: Prisma.OutputFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutputPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OutputFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutputPayload>
          }
          findMany: {
            args: Prisma.OutputFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutputPayload>[]
          }
          create: {
            args: Prisma.OutputCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutputPayload>
          }
          createMany: {
            args: Prisma.OutputCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OutputCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutputPayload>[]
          }
          delete: {
            args: Prisma.OutputDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutputPayload>
          }
          update: {
            args: Prisma.OutputUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutputPayload>
          }
          deleteMany: {
            args: Prisma.OutputDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OutputUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OutputUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutputPayload>[]
          }
          upsert: {
            args: Prisma.OutputUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutputPayload>
          }
          aggregate: {
            args: Prisma.OutputAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOutput>
          }
          groupBy: {
            args: Prisma.OutputGroupByArgs<ExtArgs>
            result: $Utils.Optional<OutputGroupByOutputType>[]
          }
          count: {
            args: Prisma.OutputCountArgs<ExtArgs>
            result: $Utils.Optional<OutputCountAggregateOutputType> | number
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
      Feedback: {
        payload: Prisma.$FeedbackPayload<ExtArgs>
        fields: Prisma.FeedbackFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FeedbackFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FeedbackFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackPayload>
          }
          findFirst: {
            args: Prisma.FeedbackFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FeedbackFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackPayload>
          }
          findMany: {
            args: Prisma.FeedbackFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackPayload>[]
          }
          create: {
            args: Prisma.FeedbackCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackPayload>
          }
          createMany: {
            args: Prisma.FeedbackCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FeedbackCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackPayload>[]
          }
          delete: {
            args: Prisma.FeedbackDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackPayload>
          }
          update: {
            args: Prisma.FeedbackUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackPayload>
          }
          deleteMany: {
            args: Prisma.FeedbackDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FeedbackUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FeedbackUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackPayload>[]
          }
          upsert: {
            args: Prisma.FeedbackUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackPayload>
          }
          aggregate: {
            args: Prisma.FeedbackAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFeedback>
          }
          groupBy: {
            args: Prisma.FeedbackGroupByArgs<ExtArgs>
            result: $Utils.Optional<FeedbackGroupByOutputType>[]
          }
          count: {
            args: Prisma.FeedbackCountArgs<ExtArgs>
            result: $Utils.Optional<FeedbackCountAggregateOutputType> | number
          }
        }
      }
      Score: {
        payload: Prisma.$ScorePayload<ExtArgs>
        fields: Prisma.ScoreFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ScoreFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScorePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ScoreFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScorePayload>
          }
          findFirst: {
            args: Prisma.ScoreFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScorePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ScoreFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScorePayload>
          }
          findMany: {
            args: Prisma.ScoreFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScorePayload>[]
          }
          create: {
            args: Prisma.ScoreCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScorePayload>
          }
          createMany: {
            args: Prisma.ScoreCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ScoreCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScorePayload>[]
          }
          delete: {
            args: Prisma.ScoreDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScorePayload>
          }
          update: {
            args: Prisma.ScoreUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScorePayload>
          }
          deleteMany: {
            args: Prisma.ScoreDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ScoreUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ScoreUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScorePayload>[]
          }
          upsert: {
            args: Prisma.ScoreUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScorePayload>
          }
          aggregate: {
            args: Prisma.ScoreAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateScore>
          }
          groupBy: {
            args: Prisma.ScoreGroupByArgs<ExtArgs>
            result: $Utils.Optional<ScoreGroupByOutputType>[]
          }
          count: {
            args: Prisma.ScoreCountArgs<ExtArgs>
            result: $Utils.Optional<ScoreCountAggregateOutputType> | number
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
    classroom?: ClassroomOmit
    activity?: ActivityOmit
    announcement?: AnnouncementOmit
    output?: OutputOmit
    files?: FilesOmit
    feedback?: FeedbackOmit
    score?: ScoreOmit
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    listOfCreatedClassroom: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    listOfCreatedClassroom?: boolean | UserCountOutputTypeCountListOfCreatedClassroomArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountListOfCreatedClassroomArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClassroomWhereInput
  }


  /**
   * Count Type StudentCountOutputType
   */

  export type StudentCountOutputType = {
    listOfOutputs: number
  }

  export type StudentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    listOfOutputs?: boolean | StudentCountOutputTypeCountListOfOutputsArgs
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
  export type StudentCountOutputTypeCountListOfOutputsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OutputWhereInput
  }


  /**
   * Count Type ClassroomCountOutputType
   */

  export type ClassroomCountOutputType = {
    listOfAnnouncements: number
    listOfActivity: number
    listOfStudents: number
    listOfOutputs: number
  }

  export type ClassroomCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    listOfAnnouncements?: boolean | ClassroomCountOutputTypeCountListOfAnnouncementsArgs
    listOfActivity?: boolean | ClassroomCountOutputTypeCountListOfActivityArgs
    listOfStudents?: boolean | ClassroomCountOutputTypeCountListOfStudentsArgs
    listOfOutputs?: boolean | ClassroomCountOutputTypeCountListOfOutputsArgs
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
  export type ClassroomCountOutputTypeCountListOfAnnouncementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnnouncementWhereInput
  }

  /**
   * ClassroomCountOutputType without action
   */
  export type ClassroomCountOutputTypeCountListOfActivityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActivityWhereInput
  }

  /**
   * ClassroomCountOutputType without action
   */
  export type ClassroomCountOutputTypeCountListOfStudentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudentWhereInput
  }

  /**
   * ClassroomCountOutputType without action
   */
  export type ClassroomCountOutputTypeCountListOfOutputsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OutputWhereInput
  }


  /**
   * Count Type ActivityCountOutputType
   */

  export type ActivityCountOutputType = {
    criteria: number
    outputs: number
  }

  export type ActivityCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    criteria?: boolean | ActivityCountOutputTypeCountCriteriaArgs
    outputs?: boolean | ActivityCountOutputTypeCountOutputsArgs
  }

  // Custom InputTypes
  /**
   * ActivityCountOutputType without action
   */
  export type ActivityCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityCountOutputType
     */
    select?: ActivityCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ActivityCountOutputType without action
   */
  export type ActivityCountOutputTypeCountCriteriaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FilesWhereInput
  }

  /**
   * ActivityCountOutputType without action
   */
  export type ActivityCountOutputTypeCountOutputsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OutputWhereInput
  }


  /**
   * Count Type AnnouncementCountOutputType
   */

  export type AnnouncementCountOutputType = {
    listOfFiles: number
  }

  export type AnnouncementCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    listOfFiles?: boolean | AnnouncementCountOutputTypeCountListOfFilesArgs
  }

  // Custom InputTypes
  /**
   * AnnouncementCountOutputType without action
   */
  export type AnnouncementCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnnouncementCountOutputType
     */
    select?: AnnouncementCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AnnouncementCountOutputType without action
   */
  export type AnnouncementCountOutputTypeCountListOfFilesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FilesWhereInput
  }


  /**
   * Count Type OutputCountOutputType
   */

  export type OutputCountOutputType = {
    listOfFiles: number
  }

  export type OutputCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    listOfFiles?: boolean | OutputCountOutputTypeCountListOfFilesArgs
  }

  // Custom InputTypes
  /**
   * OutputCountOutputType without action
   */
  export type OutputCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutputCountOutputType
     */
    select?: OutputCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OutputCountOutputType without action
   */
  export type OutputCountOutputTypeCountListOfFilesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FilesWhereInput
  }


  /**
   * Count Type FeedbackCountOutputType
   */

  export type FeedbackCountOutputType = {
    output: number
  }

  export type FeedbackCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    output?: boolean | FeedbackCountOutputTypeCountOutputArgs
  }

  // Custom InputTypes
  /**
   * FeedbackCountOutputType without action
   */
  export type FeedbackCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeedbackCountOutputType
     */
    select?: FeedbackCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FeedbackCountOutputType without action
   */
  export type FeedbackCountOutputTypeCountOutputArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OutputWhereInput
  }


  /**
   * Count Type ScoreCountOutputType
   */

  export type ScoreCountOutputType = {
    output: number
  }

  export type ScoreCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    output?: boolean | ScoreCountOutputTypeCountOutputArgs
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
  export type ScoreCountOutputTypeCountOutputArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OutputWhereInput
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
    username: string | null
    email: string | null
    password: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    username: string | null
    email: string | null
    password: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    username: number
    email: number
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
    username?: true
    email?: true
    password?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    username?: true
    email?: true
    password?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    username?: true
    email?: true
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
    username: string
    email: string
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
    username?: boolean
    email?: boolean
    password?: boolean
    listOfCreatedClassroom?: boolean | User$listOfCreatedClassroomArgs<ExtArgs>
    student?: boolean | User$studentArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "email" | "password", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    listOfCreatedClassroom?: boolean | User$listOfCreatedClassroomArgs<ExtArgs>
    student?: boolean | User$studentArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      listOfCreatedClassroom: Prisma.$ClassroomPayload<ExtArgs>[]
      student: Prisma.$StudentPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      username: string
      email: string
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
    listOfCreatedClassroom<T extends User$listOfCreatedClassroomArgs<ExtArgs> = {}>(args?: Subset<T, User$listOfCreatedClassroomArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClassroomPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    student<T extends User$studentArgs<ExtArgs> = {}>(args?: Subset<T, User$studentArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
    readonly username: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
   * User.listOfCreatedClassroom
   */
  export type User$listOfCreatedClassroomArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * User.student
   */
  export type User$studentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
    userId: number | null
    roomId: number | null
  }

  export type StudentSumAggregateOutputType = {
    userId: number | null
    roomId: number | null
  }

  export type StudentMinAggregateOutputType = {
    userId: number | null
    lastname: string | null
    firstname: string | null
    middlename: string | null
    sex: string | null
    status: $Enums.ClassroomStatus | null
    roomId: number | null
  }

  export type StudentMaxAggregateOutputType = {
    userId: number | null
    lastname: string | null
    firstname: string | null
    middlename: string | null
    sex: string | null
    status: $Enums.ClassroomStatus | null
    roomId: number | null
  }

  export type StudentCountAggregateOutputType = {
    userId: number
    lastname: number
    firstname: number
    middlename: number
    sex: number
    status: number
    roomId: number
    _all: number
  }


  export type StudentAvgAggregateInputType = {
    userId?: true
    roomId?: true
  }

  export type StudentSumAggregateInputType = {
    userId?: true
    roomId?: true
  }

  export type StudentMinAggregateInputType = {
    userId?: true
    lastname?: true
    firstname?: true
    middlename?: true
    sex?: true
    status?: true
    roomId?: true
  }

  export type StudentMaxAggregateInputType = {
    userId?: true
    lastname?: true
    firstname?: true
    middlename?: true
    sex?: true
    status?: true
    roomId?: true
  }

  export type StudentCountAggregateInputType = {
    userId?: true
    lastname?: true
    firstname?: true
    middlename?: true
    sex?: true
    status?: true
    roomId?: true
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
    userId: number
    lastname: string
    firstname: string
    middlename: string
    sex: string
    status: $Enums.ClassroomStatus
    roomId: number | null
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
    userId?: boolean
    lastname?: boolean
    firstname?: boolean
    middlename?: boolean
    sex?: boolean
    status?: boolean
    roomId?: boolean
    relatedToUser?: boolean | UserDefaultArgs<ExtArgs>
    listOfOutputs?: boolean | Student$listOfOutputsArgs<ExtArgs>
    relatedtoClassroom?: boolean | Student$relatedtoClassroomArgs<ExtArgs>
    _count?: boolean | StudentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["student"]>

  export type StudentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    lastname?: boolean
    firstname?: boolean
    middlename?: boolean
    sex?: boolean
    status?: boolean
    roomId?: boolean
    relatedToUser?: boolean | UserDefaultArgs<ExtArgs>
    relatedtoClassroom?: boolean | Student$relatedtoClassroomArgs<ExtArgs>
  }, ExtArgs["result"]["student"]>

  export type StudentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    lastname?: boolean
    firstname?: boolean
    middlename?: boolean
    sex?: boolean
    status?: boolean
    roomId?: boolean
    relatedToUser?: boolean | UserDefaultArgs<ExtArgs>
    relatedtoClassroom?: boolean | Student$relatedtoClassroomArgs<ExtArgs>
  }, ExtArgs["result"]["student"]>

  export type StudentSelectScalar = {
    userId?: boolean
    lastname?: boolean
    firstname?: boolean
    middlename?: boolean
    sex?: boolean
    status?: boolean
    roomId?: boolean
  }

  export type StudentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"userId" | "lastname" | "firstname" | "middlename" | "sex" | "status" | "roomId", ExtArgs["result"]["student"]>
  export type StudentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    relatedToUser?: boolean | UserDefaultArgs<ExtArgs>
    listOfOutputs?: boolean | Student$listOfOutputsArgs<ExtArgs>
    relatedtoClassroom?: boolean | Student$relatedtoClassroomArgs<ExtArgs>
    _count?: boolean | StudentCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type StudentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    relatedToUser?: boolean | UserDefaultArgs<ExtArgs>
    relatedtoClassroom?: boolean | Student$relatedtoClassroomArgs<ExtArgs>
  }
  export type StudentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    relatedToUser?: boolean | UserDefaultArgs<ExtArgs>
    relatedtoClassroom?: boolean | Student$relatedtoClassroomArgs<ExtArgs>
  }

  export type $StudentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Student"
    objects: {
      relatedToUser: Prisma.$UserPayload<ExtArgs>
      listOfOutputs: Prisma.$OutputPayload<ExtArgs>[]
      relatedtoClassroom: Prisma.$ClassroomPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      userId: number
      lastname: string
      firstname: string
      middlename: string
      sex: string
      status: $Enums.ClassroomStatus
      roomId: number | null
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
     * // Only select the `userId`
     * const studentWithUserIdOnly = await prisma.student.findMany({ select: { userId: true } })
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
     * // Create many Students and only return the `userId`
     * const studentWithUserIdOnly = await prisma.student.createManyAndReturn({
     *   select: { userId: true },
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
     * // Update zero or more Students and only return the `userId`
     * const studentWithUserIdOnly = await prisma.student.updateManyAndReturn({
     *   select: { userId: true },
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
    relatedToUser<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    listOfOutputs<T extends Student$listOfOutputsArgs<ExtArgs> = {}>(args?: Subset<T, Student$listOfOutputsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OutputPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    relatedtoClassroom<T extends Student$relatedtoClassroomArgs<ExtArgs> = {}>(args?: Subset<T, Student$relatedtoClassroomArgs<ExtArgs>>): Prisma__ClassroomClient<$Result.GetResult<Prisma.$ClassroomPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
    readonly userId: FieldRef<"Student", 'Int'>
    readonly lastname: FieldRef<"Student", 'String'>
    readonly firstname: FieldRef<"Student", 'String'>
    readonly middlename: FieldRef<"Student", 'String'>
    readonly sex: FieldRef<"Student", 'String'>
    readonly status: FieldRef<"Student", 'ClassroomStatus'>
    readonly roomId: FieldRef<"Student", 'Int'>
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
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentIncludeCreateManyAndReturn<ExtArgs> | null
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
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentIncludeUpdateManyAndReturn<ExtArgs> | null
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
   * Student.listOfOutputs
   */
  export type Student$listOfOutputsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Output
     */
    select?: OutputSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Output
     */
    omit?: OutputOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutputInclude<ExtArgs> | null
    where?: OutputWhereInput
    orderBy?: OutputOrderByWithRelationInput | OutputOrderByWithRelationInput[]
    cursor?: OutputWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OutputScalarFieldEnum | OutputScalarFieldEnum[]
  }

  /**
   * Student.relatedtoClassroom
   */
  export type Student$relatedtoClassroomArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    userId: number | null
  }

  export type ClassroomSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type ClassroomMinAggregateOutputType = {
    id: number | null
    classname: string | null
    section: string | null
    subject: string | null
    room: string | null
    classcode: string | null
    userId: number | null
  }

  export type ClassroomMaxAggregateOutputType = {
    id: number | null
    classname: string | null
    section: string | null
    subject: string | null
    room: string | null
    classcode: string | null
    userId: number | null
  }

  export type ClassroomCountAggregateOutputType = {
    id: number
    classname: number
    section: number
    subject: number
    room: number
    classcode: number
    userId: number
    _all: number
  }


  export type ClassroomAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type ClassroomSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type ClassroomMinAggregateInputType = {
    id?: true
    classname?: true
    section?: true
    subject?: true
    room?: true
    classcode?: true
    userId?: true
  }

  export type ClassroomMaxAggregateInputType = {
    id?: true
    classname?: true
    section?: true
    subject?: true
    room?: true
    classcode?: true
    userId?: true
  }

  export type ClassroomCountAggregateInputType = {
    id?: true
    classname?: true
    section?: true
    subject?: true
    room?: true
    classcode?: true
    userId?: true
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
    section: string
    subject: string
    room: string
    classcode: string | null
    userId: number
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
    section?: boolean
    subject?: boolean
    room?: boolean
    classcode?: boolean
    userId?: boolean
    relatedToUser?: boolean | UserDefaultArgs<ExtArgs>
    listOfAnnouncements?: boolean | Classroom$listOfAnnouncementsArgs<ExtArgs>
    listOfActivity?: boolean | Classroom$listOfActivityArgs<ExtArgs>
    listOfStudents?: boolean | Classroom$listOfStudentsArgs<ExtArgs>
    listOfOutputs?: boolean | Classroom$listOfOutputsArgs<ExtArgs>
    _count?: boolean | ClassroomCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["classroom"]>

  export type ClassroomSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    classname?: boolean
    section?: boolean
    subject?: boolean
    room?: boolean
    classcode?: boolean
    userId?: boolean
    relatedToUser?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["classroom"]>

  export type ClassroomSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    classname?: boolean
    section?: boolean
    subject?: boolean
    room?: boolean
    classcode?: boolean
    userId?: boolean
    relatedToUser?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["classroom"]>

  export type ClassroomSelectScalar = {
    id?: boolean
    classname?: boolean
    section?: boolean
    subject?: boolean
    room?: boolean
    classcode?: boolean
    userId?: boolean
  }

  export type ClassroomOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "classname" | "section" | "subject" | "room" | "classcode" | "userId", ExtArgs["result"]["classroom"]>
  export type ClassroomInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    relatedToUser?: boolean | UserDefaultArgs<ExtArgs>
    listOfAnnouncements?: boolean | Classroom$listOfAnnouncementsArgs<ExtArgs>
    listOfActivity?: boolean | Classroom$listOfActivityArgs<ExtArgs>
    listOfStudents?: boolean | Classroom$listOfStudentsArgs<ExtArgs>
    listOfOutputs?: boolean | Classroom$listOfOutputsArgs<ExtArgs>
    _count?: boolean | ClassroomCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ClassroomIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    relatedToUser?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ClassroomIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    relatedToUser?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ClassroomPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Classroom"
    objects: {
      relatedToUser: Prisma.$UserPayload<ExtArgs>
      listOfAnnouncements: Prisma.$AnnouncementPayload<ExtArgs>[]
      listOfActivity: Prisma.$ActivityPayload<ExtArgs>[]
      listOfStudents: Prisma.$StudentPayload<ExtArgs>[]
      listOfOutputs: Prisma.$OutputPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      classname: string
      section: string
      subject: string
      room: string
      classcode: string | null
      userId: number
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
    relatedToUser<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    listOfAnnouncements<T extends Classroom$listOfAnnouncementsArgs<ExtArgs> = {}>(args?: Subset<T, Classroom$listOfAnnouncementsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnnouncementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    listOfActivity<T extends Classroom$listOfActivityArgs<ExtArgs> = {}>(args?: Subset<T, Classroom$listOfActivityArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    listOfStudents<T extends Classroom$listOfStudentsArgs<ExtArgs> = {}>(args?: Subset<T, Classroom$listOfStudentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    listOfOutputs<T extends Classroom$listOfOutputsArgs<ExtArgs> = {}>(args?: Subset<T, Classroom$listOfOutputsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OutputPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly section: FieldRef<"Classroom", 'String'>
    readonly subject: FieldRef<"Classroom", 'String'>
    readonly room: FieldRef<"Classroom", 'String'>
    readonly classcode: FieldRef<"Classroom", 'String'>
    readonly userId: FieldRef<"Classroom", 'Int'>
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
   * Classroom.listOfAnnouncements
   */
  export type Classroom$listOfAnnouncementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Announcement
     */
    select?: AnnouncementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Announcement
     */
    omit?: AnnouncementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnouncementInclude<ExtArgs> | null
    where?: AnnouncementWhereInput
    orderBy?: AnnouncementOrderByWithRelationInput | AnnouncementOrderByWithRelationInput[]
    cursor?: AnnouncementWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AnnouncementScalarFieldEnum | AnnouncementScalarFieldEnum[]
  }

  /**
   * Classroom.listOfActivity
   */
  export type Classroom$listOfActivityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
    where?: ActivityWhereInput
    orderBy?: ActivityOrderByWithRelationInput | ActivityOrderByWithRelationInput[]
    cursor?: ActivityWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ActivityScalarFieldEnum | ActivityScalarFieldEnum[]
  }

  /**
   * Classroom.listOfStudents
   */
  export type Classroom$listOfStudentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Classroom.listOfOutputs
   */
  export type Classroom$listOfOutputsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Output
     */
    select?: OutputSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Output
     */
    omit?: OutputOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutputInclude<ExtArgs> | null
    where?: OutputWhereInput
    orderBy?: OutputOrderByWithRelationInput | OutputOrderByWithRelationInput[]
    cursor?: OutputWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OutputScalarFieldEnum | OutputScalarFieldEnum[]
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
   * Model Activity
   */

  export type AggregateActivity = {
    _count: ActivityCountAggregateOutputType | null
    _avg: ActivityAvgAggregateOutputType | null
    _sum: ActivitySumAggregateOutputType | null
    _min: ActivityMinAggregateOutputType | null
    _max: ActivityMaxAggregateOutputType | null
  }

  export type ActivityAvgAggregateOutputType = {
    id: number | null
    roomId: number | null
  }

  export type ActivitySumAggregateOutputType = {
    id: number | null
    roomId: number | null
  }

  export type ActivityMinAggregateOutputType = {
    id: number | null
    title: string | null
    date: string | null
    time: string | null
    instruction: string | null
    roomId: number | null
  }

  export type ActivityMaxAggregateOutputType = {
    id: number | null
    title: string | null
    date: string | null
    time: string | null
    instruction: string | null
    roomId: number | null
  }

  export type ActivityCountAggregateOutputType = {
    id: number
    title: number
    date: number
    time: number
    instruction: number
    roomId: number
    _all: number
  }


  export type ActivityAvgAggregateInputType = {
    id?: true
    roomId?: true
  }

  export type ActivitySumAggregateInputType = {
    id?: true
    roomId?: true
  }

  export type ActivityMinAggregateInputType = {
    id?: true
    title?: true
    date?: true
    time?: true
    instruction?: true
    roomId?: true
  }

  export type ActivityMaxAggregateInputType = {
    id?: true
    title?: true
    date?: true
    time?: true
    instruction?: true
    roomId?: true
  }

  export type ActivityCountAggregateInputType = {
    id?: true
    title?: true
    date?: true
    time?: true
    instruction?: true
    roomId?: true
    _all?: true
  }

  export type ActivityAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Activity to aggregate.
     */
    where?: ActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Activities to fetch.
     */
    orderBy?: ActivityOrderByWithRelationInput | ActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Activities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Activities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Activities
    **/
    _count?: true | ActivityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ActivityAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ActivitySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ActivityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ActivityMaxAggregateInputType
  }

  export type GetActivityAggregateType<T extends ActivityAggregateArgs> = {
        [P in keyof T & keyof AggregateActivity]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateActivity[P]>
      : GetScalarType<T[P], AggregateActivity[P]>
  }




  export type ActivityGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActivityWhereInput
    orderBy?: ActivityOrderByWithAggregationInput | ActivityOrderByWithAggregationInput[]
    by: ActivityScalarFieldEnum[] | ActivityScalarFieldEnum
    having?: ActivityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ActivityCountAggregateInputType | true
    _avg?: ActivityAvgAggregateInputType
    _sum?: ActivitySumAggregateInputType
    _min?: ActivityMinAggregateInputType
    _max?: ActivityMaxAggregateInputType
  }

  export type ActivityGroupByOutputType = {
    id: number
    title: string
    date: string
    time: string
    instruction: string | null
    roomId: number
    _count: ActivityCountAggregateOutputType | null
    _avg: ActivityAvgAggregateOutputType | null
    _sum: ActivitySumAggregateOutputType | null
    _min: ActivityMinAggregateOutputType | null
    _max: ActivityMaxAggregateOutputType | null
  }

  type GetActivityGroupByPayload<T extends ActivityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ActivityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ActivityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ActivityGroupByOutputType[P]>
            : GetScalarType<T[P], ActivityGroupByOutputType[P]>
        }
      >
    >


  export type ActivitySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    date?: boolean
    time?: boolean
    instruction?: boolean
    roomId?: boolean
    criteria?: boolean | Activity$criteriaArgs<ExtArgs>
    outputs?: boolean | Activity$outputsArgs<ExtArgs>
    relatedToClassroom?: boolean | ClassroomDefaultArgs<ExtArgs>
    _count?: boolean | ActivityCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["activity"]>

  export type ActivitySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    date?: boolean
    time?: boolean
    instruction?: boolean
    roomId?: boolean
    relatedToClassroom?: boolean | ClassroomDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["activity"]>

  export type ActivitySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    date?: boolean
    time?: boolean
    instruction?: boolean
    roomId?: boolean
    relatedToClassroom?: boolean | ClassroomDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["activity"]>

  export type ActivitySelectScalar = {
    id?: boolean
    title?: boolean
    date?: boolean
    time?: boolean
    instruction?: boolean
    roomId?: boolean
  }

  export type ActivityOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "date" | "time" | "instruction" | "roomId", ExtArgs["result"]["activity"]>
  export type ActivityInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    criteria?: boolean | Activity$criteriaArgs<ExtArgs>
    outputs?: boolean | Activity$outputsArgs<ExtArgs>
    relatedToClassroom?: boolean | ClassroomDefaultArgs<ExtArgs>
    _count?: boolean | ActivityCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ActivityIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    relatedToClassroom?: boolean | ClassroomDefaultArgs<ExtArgs>
  }
  export type ActivityIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    relatedToClassroom?: boolean | ClassroomDefaultArgs<ExtArgs>
  }

  export type $ActivityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Activity"
    objects: {
      criteria: Prisma.$FilesPayload<ExtArgs>[]
      outputs: Prisma.$OutputPayload<ExtArgs>[]
      relatedToClassroom: Prisma.$ClassroomPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      date: string
      time: string
      instruction: string | null
      roomId: number
    }, ExtArgs["result"]["activity"]>
    composites: {}
  }

  type ActivityGetPayload<S extends boolean | null | undefined | ActivityDefaultArgs> = $Result.GetResult<Prisma.$ActivityPayload, S>

  type ActivityCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ActivityFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ActivityCountAggregateInputType | true
    }

  export interface ActivityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Activity'], meta: { name: 'Activity' } }
    /**
     * Find zero or one Activity that matches the filter.
     * @param {ActivityFindUniqueArgs} args - Arguments to find a Activity
     * @example
     * // Get one Activity
     * const activity = await prisma.activity.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ActivityFindUniqueArgs>(args: SelectSubset<T, ActivityFindUniqueArgs<ExtArgs>>): Prisma__ActivityClient<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Activity that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ActivityFindUniqueOrThrowArgs} args - Arguments to find a Activity
     * @example
     * // Get one Activity
     * const activity = await prisma.activity.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ActivityFindUniqueOrThrowArgs>(args: SelectSubset<T, ActivityFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ActivityClient<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Activity that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityFindFirstArgs} args - Arguments to find a Activity
     * @example
     * // Get one Activity
     * const activity = await prisma.activity.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ActivityFindFirstArgs>(args?: SelectSubset<T, ActivityFindFirstArgs<ExtArgs>>): Prisma__ActivityClient<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Activity that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityFindFirstOrThrowArgs} args - Arguments to find a Activity
     * @example
     * // Get one Activity
     * const activity = await prisma.activity.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ActivityFindFirstOrThrowArgs>(args?: SelectSubset<T, ActivityFindFirstOrThrowArgs<ExtArgs>>): Prisma__ActivityClient<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Activities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Activities
     * const activities = await prisma.activity.findMany()
     * 
     * // Get first 10 Activities
     * const activities = await prisma.activity.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const activityWithIdOnly = await prisma.activity.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ActivityFindManyArgs>(args?: SelectSubset<T, ActivityFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Activity.
     * @param {ActivityCreateArgs} args - Arguments to create a Activity.
     * @example
     * // Create one Activity
     * const Activity = await prisma.activity.create({
     *   data: {
     *     // ... data to create a Activity
     *   }
     * })
     * 
     */
    create<T extends ActivityCreateArgs>(args: SelectSubset<T, ActivityCreateArgs<ExtArgs>>): Prisma__ActivityClient<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Activities.
     * @param {ActivityCreateManyArgs} args - Arguments to create many Activities.
     * @example
     * // Create many Activities
     * const activity = await prisma.activity.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ActivityCreateManyArgs>(args?: SelectSubset<T, ActivityCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Activities and returns the data saved in the database.
     * @param {ActivityCreateManyAndReturnArgs} args - Arguments to create many Activities.
     * @example
     * // Create many Activities
     * const activity = await prisma.activity.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Activities and only return the `id`
     * const activityWithIdOnly = await prisma.activity.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ActivityCreateManyAndReturnArgs>(args?: SelectSubset<T, ActivityCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Activity.
     * @param {ActivityDeleteArgs} args - Arguments to delete one Activity.
     * @example
     * // Delete one Activity
     * const Activity = await prisma.activity.delete({
     *   where: {
     *     // ... filter to delete one Activity
     *   }
     * })
     * 
     */
    delete<T extends ActivityDeleteArgs>(args: SelectSubset<T, ActivityDeleteArgs<ExtArgs>>): Prisma__ActivityClient<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Activity.
     * @param {ActivityUpdateArgs} args - Arguments to update one Activity.
     * @example
     * // Update one Activity
     * const activity = await prisma.activity.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ActivityUpdateArgs>(args: SelectSubset<T, ActivityUpdateArgs<ExtArgs>>): Prisma__ActivityClient<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Activities.
     * @param {ActivityDeleteManyArgs} args - Arguments to filter Activities to delete.
     * @example
     * // Delete a few Activities
     * const { count } = await prisma.activity.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ActivityDeleteManyArgs>(args?: SelectSubset<T, ActivityDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Activities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Activities
     * const activity = await prisma.activity.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ActivityUpdateManyArgs>(args: SelectSubset<T, ActivityUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Activities and returns the data updated in the database.
     * @param {ActivityUpdateManyAndReturnArgs} args - Arguments to update many Activities.
     * @example
     * // Update many Activities
     * const activity = await prisma.activity.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Activities and only return the `id`
     * const activityWithIdOnly = await prisma.activity.updateManyAndReturn({
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
    updateManyAndReturn<T extends ActivityUpdateManyAndReturnArgs>(args: SelectSubset<T, ActivityUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Activity.
     * @param {ActivityUpsertArgs} args - Arguments to update or create a Activity.
     * @example
     * // Update or create a Activity
     * const activity = await prisma.activity.upsert({
     *   create: {
     *     // ... data to create a Activity
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Activity we want to update
     *   }
     * })
     */
    upsert<T extends ActivityUpsertArgs>(args: SelectSubset<T, ActivityUpsertArgs<ExtArgs>>): Prisma__ActivityClient<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Activities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityCountArgs} args - Arguments to filter Activities to count.
     * @example
     * // Count the number of Activities
     * const count = await prisma.activity.count({
     *   where: {
     *     // ... the filter for the Activities we want to count
     *   }
     * })
    **/
    count<T extends ActivityCountArgs>(
      args?: Subset<T, ActivityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ActivityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Activity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ActivityAggregateArgs>(args: Subset<T, ActivityAggregateArgs>): Prisma.PrismaPromise<GetActivityAggregateType<T>>

    /**
     * Group by Activity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityGroupByArgs} args - Group by arguments.
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
      T extends ActivityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ActivityGroupByArgs['orderBy'] }
        : { orderBy?: ActivityGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ActivityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetActivityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Activity model
   */
  readonly fields: ActivityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Activity.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ActivityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    criteria<T extends Activity$criteriaArgs<ExtArgs> = {}>(args?: Subset<T, Activity$criteriaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FilesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    outputs<T extends Activity$outputsArgs<ExtArgs> = {}>(args?: Subset<T, Activity$outputsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OutputPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Activity model
   */
  interface ActivityFieldRefs {
    readonly id: FieldRef<"Activity", 'Int'>
    readonly title: FieldRef<"Activity", 'String'>
    readonly date: FieldRef<"Activity", 'String'>
    readonly time: FieldRef<"Activity", 'String'>
    readonly instruction: FieldRef<"Activity", 'String'>
    readonly roomId: FieldRef<"Activity", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Activity findUnique
   */
  export type ActivityFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
    /**
     * Filter, which Activity to fetch.
     */
    where: ActivityWhereUniqueInput
  }

  /**
   * Activity findUniqueOrThrow
   */
  export type ActivityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
    /**
     * Filter, which Activity to fetch.
     */
    where: ActivityWhereUniqueInput
  }

  /**
   * Activity findFirst
   */
  export type ActivityFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
    /**
     * Filter, which Activity to fetch.
     */
    where?: ActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Activities to fetch.
     */
    orderBy?: ActivityOrderByWithRelationInput | ActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Activities.
     */
    cursor?: ActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Activities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Activities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Activities.
     */
    distinct?: ActivityScalarFieldEnum | ActivityScalarFieldEnum[]
  }

  /**
   * Activity findFirstOrThrow
   */
  export type ActivityFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
    /**
     * Filter, which Activity to fetch.
     */
    where?: ActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Activities to fetch.
     */
    orderBy?: ActivityOrderByWithRelationInput | ActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Activities.
     */
    cursor?: ActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Activities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Activities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Activities.
     */
    distinct?: ActivityScalarFieldEnum | ActivityScalarFieldEnum[]
  }

  /**
   * Activity findMany
   */
  export type ActivityFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
    /**
     * Filter, which Activities to fetch.
     */
    where?: ActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Activities to fetch.
     */
    orderBy?: ActivityOrderByWithRelationInput | ActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Activities.
     */
    cursor?: ActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Activities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Activities.
     */
    skip?: number
    distinct?: ActivityScalarFieldEnum | ActivityScalarFieldEnum[]
  }

  /**
   * Activity create
   */
  export type ActivityCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
    /**
     * The data needed to create a Activity.
     */
    data: XOR<ActivityCreateInput, ActivityUncheckedCreateInput>
  }

  /**
   * Activity createMany
   */
  export type ActivityCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Activities.
     */
    data: ActivityCreateManyInput | ActivityCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Activity createManyAndReturn
   */
  export type ActivityCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * The data used to create many Activities.
     */
    data: ActivityCreateManyInput | ActivityCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Activity update
   */
  export type ActivityUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
    /**
     * The data needed to update a Activity.
     */
    data: XOR<ActivityUpdateInput, ActivityUncheckedUpdateInput>
    /**
     * Choose, which Activity to update.
     */
    where: ActivityWhereUniqueInput
  }

  /**
   * Activity updateMany
   */
  export type ActivityUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Activities.
     */
    data: XOR<ActivityUpdateManyMutationInput, ActivityUncheckedUpdateManyInput>
    /**
     * Filter which Activities to update
     */
    where?: ActivityWhereInput
    /**
     * Limit how many Activities to update.
     */
    limit?: number
  }

  /**
   * Activity updateManyAndReturn
   */
  export type ActivityUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * The data used to update Activities.
     */
    data: XOR<ActivityUpdateManyMutationInput, ActivityUncheckedUpdateManyInput>
    /**
     * Filter which Activities to update
     */
    where?: ActivityWhereInput
    /**
     * Limit how many Activities to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Activity upsert
   */
  export type ActivityUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
    /**
     * The filter to search for the Activity to update in case it exists.
     */
    where: ActivityWhereUniqueInput
    /**
     * In case the Activity found by the `where` argument doesn't exist, create a new Activity with this data.
     */
    create: XOR<ActivityCreateInput, ActivityUncheckedCreateInput>
    /**
     * In case the Activity was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ActivityUpdateInput, ActivityUncheckedUpdateInput>
  }

  /**
   * Activity delete
   */
  export type ActivityDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
    /**
     * Filter which Activity to delete.
     */
    where: ActivityWhereUniqueInput
  }

  /**
   * Activity deleteMany
   */
  export type ActivityDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Activities to delete
     */
    where?: ActivityWhereInput
    /**
     * Limit how many Activities to delete.
     */
    limit?: number
  }

  /**
   * Activity.criteria
   */
  export type Activity$criteriaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Activity.outputs
   */
  export type Activity$outputsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Output
     */
    select?: OutputSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Output
     */
    omit?: OutputOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutputInclude<ExtArgs> | null
    where?: OutputWhereInput
    orderBy?: OutputOrderByWithRelationInput | OutputOrderByWithRelationInput[]
    cursor?: OutputWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OutputScalarFieldEnum | OutputScalarFieldEnum[]
  }

  /**
   * Activity without action
   */
  export type ActivityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
  }


  /**
   * Model Announcement
   */

  export type AggregateAnnouncement = {
    _count: AnnouncementCountAggregateOutputType | null
    _avg: AnnouncementAvgAggregateOutputType | null
    _sum: AnnouncementSumAggregateOutputType | null
    _min: AnnouncementMinAggregateOutputType | null
    _max: AnnouncementMaxAggregateOutputType | null
  }

  export type AnnouncementAvgAggregateOutputType = {
    id: number | null
    roomId: number | null
  }

  export type AnnouncementSumAggregateOutputType = {
    id: number | null
    roomId: number | null
  }

  export type AnnouncementMinAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    roomId: number | null
    createdAt: Date | null
  }

  export type AnnouncementMaxAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    roomId: number | null
    createdAt: Date | null
  }

  export type AnnouncementCountAggregateOutputType = {
    id: number
    title: number
    description: number
    roomId: number
    createdAt: number
    _all: number
  }


  export type AnnouncementAvgAggregateInputType = {
    id?: true
    roomId?: true
  }

  export type AnnouncementSumAggregateInputType = {
    id?: true
    roomId?: true
  }

  export type AnnouncementMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    roomId?: true
    createdAt?: true
  }

  export type AnnouncementMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    roomId?: true
    createdAt?: true
  }

  export type AnnouncementCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    roomId?: true
    createdAt?: true
    _all?: true
  }

  export type AnnouncementAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Announcement to aggregate.
     */
    where?: AnnouncementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Announcements to fetch.
     */
    orderBy?: AnnouncementOrderByWithRelationInput | AnnouncementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AnnouncementWhereUniqueInput
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
    _count?: true | AnnouncementCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AnnouncementAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AnnouncementSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AnnouncementMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AnnouncementMaxAggregateInputType
  }

  export type GetAnnouncementAggregateType<T extends AnnouncementAggregateArgs> = {
        [P in keyof T & keyof AggregateAnnouncement]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAnnouncement[P]>
      : GetScalarType<T[P], AggregateAnnouncement[P]>
  }




  export type AnnouncementGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnnouncementWhereInput
    orderBy?: AnnouncementOrderByWithAggregationInput | AnnouncementOrderByWithAggregationInput[]
    by: AnnouncementScalarFieldEnum[] | AnnouncementScalarFieldEnum
    having?: AnnouncementScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AnnouncementCountAggregateInputType | true
    _avg?: AnnouncementAvgAggregateInputType
    _sum?: AnnouncementSumAggregateInputType
    _min?: AnnouncementMinAggregateInputType
    _max?: AnnouncementMaxAggregateInputType
  }

  export type AnnouncementGroupByOutputType = {
    id: number
    title: string
    description: string | null
    roomId: number
    createdAt: Date | null
    _count: AnnouncementCountAggregateOutputType | null
    _avg: AnnouncementAvgAggregateOutputType | null
    _sum: AnnouncementSumAggregateOutputType | null
    _min: AnnouncementMinAggregateOutputType | null
    _max: AnnouncementMaxAggregateOutputType | null
  }

  type GetAnnouncementGroupByPayload<T extends AnnouncementGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AnnouncementGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AnnouncementGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AnnouncementGroupByOutputType[P]>
            : GetScalarType<T[P], AnnouncementGroupByOutputType[P]>
        }
      >
    >


  export type AnnouncementSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    roomId?: boolean
    createdAt?: boolean
    relatedToClassroom?: boolean | ClassroomDefaultArgs<ExtArgs>
    listOfFiles?: boolean | Announcement$listOfFilesArgs<ExtArgs>
    _count?: boolean | AnnouncementCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["announcement"]>

  export type AnnouncementSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    roomId?: boolean
    createdAt?: boolean
    relatedToClassroom?: boolean | ClassroomDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["announcement"]>

  export type AnnouncementSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    roomId?: boolean
    createdAt?: boolean
    relatedToClassroom?: boolean | ClassroomDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["announcement"]>

  export type AnnouncementSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    roomId?: boolean
    createdAt?: boolean
  }

  export type AnnouncementOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "roomId" | "createdAt", ExtArgs["result"]["announcement"]>
  export type AnnouncementInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    relatedToClassroom?: boolean | ClassroomDefaultArgs<ExtArgs>
    listOfFiles?: boolean | Announcement$listOfFilesArgs<ExtArgs>
    _count?: boolean | AnnouncementCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AnnouncementIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    relatedToClassroom?: boolean | ClassroomDefaultArgs<ExtArgs>
  }
  export type AnnouncementIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    relatedToClassroom?: boolean | ClassroomDefaultArgs<ExtArgs>
  }

  export type $AnnouncementPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Announcement"
    objects: {
      relatedToClassroom: Prisma.$ClassroomPayload<ExtArgs>
      listOfFiles: Prisma.$FilesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      description: string | null
      roomId: number
      createdAt: Date | null
    }, ExtArgs["result"]["announcement"]>
    composites: {}
  }

  type AnnouncementGetPayload<S extends boolean | null | undefined | AnnouncementDefaultArgs> = $Result.GetResult<Prisma.$AnnouncementPayload, S>

  type AnnouncementCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AnnouncementFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AnnouncementCountAggregateInputType | true
    }

  export interface AnnouncementDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Announcement'], meta: { name: 'Announcement' } }
    /**
     * Find zero or one Announcement that matches the filter.
     * @param {AnnouncementFindUniqueArgs} args - Arguments to find a Announcement
     * @example
     * // Get one Announcement
     * const announcement = await prisma.announcement.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AnnouncementFindUniqueArgs>(args: SelectSubset<T, AnnouncementFindUniqueArgs<ExtArgs>>): Prisma__AnnouncementClient<$Result.GetResult<Prisma.$AnnouncementPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Announcement that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AnnouncementFindUniqueOrThrowArgs} args - Arguments to find a Announcement
     * @example
     * // Get one Announcement
     * const announcement = await prisma.announcement.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AnnouncementFindUniqueOrThrowArgs>(args: SelectSubset<T, AnnouncementFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AnnouncementClient<$Result.GetResult<Prisma.$AnnouncementPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Announcement that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnnouncementFindFirstArgs} args - Arguments to find a Announcement
     * @example
     * // Get one Announcement
     * const announcement = await prisma.announcement.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AnnouncementFindFirstArgs>(args?: SelectSubset<T, AnnouncementFindFirstArgs<ExtArgs>>): Prisma__AnnouncementClient<$Result.GetResult<Prisma.$AnnouncementPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Announcement that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnnouncementFindFirstOrThrowArgs} args - Arguments to find a Announcement
     * @example
     * // Get one Announcement
     * const announcement = await prisma.announcement.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AnnouncementFindFirstOrThrowArgs>(args?: SelectSubset<T, AnnouncementFindFirstOrThrowArgs<ExtArgs>>): Prisma__AnnouncementClient<$Result.GetResult<Prisma.$AnnouncementPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Announcements that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnnouncementFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Announcements
     * const announcements = await prisma.announcement.findMany()
     * 
     * // Get first 10 Announcements
     * const announcements = await prisma.announcement.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const announcementWithIdOnly = await prisma.announcement.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AnnouncementFindManyArgs>(args?: SelectSubset<T, AnnouncementFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnnouncementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Announcement.
     * @param {AnnouncementCreateArgs} args - Arguments to create a Announcement.
     * @example
     * // Create one Announcement
     * const Announcement = await prisma.announcement.create({
     *   data: {
     *     // ... data to create a Announcement
     *   }
     * })
     * 
     */
    create<T extends AnnouncementCreateArgs>(args: SelectSubset<T, AnnouncementCreateArgs<ExtArgs>>): Prisma__AnnouncementClient<$Result.GetResult<Prisma.$AnnouncementPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Announcements.
     * @param {AnnouncementCreateManyArgs} args - Arguments to create many Announcements.
     * @example
     * // Create many Announcements
     * const announcement = await prisma.announcement.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AnnouncementCreateManyArgs>(args?: SelectSubset<T, AnnouncementCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Announcements and returns the data saved in the database.
     * @param {AnnouncementCreateManyAndReturnArgs} args - Arguments to create many Announcements.
     * @example
     * // Create many Announcements
     * const announcement = await prisma.announcement.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Announcements and only return the `id`
     * const announcementWithIdOnly = await prisma.announcement.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AnnouncementCreateManyAndReturnArgs>(args?: SelectSubset<T, AnnouncementCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnnouncementPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Announcement.
     * @param {AnnouncementDeleteArgs} args - Arguments to delete one Announcement.
     * @example
     * // Delete one Announcement
     * const Announcement = await prisma.announcement.delete({
     *   where: {
     *     // ... filter to delete one Announcement
     *   }
     * })
     * 
     */
    delete<T extends AnnouncementDeleteArgs>(args: SelectSubset<T, AnnouncementDeleteArgs<ExtArgs>>): Prisma__AnnouncementClient<$Result.GetResult<Prisma.$AnnouncementPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Announcement.
     * @param {AnnouncementUpdateArgs} args - Arguments to update one Announcement.
     * @example
     * // Update one Announcement
     * const announcement = await prisma.announcement.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AnnouncementUpdateArgs>(args: SelectSubset<T, AnnouncementUpdateArgs<ExtArgs>>): Prisma__AnnouncementClient<$Result.GetResult<Prisma.$AnnouncementPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Announcements.
     * @param {AnnouncementDeleteManyArgs} args - Arguments to filter Announcements to delete.
     * @example
     * // Delete a few Announcements
     * const { count } = await prisma.announcement.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AnnouncementDeleteManyArgs>(args?: SelectSubset<T, AnnouncementDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Announcements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnnouncementUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Announcements
     * const announcement = await prisma.announcement.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AnnouncementUpdateManyArgs>(args: SelectSubset<T, AnnouncementUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Announcements and returns the data updated in the database.
     * @param {AnnouncementUpdateManyAndReturnArgs} args - Arguments to update many Announcements.
     * @example
     * // Update many Announcements
     * const announcement = await prisma.announcement.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Announcements and only return the `id`
     * const announcementWithIdOnly = await prisma.announcement.updateManyAndReturn({
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
    updateManyAndReturn<T extends AnnouncementUpdateManyAndReturnArgs>(args: SelectSubset<T, AnnouncementUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnnouncementPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Announcement.
     * @param {AnnouncementUpsertArgs} args - Arguments to update or create a Announcement.
     * @example
     * // Update or create a Announcement
     * const announcement = await prisma.announcement.upsert({
     *   create: {
     *     // ... data to create a Announcement
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Announcement we want to update
     *   }
     * })
     */
    upsert<T extends AnnouncementUpsertArgs>(args: SelectSubset<T, AnnouncementUpsertArgs<ExtArgs>>): Prisma__AnnouncementClient<$Result.GetResult<Prisma.$AnnouncementPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Announcements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnnouncementCountArgs} args - Arguments to filter Announcements to count.
     * @example
     * // Count the number of Announcements
     * const count = await prisma.announcement.count({
     *   where: {
     *     // ... the filter for the Announcements we want to count
     *   }
     * })
    **/
    count<T extends AnnouncementCountArgs>(
      args?: Subset<T, AnnouncementCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AnnouncementCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Announcement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnnouncementAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AnnouncementAggregateArgs>(args: Subset<T, AnnouncementAggregateArgs>): Prisma.PrismaPromise<GetAnnouncementAggregateType<T>>

    /**
     * Group by Announcement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnnouncementGroupByArgs} args - Group by arguments.
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
      T extends AnnouncementGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AnnouncementGroupByArgs['orderBy'] }
        : { orderBy?: AnnouncementGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AnnouncementGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAnnouncementGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Announcement model
   */
  readonly fields: AnnouncementFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Announcement.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AnnouncementClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    relatedToClassroom<T extends ClassroomDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClassroomDefaultArgs<ExtArgs>>): Prisma__ClassroomClient<$Result.GetResult<Prisma.$ClassroomPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    listOfFiles<T extends Announcement$listOfFilesArgs<ExtArgs> = {}>(args?: Subset<T, Announcement$listOfFilesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FilesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Announcement model
   */
  interface AnnouncementFieldRefs {
    readonly id: FieldRef<"Announcement", 'Int'>
    readonly title: FieldRef<"Announcement", 'String'>
    readonly description: FieldRef<"Announcement", 'String'>
    readonly roomId: FieldRef<"Announcement", 'Int'>
    readonly createdAt: FieldRef<"Announcement", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Announcement findUnique
   */
  export type AnnouncementFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Announcement
     */
    select?: AnnouncementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Announcement
     */
    omit?: AnnouncementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnouncementInclude<ExtArgs> | null
    /**
     * Filter, which Announcement to fetch.
     */
    where: AnnouncementWhereUniqueInput
  }

  /**
   * Announcement findUniqueOrThrow
   */
  export type AnnouncementFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Announcement
     */
    select?: AnnouncementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Announcement
     */
    omit?: AnnouncementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnouncementInclude<ExtArgs> | null
    /**
     * Filter, which Announcement to fetch.
     */
    where: AnnouncementWhereUniqueInput
  }

  /**
   * Announcement findFirst
   */
  export type AnnouncementFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Announcement
     */
    select?: AnnouncementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Announcement
     */
    omit?: AnnouncementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnouncementInclude<ExtArgs> | null
    /**
     * Filter, which Announcement to fetch.
     */
    where?: AnnouncementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Announcements to fetch.
     */
    orderBy?: AnnouncementOrderByWithRelationInput | AnnouncementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Announcements.
     */
    cursor?: AnnouncementWhereUniqueInput
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
    distinct?: AnnouncementScalarFieldEnum | AnnouncementScalarFieldEnum[]
  }

  /**
   * Announcement findFirstOrThrow
   */
  export type AnnouncementFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Announcement
     */
    select?: AnnouncementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Announcement
     */
    omit?: AnnouncementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnouncementInclude<ExtArgs> | null
    /**
     * Filter, which Announcement to fetch.
     */
    where?: AnnouncementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Announcements to fetch.
     */
    orderBy?: AnnouncementOrderByWithRelationInput | AnnouncementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Announcements.
     */
    cursor?: AnnouncementWhereUniqueInput
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
    distinct?: AnnouncementScalarFieldEnum | AnnouncementScalarFieldEnum[]
  }

  /**
   * Announcement findMany
   */
  export type AnnouncementFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Announcement
     */
    select?: AnnouncementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Announcement
     */
    omit?: AnnouncementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnouncementInclude<ExtArgs> | null
    /**
     * Filter, which Announcements to fetch.
     */
    where?: AnnouncementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Announcements to fetch.
     */
    orderBy?: AnnouncementOrderByWithRelationInput | AnnouncementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Announcements.
     */
    cursor?: AnnouncementWhereUniqueInput
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
    distinct?: AnnouncementScalarFieldEnum | AnnouncementScalarFieldEnum[]
  }

  /**
   * Announcement create
   */
  export type AnnouncementCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Announcement
     */
    select?: AnnouncementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Announcement
     */
    omit?: AnnouncementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnouncementInclude<ExtArgs> | null
    /**
     * The data needed to create a Announcement.
     */
    data: XOR<AnnouncementCreateInput, AnnouncementUncheckedCreateInput>
  }

  /**
   * Announcement createMany
   */
  export type AnnouncementCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Announcements.
     */
    data: AnnouncementCreateManyInput | AnnouncementCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Announcement createManyAndReturn
   */
  export type AnnouncementCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Announcement
     */
    select?: AnnouncementSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Announcement
     */
    omit?: AnnouncementOmit<ExtArgs> | null
    /**
     * The data used to create many Announcements.
     */
    data: AnnouncementCreateManyInput | AnnouncementCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnouncementIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Announcement update
   */
  export type AnnouncementUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Announcement
     */
    select?: AnnouncementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Announcement
     */
    omit?: AnnouncementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnouncementInclude<ExtArgs> | null
    /**
     * The data needed to update a Announcement.
     */
    data: XOR<AnnouncementUpdateInput, AnnouncementUncheckedUpdateInput>
    /**
     * Choose, which Announcement to update.
     */
    where: AnnouncementWhereUniqueInput
  }

  /**
   * Announcement updateMany
   */
  export type AnnouncementUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Announcements.
     */
    data: XOR<AnnouncementUpdateManyMutationInput, AnnouncementUncheckedUpdateManyInput>
    /**
     * Filter which Announcements to update
     */
    where?: AnnouncementWhereInput
    /**
     * Limit how many Announcements to update.
     */
    limit?: number
  }

  /**
   * Announcement updateManyAndReturn
   */
  export type AnnouncementUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Announcement
     */
    select?: AnnouncementSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Announcement
     */
    omit?: AnnouncementOmit<ExtArgs> | null
    /**
     * The data used to update Announcements.
     */
    data: XOR<AnnouncementUpdateManyMutationInput, AnnouncementUncheckedUpdateManyInput>
    /**
     * Filter which Announcements to update
     */
    where?: AnnouncementWhereInput
    /**
     * Limit how many Announcements to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnouncementIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Announcement upsert
   */
  export type AnnouncementUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Announcement
     */
    select?: AnnouncementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Announcement
     */
    omit?: AnnouncementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnouncementInclude<ExtArgs> | null
    /**
     * The filter to search for the Announcement to update in case it exists.
     */
    where: AnnouncementWhereUniqueInput
    /**
     * In case the Announcement found by the `where` argument doesn't exist, create a new Announcement with this data.
     */
    create: XOR<AnnouncementCreateInput, AnnouncementUncheckedCreateInput>
    /**
     * In case the Announcement was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AnnouncementUpdateInput, AnnouncementUncheckedUpdateInput>
  }

  /**
   * Announcement delete
   */
  export type AnnouncementDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Announcement
     */
    select?: AnnouncementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Announcement
     */
    omit?: AnnouncementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnouncementInclude<ExtArgs> | null
    /**
     * Filter which Announcement to delete.
     */
    where: AnnouncementWhereUniqueInput
  }

  /**
   * Announcement deleteMany
   */
  export type AnnouncementDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Announcements to delete
     */
    where?: AnnouncementWhereInput
    /**
     * Limit how many Announcements to delete.
     */
    limit?: number
  }

  /**
   * Announcement.listOfFiles
   */
  export type Announcement$listOfFilesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Announcement without action
   */
  export type AnnouncementDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Announcement
     */
    select?: AnnouncementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Announcement
     */
    omit?: AnnouncementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnouncementInclude<ExtArgs> | null
  }


  /**
   * Model Output
   */

  export type AggregateOutput = {
    _count: OutputCountAggregateOutputType | null
    _avg: OutputAvgAggregateOutputType | null
    _sum: OutputSumAggregateOutputType | null
    _min: OutputMinAggregateOutputType | null
    _max: OutputMaxAggregateOutputType | null
  }

  export type OutputAvgAggregateOutputType = {
    id: number | null
    studentId: number | null
    roomId: number | null
    activityId: number | null
    feedbackId: number | null
    scoreId: number | null
  }

  export type OutputSumAggregateOutputType = {
    id: number | null
    studentId: number | null
    roomId: number | null
    activityId: number | null
    feedbackId: number | null
    scoreId: number | null
  }

  export type OutputMinAggregateOutputType = {
    id: number | null
    studentId: number | null
    roomId: number | null
    activityId: number | null
    feedbackId: number | null
    scoreId: number | null
  }

  export type OutputMaxAggregateOutputType = {
    id: number | null
    studentId: number | null
    roomId: number | null
    activityId: number | null
    feedbackId: number | null
    scoreId: number | null
  }

  export type OutputCountAggregateOutputType = {
    id: number
    studentId: number
    roomId: number
    activityId: number
    feedbackId: number
    scoreId: number
    _all: number
  }


  export type OutputAvgAggregateInputType = {
    id?: true
    studentId?: true
    roomId?: true
    activityId?: true
    feedbackId?: true
    scoreId?: true
  }

  export type OutputSumAggregateInputType = {
    id?: true
    studentId?: true
    roomId?: true
    activityId?: true
    feedbackId?: true
    scoreId?: true
  }

  export type OutputMinAggregateInputType = {
    id?: true
    studentId?: true
    roomId?: true
    activityId?: true
    feedbackId?: true
    scoreId?: true
  }

  export type OutputMaxAggregateInputType = {
    id?: true
    studentId?: true
    roomId?: true
    activityId?: true
    feedbackId?: true
    scoreId?: true
  }

  export type OutputCountAggregateInputType = {
    id?: true
    studentId?: true
    roomId?: true
    activityId?: true
    feedbackId?: true
    scoreId?: true
    _all?: true
  }

  export type OutputAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Output to aggregate.
     */
    where?: OutputWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Outputs to fetch.
     */
    orderBy?: OutputOrderByWithRelationInput | OutputOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OutputWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Outputs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Outputs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Outputs
    **/
    _count?: true | OutputCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OutputAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OutputSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OutputMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OutputMaxAggregateInputType
  }

  export type GetOutputAggregateType<T extends OutputAggregateArgs> = {
        [P in keyof T & keyof AggregateOutput]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOutput[P]>
      : GetScalarType<T[P], AggregateOutput[P]>
  }




  export type OutputGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OutputWhereInput
    orderBy?: OutputOrderByWithAggregationInput | OutputOrderByWithAggregationInput[]
    by: OutputScalarFieldEnum[] | OutputScalarFieldEnum
    having?: OutputScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OutputCountAggregateInputType | true
    _avg?: OutputAvgAggregateInputType
    _sum?: OutputSumAggregateInputType
    _min?: OutputMinAggregateInputType
    _max?: OutputMaxAggregateInputType
  }

  export type OutputGroupByOutputType = {
    id: number
    studentId: number | null
    roomId: number | null
    activityId: number | null
    feedbackId: number | null
    scoreId: number | null
    _count: OutputCountAggregateOutputType | null
    _avg: OutputAvgAggregateOutputType | null
    _sum: OutputSumAggregateOutputType | null
    _min: OutputMinAggregateOutputType | null
    _max: OutputMaxAggregateOutputType | null
  }

  type GetOutputGroupByPayload<T extends OutputGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OutputGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OutputGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OutputGroupByOutputType[P]>
            : GetScalarType<T[P], OutputGroupByOutputType[P]>
        }
      >
    >


  export type OutputSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    roomId?: boolean
    activityId?: boolean
    feedbackId?: boolean
    scoreId?: boolean
    listOfFiles?: boolean | Output$listOfFilesArgs<ExtArgs>
    relatedToStudent?: boolean | Output$relatedToStudentArgs<ExtArgs>
    relatedToClassroom?: boolean | Output$relatedToClassroomArgs<ExtArgs>
    relatedToActivity?: boolean | Output$relatedToActivityArgs<ExtArgs>
    relatedToFeedback?: boolean | Output$relatedToFeedbackArgs<ExtArgs>
    relatedToScore?: boolean | Output$relatedToScoreArgs<ExtArgs>
    _count?: boolean | OutputCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["output"]>

  export type OutputSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    roomId?: boolean
    activityId?: boolean
    feedbackId?: boolean
    scoreId?: boolean
    relatedToStudent?: boolean | Output$relatedToStudentArgs<ExtArgs>
    relatedToClassroom?: boolean | Output$relatedToClassroomArgs<ExtArgs>
    relatedToActivity?: boolean | Output$relatedToActivityArgs<ExtArgs>
    relatedToFeedback?: boolean | Output$relatedToFeedbackArgs<ExtArgs>
    relatedToScore?: boolean | Output$relatedToScoreArgs<ExtArgs>
  }, ExtArgs["result"]["output"]>

  export type OutputSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    roomId?: boolean
    activityId?: boolean
    feedbackId?: boolean
    scoreId?: boolean
    relatedToStudent?: boolean | Output$relatedToStudentArgs<ExtArgs>
    relatedToClassroom?: boolean | Output$relatedToClassroomArgs<ExtArgs>
    relatedToActivity?: boolean | Output$relatedToActivityArgs<ExtArgs>
    relatedToFeedback?: boolean | Output$relatedToFeedbackArgs<ExtArgs>
    relatedToScore?: boolean | Output$relatedToScoreArgs<ExtArgs>
  }, ExtArgs["result"]["output"]>

  export type OutputSelectScalar = {
    id?: boolean
    studentId?: boolean
    roomId?: boolean
    activityId?: boolean
    feedbackId?: boolean
    scoreId?: boolean
  }

  export type OutputOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "studentId" | "roomId" | "activityId" | "feedbackId" | "scoreId", ExtArgs["result"]["output"]>
  export type OutputInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    listOfFiles?: boolean | Output$listOfFilesArgs<ExtArgs>
    relatedToStudent?: boolean | Output$relatedToStudentArgs<ExtArgs>
    relatedToClassroom?: boolean | Output$relatedToClassroomArgs<ExtArgs>
    relatedToActivity?: boolean | Output$relatedToActivityArgs<ExtArgs>
    relatedToFeedback?: boolean | Output$relatedToFeedbackArgs<ExtArgs>
    relatedToScore?: boolean | Output$relatedToScoreArgs<ExtArgs>
    _count?: boolean | OutputCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type OutputIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    relatedToStudent?: boolean | Output$relatedToStudentArgs<ExtArgs>
    relatedToClassroom?: boolean | Output$relatedToClassroomArgs<ExtArgs>
    relatedToActivity?: boolean | Output$relatedToActivityArgs<ExtArgs>
    relatedToFeedback?: boolean | Output$relatedToFeedbackArgs<ExtArgs>
    relatedToScore?: boolean | Output$relatedToScoreArgs<ExtArgs>
  }
  export type OutputIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    relatedToStudent?: boolean | Output$relatedToStudentArgs<ExtArgs>
    relatedToClassroom?: boolean | Output$relatedToClassroomArgs<ExtArgs>
    relatedToActivity?: boolean | Output$relatedToActivityArgs<ExtArgs>
    relatedToFeedback?: boolean | Output$relatedToFeedbackArgs<ExtArgs>
    relatedToScore?: boolean | Output$relatedToScoreArgs<ExtArgs>
  }

  export type $OutputPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Output"
    objects: {
      listOfFiles: Prisma.$FilesPayload<ExtArgs>[]
      relatedToStudent: Prisma.$StudentPayload<ExtArgs> | null
      relatedToClassroom: Prisma.$ClassroomPayload<ExtArgs> | null
      relatedToActivity: Prisma.$ActivityPayload<ExtArgs> | null
      relatedToFeedback: Prisma.$FeedbackPayload<ExtArgs> | null
      relatedToScore: Prisma.$ScorePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      studentId: number | null
      roomId: number | null
      activityId: number | null
      feedbackId: number | null
      scoreId: number | null
    }, ExtArgs["result"]["output"]>
    composites: {}
  }

  type OutputGetPayload<S extends boolean | null | undefined | OutputDefaultArgs> = $Result.GetResult<Prisma.$OutputPayload, S>

  type OutputCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OutputFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OutputCountAggregateInputType | true
    }

  export interface OutputDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Output'], meta: { name: 'Output' } }
    /**
     * Find zero or one Output that matches the filter.
     * @param {OutputFindUniqueArgs} args - Arguments to find a Output
     * @example
     * // Get one Output
     * const output = await prisma.output.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OutputFindUniqueArgs>(args: SelectSubset<T, OutputFindUniqueArgs<ExtArgs>>): Prisma__OutputClient<$Result.GetResult<Prisma.$OutputPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Output that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OutputFindUniqueOrThrowArgs} args - Arguments to find a Output
     * @example
     * // Get one Output
     * const output = await prisma.output.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OutputFindUniqueOrThrowArgs>(args: SelectSubset<T, OutputFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OutputClient<$Result.GetResult<Prisma.$OutputPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Output that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutputFindFirstArgs} args - Arguments to find a Output
     * @example
     * // Get one Output
     * const output = await prisma.output.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OutputFindFirstArgs>(args?: SelectSubset<T, OutputFindFirstArgs<ExtArgs>>): Prisma__OutputClient<$Result.GetResult<Prisma.$OutputPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Output that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutputFindFirstOrThrowArgs} args - Arguments to find a Output
     * @example
     * // Get one Output
     * const output = await prisma.output.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OutputFindFirstOrThrowArgs>(args?: SelectSubset<T, OutputFindFirstOrThrowArgs<ExtArgs>>): Prisma__OutputClient<$Result.GetResult<Prisma.$OutputPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Outputs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutputFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Outputs
     * const outputs = await prisma.output.findMany()
     * 
     * // Get first 10 Outputs
     * const outputs = await prisma.output.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const outputWithIdOnly = await prisma.output.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OutputFindManyArgs>(args?: SelectSubset<T, OutputFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OutputPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Output.
     * @param {OutputCreateArgs} args - Arguments to create a Output.
     * @example
     * // Create one Output
     * const Output = await prisma.output.create({
     *   data: {
     *     // ... data to create a Output
     *   }
     * })
     * 
     */
    create<T extends OutputCreateArgs>(args: SelectSubset<T, OutputCreateArgs<ExtArgs>>): Prisma__OutputClient<$Result.GetResult<Prisma.$OutputPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Outputs.
     * @param {OutputCreateManyArgs} args - Arguments to create many Outputs.
     * @example
     * // Create many Outputs
     * const output = await prisma.output.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OutputCreateManyArgs>(args?: SelectSubset<T, OutputCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Outputs and returns the data saved in the database.
     * @param {OutputCreateManyAndReturnArgs} args - Arguments to create many Outputs.
     * @example
     * // Create many Outputs
     * const output = await prisma.output.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Outputs and only return the `id`
     * const outputWithIdOnly = await prisma.output.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OutputCreateManyAndReturnArgs>(args?: SelectSubset<T, OutputCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OutputPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Output.
     * @param {OutputDeleteArgs} args - Arguments to delete one Output.
     * @example
     * // Delete one Output
     * const Output = await prisma.output.delete({
     *   where: {
     *     // ... filter to delete one Output
     *   }
     * })
     * 
     */
    delete<T extends OutputDeleteArgs>(args: SelectSubset<T, OutputDeleteArgs<ExtArgs>>): Prisma__OutputClient<$Result.GetResult<Prisma.$OutputPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Output.
     * @param {OutputUpdateArgs} args - Arguments to update one Output.
     * @example
     * // Update one Output
     * const output = await prisma.output.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OutputUpdateArgs>(args: SelectSubset<T, OutputUpdateArgs<ExtArgs>>): Prisma__OutputClient<$Result.GetResult<Prisma.$OutputPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Outputs.
     * @param {OutputDeleteManyArgs} args - Arguments to filter Outputs to delete.
     * @example
     * // Delete a few Outputs
     * const { count } = await prisma.output.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OutputDeleteManyArgs>(args?: SelectSubset<T, OutputDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Outputs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutputUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Outputs
     * const output = await prisma.output.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OutputUpdateManyArgs>(args: SelectSubset<T, OutputUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Outputs and returns the data updated in the database.
     * @param {OutputUpdateManyAndReturnArgs} args - Arguments to update many Outputs.
     * @example
     * // Update many Outputs
     * const output = await prisma.output.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Outputs and only return the `id`
     * const outputWithIdOnly = await prisma.output.updateManyAndReturn({
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
    updateManyAndReturn<T extends OutputUpdateManyAndReturnArgs>(args: SelectSubset<T, OutputUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OutputPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Output.
     * @param {OutputUpsertArgs} args - Arguments to update or create a Output.
     * @example
     * // Update or create a Output
     * const output = await prisma.output.upsert({
     *   create: {
     *     // ... data to create a Output
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Output we want to update
     *   }
     * })
     */
    upsert<T extends OutputUpsertArgs>(args: SelectSubset<T, OutputUpsertArgs<ExtArgs>>): Prisma__OutputClient<$Result.GetResult<Prisma.$OutputPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Outputs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutputCountArgs} args - Arguments to filter Outputs to count.
     * @example
     * // Count the number of Outputs
     * const count = await prisma.output.count({
     *   where: {
     *     // ... the filter for the Outputs we want to count
     *   }
     * })
    **/
    count<T extends OutputCountArgs>(
      args?: Subset<T, OutputCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OutputCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Output.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutputAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OutputAggregateArgs>(args: Subset<T, OutputAggregateArgs>): Prisma.PrismaPromise<GetOutputAggregateType<T>>

    /**
     * Group by Output.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutputGroupByArgs} args - Group by arguments.
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
      T extends OutputGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OutputGroupByArgs['orderBy'] }
        : { orderBy?: OutputGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OutputGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOutputGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Output model
   */
  readonly fields: OutputFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Output.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OutputClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    listOfFiles<T extends Output$listOfFilesArgs<ExtArgs> = {}>(args?: Subset<T, Output$listOfFilesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FilesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    relatedToStudent<T extends Output$relatedToStudentArgs<ExtArgs> = {}>(args?: Subset<T, Output$relatedToStudentArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    relatedToClassroom<T extends Output$relatedToClassroomArgs<ExtArgs> = {}>(args?: Subset<T, Output$relatedToClassroomArgs<ExtArgs>>): Prisma__ClassroomClient<$Result.GetResult<Prisma.$ClassroomPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    relatedToActivity<T extends Output$relatedToActivityArgs<ExtArgs> = {}>(args?: Subset<T, Output$relatedToActivityArgs<ExtArgs>>): Prisma__ActivityClient<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    relatedToFeedback<T extends Output$relatedToFeedbackArgs<ExtArgs> = {}>(args?: Subset<T, Output$relatedToFeedbackArgs<ExtArgs>>): Prisma__FeedbackClient<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    relatedToScore<T extends Output$relatedToScoreArgs<ExtArgs> = {}>(args?: Subset<T, Output$relatedToScoreArgs<ExtArgs>>): Prisma__ScoreClient<$Result.GetResult<Prisma.$ScorePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Output model
   */
  interface OutputFieldRefs {
    readonly id: FieldRef<"Output", 'Int'>
    readonly studentId: FieldRef<"Output", 'Int'>
    readonly roomId: FieldRef<"Output", 'Int'>
    readonly activityId: FieldRef<"Output", 'Int'>
    readonly feedbackId: FieldRef<"Output", 'Int'>
    readonly scoreId: FieldRef<"Output", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Output findUnique
   */
  export type OutputFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Output
     */
    select?: OutputSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Output
     */
    omit?: OutputOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutputInclude<ExtArgs> | null
    /**
     * Filter, which Output to fetch.
     */
    where: OutputWhereUniqueInput
  }

  /**
   * Output findUniqueOrThrow
   */
  export type OutputFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Output
     */
    select?: OutputSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Output
     */
    omit?: OutputOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutputInclude<ExtArgs> | null
    /**
     * Filter, which Output to fetch.
     */
    where: OutputWhereUniqueInput
  }

  /**
   * Output findFirst
   */
  export type OutputFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Output
     */
    select?: OutputSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Output
     */
    omit?: OutputOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutputInclude<ExtArgs> | null
    /**
     * Filter, which Output to fetch.
     */
    where?: OutputWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Outputs to fetch.
     */
    orderBy?: OutputOrderByWithRelationInput | OutputOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Outputs.
     */
    cursor?: OutputWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Outputs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Outputs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Outputs.
     */
    distinct?: OutputScalarFieldEnum | OutputScalarFieldEnum[]
  }

  /**
   * Output findFirstOrThrow
   */
  export type OutputFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Output
     */
    select?: OutputSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Output
     */
    omit?: OutputOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutputInclude<ExtArgs> | null
    /**
     * Filter, which Output to fetch.
     */
    where?: OutputWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Outputs to fetch.
     */
    orderBy?: OutputOrderByWithRelationInput | OutputOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Outputs.
     */
    cursor?: OutputWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Outputs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Outputs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Outputs.
     */
    distinct?: OutputScalarFieldEnum | OutputScalarFieldEnum[]
  }

  /**
   * Output findMany
   */
  export type OutputFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Output
     */
    select?: OutputSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Output
     */
    omit?: OutputOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutputInclude<ExtArgs> | null
    /**
     * Filter, which Outputs to fetch.
     */
    where?: OutputWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Outputs to fetch.
     */
    orderBy?: OutputOrderByWithRelationInput | OutputOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Outputs.
     */
    cursor?: OutputWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Outputs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Outputs.
     */
    skip?: number
    distinct?: OutputScalarFieldEnum | OutputScalarFieldEnum[]
  }

  /**
   * Output create
   */
  export type OutputCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Output
     */
    select?: OutputSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Output
     */
    omit?: OutputOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutputInclude<ExtArgs> | null
    /**
     * The data needed to create a Output.
     */
    data?: XOR<OutputCreateInput, OutputUncheckedCreateInput>
  }

  /**
   * Output createMany
   */
  export type OutputCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Outputs.
     */
    data: OutputCreateManyInput | OutputCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Output createManyAndReturn
   */
  export type OutputCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Output
     */
    select?: OutputSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Output
     */
    omit?: OutputOmit<ExtArgs> | null
    /**
     * The data used to create many Outputs.
     */
    data: OutputCreateManyInput | OutputCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutputIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Output update
   */
  export type OutputUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Output
     */
    select?: OutputSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Output
     */
    omit?: OutputOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutputInclude<ExtArgs> | null
    /**
     * The data needed to update a Output.
     */
    data: XOR<OutputUpdateInput, OutputUncheckedUpdateInput>
    /**
     * Choose, which Output to update.
     */
    where: OutputWhereUniqueInput
  }

  /**
   * Output updateMany
   */
  export type OutputUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Outputs.
     */
    data: XOR<OutputUpdateManyMutationInput, OutputUncheckedUpdateManyInput>
    /**
     * Filter which Outputs to update
     */
    where?: OutputWhereInput
    /**
     * Limit how many Outputs to update.
     */
    limit?: number
  }

  /**
   * Output updateManyAndReturn
   */
  export type OutputUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Output
     */
    select?: OutputSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Output
     */
    omit?: OutputOmit<ExtArgs> | null
    /**
     * The data used to update Outputs.
     */
    data: XOR<OutputUpdateManyMutationInput, OutputUncheckedUpdateManyInput>
    /**
     * Filter which Outputs to update
     */
    where?: OutputWhereInput
    /**
     * Limit how many Outputs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutputIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Output upsert
   */
  export type OutputUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Output
     */
    select?: OutputSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Output
     */
    omit?: OutputOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutputInclude<ExtArgs> | null
    /**
     * The filter to search for the Output to update in case it exists.
     */
    where: OutputWhereUniqueInput
    /**
     * In case the Output found by the `where` argument doesn't exist, create a new Output with this data.
     */
    create: XOR<OutputCreateInput, OutputUncheckedCreateInput>
    /**
     * In case the Output was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OutputUpdateInput, OutputUncheckedUpdateInput>
  }

  /**
   * Output delete
   */
  export type OutputDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Output
     */
    select?: OutputSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Output
     */
    omit?: OutputOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutputInclude<ExtArgs> | null
    /**
     * Filter which Output to delete.
     */
    where: OutputWhereUniqueInput
  }

  /**
   * Output deleteMany
   */
  export type OutputDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Outputs to delete
     */
    where?: OutputWhereInput
    /**
     * Limit how many Outputs to delete.
     */
    limit?: number
  }

  /**
   * Output.listOfFiles
   */
  export type Output$listOfFilesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Output.relatedToStudent
   */
  export type Output$relatedToStudentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
  }

  /**
   * Output.relatedToClassroom
   */
  export type Output$relatedToClassroomArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
  }

  /**
   * Output.relatedToActivity
   */
  export type Output$relatedToActivityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
    where?: ActivityWhereInput
  }

  /**
   * Output.relatedToFeedback
   */
  export type Output$relatedToFeedbackArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackInclude<ExtArgs> | null
    where?: FeedbackWhereInput
  }

  /**
   * Output.relatedToScore
   */
  export type Output$relatedToScoreArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Score
     */
    select?: ScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Score
     */
    omit?: ScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScoreInclude<ExtArgs> | null
    where?: ScoreWhereInput
  }

  /**
   * Output without action
   */
  export type OutputDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Output
     */
    select?: OutputSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Output
     */
    omit?: OutputOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutputInclude<ExtArgs> | null
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
    fileSize: number | null
    activityId: number | null
    announceId: number | null
    outputId: number | null
  }

  export type FilesSumAggregateOutputType = {
    id: number | null
    fileSize: number | null
    activityId: number | null
    announceId: number | null
    outputId: number | null
  }

  export type FilesMinAggregateOutputType = {
    id: number | null
    filename: string | null
    mimetype: string | null
    fileSize: number | null
    folderPath: string | null
    filePath: string | null
    activityId: number | null
    announceId: number | null
    outputId: number | null
    publicFileUrl: string | null
    status: $Enums.OutputStatus | null
  }

  export type FilesMaxAggregateOutputType = {
    id: number | null
    filename: string | null
    mimetype: string | null
    fileSize: number | null
    folderPath: string | null
    filePath: string | null
    activityId: number | null
    announceId: number | null
    outputId: number | null
    publicFileUrl: string | null
    status: $Enums.OutputStatus | null
  }

  export type FilesCountAggregateOutputType = {
    id: number
    filename: number
    mimetype: number
    fileSize: number
    folderPath: number
    filePath: number
    activityId: number
    announceId: number
    outputId: number
    publicFileUrl: number
    status: number
    _all: number
  }


  export type FilesAvgAggregateInputType = {
    id?: true
    fileSize?: true
    activityId?: true
    announceId?: true
    outputId?: true
  }

  export type FilesSumAggregateInputType = {
    id?: true
    fileSize?: true
    activityId?: true
    announceId?: true
    outputId?: true
  }

  export type FilesMinAggregateInputType = {
    id?: true
    filename?: true
    mimetype?: true
    fileSize?: true
    folderPath?: true
    filePath?: true
    activityId?: true
    announceId?: true
    outputId?: true
    publicFileUrl?: true
    status?: true
  }

  export type FilesMaxAggregateInputType = {
    id?: true
    filename?: true
    mimetype?: true
    fileSize?: true
    folderPath?: true
    filePath?: true
    activityId?: true
    announceId?: true
    outputId?: true
    publicFileUrl?: true
    status?: true
  }

  export type FilesCountAggregateInputType = {
    id?: true
    filename?: true
    mimetype?: true
    fileSize?: true
    folderPath?: true
    filePath?: true
    activityId?: true
    announceId?: true
    outputId?: true
    publicFileUrl?: true
    status?: true
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
    mimetype: string
    fileSize: number
    folderPath: string | null
    filePath: string | null
    activityId: number | null
    announceId: number | null
    outputId: number | null
    publicFileUrl: string | null
    status: $Enums.OutputStatus
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
    mimetype?: boolean
    fileSize?: boolean
    folderPath?: boolean
    filePath?: boolean
    activityId?: boolean
    announceId?: boolean
    outputId?: boolean
    publicFileUrl?: boolean
    status?: boolean
    relatedToActivity?: boolean | Files$relatedToActivityArgs<ExtArgs>
    relatedToAnnouncement?: boolean | Files$relatedToAnnouncementArgs<ExtArgs>
    relatedToOutput?: boolean | Files$relatedToOutputArgs<ExtArgs>
  }, ExtArgs["result"]["files"]>

  export type FilesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    filename?: boolean
    mimetype?: boolean
    fileSize?: boolean
    folderPath?: boolean
    filePath?: boolean
    activityId?: boolean
    announceId?: boolean
    outputId?: boolean
    publicFileUrl?: boolean
    status?: boolean
    relatedToActivity?: boolean | Files$relatedToActivityArgs<ExtArgs>
    relatedToAnnouncement?: boolean | Files$relatedToAnnouncementArgs<ExtArgs>
    relatedToOutput?: boolean | Files$relatedToOutputArgs<ExtArgs>
  }, ExtArgs["result"]["files"]>

  export type FilesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    filename?: boolean
    mimetype?: boolean
    fileSize?: boolean
    folderPath?: boolean
    filePath?: boolean
    activityId?: boolean
    announceId?: boolean
    outputId?: boolean
    publicFileUrl?: boolean
    status?: boolean
    relatedToActivity?: boolean | Files$relatedToActivityArgs<ExtArgs>
    relatedToAnnouncement?: boolean | Files$relatedToAnnouncementArgs<ExtArgs>
    relatedToOutput?: boolean | Files$relatedToOutputArgs<ExtArgs>
  }, ExtArgs["result"]["files"]>

  export type FilesSelectScalar = {
    id?: boolean
    filename?: boolean
    mimetype?: boolean
    fileSize?: boolean
    folderPath?: boolean
    filePath?: boolean
    activityId?: boolean
    announceId?: boolean
    outputId?: boolean
    publicFileUrl?: boolean
    status?: boolean
  }

  export type FilesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "filename" | "mimetype" | "fileSize" | "folderPath" | "filePath" | "activityId" | "announceId" | "outputId" | "publicFileUrl" | "status", ExtArgs["result"]["files"]>
  export type FilesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    relatedToActivity?: boolean | Files$relatedToActivityArgs<ExtArgs>
    relatedToAnnouncement?: boolean | Files$relatedToAnnouncementArgs<ExtArgs>
    relatedToOutput?: boolean | Files$relatedToOutputArgs<ExtArgs>
  }
  export type FilesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    relatedToActivity?: boolean | Files$relatedToActivityArgs<ExtArgs>
    relatedToAnnouncement?: boolean | Files$relatedToAnnouncementArgs<ExtArgs>
    relatedToOutput?: boolean | Files$relatedToOutputArgs<ExtArgs>
  }
  export type FilesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    relatedToActivity?: boolean | Files$relatedToActivityArgs<ExtArgs>
    relatedToAnnouncement?: boolean | Files$relatedToAnnouncementArgs<ExtArgs>
    relatedToOutput?: boolean | Files$relatedToOutputArgs<ExtArgs>
  }

  export type $FilesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Files"
    objects: {
      relatedToActivity: Prisma.$ActivityPayload<ExtArgs> | null
      relatedToAnnouncement: Prisma.$AnnouncementPayload<ExtArgs> | null
      relatedToOutput: Prisma.$OutputPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      filename: string
      mimetype: string
      fileSize: number
      folderPath: string | null
      filePath: string | null
      activityId: number | null
      announceId: number | null
      outputId: number | null
      publicFileUrl: string | null
      status: $Enums.OutputStatus
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
    relatedToActivity<T extends Files$relatedToActivityArgs<ExtArgs> = {}>(args?: Subset<T, Files$relatedToActivityArgs<ExtArgs>>): Prisma__ActivityClient<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    relatedToAnnouncement<T extends Files$relatedToAnnouncementArgs<ExtArgs> = {}>(args?: Subset<T, Files$relatedToAnnouncementArgs<ExtArgs>>): Prisma__AnnouncementClient<$Result.GetResult<Prisma.$AnnouncementPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    relatedToOutput<T extends Files$relatedToOutputArgs<ExtArgs> = {}>(args?: Subset<T, Files$relatedToOutputArgs<ExtArgs>>): Prisma__OutputClient<$Result.GetResult<Prisma.$OutputPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
    readonly mimetype: FieldRef<"Files", 'String'>
    readonly fileSize: FieldRef<"Files", 'Int'>
    readonly folderPath: FieldRef<"Files", 'String'>
    readonly filePath: FieldRef<"Files", 'String'>
    readonly activityId: FieldRef<"Files", 'Int'>
    readonly announceId: FieldRef<"Files", 'Int'>
    readonly outputId: FieldRef<"Files", 'Int'>
    readonly publicFileUrl: FieldRef<"Files", 'String'>
    readonly status: FieldRef<"Files", 'OutputStatus'>
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
   * Files.relatedToActivity
   */
  export type Files$relatedToActivityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
    where?: ActivityWhereInput
  }

  /**
   * Files.relatedToAnnouncement
   */
  export type Files$relatedToAnnouncementArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Announcement
     */
    select?: AnnouncementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Announcement
     */
    omit?: AnnouncementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnouncementInclude<ExtArgs> | null
    where?: AnnouncementWhereInput
  }

  /**
   * Files.relatedToOutput
   */
  export type Files$relatedToOutputArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Output
     */
    select?: OutputSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Output
     */
    omit?: OutputOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutputInclude<ExtArgs> | null
    where?: OutputWhereInput
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
   * Model Feedback
   */

  export type AggregateFeedback = {
    _count: FeedbackCountAggregateOutputType | null
    _avg: FeedbackAvgAggregateOutputType | null
    _sum: FeedbackSumAggregateOutputType | null
    _min: FeedbackMinAggregateOutputType | null
    _max: FeedbackMaxAggregateOutputType | null
  }

  export type FeedbackAvgAggregateOutputType = {
    id: number | null
  }

  export type FeedbackSumAggregateOutputType = {
    id: number | null
  }

  export type FeedbackMinAggregateOutputType = {
    id: number | null
    feedback: string | null
  }

  export type FeedbackMaxAggregateOutputType = {
    id: number | null
    feedback: string | null
  }

  export type FeedbackCountAggregateOutputType = {
    id: number
    feedback: number
    _all: number
  }


  export type FeedbackAvgAggregateInputType = {
    id?: true
  }

  export type FeedbackSumAggregateInputType = {
    id?: true
  }

  export type FeedbackMinAggregateInputType = {
    id?: true
    feedback?: true
  }

  export type FeedbackMaxAggregateInputType = {
    id?: true
    feedback?: true
  }

  export type FeedbackCountAggregateInputType = {
    id?: true
    feedback?: true
    _all?: true
  }

  export type FeedbackAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Feedback to aggregate.
     */
    where?: FeedbackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Feedbacks to fetch.
     */
    orderBy?: FeedbackOrderByWithRelationInput | FeedbackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FeedbackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Feedbacks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Feedbacks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Feedbacks
    **/
    _count?: true | FeedbackCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FeedbackAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FeedbackSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FeedbackMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FeedbackMaxAggregateInputType
  }

  export type GetFeedbackAggregateType<T extends FeedbackAggregateArgs> = {
        [P in keyof T & keyof AggregateFeedback]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFeedback[P]>
      : GetScalarType<T[P], AggregateFeedback[P]>
  }




  export type FeedbackGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FeedbackWhereInput
    orderBy?: FeedbackOrderByWithAggregationInput | FeedbackOrderByWithAggregationInput[]
    by: FeedbackScalarFieldEnum[] | FeedbackScalarFieldEnum
    having?: FeedbackScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FeedbackCountAggregateInputType | true
    _avg?: FeedbackAvgAggregateInputType
    _sum?: FeedbackSumAggregateInputType
    _min?: FeedbackMinAggregateInputType
    _max?: FeedbackMaxAggregateInputType
  }

  export type FeedbackGroupByOutputType = {
    id: number
    feedback: string | null
    _count: FeedbackCountAggregateOutputType | null
    _avg: FeedbackAvgAggregateOutputType | null
    _sum: FeedbackSumAggregateOutputType | null
    _min: FeedbackMinAggregateOutputType | null
    _max: FeedbackMaxAggregateOutputType | null
  }

  type GetFeedbackGroupByPayload<T extends FeedbackGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FeedbackGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FeedbackGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FeedbackGroupByOutputType[P]>
            : GetScalarType<T[P], FeedbackGroupByOutputType[P]>
        }
      >
    >


  export type FeedbackSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    feedback?: boolean
    output?: boolean | Feedback$outputArgs<ExtArgs>
    _count?: boolean | FeedbackCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["feedback"]>

  export type FeedbackSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    feedback?: boolean
  }, ExtArgs["result"]["feedback"]>

  export type FeedbackSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    feedback?: boolean
  }, ExtArgs["result"]["feedback"]>

  export type FeedbackSelectScalar = {
    id?: boolean
    feedback?: boolean
  }

  export type FeedbackOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "feedback", ExtArgs["result"]["feedback"]>
  export type FeedbackInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    output?: boolean | Feedback$outputArgs<ExtArgs>
    _count?: boolean | FeedbackCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type FeedbackIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type FeedbackIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $FeedbackPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Feedback"
    objects: {
      output: Prisma.$OutputPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      feedback: string | null
    }, ExtArgs["result"]["feedback"]>
    composites: {}
  }

  type FeedbackGetPayload<S extends boolean | null | undefined | FeedbackDefaultArgs> = $Result.GetResult<Prisma.$FeedbackPayload, S>

  type FeedbackCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FeedbackFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FeedbackCountAggregateInputType | true
    }

  export interface FeedbackDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Feedback'], meta: { name: 'Feedback' } }
    /**
     * Find zero or one Feedback that matches the filter.
     * @param {FeedbackFindUniqueArgs} args - Arguments to find a Feedback
     * @example
     * // Get one Feedback
     * const feedback = await prisma.feedback.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FeedbackFindUniqueArgs>(args: SelectSubset<T, FeedbackFindUniqueArgs<ExtArgs>>): Prisma__FeedbackClient<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Feedback that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FeedbackFindUniqueOrThrowArgs} args - Arguments to find a Feedback
     * @example
     * // Get one Feedback
     * const feedback = await prisma.feedback.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FeedbackFindUniqueOrThrowArgs>(args: SelectSubset<T, FeedbackFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FeedbackClient<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Feedback that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedbackFindFirstArgs} args - Arguments to find a Feedback
     * @example
     * // Get one Feedback
     * const feedback = await prisma.feedback.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FeedbackFindFirstArgs>(args?: SelectSubset<T, FeedbackFindFirstArgs<ExtArgs>>): Prisma__FeedbackClient<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Feedback that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedbackFindFirstOrThrowArgs} args - Arguments to find a Feedback
     * @example
     * // Get one Feedback
     * const feedback = await prisma.feedback.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FeedbackFindFirstOrThrowArgs>(args?: SelectSubset<T, FeedbackFindFirstOrThrowArgs<ExtArgs>>): Prisma__FeedbackClient<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Feedbacks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedbackFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Feedbacks
     * const feedbacks = await prisma.feedback.findMany()
     * 
     * // Get first 10 Feedbacks
     * const feedbacks = await prisma.feedback.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const feedbackWithIdOnly = await prisma.feedback.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FeedbackFindManyArgs>(args?: SelectSubset<T, FeedbackFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Feedback.
     * @param {FeedbackCreateArgs} args - Arguments to create a Feedback.
     * @example
     * // Create one Feedback
     * const Feedback = await prisma.feedback.create({
     *   data: {
     *     // ... data to create a Feedback
     *   }
     * })
     * 
     */
    create<T extends FeedbackCreateArgs>(args: SelectSubset<T, FeedbackCreateArgs<ExtArgs>>): Prisma__FeedbackClient<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Feedbacks.
     * @param {FeedbackCreateManyArgs} args - Arguments to create many Feedbacks.
     * @example
     * // Create many Feedbacks
     * const feedback = await prisma.feedback.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FeedbackCreateManyArgs>(args?: SelectSubset<T, FeedbackCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Feedbacks and returns the data saved in the database.
     * @param {FeedbackCreateManyAndReturnArgs} args - Arguments to create many Feedbacks.
     * @example
     * // Create many Feedbacks
     * const feedback = await prisma.feedback.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Feedbacks and only return the `id`
     * const feedbackWithIdOnly = await prisma.feedback.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FeedbackCreateManyAndReturnArgs>(args?: SelectSubset<T, FeedbackCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Feedback.
     * @param {FeedbackDeleteArgs} args - Arguments to delete one Feedback.
     * @example
     * // Delete one Feedback
     * const Feedback = await prisma.feedback.delete({
     *   where: {
     *     // ... filter to delete one Feedback
     *   }
     * })
     * 
     */
    delete<T extends FeedbackDeleteArgs>(args: SelectSubset<T, FeedbackDeleteArgs<ExtArgs>>): Prisma__FeedbackClient<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Feedback.
     * @param {FeedbackUpdateArgs} args - Arguments to update one Feedback.
     * @example
     * // Update one Feedback
     * const feedback = await prisma.feedback.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FeedbackUpdateArgs>(args: SelectSubset<T, FeedbackUpdateArgs<ExtArgs>>): Prisma__FeedbackClient<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Feedbacks.
     * @param {FeedbackDeleteManyArgs} args - Arguments to filter Feedbacks to delete.
     * @example
     * // Delete a few Feedbacks
     * const { count } = await prisma.feedback.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FeedbackDeleteManyArgs>(args?: SelectSubset<T, FeedbackDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Feedbacks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedbackUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Feedbacks
     * const feedback = await prisma.feedback.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FeedbackUpdateManyArgs>(args: SelectSubset<T, FeedbackUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Feedbacks and returns the data updated in the database.
     * @param {FeedbackUpdateManyAndReturnArgs} args - Arguments to update many Feedbacks.
     * @example
     * // Update many Feedbacks
     * const feedback = await prisma.feedback.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Feedbacks and only return the `id`
     * const feedbackWithIdOnly = await prisma.feedback.updateManyAndReturn({
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
    updateManyAndReturn<T extends FeedbackUpdateManyAndReturnArgs>(args: SelectSubset<T, FeedbackUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Feedback.
     * @param {FeedbackUpsertArgs} args - Arguments to update or create a Feedback.
     * @example
     * // Update or create a Feedback
     * const feedback = await prisma.feedback.upsert({
     *   create: {
     *     // ... data to create a Feedback
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Feedback we want to update
     *   }
     * })
     */
    upsert<T extends FeedbackUpsertArgs>(args: SelectSubset<T, FeedbackUpsertArgs<ExtArgs>>): Prisma__FeedbackClient<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Feedbacks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedbackCountArgs} args - Arguments to filter Feedbacks to count.
     * @example
     * // Count the number of Feedbacks
     * const count = await prisma.feedback.count({
     *   where: {
     *     // ... the filter for the Feedbacks we want to count
     *   }
     * })
    **/
    count<T extends FeedbackCountArgs>(
      args?: Subset<T, FeedbackCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FeedbackCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Feedback.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedbackAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FeedbackAggregateArgs>(args: Subset<T, FeedbackAggregateArgs>): Prisma.PrismaPromise<GetFeedbackAggregateType<T>>

    /**
     * Group by Feedback.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedbackGroupByArgs} args - Group by arguments.
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
      T extends FeedbackGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FeedbackGroupByArgs['orderBy'] }
        : { orderBy?: FeedbackGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FeedbackGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFeedbackGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Feedback model
   */
  readonly fields: FeedbackFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Feedback.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FeedbackClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    output<T extends Feedback$outputArgs<ExtArgs> = {}>(args?: Subset<T, Feedback$outputArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OutputPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Feedback model
   */
  interface FeedbackFieldRefs {
    readonly id: FieldRef<"Feedback", 'Int'>
    readonly feedback: FieldRef<"Feedback", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Feedback findUnique
   */
  export type FeedbackFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackInclude<ExtArgs> | null
    /**
     * Filter, which Feedback to fetch.
     */
    where: FeedbackWhereUniqueInput
  }

  /**
   * Feedback findUniqueOrThrow
   */
  export type FeedbackFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackInclude<ExtArgs> | null
    /**
     * Filter, which Feedback to fetch.
     */
    where: FeedbackWhereUniqueInput
  }

  /**
   * Feedback findFirst
   */
  export type FeedbackFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackInclude<ExtArgs> | null
    /**
     * Filter, which Feedback to fetch.
     */
    where?: FeedbackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Feedbacks to fetch.
     */
    orderBy?: FeedbackOrderByWithRelationInput | FeedbackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Feedbacks.
     */
    cursor?: FeedbackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Feedbacks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Feedbacks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Feedbacks.
     */
    distinct?: FeedbackScalarFieldEnum | FeedbackScalarFieldEnum[]
  }

  /**
   * Feedback findFirstOrThrow
   */
  export type FeedbackFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackInclude<ExtArgs> | null
    /**
     * Filter, which Feedback to fetch.
     */
    where?: FeedbackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Feedbacks to fetch.
     */
    orderBy?: FeedbackOrderByWithRelationInput | FeedbackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Feedbacks.
     */
    cursor?: FeedbackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Feedbacks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Feedbacks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Feedbacks.
     */
    distinct?: FeedbackScalarFieldEnum | FeedbackScalarFieldEnum[]
  }

  /**
   * Feedback findMany
   */
  export type FeedbackFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackInclude<ExtArgs> | null
    /**
     * Filter, which Feedbacks to fetch.
     */
    where?: FeedbackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Feedbacks to fetch.
     */
    orderBy?: FeedbackOrderByWithRelationInput | FeedbackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Feedbacks.
     */
    cursor?: FeedbackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Feedbacks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Feedbacks.
     */
    skip?: number
    distinct?: FeedbackScalarFieldEnum | FeedbackScalarFieldEnum[]
  }

  /**
   * Feedback create
   */
  export type FeedbackCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackInclude<ExtArgs> | null
    /**
     * The data needed to create a Feedback.
     */
    data?: XOR<FeedbackCreateInput, FeedbackUncheckedCreateInput>
  }

  /**
   * Feedback createMany
   */
  export type FeedbackCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Feedbacks.
     */
    data: FeedbackCreateManyInput | FeedbackCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Feedback createManyAndReturn
   */
  export type FeedbackCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null
    /**
     * The data used to create many Feedbacks.
     */
    data: FeedbackCreateManyInput | FeedbackCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Feedback update
   */
  export type FeedbackUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackInclude<ExtArgs> | null
    /**
     * The data needed to update a Feedback.
     */
    data: XOR<FeedbackUpdateInput, FeedbackUncheckedUpdateInput>
    /**
     * Choose, which Feedback to update.
     */
    where: FeedbackWhereUniqueInput
  }

  /**
   * Feedback updateMany
   */
  export type FeedbackUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Feedbacks.
     */
    data: XOR<FeedbackUpdateManyMutationInput, FeedbackUncheckedUpdateManyInput>
    /**
     * Filter which Feedbacks to update
     */
    where?: FeedbackWhereInput
    /**
     * Limit how many Feedbacks to update.
     */
    limit?: number
  }

  /**
   * Feedback updateManyAndReturn
   */
  export type FeedbackUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null
    /**
     * The data used to update Feedbacks.
     */
    data: XOR<FeedbackUpdateManyMutationInput, FeedbackUncheckedUpdateManyInput>
    /**
     * Filter which Feedbacks to update
     */
    where?: FeedbackWhereInput
    /**
     * Limit how many Feedbacks to update.
     */
    limit?: number
  }

  /**
   * Feedback upsert
   */
  export type FeedbackUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackInclude<ExtArgs> | null
    /**
     * The filter to search for the Feedback to update in case it exists.
     */
    where: FeedbackWhereUniqueInput
    /**
     * In case the Feedback found by the `where` argument doesn't exist, create a new Feedback with this data.
     */
    create: XOR<FeedbackCreateInput, FeedbackUncheckedCreateInput>
    /**
     * In case the Feedback was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FeedbackUpdateInput, FeedbackUncheckedUpdateInput>
  }

  /**
   * Feedback delete
   */
  export type FeedbackDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackInclude<ExtArgs> | null
    /**
     * Filter which Feedback to delete.
     */
    where: FeedbackWhereUniqueInput
  }

  /**
   * Feedback deleteMany
   */
  export type FeedbackDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Feedbacks to delete
     */
    where?: FeedbackWhereInput
    /**
     * Limit how many Feedbacks to delete.
     */
    limit?: number
  }

  /**
   * Feedback.output
   */
  export type Feedback$outputArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Output
     */
    select?: OutputSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Output
     */
    omit?: OutputOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutputInclude<ExtArgs> | null
    where?: OutputWhereInput
    orderBy?: OutputOrderByWithRelationInput | OutputOrderByWithRelationInput[]
    cursor?: OutputWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OutputScalarFieldEnum | OutputScalarFieldEnum[]
  }

  /**
   * Feedback without action
   */
  export type FeedbackDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackInclude<ExtArgs> | null
  }


  /**
   * Model Score
   */

  export type AggregateScore = {
    _count: ScoreCountAggregateOutputType | null
    _avg: ScoreAvgAggregateOutputType | null
    _sum: ScoreSumAggregateOutputType | null
    _min: ScoreMinAggregateOutputType | null
    _max: ScoreMaxAggregateOutputType | null
  }

  export type ScoreAvgAggregateOutputType = {
    id: number | null
    score: number | null
  }

  export type ScoreSumAggregateOutputType = {
    id: number | null
    score: number | null
  }

  export type ScoreMinAggregateOutputType = {
    id: number | null
    score: number | null
  }

  export type ScoreMaxAggregateOutputType = {
    id: number | null
    score: number | null
  }

  export type ScoreCountAggregateOutputType = {
    id: number
    score: number
    _all: number
  }


  export type ScoreAvgAggregateInputType = {
    id?: true
    score?: true
  }

  export type ScoreSumAggregateInputType = {
    id?: true
    score?: true
  }

  export type ScoreMinAggregateInputType = {
    id?: true
    score?: true
  }

  export type ScoreMaxAggregateInputType = {
    id?: true
    score?: true
  }

  export type ScoreCountAggregateInputType = {
    id?: true
    score?: true
    _all?: true
  }

  export type ScoreAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Score to aggregate.
     */
    where?: ScoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Scores to fetch.
     */
    orderBy?: ScoreOrderByWithRelationInput | ScoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ScoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Scores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Scores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Scores
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




  export type ScoreGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ScoreWhereInput
    orderBy?: ScoreOrderByWithAggregationInput | ScoreOrderByWithAggregationInput[]
    by: ScoreScalarFieldEnum[] | ScoreScalarFieldEnum
    having?: ScoreScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ScoreCountAggregateInputType | true
    _avg?: ScoreAvgAggregateInputType
    _sum?: ScoreSumAggregateInputType
    _min?: ScoreMinAggregateInputType
    _max?: ScoreMaxAggregateInputType
  }

  export type ScoreGroupByOutputType = {
    id: number
    score: number | null
    _count: ScoreCountAggregateOutputType | null
    _avg: ScoreAvgAggregateOutputType | null
    _sum: ScoreSumAggregateOutputType | null
    _min: ScoreMinAggregateOutputType | null
    _max: ScoreMaxAggregateOutputType | null
  }

  type GetScoreGroupByPayload<T extends ScoreGroupByArgs> = Prisma.PrismaPromise<
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


  export type ScoreSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    score?: boolean
    output?: boolean | Score$outputArgs<ExtArgs>
    _count?: boolean | ScoreCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["score"]>

  export type ScoreSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    score?: boolean
  }, ExtArgs["result"]["score"]>

  export type ScoreSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    score?: boolean
  }, ExtArgs["result"]["score"]>

  export type ScoreSelectScalar = {
    id?: boolean
    score?: boolean
  }

  export type ScoreOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "score", ExtArgs["result"]["score"]>
  export type ScoreInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    output?: boolean | Score$outputArgs<ExtArgs>
    _count?: boolean | ScoreCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ScoreIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ScoreIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ScorePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Score"
    objects: {
      output: Prisma.$OutputPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      score: number | null
    }, ExtArgs["result"]["score"]>
    composites: {}
  }

  type ScoreGetPayload<S extends boolean | null | undefined | ScoreDefaultArgs> = $Result.GetResult<Prisma.$ScorePayload, S>

  type ScoreCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ScoreFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ScoreCountAggregateInputType | true
    }

  export interface ScoreDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Score'], meta: { name: 'Score' } }
    /**
     * Find zero or one Score that matches the filter.
     * @param {ScoreFindUniqueArgs} args - Arguments to find a Score
     * @example
     * // Get one Score
     * const score = await prisma.score.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ScoreFindUniqueArgs>(args: SelectSubset<T, ScoreFindUniqueArgs<ExtArgs>>): Prisma__ScoreClient<$Result.GetResult<Prisma.$ScorePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Score that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ScoreFindUniqueOrThrowArgs} args - Arguments to find a Score
     * @example
     * // Get one Score
     * const score = await prisma.score.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ScoreFindUniqueOrThrowArgs>(args: SelectSubset<T, ScoreFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ScoreClient<$Result.GetResult<Prisma.$ScorePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Score that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScoreFindFirstArgs} args - Arguments to find a Score
     * @example
     * // Get one Score
     * const score = await prisma.score.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ScoreFindFirstArgs>(args?: SelectSubset<T, ScoreFindFirstArgs<ExtArgs>>): Prisma__ScoreClient<$Result.GetResult<Prisma.$ScorePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Score that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScoreFindFirstOrThrowArgs} args - Arguments to find a Score
     * @example
     * // Get one Score
     * const score = await prisma.score.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ScoreFindFirstOrThrowArgs>(args?: SelectSubset<T, ScoreFindFirstOrThrowArgs<ExtArgs>>): Prisma__ScoreClient<$Result.GetResult<Prisma.$ScorePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Scores that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScoreFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Scores
     * const scores = await prisma.score.findMany()
     * 
     * // Get first 10 Scores
     * const scores = await prisma.score.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const scoreWithIdOnly = await prisma.score.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ScoreFindManyArgs>(args?: SelectSubset<T, ScoreFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScorePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Score.
     * @param {ScoreCreateArgs} args - Arguments to create a Score.
     * @example
     * // Create one Score
     * const Score = await prisma.score.create({
     *   data: {
     *     // ... data to create a Score
     *   }
     * })
     * 
     */
    create<T extends ScoreCreateArgs>(args: SelectSubset<T, ScoreCreateArgs<ExtArgs>>): Prisma__ScoreClient<$Result.GetResult<Prisma.$ScorePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Scores.
     * @param {ScoreCreateManyArgs} args - Arguments to create many Scores.
     * @example
     * // Create many Scores
     * const score = await prisma.score.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ScoreCreateManyArgs>(args?: SelectSubset<T, ScoreCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Scores and returns the data saved in the database.
     * @param {ScoreCreateManyAndReturnArgs} args - Arguments to create many Scores.
     * @example
     * // Create many Scores
     * const score = await prisma.score.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Scores and only return the `id`
     * const scoreWithIdOnly = await prisma.score.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ScoreCreateManyAndReturnArgs>(args?: SelectSubset<T, ScoreCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScorePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Score.
     * @param {ScoreDeleteArgs} args - Arguments to delete one Score.
     * @example
     * // Delete one Score
     * const Score = await prisma.score.delete({
     *   where: {
     *     // ... filter to delete one Score
     *   }
     * })
     * 
     */
    delete<T extends ScoreDeleteArgs>(args: SelectSubset<T, ScoreDeleteArgs<ExtArgs>>): Prisma__ScoreClient<$Result.GetResult<Prisma.$ScorePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Score.
     * @param {ScoreUpdateArgs} args - Arguments to update one Score.
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
     */
    update<T extends ScoreUpdateArgs>(args: SelectSubset<T, ScoreUpdateArgs<ExtArgs>>): Prisma__ScoreClient<$Result.GetResult<Prisma.$ScorePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Scores.
     * @param {ScoreDeleteManyArgs} args - Arguments to filter Scores to delete.
     * @example
     * // Delete a few Scores
     * const { count } = await prisma.score.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ScoreDeleteManyArgs>(args?: SelectSubset<T, ScoreDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Scores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScoreUpdateManyArgs} args - Arguments to update one or more rows.
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
     */
    updateMany<T extends ScoreUpdateManyArgs>(args: SelectSubset<T, ScoreUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Scores and returns the data updated in the database.
     * @param {ScoreUpdateManyAndReturnArgs} args - Arguments to update many Scores.
     * @example
     * // Update many Scores
     * const score = await prisma.score.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Scores and only return the `id`
     * const scoreWithIdOnly = await prisma.score.updateManyAndReturn({
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
    updateManyAndReturn<T extends ScoreUpdateManyAndReturnArgs>(args: SelectSubset<T, ScoreUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScorePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Score.
     * @param {ScoreUpsertArgs} args - Arguments to update or create a Score.
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
     */
    upsert<T extends ScoreUpsertArgs>(args: SelectSubset<T, ScoreUpsertArgs<ExtArgs>>): Prisma__ScoreClient<$Result.GetResult<Prisma.$ScorePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Scores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScoreCountArgs} args - Arguments to filter Scores to count.
     * @example
     * // Count the number of Scores
     * const count = await prisma.score.count({
     *   where: {
     *     // ... the filter for the Scores we want to count
     *   }
     * })
    **/
    count<T extends ScoreCountArgs>(
      args?: Subset<T, ScoreCountArgs>,
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
     * @param {ScoreGroupByArgs} args - Group by arguments.
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
      T extends ScoreGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ScoreGroupByArgs['orderBy'] }
        : { orderBy?: ScoreGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ScoreGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetScoreGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Score model
   */
  readonly fields: ScoreFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Score.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ScoreClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    output<T extends Score$outputArgs<ExtArgs> = {}>(args?: Subset<T, Score$outputArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OutputPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Score model
   */
  interface ScoreFieldRefs {
    readonly id: FieldRef<"Score", 'Int'>
    readonly score: FieldRef<"Score", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Score findUnique
   */
  export type ScoreFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Score
     */
    select?: ScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Score
     */
    omit?: ScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScoreInclude<ExtArgs> | null
    /**
     * Filter, which Score to fetch.
     */
    where: ScoreWhereUniqueInput
  }

  /**
   * Score findUniqueOrThrow
   */
  export type ScoreFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Score
     */
    select?: ScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Score
     */
    omit?: ScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScoreInclude<ExtArgs> | null
    /**
     * Filter, which Score to fetch.
     */
    where: ScoreWhereUniqueInput
  }

  /**
   * Score findFirst
   */
  export type ScoreFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Score
     */
    select?: ScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Score
     */
    omit?: ScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScoreInclude<ExtArgs> | null
    /**
     * Filter, which Score to fetch.
     */
    where?: ScoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Scores to fetch.
     */
    orderBy?: ScoreOrderByWithRelationInput | ScoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Scores.
     */
    cursor?: ScoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Scores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Scores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Scores.
     */
    distinct?: ScoreScalarFieldEnum | ScoreScalarFieldEnum[]
  }

  /**
   * Score findFirstOrThrow
   */
  export type ScoreFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Score
     */
    select?: ScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Score
     */
    omit?: ScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScoreInclude<ExtArgs> | null
    /**
     * Filter, which Score to fetch.
     */
    where?: ScoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Scores to fetch.
     */
    orderBy?: ScoreOrderByWithRelationInput | ScoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Scores.
     */
    cursor?: ScoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Scores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Scores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Scores.
     */
    distinct?: ScoreScalarFieldEnum | ScoreScalarFieldEnum[]
  }

  /**
   * Score findMany
   */
  export type ScoreFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Score
     */
    select?: ScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Score
     */
    omit?: ScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScoreInclude<ExtArgs> | null
    /**
     * Filter, which Scores to fetch.
     */
    where?: ScoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Scores to fetch.
     */
    orderBy?: ScoreOrderByWithRelationInput | ScoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Scores.
     */
    cursor?: ScoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Scores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Scores.
     */
    skip?: number
    distinct?: ScoreScalarFieldEnum | ScoreScalarFieldEnum[]
  }

  /**
   * Score create
   */
  export type ScoreCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Score
     */
    select?: ScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Score
     */
    omit?: ScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScoreInclude<ExtArgs> | null
    /**
     * The data needed to create a Score.
     */
    data?: XOR<ScoreCreateInput, ScoreUncheckedCreateInput>
  }

  /**
   * Score createMany
   */
  export type ScoreCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Scores.
     */
    data: ScoreCreateManyInput | ScoreCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Score createManyAndReturn
   */
  export type ScoreCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Score
     */
    select?: ScoreSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Score
     */
    omit?: ScoreOmit<ExtArgs> | null
    /**
     * The data used to create many Scores.
     */
    data: ScoreCreateManyInput | ScoreCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Score update
   */
  export type ScoreUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Score
     */
    select?: ScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Score
     */
    omit?: ScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScoreInclude<ExtArgs> | null
    /**
     * The data needed to update a Score.
     */
    data: XOR<ScoreUpdateInput, ScoreUncheckedUpdateInput>
    /**
     * Choose, which Score to update.
     */
    where: ScoreWhereUniqueInput
  }

  /**
   * Score updateMany
   */
  export type ScoreUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Scores.
     */
    data: XOR<ScoreUpdateManyMutationInput, ScoreUncheckedUpdateManyInput>
    /**
     * Filter which Scores to update
     */
    where?: ScoreWhereInput
    /**
     * Limit how many Scores to update.
     */
    limit?: number
  }

  /**
   * Score updateManyAndReturn
   */
  export type ScoreUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Score
     */
    select?: ScoreSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Score
     */
    omit?: ScoreOmit<ExtArgs> | null
    /**
     * The data used to update Scores.
     */
    data: XOR<ScoreUpdateManyMutationInput, ScoreUncheckedUpdateManyInput>
    /**
     * Filter which Scores to update
     */
    where?: ScoreWhereInput
    /**
     * Limit how many Scores to update.
     */
    limit?: number
  }

  /**
   * Score upsert
   */
  export type ScoreUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Score
     */
    select?: ScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Score
     */
    omit?: ScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScoreInclude<ExtArgs> | null
    /**
     * The filter to search for the Score to update in case it exists.
     */
    where: ScoreWhereUniqueInput
    /**
     * In case the Score found by the `where` argument doesn't exist, create a new Score with this data.
     */
    create: XOR<ScoreCreateInput, ScoreUncheckedCreateInput>
    /**
     * In case the Score was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ScoreUpdateInput, ScoreUncheckedUpdateInput>
  }

  /**
   * Score delete
   */
  export type ScoreDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Score
     */
    select?: ScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Score
     */
    omit?: ScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScoreInclude<ExtArgs> | null
    /**
     * Filter which Score to delete.
     */
    where: ScoreWhereUniqueInput
  }

  /**
   * Score deleteMany
   */
  export type ScoreDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Scores to delete
     */
    where?: ScoreWhereInput
    /**
     * Limit how many Scores to delete.
     */
    limit?: number
  }

  /**
   * Score.output
   */
  export type Score$outputArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Output
     */
    select?: OutputSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Output
     */
    omit?: OutputOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutputInclude<ExtArgs> | null
    where?: OutputWhereInput
    orderBy?: OutputOrderByWithRelationInput | OutputOrderByWithRelationInput[]
    cursor?: OutputWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OutputScalarFieldEnum | OutputScalarFieldEnum[]
  }

  /**
   * Score without action
   */
  export type ScoreDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Score
     */
    select?: ScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Score
     */
    omit?: ScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScoreInclude<ExtArgs> | null
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
    username: 'username',
    email: 'email',
    password: 'password'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const StudentScalarFieldEnum: {
    userId: 'userId',
    lastname: 'lastname',
    firstname: 'firstname',
    middlename: 'middlename',
    sex: 'sex',
    status: 'status',
    roomId: 'roomId'
  };

  export type StudentScalarFieldEnum = (typeof StudentScalarFieldEnum)[keyof typeof StudentScalarFieldEnum]


  export const ClassroomScalarFieldEnum: {
    id: 'id',
    classname: 'classname',
    section: 'section',
    subject: 'subject',
    room: 'room',
    classcode: 'classcode',
    userId: 'userId'
  };

  export type ClassroomScalarFieldEnum = (typeof ClassroomScalarFieldEnum)[keyof typeof ClassroomScalarFieldEnum]


  export const ActivityScalarFieldEnum: {
    id: 'id',
    title: 'title',
    date: 'date',
    time: 'time',
    instruction: 'instruction',
    roomId: 'roomId'
  };

  export type ActivityScalarFieldEnum = (typeof ActivityScalarFieldEnum)[keyof typeof ActivityScalarFieldEnum]


  export const AnnouncementScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    roomId: 'roomId',
    createdAt: 'createdAt'
  };

  export type AnnouncementScalarFieldEnum = (typeof AnnouncementScalarFieldEnum)[keyof typeof AnnouncementScalarFieldEnum]


  export const OutputScalarFieldEnum: {
    id: 'id',
    studentId: 'studentId',
    roomId: 'roomId',
    activityId: 'activityId',
    feedbackId: 'feedbackId',
    scoreId: 'scoreId'
  };

  export type OutputScalarFieldEnum = (typeof OutputScalarFieldEnum)[keyof typeof OutputScalarFieldEnum]


  export const FilesScalarFieldEnum: {
    id: 'id',
    filename: 'filename',
    mimetype: 'mimetype',
    fileSize: 'fileSize',
    folderPath: 'folderPath',
    filePath: 'filePath',
    activityId: 'activityId',
    announceId: 'announceId',
    outputId: 'outputId',
    publicFileUrl: 'publicFileUrl',
    status: 'status'
  };

  export type FilesScalarFieldEnum = (typeof FilesScalarFieldEnum)[keyof typeof FilesScalarFieldEnum]


  export const FeedbackScalarFieldEnum: {
    id: 'id',
    feedback: 'feedback'
  };

  export type FeedbackScalarFieldEnum = (typeof FeedbackScalarFieldEnum)[keyof typeof FeedbackScalarFieldEnum]


  export const ScoreScalarFieldEnum: {
    id: 'id',
    score: 'score'
  };

  export type ScoreScalarFieldEnum = (typeof ScoreScalarFieldEnum)[keyof typeof ScoreScalarFieldEnum]


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
   * Reference to a field of type 'ClassroomStatus'
   */
  export type EnumClassroomStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ClassroomStatus'>
    


  /**
   * Reference to a field of type 'ClassroomStatus[]'
   */
  export type ListEnumClassroomStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ClassroomStatus[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'OutputStatus'
   */
  export type EnumOutputStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OutputStatus'>
    


  /**
   * Reference to a field of type 'OutputStatus[]'
   */
  export type ListEnumOutputStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OutputStatus[]'>
    


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
    username?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringNullableFilter<"User"> | string | null
    listOfCreatedClassroom?: ClassroomListRelationFilter
    student?: XOR<StudentNullableScalarRelationFilter, StudentWhereInput> | null
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrderInput | SortOrder
    listOfCreatedClassroom?: ClassroomOrderByRelationAggregateInput
    student?: StudentOrderByWithRelationInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    username?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringNullableFilter<"User"> | string | null
    listOfCreatedClassroom?: ClassroomListRelationFilter
    student?: XOR<StudentNullableScalarRelationFilter, StudentWhereInput> | null
  }, "id">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
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
    username?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringNullableWithAggregatesFilter<"User"> | string | null
  }

  export type StudentWhereInput = {
    AND?: StudentWhereInput | StudentWhereInput[]
    OR?: StudentWhereInput[]
    NOT?: StudentWhereInput | StudentWhereInput[]
    userId?: IntFilter<"Student"> | number
    lastname?: StringFilter<"Student"> | string
    firstname?: StringFilter<"Student"> | string
    middlename?: StringFilter<"Student"> | string
    sex?: StringFilter<"Student"> | string
    status?: EnumClassroomStatusFilter<"Student"> | $Enums.ClassroomStatus
    roomId?: IntNullableFilter<"Student"> | number | null
    relatedToUser?: XOR<UserScalarRelationFilter, UserWhereInput>
    listOfOutputs?: OutputListRelationFilter
    relatedtoClassroom?: XOR<ClassroomNullableScalarRelationFilter, ClassroomWhereInput> | null
  }

  export type StudentOrderByWithRelationInput = {
    userId?: SortOrder
    lastname?: SortOrder
    firstname?: SortOrder
    middlename?: SortOrder
    sex?: SortOrder
    status?: SortOrder
    roomId?: SortOrderInput | SortOrder
    relatedToUser?: UserOrderByWithRelationInput
    listOfOutputs?: OutputOrderByRelationAggregateInput
    relatedtoClassroom?: ClassroomOrderByWithRelationInput
  }

  export type StudentWhereUniqueInput = Prisma.AtLeast<{
    userId?: number
    AND?: StudentWhereInput | StudentWhereInput[]
    OR?: StudentWhereInput[]
    NOT?: StudentWhereInput | StudentWhereInput[]
    lastname?: StringFilter<"Student"> | string
    firstname?: StringFilter<"Student"> | string
    middlename?: StringFilter<"Student"> | string
    sex?: StringFilter<"Student"> | string
    status?: EnumClassroomStatusFilter<"Student"> | $Enums.ClassroomStatus
    roomId?: IntNullableFilter<"Student"> | number | null
    relatedToUser?: XOR<UserScalarRelationFilter, UserWhereInput>
    listOfOutputs?: OutputListRelationFilter
    relatedtoClassroom?: XOR<ClassroomNullableScalarRelationFilter, ClassroomWhereInput> | null
  }, "userId">

  export type StudentOrderByWithAggregationInput = {
    userId?: SortOrder
    lastname?: SortOrder
    firstname?: SortOrder
    middlename?: SortOrder
    sex?: SortOrder
    status?: SortOrder
    roomId?: SortOrderInput | SortOrder
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
    userId?: IntWithAggregatesFilter<"Student"> | number
    lastname?: StringWithAggregatesFilter<"Student"> | string
    firstname?: StringWithAggregatesFilter<"Student"> | string
    middlename?: StringWithAggregatesFilter<"Student"> | string
    sex?: StringWithAggregatesFilter<"Student"> | string
    status?: EnumClassroomStatusWithAggregatesFilter<"Student"> | $Enums.ClassroomStatus
    roomId?: IntNullableWithAggregatesFilter<"Student"> | number | null
  }

  export type ClassroomWhereInput = {
    AND?: ClassroomWhereInput | ClassroomWhereInput[]
    OR?: ClassroomWhereInput[]
    NOT?: ClassroomWhereInput | ClassroomWhereInput[]
    id?: IntFilter<"Classroom"> | number
    classname?: StringFilter<"Classroom"> | string
    section?: StringFilter<"Classroom"> | string
    subject?: StringFilter<"Classroom"> | string
    room?: StringFilter<"Classroom"> | string
    classcode?: StringNullableFilter<"Classroom"> | string | null
    userId?: IntFilter<"Classroom"> | number
    relatedToUser?: XOR<UserScalarRelationFilter, UserWhereInput>
    listOfAnnouncements?: AnnouncementListRelationFilter
    listOfActivity?: ActivityListRelationFilter
    listOfStudents?: StudentListRelationFilter
    listOfOutputs?: OutputListRelationFilter
  }

  export type ClassroomOrderByWithRelationInput = {
    id?: SortOrder
    classname?: SortOrder
    section?: SortOrder
    subject?: SortOrder
    room?: SortOrder
    classcode?: SortOrderInput | SortOrder
    userId?: SortOrder
    relatedToUser?: UserOrderByWithRelationInput
    listOfAnnouncements?: AnnouncementOrderByRelationAggregateInput
    listOfActivity?: ActivityOrderByRelationAggregateInput
    listOfStudents?: StudentOrderByRelationAggregateInput
    listOfOutputs?: OutputOrderByRelationAggregateInput
  }

  export type ClassroomWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ClassroomWhereInput | ClassroomWhereInput[]
    OR?: ClassroomWhereInput[]
    NOT?: ClassroomWhereInput | ClassroomWhereInput[]
    classname?: StringFilter<"Classroom"> | string
    section?: StringFilter<"Classroom"> | string
    subject?: StringFilter<"Classroom"> | string
    room?: StringFilter<"Classroom"> | string
    classcode?: StringNullableFilter<"Classroom"> | string | null
    userId?: IntFilter<"Classroom"> | number
    relatedToUser?: XOR<UserScalarRelationFilter, UserWhereInput>
    listOfAnnouncements?: AnnouncementListRelationFilter
    listOfActivity?: ActivityListRelationFilter
    listOfStudents?: StudentListRelationFilter
    listOfOutputs?: OutputListRelationFilter
  }, "id">

  export type ClassroomOrderByWithAggregationInput = {
    id?: SortOrder
    classname?: SortOrder
    section?: SortOrder
    subject?: SortOrder
    room?: SortOrder
    classcode?: SortOrderInput | SortOrder
    userId?: SortOrder
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
    section?: StringWithAggregatesFilter<"Classroom"> | string
    subject?: StringWithAggregatesFilter<"Classroom"> | string
    room?: StringWithAggregatesFilter<"Classroom"> | string
    classcode?: StringNullableWithAggregatesFilter<"Classroom"> | string | null
    userId?: IntWithAggregatesFilter<"Classroom"> | number
  }

  export type ActivityWhereInput = {
    AND?: ActivityWhereInput | ActivityWhereInput[]
    OR?: ActivityWhereInput[]
    NOT?: ActivityWhereInput | ActivityWhereInput[]
    id?: IntFilter<"Activity"> | number
    title?: StringFilter<"Activity"> | string
    date?: StringFilter<"Activity"> | string
    time?: StringFilter<"Activity"> | string
    instruction?: StringNullableFilter<"Activity"> | string | null
    roomId?: IntFilter<"Activity"> | number
    criteria?: FilesListRelationFilter
    outputs?: OutputListRelationFilter
    relatedToClassroom?: XOR<ClassroomScalarRelationFilter, ClassroomWhereInput>
  }

  export type ActivityOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    date?: SortOrder
    time?: SortOrder
    instruction?: SortOrderInput | SortOrder
    roomId?: SortOrder
    criteria?: FilesOrderByRelationAggregateInput
    outputs?: OutputOrderByRelationAggregateInput
    relatedToClassroom?: ClassroomOrderByWithRelationInput
  }

  export type ActivityWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ActivityWhereInput | ActivityWhereInput[]
    OR?: ActivityWhereInput[]
    NOT?: ActivityWhereInput | ActivityWhereInput[]
    title?: StringFilter<"Activity"> | string
    date?: StringFilter<"Activity"> | string
    time?: StringFilter<"Activity"> | string
    instruction?: StringNullableFilter<"Activity"> | string | null
    roomId?: IntFilter<"Activity"> | number
    criteria?: FilesListRelationFilter
    outputs?: OutputListRelationFilter
    relatedToClassroom?: XOR<ClassroomScalarRelationFilter, ClassroomWhereInput>
  }, "id">

  export type ActivityOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    date?: SortOrder
    time?: SortOrder
    instruction?: SortOrderInput | SortOrder
    roomId?: SortOrder
    _count?: ActivityCountOrderByAggregateInput
    _avg?: ActivityAvgOrderByAggregateInput
    _max?: ActivityMaxOrderByAggregateInput
    _min?: ActivityMinOrderByAggregateInput
    _sum?: ActivitySumOrderByAggregateInput
  }

  export type ActivityScalarWhereWithAggregatesInput = {
    AND?: ActivityScalarWhereWithAggregatesInput | ActivityScalarWhereWithAggregatesInput[]
    OR?: ActivityScalarWhereWithAggregatesInput[]
    NOT?: ActivityScalarWhereWithAggregatesInput | ActivityScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Activity"> | number
    title?: StringWithAggregatesFilter<"Activity"> | string
    date?: StringWithAggregatesFilter<"Activity"> | string
    time?: StringWithAggregatesFilter<"Activity"> | string
    instruction?: StringNullableWithAggregatesFilter<"Activity"> | string | null
    roomId?: IntWithAggregatesFilter<"Activity"> | number
  }

  export type AnnouncementWhereInput = {
    AND?: AnnouncementWhereInput | AnnouncementWhereInput[]
    OR?: AnnouncementWhereInput[]
    NOT?: AnnouncementWhereInput | AnnouncementWhereInput[]
    id?: IntFilter<"Announcement"> | number
    title?: StringFilter<"Announcement"> | string
    description?: StringNullableFilter<"Announcement"> | string | null
    roomId?: IntFilter<"Announcement"> | number
    createdAt?: DateTimeNullableFilter<"Announcement"> | Date | string | null
    relatedToClassroom?: XOR<ClassroomScalarRelationFilter, ClassroomWhereInput>
    listOfFiles?: FilesListRelationFilter
  }

  export type AnnouncementOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    roomId?: SortOrder
    createdAt?: SortOrderInput | SortOrder
    relatedToClassroom?: ClassroomOrderByWithRelationInput
    listOfFiles?: FilesOrderByRelationAggregateInput
  }

  export type AnnouncementWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AnnouncementWhereInput | AnnouncementWhereInput[]
    OR?: AnnouncementWhereInput[]
    NOT?: AnnouncementWhereInput | AnnouncementWhereInput[]
    title?: StringFilter<"Announcement"> | string
    description?: StringNullableFilter<"Announcement"> | string | null
    roomId?: IntFilter<"Announcement"> | number
    createdAt?: DateTimeNullableFilter<"Announcement"> | Date | string | null
    relatedToClassroom?: XOR<ClassroomScalarRelationFilter, ClassroomWhereInput>
    listOfFiles?: FilesListRelationFilter
  }, "id">

  export type AnnouncementOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    roomId?: SortOrder
    createdAt?: SortOrderInput | SortOrder
    _count?: AnnouncementCountOrderByAggregateInput
    _avg?: AnnouncementAvgOrderByAggregateInput
    _max?: AnnouncementMaxOrderByAggregateInput
    _min?: AnnouncementMinOrderByAggregateInput
    _sum?: AnnouncementSumOrderByAggregateInput
  }

  export type AnnouncementScalarWhereWithAggregatesInput = {
    AND?: AnnouncementScalarWhereWithAggregatesInput | AnnouncementScalarWhereWithAggregatesInput[]
    OR?: AnnouncementScalarWhereWithAggregatesInput[]
    NOT?: AnnouncementScalarWhereWithAggregatesInput | AnnouncementScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Announcement"> | number
    title?: StringWithAggregatesFilter<"Announcement"> | string
    description?: StringNullableWithAggregatesFilter<"Announcement"> | string | null
    roomId?: IntWithAggregatesFilter<"Announcement"> | number
    createdAt?: DateTimeNullableWithAggregatesFilter<"Announcement"> | Date | string | null
  }

  export type OutputWhereInput = {
    AND?: OutputWhereInput | OutputWhereInput[]
    OR?: OutputWhereInput[]
    NOT?: OutputWhereInput | OutputWhereInput[]
    id?: IntFilter<"Output"> | number
    studentId?: IntNullableFilter<"Output"> | number | null
    roomId?: IntNullableFilter<"Output"> | number | null
    activityId?: IntNullableFilter<"Output"> | number | null
    feedbackId?: IntNullableFilter<"Output"> | number | null
    scoreId?: IntNullableFilter<"Output"> | number | null
    listOfFiles?: FilesListRelationFilter
    relatedToStudent?: XOR<StudentNullableScalarRelationFilter, StudentWhereInput> | null
    relatedToClassroom?: XOR<ClassroomNullableScalarRelationFilter, ClassroomWhereInput> | null
    relatedToActivity?: XOR<ActivityNullableScalarRelationFilter, ActivityWhereInput> | null
    relatedToFeedback?: XOR<FeedbackNullableScalarRelationFilter, FeedbackWhereInput> | null
    relatedToScore?: XOR<ScoreNullableScalarRelationFilter, ScoreWhereInput> | null
  }

  export type OutputOrderByWithRelationInput = {
    id?: SortOrder
    studentId?: SortOrderInput | SortOrder
    roomId?: SortOrderInput | SortOrder
    activityId?: SortOrderInput | SortOrder
    feedbackId?: SortOrderInput | SortOrder
    scoreId?: SortOrderInput | SortOrder
    listOfFiles?: FilesOrderByRelationAggregateInput
    relatedToStudent?: StudentOrderByWithRelationInput
    relatedToClassroom?: ClassroomOrderByWithRelationInput
    relatedToActivity?: ActivityOrderByWithRelationInput
    relatedToFeedback?: FeedbackOrderByWithRelationInput
    relatedToScore?: ScoreOrderByWithRelationInput
  }

  export type OutputWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    roomId_activityId_studentId?: OutputRoomId_activityId_studentIdCompoundUniqueInput
    AND?: OutputWhereInput | OutputWhereInput[]
    OR?: OutputWhereInput[]
    NOT?: OutputWhereInput | OutputWhereInput[]
    studentId?: IntNullableFilter<"Output"> | number | null
    roomId?: IntNullableFilter<"Output"> | number | null
    activityId?: IntNullableFilter<"Output"> | number | null
    feedbackId?: IntNullableFilter<"Output"> | number | null
    scoreId?: IntNullableFilter<"Output"> | number | null
    listOfFiles?: FilesListRelationFilter
    relatedToStudent?: XOR<StudentNullableScalarRelationFilter, StudentWhereInput> | null
    relatedToClassroom?: XOR<ClassroomNullableScalarRelationFilter, ClassroomWhereInput> | null
    relatedToActivity?: XOR<ActivityNullableScalarRelationFilter, ActivityWhereInput> | null
    relatedToFeedback?: XOR<FeedbackNullableScalarRelationFilter, FeedbackWhereInput> | null
    relatedToScore?: XOR<ScoreNullableScalarRelationFilter, ScoreWhereInput> | null
  }, "id" | "roomId_activityId_studentId">

  export type OutputOrderByWithAggregationInput = {
    id?: SortOrder
    studentId?: SortOrderInput | SortOrder
    roomId?: SortOrderInput | SortOrder
    activityId?: SortOrderInput | SortOrder
    feedbackId?: SortOrderInput | SortOrder
    scoreId?: SortOrderInput | SortOrder
    _count?: OutputCountOrderByAggregateInput
    _avg?: OutputAvgOrderByAggregateInput
    _max?: OutputMaxOrderByAggregateInput
    _min?: OutputMinOrderByAggregateInput
    _sum?: OutputSumOrderByAggregateInput
  }

  export type OutputScalarWhereWithAggregatesInput = {
    AND?: OutputScalarWhereWithAggregatesInput | OutputScalarWhereWithAggregatesInput[]
    OR?: OutputScalarWhereWithAggregatesInput[]
    NOT?: OutputScalarWhereWithAggregatesInput | OutputScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Output"> | number
    studentId?: IntNullableWithAggregatesFilter<"Output"> | number | null
    roomId?: IntNullableWithAggregatesFilter<"Output"> | number | null
    activityId?: IntNullableWithAggregatesFilter<"Output"> | number | null
    feedbackId?: IntNullableWithAggregatesFilter<"Output"> | number | null
    scoreId?: IntNullableWithAggregatesFilter<"Output"> | number | null
  }

  export type FilesWhereInput = {
    AND?: FilesWhereInput | FilesWhereInput[]
    OR?: FilesWhereInput[]
    NOT?: FilesWhereInput | FilesWhereInput[]
    id?: IntFilter<"Files"> | number
    filename?: StringFilter<"Files"> | string
    mimetype?: StringFilter<"Files"> | string
    fileSize?: IntFilter<"Files"> | number
    folderPath?: StringNullableFilter<"Files"> | string | null
    filePath?: StringNullableFilter<"Files"> | string | null
    activityId?: IntNullableFilter<"Files"> | number | null
    announceId?: IntNullableFilter<"Files"> | number | null
    outputId?: IntNullableFilter<"Files"> | number | null
    publicFileUrl?: StringNullableFilter<"Files"> | string | null
    status?: EnumOutputStatusFilter<"Files"> | $Enums.OutputStatus
    relatedToActivity?: XOR<ActivityNullableScalarRelationFilter, ActivityWhereInput> | null
    relatedToAnnouncement?: XOR<AnnouncementNullableScalarRelationFilter, AnnouncementWhereInput> | null
    relatedToOutput?: XOR<OutputNullableScalarRelationFilter, OutputWhereInput> | null
  }

  export type FilesOrderByWithRelationInput = {
    id?: SortOrder
    filename?: SortOrder
    mimetype?: SortOrder
    fileSize?: SortOrder
    folderPath?: SortOrderInput | SortOrder
    filePath?: SortOrderInput | SortOrder
    activityId?: SortOrderInput | SortOrder
    announceId?: SortOrderInput | SortOrder
    outputId?: SortOrderInput | SortOrder
    publicFileUrl?: SortOrderInput | SortOrder
    status?: SortOrder
    relatedToActivity?: ActivityOrderByWithRelationInput
    relatedToAnnouncement?: AnnouncementOrderByWithRelationInput
    relatedToOutput?: OutputOrderByWithRelationInput
  }

  export type FilesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: FilesWhereInput | FilesWhereInput[]
    OR?: FilesWhereInput[]
    NOT?: FilesWhereInput | FilesWhereInput[]
    filename?: StringFilter<"Files"> | string
    mimetype?: StringFilter<"Files"> | string
    fileSize?: IntFilter<"Files"> | number
    folderPath?: StringNullableFilter<"Files"> | string | null
    filePath?: StringNullableFilter<"Files"> | string | null
    activityId?: IntNullableFilter<"Files"> | number | null
    announceId?: IntNullableFilter<"Files"> | number | null
    outputId?: IntNullableFilter<"Files"> | number | null
    publicFileUrl?: StringNullableFilter<"Files"> | string | null
    status?: EnumOutputStatusFilter<"Files"> | $Enums.OutputStatus
    relatedToActivity?: XOR<ActivityNullableScalarRelationFilter, ActivityWhereInput> | null
    relatedToAnnouncement?: XOR<AnnouncementNullableScalarRelationFilter, AnnouncementWhereInput> | null
    relatedToOutput?: XOR<OutputNullableScalarRelationFilter, OutputWhereInput> | null
  }, "id">

  export type FilesOrderByWithAggregationInput = {
    id?: SortOrder
    filename?: SortOrder
    mimetype?: SortOrder
    fileSize?: SortOrder
    folderPath?: SortOrderInput | SortOrder
    filePath?: SortOrderInput | SortOrder
    activityId?: SortOrderInput | SortOrder
    announceId?: SortOrderInput | SortOrder
    outputId?: SortOrderInput | SortOrder
    publicFileUrl?: SortOrderInput | SortOrder
    status?: SortOrder
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
    mimetype?: StringWithAggregatesFilter<"Files"> | string
    fileSize?: IntWithAggregatesFilter<"Files"> | number
    folderPath?: StringNullableWithAggregatesFilter<"Files"> | string | null
    filePath?: StringNullableWithAggregatesFilter<"Files"> | string | null
    activityId?: IntNullableWithAggregatesFilter<"Files"> | number | null
    announceId?: IntNullableWithAggregatesFilter<"Files"> | number | null
    outputId?: IntNullableWithAggregatesFilter<"Files"> | number | null
    publicFileUrl?: StringNullableWithAggregatesFilter<"Files"> | string | null
    status?: EnumOutputStatusWithAggregatesFilter<"Files"> | $Enums.OutputStatus
  }

  export type FeedbackWhereInput = {
    AND?: FeedbackWhereInput | FeedbackWhereInput[]
    OR?: FeedbackWhereInput[]
    NOT?: FeedbackWhereInput | FeedbackWhereInput[]
    id?: IntFilter<"Feedback"> | number
    feedback?: StringNullableFilter<"Feedback"> | string | null
    output?: OutputListRelationFilter
  }

  export type FeedbackOrderByWithRelationInput = {
    id?: SortOrder
    feedback?: SortOrderInput | SortOrder
    output?: OutputOrderByRelationAggregateInput
  }

  export type FeedbackWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: FeedbackWhereInput | FeedbackWhereInput[]
    OR?: FeedbackWhereInput[]
    NOT?: FeedbackWhereInput | FeedbackWhereInput[]
    feedback?: StringNullableFilter<"Feedback"> | string | null
    output?: OutputListRelationFilter
  }, "id">

  export type FeedbackOrderByWithAggregationInput = {
    id?: SortOrder
    feedback?: SortOrderInput | SortOrder
    _count?: FeedbackCountOrderByAggregateInput
    _avg?: FeedbackAvgOrderByAggregateInput
    _max?: FeedbackMaxOrderByAggregateInput
    _min?: FeedbackMinOrderByAggregateInput
    _sum?: FeedbackSumOrderByAggregateInput
  }

  export type FeedbackScalarWhereWithAggregatesInput = {
    AND?: FeedbackScalarWhereWithAggregatesInput | FeedbackScalarWhereWithAggregatesInput[]
    OR?: FeedbackScalarWhereWithAggregatesInput[]
    NOT?: FeedbackScalarWhereWithAggregatesInput | FeedbackScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Feedback"> | number
    feedback?: StringNullableWithAggregatesFilter<"Feedback"> | string | null
  }

  export type ScoreWhereInput = {
    AND?: ScoreWhereInput | ScoreWhereInput[]
    OR?: ScoreWhereInput[]
    NOT?: ScoreWhereInput | ScoreWhereInput[]
    id?: IntFilter<"Score"> | number
    score?: IntNullableFilter<"Score"> | number | null
    output?: OutputListRelationFilter
  }

  export type ScoreOrderByWithRelationInput = {
    id?: SortOrder
    score?: SortOrderInput | SortOrder
    output?: OutputOrderByRelationAggregateInput
  }

  export type ScoreWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ScoreWhereInput | ScoreWhereInput[]
    OR?: ScoreWhereInput[]
    NOT?: ScoreWhereInput | ScoreWhereInput[]
    score?: IntNullableFilter<"Score"> | number | null
    output?: OutputListRelationFilter
  }, "id">

  export type ScoreOrderByWithAggregationInput = {
    id?: SortOrder
    score?: SortOrderInput | SortOrder
    _count?: ScoreCountOrderByAggregateInput
    _avg?: ScoreAvgOrderByAggregateInput
    _max?: ScoreMaxOrderByAggregateInput
    _min?: ScoreMinOrderByAggregateInput
    _sum?: ScoreSumOrderByAggregateInput
  }

  export type ScoreScalarWhereWithAggregatesInput = {
    AND?: ScoreScalarWhereWithAggregatesInput | ScoreScalarWhereWithAggregatesInput[]
    OR?: ScoreScalarWhereWithAggregatesInput[]
    NOT?: ScoreScalarWhereWithAggregatesInput | ScoreScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Score"> | number
    score?: IntNullableWithAggregatesFilter<"Score"> | number | null
  }

  export type UserCreateInput = {
    username: string
    email: string
    password?: string | null
    listOfCreatedClassroom?: ClassroomCreateNestedManyWithoutRelatedToUserInput
    student?: StudentCreateNestedOneWithoutRelatedToUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    username: string
    email: string
    password?: string | null
    listOfCreatedClassroom?: ClassroomUncheckedCreateNestedManyWithoutRelatedToUserInput
    student?: StudentUncheckedCreateNestedOneWithoutRelatedToUserInput
  }

  export type UserUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    listOfCreatedClassroom?: ClassroomUpdateManyWithoutRelatedToUserNestedInput
    student?: StudentUpdateOneWithoutRelatedToUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    listOfCreatedClassroom?: ClassroomUncheckedUpdateManyWithoutRelatedToUserNestedInput
    student?: StudentUncheckedUpdateOneWithoutRelatedToUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    username: string
    email: string
    password?: string | null
  }

  export type UserUpdateManyMutationInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StudentCreateInput = {
    lastname: string
    firstname: string
    middlename: string
    sex: string
    status?: $Enums.ClassroomStatus
    relatedToUser: UserCreateNestedOneWithoutStudentInput
    listOfOutputs?: OutputCreateNestedManyWithoutRelatedToStudentInput
    relatedtoClassroom?: ClassroomCreateNestedOneWithoutListOfStudentsInput
  }

  export type StudentUncheckedCreateInput = {
    userId: number
    lastname: string
    firstname: string
    middlename: string
    sex: string
    status?: $Enums.ClassroomStatus
    roomId?: number | null
    listOfOutputs?: OutputUncheckedCreateNestedManyWithoutRelatedToStudentInput
  }

  export type StudentUpdateInput = {
    lastname?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    middlename?: StringFieldUpdateOperationsInput | string
    sex?: StringFieldUpdateOperationsInput | string
    status?: EnumClassroomStatusFieldUpdateOperationsInput | $Enums.ClassroomStatus
    relatedToUser?: UserUpdateOneRequiredWithoutStudentNestedInput
    listOfOutputs?: OutputUpdateManyWithoutRelatedToStudentNestedInput
    relatedtoClassroom?: ClassroomUpdateOneWithoutListOfStudentsNestedInput
  }

  export type StudentUncheckedUpdateInput = {
    userId?: IntFieldUpdateOperationsInput | number
    lastname?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    middlename?: StringFieldUpdateOperationsInput | string
    sex?: StringFieldUpdateOperationsInput | string
    status?: EnumClassroomStatusFieldUpdateOperationsInput | $Enums.ClassroomStatus
    roomId?: NullableIntFieldUpdateOperationsInput | number | null
    listOfOutputs?: OutputUncheckedUpdateManyWithoutRelatedToStudentNestedInput
  }

  export type StudentCreateManyInput = {
    userId: number
    lastname: string
    firstname: string
    middlename: string
    sex: string
    status?: $Enums.ClassroomStatus
    roomId?: number | null
  }

  export type StudentUpdateManyMutationInput = {
    lastname?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    middlename?: StringFieldUpdateOperationsInput | string
    sex?: StringFieldUpdateOperationsInput | string
    status?: EnumClassroomStatusFieldUpdateOperationsInput | $Enums.ClassroomStatus
  }

  export type StudentUncheckedUpdateManyInput = {
    userId?: IntFieldUpdateOperationsInput | number
    lastname?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    middlename?: StringFieldUpdateOperationsInput | string
    sex?: StringFieldUpdateOperationsInput | string
    status?: EnumClassroomStatusFieldUpdateOperationsInput | $Enums.ClassroomStatus
    roomId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ClassroomCreateInput = {
    classname: string
    section: string
    subject: string
    room: string
    classcode?: string | null
    relatedToUser: UserCreateNestedOneWithoutListOfCreatedClassroomInput
    listOfAnnouncements?: AnnouncementCreateNestedManyWithoutRelatedToClassroomInput
    listOfActivity?: ActivityCreateNestedManyWithoutRelatedToClassroomInput
    listOfStudents?: StudentCreateNestedManyWithoutRelatedtoClassroomInput
    listOfOutputs?: OutputCreateNestedManyWithoutRelatedToClassroomInput
  }

  export type ClassroomUncheckedCreateInput = {
    id?: number
    classname: string
    section: string
    subject: string
    room: string
    classcode?: string | null
    userId: number
    listOfAnnouncements?: AnnouncementUncheckedCreateNestedManyWithoutRelatedToClassroomInput
    listOfActivity?: ActivityUncheckedCreateNestedManyWithoutRelatedToClassroomInput
    listOfStudents?: StudentUncheckedCreateNestedManyWithoutRelatedtoClassroomInput
    listOfOutputs?: OutputUncheckedCreateNestedManyWithoutRelatedToClassroomInput
  }

  export type ClassroomUpdateInput = {
    classname?: StringFieldUpdateOperationsInput | string
    section?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    room?: StringFieldUpdateOperationsInput | string
    classcode?: NullableStringFieldUpdateOperationsInput | string | null
    relatedToUser?: UserUpdateOneRequiredWithoutListOfCreatedClassroomNestedInput
    listOfAnnouncements?: AnnouncementUpdateManyWithoutRelatedToClassroomNestedInput
    listOfActivity?: ActivityUpdateManyWithoutRelatedToClassroomNestedInput
    listOfStudents?: StudentUpdateManyWithoutRelatedtoClassroomNestedInput
    listOfOutputs?: OutputUpdateManyWithoutRelatedToClassroomNestedInput
  }

  export type ClassroomUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    classname?: StringFieldUpdateOperationsInput | string
    section?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    room?: StringFieldUpdateOperationsInput | string
    classcode?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: IntFieldUpdateOperationsInput | number
    listOfAnnouncements?: AnnouncementUncheckedUpdateManyWithoutRelatedToClassroomNestedInput
    listOfActivity?: ActivityUncheckedUpdateManyWithoutRelatedToClassroomNestedInput
    listOfStudents?: StudentUncheckedUpdateManyWithoutRelatedtoClassroomNestedInput
    listOfOutputs?: OutputUncheckedUpdateManyWithoutRelatedToClassroomNestedInput
  }

  export type ClassroomCreateManyInput = {
    id?: number
    classname: string
    section: string
    subject: string
    room: string
    classcode?: string | null
    userId: number
  }

  export type ClassroomUpdateManyMutationInput = {
    classname?: StringFieldUpdateOperationsInput | string
    section?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    room?: StringFieldUpdateOperationsInput | string
    classcode?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ClassroomUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    classname?: StringFieldUpdateOperationsInput | string
    section?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    room?: StringFieldUpdateOperationsInput | string
    classcode?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type ActivityCreateInput = {
    title: string
    date: string
    time: string
    instruction?: string | null
    criteria?: FilesCreateNestedManyWithoutRelatedToActivityInput
    outputs?: OutputCreateNestedManyWithoutRelatedToActivityInput
    relatedToClassroom: ClassroomCreateNestedOneWithoutListOfActivityInput
  }

  export type ActivityUncheckedCreateInput = {
    id?: number
    title: string
    date: string
    time: string
    instruction?: string | null
    roomId: number
    criteria?: FilesUncheckedCreateNestedManyWithoutRelatedToActivityInput
    outputs?: OutputUncheckedCreateNestedManyWithoutRelatedToActivityInput
  }

  export type ActivityUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    time?: StringFieldUpdateOperationsInput | string
    instruction?: NullableStringFieldUpdateOperationsInput | string | null
    criteria?: FilesUpdateManyWithoutRelatedToActivityNestedInput
    outputs?: OutputUpdateManyWithoutRelatedToActivityNestedInput
    relatedToClassroom?: ClassroomUpdateOneRequiredWithoutListOfActivityNestedInput
  }

  export type ActivityUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    time?: StringFieldUpdateOperationsInput | string
    instruction?: NullableStringFieldUpdateOperationsInput | string | null
    roomId?: IntFieldUpdateOperationsInput | number
    criteria?: FilesUncheckedUpdateManyWithoutRelatedToActivityNestedInput
    outputs?: OutputUncheckedUpdateManyWithoutRelatedToActivityNestedInput
  }

  export type ActivityCreateManyInput = {
    id?: number
    title: string
    date: string
    time: string
    instruction?: string | null
    roomId: number
  }

  export type ActivityUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    time?: StringFieldUpdateOperationsInput | string
    instruction?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ActivityUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    time?: StringFieldUpdateOperationsInput | string
    instruction?: NullableStringFieldUpdateOperationsInput | string | null
    roomId?: IntFieldUpdateOperationsInput | number
  }

  export type AnnouncementCreateInput = {
    title: string
    description?: string | null
    createdAt?: Date | string | null
    relatedToClassroom: ClassroomCreateNestedOneWithoutListOfAnnouncementsInput
    listOfFiles?: FilesCreateNestedManyWithoutRelatedToAnnouncementInput
  }

  export type AnnouncementUncheckedCreateInput = {
    id?: number
    title: string
    description?: string | null
    roomId: number
    createdAt?: Date | string | null
    listOfFiles?: FilesUncheckedCreateNestedManyWithoutRelatedToAnnouncementInput
  }

  export type AnnouncementUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    relatedToClassroom?: ClassroomUpdateOneRequiredWithoutListOfAnnouncementsNestedInput
    listOfFiles?: FilesUpdateManyWithoutRelatedToAnnouncementNestedInput
  }

  export type AnnouncementUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    roomId?: IntFieldUpdateOperationsInput | number
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    listOfFiles?: FilesUncheckedUpdateManyWithoutRelatedToAnnouncementNestedInput
  }

  export type AnnouncementCreateManyInput = {
    id?: number
    title: string
    description?: string | null
    roomId: number
    createdAt?: Date | string | null
  }

  export type AnnouncementUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AnnouncementUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    roomId?: IntFieldUpdateOperationsInput | number
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type OutputCreateInput = {
    listOfFiles?: FilesCreateNestedManyWithoutRelatedToOutputInput
    relatedToStudent?: StudentCreateNestedOneWithoutListOfOutputsInput
    relatedToClassroom?: ClassroomCreateNestedOneWithoutListOfOutputsInput
    relatedToActivity?: ActivityCreateNestedOneWithoutOutputsInput
    relatedToFeedback?: FeedbackCreateNestedOneWithoutOutputInput
    relatedToScore?: ScoreCreateNestedOneWithoutOutputInput
  }

  export type OutputUncheckedCreateInput = {
    id?: number
    studentId?: number | null
    roomId?: number | null
    activityId?: number | null
    feedbackId?: number | null
    scoreId?: number | null
    listOfFiles?: FilesUncheckedCreateNestedManyWithoutRelatedToOutputInput
  }

  export type OutputUpdateInput = {
    listOfFiles?: FilesUpdateManyWithoutRelatedToOutputNestedInput
    relatedToStudent?: StudentUpdateOneWithoutListOfOutputsNestedInput
    relatedToClassroom?: ClassroomUpdateOneWithoutListOfOutputsNestedInput
    relatedToActivity?: ActivityUpdateOneWithoutOutputsNestedInput
    relatedToFeedback?: FeedbackUpdateOneWithoutOutputNestedInput
    relatedToScore?: ScoreUpdateOneWithoutOutputNestedInput
  }

  export type OutputUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    studentId?: NullableIntFieldUpdateOperationsInput | number | null
    roomId?: NullableIntFieldUpdateOperationsInput | number | null
    activityId?: NullableIntFieldUpdateOperationsInput | number | null
    feedbackId?: NullableIntFieldUpdateOperationsInput | number | null
    scoreId?: NullableIntFieldUpdateOperationsInput | number | null
    listOfFiles?: FilesUncheckedUpdateManyWithoutRelatedToOutputNestedInput
  }

  export type OutputCreateManyInput = {
    id?: number
    studentId?: number | null
    roomId?: number | null
    activityId?: number | null
    feedbackId?: number | null
    scoreId?: number | null
  }

  export type OutputUpdateManyMutationInput = {

  }

  export type OutputUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    studentId?: NullableIntFieldUpdateOperationsInput | number | null
    roomId?: NullableIntFieldUpdateOperationsInput | number | null
    activityId?: NullableIntFieldUpdateOperationsInput | number | null
    feedbackId?: NullableIntFieldUpdateOperationsInput | number | null
    scoreId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type FilesCreateInput = {
    filename: string
    mimetype: string
    fileSize: number
    folderPath?: string | null
    filePath?: string | null
    publicFileUrl?: string | null
    status?: $Enums.OutputStatus
    relatedToActivity?: ActivityCreateNestedOneWithoutCriteriaInput
    relatedToAnnouncement?: AnnouncementCreateNestedOneWithoutListOfFilesInput
    relatedToOutput?: OutputCreateNestedOneWithoutListOfFilesInput
  }

  export type FilesUncheckedCreateInput = {
    id?: number
    filename: string
    mimetype: string
    fileSize: number
    folderPath?: string | null
    filePath?: string | null
    activityId?: number | null
    announceId?: number | null
    outputId?: number | null
    publicFileUrl?: string | null
    status?: $Enums.OutputStatus
  }

  export type FilesUpdateInput = {
    filename?: StringFieldUpdateOperationsInput | string
    mimetype?: StringFieldUpdateOperationsInput | string
    fileSize?: IntFieldUpdateOperationsInput | number
    folderPath?: NullableStringFieldUpdateOperationsInput | string | null
    filePath?: NullableStringFieldUpdateOperationsInput | string | null
    publicFileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumOutputStatusFieldUpdateOperationsInput | $Enums.OutputStatus
    relatedToActivity?: ActivityUpdateOneWithoutCriteriaNestedInput
    relatedToAnnouncement?: AnnouncementUpdateOneWithoutListOfFilesNestedInput
    relatedToOutput?: OutputUpdateOneWithoutListOfFilesNestedInput
  }

  export type FilesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    filename?: StringFieldUpdateOperationsInput | string
    mimetype?: StringFieldUpdateOperationsInput | string
    fileSize?: IntFieldUpdateOperationsInput | number
    folderPath?: NullableStringFieldUpdateOperationsInput | string | null
    filePath?: NullableStringFieldUpdateOperationsInput | string | null
    activityId?: NullableIntFieldUpdateOperationsInput | number | null
    announceId?: NullableIntFieldUpdateOperationsInput | number | null
    outputId?: NullableIntFieldUpdateOperationsInput | number | null
    publicFileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumOutputStatusFieldUpdateOperationsInput | $Enums.OutputStatus
  }

  export type FilesCreateManyInput = {
    id?: number
    filename: string
    mimetype: string
    fileSize: number
    folderPath?: string | null
    filePath?: string | null
    activityId?: number | null
    announceId?: number | null
    outputId?: number | null
    publicFileUrl?: string | null
    status?: $Enums.OutputStatus
  }

  export type FilesUpdateManyMutationInput = {
    filename?: StringFieldUpdateOperationsInput | string
    mimetype?: StringFieldUpdateOperationsInput | string
    fileSize?: IntFieldUpdateOperationsInput | number
    folderPath?: NullableStringFieldUpdateOperationsInput | string | null
    filePath?: NullableStringFieldUpdateOperationsInput | string | null
    publicFileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumOutputStatusFieldUpdateOperationsInput | $Enums.OutputStatus
  }

  export type FilesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    filename?: StringFieldUpdateOperationsInput | string
    mimetype?: StringFieldUpdateOperationsInput | string
    fileSize?: IntFieldUpdateOperationsInput | number
    folderPath?: NullableStringFieldUpdateOperationsInput | string | null
    filePath?: NullableStringFieldUpdateOperationsInput | string | null
    activityId?: NullableIntFieldUpdateOperationsInput | number | null
    announceId?: NullableIntFieldUpdateOperationsInput | number | null
    outputId?: NullableIntFieldUpdateOperationsInput | number | null
    publicFileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumOutputStatusFieldUpdateOperationsInput | $Enums.OutputStatus
  }

  export type FeedbackCreateInput = {
    feedback?: string | null
    output?: OutputCreateNestedManyWithoutRelatedToFeedbackInput
  }

  export type FeedbackUncheckedCreateInput = {
    id?: number
    feedback?: string | null
    output?: OutputUncheckedCreateNestedManyWithoutRelatedToFeedbackInput
  }

  export type FeedbackUpdateInput = {
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    output?: OutputUpdateManyWithoutRelatedToFeedbackNestedInput
  }

  export type FeedbackUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    output?: OutputUncheckedUpdateManyWithoutRelatedToFeedbackNestedInput
  }

  export type FeedbackCreateManyInput = {
    id?: number
    feedback?: string | null
  }

  export type FeedbackUpdateManyMutationInput = {
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type FeedbackUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ScoreCreateInput = {
    score?: number | null
    output?: OutputCreateNestedManyWithoutRelatedToScoreInput
  }

  export type ScoreUncheckedCreateInput = {
    id?: number
    score?: number | null
    output?: OutputUncheckedCreateNestedManyWithoutRelatedToScoreInput
  }

  export type ScoreUpdateInput = {
    score?: NullableIntFieldUpdateOperationsInput | number | null
    output?: OutputUpdateManyWithoutRelatedToScoreNestedInput
  }

  export type ScoreUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    score?: NullableIntFieldUpdateOperationsInput | number | null
    output?: OutputUncheckedUpdateManyWithoutRelatedToScoreNestedInput
  }

  export type ScoreCreateManyInput = {
    id?: number
    score?: number | null
  }

  export type ScoreUpdateManyMutationInput = {
    score?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ScoreUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    score?: NullableIntFieldUpdateOperationsInput | number | null
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

  export type ClassroomListRelationFilter = {
    every?: ClassroomWhereInput
    some?: ClassroomWhereInput
    none?: ClassroomWhereInput
  }

  export type StudentNullableScalarRelationFilter = {
    is?: StudentWhereInput | null
    isNot?: StudentWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ClassroomOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
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

  export type EnumClassroomStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ClassroomStatus | EnumClassroomStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ClassroomStatus[] | ListEnumClassroomStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ClassroomStatus[] | ListEnumClassroomStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumClassroomStatusFilter<$PrismaModel> | $Enums.ClassroomStatus
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type OutputListRelationFilter = {
    every?: OutputWhereInput
    some?: OutputWhereInput
    none?: OutputWhereInput
  }

  export type ClassroomNullableScalarRelationFilter = {
    is?: ClassroomWhereInput | null
    isNot?: ClassroomWhereInput | null
  }

  export type OutputOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StudentCountOrderByAggregateInput = {
    userId?: SortOrder
    lastname?: SortOrder
    firstname?: SortOrder
    middlename?: SortOrder
    sex?: SortOrder
    status?: SortOrder
    roomId?: SortOrder
  }

  export type StudentAvgOrderByAggregateInput = {
    userId?: SortOrder
    roomId?: SortOrder
  }

  export type StudentMaxOrderByAggregateInput = {
    userId?: SortOrder
    lastname?: SortOrder
    firstname?: SortOrder
    middlename?: SortOrder
    sex?: SortOrder
    status?: SortOrder
    roomId?: SortOrder
  }

  export type StudentMinOrderByAggregateInput = {
    userId?: SortOrder
    lastname?: SortOrder
    firstname?: SortOrder
    middlename?: SortOrder
    sex?: SortOrder
    status?: SortOrder
    roomId?: SortOrder
  }

  export type StudentSumOrderByAggregateInput = {
    userId?: SortOrder
    roomId?: SortOrder
  }

  export type EnumClassroomStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ClassroomStatus | EnumClassroomStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ClassroomStatus[] | ListEnumClassroomStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ClassroomStatus[] | ListEnumClassroomStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumClassroomStatusWithAggregatesFilter<$PrismaModel> | $Enums.ClassroomStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumClassroomStatusFilter<$PrismaModel>
    _max?: NestedEnumClassroomStatusFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type AnnouncementListRelationFilter = {
    every?: AnnouncementWhereInput
    some?: AnnouncementWhereInput
    none?: AnnouncementWhereInput
  }

  export type ActivityListRelationFilter = {
    every?: ActivityWhereInput
    some?: ActivityWhereInput
    none?: ActivityWhereInput
  }

  export type StudentListRelationFilter = {
    every?: StudentWhereInput
    some?: StudentWhereInput
    none?: StudentWhereInput
  }

  export type AnnouncementOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ActivityOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StudentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ClassroomCountOrderByAggregateInput = {
    id?: SortOrder
    classname?: SortOrder
    section?: SortOrder
    subject?: SortOrder
    room?: SortOrder
    classcode?: SortOrder
    userId?: SortOrder
  }

  export type ClassroomAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type ClassroomMaxOrderByAggregateInput = {
    id?: SortOrder
    classname?: SortOrder
    section?: SortOrder
    subject?: SortOrder
    room?: SortOrder
    classcode?: SortOrder
    userId?: SortOrder
  }

  export type ClassroomMinOrderByAggregateInput = {
    id?: SortOrder
    classname?: SortOrder
    section?: SortOrder
    subject?: SortOrder
    room?: SortOrder
    classcode?: SortOrder
    userId?: SortOrder
  }

  export type ClassroomSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type FilesListRelationFilter = {
    every?: FilesWhereInput
    some?: FilesWhereInput
    none?: FilesWhereInput
  }

  export type ClassroomScalarRelationFilter = {
    is?: ClassroomWhereInput
    isNot?: ClassroomWhereInput
  }

  export type FilesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ActivityCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    date?: SortOrder
    time?: SortOrder
    instruction?: SortOrder
    roomId?: SortOrder
  }

  export type ActivityAvgOrderByAggregateInput = {
    id?: SortOrder
    roomId?: SortOrder
  }

  export type ActivityMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    date?: SortOrder
    time?: SortOrder
    instruction?: SortOrder
    roomId?: SortOrder
  }

  export type ActivityMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    date?: SortOrder
    time?: SortOrder
    instruction?: SortOrder
    roomId?: SortOrder
  }

  export type ActivitySumOrderByAggregateInput = {
    id?: SortOrder
    roomId?: SortOrder
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

  export type AnnouncementCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    roomId?: SortOrder
    createdAt?: SortOrder
  }

  export type AnnouncementAvgOrderByAggregateInput = {
    id?: SortOrder
    roomId?: SortOrder
  }

  export type AnnouncementMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    roomId?: SortOrder
    createdAt?: SortOrder
  }

  export type AnnouncementMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    roomId?: SortOrder
    createdAt?: SortOrder
  }

  export type AnnouncementSumOrderByAggregateInput = {
    id?: SortOrder
    roomId?: SortOrder
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

  export type ActivityNullableScalarRelationFilter = {
    is?: ActivityWhereInput | null
    isNot?: ActivityWhereInput | null
  }

  export type FeedbackNullableScalarRelationFilter = {
    is?: FeedbackWhereInput | null
    isNot?: FeedbackWhereInput | null
  }

  export type ScoreNullableScalarRelationFilter = {
    is?: ScoreWhereInput | null
    isNot?: ScoreWhereInput | null
  }

  export type OutputRoomId_activityId_studentIdCompoundUniqueInput = {
    roomId: number
    activityId: number
    studentId: number
  }

  export type OutputCountOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    roomId?: SortOrder
    activityId?: SortOrder
    feedbackId?: SortOrder
    scoreId?: SortOrder
  }

  export type OutputAvgOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    roomId?: SortOrder
    activityId?: SortOrder
    feedbackId?: SortOrder
    scoreId?: SortOrder
  }

  export type OutputMaxOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    roomId?: SortOrder
    activityId?: SortOrder
    feedbackId?: SortOrder
    scoreId?: SortOrder
  }

  export type OutputMinOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    roomId?: SortOrder
    activityId?: SortOrder
    feedbackId?: SortOrder
    scoreId?: SortOrder
  }

  export type OutputSumOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    roomId?: SortOrder
    activityId?: SortOrder
    feedbackId?: SortOrder
    scoreId?: SortOrder
  }

  export type EnumOutputStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.OutputStatus | EnumOutputStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OutputStatus[] | ListEnumOutputStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OutputStatus[] | ListEnumOutputStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOutputStatusFilter<$PrismaModel> | $Enums.OutputStatus
  }

  export type AnnouncementNullableScalarRelationFilter = {
    is?: AnnouncementWhereInput | null
    isNot?: AnnouncementWhereInput | null
  }

  export type OutputNullableScalarRelationFilter = {
    is?: OutputWhereInput | null
    isNot?: OutputWhereInput | null
  }

  export type FilesCountOrderByAggregateInput = {
    id?: SortOrder
    filename?: SortOrder
    mimetype?: SortOrder
    fileSize?: SortOrder
    folderPath?: SortOrder
    filePath?: SortOrder
    activityId?: SortOrder
    announceId?: SortOrder
    outputId?: SortOrder
    publicFileUrl?: SortOrder
    status?: SortOrder
  }

  export type FilesAvgOrderByAggregateInput = {
    id?: SortOrder
    fileSize?: SortOrder
    activityId?: SortOrder
    announceId?: SortOrder
    outputId?: SortOrder
  }

  export type FilesMaxOrderByAggregateInput = {
    id?: SortOrder
    filename?: SortOrder
    mimetype?: SortOrder
    fileSize?: SortOrder
    folderPath?: SortOrder
    filePath?: SortOrder
    activityId?: SortOrder
    announceId?: SortOrder
    outputId?: SortOrder
    publicFileUrl?: SortOrder
    status?: SortOrder
  }

  export type FilesMinOrderByAggregateInput = {
    id?: SortOrder
    filename?: SortOrder
    mimetype?: SortOrder
    fileSize?: SortOrder
    folderPath?: SortOrder
    filePath?: SortOrder
    activityId?: SortOrder
    announceId?: SortOrder
    outputId?: SortOrder
    publicFileUrl?: SortOrder
    status?: SortOrder
  }

  export type FilesSumOrderByAggregateInput = {
    id?: SortOrder
    fileSize?: SortOrder
    activityId?: SortOrder
    announceId?: SortOrder
    outputId?: SortOrder
  }

  export type EnumOutputStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OutputStatus | EnumOutputStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OutputStatus[] | ListEnumOutputStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OutputStatus[] | ListEnumOutputStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOutputStatusWithAggregatesFilter<$PrismaModel> | $Enums.OutputStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOutputStatusFilter<$PrismaModel>
    _max?: NestedEnumOutputStatusFilter<$PrismaModel>
  }

  export type FeedbackCountOrderByAggregateInput = {
    id?: SortOrder
    feedback?: SortOrder
  }

  export type FeedbackAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type FeedbackMaxOrderByAggregateInput = {
    id?: SortOrder
    feedback?: SortOrder
  }

  export type FeedbackMinOrderByAggregateInput = {
    id?: SortOrder
    feedback?: SortOrder
  }

  export type FeedbackSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ScoreCountOrderByAggregateInput = {
    id?: SortOrder
    score?: SortOrder
  }

  export type ScoreAvgOrderByAggregateInput = {
    id?: SortOrder
    score?: SortOrder
  }

  export type ScoreMaxOrderByAggregateInput = {
    id?: SortOrder
    score?: SortOrder
  }

  export type ScoreMinOrderByAggregateInput = {
    id?: SortOrder
    score?: SortOrder
  }

  export type ScoreSumOrderByAggregateInput = {
    id?: SortOrder
    score?: SortOrder
  }

  export type ClassroomCreateNestedManyWithoutRelatedToUserInput = {
    create?: XOR<ClassroomCreateWithoutRelatedToUserInput, ClassroomUncheckedCreateWithoutRelatedToUserInput> | ClassroomCreateWithoutRelatedToUserInput[] | ClassroomUncheckedCreateWithoutRelatedToUserInput[]
    connectOrCreate?: ClassroomCreateOrConnectWithoutRelatedToUserInput | ClassroomCreateOrConnectWithoutRelatedToUserInput[]
    createMany?: ClassroomCreateManyRelatedToUserInputEnvelope
    connect?: ClassroomWhereUniqueInput | ClassroomWhereUniqueInput[]
  }

  export type StudentCreateNestedOneWithoutRelatedToUserInput = {
    create?: XOR<StudentCreateWithoutRelatedToUserInput, StudentUncheckedCreateWithoutRelatedToUserInput>
    connectOrCreate?: StudentCreateOrConnectWithoutRelatedToUserInput
    connect?: StudentWhereUniqueInput
  }

  export type ClassroomUncheckedCreateNestedManyWithoutRelatedToUserInput = {
    create?: XOR<ClassroomCreateWithoutRelatedToUserInput, ClassroomUncheckedCreateWithoutRelatedToUserInput> | ClassroomCreateWithoutRelatedToUserInput[] | ClassroomUncheckedCreateWithoutRelatedToUserInput[]
    connectOrCreate?: ClassroomCreateOrConnectWithoutRelatedToUserInput | ClassroomCreateOrConnectWithoutRelatedToUserInput[]
    createMany?: ClassroomCreateManyRelatedToUserInputEnvelope
    connect?: ClassroomWhereUniqueInput | ClassroomWhereUniqueInput[]
  }

  export type StudentUncheckedCreateNestedOneWithoutRelatedToUserInput = {
    create?: XOR<StudentCreateWithoutRelatedToUserInput, StudentUncheckedCreateWithoutRelatedToUserInput>
    connectOrCreate?: StudentCreateOrConnectWithoutRelatedToUserInput
    connect?: StudentWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type ClassroomUpdateManyWithoutRelatedToUserNestedInput = {
    create?: XOR<ClassroomCreateWithoutRelatedToUserInput, ClassroomUncheckedCreateWithoutRelatedToUserInput> | ClassroomCreateWithoutRelatedToUserInput[] | ClassroomUncheckedCreateWithoutRelatedToUserInput[]
    connectOrCreate?: ClassroomCreateOrConnectWithoutRelatedToUserInput | ClassroomCreateOrConnectWithoutRelatedToUserInput[]
    upsert?: ClassroomUpsertWithWhereUniqueWithoutRelatedToUserInput | ClassroomUpsertWithWhereUniqueWithoutRelatedToUserInput[]
    createMany?: ClassroomCreateManyRelatedToUserInputEnvelope
    set?: ClassroomWhereUniqueInput | ClassroomWhereUniqueInput[]
    disconnect?: ClassroomWhereUniqueInput | ClassroomWhereUniqueInput[]
    delete?: ClassroomWhereUniqueInput | ClassroomWhereUniqueInput[]
    connect?: ClassroomWhereUniqueInput | ClassroomWhereUniqueInput[]
    update?: ClassroomUpdateWithWhereUniqueWithoutRelatedToUserInput | ClassroomUpdateWithWhereUniqueWithoutRelatedToUserInput[]
    updateMany?: ClassroomUpdateManyWithWhereWithoutRelatedToUserInput | ClassroomUpdateManyWithWhereWithoutRelatedToUserInput[]
    deleteMany?: ClassroomScalarWhereInput | ClassroomScalarWhereInput[]
  }

  export type StudentUpdateOneWithoutRelatedToUserNestedInput = {
    create?: XOR<StudentCreateWithoutRelatedToUserInput, StudentUncheckedCreateWithoutRelatedToUserInput>
    connectOrCreate?: StudentCreateOrConnectWithoutRelatedToUserInput
    upsert?: StudentUpsertWithoutRelatedToUserInput
    disconnect?: StudentWhereInput | boolean
    delete?: StudentWhereInput | boolean
    connect?: StudentWhereUniqueInput
    update?: XOR<XOR<StudentUpdateToOneWithWhereWithoutRelatedToUserInput, StudentUpdateWithoutRelatedToUserInput>, StudentUncheckedUpdateWithoutRelatedToUserInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ClassroomUncheckedUpdateManyWithoutRelatedToUserNestedInput = {
    create?: XOR<ClassroomCreateWithoutRelatedToUserInput, ClassroomUncheckedCreateWithoutRelatedToUserInput> | ClassroomCreateWithoutRelatedToUserInput[] | ClassroomUncheckedCreateWithoutRelatedToUserInput[]
    connectOrCreate?: ClassroomCreateOrConnectWithoutRelatedToUserInput | ClassroomCreateOrConnectWithoutRelatedToUserInput[]
    upsert?: ClassroomUpsertWithWhereUniqueWithoutRelatedToUserInput | ClassroomUpsertWithWhereUniqueWithoutRelatedToUserInput[]
    createMany?: ClassroomCreateManyRelatedToUserInputEnvelope
    set?: ClassroomWhereUniqueInput | ClassroomWhereUniqueInput[]
    disconnect?: ClassroomWhereUniqueInput | ClassroomWhereUniqueInput[]
    delete?: ClassroomWhereUniqueInput | ClassroomWhereUniqueInput[]
    connect?: ClassroomWhereUniqueInput | ClassroomWhereUniqueInput[]
    update?: ClassroomUpdateWithWhereUniqueWithoutRelatedToUserInput | ClassroomUpdateWithWhereUniqueWithoutRelatedToUserInput[]
    updateMany?: ClassroomUpdateManyWithWhereWithoutRelatedToUserInput | ClassroomUpdateManyWithWhereWithoutRelatedToUserInput[]
    deleteMany?: ClassroomScalarWhereInput | ClassroomScalarWhereInput[]
  }

  export type StudentUncheckedUpdateOneWithoutRelatedToUserNestedInput = {
    create?: XOR<StudentCreateWithoutRelatedToUserInput, StudentUncheckedCreateWithoutRelatedToUserInput>
    connectOrCreate?: StudentCreateOrConnectWithoutRelatedToUserInput
    upsert?: StudentUpsertWithoutRelatedToUserInput
    disconnect?: StudentWhereInput | boolean
    delete?: StudentWhereInput | boolean
    connect?: StudentWhereUniqueInput
    update?: XOR<XOR<StudentUpdateToOneWithWhereWithoutRelatedToUserInput, StudentUpdateWithoutRelatedToUserInput>, StudentUncheckedUpdateWithoutRelatedToUserInput>
  }

  export type UserCreateNestedOneWithoutStudentInput = {
    create?: XOR<UserCreateWithoutStudentInput, UserUncheckedCreateWithoutStudentInput>
    connectOrCreate?: UserCreateOrConnectWithoutStudentInput
    connect?: UserWhereUniqueInput
  }

  export type OutputCreateNestedManyWithoutRelatedToStudentInput = {
    create?: XOR<OutputCreateWithoutRelatedToStudentInput, OutputUncheckedCreateWithoutRelatedToStudentInput> | OutputCreateWithoutRelatedToStudentInput[] | OutputUncheckedCreateWithoutRelatedToStudentInput[]
    connectOrCreate?: OutputCreateOrConnectWithoutRelatedToStudentInput | OutputCreateOrConnectWithoutRelatedToStudentInput[]
    createMany?: OutputCreateManyRelatedToStudentInputEnvelope
    connect?: OutputWhereUniqueInput | OutputWhereUniqueInput[]
  }

  export type ClassroomCreateNestedOneWithoutListOfStudentsInput = {
    create?: XOR<ClassroomCreateWithoutListOfStudentsInput, ClassroomUncheckedCreateWithoutListOfStudentsInput>
    connectOrCreate?: ClassroomCreateOrConnectWithoutListOfStudentsInput
    connect?: ClassroomWhereUniqueInput
  }

  export type OutputUncheckedCreateNestedManyWithoutRelatedToStudentInput = {
    create?: XOR<OutputCreateWithoutRelatedToStudentInput, OutputUncheckedCreateWithoutRelatedToStudentInput> | OutputCreateWithoutRelatedToStudentInput[] | OutputUncheckedCreateWithoutRelatedToStudentInput[]
    connectOrCreate?: OutputCreateOrConnectWithoutRelatedToStudentInput | OutputCreateOrConnectWithoutRelatedToStudentInput[]
    createMany?: OutputCreateManyRelatedToStudentInputEnvelope
    connect?: OutputWhereUniqueInput | OutputWhereUniqueInput[]
  }

  export type EnumClassroomStatusFieldUpdateOperationsInput = {
    set?: $Enums.ClassroomStatus
  }

  export type UserUpdateOneRequiredWithoutStudentNestedInput = {
    create?: XOR<UserCreateWithoutStudentInput, UserUncheckedCreateWithoutStudentInput>
    connectOrCreate?: UserCreateOrConnectWithoutStudentInput
    upsert?: UserUpsertWithoutStudentInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutStudentInput, UserUpdateWithoutStudentInput>, UserUncheckedUpdateWithoutStudentInput>
  }

  export type OutputUpdateManyWithoutRelatedToStudentNestedInput = {
    create?: XOR<OutputCreateWithoutRelatedToStudentInput, OutputUncheckedCreateWithoutRelatedToStudentInput> | OutputCreateWithoutRelatedToStudentInput[] | OutputUncheckedCreateWithoutRelatedToStudentInput[]
    connectOrCreate?: OutputCreateOrConnectWithoutRelatedToStudentInput | OutputCreateOrConnectWithoutRelatedToStudentInput[]
    upsert?: OutputUpsertWithWhereUniqueWithoutRelatedToStudentInput | OutputUpsertWithWhereUniqueWithoutRelatedToStudentInput[]
    createMany?: OutputCreateManyRelatedToStudentInputEnvelope
    set?: OutputWhereUniqueInput | OutputWhereUniqueInput[]
    disconnect?: OutputWhereUniqueInput | OutputWhereUniqueInput[]
    delete?: OutputWhereUniqueInput | OutputWhereUniqueInput[]
    connect?: OutputWhereUniqueInput | OutputWhereUniqueInput[]
    update?: OutputUpdateWithWhereUniqueWithoutRelatedToStudentInput | OutputUpdateWithWhereUniqueWithoutRelatedToStudentInput[]
    updateMany?: OutputUpdateManyWithWhereWithoutRelatedToStudentInput | OutputUpdateManyWithWhereWithoutRelatedToStudentInput[]
    deleteMany?: OutputScalarWhereInput | OutputScalarWhereInput[]
  }

  export type ClassroomUpdateOneWithoutListOfStudentsNestedInput = {
    create?: XOR<ClassroomCreateWithoutListOfStudentsInput, ClassroomUncheckedCreateWithoutListOfStudentsInput>
    connectOrCreate?: ClassroomCreateOrConnectWithoutListOfStudentsInput
    upsert?: ClassroomUpsertWithoutListOfStudentsInput
    disconnect?: ClassroomWhereInput | boolean
    delete?: ClassroomWhereInput | boolean
    connect?: ClassroomWhereUniqueInput
    update?: XOR<XOR<ClassroomUpdateToOneWithWhereWithoutListOfStudentsInput, ClassroomUpdateWithoutListOfStudentsInput>, ClassroomUncheckedUpdateWithoutListOfStudentsInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type OutputUncheckedUpdateManyWithoutRelatedToStudentNestedInput = {
    create?: XOR<OutputCreateWithoutRelatedToStudentInput, OutputUncheckedCreateWithoutRelatedToStudentInput> | OutputCreateWithoutRelatedToStudentInput[] | OutputUncheckedCreateWithoutRelatedToStudentInput[]
    connectOrCreate?: OutputCreateOrConnectWithoutRelatedToStudentInput | OutputCreateOrConnectWithoutRelatedToStudentInput[]
    upsert?: OutputUpsertWithWhereUniqueWithoutRelatedToStudentInput | OutputUpsertWithWhereUniqueWithoutRelatedToStudentInput[]
    createMany?: OutputCreateManyRelatedToStudentInputEnvelope
    set?: OutputWhereUniqueInput | OutputWhereUniqueInput[]
    disconnect?: OutputWhereUniqueInput | OutputWhereUniqueInput[]
    delete?: OutputWhereUniqueInput | OutputWhereUniqueInput[]
    connect?: OutputWhereUniqueInput | OutputWhereUniqueInput[]
    update?: OutputUpdateWithWhereUniqueWithoutRelatedToStudentInput | OutputUpdateWithWhereUniqueWithoutRelatedToStudentInput[]
    updateMany?: OutputUpdateManyWithWhereWithoutRelatedToStudentInput | OutputUpdateManyWithWhereWithoutRelatedToStudentInput[]
    deleteMany?: OutputScalarWhereInput | OutputScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutListOfCreatedClassroomInput = {
    create?: XOR<UserCreateWithoutListOfCreatedClassroomInput, UserUncheckedCreateWithoutListOfCreatedClassroomInput>
    connectOrCreate?: UserCreateOrConnectWithoutListOfCreatedClassroomInput
    connect?: UserWhereUniqueInput
  }

  export type AnnouncementCreateNestedManyWithoutRelatedToClassroomInput = {
    create?: XOR<AnnouncementCreateWithoutRelatedToClassroomInput, AnnouncementUncheckedCreateWithoutRelatedToClassroomInput> | AnnouncementCreateWithoutRelatedToClassroomInput[] | AnnouncementUncheckedCreateWithoutRelatedToClassroomInput[]
    connectOrCreate?: AnnouncementCreateOrConnectWithoutRelatedToClassroomInput | AnnouncementCreateOrConnectWithoutRelatedToClassroomInput[]
    createMany?: AnnouncementCreateManyRelatedToClassroomInputEnvelope
    connect?: AnnouncementWhereUniqueInput | AnnouncementWhereUniqueInput[]
  }

  export type ActivityCreateNestedManyWithoutRelatedToClassroomInput = {
    create?: XOR<ActivityCreateWithoutRelatedToClassroomInput, ActivityUncheckedCreateWithoutRelatedToClassroomInput> | ActivityCreateWithoutRelatedToClassroomInput[] | ActivityUncheckedCreateWithoutRelatedToClassroomInput[]
    connectOrCreate?: ActivityCreateOrConnectWithoutRelatedToClassroomInput | ActivityCreateOrConnectWithoutRelatedToClassroomInput[]
    createMany?: ActivityCreateManyRelatedToClassroomInputEnvelope
    connect?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
  }

  export type StudentCreateNestedManyWithoutRelatedtoClassroomInput = {
    create?: XOR<StudentCreateWithoutRelatedtoClassroomInput, StudentUncheckedCreateWithoutRelatedtoClassroomInput> | StudentCreateWithoutRelatedtoClassroomInput[] | StudentUncheckedCreateWithoutRelatedtoClassroomInput[]
    connectOrCreate?: StudentCreateOrConnectWithoutRelatedtoClassroomInput | StudentCreateOrConnectWithoutRelatedtoClassroomInput[]
    createMany?: StudentCreateManyRelatedtoClassroomInputEnvelope
    connect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
  }

  export type OutputCreateNestedManyWithoutRelatedToClassroomInput = {
    create?: XOR<OutputCreateWithoutRelatedToClassroomInput, OutputUncheckedCreateWithoutRelatedToClassroomInput> | OutputCreateWithoutRelatedToClassroomInput[] | OutputUncheckedCreateWithoutRelatedToClassroomInput[]
    connectOrCreate?: OutputCreateOrConnectWithoutRelatedToClassroomInput | OutputCreateOrConnectWithoutRelatedToClassroomInput[]
    createMany?: OutputCreateManyRelatedToClassroomInputEnvelope
    connect?: OutputWhereUniqueInput | OutputWhereUniqueInput[]
  }

  export type AnnouncementUncheckedCreateNestedManyWithoutRelatedToClassroomInput = {
    create?: XOR<AnnouncementCreateWithoutRelatedToClassroomInput, AnnouncementUncheckedCreateWithoutRelatedToClassroomInput> | AnnouncementCreateWithoutRelatedToClassroomInput[] | AnnouncementUncheckedCreateWithoutRelatedToClassroomInput[]
    connectOrCreate?: AnnouncementCreateOrConnectWithoutRelatedToClassroomInput | AnnouncementCreateOrConnectWithoutRelatedToClassroomInput[]
    createMany?: AnnouncementCreateManyRelatedToClassroomInputEnvelope
    connect?: AnnouncementWhereUniqueInput | AnnouncementWhereUniqueInput[]
  }

  export type ActivityUncheckedCreateNestedManyWithoutRelatedToClassroomInput = {
    create?: XOR<ActivityCreateWithoutRelatedToClassroomInput, ActivityUncheckedCreateWithoutRelatedToClassroomInput> | ActivityCreateWithoutRelatedToClassroomInput[] | ActivityUncheckedCreateWithoutRelatedToClassroomInput[]
    connectOrCreate?: ActivityCreateOrConnectWithoutRelatedToClassroomInput | ActivityCreateOrConnectWithoutRelatedToClassroomInput[]
    createMany?: ActivityCreateManyRelatedToClassroomInputEnvelope
    connect?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
  }

  export type StudentUncheckedCreateNestedManyWithoutRelatedtoClassroomInput = {
    create?: XOR<StudentCreateWithoutRelatedtoClassroomInput, StudentUncheckedCreateWithoutRelatedtoClassroomInput> | StudentCreateWithoutRelatedtoClassroomInput[] | StudentUncheckedCreateWithoutRelatedtoClassroomInput[]
    connectOrCreate?: StudentCreateOrConnectWithoutRelatedtoClassroomInput | StudentCreateOrConnectWithoutRelatedtoClassroomInput[]
    createMany?: StudentCreateManyRelatedtoClassroomInputEnvelope
    connect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
  }

  export type OutputUncheckedCreateNestedManyWithoutRelatedToClassroomInput = {
    create?: XOR<OutputCreateWithoutRelatedToClassroomInput, OutputUncheckedCreateWithoutRelatedToClassroomInput> | OutputCreateWithoutRelatedToClassroomInput[] | OutputUncheckedCreateWithoutRelatedToClassroomInput[]
    connectOrCreate?: OutputCreateOrConnectWithoutRelatedToClassroomInput | OutputCreateOrConnectWithoutRelatedToClassroomInput[]
    createMany?: OutputCreateManyRelatedToClassroomInputEnvelope
    connect?: OutputWhereUniqueInput | OutputWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutListOfCreatedClassroomNestedInput = {
    create?: XOR<UserCreateWithoutListOfCreatedClassroomInput, UserUncheckedCreateWithoutListOfCreatedClassroomInput>
    connectOrCreate?: UserCreateOrConnectWithoutListOfCreatedClassroomInput
    upsert?: UserUpsertWithoutListOfCreatedClassroomInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutListOfCreatedClassroomInput, UserUpdateWithoutListOfCreatedClassroomInput>, UserUncheckedUpdateWithoutListOfCreatedClassroomInput>
  }

  export type AnnouncementUpdateManyWithoutRelatedToClassroomNestedInput = {
    create?: XOR<AnnouncementCreateWithoutRelatedToClassroomInput, AnnouncementUncheckedCreateWithoutRelatedToClassroomInput> | AnnouncementCreateWithoutRelatedToClassroomInput[] | AnnouncementUncheckedCreateWithoutRelatedToClassroomInput[]
    connectOrCreate?: AnnouncementCreateOrConnectWithoutRelatedToClassroomInput | AnnouncementCreateOrConnectWithoutRelatedToClassroomInput[]
    upsert?: AnnouncementUpsertWithWhereUniqueWithoutRelatedToClassroomInput | AnnouncementUpsertWithWhereUniqueWithoutRelatedToClassroomInput[]
    createMany?: AnnouncementCreateManyRelatedToClassroomInputEnvelope
    set?: AnnouncementWhereUniqueInput | AnnouncementWhereUniqueInput[]
    disconnect?: AnnouncementWhereUniqueInput | AnnouncementWhereUniqueInput[]
    delete?: AnnouncementWhereUniqueInput | AnnouncementWhereUniqueInput[]
    connect?: AnnouncementWhereUniqueInput | AnnouncementWhereUniqueInput[]
    update?: AnnouncementUpdateWithWhereUniqueWithoutRelatedToClassroomInput | AnnouncementUpdateWithWhereUniqueWithoutRelatedToClassroomInput[]
    updateMany?: AnnouncementUpdateManyWithWhereWithoutRelatedToClassroomInput | AnnouncementUpdateManyWithWhereWithoutRelatedToClassroomInput[]
    deleteMany?: AnnouncementScalarWhereInput | AnnouncementScalarWhereInput[]
  }

  export type ActivityUpdateManyWithoutRelatedToClassroomNestedInput = {
    create?: XOR<ActivityCreateWithoutRelatedToClassroomInput, ActivityUncheckedCreateWithoutRelatedToClassroomInput> | ActivityCreateWithoutRelatedToClassroomInput[] | ActivityUncheckedCreateWithoutRelatedToClassroomInput[]
    connectOrCreate?: ActivityCreateOrConnectWithoutRelatedToClassroomInput | ActivityCreateOrConnectWithoutRelatedToClassroomInput[]
    upsert?: ActivityUpsertWithWhereUniqueWithoutRelatedToClassroomInput | ActivityUpsertWithWhereUniqueWithoutRelatedToClassroomInput[]
    createMany?: ActivityCreateManyRelatedToClassroomInputEnvelope
    set?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    disconnect?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    delete?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    connect?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    update?: ActivityUpdateWithWhereUniqueWithoutRelatedToClassroomInput | ActivityUpdateWithWhereUniqueWithoutRelatedToClassroomInput[]
    updateMany?: ActivityUpdateManyWithWhereWithoutRelatedToClassroomInput | ActivityUpdateManyWithWhereWithoutRelatedToClassroomInput[]
    deleteMany?: ActivityScalarWhereInput | ActivityScalarWhereInput[]
  }

  export type StudentUpdateManyWithoutRelatedtoClassroomNestedInput = {
    create?: XOR<StudentCreateWithoutRelatedtoClassroomInput, StudentUncheckedCreateWithoutRelatedtoClassroomInput> | StudentCreateWithoutRelatedtoClassroomInput[] | StudentUncheckedCreateWithoutRelatedtoClassroomInput[]
    connectOrCreate?: StudentCreateOrConnectWithoutRelatedtoClassroomInput | StudentCreateOrConnectWithoutRelatedtoClassroomInput[]
    upsert?: StudentUpsertWithWhereUniqueWithoutRelatedtoClassroomInput | StudentUpsertWithWhereUniqueWithoutRelatedtoClassroomInput[]
    createMany?: StudentCreateManyRelatedtoClassroomInputEnvelope
    set?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    disconnect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    delete?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    connect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    update?: StudentUpdateWithWhereUniqueWithoutRelatedtoClassroomInput | StudentUpdateWithWhereUniqueWithoutRelatedtoClassroomInput[]
    updateMany?: StudentUpdateManyWithWhereWithoutRelatedtoClassroomInput | StudentUpdateManyWithWhereWithoutRelatedtoClassroomInput[]
    deleteMany?: StudentScalarWhereInput | StudentScalarWhereInput[]
  }

  export type OutputUpdateManyWithoutRelatedToClassroomNestedInput = {
    create?: XOR<OutputCreateWithoutRelatedToClassroomInput, OutputUncheckedCreateWithoutRelatedToClassroomInput> | OutputCreateWithoutRelatedToClassroomInput[] | OutputUncheckedCreateWithoutRelatedToClassroomInput[]
    connectOrCreate?: OutputCreateOrConnectWithoutRelatedToClassroomInput | OutputCreateOrConnectWithoutRelatedToClassroomInput[]
    upsert?: OutputUpsertWithWhereUniqueWithoutRelatedToClassroomInput | OutputUpsertWithWhereUniqueWithoutRelatedToClassroomInput[]
    createMany?: OutputCreateManyRelatedToClassroomInputEnvelope
    set?: OutputWhereUniqueInput | OutputWhereUniqueInput[]
    disconnect?: OutputWhereUniqueInput | OutputWhereUniqueInput[]
    delete?: OutputWhereUniqueInput | OutputWhereUniqueInput[]
    connect?: OutputWhereUniqueInput | OutputWhereUniqueInput[]
    update?: OutputUpdateWithWhereUniqueWithoutRelatedToClassroomInput | OutputUpdateWithWhereUniqueWithoutRelatedToClassroomInput[]
    updateMany?: OutputUpdateManyWithWhereWithoutRelatedToClassroomInput | OutputUpdateManyWithWhereWithoutRelatedToClassroomInput[]
    deleteMany?: OutputScalarWhereInput | OutputScalarWhereInput[]
  }

  export type AnnouncementUncheckedUpdateManyWithoutRelatedToClassroomNestedInput = {
    create?: XOR<AnnouncementCreateWithoutRelatedToClassroomInput, AnnouncementUncheckedCreateWithoutRelatedToClassroomInput> | AnnouncementCreateWithoutRelatedToClassroomInput[] | AnnouncementUncheckedCreateWithoutRelatedToClassroomInput[]
    connectOrCreate?: AnnouncementCreateOrConnectWithoutRelatedToClassroomInput | AnnouncementCreateOrConnectWithoutRelatedToClassroomInput[]
    upsert?: AnnouncementUpsertWithWhereUniqueWithoutRelatedToClassroomInput | AnnouncementUpsertWithWhereUniqueWithoutRelatedToClassroomInput[]
    createMany?: AnnouncementCreateManyRelatedToClassroomInputEnvelope
    set?: AnnouncementWhereUniqueInput | AnnouncementWhereUniqueInput[]
    disconnect?: AnnouncementWhereUniqueInput | AnnouncementWhereUniqueInput[]
    delete?: AnnouncementWhereUniqueInput | AnnouncementWhereUniqueInput[]
    connect?: AnnouncementWhereUniqueInput | AnnouncementWhereUniqueInput[]
    update?: AnnouncementUpdateWithWhereUniqueWithoutRelatedToClassroomInput | AnnouncementUpdateWithWhereUniqueWithoutRelatedToClassroomInput[]
    updateMany?: AnnouncementUpdateManyWithWhereWithoutRelatedToClassroomInput | AnnouncementUpdateManyWithWhereWithoutRelatedToClassroomInput[]
    deleteMany?: AnnouncementScalarWhereInput | AnnouncementScalarWhereInput[]
  }

  export type ActivityUncheckedUpdateManyWithoutRelatedToClassroomNestedInput = {
    create?: XOR<ActivityCreateWithoutRelatedToClassroomInput, ActivityUncheckedCreateWithoutRelatedToClassroomInput> | ActivityCreateWithoutRelatedToClassroomInput[] | ActivityUncheckedCreateWithoutRelatedToClassroomInput[]
    connectOrCreate?: ActivityCreateOrConnectWithoutRelatedToClassroomInput | ActivityCreateOrConnectWithoutRelatedToClassroomInput[]
    upsert?: ActivityUpsertWithWhereUniqueWithoutRelatedToClassroomInput | ActivityUpsertWithWhereUniqueWithoutRelatedToClassroomInput[]
    createMany?: ActivityCreateManyRelatedToClassroomInputEnvelope
    set?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    disconnect?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    delete?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    connect?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    update?: ActivityUpdateWithWhereUniqueWithoutRelatedToClassroomInput | ActivityUpdateWithWhereUniqueWithoutRelatedToClassroomInput[]
    updateMany?: ActivityUpdateManyWithWhereWithoutRelatedToClassroomInput | ActivityUpdateManyWithWhereWithoutRelatedToClassroomInput[]
    deleteMany?: ActivityScalarWhereInput | ActivityScalarWhereInput[]
  }

  export type StudentUncheckedUpdateManyWithoutRelatedtoClassroomNestedInput = {
    create?: XOR<StudentCreateWithoutRelatedtoClassroomInput, StudentUncheckedCreateWithoutRelatedtoClassroomInput> | StudentCreateWithoutRelatedtoClassroomInput[] | StudentUncheckedCreateWithoutRelatedtoClassroomInput[]
    connectOrCreate?: StudentCreateOrConnectWithoutRelatedtoClassroomInput | StudentCreateOrConnectWithoutRelatedtoClassroomInput[]
    upsert?: StudentUpsertWithWhereUniqueWithoutRelatedtoClassroomInput | StudentUpsertWithWhereUniqueWithoutRelatedtoClassroomInput[]
    createMany?: StudentCreateManyRelatedtoClassroomInputEnvelope
    set?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    disconnect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    delete?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    connect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    update?: StudentUpdateWithWhereUniqueWithoutRelatedtoClassroomInput | StudentUpdateWithWhereUniqueWithoutRelatedtoClassroomInput[]
    updateMany?: StudentUpdateManyWithWhereWithoutRelatedtoClassroomInput | StudentUpdateManyWithWhereWithoutRelatedtoClassroomInput[]
    deleteMany?: StudentScalarWhereInput | StudentScalarWhereInput[]
  }

  export type OutputUncheckedUpdateManyWithoutRelatedToClassroomNestedInput = {
    create?: XOR<OutputCreateWithoutRelatedToClassroomInput, OutputUncheckedCreateWithoutRelatedToClassroomInput> | OutputCreateWithoutRelatedToClassroomInput[] | OutputUncheckedCreateWithoutRelatedToClassroomInput[]
    connectOrCreate?: OutputCreateOrConnectWithoutRelatedToClassroomInput | OutputCreateOrConnectWithoutRelatedToClassroomInput[]
    upsert?: OutputUpsertWithWhereUniqueWithoutRelatedToClassroomInput | OutputUpsertWithWhereUniqueWithoutRelatedToClassroomInput[]
    createMany?: OutputCreateManyRelatedToClassroomInputEnvelope
    set?: OutputWhereUniqueInput | OutputWhereUniqueInput[]
    disconnect?: OutputWhereUniqueInput | OutputWhereUniqueInput[]
    delete?: OutputWhereUniqueInput | OutputWhereUniqueInput[]
    connect?: OutputWhereUniqueInput | OutputWhereUniqueInput[]
    update?: OutputUpdateWithWhereUniqueWithoutRelatedToClassroomInput | OutputUpdateWithWhereUniqueWithoutRelatedToClassroomInput[]
    updateMany?: OutputUpdateManyWithWhereWithoutRelatedToClassroomInput | OutputUpdateManyWithWhereWithoutRelatedToClassroomInput[]
    deleteMany?: OutputScalarWhereInput | OutputScalarWhereInput[]
  }

  export type FilesCreateNestedManyWithoutRelatedToActivityInput = {
    create?: XOR<FilesCreateWithoutRelatedToActivityInput, FilesUncheckedCreateWithoutRelatedToActivityInput> | FilesCreateWithoutRelatedToActivityInput[] | FilesUncheckedCreateWithoutRelatedToActivityInput[]
    connectOrCreate?: FilesCreateOrConnectWithoutRelatedToActivityInput | FilesCreateOrConnectWithoutRelatedToActivityInput[]
    createMany?: FilesCreateManyRelatedToActivityInputEnvelope
    connect?: FilesWhereUniqueInput | FilesWhereUniqueInput[]
  }

  export type OutputCreateNestedManyWithoutRelatedToActivityInput = {
    create?: XOR<OutputCreateWithoutRelatedToActivityInput, OutputUncheckedCreateWithoutRelatedToActivityInput> | OutputCreateWithoutRelatedToActivityInput[] | OutputUncheckedCreateWithoutRelatedToActivityInput[]
    connectOrCreate?: OutputCreateOrConnectWithoutRelatedToActivityInput | OutputCreateOrConnectWithoutRelatedToActivityInput[]
    createMany?: OutputCreateManyRelatedToActivityInputEnvelope
    connect?: OutputWhereUniqueInput | OutputWhereUniqueInput[]
  }

  export type ClassroomCreateNestedOneWithoutListOfActivityInput = {
    create?: XOR<ClassroomCreateWithoutListOfActivityInput, ClassroomUncheckedCreateWithoutListOfActivityInput>
    connectOrCreate?: ClassroomCreateOrConnectWithoutListOfActivityInput
    connect?: ClassroomWhereUniqueInput
  }

  export type FilesUncheckedCreateNestedManyWithoutRelatedToActivityInput = {
    create?: XOR<FilesCreateWithoutRelatedToActivityInput, FilesUncheckedCreateWithoutRelatedToActivityInput> | FilesCreateWithoutRelatedToActivityInput[] | FilesUncheckedCreateWithoutRelatedToActivityInput[]
    connectOrCreate?: FilesCreateOrConnectWithoutRelatedToActivityInput | FilesCreateOrConnectWithoutRelatedToActivityInput[]
    createMany?: FilesCreateManyRelatedToActivityInputEnvelope
    connect?: FilesWhereUniqueInput | FilesWhereUniqueInput[]
  }

  export type OutputUncheckedCreateNestedManyWithoutRelatedToActivityInput = {
    create?: XOR<OutputCreateWithoutRelatedToActivityInput, OutputUncheckedCreateWithoutRelatedToActivityInput> | OutputCreateWithoutRelatedToActivityInput[] | OutputUncheckedCreateWithoutRelatedToActivityInput[]
    connectOrCreate?: OutputCreateOrConnectWithoutRelatedToActivityInput | OutputCreateOrConnectWithoutRelatedToActivityInput[]
    createMany?: OutputCreateManyRelatedToActivityInputEnvelope
    connect?: OutputWhereUniqueInput | OutputWhereUniqueInput[]
  }

  export type FilesUpdateManyWithoutRelatedToActivityNestedInput = {
    create?: XOR<FilesCreateWithoutRelatedToActivityInput, FilesUncheckedCreateWithoutRelatedToActivityInput> | FilesCreateWithoutRelatedToActivityInput[] | FilesUncheckedCreateWithoutRelatedToActivityInput[]
    connectOrCreate?: FilesCreateOrConnectWithoutRelatedToActivityInput | FilesCreateOrConnectWithoutRelatedToActivityInput[]
    upsert?: FilesUpsertWithWhereUniqueWithoutRelatedToActivityInput | FilesUpsertWithWhereUniqueWithoutRelatedToActivityInput[]
    createMany?: FilesCreateManyRelatedToActivityInputEnvelope
    set?: FilesWhereUniqueInput | FilesWhereUniqueInput[]
    disconnect?: FilesWhereUniqueInput | FilesWhereUniqueInput[]
    delete?: FilesWhereUniqueInput | FilesWhereUniqueInput[]
    connect?: FilesWhereUniqueInput | FilesWhereUniqueInput[]
    update?: FilesUpdateWithWhereUniqueWithoutRelatedToActivityInput | FilesUpdateWithWhereUniqueWithoutRelatedToActivityInput[]
    updateMany?: FilesUpdateManyWithWhereWithoutRelatedToActivityInput | FilesUpdateManyWithWhereWithoutRelatedToActivityInput[]
    deleteMany?: FilesScalarWhereInput | FilesScalarWhereInput[]
  }

  export type OutputUpdateManyWithoutRelatedToActivityNestedInput = {
    create?: XOR<OutputCreateWithoutRelatedToActivityInput, OutputUncheckedCreateWithoutRelatedToActivityInput> | OutputCreateWithoutRelatedToActivityInput[] | OutputUncheckedCreateWithoutRelatedToActivityInput[]
    connectOrCreate?: OutputCreateOrConnectWithoutRelatedToActivityInput | OutputCreateOrConnectWithoutRelatedToActivityInput[]
    upsert?: OutputUpsertWithWhereUniqueWithoutRelatedToActivityInput | OutputUpsertWithWhereUniqueWithoutRelatedToActivityInput[]
    createMany?: OutputCreateManyRelatedToActivityInputEnvelope
    set?: OutputWhereUniqueInput | OutputWhereUniqueInput[]
    disconnect?: OutputWhereUniqueInput | OutputWhereUniqueInput[]
    delete?: OutputWhereUniqueInput | OutputWhereUniqueInput[]
    connect?: OutputWhereUniqueInput | OutputWhereUniqueInput[]
    update?: OutputUpdateWithWhereUniqueWithoutRelatedToActivityInput | OutputUpdateWithWhereUniqueWithoutRelatedToActivityInput[]
    updateMany?: OutputUpdateManyWithWhereWithoutRelatedToActivityInput | OutputUpdateManyWithWhereWithoutRelatedToActivityInput[]
    deleteMany?: OutputScalarWhereInput | OutputScalarWhereInput[]
  }

  export type ClassroomUpdateOneRequiredWithoutListOfActivityNestedInput = {
    create?: XOR<ClassroomCreateWithoutListOfActivityInput, ClassroomUncheckedCreateWithoutListOfActivityInput>
    connectOrCreate?: ClassroomCreateOrConnectWithoutListOfActivityInput
    upsert?: ClassroomUpsertWithoutListOfActivityInput
    connect?: ClassroomWhereUniqueInput
    update?: XOR<XOR<ClassroomUpdateToOneWithWhereWithoutListOfActivityInput, ClassroomUpdateWithoutListOfActivityInput>, ClassroomUncheckedUpdateWithoutListOfActivityInput>
  }

  export type FilesUncheckedUpdateManyWithoutRelatedToActivityNestedInput = {
    create?: XOR<FilesCreateWithoutRelatedToActivityInput, FilesUncheckedCreateWithoutRelatedToActivityInput> | FilesCreateWithoutRelatedToActivityInput[] | FilesUncheckedCreateWithoutRelatedToActivityInput[]
    connectOrCreate?: FilesCreateOrConnectWithoutRelatedToActivityInput | FilesCreateOrConnectWithoutRelatedToActivityInput[]
    upsert?: FilesUpsertWithWhereUniqueWithoutRelatedToActivityInput | FilesUpsertWithWhereUniqueWithoutRelatedToActivityInput[]
    createMany?: FilesCreateManyRelatedToActivityInputEnvelope
    set?: FilesWhereUniqueInput | FilesWhereUniqueInput[]
    disconnect?: FilesWhereUniqueInput | FilesWhereUniqueInput[]
    delete?: FilesWhereUniqueInput | FilesWhereUniqueInput[]
    connect?: FilesWhereUniqueInput | FilesWhereUniqueInput[]
    update?: FilesUpdateWithWhereUniqueWithoutRelatedToActivityInput | FilesUpdateWithWhereUniqueWithoutRelatedToActivityInput[]
    updateMany?: FilesUpdateManyWithWhereWithoutRelatedToActivityInput | FilesUpdateManyWithWhereWithoutRelatedToActivityInput[]
    deleteMany?: FilesScalarWhereInput | FilesScalarWhereInput[]
  }

  export type OutputUncheckedUpdateManyWithoutRelatedToActivityNestedInput = {
    create?: XOR<OutputCreateWithoutRelatedToActivityInput, OutputUncheckedCreateWithoutRelatedToActivityInput> | OutputCreateWithoutRelatedToActivityInput[] | OutputUncheckedCreateWithoutRelatedToActivityInput[]
    connectOrCreate?: OutputCreateOrConnectWithoutRelatedToActivityInput | OutputCreateOrConnectWithoutRelatedToActivityInput[]
    upsert?: OutputUpsertWithWhereUniqueWithoutRelatedToActivityInput | OutputUpsertWithWhereUniqueWithoutRelatedToActivityInput[]
    createMany?: OutputCreateManyRelatedToActivityInputEnvelope
    set?: OutputWhereUniqueInput | OutputWhereUniqueInput[]
    disconnect?: OutputWhereUniqueInput | OutputWhereUniqueInput[]
    delete?: OutputWhereUniqueInput | OutputWhereUniqueInput[]
    connect?: OutputWhereUniqueInput | OutputWhereUniqueInput[]
    update?: OutputUpdateWithWhereUniqueWithoutRelatedToActivityInput | OutputUpdateWithWhereUniqueWithoutRelatedToActivityInput[]
    updateMany?: OutputUpdateManyWithWhereWithoutRelatedToActivityInput | OutputUpdateManyWithWhereWithoutRelatedToActivityInput[]
    deleteMany?: OutputScalarWhereInput | OutputScalarWhereInput[]
  }

  export type ClassroomCreateNestedOneWithoutListOfAnnouncementsInput = {
    create?: XOR<ClassroomCreateWithoutListOfAnnouncementsInput, ClassroomUncheckedCreateWithoutListOfAnnouncementsInput>
    connectOrCreate?: ClassroomCreateOrConnectWithoutListOfAnnouncementsInput
    connect?: ClassroomWhereUniqueInput
  }

  export type FilesCreateNestedManyWithoutRelatedToAnnouncementInput = {
    create?: XOR<FilesCreateWithoutRelatedToAnnouncementInput, FilesUncheckedCreateWithoutRelatedToAnnouncementInput> | FilesCreateWithoutRelatedToAnnouncementInput[] | FilesUncheckedCreateWithoutRelatedToAnnouncementInput[]
    connectOrCreate?: FilesCreateOrConnectWithoutRelatedToAnnouncementInput | FilesCreateOrConnectWithoutRelatedToAnnouncementInput[]
    createMany?: FilesCreateManyRelatedToAnnouncementInputEnvelope
    connect?: FilesWhereUniqueInput | FilesWhereUniqueInput[]
  }

  export type FilesUncheckedCreateNestedManyWithoutRelatedToAnnouncementInput = {
    create?: XOR<FilesCreateWithoutRelatedToAnnouncementInput, FilesUncheckedCreateWithoutRelatedToAnnouncementInput> | FilesCreateWithoutRelatedToAnnouncementInput[] | FilesUncheckedCreateWithoutRelatedToAnnouncementInput[]
    connectOrCreate?: FilesCreateOrConnectWithoutRelatedToAnnouncementInput | FilesCreateOrConnectWithoutRelatedToAnnouncementInput[]
    createMany?: FilesCreateManyRelatedToAnnouncementInputEnvelope
    connect?: FilesWhereUniqueInput | FilesWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type ClassroomUpdateOneRequiredWithoutListOfAnnouncementsNestedInput = {
    create?: XOR<ClassroomCreateWithoutListOfAnnouncementsInput, ClassroomUncheckedCreateWithoutListOfAnnouncementsInput>
    connectOrCreate?: ClassroomCreateOrConnectWithoutListOfAnnouncementsInput
    upsert?: ClassroomUpsertWithoutListOfAnnouncementsInput
    connect?: ClassroomWhereUniqueInput
    update?: XOR<XOR<ClassroomUpdateToOneWithWhereWithoutListOfAnnouncementsInput, ClassroomUpdateWithoutListOfAnnouncementsInput>, ClassroomUncheckedUpdateWithoutListOfAnnouncementsInput>
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

  export type FilesCreateNestedManyWithoutRelatedToOutputInput = {
    create?: XOR<FilesCreateWithoutRelatedToOutputInput, FilesUncheckedCreateWithoutRelatedToOutputInput> | FilesCreateWithoutRelatedToOutputInput[] | FilesUncheckedCreateWithoutRelatedToOutputInput[]
    connectOrCreate?: FilesCreateOrConnectWithoutRelatedToOutputInput | FilesCreateOrConnectWithoutRelatedToOutputInput[]
    createMany?: FilesCreateManyRelatedToOutputInputEnvelope
    connect?: FilesWhereUniqueInput | FilesWhereUniqueInput[]
  }

  export type StudentCreateNestedOneWithoutListOfOutputsInput = {
    create?: XOR<StudentCreateWithoutListOfOutputsInput, StudentUncheckedCreateWithoutListOfOutputsInput>
    connectOrCreate?: StudentCreateOrConnectWithoutListOfOutputsInput
    connect?: StudentWhereUniqueInput
  }

  export type ClassroomCreateNestedOneWithoutListOfOutputsInput = {
    create?: XOR<ClassroomCreateWithoutListOfOutputsInput, ClassroomUncheckedCreateWithoutListOfOutputsInput>
    connectOrCreate?: ClassroomCreateOrConnectWithoutListOfOutputsInput
    connect?: ClassroomWhereUniqueInput
  }

  export type ActivityCreateNestedOneWithoutOutputsInput = {
    create?: XOR<ActivityCreateWithoutOutputsInput, ActivityUncheckedCreateWithoutOutputsInput>
    connectOrCreate?: ActivityCreateOrConnectWithoutOutputsInput
    connect?: ActivityWhereUniqueInput
  }

  export type FeedbackCreateNestedOneWithoutOutputInput = {
    create?: XOR<FeedbackCreateWithoutOutputInput, FeedbackUncheckedCreateWithoutOutputInput>
    connectOrCreate?: FeedbackCreateOrConnectWithoutOutputInput
    connect?: FeedbackWhereUniqueInput
  }

  export type ScoreCreateNestedOneWithoutOutputInput = {
    create?: XOR<ScoreCreateWithoutOutputInput, ScoreUncheckedCreateWithoutOutputInput>
    connectOrCreate?: ScoreCreateOrConnectWithoutOutputInput
    connect?: ScoreWhereUniqueInput
  }

  export type FilesUncheckedCreateNestedManyWithoutRelatedToOutputInput = {
    create?: XOR<FilesCreateWithoutRelatedToOutputInput, FilesUncheckedCreateWithoutRelatedToOutputInput> | FilesCreateWithoutRelatedToOutputInput[] | FilesUncheckedCreateWithoutRelatedToOutputInput[]
    connectOrCreate?: FilesCreateOrConnectWithoutRelatedToOutputInput | FilesCreateOrConnectWithoutRelatedToOutputInput[]
    createMany?: FilesCreateManyRelatedToOutputInputEnvelope
    connect?: FilesWhereUniqueInput | FilesWhereUniqueInput[]
  }

  export type FilesUpdateManyWithoutRelatedToOutputNestedInput = {
    create?: XOR<FilesCreateWithoutRelatedToOutputInput, FilesUncheckedCreateWithoutRelatedToOutputInput> | FilesCreateWithoutRelatedToOutputInput[] | FilesUncheckedCreateWithoutRelatedToOutputInput[]
    connectOrCreate?: FilesCreateOrConnectWithoutRelatedToOutputInput | FilesCreateOrConnectWithoutRelatedToOutputInput[]
    upsert?: FilesUpsertWithWhereUniqueWithoutRelatedToOutputInput | FilesUpsertWithWhereUniqueWithoutRelatedToOutputInput[]
    createMany?: FilesCreateManyRelatedToOutputInputEnvelope
    set?: FilesWhereUniqueInput | FilesWhereUniqueInput[]
    disconnect?: FilesWhereUniqueInput | FilesWhereUniqueInput[]
    delete?: FilesWhereUniqueInput | FilesWhereUniqueInput[]
    connect?: FilesWhereUniqueInput | FilesWhereUniqueInput[]
    update?: FilesUpdateWithWhereUniqueWithoutRelatedToOutputInput | FilesUpdateWithWhereUniqueWithoutRelatedToOutputInput[]
    updateMany?: FilesUpdateManyWithWhereWithoutRelatedToOutputInput | FilesUpdateManyWithWhereWithoutRelatedToOutputInput[]
    deleteMany?: FilesScalarWhereInput | FilesScalarWhereInput[]
  }

  export type StudentUpdateOneWithoutListOfOutputsNestedInput = {
    create?: XOR<StudentCreateWithoutListOfOutputsInput, StudentUncheckedCreateWithoutListOfOutputsInput>
    connectOrCreate?: StudentCreateOrConnectWithoutListOfOutputsInput
    upsert?: StudentUpsertWithoutListOfOutputsInput
    disconnect?: StudentWhereInput | boolean
    delete?: StudentWhereInput | boolean
    connect?: StudentWhereUniqueInput
    update?: XOR<XOR<StudentUpdateToOneWithWhereWithoutListOfOutputsInput, StudentUpdateWithoutListOfOutputsInput>, StudentUncheckedUpdateWithoutListOfOutputsInput>
  }

  export type ClassroomUpdateOneWithoutListOfOutputsNestedInput = {
    create?: XOR<ClassroomCreateWithoutListOfOutputsInput, ClassroomUncheckedCreateWithoutListOfOutputsInput>
    connectOrCreate?: ClassroomCreateOrConnectWithoutListOfOutputsInput
    upsert?: ClassroomUpsertWithoutListOfOutputsInput
    disconnect?: ClassroomWhereInput | boolean
    delete?: ClassroomWhereInput | boolean
    connect?: ClassroomWhereUniqueInput
    update?: XOR<XOR<ClassroomUpdateToOneWithWhereWithoutListOfOutputsInput, ClassroomUpdateWithoutListOfOutputsInput>, ClassroomUncheckedUpdateWithoutListOfOutputsInput>
  }

  export type ActivityUpdateOneWithoutOutputsNestedInput = {
    create?: XOR<ActivityCreateWithoutOutputsInput, ActivityUncheckedCreateWithoutOutputsInput>
    connectOrCreate?: ActivityCreateOrConnectWithoutOutputsInput
    upsert?: ActivityUpsertWithoutOutputsInput
    disconnect?: ActivityWhereInput | boolean
    delete?: ActivityWhereInput | boolean
    connect?: ActivityWhereUniqueInput
    update?: XOR<XOR<ActivityUpdateToOneWithWhereWithoutOutputsInput, ActivityUpdateWithoutOutputsInput>, ActivityUncheckedUpdateWithoutOutputsInput>
  }

  export type FeedbackUpdateOneWithoutOutputNestedInput = {
    create?: XOR<FeedbackCreateWithoutOutputInput, FeedbackUncheckedCreateWithoutOutputInput>
    connectOrCreate?: FeedbackCreateOrConnectWithoutOutputInput
    upsert?: FeedbackUpsertWithoutOutputInput
    disconnect?: FeedbackWhereInput | boolean
    delete?: FeedbackWhereInput | boolean
    connect?: FeedbackWhereUniqueInput
    update?: XOR<XOR<FeedbackUpdateToOneWithWhereWithoutOutputInput, FeedbackUpdateWithoutOutputInput>, FeedbackUncheckedUpdateWithoutOutputInput>
  }

  export type ScoreUpdateOneWithoutOutputNestedInput = {
    create?: XOR<ScoreCreateWithoutOutputInput, ScoreUncheckedCreateWithoutOutputInput>
    connectOrCreate?: ScoreCreateOrConnectWithoutOutputInput
    upsert?: ScoreUpsertWithoutOutputInput
    disconnect?: ScoreWhereInput | boolean
    delete?: ScoreWhereInput | boolean
    connect?: ScoreWhereUniqueInput
    update?: XOR<XOR<ScoreUpdateToOneWithWhereWithoutOutputInput, ScoreUpdateWithoutOutputInput>, ScoreUncheckedUpdateWithoutOutputInput>
  }

  export type FilesUncheckedUpdateManyWithoutRelatedToOutputNestedInput = {
    create?: XOR<FilesCreateWithoutRelatedToOutputInput, FilesUncheckedCreateWithoutRelatedToOutputInput> | FilesCreateWithoutRelatedToOutputInput[] | FilesUncheckedCreateWithoutRelatedToOutputInput[]
    connectOrCreate?: FilesCreateOrConnectWithoutRelatedToOutputInput | FilesCreateOrConnectWithoutRelatedToOutputInput[]
    upsert?: FilesUpsertWithWhereUniqueWithoutRelatedToOutputInput | FilesUpsertWithWhereUniqueWithoutRelatedToOutputInput[]
    createMany?: FilesCreateManyRelatedToOutputInputEnvelope
    set?: FilesWhereUniqueInput | FilesWhereUniqueInput[]
    disconnect?: FilesWhereUniqueInput | FilesWhereUniqueInput[]
    delete?: FilesWhereUniqueInput | FilesWhereUniqueInput[]
    connect?: FilesWhereUniqueInput | FilesWhereUniqueInput[]
    update?: FilesUpdateWithWhereUniqueWithoutRelatedToOutputInput | FilesUpdateWithWhereUniqueWithoutRelatedToOutputInput[]
    updateMany?: FilesUpdateManyWithWhereWithoutRelatedToOutputInput | FilesUpdateManyWithWhereWithoutRelatedToOutputInput[]
    deleteMany?: FilesScalarWhereInput | FilesScalarWhereInput[]
  }

  export type ActivityCreateNestedOneWithoutCriteriaInput = {
    create?: XOR<ActivityCreateWithoutCriteriaInput, ActivityUncheckedCreateWithoutCriteriaInput>
    connectOrCreate?: ActivityCreateOrConnectWithoutCriteriaInput
    connect?: ActivityWhereUniqueInput
  }

  export type AnnouncementCreateNestedOneWithoutListOfFilesInput = {
    create?: XOR<AnnouncementCreateWithoutListOfFilesInput, AnnouncementUncheckedCreateWithoutListOfFilesInput>
    connectOrCreate?: AnnouncementCreateOrConnectWithoutListOfFilesInput
    connect?: AnnouncementWhereUniqueInput
  }

  export type OutputCreateNestedOneWithoutListOfFilesInput = {
    create?: XOR<OutputCreateWithoutListOfFilesInput, OutputUncheckedCreateWithoutListOfFilesInput>
    connectOrCreate?: OutputCreateOrConnectWithoutListOfFilesInput
    connect?: OutputWhereUniqueInput
  }

  export type EnumOutputStatusFieldUpdateOperationsInput = {
    set?: $Enums.OutputStatus
  }

  export type ActivityUpdateOneWithoutCriteriaNestedInput = {
    create?: XOR<ActivityCreateWithoutCriteriaInput, ActivityUncheckedCreateWithoutCriteriaInput>
    connectOrCreate?: ActivityCreateOrConnectWithoutCriteriaInput
    upsert?: ActivityUpsertWithoutCriteriaInput
    disconnect?: ActivityWhereInput | boolean
    delete?: ActivityWhereInput | boolean
    connect?: ActivityWhereUniqueInput
    update?: XOR<XOR<ActivityUpdateToOneWithWhereWithoutCriteriaInput, ActivityUpdateWithoutCriteriaInput>, ActivityUncheckedUpdateWithoutCriteriaInput>
  }

  export type AnnouncementUpdateOneWithoutListOfFilesNestedInput = {
    create?: XOR<AnnouncementCreateWithoutListOfFilesInput, AnnouncementUncheckedCreateWithoutListOfFilesInput>
    connectOrCreate?: AnnouncementCreateOrConnectWithoutListOfFilesInput
    upsert?: AnnouncementUpsertWithoutListOfFilesInput
    disconnect?: AnnouncementWhereInput | boolean
    delete?: AnnouncementWhereInput | boolean
    connect?: AnnouncementWhereUniqueInput
    update?: XOR<XOR<AnnouncementUpdateToOneWithWhereWithoutListOfFilesInput, AnnouncementUpdateWithoutListOfFilesInput>, AnnouncementUncheckedUpdateWithoutListOfFilesInput>
  }

  export type OutputUpdateOneWithoutListOfFilesNestedInput = {
    create?: XOR<OutputCreateWithoutListOfFilesInput, OutputUncheckedCreateWithoutListOfFilesInput>
    connectOrCreate?: OutputCreateOrConnectWithoutListOfFilesInput
    upsert?: OutputUpsertWithoutListOfFilesInput
    disconnect?: OutputWhereInput | boolean
    delete?: OutputWhereInput | boolean
    connect?: OutputWhereUniqueInput
    update?: XOR<XOR<OutputUpdateToOneWithWhereWithoutListOfFilesInput, OutputUpdateWithoutListOfFilesInput>, OutputUncheckedUpdateWithoutListOfFilesInput>
  }

  export type OutputCreateNestedManyWithoutRelatedToFeedbackInput = {
    create?: XOR<OutputCreateWithoutRelatedToFeedbackInput, OutputUncheckedCreateWithoutRelatedToFeedbackInput> | OutputCreateWithoutRelatedToFeedbackInput[] | OutputUncheckedCreateWithoutRelatedToFeedbackInput[]
    connectOrCreate?: OutputCreateOrConnectWithoutRelatedToFeedbackInput | OutputCreateOrConnectWithoutRelatedToFeedbackInput[]
    createMany?: OutputCreateManyRelatedToFeedbackInputEnvelope
    connect?: OutputWhereUniqueInput | OutputWhereUniqueInput[]
  }

  export type OutputUncheckedCreateNestedManyWithoutRelatedToFeedbackInput = {
    create?: XOR<OutputCreateWithoutRelatedToFeedbackInput, OutputUncheckedCreateWithoutRelatedToFeedbackInput> | OutputCreateWithoutRelatedToFeedbackInput[] | OutputUncheckedCreateWithoutRelatedToFeedbackInput[]
    connectOrCreate?: OutputCreateOrConnectWithoutRelatedToFeedbackInput | OutputCreateOrConnectWithoutRelatedToFeedbackInput[]
    createMany?: OutputCreateManyRelatedToFeedbackInputEnvelope
    connect?: OutputWhereUniqueInput | OutputWhereUniqueInput[]
  }

  export type OutputUpdateManyWithoutRelatedToFeedbackNestedInput = {
    create?: XOR<OutputCreateWithoutRelatedToFeedbackInput, OutputUncheckedCreateWithoutRelatedToFeedbackInput> | OutputCreateWithoutRelatedToFeedbackInput[] | OutputUncheckedCreateWithoutRelatedToFeedbackInput[]
    connectOrCreate?: OutputCreateOrConnectWithoutRelatedToFeedbackInput | OutputCreateOrConnectWithoutRelatedToFeedbackInput[]
    upsert?: OutputUpsertWithWhereUniqueWithoutRelatedToFeedbackInput | OutputUpsertWithWhereUniqueWithoutRelatedToFeedbackInput[]
    createMany?: OutputCreateManyRelatedToFeedbackInputEnvelope
    set?: OutputWhereUniqueInput | OutputWhereUniqueInput[]
    disconnect?: OutputWhereUniqueInput | OutputWhereUniqueInput[]
    delete?: OutputWhereUniqueInput | OutputWhereUniqueInput[]
    connect?: OutputWhereUniqueInput | OutputWhereUniqueInput[]
    update?: OutputUpdateWithWhereUniqueWithoutRelatedToFeedbackInput | OutputUpdateWithWhereUniqueWithoutRelatedToFeedbackInput[]
    updateMany?: OutputUpdateManyWithWhereWithoutRelatedToFeedbackInput | OutputUpdateManyWithWhereWithoutRelatedToFeedbackInput[]
    deleteMany?: OutputScalarWhereInput | OutputScalarWhereInput[]
  }

  export type OutputUncheckedUpdateManyWithoutRelatedToFeedbackNestedInput = {
    create?: XOR<OutputCreateWithoutRelatedToFeedbackInput, OutputUncheckedCreateWithoutRelatedToFeedbackInput> | OutputCreateWithoutRelatedToFeedbackInput[] | OutputUncheckedCreateWithoutRelatedToFeedbackInput[]
    connectOrCreate?: OutputCreateOrConnectWithoutRelatedToFeedbackInput | OutputCreateOrConnectWithoutRelatedToFeedbackInput[]
    upsert?: OutputUpsertWithWhereUniqueWithoutRelatedToFeedbackInput | OutputUpsertWithWhereUniqueWithoutRelatedToFeedbackInput[]
    createMany?: OutputCreateManyRelatedToFeedbackInputEnvelope
    set?: OutputWhereUniqueInput | OutputWhereUniqueInput[]
    disconnect?: OutputWhereUniqueInput | OutputWhereUniqueInput[]
    delete?: OutputWhereUniqueInput | OutputWhereUniqueInput[]
    connect?: OutputWhereUniqueInput | OutputWhereUniqueInput[]
    update?: OutputUpdateWithWhereUniqueWithoutRelatedToFeedbackInput | OutputUpdateWithWhereUniqueWithoutRelatedToFeedbackInput[]
    updateMany?: OutputUpdateManyWithWhereWithoutRelatedToFeedbackInput | OutputUpdateManyWithWhereWithoutRelatedToFeedbackInput[]
    deleteMany?: OutputScalarWhereInput | OutputScalarWhereInput[]
  }

  export type OutputCreateNestedManyWithoutRelatedToScoreInput = {
    create?: XOR<OutputCreateWithoutRelatedToScoreInput, OutputUncheckedCreateWithoutRelatedToScoreInput> | OutputCreateWithoutRelatedToScoreInput[] | OutputUncheckedCreateWithoutRelatedToScoreInput[]
    connectOrCreate?: OutputCreateOrConnectWithoutRelatedToScoreInput | OutputCreateOrConnectWithoutRelatedToScoreInput[]
    createMany?: OutputCreateManyRelatedToScoreInputEnvelope
    connect?: OutputWhereUniqueInput | OutputWhereUniqueInput[]
  }

  export type OutputUncheckedCreateNestedManyWithoutRelatedToScoreInput = {
    create?: XOR<OutputCreateWithoutRelatedToScoreInput, OutputUncheckedCreateWithoutRelatedToScoreInput> | OutputCreateWithoutRelatedToScoreInput[] | OutputUncheckedCreateWithoutRelatedToScoreInput[]
    connectOrCreate?: OutputCreateOrConnectWithoutRelatedToScoreInput | OutputCreateOrConnectWithoutRelatedToScoreInput[]
    createMany?: OutputCreateManyRelatedToScoreInputEnvelope
    connect?: OutputWhereUniqueInput | OutputWhereUniqueInput[]
  }

  export type OutputUpdateManyWithoutRelatedToScoreNestedInput = {
    create?: XOR<OutputCreateWithoutRelatedToScoreInput, OutputUncheckedCreateWithoutRelatedToScoreInput> | OutputCreateWithoutRelatedToScoreInput[] | OutputUncheckedCreateWithoutRelatedToScoreInput[]
    connectOrCreate?: OutputCreateOrConnectWithoutRelatedToScoreInput | OutputCreateOrConnectWithoutRelatedToScoreInput[]
    upsert?: OutputUpsertWithWhereUniqueWithoutRelatedToScoreInput | OutputUpsertWithWhereUniqueWithoutRelatedToScoreInput[]
    createMany?: OutputCreateManyRelatedToScoreInputEnvelope
    set?: OutputWhereUniqueInput | OutputWhereUniqueInput[]
    disconnect?: OutputWhereUniqueInput | OutputWhereUniqueInput[]
    delete?: OutputWhereUniqueInput | OutputWhereUniqueInput[]
    connect?: OutputWhereUniqueInput | OutputWhereUniqueInput[]
    update?: OutputUpdateWithWhereUniqueWithoutRelatedToScoreInput | OutputUpdateWithWhereUniqueWithoutRelatedToScoreInput[]
    updateMany?: OutputUpdateManyWithWhereWithoutRelatedToScoreInput | OutputUpdateManyWithWhereWithoutRelatedToScoreInput[]
    deleteMany?: OutputScalarWhereInput | OutputScalarWhereInput[]
  }

  export type OutputUncheckedUpdateManyWithoutRelatedToScoreNestedInput = {
    create?: XOR<OutputCreateWithoutRelatedToScoreInput, OutputUncheckedCreateWithoutRelatedToScoreInput> | OutputCreateWithoutRelatedToScoreInput[] | OutputUncheckedCreateWithoutRelatedToScoreInput[]
    connectOrCreate?: OutputCreateOrConnectWithoutRelatedToScoreInput | OutputCreateOrConnectWithoutRelatedToScoreInput[]
    upsert?: OutputUpsertWithWhereUniqueWithoutRelatedToScoreInput | OutputUpsertWithWhereUniqueWithoutRelatedToScoreInput[]
    createMany?: OutputCreateManyRelatedToScoreInputEnvelope
    set?: OutputWhereUniqueInput | OutputWhereUniqueInput[]
    disconnect?: OutputWhereUniqueInput | OutputWhereUniqueInput[]
    delete?: OutputWhereUniqueInput | OutputWhereUniqueInput[]
    connect?: OutputWhereUniqueInput | OutputWhereUniqueInput[]
    update?: OutputUpdateWithWhereUniqueWithoutRelatedToScoreInput | OutputUpdateWithWhereUniqueWithoutRelatedToScoreInput[]
    updateMany?: OutputUpdateManyWithWhereWithoutRelatedToScoreInput | OutputUpdateManyWithWhereWithoutRelatedToScoreInput[]
    deleteMany?: OutputScalarWhereInput | OutputScalarWhereInput[]
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

  export type NestedEnumClassroomStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ClassroomStatus | EnumClassroomStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ClassroomStatus[] | ListEnumClassroomStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ClassroomStatus[] | ListEnumClassroomStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumClassroomStatusFilter<$PrismaModel> | $Enums.ClassroomStatus
  }

  export type NestedEnumClassroomStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ClassroomStatus | EnumClassroomStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ClassroomStatus[] | ListEnumClassroomStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ClassroomStatus[] | ListEnumClassroomStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumClassroomStatusWithAggregatesFilter<$PrismaModel> | $Enums.ClassroomStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumClassroomStatusFilter<$PrismaModel>
    _max?: NestedEnumClassroomStatusFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
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

  export type NestedEnumOutputStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.OutputStatus | EnumOutputStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OutputStatus[] | ListEnumOutputStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OutputStatus[] | ListEnumOutputStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOutputStatusFilter<$PrismaModel> | $Enums.OutputStatus
  }

  export type NestedEnumOutputStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OutputStatus | EnumOutputStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OutputStatus[] | ListEnumOutputStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OutputStatus[] | ListEnumOutputStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOutputStatusWithAggregatesFilter<$PrismaModel> | $Enums.OutputStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOutputStatusFilter<$PrismaModel>
    _max?: NestedEnumOutputStatusFilter<$PrismaModel>
  }

  export type ClassroomCreateWithoutRelatedToUserInput = {
    classname: string
    section: string
    subject: string
    room: string
    classcode?: string | null
    listOfAnnouncements?: AnnouncementCreateNestedManyWithoutRelatedToClassroomInput
    listOfActivity?: ActivityCreateNestedManyWithoutRelatedToClassroomInput
    listOfStudents?: StudentCreateNestedManyWithoutRelatedtoClassroomInput
    listOfOutputs?: OutputCreateNestedManyWithoutRelatedToClassroomInput
  }

  export type ClassroomUncheckedCreateWithoutRelatedToUserInput = {
    id?: number
    classname: string
    section: string
    subject: string
    room: string
    classcode?: string | null
    listOfAnnouncements?: AnnouncementUncheckedCreateNestedManyWithoutRelatedToClassroomInput
    listOfActivity?: ActivityUncheckedCreateNestedManyWithoutRelatedToClassroomInput
    listOfStudents?: StudentUncheckedCreateNestedManyWithoutRelatedtoClassroomInput
    listOfOutputs?: OutputUncheckedCreateNestedManyWithoutRelatedToClassroomInput
  }

  export type ClassroomCreateOrConnectWithoutRelatedToUserInput = {
    where: ClassroomWhereUniqueInput
    create: XOR<ClassroomCreateWithoutRelatedToUserInput, ClassroomUncheckedCreateWithoutRelatedToUserInput>
  }

  export type ClassroomCreateManyRelatedToUserInputEnvelope = {
    data: ClassroomCreateManyRelatedToUserInput | ClassroomCreateManyRelatedToUserInput[]
    skipDuplicates?: boolean
  }

  export type StudentCreateWithoutRelatedToUserInput = {
    lastname: string
    firstname: string
    middlename: string
    sex: string
    status?: $Enums.ClassroomStatus
    listOfOutputs?: OutputCreateNestedManyWithoutRelatedToStudentInput
    relatedtoClassroom?: ClassroomCreateNestedOneWithoutListOfStudentsInput
  }

  export type StudentUncheckedCreateWithoutRelatedToUserInput = {
    lastname: string
    firstname: string
    middlename: string
    sex: string
    status?: $Enums.ClassroomStatus
    roomId?: number | null
    listOfOutputs?: OutputUncheckedCreateNestedManyWithoutRelatedToStudentInput
  }

  export type StudentCreateOrConnectWithoutRelatedToUserInput = {
    where: StudentWhereUniqueInput
    create: XOR<StudentCreateWithoutRelatedToUserInput, StudentUncheckedCreateWithoutRelatedToUserInput>
  }

  export type ClassroomUpsertWithWhereUniqueWithoutRelatedToUserInput = {
    where: ClassroomWhereUniqueInput
    update: XOR<ClassroomUpdateWithoutRelatedToUserInput, ClassroomUncheckedUpdateWithoutRelatedToUserInput>
    create: XOR<ClassroomCreateWithoutRelatedToUserInput, ClassroomUncheckedCreateWithoutRelatedToUserInput>
  }

  export type ClassroomUpdateWithWhereUniqueWithoutRelatedToUserInput = {
    where: ClassroomWhereUniqueInput
    data: XOR<ClassroomUpdateWithoutRelatedToUserInput, ClassroomUncheckedUpdateWithoutRelatedToUserInput>
  }

  export type ClassroomUpdateManyWithWhereWithoutRelatedToUserInput = {
    where: ClassroomScalarWhereInput
    data: XOR<ClassroomUpdateManyMutationInput, ClassroomUncheckedUpdateManyWithoutRelatedToUserInput>
  }

  export type ClassroomScalarWhereInput = {
    AND?: ClassroomScalarWhereInput | ClassroomScalarWhereInput[]
    OR?: ClassroomScalarWhereInput[]
    NOT?: ClassroomScalarWhereInput | ClassroomScalarWhereInput[]
    id?: IntFilter<"Classroom"> | number
    classname?: StringFilter<"Classroom"> | string
    section?: StringFilter<"Classroom"> | string
    subject?: StringFilter<"Classroom"> | string
    room?: StringFilter<"Classroom"> | string
    classcode?: StringNullableFilter<"Classroom"> | string | null
    userId?: IntFilter<"Classroom"> | number
  }

  export type StudentUpsertWithoutRelatedToUserInput = {
    update: XOR<StudentUpdateWithoutRelatedToUserInput, StudentUncheckedUpdateWithoutRelatedToUserInput>
    create: XOR<StudentCreateWithoutRelatedToUserInput, StudentUncheckedCreateWithoutRelatedToUserInput>
    where?: StudentWhereInput
  }

  export type StudentUpdateToOneWithWhereWithoutRelatedToUserInput = {
    where?: StudentWhereInput
    data: XOR<StudentUpdateWithoutRelatedToUserInput, StudentUncheckedUpdateWithoutRelatedToUserInput>
  }

  export type StudentUpdateWithoutRelatedToUserInput = {
    lastname?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    middlename?: StringFieldUpdateOperationsInput | string
    sex?: StringFieldUpdateOperationsInput | string
    status?: EnumClassroomStatusFieldUpdateOperationsInput | $Enums.ClassroomStatus
    listOfOutputs?: OutputUpdateManyWithoutRelatedToStudentNestedInput
    relatedtoClassroom?: ClassroomUpdateOneWithoutListOfStudentsNestedInput
  }

  export type StudentUncheckedUpdateWithoutRelatedToUserInput = {
    lastname?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    middlename?: StringFieldUpdateOperationsInput | string
    sex?: StringFieldUpdateOperationsInput | string
    status?: EnumClassroomStatusFieldUpdateOperationsInput | $Enums.ClassroomStatus
    roomId?: NullableIntFieldUpdateOperationsInput | number | null
    listOfOutputs?: OutputUncheckedUpdateManyWithoutRelatedToStudentNestedInput
  }

  export type UserCreateWithoutStudentInput = {
    username: string
    email: string
    password?: string | null
    listOfCreatedClassroom?: ClassroomCreateNestedManyWithoutRelatedToUserInput
  }

  export type UserUncheckedCreateWithoutStudentInput = {
    id?: number
    username: string
    email: string
    password?: string | null
    listOfCreatedClassroom?: ClassroomUncheckedCreateNestedManyWithoutRelatedToUserInput
  }

  export type UserCreateOrConnectWithoutStudentInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutStudentInput, UserUncheckedCreateWithoutStudentInput>
  }

  export type OutputCreateWithoutRelatedToStudentInput = {
    listOfFiles?: FilesCreateNestedManyWithoutRelatedToOutputInput
    relatedToClassroom?: ClassroomCreateNestedOneWithoutListOfOutputsInput
    relatedToActivity?: ActivityCreateNestedOneWithoutOutputsInput
    relatedToFeedback?: FeedbackCreateNestedOneWithoutOutputInput
    relatedToScore?: ScoreCreateNestedOneWithoutOutputInput
  }

  export type OutputUncheckedCreateWithoutRelatedToStudentInput = {
    id?: number
    roomId?: number | null
    activityId?: number | null
    feedbackId?: number | null
    scoreId?: number | null
    listOfFiles?: FilesUncheckedCreateNestedManyWithoutRelatedToOutputInput
  }

  export type OutputCreateOrConnectWithoutRelatedToStudentInput = {
    where: OutputWhereUniqueInput
    create: XOR<OutputCreateWithoutRelatedToStudentInput, OutputUncheckedCreateWithoutRelatedToStudentInput>
  }

  export type OutputCreateManyRelatedToStudentInputEnvelope = {
    data: OutputCreateManyRelatedToStudentInput | OutputCreateManyRelatedToStudentInput[]
    skipDuplicates?: boolean
  }

  export type ClassroomCreateWithoutListOfStudentsInput = {
    classname: string
    section: string
    subject: string
    room: string
    classcode?: string | null
    relatedToUser: UserCreateNestedOneWithoutListOfCreatedClassroomInput
    listOfAnnouncements?: AnnouncementCreateNestedManyWithoutRelatedToClassroomInput
    listOfActivity?: ActivityCreateNestedManyWithoutRelatedToClassroomInput
    listOfOutputs?: OutputCreateNestedManyWithoutRelatedToClassroomInput
  }

  export type ClassroomUncheckedCreateWithoutListOfStudentsInput = {
    id?: number
    classname: string
    section: string
    subject: string
    room: string
    classcode?: string | null
    userId: number
    listOfAnnouncements?: AnnouncementUncheckedCreateNestedManyWithoutRelatedToClassroomInput
    listOfActivity?: ActivityUncheckedCreateNestedManyWithoutRelatedToClassroomInput
    listOfOutputs?: OutputUncheckedCreateNestedManyWithoutRelatedToClassroomInput
  }

  export type ClassroomCreateOrConnectWithoutListOfStudentsInput = {
    where: ClassroomWhereUniqueInput
    create: XOR<ClassroomCreateWithoutListOfStudentsInput, ClassroomUncheckedCreateWithoutListOfStudentsInput>
  }

  export type UserUpsertWithoutStudentInput = {
    update: XOR<UserUpdateWithoutStudentInput, UserUncheckedUpdateWithoutStudentInput>
    create: XOR<UserCreateWithoutStudentInput, UserUncheckedCreateWithoutStudentInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutStudentInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutStudentInput, UserUncheckedUpdateWithoutStudentInput>
  }

  export type UserUpdateWithoutStudentInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    listOfCreatedClassroom?: ClassroomUpdateManyWithoutRelatedToUserNestedInput
  }

  export type UserUncheckedUpdateWithoutStudentInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    listOfCreatedClassroom?: ClassroomUncheckedUpdateManyWithoutRelatedToUserNestedInput
  }

  export type OutputUpsertWithWhereUniqueWithoutRelatedToStudentInput = {
    where: OutputWhereUniqueInput
    update: XOR<OutputUpdateWithoutRelatedToStudentInput, OutputUncheckedUpdateWithoutRelatedToStudentInput>
    create: XOR<OutputCreateWithoutRelatedToStudentInput, OutputUncheckedCreateWithoutRelatedToStudentInput>
  }

  export type OutputUpdateWithWhereUniqueWithoutRelatedToStudentInput = {
    where: OutputWhereUniqueInput
    data: XOR<OutputUpdateWithoutRelatedToStudentInput, OutputUncheckedUpdateWithoutRelatedToStudentInput>
  }

  export type OutputUpdateManyWithWhereWithoutRelatedToStudentInput = {
    where: OutputScalarWhereInput
    data: XOR<OutputUpdateManyMutationInput, OutputUncheckedUpdateManyWithoutRelatedToStudentInput>
  }

  export type OutputScalarWhereInput = {
    AND?: OutputScalarWhereInput | OutputScalarWhereInput[]
    OR?: OutputScalarWhereInput[]
    NOT?: OutputScalarWhereInput | OutputScalarWhereInput[]
    id?: IntFilter<"Output"> | number
    studentId?: IntNullableFilter<"Output"> | number | null
    roomId?: IntNullableFilter<"Output"> | number | null
    activityId?: IntNullableFilter<"Output"> | number | null
    feedbackId?: IntNullableFilter<"Output"> | number | null
    scoreId?: IntNullableFilter<"Output"> | number | null
  }

  export type ClassroomUpsertWithoutListOfStudentsInput = {
    update: XOR<ClassroomUpdateWithoutListOfStudentsInput, ClassroomUncheckedUpdateWithoutListOfStudentsInput>
    create: XOR<ClassroomCreateWithoutListOfStudentsInput, ClassroomUncheckedCreateWithoutListOfStudentsInput>
    where?: ClassroomWhereInput
  }

  export type ClassroomUpdateToOneWithWhereWithoutListOfStudentsInput = {
    where?: ClassroomWhereInput
    data: XOR<ClassroomUpdateWithoutListOfStudentsInput, ClassroomUncheckedUpdateWithoutListOfStudentsInput>
  }

  export type ClassroomUpdateWithoutListOfStudentsInput = {
    classname?: StringFieldUpdateOperationsInput | string
    section?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    room?: StringFieldUpdateOperationsInput | string
    classcode?: NullableStringFieldUpdateOperationsInput | string | null
    relatedToUser?: UserUpdateOneRequiredWithoutListOfCreatedClassroomNestedInput
    listOfAnnouncements?: AnnouncementUpdateManyWithoutRelatedToClassroomNestedInput
    listOfActivity?: ActivityUpdateManyWithoutRelatedToClassroomNestedInput
    listOfOutputs?: OutputUpdateManyWithoutRelatedToClassroomNestedInput
  }

  export type ClassroomUncheckedUpdateWithoutListOfStudentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    classname?: StringFieldUpdateOperationsInput | string
    section?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    room?: StringFieldUpdateOperationsInput | string
    classcode?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: IntFieldUpdateOperationsInput | number
    listOfAnnouncements?: AnnouncementUncheckedUpdateManyWithoutRelatedToClassroomNestedInput
    listOfActivity?: ActivityUncheckedUpdateManyWithoutRelatedToClassroomNestedInput
    listOfOutputs?: OutputUncheckedUpdateManyWithoutRelatedToClassroomNestedInput
  }

  export type UserCreateWithoutListOfCreatedClassroomInput = {
    username: string
    email: string
    password?: string | null
    student?: StudentCreateNestedOneWithoutRelatedToUserInput
  }

  export type UserUncheckedCreateWithoutListOfCreatedClassroomInput = {
    id?: number
    username: string
    email: string
    password?: string | null
    student?: StudentUncheckedCreateNestedOneWithoutRelatedToUserInput
  }

  export type UserCreateOrConnectWithoutListOfCreatedClassroomInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutListOfCreatedClassroomInput, UserUncheckedCreateWithoutListOfCreatedClassroomInput>
  }

  export type AnnouncementCreateWithoutRelatedToClassroomInput = {
    title: string
    description?: string | null
    createdAt?: Date | string | null
    listOfFiles?: FilesCreateNestedManyWithoutRelatedToAnnouncementInput
  }

  export type AnnouncementUncheckedCreateWithoutRelatedToClassroomInput = {
    id?: number
    title: string
    description?: string | null
    createdAt?: Date | string | null
    listOfFiles?: FilesUncheckedCreateNestedManyWithoutRelatedToAnnouncementInput
  }

  export type AnnouncementCreateOrConnectWithoutRelatedToClassroomInput = {
    where: AnnouncementWhereUniqueInput
    create: XOR<AnnouncementCreateWithoutRelatedToClassroomInput, AnnouncementUncheckedCreateWithoutRelatedToClassroomInput>
  }

  export type AnnouncementCreateManyRelatedToClassroomInputEnvelope = {
    data: AnnouncementCreateManyRelatedToClassroomInput | AnnouncementCreateManyRelatedToClassroomInput[]
    skipDuplicates?: boolean
  }

  export type ActivityCreateWithoutRelatedToClassroomInput = {
    title: string
    date: string
    time: string
    instruction?: string | null
    criteria?: FilesCreateNestedManyWithoutRelatedToActivityInput
    outputs?: OutputCreateNestedManyWithoutRelatedToActivityInput
  }

  export type ActivityUncheckedCreateWithoutRelatedToClassroomInput = {
    id?: number
    title: string
    date: string
    time: string
    instruction?: string | null
    criteria?: FilesUncheckedCreateNestedManyWithoutRelatedToActivityInput
    outputs?: OutputUncheckedCreateNestedManyWithoutRelatedToActivityInput
  }

  export type ActivityCreateOrConnectWithoutRelatedToClassroomInput = {
    where: ActivityWhereUniqueInput
    create: XOR<ActivityCreateWithoutRelatedToClassroomInput, ActivityUncheckedCreateWithoutRelatedToClassroomInput>
  }

  export type ActivityCreateManyRelatedToClassroomInputEnvelope = {
    data: ActivityCreateManyRelatedToClassroomInput | ActivityCreateManyRelatedToClassroomInput[]
    skipDuplicates?: boolean
  }

  export type StudentCreateWithoutRelatedtoClassroomInput = {
    lastname: string
    firstname: string
    middlename: string
    sex: string
    status?: $Enums.ClassroomStatus
    relatedToUser: UserCreateNestedOneWithoutStudentInput
    listOfOutputs?: OutputCreateNestedManyWithoutRelatedToStudentInput
  }

  export type StudentUncheckedCreateWithoutRelatedtoClassroomInput = {
    userId: number
    lastname: string
    firstname: string
    middlename: string
    sex: string
    status?: $Enums.ClassroomStatus
    listOfOutputs?: OutputUncheckedCreateNestedManyWithoutRelatedToStudentInput
  }

  export type StudentCreateOrConnectWithoutRelatedtoClassroomInput = {
    where: StudentWhereUniqueInput
    create: XOR<StudentCreateWithoutRelatedtoClassroomInput, StudentUncheckedCreateWithoutRelatedtoClassroomInput>
  }

  export type StudentCreateManyRelatedtoClassroomInputEnvelope = {
    data: StudentCreateManyRelatedtoClassroomInput | StudentCreateManyRelatedtoClassroomInput[]
    skipDuplicates?: boolean
  }

  export type OutputCreateWithoutRelatedToClassroomInput = {
    listOfFiles?: FilesCreateNestedManyWithoutRelatedToOutputInput
    relatedToStudent?: StudentCreateNestedOneWithoutListOfOutputsInput
    relatedToActivity?: ActivityCreateNestedOneWithoutOutputsInput
    relatedToFeedback?: FeedbackCreateNestedOneWithoutOutputInput
    relatedToScore?: ScoreCreateNestedOneWithoutOutputInput
  }

  export type OutputUncheckedCreateWithoutRelatedToClassroomInput = {
    id?: number
    studentId?: number | null
    activityId?: number | null
    feedbackId?: number | null
    scoreId?: number | null
    listOfFiles?: FilesUncheckedCreateNestedManyWithoutRelatedToOutputInput
  }

  export type OutputCreateOrConnectWithoutRelatedToClassroomInput = {
    where: OutputWhereUniqueInput
    create: XOR<OutputCreateWithoutRelatedToClassroomInput, OutputUncheckedCreateWithoutRelatedToClassroomInput>
  }

  export type OutputCreateManyRelatedToClassroomInputEnvelope = {
    data: OutputCreateManyRelatedToClassroomInput | OutputCreateManyRelatedToClassroomInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutListOfCreatedClassroomInput = {
    update: XOR<UserUpdateWithoutListOfCreatedClassroomInput, UserUncheckedUpdateWithoutListOfCreatedClassroomInput>
    create: XOR<UserCreateWithoutListOfCreatedClassroomInput, UserUncheckedCreateWithoutListOfCreatedClassroomInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutListOfCreatedClassroomInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutListOfCreatedClassroomInput, UserUncheckedUpdateWithoutListOfCreatedClassroomInput>
  }

  export type UserUpdateWithoutListOfCreatedClassroomInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    student?: StudentUpdateOneWithoutRelatedToUserNestedInput
  }

  export type UserUncheckedUpdateWithoutListOfCreatedClassroomInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    student?: StudentUncheckedUpdateOneWithoutRelatedToUserNestedInput
  }

  export type AnnouncementUpsertWithWhereUniqueWithoutRelatedToClassroomInput = {
    where: AnnouncementWhereUniqueInput
    update: XOR<AnnouncementUpdateWithoutRelatedToClassroomInput, AnnouncementUncheckedUpdateWithoutRelatedToClassroomInput>
    create: XOR<AnnouncementCreateWithoutRelatedToClassroomInput, AnnouncementUncheckedCreateWithoutRelatedToClassroomInput>
  }

  export type AnnouncementUpdateWithWhereUniqueWithoutRelatedToClassroomInput = {
    where: AnnouncementWhereUniqueInput
    data: XOR<AnnouncementUpdateWithoutRelatedToClassroomInput, AnnouncementUncheckedUpdateWithoutRelatedToClassroomInput>
  }

  export type AnnouncementUpdateManyWithWhereWithoutRelatedToClassroomInput = {
    where: AnnouncementScalarWhereInput
    data: XOR<AnnouncementUpdateManyMutationInput, AnnouncementUncheckedUpdateManyWithoutRelatedToClassroomInput>
  }

  export type AnnouncementScalarWhereInput = {
    AND?: AnnouncementScalarWhereInput | AnnouncementScalarWhereInput[]
    OR?: AnnouncementScalarWhereInput[]
    NOT?: AnnouncementScalarWhereInput | AnnouncementScalarWhereInput[]
    id?: IntFilter<"Announcement"> | number
    title?: StringFilter<"Announcement"> | string
    description?: StringNullableFilter<"Announcement"> | string | null
    roomId?: IntFilter<"Announcement"> | number
    createdAt?: DateTimeNullableFilter<"Announcement"> | Date | string | null
  }

  export type ActivityUpsertWithWhereUniqueWithoutRelatedToClassroomInput = {
    where: ActivityWhereUniqueInput
    update: XOR<ActivityUpdateWithoutRelatedToClassroomInput, ActivityUncheckedUpdateWithoutRelatedToClassroomInput>
    create: XOR<ActivityCreateWithoutRelatedToClassroomInput, ActivityUncheckedCreateWithoutRelatedToClassroomInput>
  }

  export type ActivityUpdateWithWhereUniqueWithoutRelatedToClassroomInput = {
    where: ActivityWhereUniqueInput
    data: XOR<ActivityUpdateWithoutRelatedToClassroomInput, ActivityUncheckedUpdateWithoutRelatedToClassroomInput>
  }

  export type ActivityUpdateManyWithWhereWithoutRelatedToClassroomInput = {
    where: ActivityScalarWhereInput
    data: XOR<ActivityUpdateManyMutationInput, ActivityUncheckedUpdateManyWithoutRelatedToClassroomInput>
  }

  export type ActivityScalarWhereInput = {
    AND?: ActivityScalarWhereInput | ActivityScalarWhereInput[]
    OR?: ActivityScalarWhereInput[]
    NOT?: ActivityScalarWhereInput | ActivityScalarWhereInput[]
    id?: IntFilter<"Activity"> | number
    title?: StringFilter<"Activity"> | string
    date?: StringFilter<"Activity"> | string
    time?: StringFilter<"Activity"> | string
    instruction?: StringNullableFilter<"Activity"> | string | null
    roomId?: IntFilter<"Activity"> | number
  }

  export type StudentUpsertWithWhereUniqueWithoutRelatedtoClassroomInput = {
    where: StudentWhereUniqueInput
    update: XOR<StudentUpdateWithoutRelatedtoClassroomInput, StudentUncheckedUpdateWithoutRelatedtoClassroomInput>
    create: XOR<StudentCreateWithoutRelatedtoClassroomInput, StudentUncheckedCreateWithoutRelatedtoClassroomInput>
  }

  export type StudentUpdateWithWhereUniqueWithoutRelatedtoClassroomInput = {
    where: StudentWhereUniqueInput
    data: XOR<StudentUpdateWithoutRelatedtoClassroomInput, StudentUncheckedUpdateWithoutRelatedtoClassroomInput>
  }

  export type StudentUpdateManyWithWhereWithoutRelatedtoClassroomInput = {
    where: StudentScalarWhereInput
    data: XOR<StudentUpdateManyMutationInput, StudentUncheckedUpdateManyWithoutRelatedtoClassroomInput>
  }

  export type StudentScalarWhereInput = {
    AND?: StudentScalarWhereInput | StudentScalarWhereInput[]
    OR?: StudentScalarWhereInput[]
    NOT?: StudentScalarWhereInput | StudentScalarWhereInput[]
    userId?: IntFilter<"Student"> | number
    lastname?: StringFilter<"Student"> | string
    firstname?: StringFilter<"Student"> | string
    middlename?: StringFilter<"Student"> | string
    sex?: StringFilter<"Student"> | string
    status?: EnumClassroomStatusFilter<"Student"> | $Enums.ClassroomStatus
    roomId?: IntNullableFilter<"Student"> | number | null
  }

  export type OutputUpsertWithWhereUniqueWithoutRelatedToClassroomInput = {
    where: OutputWhereUniqueInput
    update: XOR<OutputUpdateWithoutRelatedToClassroomInput, OutputUncheckedUpdateWithoutRelatedToClassroomInput>
    create: XOR<OutputCreateWithoutRelatedToClassroomInput, OutputUncheckedCreateWithoutRelatedToClassroomInput>
  }

  export type OutputUpdateWithWhereUniqueWithoutRelatedToClassroomInput = {
    where: OutputWhereUniqueInput
    data: XOR<OutputUpdateWithoutRelatedToClassroomInput, OutputUncheckedUpdateWithoutRelatedToClassroomInput>
  }

  export type OutputUpdateManyWithWhereWithoutRelatedToClassroomInput = {
    where: OutputScalarWhereInput
    data: XOR<OutputUpdateManyMutationInput, OutputUncheckedUpdateManyWithoutRelatedToClassroomInput>
  }

  export type FilesCreateWithoutRelatedToActivityInput = {
    filename: string
    mimetype: string
    fileSize: number
    folderPath?: string | null
    filePath?: string | null
    publicFileUrl?: string | null
    status?: $Enums.OutputStatus
    relatedToAnnouncement?: AnnouncementCreateNestedOneWithoutListOfFilesInput
    relatedToOutput?: OutputCreateNestedOneWithoutListOfFilesInput
  }

  export type FilesUncheckedCreateWithoutRelatedToActivityInput = {
    id?: number
    filename: string
    mimetype: string
    fileSize: number
    folderPath?: string | null
    filePath?: string | null
    announceId?: number | null
    outputId?: number | null
    publicFileUrl?: string | null
    status?: $Enums.OutputStatus
  }

  export type FilesCreateOrConnectWithoutRelatedToActivityInput = {
    where: FilesWhereUniqueInput
    create: XOR<FilesCreateWithoutRelatedToActivityInput, FilesUncheckedCreateWithoutRelatedToActivityInput>
  }

  export type FilesCreateManyRelatedToActivityInputEnvelope = {
    data: FilesCreateManyRelatedToActivityInput | FilesCreateManyRelatedToActivityInput[]
    skipDuplicates?: boolean
  }

  export type OutputCreateWithoutRelatedToActivityInput = {
    listOfFiles?: FilesCreateNestedManyWithoutRelatedToOutputInput
    relatedToStudent?: StudentCreateNestedOneWithoutListOfOutputsInput
    relatedToClassroom?: ClassroomCreateNestedOneWithoutListOfOutputsInput
    relatedToFeedback?: FeedbackCreateNestedOneWithoutOutputInput
    relatedToScore?: ScoreCreateNestedOneWithoutOutputInput
  }

  export type OutputUncheckedCreateWithoutRelatedToActivityInput = {
    id?: number
    studentId?: number | null
    roomId?: number | null
    feedbackId?: number | null
    scoreId?: number | null
    listOfFiles?: FilesUncheckedCreateNestedManyWithoutRelatedToOutputInput
  }

  export type OutputCreateOrConnectWithoutRelatedToActivityInput = {
    where: OutputWhereUniqueInput
    create: XOR<OutputCreateWithoutRelatedToActivityInput, OutputUncheckedCreateWithoutRelatedToActivityInput>
  }

  export type OutputCreateManyRelatedToActivityInputEnvelope = {
    data: OutputCreateManyRelatedToActivityInput | OutputCreateManyRelatedToActivityInput[]
    skipDuplicates?: boolean
  }

  export type ClassroomCreateWithoutListOfActivityInput = {
    classname: string
    section: string
    subject: string
    room: string
    classcode?: string | null
    relatedToUser: UserCreateNestedOneWithoutListOfCreatedClassroomInput
    listOfAnnouncements?: AnnouncementCreateNestedManyWithoutRelatedToClassroomInput
    listOfStudents?: StudentCreateNestedManyWithoutRelatedtoClassroomInput
    listOfOutputs?: OutputCreateNestedManyWithoutRelatedToClassroomInput
  }

  export type ClassroomUncheckedCreateWithoutListOfActivityInput = {
    id?: number
    classname: string
    section: string
    subject: string
    room: string
    classcode?: string | null
    userId: number
    listOfAnnouncements?: AnnouncementUncheckedCreateNestedManyWithoutRelatedToClassroomInput
    listOfStudents?: StudentUncheckedCreateNestedManyWithoutRelatedtoClassroomInput
    listOfOutputs?: OutputUncheckedCreateNestedManyWithoutRelatedToClassroomInput
  }

  export type ClassroomCreateOrConnectWithoutListOfActivityInput = {
    where: ClassroomWhereUniqueInput
    create: XOR<ClassroomCreateWithoutListOfActivityInput, ClassroomUncheckedCreateWithoutListOfActivityInput>
  }

  export type FilesUpsertWithWhereUniqueWithoutRelatedToActivityInput = {
    where: FilesWhereUniqueInput
    update: XOR<FilesUpdateWithoutRelatedToActivityInput, FilesUncheckedUpdateWithoutRelatedToActivityInput>
    create: XOR<FilesCreateWithoutRelatedToActivityInput, FilesUncheckedCreateWithoutRelatedToActivityInput>
  }

  export type FilesUpdateWithWhereUniqueWithoutRelatedToActivityInput = {
    where: FilesWhereUniqueInput
    data: XOR<FilesUpdateWithoutRelatedToActivityInput, FilesUncheckedUpdateWithoutRelatedToActivityInput>
  }

  export type FilesUpdateManyWithWhereWithoutRelatedToActivityInput = {
    where: FilesScalarWhereInput
    data: XOR<FilesUpdateManyMutationInput, FilesUncheckedUpdateManyWithoutRelatedToActivityInput>
  }

  export type FilesScalarWhereInput = {
    AND?: FilesScalarWhereInput | FilesScalarWhereInput[]
    OR?: FilesScalarWhereInput[]
    NOT?: FilesScalarWhereInput | FilesScalarWhereInput[]
    id?: IntFilter<"Files"> | number
    filename?: StringFilter<"Files"> | string
    mimetype?: StringFilter<"Files"> | string
    fileSize?: IntFilter<"Files"> | number
    folderPath?: StringNullableFilter<"Files"> | string | null
    filePath?: StringNullableFilter<"Files"> | string | null
    activityId?: IntNullableFilter<"Files"> | number | null
    announceId?: IntNullableFilter<"Files"> | number | null
    outputId?: IntNullableFilter<"Files"> | number | null
    publicFileUrl?: StringNullableFilter<"Files"> | string | null
    status?: EnumOutputStatusFilter<"Files"> | $Enums.OutputStatus
  }

  export type OutputUpsertWithWhereUniqueWithoutRelatedToActivityInput = {
    where: OutputWhereUniqueInput
    update: XOR<OutputUpdateWithoutRelatedToActivityInput, OutputUncheckedUpdateWithoutRelatedToActivityInput>
    create: XOR<OutputCreateWithoutRelatedToActivityInput, OutputUncheckedCreateWithoutRelatedToActivityInput>
  }

  export type OutputUpdateWithWhereUniqueWithoutRelatedToActivityInput = {
    where: OutputWhereUniqueInput
    data: XOR<OutputUpdateWithoutRelatedToActivityInput, OutputUncheckedUpdateWithoutRelatedToActivityInput>
  }

  export type OutputUpdateManyWithWhereWithoutRelatedToActivityInput = {
    where: OutputScalarWhereInput
    data: XOR<OutputUpdateManyMutationInput, OutputUncheckedUpdateManyWithoutRelatedToActivityInput>
  }

  export type ClassroomUpsertWithoutListOfActivityInput = {
    update: XOR<ClassroomUpdateWithoutListOfActivityInput, ClassroomUncheckedUpdateWithoutListOfActivityInput>
    create: XOR<ClassroomCreateWithoutListOfActivityInput, ClassroomUncheckedCreateWithoutListOfActivityInput>
    where?: ClassroomWhereInput
  }

  export type ClassroomUpdateToOneWithWhereWithoutListOfActivityInput = {
    where?: ClassroomWhereInput
    data: XOR<ClassroomUpdateWithoutListOfActivityInput, ClassroomUncheckedUpdateWithoutListOfActivityInput>
  }

  export type ClassroomUpdateWithoutListOfActivityInput = {
    classname?: StringFieldUpdateOperationsInput | string
    section?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    room?: StringFieldUpdateOperationsInput | string
    classcode?: NullableStringFieldUpdateOperationsInput | string | null
    relatedToUser?: UserUpdateOneRequiredWithoutListOfCreatedClassroomNestedInput
    listOfAnnouncements?: AnnouncementUpdateManyWithoutRelatedToClassroomNestedInput
    listOfStudents?: StudentUpdateManyWithoutRelatedtoClassroomNestedInput
    listOfOutputs?: OutputUpdateManyWithoutRelatedToClassroomNestedInput
  }

  export type ClassroomUncheckedUpdateWithoutListOfActivityInput = {
    id?: IntFieldUpdateOperationsInput | number
    classname?: StringFieldUpdateOperationsInput | string
    section?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    room?: StringFieldUpdateOperationsInput | string
    classcode?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: IntFieldUpdateOperationsInput | number
    listOfAnnouncements?: AnnouncementUncheckedUpdateManyWithoutRelatedToClassroomNestedInput
    listOfStudents?: StudentUncheckedUpdateManyWithoutRelatedtoClassroomNestedInput
    listOfOutputs?: OutputUncheckedUpdateManyWithoutRelatedToClassroomNestedInput
  }

  export type ClassroomCreateWithoutListOfAnnouncementsInput = {
    classname: string
    section: string
    subject: string
    room: string
    classcode?: string | null
    relatedToUser: UserCreateNestedOneWithoutListOfCreatedClassroomInput
    listOfActivity?: ActivityCreateNestedManyWithoutRelatedToClassroomInput
    listOfStudents?: StudentCreateNestedManyWithoutRelatedtoClassroomInput
    listOfOutputs?: OutputCreateNestedManyWithoutRelatedToClassroomInput
  }

  export type ClassroomUncheckedCreateWithoutListOfAnnouncementsInput = {
    id?: number
    classname: string
    section: string
    subject: string
    room: string
    classcode?: string | null
    userId: number
    listOfActivity?: ActivityUncheckedCreateNestedManyWithoutRelatedToClassroomInput
    listOfStudents?: StudentUncheckedCreateNestedManyWithoutRelatedtoClassroomInput
    listOfOutputs?: OutputUncheckedCreateNestedManyWithoutRelatedToClassroomInput
  }

  export type ClassroomCreateOrConnectWithoutListOfAnnouncementsInput = {
    where: ClassroomWhereUniqueInput
    create: XOR<ClassroomCreateWithoutListOfAnnouncementsInput, ClassroomUncheckedCreateWithoutListOfAnnouncementsInput>
  }

  export type FilesCreateWithoutRelatedToAnnouncementInput = {
    filename: string
    mimetype: string
    fileSize: number
    folderPath?: string | null
    filePath?: string | null
    publicFileUrl?: string | null
    status?: $Enums.OutputStatus
    relatedToActivity?: ActivityCreateNestedOneWithoutCriteriaInput
    relatedToOutput?: OutputCreateNestedOneWithoutListOfFilesInput
  }

  export type FilesUncheckedCreateWithoutRelatedToAnnouncementInput = {
    id?: number
    filename: string
    mimetype: string
    fileSize: number
    folderPath?: string | null
    filePath?: string | null
    activityId?: number | null
    outputId?: number | null
    publicFileUrl?: string | null
    status?: $Enums.OutputStatus
  }

  export type FilesCreateOrConnectWithoutRelatedToAnnouncementInput = {
    where: FilesWhereUniqueInput
    create: XOR<FilesCreateWithoutRelatedToAnnouncementInput, FilesUncheckedCreateWithoutRelatedToAnnouncementInput>
  }

  export type FilesCreateManyRelatedToAnnouncementInputEnvelope = {
    data: FilesCreateManyRelatedToAnnouncementInput | FilesCreateManyRelatedToAnnouncementInput[]
    skipDuplicates?: boolean
  }

  export type ClassroomUpsertWithoutListOfAnnouncementsInput = {
    update: XOR<ClassroomUpdateWithoutListOfAnnouncementsInput, ClassroomUncheckedUpdateWithoutListOfAnnouncementsInput>
    create: XOR<ClassroomCreateWithoutListOfAnnouncementsInput, ClassroomUncheckedCreateWithoutListOfAnnouncementsInput>
    where?: ClassroomWhereInput
  }

  export type ClassroomUpdateToOneWithWhereWithoutListOfAnnouncementsInput = {
    where?: ClassroomWhereInput
    data: XOR<ClassroomUpdateWithoutListOfAnnouncementsInput, ClassroomUncheckedUpdateWithoutListOfAnnouncementsInput>
  }

  export type ClassroomUpdateWithoutListOfAnnouncementsInput = {
    classname?: StringFieldUpdateOperationsInput | string
    section?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    room?: StringFieldUpdateOperationsInput | string
    classcode?: NullableStringFieldUpdateOperationsInput | string | null
    relatedToUser?: UserUpdateOneRequiredWithoutListOfCreatedClassroomNestedInput
    listOfActivity?: ActivityUpdateManyWithoutRelatedToClassroomNestedInput
    listOfStudents?: StudentUpdateManyWithoutRelatedtoClassroomNestedInput
    listOfOutputs?: OutputUpdateManyWithoutRelatedToClassroomNestedInput
  }

  export type ClassroomUncheckedUpdateWithoutListOfAnnouncementsInput = {
    id?: IntFieldUpdateOperationsInput | number
    classname?: StringFieldUpdateOperationsInput | string
    section?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    room?: StringFieldUpdateOperationsInput | string
    classcode?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: IntFieldUpdateOperationsInput | number
    listOfActivity?: ActivityUncheckedUpdateManyWithoutRelatedToClassroomNestedInput
    listOfStudents?: StudentUncheckedUpdateManyWithoutRelatedtoClassroomNestedInput
    listOfOutputs?: OutputUncheckedUpdateManyWithoutRelatedToClassroomNestedInput
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

  export type FilesCreateWithoutRelatedToOutputInput = {
    filename: string
    mimetype: string
    fileSize: number
    folderPath?: string | null
    filePath?: string | null
    publicFileUrl?: string | null
    status?: $Enums.OutputStatus
    relatedToActivity?: ActivityCreateNestedOneWithoutCriteriaInput
    relatedToAnnouncement?: AnnouncementCreateNestedOneWithoutListOfFilesInput
  }

  export type FilesUncheckedCreateWithoutRelatedToOutputInput = {
    id?: number
    filename: string
    mimetype: string
    fileSize: number
    folderPath?: string | null
    filePath?: string | null
    activityId?: number | null
    announceId?: number | null
    publicFileUrl?: string | null
    status?: $Enums.OutputStatus
  }

  export type FilesCreateOrConnectWithoutRelatedToOutputInput = {
    where: FilesWhereUniqueInput
    create: XOR<FilesCreateWithoutRelatedToOutputInput, FilesUncheckedCreateWithoutRelatedToOutputInput>
  }

  export type FilesCreateManyRelatedToOutputInputEnvelope = {
    data: FilesCreateManyRelatedToOutputInput | FilesCreateManyRelatedToOutputInput[]
    skipDuplicates?: boolean
  }

  export type StudentCreateWithoutListOfOutputsInput = {
    lastname: string
    firstname: string
    middlename: string
    sex: string
    status?: $Enums.ClassroomStatus
    relatedToUser: UserCreateNestedOneWithoutStudentInput
    relatedtoClassroom?: ClassroomCreateNestedOneWithoutListOfStudentsInput
  }

  export type StudentUncheckedCreateWithoutListOfOutputsInput = {
    userId: number
    lastname: string
    firstname: string
    middlename: string
    sex: string
    status?: $Enums.ClassroomStatus
    roomId?: number | null
  }

  export type StudentCreateOrConnectWithoutListOfOutputsInput = {
    where: StudentWhereUniqueInput
    create: XOR<StudentCreateWithoutListOfOutputsInput, StudentUncheckedCreateWithoutListOfOutputsInput>
  }

  export type ClassroomCreateWithoutListOfOutputsInput = {
    classname: string
    section: string
    subject: string
    room: string
    classcode?: string | null
    relatedToUser: UserCreateNestedOneWithoutListOfCreatedClassroomInput
    listOfAnnouncements?: AnnouncementCreateNestedManyWithoutRelatedToClassroomInput
    listOfActivity?: ActivityCreateNestedManyWithoutRelatedToClassroomInput
    listOfStudents?: StudentCreateNestedManyWithoutRelatedtoClassroomInput
  }

  export type ClassroomUncheckedCreateWithoutListOfOutputsInput = {
    id?: number
    classname: string
    section: string
    subject: string
    room: string
    classcode?: string | null
    userId: number
    listOfAnnouncements?: AnnouncementUncheckedCreateNestedManyWithoutRelatedToClassroomInput
    listOfActivity?: ActivityUncheckedCreateNestedManyWithoutRelatedToClassroomInput
    listOfStudents?: StudentUncheckedCreateNestedManyWithoutRelatedtoClassroomInput
  }

  export type ClassroomCreateOrConnectWithoutListOfOutputsInput = {
    where: ClassroomWhereUniqueInput
    create: XOR<ClassroomCreateWithoutListOfOutputsInput, ClassroomUncheckedCreateWithoutListOfOutputsInput>
  }

  export type ActivityCreateWithoutOutputsInput = {
    title: string
    date: string
    time: string
    instruction?: string | null
    criteria?: FilesCreateNestedManyWithoutRelatedToActivityInput
    relatedToClassroom: ClassroomCreateNestedOneWithoutListOfActivityInput
  }

  export type ActivityUncheckedCreateWithoutOutputsInput = {
    id?: number
    title: string
    date: string
    time: string
    instruction?: string | null
    roomId: number
    criteria?: FilesUncheckedCreateNestedManyWithoutRelatedToActivityInput
  }

  export type ActivityCreateOrConnectWithoutOutputsInput = {
    where: ActivityWhereUniqueInput
    create: XOR<ActivityCreateWithoutOutputsInput, ActivityUncheckedCreateWithoutOutputsInput>
  }

  export type FeedbackCreateWithoutOutputInput = {
    feedback?: string | null
  }

  export type FeedbackUncheckedCreateWithoutOutputInput = {
    id?: number
    feedback?: string | null
  }

  export type FeedbackCreateOrConnectWithoutOutputInput = {
    where: FeedbackWhereUniqueInput
    create: XOR<FeedbackCreateWithoutOutputInput, FeedbackUncheckedCreateWithoutOutputInput>
  }

  export type ScoreCreateWithoutOutputInput = {
    score?: number | null
  }

  export type ScoreUncheckedCreateWithoutOutputInput = {
    id?: number
    score?: number | null
  }

  export type ScoreCreateOrConnectWithoutOutputInput = {
    where: ScoreWhereUniqueInput
    create: XOR<ScoreCreateWithoutOutputInput, ScoreUncheckedCreateWithoutOutputInput>
  }

  export type FilesUpsertWithWhereUniqueWithoutRelatedToOutputInput = {
    where: FilesWhereUniqueInput
    update: XOR<FilesUpdateWithoutRelatedToOutputInput, FilesUncheckedUpdateWithoutRelatedToOutputInput>
    create: XOR<FilesCreateWithoutRelatedToOutputInput, FilesUncheckedCreateWithoutRelatedToOutputInput>
  }

  export type FilesUpdateWithWhereUniqueWithoutRelatedToOutputInput = {
    where: FilesWhereUniqueInput
    data: XOR<FilesUpdateWithoutRelatedToOutputInput, FilesUncheckedUpdateWithoutRelatedToOutputInput>
  }

  export type FilesUpdateManyWithWhereWithoutRelatedToOutputInput = {
    where: FilesScalarWhereInput
    data: XOR<FilesUpdateManyMutationInput, FilesUncheckedUpdateManyWithoutRelatedToOutputInput>
  }

  export type StudentUpsertWithoutListOfOutputsInput = {
    update: XOR<StudentUpdateWithoutListOfOutputsInput, StudentUncheckedUpdateWithoutListOfOutputsInput>
    create: XOR<StudentCreateWithoutListOfOutputsInput, StudentUncheckedCreateWithoutListOfOutputsInput>
    where?: StudentWhereInput
  }

  export type StudentUpdateToOneWithWhereWithoutListOfOutputsInput = {
    where?: StudentWhereInput
    data: XOR<StudentUpdateWithoutListOfOutputsInput, StudentUncheckedUpdateWithoutListOfOutputsInput>
  }

  export type StudentUpdateWithoutListOfOutputsInput = {
    lastname?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    middlename?: StringFieldUpdateOperationsInput | string
    sex?: StringFieldUpdateOperationsInput | string
    status?: EnumClassroomStatusFieldUpdateOperationsInput | $Enums.ClassroomStatus
    relatedToUser?: UserUpdateOneRequiredWithoutStudentNestedInput
    relatedtoClassroom?: ClassroomUpdateOneWithoutListOfStudentsNestedInput
  }

  export type StudentUncheckedUpdateWithoutListOfOutputsInput = {
    userId?: IntFieldUpdateOperationsInput | number
    lastname?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    middlename?: StringFieldUpdateOperationsInput | string
    sex?: StringFieldUpdateOperationsInput | string
    status?: EnumClassroomStatusFieldUpdateOperationsInput | $Enums.ClassroomStatus
    roomId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ClassroomUpsertWithoutListOfOutputsInput = {
    update: XOR<ClassroomUpdateWithoutListOfOutputsInput, ClassroomUncheckedUpdateWithoutListOfOutputsInput>
    create: XOR<ClassroomCreateWithoutListOfOutputsInput, ClassroomUncheckedCreateWithoutListOfOutputsInput>
    where?: ClassroomWhereInput
  }

  export type ClassroomUpdateToOneWithWhereWithoutListOfOutputsInput = {
    where?: ClassroomWhereInput
    data: XOR<ClassroomUpdateWithoutListOfOutputsInput, ClassroomUncheckedUpdateWithoutListOfOutputsInput>
  }

  export type ClassroomUpdateWithoutListOfOutputsInput = {
    classname?: StringFieldUpdateOperationsInput | string
    section?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    room?: StringFieldUpdateOperationsInput | string
    classcode?: NullableStringFieldUpdateOperationsInput | string | null
    relatedToUser?: UserUpdateOneRequiredWithoutListOfCreatedClassroomNestedInput
    listOfAnnouncements?: AnnouncementUpdateManyWithoutRelatedToClassroomNestedInput
    listOfActivity?: ActivityUpdateManyWithoutRelatedToClassroomNestedInput
    listOfStudents?: StudentUpdateManyWithoutRelatedtoClassroomNestedInput
  }

  export type ClassroomUncheckedUpdateWithoutListOfOutputsInput = {
    id?: IntFieldUpdateOperationsInput | number
    classname?: StringFieldUpdateOperationsInput | string
    section?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    room?: StringFieldUpdateOperationsInput | string
    classcode?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: IntFieldUpdateOperationsInput | number
    listOfAnnouncements?: AnnouncementUncheckedUpdateManyWithoutRelatedToClassroomNestedInput
    listOfActivity?: ActivityUncheckedUpdateManyWithoutRelatedToClassroomNestedInput
    listOfStudents?: StudentUncheckedUpdateManyWithoutRelatedtoClassroomNestedInput
  }

  export type ActivityUpsertWithoutOutputsInput = {
    update: XOR<ActivityUpdateWithoutOutputsInput, ActivityUncheckedUpdateWithoutOutputsInput>
    create: XOR<ActivityCreateWithoutOutputsInput, ActivityUncheckedCreateWithoutOutputsInput>
    where?: ActivityWhereInput
  }

  export type ActivityUpdateToOneWithWhereWithoutOutputsInput = {
    where?: ActivityWhereInput
    data: XOR<ActivityUpdateWithoutOutputsInput, ActivityUncheckedUpdateWithoutOutputsInput>
  }

  export type ActivityUpdateWithoutOutputsInput = {
    title?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    time?: StringFieldUpdateOperationsInput | string
    instruction?: NullableStringFieldUpdateOperationsInput | string | null
    criteria?: FilesUpdateManyWithoutRelatedToActivityNestedInput
    relatedToClassroom?: ClassroomUpdateOneRequiredWithoutListOfActivityNestedInput
  }

  export type ActivityUncheckedUpdateWithoutOutputsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    time?: StringFieldUpdateOperationsInput | string
    instruction?: NullableStringFieldUpdateOperationsInput | string | null
    roomId?: IntFieldUpdateOperationsInput | number
    criteria?: FilesUncheckedUpdateManyWithoutRelatedToActivityNestedInput
  }

  export type FeedbackUpsertWithoutOutputInput = {
    update: XOR<FeedbackUpdateWithoutOutputInput, FeedbackUncheckedUpdateWithoutOutputInput>
    create: XOR<FeedbackCreateWithoutOutputInput, FeedbackUncheckedCreateWithoutOutputInput>
    where?: FeedbackWhereInput
  }

  export type FeedbackUpdateToOneWithWhereWithoutOutputInput = {
    where?: FeedbackWhereInput
    data: XOR<FeedbackUpdateWithoutOutputInput, FeedbackUncheckedUpdateWithoutOutputInput>
  }

  export type FeedbackUpdateWithoutOutputInput = {
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type FeedbackUncheckedUpdateWithoutOutputInput = {
    id?: IntFieldUpdateOperationsInput | number
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ScoreUpsertWithoutOutputInput = {
    update: XOR<ScoreUpdateWithoutOutputInput, ScoreUncheckedUpdateWithoutOutputInput>
    create: XOR<ScoreCreateWithoutOutputInput, ScoreUncheckedCreateWithoutOutputInput>
    where?: ScoreWhereInput
  }

  export type ScoreUpdateToOneWithWhereWithoutOutputInput = {
    where?: ScoreWhereInput
    data: XOR<ScoreUpdateWithoutOutputInput, ScoreUncheckedUpdateWithoutOutputInput>
  }

  export type ScoreUpdateWithoutOutputInput = {
    score?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ScoreUncheckedUpdateWithoutOutputInput = {
    id?: IntFieldUpdateOperationsInput | number
    score?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ActivityCreateWithoutCriteriaInput = {
    title: string
    date: string
    time: string
    instruction?: string | null
    outputs?: OutputCreateNestedManyWithoutRelatedToActivityInput
    relatedToClassroom: ClassroomCreateNestedOneWithoutListOfActivityInput
  }

  export type ActivityUncheckedCreateWithoutCriteriaInput = {
    id?: number
    title: string
    date: string
    time: string
    instruction?: string | null
    roomId: number
    outputs?: OutputUncheckedCreateNestedManyWithoutRelatedToActivityInput
  }

  export type ActivityCreateOrConnectWithoutCriteriaInput = {
    where: ActivityWhereUniqueInput
    create: XOR<ActivityCreateWithoutCriteriaInput, ActivityUncheckedCreateWithoutCriteriaInput>
  }

  export type AnnouncementCreateWithoutListOfFilesInput = {
    title: string
    description?: string | null
    createdAt?: Date | string | null
    relatedToClassroom: ClassroomCreateNestedOneWithoutListOfAnnouncementsInput
  }

  export type AnnouncementUncheckedCreateWithoutListOfFilesInput = {
    id?: number
    title: string
    description?: string | null
    roomId: number
    createdAt?: Date | string | null
  }

  export type AnnouncementCreateOrConnectWithoutListOfFilesInput = {
    where: AnnouncementWhereUniqueInput
    create: XOR<AnnouncementCreateWithoutListOfFilesInput, AnnouncementUncheckedCreateWithoutListOfFilesInput>
  }

  export type OutputCreateWithoutListOfFilesInput = {
    relatedToStudent?: StudentCreateNestedOneWithoutListOfOutputsInput
    relatedToClassroom?: ClassroomCreateNestedOneWithoutListOfOutputsInput
    relatedToActivity?: ActivityCreateNestedOneWithoutOutputsInput
    relatedToFeedback?: FeedbackCreateNestedOneWithoutOutputInput
    relatedToScore?: ScoreCreateNestedOneWithoutOutputInput
  }

  export type OutputUncheckedCreateWithoutListOfFilesInput = {
    id?: number
    studentId?: number | null
    roomId?: number | null
    activityId?: number | null
    feedbackId?: number | null
    scoreId?: number | null
  }

  export type OutputCreateOrConnectWithoutListOfFilesInput = {
    where: OutputWhereUniqueInput
    create: XOR<OutputCreateWithoutListOfFilesInput, OutputUncheckedCreateWithoutListOfFilesInput>
  }

  export type ActivityUpsertWithoutCriteriaInput = {
    update: XOR<ActivityUpdateWithoutCriteriaInput, ActivityUncheckedUpdateWithoutCriteriaInput>
    create: XOR<ActivityCreateWithoutCriteriaInput, ActivityUncheckedCreateWithoutCriteriaInput>
    where?: ActivityWhereInput
  }

  export type ActivityUpdateToOneWithWhereWithoutCriteriaInput = {
    where?: ActivityWhereInput
    data: XOR<ActivityUpdateWithoutCriteriaInput, ActivityUncheckedUpdateWithoutCriteriaInput>
  }

  export type ActivityUpdateWithoutCriteriaInput = {
    title?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    time?: StringFieldUpdateOperationsInput | string
    instruction?: NullableStringFieldUpdateOperationsInput | string | null
    outputs?: OutputUpdateManyWithoutRelatedToActivityNestedInput
    relatedToClassroom?: ClassroomUpdateOneRequiredWithoutListOfActivityNestedInput
  }

  export type ActivityUncheckedUpdateWithoutCriteriaInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    time?: StringFieldUpdateOperationsInput | string
    instruction?: NullableStringFieldUpdateOperationsInput | string | null
    roomId?: IntFieldUpdateOperationsInput | number
    outputs?: OutputUncheckedUpdateManyWithoutRelatedToActivityNestedInput
  }

  export type AnnouncementUpsertWithoutListOfFilesInput = {
    update: XOR<AnnouncementUpdateWithoutListOfFilesInput, AnnouncementUncheckedUpdateWithoutListOfFilesInput>
    create: XOR<AnnouncementCreateWithoutListOfFilesInput, AnnouncementUncheckedCreateWithoutListOfFilesInput>
    where?: AnnouncementWhereInput
  }

  export type AnnouncementUpdateToOneWithWhereWithoutListOfFilesInput = {
    where?: AnnouncementWhereInput
    data: XOR<AnnouncementUpdateWithoutListOfFilesInput, AnnouncementUncheckedUpdateWithoutListOfFilesInput>
  }

  export type AnnouncementUpdateWithoutListOfFilesInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    relatedToClassroom?: ClassroomUpdateOneRequiredWithoutListOfAnnouncementsNestedInput
  }

  export type AnnouncementUncheckedUpdateWithoutListOfFilesInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    roomId?: IntFieldUpdateOperationsInput | number
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type OutputUpsertWithoutListOfFilesInput = {
    update: XOR<OutputUpdateWithoutListOfFilesInput, OutputUncheckedUpdateWithoutListOfFilesInput>
    create: XOR<OutputCreateWithoutListOfFilesInput, OutputUncheckedCreateWithoutListOfFilesInput>
    where?: OutputWhereInput
  }

  export type OutputUpdateToOneWithWhereWithoutListOfFilesInput = {
    where?: OutputWhereInput
    data: XOR<OutputUpdateWithoutListOfFilesInput, OutputUncheckedUpdateWithoutListOfFilesInput>
  }

  export type OutputUpdateWithoutListOfFilesInput = {
    relatedToStudent?: StudentUpdateOneWithoutListOfOutputsNestedInput
    relatedToClassroom?: ClassroomUpdateOneWithoutListOfOutputsNestedInput
    relatedToActivity?: ActivityUpdateOneWithoutOutputsNestedInput
    relatedToFeedback?: FeedbackUpdateOneWithoutOutputNestedInput
    relatedToScore?: ScoreUpdateOneWithoutOutputNestedInput
  }

  export type OutputUncheckedUpdateWithoutListOfFilesInput = {
    id?: IntFieldUpdateOperationsInput | number
    studentId?: NullableIntFieldUpdateOperationsInput | number | null
    roomId?: NullableIntFieldUpdateOperationsInput | number | null
    activityId?: NullableIntFieldUpdateOperationsInput | number | null
    feedbackId?: NullableIntFieldUpdateOperationsInput | number | null
    scoreId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type OutputCreateWithoutRelatedToFeedbackInput = {
    listOfFiles?: FilesCreateNestedManyWithoutRelatedToOutputInput
    relatedToStudent?: StudentCreateNestedOneWithoutListOfOutputsInput
    relatedToClassroom?: ClassroomCreateNestedOneWithoutListOfOutputsInput
    relatedToActivity?: ActivityCreateNestedOneWithoutOutputsInput
    relatedToScore?: ScoreCreateNestedOneWithoutOutputInput
  }

  export type OutputUncheckedCreateWithoutRelatedToFeedbackInput = {
    id?: number
    studentId?: number | null
    roomId?: number | null
    activityId?: number | null
    scoreId?: number | null
    listOfFiles?: FilesUncheckedCreateNestedManyWithoutRelatedToOutputInput
  }

  export type OutputCreateOrConnectWithoutRelatedToFeedbackInput = {
    where: OutputWhereUniqueInput
    create: XOR<OutputCreateWithoutRelatedToFeedbackInput, OutputUncheckedCreateWithoutRelatedToFeedbackInput>
  }

  export type OutputCreateManyRelatedToFeedbackInputEnvelope = {
    data: OutputCreateManyRelatedToFeedbackInput | OutputCreateManyRelatedToFeedbackInput[]
    skipDuplicates?: boolean
  }

  export type OutputUpsertWithWhereUniqueWithoutRelatedToFeedbackInput = {
    where: OutputWhereUniqueInput
    update: XOR<OutputUpdateWithoutRelatedToFeedbackInput, OutputUncheckedUpdateWithoutRelatedToFeedbackInput>
    create: XOR<OutputCreateWithoutRelatedToFeedbackInput, OutputUncheckedCreateWithoutRelatedToFeedbackInput>
  }

  export type OutputUpdateWithWhereUniqueWithoutRelatedToFeedbackInput = {
    where: OutputWhereUniqueInput
    data: XOR<OutputUpdateWithoutRelatedToFeedbackInput, OutputUncheckedUpdateWithoutRelatedToFeedbackInput>
  }

  export type OutputUpdateManyWithWhereWithoutRelatedToFeedbackInput = {
    where: OutputScalarWhereInput
    data: XOR<OutputUpdateManyMutationInput, OutputUncheckedUpdateManyWithoutRelatedToFeedbackInput>
  }

  export type OutputCreateWithoutRelatedToScoreInput = {
    listOfFiles?: FilesCreateNestedManyWithoutRelatedToOutputInput
    relatedToStudent?: StudentCreateNestedOneWithoutListOfOutputsInput
    relatedToClassroom?: ClassroomCreateNestedOneWithoutListOfOutputsInput
    relatedToActivity?: ActivityCreateNestedOneWithoutOutputsInput
    relatedToFeedback?: FeedbackCreateNestedOneWithoutOutputInput
  }

  export type OutputUncheckedCreateWithoutRelatedToScoreInput = {
    id?: number
    studentId?: number | null
    roomId?: number | null
    activityId?: number | null
    feedbackId?: number | null
    listOfFiles?: FilesUncheckedCreateNestedManyWithoutRelatedToOutputInput
  }

  export type OutputCreateOrConnectWithoutRelatedToScoreInput = {
    where: OutputWhereUniqueInput
    create: XOR<OutputCreateWithoutRelatedToScoreInput, OutputUncheckedCreateWithoutRelatedToScoreInput>
  }

  export type OutputCreateManyRelatedToScoreInputEnvelope = {
    data: OutputCreateManyRelatedToScoreInput | OutputCreateManyRelatedToScoreInput[]
    skipDuplicates?: boolean
  }

  export type OutputUpsertWithWhereUniqueWithoutRelatedToScoreInput = {
    where: OutputWhereUniqueInput
    update: XOR<OutputUpdateWithoutRelatedToScoreInput, OutputUncheckedUpdateWithoutRelatedToScoreInput>
    create: XOR<OutputCreateWithoutRelatedToScoreInput, OutputUncheckedCreateWithoutRelatedToScoreInput>
  }

  export type OutputUpdateWithWhereUniqueWithoutRelatedToScoreInput = {
    where: OutputWhereUniqueInput
    data: XOR<OutputUpdateWithoutRelatedToScoreInput, OutputUncheckedUpdateWithoutRelatedToScoreInput>
  }

  export type OutputUpdateManyWithWhereWithoutRelatedToScoreInput = {
    where: OutputScalarWhereInput
    data: XOR<OutputUpdateManyMutationInput, OutputUncheckedUpdateManyWithoutRelatedToScoreInput>
  }

  export type ClassroomCreateManyRelatedToUserInput = {
    id?: number
    classname: string
    section: string
    subject: string
    room: string
    classcode?: string | null
  }

  export type ClassroomUpdateWithoutRelatedToUserInput = {
    classname?: StringFieldUpdateOperationsInput | string
    section?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    room?: StringFieldUpdateOperationsInput | string
    classcode?: NullableStringFieldUpdateOperationsInput | string | null
    listOfAnnouncements?: AnnouncementUpdateManyWithoutRelatedToClassroomNestedInput
    listOfActivity?: ActivityUpdateManyWithoutRelatedToClassroomNestedInput
    listOfStudents?: StudentUpdateManyWithoutRelatedtoClassroomNestedInput
    listOfOutputs?: OutputUpdateManyWithoutRelatedToClassroomNestedInput
  }

  export type ClassroomUncheckedUpdateWithoutRelatedToUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    classname?: StringFieldUpdateOperationsInput | string
    section?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    room?: StringFieldUpdateOperationsInput | string
    classcode?: NullableStringFieldUpdateOperationsInput | string | null
    listOfAnnouncements?: AnnouncementUncheckedUpdateManyWithoutRelatedToClassroomNestedInput
    listOfActivity?: ActivityUncheckedUpdateManyWithoutRelatedToClassroomNestedInput
    listOfStudents?: StudentUncheckedUpdateManyWithoutRelatedtoClassroomNestedInput
    listOfOutputs?: OutputUncheckedUpdateManyWithoutRelatedToClassroomNestedInput
  }

  export type ClassroomUncheckedUpdateManyWithoutRelatedToUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    classname?: StringFieldUpdateOperationsInput | string
    section?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    room?: StringFieldUpdateOperationsInput | string
    classcode?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type OutputCreateManyRelatedToStudentInput = {
    id?: number
    roomId?: number | null
    activityId?: number | null
    feedbackId?: number | null
    scoreId?: number | null
  }

  export type OutputUpdateWithoutRelatedToStudentInput = {
    listOfFiles?: FilesUpdateManyWithoutRelatedToOutputNestedInput
    relatedToClassroom?: ClassroomUpdateOneWithoutListOfOutputsNestedInput
    relatedToActivity?: ActivityUpdateOneWithoutOutputsNestedInput
    relatedToFeedback?: FeedbackUpdateOneWithoutOutputNestedInput
    relatedToScore?: ScoreUpdateOneWithoutOutputNestedInput
  }

  export type OutputUncheckedUpdateWithoutRelatedToStudentInput = {
    id?: IntFieldUpdateOperationsInput | number
    roomId?: NullableIntFieldUpdateOperationsInput | number | null
    activityId?: NullableIntFieldUpdateOperationsInput | number | null
    feedbackId?: NullableIntFieldUpdateOperationsInput | number | null
    scoreId?: NullableIntFieldUpdateOperationsInput | number | null
    listOfFiles?: FilesUncheckedUpdateManyWithoutRelatedToOutputNestedInput
  }

  export type OutputUncheckedUpdateManyWithoutRelatedToStudentInput = {
    id?: IntFieldUpdateOperationsInput | number
    roomId?: NullableIntFieldUpdateOperationsInput | number | null
    activityId?: NullableIntFieldUpdateOperationsInput | number | null
    feedbackId?: NullableIntFieldUpdateOperationsInput | number | null
    scoreId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type AnnouncementCreateManyRelatedToClassroomInput = {
    id?: number
    title: string
    description?: string | null
    createdAt?: Date | string | null
  }

  export type ActivityCreateManyRelatedToClassroomInput = {
    id?: number
    title: string
    date: string
    time: string
    instruction?: string | null
  }

  export type StudentCreateManyRelatedtoClassroomInput = {
    userId: number
    lastname: string
    firstname: string
    middlename: string
    sex: string
    status?: $Enums.ClassroomStatus
  }

  export type OutputCreateManyRelatedToClassroomInput = {
    id?: number
    studentId?: number | null
    activityId?: number | null
    feedbackId?: number | null
    scoreId?: number | null
  }

  export type AnnouncementUpdateWithoutRelatedToClassroomInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    listOfFiles?: FilesUpdateManyWithoutRelatedToAnnouncementNestedInput
  }

  export type AnnouncementUncheckedUpdateWithoutRelatedToClassroomInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    listOfFiles?: FilesUncheckedUpdateManyWithoutRelatedToAnnouncementNestedInput
  }

  export type AnnouncementUncheckedUpdateManyWithoutRelatedToClassroomInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ActivityUpdateWithoutRelatedToClassroomInput = {
    title?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    time?: StringFieldUpdateOperationsInput | string
    instruction?: NullableStringFieldUpdateOperationsInput | string | null
    criteria?: FilesUpdateManyWithoutRelatedToActivityNestedInput
    outputs?: OutputUpdateManyWithoutRelatedToActivityNestedInput
  }

  export type ActivityUncheckedUpdateWithoutRelatedToClassroomInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    time?: StringFieldUpdateOperationsInput | string
    instruction?: NullableStringFieldUpdateOperationsInput | string | null
    criteria?: FilesUncheckedUpdateManyWithoutRelatedToActivityNestedInput
    outputs?: OutputUncheckedUpdateManyWithoutRelatedToActivityNestedInput
  }

  export type ActivityUncheckedUpdateManyWithoutRelatedToClassroomInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    time?: StringFieldUpdateOperationsInput | string
    instruction?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StudentUpdateWithoutRelatedtoClassroomInput = {
    lastname?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    middlename?: StringFieldUpdateOperationsInput | string
    sex?: StringFieldUpdateOperationsInput | string
    status?: EnumClassroomStatusFieldUpdateOperationsInput | $Enums.ClassroomStatus
    relatedToUser?: UserUpdateOneRequiredWithoutStudentNestedInput
    listOfOutputs?: OutputUpdateManyWithoutRelatedToStudentNestedInput
  }

  export type StudentUncheckedUpdateWithoutRelatedtoClassroomInput = {
    userId?: IntFieldUpdateOperationsInput | number
    lastname?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    middlename?: StringFieldUpdateOperationsInput | string
    sex?: StringFieldUpdateOperationsInput | string
    status?: EnumClassroomStatusFieldUpdateOperationsInput | $Enums.ClassroomStatus
    listOfOutputs?: OutputUncheckedUpdateManyWithoutRelatedToStudentNestedInput
  }

  export type StudentUncheckedUpdateManyWithoutRelatedtoClassroomInput = {
    userId?: IntFieldUpdateOperationsInput | number
    lastname?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    middlename?: StringFieldUpdateOperationsInput | string
    sex?: StringFieldUpdateOperationsInput | string
    status?: EnumClassroomStatusFieldUpdateOperationsInput | $Enums.ClassroomStatus
  }

  export type OutputUpdateWithoutRelatedToClassroomInput = {
    listOfFiles?: FilesUpdateManyWithoutRelatedToOutputNestedInput
    relatedToStudent?: StudentUpdateOneWithoutListOfOutputsNestedInput
    relatedToActivity?: ActivityUpdateOneWithoutOutputsNestedInput
    relatedToFeedback?: FeedbackUpdateOneWithoutOutputNestedInput
    relatedToScore?: ScoreUpdateOneWithoutOutputNestedInput
  }

  export type OutputUncheckedUpdateWithoutRelatedToClassroomInput = {
    id?: IntFieldUpdateOperationsInput | number
    studentId?: NullableIntFieldUpdateOperationsInput | number | null
    activityId?: NullableIntFieldUpdateOperationsInput | number | null
    feedbackId?: NullableIntFieldUpdateOperationsInput | number | null
    scoreId?: NullableIntFieldUpdateOperationsInput | number | null
    listOfFiles?: FilesUncheckedUpdateManyWithoutRelatedToOutputNestedInput
  }

  export type OutputUncheckedUpdateManyWithoutRelatedToClassroomInput = {
    id?: IntFieldUpdateOperationsInput | number
    studentId?: NullableIntFieldUpdateOperationsInput | number | null
    activityId?: NullableIntFieldUpdateOperationsInput | number | null
    feedbackId?: NullableIntFieldUpdateOperationsInput | number | null
    scoreId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type FilesCreateManyRelatedToActivityInput = {
    id?: number
    filename: string
    mimetype: string
    fileSize: number
    folderPath?: string | null
    filePath?: string | null
    announceId?: number | null
    outputId?: number | null
    publicFileUrl?: string | null
    status?: $Enums.OutputStatus
  }

  export type OutputCreateManyRelatedToActivityInput = {
    id?: number
    studentId?: number | null
    roomId?: number | null
    feedbackId?: number | null
    scoreId?: number | null
  }

  export type FilesUpdateWithoutRelatedToActivityInput = {
    filename?: StringFieldUpdateOperationsInput | string
    mimetype?: StringFieldUpdateOperationsInput | string
    fileSize?: IntFieldUpdateOperationsInput | number
    folderPath?: NullableStringFieldUpdateOperationsInput | string | null
    filePath?: NullableStringFieldUpdateOperationsInput | string | null
    publicFileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumOutputStatusFieldUpdateOperationsInput | $Enums.OutputStatus
    relatedToAnnouncement?: AnnouncementUpdateOneWithoutListOfFilesNestedInput
    relatedToOutput?: OutputUpdateOneWithoutListOfFilesNestedInput
  }

  export type FilesUncheckedUpdateWithoutRelatedToActivityInput = {
    id?: IntFieldUpdateOperationsInput | number
    filename?: StringFieldUpdateOperationsInput | string
    mimetype?: StringFieldUpdateOperationsInput | string
    fileSize?: IntFieldUpdateOperationsInput | number
    folderPath?: NullableStringFieldUpdateOperationsInput | string | null
    filePath?: NullableStringFieldUpdateOperationsInput | string | null
    announceId?: NullableIntFieldUpdateOperationsInput | number | null
    outputId?: NullableIntFieldUpdateOperationsInput | number | null
    publicFileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumOutputStatusFieldUpdateOperationsInput | $Enums.OutputStatus
  }

  export type FilesUncheckedUpdateManyWithoutRelatedToActivityInput = {
    id?: IntFieldUpdateOperationsInput | number
    filename?: StringFieldUpdateOperationsInput | string
    mimetype?: StringFieldUpdateOperationsInput | string
    fileSize?: IntFieldUpdateOperationsInput | number
    folderPath?: NullableStringFieldUpdateOperationsInput | string | null
    filePath?: NullableStringFieldUpdateOperationsInput | string | null
    announceId?: NullableIntFieldUpdateOperationsInput | number | null
    outputId?: NullableIntFieldUpdateOperationsInput | number | null
    publicFileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumOutputStatusFieldUpdateOperationsInput | $Enums.OutputStatus
  }

  export type OutputUpdateWithoutRelatedToActivityInput = {
    listOfFiles?: FilesUpdateManyWithoutRelatedToOutputNestedInput
    relatedToStudent?: StudentUpdateOneWithoutListOfOutputsNestedInput
    relatedToClassroom?: ClassroomUpdateOneWithoutListOfOutputsNestedInput
    relatedToFeedback?: FeedbackUpdateOneWithoutOutputNestedInput
    relatedToScore?: ScoreUpdateOneWithoutOutputNestedInput
  }

  export type OutputUncheckedUpdateWithoutRelatedToActivityInput = {
    id?: IntFieldUpdateOperationsInput | number
    studentId?: NullableIntFieldUpdateOperationsInput | number | null
    roomId?: NullableIntFieldUpdateOperationsInput | number | null
    feedbackId?: NullableIntFieldUpdateOperationsInput | number | null
    scoreId?: NullableIntFieldUpdateOperationsInput | number | null
    listOfFiles?: FilesUncheckedUpdateManyWithoutRelatedToOutputNestedInput
  }

  export type OutputUncheckedUpdateManyWithoutRelatedToActivityInput = {
    id?: IntFieldUpdateOperationsInput | number
    studentId?: NullableIntFieldUpdateOperationsInput | number | null
    roomId?: NullableIntFieldUpdateOperationsInput | number | null
    feedbackId?: NullableIntFieldUpdateOperationsInput | number | null
    scoreId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type FilesCreateManyRelatedToAnnouncementInput = {
    id?: number
    filename: string
    mimetype: string
    fileSize: number
    folderPath?: string | null
    filePath?: string | null
    activityId?: number | null
    outputId?: number | null
    publicFileUrl?: string | null
    status?: $Enums.OutputStatus
  }

  export type FilesUpdateWithoutRelatedToAnnouncementInput = {
    filename?: StringFieldUpdateOperationsInput | string
    mimetype?: StringFieldUpdateOperationsInput | string
    fileSize?: IntFieldUpdateOperationsInput | number
    folderPath?: NullableStringFieldUpdateOperationsInput | string | null
    filePath?: NullableStringFieldUpdateOperationsInput | string | null
    publicFileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumOutputStatusFieldUpdateOperationsInput | $Enums.OutputStatus
    relatedToActivity?: ActivityUpdateOneWithoutCriteriaNestedInput
    relatedToOutput?: OutputUpdateOneWithoutListOfFilesNestedInput
  }

  export type FilesUncheckedUpdateWithoutRelatedToAnnouncementInput = {
    id?: IntFieldUpdateOperationsInput | number
    filename?: StringFieldUpdateOperationsInput | string
    mimetype?: StringFieldUpdateOperationsInput | string
    fileSize?: IntFieldUpdateOperationsInput | number
    folderPath?: NullableStringFieldUpdateOperationsInput | string | null
    filePath?: NullableStringFieldUpdateOperationsInput | string | null
    activityId?: NullableIntFieldUpdateOperationsInput | number | null
    outputId?: NullableIntFieldUpdateOperationsInput | number | null
    publicFileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumOutputStatusFieldUpdateOperationsInput | $Enums.OutputStatus
  }

  export type FilesUncheckedUpdateManyWithoutRelatedToAnnouncementInput = {
    id?: IntFieldUpdateOperationsInput | number
    filename?: StringFieldUpdateOperationsInput | string
    mimetype?: StringFieldUpdateOperationsInput | string
    fileSize?: IntFieldUpdateOperationsInput | number
    folderPath?: NullableStringFieldUpdateOperationsInput | string | null
    filePath?: NullableStringFieldUpdateOperationsInput | string | null
    activityId?: NullableIntFieldUpdateOperationsInput | number | null
    outputId?: NullableIntFieldUpdateOperationsInput | number | null
    publicFileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumOutputStatusFieldUpdateOperationsInput | $Enums.OutputStatus
  }

  export type FilesCreateManyRelatedToOutputInput = {
    id?: number
    filename: string
    mimetype: string
    fileSize: number
    folderPath?: string | null
    filePath?: string | null
    activityId?: number | null
    announceId?: number | null
    publicFileUrl?: string | null
    status?: $Enums.OutputStatus
  }

  export type FilesUpdateWithoutRelatedToOutputInput = {
    filename?: StringFieldUpdateOperationsInput | string
    mimetype?: StringFieldUpdateOperationsInput | string
    fileSize?: IntFieldUpdateOperationsInput | number
    folderPath?: NullableStringFieldUpdateOperationsInput | string | null
    filePath?: NullableStringFieldUpdateOperationsInput | string | null
    publicFileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumOutputStatusFieldUpdateOperationsInput | $Enums.OutputStatus
    relatedToActivity?: ActivityUpdateOneWithoutCriteriaNestedInput
    relatedToAnnouncement?: AnnouncementUpdateOneWithoutListOfFilesNestedInput
  }

  export type FilesUncheckedUpdateWithoutRelatedToOutputInput = {
    id?: IntFieldUpdateOperationsInput | number
    filename?: StringFieldUpdateOperationsInput | string
    mimetype?: StringFieldUpdateOperationsInput | string
    fileSize?: IntFieldUpdateOperationsInput | number
    folderPath?: NullableStringFieldUpdateOperationsInput | string | null
    filePath?: NullableStringFieldUpdateOperationsInput | string | null
    activityId?: NullableIntFieldUpdateOperationsInput | number | null
    announceId?: NullableIntFieldUpdateOperationsInput | number | null
    publicFileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumOutputStatusFieldUpdateOperationsInput | $Enums.OutputStatus
  }

  export type FilesUncheckedUpdateManyWithoutRelatedToOutputInput = {
    id?: IntFieldUpdateOperationsInput | number
    filename?: StringFieldUpdateOperationsInput | string
    mimetype?: StringFieldUpdateOperationsInput | string
    fileSize?: IntFieldUpdateOperationsInput | number
    folderPath?: NullableStringFieldUpdateOperationsInput | string | null
    filePath?: NullableStringFieldUpdateOperationsInput | string | null
    activityId?: NullableIntFieldUpdateOperationsInput | number | null
    announceId?: NullableIntFieldUpdateOperationsInput | number | null
    publicFileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumOutputStatusFieldUpdateOperationsInput | $Enums.OutputStatus
  }

  export type OutputCreateManyRelatedToFeedbackInput = {
    id?: number
    studentId?: number | null
    roomId?: number | null
    activityId?: number | null
    scoreId?: number | null
  }

  export type OutputUpdateWithoutRelatedToFeedbackInput = {
    listOfFiles?: FilesUpdateManyWithoutRelatedToOutputNestedInput
    relatedToStudent?: StudentUpdateOneWithoutListOfOutputsNestedInput
    relatedToClassroom?: ClassroomUpdateOneWithoutListOfOutputsNestedInput
    relatedToActivity?: ActivityUpdateOneWithoutOutputsNestedInput
    relatedToScore?: ScoreUpdateOneWithoutOutputNestedInput
  }

  export type OutputUncheckedUpdateWithoutRelatedToFeedbackInput = {
    id?: IntFieldUpdateOperationsInput | number
    studentId?: NullableIntFieldUpdateOperationsInput | number | null
    roomId?: NullableIntFieldUpdateOperationsInput | number | null
    activityId?: NullableIntFieldUpdateOperationsInput | number | null
    scoreId?: NullableIntFieldUpdateOperationsInput | number | null
    listOfFiles?: FilesUncheckedUpdateManyWithoutRelatedToOutputNestedInput
  }

  export type OutputUncheckedUpdateManyWithoutRelatedToFeedbackInput = {
    id?: IntFieldUpdateOperationsInput | number
    studentId?: NullableIntFieldUpdateOperationsInput | number | null
    roomId?: NullableIntFieldUpdateOperationsInput | number | null
    activityId?: NullableIntFieldUpdateOperationsInput | number | null
    scoreId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type OutputCreateManyRelatedToScoreInput = {
    id?: number
    studentId?: number | null
    roomId?: number | null
    activityId?: number | null
    feedbackId?: number | null
  }

  export type OutputUpdateWithoutRelatedToScoreInput = {
    listOfFiles?: FilesUpdateManyWithoutRelatedToOutputNestedInput
    relatedToStudent?: StudentUpdateOneWithoutListOfOutputsNestedInput
    relatedToClassroom?: ClassroomUpdateOneWithoutListOfOutputsNestedInput
    relatedToActivity?: ActivityUpdateOneWithoutOutputsNestedInput
    relatedToFeedback?: FeedbackUpdateOneWithoutOutputNestedInput
  }

  export type OutputUncheckedUpdateWithoutRelatedToScoreInput = {
    id?: IntFieldUpdateOperationsInput | number
    studentId?: NullableIntFieldUpdateOperationsInput | number | null
    roomId?: NullableIntFieldUpdateOperationsInput | number | null
    activityId?: NullableIntFieldUpdateOperationsInput | number | null
    feedbackId?: NullableIntFieldUpdateOperationsInput | number | null
    listOfFiles?: FilesUncheckedUpdateManyWithoutRelatedToOutputNestedInput
  }

  export type OutputUncheckedUpdateManyWithoutRelatedToScoreInput = {
    id?: IntFieldUpdateOperationsInput | number
    studentId?: NullableIntFieldUpdateOperationsInput | number | null
    roomId?: NullableIntFieldUpdateOperationsInput | number | null
    activityId?: NullableIntFieldUpdateOperationsInput | number | null
    feedbackId?: NullableIntFieldUpdateOperationsInput | number | null
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