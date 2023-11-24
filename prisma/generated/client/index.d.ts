
/**
 * Client
**/

import * as runtime from './runtime/index';
declare const prisma: unique symbol
export type PrismaPromise<A> = Promise<A> & {[prisma]: true}
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};


/**
 * Model Session
 * 
 */
export type Session = {
  id: string
  sid: string
  data: string
  expiresAt: Date
}

/**
 * Model User
 * 
 */
export type User = {
  id: string
  createdAt: Date
  updatedAt: Date
  name: string
  last_name: string
  phone_number: string | null
  user_name: string
  email: string
  password: string
}

/**
 * Model NotificationPreference
 * 
 */
export type NotificationPreference = {
  id: string
  email: boolean | null
  whatsapp: boolean | null
  userId: string
}

/**
 * Model Role
 * 
 */
export type Role = {
  id: string
  name: RoleType
  description: string
}

/**
 * Model PasswordResetToken
 * 
 */
export type PasswordResetToken = {
  id: number
  token: string
  expiration_date: Date
  deactivated: boolean
  userId: string
}

/**
 * Model RequestEvent
 * 
 */
export type RequestEvent = {
  id: string
  createdAt: Date
  updatedAt: Date
  title: string
  subtitle: string
  description: string
  startDate: Date
  endDate: Date | null
  locationName: string
  locationDetail: string | null
  address: string
  requestedById: string
  approvedById: string | null
  status: RequestEventStatus
}

/**
 * Model Event
 * 
 */
export type Event = {
  id: string
  createdAt: Date
  updatedAt: Date
  title: string
  subtitle: string
  description: string
  principalImage: string
  images: string[]
  tags: string[]
  startDate: Date
  endDate: Date | null
  locationName: string
  locationDetail: string | null
  address: string
  longitud: number | null
  latitud: number | null
  status: EventStatus
  publishedById: string | null
  requestEventId: string
}


/**
 * Enums
 */

// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

export const RoleType: {
  SUPER_ADMIN: 'SUPER_ADMIN',
  ADMIN: 'ADMIN',
  CONTENT_APPROVER: 'CONTENT_APPROVER',
  CONTENT_PUBLISHER: 'CONTENT_PUBLISHER',
  REQUEST_APPROVER: 'REQUEST_APPROVER',
  CONTENT_VISULIZER: 'CONTENT_VISULIZER',
  MARKETING: 'MARKETING',
  USER: 'USER'
};

export type RoleType = (typeof RoleType)[keyof typeof RoleType]


export const RequestEventStatus: {
  APPROVED: 'APPROVED',
  REJECTED: 'REJECTED',
  PENDING: 'PENDING'
};

export type RequestEventStatus = (typeof RequestEventStatus)[keyof typeof RequestEventStatus]


export const EventStatus: {
  DRAFT: 'DRAFT',
  PUBLISH: 'PUBLISH'
};

export type EventStatus = (typeof EventStatus)[keyof typeof EventStatus]


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Sessions
 * const sessions = await prisma.session.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false
      > {
      /**
       * @private
       */
      private fetcher;
      /**
       * @private
       */
      private readonly dmmf;
      /**
       * @private
       */
      private connectionPromise?;
      /**
       * @private
       */
      private disconnectionPromise?;
      /**
       * @private
       */
      private readonly engineConfig;
      /**
       * @private
       */
      private readonly measurePerformance;

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Sessions
   * const sessions = await prisma.session.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<void>;

  /**
   * Add a middleware
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
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<number>;

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
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<T>;

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
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<T>;

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
  $transaction<P extends PrismaPromise<any>[]>(arg: [...P]): Promise<UnwrapTuple<P>>;

      /**
   * `prisma.session`: Exposes CRUD operations for the **Session** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.session.findMany()
    * ```
    */
  get session(): Prisma.SessionDelegate<GlobalReject>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<GlobalReject>;

  /**
   * `prisma.notificationPreference`: Exposes CRUD operations for the **NotificationPreference** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more NotificationPreferences
    * const notificationPreferences = await prisma.notificationPreference.findMany()
    * ```
    */
  get notificationPreference(): Prisma.NotificationPreferenceDelegate<GlobalReject>;

  /**
   * `prisma.role`: Exposes CRUD operations for the **Role** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Roles
    * const roles = await prisma.role.findMany()
    * ```
    */
  get role(): Prisma.RoleDelegate<GlobalReject>;

  /**
   * `prisma.passwordResetToken`: Exposes CRUD operations for the **PasswordResetToken** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PasswordResetTokens
    * const passwordResetTokens = await prisma.passwordResetToken.findMany()
    * ```
    */
  get passwordResetToken(): Prisma.PasswordResetTokenDelegate<GlobalReject>;

  /**
   * `prisma.requestEvent`: Exposes CRUD operations for the **RequestEvent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RequestEvents
    * const requestEvents = await prisma.requestEvent.findMany()
    * ```
    */
  get requestEvent(): Prisma.RequestEventDelegate<GlobalReject>;

  /**
   * `prisma.event`: Exposes CRUD operations for the **Event** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Events
    * const events = await prisma.event.findMany()
    * ```
    */
  get event(): Prisma.EventDelegate<GlobalReject>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

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
  export import Metrics = runtime.Metrics
  export import Metric = runtime.Metric
  export import MetricHistogram = runtime.MetricHistogram
  export import MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
   * Prisma Client JS version: 4.1.0
   * Query Engine version: 8d8414deb360336e4698a65aa45a1fbaf1ce13d8
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
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray

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
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

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

  export type TruthyKeys<T> = {
    [key in keyof T]: T[key] extends false | undefined | null ? never : key
  }[keyof T]

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
  : T extends Buffer
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

  type Exact<A, W = unknown> = 
  W extends unknown ? A extends Narrowable ? Cast<A, W> : Cast<
  {[K in keyof A]: K extends keyof W ? Exact<A[K], W[K]> : never},
  {[K in keyof W]: K extends keyof A ? Exact<A[K], W[K]> : W[K]}>
  : never;

  type Narrowable = string | number | boolean | bigint;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  export function validator<V>(): <S>(select: Exact<S, V>) => S;

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
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T

  class PrismaClientFetcher {
    private readonly prisma;
    private readonly debug;
    private readonly hooks?;
    constructor(prisma: PrismaClient<any, any>, debug?: boolean, hooks?: Hooks | undefined);
    request<T>(document: any, dataPath?: string[], rootField?: string, typeName?: string, isList?: boolean, callsite?: string): Promise<T>;
    sanitizeMessage(message: string): string;
    protected unpack(document: any, data: any, path: string[], rootField?: string, isList?: boolean): any;
  }

  export const ModelName: {
    Session: 'Session',
    User: 'User',
    NotificationPreference: 'NotificationPreference',
    Role: 'Role',
    PasswordResetToken: 'PasswordResetToken',
    RequestEvent: 'RequestEvent',
    Event: 'Event'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends RejectOnNotFound
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     * @deprecated since 4.0.0. Use `findUniqueOrThrow`/`findFirstOrThrow` methods instead.
     * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your prisma.schema file
     */
    datasources?: Datasources

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
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  export type Hooks = {
    beforeRequest?: (options: { query: string, path: string[], rootField?: string, typeName?: string, document: any }) => any
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
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
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

  /**
   * These options are being passed in to the middleware as "params"
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
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

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
    roles: number
    approvedRequested: number
    eventsRequested: number
    PasswordResetToken: number
    eventPublished: number
    likedEvents: number
    savedEvents: number
  }

  export type UserCountOutputTypeSelect = {
    roles?: boolean
    approvedRequested?: boolean
    eventsRequested?: boolean
    PasswordResetToken?: boolean
    eventPublished?: boolean
    likedEvents?: boolean
    savedEvents?: boolean
  }

  export type UserCountOutputTypeGetPayload<
    S extends boolean | null | undefined | UserCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? UserCountOutputType
    : S extends undefined
    ? never
    : S extends UserCountOutputTypeArgs
    ?'include' extends U
    ? UserCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof UserCountOutputType ? UserCountOutputType[P] : never
  } 
    : UserCountOutputType
  : UserCountOutputType




  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     * 
    **/
    select?: UserCountOutputTypeSelect | null
  }



  /**
   * Count Type RoleCountOutputType
   */


  export type RoleCountOutputType = {
    users: number
  }

  export type RoleCountOutputTypeSelect = {
    users?: boolean
  }

  export type RoleCountOutputTypeGetPayload<
    S extends boolean | null | undefined | RoleCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? RoleCountOutputType
    : S extends undefined
    ? never
    : S extends RoleCountOutputTypeArgs
    ?'include' extends U
    ? RoleCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof RoleCountOutputType ? RoleCountOutputType[P] : never
  } 
    : RoleCountOutputType
  : RoleCountOutputType




  // Custom InputTypes

  /**
   * RoleCountOutputType without action
   */
  export type RoleCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the RoleCountOutputType
     * 
    **/
    select?: RoleCountOutputTypeSelect | null
  }



  /**
   * Count Type EventCountOutputType
   */


  export type EventCountOutputType = {
    likedBy: number
    savedBy: number
  }

  export type EventCountOutputTypeSelect = {
    likedBy?: boolean
    savedBy?: boolean
  }

  export type EventCountOutputTypeGetPayload<
    S extends boolean | null | undefined | EventCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? EventCountOutputType
    : S extends undefined
    ? never
    : S extends EventCountOutputTypeArgs
    ?'include' extends U
    ? EventCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof EventCountOutputType ? EventCountOutputType[P] : never
  } 
    : EventCountOutputType
  : EventCountOutputType




  // Custom InputTypes

  /**
   * EventCountOutputType without action
   */
  export type EventCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the EventCountOutputType
     * 
    **/
    select?: EventCountOutputTypeSelect | null
  }



  /**
   * Models
   */

  /**
   * Model Session
   */


  export type AggregateSession = {
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  export type SessionMinAggregateOutputType = {
    id: string | null
    sid: string | null
    data: string | null
    expiresAt: Date | null
  }

  export type SessionMaxAggregateOutputType = {
    id: string | null
    sid: string | null
    data: string | null
    expiresAt: Date | null
  }

  export type SessionCountAggregateOutputType = {
    id: number
    sid: number
    data: number
    expiresAt: number
    _all: number
  }


  export type SessionMinAggregateInputType = {
    id?: true
    sid?: true
    data?: true
    expiresAt?: true
  }

  export type SessionMaxAggregateInputType = {
    id?: true
    sid?: true
    data?: true
    expiresAt?: true
  }

  export type SessionCountAggregateInputType = {
    id?: true
    sid?: true
    data?: true
    expiresAt?: true
    _all?: true
  }

  export type SessionAggregateArgs = {
    /**
     * Filter which Session to aggregate.
     * 
    **/
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     * 
    **/
    orderBy?: Enumerable<SessionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sessions
    **/
    _count?: true | SessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionMaxAggregateInputType
  }

  export type GetSessionAggregateType<T extends SessionAggregateArgs> = {
        [P in keyof T & keyof AggregateSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSession[P]>
      : GetScalarType<T[P], AggregateSession[P]>
  }




  export type SessionGroupByArgs = {
    where?: SessionWhereInput
    orderBy?: Enumerable<SessionOrderByWithAggregationInput>
    by: Array<SessionScalarFieldEnum>
    having?: SessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionCountAggregateInputType | true
    _min?: SessionMinAggregateInputType
    _max?: SessionMaxAggregateInputType
  }


  export type SessionGroupByOutputType = {
    id: string
    sid: string
    data: string
    expiresAt: Date
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  type GetSessionGroupByPayload<T extends SessionGroupByArgs> = PrismaPromise<
    Array<
      PickArray<SessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionGroupByOutputType[P]>
            : GetScalarType<T[P], SessionGroupByOutputType[P]>
        }
      >
    >


  export type SessionSelect = {
    id?: boolean
    sid?: boolean
    data?: boolean
    expiresAt?: boolean
  }

  export type SessionGetPayload<
    S extends boolean | null | undefined | SessionArgs,
    U = keyof S
      > = S extends true
        ? Session
    : S extends undefined
    ? never
    : S extends SessionArgs | SessionFindManyArgs
    ?'include' extends U
    ? Session 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof Session ? Session[P] : never
  } 
    : Session
  : Session


  type SessionCountArgs = Merge<
    Omit<SessionFindManyArgs, 'select' | 'include'> & {
      select?: SessionCountAggregateInputType | true
    }
  >

  export interface SessionDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Session that matches the filter.
     * @param {SessionFindUniqueArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends SessionFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, SessionFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Session'> extends True ? CheckSelect<T, Prisma__SessionClient<Session>, Prisma__SessionClient<SessionGetPayload<T>>> : CheckSelect<T, Prisma__SessionClient<Session | null >, Prisma__SessionClient<SessionGetPayload<T> | null >>

    /**
     * Find the first Session that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends SessionFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, SessionFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Session'> extends True ? CheckSelect<T, Prisma__SessionClient<Session>, Prisma__SessionClient<SessionGetPayload<T>>> : CheckSelect<T, Prisma__SessionClient<Session | null >, Prisma__SessionClient<SessionGetPayload<T> | null >>

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions
     * const sessions = await prisma.session.findMany()
     * 
     * // Get first 10 Sessions
     * const sessions = await prisma.session.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sessionWithIdOnly = await prisma.session.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends SessionFindManyArgs>(
      args?: SelectSubset<T, SessionFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Session>>, PrismaPromise<Array<SessionGetPayload<T>>>>

    /**
     * Create a Session.
     * @param {SessionCreateArgs} args - Arguments to create a Session.
     * @example
     * // Create one Session
     * const Session = await prisma.session.create({
     *   data: {
     *     // ... data to create a Session
     *   }
     * })
     * 
    **/
    create<T extends SessionCreateArgs>(
      args: SelectSubset<T, SessionCreateArgs>
    ): CheckSelect<T, Prisma__SessionClient<Session>, Prisma__SessionClient<SessionGetPayload<T>>>

    /**
     * Create many Sessions.
     *     @param {SessionCreateManyArgs} args - Arguments to create many Sessions.
     *     @example
     *     // Create many Sessions
     *     const session = await prisma.session.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends SessionCreateManyArgs>(
      args?: SelectSubset<T, SessionCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Session.
     * @param {SessionDeleteArgs} args - Arguments to delete one Session.
     * @example
     * // Delete one Session
     * const Session = await prisma.session.delete({
     *   where: {
     *     // ... filter to delete one Session
     *   }
     * })
     * 
    **/
    delete<T extends SessionDeleteArgs>(
      args: SelectSubset<T, SessionDeleteArgs>
    ): CheckSelect<T, Prisma__SessionClient<Session>, Prisma__SessionClient<SessionGetPayload<T>>>

    /**
     * Update one Session.
     * @param {SessionUpdateArgs} args - Arguments to update one Session.
     * @example
     * // Update one Session
     * const session = await prisma.session.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends SessionUpdateArgs>(
      args: SelectSubset<T, SessionUpdateArgs>
    ): CheckSelect<T, Prisma__SessionClient<Session>, Prisma__SessionClient<SessionGetPayload<T>>>

    /**
     * Delete zero or more Sessions.
     * @param {SessionDeleteManyArgs} args - Arguments to filter Sessions to delete.
     * @example
     * // Delete a few Sessions
     * const { count } = await prisma.session.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends SessionDeleteManyArgs>(
      args?: SelectSubset<T, SessionDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends SessionUpdateManyArgs>(
      args: SelectSubset<T, SessionUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Session.
     * @param {SessionUpsertArgs} args - Arguments to update or create a Session.
     * @example
     * // Update or create a Session
     * const session = await prisma.session.upsert({
     *   create: {
     *     // ... data to create a Session
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Session we want to update
     *   }
     * })
    **/
    upsert<T extends SessionUpsertArgs>(
      args: SelectSubset<T, SessionUpsertArgs>
    ): CheckSelect<T, Prisma__SessionClient<Session>, Prisma__SessionClient<SessionGetPayload<T>>>

    /**
     * Find one Session that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {SessionFindUniqueOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends SessionFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, SessionFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__SessionClient<Session>, Prisma__SessionClient<SessionGetPayload<T>>>

    /**
     * Find the first Session that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends SessionFindFirstOrThrowArgs>(
      args?: SelectSubset<T, SessionFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__SessionClient<Session>, Prisma__SessionClient<SessionGetPayload<T>>>

    /**
     * Count the number of Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionCountArgs} args - Arguments to filter Sessions to count.
     * @example
     * // Count the number of Sessions
     * const count = await prisma.session.count({
     *   where: {
     *     // ... the filter for the Sessions we want to count
     *   }
     * })
    **/
    count<T extends SessionCountArgs>(
      args?: Subset<T, SessionCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SessionAggregateArgs>(args: Subset<T, SessionAggregateArgs>): PrismaPromise<GetSessionAggregateType<T>>

    /**
     * Group by Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionGroupByArgs} args - Group by arguments.
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
      T extends SessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionGroupByArgs['orderBy'] }
        : { orderBy?: SessionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, SessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Session.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__SessionClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Session base type for findUnique actions
   */
  export type SessionFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Session
     * 
    **/
    select?: SessionSelect | null
    /**
     * Filter, which Session to fetch.
     * 
    **/
    where: SessionWhereUniqueInput
  }

  /**
   * Session: findUnique
   */
  export interface SessionFindUniqueArgs extends SessionFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Session base type for findFirst actions
   */
  export type SessionFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Session
     * 
    **/
    select?: SessionSelect | null
    /**
     * Filter, which Session to fetch.
     * 
    **/
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     * 
    **/
    orderBy?: Enumerable<SessionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     * 
    **/
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     * 
    **/
    distinct?: Enumerable<SessionScalarFieldEnum>
  }

  /**
   * Session: findFirst
   */
  export interface SessionFindFirstArgs extends SessionFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Session findMany
   */
  export type SessionFindManyArgs = {
    /**
     * Select specific fields to fetch from the Session
     * 
    **/
    select?: SessionSelect | null
    /**
     * Filter, which Sessions to fetch.
     * 
    **/
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     * 
    **/
    orderBy?: Enumerable<SessionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sessions.
     * 
    **/
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     * 
    **/
    skip?: number
    distinct?: Enumerable<SessionScalarFieldEnum>
  }


  /**
   * Session create
   */
  export type SessionCreateArgs = {
    /**
     * Select specific fields to fetch from the Session
     * 
    **/
    select?: SessionSelect | null
    /**
     * The data needed to create a Session.
     * 
    **/
    data: XOR<SessionCreateInput, SessionUncheckedCreateInput>
  }


  /**
   * Session createMany
   */
  export type SessionCreateManyArgs = {
    /**
     * The data used to create many Sessions.
     * 
    **/
    data: Enumerable<SessionCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Session update
   */
  export type SessionUpdateArgs = {
    /**
     * Select specific fields to fetch from the Session
     * 
    **/
    select?: SessionSelect | null
    /**
     * The data needed to update a Session.
     * 
    **/
    data: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
    /**
     * Choose, which Session to update.
     * 
    **/
    where: SessionWhereUniqueInput
  }


  /**
   * Session updateMany
   */
  export type SessionUpdateManyArgs = {
    /**
     * The data used to update Sessions.
     * 
    **/
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     * 
    **/
    where?: SessionWhereInput
  }


  /**
   * Session upsert
   */
  export type SessionUpsertArgs = {
    /**
     * Select specific fields to fetch from the Session
     * 
    **/
    select?: SessionSelect | null
    /**
     * The filter to search for the Session to update in case it exists.
     * 
    **/
    where: SessionWhereUniqueInput
    /**
     * In case the Session found by the `where` argument doesn't exist, create a new Session with this data.
     * 
    **/
    create: XOR<SessionCreateInput, SessionUncheckedCreateInput>
    /**
     * In case the Session was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
  }


  /**
   * Session delete
   */
  export type SessionDeleteArgs = {
    /**
     * Select specific fields to fetch from the Session
     * 
    **/
    select?: SessionSelect | null
    /**
     * Filter which Session to delete.
     * 
    **/
    where: SessionWhereUniqueInput
  }


  /**
   * Session deleteMany
   */
  export type SessionDeleteManyArgs = {
    /**
     * Filter which Sessions to delete
     * 
    **/
    where?: SessionWhereInput
  }


  /**
   * Session: findUniqueOrThrow
   */
  export type SessionFindUniqueOrThrowArgs = SessionFindUniqueArgsBase
      

  /**
   * Session: findFirstOrThrow
   */
  export type SessionFindFirstOrThrowArgs = SessionFindFirstArgsBase
      

  /**
   * Session without action
   */
  export type SessionArgs = {
    /**
     * Select specific fields to fetch from the Session
     * 
    **/
    select?: SessionSelect | null
  }



  /**
   * Model User
   */


  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    name: string | null
    last_name: string | null
    phone_number: string | null
    user_name: string | null
    email: string | null
    password: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    name: string | null
    last_name: string | null
    phone_number: string | null
    user_name: string | null
    email: string | null
    password: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    name: number
    last_name: number
    phone_number: number
    user_name: number
    email: number
    password: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    name?: true
    last_name?: true
    phone_number?: true
    user_name?: true
    email?: true
    password?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    name?: true
    last_name?: true
    phone_number?: true
    user_name?: true
    email?: true
    password?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    name?: true
    last_name?: true
    phone_number?: true
    user_name?: true
    email?: true
    password?: true
    _all?: true
  }

  export type UserAggregateArgs = {
    /**
     * Filter which User to aggregate.
     * 
    **/
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     * 
    **/
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     * 
    **/
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




  export type UserGroupByArgs = {
    where?: UserWhereInput
    orderBy?: Enumerable<UserOrderByWithAggregationInput>
    by: Array<UserScalarFieldEnum>
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }


  export type UserGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    name: string
    last_name: string
    phone_number: string | null
    user_name: string
    email: string
    password: string
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = PrismaPromise<
    Array<
      PickArray<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    name?: boolean
    last_name?: boolean
    phone_number?: boolean
    user_name?: boolean
    email?: boolean
    password?: boolean
    roles?: boolean | RoleFindManyArgs
    notificationPreference?: boolean | NotificationPreferenceArgs
    approvedRequested?: boolean | RequestEventFindManyArgs
    eventsRequested?: boolean | RequestEventFindManyArgs
    PasswordResetToken?: boolean | PasswordResetTokenFindManyArgs
    eventPublished?: boolean | EventFindManyArgs
    likedEvents?: boolean | EventFindManyArgs
    savedEvents?: boolean | EventFindManyArgs
    _count?: boolean | UserCountOutputTypeArgs
  }

  export type UserInclude = {
    roles?: boolean | RoleFindManyArgs
    notificationPreference?: boolean | NotificationPreferenceArgs
    approvedRequested?: boolean | RequestEventFindManyArgs
    eventsRequested?: boolean | RequestEventFindManyArgs
    PasswordResetToken?: boolean | PasswordResetTokenFindManyArgs
    eventPublished?: boolean | EventFindManyArgs
    likedEvents?: boolean | EventFindManyArgs
    savedEvents?: boolean | EventFindManyArgs
    _count?: boolean | UserCountOutputTypeArgs
  }

  export type UserGetPayload<
    S extends boolean | null | undefined | UserArgs,
    U = keyof S
      > = S extends true
        ? User
    : S extends undefined
    ? never
    : S extends UserArgs | UserFindManyArgs
    ?'include' extends U
    ? User  & {
    [P in TrueKeys<S['include']>]:
        P extends 'roles' ? Array < RoleGetPayload<S['include'][P]>>  :
        P extends 'notificationPreference' ? NotificationPreferenceGetPayload<S['include'][P]> | null :
        P extends 'approvedRequested' ? Array < RequestEventGetPayload<S['include'][P]>>  :
        P extends 'eventsRequested' ? Array < RequestEventGetPayload<S['include'][P]>>  :
        P extends 'PasswordResetToken' ? Array < PasswordResetTokenGetPayload<S['include'][P]>>  :
        P extends 'eventPublished' ? Array < EventGetPayload<S['include'][P]>>  :
        P extends 'likedEvents' ? Array < EventGetPayload<S['include'][P]>>  :
        P extends 'savedEvents' ? Array < EventGetPayload<S['include'][P]>>  :
        P extends '_count' ? UserCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'roles' ? Array < RoleGetPayload<S['select'][P]>>  :
        P extends 'notificationPreference' ? NotificationPreferenceGetPayload<S['select'][P]> | null :
        P extends 'approvedRequested' ? Array < RequestEventGetPayload<S['select'][P]>>  :
        P extends 'eventsRequested' ? Array < RequestEventGetPayload<S['select'][P]>>  :
        P extends 'PasswordResetToken' ? Array < PasswordResetTokenGetPayload<S['select'][P]>>  :
        P extends 'eventPublished' ? Array < EventGetPayload<S['select'][P]>>  :
        P extends 'likedEvents' ? Array < EventGetPayload<S['select'][P]>>  :
        P extends 'savedEvents' ? Array < EventGetPayload<S['select'][P]>>  :
        P extends '_count' ? UserCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof User ? User[P] : never
  } 
    : User
  : User


  type UserCountArgs = Merge<
    Omit<UserFindManyArgs, 'select' | 'include'> & {
      select?: UserCountAggregateInputType | true
    }
  >

  export interface UserDelegate<GlobalRejectSettings> {
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
    **/
    findUnique<T extends UserFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, UserFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'User'> extends True ? CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>> : CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>

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
    **/
    findFirst<T extends UserFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, UserFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'User'> extends True ? CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>> : CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs=} args - Arguments to filter and select certain fields only.
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
    **/
    findMany<T extends UserFindManyArgs>(
      args?: SelectSubset<T, UserFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<User>>, PrismaPromise<Array<UserGetPayload<T>>>>

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
    **/
    create<T extends UserCreateArgs>(
      args: SelectSubset<T, UserCreateArgs>
    ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>

    /**
     * Create many Users.
     *     @param {UserCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserCreateManyArgs>(
      args?: SelectSubset<T, UserCreateManyArgs>
    ): PrismaPromise<BatchPayload>

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
    **/
    delete<T extends UserDeleteArgs>(
      args: SelectSubset<T, UserDeleteArgs>
    ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>

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
    **/
    update<T extends UserUpdateArgs>(
      args: SelectSubset<T, UserUpdateArgs>
    ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>

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
    **/
    deleteMany<T extends UserDeleteManyArgs>(
      args?: SelectSubset<T, UserDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

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
    **/
    updateMany<T extends UserUpdateManyArgs>(
      args: SelectSubset<T, UserUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

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
    **/
    upsert<T extends UserUpsertArgs>(
      args: SelectSubset<T, UserUpsertArgs>
    ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>

    /**
     * Find one User that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, UserFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>

    /**
     * Find the first User that matches the filter or
     * throw `NotFoundError` if no matches were found.
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
    **/
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>

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
    ): PrismaPromise<
      T extends _Record<'select', any>
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): PrismaPromise<GetUserAggregateType<T>>

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
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__UserClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    roles<T extends RoleFindManyArgs = {}>(args?: Subset<T, RoleFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Role>>, PrismaPromise<Array<RoleGetPayload<T>>>>;

    notificationPreference<T extends NotificationPreferenceArgs = {}>(args?: Subset<T, NotificationPreferenceArgs>): CheckSelect<T, Prisma__NotificationPreferenceClient<NotificationPreference | null >, Prisma__NotificationPreferenceClient<NotificationPreferenceGetPayload<T> | null >>;

    approvedRequested<T extends RequestEventFindManyArgs = {}>(args?: Subset<T, RequestEventFindManyArgs>): CheckSelect<T, PrismaPromise<Array<RequestEvent>>, PrismaPromise<Array<RequestEventGetPayload<T>>>>;

    eventsRequested<T extends RequestEventFindManyArgs = {}>(args?: Subset<T, RequestEventFindManyArgs>): CheckSelect<T, PrismaPromise<Array<RequestEvent>>, PrismaPromise<Array<RequestEventGetPayload<T>>>>;

    PasswordResetToken<T extends PasswordResetTokenFindManyArgs = {}>(args?: Subset<T, PasswordResetTokenFindManyArgs>): CheckSelect<T, PrismaPromise<Array<PasswordResetToken>>, PrismaPromise<Array<PasswordResetTokenGetPayload<T>>>>;

    eventPublished<T extends EventFindManyArgs = {}>(args?: Subset<T, EventFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Event>>, PrismaPromise<Array<EventGetPayload<T>>>>;

    likedEvents<T extends EventFindManyArgs = {}>(args?: Subset<T, EventFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Event>>, PrismaPromise<Array<EventGetPayload<T>>>>;

    savedEvents<T extends EventFindManyArgs = {}>(args?: Subset<T, EventFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Event>>, PrismaPromise<Array<EventGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * User base type for findUnique actions
   */
  export type UserFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Filter, which User to fetch.
     * 
    **/
    where: UserWhereUniqueInput
  }

  /**
   * User: findUnique
   */
  export interface UserFindUniqueArgs extends UserFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * User base type for findFirst actions
   */
  export type UserFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Filter, which User to fetch.
     * 
    **/
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     * 
    **/
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     * 
    **/
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     * 
    **/
    distinct?: Enumerable<UserScalarFieldEnum>
  }

  /**
   * User: findFirst
   */
  export interface UserFindFirstArgs extends UserFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * User findMany
   */
  export type UserFindManyArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Filter, which Users to fetch.
     * 
    **/
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     * 
    **/
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     * 
    **/
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     * 
    **/
    skip?: number
    distinct?: Enumerable<UserScalarFieldEnum>
  }


  /**
   * User create
   */
  export type UserCreateArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * The data needed to create a User.
     * 
    **/
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }


  /**
   * User createMany
   */
  export type UserCreateManyArgs = {
    /**
     * The data used to create many Users.
     * 
    **/
    data: Enumerable<UserCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * User update
   */
  export type UserUpdateArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * The data needed to update a User.
     * 
    **/
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     * 
    **/
    where: UserWhereUniqueInput
  }


  /**
   * User updateMany
   */
  export type UserUpdateManyArgs = {
    /**
     * The data used to update Users.
     * 
    **/
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     * 
    **/
    where?: UserWhereInput
  }


  /**
   * User upsert
   */
  export type UserUpsertArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * The filter to search for the User to update in case it exists.
     * 
    **/
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     * 
    **/
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }


  /**
   * User delete
   */
  export type UserDeleteArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Filter which User to delete.
     * 
    **/
    where: UserWhereUniqueInput
  }


  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs = {
    /**
     * Filter which Users to delete
     * 
    **/
    where?: UserWhereInput
  }


  /**
   * User: findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs = UserFindUniqueArgsBase
      

  /**
   * User: findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs = UserFindFirstArgsBase
      

  /**
   * User without action
   */
  export type UserArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
  }



  /**
   * Model NotificationPreference
   */


  export type AggregateNotificationPreference = {
    _count: NotificationPreferenceCountAggregateOutputType | null
    _min: NotificationPreferenceMinAggregateOutputType | null
    _max: NotificationPreferenceMaxAggregateOutputType | null
  }

  export type NotificationPreferenceMinAggregateOutputType = {
    id: string | null
    email: boolean | null
    whatsapp: boolean | null
    userId: string | null
  }

  export type NotificationPreferenceMaxAggregateOutputType = {
    id: string | null
    email: boolean | null
    whatsapp: boolean | null
    userId: string | null
  }

  export type NotificationPreferenceCountAggregateOutputType = {
    id: number
    email: number
    whatsapp: number
    userId: number
    _all: number
  }


  export type NotificationPreferenceMinAggregateInputType = {
    id?: true
    email?: true
    whatsapp?: true
    userId?: true
  }

  export type NotificationPreferenceMaxAggregateInputType = {
    id?: true
    email?: true
    whatsapp?: true
    userId?: true
  }

  export type NotificationPreferenceCountAggregateInputType = {
    id?: true
    email?: true
    whatsapp?: true
    userId?: true
    _all?: true
  }

  export type NotificationPreferenceAggregateArgs = {
    /**
     * Filter which NotificationPreference to aggregate.
     * 
    **/
    where?: NotificationPreferenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NotificationPreferences to fetch.
     * 
    **/
    orderBy?: Enumerable<NotificationPreferenceOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: NotificationPreferenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NotificationPreferences from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NotificationPreferences.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned NotificationPreferences
    **/
    _count?: true | NotificationPreferenceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NotificationPreferenceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NotificationPreferenceMaxAggregateInputType
  }

  export type GetNotificationPreferenceAggregateType<T extends NotificationPreferenceAggregateArgs> = {
        [P in keyof T & keyof AggregateNotificationPreference]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotificationPreference[P]>
      : GetScalarType<T[P], AggregateNotificationPreference[P]>
  }




  export type NotificationPreferenceGroupByArgs = {
    where?: NotificationPreferenceWhereInput
    orderBy?: Enumerable<NotificationPreferenceOrderByWithAggregationInput>
    by: Array<NotificationPreferenceScalarFieldEnum>
    having?: NotificationPreferenceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NotificationPreferenceCountAggregateInputType | true
    _min?: NotificationPreferenceMinAggregateInputType
    _max?: NotificationPreferenceMaxAggregateInputType
  }


  export type NotificationPreferenceGroupByOutputType = {
    id: string
    email: boolean | null
    whatsapp: boolean | null
    userId: string
    _count: NotificationPreferenceCountAggregateOutputType | null
    _min: NotificationPreferenceMinAggregateOutputType | null
    _max: NotificationPreferenceMaxAggregateOutputType | null
  }

  type GetNotificationPreferenceGroupByPayload<T extends NotificationPreferenceGroupByArgs> = PrismaPromise<
    Array<
      PickArray<NotificationPreferenceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NotificationPreferenceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NotificationPreferenceGroupByOutputType[P]>
            : GetScalarType<T[P], NotificationPreferenceGroupByOutputType[P]>
        }
      >
    >


  export type NotificationPreferenceSelect = {
    id?: boolean
    email?: boolean
    whatsapp?: boolean
    userId?: boolean
    user?: boolean | UserArgs
  }

  export type NotificationPreferenceInclude = {
    user?: boolean | UserArgs
  }

  export type NotificationPreferenceGetPayload<
    S extends boolean | null | undefined | NotificationPreferenceArgs,
    U = keyof S
      > = S extends true
        ? NotificationPreference
    : S extends undefined
    ? never
    : S extends NotificationPreferenceArgs | NotificationPreferenceFindManyArgs
    ?'include' extends U
    ? NotificationPreference  & {
    [P in TrueKeys<S['include']>]:
        P extends 'user' ? UserGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'user' ? UserGetPayload<S['select'][P]> :  P extends keyof NotificationPreference ? NotificationPreference[P] : never
  } 
    : NotificationPreference
  : NotificationPreference


  type NotificationPreferenceCountArgs = Merge<
    Omit<NotificationPreferenceFindManyArgs, 'select' | 'include'> & {
      select?: NotificationPreferenceCountAggregateInputType | true
    }
  >

  export interface NotificationPreferenceDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one NotificationPreference that matches the filter.
     * @param {NotificationPreferenceFindUniqueArgs} args - Arguments to find a NotificationPreference
     * @example
     * // Get one NotificationPreference
     * const notificationPreference = await prisma.notificationPreference.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends NotificationPreferenceFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, NotificationPreferenceFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'NotificationPreference'> extends True ? CheckSelect<T, Prisma__NotificationPreferenceClient<NotificationPreference>, Prisma__NotificationPreferenceClient<NotificationPreferenceGetPayload<T>>> : CheckSelect<T, Prisma__NotificationPreferenceClient<NotificationPreference | null >, Prisma__NotificationPreferenceClient<NotificationPreferenceGetPayload<T> | null >>

    /**
     * Find the first NotificationPreference that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationPreferenceFindFirstArgs} args - Arguments to find a NotificationPreference
     * @example
     * // Get one NotificationPreference
     * const notificationPreference = await prisma.notificationPreference.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends NotificationPreferenceFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, NotificationPreferenceFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'NotificationPreference'> extends True ? CheckSelect<T, Prisma__NotificationPreferenceClient<NotificationPreference>, Prisma__NotificationPreferenceClient<NotificationPreferenceGetPayload<T>>> : CheckSelect<T, Prisma__NotificationPreferenceClient<NotificationPreference | null >, Prisma__NotificationPreferenceClient<NotificationPreferenceGetPayload<T> | null >>

    /**
     * Find zero or more NotificationPreferences that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationPreferenceFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all NotificationPreferences
     * const notificationPreferences = await prisma.notificationPreference.findMany()
     * 
     * // Get first 10 NotificationPreferences
     * const notificationPreferences = await prisma.notificationPreference.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const notificationPreferenceWithIdOnly = await prisma.notificationPreference.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends NotificationPreferenceFindManyArgs>(
      args?: SelectSubset<T, NotificationPreferenceFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<NotificationPreference>>, PrismaPromise<Array<NotificationPreferenceGetPayload<T>>>>

    /**
     * Create a NotificationPreference.
     * @param {NotificationPreferenceCreateArgs} args - Arguments to create a NotificationPreference.
     * @example
     * // Create one NotificationPreference
     * const NotificationPreference = await prisma.notificationPreference.create({
     *   data: {
     *     // ... data to create a NotificationPreference
     *   }
     * })
     * 
    **/
    create<T extends NotificationPreferenceCreateArgs>(
      args: SelectSubset<T, NotificationPreferenceCreateArgs>
    ): CheckSelect<T, Prisma__NotificationPreferenceClient<NotificationPreference>, Prisma__NotificationPreferenceClient<NotificationPreferenceGetPayload<T>>>

    /**
     * Create many NotificationPreferences.
     *     @param {NotificationPreferenceCreateManyArgs} args - Arguments to create many NotificationPreferences.
     *     @example
     *     // Create many NotificationPreferences
     *     const notificationPreference = await prisma.notificationPreference.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends NotificationPreferenceCreateManyArgs>(
      args?: SelectSubset<T, NotificationPreferenceCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a NotificationPreference.
     * @param {NotificationPreferenceDeleteArgs} args - Arguments to delete one NotificationPreference.
     * @example
     * // Delete one NotificationPreference
     * const NotificationPreference = await prisma.notificationPreference.delete({
     *   where: {
     *     // ... filter to delete one NotificationPreference
     *   }
     * })
     * 
    **/
    delete<T extends NotificationPreferenceDeleteArgs>(
      args: SelectSubset<T, NotificationPreferenceDeleteArgs>
    ): CheckSelect<T, Prisma__NotificationPreferenceClient<NotificationPreference>, Prisma__NotificationPreferenceClient<NotificationPreferenceGetPayload<T>>>

    /**
     * Update one NotificationPreference.
     * @param {NotificationPreferenceUpdateArgs} args - Arguments to update one NotificationPreference.
     * @example
     * // Update one NotificationPreference
     * const notificationPreference = await prisma.notificationPreference.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends NotificationPreferenceUpdateArgs>(
      args: SelectSubset<T, NotificationPreferenceUpdateArgs>
    ): CheckSelect<T, Prisma__NotificationPreferenceClient<NotificationPreference>, Prisma__NotificationPreferenceClient<NotificationPreferenceGetPayload<T>>>

    /**
     * Delete zero or more NotificationPreferences.
     * @param {NotificationPreferenceDeleteManyArgs} args - Arguments to filter NotificationPreferences to delete.
     * @example
     * // Delete a few NotificationPreferences
     * const { count } = await prisma.notificationPreference.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends NotificationPreferenceDeleteManyArgs>(
      args?: SelectSubset<T, NotificationPreferenceDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more NotificationPreferences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationPreferenceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many NotificationPreferences
     * const notificationPreference = await prisma.notificationPreference.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends NotificationPreferenceUpdateManyArgs>(
      args: SelectSubset<T, NotificationPreferenceUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one NotificationPreference.
     * @param {NotificationPreferenceUpsertArgs} args - Arguments to update or create a NotificationPreference.
     * @example
     * // Update or create a NotificationPreference
     * const notificationPreference = await prisma.notificationPreference.upsert({
     *   create: {
     *     // ... data to create a NotificationPreference
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the NotificationPreference we want to update
     *   }
     * })
    **/
    upsert<T extends NotificationPreferenceUpsertArgs>(
      args: SelectSubset<T, NotificationPreferenceUpsertArgs>
    ): CheckSelect<T, Prisma__NotificationPreferenceClient<NotificationPreference>, Prisma__NotificationPreferenceClient<NotificationPreferenceGetPayload<T>>>

    /**
     * Find one NotificationPreference that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {NotificationPreferenceFindUniqueOrThrowArgs} args - Arguments to find a NotificationPreference
     * @example
     * // Get one NotificationPreference
     * const notificationPreference = await prisma.notificationPreference.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends NotificationPreferenceFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, NotificationPreferenceFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__NotificationPreferenceClient<NotificationPreference>, Prisma__NotificationPreferenceClient<NotificationPreferenceGetPayload<T>>>

    /**
     * Find the first NotificationPreference that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationPreferenceFindFirstOrThrowArgs} args - Arguments to find a NotificationPreference
     * @example
     * // Get one NotificationPreference
     * const notificationPreference = await prisma.notificationPreference.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends NotificationPreferenceFindFirstOrThrowArgs>(
      args?: SelectSubset<T, NotificationPreferenceFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__NotificationPreferenceClient<NotificationPreference>, Prisma__NotificationPreferenceClient<NotificationPreferenceGetPayload<T>>>

    /**
     * Count the number of NotificationPreferences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationPreferenceCountArgs} args - Arguments to filter NotificationPreferences to count.
     * @example
     * // Count the number of NotificationPreferences
     * const count = await prisma.notificationPreference.count({
     *   where: {
     *     // ... the filter for the NotificationPreferences we want to count
     *   }
     * })
    **/
    count<T extends NotificationPreferenceCountArgs>(
      args?: Subset<T, NotificationPreferenceCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NotificationPreferenceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a NotificationPreference.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationPreferenceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NotificationPreferenceAggregateArgs>(args: Subset<T, NotificationPreferenceAggregateArgs>): PrismaPromise<GetNotificationPreferenceAggregateType<T>>

    /**
     * Group by NotificationPreference.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationPreferenceGroupByArgs} args - Group by arguments.
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
      T extends NotificationPreferenceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NotificationPreferenceGroupByArgs['orderBy'] }
        : { orderBy?: NotificationPreferenceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, NotificationPreferenceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotificationPreferenceGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for NotificationPreference.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__NotificationPreferenceClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    user<T extends UserArgs = {}>(args?: Subset<T, UserArgs>): CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * NotificationPreference base type for findUnique actions
   */
  export type NotificationPreferenceFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the NotificationPreference
     * 
    **/
    select?: NotificationPreferenceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: NotificationPreferenceInclude | null
    /**
     * Filter, which NotificationPreference to fetch.
     * 
    **/
    where: NotificationPreferenceWhereUniqueInput
  }

  /**
   * NotificationPreference: findUnique
   */
  export interface NotificationPreferenceFindUniqueArgs extends NotificationPreferenceFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * NotificationPreference base type for findFirst actions
   */
  export type NotificationPreferenceFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the NotificationPreference
     * 
    **/
    select?: NotificationPreferenceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: NotificationPreferenceInclude | null
    /**
     * Filter, which NotificationPreference to fetch.
     * 
    **/
    where?: NotificationPreferenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NotificationPreferences to fetch.
     * 
    **/
    orderBy?: Enumerable<NotificationPreferenceOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NotificationPreferences.
     * 
    **/
    cursor?: NotificationPreferenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NotificationPreferences from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NotificationPreferences.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NotificationPreferences.
     * 
    **/
    distinct?: Enumerable<NotificationPreferenceScalarFieldEnum>
  }

  /**
   * NotificationPreference: findFirst
   */
  export interface NotificationPreferenceFindFirstArgs extends NotificationPreferenceFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * NotificationPreference findMany
   */
  export type NotificationPreferenceFindManyArgs = {
    /**
     * Select specific fields to fetch from the NotificationPreference
     * 
    **/
    select?: NotificationPreferenceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: NotificationPreferenceInclude | null
    /**
     * Filter, which NotificationPreferences to fetch.
     * 
    **/
    where?: NotificationPreferenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NotificationPreferences to fetch.
     * 
    **/
    orderBy?: Enumerable<NotificationPreferenceOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing NotificationPreferences.
     * 
    **/
    cursor?: NotificationPreferenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NotificationPreferences from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NotificationPreferences.
     * 
    **/
    skip?: number
    distinct?: Enumerable<NotificationPreferenceScalarFieldEnum>
  }


  /**
   * NotificationPreference create
   */
  export type NotificationPreferenceCreateArgs = {
    /**
     * Select specific fields to fetch from the NotificationPreference
     * 
    **/
    select?: NotificationPreferenceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: NotificationPreferenceInclude | null
    /**
     * The data needed to create a NotificationPreference.
     * 
    **/
    data: XOR<NotificationPreferenceCreateInput, NotificationPreferenceUncheckedCreateInput>
  }


  /**
   * NotificationPreference createMany
   */
  export type NotificationPreferenceCreateManyArgs = {
    /**
     * The data used to create many NotificationPreferences.
     * 
    **/
    data: Enumerable<NotificationPreferenceCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * NotificationPreference update
   */
  export type NotificationPreferenceUpdateArgs = {
    /**
     * Select specific fields to fetch from the NotificationPreference
     * 
    **/
    select?: NotificationPreferenceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: NotificationPreferenceInclude | null
    /**
     * The data needed to update a NotificationPreference.
     * 
    **/
    data: XOR<NotificationPreferenceUpdateInput, NotificationPreferenceUncheckedUpdateInput>
    /**
     * Choose, which NotificationPreference to update.
     * 
    **/
    where: NotificationPreferenceWhereUniqueInput
  }


  /**
   * NotificationPreference updateMany
   */
  export type NotificationPreferenceUpdateManyArgs = {
    /**
     * The data used to update NotificationPreferences.
     * 
    **/
    data: XOR<NotificationPreferenceUpdateManyMutationInput, NotificationPreferenceUncheckedUpdateManyInput>
    /**
     * Filter which NotificationPreferences to update
     * 
    **/
    where?: NotificationPreferenceWhereInput
  }


  /**
   * NotificationPreference upsert
   */
  export type NotificationPreferenceUpsertArgs = {
    /**
     * Select specific fields to fetch from the NotificationPreference
     * 
    **/
    select?: NotificationPreferenceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: NotificationPreferenceInclude | null
    /**
     * The filter to search for the NotificationPreference to update in case it exists.
     * 
    **/
    where: NotificationPreferenceWhereUniqueInput
    /**
     * In case the NotificationPreference found by the `where` argument doesn't exist, create a new NotificationPreference with this data.
     * 
    **/
    create: XOR<NotificationPreferenceCreateInput, NotificationPreferenceUncheckedCreateInput>
    /**
     * In case the NotificationPreference was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<NotificationPreferenceUpdateInput, NotificationPreferenceUncheckedUpdateInput>
  }


  /**
   * NotificationPreference delete
   */
  export type NotificationPreferenceDeleteArgs = {
    /**
     * Select specific fields to fetch from the NotificationPreference
     * 
    **/
    select?: NotificationPreferenceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: NotificationPreferenceInclude | null
    /**
     * Filter which NotificationPreference to delete.
     * 
    **/
    where: NotificationPreferenceWhereUniqueInput
  }


  /**
   * NotificationPreference deleteMany
   */
  export type NotificationPreferenceDeleteManyArgs = {
    /**
     * Filter which NotificationPreferences to delete
     * 
    **/
    where?: NotificationPreferenceWhereInput
  }


  /**
   * NotificationPreference: findUniqueOrThrow
   */
  export type NotificationPreferenceFindUniqueOrThrowArgs = NotificationPreferenceFindUniqueArgsBase
      

  /**
   * NotificationPreference: findFirstOrThrow
   */
  export type NotificationPreferenceFindFirstOrThrowArgs = NotificationPreferenceFindFirstArgsBase
      

  /**
   * NotificationPreference without action
   */
  export type NotificationPreferenceArgs = {
    /**
     * Select specific fields to fetch from the NotificationPreference
     * 
    **/
    select?: NotificationPreferenceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: NotificationPreferenceInclude | null
  }



  /**
   * Model Role
   */


  export type AggregateRole = {
    _count: RoleCountAggregateOutputType | null
    _min: RoleMinAggregateOutputType | null
    _max: RoleMaxAggregateOutputType | null
  }

  export type RoleMinAggregateOutputType = {
    id: string | null
    name: RoleType | null
    description: string | null
  }

  export type RoleMaxAggregateOutputType = {
    id: string | null
    name: RoleType | null
    description: string | null
  }

  export type RoleCountAggregateOutputType = {
    id: number
    name: number
    description: number
    _all: number
  }


  export type RoleMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
  }

  export type RoleMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
  }

  export type RoleCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    _all?: true
  }

  export type RoleAggregateArgs = {
    /**
     * Filter which Role to aggregate.
     * 
    **/
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     * 
    **/
    orderBy?: Enumerable<RoleOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Roles
    **/
    _count?: true | RoleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoleMaxAggregateInputType
  }

  export type GetRoleAggregateType<T extends RoleAggregateArgs> = {
        [P in keyof T & keyof AggregateRole]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRole[P]>
      : GetScalarType<T[P], AggregateRole[P]>
  }




  export type RoleGroupByArgs = {
    where?: RoleWhereInput
    orderBy?: Enumerable<RoleOrderByWithAggregationInput>
    by: Array<RoleScalarFieldEnum>
    having?: RoleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoleCountAggregateInputType | true
    _min?: RoleMinAggregateInputType
    _max?: RoleMaxAggregateInputType
  }


  export type RoleGroupByOutputType = {
    id: string
    name: RoleType
    description: string
    _count: RoleCountAggregateOutputType | null
    _min: RoleMinAggregateOutputType | null
    _max: RoleMaxAggregateOutputType | null
  }

  type GetRoleGroupByPayload<T extends RoleGroupByArgs> = PrismaPromise<
    Array<
      PickArray<RoleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoleGroupByOutputType[P]>
            : GetScalarType<T[P], RoleGroupByOutputType[P]>
        }
      >
    >


  export type RoleSelect = {
    id?: boolean
    name?: boolean
    description?: boolean
    users?: boolean | UserFindManyArgs
    _count?: boolean | RoleCountOutputTypeArgs
  }

  export type RoleInclude = {
    users?: boolean | UserFindManyArgs
    _count?: boolean | RoleCountOutputTypeArgs
  }

  export type RoleGetPayload<
    S extends boolean | null | undefined | RoleArgs,
    U = keyof S
      > = S extends true
        ? Role
    : S extends undefined
    ? never
    : S extends RoleArgs | RoleFindManyArgs
    ?'include' extends U
    ? Role  & {
    [P in TrueKeys<S['include']>]:
        P extends 'users' ? Array < UserGetPayload<S['include'][P]>>  :
        P extends '_count' ? RoleCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'users' ? Array < UserGetPayload<S['select'][P]>>  :
        P extends '_count' ? RoleCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Role ? Role[P] : never
  } 
    : Role
  : Role


  type RoleCountArgs = Merge<
    Omit<RoleFindManyArgs, 'select' | 'include'> & {
      select?: RoleCountAggregateInputType | true
    }
  >

  export interface RoleDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Role that matches the filter.
     * @param {RoleFindUniqueArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends RoleFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, RoleFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Role'> extends True ? CheckSelect<T, Prisma__RoleClient<Role>, Prisma__RoleClient<RoleGetPayload<T>>> : CheckSelect<T, Prisma__RoleClient<Role | null >, Prisma__RoleClient<RoleGetPayload<T> | null >>

    /**
     * Find the first Role that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindFirstArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends RoleFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, RoleFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Role'> extends True ? CheckSelect<T, Prisma__RoleClient<Role>, Prisma__RoleClient<RoleGetPayload<T>>> : CheckSelect<T, Prisma__RoleClient<Role | null >, Prisma__RoleClient<RoleGetPayload<T> | null >>

    /**
     * Find zero or more Roles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Roles
     * const roles = await prisma.role.findMany()
     * 
     * // Get first 10 Roles
     * const roles = await prisma.role.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const roleWithIdOnly = await prisma.role.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends RoleFindManyArgs>(
      args?: SelectSubset<T, RoleFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Role>>, PrismaPromise<Array<RoleGetPayload<T>>>>

    /**
     * Create a Role.
     * @param {RoleCreateArgs} args - Arguments to create a Role.
     * @example
     * // Create one Role
     * const Role = await prisma.role.create({
     *   data: {
     *     // ... data to create a Role
     *   }
     * })
     * 
    **/
    create<T extends RoleCreateArgs>(
      args: SelectSubset<T, RoleCreateArgs>
    ): CheckSelect<T, Prisma__RoleClient<Role>, Prisma__RoleClient<RoleGetPayload<T>>>

    /**
     * Create many Roles.
     *     @param {RoleCreateManyArgs} args - Arguments to create many Roles.
     *     @example
     *     // Create many Roles
     *     const role = await prisma.role.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends RoleCreateManyArgs>(
      args?: SelectSubset<T, RoleCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Role.
     * @param {RoleDeleteArgs} args - Arguments to delete one Role.
     * @example
     * // Delete one Role
     * const Role = await prisma.role.delete({
     *   where: {
     *     // ... filter to delete one Role
     *   }
     * })
     * 
    **/
    delete<T extends RoleDeleteArgs>(
      args: SelectSubset<T, RoleDeleteArgs>
    ): CheckSelect<T, Prisma__RoleClient<Role>, Prisma__RoleClient<RoleGetPayload<T>>>

    /**
     * Update one Role.
     * @param {RoleUpdateArgs} args - Arguments to update one Role.
     * @example
     * // Update one Role
     * const role = await prisma.role.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends RoleUpdateArgs>(
      args: SelectSubset<T, RoleUpdateArgs>
    ): CheckSelect<T, Prisma__RoleClient<Role>, Prisma__RoleClient<RoleGetPayload<T>>>

    /**
     * Delete zero or more Roles.
     * @param {RoleDeleteManyArgs} args - Arguments to filter Roles to delete.
     * @example
     * // Delete a few Roles
     * const { count } = await prisma.role.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends RoleDeleteManyArgs>(
      args?: SelectSubset<T, RoleDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Roles
     * const role = await prisma.role.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends RoleUpdateManyArgs>(
      args: SelectSubset<T, RoleUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Role.
     * @param {RoleUpsertArgs} args - Arguments to update or create a Role.
     * @example
     * // Update or create a Role
     * const role = await prisma.role.upsert({
     *   create: {
     *     // ... data to create a Role
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Role we want to update
     *   }
     * })
    **/
    upsert<T extends RoleUpsertArgs>(
      args: SelectSubset<T, RoleUpsertArgs>
    ): CheckSelect<T, Prisma__RoleClient<Role>, Prisma__RoleClient<RoleGetPayload<T>>>

    /**
     * Find one Role that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {RoleFindUniqueOrThrowArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends RoleFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, RoleFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__RoleClient<Role>, Prisma__RoleClient<RoleGetPayload<T>>>

    /**
     * Find the first Role that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindFirstOrThrowArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends RoleFindFirstOrThrowArgs>(
      args?: SelectSubset<T, RoleFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__RoleClient<Role>, Prisma__RoleClient<RoleGetPayload<T>>>

    /**
     * Count the number of Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleCountArgs} args - Arguments to filter Roles to count.
     * @example
     * // Count the number of Roles
     * const count = await prisma.role.count({
     *   where: {
     *     // ... the filter for the Roles we want to count
     *   }
     * })
    **/
    count<T extends RoleCountArgs>(
      args?: Subset<T, RoleCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RoleAggregateArgs>(args: Subset<T, RoleAggregateArgs>): PrismaPromise<GetRoleAggregateType<T>>

    /**
     * Group by Role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleGroupByArgs} args - Group by arguments.
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
      T extends RoleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RoleGroupByArgs['orderBy'] }
        : { orderBy?: RoleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, RoleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoleGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Role.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__RoleClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    users<T extends UserFindManyArgs = {}>(args?: Subset<T, UserFindManyArgs>): CheckSelect<T, PrismaPromise<Array<User>>, PrismaPromise<Array<UserGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Role base type for findUnique actions
   */
  export type RoleFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Role
     * 
    **/
    select?: RoleSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RoleInclude | null
    /**
     * Filter, which Role to fetch.
     * 
    **/
    where: RoleWhereUniqueInput
  }

  /**
   * Role: findUnique
   */
  export interface RoleFindUniqueArgs extends RoleFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Role base type for findFirst actions
   */
  export type RoleFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Role
     * 
    **/
    select?: RoleSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RoleInclude | null
    /**
     * Filter, which Role to fetch.
     * 
    **/
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     * 
    **/
    orderBy?: Enumerable<RoleOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Roles.
     * 
    **/
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Roles.
     * 
    **/
    distinct?: Enumerable<RoleScalarFieldEnum>
  }

  /**
   * Role: findFirst
   */
  export interface RoleFindFirstArgs extends RoleFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Role findMany
   */
  export type RoleFindManyArgs = {
    /**
     * Select specific fields to fetch from the Role
     * 
    **/
    select?: RoleSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RoleInclude | null
    /**
     * Filter, which Roles to fetch.
     * 
    **/
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     * 
    **/
    orderBy?: Enumerable<RoleOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Roles.
     * 
    **/
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     * 
    **/
    skip?: number
    distinct?: Enumerable<RoleScalarFieldEnum>
  }


  /**
   * Role create
   */
  export type RoleCreateArgs = {
    /**
     * Select specific fields to fetch from the Role
     * 
    **/
    select?: RoleSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RoleInclude | null
    /**
     * The data needed to create a Role.
     * 
    **/
    data: XOR<RoleCreateInput, RoleUncheckedCreateInput>
  }


  /**
   * Role createMany
   */
  export type RoleCreateManyArgs = {
    /**
     * The data used to create many Roles.
     * 
    **/
    data: Enumerable<RoleCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Role update
   */
  export type RoleUpdateArgs = {
    /**
     * Select specific fields to fetch from the Role
     * 
    **/
    select?: RoleSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RoleInclude | null
    /**
     * The data needed to update a Role.
     * 
    **/
    data: XOR<RoleUpdateInput, RoleUncheckedUpdateInput>
    /**
     * Choose, which Role to update.
     * 
    **/
    where: RoleWhereUniqueInput
  }


  /**
   * Role updateMany
   */
  export type RoleUpdateManyArgs = {
    /**
     * The data used to update Roles.
     * 
    **/
    data: XOR<RoleUpdateManyMutationInput, RoleUncheckedUpdateManyInput>
    /**
     * Filter which Roles to update
     * 
    **/
    where?: RoleWhereInput
  }


  /**
   * Role upsert
   */
  export type RoleUpsertArgs = {
    /**
     * Select specific fields to fetch from the Role
     * 
    **/
    select?: RoleSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RoleInclude | null
    /**
     * The filter to search for the Role to update in case it exists.
     * 
    **/
    where: RoleWhereUniqueInput
    /**
     * In case the Role found by the `where` argument doesn't exist, create a new Role with this data.
     * 
    **/
    create: XOR<RoleCreateInput, RoleUncheckedCreateInput>
    /**
     * In case the Role was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<RoleUpdateInput, RoleUncheckedUpdateInput>
  }


  /**
   * Role delete
   */
  export type RoleDeleteArgs = {
    /**
     * Select specific fields to fetch from the Role
     * 
    **/
    select?: RoleSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RoleInclude | null
    /**
     * Filter which Role to delete.
     * 
    **/
    where: RoleWhereUniqueInput
  }


  /**
   * Role deleteMany
   */
  export type RoleDeleteManyArgs = {
    /**
     * Filter which Roles to delete
     * 
    **/
    where?: RoleWhereInput
  }


  /**
   * Role: findUniqueOrThrow
   */
  export type RoleFindUniqueOrThrowArgs = RoleFindUniqueArgsBase
      

  /**
   * Role: findFirstOrThrow
   */
  export type RoleFindFirstOrThrowArgs = RoleFindFirstArgsBase
      

  /**
   * Role without action
   */
  export type RoleArgs = {
    /**
     * Select specific fields to fetch from the Role
     * 
    **/
    select?: RoleSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RoleInclude | null
  }



  /**
   * Model PasswordResetToken
   */


  export type AggregatePasswordResetToken = {
    _count: PasswordResetTokenCountAggregateOutputType | null
    _avg: PasswordResetTokenAvgAggregateOutputType | null
    _sum: PasswordResetTokenSumAggregateOutputType | null
    _min: PasswordResetTokenMinAggregateOutputType | null
    _max: PasswordResetTokenMaxAggregateOutputType | null
  }

  export type PasswordResetTokenAvgAggregateOutputType = {
    id: number | null
  }

  export type PasswordResetTokenSumAggregateOutputType = {
    id: number | null
  }

  export type PasswordResetTokenMinAggregateOutputType = {
    id: number | null
    token: string | null
    expiration_date: Date | null
    deactivated: boolean | null
    userId: string | null
  }

  export type PasswordResetTokenMaxAggregateOutputType = {
    id: number | null
    token: string | null
    expiration_date: Date | null
    deactivated: boolean | null
    userId: string | null
  }

  export type PasswordResetTokenCountAggregateOutputType = {
    id: number
    token: number
    expiration_date: number
    deactivated: number
    userId: number
    _all: number
  }


  export type PasswordResetTokenAvgAggregateInputType = {
    id?: true
  }

  export type PasswordResetTokenSumAggregateInputType = {
    id?: true
  }

  export type PasswordResetTokenMinAggregateInputType = {
    id?: true
    token?: true
    expiration_date?: true
    deactivated?: true
    userId?: true
  }

  export type PasswordResetTokenMaxAggregateInputType = {
    id?: true
    token?: true
    expiration_date?: true
    deactivated?: true
    userId?: true
  }

  export type PasswordResetTokenCountAggregateInputType = {
    id?: true
    token?: true
    expiration_date?: true
    deactivated?: true
    userId?: true
    _all?: true
  }

  export type PasswordResetTokenAggregateArgs = {
    /**
     * Filter which PasswordResetToken to aggregate.
     * 
    **/
    where?: PasswordResetTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PasswordResetTokens to fetch.
     * 
    **/
    orderBy?: Enumerable<PasswordResetTokenOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: PasswordResetTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PasswordResetTokens from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PasswordResetTokens.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PasswordResetTokens
    **/
    _count?: true | PasswordResetTokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PasswordResetTokenAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PasswordResetTokenSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PasswordResetTokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PasswordResetTokenMaxAggregateInputType
  }

  export type GetPasswordResetTokenAggregateType<T extends PasswordResetTokenAggregateArgs> = {
        [P in keyof T & keyof AggregatePasswordResetToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePasswordResetToken[P]>
      : GetScalarType<T[P], AggregatePasswordResetToken[P]>
  }




  export type PasswordResetTokenGroupByArgs = {
    where?: PasswordResetTokenWhereInput
    orderBy?: Enumerable<PasswordResetTokenOrderByWithAggregationInput>
    by: Array<PasswordResetTokenScalarFieldEnum>
    having?: PasswordResetTokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PasswordResetTokenCountAggregateInputType | true
    _avg?: PasswordResetTokenAvgAggregateInputType
    _sum?: PasswordResetTokenSumAggregateInputType
    _min?: PasswordResetTokenMinAggregateInputType
    _max?: PasswordResetTokenMaxAggregateInputType
  }


  export type PasswordResetTokenGroupByOutputType = {
    id: number
    token: string
    expiration_date: Date
    deactivated: boolean
    userId: string
    _count: PasswordResetTokenCountAggregateOutputType | null
    _avg: PasswordResetTokenAvgAggregateOutputType | null
    _sum: PasswordResetTokenSumAggregateOutputType | null
    _min: PasswordResetTokenMinAggregateOutputType | null
    _max: PasswordResetTokenMaxAggregateOutputType | null
  }

  type GetPasswordResetTokenGroupByPayload<T extends PasswordResetTokenGroupByArgs> = PrismaPromise<
    Array<
      PickArray<PasswordResetTokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PasswordResetTokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PasswordResetTokenGroupByOutputType[P]>
            : GetScalarType<T[P], PasswordResetTokenGroupByOutputType[P]>
        }
      >
    >


  export type PasswordResetTokenSelect = {
    id?: boolean
    token?: boolean
    expiration_date?: boolean
    deactivated?: boolean
    user?: boolean | UserArgs
    userId?: boolean
  }

  export type PasswordResetTokenInclude = {
    user?: boolean | UserArgs
  }

  export type PasswordResetTokenGetPayload<
    S extends boolean | null | undefined | PasswordResetTokenArgs,
    U = keyof S
      > = S extends true
        ? PasswordResetToken
    : S extends undefined
    ? never
    : S extends PasswordResetTokenArgs | PasswordResetTokenFindManyArgs
    ?'include' extends U
    ? PasswordResetToken  & {
    [P in TrueKeys<S['include']>]:
        P extends 'user' ? UserGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'user' ? UserGetPayload<S['select'][P]> :  P extends keyof PasswordResetToken ? PasswordResetToken[P] : never
  } 
    : PasswordResetToken
  : PasswordResetToken


  type PasswordResetTokenCountArgs = Merge<
    Omit<PasswordResetTokenFindManyArgs, 'select' | 'include'> & {
      select?: PasswordResetTokenCountAggregateInputType | true
    }
  >

  export interface PasswordResetTokenDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one PasswordResetToken that matches the filter.
     * @param {PasswordResetTokenFindUniqueArgs} args - Arguments to find a PasswordResetToken
     * @example
     * // Get one PasswordResetToken
     * const passwordResetToken = await prisma.passwordResetToken.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends PasswordResetTokenFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, PasswordResetTokenFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'PasswordResetToken'> extends True ? CheckSelect<T, Prisma__PasswordResetTokenClient<PasswordResetToken>, Prisma__PasswordResetTokenClient<PasswordResetTokenGetPayload<T>>> : CheckSelect<T, Prisma__PasswordResetTokenClient<PasswordResetToken | null >, Prisma__PasswordResetTokenClient<PasswordResetTokenGetPayload<T> | null >>

    /**
     * Find the first PasswordResetToken that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordResetTokenFindFirstArgs} args - Arguments to find a PasswordResetToken
     * @example
     * // Get one PasswordResetToken
     * const passwordResetToken = await prisma.passwordResetToken.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends PasswordResetTokenFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, PasswordResetTokenFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'PasswordResetToken'> extends True ? CheckSelect<T, Prisma__PasswordResetTokenClient<PasswordResetToken>, Prisma__PasswordResetTokenClient<PasswordResetTokenGetPayload<T>>> : CheckSelect<T, Prisma__PasswordResetTokenClient<PasswordResetToken | null >, Prisma__PasswordResetTokenClient<PasswordResetTokenGetPayload<T> | null >>

    /**
     * Find zero or more PasswordResetTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordResetTokenFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PasswordResetTokens
     * const passwordResetTokens = await prisma.passwordResetToken.findMany()
     * 
     * // Get first 10 PasswordResetTokens
     * const passwordResetTokens = await prisma.passwordResetToken.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const passwordResetTokenWithIdOnly = await prisma.passwordResetToken.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends PasswordResetTokenFindManyArgs>(
      args?: SelectSubset<T, PasswordResetTokenFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<PasswordResetToken>>, PrismaPromise<Array<PasswordResetTokenGetPayload<T>>>>

    /**
     * Create a PasswordResetToken.
     * @param {PasswordResetTokenCreateArgs} args - Arguments to create a PasswordResetToken.
     * @example
     * // Create one PasswordResetToken
     * const PasswordResetToken = await prisma.passwordResetToken.create({
     *   data: {
     *     // ... data to create a PasswordResetToken
     *   }
     * })
     * 
    **/
    create<T extends PasswordResetTokenCreateArgs>(
      args: SelectSubset<T, PasswordResetTokenCreateArgs>
    ): CheckSelect<T, Prisma__PasswordResetTokenClient<PasswordResetToken>, Prisma__PasswordResetTokenClient<PasswordResetTokenGetPayload<T>>>

    /**
     * Create many PasswordResetTokens.
     *     @param {PasswordResetTokenCreateManyArgs} args - Arguments to create many PasswordResetTokens.
     *     @example
     *     // Create many PasswordResetTokens
     *     const passwordResetToken = await prisma.passwordResetToken.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends PasswordResetTokenCreateManyArgs>(
      args?: SelectSubset<T, PasswordResetTokenCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a PasswordResetToken.
     * @param {PasswordResetTokenDeleteArgs} args - Arguments to delete one PasswordResetToken.
     * @example
     * // Delete one PasswordResetToken
     * const PasswordResetToken = await prisma.passwordResetToken.delete({
     *   where: {
     *     // ... filter to delete one PasswordResetToken
     *   }
     * })
     * 
    **/
    delete<T extends PasswordResetTokenDeleteArgs>(
      args: SelectSubset<T, PasswordResetTokenDeleteArgs>
    ): CheckSelect<T, Prisma__PasswordResetTokenClient<PasswordResetToken>, Prisma__PasswordResetTokenClient<PasswordResetTokenGetPayload<T>>>

    /**
     * Update one PasswordResetToken.
     * @param {PasswordResetTokenUpdateArgs} args - Arguments to update one PasswordResetToken.
     * @example
     * // Update one PasswordResetToken
     * const passwordResetToken = await prisma.passwordResetToken.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends PasswordResetTokenUpdateArgs>(
      args: SelectSubset<T, PasswordResetTokenUpdateArgs>
    ): CheckSelect<T, Prisma__PasswordResetTokenClient<PasswordResetToken>, Prisma__PasswordResetTokenClient<PasswordResetTokenGetPayload<T>>>

    /**
     * Delete zero or more PasswordResetTokens.
     * @param {PasswordResetTokenDeleteManyArgs} args - Arguments to filter PasswordResetTokens to delete.
     * @example
     * // Delete a few PasswordResetTokens
     * const { count } = await prisma.passwordResetToken.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends PasswordResetTokenDeleteManyArgs>(
      args?: SelectSubset<T, PasswordResetTokenDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more PasswordResetTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordResetTokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PasswordResetTokens
     * const passwordResetToken = await prisma.passwordResetToken.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends PasswordResetTokenUpdateManyArgs>(
      args: SelectSubset<T, PasswordResetTokenUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one PasswordResetToken.
     * @param {PasswordResetTokenUpsertArgs} args - Arguments to update or create a PasswordResetToken.
     * @example
     * // Update or create a PasswordResetToken
     * const passwordResetToken = await prisma.passwordResetToken.upsert({
     *   create: {
     *     // ... data to create a PasswordResetToken
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PasswordResetToken we want to update
     *   }
     * })
    **/
    upsert<T extends PasswordResetTokenUpsertArgs>(
      args: SelectSubset<T, PasswordResetTokenUpsertArgs>
    ): CheckSelect<T, Prisma__PasswordResetTokenClient<PasswordResetToken>, Prisma__PasswordResetTokenClient<PasswordResetTokenGetPayload<T>>>

    /**
     * Find one PasswordResetToken that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {PasswordResetTokenFindUniqueOrThrowArgs} args - Arguments to find a PasswordResetToken
     * @example
     * // Get one PasswordResetToken
     * const passwordResetToken = await prisma.passwordResetToken.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends PasswordResetTokenFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, PasswordResetTokenFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__PasswordResetTokenClient<PasswordResetToken>, Prisma__PasswordResetTokenClient<PasswordResetTokenGetPayload<T>>>

    /**
     * Find the first PasswordResetToken that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordResetTokenFindFirstOrThrowArgs} args - Arguments to find a PasswordResetToken
     * @example
     * // Get one PasswordResetToken
     * const passwordResetToken = await prisma.passwordResetToken.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends PasswordResetTokenFindFirstOrThrowArgs>(
      args?: SelectSubset<T, PasswordResetTokenFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__PasswordResetTokenClient<PasswordResetToken>, Prisma__PasswordResetTokenClient<PasswordResetTokenGetPayload<T>>>

    /**
     * Count the number of PasswordResetTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordResetTokenCountArgs} args - Arguments to filter PasswordResetTokens to count.
     * @example
     * // Count the number of PasswordResetTokens
     * const count = await prisma.passwordResetToken.count({
     *   where: {
     *     // ... the filter for the PasswordResetTokens we want to count
     *   }
     * })
    **/
    count<T extends PasswordResetTokenCountArgs>(
      args?: Subset<T, PasswordResetTokenCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PasswordResetTokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PasswordResetToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordResetTokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PasswordResetTokenAggregateArgs>(args: Subset<T, PasswordResetTokenAggregateArgs>): PrismaPromise<GetPasswordResetTokenAggregateType<T>>

    /**
     * Group by PasswordResetToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordResetTokenGroupByArgs} args - Group by arguments.
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
      T extends PasswordResetTokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PasswordResetTokenGroupByArgs['orderBy'] }
        : { orderBy?: PasswordResetTokenGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, PasswordResetTokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPasswordResetTokenGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for PasswordResetToken.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__PasswordResetTokenClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    user<T extends UserArgs = {}>(args?: Subset<T, UserArgs>): CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * PasswordResetToken base type for findUnique actions
   */
  export type PasswordResetTokenFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the PasswordResetToken
     * 
    **/
    select?: PasswordResetTokenSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PasswordResetTokenInclude | null
    /**
     * Filter, which PasswordResetToken to fetch.
     * 
    **/
    where: PasswordResetTokenWhereUniqueInput
  }

  /**
   * PasswordResetToken: findUnique
   */
  export interface PasswordResetTokenFindUniqueArgs extends PasswordResetTokenFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * PasswordResetToken base type for findFirst actions
   */
  export type PasswordResetTokenFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the PasswordResetToken
     * 
    **/
    select?: PasswordResetTokenSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PasswordResetTokenInclude | null
    /**
     * Filter, which PasswordResetToken to fetch.
     * 
    **/
    where?: PasswordResetTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PasswordResetTokens to fetch.
     * 
    **/
    orderBy?: Enumerable<PasswordResetTokenOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PasswordResetTokens.
     * 
    **/
    cursor?: PasswordResetTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PasswordResetTokens from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PasswordResetTokens.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PasswordResetTokens.
     * 
    **/
    distinct?: Enumerable<PasswordResetTokenScalarFieldEnum>
  }

  /**
   * PasswordResetToken: findFirst
   */
  export interface PasswordResetTokenFindFirstArgs extends PasswordResetTokenFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * PasswordResetToken findMany
   */
  export type PasswordResetTokenFindManyArgs = {
    /**
     * Select specific fields to fetch from the PasswordResetToken
     * 
    **/
    select?: PasswordResetTokenSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PasswordResetTokenInclude | null
    /**
     * Filter, which PasswordResetTokens to fetch.
     * 
    **/
    where?: PasswordResetTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PasswordResetTokens to fetch.
     * 
    **/
    orderBy?: Enumerable<PasswordResetTokenOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PasswordResetTokens.
     * 
    **/
    cursor?: PasswordResetTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PasswordResetTokens from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PasswordResetTokens.
     * 
    **/
    skip?: number
    distinct?: Enumerable<PasswordResetTokenScalarFieldEnum>
  }


  /**
   * PasswordResetToken create
   */
  export type PasswordResetTokenCreateArgs = {
    /**
     * Select specific fields to fetch from the PasswordResetToken
     * 
    **/
    select?: PasswordResetTokenSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PasswordResetTokenInclude | null
    /**
     * The data needed to create a PasswordResetToken.
     * 
    **/
    data: XOR<PasswordResetTokenCreateInput, PasswordResetTokenUncheckedCreateInput>
  }


  /**
   * PasswordResetToken createMany
   */
  export type PasswordResetTokenCreateManyArgs = {
    /**
     * The data used to create many PasswordResetTokens.
     * 
    **/
    data: Enumerable<PasswordResetTokenCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * PasswordResetToken update
   */
  export type PasswordResetTokenUpdateArgs = {
    /**
     * Select specific fields to fetch from the PasswordResetToken
     * 
    **/
    select?: PasswordResetTokenSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PasswordResetTokenInclude | null
    /**
     * The data needed to update a PasswordResetToken.
     * 
    **/
    data: XOR<PasswordResetTokenUpdateInput, PasswordResetTokenUncheckedUpdateInput>
    /**
     * Choose, which PasswordResetToken to update.
     * 
    **/
    where: PasswordResetTokenWhereUniqueInput
  }


  /**
   * PasswordResetToken updateMany
   */
  export type PasswordResetTokenUpdateManyArgs = {
    /**
     * The data used to update PasswordResetTokens.
     * 
    **/
    data: XOR<PasswordResetTokenUpdateManyMutationInput, PasswordResetTokenUncheckedUpdateManyInput>
    /**
     * Filter which PasswordResetTokens to update
     * 
    **/
    where?: PasswordResetTokenWhereInput
  }


  /**
   * PasswordResetToken upsert
   */
  export type PasswordResetTokenUpsertArgs = {
    /**
     * Select specific fields to fetch from the PasswordResetToken
     * 
    **/
    select?: PasswordResetTokenSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PasswordResetTokenInclude | null
    /**
     * The filter to search for the PasswordResetToken to update in case it exists.
     * 
    **/
    where: PasswordResetTokenWhereUniqueInput
    /**
     * In case the PasswordResetToken found by the `where` argument doesn't exist, create a new PasswordResetToken with this data.
     * 
    **/
    create: XOR<PasswordResetTokenCreateInput, PasswordResetTokenUncheckedCreateInput>
    /**
     * In case the PasswordResetToken was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<PasswordResetTokenUpdateInput, PasswordResetTokenUncheckedUpdateInput>
  }


  /**
   * PasswordResetToken delete
   */
  export type PasswordResetTokenDeleteArgs = {
    /**
     * Select specific fields to fetch from the PasswordResetToken
     * 
    **/
    select?: PasswordResetTokenSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PasswordResetTokenInclude | null
    /**
     * Filter which PasswordResetToken to delete.
     * 
    **/
    where: PasswordResetTokenWhereUniqueInput
  }


  /**
   * PasswordResetToken deleteMany
   */
  export type PasswordResetTokenDeleteManyArgs = {
    /**
     * Filter which PasswordResetTokens to delete
     * 
    **/
    where?: PasswordResetTokenWhereInput
  }


  /**
   * PasswordResetToken: findUniqueOrThrow
   */
  export type PasswordResetTokenFindUniqueOrThrowArgs = PasswordResetTokenFindUniqueArgsBase
      

  /**
   * PasswordResetToken: findFirstOrThrow
   */
  export type PasswordResetTokenFindFirstOrThrowArgs = PasswordResetTokenFindFirstArgsBase
      

  /**
   * PasswordResetToken without action
   */
  export type PasswordResetTokenArgs = {
    /**
     * Select specific fields to fetch from the PasswordResetToken
     * 
    **/
    select?: PasswordResetTokenSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PasswordResetTokenInclude | null
  }



  /**
   * Model RequestEvent
   */


  export type AggregateRequestEvent = {
    _count: RequestEventCountAggregateOutputType | null
    _min: RequestEventMinAggregateOutputType | null
    _max: RequestEventMaxAggregateOutputType | null
  }

  export type RequestEventMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    title: string | null
    subtitle: string | null
    description: string | null
    startDate: Date | null
    endDate: Date | null
    locationName: string | null
    locationDetail: string | null
    address: string | null
    requestedById: string | null
    approvedById: string | null
    status: RequestEventStatus | null
  }

  export type RequestEventMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    title: string | null
    subtitle: string | null
    description: string | null
    startDate: Date | null
    endDate: Date | null
    locationName: string | null
    locationDetail: string | null
    address: string | null
    requestedById: string | null
    approvedById: string | null
    status: RequestEventStatus | null
  }

  export type RequestEventCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    title: number
    subtitle: number
    description: number
    startDate: number
    endDate: number
    locationName: number
    locationDetail: number
    address: number
    requestedById: number
    approvedById: number
    status: number
    _all: number
  }


  export type RequestEventMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    title?: true
    subtitle?: true
    description?: true
    startDate?: true
    endDate?: true
    locationName?: true
    locationDetail?: true
    address?: true
    requestedById?: true
    approvedById?: true
    status?: true
  }

  export type RequestEventMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    title?: true
    subtitle?: true
    description?: true
    startDate?: true
    endDate?: true
    locationName?: true
    locationDetail?: true
    address?: true
    requestedById?: true
    approvedById?: true
    status?: true
  }

  export type RequestEventCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    title?: true
    subtitle?: true
    description?: true
    startDate?: true
    endDate?: true
    locationName?: true
    locationDetail?: true
    address?: true
    requestedById?: true
    approvedById?: true
    status?: true
    _all?: true
  }

  export type RequestEventAggregateArgs = {
    /**
     * Filter which RequestEvent to aggregate.
     * 
    **/
    where?: RequestEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RequestEvents to fetch.
     * 
    **/
    orderBy?: Enumerable<RequestEventOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: RequestEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RequestEvents from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RequestEvents.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RequestEvents
    **/
    _count?: true | RequestEventCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RequestEventMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RequestEventMaxAggregateInputType
  }

  export type GetRequestEventAggregateType<T extends RequestEventAggregateArgs> = {
        [P in keyof T & keyof AggregateRequestEvent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRequestEvent[P]>
      : GetScalarType<T[P], AggregateRequestEvent[P]>
  }




  export type RequestEventGroupByArgs = {
    where?: RequestEventWhereInput
    orderBy?: Enumerable<RequestEventOrderByWithAggregationInput>
    by: Array<RequestEventScalarFieldEnum>
    having?: RequestEventScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RequestEventCountAggregateInputType | true
    _min?: RequestEventMinAggregateInputType
    _max?: RequestEventMaxAggregateInputType
  }


  export type RequestEventGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    title: string
    subtitle: string
    description: string
    startDate: Date
    endDate: Date | null
    locationName: string
    locationDetail: string | null
    address: string
    requestedById: string
    approvedById: string | null
    status: RequestEventStatus
    _count: RequestEventCountAggregateOutputType | null
    _min: RequestEventMinAggregateOutputType | null
    _max: RequestEventMaxAggregateOutputType | null
  }

  type GetRequestEventGroupByPayload<T extends RequestEventGroupByArgs> = PrismaPromise<
    Array<
      PickArray<RequestEventGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RequestEventGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RequestEventGroupByOutputType[P]>
            : GetScalarType<T[P], RequestEventGroupByOutputType[P]>
        }
      >
    >


  export type RequestEventSelect = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    title?: boolean
    subtitle?: boolean
    description?: boolean
    startDate?: boolean
    endDate?: boolean
    locationName?: boolean
    locationDetail?: boolean
    address?: boolean
    requestedById?: boolean
    requestedBy?: boolean | UserArgs
    approvedById?: boolean
    approvedBy?: boolean | UserArgs
    status?: boolean
    Event?: boolean | EventArgs
  }

  export type RequestEventInclude = {
    requestedBy?: boolean | UserArgs
    approvedBy?: boolean | UserArgs
    Event?: boolean | EventArgs
  }

  export type RequestEventGetPayload<
    S extends boolean | null | undefined | RequestEventArgs,
    U = keyof S
      > = S extends true
        ? RequestEvent
    : S extends undefined
    ? never
    : S extends RequestEventArgs | RequestEventFindManyArgs
    ?'include' extends U
    ? RequestEvent  & {
    [P in TrueKeys<S['include']>]:
        P extends 'requestedBy' ? UserGetPayload<S['include'][P]> :
        P extends 'approvedBy' ? UserGetPayload<S['include'][P]> | null :
        P extends 'Event' ? EventGetPayload<S['include'][P]> | null :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'requestedBy' ? UserGetPayload<S['select'][P]> :
        P extends 'approvedBy' ? UserGetPayload<S['select'][P]> | null :
        P extends 'Event' ? EventGetPayload<S['select'][P]> | null :  P extends keyof RequestEvent ? RequestEvent[P] : never
  } 
    : RequestEvent
  : RequestEvent


  type RequestEventCountArgs = Merge<
    Omit<RequestEventFindManyArgs, 'select' | 'include'> & {
      select?: RequestEventCountAggregateInputType | true
    }
  >

  export interface RequestEventDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one RequestEvent that matches the filter.
     * @param {RequestEventFindUniqueArgs} args - Arguments to find a RequestEvent
     * @example
     * // Get one RequestEvent
     * const requestEvent = await prisma.requestEvent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends RequestEventFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, RequestEventFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'RequestEvent'> extends True ? CheckSelect<T, Prisma__RequestEventClient<RequestEvent>, Prisma__RequestEventClient<RequestEventGetPayload<T>>> : CheckSelect<T, Prisma__RequestEventClient<RequestEvent | null >, Prisma__RequestEventClient<RequestEventGetPayload<T> | null >>

    /**
     * Find the first RequestEvent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequestEventFindFirstArgs} args - Arguments to find a RequestEvent
     * @example
     * // Get one RequestEvent
     * const requestEvent = await prisma.requestEvent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends RequestEventFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, RequestEventFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'RequestEvent'> extends True ? CheckSelect<T, Prisma__RequestEventClient<RequestEvent>, Prisma__RequestEventClient<RequestEventGetPayload<T>>> : CheckSelect<T, Prisma__RequestEventClient<RequestEvent | null >, Prisma__RequestEventClient<RequestEventGetPayload<T> | null >>

    /**
     * Find zero or more RequestEvents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequestEventFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RequestEvents
     * const requestEvents = await prisma.requestEvent.findMany()
     * 
     * // Get first 10 RequestEvents
     * const requestEvents = await prisma.requestEvent.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const requestEventWithIdOnly = await prisma.requestEvent.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends RequestEventFindManyArgs>(
      args?: SelectSubset<T, RequestEventFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<RequestEvent>>, PrismaPromise<Array<RequestEventGetPayload<T>>>>

    /**
     * Create a RequestEvent.
     * @param {RequestEventCreateArgs} args - Arguments to create a RequestEvent.
     * @example
     * // Create one RequestEvent
     * const RequestEvent = await prisma.requestEvent.create({
     *   data: {
     *     // ... data to create a RequestEvent
     *   }
     * })
     * 
    **/
    create<T extends RequestEventCreateArgs>(
      args: SelectSubset<T, RequestEventCreateArgs>
    ): CheckSelect<T, Prisma__RequestEventClient<RequestEvent>, Prisma__RequestEventClient<RequestEventGetPayload<T>>>

    /**
     * Create many RequestEvents.
     *     @param {RequestEventCreateManyArgs} args - Arguments to create many RequestEvents.
     *     @example
     *     // Create many RequestEvents
     *     const requestEvent = await prisma.requestEvent.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends RequestEventCreateManyArgs>(
      args?: SelectSubset<T, RequestEventCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a RequestEvent.
     * @param {RequestEventDeleteArgs} args - Arguments to delete one RequestEvent.
     * @example
     * // Delete one RequestEvent
     * const RequestEvent = await prisma.requestEvent.delete({
     *   where: {
     *     // ... filter to delete one RequestEvent
     *   }
     * })
     * 
    **/
    delete<T extends RequestEventDeleteArgs>(
      args: SelectSubset<T, RequestEventDeleteArgs>
    ): CheckSelect<T, Prisma__RequestEventClient<RequestEvent>, Prisma__RequestEventClient<RequestEventGetPayload<T>>>

    /**
     * Update one RequestEvent.
     * @param {RequestEventUpdateArgs} args - Arguments to update one RequestEvent.
     * @example
     * // Update one RequestEvent
     * const requestEvent = await prisma.requestEvent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends RequestEventUpdateArgs>(
      args: SelectSubset<T, RequestEventUpdateArgs>
    ): CheckSelect<T, Prisma__RequestEventClient<RequestEvent>, Prisma__RequestEventClient<RequestEventGetPayload<T>>>

    /**
     * Delete zero or more RequestEvents.
     * @param {RequestEventDeleteManyArgs} args - Arguments to filter RequestEvents to delete.
     * @example
     * // Delete a few RequestEvents
     * const { count } = await prisma.requestEvent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends RequestEventDeleteManyArgs>(
      args?: SelectSubset<T, RequestEventDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more RequestEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequestEventUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RequestEvents
     * const requestEvent = await prisma.requestEvent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends RequestEventUpdateManyArgs>(
      args: SelectSubset<T, RequestEventUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one RequestEvent.
     * @param {RequestEventUpsertArgs} args - Arguments to update or create a RequestEvent.
     * @example
     * // Update or create a RequestEvent
     * const requestEvent = await prisma.requestEvent.upsert({
     *   create: {
     *     // ... data to create a RequestEvent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RequestEvent we want to update
     *   }
     * })
    **/
    upsert<T extends RequestEventUpsertArgs>(
      args: SelectSubset<T, RequestEventUpsertArgs>
    ): CheckSelect<T, Prisma__RequestEventClient<RequestEvent>, Prisma__RequestEventClient<RequestEventGetPayload<T>>>

    /**
     * Find one RequestEvent that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {RequestEventFindUniqueOrThrowArgs} args - Arguments to find a RequestEvent
     * @example
     * // Get one RequestEvent
     * const requestEvent = await prisma.requestEvent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends RequestEventFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, RequestEventFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__RequestEventClient<RequestEvent>, Prisma__RequestEventClient<RequestEventGetPayload<T>>>

    /**
     * Find the first RequestEvent that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequestEventFindFirstOrThrowArgs} args - Arguments to find a RequestEvent
     * @example
     * // Get one RequestEvent
     * const requestEvent = await prisma.requestEvent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends RequestEventFindFirstOrThrowArgs>(
      args?: SelectSubset<T, RequestEventFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__RequestEventClient<RequestEvent>, Prisma__RequestEventClient<RequestEventGetPayload<T>>>

    /**
     * Count the number of RequestEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequestEventCountArgs} args - Arguments to filter RequestEvents to count.
     * @example
     * // Count the number of RequestEvents
     * const count = await prisma.requestEvent.count({
     *   where: {
     *     // ... the filter for the RequestEvents we want to count
     *   }
     * })
    **/
    count<T extends RequestEventCountArgs>(
      args?: Subset<T, RequestEventCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RequestEventCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RequestEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequestEventAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RequestEventAggregateArgs>(args: Subset<T, RequestEventAggregateArgs>): PrismaPromise<GetRequestEventAggregateType<T>>

    /**
     * Group by RequestEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequestEventGroupByArgs} args - Group by arguments.
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
      T extends RequestEventGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RequestEventGroupByArgs['orderBy'] }
        : { orderBy?: RequestEventGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, RequestEventGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRequestEventGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for RequestEvent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__RequestEventClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    requestedBy<T extends UserArgs = {}>(args?: Subset<T, UserArgs>): CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>;

    approvedBy<T extends UserArgs = {}>(args?: Subset<T, UserArgs>): CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>;

    Event<T extends EventArgs = {}>(args?: Subset<T, EventArgs>): CheckSelect<T, Prisma__EventClient<Event | null >, Prisma__EventClient<EventGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * RequestEvent base type for findUnique actions
   */
  export type RequestEventFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the RequestEvent
     * 
    **/
    select?: RequestEventSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RequestEventInclude | null
    /**
     * Filter, which RequestEvent to fetch.
     * 
    **/
    where: RequestEventWhereUniqueInput
  }

  /**
   * RequestEvent: findUnique
   */
  export interface RequestEventFindUniqueArgs extends RequestEventFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * RequestEvent base type for findFirst actions
   */
  export type RequestEventFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the RequestEvent
     * 
    **/
    select?: RequestEventSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RequestEventInclude | null
    /**
     * Filter, which RequestEvent to fetch.
     * 
    **/
    where?: RequestEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RequestEvents to fetch.
     * 
    **/
    orderBy?: Enumerable<RequestEventOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RequestEvents.
     * 
    **/
    cursor?: RequestEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RequestEvents from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RequestEvents.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RequestEvents.
     * 
    **/
    distinct?: Enumerable<RequestEventScalarFieldEnum>
  }

  /**
   * RequestEvent: findFirst
   */
  export interface RequestEventFindFirstArgs extends RequestEventFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * RequestEvent findMany
   */
  export type RequestEventFindManyArgs = {
    /**
     * Select specific fields to fetch from the RequestEvent
     * 
    **/
    select?: RequestEventSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RequestEventInclude | null
    /**
     * Filter, which RequestEvents to fetch.
     * 
    **/
    where?: RequestEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RequestEvents to fetch.
     * 
    **/
    orderBy?: Enumerable<RequestEventOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RequestEvents.
     * 
    **/
    cursor?: RequestEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RequestEvents from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RequestEvents.
     * 
    **/
    skip?: number
    distinct?: Enumerable<RequestEventScalarFieldEnum>
  }


  /**
   * RequestEvent create
   */
  export type RequestEventCreateArgs = {
    /**
     * Select specific fields to fetch from the RequestEvent
     * 
    **/
    select?: RequestEventSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RequestEventInclude | null
    /**
     * The data needed to create a RequestEvent.
     * 
    **/
    data: XOR<RequestEventCreateInput, RequestEventUncheckedCreateInput>
  }


  /**
   * RequestEvent createMany
   */
  export type RequestEventCreateManyArgs = {
    /**
     * The data used to create many RequestEvents.
     * 
    **/
    data: Enumerable<RequestEventCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * RequestEvent update
   */
  export type RequestEventUpdateArgs = {
    /**
     * Select specific fields to fetch from the RequestEvent
     * 
    **/
    select?: RequestEventSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RequestEventInclude | null
    /**
     * The data needed to update a RequestEvent.
     * 
    **/
    data: XOR<RequestEventUpdateInput, RequestEventUncheckedUpdateInput>
    /**
     * Choose, which RequestEvent to update.
     * 
    **/
    where: RequestEventWhereUniqueInput
  }


  /**
   * RequestEvent updateMany
   */
  export type RequestEventUpdateManyArgs = {
    /**
     * The data used to update RequestEvents.
     * 
    **/
    data: XOR<RequestEventUpdateManyMutationInput, RequestEventUncheckedUpdateManyInput>
    /**
     * Filter which RequestEvents to update
     * 
    **/
    where?: RequestEventWhereInput
  }


  /**
   * RequestEvent upsert
   */
  export type RequestEventUpsertArgs = {
    /**
     * Select specific fields to fetch from the RequestEvent
     * 
    **/
    select?: RequestEventSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RequestEventInclude | null
    /**
     * The filter to search for the RequestEvent to update in case it exists.
     * 
    **/
    where: RequestEventWhereUniqueInput
    /**
     * In case the RequestEvent found by the `where` argument doesn't exist, create a new RequestEvent with this data.
     * 
    **/
    create: XOR<RequestEventCreateInput, RequestEventUncheckedCreateInput>
    /**
     * In case the RequestEvent was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<RequestEventUpdateInput, RequestEventUncheckedUpdateInput>
  }


  /**
   * RequestEvent delete
   */
  export type RequestEventDeleteArgs = {
    /**
     * Select specific fields to fetch from the RequestEvent
     * 
    **/
    select?: RequestEventSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RequestEventInclude | null
    /**
     * Filter which RequestEvent to delete.
     * 
    **/
    where: RequestEventWhereUniqueInput
  }


  /**
   * RequestEvent deleteMany
   */
  export type RequestEventDeleteManyArgs = {
    /**
     * Filter which RequestEvents to delete
     * 
    **/
    where?: RequestEventWhereInput
  }


  /**
   * RequestEvent: findUniqueOrThrow
   */
  export type RequestEventFindUniqueOrThrowArgs = RequestEventFindUniqueArgsBase
      

  /**
   * RequestEvent: findFirstOrThrow
   */
  export type RequestEventFindFirstOrThrowArgs = RequestEventFindFirstArgsBase
      

  /**
   * RequestEvent without action
   */
  export type RequestEventArgs = {
    /**
     * Select specific fields to fetch from the RequestEvent
     * 
    **/
    select?: RequestEventSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RequestEventInclude | null
  }



  /**
   * Model Event
   */


  export type AggregateEvent = {
    _count: EventCountAggregateOutputType | null
    _avg: EventAvgAggregateOutputType | null
    _sum: EventSumAggregateOutputType | null
    _min: EventMinAggregateOutputType | null
    _max: EventMaxAggregateOutputType | null
  }

  export type EventAvgAggregateOutputType = {
    longitud: number | null
    latitud: number | null
  }

  export type EventSumAggregateOutputType = {
    longitud: number | null
    latitud: number | null
  }

  export type EventMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    title: string | null
    subtitle: string | null
    description: string | null
    principalImage: string | null
    startDate: Date | null
    endDate: Date | null
    locationName: string | null
    locationDetail: string | null
    address: string | null
    longitud: number | null
    latitud: number | null
    status: EventStatus | null
    publishedById: string | null
    requestEventId: string | null
  }

  export type EventMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    title: string | null
    subtitle: string | null
    description: string | null
    principalImage: string | null
    startDate: Date | null
    endDate: Date | null
    locationName: string | null
    locationDetail: string | null
    address: string | null
    longitud: number | null
    latitud: number | null
    status: EventStatus | null
    publishedById: string | null
    requestEventId: string | null
  }

  export type EventCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    title: number
    subtitle: number
    description: number
    principalImage: number
    images: number
    tags: number
    startDate: number
    endDate: number
    locationName: number
    locationDetail: number
    address: number
    longitud: number
    latitud: number
    status: number
    publishedById: number
    requestEventId: number
    _all: number
  }


  export type EventAvgAggregateInputType = {
    longitud?: true
    latitud?: true
  }

  export type EventSumAggregateInputType = {
    longitud?: true
    latitud?: true
  }

  export type EventMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    title?: true
    subtitle?: true
    description?: true
    principalImage?: true
    startDate?: true
    endDate?: true
    locationName?: true
    locationDetail?: true
    address?: true
    longitud?: true
    latitud?: true
    status?: true
    publishedById?: true
    requestEventId?: true
  }

  export type EventMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    title?: true
    subtitle?: true
    description?: true
    principalImage?: true
    startDate?: true
    endDate?: true
    locationName?: true
    locationDetail?: true
    address?: true
    longitud?: true
    latitud?: true
    status?: true
    publishedById?: true
    requestEventId?: true
  }

  export type EventCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    title?: true
    subtitle?: true
    description?: true
    principalImage?: true
    images?: true
    tags?: true
    startDate?: true
    endDate?: true
    locationName?: true
    locationDetail?: true
    address?: true
    longitud?: true
    latitud?: true
    status?: true
    publishedById?: true
    requestEventId?: true
    _all?: true
  }

  export type EventAggregateArgs = {
    /**
     * Filter which Event to aggregate.
     * 
    **/
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     * 
    **/
    orderBy?: Enumerable<EventOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Events
    **/
    _count?: true | EventCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EventAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EventSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EventMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EventMaxAggregateInputType
  }

  export type GetEventAggregateType<T extends EventAggregateArgs> = {
        [P in keyof T & keyof AggregateEvent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEvent[P]>
      : GetScalarType<T[P], AggregateEvent[P]>
  }




  export type EventGroupByArgs = {
    where?: EventWhereInput
    orderBy?: Enumerable<EventOrderByWithAggregationInput>
    by: Array<EventScalarFieldEnum>
    having?: EventScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EventCountAggregateInputType | true
    _avg?: EventAvgAggregateInputType
    _sum?: EventSumAggregateInputType
    _min?: EventMinAggregateInputType
    _max?: EventMaxAggregateInputType
  }


  export type EventGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    title: string
    subtitle: string
    description: string
    principalImage: string
    images: string[]
    tags: string[]
    startDate: Date
    endDate: Date | null
    locationName: string
    locationDetail: string | null
    address: string
    longitud: number | null
    latitud: number | null
    status: EventStatus
    publishedById: string | null
    requestEventId: string
    _count: EventCountAggregateOutputType | null
    _avg: EventAvgAggregateOutputType | null
    _sum: EventSumAggregateOutputType | null
    _min: EventMinAggregateOutputType | null
    _max: EventMaxAggregateOutputType | null
  }

  type GetEventGroupByPayload<T extends EventGroupByArgs> = PrismaPromise<
    Array<
      PickArray<EventGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EventGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EventGroupByOutputType[P]>
            : GetScalarType<T[P], EventGroupByOutputType[P]>
        }
      >
    >


  export type EventSelect = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    title?: boolean
    subtitle?: boolean
    description?: boolean
    principalImage?: boolean
    images?: boolean
    tags?: boolean
    startDate?: boolean
    endDate?: boolean
    locationName?: boolean
    locationDetail?: boolean
    address?: boolean
    longitud?: boolean
    latitud?: boolean
    status?: boolean
    publishedById?: boolean
    publishedBy?: boolean | UserArgs
    requestEventId?: boolean
    requestEvent?: boolean | RequestEventArgs
    likedBy?: boolean | UserFindManyArgs
    savedBy?: boolean | UserFindManyArgs
    _count?: boolean | EventCountOutputTypeArgs
  }

  export type EventInclude = {
    publishedBy?: boolean | UserArgs
    requestEvent?: boolean | RequestEventArgs
    likedBy?: boolean | UserFindManyArgs
    savedBy?: boolean | UserFindManyArgs
    _count?: boolean | EventCountOutputTypeArgs
  }

  export type EventGetPayload<
    S extends boolean | null | undefined | EventArgs,
    U = keyof S
      > = S extends true
        ? Event
    : S extends undefined
    ? never
    : S extends EventArgs | EventFindManyArgs
    ?'include' extends U
    ? Event  & {
    [P in TrueKeys<S['include']>]:
        P extends 'publishedBy' ? UserGetPayload<S['include'][P]> | null :
        P extends 'requestEvent' ? RequestEventGetPayload<S['include'][P]> | null :
        P extends 'likedBy' ? Array < UserGetPayload<S['include'][P]>>  :
        P extends 'savedBy' ? Array < UserGetPayload<S['include'][P]>>  :
        P extends '_count' ? EventCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'publishedBy' ? UserGetPayload<S['select'][P]> | null :
        P extends 'requestEvent' ? RequestEventGetPayload<S['select'][P]> | null :
        P extends 'likedBy' ? Array < UserGetPayload<S['select'][P]>>  :
        P extends 'savedBy' ? Array < UserGetPayload<S['select'][P]>>  :
        P extends '_count' ? EventCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Event ? Event[P] : never
  } 
    : Event
  : Event


  type EventCountArgs = Merge<
    Omit<EventFindManyArgs, 'select' | 'include'> & {
      select?: EventCountAggregateInputType | true
    }
  >

  export interface EventDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Event that matches the filter.
     * @param {EventFindUniqueArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends EventFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, EventFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Event'> extends True ? CheckSelect<T, Prisma__EventClient<Event>, Prisma__EventClient<EventGetPayload<T>>> : CheckSelect<T, Prisma__EventClient<Event | null >, Prisma__EventClient<EventGetPayload<T> | null >>

    /**
     * Find the first Event that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindFirstArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends EventFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, EventFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Event'> extends True ? CheckSelect<T, Prisma__EventClient<Event>, Prisma__EventClient<EventGetPayload<T>>> : CheckSelect<T, Prisma__EventClient<Event | null >, Prisma__EventClient<EventGetPayload<T> | null >>

    /**
     * Find zero or more Events that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Events
     * const events = await prisma.event.findMany()
     * 
     * // Get first 10 Events
     * const events = await prisma.event.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const eventWithIdOnly = await prisma.event.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends EventFindManyArgs>(
      args?: SelectSubset<T, EventFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Event>>, PrismaPromise<Array<EventGetPayload<T>>>>

    /**
     * Create a Event.
     * @param {EventCreateArgs} args - Arguments to create a Event.
     * @example
     * // Create one Event
     * const Event = await prisma.event.create({
     *   data: {
     *     // ... data to create a Event
     *   }
     * })
     * 
    **/
    create<T extends EventCreateArgs>(
      args: SelectSubset<T, EventCreateArgs>
    ): CheckSelect<T, Prisma__EventClient<Event>, Prisma__EventClient<EventGetPayload<T>>>

    /**
     * Create many Events.
     *     @param {EventCreateManyArgs} args - Arguments to create many Events.
     *     @example
     *     // Create many Events
     *     const event = await prisma.event.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends EventCreateManyArgs>(
      args?: SelectSubset<T, EventCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Event.
     * @param {EventDeleteArgs} args - Arguments to delete one Event.
     * @example
     * // Delete one Event
     * const Event = await prisma.event.delete({
     *   where: {
     *     // ... filter to delete one Event
     *   }
     * })
     * 
    **/
    delete<T extends EventDeleteArgs>(
      args: SelectSubset<T, EventDeleteArgs>
    ): CheckSelect<T, Prisma__EventClient<Event>, Prisma__EventClient<EventGetPayload<T>>>

    /**
     * Update one Event.
     * @param {EventUpdateArgs} args - Arguments to update one Event.
     * @example
     * // Update one Event
     * const event = await prisma.event.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends EventUpdateArgs>(
      args: SelectSubset<T, EventUpdateArgs>
    ): CheckSelect<T, Prisma__EventClient<Event>, Prisma__EventClient<EventGetPayload<T>>>

    /**
     * Delete zero or more Events.
     * @param {EventDeleteManyArgs} args - Arguments to filter Events to delete.
     * @example
     * // Delete a few Events
     * const { count } = await prisma.event.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends EventDeleteManyArgs>(
      args?: SelectSubset<T, EventDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Events
     * const event = await prisma.event.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends EventUpdateManyArgs>(
      args: SelectSubset<T, EventUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Event.
     * @param {EventUpsertArgs} args - Arguments to update or create a Event.
     * @example
     * // Update or create a Event
     * const event = await prisma.event.upsert({
     *   create: {
     *     // ... data to create a Event
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Event we want to update
     *   }
     * })
    **/
    upsert<T extends EventUpsertArgs>(
      args: SelectSubset<T, EventUpsertArgs>
    ): CheckSelect<T, Prisma__EventClient<Event>, Prisma__EventClient<EventGetPayload<T>>>

    /**
     * Find one Event that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {EventFindUniqueOrThrowArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends EventFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, EventFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__EventClient<Event>, Prisma__EventClient<EventGetPayload<T>>>

    /**
     * Find the first Event that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindFirstOrThrowArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends EventFindFirstOrThrowArgs>(
      args?: SelectSubset<T, EventFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__EventClient<Event>, Prisma__EventClient<EventGetPayload<T>>>

    /**
     * Count the number of Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventCountArgs} args - Arguments to filter Events to count.
     * @example
     * // Count the number of Events
     * const count = await prisma.event.count({
     *   where: {
     *     // ... the filter for the Events we want to count
     *   }
     * })
    **/
    count<T extends EventCountArgs>(
      args?: Subset<T, EventCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EventCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Event.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EventAggregateArgs>(args: Subset<T, EventAggregateArgs>): PrismaPromise<GetEventAggregateType<T>>

    /**
     * Group by Event.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventGroupByArgs} args - Group by arguments.
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
      T extends EventGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EventGroupByArgs['orderBy'] }
        : { orderBy?: EventGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, EventGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEventGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Event.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__EventClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    publishedBy<T extends UserArgs = {}>(args?: Subset<T, UserArgs>): CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>;

    requestEvent<T extends RequestEventArgs = {}>(args?: Subset<T, RequestEventArgs>): CheckSelect<T, Prisma__RequestEventClient<RequestEvent | null >, Prisma__RequestEventClient<RequestEventGetPayload<T> | null >>;

    likedBy<T extends UserFindManyArgs = {}>(args?: Subset<T, UserFindManyArgs>): CheckSelect<T, PrismaPromise<Array<User>>, PrismaPromise<Array<UserGetPayload<T>>>>;

    savedBy<T extends UserFindManyArgs = {}>(args?: Subset<T, UserFindManyArgs>): CheckSelect<T, PrismaPromise<Array<User>>, PrismaPromise<Array<UserGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Event base type for findUnique actions
   */
  export type EventFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Event
     * 
    **/
    select?: EventSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: EventInclude | null
    /**
     * Filter, which Event to fetch.
     * 
    **/
    where: EventWhereUniqueInput
  }

  /**
   * Event: findUnique
   */
  export interface EventFindUniqueArgs extends EventFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Event base type for findFirst actions
   */
  export type EventFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Event
     * 
    **/
    select?: EventSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: EventInclude | null
    /**
     * Filter, which Event to fetch.
     * 
    **/
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     * 
    **/
    orderBy?: Enumerable<EventOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Events.
     * 
    **/
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Events.
     * 
    **/
    distinct?: Enumerable<EventScalarFieldEnum>
  }

  /**
   * Event: findFirst
   */
  export interface EventFindFirstArgs extends EventFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Event findMany
   */
  export type EventFindManyArgs = {
    /**
     * Select specific fields to fetch from the Event
     * 
    **/
    select?: EventSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: EventInclude | null
    /**
     * Filter, which Events to fetch.
     * 
    **/
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     * 
    **/
    orderBy?: Enumerable<EventOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Events.
     * 
    **/
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     * 
    **/
    skip?: number
    distinct?: Enumerable<EventScalarFieldEnum>
  }


  /**
   * Event create
   */
  export type EventCreateArgs = {
    /**
     * Select specific fields to fetch from the Event
     * 
    **/
    select?: EventSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: EventInclude | null
    /**
     * The data needed to create a Event.
     * 
    **/
    data: XOR<EventCreateInput, EventUncheckedCreateInput>
  }


  /**
   * Event createMany
   */
  export type EventCreateManyArgs = {
    /**
     * The data used to create many Events.
     * 
    **/
    data: Enumerable<EventCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Event update
   */
  export type EventUpdateArgs = {
    /**
     * Select specific fields to fetch from the Event
     * 
    **/
    select?: EventSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: EventInclude | null
    /**
     * The data needed to update a Event.
     * 
    **/
    data: XOR<EventUpdateInput, EventUncheckedUpdateInput>
    /**
     * Choose, which Event to update.
     * 
    **/
    where: EventWhereUniqueInput
  }


  /**
   * Event updateMany
   */
  export type EventUpdateManyArgs = {
    /**
     * The data used to update Events.
     * 
    **/
    data: XOR<EventUpdateManyMutationInput, EventUncheckedUpdateManyInput>
    /**
     * Filter which Events to update
     * 
    **/
    where?: EventWhereInput
  }


  /**
   * Event upsert
   */
  export type EventUpsertArgs = {
    /**
     * Select specific fields to fetch from the Event
     * 
    **/
    select?: EventSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: EventInclude | null
    /**
     * The filter to search for the Event to update in case it exists.
     * 
    **/
    where: EventWhereUniqueInput
    /**
     * In case the Event found by the `where` argument doesn't exist, create a new Event with this data.
     * 
    **/
    create: XOR<EventCreateInput, EventUncheckedCreateInput>
    /**
     * In case the Event was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<EventUpdateInput, EventUncheckedUpdateInput>
  }


  /**
   * Event delete
   */
  export type EventDeleteArgs = {
    /**
     * Select specific fields to fetch from the Event
     * 
    **/
    select?: EventSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: EventInclude | null
    /**
     * Filter which Event to delete.
     * 
    **/
    where: EventWhereUniqueInput
  }


  /**
   * Event deleteMany
   */
  export type EventDeleteManyArgs = {
    /**
     * Filter which Events to delete
     * 
    **/
    where?: EventWhereInput
  }


  /**
   * Event: findUniqueOrThrow
   */
  export type EventFindUniqueOrThrowArgs = EventFindUniqueArgsBase
      

  /**
   * Event: findFirstOrThrow
   */
  export type EventFindFirstOrThrowArgs = EventFindFirstArgsBase
      

  /**
   * Event without action
   */
  export type EventArgs = {
    /**
     * Select specific fields to fetch from the Event
     * 
    **/
    select?: EventSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: EventInclude | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const SessionScalarFieldEnum: {
    id: 'id',
    sid: 'sid',
    data: 'data',
    expiresAt: 'expiresAt'
  };

  export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    name: 'name',
    last_name: 'last_name',
    phone_number: 'phone_number',
    user_name: 'user_name',
    email: 'email',
    password: 'password'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const NotificationPreferenceScalarFieldEnum: {
    id: 'id',
    email: 'email',
    whatsapp: 'whatsapp',
    userId: 'userId'
  };

  export type NotificationPreferenceScalarFieldEnum = (typeof NotificationPreferenceScalarFieldEnum)[keyof typeof NotificationPreferenceScalarFieldEnum]


  export const RoleScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description'
  };

  export type RoleScalarFieldEnum = (typeof RoleScalarFieldEnum)[keyof typeof RoleScalarFieldEnum]


  export const PasswordResetTokenScalarFieldEnum: {
    id: 'id',
    token: 'token',
    expiration_date: 'expiration_date',
    deactivated: 'deactivated',
    userId: 'userId'
  };

  export type PasswordResetTokenScalarFieldEnum = (typeof PasswordResetTokenScalarFieldEnum)[keyof typeof PasswordResetTokenScalarFieldEnum]


  export const RequestEventScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    title: 'title',
    subtitle: 'subtitle',
    description: 'description',
    startDate: 'startDate',
    endDate: 'endDate',
    locationName: 'locationName',
    locationDetail: 'locationDetail',
    address: 'address',
    requestedById: 'requestedById',
    approvedById: 'approvedById',
    status: 'status'
  };

  export type RequestEventScalarFieldEnum = (typeof RequestEventScalarFieldEnum)[keyof typeof RequestEventScalarFieldEnum]


  export const EventScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    title: 'title',
    subtitle: 'subtitle',
    description: 'description',
    principalImage: 'principalImage',
    images: 'images',
    tags: 'tags',
    startDate: 'startDate',
    endDate: 'endDate',
    locationName: 'locationName',
    locationDetail: 'locationDetail',
    address: 'address',
    longitud: 'longitud',
    latitud: 'latitud',
    status: 'status',
    publishedById: 'publishedById',
    requestEventId: 'requestEventId'
  };

  export type EventScalarFieldEnum = (typeof EventScalarFieldEnum)[keyof typeof EventScalarFieldEnum]


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


  /**
   * Deep Input Types
   */


  export type SessionWhereInput = {
    AND?: Enumerable<SessionWhereInput>
    OR?: Enumerable<SessionWhereInput>
    NOT?: Enumerable<SessionWhereInput>
    id?: StringFilter | string
    sid?: StringFilter | string
    data?: StringFilter | string
    expiresAt?: DateTimeFilter | Date | string
  }

  export type SessionOrderByWithRelationInput = {
    id?: SortOrder
    sid?: SortOrder
    data?: SortOrder
    expiresAt?: SortOrder
  }

  export type SessionWhereUniqueInput = {
    id?: string
    sid?: string
  }

  export type SessionOrderByWithAggregationInput = {
    id?: SortOrder
    sid?: SortOrder
    data?: SortOrder
    expiresAt?: SortOrder
    _count?: SessionCountOrderByAggregateInput
    _max?: SessionMaxOrderByAggregateInput
    _min?: SessionMinOrderByAggregateInput
  }

  export type SessionScalarWhereWithAggregatesInput = {
    AND?: Enumerable<SessionScalarWhereWithAggregatesInput>
    OR?: Enumerable<SessionScalarWhereWithAggregatesInput>
    NOT?: Enumerable<SessionScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    sid?: StringWithAggregatesFilter | string
    data?: StringWithAggregatesFilter | string
    expiresAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type UserWhereInput = {
    AND?: Enumerable<UserWhereInput>
    OR?: Enumerable<UserWhereInput>
    NOT?: Enumerable<UserWhereInput>
    id?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    name?: StringFilter | string
    last_name?: StringFilter | string
    phone_number?: StringNullableFilter | string | null
    user_name?: StringFilter | string
    email?: StringFilter | string
    password?: StringFilter | string
    roles?: RoleListRelationFilter
    notificationPreference?: XOR<NotificationPreferenceRelationFilter, NotificationPreferenceWhereInput> | null
    approvedRequested?: RequestEventListRelationFilter
    eventsRequested?: RequestEventListRelationFilter
    PasswordResetToken?: PasswordResetTokenListRelationFilter
    eventPublished?: EventListRelationFilter
    likedEvents?: EventListRelationFilter
    savedEvents?: EventListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    last_name?: SortOrder
    phone_number?: SortOrder
    user_name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    roles?: RoleOrderByRelationAggregateInput
    notificationPreference?: NotificationPreferenceOrderByWithRelationInput
    approvedRequested?: RequestEventOrderByRelationAggregateInput
    eventsRequested?: RequestEventOrderByRelationAggregateInput
    PasswordResetToken?: PasswordResetTokenOrderByRelationAggregateInput
    eventPublished?: EventOrderByRelationAggregateInput
    likedEvents?: EventOrderByRelationAggregateInput
    savedEvents?: EventOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = {
    id?: string
    user_name?: string
    email?: string
  }

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    last_name?: SortOrder
    phone_number?: SortOrder
    user_name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: Enumerable<UserScalarWhereWithAggregatesInput>
    OR?: Enumerable<UserScalarWhereWithAggregatesInput>
    NOT?: Enumerable<UserScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
    name?: StringWithAggregatesFilter | string
    last_name?: StringWithAggregatesFilter | string
    phone_number?: StringNullableWithAggregatesFilter | string | null
    user_name?: StringWithAggregatesFilter | string
    email?: StringWithAggregatesFilter | string
    password?: StringWithAggregatesFilter | string
  }

  export type NotificationPreferenceWhereInput = {
    AND?: Enumerable<NotificationPreferenceWhereInput>
    OR?: Enumerable<NotificationPreferenceWhereInput>
    NOT?: Enumerable<NotificationPreferenceWhereInput>
    id?: StringFilter | string
    email?: BoolNullableFilter | boolean | null
    whatsapp?: BoolNullableFilter | boolean | null
    userId?: StringFilter | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type NotificationPreferenceOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    whatsapp?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type NotificationPreferenceWhereUniqueInput = {
    id?: string
    userId?: string
  }

  export type NotificationPreferenceOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    whatsapp?: SortOrder
    userId?: SortOrder
    _count?: NotificationPreferenceCountOrderByAggregateInput
    _max?: NotificationPreferenceMaxOrderByAggregateInput
    _min?: NotificationPreferenceMinOrderByAggregateInput
  }

  export type NotificationPreferenceScalarWhereWithAggregatesInput = {
    AND?: Enumerable<NotificationPreferenceScalarWhereWithAggregatesInput>
    OR?: Enumerable<NotificationPreferenceScalarWhereWithAggregatesInput>
    NOT?: Enumerable<NotificationPreferenceScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    email?: BoolNullableWithAggregatesFilter | boolean | null
    whatsapp?: BoolNullableWithAggregatesFilter | boolean | null
    userId?: StringWithAggregatesFilter | string
  }

  export type RoleWhereInput = {
    AND?: Enumerable<RoleWhereInput>
    OR?: Enumerable<RoleWhereInput>
    NOT?: Enumerable<RoleWhereInput>
    id?: StringFilter | string
    name?: EnumRoleTypeFilter | RoleType
    description?: StringFilter | string
    users?: UserListRelationFilter
  }

  export type RoleOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    users?: UserOrderByRelationAggregateInput
  }

  export type RoleWhereUniqueInput = {
    id?: string
    name?: RoleType
  }

  export type RoleOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    _count?: RoleCountOrderByAggregateInput
    _max?: RoleMaxOrderByAggregateInput
    _min?: RoleMinOrderByAggregateInput
  }

  export type RoleScalarWhereWithAggregatesInput = {
    AND?: Enumerable<RoleScalarWhereWithAggregatesInput>
    OR?: Enumerable<RoleScalarWhereWithAggregatesInput>
    NOT?: Enumerable<RoleScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    name?: EnumRoleTypeWithAggregatesFilter | RoleType
    description?: StringWithAggregatesFilter | string
  }

  export type PasswordResetTokenWhereInput = {
    AND?: Enumerable<PasswordResetTokenWhereInput>
    OR?: Enumerable<PasswordResetTokenWhereInput>
    NOT?: Enumerable<PasswordResetTokenWhereInput>
    id?: IntFilter | number
    token?: StringFilter | string
    expiration_date?: DateTimeFilter | Date | string
    deactivated?: BoolFilter | boolean
    user?: XOR<UserRelationFilter, UserWhereInput>
    userId?: StringFilter | string
  }

  export type PasswordResetTokenOrderByWithRelationInput = {
    id?: SortOrder
    token?: SortOrder
    expiration_date?: SortOrder
    deactivated?: SortOrder
    user?: UserOrderByWithRelationInput
    userId?: SortOrder
  }

  export type PasswordResetTokenWhereUniqueInput = {
    id?: number
  }

  export type PasswordResetTokenOrderByWithAggregationInput = {
    id?: SortOrder
    token?: SortOrder
    expiration_date?: SortOrder
    deactivated?: SortOrder
    userId?: SortOrder
    _count?: PasswordResetTokenCountOrderByAggregateInput
    _avg?: PasswordResetTokenAvgOrderByAggregateInput
    _max?: PasswordResetTokenMaxOrderByAggregateInput
    _min?: PasswordResetTokenMinOrderByAggregateInput
    _sum?: PasswordResetTokenSumOrderByAggregateInput
  }

  export type PasswordResetTokenScalarWhereWithAggregatesInput = {
    AND?: Enumerable<PasswordResetTokenScalarWhereWithAggregatesInput>
    OR?: Enumerable<PasswordResetTokenScalarWhereWithAggregatesInput>
    NOT?: Enumerable<PasswordResetTokenScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    token?: StringWithAggregatesFilter | string
    expiration_date?: DateTimeWithAggregatesFilter | Date | string
    deactivated?: BoolWithAggregatesFilter | boolean
    userId?: StringWithAggregatesFilter | string
  }

  export type RequestEventWhereInput = {
    AND?: Enumerable<RequestEventWhereInput>
    OR?: Enumerable<RequestEventWhereInput>
    NOT?: Enumerable<RequestEventWhereInput>
    id?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    title?: StringFilter | string
    subtitle?: StringFilter | string
    description?: StringFilter | string
    startDate?: DateTimeFilter | Date | string
    endDate?: DateTimeNullableFilter | Date | string | null
    locationName?: StringFilter | string
    locationDetail?: StringNullableFilter | string | null
    address?: StringFilter | string
    requestedById?: StringFilter | string
    requestedBy?: XOR<UserRelationFilter, UserWhereInput>
    approvedById?: StringNullableFilter | string | null
    approvedBy?: XOR<UserRelationFilter, UserWhereInput> | null
    status?: EnumRequestEventStatusFilter | RequestEventStatus
    Event?: XOR<EventRelationFilter, EventWhereInput> | null
  }

  export type RequestEventOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    title?: SortOrder
    subtitle?: SortOrder
    description?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    locationName?: SortOrder
    locationDetail?: SortOrder
    address?: SortOrder
    requestedById?: SortOrder
    requestedBy?: UserOrderByWithRelationInput
    approvedById?: SortOrder
    approvedBy?: UserOrderByWithRelationInput
    status?: SortOrder
    Event?: EventOrderByWithRelationInput
  }

  export type RequestEventWhereUniqueInput = {
    id?: string
  }

  export type RequestEventOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    title?: SortOrder
    subtitle?: SortOrder
    description?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    locationName?: SortOrder
    locationDetail?: SortOrder
    address?: SortOrder
    requestedById?: SortOrder
    approvedById?: SortOrder
    status?: SortOrder
    _count?: RequestEventCountOrderByAggregateInput
    _max?: RequestEventMaxOrderByAggregateInput
    _min?: RequestEventMinOrderByAggregateInput
  }

  export type RequestEventScalarWhereWithAggregatesInput = {
    AND?: Enumerable<RequestEventScalarWhereWithAggregatesInput>
    OR?: Enumerable<RequestEventScalarWhereWithAggregatesInput>
    NOT?: Enumerable<RequestEventScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
    title?: StringWithAggregatesFilter | string
    subtitle?: StringWithAggregatesFilter | string
    description?: StringWithAggregatesFilter | string
    startDate?: DateTimeWithAggregatesFilter | Date | string
    endDate?: DateTimeNullableWithAggregatesFilter | Date | string | null
    locationName?: StringWithAggregatesFilter | string
    locationDetail?: StringNullableWithAggregatesFilter | string | null
    address?: StringWithAggregatesFilter | string
    requestedById?: StringWithAggregatesFilter | string
    approvedById?: StringNullableWithAggregatesFilter | string | null
    status?: EnumRequestEventStatusWithAggregatesFilter | RequestEventStatus
  }

  export type EventWhereInput = {
    AND?: Enumerable<EventWhereInput>
    OR?: Enumerable<EventWhereInput>
    NOT?: Enumerable<EventWhereInput>
    id?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    title?: StringFilter | string
    subtitle?: StringFilter | string
    description?: StringFilter | string
    principalImage?: StringFilter | string
    images?: StringNullableListFilter
    tags?: StringNullableListFilter
    startDate?: DateTimeFilter | Date | string
    endDate?: DateTimeNullableFilter | Date | string | null
    locationName?: StringFilter | string
    locationDetail?: StringNullableFilter | string | null
    address?: StringFilter | string
    longitud?: FloatNullableFilter | number | null
    latitud?: FloatNullableFilter | number | null
    status?: EnumEventStatusFilter | EventStatus
    publishedById?: StringNullableFilter | string | null
    publishedBy?: XOR<UserRelationFilter, UserWhereInput> | null
    requestEventId?: StringFilter | string
    requestEvent?: XOR<RequestEventRelationFilter, RequestEventWhereInput> | null
    likedBy?: UserListRelationFilter
    savedBy?: UserListRelationFilter
  }

  export type EventOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    title?: SortOrder
    subtitle?: SortOrder
    description?: SortOrder
    principalImage?: SortOrder
    images?: SortOrder
    tags?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    locationName?: SortOrder
    locationDetail?: SortOrder
    address?: SortOrder
    longitud?: SortOrder
    latitud?: SortOrder
    status?: SortOrder
    publishedById?: SortOrder
    publishedBy?: UserOrderByWithRelationInput
    requestEventId?: SortOrder
    requestEvent?: RequestEventOrderByWithRelationInput
    likedBy?: UserOrderByRelationAggregateInput
    savedBy?: UserOrderByRelationAggregateInput
  }

  export type EventWhereUniqueInput = {
    id?: string
    requestEventId?: string
  }

  export type EventOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    title?: SortOrder
    subtitle?: SortOrder
    description?: SortOrder
    principalImage?: SortOrder
    images?: SortOrder
    tags?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    locationName?: SortOrder
    locationDetail?: SortOrder
    address?: SortOrder
    longitud?: SortOrder
    latitud?: SortOrder
    status?: SortOrder
    publishedById?: SortOrder
    requestEventId?: SortOrder
    _count?: EventCountOrderByAggregateInput
    _avg?: EventAvgOrderByAggregateInput
    _max?: EventMaxOrderByAggregateInput
    _min?: EventMinOrderByAggregateInput
    _sum?: EventSumOrderByAggregateInput
  }

  export type EventScalarWhereWithAggregatesInput = {
    AND?: Enumerable<EventScalarWhereWithAggregatesInput>
    OR?: Enumerable<EventScalarWhereWithAggregatesInput>
    NOT?: Enumerable<EventScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
    title?: StringWithAggregatesFilter | string
    subtitle?: StringWithAggregatesFilter | string
    description?: StringWithAggregatesFilter | string
    principalImage?: StringWithAggregatesFilter | string
    images?: StringNullableListFilter
    tags?: StringNullableListFilter
    startDate?: DateTimeWithAggregatesFilter | Date | string
    endDate?: DateTimeNullableWithAggregatesFilter | Date | string | null
    locationName?: StringWithAggregatesFilter | string
    locationDetail?: StringNullableWithAggregatesFilter | string | null
    address?: StringWithAggregatesFilter | string
    longitud?: FloatNullableWithAggregatesFilter | number | null
    latitud?: FloatNullableWithAggregatesFilter | number | null
    status?: EnumEventStatusWithAggregatesFilter | EventStatus
    publishedById?: StringNullableWithAggregatesFilter | string | null
    requestEventId?: StringWithAggregatesFilter | string
  }

  export type SessionCreateInput = {
    id: string
    sid: string
    data: string
    expiresAt: Date | string
  }

  export type SessionUncheckedCreateInput = {
    id: string
    sid: string
    data: string
    expiresAt: Date | string
  }

  export type SessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sid?: StringFieldUpdateOperationsInput | string
    data?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sid?: StringFieldUpdateOperationsInput | string
    data?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateManyInput = {
    id: string
    sid: string
    data: string
    expiresAt: Date | string
  }

  export type SessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    sid?: StringFieldUpdateOperationsInput | string
    data?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    sid?: StringFieldUpdateOperationsInput | string
    data?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    last_name: string
    phone_number?: string | null
    user_name: string
    email: string
    password: string
    roles?: RoleCreateNestedManyWithoutUsersInput
    notificationPreference?: NotificationPreferenceCreateNestedOneWithoutUserInput
    approvedRequested?: RequestEventCreateNestedManyWithoutApprovedByInput
    eventsRequested?: RequestEventCreateNestedManyWithoutRequestedByInput
    PasswordResetToken?: PasswordResetTokenCreateNestedManyWithoutUserInput
    eventPublished?: EventCreateNestedManyWithoutPublishedByInput
    likedEvents?: EventCreateNestedManyWithoutLikedByInput
    savedEvents?: EventCreateNestedManyWithoutSavedByInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    last_name: string
    phone_number?: string | null
    user_name: string
    email: string
    password: string
    roles?: RoleUncheckedCreateNestedManyWithoutUsersInput
    notificationPreference?: NotificationPreferenceUncheckedCreateNestedOneWithoutUserInput
    approvedRequested?: RequestEventUncheckedCreateNestedManyWithoutApprovedByInput
    eventsRequested?: RequestEventUncheckedCreateNestedManyWithoutRequestedByInput
    PasswordResetToken?: PasswordResetTokenUncheckedCreateNestedManyWithoutUserInput
    eventPublished?: EventUncheckedCreateNestedManyWithoutPublishedByInput
    likedEvents?: EventUncheckedCreateNestedManyWithoutLikedByInput
    savedEvents?: EventUncheckedCreateNestedManyWithoutSavedByInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    user_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    roles?: RoleUpdateManyWithoutUsersNestedInput
    notificationPreference?: NotificationPreferenceUpdateOneWithoutUserNestedInput
    approvedRequested?: RequestEventUpdateManyWithoutApprovedByNestedInput
    eventsRequested?: RequestEventUpdateManyWithoutRequestedByNestedInput
    PasswordResetToken?: PasswordResetTokenUpdateManyWithoutUserNestedInput
    eventPublished?: EventUpdateManyWithoutPublishedByNestedInput
    likedEvents?: EventUpdateManyWithoutLikedByNestedInput
    savedEvents?: EventUpdateManyWithoutSavedByNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    user_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    roles?: RoleUncheckedUpdateManyWithoutUsersNestedInput
    notificationPreference?: NotificationPreferenceUncheckedUpdateOneWithoutUserNestedInput
    approvedRequested?: RequestEventUncheckedUpdateManyWithoutApprovedByNestedInput
    eventsRequested?: RequestEventUncheckedUpdateManyWithoutRequestedByNestedInput
    PasswordResetToken?: PasswordResetTokenUncheckedUpdateManyWithoutUserNestedInput
    eventPublished?: EventUncheckedUpdateManyWithoutPublishedByNestedInput
    likedEvents?: EventUncheckedUpdateManyWithoutLikedByNestedInput
    savedEvents?: EventUncheckedUpdateManyWithoutSavedByNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    last_name: string
    phone_number?: string | null
    user_name: string
    email: string
    password: string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    user_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    user_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type NotificationPreferenceCreateInput = {
    id?: string
    email?: boolean | null
    whatsapp?: boolean | null
    user: UserCreateNestedOneWithoutNotificationPreferenceInput
  }

  export type NotificationPreferenceUncheckedCreateInput = {
    id?: string
    email?: boolean | null
    whatsapp?: boolean | null
    userId: string
  }

  export type NotificationPreferenceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableBoolFieldUpdateOperationsInput | boolean | null
    whatsapp?: NullableBoolFieldUpdateOperationsInput | boolean | null
    user?: UserUpdateOneRequiredWithoutNotificationPreferenceNestedInput
  }

  export type NotificationPreferenceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableBoolFieldUpdateOperationsInput | boolean | null
    whatsapp?: NullableBoolFieldUpdateOperationsInput | boolean | null
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type NotificationPreferenceCreateManyInput = {
    id?: string
    email?: boolean | null
    whatsapp?: boolean | null
    userId: string
  }

  export type NotificationPreferenceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableBoolFieldUpdateOperationsInput | boolean | null
    whatsapp?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type NotificationPreferenceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableBoolFieldUpdateOperationsInput | boolean | null
    whatsapp?: NullableBoolFieldUpdateOperationsInput | boolean | null
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type RoleCreateInput = {
    id?: string
    name?: RoleType
    description: string
    users?: UserCreateNestedManyWithoutRolesInput
  }

  export type RoleUncheckedCreateInput = {
    id?: string
    name?: RoleType
    description: string
    users?: UserUncheckedCreateNestedManyWithoutRolesInput
  }

  export type RoleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: EnumRoleTypeFieldUpdateOperationsInput | RoleType
    description?: StringFieldUpdateOperationsInput | string
    users?: UserUpdateManyWithoutRolesNestedInput
  }

  export type RoleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: EnumRoleTypeFieldUpdateOperationsInput | RoleType
    description?: StringFieldUpdateOperationsInput | string
    users?: UserUncheckedUpdateManyWithoutRolesNestedInput
  }

  export type RoleCreateManyInput = {
    id?: string
    name?: RoleType
    description: string
  }

  export type RoleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: EnumRoleTypeFieldUpdateOperationsInput | RoleType
    description?: StringFieldUpdateOperationsInput | string
  }

  export type RoleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: EnumRoleTypeFieldUpdateOperationsInput | RoleType
    description?: StringFieldUpdateOperationsInput | string
  }

  export type PasswordResetTokenCreateInput = {
    token: string
    expiration_date: Date | string
    deactivated?: boolean
    user: UserCreateNestedOneWithoutPasswordResetTokenInput
  }

  export type PasswordResetTokenUncheckedCreateInput = {
    id?: number
    token: string
    expiration_date: Date | string
    deactivated?: boolean
    userId: string
  }

  export type PasswordResetTokenUpdateInput = {
    token?: StringFieldUpdateOperationsInput | string
    expiration_date?: DateTimeFieldUpdateOperationsInput | Date | string
    deactivated?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutPasswordResetTokenNestedInput
  }

  export type PasswordResetTokenUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    token?: StringFieldUpdateOperationsInput | string
    expiration_date?: DateTimeFieldUpdateOperationsInput | Date | string
    deactivated?: BoolFieldUpdateOperationsInput | boolean
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type PasswordResetTokenCreateManyInput = {
    id?: number
    token: string
    expiration_date: Date | string
    deactivated?: boolean
    userId: string
  }

  export type PasswordResetTokenUpdateManyMutationInput = {
    token?: StringFieldUpdateOperationsInput | string
    expiration_date?: DateTimeFieldUpdateOperationsInput | Date | string
    deactivated?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PasswordResetTokenUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    token?: StringFieldUpdateOperationsInput | string
    expiration_date?: DateTimeFieldUpdateOperationsInput | Date | string
    deactivated?: BoolFieldUpdateOperationsInput | boolean
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type RequestEventCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    title?: string
    subtitle: string
    description: string
    startDate: Date | string
    endDate?: Date | string | null
    locationName: string
    locationDetail?: string | null
    address: string
    requestedBy: UserCreateNestedOneWithoutEventsRequestedInput
    approvedBy?: UserCreateNestedOneWithoutApprovedRequestedInput
    status?: RequestEventStatus
    Event?: EventCreateNestedOneWithoutRequestEventInput
  }

  export type RequestEventUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    title?: string
    subtitle: string
    description: string
    startDate: Date | string
    endDate?: Date | string | null
    locationName: string
    locationDetail?: string | null
    address: string
    requestedById: string
    approvedById?: string | null
    status?: RequestEventStatus
    Event?: EventUncheckedCreateNestedOneWithoutRequestEventInput
  }

  export type RequestEventUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    subtitle?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    locationName?: StringFieldUpdateOperationsInput | string
    locationDetail?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    requestedBy?: UserUpdateOneRequiredWithoutEventsRequestedNestedInput
    approvedBy?: UserUpdateOneWithoutApprovedRequestedNestedInput
    status?: EnumRequestEventStatusFieldUpdateOperationsInput | RequestEventStatus
    Event?: EventUpdateOneWithoutRequestEventNestedInput
  }

  export type RequestEventUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    subtitle?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    locationName?: StringFieldUpdateOperationsInput | string
    locationDetail?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    requestedById?: StringFieldUpdateOperationsInput | string
    approvedById?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumRequestEventStatusFieldUpdateOperationsInput | RequestEventStatus
    Event?: EventUncheckedUpdateOneWithoutRequestEventNestedInput
  }

  export type RequestEventCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    title?: string
    subtitle: string
    description: string
    startDate: Date | string
    endDate?: Date | string | null
    locationName: string
    locationDetail?: string | null
    address: string
    requestedById: string
    approvedById?: string | null
    status?: RequestEventStatus
  }

  export type RequestEventUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    subtitle?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    locationName?: StringFieldUpdateOperationsInput | string
    locationDetail?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    status?: EnumRequestEventStatusFieldUpdateOperationsInput | RequestEventStatus
  }

  export type RequestEventUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    subtitle?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    locationName?: StringFieldUpdateOperationsInput | string
    locationDetail?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    requestedById?: StringFieldUpdateOperationsInput | string
    approvedById?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumRequestEventStatusFieldUpdateOperationsInput | RequestEventStatus
  }

  export type EventCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    title: string
    subtitle: string
    description: string
    principalImage: string
    images?: EventCreateimagesInput | Enumerable<string>
    tags?: EventCreatetagsInput | Enumerable<string>
    startDate: Date | string
    endDate?: Date | string | null
    locationName: string
    locationDetail?: string | null
    address: string
    longitud?: number | null
    latitud?: number | null
    status?: EventStatus
    publishedBy?: UserCreateNestedOneWithoutEventPublishedInput
    requestEvent?: RequestEventCreateNestedOneWithoutEventInput
    likedBy?: UserCreateNestedManyWithoutLikedEventsInput
    savedBy?: UserCreateNestedManyWithoutSavedEventsInput
  }

  export type EventUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    title: string
    subtitle: string
    description: string
    principalImage: string
    images?: EventCreateimagesInput | Enumerable<string>
    tags?: EventCreatetagsInput | Enumerable<string>
    startDate: Date | string
    endDate?: Date | string | null
    locationName: string
    locationDetail?: string | null
    address: string
    longitud?: number | null
    latitud?: number | null
    status?: EventStatus
    publishedById?: string | null
    requestEventId: string
    likedBy?: UserUncheckedCreateNestedManyWithoutLikedEventsInput
    savedBy?: UserUncheckedCreateNestedManyWithoutSavedEventsInput
  }

  export type EventUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    subtitle?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    principalImage?: StringFieldUpdateOperationsInput | string
    images?: EventUpdateimagesInput | Enumerable<string>
    tags?: EventUpdatetagsInput | Enumerable<string>
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    locationName?: StringFieldUpdateOperationsInput | string
    locationDetail?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    longitud?: NullableFloatFieldUpdateOperationsInput | number | null
    latitud?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: EnumEventStatusFieldUpdateOperationsInput | EventStatus
    publishedBy?: UserUpdateOneWithoutEventPublishedNestedInput
    requestEvent?: RequestEventUpdateOneWithoutEventNestedInput
    likedBy?: UserUpdateManyWithoutLikedEventsNestedInput
    savedBy?: UserUpdateManyWithoutSavedEventsNestedInput
  }

  export type EventUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    subtitle?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    principalImage?: StringFieldUpdateOperationsInput | string
    images?: EventUpdateimagesInput | Enumerable<string>
    tags?: EventUpdatetagsInput | Enumerable<string>
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    locationName?: StringFieldUpdateOperationsInput | string
    locationDetail?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    longitud?: NullableFloatFieldUpdateOperationsInput | number | null
    latitud?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: EnumEventStatusFieldUpdateOperationsInput | EventStatus
    publishedById?: NullableStringFieldUpdateOperationsInput | string | null
    requestEventId?: StringFieldUpdateOperationsInput | string
    likedBy?: UserUncheckedUpdateManyWithoutLikedEventsNestedInput
    savedBy?: UserUncheckedUpdateManyWithoutSavedEventsNestedInput
  }

  export type EventCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    title: string
    subtitle: string
    description: string
    principalImage: string
    images?: EventCreateimagesInput | Enumerable<string>
    tags?: EventCreatetagsInput | Enumerable<string>
    startDate: Date | string
    endDate?: Date | string | null
    locationName: string
    locationDetail?: string | null
    address: string
    longitud?: number | null
    latitud?: number | null
    status?: EventStatus
    publishedById?: string | null
    requestEventId: string
  }

  export type EventUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    subtitle?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    principalImage?: StringFieldUpdateOperationsInput | string
    images?: EventUpdateimagesInput | Enumerable<string>
    tags?: EventUpdatetagsInput | Enumerable<string>
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    locationName?: StringFieldUpdateOperationsInput | string
    locationDetail?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    longitud?: NullableFloatFieldUpdateOperationsInput | number | null
    latitud?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: EnumEventStatusFieldUpdateOperationsInput | EventStatus
  }

  export type EventUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    subtitle?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    principalImage?: StringFieldUpdateOperationsInput | string
    images?: EventUpdateimagesInput | Enumerable<string>
    tags?: EventUpdatetagsInput | Enumerable<string>
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    locationName?: StringFieldUpdateOperationsInput | string
    locationDetail?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    longitud?: NullableFloatFieldUpdateOperationsInput | number | null
    latitud?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: EnumEventStatusFieldUpdateOperationsInput | EventStatus
    publishedById?: NullableStringFieldUpdateOperationsInput | string | null
    requestEventId?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringFilter | string
  }

  export type DateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type SessionCountOrderByAggregateInput = {
    id?: SortOrder
    sid?: SortOrder
    data?: SortOrder
    expiresAt?: SortOrder
  }

  export type SessionMaxOrderByAggregateInput = {
    id?: SortOrder
    sid?: SortOrder
    data?: SortOrder
    expiresAt?: SortOrder
  }

  export type SessionMinOrderByAggregateInput = {
    id?: SortOrder
    sid?: SortOrder
    data?: SortOrder
    expiresAt?: SortOrder
  }

  export type StringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type DateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type StringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringNullableFilter | string | null
  }

  export type RoleListRelationFilter = {
    every?: RoleWhereInput
    some?: RoleWhereInput
    none?: RoleWhereInput
  }

  export type NotificationPreferenceRelationFilter = {
    is?: NotificationPreferenceWhereInput | null
    isNot?: NotificationPreferenceWhereInput | null
  }

  export type RequestEventListRelationFilter = {
    every?: RequestEventWhereInput
    some?: RequestEventWhereInput
    none?: RequestEventWhereInput
  }

  export type PasswordResetTokenListRelationFilter = {
    every?: PasswordResetTokenWhereInput
    some?: PasswordResetTokenWhereInput
    none?: PasswordResetTokenWhereInput
  }

  export type EventListRelationFilter = {
    every?: EventWhereInput
    some?: EventWhereInput
    none?: EventWhereInput
  }

  export type RoleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RequestEventOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PasswordResetTokenOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EventOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    last_name?: SortOrder
    phone_number?: SortOrder
    user_name?: SortOrder
    email?: SortOrder
    password?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    last_name?: SortOrder
    phone_number?: SortOrder
    user_name?: SortOrder
    email?: SortOrder
    password?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    last_name?: SortOrder
    phone_number?: SortOrder
    user_name?: SortOrder
    email?: SortOrder
    password?: SortOrder
  }

  export type StringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type BoolNullableFilter = {
    equals?: boolean | null
    not?: NestedBoolNullableFilter | boolean | null
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type NotificationPreferenceCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    whatsapp?: SortOrder
    userId?: SortOrder
  }

  export type NotificationPreferenceMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    whatsapp?: SortOrder
    userId?: SortOrder
  }

  export type NotificationPreferenceMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    whatsapp?: SortOrder
    userId?: SortOrder
  }

  export type BoolNullableWithAggregatesFilter = {
    equals?: boolean | null
    not?: NestedBoolNullableWithAggregatesFilter | boolean | null
    _count?: NestedIntNullableFilter
    _min?: NestedBoolNullableFilter
    _max?: NestedBoolNullableFilter
  }

  export type EnumRoleTypeFilter = {
    equals?: RoleType
    in?: Enumerable<RoleType>
    notIn?: Enumerable<RoleType>
    not?: NestedEnumRoleTypeFilter | RoleType
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RoleCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
  }

  export type RoleMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
  }

  export type RoleMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
  }

  export type EnumRoleTypeWithAggregatesFilter = {
    equals?: RoleType
    in?: Enumerable<RoleType>
    notIn?: Enumerable<RoleType>
    not?: NestedEnumRoleTypeWithAggregatesFilter | RoleType
    _count?: NestedIntFilter
    _min?: NestedEnumRoleTypeFilter
    _max?: NestedEnumRoleTypeFilter
  }

  export type IntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type BoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
  }

  export type PasswordResetTokenCountOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    expiration_date?: SortOrder
    deactivated?: SortOrder
    userId?: SortOrder
  }

  export type PasswordResetTokenAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type PasswordResetTokenMaxOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    expiration_date?: SortOrder
    deactivated?: SortOrder
    userId?: SortOrder
  }

  export type PasswordResetTokenMinOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    expiration_date?: SortOrder
    deactivated?: SortOrder
    userId?: SortOrder
  }

  export type PasswordResetTokenSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type BoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    _min?: NestedBoolFilter
    _max?: NestedBoolFilter
  }

  export type DateTimeNullableFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableFilter | Date | string | null
  }

  export type EnumRequestEventStatusFilter = {
    equals?: RequestEventStatus
    in?: Enumerable<RequestEventStatus>
    notIn?: Enumerable<RequestEventStatus>
    not?: NestedEnumRequestEventStatusFilter | RequestEventStatus
  }

  export type EventRelationFilter = {
    is?: EventWhereInput | null
    isNot?: EventWhereInput | null
  }

  export type RequestEventCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    title?: SortOrder
    subtitle?: SortOrder
    description?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    locationName?: SortOrder
    locationDetail?: SortOrder
    address?: SortOrder
    requestedById?: SortOrder
    approvedById?: SortOrder
    status?: SortOrder
  }

  export type RequestEventMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    title?: SortOrder
    subtitle?: SortOrder
    description?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    locationName?: SortOrder
    locationDetail?: SortOrder
    address?: SortOrder
    requestedById?: SortOrder
    approvedById?: SortOrder
    status?: SortOrder
  }

  export type RequestEventMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    title?: SortOrder
    subtitle?: SortOrder
    description?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    locationName?: SortOrder
    locationDetail?: SortOrder
    address?: SortOrder
    requestedById?: SortOrder
    approvedById?: SortOrder
    status?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableWithAggregatesFilter | Date | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedDateTimeNullableFilter
    _max?: NestedDateTimeNullableFilter
  }

  export type EnumRequestEventStatusWithAggregatesFilter = {
    equals?: RequestEventStatus
    in?: Enumerable<RequestEventStatus>
    notIn?: Enumerable<RequestEventStatus>
    not?: NestedEnumRequestEventStatusWithAggregatesFilter | RequestEventStatus
    _count?: NestedIntFilter
    _min?: NestedEnumRequestEventStatusFilter
    _max?: NestedEnumRequestEventStatusFilter
  }

  export type StringNullableListFilter = {
    equals?: Enumerable<string> | null
    has?: string | null
    hasEvery?: Enumerable<string>
    hasSome?: Enumerable<string>
    isEmpty?: boolean
  }

  export type FloatNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatNullableFilter | number | null
  }

  export type EnumEventStatusFilter = {
    equals?: EventStatus
    in?: Enumerable<EventStatus>
    notIn?: Enumerable<EventStatus>
    not?: NestedEnumEventStatusFilter | EventStatus
  }

  export type RequestEventRelationFilter = {
    is?: RequestEventWhereInput | null
    isNot?: RequestEventWhereInput | null
  }

  export type EventCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    title?: SortOrder
    subtitle?: SortOrder
    description?: SortOrder
    principalImage?: SortOrder
    images?: SortOrder
    tags?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    locationName?: SortOrder
    locationDetail?: SortOrder
    address?: SortOrder
    longitud?: SortOrder
    latitud?: SortOrder
    status?: SortOrder
    publishedById?: SortOrder
    requestEventId?: SortOrder
  }

  export type EventAvgOrderByAggregateInput = {
    longitud?: SortOrder
    latitud?: SortOrder
  }

  export type EventMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    title?: SortOrder
    subtitle?: SortOrder
    description?: SortOrder
    principalImage?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    locationName?: SortOrder
    locationDetail?: SortOrder
    address?: SortOrder
    longitud?: SortOrder
    latitud?: SortOrder
    status?: SortOrder
    publishedById?: SortOrder
    requestEventId?: SortOrder
  }

  export type EventMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    title?: SortOrder
    subtitle?: SortOrder
    description?: SortOrder
    principalImage?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    locationName?: SortOrder
    locationDetail?: SortOrder
    address?: SortOrder
    longitud?: SortOrder
    latitud?: SortOrder
    status?: SortOrder
    publishedById?: SortOrder
    requestEventId?: SortOrder
  }

  export type EventSumOrderByAggregateInput = {
    longitud?: SortOrder
    latitud?: SortOrder
  }

  export type FloatNullableWithAggregatesFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatNullableWithAggregatesFilter | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedFloatNullableFilter
    _min?: NestedFloatNullableFilter
    _max?: NestedFloatNullableFilter
  }

  export type EnumEventStatusWithAggregatesFilter = {
    equals?: EventStatus
    in?: Enumerable<EventStatus>
    notIn?: Enumerable<EventStatus>
    not?: NestedEnumEventStatusWithAggregatesFilter | EventStatus
    _count?: NestedIntFilter
    _min?: NestedEnumEventStatusFilter
    _max?: NestedEnumEventStatusFilter
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type RoleCreateNestedManyWithoutUsersInput = {
    create?: XOR<Enumerable<RoleCreateWithoutUsersInput>, Enumerable<RoleUncheckedCreateWithoutUsersInput>>
    connectOrCreate?: Enumerable<RoleCreateOrConnectWithoutUsersInput>
    connect?: Enumerable<RoleWhereUniqueInput>
  }

  export type NotificationPreferenceCreateNestedOneWithoutUserInput = {
    create?: XOR<NotificationPreferenceCreateWithoutUserInput, NotificationPreferenceUncheckedCreateWithoutUserInput>
    connectOrCreate?: NotificationPreferenceCreateOrConnectWithoutUserInput
    connect?: NotificationPreferenceWhereUniqueInput
  }

  export type RequestEventCreateNestedManyWithoutApprovedByInput = {
    create?: XOR<Enumerable<RequestEventCreateWithoutApprovedByInput>, Enumerable<RequestEventUncheckedCreateWithoutApprovedByInput>>
    connectOrCreate?: Enumerable<RequestEventCreateOrConnectWithoutApprovedByInput>
    createMany?: RequestEventCreateManyApprovedByInputEnvelope
    connect?: Enumerable<RequestEventWhereUniqueInput>
  }

  export type RequestEventCreateNestedManyWithoutRequestedByInput = {
    create?: XOR<Enumerable<RequestEventCreateWithoutRequestedByInput>, Enumerable<RequestEventUncheckedCreateWithoutRequestedByInput>>
    connectOrCreate?: Enumerable<RequestEventCreateOrConnectWithoutRequestedByInput>
    createMany?: RequestEventCreateManyRequestedByInputEnvelope
    connect?: Enumerable<RequestEventWhereUniqueInput>
  }

  export type PasswordResetTokenCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<PasswordResetTokenCreateWithoutUserInput>, Enumerable<PasswordResetTokenUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<PasswordResetTokenCreateOrConnectWithoutUserInput>
    createMany?: PasswordResetTokenCreateManyUserInputEnvelope
    connect?: Enumerable<PasswordResetTokenWhereUniqueInput>
  }

  export type EventCreateNestedManyWithoutPublishedByInput = {
    create?: XOR<Enumerable<EventCreateWithoutPublishedByInput>, Enumerable<EventUncheckedCreateWithoutPublishedByInput>>
    connectOrCreate?: Enumerable<EventCreateOrConnectWithoutPublishedByInput>
    createMany?: EventCreateManyPublishedByInputEnvelope
    connect?: Enumerable<EventWhereUniqueInput>
  }

  export type EventCreateNestedManyWithoutLikedByInput = {
    create?: XOR<Enumerable<EventCreateWithoutLikedByInput>, Enumerable<EventUncheckedCreateWithoutLikedByInput>>
    connectOrCreate?: Enumerable<EventCreateOrConnectWithoutLikedByInput>
    connect?: Enumerable<EventWhereUniqueInput>
  }

  export type EventCreateNestedManyWithoutSavedByInput = {
    create?: XOR<Enumerable<EventCreateWithoutSavedByInput>, Enumerable<EventUncheckedCreateWithoutSavedByInput>>
    connectOrCreate?: Enumerable<EventCreateOrConnectWithoutSavedByInput>
    connect?: Enumerable<EventWhereUniqueInput>
  }

  export type RoleUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<Enumerable<RoleCreateWithoutUsersInput>, Enumerable<RoleUncheckedCreateWithoutUsersInput>>
    connectOrCreate?: Enumerable<RoleCreateOrConnectWithoutUsersInput>
    connect?: Enumerable<RoleWhereUniqueInput>
  }

  export type NotificationPreferenceUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<NotificationPreferenceCreateWithoutUserInput, NotificationPreferenceUncheckedCreateWithoutUserInput>
    connectOrCreate?: NotificationPreferenceCreateOrConnectWithoutUserInput
    connect?: NotificationPreferenceWhereUniqueInput
  }

  export type RequestEventUncheckedCreateNestedManyWithoutApprovedByInput = {
    create?: XOR<Enumerable<RequestEventCreateWithoutApprovedByInput>, Enumerable<RequestEventUncheckedCreateWithoutApprovedByInput>>
    connectOrCreate?: Enumerable<RequestEventCreateOrConnectWithoutApprovedByInput>
    createMany?: RequestEventCreateManyApprovedByInputEnvelope
    connect?: Enumerable<RequestEventWhereUniqueInput>
  }

  export type RequestEventUncheckedCreateNestedManyWithoutRequestedByInput = {
    create?: XOR<Enumerable<RequestEventCreateWithoutRequestedByInput>, Enumerable<RequestEventUncheckedCreateWithoutRequestedByInput>>
    connectOrCreate?: Enumerable<RequestEventCreateOrConnectWithoutRequestedByInput>
    createMany?: RequestEventCreateManyRequestedByInputEnvelope
    connect?: Enumerable<RequestEventWhereUniqueInput>
  }

  export type PasswordResetTokenUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<PasswordResetTokenCreateWithoutUserInput>, Enumerable<PasswordResetTokenUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<PasswordResetTokenCreateOrConnectWithoutUserInput>
    createMany?: PasswordResetTokenCreateManyUserInputEnvelope
    connect?: Enumerable<PasswordResetTokenWhereUniqueInput>
  }

  export type EventUncheckedCreateNestedManyWithoutPublishedByInput = {
    create?: XOR<Enumerable<EventCreateWithoutPublishedByInput>, Enumerable<EventUncheckedCreateWithoutPublishedByInput>>
    connectOrCreate?: Enumerable<EventCreateOrConnectWithoutPublishedByInput>
    createMany?: EventCreateManyPublishedByInputEnvelope
    connect?: Enumerable<EventWhereUniqueInput>
  }

  export type EventUncheckedCreateNestedManyWithoutLikedByInput = {
    create?: XOR<Enumerable<EventCreateWithoutLikedByInput>, Enumerable<EventUncheckedCreateWithoutLikedByInput>>
    connectOrCreate?: Enumerable<EventCreateOrConnectWithoutLikedByInput>
    connect?: Enumerable<EventWhereUniqueInput>
  }

  export type EventUncheckedCreateNestedManyWithoutSavedByInput = {
    create?: XOR<Enumerable<EventCreateWithoutSavedByInput>, Enumerable<EventUncheckedCreateWithoutSavedByInput>>
    connectOrCreate?: Enumerable<EventCreateOrConnectWithoutSavedByInput>
    connect?: Enumerable<EventWhereUniqueInput>
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type RoleUpdateManyWithoutUsersNestedInput = {
    create?: XOR<Enumerable<RoleCreateWithoutUsersInput>, Enumerable<RoleUncheckedCreateWithoutUsersInput>>
    connectOrCreate?: Enumerable<RoleCreateOrConnectWithoutUsersInput>
    upsert?: Enumerable<RoleUpsertWithWhereUniqueWithoutUsersInput>
    set?: Enumerable<RoleWhereUniqueInput>
    disconnect?: Enumerable<RoleWhereUniqueInput>
    delete?: Enumerable<RoleWhereUniqueInput>
    connect?: Enumerable<RoleWhereUniqueInput>
    update?: Enumerable<RoleUpdateWithWhereUniqueWithoutUsersInput>
    updateMany?: Enumerable<RoleUpdateManyWithWhereWithoutUsersInput>
    deleteMany?: Enumerable<RoleScalarWhereInput>
  }

  export type NotificationPreferenceUpdateOneWithoutUserNestedInput = {
    create?: XOR<NotificationPreferenceCreateWithoutUserInput, NotificationPreferenceUncheckedCreateWithoutUserInput>
    connectOrCreate?: NotificationPreferenceCreateOrConnectWithoutUserInput
    upsert?: NotificationPreferenceUpsertWithoutUserInput
    disconnect?: boolean
    delete?: boolean
    connect?: NotificationPreferenceWhereUniqueInput
    update?: XOR<NotificationPreferenceUpdateWithoutUserInput, NotificationPreferenceUncheckedUpdateWithoutUserInput>
  }

  export type RequestEventUpdateManyWithoutApprovedByNestedInput = {
    create?: XOR<Enumerable<RequestEventCreateWithoutApprovedByInput>, Enumerable<RequestEventUncheckedCreateWithoutApprovedByInput>>
    connectOrCreate?: Enumerable<RequestEventCreateOrConnectWithoutApprovedByInput>
    upsert?: Enumerable<RequestEventUpsertWithWhereUniqueWithoutApprovedByInput>
    createMany?: RequestEventCreateManyApprovedByInputEnvelope
    set?: Enumerable<RequestEventWhereUniqueInput>
    disconnect?: Enumerable<RequestEventWhereUniqueInput>
    delete?: Enumerable<RequestEventWhereUniqueInput>
    connect?: Enumerable<RequestEventWhereUniqueInput>
    update?: Enumerable<RequestEventUpdateWithWhereUniqueWithoutApprovedByInput>
    updateMany?: Enumerable<RequestEventUpdateManyWithWhereWithoutApprovedByInput>
    deleteMany?: Enumerable<RequestEventScalarWhereInput>
  }

  export type RequestEventUpdateManyWithoutRequestedByNestedInput = {
    create?: XOR<Enumerable<RequestEventCreateWithoutRequestedByInput>, Enumerable<RequestEventUncheckedCreateWithoutRequestedByInput>>
    connectOrCreate?: Enumerable<RequestEventCreateOrConnectWithoutRequestedByInput>
    upsert?: Enumerable<RequestEventUpsertWithWhereUniqueWithoutRequestedByInput>
    createMany?: RequestEventCreateManyRequestedByInputEnvelope
    set?: Enumerable<RequestEventWhereUniqueInput>
    disconnect?: Enumerable<RequestEventWhereUniqueInput>
    delete?: Enumerable<RequestEventWhereUniqueInput>
    connect?: Enumerable<RequestEventWhereUniqueInput>
    update?: Enumerable<RequestEventUpdateWithWhereUniqueWithoutRequestedByInput>
    updateMany?: Enumerable<RequestEventUpdateManyWithWhereWithoutRequestedByInput>
    deleteMany?: Enumerable<RequestEventScalarWhereInput>
  }

  export type PasswordResetTokenUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<PasswordResetTokenCreateWithoutUserInput>, Enumerable<PasswordResetTokenUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<PasswordResetTokenCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<PasswordResetTokenUpsertWithWhereUniqueWithoutUserInput>
    createMany?: PasswordResetTokenCreateManyUserInputEnvelope
    set?: Enumerable<PasswordResetTokenWhereUniqueInput>
    disconnect?: Enumerable<PasswordResetTokenWhereUniqueInput>
    delete?: Enumerable<PasswordResetTokenWhereUniqueInput>
    connect?: Enumerable<PasswordResetTokenWhereUniqueInput>
    update?: Enumerable<PasswordResetTokenUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<PasswordResetTokenUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<PasswordResetTokenScalarWhereInput>
  }

  export type EventUpdateManyWithoutPublishedByNestedInput = {
    create?: XOR<Enumerable<EventCreateWithoutPublishedByInput>, Enumerable<EventUncheckedCreateWithoutPublishedByInput>>
    connectOrCreate?: Enumerable<EventCreateOrConnectWithoutPublishedByInput>
    upsert?: Enumerable<EventUpsertWithWhereUniqueWithoutPublishedByInput>
    createMany?: EventCreateManyPublishedByInputEnvelope
    set?: Enumerable<EventWhereUniqueInput>
    disconnect?: Enumerable<EventWhereUniqueInput>
    delete?: Enumerable<EventWhereUniqueInput>
    connect?: Enumerable<EventWhereUniqueInput>
    update?: Enumerable<EventUpdateWithWhereUniqueWithoutPublishedByInput>
    updateMany?: Enumerable<EventUpdateManyWithWhereWithoutPublishedByInput>
    deleteMany?: Enumerable<EventScalarWhereInput>
  }

  export type EventUpdateManyWithoutLikedByNestedInput = {
    create?: XOR<Enumerable<EventCreateWithoutLikedByInput>, Enumerable<EventUncheckedCreateWithoutLikedByInput>>
    connectOrCreate?: Enumerable<EventCreateOrConnectWithoutLikedByInput>
    upsert?: Enumerable<EventUpsertWithWhereUniqueWithoutLikedByInput>
    set?: Enumerable<EventWhereUniqueInput>
    disconnect?: Enumerable<EventWhereUniqueInput>
    delete?: Enumerable<EventWhereUniqueInput>
    connect?: Enumerable<EventWhereUniqueInput>
    update?: Enumerable<EventUpdateWithWhereUniqueWithoutLikedByInput>
    updateMany?: Enumerable<EventUpdateManyWithWhereWithoutLikedByInput>
    deleteMany?: Enumerable<EventScalarWhereInput>
  }

  export type EventUpdateManyWithoutSavedByNestedInput = {
    create?: XOR<Enumerable<EventCreateWithoutSavedByInput>, Enumerable<EventUncheckedCreateWithoutSavedByInput>>
    connectOrCreate?: Enumerable<EventCreateOrConnectWithoutSavedByInput>
    upsert?: Enumerable<EventUpsertWithWhereUniqueWithoutSavedByInput>
    set?: Enumerable<EventWhereUniqueInput>
    disconnect?: Enumerable<EventWhereUniqueInput>
    delete?: Enumerable<EventWhereUniqueInput>
    connect?: Enumerable<EventWhereUniqueInput>
    update?: Enumerable<EventUpdateWithWhereUniqueWithoutSavedByInput>
    updateMany?: Enumerable<EventUpdateManyWithWhereWithoutSavedByInput>
    deleteMany?: Enumerable<EventScalarWhereInput>
  }

  export type RoleUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<Enumerable<RoleCreateWithoutUsersInput>, Enumerable<RoleUncheckedCreateWithoutUsersInput>>
    connectOrCreate?: Enumerable<RoleCreateOrConnectWithoutUsersInput>
    upsert?: Enumerable<RoleUpsertWithWhereUniqueWithoutUsersInput>
    set?: Enumerable<RoleWhereUniqueInput>
    disconnect?: Enumerable<RoleWhereUniqueInput>
    delete?: Enumerable<RoleWhereUniqueInput>
    connect?: Enumerable<RoleWhereUniqueInput>
    update?: Enumerable<RoleUpdateWithWhereUniqueWithoutUsersInput>
    updateMany?: Enumerable<RoleUpdateManyWithWhereWithoutUsersInput>
    deleteMany?: Enumerable<RoleScalarWhereInput>
  }

  export type NotificationPreferenceUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<NotificationPreferenceCreateWithoutUserInput, NotificationPreferenceUncheckedCreateWithoutUserInput>
    connectOrCreate?: NotificationPreferenceCreateOrConnectWithoutUserInput
    upsert?: NotificationPreferenceUpsertWithoutUserInput
    disconnect?: boolean
    delete?: boolean
    connect?: NotificationPreferenceWhereUniqueInput
    update?: XOR<NotificationPreferenceUpdateWithoutUserInput, NotificationPreferenceUncheckedUpdateWithoutUserInput>
  }

  export type RequestEventUncheckedUpdateManyWithoutApprovedByNestedInput = {
    create?: XOR<Enumerable<RequestEventCreateWithoutApprovedByInput>, Enumerable<RequestEventUncheckedCreateWithoutApprovedByInput>>
    connectOrCreate?: Enumerable<RequestEventCreateOrConnectWithoutApprovedByInput>
    upsert?: Enumerable<RequestEventUpsertWithWhereUniqueWithoutApprovedByInput>
    createMany?: RequestEventCreateManyApprovedByInputEnvelope
    set?: Enumerable<RequestEventWhereUniqueInput>
    disconnect?: Enumerable<RequestEventWhereUniqueInput>
    delete?: Enumerable<RequestEventWhereUniqueInput>
    connect?: Enumerable<RequestEventWhereUniqueInput>
    update?: Enumerable<RequestEventUpdateWithWhereUniqueWithoutApprovedByInput>
    updateMany?: Enumerable<RequestEventUpdateManyWithWhereWithoutApprovedByInput>
    deleteMany?: Enumerable<RequestEventScalarWhereInput>
  }

  export type RequestEventUncheckedUpdateManyWithoutRequestedByNestedInput = {
    create?: XOR<Enumerable<RequestEventCreateWithoutRequestedByInput>, Enumerable<RequestEventUncheckedCreateWithoutRequestedByInput>>
    connectOrCreate?: Enumerable<RequestEventCreateOrConnectWithoutRequestedByInput>
    upsert?: Enumerable<RequestEventUpsertWithWhereUniqueWithoutRequestedByInput>
    createMany?: RequestEventCreateManyRequestedByInputEnvelope
    set?: Enumerable<RequestEventWhereUniqueInput>
    disconnect?: Enumerable<RequestEventWhereUniqueInput>
    delete?: Enumerable<RequestEventWhereUniqueInput>
    connect?: Enumerable<RequestEventWhereUniqueInput>
    update?: Enumerable<RequestEventUpdateWithWhereUniqueWithoutRequestedByInput>
    updateMany?: Enumerable<RequestEventUpdateManyWithWhereWithoutRequestedByInput>
    deleteMany?: Enumerable<RequestEventScalarWhereInput>
  }

  export type PasswordResetTokenUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<PasswordResetTokenCreateWithoutUserInput>, Enumerable<PasswordResetTokenUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<PasswordResetTokenCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<PasswordResetTokenUpsertWithWhereUniqueWithoutUserInput>
    createMany?: PasswordResetTokenCreateManyUserInputEnvelope
    set?: Enumerable<PasswordResetTokenWhereUniqueInput>
    disconnect?: Enumerable<PasswordResetTokenWhereUniqueInput>
    delete?: Enumerable<PasswordResetTokenWhereUniqueInput>
    connect?: Enumerable<PasswordResetTokenWhereUniqueInput>
    update?: Enumerable<PasswordResetTokenUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<PasswordResetTokenUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<PasswordResetTokenScalarWhereInput>
  }

  export type EventUncheckedUpdateManyWithoutPublishedByNestedInput = {
    create?: XOR<Enumerable<EventCreateWithoutPublishedByInput>, Enumerable<EventUncheckedCreateWithoutPublishedByInput>>
    connectOrCreate?: Enumerable<EventCreateOrConnectWithoutPublishedByInput>
    upsert?: Enumerable<EventUpsertWithWhereUniqueWithoutPublishedByInput>
    createMany?: EventCreateManyPublishedByInputEnvelope
    set?: Enumerable<EventWhereUniqueInput>
    disconnect?: Enumerable<EventWhereUniqueInput>
    delete?: Enumerable<EventWhereUniqueInput>
    connect?: Enumerable<EventWhereUniqueInput>
    update?: Enumerable<EventUpdateWithWhereUniqueWithoutPublishedByInput>
    updateMany?: Enumerable<EventUpdateManyWithWhereWithoutPublishedByInput>
    deleteMany?: Enumerable<EventScalarWhereInput>
  }

  export type EventUncheckedUpdateManyWithoutLikedByNestedInput = {
    create?: XOR<Enumerable<EventCreateWithoutLikedByInput>, Enumerable<EventUncheckedCreateWithoutLikedByInput>>
    connectOrCreate?: Enumerable<EventCreateOrConnectWithoutLikedByInput>
    upsert?: Enumerable<EventUpsertWithWhereUniqueWithoutLikedByInput>
    set?: Enumerable<EventWhereUniqueInput>
    disconnect?: Enumerable<EventWhereUniqueInput>
    delete?: Enumerable<EventWhereUniqueInput>
    connect?: Enumerable<EventWhereUniqueInput>
    update?: Enumerable<EventUpdateWithWhereUniqueWithoutLikedByInput>
    updateMany?: Enumerable<EventUpdateManyWithWhereWithoutLikedByInput>
    deleteMany?: Enumerable<EventScalarWhereInput>
  }

  export type EventUncheckedUpdateManyWithoutSavedByNestedInput = {
    create?: XOR<Enumerable<EventCreateWithoutSavedByInput>, Enumerable<EventUncheckedCreateWithoutSavedByInput>>
    connectOrCreate?: Enumerable<EventCreateOrConnectWithoutSavedByInput>
    upsert?: Enumerable<EventUpsertWithWhereUniqueWithoutSavedByInput>
    set?: Enumerable<EventWhereUniqueInput>
    disconnect?: Enumerable<EventWhereUniqueInput>
    delete?: Enumerable<EventWhereUniqueInput>
    connect?: Enumerable<EventWhereUniqueInput>
    update?: Enumerable<EventUpdateWithWhereUniqueWithoutSavedByInput>
    updateMany?: Enumerable<EventUpdateManyWithWhereWithoutSavedByInput>
    deleteMany?: Enumerable<EventScalarWhereInput>
  }

  export type UserCreateNestedOneWithoutNotificationPreferenceInput = {
    create?: XOR<UserCreateWithoutNotificationPreferenceInput, UserUncheckedCreateWithoutNotificationPreferenceInput>
    connectOrCreate?: UserCreateOrConnectWithoutNotificationPreferenceInput
    connect?: UserWhereUniqueInput
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type UserUpdateOneRequiredWithoutNotificationPreferenceNestedInput = {
    create?: XOR<UserCreateWithoutNotificationPreferenceInput, UserUncheckedCreateWithoutNotificationPreferenceInput>
    connectOrCreate?: UserCreateOrConnectWithoutNotificationPreferenceInput
    upsert?: UserUpsertWithoutNotificationPreferenceInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutNotificationPreferenceInput, UserUncheckedUpdateWithoutNotificationPreferenceInput>
  }

  export type UserCreateNestedManyWithoutRolesInput = {
    create?: XOR<Enumerable<UserCreateWithoutRolesInput>, Enumerable<UserUncheckedCreateWithoutRolesInput>>
    connectOrCreate?: Enumerable<UserCreateOrConnectWithoutRolesInput>
    connect?: Enumerable<UserWhereUniqueInput>
  }

  export type UserUncheckedCreateNestedManyWithoutRolesInput = {
    create?: XOR<Enumerable<UserCreateWithoutRolesInput>, Enumerable<UserUncheckedCreateWithoutRolesInput>>
    connectOrCreate?: Enumerable<UserCreateOrConnectWithoutRolesInput>
    connect?: Enumerable<UserWhereUniqueInput>
  }

  export type EnumRoleTypeFieldUpdateOperationsInput = {
    set?: RoleType
  }

  export type UserUpdateManyWithoutRolesNestedInput = {
    create?: XOR<Enumerable<UserCreateWithoutRolesInput>, Enumerable<UserUncheckedCreateWithoutRolesInput>>
    connectOrCreate?: Enumerable<UserCreateOrConnectWithoutRolesInput>
    upsert?: Enumerable<UserUpsertWithWhereUniqueWithoutRolesInput>
    set?: Enumerable<UserWhereUniqueInput>
    disconnect?: Enumerable<UserWhereUniqueInput>
    delete?: Enumerable<UserWhereUniqueInput>
    connect?: Enumerable<UserWhereUniqueInput>
    update?: Enumerable<UserUpdateWithWhereUniqueWithoutRolesInput>
    updateMany?: Enumerable<UserUpdateManyWithWhereWithoutRolesInput>
    deleteMany?: Enumerable<UserScalarWhereInput>
  }

  export type UserUncheckedUpdateManyWithoutRolesNestedInput = {
    create?: XOR<Enumerable<UserCreateWithoutRolesInput>, Enumerable<UserUncheckedCreateWithoutRolesInput>>
    connectOrCreate?: Enumerable<UserCreateOrConnectWithoutRolesInput>
    upsert?: Enumerable<UserUpsertWithWhereUniqueWithoutRolesInput>
    set?: Enumerable<UserWhereUniqueInput>
    disconnect?: Enumerable<UserWhereUniqueInput>
    delete?: Enumerable<UserWhereUniqueInput>
    connect?: Enumerable<UserWhereUniqueInput>
    update?: Enumerable<UserUpdateWithWhereUniqueWithoutRolesInput>
    updateMany?: Enumerable<UserUpdateManyWithWhereWithoutRolesInput>
    deleteMany?: Enumerable<UserScalarWhereInput>
  }

  export type UserCreateNestedOneWithoutPasswordResetTokenInput = {
    create?: XOR<UserCreateWithoutPasswordResetTokenInput, UserUncheckedCreateWithoutPasswordResetTokenInput>
    connectOrCreate?: UserCreateOrConnectWithoutPasswordResetTokenInput
    connect?: UserWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdateOneRequiredWithoutPasswordResetTokenNestedInput = {
    create?: XOR<UserCreateWithoutPasswordResetTokenInput, UserUncheckedCreateWithoutPasswordResetTokenInput>
    connectOrCreate?: UserCreateOrConnectWithoutPasswordResetTokenInput
    upsert?: UserUpsertWithoutPasswordResetTokenInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutPasswordResetTokenInput, UserUncheckedUpdateWithoutPasswordResetTokenInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserCreateNestedOneWithoutEventsRequestedInput = {
    create?: XOR<UserCreateWithoutEventsRequestedInput, UserUncheckedCreateWithoutEventsRequestedInput>
    connectOrCreate?: UserCreateOrConnectWithoutEventsRequestedInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutApprovedRequestedInput = {
    create?: XOR<UserCreateWithoutApprovedRequestedInput, UserUncheckedCreateWithoutApprovedRequestedInput>
    connectOrCreate?: UserCreateOrConnectWithoutApprovedRequestedInput
    connect?: UserWhereUniqueInput
  }

  export type EventCreateNestedOneWithoutRequestEventInput = {
    create?: XOR<EventCreateWithoutRequestEventInput, EventUncheckedCreateWithoutRequestEventInput>
    connectOrCreate?: EventCreateOrConnectWithoutRequestEventInput
    connect?: EventWhereUniqueInput
  }

  export type EventUncheckedCreateNestedOneWithoutRequestEventInput = {
    create?: XOR<EventCreateWithoutRequestEventInput, EventUncheckedCreateWithoutRequestEventInput>
    connectOrCreate?: EventCreateOrConnectWithoutRequestEventInput
    connect?: EventWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UserUpdateOneRequiredWithoutEventsRequestedNestedInput = {
    create?: XOR<UserCreateWithoutEventsRequestedInput, UserUncheckedCreateWithoutEventsRequestedInput>
    connectOrCreate?: UserCreateOrConnectWithoutEventsRequestedInput
    upsert?: UserUpsertWithoutEventsRequestedInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutEventsRequestedInput, UserUncheckedUpdateWithoutEventsRequestedInput>
  }

  export type UserUpdateOneWithoutApprovedRequestedNestedInput = {
    create?: XOR<UserCreateWithoutApprovedRequestedInput, UserUncheckedCreateWithoutApprovedRequestedInput>
    connectOrCreate?: UserCreateOrConnectWithoutApprovedRequestedInput
    upsert?: UserUpsertWithoutApprovedRequestedInput
    disconnect?: boolean
    delete?: boolean
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutApprovedRequestedInput, UserUncheckedUpdateWithoutApprovedRequestedInput>
  }

  export type EnumRequestEventStatusFieldUpdateOperationsInput = {
    set?: RequestEventStatus
  }

  export type EventUpdateOneWithoutRequestEventNestedInput = {
    create?: XOR<EventCreateWithoutRequestEventInput, EventUncheckedCreateWithoutRequestEventInput>
    connectOrCreate?: EventCreateOrConnectWithoutRequestEventInput
    upsert?: EventUpsertWithoutRequestEventInput
    disconnect?: boolean
    delete?: boolean
    connect?: EventWhereUniqueInput
    update?: XOR<EventUpdateWithoutRequestEventInput, EventUncheckedUpdateWithoutRequestEventInput>
  }

  export type EventUncheckedUpdateOneWithoutRequestEventNestedInput = {
    create?: XOR<EventCreateWithoutRequestEventInput, EventUncheckedCreateWithoutRequestEventInput>
    connectOrCreate?: EventCreateOrConnectWithoutRequestEventInput
    upsert?: EventUpsertWithoutRequestEventInput
    disconnect?: boolean
    delete?: boolean
    connect?: EventWhereUniqueInput
    update?: XOR<EventUpdateWithoutRequestEventInput, EventUncheckedUpdateWithoutRequestEventInput>
  }

  export type EventCreateimagesInput = {
    set: Enumerable<string>
  }

  export type EventCreatetagsInput = {
    set: Enumerable<string>
  }

  export type UserCreateNestedOneWithoutEventPublishedInput = {
    create?: XOR<UserCreateWithoutEventPublishedInput, UserUncheckedCreateWithoutEventPublishedInput>
    connectOrCreate?: UserCreateOrConnectWithoutEventPublishedInput
    connect?: UserWhereUniqueInput
  }

  export type RequestEventCreateNestedOneWithoutEventInput = {
    create?: XOR<RequestEventCreateWithoutEventInput, RequestEventUncheckedCreateWithoutEventInput>
    connectOrCreate?: RequestEventCreateOrConnectWithoutEventInput
    connect?: RequestEventWhereUniqueInput
  }

  export type UserCreateNestedManyWithoutLikedEventsInput = {
    create?: XOR<Enumerable<UserCreateWithoutLikedEventsInput>, Enumerable<UserUncheckedCreateWithoutLikedEventsInput>>
    connectOrCreate?: Enumerable<UserCreateOrConnectWithoutLikedEventsInput>
    connect?: Enumerable<UserWhereUniqueInput>
  }

  export type UserCreateNestedManyWithoutSavedEventsInput = {
    create?: XOR<Enumerable<UserCreateWithoutSavedEventsInput>, Enumerable<UserUncheckedCreateWithoutSavedEventsInput>>
    connectOrCreate?: Enumerable<UserCreateOrConnectWithoutSavedEventsInput>
    connect?: Enumerable<UserWhereUniqueInput>
  }

  export type UserUncheckedCreateNestedManyWithoutLikedEventsInput = {
    create?: XOR<Enumerable<UserCreateWithoutLikedEventsInput>, Enumerable<UserUncheckedCreateWithoutLikedEventsInput>>
    connectOrCreate?: Enumerable<UserCreateOrConnectWithoutLikedEventsInput>
    connect?: Enumerable<UserWhereUniqueInput>
  }

  export type UserUncheckedCreateNestedManyWithoutSavedEventsInput = {
    create?: XOR<Enumerable<UserCreateWithoutSavedEventsInput>, Enumerable<UserUncheckedCreateWithoutSavedEventsInput>>
    connectOrCreate?: Enumerable<UserCreateOrConnectWithoutSavedEventsInput>
    connect?: Enumerable<UserWhereUniqueInput>
  }

  export type EventUpdateimagesInput = {
    set?: Enumerable<string>
    push?: string | Enumerable<string>
  }

  export type EventUpdatetagsInput = {
    set?: Enumerable<string>
    push?: string | Enumerable<string>
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumEventStatusFieldUpdateOperationsInput = {
    set?: EventStatus
  }

  export type UserUpdateOneWithoutEventPublishedNestedInput = {
    create?: XOR<UserCreateWithoutEventPublishedInput, UserUncheckedCreateWithoutEventPublishedInput>
    connectOrCreate?: UserCreateOrConnectWithoutEventPublishedInput
    upsert?: UserUpsertWithoutEventPublishedInput
    disconnect?: boolean
    delete?: boolean
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutEventPublishedInput, UserUncheckedUpdateWithoutEventPublishedInput>
  }

  export type RequestEventUpdateOneWithoutEventNestedInput = {
    create?: XOR<RequestEventCreateWithoutEventInput, RequestEventUncheckedCreateWithoutEventInput>
    connectOrCreate?: RequestEventCreateOrConnectWithoutEventInput
    upsert?: RequestEventUpsertWithoutEventInput
    disconnect?: boolean
    delete?: boolean
    connect?: RequestEventWhereUniqueInput
    update?: XOR<RequestEventUpdateWithoutEventInput, RequestEventUncheckedUpdateWithoutEventInput>
  }

  export type UserUpdateManyWithoutLikedEventsNestedInput = {
    create?: XOR<Enumerable<UserCreateWithoutLikedEventsInput>, Enumerable<UserUncheckedCreateWithoutLikedEventsInput>>
    connectOrCreate?: Enumerable<UserCreateOrConnectWithoutLikedEventsInput>
    upsert?: Enumerable<UserUpsertWithWhereUniqueWithoutLikedEventsInput>
    set?: Enumerable<UserWhereUniqueInput>
    disconnect?: Enumerable<UserWhereUniqueInput>
    delete?: Enumerable<UserWhereUniqueInput>
    connect?: Enumerable<UserWhereUniqueInput>
    update?: Enumerable<UserUpdateWithWhereUniqueWithoutLikedEventsInput>
    updateMany?: Enumerable<UserUpdateManyWithWhereWithoutLikedEventsInput>
    deleteMany?: Enumerable<UserScalarWhereInput>
  }

  export type UserUpdateManyWithoutSavedEventsNestedInput = {
    create?: XOR<Enumerable<UserCreateWithoutSavedEventsInput>, Enumerable<UserUncheckedCreateWithoutSavedEventsInput>>
    connectOrCreate?: Enumerable<UserCreateOrConnectWithoutSavedEventsInput>
    upsert?: Enumerable<UserUpsertWithWhereUniqueWithoutSavedEventsInput>
    set?: Enumerable<UserWhereUniqueInput>
    disconnect?: Enumerable<UserWhereUniqueInput>
    delete?: Enumerable<UserWhereUniqueInput>
    connect?: Enumerable<UserWhereUniqueInput>
    update?: Enumerable<UserUpdateWithWhereUniqueWithoutSavedEventsInput>
    updateMany?: Enumerable<UserUpdateManyWithWhereWithoutSavedEventsInput>
    deleteMany?: Enumerable<UserScalarWhereInput>
  }

  export type UserUncheckedUpdateManyWithoutLikedEventsNestedInput = {
    create?: XOR<Enumerable<UserCreateWithoutLikedEventsInput>, Enumerable<UserUncheckedCreateWithoutLikedEventsInput>>
    connectOrCreate?: Enumerable<UserCreateOrConnectWithoutLikedEventsInput>
    upsert?: Enumerable<UserUpsertWithWhereUniqueWithoutLikedEventsInput>
    set?: Enumerable<UserWhereUniqueInput>
    disconnect?: Enumerable<UserWhereUniqueInput>
    delete?: Enumerable<UserWhereUniqueInput>
    connect?: Enumerable<UserWhereUniqueInput>
    update?: Enumerable<UserUpdateWithWhereUniqueWithoutLikedEventsInput>
    updateMany?: Enumerable<UserUpdateManyWithWhereWithoutLikedEventsInput>
    deleteMany?: Enumerable<UserScalarWhereInput>
  }

  export type UserUncheckedUpdateManyWithoutSavedEventsNestedInput = {
    create?: XOR<Enumerable<UserCreateWithoutSavedEventsInput>, Enumerable<UserUncheckedCreateWithoutSavedEventsInput>>
    connectOrCreate?: Enumerable<UserCreateOrConnectWithoutSavedEventsInput>
    upsert?: Enumerable<UserUpsertWithWhereUniqueWithoutSavedEventsInput>
    set?: Enumerable<UserWhereUniqueInput>
    disconnect?: Enumerable<UserWhereUniqueInput>
    delete?: Enumerable<UserWhereUniqueInput>
    connect?: Enumerable<UserWhereUniqueInput>
    update?: Enumerable<UserUpdateWithWhereUniqueWithoutSavedEventsInput>
    updateMany?: Enumerable<UserUpdateManyWithWhereWithoutSavedEventsInput>
    deleteMany?: Enumerable<UserScalarWhereInput>
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type NestedDateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedDateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type NestedStringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableFilter | string | null
  }

  export type NestedStringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type NestedIntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type NestedBoolNullableFilter = {
    equals?: boolean | null
    not?: NestedBoolNullableFilter | boolean | null
  }

  export type NestedBoolNullableWithAggregatesFilter = {
    equals?: boolean | null
    not?: NestedBoolNullableWithAggregatesFilter | boolean | null
    _count?: NestedIntNullableFilter
    _min?: NestedBoolNullableFilter
    _max?: NestedBoolNullableFilter
  }

  export type NestedEnumRoleTypeFilter = {
    equals?: RoleType
    in?: Enumerable<RoleType>
    notIn?: Enumerable<RoleType>
    not?: NestedEnumRoleTypeFilter | RoleType
  }

  export type NestedEnumRoleTypeWithAggregatesFilter = {
    equals?: RoleType
    in?: Enumerable<RoleType>
    notIn?: Enumerable<RoleType>
    not?: NestedEnumRoleTypeWithAggregatesFilter | RoleType
    _count?: NestedIntFilter
    _min?: NestedEnumRoleTypeFilter
    _max?: NestedEnumRoleTypeFilter
  }

  export type NestedBoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
  }

  export type NestedIntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type NestedFloatFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type NestedBoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    _min?: NestedBoolFilter
    _max?: NestedBoolFilter
  }

  export type NestedDateTimeNullableFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableFilter | Date | string | null
  }

  export type NestedEnumRequestEventStatusFilter = {
    equals?: RequestEventStatus
    in?: Enumerable<RequestEventStatus>
    notIn?: Enumerable<RequestEventStatus>
    not?: NestedEnumRequestEventStatusFilter | RequestEventStatus
  }

  export type NestedDateTimeNullableWithAggregatesFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableWithAggregatesFilter | Date | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedDateTimeNullableFilter
    _max?: NestedDateTimeNullableFilter
  }

  export type NestedEnumRequestEventStatusWithAggregatesFilter = {
    equals?: RequestEventStatus
    in?: Enumerable<RequestEventStatus>
    notIn?: Enumerable<RequestEventStatus>
    not?: NestedEnumRequestEventStatusWithAggregatesFilter | RequestEventStatus
    _count?: NestedIntFilter
    _min?: NestedEnumRequestEventStatusFilter
    _max?: NestedEnumRequestEventStatusFilter
  }

  export type NestedFloatNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatNullableFilter | number | null
  }

  export type NestedEnumEventStatusFilter = {
    equals?: EventStatus
    in?: Enumerable<EventStatus>
    notIn?: Enumerable<EventStatus>
    not?: NestedEnumEventStatusFilter | EventStatus
  }

  export type NestedFloatNullableWithAggregatesFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatNullableWithAggregatesFilter | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedFloatNullableFilter
    _min?: NestedFloatNullableFilter
    _max?: NestedFloatNullableFilter
  }

  export type NestedEnumEventStatusWithAggregatesFilter = {
    equals?: EventStatus
    in?: Enumerable<EventStatus>
    notIn?: Enumerable<EventStatus>
    not?: NestedEnumEventStatusWithAggregatesFilter | EventStatus
    _count?: NestedIntFilter
    _min?: NestedEnumEventStatusFilter
    _max?: NestedEnumEventStatusFilter
  }

  export type RoleCreateWithoutUsersInput = {
    id?: string
    name?: RoleType
    description: string
  }

  export type RoleUncheckedCreateWithoutUsersInput = {
    id?: string
    name?: RoleType
    description: string
  }

  export type RoleCreateOrConnectWithoutUsersInput = {
    where: RoleWhereUniqueInput
    create: XOR<RoleCreateWithoutUsersInput, RoleUncheckedCreateWithoutUsersInput>
  }

  export type NotificationPreferenceCreateWithoutUserInput = {
    id?: string
    email?: boolean | null
    whatsapp?: boolean | null
  }

  export type NotificationPreferenceUncheckedCreateWithoutUserInput = {
    id?: string
    email?: boolean | null
    whatsapp?: boolean | null
  }

  export type NotificationPreferenceCreateOrConnectWithoutUserInput = {
    where: NotificationPreferenceWhereUniqueInput
    create: XOR<NotificationPreferenceCreateWithoutUserInput, NotificationPreferenceUncheckedCreateWithoutUserInput>
  }

  export type RequestEventCreateWithoutApprovedByInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    title?: string
    subtitle: string
    description: string
    startDate: Date | string
    endDate?: Date | string | null
    locationName: string
    locationDetail?: string | null
    address: string
    requestedBy: UserCreateNestedOneWithoutEventsRequestedInput
    status?: RequestEventStatus
    Event?: EventCreateNestedOneWithoutRequestEventInput
  }

  export type RequestEventUncheckedCreateWithoutApprovedByInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    title?: string
    subtitle: string
    description: string
    startDate: Date | string
    endDate?: Date | string | null
    locationName: string
    locationDetail?: string | null
    address: string
    requestedById: string
    status?: RequestEventStatus
    Event?: EventUncheckedCreateNestedOneWithoutRequestEventInput
  }

  export type RequestEventCreateOrConnectWithoutApprovedByInput = {
    where: RequestEventWhereUniqueInput
    create: XOR<RequestEventCreateWithoutApprovedByInput, RequestEventUncheckedCreateWithoutApprovedByInput>
  }

  export type RequestEventCreateManyApprovedByInputEnvelope = {
    data: Enumerable<RequestEventCreateManyApprovedByInput>
    skipDuplicates?: boolean
  }

  export type RequestEventCreateWithoutRequestedByInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    title?: string
    subtitle: string
    description: string
    startDate: Date | string
    endDate?: Date | string | null
    locationName: string
    locationDetail?: string | null
    address: string
    approvedBy?: UserCreateNestedOneWithoutApprovedRequestedInput
    status?: RequestEventStatus
    Event?: EventCreateNestedOneWithoutRequestEventInput
  }

  export type RequestEventUncheckedCreateWithoutRequestedByInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    title?: string
    subtitle: string
    description: string
    startDate: Date | string
    endDate?: Date | string | null
    locationName: string
    locationDetail?: string | null
    address: string
    approvedById?: string | null
    status?: RequestEventStatus
    Event?: EventUncheckedCreateNestedOneWithoutRequestEventInput
  }

  export type RequestEventCreateOrConnectWithoutRequestedByInput = {
    where: RequestEventWhereUniqueInput
    create: XOR<RequestEventCreateWithoutRequestedByInput, RequestEventUncheckedCreateWithoutRequestedByInput>
  }

  export type RequestEventCreateManyRequestedByInputEnvelope = {
    data: Enumerable<RequestEventCreateManyRequestedByInput>
    skipDuplicates?: boolean
  }

  export type PasswordResetTokenCreateWithoutUserInput = {
    token: string
    expiration_date: Date | string
    deactivated?: boolean
  }

  export type PasswordResetTokenUncheckedCreateWithoutUserInput = {
    id?: number
    token: string
    expiration_date: Date | string
    deactivated?: boolean
  }

  export type PasswordResetTokenCreateOrConnectWithoutUserInput = {
    where: PasswordResetTokenWhereUniqueInput
    create: XOR<PasswordResetTokenCreateWithoutUserInput, PasswordResetTokenUncheckedCreateWithoutUserInput>
  }

  export type PasswordResetTokenCreateManyUserInputEnvelope = {
    data: Enumerable<PasswordResetTokenCreateManyUserInput>
    skipDuplicates?: boolean
  }

  export type EventCreateWithoutPublishedByInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    title: string
    subtitle: string
    description: string
    principalImage: string
    images?: EventCreateimagesInput | Enumerable<string>
    tags?: EventCreatetagsInput | Enumerable<string>
    startDate: Date | string
    endDate?: Date | string | null
    locationName: string
    locationDetail?: string | null
    address: string
    longitud?: number | null
    latitud?: number | null
    status?: EventStatus
    requestEvent?: RequestEventCreateNestedOneWithoutEventInput
    likedBy?: UserCreateNestedManyWithoutLikedEventsInput
    savedBy?: UserCreateNestedManyWithoutSavedEventsInput
  }

  export type EventUncheckedCreateWithoutPublishedByInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    title: string
    subtitle: string
    description: string
    principalImage: string
    images?: EventCreateimagesInput | Enumerable<string>
    tags?: EventCreatetagsInput | Enumerable<string>
    startDate: Date | string
    endDate?: Date | string | null
    locationName: string
    locationDetail?: string | null
    address: string
    longitud?: number | null
    latitud?: number | null
    status?: EventStatus
    requestEventId: string
    likedBy?: UserUncheckedCreateNestedManyWithoutLikedEventsInput
    savedBy?: UserUncheckedCreateNestedManyWithoutSavedEventsInput
  }

  export type EventCreateOrConnectWithoutPublishedByInput = {
    where: EventWhereUniqueInput
    create: XOR<EventCreateWithoutPublishedByInput, EventUncheckedCreateWithoutPublishedByInput>
  }

  export type EventCreateManyPublishedByInputEnvelope = {
    data: Enumerable<EventCreateManyPublishedByInput>
    skipDuplicates?: boolean
  }

  export type EventCreateWithoutLikedByInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    title: string
    subtitle: string
    description: string
    principalImage: string
    images?: EventCreateimagesInput | Enumerable<string>
    tags?: EventCreatetagsInput | Enumerable<string>
    startDate: Date | string
    endDate?: Date | string | null
    locationName: string
    locationDetail?: string | null
    address: string
    longitud?: number | null
    latitud?: number | null
    status?: EventStatus
    publishedBy?: UserCreateNestedOneWithoutEventPublishedInput
    requestEvent?: RequestEventCreateNestedOneWithoutEventInput
    savedBy?: UserCreateNestedManyWithoutSavedEventsInput
  }

  export type EventUncheckedCreateWithoutLikedByInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    title: string
    subtitle: string
    description: string
    principalImage: string
    images?: EventCreateimagesInput | Enumerable<string>
    tags?: EventCreatetagsInput | Enumerable<string>
    startDate: Date | string
    endDate?: Date | string | null
    locationName: string
    locationDetail?: string | null
    address: string
    longitud?: number | null
    latitud?: number | null
    status?: EventStatus
    publishedById?: string | null
    requestEventId: string
    savedBy?: UserUncheckedCreateNestedManyWithoutSavedEventsInput
  }

  export type EventCreateOrConnectWithoutLikedByInput = {
    where: EventWhereUniqueInput
    create: XOR<EventCreateWithoutLikedByInput, EventUncheckedCreateWithoutLikedByInput>
  }

  export type EventCreateWithoutSavedByInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    title: string
    subtitle: string
    description: string
    principalImage: string
    images?: EventCreateimagesInput | Enumerable<string>
    tags?: EventCreatetagsInput | Enumerable<string>
    startDate: Date | string
    endDate?: Date | string | null
    locationName: string
    locationDetail?: string | null
    address: string
    longitud?: number | null
    latitud?: number | null
    status?: EventStatus
    publishedBy?: UserCreateNestedOneWithoutEventPublishedInput
    requestEvent?: RequestEventCreateNestedOneWithoutEventInput
    likedBy?: UserCreateNestedManyWithoutLikedEventsInput
  }

  export type EventUncheckedCreateWithoutSavedByInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    title: string
    subtitle: string
    description: string
    principalImage: string
    images?: EventCreateimagesInput | Enumerable<string>
    tags?: EventCreatetagsInput | Enumerable<string>
    startDate: Date | string
    endDate?: Date | string | null
    locationName: string
    locationDetail?: string | null
    address: string
    longitud?: number | null
    latitud?: number | null
    status?: EventStatus
    publishedById?: string | null
    requestEventId: string
    likedBy?: UserUncheckedCreateNestedManyWithoutLikedEventsInput
  }

  export type EventCreateOrConnectWithoutSavedByInput = {
    where: EventWhereUniqueInput
    create: XOR<EventCreateWithoutSavedByInput, EventUncheckedCreateWithoutSavedByInput>
  }

  export type RoleUpsertWithWhereUniqueWithoutUsersInput = {
    where: RoleWhereUniqueInput
    update: XOR<RoleUpdateWithoutUsersInput, RoleUncheckedUpdateWithoutUsersInput>
    create: XOR<RoleCreateWithoutUsersInput, RoleUncheckedCreateWithoutUsersInput>
  }

  export type RoleUpdateWithWhereUniqueWithoutUsersInput = {
    where: RoleWhereUniqueInput
    data: XOR<RoleUpdateWithoutUsersInput, RoleUncheckedUpdateWithoutUsersInput>
  }

  export type RoleUpdateManyWithWhereWithoutUsersInput = {
    where: RoleScalarWhereInput
    data: XOR<RoleUpdateManyMutationInput, RoleUncheckedUpdateManyWithoutRolesInput>
  }

  export type RoleScalarWhereInput = {
    AND?: Enumerable<RoleScalarWhereInput>
    OR?: Enumerable<RoleScalarWhereInput>
    NOT?: Enumerable<RoleScalarWhereInput>
    id?: StringFilter | string
    name?: EnumRoleTypeFilter | RoleType
    description?: StringFilter | string
  }

  export type NotificationPreferenceUpsertWithoutUserInput = {
    update: XOR<NotificationPreferenceUpdateWithoutUserInput, NotificationPreferenceUncheckedUpdateWithoutUserInput>
    create: XOR<NotificationPreferenceCreateWithoutUserInput, NotificationPreferenceUncheckedCreateWithoutUserInput>
  }

  export type NotificationPreferenceUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableBoolFieldUpdateOperationsInput | boolean | null
    whatsapp?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type NotificationPreferenceUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableBoolFieldUpdateOperationsInput | boolean | null
    whatsapp?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type RequestEventUpsertWithWhereUniqueWithoutApprovedByInput = {
    where: RequestEventWhereUniqueInput
    update: XOR<RequestEventUpdateWithoutApprovedByInput, RequestEventUncheckedUpdateWithoutApprovedByInput>
    create: XOR<RequestEventCreateWithoutApprovedByInput, RequestEventUncheckedCreateWithoutApprovedByInput>
  }

  export type RequestEventUpdateWithWhereUniqueWithoutApprovedByInput = {
    where: RequestEventWhereUniqueInput
    data: XOR<RequestEventUpdateWithoutApprovedByInput, RequestEventUncheckedUpdateWithoutApprovedByInput>
  }

  export type RequestEventUpdateManyWithWhereWithoutApprovedByInput = {
    where: RequestEventScalarWhereInput
    data: XOR<RequestEventUpdateManyMutationInput, RequestEventUncheckedUpdateManyWithoutApprovedRequestedInput>
  }

  export type RequestEventScalarWhereInput = {
    AND?: Enumerable<RequestEventScalarWhereInput>
    OR?: Enumerable<RequestEventScalarWhereInput>
    NOT?: Enumerable<RequestEventScalarWhereInput>
    id?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    title?: StringFilter | string
    subtitle?: StringFilter | string
    description?: StringFilter | string
    startDate?: DateTimeFilter | Date | string
    endDate?: DateTimeNullableFilter | Date | string | null
    locationName?: StringFilter | string
    locationDetail?: StringNullableFilter | string | null
    address?: StringFilter | string
    requestedById?: StringFilter | string
    approvedById?: StringNullableFilter | string | null
    status?: EnumRequestEventStatusFilter | RequestEventStatus
  }

  export type RequestEventUpsertWithWhereUniqueWithoutRequestedByInput = {
    where: RequestEventWhereUniqueInput
    update: XOR<RequestEventUpdateWithoutRequestedByInput, RequestEventUncheckedUpdateWithoutRequestedByInput>
    create: XOR<RequestEventCreateWithoutRequestedByInput, RequestEventUncheckedCreateWithoutRequestedByInput>
  }

  export type RequestEventUpdateWithWhereUniqueWithoutRequestedByInput = {
    where: RequestEventWhereUniqueInput
    data: XOR<RequestEventUpdateWithoutRequestedByInput, RequestEventUncheckedUpdateWithoutRequestedByInput>
  }

  export type RequestEventUpdateManyWithWhereWithoutRequestedByInput = {
    where: RequestEventScalarWhereInput
    data: XOR<RequestEventUpdateManyMutationInput, RequestEventUncheckedUpdateManyWithoutEventsRequestedInput>
  }

  export type PasswordResetTokenUpsertWithWhereUniqueWithoutUserInput = {
    where: PasswordResetTokenWhereUniqueInput
    update: XOR<PasswordResetTokenUpdateWithoutUserInput, PasswordResetTokenUncheckedUpdateWithoutUserInput>
    create: XOR<PasswordResetTokenCreateWithoutUserInput, PasswordResetTokenUncheckedCreateWithoutUserInput>
  }

  export type PasswordResetTokenUpdateWithWhereUniqueWithoutUserInput = {
    where: PasswordResetTokenWhereUniqueInput
    data: XOR<PasswordResetTokenUpdateWithoutUserInput, PasswordResetTokenUncheckedUpdateWithoutUserInput>
  }

  export type PasswordResetTokenUpdateManyWithWhereWithoutUserInput = {
    where: PasswordResetTokenScalarWhereInput
    data: XOR<PasswordResetTokenUpdateManyMutationInput, PasswordResetTokenUncheckedUpdateManyWithoutPasswordResetTokenInput>
  }

  export type PasswordResetTokenScalarWhereInput = {
    AND?: Enumerable<PasswordResetTokenScalarWhereInput>
    OR?: Enumerable<PasswordResetTokenScalarWhereInput>
    NOT?: Enumerable<PasswordResetTokenScalarWhereInput>
    id?: IntFilter | number
    token?: StringFilter | string
    expiration_date?: DateTimeFilter | Date | string
    deactivated?: BoolFilter | boolean
    userId?: StringFilter | string
  }

  export type EventUpsertWithWhereUniqueWithoutPublishedByInput = {
    where: EventWhereUniqueInput
    update: XOR<EventUpdateWithoutPublishedByInput, EventUncheckedUpdateWithoutPublishedByInput>
    create: XOR<EventCreateWithoutPublishedByInput, EventUncheckedCreateWithoutPublishedByInput>
  }

  export type EventUpdateWithWhereUniqueWithoutPublishedByInput = {
    where: EventWhereUniqueInput
    data: XOR<EventUpdateWithoutPublishedByInput, EventUncheckedUpdateWithoutPublishedByInput>
  }

  export type EventUpdateManyWithWhereWithoutPublishedByInput = {
    where: EventScalarWhereInput
    data: XOR<EventUpdateManyMutationInput, EventUncheckedUpdateManyWithoutEventPublishedInput>
  }

  export type EventScalarWhereInput = {
    AND?: Enumerable<EventScalarWhereInput>
    OR?: Enumerable<EventScalarWhereInput>
    NOT?: Enumerable<EventScalarWhereInput>
    id?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    title?: StringFilter | string
    subtitle?: StringFilter | string
    description?: StringFilter | string
    principalImage?: StringFilter | string
    images?: StringNullableListFilter
    tags?: StringNullableListFilter
    startDate?: DateTimeFilter | Date | string
    endDate?: DateTimeNullableFilter | Date | string | null
    locationName?: StringFilter | string
    locationDetail?: StringNullableFilter | string | null
    address?: StringFilter | string
    longitud?: FloatNullableFilter | number | null
    latitud?: FloatNullableFilter | number | null
    status?: EnumEventStatusFilter | EventStatus
    publishedById?: StringNullableFilter | string | null
    requestEventId?: StringFilter | string
  }

  export type EventUpsertWithWhereUniqueWithoutLikedByInput = {
    where: EventWhereUniqueInput
    update: XOR<EventUpdateWithoutLikedByInput, EventUncheckedUpdateWithoutLikedByInput>
    create: XOR<EventCreateWithoutLikedByInput, EventUncheckedCreateWithoutLikedByInput>
  }

  export type EventUpdateWithWhereUniqueWithoutLikedByInput = {
    where: EventWhereUniqueInput
    data: XOR<EventUpdateWithoutLikedByInput, EventUncheckedUpdateWithoutLikedByInput>
  }

  export type EventUpdateManyWithWhereWithoutLikedByInput = {
    where: EventScalarWhereInput
    data: XOR<EventUpdateManyMutationInput, EventUncheckedUpdateManyWithoutLikedEventsInput>
  }

  export type EventUpsertWithWhereUniqueWithoutSavedByInput = {
    where: EventWhereUniqueInput
    update: XOR<EventUpdateWithoutSavedByInput, EventUncheckedUpdateWithoutSavedByInput>
    create: XOR<EventCreateWithoutSavedByInput, EventUncheckedCreateWithoutSavedByInput>
  }

  export type EventUpdateWithWhereUniqueWithoutSavedByInput = {
    where: EventWhereUniqueInput
    data: XOR<EventUpdateWithoutSavedByInput, EventUncheckedUpdateWithoutSavedByInput>
  }

  export type EventUpdateManyWithWhereWithoutSavedByInput = {
    where: EventScalarWhereInput
    data: XOR<EventUpdateManyMutationInput, EventUncheckedUpdateManyWithoutSavedEventsInput>
  }

  export type UserCreateWithoutNotificationPreferenceInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    last_name: string
    phone_number?: string | null
    user_name: string
    email: string
    password: string
    roles?: RoleCreateNestedManyWithoutUsersInput
    approvedRequested?: RequestEventCreateNestedManyWithoutApprovedByInput
    eventsRequested?: RequestEventCreateNestedManyWithoutRequestedByInput
    PasswordResetToken?: PasswordResetTokenCreateNestedManyWithoutUserInput
    eventPublished?: EventCreateNestedManyWithoutPublishedByInput
    likedEvents?: EventCreateNestedManyWithoutLikedByInput
    savedEvents?: EventCreateNestedManyWithoutSavedByInput
  }

  export type UserUncheckedCreateWithoutNotificationPreferenceInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    last_name: string
    phone_number?: string | null
    user_name: string
    email: string
    password: string
    roles?: RoleUncheckedCreateNestedManyWithoutUsersInput
    approvedRequested?: RequestEventUncheckedCreateNestedManyWithoutApprovedByInput
    eventsRequested?: RequestEventUncheckedCreateNestedManyWithoutRequestedByInput
    PasswordResetToken?: PasswordResetTokenUncheckedCreateNestedManyWithoutUserInput
    eventPublished?: EventUncheckedCreateNestedManyWithoutPublishedByInput
    likedEvents?: EventUncheckedCreateNestedManyWithoutLikedByInput
    savedEvents?: EventUncheckedCreateNestedManyWithoutSavedByInput
  }

  export type UserCreateOrConnectWithoutNotificationPreferenceInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutNotificationPreferenceInput, UserUncheckedCreateWithoutNotificationPreferenceInput>
  }

  export type UserUpsertWithoutNotificationPreferenceInput = {
    update: XOR<UserUpdateWithoutNotificationPreferenceInput, UserUncheckedUpdateWithoutNotificationPreferenceInput>
    create: XOR<UserCreateWithoutNotificationPreferenceInput, UserUncheckedCreateWithoutNotificationPreferenceInput>
  }

  export type UserUpdateWithoutNotificationPreferenceInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    user_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    roles?: RoleUpdateManyWithoutUsersNestedInput
    approvedRequested?: RequestEventUpdateManyWithoutApprovedByNestedInput
    eventsRequested?: RequestEventUpdateManyWithoutRequestedByNestedInput
    PasswordResetToken?: PasswordResetTokenUpdateManyWithoutUserNestedInput
    eventPublished?: EventUpdateManyWithoutPublishedByNestedInput
    likedEvents?: EventUpdateManyWithoutLikedByNestedInput
    savedEvents?: EventUpdateManyWithoutSavedByNestedInput
  }

  export type UserUncheckedUpdateWithoutNotificationPreferenceInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    user_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    roles?: RoleUncheckedUpdateManyWithoutUsersNestedInput
    approvedRequested?: RequestEventUncheckedUpdateManyWithoutApprovedByNestedInput
    eventsRequested?: RequestEventUncheckedUpdateManyWithoutRequestedByNestedInput
    PasswordResetToken?: PasswordResetTokenUncheckedUpdateManyWithoutUserNestedInput
    eventPublished?: EventUncheckedUpdateManyWithoutPublishedByNestedInput
    likedEvents?: EventUncheckedUpdateManyWithoutLikedByNestedInput
    savedEvents?: EventUncheckedUpdateManyWithoutSavedByNestedInput
  }

  export type UserCreateWithoutRolesInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    last_name: string
    phone_number?: string | null
    user_name: string
    email: string
    password: string
    notificationPreference?: NotificationPreferenceCreateNestedOneWithoutUserInput
    approvedRequested?: RequestEventCreateNestedManyWithoutApprovedByInput
    eventsRequested?: RequestEventCreateNestedManyWithoutRequestedByInput
    PasswordResetToken?: PasswordResetTokenCreateNestedManyWithoutUserInput
    eventPublished?: EventCreateNestedManyWithoutPublishedByInput
    likedEvents?: EventCreateNestedManyWithoutLikedByInput
    savedEvents?: EventCreateNestedManyWithoutSavedByInput
  }

  export type UserUncheckedCreateWithoutRolesInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    last_name: string
    phone_number?: string | null
    user_name: string
    email: string
    password: string
    notificationPreference?: NotificationPreferenceUncheckedCreateNestedOneWithoutUserInput
    approvedRequested?: RequestEventUncheckedCreateNestedManyWithoutApprovedByInput
    eventsRequested?: RequestEventUncheckedCreateNestedManyWithoutRequestedByInput
    PasswordResetToken?: PasswordResetTokenUncheckedCreateNestedManyWithoutUserInput
    eventPublished?: EventUncheckedCreateNestedManyWithoutPublishedByInput
    likedEvents?: EventUncheckedCreateNestedManyWithoutLikedByInput
    savedEvents?: EventUncheckedCreateNestedManyWithoutSavedByInput
  }

  export type UserCreateOrConnectWithoutRolesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRolesInput, UserUncheckedCreateWithoutRolesInput>
  }

  export type UserUpsertWithWhereUniqueWithoutRolesInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutRolesInput, UserUncheckedUpdateWithoutRolesInput>
    create: XOR<UserCreateWithoutRolesInput, UserUncheckedCreateWithoutRolesInput>
  }

  export type UserUpdateWithWhereUniqueWithoutRolesInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutRolesInput, UserUncheckedUpdateWithoutRolesInput>
  }

  export type UserUpdateManyWithWhereWithoutRolesInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutUsersInput>
  }

  export type UserScalarWhereInput = {
    AND?: Enumerable<UserScalarWhereInput>
    OR?: Enumerable<UserScalarWhereInput>
    NOT?: Enumerable<UserScalarWhereInput>
    id?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    name?: StringFilter | string
    last_name?: StringFilter | string
    phone_number?: StringNullableFilter | string | null
    user_name?: StringFilter | string
    email?: StringFilter | string
    password?: StringFilter | string
  }

  export type UserCreateWithoutPasswordResetTokenInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    last_name: string
    phone_number?: string | null
    user_name: string
    email: string
    password: string
    roles?: RoleCreateNestedManyWithoutUsersInput
    notificationPreference?: NotificationPreferenceCreateNestedOneWithoutUserInput
    approvedRequested?: RequestEventCreateNestedManyWithoutApprovedByInput
    eventsRequested?: RequestEventCreateNestedManyWithoutRequestedByInput
    eventPublished?: EventCreateNestedManyWithoutPublishedByInput
    likedEvents?: EventCreateNestedManyWithoutLikedByInput
    savedEvents?: EventCreateNestedManyWithoutSavedByInput
  }

  export type UserUncheckedCreateWithoutPasswordResetTokenInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    last_name: string
    phone_number?: string | null
    user_name: string
    email: string
    password: string
    roles?: RoleUncheckedCreateNestedManyWithoutUsersInput
    notificationPreference?: NotificationPreferenceUncheckedCreateNestedOneWithoutUserInput
    approvedRequested?: RequestEventUncheckedCreateNestedManyWithoutApprovedByInput
    eventsRequested?: RequestEventUncheckedCreateNestedManyWithoutRequestedByInput
    eventPublished?: EventUncheckedCreateNestedManyWithoutPublishedByInput
    likedEvents?: EventUncheckedCreateNestedManyWithoutLikedByInput
    savedEvents?: EventUncheckedCreateNestedManyWithoutSavedByInput
  }

  export type UserCreateOrConnectWithoutPasswordResetTokenInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPasswordResetTokenInput, UserUncheckedCreateWithoutPasswordResetTokenInput>
  }

  export type UserUpsertWithoutPasswordResetTokenInput = {
    update: XOR<UserUpdateWithoutPasswordResetTokenInput, UserUncheckedUpdateWithoutPasswordResetTokenInput>
    create: XOR<UserCreateWithoutPasswordResetTokenInput, UserUncheckedCreateWithoutPasswordResetTokenInput>
  }

  export type UserUpdateWithoutPasswordResetTokenInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    user_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    roles?: RoleUpdateManyWithoutUsersNestedInput
    notificationPreference?: NotificationPreferenceUpdateOneWithoutUserNestedInput
    approvedRequested?: RequestEventUpdateManyWithoutApprovedByNestedInput
    eventsRequested?: RequestEventUpdateManyWithoutRequestedByNestedInput
    eventPublished?: EventUpdateManyWithoutPublishedByNestedInput
    likedEvents?: EventUpdateManyWithoutLikedByNestedInput
    savedEvents?: EventUpdateManyWithoutSavedByNestedInput
  }

  export type UserUncheckedUpdateWithoutPasswordResetTokenInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    user_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    roles?: RoleUncheckedUpdateManyWithoutUsersNestedInput
    notificationPreference?: NotificationPreferenceUncheckedUpdateOneWithoutUserNestedInput
    approvedRequested?: RequestEventUncheckedUpdateManyWithoutApprovedByNestedInput
    eventsRequested?: RequestEventUncheckedUpdateManyWithoutRequestedByNestedInput
    eventPublished?: EventUncheckedUpdateManyWithoutPublishedByNestedInput
    likedEvents?: EventUncheckedUpdateManyWithoutLikedByNestedInput
    savedEvents?: EventUncheckedUpdateManyWithoutSavedByNestedInput
  }

  export type UserCreateWithoutEventsRequestedInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    last_name: string
    phone_number?: string | null
    user_name: string
    email: string
    password: string
    roles?: RoleCreateNestedManyWithoutUsersInput
    notificationPreference?: NotificationPreferenceCreateNestedOneWithoutUserInput
    approvedRequested?: RequestEventCreateNestedManyWithoutApprovedByInput
    PasswordResetToken?: PasswordResetTokenCreateNestedManyWithoutUserInput
    eventPublished?: EventCreateNestedManyWithoutPublishedByInput
    likedEvents?: EventCreateNestedManyWithoutLikedByInput
    savedEvents?: EventCreateNestedManyWithoutSavedByInput
  }

  export type UserUncheckedCreateWithoutEventsRequestedInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    last_name: string
    phone_number?: string | null
    user_name: string
    email: string
    password: string
    roles?: RoleUncheckedCreateNestedManyWithoutUsersInput
    notificationPreference?: NotificationPreferenceUncheckedCreateNestedOneWithoutUserInput
    approvedRequested?: RequestEventUncheckedCreateNestedManyWithoutApprovedByInput
    PasswordResetToken?: PasswordResetTokenUncheckedCreateNestedManyWithoutUserInput
    eventPublished?: EventUncheckedCreateNestedManyWithoutPublishedByInput
    likedEvents?: EventUncheckedCreateNestedManyWithoutLikedByInput
    savedEvents?: EventUncheckedCreateNestedManyWithoutSavedByInput
  }

  export type UserCreateOrConnectWithoutEventsRequestedInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutEventsRequestedInput, UserUncheckedCreateWithoutEventsRequestedInput>
  }

  export type UserCreateWithoutApprovedRequestedInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    last_name: string
    phone_number?: string | null
    user_name: string
    email: string
    password: string
    roles?: RoleCreateNestedManyWithoutUsersInput
    notificationPreference?: NotificationPreferenceCreateNestedOneWithoutUserInput
    eventsRequested?: RequestEventCreateNestedManyWithoutRequestedByInput
    PasswordResetToken?: PasswordResetTokenCreateNestedManyWithoutUserInput
    eventPublished?: EventCreateNestedManyWithoutPublishedByInput
    likedEvents?: EventCreateNestedManyWithoutLikedByInput
    savedEvents?: EventCreateNestedManyWithoutSavedByInput
  }

  export type UserUncheckedCreateWithoutApprovedRequestedInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    last_name: string
    phone_number?: string | null
    user_name: string
    email: string
    password: string
    roles?: RoleUncheckedCreateNestedManyWithoutUsersInput
    notificationPreference?: NotificationPreferenceUncheckedCreateNestedOneWithoutUserInput
    eventsRequested?: RequestEventUncheckedCreateNestedManyWithoutRequestedByInput
    PasswordResetToken?: PasswordResetTokenUncheckedCreateNestedManyWithoutUserInput
    eventPublished?: EventUncheckedCreateNestedManyWithoutPublishedByInput
    likedEvents?: EventUncheckedCreateNestedManyWithoutLikedByInput
    savedEvents?: EventUncheckedCreateNestedManyWithoutSavedByInput
  }

  export type UserCreateOrConnectWithoutApprovedRequestedInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutApprovedRequestedInput, UserUncheckedCreateWithoutApprovedRequestedInput>
  }

  export type EventCreateWithoutRequestEventInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    title: string
    subtitle: string
    description: string
    principalImage: string
    images?: EventCreateimagesInput | Enumerable<string>
    tags?: EventCreatetagsInput | Enumerable<string>
    startDate: Date | string
    endDate?: Date | string | null
    locationName: string
    locationDetail?: string | null
    address: string
    longitud?: number | null
    latitud?: number | null
    status?: EventStatus
    publishedBy?: UserCreateNestedOneWithoutEventPublishedInput
    likedBy?: UserCreateNestedManyWithoutLikedEventsInput
    savedBy?: UserCreateNestedManyWithoutSavedEventsInput
  }

  export type EventUncheckedCreateWithoutRequestEventInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    title: string
    subtitle: string
    description: string
    principalImage: string
    images?: EventCreateimagesInput | Enumerable<string>
    tags?: EventCreatetagsInput | Enumerable<string>
    startDate: Date | string
    endDate?: Date | string | null
    locationName: string
    locationDetail?: string | null
    address: string
    longitud?: number | null
    latitud?: number | null
    status?: EventStatus
    publishedById?: string | null
    likedBy?: UserUncheckedCreateNestedManyWithoutLikedEventsInput
    savedBy?: UserUncheckedCreateNestedManyWithoutSavedEventsInput
  }

  export type EventCreateOrConnectWithoutRequestEventInput = {
    where: EventWhereUniqueInput
    create: XOR<EventCreateWithoutRequestEventInput, EventUncheckedCreateWithoutRequestEventInput>
  }

  export type UserUpsertWithoutEventsRequestedInput = {
    update: XOR<UserUpdateWithoutEventsRequestedInput, UserUncheckedUpdateWithoutEventsRequestedInput>
    create: XOR<UserCreateWithoutEventsRequestedInput, UserUncheckedCreateWithoutEventsRequestedInput>
  }

  export type UserUpdateWithoutEventsRequestedInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    user_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    roles?: RoleUpdateManyWithoutUsersNestedInput
    notificationPreference?: NotificationPreferenceUpdateOneWithoutUserNestedInput
    approvedRequested?: RequestEventUpdateManyWithoutApprovedByNestedInput
    PasswordResetToken?: PasswordResetTokenUpdateManyWithoutUserNestedInput
    eventPublished?: EventUpdateManyWithoutPublishedByNestedInput
    likedEvents?: EventUpdateManyWithoutLikedByNestedInput
    savedEvents?: EventUpdateManyWithoutSavedByNestedInput
  }

  export type UserUncheckedUpdateWithoutEventsRequestedInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    user_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    roles?: RoleUncheckedUpdateManyWithoutUsersNestedInput
    notificationPreference?: NotificationPreferenceUncheckedUpdateOneWithoutUserNestedInput
    approvedRequested?: RequestEventUncheckedUpdateManyWithoutApprovedByNestedInput
    PasswordResetToken?: PasswordResetTokenUncheckedUpdateManyWithoutUserNestedInput
    eventPublished?: EventUncheckedUpdateManyWithoutPublishedByNestedInput
    likedEvents?: EventUncheckedUpdateManyWithoutLikedByNestedInput
    savedEvents?: EventUncheckedUpdateManyWithoutSavedByNestedInput
  }

  export type UserUpsertWithoutApprovedRequestedInput = {
    update: XOR<UserUpdateWithoutApprovedRequestedInput, UserUncheckedUpdateWithoutApprovedRequestedInput>
    create: XOR<UserCreateWithoutApprovedRequestedInput, UserUncheckedCreateWithoutApprovedRequestedInput>
  }

  export type UserUpdateWithoutApprovedRequestedInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    user_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    roles?: RoleUpdateManyWithoutUsersNestedInput
    notificationPreference?: NotificationPreferenceUpdateOneWithoutUserNestedInput
    eventsRequested?: RequestEventUpdateManyWithoutRequestedByNestedInput
    PasswordResetToken?: PasswordResetTokenUpdateManyWithoutUserNestedInput
    eventPublished?: EventUpdateManyWithoutPublishedByNestedInput
    likedEvents?: EventUpdateManyWithoutLikedByNestedInput
    savedEvents?: EventUpdateManyWithoutSavedByNestedInput
  }

  export type UserUncheckedUpdateWithoutApprovedRequestedInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    user_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    roles?: RoleUncheckedUpdateManyWithoutUsersNestedInput
    notificationPreference?: NotificationPreferenceUncheckedUpdateOneWithoutUserNestedInput
    eventsRequested?: RequestEventUncheckedUpdateManyWithoutRequestedByNestedInput
    PasswordResetToken?: PasswordResetTokenUncheckedUpdateManyWithoutUserNestedInput
    eventPublished?: EventUncheckedUpdateManyWithoutPublishedByNestedInput
    likedEvents?: EventUncheckedUpdateManyWithoutLikedByNestedInput
    savedEvents?: EventUncheckedUpdateManyWithoutSavedByNestedInput
  }

  export type EventUpsertWithoutRequestEventInput = {
    update: XOR<EventUpdateWithoutRequestEventInput, EventUncheckedUpdateWithoutRequestEventInput>
    create: XOR<EventCreateWithoutRequestEventInput, EventUncheckedCreateWithoutRequestEventInput>
  }

  export type EventUpdateWithoutRequestEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    subtitle?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    principalImage?: StringFieldUpdateOperationsInput | string
    images?: EventUpdateimagesInput | Enumerable<string>
    tags?: EventUpdatetagsInput | Enumerable<string>
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    locationName?: StringFieldUpdateOperationsInput | string
    locationDetail?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    longitud?: NullableFloatFieldUpdateOperationsInput | number | null
    latitud?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: EnumEventStatusFieldUpdateOperationsInput | EventStatus
    publishedBy?: UserUpdateOneWithoutEventPublishedNestedInput
    likedBy?: UserUpdateManyWithoutLikedEventsNestedInput
    savedBy?: UserUpdateManyWithoutSavedEventsNestedInput
  }

  export type EventUncheckedUpdateWithoutRequestEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    subtitle?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    principalImage?: StringFieldUpdateOperationsInput | string
    images?: EventUpdateimagesInput | Enumerable<string>
    tags?: EventUpdatetagsInput | Enumerable<string>
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    locationName?: StringFieldUpdateOperationsInput | string
    locationDetail?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    longitud?: NullableFloatFieldUpdateOperationsInput | number | null
    latitud?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: EnumEventStatusFieldUpdateOperationsInput | EventStatus
    publishedById?: NullableStringFieldUpdateOperationsInput | string | null
    likedBy?: UserUncheckedUpdateManyWithoutLikedEventsNestedInput
    savedBy?: UserUncheckedUpdateManyWithoutSavedEventsNestedInput
  }

  export type UserCreateWithoutEventPublishedInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    last_name: string
    phone_number?: string | null
    user_name: string
    email: string
    password: string
    roles?: RoleCreateNestedManyWithoutUsersInput
    notificationPreference?: NotificationPreferenceCreateNestedOneWithoutUserInput
    approvedRequested?: RequestEventCreateNestedManyWithoutApprovedByInput
    eventsRequested?: RequestEventCreateNestedManyWithoutRequestedByInput
    PasswordResetToken?: PasswordResetTokenCreateNestedManyWithoutUserInput
    likedEvents?: EventCreateNestedManyWithoutLikedByInput
    savedEvents?: EventCreateNestedManyWithoutSavedByInput
  }

  export type UserUncheckedCreateWithoutEventPublishedInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    last_name: string
    phone_number?: string | null
    user_name: string
    email: string
    password: string
    roles?: RoleUncheckedCreateNestedManyWithoutUsersInput
    notificationPreference?: NotificationPreferenceUncheckedCreateNestedOneWithoutUserInput
    approvedRequested?: RequestEventUncheckedCreateNestedManyWithoutApprovedByInput
    eventsRequested?: RequestEventUncheckedCreateNestedManyWithoutRequestedByInput
    PasswordResetToken?: PasswordResetTokenUncheckedCreateNestedManyWithoutUserInput
    likedEvents?: EventUncheckedCreateNestedManyWithoutLikedByInput
    savedEvents?: EventUncheckedCreateNestedManyWithoutSavedByInput
  }

  export type UserCreateOrConnectWithoutEventPublishedInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutEventPublishedInput, UserUncheckedCreateWithoutEventPublishedInput>
  }

  export type RequestEventCreateWithoutEventInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    title?: string
    subtitle: string
    description: string
    startDate: Date | string
    endDate?: Date | string | null
    locationName: string
    locationDetail?: string | null
    address: string
    requestedBy: UserCreateNestedOneWithoutEventsRequestedInput
    approvedBy?: UserCreateNestedOneWithoutApprovedRequestedInput
    status?: RequestEventStatus
  }

  export type RequestEventUncheckedCreateWithoutEventInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    title?: string
    subtitle: string
    description: string
    startDate: Date | string
    endDate?: Date | string | null
    locationName: string
    locationDetail?: string | null
    address: string
    requestedById: string
    approvedById?: string | null
    status?: RequestEventStatus
  }

  export type RequestEventCreateOrConnectWithoutEventInput = {
    where: RequestEventWhereUniqueInput
    create: XOR<RequestEventCreateWithoutEventInput, RequestEventUncheckedCreateWithoutEventInput>
  }

  export type UserCreateWithoutLikedEventsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    last_name: string
    phone_number?: string | null
    user_name: string
    email: string
    password: string
    roles?: RoleCreateNestedManyWithoutUsersInput
    notificationPreference?: NotificationPreferenceCreateNestedOneWithoutUserInput
    approvedRequested?: RequestEventCreateNestedManyWithoutApprovedByInput
    eventsRequested?: RequestEventCreateNestedManyWithoutRequestedByInput
    PasswordResetToken?: PasswordResetTokenCreateNestedManyWithoutUserInput
    eventPublished?: EventCreateNestedManyWithoutPublishedByInput
    savedEvents?: EventCreateNestedManyWithoutSavedByInput
  }

  export type UserUncheckedCreateWithoutLikedEventsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    last_name: string
    phone_number?: string | null
    user_name: string
    email: string
    password: string
    roles?: RoleUncheckedCreateNestedManyWithoutUsersInput
    notificationPreference?: NotificationPreferenceUncheckedCreateNestedOneWithoutUserInput
    approvedRequested?: RequestEventUncheckedCreateNestedManyWithoutApprovedByInput
    eventsRequested?: RequestEventUncheckedCreateNestedManyWithoutRequestedByInput
    PasswordResetToken?: PasswordResetTokenUncheckedCreateNestedManyWithoutUserInput
    eventPublished?: EventUncheckedCreateNestedManyWithoutPublishedByInput
    savedEvents?: EventUncheckedCreateNestedManyWithoutSavedByInput
  }

  export type UserCreateOrConnectWithoutLikedEventsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutLikedEventsInput, UserUncheckedCreateWithoutLikedEventsInput>
  }

  export type UserCreateWithoutSavedEventsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    last_name: string
    phone_number?: string | null
    user_name: string
    email: string
    password: string
    roles?: RoleCreateNestedManyWithoutUsersInput
    notificationPreference?: NotificationPreferenceCreateNestedOneWithoutUserInput
    approvedRequested?: RequestEventCreateNestedManyWithoutApprovedByInput
    eventsRequested?: RequestEventCreateNestedManyWithoutRequestedByInput
    PasswordResetToken?: PasswordResetTokenCreateNestedManyWithoutUserInput
    eventPublished?: EventCreateNestedManyWithoutPublishedByInput
    likedEvents?: EventCreateNestedManyWithoutLikedByInput
  }

  export type UserUncheckedCreateWithoutSavedEventsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    last_name: string
    phone_number?: string | null
    user_name: string
    email: string
    password: string
    roles?: RoleUncheckedCreateNestedManyWithoutUsersInput
    notificationPreference?: NotificationPreferenceUncheckedCreateNestedOneWithoutUserInput
    approvedRequested?: RequestEventUncheckedCreateNestedManyWithoutApprovedByInput
    eventsRequested?: RequestEventUncheckedCreateNestedManyWithoutRequestedByInput
    PasswordResetToken?: PasswordResetTokenUncheckedCreateNestedManyWithoutUserInput
    eventPublished?: EventUncheckedCreateNestedManyWithoutPublishedByInput
    likedEvents?: EventUncheckedCreateNestedManyWithoutLikedByInput
  }

  export type UserCreateOrConnectWithoutSavedEventsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSavedEventsInput, UserUncheckedCreateWithoutSavedEventsInput>
  }

  export type UserUpsertWithoutEventPublishedInput = {
    update: XOR<UserUpdateWithoutEventPublishedInput, UserUncheckedUpdateWithoutEventPublishedInput>
    create: XOR<UserCreateWithoutEventPublishedInput, UserUncheckedCreateWithoutEventPublishedInput>
  }

  export type UserUpdateWithoutEventPublishedInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    user_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    roles?: RoleUpdateManyWithoutUsersNestedInput
    notificationPreference?: NotificationPreferenceUpdateOneWithoutUserNestedInput
    approvedRequested?: RequestEventUpdateManyWithoutApprovedByNestedInput
    eventsRequested?: RequestEventUpdateManyWithoutRequestedByNestedInput
    PasswordResetToken?: PasswordResetTokenUpdateManyWithoutUserNestedInput
    likedEvents?: EventUpdateManyWithoutLikedByNestedInput
    savedEvents?: EventUpdateManyWithoutSavedByNestedInput
  }

  export type UserUncheckedUpdateWithoutEventPublishedInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    user_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    roles?: RoleUncheckedUpdateManyWithoutUsersNestedInput
    notificationPreference?: NotificationPreferenceUncheckedUpdateOneWithoutUserNestedInput
    approvedRequested?: RequestEventUncheckedUpdateManyWithoutApprovedByNestedInput
    eventsRequested?: RequestEventUncheckedUpdateManyWithoutRequestedByNestedInput
    PasswordResetToken?: PasswordResetTokenUncheckedUpdateManyWithoutUserNestedInput
    likedEvents?: EventUncheckedUpdateManyWithoutLikedByNestedInput
    savedEvents?: EventUncheckedUpdateManyWithoutSavedByNestedInput
  }

  export type RequestEventUpsertWithoutEventInput = {
    update: XOR<RequestEventUpdateWithoutEventInput, RequestEventUncheckedUpdateWithoutEventInput>
    create: XOR<RequestEventCreateWithoutEventInput, RequestEventUncheckedCreateWithoutEventInput>
  }

  export type RequestEventUpdateWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    subtitle?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    locationName?: StringFieldUpdateOperationsInput | string
    locationDetail?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    requestedBy?: UserUpdateOneRequiredWithoutEventsRequestedNestedInput
    approvedBy?: UserUpdateOneWithoutApprovedRequestedNestedInput
    status?: EnumRequestEventStatusFieldUpdateOperationsInput | RequestEventStatus
  }

  export type RequestEventUncheckedUpdateWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    subtitle?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    locationName?: StringFieldUpdateOperationsInput | string
    locationDetail?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    requestedById?: StringFieldUpdateOperationsInput | string
    approvedById?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumRequestEventStatusFieldUpdateOperationsInput | RequestEventStatus
  }

  export type UserUpsertWithWhereUniqueWithoutLikedEventsInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutLikedEventsInput, UserUncheckedUpdateWithoutLikedEventsInput>
    create: XOR<UserCreateWithoutLikedEventsInput, UserUncheckedCreateWithoutLikedEventsInput>
  }

  export type UserUpdateWithWhereUniqueWithoutLikedEventsInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutLikedEventsInput, UserUncheckedUpdateWithoutLikedEventsInput>
  }

  export type UserUpdateManyWithWhereWithoutLikedEventsInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutLikedByInput>
  }

  export type UserUpsertWithWhereUniqueWithoutSavedEventsInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutSavedEventsInput, UserUncheckedUpdateWithoutSavedEventsInput>
    create: XOR<UserCreateWithoutSavedEventsInput, UserUncheckedCreateWithoutSavedEventsInput>
  }

  export type UserUpdateWithWhereUniqueWithoutSavedEventsInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutSavedEventsInput, UserUncheckedUpdateWithoutSavedEventsInput>
  }

  export type UserUpdateManyWithWhereWithoutSavedEventsInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutSavedByInput>
  }

  export type RequestEventCreateManyApprovedByInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    title?: string
    subtitle: string
    description: string
    startDate: Date | string
    endDate?: Date | string | null
    locationName: string
    locationDetail?: string | null
    address: string
    requestedById: string
    status?: RequestEventStatus
  }

  export type RequestEventCreateManyRequestedByInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    title?: string
    subtitle: string
    description: string
    startDate: Date | string
    endDate?: Date | string | null
    locationName: string
    locationDetail?: string | null
    address: string
    approvedById?: string | null
    status?: RequestEventStatus
  }

  export type PasswordResetTokenCreateManyUserInput = {
    id?: number
    token: string
    expiration_date: Date | string
    deactivated?: boolean
  }

  export type EventCreateManyPublishedByInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    title: string
    subtitle: string
    description: string
    principalImage: string
    images?: EventCreateimagesInput | Enumerable<string>
    tags?: EventCreatetagsInput | Enumerable<string>
    startDate: Date | string
    endDate?: Date | string | null
    locationName: string
    locationDetail?: string | null
    address: string
    longitud?: number | null
    latitud?: number | null
    status?: EventStatus
    requestEventId: string
  }

  export type RoleUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: EnumRoleTypeFieldUpdateOperationsInput | RoleType
    description?: StringFieldUpdateOperationsInput | string
  }

  export type RoleUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: EnumRoleTypeFieldUpdateOperationsInput | RoleType
    description?: StringFieldUpdateOperationsInput | string
  }

  export type RoleUncheckedUpdateManyWithoutRolesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: EnumRoleTypeFieldUpdateOperationsInput | RoleType
    description?: StringFieldUpdateOperationsInput | string
  }

  export type RequestEventUpdateWithoutApprovedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    subtitle?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    locationName?: StringFieldUpdateOperationsInput | string
    locationDetail?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    requestedBy?: UserUpdateOneRequiredWithoutEventsRequestedNestedInput
    status?: EnumRequestEventStatusFieldUpdateOperationsInput | RequestEventStatus
    Event?: EventUpdateOneWithoutRequestEventNestedInput
  }

  export type RequestEventUncheckedUpdateWithoutApprovedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    subtitle?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    locationName?: StringFieldUpdateOperationsInput | string
    locationDetail?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    requestedById?: StringFieldUpdateOperationsInput | string
    status?: EnumRequestEventStatusFieldUpdateOperationsInput | RequestEventStatus
    Event?: EventUncheckedUpdateOneWithoutRequestEventNestedInput
  }

  export type RequestEventUncheckedUpdateManyWithoutApprovedRequestedInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    subtitle?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    locationName?: StringFieldUpdateOperationsInput | string
    locationDetail?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    requestedById?: StringFieldUpdateOperationsInput | string
    status?: EnumRequestEventStatusFieldUpdateOperationsInput | RequestEventStatus
  }

  export type RequestEventUpdateWithoutRequestedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    subtitle?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    locationName?: StringFieldUpdateOperationsInput | string
    locationDetail?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    approvedBy?: UserUpdateOneWithoutApprovedRequestedNestedInput
    status?: EnumRequestEventStatusFieldUpdateOperationsInput | RequestEventStatus
    Event?: EventUpdateOneWithoutRequestEventNestedInput
  }

  export type RequestEventUncheckedUpdateWithoutRequestedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    subtitle?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    locationName?: StringFieldUpdateOperationsInput | string
    locationDetail?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    approvedById?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumRequestEventStatusFieldUpdateOperationsInput | RequestEventStatus
    Event?: EventUncheckedUpdateOneWithoutRequestEventNestedInput
  }

  export type RequestEventUncheckedUpdateManyWithoutEventsRequestedInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    subtitle?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    locationName?: StringFieldUpdateOperationsInput | string
    locationDetail?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    approvedById?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumRequestEventStatusFieldUpdateOperationsInput | RequestEventStatus
  }

  export type PasswordResetTokenUpdateWithoutUserInput = {
    token?: StringFieldUpdateOperationsInput | string
    expiration_date?: DateTimeFieldUpdateOperationsInput | Date | string
    deactivated?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PasswordResetTokenUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    token?: StringFieldUpdateOperationsInput | string
    expiration_date?: DateTimeFieldUpdateOperationsInput | Date | string
    deactivated?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PasswordResetTokenUncheckedUpdateManyWithoutPasswordResetTokenInput = {
    id?: IntFieldUpdateOperationsInput | number
    token?: StringFieldUpdateOperationsInput | string
    expiration_date?: DateTimeFieldUpdateOperationsInput | Date | string
    deactivated?: BoolFieldUpdateOperationsInput | boolean
  }

  export type EventUpdateWithoutPublishedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    subtitle?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    principalImage?: StringFieldUpdateOperationsInput | string
    images?: EventUpdateimagesInput | Enumerable<string>
    tags?: EventUpdatetagsInput | Enumerable<string>
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    locationName?: StringFieldUpdateOperationsInput | string
    locationDetail?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    longitud?: NullableFloatFieldUpdateOperationsInput | number | null
    latitud?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: EnumEventStatusFieldUpdateOperationsInput | EventStatus
    requestEvent?: RequestEventUpdateOneWithoutEventNestedInput
    likedBy?: UserUpdateManyWithoutLikedEventsNestedInput
    savedBy?: UserUpdateManyWithoutSavedEventsNestedInput
  }

  export type EventUncheckedUpdateWithoutPublishedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    subtitle?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    principalImage?: StringFieldUpdateOperationsInput | string
    images?: EventUpdateimagesInput | Enumerable<string>
    tags?: EventUpdatetagsInput | Enumerable<string>
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    locationName?: StringFieldUpdateOperationsInput | string
    locationDetail?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    longitud?: NullableFloatFieldUpdateOperationsInput | number | null
    latitud?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: EnumEventStatusFieldUpdateOperationsInput | EventStatus
    requestEventId?: StringFieldUpdateOperationsInput | string
    likedBy?: UserUncheckedUpdateManyWithoutLikedEventsNestedInput
    savedBy?: UserUncheckedUpdateManyWithoutSavedEventsNestedInput
  }

  export type EventUncheckedUpdateManyWithoutEventPublishedInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    subtitle?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    principalImage?: StringFieldUpdateOperationsInput | string
    images?: EventUpdateimagesInput | Enumerable<string>
    tags?: EventUpdatetagsInput | Enumerable<string>
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    locationName?: StringFieldUpdateOperationsInput | string
    locationDetail?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    longitud?: NullableFloatFieldUpdateOperationsInput | number | null
    latitud?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: EnumEventStatusFieldUpdateOperationsInput | EventStatus
    requestEventId?: StringFieldUpdateOperationsInput | string
  }

  export type EventUpdateWithoutLikedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    subtitle?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    principalImage?: StringFieldUpdateOperationsInput | string
    images?: EventUpdateimagesInput | Enumerable<string>
    tags?: EventUpdatetagsInput | Enumerable<string>
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    locationName?: StringFieldUpdateOperationsInput | string
    locationDetail?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    longitud?: NullableFloatFieldUpdateOperationsInput | number | null
    latitud?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: EnumEventStatusFieldUpdateOperationsInput | EventStatus
    publishedBy?: UserUpdateOneWithoutEventPublishedNestedInput
    requestEvent?: RequestEventUpdateOneWithoutEventNestedInput
    savedBy?: UserUpdateManyWithoutSavedEventsNestedInput
  }

  export type EventUncheckedUpdateWithoutLikedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    subtitle?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    principalImage?: StringFieldUpdateOperationsInput | string
    images?: EventUpdateimagesInput | Enumerable<string>
    tags?: EventUpdatetagsInput | Enumerable<string>
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    locationName?: StringFieldUpdateOperationsInput | string
    locationDetail?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    longitud?: NullableFloatFieldUpdateOperationsInput | number | null
    latitud?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: EnumEventStatusFieldUpdateOperationsInput | EventStatus
    publishedById?: NullableStringFieldUpdateOperationsInput | string | null
    requestEventId?: StringFieldUpdateOperationsInput | string
    savedBy?: UserUncheckedUpdateManyWithoutSavedEventsNestedInput
  }

  export type EventUncheckedUpdateManyWithoutLikedEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    subtitle?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    principalImage?: StringFieldUpdateOperationsInput | string
    images?: EventUpdateimagesInput | Enumerable<string>
    tags?: EventUpdatetagsInput | Enumerable<string>
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    locationName?: StringFieldUpdateOperationsInput | string
    locationDetail?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    longitud?: NullableFloatFieldUpdateOperationsInput | number | null
    latitud?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: EnumEventStatusFieldUpdateOperationsInput | EventStatus
    publishedById?: NullableStringFieldUpdateOperationsInput | string | null
    requestEventId?: StringFieldUpdateOperationsInput | string
  }

  export type EventUpdateWithoutSavedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    subtitle?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    principalImage?: StringFieldUpdateOperationsInput | string
    images?: EventUpdateimagesInput | Enumerable<string>
    tags?: EventUpdatetagsInput | Enumerable<string>
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    locationName?: StringFieldUpdateOperationsInput | string
    locationDetail?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    longitud?: NullableFloatFieldUpdateOperationsInput | number | null
    latitud?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: EnumEventStatusFieldUpdateOperationsInput | EventStatus
    publishedBy?: UserUpdateOneWithoutEventPublishedNestedInput
    requestEvent?: RequestEventUpdateOneWithoutEventNestedInput
    likedBy?: UserUpdateManyWithoutLikedEventsNestedInput
  }

  export type EventUncheckedUpdateWithoutSavedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    subtitle?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    principalImage?: StringFieldUpdateOperationsInput | string
    images?: EventUpdateimagesInput | Enumerable<string>
    tags?: EventUpdatetagsInput | Enumerable<string>
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    locationName?: StringFieldUpdateOperationsInput | string
    locationDetail?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    longitud?: NullableFloatFieldUpdateOperationsInput | number | null
    latitud?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: EnumEventStatusFieldUpdateOperationsInput | EventStatus
    publishedById?: NullableStringFieldUpdateOperationsInput | string | null
    requestEventId?: StringFieldUpdateOperationsInput | string
    likedBy?: UserUncheckedUpdateManyWithoutLikedEventsNestedInput
  }

  export type EventUncheckedUpdateManyWithoutSavedEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    subtitle?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    principalImage?: StringFieldUpdateOperationsInput | string
    images?: EventUpdateimagesInput | Enumerable<string>
    tags?: EventUpdatetagsInput | Enumerable<string>
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    locationName?: StringFieldUpdateOperationsInput | string
    locationDetail?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    longitud?: NullableFloatFieldUpdateOperationsInput | number | null
    latitud?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: EnumEventStatusFieldUpdateOperationsInput | EventStatus
    publishedById?: NullableStringFieldUpdateOperationsInput | string | null
    requestEventId?: StringFieldUpdateOperationsInput | string
  }

  export type UserUpdateWithoutRolesInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    user_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    notificationPreference?: NotificationPreferenceUpdateOneWithoutUserNestedInput
    approvedRequested?: RequestEventUpdateManyWithoutApprovedByNestedInput
    eventsRequested?: RequestEventUpdateManyWithoutRequestedByNestedInput
    PasswordResetToken?: PasswordResetTokenUpdateManyWithoutUserNestedInput
    eventPublished?: EventUpdateManyWithoutPublishedByNestedInput
    likedEvents?: EventUpdateManyWithoutLikedByNestedInput
    savedEvents?: EventUpdateManyWithoutSavedByNestedInput
  }

  export type UserUncheckedUpdateWithoutRolesInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    user_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    notificationPreference?: NotificationPreferenceUncheckedUpdateOneWithoutUserNestedInput
    approvedRequested?: RequestEventUncheckedUpdateManyWithoutApprovedByNestedInput
    eventsRequested?: RequestEventUncheckedUpdateManyWithoutRequestedByNestedInput
    PasswordResetToken?: PasswordResetTokenUncheckedUpdateManyWithoutUserNestedInput
    eventPublished?: EventUncheckedUpdateManyWithoutPublishedByNestedInput
    likedEvents?: EventUncheckedUpdateManyWithoutLikedByNestedInput
    savedEvents?: EventUncheckedUpdateManyWithoutSavedByNestedInput
  }

  export type UserUncheckedUpdateManyWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    user_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type UserUpdateWithoutLikedEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    user_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    roles?: RoleUpdateManyWithoutUsersNestedInput
    notificationPreference?: NotificationPreferenceUpdateOneWithoutUserNestedInput
    approvedRequested?: RequestEventUpdateManyWithoutApprovedByNestedInput
    eventsRequested?: RequestEventUpdateManyWithoutRequestedByNestedInput
    PasswordResetToken?: PasswordResetTokenUpdateManyWithoutUserNestedInput
    eventPublished?: EventUpdateManyWithoutPublishedByNestedInput
    savedEvents?: EventUpdateManyWithoutSavedByNestedInput
  }

  export type UserUncheckedUpdateWithoutLikedEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    user_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    roles?: RoleUncheckedUpdateManyWithoutUsersNestedInput
    notificationPreference?: NotificationPreferenceUncheckedUpdateOneWithoutUserNestedInput
    approvedRequested?: RequestEventUncheckedUpdateManyWithoutApprovedByNestedInput
    eventsRequested?: RequestEventUncheckedUpdateManyWithoutRequestedByNestedInput
    PasswordResetToken?: PasswordResetTokenUncheckedUpdateManyWithoutUserNestedInput
    eventPublished?: EventUncheckedUpdateManyWithoutPublishedByNestedInput
    savedEvents?: EventUncheckedUpdateManyWithoutSavedByNestedInput
  }

  export type UserUncheckedUpdateManyWithoutLikedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    user_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type UserUpdateWithoutSavedEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    user_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    roles?: RoleUpdateManyWithoutUsersNestedInput
    notificationPreference?: NotificationPreferenceUpdateOneWithoutUserNestedInput
    approvedRequested?: RequestEventUpdateManyWithoutApprovedByNestedInput
    eventsRequested?: RequestEventUpdateManyWithoutRequestedByNestedInput
    PasswordResetToken?: PasswordResetTokenUpdateManyWithoutUserNestedInput
    eventPublished?: EventUpdateManyWithoutPublishedByNestedInput
    likedEvents?: EventUpdateManyWithoutLikedByNestedInput
  }

  export type UserUncheckedUpdateWithoutSavedEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    user_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    roles?: RoleUncheckedUpdateManyWithoutUsersNestedInput
    notificationPreference?: NotificationPreferenceUncheckedUpdateOneWithoutUserNestedInput
    approvedRequested?: RequestEventUncheckedUpdateManyWithoutApprovedByNestedInput
    eventsRequested?: RequestEventUncheckedUpdateManyWithoutRequestedByNestedInput
    PasswordResetToken?: PasswordResetTokenUncheckedUpdateManyWithoutUserNestedInput
    eventPublished?: EventUncheckedUpdateManyWithoutPublishedByNestedInput
    likedEvents?: EventUncheckedUpdateManyWithoutLikedByNestedInput
  }

  export type UserUncheckedUpdateManyWithoutSavedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    user_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
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