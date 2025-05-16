
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
 * Model Document
 * 
 */
export type Document = $Result.DefaultSelection<Prisma.$DocumentPayload>
/**
 * Model Approval
 * 
 */
export type Approval = $Result.DefaultSelection<Prisma.$ApprovalPayload>
/**
 * Model Comment
 * 
 */
export type Comment = $Result.DefaultSelection<Prisma.$CommentPayload>
/**
 * Model Notification
 * 
 */
export type Notification = $Result.DefaultSelection<Prisma.$NotificationPayload>
/**
 * Model Template
 * 
 */
export type Template = $Result.DefaultSelection<Prisma.$TemplatePayload>
/**
 * Model TemplateStep
 * 
 */
export type TemplateStep = $Result.DefaultSelection<Prisma.$TemplateStepPayload>
/**
 * Model Audit
 * 
 */
export type Audit = $Result.DefaultSelection<Prisma.$AuditPayload>
/**
 * Model CapexForm
 * 
 */
export type CapexForm = $Result.DefaultSelection<Prisma.$CapexFormPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  ADMIN: 'ADMIN',
  APPROVER: 'APPROVER',
  INITIATOR: 'INITIATOR'
};

export type Role = (typeof Role)[keyof typeof Role]


export const DocumentStatus: {
  PENDING: 'PENDING',
  IN_PROGRESS: 'IN_PROGRESS',
  APPROVED: 'APPROVED',
  REJECTED: 'REJECTED',
  REVISION_REQUESTED: 'REVISION_REQUESTED'
};

export type DocumentStatus = (typeof DocumentStatus)[keyof typeof DocumentStatus]


export const ApprovalStatus: {
  PENDING: 'PENDING',
  APPROVED: 'APPROVED',
  REJECTED: 'REJECTED',
  REVISION_REQUESTED: 'REVISION_REQUESTED'
};

export type ApprovalStatus = (typeof ApprovalStatus)[keyof typeof ApprovalStatus]


export const NotificationType: {
  APPROVAL_REQUEST: 'APPROVAL_REQUEST',
  APPROVAL_ACTION: 'APPROVAL_ACTION',
  COMMENT: 'COMMENT',
  SYSTEM: 'SYSTEM'
};

export type NotificationType = (typeof NotificationType)[keyof typeof NotificationType]


export const AuditAction: {
  CREATED: 'CREATED',
  APPROVED: 'APPROVED',
  REJECTED: 'REJECTED',
  COMMENTED: 'COMMENTED',
  MODIFIED: 'MODIFIED'
};

export type AuditAction = (typeof AuditAction)[keyof typeof AuditAction]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type DocumentStatus = $Enums.DocumentStatus

export const DocumentStatus: typeof $Enums.DocumentStatus

export type ApprovalStatus = $Enums.ApprovalStatus

export const ApprovalStatus: typeof $Enums.ApprovalStatus

export type NotificationType = $Enums.NotificationType

export const NotificationType: typeof $Enums.NotificationType

export type AuditAction = $Enums.AuditAction

export const AuditAction: typeof $Enums.AuditAction

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
   * `prisma.document`: Exposes CRUD operations for the **Document** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Documents
    * const documents = await prisma.document.findMany()
    * ```
    */
  get document(): Prisma.DocumentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.approval`: Exposes CRUD operations for the **Approval** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Approvals
    * const approvals = await prisma.approval.findMany()
    * ```
    */
  get approval(): Prisma.ApprovalDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.comment`: Exposes CRUD operations for the **Comment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Comments
    * const comments = await prisma.comment.findMany()
    * ```
    */
  get comment(): Prisma.CommentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.notification`: Exposes CRUD operations for the **Notification** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Notifications
    * const notifications = await prisma.notification.findMany()
    * ```
    */
  get notification(): Prisma.NotificationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.template`: Exposes CRUD operations for the **Template** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Templates
    * const templates = await prisma.template.findMany()
    * ```
    */
  get template(): Prisma.TemplateDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.templateStep`: Exposes CRUD operations for the **TemplateStep** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TemplateSteps
    * const templateSteps = await prisma.templateStep.findMany()
    * ```
    */
  get templateStep(): Prisma.TemplateStepDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.audit`: Exposes CRUD operations for the **Audit** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Audits
    * const audits = await prisma.audit.findMany()
    * ```
    */
  get audit(): Prisma.AuditDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.capexForm`: Exposes CRUD operations for the **CapexForm** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CapexForms
    * const capexForms = await prisma.capexForm.findMany()
    * ```
    */
  get capexForm(): Prisma.CapexFormDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
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
    Document: 'Document',
    Approval: 'Approval',
    Comment: 'Comment',
    Notification: 'Notification',
    Template: 'Template',
    TemplateStep: 'TemplateStep',
    Audit: 'Audit',
    CapexForm: 'CapexForm'
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
      modelProps: "user" | "document" | "approval" | "comment" | "notification" | "template" | "templateStep" | "audit" | "capexForm"
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
      Document: {
        payload: Prisma.$DocumentPayload<ExtArgs>
        fields: Prisma.DocumentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DocumentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DocumentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>
          }
          findFirst: {
            args: Prisma.DocumentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DocumentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>
          }
          findMany: {
            args: Prisma.DocumentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>[]
          }
          create: {
            args: Prisma.DocumentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>
          }
          createMany: {
            args: Prisma.DocumentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.DocumentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>
          }
          update: {
            args: Prisma.DocumentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>
          }
          deleteMany: {
            args: Prisma.DocumentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DocumentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.DocumentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>
          }
          aggregate: {
            args: Prisma.DocumentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDocument>
          }
          groupBy: {
            args: Prisma.DocumentGroupByArgs<ExtArgs>
            result: $Utils.Optional<DocumentGroupByOutputType>[]
          }
          count: {
            args: Prisma.DocumentCountArgs<ExtArgs>
            result: $Utils.Optional<DocumentCountAggregateOutputType> | number
          }
        }
      }
      Approval: {
        payload: Prisma.$ApprovalPayload<ExtArgs>
        fields: Prisma.ApprovalFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ApprovalFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApprovalPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ApprovalFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApprovalPayload>
          }
          findFirst: {
            args: Prisma.ApprovalFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApprovalPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ApprovalFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApprovalPayload>
          }
          findMany: {
            args: Prisma.ApprovalFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApprovalPayload>[]
          }
          create: {
            args: Prisma.ApprovalCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApprovalPayload>
          }
          createMany: {
            args: Prisma.ApprovalCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ApprovalDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApprovalPayload>
          }
          update: {
            args: Prisma.ApprovalUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApprovalPayload>
          }
          deleteMany: {
            args: Prisma.ApprovalDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ApprovalUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ApprovalUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApprovalPayload>
          }
          aggregate: {
            args: Prisma.ApprovalAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateApproval>
          }
          groupBy: {
            args: Prisma.ApprovalGroupByArgs<ExtArgs>
            result: $Utils.Optional<ApprovalGroupByOutputType>[]
          }
          count: {
            args: Prisma.ApprovalCountArgs<ExtArgs>
            result: $Utils.Optional<ApprovalCountAggregateOutputType> | number
          }
        }
      }
      Comment: {
        payload: Prisma.$CommentPayload<ExtArgs>
        fields: Prisma.CommentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CommentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CommentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          findFirst: {
            args: Prisma.CommentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CommentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          findMany: {
            args: Prisma.CommentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>[]
          }
          create: {
            args: Prisma.CommentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          createMany: {
            args: Prisma.CommentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CommentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          update: {
            args: Prisma.CommentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          deleteMany: {
            args: Prisma.CommentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CommentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CommentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          aggregate: {
            args: Prisma.CommentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateComment>
          }
          groupBy: {
            args: Prisma.CommentGroupByArgs<ExtArgs>
            result: $Utils.Optional<CommentGroupByOutputType>[]
          }
          count: {
            args: Prisma.CommentCountArgs<ExtArgs>
            result: $Utils.Optional<CommentCountAggregateOutputType> | number
          }
        }
      }
      Notification: {
        payload: Prisma.$NotificationPayload<ExtArgs>
        fields: Prisma.NotificationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NotificationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NotificationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          findFirst: {
            args: Prisma.NotificationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NotificationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          findMany: {
            args: Prisma.NotificationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          create: {
            args: Prisma.NotificationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          createMany: {
            args: Prisma.NotificationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.NotificationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          update: {
            args: Prisma.NotificationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          deleteMany: {
            args: Prisma.NotificationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NotificationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.NotificationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          aggregate: {
            args: Prisma.NotificationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNotification>
          }
          groupBy: {
            args: Prisma.NotificationGroupByArgs<ExtArgs>
            result: $Utils.Optional<NotificationGroupByOutputType>[]
          }
          count: {
            args: Prisma.NotificationCountArgs<ExtArgs>
            result: $Utils.Optional<NotificationCountAggregateOutputType> | number
          }
        }
      }
      Template: {
        payload: Prisma.$TemplatePayload<ExtArgs>
        fields: Prisma.TemplateFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TemplateFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplatePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TemplateFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplatePayload>
          }
          findFirst: {
            args: Prisma.TemplateFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplatePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TemplateFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplatePayload>
          }
          findMany: {
            args: Prisma.TemplateFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplatePayload>[]
          }
          create: {
            args: Prisma.TemplateCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplatePayload>
          }
          createMany: {
            args: Prisma.TemplateCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.TemplateDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplatePayload>
          }
          update: {
            args: Prisma.TemplateUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplatePayload>
          }
          deleteMany: {
            args: Prisma.TemplateDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TemplateUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TemplateUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplatePayload>
          }
          aggregate: {
            args: Prisma.TemplateAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTemplate>
          }
          groupBy: {
            args: Prisma.TemplateGroupByArgs<ExtArgs>
            result: $Utils.Optional<TemplateGroupByOutputType>[]
          }
          count: {
            args: Prisma.TemplateCountArgs<ExtArgs>
            result: $Utils.Optional<TemplateCountAggregateOutputType> | number
          }
        }
      }
      TemplateStep: {
        payload: Prisma.$TemplateStepPayload<ExtArgs>
        fields: Prisma.TemplateStepFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TemplateStepFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplateStepPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TemplateStepFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplateStepPayload>
          }
          findFirst: {
            args: Prisma.TemplateStepFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplateStepPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TemplateStepFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplateStepPayload>
          }
          findMany: {
            args: Prisma.TemplateStepFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplateStepPayload>[]
          }
          create: {
            args: Prisma.TemplateStepCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplateStepPayload>
          }
          createMany: {
            args: Prisma.TemplateStepCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.TemplateStepDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplateStepPayload>
          }
          update: {
            args: Prisma.TemplateStepUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplateStepPayload>
          }
          deleteMany: {
            args: Prisma.TemplateStepDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TemplateStepUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TemplateStepUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplateStepPayload>
          }
          aggregate: {
            args: Prisma.TemplateStepAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTemplateStep>
          }
          groupBy: {
            args: Prisma.TemplateStepGroupByArgs<ExtArgs>
            result: $Utils.Optional<TemplateStepGroupByOutputType>[]
          }
          count: {
            args: Prisma.TemplateStepCountArgs<ExtArgs>
            result: $Utils.Optional<TemplateStepCountAggregateOutputType> | number
          }
        }
      }
      Audit: {
        payload: Prisma.$AuditPayload<ExtArgs>
        fields: Prisma.AuditFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AuditFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AuditFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditPayload>
          }
          findFirst: {
            args: Prisma.AuditFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AuditFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditPayload>
          }
          findMany: {
            args: Prisma.AuditFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditPayload>[]
          }
          create: {
            args: Prisma.AuditCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditPayload>
          }
          createMany: {
            args: Prisma.AuditCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AuditDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditPayload>
          }
          update: {
            args: Prisma.AuditUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditPayload>
          }
          deleteMany: {
            args: Prisma.AuditDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AuditUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AuditUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditPayload>
          }
          aggregate: {
            args: Prisma.AuditAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAudit>
          }
          groupBy: {
            args: Prisma.AuditGroupByArgs<ExtArgs>
            result: $Utils.Optional<AuditGroupByOutputType>[]
          }
          count: {
            args: Prisma.AuditCountArgs<ExtArgs>
            result: $Utils.Optional<AuditCountAggregateOutputType> | number
          }
        }
      }
      CapexForm: {
        payload: Prisma.$CapexFormPayload<ExtArgs>
        fields: Prisma.CapexFormFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CapexFormFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CapexFormPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CapexFormFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CapexFormPayload>
          }
          findFirst: {
            args: Prisma.CapexFormFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CapexFormPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CapexFormFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CapexFormPayload>
          }
          findMany: {
            args: Prisma.CapexFormFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CapexFormPayload>[]
          }
          create: {
            args: Prisma.CapexFormCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CapexFormPayload>
          }
          createMany: {
            args: Prisma.CapexFormCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CapexFormDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CapexFormPayload>
          }
          update: {
            args: Prisma.CapexFormUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CapexFormPayload>
          }
          deleteMany: {
            args: Prisma.CapexFormDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CapexFormUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CapexFormUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CapexFormPayload>
          }
          aggregate: {
            args: Prisma.CapexFormAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCapexForm>
          }
          groupBy: {
            args: Prisma.CapexFormGroupByArgs<ExtArgs>
            result: $Utils.Optional<CapexFormGroupByOutputType>[]
          }
          count: {
            args: Prisma.CapexFormCountArgs<ExtArgs>
            result: $Utils.Optional<CapexFormCountAggregateOutputType> | number
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
    document?: DocumentOmit
    approval?: ApprovalOmit
    comment?: CommentOmit
    notification?: NotificationOmit
    template?: TemplateOmit
    templateStep?: TemplateStepOmit
    audit?: AuditOmit
    capexForm?: CapexFormOmit
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
    documents: number
    approvals: number
    comments: number
    notifications: number
    templates: number
    templateSteps: number
    auditTrail: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    documents?: boolean | UserCountOutputTypeCountDocumentsArgs
    approvals?: boolean | UserCountOutputTypeCountApprovalsArgs
    comments?: boolean | UserCountOutputTypeCountCommentsArgs
    notifications?: boolean | UserCountOutputTypeCountNotificationsArgs
    templates?: boolean | UserCountOutputTypeCountTemplatesArgs
    templateSteps?: boolean | UserCountOutputTypeCountTemplateStepsArgs
    auditTrail?: boolean | UserCountOutputTypeCountAuditTrailArgs
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
  export type UserCountOutputTypeCountDocumentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DocumentWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountApprovalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApprovalWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountNotificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTemplatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TemplateWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTemplateStepsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TemplateStepWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAuditTrailArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuditWhereInput
  }


  /**
   * Count Type DocumentCountOutputType
   */

  export type DocumentCountOutputType = {
    approvals: number
    comments: number
    auditTrail: number
  }

  export type DocumentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    approvals?: boolean | DocumentCountOutputTypeCountApprovalsArgs
    comments?: boolean | DocumentCountOutputTypeCountCommentsArgs
    auditTrail?: boolean | DocumentCountOutputTypeCountAuditTrailArgs
  }

  // Custom InputTypes
  /**
   * DocumentCountOutputType without action
   */
  export type DocumentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentCountOutputType
     */
    select?: DocumentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DocumentCountOutputType without action
   */
  export type DocumentCountOutputTypeCountApprovalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApprovalWhereInput
  }

  /**
   * DocumentCountOutputType without action
   */
  export type DocumentCountOutputTypeCountCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentWhereInput
  }

  /**
   * DocumentCountOutputType without action
   */
  export type DocumentCountOutputTypeCountAuditTrailArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuditWhereInput
  }


  /**
   * Count Type ApprovalCountOutputType
   */

  export type ApprovalCountOutputType = {
    comments: number
  }

  export type ApprovalCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    comments?: boolean | ApprovalCountOutputTypeCountCommentsArgs
  }

  // Custom InputTypes
  /**
   * ApprovalCountOutputType without action
   */
  export type ApprovalCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApprovalCountOutputType
     */
    select?: ApprovalCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ApprovalCountOutputType without action
   */
  export type ApprovalCountOutputTypeCountCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentWhereInput
  }


  /**
   * Count Type TemplateCountOutputType
   */

  export type TemplateCountOutputType = {
    documents: number
    steps: number
  }

  export type TemplateCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    documents?: boolean | TemplateCountOutputTypeCountDocumentsArgs
    steps?: boolean | TemplateCountOutputTypeCountStepsArgs
  }

  // Custom InputTypes
  /**
   * TemplateCountOutputType without action
   */
  export type TemplateCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemplateCountOutputType
     */
    select?: TemplateCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TemplateCountOutputType without action
   */
  export type TemplateCountOutputTypeCountDocumentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DocumentWhereInput
  }

  /**
   * TemplateCountOutputType without action
   */
  export type TemplateCountOutputTypeCountStepsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TemplateStepWhereInput
  }


  /**
   * Models
   */

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
    email: string | null
    password: string | null
    firstName: string | null
    lastName: string | null
    department: string | null
    isVerified: boolean | null
    isAdmin: boolean | null
    role: $Enums.Role | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    firstName: string | null
    lastName: string | null
    department: string | null
    isVerified: boolean | null
    isAdmin: boolean | null
    role: $Enums.Role | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    firstName: number
    lastName: number
    department: number
    isVerified: number
    isAdmin: number
    role: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    firstName?: true
    lastName?: true
    department?: true
    isVerified?: true
    isAdmin?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    firstName?: true
    lastName?: true
    department?: true
    isVerified?: true
    isAdmin?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    firstName?: true
    lastName?: true
    department?: true
    isVerified?: true
    isAdmin?: true
    role?: true
    createdAt?: true
    updatedAt?: true
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
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    password: string
    firstName: string
    lastName: string
    department: string
    isVerified: boolean
    isAdmin: boolean
    role: $Enums.Role
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
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
    password?: boolean
    firstName?: boolean
    lastName?: boolean
    department?: boolean
    isVerified?: boolean
    isAdmin?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    documents?: boolean | User$documentsArgs<ExtArgs>
    approvals?: boolean | User$approvalsArgs<ExtArgs>
    comments?: boolean | User$commentsArgs<ExtArgs>
    notifications?: boolean | User$notificationsArgs<ExtArgs>
    templates?: boolean | User$templatesArgs<ExtArgs>
    templateSteps?: boolean | User$templateStepsArgs<ExtArgs>
    auditTrail?: boolean | User$auditTrailArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>



  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    firstName?: boolean
    lastName?: boolean
    department?: boolean
    isVerified?: boolean
    isAdmin?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password" | "firstName" | "lastName" | "department" | "isVerified" | "isAdmin" | "role" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    documents?: boolean | User$documentsArgs<ExtArgs>
    approvals?: boolean | User$approvalsArgs<ExtArgs>
    comments?: boolean | User$commentsArgs<ExtArgs>
    notifications?: boolean | User$notificationsArgs<ExtArgs>
    templates?: boolean | User$templatesArgs<ExtArgs>
    templateSteps?: boolean | User$templateStepsArgs<ExtArgs>
    auditTrail?: boolean | User$auditTrailArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      documents: Prisma.$DocumentPayload<ExtArgs>[]
      approvals: Prisma.$ApprovalPayload<ExtArgs>[]
      comments: Prisma.$CommentPayload<ExtArgs>[]
      notifications: Prisma.$NotificationPayload<ExtArgs>[]
      templates: Prisma.$TemplatePayload<ExtArgs>[]
      templateSteps: Prisma.$TemplateStepPayload<ExtArgs>[]
      auditTrail: Prisma.$AuditPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      password: string
      firstName: string
      lastName: string
      department: string
      isVerified: boolean
      isAdmin: boolean
      role: $Enums.Role
      createdAt: Date
      updatedAt: Date
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
    documents<T extends User$documentsArgs<ExtArgs> = {}>(args?: Subset<T, User$documentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    approvals<T extends User$approvalsArgs<ExtArgs> = {}>(args?: Subset<T, User$approvalsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApprovalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    comments<T extends User$commentsArgs<ExtArgs> = {}>(args?: Subset<T, User$commentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    notifications<T extends User$notificationsArgs<ExtArgs> = {}>(args?: Subset<T, User$notificationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    templates<T extends User$templatesArgs<ExtArgs> = {}>(args?: Subset<T, User$templatesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TemplatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    templateSteps<T extends User$templateStepsArgs<ExtArgs> = {}>(args?: Subset<T, User$templateStepsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TemplateStepPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    auditTrail<T extends User$auditTrailArgs<ExtArgs> = {}>(args?: Subset<T, User$auditTrailArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly firstName: FieldRef<"User", 'String'>
    readonly lastName: FieldRef<"User", 'String'>
    readonly department: FieldRef<"User", 'String'>
    readonly isVerified: FieldRef<"User", 'Boolean'>
    readonly isAdmin: FieldRef<"User", 'Boolean'>
    readonly role: FieldRef<"User", 'Role'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
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
   * User.documents
   */
  export type User$documentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    where?: DocumentWhereInput
    orderBy?: DocumentOrderByWithRelationInput | DocumentOrderByWithRelationInput[]
    cursor?: DocumentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DocumentScalarFieldEnum | DocumentScalarFieldEnum[]
  }

  /**
   * User.approvals
   */
  export type User$approvalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Approval
     */
    select?: ApprovalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Approval
     */
    omit?: ApprovalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApprovalInclude<ExtArgs> | null
    where?: ApprovalWhereInput
    orderBy?: ApprovalOrderByWithRelationInput | ApprovalOrderByWithRelationInput[]
    cursor?: ApprovalWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ApprovalScalarFieldEnum | ApprovalScalarFieldEnum[]
  }

  /**
   * User.comments
   */
  export type User$commentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    where?: CommentWhereInput
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    cursor?: CommentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * User.notifications
   */
  export type User$notificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    where?: NotificationWhereInput
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    cursor?: NotificationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * User.templates
   */
  export type User$templatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Template
     */
    omit?: TemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateInclude<ExtArgs> | null
    where?: TemplateWhereInput
    orderBy?: TemplateOrderByWithRelationInput | TemplateOrderByWithRelationInput[]
    cursor?: TemplateWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TemplateScalarFieldEnum | TemplateScalarFieldEnum[]
  }

  /**
   * User.templateSteps
   */
  export type User$templateStepsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemplateStep
     */
    select?: TemplateStepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TemplateStep
     */
    omit?: TemplateStepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateStepInclude<ExtArgs> | null
    where?: TemplateStepWhereInput
    orderBy?: TemplateStepOrderByWithRelationInput | TemplateStepOrderByWithRelationInput[]
    cursor?: TemplateStepWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TemplateStepScalarFieldEnum | TemplateStepScalarFieldEnum[]
  }

  /**
   * User.auditTrail
   */
  export type User$auditTrailArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Audit
     */
    select?: AuditSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Audit
     */
    omit?: AuditOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditInclude<ExtArgs> | null
    where?: AuditWhereInput
    orderBy?: AuditOrderByWithRelationInput | AuditOrderByWithRelationInput[]
    cursor?: AuditWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AuditScalarFieldEnum | AuditScalarFieldEnum[]
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
   * Model Document
   */

  export type AggregateDocument = {
    _count: DocumentCountAggregateOutputType | null
    _avg: DocumentAvgAggregateOutputType | null
    _sum: DocumentSumAggregateOutputType | null
    _min: DocumentMinAggregateOutputType | null
    _max: DocumentMaxAggregateOutputType | null
  }

  export type DocumentAvgAggregateOutputType = {
    amount: number | null
  }

  export type DocumentSumAggregateOutputType = {
    amount: number | null
  }

  export type DocumentMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    file: Uint8Array | null
    fileName: string | null
    fileType: string | null
    amount: number | null
    type: string | null
    status: $Enums.DocumentStatus | null
    initiatorId: string | null
    templateId: string | null
    createdAt: Date | null
    updatedAt: Date | null
    completedAt: Date | null
  }

  export type DocumentMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    file: Uint8Array | null
    fileName: string | null
    fileType: string | null
    amount: number | null
    type: string | null
    status: $Enums.DocumentStatus | null
    initiatorId: string | null
    templateId: string | null
    createdAt: Date | null
    updatedAt: Date | null
    completedAt: Date | null
  }

  export type DocumentCountAggregateOutputType = {
    id: number
    title: number
    description: number
    file: number
    fileName: number
    fileType: number
    amount: number
    type: number
    status: number
    initiatorId: number
    templateId: number
    createdAt: number
    updatedAt: number
    completedAt: number
    _all: number
  }


  export type DocumentAvgAggregateInputType = {
    amount?: true
  }

  export type DocumentSumAggregateInputType = {
    amount?: true
  }

  export type DocumentMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    file?: true
    fileName?: true
    fileType?: true
    amount?: true
    type?: true
    status?: true
    initiatorId?: true
    templateId?: true
    createdAt?: true
    updatedAt?: true
    completedAt?: true
  }

  export type DocumentMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    file?: true
    fileName?: true
    fileType?: true
    amount?: true
    type?: true
    status?: true
    initiatorId?: true
    templateId?: true
    createdAt?: true
    updatedAt?: true
    completedAt?: true
  }

  export type DocumentCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    file?: true
    fileName?: true
    fileType?: true
    amount?: true
    type?: true
    status?: true
    initiatorId?: true
    templateId?: true
    createdAt?: true
    updatedAt?: true
    completedAt?: true
    _all?: true
  }

  export type DocumentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Document to aggregate.
     */
    where?: DocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Documents to fetch.
     */
    orderBy?: DocumentOrderByWithRelationInput | DocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Documents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Documents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Documents
    **/
    _count?: true | DocumentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DocumentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DocumentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DocumentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DocumentMaxAggregateInputType
  }

  export type GetDocumentAggregateType<T extends DocumentAggregateArgs> = {
        [P in keyof T & keyof AggregateDocument]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDocument[P]>
      : GetScalarType<T[P], AggregateDocument[P]>
  }




  export type DocumentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DocumentWhereInput
    orderBy?: DocumentOrderByWithAggregationInput | DocumentOrderByWithAggregationInput[]
    by: DocumentScalarFieldEnum[] | DocumentScalarFieldEnum
    having?: DocumentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DocumentCountAggregateInputType | true
    _avg?: DocumentAvgAggregateInputType
    _sum?: DocumentSumAggregateInputType
    _min?: DocumentMinAggregateInputType
    _max?: DocumentMaxAggregateInputType
  }

  export type DocumentGroupByOutputType = {
    id: string
    title: string
    description: string | null
    file: Uint8Array
    fileName: string | null
    fileType: string
    amount: number | null
    type: string | null
    status: $Enums.DocumentStatus
    initiatorId: string
    templateId: string | null
    createdAt: Date
    updatedAt: Date
    completedAt: Date | null
    _count: DocumentCountAggregateOutputType | null
    _avg: DocumentAvgAggregateOutputType | null
    _sum: DocumentSumAggregateOutputType | null
    _min: DocumentMinAggregateOutputType | null
    _max: DocumentMaxAggregateOutputType | null
  }

  type GetDocumentGroupByPayload<T extends DocumentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DocumentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DocumentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DocumentGroupByOutputType[P]>
            : GetScalarType<T[P], DocumentGroupByOutputType[P]>
        }
      >
    >


  export type DocumentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    file?: boolean
    fileName?: boolean
    fileType?: boolean
    amount?: boolean
    type?: boolean
    status?: boolean
    initiatorId?: boolean
    templateId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    completedAt?: boolean
    initiator?: boolean | UserDefaultArgs<ExtArgs>
    approvals?: boolean | Document$approvalsArgs<ExtArgs>
    comments?: boolean | Document$commentsArgs<ExtArgs>
    auditTrail?: boolean | Document$auditTrailArgs<ExtArgs>
    templateUsed?: boolean | Document$templateUsedArgs<ExtArgs>
    capexForm?: boolean | Document$capexFormArgs<ExtArgs>
    _count?: boolean | DocumentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["document"]>



  export type DocumentSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    file?: boolean
    fileName?: boolean
    fileType?: boolean
    amount?: boolean
    type?: boolean
    status?: boolean
    initiatorId?: boolean
    templateId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    completedAt?: boolean
  }

  export type DocumentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "file" | "fileName" | "fileType" | "amount" | "type" | "status" | "initiatorId" | "templateId" | "createdAt" | "updatedAt" | "completedAt", ExtArgs["result"]["document"]>
  export type DocumentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    initiator?: boolean | UserDefaultArgs<ExtArgs>
    approvals?: boolean | Document$approvalsArgs<ExtArgs>
    comments?: boolean | Document$commentsArgs<ExtArgs>
    auditTrail?: boolean | Document$auditTrailArgs<ExtArgs>
    templateUsed?: boolean | Document$templateUsedArgs<ExtArgs>
    capexForm?: boolean | Document$capexFormArgs<ExtArgs>
    _count?: boolean | DocumentCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $DocumentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Document"
    objects: {
      initiator: Prisma.$UserPayload<ExtArgs>
      approvals: Prisma.$ApprovalPayload<ExtArgs>[]
      comments: Prisma.$CommentPayload<ExtArgs>[]
      auditTrail: Prisma.$AuditPayload<ExtArgs>[]
      templateUsed: Prisma.$TemplatePayload<ExtArgs> | null
      capexForm: Prisma.$CapexFormPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string | null
      file: Uint8Array
      fileName: string | null
      fileType: string
      amount: number | null
      type: string | null
      status: $Enums.DocumentStatus
      initiatorId: string
      templateId: string | null
      createdAt: Date
      updatedAt: Date
      completedAt: Date | null
    }, ExtArgs["result"]["document"]>
    composites: {}
  }

  type DocumentGetPayload<S extends boolean | null | undefined | DocumentDefaultArgs> = $Result.GetResult<Prisma.$DocumentPayload, S>

  type DocumentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DocumentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DocumentCountAggregateInputType | true
    }

  export interface DocumentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Document'], meta: { name: 'Document' } }
    /**
     * Find zero or one Document that matches the filter.
     * @param {DocumentFindUniqueArgs} args - Arguments to find a Document
     * @example
     * // Get one Document
     * const document = await prisma.document.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DocumentFindUniqueArgs>(args: SelectSubset<T, DocumentFindUniqueArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Document that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DocumentFindUniqueOrThrowArgs} args - Arguments to find a Document
     * @example
     * // Get one Document
     * const document = await prisma.document.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DocumentFindUniqueOrThrowArgs>(args: SelectSubset<T, DocumentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Document that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentFindFirstArgs} args - Arguments to find a Document
     * @example
     * // Get one Document
     * const document = await prisma.document.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DocumentFindFirstArgs>(args?: SelectSubset<T, DocumentFindFirstArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Document that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentFindFirstOrThrowArgs} args - Arguments to find a Document
     * @example
     * // Get one Document
     * const document = await prisma.document.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DocumentFindFirstOrThrowArgs>(args?: SelectSubset<T, DocumentFindFirstOrThrowArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Documents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Documents
     * const documents = await prisma.document.findMany()
     * 
     * // Get first 10 Documents
     * const documents = await prisma.document.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const documentWithIdOnly = await prisma.document.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DocumentFindManyArgs>(args?: SelectSubset<T, DocumentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Document.
     * @param {DocumentCreateArgs} args - Arguments to create a Document.
     * @example
     * // Create one Document
     * const Document = await prisma.document.create({
     *   data: {
     *     // ... data to create a Document
     *   }
     * })
     * 
     */
    create<T extends DocumentCreateArgs>(args: SelectSubset<T, DocumentCreateArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Documents.
     * @param {DocumentCreateManyArgs} args - Arguments to create many Documents.
     * @example
     * // Create many Documents
     * const document = await prisma.document.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DocumentCreateManyArgs>(args?: SelectSubset<T, DocumentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Document.
     * @param {DocumentDeleteArgs} args - Arguments to delete one Document.
     * @example
     * // Delete one Document
     * const Document = await prisma.document.delete({
     *   where: {
     *     // ... filter to delete one Document
     *   }
     * })
     * 
     */
    delete<T extends DocumentDeleteArgs>(args: SelectSubset<T, DocumentDeleteArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Document.
     * @param {DocumentUpdateArgs} args - Arguments to update one Document.
     * @example
     * // Update one Document
     * const document = await prisma.document.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DocumentUpdateArgs>(args: SelectSubset<T, DocumentUpdateArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Documents.
     * @param {DocumentDeleteManyArgs} args - Arguments to filter Documents to delete.
     * @example
     * // Delete a few Documents
     * const { count } = await prisma.document.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DocumentDeleteManyArgs>(args?: SelectSubset<T, DocumentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Documents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Documents
     * const document = await prisma.document.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DocumentUpdateManyArgs>(args: SelectSubset<T, DocumentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Document.
     * @param {DocumentUpsertArgs} args - Arguments to update or create a Document.
     * @example
     * // Update or create a Document
     * const document = await prisma.document.upsert({
     *   create: {
     *     // ... data to create a Document
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Document we want to update
     *   }
     * })
     */
    upsert<T extends DocumentUpsertArgs>(args: SelectSubset<T, DocumentUpsertArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Documents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentCountArgs} args - Arguments to filter Documents to count.
     * @example
     * // Count the number of Documents
     * const count = await prisma.document.count({
     *   where: {
     *     // ... the filter for the Documents we want to count
     *   }
     * })
    **/
    count<T extends DocumentCountArgs>(
      args?: Subset<T, DocumentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DocumentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Document.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DocumentAggregateArgs>(args: Subset<T, DocumentAggregateArgs>): Prisma.PrismaPromise<GetDocumentAggregateType<T>>

    /**
     * Group by Document.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentGroupByArgs} args - Group by arguments.
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
      T extends DocumentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DocumentGroupByArgs['orderBy'] }
        : { orderBy?: DocumentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DocumentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDocumentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Document model
   */
  readonly fields: DocumentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Document.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DocumentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    initiator<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    approvals<T extends Document$approvalsArgs<ExtArgs> = {}>(args?: Subset<T, Document$approvalsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApprovalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    comments<T extends Document$commentsArgs<ExtArgs> = {}>(args?: Subset<T, Document$commentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    auditTrail<T extends Document$auditTrailArgs<ExtArgs> = {}>(args?: Subset<T, Document$auditTrailArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    templateUsed<T extends Document$templateUsedArgs<ExtArgs> = {}>(args?: Subset<T, Document$templateUsedArgs<ExtArgs>>): Prisma__TemplateClient<$Result.GetResult<Prisma.$TemplatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    capexForm<T extends Document$capexFormArgs<ExtArgs> = {}>(args?: Subset<T, Document$capexFormArgs<ExtArgs>>): Prisma__CapexFormClient<$Result.GetResult<Prisma.$CapexFormPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Document model
   */
  interface DocumentFieldRefs {
    readonly id: FieldRef<"Document", 'String'>
    readonly title: FieldRef<"Document", 'String'>
    readonly description: FieldRef<"Document", 'String'>
    readonly file: FieldRef<"Document", 'Bytes'>
    readonly fileName: FieldRef<"Document", 'String'>
    readonly fileType: FieldRef<"Document", 'String'>
    readonly amount: FieldRef<"Document", 'Float'>
    readonly type: FieldRef<"Document", 'String'>
    readonly status: FieldRef<"Document", 'DocumentStatus'>
    readonly initiatorId: FieldRef<"Document", 'String'>
    readonly templateId: FieldRef<"Document", 'String'>
    readonly createdAt: FieldRef<"Document", 'DateTime'>
    readonly updatedAt: FieldRef<"Document", 'DateTime'>
    readonly completedAt: FieldRef<"Document", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Document findUnique
   */
  export type DocumentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * Filter, which Document to fetch.
     */
    where: DocumentWhereUniqueInput
  }

  /**
   * Document findUniqueOrThrow
   */
  export type DocumentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * Filter, which Document to fetch.
     */
    where: DocumentWhereUniqueInput
  }

  /**
   * Document findFirst
   */
  export type DocumentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * Filter, which Document to fetch.
     */
    where?: DocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Documents to fetch.
     */
    orderBy?: DocumentOrderByWithRelationInput | DocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Documents.
     */
    cursor?: DocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Documents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Documents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Documents.
     */
    distinct?: DocumentScalarFieldEnum | DocumentScalarFieldEnum[]
  }

  /**
   * Document findFirstOrThrow
   */
  export type DocumentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * Filter, which Document to fetch.
     */
    where?: DocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Documents to fetch.
     */
    orderBy?: DocumentOrderByWithRelationInput | DocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Documents.
     */
    cursor?: DocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Documents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Documents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Documents.
     */
    distinct?: DocumentScalarFieldEnum | DocumentScalarFieldEnum[]
  }

  /**
   * Document findMany
   */
  export type DocumentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * Filter, which Documents to fetch.
     */
    where?: DocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Documents to fetch.
     */
    orderBy?: DocumentOrderByWithRelationInput | DocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Documents.
     */
    cursor?: DocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Documents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Documents.
     */
    skip?: number
    distinct?: DocumentScalarFieldEnum | DocumentScalarFieldEnum[]
  }

  /**
   * Document create
   */
  export type DocumentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * The data needed to create a Document.
     */
    data: XOR<DocumentCreateInput, DocumentUncheckedCreateInput>
  }

  /**
   * Document createMany
   */
  export type DocumentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Documents.
     */
    data: DocumentCreateManyInput | DocumentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Document update
   */
  export type DocumentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * The data needed to update a Document.
     */
    data: XOR<DocumentUpdateInput, DocumentUncheckedUpdateInput>
    /**
     * Choose, which Document to update.
     */
    where: DocumentWhereUniqueInput
  }

  /**
   * Document updateMany
   */
  export type DocumentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Documents.
     */
    data: XOR<DocumentUpdateManyMutationInput, DocumentUncheckedUpdateManyInput>
    /**
     * Filter which Documents to update
     */
    where?: DocumentWhereInput
    /**
     * Limit how many Documents to update.
     */
    limit?: number
  }

  /**
   * Document upsert
   */
  export type DocumentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * The filter to search for the Document to update in case it exists.
     */
    where: DocumentWhereUniqueInput
    /**
     * In case the Document found by the `where` argument doesn't exist, create a new Document with this data.
     */
    create: XOR<DocumentCreateInput, DocumentUncheckedCreateInput>
    /**
     * In case the Document was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DocumentUpdateInput, DocumentUncheckedUpdateInput>
  }

  /**
   * Document delete
   */
  export type DocumentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * Filter which Document to delete.
     */
    where: DocumentWhereUniqueInput
  }

  /**
   * Document deleteMany
   */
  export type DocumentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Documents to delete
     */
    where?: DocumentWhereInput
    /**
     * Limit how many Documents to delete.
     */
    limit?: number
  }

  /**
   * Document.approvals
   */
  export type Document$approvalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Approval
     */
    select?: ApprovalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Approval
     */
    omit?: ApprovalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApprovalInclude<ExtArgs> | null
    where?: ApprovalWhereInput
    orderBy?: ApprovalOrderByWithRelationInput | ApprovalOrderByWithRelationInput[]
    cursor?: ApprovalWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ApprovalScalarFieldEnum | ApprovalScalarFieldEnum[]
  }

  /**
   * Document.comments
   */
  export type Document$commentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    where?: CommentWhereInput
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    cursor?: CommentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Document.auditTrail
   */
  export type Document$auditTrailArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Audit
     */
    select?: AuditSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Audit
     */
    omit?: AuditOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditInclude<ExtArgs> | null
    where?: AuditWhereInput
    orderBy?: AuditOrderByWithRelationInput | AuditOrderByWithRelationInput[]
    cursor?: AuditWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AuditScalarFieldEnum | AuditScalarFieldEnum[]
  }

  /**
   * Document.templateUsed
   */
  export type Document$templateUsedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Template
     */
    omit?: TemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateInclude<ExtArgs> | null
    where?: TemplateWhereInput
  }

  /**
   * Document.capexForm
   */
  export type Document$capexFormArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CapexForm
     */
    select?: CapexFormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CapexForm
     */
    omit?: CapexFormOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CapexFormInclude<ExtArgs> | null
    where?: CapexFormWhereInput
  }

  /**
   * Document without action
   */
  export type DocumentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
  }


  /**
   * Model Approval
   */

  export type AggregateApproval = {
    _count: ApprovalCountAggregateOutputType | null
    _avg: ApprovalAvgAggregateOutputType | null
    _sum: ApprovalSumAggregateOutputType | null
    _min: ApprovalMinAggregateOutputType | null
    _max: ApprovalMaxAggregateOutputType | null
  }

  export type ApprovalAvgAggregateOutputType = {
    sequenceOrder: number | null
  }

  export type ApprovalSumAggregateOutputType = {
    sequenceOrder: number | null
  }

  export type ApprovalMinAggregateOutputType = {
    id: string | null
    sequenceOrder: number | null
    status: $Enums.ApprovalStatus | null
    documentId: string | null
    approverId: string | null
    approvedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ApprovalMaxAggregateOutputType = {
    id: string | null
    sequenceOrder: number | null
    status: $Enums.ApprovalStatus | null
    documentId: string | null
    approverId: string | null
    approvedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ApprovalCountAggregateOutputType = {
    id: number
    sequenceOrder: number
    status: number
    documentId: number
    approverId: number
    approvedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ApprovalAvgAggregateInputType = {
    sequenceOrder?: true
  }

  export type ApprovalSumAggregateInputType = {
    sequenceOrder?: true
  }

  export type ApprovalMinAggregateInputType = {
    id?: true
    sequenceOrder?: true
    status?: true
    documentId?: true
    approverId?: true
    approvedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ApprovalMaxAggregateInputType = {
    id?: true
    sequenceOrder?: true
    status?: true
    documentId?: true
    approverId?: true
    approvedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ApprovalCountAggregateInputType = {
    id?: true
    sequenceOrder?: true
    status?: true
    documentId?: true
    approverId?: true
    approvedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ApprovalAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Approval to aggregate.
     */
    where?: ApprovalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Approvals to fetch.
     */
    orderBy?: ApprovalOrderByWithRelationInput | ApprovalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ApprovalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Approvals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Approvals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Approvals
    **/
    _count?: true | ApprovalCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ApprovalAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ApprovalSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ApprovalMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ApprovalMaxAggregateInputType
  }

  export type GetApprovalAggregateType<T extends ApprovalAggregateArgs> = {
        [P in keyof T & keyof AggregateApproval]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateApproval[P]>
      : GetScalarType<T[P], AggregateApproval[P]>
  }




  export type ApprovalGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApprovalWhereInput
    orderBy?: ApprovalOrderByWithAggregationInput | ApprovalOrderByWithAggregationInput[]
    by: ApprovalScalarFieldEnum[] | ApprovalScalarFieldEnum
    having?: ApprovalScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ApprovalCountAggregateInputType | true
    _avg?: ApprovalAvgAggregateInputType
    _sum?: ApprovalSumAggregateInputType
    _min?: ApprovalMinAggregateInputType
    _max?: ApprovalMaxAggregateInputType
  }

  export type ApprovalGroupByOutputType = {
    id: string
    sequenceOrder: number
    status: $Enums.ApprovalStatus
    documentId: string
    approverId: string
    approvedAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: ApprovalCountAggregateOutputType | null
    _avg: ApprovalAvgAggregateOutputType | null
    _sum: ApprovalSumAggregateOutputType | null
    _min: ApprovalMinAggregateOutputType | null
    _max: ApprovalMaxAggregateOutputType | null
  }

  type GetApprovalGroupByPayload<T extends ApprovalGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ApprovalGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ApprovalGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ApprovalGroupByOutputType[P]>
            : GetScalarType<T[P], ApprovalGroupByOutputType[P]>
        }
      >
    >


  export type ApprovalSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sequenceOrder?: boolean
    status?: boolean
    documentId?: boolean
    approverId?: boolean
    approvedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    document?: boolean | DocumentDefaultArgs<ExtArgs>
    approver?: boolean | UserDefaultArgs<ExtArgs>
    comments?: boolean | Approval$commentsArgs<ExtArgs>
    _count?: boolean | ApprovalCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["approval"]>



  export type ApprovalSelectScalar = {
    id?: boolean
    sequenceOrder?: boolean
    status?: boolean
    documentId?: boolean
    approverId?: boolean
    approvedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ApprovalOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "sequenceOrder" | "status" | "documentId" | "approverId" | "approvedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["approval"]>
  export type ApprovalInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    document?: boolean | DocumentDefaultArgs<ExtArgs>
    approver?: boolean | UserDefaultArgs<ExtArgs>
    comments?: boolean | Approval$commentsArgs<ExtArgs>
    _count?: boolean | ApprovalCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ApprovalPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Approval"
    objects: {
      document: Prisma.$DocumentPayload<ExtArgs>
      approver: Prisma.$UserPayload<ExtArgs>
      comments: Prisma.$CommentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      sequenceOrder: number
      status: $Enums.ApprovalStatus
      documentId: string
      approverId: string
      approvedAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["approval"]>
    composites: {}
  }

  type ApprovalGetPayload<S extends boolean | null | undefined | ApprovalDefaultArgs> = $Result.GetResult<Prisma.$ApprovalPayload, S>

  type ApprovalCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ApprovalFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ApprovalCountAggregateInputType | true
    }

  export interface ApprovalDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Approval'], meta: { name: 'Approval' } }
    /**
     * Find zero or one Approval that matches the filter.
     * @param {ApprovalFindUniqueArgs} args - Arguments to find a Approval
     * @example
     * // Get one Approval
     * const approval = await prisma.approval.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ApprovalFindUniqueArgs>(args: SelectSubset<T, ApprovalFindUniqueArgs<ExtArgs>>): Prisma__ApprovalClient<$Result.GetResult<Prisma.$ApprovalPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Approval that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ApprovalFindUniqueOrThrowArgs} args - Arguments to find a Approval
     * @example
     * // Get one Approval
     * const approval = await prisma.approval.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ApprovalFindUniqueOrThrowArgs>(args: SelectSubset<T, ApprovalFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ApprovalClient<$Result.GetResult<Prisma.$ApprovalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Approval that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApprovalFindFirstArgs} args - Arguments to find a Approval
     * @example
     * // Get one Approval
     * const approval = await prisma.approval.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ApprovalFindFirstArgs>(args?: SelectSubset<T, ApprovalFindFirstArgs<ExtArgs>>): Prisma__ApprovalClient<$Result.GetResult<Prisma.$ApprovalPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Approval that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApprovalFindFirstOrThrowArgs} args - Arguments to find a Approval
     * @example
     * // Get one Approval
     * const approval = await prisma.approval.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ApprovalFindFirstOrThrowArgs>(args?: SelectSubset<T, ApprovalFindFirstOrThrowArgs<ExtArgs>>): Prisma__ApprovalClient<$Result.GetResult<Prisma.$ApprovalPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Approvals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApprovalFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Approvals
     * const approvals = await prisma.approval.findMany()
     * 
     * // Get first 10 Approvals
     * const approvals = await prisma.approval.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const approvalWithIdOnly = await prisma.approval.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ApprovalFindManyArgs>(args?: SelectSubset<T, ApprovalFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApprovalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Approval.
     * @param {ApprovalCreateArgs} args - Arguments to create a Approval.
     * @example
     * // Create one Approval
     * const Approval = await prisma.approval.create({
     *   data: {
     *     // ... data to create a Approval
     *   }
     * })
     * 
     */
    create<T extends ApprovalCreateArgs>(args: SelectSubset<T, ApprovalCreateArgs<ExtArgs>>): Prisma__ApprovalClient<$Result.GetResult<Prisma.$ApprovalPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Approvals.
     * @param {ApprovalCreateManyArgs} args - Arguments to create many Approvals.
     * @example
     * // Create many Approvals
     * const approval = await prisma.approval.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ApprovalCreateManyArgs>(args?: SelectSubset<T, ApprovalCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Approval.
     * @param {ApprovalDeleteArgs} args - Arguments to delete one Approval.
     * @example
     * // Delete one Approval
     * const Approval = await prisma.approval.delete({
     *   where: {
     *     // ... filter to delete one Approval
     *   }
     * })
     * 
     */
    delete<T extends ApprovalDeleteArgs>(args: SelectSubset<T, ApprovalDeleteArgs<ExtArgs>>): Prisma__ApprovalClient<$Result.GetResult<Prisma.$ApprovalPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Approval.
     * @param {ApprovalUpdateArgs} args - Arguments to update one Approval.
     * @example
     * // Update one Approval
     * const approval = await prisma.approval.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ApprovalUpdateArgs>(args: SelectSubset<T, ApprovalUpdateArgs<ExtArgs>>): Prisma__ApprovalClient<$Result.GetResult<Prisma.$ApprovalPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Approvals.
     * @param {ApprovalDeleteManyArgs} args - Arguments to filter Approvals to delete.
     * @example
     * // Delete a few Approvals
     * const { count } = await prisma.approval.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ApprovalDeleteManyArgs>(args?: SelectSubset<T, ApprovalDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Approvals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApprovalUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Approvals
     * const approval = await prisma.approval.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ApprovalUpdateManyArgs>(args: SelectSubset<T, ApprovalUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Approval.
     * @param {ApprovalUpsertArgs} args - Arguments to update or create a Approval.
     * @example
     * // Update or create a Approval
     * const approval = await prisma.approval.upsert({
     *   create: {
     *     // ... data to create a Approval
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Approval we want to update
     *   }
     * })
     */
    upsert<T extends ApprovalUpsertArgs>(args: SelectSubset<T, ApprovalUpsertArgs<ExtArgs>>): Prisma__ApprovalClient<$Result.GetResult<Prisma.$ApprovalPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Approvals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApprovalCountArgs} args - Arguments to filter Approvals to count.
     * @example
     * // Count the number of Approvals
     * const count = await prisma.approval.count({
     *   where: {
     *     // ... the filter for the Approvals we want to count
     *   }
     * })
    **/
    count<T extends ApprovalCountArgs>(
      args?: Subset<T, ApprovalCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ApprovalCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Approval.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApprovalAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ApprovalAggregateArgs>(args: Subset<T, ApprovalAggregateArgs>): Prisma.PrismaPromise<GetApprovalAggregateType<T>>

    /**
     * Group by Approval.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApprovalGroupByArgs} args - Group by arguments.
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
      T extends ApprovalGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ApprovalGroupByArgs['orderBy'] }
        : { orderBy?: ApprovalGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ApprovalGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetApprovalGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Approval model
   */
  readonly fields: ApprovalFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Approval.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ApprovalClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    document<T extends DocumentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DocumentDefaultArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    approver<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    comments<T extends Approval$commentsArgs<ExtArgs> = {}>(args?: Subset<T, Approval$commentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Approval model
   */
  interface ApprovalFieldRefs {
    readonly id: FieldRef<"Approval", 'String'>
    readonly sequenceOrder: FieldRef<"Approval", 'Int'>
    readonly status: FieldRef<"Approval", 'ApprovalStatus'>
    readonly documentId: FieldRef<"Approval", 'String'>
    readonly approverId: FieldRef<"Approval", 'String'>
    readonly approvedAt: FieldRef<"Approval", 'DateTime'>
    readonly createdAt: FieldRef<"Approval", 'DateTime'>
    readonly updatedAt: FieldRef<"Approval", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Approval findUnique
   */
  export type ApprovalFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Approval
     */
    select?: ApprovalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Approval
     */
    omit?: ApprovalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApprovalInclude<ExtArgs> | null
    /**
     * Filter, which Approval to fetch.
     */
    where: ApprovalWhereUniqueInput
  }

  /**
   * Approval findUniqueOrThrow
   */
  export type ApprovalFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Approval
     */
    select?: ApprovalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Approval
     */
    omit?: ApprovalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApprovalInclude<ExtArgs> | null
    /**
     * Filter, which Approval to fetch.
     */
    where: ApprovalWhereUniqueInput
  }

  /**
   * Approval findFirst
   */
  export type ApprovalFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Approval
     */
    select?: ApprovalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Approval
     */
    omit?: ApprovalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApprovalInclude<ExtArgs> | null
    /**
     * Filter, which Approval to fetch.
     */
    where?: ApprovalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Approvals to fetch.
     */
    orderBy?: ApprovalOrderByWithRelationInput | ApprovalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Approvals.
     */
    cursor?: ApprovalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Approvals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Approvals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Approvals.
     */
    distinct?: ApprovalScalarFieldEnum | ApprovalScalarFieldEnum[]
  }

  /**
   * Approval findFirstOrThrow
   */
  export type ApprovalFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Approval
     */
    select?: ApprovalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Approval
     */
    omit?: ApprovalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApprovalInclude<ExtArgs> | null
    /**
     * Filter, which Approval to fetch.
     */
    where?: ApprovalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Approvals to fetch.
     */
    orderBy?: ApprovalOrderByWithRelationInput | ApprovalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Approvals.
     */
    cursor?: ApprovalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Approvals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Approvals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Approvals.
     */
    distinct?: ApprovalScalarFieldEnum | ApprovalScalarFieldEnum[]
  }

  /**
   * Approval findMany
   */
  export type ApprovalFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Approval
     */
    select?: ApprovalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Approval
     */
    omit?: ApprovalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApprovalInclude<ExtArgs> | null
    /**
     * Filter, which Approvals to fetch.
     */
    where?: ApprovalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Approvals to fetch.
     */
    orderBy?: ApprovalOrderByWithRelationInput | ApprovalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Approvals.
     */
    cursor?: ApprovalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Approvals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Approvals.
     */
    skip?: number
    distinct?: ApprovalScalarFieldEnum | ApprovalScalarFieldEnum[]
  }

  /**
   * Approval create
   */
  export type ApprovalCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Approval
     */
    select?: ApprovalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Approval
     */
    omit?: ApprovalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApprovalInclude<ExtArgs> | null
    /**
     * The data needed to create a Approval.
     */
    data: XOR<ApprovalCreateInput, ApprovalUncheckedCreateInput>
  }

  /**
   * Approval createMany
   */
  export type ApprovalCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Approvals.
     */
    data: ApprovalCreateManyInput | ApprovalCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Approval update
   */
  export type ApprovalUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Approval
     */
    select?: ApprovalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Approval
     */
    omit?: ApprovalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApprovalInclude<ExtArgs> | null
    /**
     * The data needed to update a Approval.
     */
    data: XOR<ApprovalUpdateInput, ApprovalUncheckedUpdateInput>
    /**
     * Choose, which Approval to update.
     */
    where: ApprovalWhereUniqueInput
  }

  /**
   * Approval updateMany
   */
  export type ApprovalUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Approvals.
     */
    data: XOR<ApprovalUpdateManyMutationInput, ApprovalUncheckedUpdateManyInput>
    /**
     * Filter which Approvals to update
     */
    where?: ApprovalWhereInput
    /**
     * Limit how many Approvals to update.
     */
    limit?: number
  }

  /**
   * Approval upsert
   */
  export type ApprovalUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Approval
     */
    select?: ApprovalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Approval
     */
    omit?: ApprovalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApprovalInclude<ExtArgs> | null
    /**
     * The filter to search for the Approval to update in case it exists.
     */
    where: ApprovalWhereUniqueInput
    /**
     * In case the Approval found by the `where` argument doesn't exist, create a new Approval with this data.
     */
    create: XOR<ApprovalCreateInput, ApprovalUncheckedCreateInput>
    /**
     * In case the Approval was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ApprovalUpdateInput, ApprovalUncheckedUpdateInput>
  }

  /**
   * Approval delete
   */
  export type ApprovalDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Approval
     */
    select?: ApprovalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Approval
     */
    omit?: ApprovalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApprovalInclude<ExtArgs> | null
    /**
     * Filter which Approval to delete.
     */
    where: ApprovalWhereUniqueInput
  }

  /**
   * Approval deleteMany
   */
  export type ApprovalDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Approvals to delete
     */
    where?: ApprovalWhereInput
    /**
     * Limit how many Approvals to delete.
     */
    limit?: number
  }

  /**
   * Approval.comments
   */
  export type Approval$commentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    where?: CommentWhereInput
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    cursor?: CommentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Approval without action
   */
  export type ApprovalDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Approval
     */
    select?: ApprovalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Approval
     */
    omit?: ApprovalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApprovalInclude<ExtArgs> | null
  }


  /**
   * Model Comment
   */

  export type AggregateComment = {
    _count: CommentCountAggregateOutputType | null
    _min: CommentMinAggregateOutputType | null
    _max: CommentMaxAggregateOutputType | null
  }

  export type CommentMinAggregateOutputType = {
    id: string | null
    content: string | null
    approvalId: string | null
    documentId: string | null
    userId: string | null
    createdAt: Date | null
  }

  export type CommentMaxAggregateOutputType = {
    id: string | null
    content: string | null
    approvalId: string | null
    documentId: string | null
    userId: string | null
    createdAt: Date | null
  }

  export type CommentCountAggregateOutputType = {
    id: number
    content: number
    approvalId: number
    documentId: number
    userId: number
    createdAt: number
    _all: number
  }


  export type CommentMinAggregateInputType = {
    id?: true
    content?: true
    approvalId?: true
    documentId?: true
    userId?: true
    createdAt?: true
  }

  export type CommentMaxAggregateInputType = {
    id?: true
    content?: true
    approvalId?: true
    documentId?: true
    userId?: true
    createdAt?: true
  }

  export type CommentCountAggregateInputType = {
    id?: true
    content?: true
    approvalId?: true
    documentId?: true
    userId?: true
    createdAt?: true
    _all?: true
  }

  export type CommentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Comment to aggregate.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Comments
    **/
    _count?: true | CommentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CommentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CommentMaxAggregateInputType
  }

  export type GetCommentAggregateType<T extends CommentAggregateArgs> = {
        [P in keyof T & keyof AggregateComment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateComment[P]>
      : GetScalarType<T[P], AggregateComment[P]>
  }




  export type CommentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentWhereInput
    orderBy?: CommentOrderByWithAggregationInput | CommentOrderByWithAggregationInput[]
    by: CommentScalarFieldEnum[] | CommentScalarFieldEnum
    having?: CommentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CommentCountAggregateInputType | true
    _min?: CommentMinAggregateInputType
    _max?: CommentMaxAggregateInputType
  }

  export type CommentGroupByOutputType = {
    id: string
    content: string
    approvalId: string
    documentId: string
    userId: string
    createdAt: Date
    _count: CommentCountAggregateOutputType | null
    _min: CommentMinAggregateOutputType | null
    _max: CommentMaxAggregateOutputType | null
  }

  type GetCommentGroupByPayload<T extends CommentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CommentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CommentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CommentGroupByOutputType[P]>
            : GetScalarType<T[P], CommentGroupByOutputType[P]>
        }
      >
    >


  export type CommentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    approvalId?: boolean
    documentId?: boolean
    userId?: boolean
    createdAt?: boolean
    approval?: boolean | ApprovalDefaultArgs<ExtArgs>
    document?: boolean | DocumentDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comment"]>



  export type CommentSelectScalar = {
    id?: boolean
    content?: boolean
    approvalId?: boolean
    documentId?: boolean
    userId?: boolean
    createdAt?: boolean
  }

  export type CommentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "content" | "approvalId" | "documentId" | "userId" | "createdAt", ExtArgs["result"]["comment"]>
  export type CommentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    approval?: boolean | ApprovalDefaultArgs<ExtArgs>
    document?: boolean | DocumentDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $CommentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Comment"
    objects: {
      approval: Prisma.$ApprovalPayload<ExtArgs>
      document: Prisma.$DocumentPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      content: string
      approvalId: string
      documentId: string
      userId: string
      createdAt: Date
    }, ExtArgs["result"]["comment"]>
    composites: {}
  }

  type CommentGetPayload<S extends boolean | null | undefined | CommentDefaultArgs> = $Result.GetResult<Prisma.$CommentPayload, S>

  type CommentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CommentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CommentCountAggregateInputType | true
    }

  export interface CommentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Comment'], meta: { name: 'Comment' } }
    /**
     * Find zero or one Comment that matches the filter.
     * @param {CommentFindUniqueArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CommentFindUniqueArgs>(args: SelectSubset<T, CommentFindUniqueArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Comment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CommentFindUniqueOrThrowArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CommentFindUniqueOrThrowArgs>(args: SelectSubset<T, CommentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Comment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindFirstArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CommentFindFirstArgs>(args?: SelectSubset<T, CommentFindFirstArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Comment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindFirstOrThrowArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CommentFindFirstOrThrowArgs>(args?: SelectSubset<T, CommentFindFirstOrThrowArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Comments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Comments
     * const comments = await prisma.comment.findMany()
     * 
     * // Get first 10 Comments
     * const comments = await prisma.comment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const commentWithIdOnly = await prisma.comment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CommentFindManyArgs>(args?: SelectSubset<T, CommentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Comment.
     * @param {CommentCreateArgs} args - Arguments to create a Comment.
     * @example
     * // Create one Comment
     * const Comment = await prisma.comment.create({
     *   data: {
     *     // ... data to create a Comment
     *   }
     * })
     * 
     */
    create<T extends CommentCreateArgs>(args: SelectSubset<T, CommentCreateArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Comments.
     * @param {CommentCreateManyArgs} args - Arguments to create many Comments.
     * @example
     * // Create many Comments
     * const comment = await prisma.comment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CommentCreateManyArgs>(args?: SelectSubset<T, CommentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Comment.
     * @param {CommentDeleteArgs} args - Arguments to delete one Comment.
     * @example
     * // Delete one Comment
     * const Comment = await prisma.comment.delete({
     *   where: {
     *     // ... filter to delete one Comment
     *   }
     * })
     * 
     */
    delete<T extends CommentDeleteArgs>(args: SelectSubset<T, CommentDeleteArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Comment.
     * @param {CommentUpdateArgs} args - Arguments to update one Comment.
     * @example
     * // Update one Comment
     * const comment = await prisma.comment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CommentUpdateArgs>(args: SelectSubset<T, CommentUpdateArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Comments.
     * @param {CommentDeleteManyArgs} args - Arguments to filter Comments to delete.
     * @example
     * // Delete a few Comments
     * const { count } = await prisma.comment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CommentDeleteManyArgs>(args?: SelectSubset<T, CommentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Comments
     * const comment = await prisma.comment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CommentUpdateManyArgs>(args: SelectSubset<T, CommentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Comment.
     * @param {CommentUpsertArgs} args - Arguments to update or create a Comment.
     * @example
     * // Update or create a Comment
     * const comment = await prisma.comment.upsert({
     *   create: {
     *     // ... data to create a Comment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Comment we want to update
     *   }
     * })
     */
    upsert<T extends CommentUpsertArgs>(args: SelectSubset<T, CommentUpsertArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentCountArgs} args - Arguments to filter Comments to count.
     * @example
     * // Count the number of Comments
     * const count = await prisma.comment.count({
     *   where: {
     *     // ... the filter for the Comments we want to count
     *   }
     * })
    **/
    count<T extends CommentCountArgs>(
      args?: Subset<T, CommentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CommentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Comment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CommentAggregateArgs>(args: Subset<T, CommentAggregateArgs>): Prisma.PrismaPromise<GetCommentAggregateType<T>>

    /**
     * Group by Comment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentGroupByArgs} args - Group by arguments.
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
      T extends CommentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CommentGroupByArgs['orderBy'] }
        : { orderBy?: CommentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CommentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCommentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Comment model
   */
  readonly fields: CommentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Comment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CommentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    approval<T extends ApprovalDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ApprovalDefaultArgs<ExtArgs>>): Prisma__ApprovalClient<$Result.GetResult<Prisma.$ApprovalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    document<T extends DocumentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DocumentDefaultArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Comment model
   */
  interface CommentFieldRefs {
    readonly id: FieldRef<"Comment", 'String'>
    readonly content: FieldRef<"Comment", 'String'>
    readonly approvalId: FieldRef<"Comment", 'String'>
    readonly documentId: FieldRef<"Comment", 'String'>
    readonly userId: FieldRef<"Comment", 'String'>
    readonly createdAt: FieldRef<"Comment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Comment findUnique
   */
  export type CommentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment findUniqueOrThrow
   */
  export type CommentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment findFirst
   */
  export type CommentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comments.
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comments.
     */
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Comment findFirstOrThrow
   */
  export type CommentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comments.
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comments.
     */
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Comment findMany
   */
  export type CommentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comments to fetch.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Comments.
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Comment create
   */
  export type CommentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * The data needed to create a Comment.
     */
    data: XOR<CommentCreateInput, CommentUncheckedCreateInput>
  }

  /**
   * Comment createMany
   */
  export type CommentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Comments.
     */
    data: CommentCreateManyInput | CommentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Comment update
   */
  export type CommentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * The data needed to update a Comment.
     */
    data: XOR<CommentUpdateInput, CommentUncheckedUpdateInput>
    /**
     * Choose, which Comment to update.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment updateMany
   */
  export type CommentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Comments.
     */
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyInput>
    /**
     * Filter which Comments to update
     */
    where?: CommentWhereInput
    /**
     * Limit how many Comments to update.
     */
    limit?: number
  }

  /**
   * Comment upsert
   */
  export type CommentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * The filter to search for the Comment to update in case it exists.
     */
    where: CommentWhereUniqueInput
    /**
     * In case the Comment found by the `where` argument doesn't exist, create a new Comment with this data.
     */
    create: XOR<CommentCreateInput, CommentUncheckedCreateInput>
    /**
     * In case the Comment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CommentUpdateInput, CommentUncheckedUpdateInput>
  }

  /**
   * Comment delete
   */
  export type CommentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter which Comment to delete.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment deleteMany
   */
  export type CommentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Comments to delete
     */
    where?: CommentWhereInput
    /**
     * Limit how many Comments to delete.
     */
    limit?: number
  }

  /**
   * Comment without action
   */
  export type CommentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
  }


  /**
   * Model Notification
   */

  export type AggregateNotification = {
    _count: NotificationCountAggregateOutputType | null
    _min: NotificationMinAggregateOutputType | null
    _max: NotificationMaxAggregateOutputType | null
  }

  export type NotificationMinAggregateOutputType = {
    id: string | null
    type: $Enums.NotificationType | null
    message: string | null
    read: boolean | null
    userId: string | null
    documentId: string | null
    createdAt: Date | null
  }

  export type NotificationMaxAggregateOutputType = {
    id: string | null
    type: $Enums.NotificationType | null
    message: string | null
    read: boolean | null
    userId: string | null
    documentId: string | null
    createdAt: Date | null
  }

  export type NotificationCountAggregateOutputType = {
    id: number
    type: number
    message: number
    read: number
    userId: number
    documentId: number
    createdAt: number
    _all: number
  }


  export type NotificationMinAggregateInputType = {
    id?: true
    type?: true
    message?: true
    read?: true
    userId?: true
    documentId?: true
    createdAt?: true
  }

  export type NotificationMaxAggregateInputType = {
    id?: true
    type?: true
    message?: true
    read?: true
    userId?: true
    documentId?: true
    createdAt?: true
  }

  export type NotificationCountAggregateInputType = {
    id?: true
    type?: true
    message?: true
    read?: true
    userId?: true
    documentId?: true
    createdAt?: true
    _all?: true
  }

  export type NotificationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notification to aggregate.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Notifications
    **/
    _count?: true | NotificationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NotificationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NotificationMaxAggregateInputType
  }

  export type GetNotificationAggregateType<T extends NotificationAggregateArgs> = {
        [P in keyof T & keyof AggregateNotification]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotification[P]>
      : GetScalarType<T[P], AggregateNotification[P]>
  }




  export type NotificationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
    orderBy?: NotificationOrderByWithAggregationInput | NotificationOrderByWithAggregationInput[]
    by: NotificationScalarFieldEnum[] | NotificationScalarFieldEnum
    having?: NotificationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NotificationCountAggregateInputType | true
    _min?: NotificationMinAggregateInputType
    _max?: NotificationMaxAggregateInputType
  }

  export type NotificationGroupByOutputType = {
    id: string
    type: $Enums.NotificationType
    message: string
    read: boolean
    userId: string
    documentId: string | null
    createdAt: Date
    _count: NotificationCountAggregateOutputType | null
    _min: NotificationMinAggregateOutputType | null
    _max: NotificationMaxAggregateOutputType | null
  }

  type GetNotificationGroupByPayload<T extends NotificationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NotificationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NotificationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NotificationGroupByOutputType[P]>
            : GetScalarType<T[P], NotificationGroupByOutputType[P]>
        }
      >
    >


  export type NotificationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    message?: boolean
    read?: boolean
    userId?: boolean
    documentId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>



  export type NotificationSelectScalar = {
    id?: boolean
    type?: boolean
    message?: boolean
    read?: boolean
    userId?: boolean
    documentId?: boolean
    createdAt?: boolean
  }

  export type NotificationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "type" | "message" | "read" | "userId" | "documentId" | "createdAt", ExtArgs["result"]["notification"]>
  export type NotificationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $NotificationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Notification"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      type: $Enums.NotificationType
      message: string
      read: boolean
      userId: string
      documentId: string | null
      createdAt: Date
    }, ExtArgs["result"]["notification"]>
    composites: {}
  }

  type NotificationGetPayload<S extends boolean | null | undefined | NotificationDefaultArgs> = $Result.GetResult<Prisma.$NotificationPayload, S>

  type NotificationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NotificationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NotificationCountAggregateInputType | true
    }

  export interface NotificationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Notification'], meta: { name: 'Notification' } }
    /**
     * Find zero or one Notification that matches the filter.
     * @param {NotificationFindUniqueArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NotificationFindUniqueArgs>(args: SelectSubset<T, NotificationFindUniqueArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Notification that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NotificationFindUniqueOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NotificationFindUniqueOrThrowArgs>(args: SelectSubset<T, NotificationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notification that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindFirstArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NotificationFindFirstArgs>(args?: SelectSubset<T, NotificationFindFirstArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notification that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindFirstOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NotificationFindFirstOrThrowArgs>(args?: SelectSubset<T, NotificationFindFirstOrThrowArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Notifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Notifications
     * const notifications = await prisma.notification.findMany()
     * 
     * // Get first 10 Notifications
     * const notifications = await prisma.notification.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const notificationWithIdOnly = await prisma.notification.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NotificationFindManyArgs>(args?: SelectSubset<T, NotificationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Notification.
     * @param {NotificationCreateArgs} args - Arguments to create a Notification.
     * @example
     * // Create one Notification
     * const Notification = await prisma.notification.create({
     *   data: {
     *     // ... data to create a Notification
     *   }
     * })
     * 
     */
    create<T extends NotificationCreateArgs>(args: SelectSubset<T, NotificationCreateArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Notifications.
     * @param {NotificationCreateManyArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notification = await prisma.notification.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NotificationCreateManyArgs>(args?: SelectSubset<T, NotificationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Notification.
     * @param {NotificationDeleteArgs} args - Arguments to delete one Notification.
     * @example
     * // Delete one Notification
     * const Notification = await prisma.notification.delete({
     *   where: {
     *     // ... filter to delete one Notification
     *   }
     * })
     * 
     */
    delete<T extends NotificationDeleteArgs>(args: SelectSubset<T, NotificationDeleteArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Notification.
     * @param {NotificationUpdateArgs} args - Arguments to update one Notification.
     * @example
     * // Update one Notification
     * const notification = await prisma.notification.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NotificationUpdateArgs>(args: SelectSubset<T, NotificationUpdateArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Notifications.
     * @param {NotificationDeleteManyArgs} args - Arguments to filter Notifications to delete.
     * @example
     * // Delete a few Notifications
     * const { count } = await prisma.notification.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NotificationDeleteManyArgs>(args?: SelectSubset<T, NotificationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Notifications
     * const notification = await prisma.notification.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NotificationUpdateManyArgs>(args: SelectSubset<T, NotificationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Notification.
     * @param {NotificationUpsertArgs} args - Arguments to update or create a Notification.
     * @example
     * // Update or create a Notification
     * const notification = await prisma.notification.upsert({
     *   create: {
     *     // ... data to create a Notification
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Notification we want to update
     *   }
     * })
     */
    upsert<T extends NotificationUpsertArgs>(args: SelectSubset<T, NotificationUpsertArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationCountArgs} args - Arguments to filter Notifications to count.
     * @example
     * // Count the number of Notifications
     * const count = await prisma.notification.count({
     *   where: {
     *     // ... the filter for the Notifications we want to count
     *   }
     * })
    **/
    count<T extends NotificationCountArgs>(
      args?: Subset<T, NotificationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NotificationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NotificationAggregateArgs>(args: Subset<T, NotificationAggregateArgs>): Prisma.PrismaPromise<GetNotificationAggregateType<T>>

    /**
     * Group by Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationGroupByArgs} args - Group by arguments.
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
      T extends NotificationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NotificationGroupByArgs['orderBy'] }
        : { orderBy?: NotificationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, NotificationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotificationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Notification model
   */
  readonly fields: NotificationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Notification.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NotificationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Notification model
   */
  interface NotificationFieldRefs {
    readonly id: FieldRef<"Notification", 'String'>
    readonly type: FieldRef<"Notification", 'NotificationType'>
    readonly message: FieldRef<"Notification", 'String'>
    readonly read: FieldRef<"Notification", 'Boolean'>
    readonly userId: FieldRef<"Notification", 'String'>
    readonly documentId: FieldRef<"Notification", 'String'>
    readonly createdAt: FieldRef<"Notification", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Notification findUnique
   */
  export type NotificationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification findUniqueOrThrow
   */
  export type NotificationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification findFirst
   */
  export type NotificationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification findFirstOrThrow
   */
  export type NotificationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification findMany
   */
  export type NotificationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notifications to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification create
   */
  export type NotificationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The data needed to create a Notification.
     */
    data: XOR<NotificationCreateInput, NotificationUncheckedCreateInput>
  }

  /**
   * Notification createMany
   */
  export type NotificationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Notifications.
     */
    data: NotificationCreateManyInput | NotificationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Notification update
   */
  export type NotificationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The data needed to update a Notification.
     */
    data: XOR<NotificationUpdateInput, NotificationUncheckedUpdateInput>
    /**
     * Choose, which Notification to update.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification updateMany
   */
  export type NotificationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Notifications.
     */
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyInput>
    /**
     * Filter which Notifications to update
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to update.
     */
    limit?: number
  }

  /**
   * Notification upsert
   */
  export type NotificationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The filter to search for the Notification to update in case it exists.
     */
    where: NotificationWhereUniqueInput
    /**
     * In case the Notification found by the `where` argument doesn't exist, create a new Notification with this data.
     */
    create: XOR<NotificationCreateInput, NotificationUncheckedCreateInput>
    /**
     * In case the Notification was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NotificationUpdateInput, NotificationUncheckedUpdateInput>
  }

  /**
   * Notification delete
   */
  export type NotificationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter which Notification to delete.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification deleteMany
   */
  export type NotificationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notifications to delete
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to delete.
     */
    limit?: number
  }

  /**
   * Notification without action
   */
  export type NotificationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
  }


  /**
   * Model Template
   */

  export type AggregateTemplate = {
    _count: TemplateCountAggregateOutputType | null
    _min: TemplateMinAggregateOutputType | null
    _max: TemplateMaxAggregateOutputType | null
  }

  export type TemplateMinAggregateOutputType = {
    id: string | null
    userId: string | null
    type: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TemplateMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    type: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TemplateCountAggregateOutputType = {
    id: number
    userId: number
    type: number
    name: number
    formData: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TemplateMinAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TemplateMaxAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TemplateCountAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    name?: true
    formData?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TemplateAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Template to aggregate.
     */
    where?: TemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Templates to fetch.
     */
    orderBy?: TemplateOrderByWithRelationInput | TemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Templates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Templates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Templates
    **/
    _count?: true | TemplateCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TemplateMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TemplateMaxAggregateInputType
  }

  export type GetTemplateAggregateType<T extends TemplateAggregateArgs> = {
        [P in keyof T & keyof AggregateTemplate]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTemplate[P]>
      : GetScalarType<T[P], AggregateTemplate[P]>
  }




  export type TemplateGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TemplateWhereInput
    orderBy?: TemplateOrderByWithAggregationInput | TemplateOrderByWithAggregationInput[]
    by: TemplateScalarFieldEnum[] | TemplateScalarFieldEnum
    having?: TemplateScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TemplateCountAggregateInputType | true
    _min?: TemplateMinAggregateInputType
    _max?: TemplateMaxAggregateInputType
  }

  export type TemplateGroupByOutputType = {
    id: string
    userId: string
    type: string
    name: string
    formData: JsonValue
    createdAt: Date
    updatedAt: Date
    _count: TemplateCountAggregateOutputType | null
    _min: TemplateMinAggregateOutputType | null
    _max: TemplateMaxAggregateOutputType | null
  }

  type GetTemplateGroupByPayload<T extends TemplateGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TemplateGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TemplateGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TemplateGroupByOutputType[P]>
            : GetScalarType<T[P], TemplateGroupByOutputType[P]>
        }
      >
    >


  export type TemplateSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    name?: boolean
    formData?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    documents?: boolean | Template$documentsArgs<ExtArgs>
    steps?: boolean | Template$stepsArgs<ExtArgs>
    _count?: boolean | TemplateCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["template"]>



  export type TemplateSelectScalar = {
    id?: boolean
    userId?: boolean
    type?: boolean
    name?: boolean
    formData?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TemplateOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "type" | "name" | "formData" | "createdAt" | "updatedAt", ExtArgs["result"]["template"]>
  export type TemplateInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    documents?: boolean | Template$documentsArgs<ExtArgs>
    steps?: boolean | Template$stepsArgs<ExtArgs>
    _count?: boolean | TemplateCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $TemplatePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Template"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      documents: Prisma.$DocumentPayload<ExtArgs>[]
      steps: Prisma.$TemplateStepPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      type: string
      name: string
      formData: Prisma.JsonValue
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["template"]>
    composites: {}
  }

  type TemplateGetPayload<S extends boolean | null | undefined | TemplateDefaultArgs> = $Result.GetResult<Prisma.$TemplatePayload, S>

  type TemplateCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TemplateFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TemplateCountAggregateInputType | true
    }

  export interface TemplateDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Template'], meta: { name: 'Template' } }
    /**
     * Find zero or one Template that matches the filter.
     * @param {TemplateFindUniqueArgs} args - Arguments to find a Template
     * @example
     * // Get one Template
     * const template = await prisma.template.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TemplateFindUniqueArgs>(args: SelectSubset<T, TemplateFindUniqueArgs<ExtArgs>>): Prisma__TemplateClient<$Result.GetResult<Prisma.$TemplatePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Template that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TemplateFindUniqueOrThrowArgs} args - Arguments to find a Template
     * @example
     * // Get one Template
     * const template = await prisma.template.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TemplateFindUniqueOrThrowArgs>(args: SelectSubset<T, TemplateFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TemplateClient<$Result.GetResult<Prisma.$TemplatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Template that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateFindFirstArgs} args - Arguments to find a Template
     * @example
     * // Get one Template
     * const template = await prisma.template.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TemplateFindFirstArgs>(args?: SelectSubset<T, TemplateFindFirstArgs<ExtArgs>>): Prisma__TemplateClient<$Result.GetResult<Prisma.$TemplatePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Template that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateFindFirstOrThrowArgs} args - Arguments to find a Template
     * @example
     * // Get one Template
     * const template = await prisma.template.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TemplateFindFirstOrThrowArgs>(args?: SelectSubset<T, TemplateFindFirstOrThrowArgs<ExtArgs>>): Prisma__TemplateClient<$Result.GetResult<Prisma.$TemplatePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Templates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Templates
     * const templates = await prisma.template.findMany()
     * 
     * // Get first 10 Templates
     * const templates = await prisma.template.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const templateWithIdOnly = await prisma.template.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TemplateFindManyArgs>(args?: SelectSubset<T, TemplateFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TemplatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Template.
     * @param {TemplateCreateArgs} args - Arguments to create a Template.
     * @example
     * // Create one Template
     * const Template = await prisma.template.create({
     *   data: {
     *     // ... data to create a Template
     *   }
     * })
     * 
     */
    create<T extends TemplateCreateArgs>(args: SelectSubset<T, TemplateCreateArgs<ExtArgs>>): Prisma__TemplateClient<$Result.GetResult<Prisma.$TemplatePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Templates.
     * @param {TemplateCreateManyArgs} args - Arguments to create many Templates.
     * @example
     * // Create many Templates
     * const template = await prisma.template.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TemplateCreateManyArgs>(args?: SelectSubset<T, TemplateCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Template.
     * @param {TemplateDeleteArgs} args - Arguments to delete one Template.
     * @example
     * // Delete one Template
     * const Template = await prisma.template.delete({
     *   where: {
     *     // ... filter to delete one Template
     *   }
     * })
     * 
     */
    delete<T extends TemplateDeleteArgs>(args: SelectSubset<T, TemplateDeleteArgs<ExtArgs>>): Prisma__TemplateClient<$Result.GetResult<Prisma.$TemplatePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Template.
     * @param {TemplateUpdateArgs} args - Arguments to update one Template.
     * @example
     * // Update one Template
     * const template = await prisma.template.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TemplateUpdateArgs>(args: SelectSubset<T, TemplateUpdateArgs<ExtArgs>>): Prisma__TemplateClient<$Result.GetResult<Prisma.$TemplatePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Templates.
     * @param {TemplateDeleteManyArgs} args - Arguments to filter Templates to delete.
     * @example
     * // Delete a few Templates
     * const { count } = await prisma.template.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TemplateDeleteManyArgs>(args?: SelectSubset<T, TemplateDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Templates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Templates
     * const template = await prisma.template.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TemplateUpdateManyArgs>(args: SelectSubset<T, TemplateUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Template.
     * @param {TemplateUpsertArgs} args - Arguments to update or create a Template.
     * @example
     * // Update or create a Template
     * const template = await prisma.template.upsert({
     *   create: {
     *     // ... data to create a Template
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Template we want to update
     *   }
     * })
     */
    upsert<T extends TemplateUpsertArgs>(args: SelectSubset<T, TemplateUpsertArgs<ExtArgs>>): Prisma__TemplateClient<$Result.GetResult<Prisma.$TemplatePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Templates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateCountArgs} args - Arguments to filter Templates to count.
     * @example
     * // Count the number of Templates
     * const count = await prisma.template.count({
     *   where: {
     *     // ... the filter for the Templates we want to count
     *   }
     * })
    **/
    count<T extends TemplateCountArgs>(
      args?: Subset<T, TemplateCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TemplateCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Template.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TemplateAggregateArgs>(args: Subset<T, TemplateAggregateArgs>): Prisma.PrismaPromise<GetTemplateAggregateType<T>>

    /**
     * Group by Template.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateGroupByArgs} args - Group by arguments.
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
      T extends TemplateGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TemplateGroupByArgs['orderBy'] }
        : { orderBy?: TemplateGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TemplateGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTemplateGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Template model
   */
  readonly fields: TemplateFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Template.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TemplateClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    documents<T extends Template$documentsArgs<ExtArgs> = {}>(args?: Subset<T, Template$documentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    steps<T extends Template$stepsArgs<ExtArgs> = {}>(args?: Subset<T, Template$stepsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TemplateStepPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Template model
   */
  interface TemplateFieldRefs {
    readonly id: FieldRef<"Template", 'String'>
    readonly userId: FieldRef<"Template", 'String'>
    readonly type: FieldRef<"Template", 'String'>
    readonly name: FieldRef<"Template", 'String'>
    readonly formData: FieldRef<"Template", 'Json'>
    readonly createdAt: FieldRef<"Template", 'DateTime'>
    readonly updatedAt: FieldRef<"Template", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Template findUnique
   */
  export type TemplateFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Template
     */
    omit?: TemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateInclude<ExtArgs> | null
    /**
     * Filter, which Template to fetch.
     */
    where: TemplateWhereUniqueInput
  }

  /**
   * Template findUniqueOrThrow
   */
  export type TemplateFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Template
     */
    omit?: TemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateInclude<ExtArgs> | null
    /**
     * Filter, which Template to fetch.
     */
    where: TemplateWhereUniqueInput
  }

  /**
   * Template findFirst
   */
  export type TemplateFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Template
     */
    omit?: TemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateInclude<ExtArgs> | null
    /**
     * Filter, which Template to fetch.
     */
    where?: TemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Templates to fetch.
     */
    orderBy?: TemplateOrderByWithRelationInput | TemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Templates.
     */
    cursor?: TemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Templates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Templates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Templates.
     */
    distinct?: TemplateScalarFieldEnum | TemplateScalarFieldEnum[]
  }

  /**
   * Template findFirstOrThrow
   */
  export type TemplateFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Template
     */
    omit?: TemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateInclude<ExtArgs> | null
    /**
     * Filter, which Template to fetch.
     */
    where?: TemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Templates to fetch.
     */
    orderBy?: TemplateOrderByWithRelationInput | TemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Templates.
     */
    cursor?: TemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Templates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Templates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Templates.
     */
    distinct?: TemplateScalarFieldEnum | TemplateScalarFieldEnum[]
  }

  /**
   * Template findMany
   */
  export type TemplateFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Template
     */
    omit?: TemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateInclude<ExtArgs> | null
    /**
     * Filter, which Templates to fetch.
     */
    where?: TemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Templates to fetch.
     */
    orderBy?: TemplateOrderByWithRelationInput | TemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Templates.
     */
    cursor?: TemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Templates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Templates.
     */
    skip?: number
    distinct?: TemplateScalarFieldEnum | TemplateScalarFieldEnum[]
  }

  /**
   * Template create
   */
  export type TemplateCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Template
     */
    omit?: TemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateInclude<ExtArgs> | null
    /**
     * The data needed to create a Template.
     */
    data: XOR<TemplateCreateInput, TemplateUncheckedCreateInput>
  }

  /**
   * Template createMany
   */
  export type TemplateCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Templates.
     */
    data: TemplateCreateManyInput | TemplateCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Template update
   */
  export type TemplateUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Template
     */
    omit?: TemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateInclude<ExtArgs> | null
    /**
     * The data needed to update a Template.
     */
    data: XOR<TemplateUpdateInput, TemplateUncheckedUpdateInput>
    /**
     * Choose, which Template to update.
     */
    where: TemplateWhereUniqueInput
  }

  /**
   * Template updateMany
   */
  export type TemplateUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Templates.
     */
    data: XOR<TemplateUpdateManyMutationInput, TemplateUncheckedUpdateManyInput>
    /**
     * Filter which Templates to update
     */
    where?: TemplateWhereInput
    /**
     * Limit how many Templates to update.
     */
    limit?: number
  }

  /**
   * Template upsert
   */
  export type TemplateUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Template
     */
    omit?: TemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateInclude<ExtArgs> | null
    /**
     * The filter to search for the Template to update in case it exists.
     */
    where: TemplateWhereUniqueInput
    /**
     * In case the Template found by the `where` argument doesn't exist, create a new Template with this data.
     */
    create: XOR<TemplateCreateInput, TemplateUncheckedCreateInput>
    /**
     * In case the Template was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TemplateUpdateInput, TemplateUncheckedUpdateInput>
  }

  /**
   * Template delete
   */
  export type TemplateDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Template
     */
    omit?: TemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateInclude<ExtArgs> | null
    /**
     * Filter which Template to delete.
     */
    where: TemplateWhereUniqueInput
  }

  /**
   * Template deleteMany
   */
  export type TemplateDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Templates to delete
     */
    where?: TemplateWhereInput
    /**
     * Limit how many Templates to delete.
     */
    limit?: number
  }

  /**
   * Template.documents
   */
  export type Template$documentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    where?: DocumentWhereInput
    orderBy?: DocumentOrderByWithRelationInput | DocumentOrderByWithRelationInput[]
    cursor?: DocumentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DocumentScalarFieldEnum | DocumentScalarFieldEnum[]
  }

  /**
   * Template.steps
   */
  export type Template$stepsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemplateStep
     */
    select?: TemplateStepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TemplateStep
     */
    omit?: TemplateStepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateStepInclude<ExtArgs> | null
    where?: TemplateStepWhereInput
    orderBy?: TemplateStepOrderByWithRelationInput | TemplateStepOrderByWithRelationInput[]
    cursor?: TemplateStepWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TemplateStepScalarFieldEnum | TemplateStepScalarFieldEnum[]
  }

  /**
   * Template without action
   */
  export type TemplateDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Template
     */
    omit?: TemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateInclude<ExtArgs> | null
  }


  /**
   * Model TemplateStep
   */

  export type AggregateTemplateStep = {
    _count: TemplateStepCountAggregateOutputType | null
    _avg: TemplateStepAvgAggregateOutputType | null
    _sum: TemplateStepSumAggregateOutputType | null
    _min: TemplateStepMinAggregateOutputType | null
    _max: TemplateStepMaxAggregateOutputType | null
  }

  export type TemplateStepAvgAggregateOutputType = {
    sequenceOrder: number | null
  }

  export type TemplateStepSumAggregateOutputType = {
    sequenceOrder: number | null
  }

  export type TemplateStepMinAggregateOutputType = {
    id: string | null
    templateId: string | null
    approverId: string | null
    sequenceOrder: number | null
    createdAt: Date | null
  }

  export type TemplateStepMaxAggregateOutputType = {
    id: string | null
    templateId: string | null
    approverId: string | null
    sequenceOrder: number | null
    createdAt: Date | null
  }

  export type TemplateStepCountAggregateOutputType = {
    id: number
    templateId: number
    approverId: number
    sequenceOrder: number
    createdAt: number
    _all: number
  }


  export type TemplateStepAvgAggregateInputType = {
    sequenceOrder?: true
  }

  export type TemplateStepSumAggregateInputType = {
    sequenceOrder?: true
  }

  export type TemplateStepMinAggregateInputType = {
    id?: true
    templateId?: true
    approverId?: true
    sequenceOrder?: true
    createdAt?: true
  }

  export type TemplateStepMaxAggregateInputType = {
    id?: true
    templateId?: true
    approverId?: true
    sequenceOrder?: true
    createdAt?: true
  }

  export type TemplateStepCountAggregateInputType = {
    id?: true
    templateId?: true
    approverId?: true
    sequenceOrder?: true
    createdAt?: true
    _all?: true
  }

  export type TemplateStepAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TemplateStep to aggregate.
     */
    where?: TemplateStepWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TemplateSteps to fetch.
     */
    orderBy?: TemplateStepOrderByWithRelationInput | TemplateStepOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TemplateStepWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TemplateSteps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TemplateSteps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TemplateSteps
    **/
    _count?: true | TemplateStepCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TemplateStepAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TemplateStepSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TemplateStepMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TemplateStepMaxAggregateInputType
  }

  export type GetTemplateStepAggregateType<T extends TemplateStepAggregateArgs> = {
        [P in keyof T & keyof AggregateTemplateStep]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTemplateStep[P]>
      : GetScalarType<T[P], AggregateTemplateStep[P]>
  }




  export type TemplateStepGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TemplateStepWhereInput
    orderBy?: TemplateStepOrderByWithAggregationInput | TemplateStepOrderByWithAggregationInput[]
    by: TemplateStepScalarFieldEnum[] | TemplateStepScalarFieldEnum
    having?: TemplateStepScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TemplateStepCountAggregateInputType | true
    _avg?: TemplateStepAvgAggregateInputType
    _sum?: TemplateStepSumAggregateInputType
    _min?: TemplateStepMinAggregateInputType
    _max?: TemplateStepMaxAggregateInputType
  }

  export type TemplateStepGroupByOutputType = {
    id: string
    templateId: string
    approverId: string
    sequenceOrder: number
    createdAt: Date
    _count: TemplateStepCountAggregateOutputType | null
    _avg: TemplateStepAvgAggregateOutputType | null
    _sum: TemplateStepSumAggregateOutputType | null
    _min: TemplateStepMinAggregateOutputType | null
    _max: TemplateStepMaxAggregateOutputType | null
  }

  type GetTemplateStepGroupByPayload<T extends TemplateStepGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TemplateStepGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TemplateStepGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TemplateStepGroupByOutputType[P]>
            : GetScalarType<T[P], TemplateStepGroupByOutputType[P]>
        }
      >
    >


  export type TemplateStepSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    templateId?: boolean
    approverId?: boolean
    sequenceOrder?: boolean
    createdAt?: boolean
    template?: boolean | TemplateDefaultArgs<ExtArgs>
    approver?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["templateStep"]>



  export type TemplateStepSelectScalar = {
    id?: boolean
    templateId?: boolean
    approverId?: boolean
    sequenceOrder?: boolean
    createdAt?: boolean
  }

  export type TemplateStepOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "templateId" | "approverId" | "sequenceOrder" | "createdAt", ExtArgs["result"]["templateStep"]>
  export type TemplateStepInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    template?: boolean | TemplateDefaultArgs<ExtArgs>
    approver?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $TemplateStepPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TemplateStep"
    objects: {
      template: Prisma.$TemplatePayload<ExtArgs>
      approver: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      templateId: string
      approverId: string
      sequenceOrder: number
      createdAt: Date
    }, ExtArgs["result"]["templateStep"]>
    composites: {}
  }

  type TemplateStepGetPayload<S extends boolean | null | undefined | TemplateStepDefaultArgs> = $Result.GetResult<Prisma.$TemplateStepPayload, S>

  type TemplateStepCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TemplateStepFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TemplateStepCountAggregateInputType | true
    }

  export interface TemplateStepDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TemplateStep'], meta: { name: 'TemplateStep' } }
    /**
     * Find zero or one TemplateStep that matches the filter.
     * @param {TemplateStepFindUniqueArgs} args - Arguments to find a TemplateStep
     * @example
     * // Get one TemplateStep
     * const templateStep = await prisma.templateStep.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TemplateStepFindUniqueArgs>(args: SelectSubset<T, TemplateStepFindUniqueArgs<ExtArgs>>): Prisma__TemplateStepClient<$Result.GetResult<Prisma.$TemplateStepPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TemplateStep that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TemplateStepFindUniqueOrThrowArgs} args - Arguments to find a TemplateStep
     * @example
     * // Get one TemplateStep
     * const templateStep = await prisma.templateStep.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TemplateStepFindUniqueOrThrowArgs>(args: SelectSubset<T, TemplateStepFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TemplateStepClient<$Result.GetResult<Prisma.$TemplateStepPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TemplateStep that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateStepFindFirstArgs} args - Arguments to find a TemplateStep
     * @example
     * // Get one TemplateStep
     * const templateStep = await prisma.templateStep.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TemplateStepFindFirstArgs>(args?: SelectSubset<T, TemplateStepFindFirstArgs<ExtArgs>>): Prisma__TemplateStepClient<$Result.GetResult<Prisma.$TemplateStepPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TemplateStep that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateStepFindFirstOrThrowArgs} args - Arguments to find a TemplateStep
     * @example
     * // Get one TemplateStep
     * const templateStep = await prisma.templateStep.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TemplateStepFindFirstOrThrowArgs>(args?: SelectSubset<T, TemplateStepFindFirstOrThrowArgs<ExtArgs>>): Prisma__TemplateStepClient<$Result.GetResult<Prisma.$TemplateStepPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TemplateSteps that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateStepFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TemplateSteps
     * const templateSteps = await prisma.templateStep.findMany()
     * 
     * // Get first 10 TemplateSteps
     * const templateSteps = await prisma.templateStep.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const templateStepWithIdOnly = await prisma.templateStep.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TemplateStepFindManyArgs>(args?: SelectSubset<T, TemplateStepFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TemplateStepPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TemplateStep.
     * @param {TemplateStepCreateArgs} args - Arguments to create a TemplateStep.
     * @example
     * // Create one TemplateStep
     * const TemplateStep = await prisma.templateStep.create({
     *   data: {
     *     // ... data to create a TemplateStep
     *   }
     * })
     * 
     */
    create<T extends TemplateStepCreateArgs>(args: SelectSubset<T, TemplateStepCreateArgs<ExtArgs>>): Prisma__TemplateStepClient<$Result.GetResult<Prisma.$TemplateStepPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TemplateSteps.
     * @param {TemplateStepCreateManyArgs} args - Arguments to create many TemplateSteps.
     * @example
     * // Create many TemplateSteps
     * const templateStep = await prisma.templateStep.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TemplateStepCreateManyArgs>(args?: SelectSubset<T, TemplateStepCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a TemplateStep.
     * @param {TemplateStepDeleteArgs} args - Arguments to delete one TemplateStep.
     * @example
     * // Delete one TemplateStep
     * const TemplateStep = await prisma.templateStep.delete({
     *   where: {
     *     // ... filter to delete one TemplateStep
     *   }
     * })
     * 
     */
    delete<T extends TemplateStepDeleteArgs>(args: SelectSubset<T, TemplateStepDeleteArgs<ExtArgs>>): Prisma__TemplateStepClient<$Result.GetResult<Prisma.$TemplateStepPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TemplateStep.
     * @param {TemplateStepUpdateArgs} args - Arguments to update one TemplateStep.
     * @example
     * // Update one TemplateStep
     * const templateStep = await prisma.templateStep.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TemplateStepUpdateArgs>(args: SelectSubset<T, TemplateStepUpdateArgs<ExtArgs>>): Prisma__TemplateStepClient<$Result.GetResult<Prisma.$TemplateStepPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TemplateSteps.
     * @param {TemplateStepDeleteManyArgs} args - Arguments to filter TemplateSteps to delete.
     * @example
     * // Delete a few TemplateSteps
     * const { count } = await prisma.templateStep.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TemplateStepDeleteManyArgs>(args?: SelectSubset<T, TemplateStepDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TemplateSteps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateStepUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TemplateSteps
     * const templateStep = await prisma.templateStep.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TemplateStepUpdateManyArgs>(args: SelectSubset<T, TemplateStepUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TemplateStep.
     * @param {TemplateStepUpsertArgs} args - Arguments to update or create a TemplateStep.
     * @example
     * // Update or create a TemplateStep
     * const templateStep = await prisma.templateStep.upsert({
     *   create: {
     *     // ... data to create a TemplateStep
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TemplateStep we want to update
     *   }
     * })
     */
    upsert<T extends TemplateStepUpsertArgs>(args: SelectSubset<T, TemplateStepUpsertArgs<ExtArgs>>): Prisma__TemplateStepClient<$Result.GetResult<Prisma.$TemplateStepPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TemplateSteps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateStepCountArgs} args - Arguments to filter TemplateSteps to count.
     * @example
     * // Count the number of TemplateSteps
     * const count = await prisma.templateStep.count({
     *   where: {
     *     // ... the filter for the TemplateSteps we want to count
     *   }
     * })
    **/
    count<T extends TemplateStepCountArgs>(
      args?: Subset<T, TemplateStepCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TemplateStepCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TemplateStep.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateStepAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TemplateStepAggregateArgs>(args: Subset<T, TemplateStepAggregateArgs>): Prisma.PrismaPromise<GetTemplateStepAggregateType<T>>

    /**
     * Group by TemplateStep.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateStepGroupByArgs} args - Group by arguments.
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
      T extends TemplateStepGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TemplateStepGroupByArgs['orderBy'] }
        : { orderBy?: TemplateStepGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TemplateStepGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTemplateStepGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TemplateStep model
   */
  readonly fields: TemplateStepFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TemplateStep.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TemplateStepClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    template<T extends TemplateDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TemplateDefaultArgs<ExtArgs>>): Prisma__TemplateClient<$Result.GetResult<Prisma.$TemplatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    approver<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the TemplateStep model
   */
  interface TemplateStepFieldRefs {
    readonly id: FieldRef<"TemplateStep", 'String'>
    readonly templateId: FieldRef<"TemplateStep", 'String'>
    readonly approverId: FieldRef<"TemplateStep", 'String'>
    readonly sequenceOrder: FieldRef<"TemplateStep", 'Int'>
    readonly createdAt: FieldRef<"TemplateStep", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TemplateStep findUnique
   */
  export type TemplateStepFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemplateStep
     */
    select?: TemplateStepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TemplateStep
     */
    omit?: TemplateStepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateStepInclude<ExtArgs> | null
    /**
     * Filter, which TemplateStep to fetch.
     */
    where: TemplateStepWhereUniqueInput
  }

  /**
   * TemplateStep findUniqueOrThrow
   */
  export type TemplateStepFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemplateStep
     */
    select?: TemplateStepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TemplateStep
     */
    omit?: TemplateStepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateStepInclude<ExtArgs> | null
    /**
     * Filter, which TemplateStep to fetch.
     */
    where: TemplateStepWhereUniqueInput
  }

  /**
   * TemplateStep findFirst
   */
  export type TemplateStepFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemplateStep
     */
    select?: TemplateStepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TemplateStep
     */
    omit?: TemplateStepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateStepInclude<ExtArgs> | null
    /**
     * Filter, which TemplateStep to fetch.
     */
    where?: TemplateStepWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TemplateSteps to fetch.
     */
    orderBy?: TemplateStepOrderByWithRelationInput | TemplateStepOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TemplateSteps.
     */
    cursor?: TemplateStepWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TemplateSteps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TemplateSteps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TemplateSteps.
     */
    distinct?: TemplateStepScalarFieldEnum | TemplateStepScalarFieldEnum[]
  }

  /**
   * TemplateStep findFirstOrThrow
   */
  export type TemplateStepFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemplateStep
     */
    select?: TemplateStepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TemplateStep
     */
    omit?: TemplateStepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateStepInclude<ExtArgs> | null
    /**
     * Filter, which TemplateStep to fetch.
     */
    where?: TemplateStepWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TemplateSteps to fetch.
     */
    orderBy?: TemplateStepOrderByWithRelationInput | TemplateStepOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TemplateSteps.
     */
    cursor?: TemplateStepWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TemplateSteps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TemplateSteps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TemplateSteps.
     */
    distinct?: TemplateStepScalarFieldEnum | TemplateStepScalarFieldEnum[]
  }

  /**
   * TemplateStep findMany
   */
  export type TemplateStepFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemplateStep
     */
    select?: TemplateStepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TemplateStep
     */
    omit?: TemplateStepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateStepInclude<ExtArgs> | null
    /**
     * Filter, which TemplateSteps to fetch.
     */
    where?: TemplateStepWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TemplateSteps to fetch.
     */
    orderBy?: TemplateStepOrderByWithRelationInput | TemplateStepOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TemplateSteps.
     */
    cursor?: TemplateStepWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TemplateSteps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TemplateSteps.
     */
    skip?: number
    distinct?: TemplateStepScalarFieldEnum | TemplateStepScalarFieldEnum[]
  }

  /**
   * TemplateStep create
   */
  export type TemplateStepCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemplateStep
     */
    select?: TemplateStepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TemplateStep
     */
    omit?: TemplateStepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateStepInclude<ExtArgs> | null
    /**
     * The data needed to create a TemplateStep.
     */
    data: XOR<TemplateStepCreateInput, TemplateStepUncheckedCreateInput>
  }

  /**
   * TemplateStep createMany
   */
  export type TemplateStepCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TemplateSteps.
     */
    data: TemplateStepCreateManyInput | TemplateStepCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TemplateStep update
   */
  export type TemplateStepUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemplateStep
     */
    select?: TemplateStepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TemplateStep
     */
    omit?: TemplateStepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateStepInclude<ExtArgs> | null
    /**
     * The data needed to update a TemplateStep.
     */
    data: XOR<TemplateStepUpdateInput, TemplateStepUncheckedUpdateInput>
    /**
     * Choose, which TemplateStep to update.
     */
    where: TemplateStepWhereUniqueInput
  }

  /**
   * TemplateStep updateMany
   */
  export type TemplateStepUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TemplateSteps.
     */
    data: XOR<TemplateStepUpdateManyMutationInput, TemplateStepUncheckedUpdateManyInput>
    /**
     * Filter which TemplateSteps to update
     */
    where?: TemplateStepWhereInput
    /**
     * Limit how many TemplateSteps to update.
     */
    limit?: number
  }

  /**
   * TemplateStep upsert
   */
  export type TemplateStepUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemplateStep
     */
    select?: TemplateStepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TemplateStep
     */
    omit?: TemplateStepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateStepInclude<ExtArgs> | null
    /**
     * The filter to search for the TemplateStep to update in case it exists.
     */
    where: TemplateStepWhereUniqueInput
    /**
     * In case the TemplateStep found by the `where` argument doesn't exist, create a new TemplateStep with this data.
     */
    create: XOR<TemplateStepCreateInput, TemplateStepUncheckedCreateInput>
    /**
     * In case the TemplateStep was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TemplateStepUpdateInput, TemplateStepUncheckedUpdateInput>
  }

  /**
   * TemplateStep delete
   */
  export type TemplateStepDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemplateStep
     */
    select?: TemplateStepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TemplateStep
     */
    omit?: TemplateStepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateStepInclude<ExtArgs> | null
    /**
     * Filter which TemplateStep to delete.
     */
    where: TemplateStepWhereUniqueInput
  }

  /**
   * TemplateStep deleteMany
   */
  export type TemplateStepDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TemplateSteps to delete
     */
    where?: TemplateStepWhereInput
    /**
     * Limit how many TemplateSteps to delete.
     */
    limit?: number
  }

  /**
   * TemplateStep without action
   */
  export type TemplateStepDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemplateStep
     */
    select?: TemplateStepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TemplateStep
     */
    omit?: TemplateStepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateStepInclude<ExtArgs> | null
  }


  /**
   * Model Audit
   */

  export type AggregateAudit = {
    _count: AuditCountAggregateOutputType | null
    _min: AuditMinAggregateOutputType | null
    _max: AuditMaxAggregateOutputType | null
  }

  export type AuditMinAggregateOutputType = {
    id: string | null
    documentId: string | null
    userId: string | null
    action: $Enums.AuditAction | null
    details: string | null
    createdAt: Date | null
  }

  export type AuditMaxAggregateOutputType = {
    id: string | null
    documentId: string | null
    userId: string | null
    action: $Enums.AuditAction | null
    details: string | null
    createdAt: Date | null
  }

  export type AuditCountAggregateOutputType = {
    id: number
    documentId: number
    userId: number
    action: number
    details: number
    createdAt: number
    _all: number
  }


  export type AuditMinAggregateInputType = {
    id?: true
    documentId?: true
    userId?: true
    action?: true
    details?: true
    createdAt?: true
  }

  export type AuditMaxAggregateInputType = {
    id?: true
    documentId?: true
    userId?: true
    action?: true
    details?: true
    createdAt?: true
  }

  export type AuditCountAggregateInputType = {
    id?: true
    documentId?: true
    userId?: true
    action?: true
    details?: true
    createdAt?: true
    _all?: true
  }

  export type AuditAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Audit to aggregate.
     */
    where?: AuditWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Audits to fetch.
     */
    orderBy?: AuditOrderByWithRelationInput | AuditOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AuditWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Audits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Audits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Audits
    **/
    _count?: true | AuditCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AuditMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AuditMaxAggregateInputType
  }

  export type GetAuditAggregateType<T extends AuditAggregateArgs> = {
        [P in keyof T & keyof AggregateAudit]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAudit[P]>
      : GetScalarType<T[P], AggregateAudit[P]>
  }




  export type AuditGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuditWhereInput
    orderBy?: AuditOrderByWithAggregationInput | AuditOrderByWithAggregationInput[]
    by: AuditScalarFieldEnum[] | AuditScalarFieldEnum
    having?: AuditScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AuditCountAggregateInputType | true
    _min?: AuditMinAggregateInputType
    _max?: AuditMaxAggregateInputType
  }

  export type AuditGroupByOutputType = {
    id: string
    documentId: string
    userId: string
    action: $Enums.AuditAction
    details: string | null
    createdAt: Date
    _count: AuditCountAggregateOutputType | null
    _min: AuditMinAggregateOutputType | null
    _max: AuditMaxAggregateOutputType | null
  }

  type GetAuditGroupByPayload<T extends AuditGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AuditGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AuditGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AuditGroupByOutputType[P]>
            : GetScalarType<T[P], AuditGroupByOutputType[P]>
        }
      >
    >


  export type AuditSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    documentId?: boolean
    userId?: boolean
    action?: boolean
    details?: boolean
    createdAt?: boolean
    document?: boolean | DocumentDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["audit"]>



  export type AuditSelectScalar = {
    id?: boolean
    documentId?: boolean
    userId?: boolean
    action?: boolean
    details?: boolean
    createdAt?: boolean
  }

  export type AuditOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "documentId" | "userId" | "action" | "details" | "createdAt", ExtArgs["result"]["audit"]>
  export type AuditInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    document?: boolean | DocumentDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AuditPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Audit"
    objects: {
      document: Prisma.$DocumentPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      documentId: string
      userId: string
      action: $Enums.AuditAction
      details: string | null
      createdAt: Date
    }, ExtArgs["result"]["audit"]>
    composites: {}
  }

  type AuditGetPayload<S extends boolean | null | undefined | AuditDefaultArgs> = $Result.GetResult<Prisma.$AuditPayload, S>

  type AuditCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AuditFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AuditCountAggregateInputType | true
    }

  export interface AuditDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Audit'], meta: { name: 'Audit' } }
    /**
     * Find zero or one Audit that matches the filter.
     * @param {AuditFindUniqueArgs} args - Arguments to find a Audit
     * @example
     * // Get one Audit
     * const audit = await prisma.audit.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AuditFindUniqueArgs>(args: SelectSubset<T, AuditFindUniqueArgs<ExtArgs>>): Prisma__AuditClient<$Result.GetResult<Prisma.$AuditPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Audit that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AuditFindUniqueOrThrowArgs} args - Arguments to find a Audit
     * @example
     * // Get one Audit
     * const audit = await prisma.audit.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AuditFindUniqueOrThrowArgs>(args: SelectSubset<T, AuditFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AuditClient<$Result.GetResult<Prisma.$AuditPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Audit that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditFindFirstArgs} args - Arguments to find a Audit
     * @example
     * // Get one Audit
     * const audit = await prisma.audit.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AuditFindFirstArgs>(args?: SelectSubset<T, AuditFindFirstArgs<ExtArgs>>): Prisma__AuditClient<$Result.GetResult<Prisma.$AuditPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Audit that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditFindFirstOrThrowArgs} args - Arguments to find a Audit
     * @example
     * // Get one Audit
     * const audit = await prisma.audit.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AuditFindFirstOrThrowArgs>(args?: SelectSubset<T, AuditFindFirstOrThrowArgs<ExtArgs>>): Prisma__AuditClient<$Result.GetResult<Prisma.$AuditPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Audits that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Audits
     * const audits = await prisma.audit.findMany()
     * 
     * // Get first 10 Audits
     * const audits = await prisma.audit.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const auditWithIdOnly = await prisma.audit.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AuditFindManyArgs>(args?: SelectSubset<T, AuditFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Audit.
     * @param {AuditCreateArgs} args - Arguments to create a Audit.
     * @example
     * // Create one Audit
     * const Audit = await prisma.audit.create({
     *   data: {
     *     // ... data to create a Audit
     *   }
     * })
     * 
     */
    create<T extends AuditCreateArgs>(args: SelectSubset<T, AuditCreateArgs<ExtArgs>>): Prisma__AuditClient<$Result.GetResult<Prisma.$AuditPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Audits.
     * @param {AuditCreateManyArgs} args - Arguments to create many Audits.
     * @example
     * // Create many Audits
     * const audit = await prisma.audit.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AuditCreateManyArgs>(args?: SelectSubset<T, AuditCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Audit.
     * @param {AuditDeleteArgs} args - Arguments to delete one Audit.
     * @example
     * // Delete one Audit
     * const Audit = await prisma.audit.delete({
     *   where: {
     *     // ... filter to delete one Audit
     *   }
     * })
     * 
     */
    delete<T extends AuditDeleteArgs>(args: SelectSubset<T, AuditDeleteArgs<ExtArgs>>): Prisma__AuditClient<$Result.GetResult<Prisma.$AuditPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Audit.
     * @param {AuditUpdateArgs} args - Arguments to update one Audit.
     * @example
     * // Update one Audit
     * const audit = await prisma.audit.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AuditUpdateArgs>(args: SelectSubset<T, AuditUpdateArgs<ExtArgs>>): Prisma__AuditClient<$Result.GetResult<Prisma.$AuditPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Audits.
     * @param {AuditDeleteManyArgs} args - Arguments to filter Audits to delete.
     * @example
     * // Delete a few Audits
     * const { count } = await prisma.audit.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AuditDeleteManyArgs>(args?: SelectSubset<T, AuditDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Audits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Audits
     * const audit = await prisma.audit.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AuditUpdateManyArgs>(args: SelectSubset<T, AuditUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Audit.
     * @param {AuditUpsertArgs} args - Arguments to update or create a Audit.
     * @example
     * // Update or create a Audit
     * const audit = await prisma.audit.upsert({
     *   create: {
     *     // ... data to create a Audit
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Audit we want to update
     *   }
     * })
     */
    upsert<T extends AuditUpsertArgs>(args: SelectSubset<T, AuditUpsertArgs<ExtArgs>>): Prisma__AuditClient<$Result.GetResult<Prisma.$AuditPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Audits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditCountArgs} args - Arguments to filter Audits to count.
     * @example
     * // Count the number of Audits
     * const count = await prisma.audit.count({
     *   where: {
     *     // ... the filter for the Audits we want to count
     *   }
     * })
    **/
    count<T extends AuditCountArgs>(
      args?: Subset<T, AuditCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AuditCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Audit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AuditAggregateArgs>(args: Subset<T, AuditAggregateArgs>): Prisma.PrismaPromise<GetAuditAggregateType<T>>

    /**
     * Group by Audit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditGroupByArgs} args - Group by arguments.
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
      T extends AuditGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AuditGroupByArgs['orderBy'] }
        : { orderBy?: AuditGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AuditGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAuditGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Audit model
   */
  readonly fields: AuditFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Audit.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AuditClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    document<T extends DocumentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DocumentDefaultArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Audit model
   */
  interface AuditFieldRefs {
    readonly id: FieldRef<"Audit", 'String'>
    readonly documentId: FieldRef<"Audit", 'String'>
    readonly userId: FieldRef<"Audit", 'String'>
    readonly action: FieldRef<"Audit", 'AuditAction'>
    readonly details: FieldRef<"Audit", 'String'>
    readonly createdAt: FieldRef<"Audit", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Audit findUnique
   */
  export type AuditFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Audit
     */
    select?: AuditSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Audit
     */
    omit?: AuditOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditInclude<ExtArgs> | null
    /**
     * Filter, which Audit to fetch.
     */
    where: AuditWhereUniqueInput
  }

  /**
   * Audit findUniqueOrThrow
   */
  export type AuditFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Audit
     */
    select?: AuditSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Audit
     */
    omit?: AuditOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditInclude<ExtArgs> | null
    /**
     * Filter, which Audit to fetch.
     */
    where: AuditWhereUniqueInput
  }

  /**
   * Audit findFirst
   */
  export type AuditFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Audit
     */
    select?: AuditSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Audit
     */
    omit?: AuditOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditInclude<ExtArgs> | null
    /**
     * Filter, which Audit to fetch.
     */
    where?: AuditWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Audits to fetch.
     */
    orderBy?: AuditOrderByWithRelationInput | AuditOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Audits.
     */
    cursor?: AuditWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Audits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Audits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Audits.
     */
    distinct?: AuditScalarFieldEnum | AuditScalarFieldEnum[]
  }

  /**
   * Audit findFirstOrThrow
   */
  export type AuditFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Audit
     */
    select?: AuditSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Audit
     */
    omit?: AuditOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditInclude<ExtArgs> | null
    /**
     * Filter, which Audit to fetch.
     */
    where?: AuditWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Audits to fetch.
     */
    orderBy?: AuditOrderByWithRelationInput | AuditOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Audits.
     */
    cursor?: AuditWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Audits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Audits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Audits.
     */
    distinct?: AuditScalarFieldEnum | AuditScalarFieldEnum[]
  }

  /**
   * Audit findMany
   */
  export type AuditFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Audit
     */
    select?: AuditSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Audit
     */
    omit?: AuditOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditInclude<ExtArgs> | null
    /**
     * Filter, which Audits to fetch.
     */
    where?: AuditWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Audits to fetch.
     */
    orderBy?: AuditOrderByWithRelationInput | AuditOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Audits.
     */
    cursor?: AuditWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Audits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Audits.
     */
    skip?: number
    distinct?: AuditScalarFieldEnum | AuditScalarFieldEnum[]
  }

  /**
   * Audit create
   */
  export type AuditCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Audit
     */
    select?: AuditSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Audit
     */
    omit?: AuditOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditInclude<ExtArgs> | null
    /**
     * The data needed to create a Audit.
     */
    data: XOR<AuditCreateInput, AuditUncheckedCreateInput>
  }

  /**
   * Audit createMany
   */
  export type AuditCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Audits.
     */
    data: AuditCreateManyInput | AuditCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Audit update
   */
  export type AuditUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Audit
     */
    select?: AuditSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Audit
     */
    omit?: AuditOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditInclude<ExtArgs> | null
    /**
     * The data needed to update a Audit.
     */
    data: XOR<AuditUpdateInput, AuditUncheckedUpdateInput>
    /**
     * Choose, which Audit to update.
     */
    where: AuditWhereUniqueInput
  }

  /**
   * Audit updateMany
   */
  export type AuditUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Audits.
     */
    data: XOR<AuditUpdateManyMutationInput, AuditUncheckedUpdateManyInput>
    /**
     * Filter which Audits to update
     */
    where?: AuditWhereInput
    /**
     * Limit how many Audits to update.
     */
    limit?: number
  }

  /**
   * Audit upsert
   */
  export type AuditUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Audit
     */
    select?: AuditSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Audit
     */
    omit?: AuditOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditInclude<ExtArgs> | null
    /**
     * The filter to search for the Audit to update in case it exists.
     */
    where: AuditWhereUniqueInput
    /**
     * In case the Audit found by the `where` argument doesn't exist, create a new Audit with this data.
     */
    create: XOR<AuditCreateInput, AuditUncheckedCreateInput>
    /**
     * In case the Audit was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AuditUpdateInput, AuditUncheckedUpdateInput>
  }

  /**
   * Audit delete
   */
  export type AuditDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Audit
     */
    select?: AuditSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Audit
     */
    omit?: AuditOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditInclude<ExtArgs> | null
    /**
     * Filter which Audit to delete.
     */
    where: AuditWhereUniqueInput
  }

  /**
   * Audit deleteMany
   */
  export type AuditDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Audits to delete
     */
    where?: AuditWhereInput
    /**
     * Limit how many Audits to delete.
     */
    limit?: number
  }

  /**
   * Audit without action
   */
  export type AuditDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Audit
     */
    select?: AuditSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Audit
     */
    omit?: AuditOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditInclude<ExtArgs> | null
  }


  /**
   * Model CapexForm
   */

  export type AggregateCapexForm = {
    _count: CapexFormCountAggregateOutputType | null
    _min: CapexFormMinAggregateOutputType | null
    _max: CapexFormMaxAggregateOutputType | null
  }

  export type CapexFormMinAggregateOutputType = {
    id: string | null
    documentId: string | null
    title: string | null
    unit: string | null
    location: string | null
    projectManager: string | null
    projectHead: string | null
    requestDate: Date | null
    priority: string | null
    budgetType: string | null
    description: string | null
    projectStart: Date | null
    projectEnd: Date | null
    oldAssets: string | null
    technicalSuitability: string | null
    compliance: string | null
    implications: string | null
    economicViability: string | null
    additionalComments: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CapexFormMaxAggregateOutputType = {
    id: string | null
    documentId: string | null
    title: string | null
    unit: string | null
    location: string | null
    projectManager: string | null
    projectHead: string | null
    requestDate: Date | null
    priority: string | null
    budgetType: string | null
    description: string | null
    projectStart: Date | null
    projectEnd: Date | null
    oldAssets: string | null
    technicalSuitability: string | null
    compliance: string | null
    implications: string | null
    economicViability: string | null
    additionalComments: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CapexFormCountAggregateOutputType = {
    id: number
    documentId: number
    title: number
    unit: number
    location: number
    projectManager: number
    projectHead: number
    requestDate: number
    priority: number
    budgetType: number
    description: number
    projectStart: number
    projectEnd: number
    oldAssets: number
    technicalSuitability: number
    compliance: number
    implications: number
    costTable: number
    economicViability: number
    spendingPlan: number
    additionalComments: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CapexFormMinAggregateInputType = {
    id?: true
    documentId?: true
    title?: true
    unit?: true
    location?: true
    projectManager?: true
    projectHead?: true
    requestDate?: true
    priority?: true
    budgetType?: true
    description?: true
    projectStart?: true
    projectEnd?: true
    oldAssets?: true
    technicalSuitability?: true
    compliance?: true
    implications?: true
    economicViability?: true
    additionalComments?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CapexFormMaxAggregateInputType = {
    id?: true
    documentId?: true
    title?: true
    unit?: true
    location?: true
    projectManager?: true
    projectHead?: true
    requestDate?: true
    priority?: true
    budgetType?: true
    description?: true
    projectStart?: true
    projectEnd?: true
    oldAssets?: true
    technicalSuitability?: true
    compliance?: true
    implications?: true
    economicViability?: true
    additionalComments?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CapexFormCountAggregateInputType = {
    id?: true
    documentId?: true
    title?: true
    unit?: true
    location?: true
    projectManager?: true
    projectHead?: true
    requestDate?: true
    priority?: true
    budgetType?: true
    description?: true
    projectStart?: true
    projectEnd?: true
    oldAssets?: true
    technicalSuitability?: true
    compliance?: true
    implications?: true
    costTable?: true
    economicViability?: true
    spendingPlan?: true
    additionalComments?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CapexFormAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CapexForm to aggregate.
     */
    where?: CapexFormWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CapexForms to fetch.
     */
    orderBy?: CapexFormOrderByWithRelationInput | CapexFormOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CapexFormWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CapexForms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CapexForms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CapexForms
    **/
    _count?: true | CapexFormCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CapexFormMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CapexFormMaxAggregateInputType
  }

  export type GetCapexFormAggregateType<T extends CapexFormAggregateArgs> = {
        [P in keyof T & keyof AggregateCapexForm]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCapexForm[P]>
      : GetScalarType<T[P], AggregateCapexForm[P]>
  }




  export type CapexFormGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CapexFormWhereInput
    orderBy?: CapexFormOrderByWithAggregationInput | CapexFormOrderByWithAggregationInput[]
    by: CapexFormScalarFieldEnum[] | CapexFormScalarFieldEnum
    having?: CapexFormScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CapexFormCountAggregateInputType | true
    _min?: CapexFormMinAggregateInputType
    _max?: CapexFormMaxAggregateInputType
  }

  export type CapexFormGroupByOutputType = {
    id: string
    documentId: string
    title: string
    unit: string
    location: string
    projectManager: string
    projectHead: string
    requestDate: Date
    priority: string
    budgetType: string
    description: string
    projectStart: Date
    projectEnd: Date
    oldAssets: string
    technicalSuitability: string
    compliance: string
    implications: string
    costTable: JsonValue
    economicViability: string
    spendingPlan: JsonValue
    additionalComments: string
    createdAt: Date
    updatedAt: Date
    _count: CapexFormCountAggregateOutputType | null
    _min: CapexFormMinAggregateOutputType | null
    _max: CapexFormMaxAggregateOutputType | null
  }

  type GetCapexFormGroupByPayload<T extends CapexFormGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CapexFormGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CapexFormGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CapexFormGroupByOutputType[P]>
            : GetScalarType<T[P], CapexFormGroupByOutputType[P]>
        }
      >
    >


  export type CapexFormSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    documentId?: boolean
    title?: boolean
    unit?: boolean
    location?: boolean
    projectManager?: boolean
    projectHead?: boolean
    requestDate?: boolean
    priority?: boolean
    budgetType?: boolean
    description?: boolean
    projectStart?: boolean
    projectEnd?: boolean
    oldAssets?: boolean
    technicalSuitability?: boolean
    compliance?: boolean
    implications?: boolean
    costTable?: boolean
    economicViability?: boolean
    spendingPlan?: boolean
    additionalComments?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    document?: boolean | DocumentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["capexForm"]>



  export type CapexFormSelectScalar = {
    id?: boolean
    documentId?: boolean
    title?: boolean
    unit?: boolean
    location?: boolean
    projectManager?: boolean
    projectHead?: boolean
    requestDate?: boolean
    priority?: boolean
    budgetType?: boolean
    description?: boolean
    projectStart?: boolean
    projectEnd?: boolean
    oldAssets?: boolean
    technicalSuitability?: boolean
    compliance?: boolean
    implications?: boolean
    costTable?: boolean
    economicViability?: boolean
    spendingPlan?: boolean
    additionalComments?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CapexFormOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "documentId" | "title" | "unit" | "location" | "projectManager" | "projectHead" | "requestDate" | "priority" | "budgetType" | "description" | "projectStart" | "projectEnd" | "oldAssets" | "technicalSuitability" | "compliance" | "implications" | "costTable" | "economicViability" | "spendingPlan" | "additionalComments" | "createdAt" | "updatedAt", ExtArgs["result"]["capexForm"]>
  export type CapexFormInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    document?: boolean | DocumentDefaultArgs<ExtArgs>
  }

  export type $CapexFormPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CapexForm"
    objects: {
      document: Prisma.$DocumentPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      documentId: string
      title: string
      unit: string
      location: string
      projectManager: string
      projectHead: string
      requestDate: Date
      priority: string
      budgetType: string
      description: string
      projectStart: Date
      projectEnd: Date
      oldAssets: string
      technicalSuitability: string
      compliance: string
      implications: string
      costTable: Prisma.JsonValue
      economicViability: string
      spendingPlan: Prisma.JsonValue
      additionalComments: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["capexForm"]>
    composites: {}
  }

  type CapexFormGetPayload<S extends boolean | null | undefined | CapexFormDefaultArgs> = $Result.GetResult<Prisma.$CapexFormPayload, S>

  type CapexFormCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CapexFormFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CapexFormCountAggregateInputType | true
    }

  export interface CapexFormDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CapexForm'], meta: { name: 'CapexForm' } }
    /**
     * Find zero or one CapexForm that matches the filter.
     * @param {CapexFormFindUniqueArgs} args - Arguments to find a CapexForm
     * @example
     * // Get one CapexForm
     * const capexForm = await prisma.capexForm.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CapexFormFindUniqueArgs>(args: SelectSubset<T, CapexFormFindUniqueArgs<ExtArgs>>): Prisma__CapexFormClient<$Result.GetResult<Prisma.$CapexFormPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CapexForm that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CapexFormFindUniqueOrThrowArgs} args - Arguments to find a CapexForm
     * @example
     * // Get one CapexForm
     * const capexForm = await prisma.capexForm.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CapexFormFindUniqueOrThrowArgs>(args: SelectSubset<T, CapexFormFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CapexFormClient<$Result.GetResult<Prisma.$CapexFormPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CapexForm that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CapexFormFindFirstArgs} args - Arguments to find a CapexForm
     * @example
     * // Get one CapexForm
     * const capexForm = await prisma.capexForm.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CapexFormFindFirstArgs>(args?: SelectSubset<T, CapexFormFindFirstArgs<ExtArgs>>): Prisma__CapexFormClient<$Result.GetResult<Prisma.$CapexFormPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CapexForm that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CapexFormFindFirstOrThrowArgs} args - Arguments to find a CapexForm
     * @example
     * // Get one CapexForm
     * const capexForm = await prisma.capexForm.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CapexFormFindFirstOrThrowArgs>(args?: SelectSubset<T, CapexFormFindFirstOrThrowArgs<ExtArgs>>): Prisma__CapexFormClient<$Result.GetResult<Prisma.$CapexFormPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CapexForms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CapexFormFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CapexForms
     * const capexForms = await prisma.capexForm.findMany()
     * 
     * // Get first 10 CapexForms
     * const capexForms = await prisma.capexForm.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const capexFormWithIdOnly = await prisma.capexForm.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CapexFormFindManyArgs>(args?: SelectSubset<T, CapexFormFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CapexFormPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CapexForm.
     * @param {CapexFormCreateArgs} args - Arguments to create a CapexForm.
     * @example
     * // Create one CapexForm
     * const CapexForm = await prisma.capexForm.create({
     *   data: {
     *     // ... data to create a CapexForm
     *   }
     * })
     * 
     */
    create<T extends CapexFormCreateArgs>(args: SelectSubset<T, CapexFormCreateArgs<ExtArgs>>): Prisma__CapexFormClient<$Result.GetResult<Prisma.$CapexFormPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CapexForms.
     * @param {CapexFormCreateManyArgs} args - Arguments to create many CapexForms.
     * @example
     * // Create many CapexForms
     * const capexForm = await prisma.capexForm.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CapexFormCreateManyArgs>(args?: SelectSubset<T, CapexFormCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a CapexForm.
     * @param {CapexFormDeleteArgs} args - Arguments to delete one CapexForm.
     * @example
     * // Delete one CapexForm
     * const CapexForm = await prisma.capexForm.delete({
     *   where: {
     *     // ... filter to delete one CapexForm
     *   }
     * })
     * 
     */
    delete<T extends CapexFormDeleteArgs>(args: SelectSubset<T, CapexFormDeleteArgs<ExtArgs>>): Prisma__CapexFormClient<$Result.GetResult<Prisma.$CapexFormPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CapexForm.
     * @param {CapexFormUpdateArgs} args - Arguments to update one CapexForm.
     * @example
     * // Update one CapexForm
     * const capexForm = await prisma.capexForm.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CapexFormUpdateArgs>(args: SelectSubset<T, CapexFormUpdateArgs<ExtArgs>>): Prisma__CapexFormClient<$Result.GetResult<Prisma.$CapexFormPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CapexForms.
     * @param {CapexFormDeleteManyArgs} args - Arguments to filter CapexForms to delete.
     * @example
     * // Delete a few CapexForms
     * const { count } = await prisma.capexForm.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CapexFormDeleteManyArgs>(args?: SelectSubset<T, CapexFormDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CapexForms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CapexFormUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CapexForms
     * const capexForm = await prisma.capexForm.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CapexFormUpdateManyArgs>(args: SelectSubset<T, CapexFormUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one CapexForm.
     * @param {CapexFormUpsertArgs} args - Arguments to update or create a CapexForm.
     * @example
     * // Update or create a CapexForm
     * const capexForm = await prisma.capexForm.upsert({
     *   create: {
     *     // ... data to create a CapexForm
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CapexForm we want to update
     *   }
     * })
     */
    upsert<T extends CapexFormUpsertArgs>(args: SelectSubset<T, CapexFormUpsertArgs<ExtArgs>>): Prisma__CapexFormClient<$Result.GetResult<Prisma.$CapexFormPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CapexForms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CapexFormCountArgs} args - Arguments to filter CapexForms to count.
     * @example
     * // Count the number of CapexForms
     * const count = await prisma.capexForm.count({
     *   where: {
     *     // ... the filter for the CapexForms we want to count
     *   }
     * })
    **/
    count<T extends CapexFormCountArgs>(
      args?: Subset<T, CapexFormCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CapexFormCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CapexForm.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CapexFormAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CapexFormAggregateArgs>(args: Subset<T, CapexFormAggregateArgs>): Prisma.PrismaPromise<GetCapexFormAggregateType<T>>

    /**
     * Group by CapexForm.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CapexFormGroupByArgs} args - Group by arguments.
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
      T extends CapexFormGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CapexFormGroupByArgs['orderBy'] }
        : { orderBy?: CapexFormGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CapexFormGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCapexFormGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CapexForm model
   */
  readonly fields: CapexFormFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CapexForm.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CapexFormClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    document<T extends DocumentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DocumentDefaultArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the CapexForm model
   */
  interface CapexFormFieldRefs {
    readonly id: FieldRef<"CapexForm", 'String'>
    readonly documentId: FieldRef<"CapexForm", 'String'>
    readonly title: FieldRef<"CapexForm", 'String'>
    readonly unit: FieldRef<"CapexForm", 'String'>
    readonly location: FieldRef<"CapexForm", 'String'>
    readonly projectManager: FieldRef<"CapexForm", 'String'>
    readonly projectHead: FieldRef<"CapexForm", 'String'>
    readonly requestDate: FieldRef<"CapexForm", 'DateTime'>
    readonly priority: FieldRef<"CapexForm", 'String'>
    readonly budgetType: FieldRef<"CapexForm", 'String'>
    readonly description: FieldRef<"CapexForm", 'String'>
    readonly projectStart: FieldRef<"CapexForm", 'DateTime'>
    readonly projectEnd: FieldRef<"CapexForm", 'DateTime'>
    readonly oldAssets: FieldRef<"CapexForm", 'String'>
    readonly technicalSuitability: FieldRef<"CapexForm", 'String'>
    readonly compliance: FieldRef<"CapexForm", 'String'>
    readonly implications: FieldRef<"CapexForm", 'String'>
    readonly costTable: FieldRef<"CapexForm", 'Json'>
    readonly economicViability: FieldRef<"CapexForm", 'String'>
    readonly spendingPlan: FieldRef<"CapexForm", 'Json'>
    readonly additionalComments: FieldRef<"CapexForm", 'String'>
    readonly createdAt: FieldRef<"CapexForm", 'DateTime'>
    readonly updatedAt: FieldRef<"CapexForm", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CapexForm findUnique
   */
  export type CapexFormFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CapexForm
     */
    select?: CapexFormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CapexForm
     */
    omit?: CapexFormOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CapexFormInclude<ExtArgs> | null
    /**
     * Filter, which CapexForm to fetch.
     */
    where: CapexFormWhereUniqueInput
  }

  /**
   * CapexForm findUniqueOrThrow
   */
  export type CapexFormFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CapexForm
     */
    select?: CapexFormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CapexForm
     */
    omit?: CapexFormOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CapexFormInclude<ExtArgs> | null
    /**
     * Filter, which CapexForm to fetch.
     */
    where: CapexFormWhereUniqueInput
  }

  /**
   * CapexForm findFirst
   */
  export type CapexFormFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CapexForm
     */
    select?: CapexFormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CapexForm
     */
    omit?: CapexFormOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CapexFormInclude<ExtArgs> | null
    /**
     * Filter, which CapexForm to fetch.
     */
    where?: CapexFormWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CapexForms to fetch.
     */
    orderBy?: CapexFormOrderByWithRelationInput | CapexFormOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CapexForms.
     */
    cursor?: CapexFormWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CapexForms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CapexForms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CapexForms.
     */
    distinct?: CapexFormScalarFieldEnum | CapexFormScalarFieldEnum[]
  }

  /**
   * CapexForm findFirstOrThrow
   */
  export type CapexFormFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CapexForm
     */
    select?: CapexFormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CapexForm
     */
    omit?: CapexFormOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CapexFormInclude<ExtArgs> | null
    /**
     * Filter, which CapexForm to fetch.
     */
    where?: CapexFormWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CapexForms to fetch.
     */
    orderBy?: CapexFormOrderByWithRelationInput | CapexFormOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CapexForms.
     */
    cursor?: CapexFormWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CapexForms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CapexForms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CapexForms.
     */
    distinct?: CapexFormScalarFieldEnum | CapexFormScalarFieldEnum[]
  }

  /**
   * CapexForm findMany
   */
  export type CapexFormFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CapexForm
     */
    select?: CapexFormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CapexForm
     */
    omit?: CapexFormOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CapexFormInclude<ExtArgs> | null
    /**
     * Filter, which CapexForms to fetch.
     */
    where?: CapexFormWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CapexForms to fetch.
     */
    orderBy?: CapexFormOrderByWithRelationInput | CapexFormOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CapexForms.
     */
    cursor?: CapexFormWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CapexForms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CapexForms.
     */
    skip?: number
    distinct?: CapexFormScalarFieldEnum | CapexFormScalarFieldEnum[]
  }

  /**
   * CapexForm create
   */
  export type CapexFormCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CapexForm
     */
    select?: CapexFormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CapexForm
     */
    omit?: CapexFormOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CapexFormInclude<ExtArgs> | null
    /**
     * The data needed to create a CapexForm.
     */
    data: XOR<CapexFormCreateInput, CapexFormUncheckedCreateInput>
  }

  /**
   * CapexForm createMany
   */
  export type CapexFormCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CapexForms.
     */
    data: CapexFormCreateManyInput | CapexFormCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CapexForm update
   */
  export type CapexFormUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CapexForm
     */
    select?: CapexFormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CapexForm
     */
    omit?: CapexFormOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CapexFormInclude<ExtArgs> | null
    /**
     * The data needed to update a CapexForm.
     */
    data: XOR<CapexFormUpdateInput, CapexFormUncheckedUpdateInput>
    /**
     * Choose, which CapexForm to update.
     */
    where: CapexFormWhereUniqueInput
  }

  /**
   * CapexForm updateMany
   */
  export type CapexFormUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CapexForms.
     */
    data: XOR<CapexFormUpdateManyMutationInput, CapexFormUncheckedUpdateManyInput>
    /**
     * Filter which CapexForms to update
     */
    where?: CapexFormWhereInput
    /**
     * Limit how many CapexForms to update.
     */
    limit?: number
  }

  /**
   * CapexForm upsert
   */
  export type CapexFormUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CapexForm
     */
    select?: CapexFormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CapexForm
     */
    omit?: CapexFormOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CapexFormInclude<ExtArgs> | null
    /**
     * The filter to search for the CapexForm to update in case it exists.
     */
    where: CapexFormWhereUniqueInput
    /**
     * In case the CapexForm found by the `where` argument doesn't exist, create a new CapexForm with this data.
     */
    create: XOR<CapexFormCreateInput, CapexFormUncheckedCreateInput>
    /**
     * In case the CapexForm was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CapexFormUpdateInput, CapexFormUncheckedUpdateInput>
  }

  /**
   * CapexForm delete
   */
  export type CapexFormDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CapexForm
     */
    select?: CapexFormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CapexForm
     */
    omit?: CapexFormOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CapexFormInclude<ExtArgs> | null
    /**
     * Filter which CapexForm to delete.
     */
    where: CapexFormWhereUniqueInput
  }

  /**
   * CapexForm deleteMany
   */
  export type CapexFormDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CapexForms to delete
     */
    where?: CapexFormWhereInput
    /**
     * Limit how many CapexForms to delete.
     */
    limit?: number
  }

  /**
   * CapexForm without action
   */
  export type CapexFormDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CapexForm
     */
    select?: CapexFormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CapexForm
     */
    omit?: CapexFormOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CapexFormInclude<ExtArgs> | null
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
    password: 'password',
    firstName: 'firstName',
    lastName: 'lastName',
    department: 'department',
    isVerified: 'isVerified',
    isAdmin: 'isAdmin',
    role: 'role',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const DocumentScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    file: 'file',
    fileName: 'fileName',
    fileType: 'fileType',
    amount: 'amount',
    type: 'type',
    status: 'status',
    initiatorId: 'initiatorId',
    templateId: 'templateId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    completedAt: 'completedAt'
  };

  export type DocumentScalarFieldEnum = (typeof DocumentScalarFieldEnum)[keyof typeof DocumentScalarFieldEnum]


  export const ApprovalScalarFieldEnum: {
    id: 'id',
    sequenceOrder: 'sequenceOrder',
    status: 'status',
    documentId: 'documentId',
    approverId: 'approverId',
    approvedAt: 'approvedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ApprovalScalarFieldEnum = (typeof ApprovalScalarFieldEnum)[keyof typeof ApprovalScalarFieldEnum]


  export const CommentScalarFieldEnum: {
    id: 'id',
    content: 'content',
    approvalId: 'approvalId',
    documentId: 'documentId',
    userId: 'userId',
    createdAt: 'createdAt'
  };

  export type CommentScalarFieldEnum = (typeof CommentScalarFieldEnum)[keyof typeof CommentScalarFieldEnum]


  export const NotificationScalarFieldEnum: {
    id: 'id',
    type: 'type',
    message: 'message',
    read: 'read',
    userId: 'userId',
    documentId: 'documentId',
    createdAt: 'createdAt'
  };

  export type NotificationScalarFieldEnum = (typeof NotificationScalarFieldEnum)[keyof typeof NotificationScalarFieldEnum]


  export const TemplateScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    type: 'type',
    name: 'name',
    formData: 'formData',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TemplateScalarFieldEnum = (typeof TemplateScalarFieldEnum)[keyof typeof TemplateScalarFieldEnum]


  export const TemplateStepScalarFieldEnum: {
    id: 'id',
    templateId: 'templateId',
    approverId: 'approverId',
    sequenceOrder: 'sequenceOrder',
    createdAt: 'createdAt'
  };

  export type TemplateStepScalarFieldEnum = (typeof TemplateStepScalarFieldEnum)[keyof typeof TemplateStepScalarFieldEnum]


  export const AuditScalarFieldEnum: {
    id: 'id',
    documentId: 'documentId',
    userId: 'userId',
    action: 'action',
    details: 'details',
    createdAt: 'createdAt'
  };

  export type AuditScalarFieldEnum = (typeof AuditScalarFieldEnum)[keyof typeof AuditScalarFieldEnum]


  export const CapexFormScalarFieldEnum: {
    id: 'id',
    documentId: 'documentId',
    title: 'title',
    unit: 'unit',
    location: 'location',
    projectManager: 'projectManager',
    projectHead: 'projectHead',
    requestDate: 'requestDate',
    priority: 'priority',
    budgetType: 'budgetType',
    description: 'description',
    projectStart: 'projectStart',
    projectEnd: 'projectEnd',
    oldAssets: 'oldAssets',
    technicalSuitability: 'technicalSuitability',
    compliance: 'compliance',
    implications: 'implications',
    costTable: 'costTable',
    economicViability: 'economicViability',
    spendingPlan: 'spendingPlan',
    additionalComments: 'additionalComments',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CapexFormScalarFieldEnum = (typeof CapexFormScalarFieldEnum)[keyof typeof CapexFormScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const UserOrderByRelevanceFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    firstName: 'firstName',
    lastName: 'lastName',
    department: 'department'
  };

  export type UserOrderByRelevanceFieldEnum = (typeof UserOrderByRelevanceFieldEnum)[keyof typeof UserOrderByRelevanceFieldEnum]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const DocumentOrderByRelevanceFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    fileName: 'fileName',
    fileType: 'fileType',
    type: 'type',
    initiatorId: 'initiatorId',
    templateId: 'templateId'
  };

  export type DocumentOrderByRelevanceFieldEnum = (typeof DocumentOrderByRelevanceFieldEnum)[keyof typeof DocumentOrderByRelevanceFieldEnum]


  export const ApprovalOrderByRelevanceFieldEnum: {
    id: 'id',
    documentId: 'documentId',
    approverId: 'approverId'
  };

  export type ApprovalOrderByRelevanceFieldEnum = (typeof ApprovalOrderByRelevanceFieldEnum)[keyof typeof ApprovalOrderByRelevanceFieldEnum]


  export const CommentOrderByRelevanceFieldEnum: {
    id: 'id',
    content: 'content',
    approvalId: 'approvalId',
    documentId: 'documentId',
    userId: 'userId'
  };

  export type CommentOrderByRelevanceFieldEnum = (typeof CommentOrderByRelevanceFieldEnum)[keyof typeof CommentOrderByRelevanceFieldEnum]


  export const NotificationOrderByRelevanceFieldEnum: {
    id: 'id',
    message: 'message',
    userId: 'userId',
    documentId: 'documentId'
  };

  export type NotificationOrderByRelevanceFieldEnum = (typeof NotificationOrderByRelevanceFieldEnum)[keyof typeof NotificationOrderByRelevanceFieldEnum]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const TemplateOrderByRelevanceFieldEnum: {
    id: 'id',
    userId: 'userId',
    type: 'type',
    name: 'name'
  };

  export type TemplateOrderByRelevanceFieldEnum = (typeof TemplateOrderByRelevanceFieldEnum)[keyof typeof TemplateOrderByRelevanceFieldEnum]


  export const TemplateStepOrderByRelevanceFieldEnum: {
    id: 'id',
    templateId: 'templateId',
    approverId: 'approverId'
  };

  export type TemplateStepOrderByRelevanceFieldEnum = (typeof TemplateStepOrderByRelevanceFieldEnum)[keyof typeof TemplateStepOrderByRelevanceFieldEnum]


  export const AuditOrderByRelevanceFieldEnum: {
    id: 'id',
    documentId: 'documentId',
    userId: 'userId',
    details: 'details'
  };

  export type AuditOrderByRelevanceFieldEnum = (typeof AuditOrderByRelevanceFieldEnum)[keyof typeof AuditOrderByRelevanceFieldEnum]


  export const CapexFormOrderByRelevanceFieldEnum: {
    id: 'id',
    documentId: 'documentId',
    title: 'title',
    unit: 'unit',
    location: 'location',
    projectManager: 'projectManager',
    projectHead: 'projectHead',
    priority: 'priority',
    budgetType: 'budgetType',
    description: 'description',
    oldAssets: 'oldAssets',
    technicalSuitability: 'technicalSuitability',
    compliance: 'compliance',
    implications: 'implications',
    economicViability: 'economicViability',
    additionalComments: 'additionalComments'
  };

  export type CapexFormOrderByRelevanceFieldEnum = (typeof CapexFormOrderByRelevanceFieldEnum)[keyof typeof CapexFormOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Bytes'
   */
  export type BytesFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Bytes'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'DocumentStatus'
   */
  export type EnumDocumentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DocumentStatus'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'ApprovalStatus'
   */
  export type EnumApprovalStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ApprovalStatus'>
    


  /**
   * Reference to a field of type 'NotificationType'
   */
  export type EnumNotificationTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'NotificationType'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'AuditAction'
   */
  export type EnumAuditActionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AuditAction'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    firstName?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    department?: StringFilter<"User"> | string
    isVerified?: BoolFilter<"User"> | boolean
    isAdmin?: BoolFilter<"User"> | boolean
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    documents?: DocumentListRelationFilter
    approvals?: ApprovalListRelationFilter
    comments?: CommentListRelationFilter
    notifications?: NotificationListRelationFilter
    templates?: TemplateListRelationFilter
    templateSteps?: TemplateStepListRelationFilter
    auditTrail?: AuditListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    department?: SortOrder
    isVerified?: SortOrder
    isAdmin?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    documents?: DocumentOrderByRelationAggregateInput
    approvals?: ApprovalOrderByRelationAggregateInput
    comments?: CommentOrderByRelationAggregateInput
    notifications?: NotificationOrderByRelationAggregateInput
    templates?: TemplateOrderByRelationAggregateInput
    templateSteps?: TemplateStepOrderByRelationAggregateInput
    auditTrail?: AuditOrderByRelationAggregateInput
    _relevance?: UserOrderByRelevanceInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    firstName?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    department?: StringFilter<"User"> | string
    isVerified?: BoolFilter<"User"> | boolean
    isAdmin?: BoolFilter<"User"> | boolean
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    documents?: DocumentListRelationFilter
    approvals?: ApprovalListRelationFilter
    comments?: CommentListRelationFilter
    notifications?: NotificationListRelationFilter
    templates?: TemplateListRelationFilter
    templateSteps?: TemplateStepListRelationFilter
    auditTrail?: AuditListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    department?: SortOrder
    isVerified?: SortOrder
    isAdmin?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    firstName?: StringWithAggregatesFilter<"User"> | string
    lastName?: StringWithAggregatesFilter<"User"> | string
    department?: StringWithAggregatesFilter<"User"> | string
    isVerified?: BoolWithAggregatesFilter<"User"> | boolean
    isAdmin?: BoolWithAggregatesFilter<"User"> | boolean
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type DocumentWhereInput = {
    AND?: DocumentWhereInput | DocumentWhereInput[]
    OR?: DocumentWhereInput[]
    NOT?: DocumentWhereInput | DocumentWhereInput[]
    id?: StringFilter<"Document"> | string
    title?: StringFilter<"Document"> | string
    description?: StringNullableFilter<"Document"> | string | null
    file?: BytesFilter<"Document"> | Uint8Array
    fileName?: StringNullableFilter<"Document"> | string | null
    fileType?: StringFilter<"Document"> | string
    amount?: FloatNullableFilter<"Document"> | number | null
    type?: StringNullableFilter<"Document"> | string | null
    status?: EnumDocumentStatusFilter<"Document"> | $Enums.DocumentStatus
    initiatorId?: StringFilter<"Document"> | string
    templateId?: StringNullableFilter<"Document"> | string | null
    createdAt?: DateTimeFilter<"Document"> | Date | string
    updatedAt?: DateTimeFilter<"Document"> | Date | string
    completedAt?: DateTimeNullableFilter<"Document"> | Date | string | null
    initiator?: XOR<UserScalarRelationFilter, UserWhereInput>
    approvals?: ApprovalListRelationFilter
    comments?: CommentListRelationFilter
    auditTrail?: AuditListRelationFilter
    templateUsed?: XOR<TemplateNullableScalarRelationFilter, TemplateWhereInput> | null
    capexForm?: XOR<CapexFormNullableScalarRelationFilter, CapexFormWhereInput> | null
  }

  export type DocumentOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    file?: SortOrder
    fileName?: SortOrderInput | SortOrder
    fileType?: SortOrder
    amount?: SortOrderInput | SortOrder
    type?: SortOrderInput | SortOrder
    status?: SortOrder
    initiatorId?: SortOrder
    templateId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    completedAt?: SortOrderInput | SortOrder
    initiator?: UserOrderByWithRelationInput
    approvals?: ApprovalOrderByRelationAggregateInput
    comments?: CommentOrderByRelationAggregateInput
    auditTrail?: AuditOrderByRelationAggregateInput
    templateUsed?: TemplateOrderByWithRelationInput
    capexForm?: CapexFormOrderByWithRelationInput
    _relevance?: DocumentOrderByRelevanceInput
  }

  export type DocumentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DocumentWhereInput | DocumentWhereInput[]
    OR?: DocumentWhereInput[]
    NOT?: DocumentWhereInput | DocumentWhereInput[]
    title?: StringFilter<"Document"> | string
    description?: StringNullableFilter<"Document"> | string | null
    file?: BytesFilter<"Document"> | Uint8Array
    fileName?: StringNullableFilter<"Document"> | string | null
    fileType?: StringFilter<"Document"> | string
    amount?: FloatNullableFilter<"Document"> | number | null
    type?: StringNullableFilter<"Document"> | string | null
    status?: EnumDocumentStatusFilter<"Document"> | $Enums.DocumentStatus
    initiatorId?: StringFilter<"Document"> | string
    templateId?: StringNullableFilter<"Document"> | string | null
    createdAt?: DateTimeFilter<"Document"> | Date | string
    updatedAt?: DateTimeFilter<"Document"> | Date | string
    completedAt?: DateTimeNullableFilter<"Document"> | Date | string | null
    initiator?: XOR<UserScalarRelationFilter, UserWhereInput>
    approvals?: ApprovalListRelationFilter
    comments?: CommentListRelationFilter
    auditTrail?: AuditListRelationFilter
    templateUsed?: XOR<TemplateNullableScalarRelationFilter, TemplateWhereInput> | null
    capexForm?: XOR<CapexFormNullableScalarRelationFilter, CapexFormWhereInput> | null
  }, "id">

  export type DocumentOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    file?: SortOrder
    fileName?: SortOrderInput | SortOrder
    fileType?: SortOrder
    amount?: SortOrderInput | SortOrder
    type?: SortOrderInput | SortOrder
    status?: SortOrder
    initiatorId?: SortOrder
    templateId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    completedAt?: SortOrderInput | SortOrder
    _count?: DocumentCountOrderByAggregateInput
    _avg?: DocumentAvgOrderByAggregateInput
    _max?: DocumentMaxOrderByAggregateInput
    _min?: DocumentMinOrderByAggregateInput
    _sum?: DocumentSumOrderByAggregateInput
  }

  export type DocumentScalarWhereWithAggregatesInput = {
    AND?: DocumentScalarWhereWithAggregatesInput | DocumentScalarWhereWithAggregatesInput[]
    OR?: DocumentScalarWhereWithAggregatesInput[]
    NOT?: DocumentScalarWhereWithAggregatesInput | DocumentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Document"> | string
    title?: StringWithAggregatesFilter<"Document"> | string
    description?: StringNullableWithAggregatesFilter<"Document"> | string | null
    file?: BytesWithAggregatesFilter<"Document"> | Uint8Array
    fileName?: StringNullableWithAggregatesFilter<"Document"> | string | null
    fileType?: StringWithAggregatesFilter<"Document"> | string
    amount?: FloatNullableWithAggregatesFilter<"Document"> | number | null
    type?: StringNullableWithAggregatesFilter<"Document"> | string | null
    status?: EnumDocumentStatusWithAggregatesFilter<"Document"> | $Enums.DocumentStatus
    initiatorId?: StringWithAggregatesFilter<"Document"> | string
    templateId?: StringNullableWithAggregatesFilter<"Document"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Document"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Document"> | Date | string
    completedAt?: DateTimeNullableWithAggregatesFilter<"Document"> | Date | string | null
  }

  export type ApprovalWhereInput = {
    AND?: ApprovalWhereInput | ApprovalWhereInput[]
    OR?: ApprovalWhereInput[]
    NOT?: ApprovalWhereInput | ApprovalWhereInput[]
    id?: StringFilter<"Approval"> | string
    sequenceOrder?: IntFilter<"Approval"> | number
    status?: EnumApprovalStatusFilter<"Approval"> | $Enums.ApprovalStatus
    documentId?: StringFilter<"Approval"> | string
    approverId?: StringFilter<"Approval"> | string
    approvedAt?: DateTimeNullableFilter<"Approval"> | Date | string | null
    createdAt?: DateTimeFilter<"Approval"> | Date | string
    updatedAt?: DateTimeFilter<"Approval"> | Date | string
    document?: XOR<DocumentScalarRelationFilter, DocumentWhereInput>
    approver?: XOR<UserScalarRelationFilter, UserWhereInput>
    comments?: CommentListRelationFilter
  }

  export type ApprovalOrderByWithRelationInput = {
    id?: SortOrder
    sequenceOrder?: SortOrder
    status?: SortOrder
    documentId?: SortOrder
    approverId?: SortOrder
    approvedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    document?: DocumentOrderByWithRelationInput
    approver?: UserOrderByWithRelationInput
    comments?: CommentOrderByRelationAggregateInput
    _relevance?: ApprovalOrderByRelevanceInput
  }

  export type ApprovalWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ApprovalWhereInput | ApprovalWhereInput[]
    OR?: ApprovalWhereInput[]
    NOT?: ApprovalWhereInput | ApprovalWhereInput[]
    sequenceOrder?: IntFilter<"Approval"> | number
    status?: EnumApprovalStatusFilter<"Approval"> | $Enums.ApprovalStatus
    documentId?: StringFilter<"Approval"> | string
    approverId?: StringFilter<"Approval"> | string
    approvedAt?: DateTimeNullableFilter<"Approval"> | Date | string | null
    createdAt?: DateTimeFilter<"Approval"> | Date | string
    updatedAt?: DateTimeFilter<"Approval"> | Date | string
    document?: XOR<DocumentScalarRelationFilter, DocumentWhereInput>
    approver?: XOR<UserScalarRelationFilter, UserWhereInput>
    comments?: CommentListRelationFilter
  }, "id">

  export type ApprovalOrderByWithAggregationInput = {
    id?: SortOrder
    sequenceOrder?: SortOrder
    status?: SortOrder
    documentId?: SortOrder
    approverId?: SortOrder
    approvedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ApprovalCountOrderByAggregateInput
    _avg?: ApprovalAvgOrderByAggregateInput
    _max?: ApprovalMaxOrderByAggregateInput
    _min?: ApprovalMinOrderByAggregateInput
    _sum?: ApprovalSumOrderByAggregateInput
  }

  export type ApprovalScalarWhereWithAggregatesInput = {
    AND?: ApprovalScalarWhereWithAggregatesInput | ApprovalScalarWhereWithAggregatesInput[]
    OR?: ApprovalScalarWhereWithAggregatesInput[]
    NOT?: ApprovalScalarWhereWithAggregatesInput | ApprovalScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Approval"> | string
    sequenceOrder?: IntWithAggregatesFilter<"Approval"> | number
    status?: EnumApprovalStatusWithAggregatesFilter<"Approval"> | $Enums.ApprovalStatus
    documentId?: StringWithAggregatesFilter<"Approval"> | string
    approverId?: StringWithAggregatesFilter<"Approval"> | string
    approvedAt?: DateTimeNullableWithAggregatesFilter<"Approval"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Approval"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Approval"> | Date | string
  }

  export type CommentWhereInput = {
    AND?: CommentWhereInput | CommentWhereInput[]
    OR?: CommentWhereInput[]
    NOT?: CommentWhereInput | CommentWhereInput[]
    id?: StringFilter<"Comment"> | string
    content?: StringFilter<"Comment"> | string
    approvalId?: StringFilter<"Comment"> | string
    documentId?: StringFilter<"Comment"> | string
    userId?: StringFilter<"Comment"> | string
    createdAt?: DateTimeFilter<"Comment"> | Date | string
    approval?: XOR<ApprovalScalarRelationFilter, ApprovalWhereInput>
    document?: XOR<DocumentScalarRelationFilter, DocumentWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type CommentOrderByWithRelationInput = {
    id?: SortOrder
    content?: SortOrder
    approvalId?: SortOrder
    documentId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    approval?: ApprovalOrderByWithRelationInput
    document?: DocumentOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
    _relevance?: CommentOrderByRelevanceInput
  }

  export type CommentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CommentWhereInput | CommentWhereInput[]
    OR?: CommentWhereInput[]
    NOT?: CommentWhereInput | CommentWhereInput[]
    content?: StringFilter<"Comment"> | string
    approvalId?: StringFilter<"Comment"> | string
    documentId?: StringFilter<"Comment"> | string
    userId?: StringFilter<"Comment"> | string
    createdAt?: DateTimeFilter<"Comment"> | Date | string
    approval?: XOR<ApprovalScalarRelationFilter, ApprovalWhereInput>
    document?: XOR<DocumentScalarRelationFilter, DocumentWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type CommentOrderByWithAggregationInput = {
    id?: SortOrder
    content?: SortOrder
    approvalId?: SortOrder
    documentId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    _count?: CommentCountOrderByAggregateInput
    _max?: CommentMaxOrderByAggregateInput
    _min?: CommentMinOrderByAggregateInput
  }

  export type CommentScalarWhereWithAggregatesInput = {
    AND?: CommentScalarWhereWithAggregatesInput | CommentScalarWhereWithAggregatesInput[]
    OR?: CommentScalarWhereWithAggregatesInput[]
    NOT?: CommentScalarWhereWithAggregatesInput | CommentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Comment"> | string
    content?: StringWithAggregatesFilter<"Comment"> | string
    approvalId?: StringWithAggregatesFilter<"Comment"> | string
    documentId?: StringWithAggregatesFilter<"Comment"> | string
    userId?: StringWithAggregatesFilter<"Comment"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Comment"> | Date | string
  }

  export type NotificationWhereInput = {
    AND?: NotificationWhereInput | NotificationWhereInput[]
    OR?: NotificationWhereInput[]
    NOT?: NotificationWhereInput | NotificationWhereInput[]
    id?: StringFilter<"Notification"> | string
    type?: EnumNotificationTypeFilter<"Notification"> | $Enums.NotificationType
    message?: StringFilter<"Notification"> | string
    read?: BoolFilter<"Notification"> | boolean
    userId?: StringFilter<"Notification"> | string
    documentId?: StringNullableFilter<"Notification"> | string | null
    createdAt?: DateTimeFilter<"Notification"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type NotificationOrderByWithRelationInput = {
    id?: SortOrder
    type?: SortOrder
    message?: SortOrder
    read?: SortOrder
    userId?: SortOrder
    documentId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    _relevance?: NotificationOrderByRelevanceInput
  }

  export type NotificationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: NotificationWhereInput | NotificationWhereInput[]
    OR?: NotificationWhereInput[]
    NOT?: NotificationWhereInput | NotificationWhereInput[]
    type?: EnumNotificationTypeFilter<"Notification"> | $Enums.NotificationType
    message?: StringFilter<"Notification"> | string
    read?: BoolFilter<"Notification"> | boolean
    userId?: StringFilter<"Notification"> | string
    documentId?: StringNullableFilter<"Notification"> | string | null
    createdAt?: DateTimeFilter<"Notification"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type NotificationOrderByWithAggregationInput = {
    id?: SortOrder
    type?: SortOrder
    message?: SortOrder
    read?: SortOrder
    userId?: SortOrder
    documentId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: NotificationCountOrderByAggregateInput
    _max?: NotificationMaxOrderByAggregateInput
    _min?: NotificationMinOrderByAggregateInput
  }

  export type NotificationScalarWhereWithAggregatesInput = {
    AND?: NotificationScalarWhereWithAggregatesInput | NotificationScalarWhereWithAggregatesInput[]
    OR?: NotificationScalarWhereWithAggregatesInput[]
    NOT?: NotificationScalarWhereWithAggregatesInput | NotificationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Notification"> | string
    type?: EnumNotificationTypeWithAggregatesFilter<"Notification"> | $Enums.NotificationType
    message?: StringWithAggregatesFilter<"Notification"> | string
    read?: BoolWithAggregatesFilter<"Notification"> | boolean
    userId?: StringWithAggregatesFilter<"Notification"> | string
    documentId?: StringNullableWithAggregatesFilter<"Notification"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Notification"> | Date | string
  }

  export type TemplateWhereInput = {
    AND?: TemplateWhereInput | TemplateWhereInput[]
    OR?: TemplateWhereInput[]
    NOT?: TemplateWhereInput | TemplateWhereInput[]
    id?: StringFilter<"Template"> | string
    userId?: StringFilter<"Template"> | string
    type?: StringFilter<"Template"> | string
    name?: StringFilter<"Template"> | string
    formData?: JsonFilter<"Template">
    createdAt?: DateTimeFilter<"Template"> | Date | string
    updatedAt?: DateTimeFilter<"Template"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    documents?: DocumentListRelationFilter
    steps?: TemplateStepListRelationFilter
  }

  export type TemplateOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    name?: SortOrder
    formData?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    documents?: DocumentOrderByRelationAggregateInput
    steps?: TemplateStepOrderByRelationAggregateInput
    _relevance?: TemplateOrderByRelevanceInput
  }

  export type TemplateWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TemplateWhereInput | TemplateWhereInput[]
    OR?: TemplateWhereInput[]
    NOT?: TemplateWhereInput | TemplateWhereInput[]
    userId?: StringFilter<"Template"> | string
    type?: StringFilter<"Template"> | string
    name?: StringFilter<"Template"> | string
    formData?: JsonFilter<"Template">
    createdAt?: DateTimeFilter<"Template"> | Date | string
    updatedAt?: DateTimeFilter<"Template"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    documents?: DocumentListRelationFilter
    steps?: TemplateStepListRelationFilter
  }, "id">

  export type TemplateOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    name?: SortOrder
    formData?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TemplateCountOrderByAggregateInput
    _max?: TemplateMaxOrderByAggregateInput
    _min?: TemplateMinOrderByAggregateInput
  }

  export type TemplateScalarWhereWithAggregatesInput = {
    AND?: TemplateScalarWhereWithAggregatesInput | TemplateScalarWhereWithAggregatesInput[]
    OR?: TemplateScalarWhereWithAggregatesInput[]
    NOT?: TemplateScalarWhereWithAggregatesInput | TemplateScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Template"> | string
    userId?: StringWithAggregatesFilter<"Template"> | string
    type?: StringWithAggregatesFilter<"Template"> | string
    name?: StringWithAggregatesFilter<"Template"> | string
    formData?: JsonWithAggregatesFilter<"Template">
    createdAt?: DateTimeWithAggregatesFilter<"Template"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Template"> | Date | string
  }

  export type TemplateStepWhereInput = {
    AND?: TemplateStepWhereInput | TemplateStepWhereInput[]
    OR?: TemplateStepWhereInput[]
    NOT?: TemplateStepWhereInput | TemplateStepWhereInput[]
    id?: StringFilter<"TemplateStep"> | string
    templateId?: StringFilter<"TemplateStep"> | string
    approverId?: StringFilter<"TemplateStep"> | string
    sequenceOrder?: IntFilter<"TemplateStep"> | number
    createdAt?: DateTimeFilter<"TemplateStep"> | Date | string
    template?: XOR<TemplateScalarRelationFilter, TemplateWhereInput>
    approver?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type TemplateStepOrderByWithRelationInput = {
    id?: SortOrder
    templateId?: SortOrder
    approverId?: SortOrder
    sequenceOrder?: SortOrder
    createdAt?: SortOrder
    template?: TemplateOrderByWithRelationInput
    approver?: UserOrderByWithRelationInput
    _relevance?: TemplateStepOrderByRelevanceInput
  }

  export type TemplateStepWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TemplateStepWhereInput | TemplateStepWhereInput[]
    OR?: TemplateStepWhereInput[]
    NOT?: TemplateStepWhereInput | TemplateStepWhereInput[]
    templateId?: StringFilter<"TemplateStep"> | string
    approverId?: StringFilter<"TemplateStep"> | string
    sequenceOrder?: IntFilter<"TemplateStep"> | number
    createdAt?: DateTimeFilter<"TemplateStep"> | Date | string
    template?: XOR<TemplateScalarRelationFilter, TemplateWhereInput>
    approver?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type TemplateStepOrderByWithAggregationInput = {
    id?: SortOrder
    templateId?: SortOrder
    approverId?: SortOrder
    sequenceOrder?: SortOrder
    createdAt?: SortOrder
    _count?: TemplateStepCountOrderByAggregateInput
    _avg?: TemplateStepAvgOrderByAggregateInput
    _max?: TemplateStepMaxOrderByAggregateInput
    _min?: TemplateStepMinOrderByAggregateInput
    _sum?: TemplateStepSumOrderByAggregateInput
  }

  export type TemplateStepScalarWhereWithAggregatesInput = {
    AND?: TemplateStepScalarWhereWithAggregatesInput | TemplateStepScalarWhereWithAggregatesInput[]
    OR?: TemplateStepScalarWhereWithAggregatesInput[]
    NOT?: TemplateStepScalarWhereWithAggregatesInput | TemplateStepScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TemplateStep"> | string
    templateId?: StringWithAggregatesFilter<"TemplateStep"> | string
    approverId?: StringWithAggregatesFilter<"TemplateStep"> | string
    sequenceOrder?: IntWithAggregatesFilter<"TemplateStep"> | number
    createdAt?: DateTimeWithAggregatesFilter<"TemplateStep"> | Date | string
  }

  export type AuditWhereInput = {
    AND?: AuditWhereInput | AuditWhereInput[]
    OR?: AuditWhereInput[]
    NOT?: AuditWhereInput | AuditWhereInput[]
    id?: StringFilter<"Audit"> | string
    documentId?: StringFilter<"Audit"> | string
    userId?: StringFilter<"Audit"> | string
    action?: EnumAuditActionFilter<"Audit"> | $Enums.AuditAction
    details?: StringNullableFilter<"Audit"> | string | null
    createdAt?: DateTimeFilter<"Audit"> | Date | string
    document?: XOR<DocumentScalarRelationFilter, DocumentWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type AuditOrderByWithRelationInput = {
    id?: SortOrder
    documentId?: SortOrder
    userId?: SortOrder
    action?: SortOrder
    details?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    document?: DocumentOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
    _relevance?: AuditOrderByRelevanceInput
  }

  export type AuditWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AuditWhereInput | AuditWhereInput[]
    OR?: AuditWhereInput[]
    NOT?: AuditWhereInput | AuditWhereInput[]
    documentId?: StringFilter<"Audit"> | string
    userId?: StringFilter<"Audit"> | string
    action?: EnumAuditActionFilter<"Audit"> | $Enums.AuditAction
    details?: StringNullableFilter<"Audit"> | string | null
    createdAt?: DateTimeFilter<"Audit"> | Date | string
    document?: XOR<DocumentScalarRelationFilter, DocumentWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type AuditOrderByWithAggregationInput = {
    id?: SortOrder
    documentId?: SortOrder
    userId?: SortOrder
    action?: SortOrder
    details?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: AuditCountOrderByAggregateInput
    _max?: AuditMaxOrderByAggregateInput
    _min?: AuditMinOrderByAggregateInput
  }

  export type AuditScalarWhereWithAggregatesInput = {
    AND?: AuditScalarWhereWithAggregatesInput | AuditScalarWhereWithAggregatesInput[]
    OR?: AuditScalarWhereWithAggregatesInput[]
    NOT?: AuditScalarWhereWithAggregatesInput | AuditScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Audit"> | string
    documentId?: StringWithAggregatesFilter<"Audit"> | string
    userId?: StringWithAggregatesFilter<"Audit"> | string
    action?: EnumAuditActionWithAggregatesFilter<"Audit"> | $Enums.AuditAction
    details?: StringNullableWithAggregatesFilter<"Audit"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Audit"> | Date | string
  }

  export type CapexFormWhereInput = {
    AND?: CapexFormWhereInput | CapexFormWhereInput[]
    OR?: CapexFormWhereInput[]
    NOT?: CapexFormWhereInput | CapexFormWhereInput[]
    id?: StringFilter<"CapexForm"> | string
    documentId?: StringFilter<"CapexForm"> | string
    title?: StringFilter<"CapexForm"> | string
    unit?: StringFilter<"CapexForm"> | string
    location?: StringFilter<"CapexForm"> | string
    projectManager?: StringFilter<"CapexForm"> | string
    projectHead?: StringFilter<"CapexForm"> | string
    requestDate?: DateTimeFilter<"CapexForm"> | Date | string
    priority?: StringFilter<"CapexForm"> | string
    budgetType?: StringFilter<"CapexForm"> | string
    description?: StringFilter<"CapexForm"> | string
    projectStart?: DateTimeFilter<"CapexForm"> | Date | string
    projectEnd?: DateTimeFilter<"CapexForm"> | Date | string
    oldAssets?: StringFilter<"CapexForm"> | string
    technicalSuitability?: StringFilter<"CapexForm"> | string
    compliance?: StringFilter<"CapexForm"> | string
    implications?: StringFilter<"CapexForm"> | string
    costTable?: JsonFilter<"CapexForm">
    economicViability?: StringFilter<"CapexForm"> | string
    spendingPlan?: JsonFilter<"CapexForm">
    additionalComments?: StringFilter<"CapexForm"> | string
    createdAt?: DateTimeFilter<"CapexForm"> | Date | string
    updatedAt?: DateTimeFilter<"CapexForm"> | Date | string
    document?: XOR<DocumentScalarRelationFilter, DocumentWhereInput>
  }

  export type CapexFormOrderByWithRelationInput = {
    id?: SortOrder
    documentId?: SortOrder
    title?: SortOrder
    unit?: SortOrder
    location?: SortOrder
    projectManager?: SortOrder
    projectHead?: SortOrder
    requestDate?: SortOrder
    priority?: SortOrder
    budgetType?: SortOrder
    description?: SortOrder
    projectStart?: SortOrder
    projectEnd?: SortOrder
    oldAssets?: SortOrder
    technicalSuitability?: SortOrder
    compliance?: SortOrder
    implications?: SortOrder
    costTable?: SortOrder
    economicViability?: SortOrder
    spendingPlan?: SortOrder
    additionalComments?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    document?: DocumentOrderByWithRelationInput
    _relevance?: CapexFormOrderByRelevanceInput
  }

  export type CapexFormWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    documentId?: string
    AND?: CapexFormWhereInput | CapexFormWhereInput[]
    OR?: CapexFormWhereInput[]
    NOT?: CapexFormWhereInput | CapexFormWhereInput[]
    title?: StringFilter<"CapexForm"> | string
    unit?: StringFilter<"CapexForm"> | string
    location?: StringFilter<"CapexForm"> | string
    projectManager?: StringFilter<"CapexForm"> | string
    projectHead?: StringFilter<"CapexForm"> | string
    requestDate?: DateTimeFilter<"CapexForm"> | Date | string
    priority?: StringFilter<"CapexForm"> | string
    budgetType?: StringFilter<"CapexForm"> | string
    description?: StringFilter<"CapexForm"> | string
    projectStart?: DateTimeFilter<"CapexForm"> | Date | string
    projectEnd?: DateTimeFilter<"CapexForm"> | Date | string
    oldAssets?: StringFilter<"CapexForm"> | string
    technicalSuitability?: StringFilter<"CapexForm"> | string
    compliance?: StringFilter<"CapexForm"> | string
    implications?: StringFilter<"CapexForm"> | string
    costTable?: JsonFilter<"CapexForm">
    economicViability?: StringFilter<"CapexForm"> | string
    spendingPlan?: JsonFilter<"CapexForm">
    additionalComments?: StringFilter<"CapexForm"> | string
    createdAt?: DateTimeFilter<"CapexForm"> | Date | string
    updatedAt?: DateTimeFilter<"CapexForm"> | Date | string
    document?: XOR<DocumentScalarRelationFilter, DocumentWhereInput>
  }, "id" | "documentId">

  export type CapexFormOrderByWithAggregationInput = {
    id?: SortOrder
    documentId?: SortOrder
    title?: SortOrder
    unit?: SortOrder
    location?: SortOrder
    projectManager?: SortOrder
    projectHead?: SortOrder
    requestDate?: SortOrder
    priority?: SortOrder
    budgetType?: SortOrder
    description?: SortOrder
    projectStart?: SortOrder
    projectEnd?: SortOrder
    oldAssets?: SortOrder
    technicalSuitability?: SortOrder
    compliance?: SortOrder
    implications?: SortOrder
    costTable?: SortOrder
    economicViability?: SortOrder
    spendingPlan?: SortOrder
    additionalComments?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CapexFormCountOrderByAggregateInput
    _max?: CapexFormMaxOrderByAggregateInput
    _min?: CapexFormMinOrderByAggregateInput
  }

  export type CapexFormScalarWhereWithAggregatesInput = {
    AND?: CapexFormScalarWhereWithAggregatesInput | CapexFormScalarWhereWithAggregatesInput[]
    OR?: CapexFormScalarWhereWithAggregatesInput[]
    NOT?: CapexFormScalarWhereWithAggregatesInput | CapexFormScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CapexForm"> | string
    documentId?: StringWithAggregatesFilter<"CapexForm"> | string
    title?: StringWithAggregatesFilter<"CapexForm"> | string
    unit?: StringWithAggregatesFilter<"CapexForm"> | string
    location?: StringWithAggregatesFilter<"CapexForm"> | string
    projectManager?: StringWithAggregatesFilter<"CapexForm"> | string
    projectHead?: StringWithAggregatesFilter<"CapexForm"> | string
    requestDate?: DateTimeWithAggregatesFilter<"CapexForm"> | Date | string
    priority?: StringWithAggregatesFilter<"CapexForm"> | string
    budgetType?: StringWithAggregatesFilter<"CapexForm"> | string
    description?: StringWithAggregatesFilter<"CapexForm"> | string
    projectStart?: DateTimeWithAggregatesFilter<"CapexForm"> | Date | string
    projectEnd?: DateTimeWithAggregatesFilter<"CapexForm"> | Date | string
    oldAssets?: StringWithAggregatesFilter<"CapexForm"> | string
    technicalSuitability?: StringWithAggregatesFilter<"CapexForm"> | string
    compliance?: StringWithAggregatesFilter<"CapexForm"> | string
    implications?: StringWithAggregatesFilter<"CapexForm"> | string
    costTable?: JsonWithAggregatesFilter<"CapexForm">
    economicViability?: StringWithAggregatesFilter<"CapexForm"> | string
    spendingPlan?: JsonWithAggregatesFilter<"CapexForm">
    additionalComments?: StringWithAggregatesFilter<"CapexForm"> | string
    createdAt?: DateTimeWithAggregatesFilter<"CapexForm"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"CapexForm"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    password: string
    firstName: string
    lastName: string
    department?: string
    isVerified?: boolean
    isAdmin?: boolean
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    documents?: DocumentCreateNestedManyWithoutInitiatorInput
    approvals?: ApprovalCreateNestedManyWithoutApproverInput
    comments?: CommentCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    templates?: TemplateCreateNestedManyWithoutUserInput
    templateSteps?: TemplateStepCreateNestedManyWithoutApproverInput
    auditTrail?: AuditCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    password: string
    firstName: string
    lastName: string
    department?: string
    isVerified?: boolean
    isAdmin?: boolean
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    documents?: DocumentUncheckedCreateNestedManyWithoutInitiatorInput
    approvals?: ApprovalUncheckedCreateNestedManyWithoutApproverInput
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    templates?: TemplateUncheckedCreateNestedManyWithoutUserInput
    templateSteps?: TemplateStepUncheckedCreateNestedManyWithoutApproverInput
    auditTrail?: AuditUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    documents?: DocumentUpdateManyWithoutInitiatorNestedInput
    approvals?: ApprovalUpdateManyWithoutApproverNestedInput
    comments?: CommentUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    templates?: TemplateUpdateManyWithoutUserNestedInput
    templateSteps?: TemplateStepUpdateManyWithoutApproverNestedInput
    auditTrail?: AuditUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    documents?: DocumentUncheckedUpdateManyWithoutInitiatorNestedInput
    approvals?: ApprovalUncheckedUpdateManyWithoutApproverNestedInput
    comments?: CommentUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    templates?: TemplateUncheckedUpdateManyWithoutUserNestedInput
    templateSteps?: TemplateStepUncheckedUpdateManyWithoutApproverNestedInput
    auditTrail?: AuditUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    password: string
    firstName: string
    lastName: string
    department?: string
    isVerified?: boolean
    isAdmin?: boolean
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocumentCreateInput = {
    id?: string
    title: string
    description?: string | null
    file: Uint8Array
    fileName?: string | null
    fileType: string
    amount?: number | null
    type?: string | null
    status?: $Enums.DocumentStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    completedAt?: Date | string | null
    initiator: UserCreateNestedOneWithoutDocumentsInput
    approvals?: ApprovalCreateNestedManyWithoutDocumentInput
    comments?: CommentCreateNestedManyWithoutDocumentInput
    auditTrail?: AuditCreateNestedManyWithoutDocumentInput
    templateUsed?: TemplateCreateNestedOneWithoutDocumentsInput
    capexForm?: CapexFormCreateNestedOneWithoutDocumentInput
  }

  export type DocumentUncheckedCreateInput = {
    id?: string
    title: string
    description?: string | null
    file: Uint8Array
    fileName?: string | null
    fileType: string
    amount?: number | null
    type?: string | null
    status?: $Enums.DocumentStatus
    initiatorId: string
    templateId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    completedAt?: Date | string | null
    approvals?: ApprovalUncheckedCreateNestedManyWithoutDocumentInput
    comments?: CommentUncheckedCreateNestedManyWithoutDocumentInput
    auditTrail?: AuditUncheckedCreateNestedManyWithoutDocumentInput
    capexForm?: CapexFormUncheckedCreateNestedOneWithoutDocumentInput
  }

  export type DocumentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    file?: BytesFieldUpdateOperationsInput | Uint8Array
    fileName?: NullableStringFieldUpdateOperationsInput | string | null
    fileType?: StringFieldUpdateOperationsInput | string
    amount?: NullableFloatFieldUpdateOperationsInput | number | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumDocumentStatusFieldUpdateOperationsInput | $Enums.DocumentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    initiator?: UserUpdateOneRequiredWithoutDocumentsNestedInput
    approvals?: ApprovalUpdateManyWithoutDocumentNestedInput
    comments?: CommentUpdateManyWithoutDocumentNestedInput
    auditTrail?: AuditUpdateManyWithoutDocumentNestedInput
    templateUsed?: TemplateUpdateOneWithoutDocumentsNestedInput
    capexForm?: CapexFormUpdateOneWithoutDocumentNestedInput
  }

  export type DocumentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    file?: BytesFieldUpdateOperationsInput | Uint8Array
    fileName?: NullableStringFieldUpdateOperationsInput | string | null
    fileType?: StringFieldUpdateOperationsInput | string
    amount?: NullableFloatFieldUpdateOperationsInput | number | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumDocumentStatusFieldUpdateOperationsInput | $Enums.DocumentStatus
    initiatorId?: StringFieldUpdateOperationsInput | string
    templateId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approvals?: ApprovalUncheckedUpdateManyWithoutDocumentNestedInput
    comments?: CommentUncheckedUpdateManyWithoutDocumentNestedInput
    auditTrail?: AuditUncheckedUpdateManyWithoutDocumentNestedInput
    capexForm?: CapexFormUncheckedUpdateOneWithoutDocumentNestedInput
  }

  export type DocumentCreateManyInput = {
    id?: string
    title: string
    description?: string | null
    file: Uint8Array
    fileName?: string | null
    fileType: string
    amount?: number | null
    type?: string | null
    status?: $Enums.DocumentStatus
    initiatorId: string
    templateId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    completedAt?: Date | string | null
  }

  export type DocumentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    file?: BytesFieldUpdateOperationsInput | Uint8Array
    fileName?: NullableStringFieldUpdateOperationsInput | string | null
    fileType?: StringFieldUpdateOperationsInput | string
    amount?: NullableFloatFieldUpdateOperationsInput | number | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumDocumentStatusFieldUpdateOperationsInput | $Enums.DocumentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type DocumentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    file?: BytesFieldUpdateOperationsInput | Uint8Array
    fileName?: NullableStringFieldUpdateOperationsInput | string | null
    fileType?: StringFieldUpdateOperationsInput | string
    amount?: NullableFloatFieldUpdateOperationsInput | number | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumDocumentStatusFieldUpdateOperationsInput | $Enums.DocumentStatus
    initiatorId?: StringFieldUpdateOperationsInput | string
    templateId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ApprovalCreateInput = {
    id?: string
    sequenceOrder: number
    status?: $Enums.ApprovalStatus
    approvedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    document: DocumentCreateNestedOneWithoutApprovalsInput
    approver: UserCreateNestedOneWithoutApprovalsInput
    comments?: CommentCreateNestedManyWithoutApprovalInput
  }

  export type ApprovalUncheckedCreateInput = {
    id?: string
    sequenceOrder: number
    status?: $Enums.ApprovalStatus
    documentId: string
    approverId: string
    approvedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    comments?: CommentUncheckedCreateNestedManyWithoutApprovalInput
  }

  export type ApprovalUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sequenceOrder?: IntFieldUpdateOperationsInput | number
    status?: EnumApprovalStatusFieldUpdateOperationsInput | $Enums.ApprovalStatus
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    document?: DocumentUpdateOneRequiredWithoutApprovalsNestedInput
    approver?: UserUpdateOneRequiredWithoutApprovalsNestedInput
    comments?: CommentUpdateManyWithoutApprovalNestedInput
  }

  export type ApprovalUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sequenceOrder?: IntFieldUpdateOperationsInput | number
    status?: EnumApprovalStatusFieldUpdateOperationsInput | $Enums.ApprovalStatus
    documentId?: StringFieldUpdateOperationsInput | string
    approverId?: StringFieldUpdateOperationsInput | string
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comments?: CommentUncheckedUpdateManyWithoutApprovalNestedInput
  }

  export type ApprovalCreateManyInput = {
    id?: string
    sequenceOrder: number
    status?: $Enums.ApprovalStatus
    documentId: string
    approverId: string
    approvedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ApprovalUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    sequenceOrder?: IntFieldUpdateOperationsInput | number
    status?: EnumApprovalStatusFieldUpdateOperationsInput | $Enums.ApprovalStatus
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApprovalUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    sequenceOrder?: IntFieldUpdateOperationsInput | number
    status?: EnumApprovalStatusFieldUpdateOperationsInput | $Enums.ApprovalStatus
    documentId?: StringFieldUpdateOperationsInput | string
    approverId?: StringFieldUpdateOperationsInput | string
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentCreateInput = {
    id?: string
    content: string
    createdAt?: Date | string
    approval: ApprovalCreateNestedOneWithoutCommentsInput
    document: DocumentCreateNestedOneWithoutCommentsInput
    user: UserCreateNestedOneWithoutCommentsInput
  }

  export type CommentUncheckedCreateInput = {
    id?: string
    content: string
    approvalId: string
    documentId: string
    userId: string
    createdAt?: Date | string
  }

  export type CommentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    approval?: ApprovalUpdateOneRequiredWithoutCommentsNestedInput
    document?: DocumentUpdateOneRequiredWithoutCommentsNestedInput
    user?: UserUpdateOneRequiredWithoutCommentsNestedInput
  }

  export type CommentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    approvalId?: StringFieldUpdateOperationsInput | string
    documentId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentCreateManyInput = {
    id?: string
    content: string
    approvalId: string
    documentId: string
    userId: string
    createdAt?: Date | string
  }

  export type CommentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    approvalId?: StringFieldUpdateOperationsInput | string
    documentId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationCreateInput = {
    id?: string
    type: $Enums.NotificationType
    message: string
    read?: boolean
    documentId?: string | null
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutNotificationsInput
  }

  export type NotificationUncheckedCreateInput = {
    id?: string
    type: $Enums.NotificationType
    message: string
    read?: boolean
    userId: string
    documentId?: string | null
    createdAt?: Date | string
  }

  export type NotificationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    message?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
    documentId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutNotificationsNestedInput
  }

  export type NotificationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    message?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
    userId?: StringFieldUpdateOperationsInput | string
    documentId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationCreateManyInput = {
    id?: string
    type: $Enums.NotificationType
    message: string
    read?: boolean
    userId: string
    documentId?: string | null
    createdAt?: Date | string
  }

  export type NotificationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    message?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
    documentId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    message?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
    userId?: StringFieldUpdateOperationsInput | string
    documentId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TemplateCreateInput = {
    id?: string
    type: string
    name: string
    formData: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutTemplatesInput
    documents?: DocumentCreateNestedManyWithoutTemplateUsedInput
    steps?: TemplateStepCreateNestedManyWithoutTemplateInput
  }

  export type TemplateUncheckedCreateInput = {
    id?: string
    userId: string
    type: string
    name: string
    formData: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    documents?: DocumentUncheckedCreateNestedManyWithoutTemplateUsedInput
    steps?: TemplateStepUncheckedCreateNestedManyWithoutTemplateInput
  }

  export type TemplateUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    formData?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTemplatesNestedInput
    documents?: DocumentUpdateManyWithoutTemplateUsedNestedInput
    steps?: TemplateStepUpdateManyWithoutTemplateNestedInput
  }

  export type TemplateUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    formData?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    documents?: DocumentUncheckedUpdateManyWithoutTemplateUsedNestedInput
    steps?: TemplateStepUncheckedUpdateManyWithoutTemplateNestedInput
  }

  export type TemplateCreateManyInput = {
    id?: string
    userId: string
    type: string
    name: string
    formData: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TemplateUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    formData?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TemplateUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    formData?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TemplateStepCreateInput = {
    id?: string
    sequenceOrder: number
    createdAt?: Date | string
    template: TemplateCreateNestedOneWithoutStepsInput
    approver: UserCreateNestedOneWithoutTemplateStepsInput
  }

  export type TemplateStepUncheckedCreateInput = {
    id?: string
    templateId: string
    approverId: string
    sequenceOrder: number
    createdAt?: Date | string
  }

  export type TemplateStepUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sequenceOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    template?: TemplateUpdateOneRequiredWithoutStepsNestedInput
    approver?: UserUpdateOneRequiredWithoutTemplateStepsNestedInput
  }

  export type TemplateStepUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    templateId?: StringFieldUpdateOperationsInput | string
    approverId?: StringFieldUpdateOperationsInput | string
    sequenceOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TemplateStepCreateManyInput = {
    id?: string
    templateId: string
    approverId: string
    sequenceOrder: number
    createdAt?: Date | string
  }

  export type TemplateStepUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    sequenceOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TemplateStepUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    templateId?: StringFieldUpdateOperationsInput | string
    approverId?: StringFieldUpdateOperationsInput | string
    sequenceOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditCreateInput = {
    id?: string
    action: $Enums.AuditAction
    details?: string | null
    createdAt?: Date | string
    document: DocumentCreateNestedOneWithoutAuditTrailInput
    user: UserCreateNestedOneWithoutAuditTrailInput
  }

  export type AuditUncheckedCreateInput = {
    id?: string
    documentId: string
    userId: string
    action: $Enums.AuditAction
    details?: string | null
    createdAt?: Date | string
  }

  export type AuditUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: EnumAuditActionFieldUpdateOperationsInput | $Enums.AuditAction
    details?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    document?: DocumentUpdateOneRequiredWithoutAuditTrailNestedInput
    user?: UserUpdateOneRequiredWithoutAuditTrailNestedInput
  }

  export type AuditUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    documentId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    action?: EnumAuditActionFieldUpdateOperationsInput | $Enums.AuditAction
    details?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditCreateManyInput = {
    id?: string
    documentId: string
    userId: string
    action: $Enums.AuditAction
    details?: string | null
    createdAt?: Date | string
  }

  export type AuditUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: EnumAuditActionFieldUpdateOperationsInput | $Enums.AuditAction
    details?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    documentId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    action?: EnumAuditActionFieldUpdateOperationsInput | $Enums.AuditAction
    details?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CapexFormCreateInput = {
    id?: string
    title: string
    unit: string
    location: string
    projectManager: string
    projectHead: string
    requestDate?: Date | string
    priority: string
    budgetType: string
    description: string
    projectStart: Date | string
    projectEnd: Date | string
    oldAssets: string
    technicalSuitability: string
    compliance: string
    implications: string
    costTable: JsonNullValueInput | InputJsonValue
    economicViability: string
    spendingPlan: JsonNullValueInput | InputJsonValue
    additionalComments: string
    createdAt?: Date | string
    updatedAt?: Date | string
    document: DocumentCreateNestedOneWithoutCapexFormInput
  }

  export type CapexFormUncheckedCreateInput = {
    id?: string
    documentId: string
    title: string
    unit: string
    location: string
    projectManager: string
    projectHead: string
    requestDate?: Date | string
    priority: string
    budgetType: string
    description: string
    projectStart: Date | string
    projectEnd: Date | string
    oldAssets: string
    technicalSuitability: string
    compliance: string
    implications: string
    costTable: JsonNullValueInput | InputJsonValue
    economicViability: string
    spendingPlan: JsonNullValueInput | InputJsonValue
    additionalComments: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CapexFormUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    unit?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    projectManager?: StringFieldUpdateOperationsInput | string
    projectHead?: StringFieldUpdateOperationsInput | string
    requestDate?: DateTimeFieldUpdateOperationsInput | Date | string
    priority?: StringFieldUpdateOperationsInput | string
    budgetType?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    projectStart?: DateTimeFieldUpdateOperationsInput | Date | string
    projectEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    oldAssets?: StringFieldUpdateOperationsInput | string
    technicalSuitability?: StringFieldUpdateOperationsInput | string
    compliance?: StringFieldUpdateOperationsInput | string
    implications?: StringFieldUpdateOperationsInput | string
    costTable?: JsonNullValueInput | InputJsonValue
    economicViability?: StringFieldUpdateOperationsInput | string
    spendingPlan?: JsonNullValueInput | InputJsonValue
    additionalComments?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    document?: DocumentUpdateOneRequiredWithoutCapexFormNestedInput
  }

  export type CapexFormUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    documentId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    unit?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    projectManager?: StringFieldUpdateOperationsInput | string
    projectHead?: StringFieldUpdateOperationsInput | string
    requestDate?: DateTimeFieldUpdateOperationsInput | Date | string
    priority?: StringFieldUpdateOperationsInput | string
    budgetType?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    projectStart?: DateTimeFieldUpdateOperationsInput | Date | string
    projectEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    oldAssets?: StringFieldUpdateOperationsInput | string
    technicalSuitability?: StringFieldUpdateOperationsInput | string
    compliance?: StringFieldUpdateOperationsInput | string
    implications?: StringFieldUpdateOperationsInput | string
    costTable?: JsonNullValueInput | InputJsonValue
    economicViability?: StringFieldUpdateOperationsInput | string
    spendingPlan?: JsonNullValueInput | InputJsonValue
    additionalComments?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CapexFormCreateManyInput = {
    id?: string
    documentId: string
    title: string
    unit: string
    location: string
    projectManager: string
    projectHead: string
    requestDate?: Date | string
    priority: string
    budgetType: string
    description: string
    projectStart: Date | string
    projectEnd: Date | string
    oldAssets: string
    technicalSuitability: string
    compliance: string
    implications: string
    costTable: JsonNullValueInput | InputJsonValue
    economicViability: string
    spendingPlan: JsonNullValueInput | InputJsonValue
    additionalComments: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CapexFormUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    unit?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    projectManager?: StringFieldUpdateOperationsInput | string
    projectHead?: StringFieldUpdateOperationsInput | string
    requestDate?: DateTimeFieldUpdateOperationsInput | Date | string
    priority?: StringFieldUpdateOperationsInput | string
    budgetType?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    projectStart?: DateTimeFieldUpdateOperationsInput | Date | string
    projectEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    oldAssets?: StringFieldUpdateOperationsInput | string
    technicalSuitability?: StringFieldUpdateOperationsInput | string
    compliance?: StringFieldUpdateOperationsInput | string
    implications?: StringFieldUpdateOperationsInput | string
    costTable?: JsonNullValueInput | InputJsonValue
    economicViability?: StringFieldUpdateOperationsInput | string
    spendingPlan?: JsonNullValueInput | InputJsonValue
    additionalComments?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CapexFormUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    documentId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    unit?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    projectManager?: StringFieldUpdateOperationsInput | string
    projectHead?: StringFieldUpdateOperationsInput | string
    requestDate?: DateTimeFieldUpdateOperationsInput | Date | string
    priority?: StringFieldUpdateOperationsInput | string
    budgetType?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    projectStart?: DateTimeFieldUpdateOperationsInput | Date | string
    projectEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    oldAssets?: StringFieldUpdateOperationsInput | string
    technicalSuitability?: StringFieldUpdateOperationsInput | string
    compliance?: StringFieldUpdateOperationsInput | string
    implications?: StringFieldUpdateOperationsInput | string
    costTable?: JsonNullValueInput | InputJsonValue
    economicViability?: StringFieldUpdateOperationsInput | string
    spendingPlan?: JsonNullValueInput | InputJsonValue
    additionalComments?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
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

  export type DocumentListRelationFilter = {
    every?: DocumentWhereInput
    some?: DocumentWhereInput
    none?: DocumentWhereInput
  }

  export type ApprovalListRelationFilter = {
    every?: ApprovalWhereInput
    some?: ApprovalWhereInput
    none?: ApprovalWhereInput
  }

  export type CommentListRelationFilter = {
    every?: CommentWhereInput
    some?: CommentWhereInput
    none?: CommentWhereInput
  }

  export type NotificationListRelationFilter = {
    every?: NotificationWhereInput
    some?: NotificationWhereInput
    none?: NotificationWhereInput
  }

  export type TemplateListRelationFilter = {
    every?: TemplateWhereInput
    some?: TemplateWhereInput
    none?: TemplateWhereInput
  }

  export type TemplateStepListRelationFilter = {
    every?: TemplateStepWhereInput
    some?: TemplateStepWhereInput
    none?: TemplateStepWhereInput
  }

  export type AuditListRelationFilter = {
    every?: AuditWhereInput
    some?: AuditWhereInput
    none?: AuditWhereInput
  }

  export type DocumentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ApprovalOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CommentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type NotificationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TemplateOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TemplateStepOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AuditOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserOrderByRelevanceInput = {
    fields: UserOrderByRelevanceFieldEnum | UserOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    department?: SortOrder
    isVerified?: SortOrder
    isAdmin?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    department?: SortOrder
    isVerified?: SortOrder
    isAdmin?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    department?: SortOrder
    isVerified?: SortOrder
    isAdmin?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
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
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BytesFilter<$PrismaModel = never> = {
    equals?: Uint8Array | BytesFieldRefInput<$PrismaModel>
    in?: Uint8Array[]
    notIn?: Uint8Array[]
    not?: NestedBytesFilter<$PrismaModel> | Uint8Array
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type EnumDocumentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.DocumentStatus | EnumDocumentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DocumentStatus[]
    notIn?: $Enums.DocumentStatus[]
    not?: NestedEnumDocumentStatusFilter<$PrismaModel> | $Enums.DocumentStatus
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type TemplateNullableScalarRelationFilter = {
    is?: TemplateWhereInput | null
    isNot?: TemplateWhereInput | null
  }

  export type CapexFormNullableScalarRelationFilter = {
    is?: CapexFormWhereInput | null
    isNot?: CapexFormWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type DocumentOrderByRelevanceInput = {
    fields: DocumentOrderByRelevanceFieldEnum | DocumentOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type DocumentCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    file?: SortOrder
    fileName?: SortOrder
    fileType?: SortOrder
    amount?: SortOrder
    type?: SortOrder
    status?: SortOrder
    initiatorId?: SortOrder
    templateId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    completedAt?: SortOrder
  }

  export type DocumentAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type DocumentMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    file?: SortOrder
    fileName?: SortOrder
    fileType?: SortOrder
    amount?: SortOrder
    type?: SortOrder
    status?: SortOrder
    initiatorId?: SortOrder
    templateId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    completedAt?: SortOrder
  }

  export type DocumentMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    file?: SortOrder
    fileName?: SortOrder
    fileType?: SortOrder
    amount?: SortOrder
    type?: SortOrder
    status?: SortOrder
    initiatorId?: SortOrder
    templateId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    completedAt?: SortOrder
  }

  export type DocumentSumOrderByAggregateInput = {
    amount?: SortOrder
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
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BytesWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Uint8Array | BytesFieldRefInput<$PrismaModel>
    in?: Uint8Array[]
    notIn?: Uint8Array[]
    not?: NestedBytesWithAggregatesFilter<$PrismaModel> | Uint8Array
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBytesFilter<$PrismaModel>
    _max?: NestedBytesFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type EnumDocumentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DocumentStatus | EnumDocumentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DocumentStatus[]
    notIn?: $Enums.DocumentStatus[]
    not?: NestedEnumDocumentStatusWithAggregatesFilter<$PrismaModel> | $Enums.DocumentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDocumentStatusFilter<$PrismaModel>
    _max?: NestedEnumDocumentStatusFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
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

  export type EnumApprovalStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ApprovalStatus | EnumApprovalStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ApprovalStatus[]
    notIn?: $Enums.ApprovalStatus[]
    not?: NestedEnumApprovalStatusFilter<$PrismaModel> | $Enums.ApprovalStatus
  }

  export type DocumentScalarRelationFilter = {
    is?: DocumentWhereInput
    isNot?: DocumentWhereInput
  }

  export type ApprovalOrderByRelevanceInput = {
    fields: ApprovalOrderByRelevanceFieldEnum | ApprovalOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ApprovalCountOrderByAggregateInput = {
    id?: SortOrder
    sequenceOrder?: SortOrder
    status?: SortOrder
    documentId?: SortOrder
    approverId?: SortOrder
    approvedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ApprovalAvgOrderByAggregateInput = {
    sequenceOrder?: SortOrder
  }

  export type ApprovalMaxOrderByAggregateInput = {
    id?: SortOrder
    sequenceOrder?: SortOrder
    status?: SortOrder
    documentId?: SortOrder
    approverId?: SortOrder
    approvedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ApprovalMinOrderByAggregateInput = {
    id?: SortOrder
    sequenceOrder?: SortOrder
    status?: SortOrder
    documentId?: SortOrder
    approverId?: SortOrder
    approvedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ApprovalSumOrderByAggregateInput = {
    sequenceOrder?: SortOrder
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

  export type EnumApprovalStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ApprovalStatus | EnumApprovalStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ApprovalStatus[]
    notIn?: $Enums.ApprovalStatus[]
    not?: NestedEnumApprovalStatusWithAggregatesFilter<$PrismaModel> | $Enums.ApprovalStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumApprovalStatusFilter<$PrismaModel>
    _max?: NestedEnumApprovalStatusFilter<$PrismaModel>
  }

  export type ApprovalScalarRelationFilter = {
    is?: ApprovalWhereInput
    isNot?: ApprovalWhereInput
  }

  export type CommentOrderByRelevanceInput = {
    fields: CommentOrderByRelevanceFieldEnum | CommentOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type CommentCountOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    approvalId?: SortOrder
    documentId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type CommentMaxOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    approvalId?: SortOrder
    documentId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type CommentMinOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    approvalId?: SortOrder
    documentId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumNotificationTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationType | EnumNotificationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.NotificationType[]
    notIn?: $Enums.NotificationType[]
    not?: NestedEnumNotificationTypeFilter<$PrismaModel> | $Enums.NotificationType
  }

  export type NotificationOrderByRelevanceInput = {
    fields: NotificationOrderByRelevanceFieldEnum | NotificationOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type NotificationCountOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    message?: SortOrder
    read?: SortOrder
    userId?: SortOrder
    documentId?: SortOrder
    createdAt?: SortOrder
  }

  export type NotificationMaxOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    message?: SortOrder
    read?: SortOrder
    userId?: SortOrder
    documentId?: SortOrder
    createdAt?: SortOrder
  }

  export type NotificationMinOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    message?: SortOrder
    read?: SortOrder
    userId?: SortOrder
    documentId?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumNotificationTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationType | EnumNotificationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.NotificationType[]
    notIn?: $Enums.NotificationType[]
    not?: NestedEnumNotificationTypeWithAggregatesFilter<$PrismaModel> | $Enums.NotificationType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumNotificationTypeFilter<$PrismaModel>
    _max?: NestedEnumNotificationTypeFilter<$PrismaModel>
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type TemplateOrderByRelevanceInput = {
    fields: TemplateOrderByRelevanceFieldEnum | TemplateOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type TemplateCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    name?: SortOrder
    formData?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TemplateMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TemplateMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type TemplateScalarRelationFilter = {
    is?: TemplateWhereInput
    isNot?: TemplateWhereInput
  }

  export type TemplateStepOrderByRelevanceInput = {
    fields: TemplateStepOrderByRelevanceFieldEnum | TemplateStepOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type TemplateStepCountOrderByAggregateInput = {
    id?: SortOrder
    templateId?: SortOrder
    approverId?: SortOrder
    sequenceOrder?: SortOrder
    createdAt?: SortOrder
  }

  export type TemplateStepAvgOrderByAggregateInput = {
    sequenceOrder?: SortOrder
  }

  export type TemplateStepMaxOrderByAggregateInput = {
    id?: SortOrder
    templateId?: SortOrder
    approverId?: SortOrder
    sequenceOrder?: SortOrder
    createdAt?: SortOrder
  }

  export type TemplateStepMinOrderByAggregateInput = {
    id?: SortOrder
    templateId?: SortOrder
    approverId?: SortOrder
    sequenceOrder?: SortOrder
    createdAt?: SortOrder
  }

  export type TemplateStepSumOrderByAggregateInput = {
    sequenceOrder?: SortOrder
  }

  export type EnumAuditActionFilter<$PrismaModel = never> = {
    equals?: $Enums.AuditAction | EnumAuditActionFieldRefInput<$PrismaModel>
    in?: $Enums.AuditAction[]
    notIn?: $Enums.AuditAction[]
    not?: NestedEnumAuditActionFilter<$PrismaModel> | $Enums.AuditAction
  }

  export type AuditOrderByRelevanceInput = {
    fields: AuditOrderByRelevanceFieldEnum | AuditOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type AuditCountOrderByAggregateInput = {
    id?: SortOrder
    documentId?: SortOrder
    userId?: SortOrder
    action?: SortOrder
    details?: SortOrder
    createdAt?: SortOrder
  }

  export type AuditMaxOrderByAggregateInput = {
    id?: SortOrder
    documentId?: SortOrder
    userId?: SortOrder
    action?: SortOrder
    details?: SortOrder
    createdAt?: SortOrder
  }

  export type AuditMinOrderByAggregateInput = {
    id?: SortOrder
    documentId?: SortOrder
    userId?: SortOrder
    action?: SortOrder
    details?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumAuditActionWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AuditAction | EnumAuditActionFieldRefInput<$PrismaModel>
    in?: $Enums.AuditAction[]
    notIn?: $Enums.AuditAction[]
    not?: NestedEnumAuditActionWithAggregatesFilter<$PrismaModel> | $Enums.AuditAction
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAuditActionFilter<$PrismaModel>
    _max?: NestedEnumAuditActionFilter<$PrismaModel>
  }

  export type CapexFormOrderByRelevanceInput = {
    fields: CapexFormOrderByRelevanceFieldEnum | CapexFormOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type CapexFormCountOrderByAggregateInput = {
    id?: SortOrder
    documentId?: SortOrder
    title?: SortOrder
    unit?: SortOrder
    location?: SortOrder
    projectManager?: SortOrder
    projectHead?: SortOrder
    requestDate?: SortOrder
    priority?: SortOrder
    budgetType?: SortOrder
    description?: SortOrder
    projectStart?: SortOrder
    projectEnd?: SortOrder
    oldAssets?: SortOrder
    technicalSuitability?: SortOrder
    compliance?: SortOrder
    implications?: SortOrder
    costTable?: SortOrder
    economicViability?: SortOrder
    spendingPlan?: SortOrder
    additionalComments?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CapexFormMaxOrderByAggregateInput = {
    id?: SortOrder
    documentId?: SortOrder
    title?: SortOrder
    unit?: SortOrder
    location?: SortOrder
    projectManager?: SortOrder
    projectHead?: SortOrder
    requestDate?: SortOrder
    priority?: SortOrder
    budgetType?: SortOrder
    description?: SortOrder
    projectStart?: SortOrder
    projectEnd?: SortOrder
    oldAssets?: SortOrder
    technicalSuitability?: SortOrder
    compliance?: SortOrder
    implications?: SortOrder
    economicViability?: SortOrder
    additionalComments?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CapexFormMinOrderByAggregateInput = {
    id?: SortOrder
    documentId?: SortOrder
    title?: SortOrder
    unit?: SortOrder
    location?: SortOrder
    projectManager?: SortOrder
    projectHead?: SortOrder
    requestDate?: SortOrder
    priority?: SortOrder
    budgetType?: SortOrder
    description?: SortOrder
    projectStart?: SortOrder
    projectEnd?: SortOrder
    oldAssets?: SortOrder
    technicalSuitability?: SortOrder
    compliance?: SortOrder
    implications?: SortOrder
    economicViability?: SortOrder
    additionalComments?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DocumentCreateNestedManyWithoutInitiatorInput = {
    create?: XOR<DocumentCreateWithoutInitiatorInput, DocumentUncheckedCreateWithoutInitiatorInput> | DocumentCreateWithoutInitiatorInput[] | DocumentUncheckedCreateWithoutInitiatorInput[]
    connectOrCreate?: DocumentCreateOrConnectWithoutInitiatorInput | DocumentCreateOrConnectWithoutInitiatorInput[]
    createMany?: DocumentCreateManyInitiatorInputEnvelope
    connect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
  }

  export type ApprovalCreateNestedManyWithoutApproverInput = {
    create?: XOR<ApprovalCreateWithoutApproverInput, ApprovalUncheckedCreateWithoutApproverInput> | ApprovalCreateWithoutApproverInput[] | ApprovalUncheckedCreateWithoutApproverInput[]
    connectOrCreate?: ApprovalCreateOrConnectWithoutApproverInput | ApprovalCreateOrConnectWithoutApproverInput[]
    createMany?: ApprovalCreateManyApproverInputEnvelope
    connect?: ApprovalWhereUniqueInput | ApprovalWhereUniqueInput[]
  }

  export type CommentCreateNestedManyWithoutUserInput = {
    create?: XOR<CommentCreateWithoutUserInput, CommentUncheckedCreateWithoutUserInput> | CommentCreateWithoutUserInput[] | CommentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutUserInput | CommentCreateOrConnectWithoutUserInput[]
    createMany?: CommentCreateManyUserInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type NotificationCreateNestedManyWithoutUserInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type TemplateCreateNestedManyWithoutUserInput = {
    create?: XOR<TemplateCreateWithoutUserInput, TemplateUncheckedCreateWithoutUserInput> | TemplateCreateWithoutUserInput[] | TemplateUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TemplateCreateOrConnectWithoutUserInput | TemplateCreateOrConnectWithoutUserInput[]
    createMany?: TemplateCreateManyUserInputEnvelope
    connect?: TemplateWhereUniqueInput | TemplateWhereUniqueInput[]
  }

  export type TemplateStepCreateNestedManyWithoutApproverInput = {
    create?: XOR<TemplateStepCreateWithoutApproverInput, TemplateStepUncheckedCreateWithoutApproverInput> | TemplateStepCreateWithoutApproverInput[] | TemplateStepUncheckedCreateWithoutApproverInput[]
    connectOrCreate?: TemplateStepCreateOrConnectWithoutApproverInput | TemplateStepCreateOrConnectWithoutApproverInput[]
    createMany?: TemplateStepCreateManyApproverInputEnvelope
    connect?: TemplateStepWhereUniqueInput | TemplateStepWhereUniqueInput[]
  }

  export type AuditCreateNestedManyWithoutUserInput = {
    create?: XOR<AuditCreateWithoutUserInput, AuditUncheckedCreateWithoutUserInput> | AuditCreateWithoutUserInput[] | AuditUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AuditCreateOrConnectWithoutUserInput | AuditCreateOrConnectWithoutUserInput[]
    createMany?: AuditCreateManyUserInputEnvelope
    connect?: AuditWhereUniqueInput | AuditWhereUniqueInput[]
  }

  export type DocumentUncheckedCreateNestedManyWithoutInitiatorInput = {
    create?: XOR<DocumentCreateWithoutInitiatorInput, DocumentUncheckedCreateWithoutInitiatorInput> | DocumentCreateWithoutInitiatorInput[] | DocumentUncheckedCreateWithoutInitiatorInput[]
    connectOrCreate?: DocumentCreateOrConnectWithoutInitiatorInput | DocumentCreateOrConnectWithoutInitiatorInput[]
    createMany?: DocumentCreateManyInitiatorInputEnvelope
    connect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
  }

  export type ApprovalUncheckedCreateNestedManyWithoutApproverInput = {
    create?: XOR<ApprovalCreateWithoutApproverInput, ApprovalUncheckedCreateWithoutApproverInput> | ApprovalCreateWithoutApproverInput[] | ApprovalUncheckedCreateWithoutApproverInput[]
    connectOrCreate?: ApprovalCreateOrConnectWithoutApproverInput | ApprovalCreateOrConnectWithoutApproverInput[]
    createMany?: ApprovalCreateManyApproverInputEnvelope
    connect?: ApprovalWhereUniqueInput | ApprovalWhereUniqueInput[]
  }

  export type CommentUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<CommentCreateWithoutUserInput, CommentUncheckedCreateWithoutUserInput> | CommentCreateWithoutUserInput[] | CommentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutUserInput | CommentCreateOrConnectWithoutUserInput[]
    createMany?: CommentCreateManyUserInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type NotificationUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type TemplateUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<TemplateCreateWithoutUserInput, TemplateUncheckedCreateWithoutUserInput> | TemplateCreateWithoutUserInput[] | TemplateUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TemplateCreateOrConnectWithoutUserInput | TemplateCreateOrConnectWithoutUserInput[]
    createMany?: TemplateCreateManyUserInputEnvelope
    connect?: TemplateWhereUniqueInput | TemplateWhereUniqueInput[]
  }

  export type TemplateStepUncheckedCreateNestedManyWithoutApproverInput = {
    create?: XOR<TemplateStepCreateWithoutApproverInput, TemplateStepUncheckedCreateWithoutApproverInput> | TemplateStepCreateWithoutApproverInput[] | TemplateStepUncheckedCreateWithoutApproverInput[]
    connectOrCreate?: TemplateStepCreateOrConnectWithoutApproverInput | TemplateStepCreateOrConnectWithoutApproverInput[]
    createMany?: TemplateStepCreateManyApproverInputEnvelope
    connect?: TemplateStepWhereUniqueInput | TemplateStepWhereUniqueInput[]
  }

  export type AuditUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AuditCreateWithoutUserInput, AuditUncheckedCreateWithoutUserInput> | AuditCreateWithoutUserInput[] | AuditUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AuditCreateOrConnectWithoutUserInput | AuditCreateOrConnectWithoutUserInput[]
    createMany?: AuditCreateManyUserInputEnvelope
    connect?: AuditWhereUniqueInput | AuditWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type DocumentUpdateManyWithoutInitiatorNestedInput = {
    create?: XOR<DocumentCreateWithoutInitiatorInput, DocumentUncheckedCreateWithoutInitiatorInput> | DocumentCreateWithoutInitiatorInput[] | DocumentUncheckedCreateWithoutInitiatorInput[]
    connectOrCreate?: DocumentCreateOrConnectWithoutInitiatorInput | DocumentCreateOrConnectWithoutInitiatorInput[]
    upsert?: DocumentUpsertWithWhereUniqueWithoutInitiatorInput | DocumentUpsertWithWhereUniqueWithoutInitiatorInput[]
    createMany?: DocumentCreateManyInitiatorInputEnvelope
    set?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    disconnect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    delete?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    connect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    update?: DocumentUpdateWithWhereUniqueWithoutInitiatorInput | DocumentUpdateWithWhereUniqueWithoutInitiatorInput[]
    updateMany?: DocumentUpdateManyWithWhereWithoutInitiatorInput | DocumentUpdateManyWithWhereWithoutInitiatorInput[]
    deleteMany?: DocumentScalarWhereInput | DocumentScalarWhereInput[]
  }

  export type ApprovalUpdateManyWithoutApproverNestedInput = {
    create?: XOR<ApprovalCreateWithoutApproverInput, ApprovalUncheckedCreateWithoutApproverInput> | ApprovalCreateWithoutApproverInput[] | ApprovalUncheckedCreateWithoutApproverInput[]
    connectOrCreate?: ApprovalCreateOrConnectWithoutApproverInput | ApprovalCreateOrConnectWithoutApproverInput[]
    upsert?: ApprovalUpsertWithWhereUniqueWithoutApproverInput | ApprovalUpsertWithWhereUniqueWithoutApproverInput[]
    createMany?: ApprovalCreateManyApproverInputEnvelope
    set?: ApprovalWhereUniqueInput | ApprovalWhereUniqueInput[]
    disconnect?: ApprovalWhereUniqueInput | ApprovalWhereUniqueInput[]
    delete?: ApprovalWhereUniqueInput | ApprovalWhereUniqueInput[]
    connect?: ApprovalWhereUniqueInput | ApprovalWhereUniqueInput[]
    update?: ApprovalUpdateWithWhereUniqueWithoutApproverInput | ApprovalUpdateWithWhereUniqueWithoutApproverInput[]
    updateMany?: ApprovalUpdateManyWithWhereWithoutApproverInput | ApprovalUpdateManyWithWhereWithoutApproverInput[]
    deleteMany?: ApprovalScalarWhereInput | ApprovalScalarWhereInput[]
  }

  export type CommentUpdateManyWithoutUserNestedInput = {
    create?: XOR<CommentCreateWithoutUserInput, CommentUncheckedCreateWithoutUserInput> | CommentCreateWithoutUserInput[] | CommentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutUserInput | CommentCreateOrConnectWithoutUserInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutUserInput | CommentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CommentCreateManyUserInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutUserInput | CommentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutUserInput | CommentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type NotificationUpdateManyWithoutUserNestedInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutUserInput | NotificationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutUserInput | NotificationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutUserInput | NotificationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type TemplateUpdateManyWithoutUserNestedInput = {
    create?: XOR<TemplateCreateWithoutUserInput, TemplateUncheckedCreateWithoutUserInput> | TemplateCreateWithoutUserInput[] | TemplateUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TemplateCreateOrConnectWithoutUserInput | TemplateCreateOrConnectWithoutUserInput[]
    upsert?: TemplateUpsertWithWhereUniqueWithoutUserInput | TemplateUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TemplateCreateManyUserInputEnvelope
    set?: TemplateWhereUniqueInput | TemplateWhereUniqueInput[]
    disconnect?: TemplateWhereUniqueInput | TemplateWhereUniqueInput[]
    delete?: TemplateWhereUniqueInput | TemplateWhereUniqueInput[]
    connect?: TemplateWhereUniqueInput | TemplateWhereUniqueInput[]
    update?: TemplateUpdateWithWhereUniqueWithoutUserInput | TemplateUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TemplateUpdateManyWithWhereWithoutUserInput | TemplateUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TemplateScalarWhereInput | TemplateScalarWhereInput[]
  }

  export type TemplateStepUpdateManyWithoutApproverNestedInput = {
    create?: XOR<TemplateStepCreateWithoutApproverInput, TemplateStepUncheckedCreateWithoutApproverInput> | TemplateStepCreateWithoutApproverInput[] | TemplateStepUncheckedCreateWithoutApproverInput[]
    connectOrCreate?: TemplateStepCreateOrConnectWithoutApproverInput | TemplateStepCreateOrConnectWithoutApproverInput[]
    upsert?: TemplateStepUpsertWithWhereUniqueWithoutApproverInput | TemplateStepUpsertWithWhereUniqueWithoutApproverInput[]
    createMany?: TemplateStepCreateManyApproverInputEnvelope
    set?: TemplateStepWhereUniqueInput | TemplateStepWhereUniqueInput[]
    disconnect?: TemplateStepWhereUniqueInput | TemplateStepWhereUniqueInput[]
    delete?: TemplateStepWhereUniqueInput | TemplateStepWhereUniqueInput[]
    connect?: TemplateStepWhereUniqueInput | TemplateStepWhereUniqueInput[]
    update?: TemplateStepUpdateWithWhereUniqueWithoutApproverInput | TemplateStepUpdateWithWhereUniqueWithoutApproverInput[]
    updateMany?: TemplateStepUpdateManyWithWhereWithoutApproverInput | TemplateStepUpdateManyWithWhereWithoutApproverInput[]
    deleteMany?: TemplateStepScalarWhereInput | TemplateStepScalarWhereInput[]
  }

  export type AuditUpdateManyWithoutUserNestedInput = {
    create?: XOR<AuditCreateWithoutUserInput, AuditUncheckedCreateWithoutUserInput> | AuditCreateWithoutUserInput[] | AuditUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AuditCreateOrConnectWithoutUserInput | AuditCreateOrConnectWithoutUserInput[]
    upsert?: AuditUpsertWithWhereUniqueWithoutUserInput | AuditUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AuditCreateManyUserInputEnvelope
    set?: AuditWhereUniqueInput | AuditWhereUniqueInput[]
    disconnect?: AuditWhereUniqueInput | AuditWhereUniqueInput[]
    delete?: AuditWhereUniqueInput | AuditWhereUniqueInput[]
    connect?: AuditWhereUniqueInput | AuditWhereUniqueInput[]
    update?: AuditUpdateWithWhereUniqueWithoutUserInput | AuditUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AuditUpdateManyWithWhereWithoutUserInput | AuditUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AuditScalarWhereInput | AuditScalarWhereInput[]
  }

  export type DocumentUncheckedUpdateManyWithoutInitiatorNestedInput = {
    create?: XOR<DocumentCreateWithoutInitiatorInput, DocumentUncheckedCreateWithoutInitiatorInput> | DocumentCreateWithoutInitiatorInput[] | DocumentUncheckedCreateWithoutInitiatorInput[]
    connectOrCreate?: DocumentCreateOrConnectWithoutInitiatorInput | DocumentCreateOrConnectWithoutInitiatorInput[]
    upsert?: DocumentUpsertWithWhereUniqueWithoutInitiatorInput | DocumentUpsertWithWhereUniqueWithoutInitiatorInput[]
    createMany?: DocumentCreateManyInitiatorInputEnvelope
    set?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    disconnect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    delete?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    connect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    update?: DocumentUpdateWithWhereUniqueWithoutInitiatorInput | DocumentUpdateWithWhereUniqueWithoutInitiatorInput[]
    updateMany?: DocumentUpdateManyWithWhereWithoutInitiatorInput | DocumentUpdateManyWithWhereWithoutInitiatorInput[]
    deleteMany?: DocumentScalarWhereInput | DocumentScalarWhereInput[]
  }

  export type ApprovalUncheckedUpdateManyWithoutApproverNestedInput = {
    create?: XOR<ApprovalCreateWithoutApproverInput, ApprovalUncheckedCreateWithoutApproverInput> | ApprovalCreateWithoutApproverInput[] | ApprovalUncheckedCreateWithoutApproverInput[]
    connectOrCreate?: ApprovalCreateOrConnectWithoutApproverInput | ApprovalCreateOrConnectWithoutApproverInput[]
    upsert?: ApprovalUpsertWithWhereUniqueWithoutApproverInput | ApprovalUpsertWithWhereUniqueWithoutApproverInput[]
    createMany?: ApprovalCreateManyApproverInputEnvelope
    set?: ApprovalWhereUniqueInput | ApprovalWhereUniqueInput[]
    disconnect?: ApprovalWhereUniqueInput | ApprovalWhereUniqueInput[]
    delete?: ApprovalWhereUniqueInput | ApprovalWhereUniqueInput[]
    connect?: ApprovalWhereUniqueInput | ApprovalWhereUniqueInput[]
    update?: ApprovalUpdateWithWhereUniqueWithoutApproverInput | ApprovalUpdateWithWhereUniqueWithoutApproverInput[]
    updateMany?: ApprovalUpdateManyWithWhereWithoutApproverInput | ApprovalUpdateManyWithWhereWithoutApproverInput[]
    deleteMany?: ApprovalScalarWhereInput | ApprovalScalarWhereInput[]
  }

  export type CommentUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<CommentCreateWithoutUserInput, CommentUncheckedCreateWithoutUserInput> | CommentCreateWithoutUserInput[] | CommentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutUserInput | CommentCreateOrConnectWithoutUserInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutUserInput | CommentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CommentCreateManyUserInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutUserInput | CommentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutUserInput | CommentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type NotificationUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutUserInput | NotificationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutUserInput | NotificationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutUserInput | NotificationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type TemplateUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<TemplateCreateWithoutUserInput, TemplateUncheckedCreateWithoutUserInput> | TemplateCreateWithoutUserInput[] | TemplateUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TemplateCreateOrConnectWithoutUserInput | TemplateCreateOrConnectWithoutUserInput[]
    upsert?: TemplateUpsertWithWhereUniqueWithoutUserInput | TemplateUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TemplateCreateManyUserInputEnvelope
    set?: TemplateWhereUniqueInput | TemplateWhereUniqueInput[]
    disconnect?: TemplateWhereUniqueInput | TemplateWhereUniqueInput[]
    delete?: TemplateWhereUniqueInput | TemplateWhereUniqueInput[]
    connect?: TemplateWhereUniqueInput | TemplateWhereUniqueInput[]
    update?: TemplateUpdateWithWhereUniqueWithoutUserInput | TemplateUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TemplateUpdateManyWithWhereWithoutUserInput | TemplateUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TemplateScalarWhereInput | TemplateScalarWhereInput[]
  }

  export type TemplateStepUncheckedUpdateManyWithoutApproverNestedInput = {
    create?: XOR<TemplateStepCreateWithoutApproverInput, TemplateStepUncheckedCreateWithoutApproverInput> | TemplateStepCreateWithoutApproverInput[] | TemplateStepUncheckedCreateWithoutApproverInput[]
    connectOrCreate?: TemplateStepCreateOrConnectWithoutApproverInput | TemplateStepCreateOrConnectWithoutApproverInput[]
    upsert?: TemplateStepUpsertWithWhereUniqueWithoutApproverInput | TemplateStepUpsertWithWhereUniqueWithoutApproverInput[]
    createMany?: TemplateStepCreateManyApproverInputEnvelope
    set?: TemplateStepWhereUniqueInput | TemplateStepWhereUniqueInput[]
    disconnect?: TemplateStepWhereUniqueInput | TemplateStepWhereUniqueInput[]
    delete?: TemplateStepWhereUniqueInput | TemplateStepWhereUniqueInput[]
    connect?: TemplateStepWhereUniqueInput | TemplateStepWhereUniqueInput[]
    update?: TemplateStepUpdateWithWhereUniqueWithoutApproverInput | TemplateStepUpdateWithWhereUniqueWithoutApproverInput[]
    updateMany?: TemplateStepUpdateManyWithWhereWithoutApproverInput | TemplateStepUpdateManyWithWhereWithoutApproverInput[]
    deleteMany?: TemplateStepScalarWhereInput | TemplateStepScalarWhereInput[]
  }

  export type AuditUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AuditCreateWithoutUserInput, AuditUncheckedCreateWithoutUserInput> | AuditCreateWithoutUserInput[] | AuditUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AuditCreateOrConnectWithoutUserInput | AuditCreateOrConnectWithoutUserInput[]
    upsert?: AuditUpsertWithWhereUniqueWithoutUserInput | AuditUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AuditCreateManyUserInputEnvelope
    set?: AuditWhereUniqueInput | AuditWhereUniqueInput[]
    disconnect?: AuditWhereUniqueInput | AuditWhereUniqueInput[]
    delete?: AuditWhereUniqueInput | AuditWhereUniqueInput[]
    connect?: AuditWhereUniqueInput | AuditWhereUniqueInput[]
    update?: AuditUpdateWithWhereUniqueWithoutUserInput | AuditUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AuditUpdateManyWithWhereWithoutUserInput | AuditUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AuditScalarWhereInput | AuditScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutDocumentsInput = {
    create?: XOR<UserCreateWithoutDocumentsInput, UserUncheckedCreateWithoutDocumentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutDocumentsInput
    connect?: UserWhereUniqueInput
  }

  export type ApprovalCreateNestedManyWithoutDocumentInput = {
    create?: XOR<ApprovalCreateWithoutDocumentInput, ApprovalUncheckedCreateWithoutDocumentInput> | ApprovalCreateWithoutDocumentInput[] | ApprovalUncheckedCreateWithoutDocumentInput[]
    connectOrCreate?: ApprovalCreateOrConnectWithoutDocumentInput | ApprovalCreateOrConnectWithoutDocumentInput[]
    createMany?: ApprovalCreateManyDocumentInputEnvelope
    connect?: ApprovalWhereUniqueInput | ApprovalWhereUniqueInput[]
  }

  export type CommentCreateNestedManyWithoutDocumentInput = {
    create?: XOR<CommentCreateWithoutDocumentInput, CommentUncheckedCreateWithoutDocumentInput> | CommentCreateWithoutDocumentInput[] | CommentUncheckedCreateWithoutDocumentInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutDocumentInput | CommentCreateOrConnectWithoutDocumentInput[]
    createMany?: CommentCreateManyDocumentInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type AuditCreateNestedManyWithoutDocumentInput = {
    create?: XOR<AuditCreateWithoutDocumentInput, AuditUncheckedCreateWithoutDocumentInput> | AuditCreateWithoutDocumentInput[] | AuditUncheckedCreateWithoutDocumentInput[]
    connectOrCreate?: AuditCreateOrConnectWithoutDocumentInput | AuditCreateOrConnectWithoutDocumentInput[]
    createMany?: AuditCreateManyDocumentInputEnvelope
    connect?: AuditWhereUniqueInput | AuditWhereUniqueInput[]
  }

  export type TemplateCreateNestedOneWithoutDocumentsInput = {
    create?: XOR<TemplateCreateWithoutDocumentsInput, TemplateUncheckedCreateWithoutDocumentsInput>
    connectOrCreate?: TemplateCreateOrConnectWithoutDocumentsInput
    connect?: TemplateWhereUniqueInput
  }

  export type CapexFormCreateNestedOneWithoutDocumentInput = {
    create?: XOR<CapexFormCreateWithoutDocumentInput, CapexFormUncheckedCreateWithoutDocumentInput>
    connectOrCreate?: CapexFormCreateOrConnectWithoutDocumentInput
    connect?: CapexFormWhereUniqueInput
  }

  export type ApprovalUncheckedCreateNestedManyWithoutDocumentInput = {
    create?: XOR<ApprovalCreateWithoutDocumentInput, ApprovalUncheckedCreateWithoutDocumentInput> | ApprovalCreateWithoutDocumentInput[] | ApprovalUncheckedCreateWithoutDocumentInput[]
    connectOrCreate?: ApprovalCreateOrConnectWithoutDocumentInput | ApprovalCreateOrConnectWithoutDocumentInput[]
    createMany?: ApprovalCreateManyDocumentInputEnvelope
    connect?: ApprovalWhereUniqueInput | ApprovalWhereUniqueInput[]
  }

  export type CommentUncheckedCreateNestedManyWithoutDocumentInput = {
    create?: XOR<CommentCreateWithoutDocumentInput, CommentUncheckedCreateWithoutDocumentInput> | CommentCreateWithoutDocumentInput[] | CommentUncheckedCreateWithoutDocumentInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutDocumentInput | CommentCreateOrConnectWithoutDocumentInput[]
    createMany?: CommentCreateManyDocumentInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type AuditUncheckedCreateNestedManyWithoutDocumentInput = {
    create?: XOR<AuditCreateWithoutDocumentInput, AuditUncheckedCreateWithoutDocumentInput> | AuditCreateWithoutDocumentInput[] | AuditUncheckedCreateWithoutDocumentInput[]
    connectOrCreate?: AuditCreateOrConnectWithoutDocumentInput | AuditCreateOrConnectWithoutDocumentInput[]
    createMany?: AuditCreateManyDocumentInputEnvelope
    connect?: AuditWhereUniqueInput | AuditWhereUniqueInput[]
  }

  export type CapexFormUncheckedCreateNestedOneWithoutDocumentInput = {
    create?: XOR<CapexFormCreateWithoutDocumentInput, CapexFormUncheckedCreateWithoutDocumentInput>
    connectOrCreate?: CapexFormCreateOrConnectWithoutDocumentInput
    connect?: CapexFormWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BytesFieldUpdateOperationsInput = {
    set?: Uint8Array
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumDocumentStatusFieldUpdateOperationsInput = {
    set?: $Enums.DocumentStatus
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UserUpdateOneRequiredWithoutDocumentsNestedInput = {
    create?: XOR<UserCreateWithoutDocumentsInput, UserUncheckedCreateWithoutDocumentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutDocumentsInput
    upsert?: UserUpsertWithoutDocumentsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutDocumentsInput, UserUpdateWithoutDocumentsInput>, UserUncheckedUpdateWithoutDocumentsInput>
  }

  export type ApprovalUpdateManyWithoutDocumentNestedInput = {
    create?: XOR<ApprovalCreateWithoutDocumentInput, ApprovalUncheckedCreateWithoutDocumentInput> | ApprovalCreateWithoutDocumentInput[] | ApprovalUncheckedCreateWithoutDocumentInput[]
    connectOrCreate?: ApprovalCreateOrConnectWithoutDocumentInput | ApprovalCreateOrConnectWithoutDocumentInput[]
    upsert?: ApprovalUpsertWithWhereUniqueWithoutDocumentInput | ApprovalUpsertWithWhereUniqueWithoutDocumentInput[]
    createMany?: ApprovalCreateManyDocumentInputEnvelope
    set?: ApprovalWhereUniqueInput | ApprovalWhereUniqueInput[]
    disconnect?: ApprovalWhereUniqueInput | ApprovalWhereUniqueInput[]
    delete?: ApprovalWhereUniqueInput | ApprovalWhereUniqueInput[]
    connect?: ApprovalWhereUniqueInput | ApprovalWhereUniqueInput[]
    update?: ApprovalUpdateWithWhereUniqueWithoutDocumentInput | ApprovalUpdateWithWhereUniqueWithoutDocumentInput[]
    updateMany?: ApprovalUpdateManyWithWhereWithoutDocumentInput | ApprovalUpdateManyWithWhereWithoutDocumentInput[]
    deleteMany?: ApprovalScalarWhereInput | ApprovalScalarWhereInput[]
  }

  export type CommentUpdateManyWithoutDocumentNestedInput = {
    create?: XOR<CommentCreateWithoutDocumentInput, CommentUncheckedCreateWithoutDocumentInput> | CommentCreateWithoutDocumentInput[] | CommentUncheckedCreateWithoutDocumentInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutDocumentInput | CommentCreateOrConnectWithoutDocumentInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutDocumentInput | CommentUpsertWithWhereUniqueWithoutDocumentInput[]
    createMany?: CommentCreateManyDocumentInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutDocumentInput | CommentUpdateWithWhereUniqueWithoutDocumentInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutDocumentInput | CommentUpdateManyWithWhereWithoutDocumentInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type AuditUpdateManyWithoutDocumentNestedInput = {
    create?: XOR<AuditCreateWithoutDocumentInput, AuditUncheckedCreateWithoutDocumentInput> | AuditCreateWithoutDocumentInput[] | AuditUncheckedCreateWithoutDocumentInput[]
    connectOrCreate?: AuditCreateOrConnectWithoutDocumentInput | AuditCreateOrConnectWithoutDocumentInput[]
    upsert?: AuditUpsertWithWhereUniqueWithoutDocumentInput | AuditUpsertWithWhereUniqueWithoutDocumentInput[]
    createMany?: AuditCreateManyDocumentInputEnvelope
    set?: AuditWhereUniqueInput | AuditWhereUniqueInput[]
    disconnect?: AuditWhereUniqueInput | AuditWhereUniqueInput[]
    delete?: AuditWhereUniqueInput | AuditWhereUniqueInput[]
    connect?: AuditWhereUniqueInput | AuditWhereUniqueInput[]
    update?: AuditUpdateWithWhereUniqueWithoutDocumentInput | AuditUpdateWithWhereUniqueWithoutDocumentInput[]
    updateMany?: AuditUpdateManyWithWhereWithoutDocumentInput | AuditUpdateManyWithWhereWithoutDocumentInput[]
    deleteMany?: AuditScalarWhereInput | AuditScalarWhereInput[]
  }

  export type TemplateUpdateOneWithoutDocumentsNestedInput = {
    create?: XOR<TemplateCreateWithoutDocumentsInput, TemplateUncheckedCreateWithoutDocumentsInput>
    connectOrCreate?: TemplateCreateOrConnectWithoutDocumentsInput
    upsert?: TemplateUpsertWithoutDocumentsInput
    disconnect?: TemplateWhereInput | boolean
    delete?: TemplateWhereInput | boolean
    connect?: TemplateWhereUniqueInput
    update?: XOR<XOR<TemplateUpdateToOneWithWhereWithoutDocumentsInput, TemplateUpdateWithoutDocumentsInput>, TemplateUncheckedUpdateWithoutDocumentsInput>
  }

  export type CapexFormUpdateOneWithoutDocumentNestedInput = {
    create?: XOR<CapexFormCreateWithoutDocumentInput, CapexFormUncheckedCreateWithoutDocumentInput>
    connectOrCreate?: CapexFormCreateOrConnectWithoutDocumentInput
    upsert?: CapexFormUpsertWithoutDocumentInput
    disconnect?: CapexFormWhereInput | boolean
    delete?: CapexFormWhereInput | boolean
    connect?: CapexFormWhereUniqueInput
    update?: XOR<XOR<CapexFormUpdateToOneWithWhereWithoutDocumentInput, CapexFormUpdateWithoutDocumentInput>, CapexFormUncheckedUpdateWithoutDocumentInput>
  }

  export type ApprovalUncheckedUpdateManyWithoutDocumentNestedInput = {
    create?: XOR<ApprovalCreateWithoutDocumentInput, ApprovalUncheckedCreateWithoutDocumentInput> | ApprovalCreateWithoutDocumentInput[] | ApprovalUncheckedCreateWithoutDocumentInput[]
    connectOrCreate?: ApprovalCreateOrConnectWithoutDocumentInput | ApprovalCreateOrConnectWithoutDocumentInput[]
    upsert?: ApprovalUpsertWithWhereUniqueWithoutDocumentInput | ApprovalUpsertWithWhereUniqueWithoutDocumentInput[]
    createMany?: ApprovalCreateManyDocumentInputEnvelope
    set?: ApprovalWhereUniqueInput | ApprovalWhereUniqueInput[]
    disconnect?: ApprovalWhereUniqueInput | ApprovalWhereUniqueInput[]
    delete?: ApprovalWhereUniqueInput | ApprovalWhereUniqueInput[]
    connect?: ApprovalWhereUniqueInput | ApprovalWhereUniqueInput[]
    update?: ApprovalUpdateWithWhereUniqueWithoutDocumentInput | ApprovalUpdateWithWhereUniqueWithoutDocumentInput[]
    updateMany?: ApprovalUpdateManyWithWhereWithoutDocumentInput | ApprovalUpdateManyWithWhereWithoutDocumentInput[]
    deleteMany?: ApprovalScalarWhereInput | ApprovalScalarWhereInput[]
  }

  export type CommentUncheckedUpdateManyWithoutDocumentNestedInput = {
    create?: XOR<CommentCreateWithoutDocumentInput, CommentUncheckedCreateWithoutDocumentInput> | CommentCreateWithoutDocumentInput[] | CommentUncheckedCreateWithoutDocumentInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutDocumentInput | CommentCreateOrConnectWithoutDocumentInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutDocumentInput | CommentUpsertWithWhereUniqueWithoutDocumentInput[]
    createMany?: CommentCreateManyDocumentInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutDocumentInput | CommentUpdateWithWhereUniqueWithoutDocumentInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutDocumentInput | CommentUpdateManyWithWhereWithoutDocumentInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type AuditUncheckedUpdateManyWithoutDocumentNestedInput = {
    create?: XOR<AuditCreateWithoutDocumentInput, AuditUncheckedCreateWithoutDocumentInput> | AuditCreateWithoutDocumentInput[] | AuditUncheckedCreateWithoutDocumentInput[]
    connectOrCreate?: AuditCreateOrConnectWithoutDocumentInput | AuditCreateOrConnectWithoutDocumentInput[]
    upsert?: AuditUpsertWithWhereUniqueWithoutDocumentInput | AuditUpsertWithWhereUniqueWithoutDocumentInput[]
    createMany?: AuditCreateManyDocumentInputEnvelope
    set?: AuditWhereUniqueInput | AuditWhereUniqueInput[]
    disconnect?: AuditWhereUniqueInput | AuditWhereUniqueInput[]
    delete?: AuditWhereUniqueInput | AuditWhereUniqueInput[]
    connect?: AuditWhereUniqueInput | AuditWhereUniqueInput[]
    update?: AuditUpdateWithWhereUniqueWithoutDocumentInput | AuditUpdateWithWhereUniqueWithoutDocumentInput[]
    updateMany?: AuditUpdateManyWithWhereWithoutDocumentInput | AuditUpdateManyWithWhereWithoutDocumentInput[]
    deleteMany?: AuditScalarWhereInput | AuditScalarWhereInput[]
  }

  export type CapexFormUncheckedUpdateOneWithoutDocumentNestedInput = {
    create?: XOR<CapexFormCreateWithoutDocumentInput, CapexFormUncheckedCreateWithoutDocumentInput>
    connectOrCreate?: CapexFormCreateOrConnectWithoutDocumentInput
    upsert?: CapexFormUpsertWithoutDocumentInput
    disconnect?: CapexFormWhereInput | boolean
    delete?: CapexFormWhereInput | boolean
    connect?: CapexFormWhereUniqueInput
    update?: XOR<XOR<CapexFormUpdateToOneWithWhereWithoutDocumentInput, CapexFormUpdateWithoutDocumentInput>, CapexFormUncheckedUpdateWithoutDocumentInput>
  }

  export type DocumentCreateNestedOneWithoutApprovalsInput = {
    create?: XOR<DocumentCreateWithoutApprovalsInput, DocumentUncheckedCreateWithoutApprovalsInput>
    connectOrCreate?: DocumentCreateOrConnectWithoutApprovalsInput
    connect?: DocumentWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutApprovalsInput = {
    create?: XOR<UserCreateWithoutApprovalsInput, UserUncheckedCreateWithoutApprovalsInput>
    connectOrCreate?: UserCreateOrConnectWithoutApprovalsInput
    connect?: UserWhereUniqueInput
  }

  export type CommentCreateNestedManyWithoutApprovalInput = {
    create?: XOR<CommentCreateWithoutApprovalInput, CommentUncheckedCreateWithoutApprovalInput> | CommentCreateWithoutApprovalInput[] | CommentUncheckedCreateWithoutApprovalInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutApprovalInput | CommentCreateOrConnectWithoutApprovalInput[]
    createMany?: CommentCreateManyApprovalInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type CommentUncheckedCreateNestedManyWithoutApprovalInput = {
    create?: XOR<CommentCreateWithoutApprovalInput, CommentUncheckedCreateWithoutApprovalInput> | CommentCreateWithoutApprovalInput[] | CommentUncheckedCreateWithoutApprovalInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutApprovalInput | CommentCreateOrConnectWithoutApprovalInput[]
    createMany?: CommentCreateManyApprovalInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumApprovalStatusFieldUpdateOperationsInput = {
    set?: $Enums.ApprovalStatus
  }

  export type DocumentUpdateOneRequiredWithoutApprovalsNestedInput = {
    create?: XOR<DocumentCreateWithoutApprovalsInput, DocumentUncheckedCreateWithoutApprovalsInput>
    connectOrCreate?: DocumentCreateOrConnectWithoutApprovalsInput
    upsert?: DocumentUpsertWithoutApprovalsInput
    connect?: DocumentWhereUniqueInput
    update?: XOR<XOR<DocumentUpdateToOneWithWhereWithoutApprovalsInput, DocumentUpdateWithoutApprovalsInput>, DocumentUncheckedUpdateWithoutApprovalsInput>
  }

  export type UserUpdateOneRequiredWithoutApprovalsNestedInput = {
    create?: XOR<UserCreateWithoutApprovalsInput, UserUncheckedCreateWithoutApprovalsInput>
    connectOrCreate?: UserCreateOrConnectWithoutApprovalsInput
    upsert?: UserUpsertWithoutApprovalsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutApprovalsInput, UserUpdateWithoutApprovalsInput>, UserUncheckedUpdateWithoutApprovalsInput>
  }

  export type CommentUpdateManyWithoutApprovalNestedInput = {
    create?: XOR<CommentCreateWithoutApprovalInput, CommentUncheckedCreateWithoutApprovalInput> | CommentCreateWithoutApprovalInput[] | CommentUncheckedCreateWithoutApprovalInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutApprovalInput | CommentCreateOrConnectWithoutApprovalInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutApprovalInput | CommentUpsertWithWhereUniqueWithoutApprovalInput[]
    createMany?: CommentCreateManyApprovalInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutApprovalInput | CommentUpdateWithWhereUniqueWithoutApprovalInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutApprovalInput | CommentUpdateManyWithWhereWithoutApprovalInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type CommentUncheckedUpdateManyWithoutApprovalNestedInput = {
    create?: XOR<CommentCreateWithoutApprovalInput, CommentUncheckedCreateWithoutApprovalInput> | CommentCreateWithoutApprovalInput[] | CommentUncheckedCreateWithoutApprovalInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutApprovalInput | CommentCreateOrConnectWithoutApprovalInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutApprovalInput | CommentUpsertWithWhereUniqueWithoutApprovalInput[]
    createMany?: CommentCreateManyApprovalInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutApprovalInput | CommentUpdateWithWhereUniqueWithoutApprovalInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutApprovalInput | CommentUpdateManyWithWhereWithoutApprovalInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type ApprovalCreateNestedOneWithoutCommentsInput = {
    create?: XOR<ApprovalCreateWithoutCommentsInput, ApprovalUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: ApprovalCreateOrConnectWithoutCommentsInput
    connect?: ApprovalWhereUniqueInput
  }

  export type DocumentCreateNestedOneWithoutCommentsInput = {
    create?: XOR<DocumentCreateWithoutCommentsInput, DocumentUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: DocumentCreateOrConnectWithoutCommentsInput
    connect?: DocumentWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutCommentsInput = {
    create?: XOR<UserCreateWithoutCommentsInput, UserUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCommentsInput
    connect?: UserWhereUniqueInput
  }

  export type ApprovalUpdateOneRequiredWithoutCommentsNestedInput = {
    create?: XOR<ApprovalCreateWithoutCommentsInput, ApprovalUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: ApprovalCreateOrConnectWithoutCommentsInput
    upsert?: ApprovalUpsertWithoutCommentsInput
    connect?: ApprovalWhereUniqueInput
    update?: XOR<XOR<ApprovalUpdateToOneWithWhereWithoutCommentsInput, ApprovalUpdateWithoutCommentsInput>, ApprovalUncheckedUpdateWithoutCommentsInput>
  }

  export type DocumentUpdateOneRequiredWithoutCommentsNestedInput = {
    create?: XOR<DocumentCreateWithoutCommentsInput, DocumentUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: DocumentCreateOrConnectWithoutCommentsInput
    upsert?: DocumentUpsertWithoutCommentsInput
    connect?: DocumentWhereUniqueInput
    update?: XOR<XOR<DocumentUpdateToOneWithWhereWithoutCommentsInput, DocumentUpdateWithoutCommentsInput>, DocumentUncheckedUpdateWithoutCommentsInput>
  }

  export type UserUpdateOneRequiredWithoutCommentsNestedInput = {
    create?: XOR<UserCreateWithoutCommentsInput, UserUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCommentsInput
    upsert?: UserUpsertWithoutCommentsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCommentsInput, UserUpdateWithoutCommentsInput>, UserUncheckedUpdateWithoutCommentsInput>
  }

  export type UserCreateNestedOneWithoutNotificationsInput = {
    create?: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutNotificationsInput
    connect?: UserWhereUniqueInput
  }

  export type EnumNotificationTypeFieldUpdateOperationsInput = {
    set?: $Enums.NotificationType
  }

  export type UserUpdateOneRequiredWithoutNotificationsNestedInput = {
    create?: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutNotificationsInput
    upsert?: UserUpsertWithoutNotificationsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutNotificationsInput, UserUpdateWithoutNotificationsInput>, UserUncheckedUpdateWithoutNotificationsInput>
  }

  export type UserCreateNestedOneWithoutTemplatesInput = {
    create?: XOR<UserCreateWithoutTemplatesInput, UserUncheckedCreateWithoutTemplatesInput>
    connectOrCreate?: UserCreateOrConnectWithoutTemplatesInput
    connect?: UserWhereUniqueInput
  }

  export type DocumentCreateNestedManyWithoutTemplateUsedInput = {
    create?: XOR<DocumentCreateWithoutTemplateUsedInput, DocumentUncheckedCreateWithoutTemplateUsedInput> | DocumentCreateWithoutTemplateUsedInput[] | DocumentUncheckedCreateWithoutTemplateUsedInput[]
    connectOrCreate?: DocumentCreateOrConnectWithoutTemplateUsedInput | DocumentCreateOrConnectWithoutTemplateUsedInput[]
    createMany?: DocumentCreateManyTemplateUsedInputEnvelope
    connect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
  }

  export type TemplateStepCreateNestedManyWithoutTemplateInput = {
    create?: XOR<TemplateStepCreateWithoutTemplateInput, TemplateStepUncheckedCreateWithoutTemplateInput> | TemplateStepCreateWithoutTemplateInput[] | TemplateStepUncheckedCreateWithoutTemplateInput[]
    connectOrCreate?: TemplateStepCreateOrConnectWithoutTemplateInput | TemplateStepCreateOrConnectWithoutTemplateInput[]
    createMany?: TemplateStepCreateManyTemplateInputEnvelope
    connect?: TemplateStepWhereUniqueInput | TemplateStepWhereUniqueInput[]
  }

  export type DocumentUncheckedCreateNestedManyWithoutTemplateUsedInput = {
    create?: XOR<DocumentCreateWithoutTemplateUsedInput, DocumentUncheckedCreateWithoutTemplateUsedInput> | DocumentCreateWithoutTemplateUsedInput[] | DocumentUncheckedCreateWithoutTemplateUsedInput[]
    connectOrCreate?: DocumentCreateOrConnectWithoutTemplateUsedInput | DocumentCreateOrConnectWithoutTemplateUsedInput[]
    createMany?: DocumentCreateManyTemplateUsedInputEnvelope
    connect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
  }

  export type TemplateStepUncheckedCreateNestedManyWithoutTemplateInput = {
    create?: XOR<TemplateStepCreateWithoutTemplateInput, TemplateStepUncheckedCreateWithoutTemplateInput> | TemplateStepCreateWithoutTemplateInput[] | TemplateStepUncheckedCreateWithoutTemplateInput[]
    connectOrCreate?: TemplateStepCreateOrConnectWithoutTemplateInput | TemplateStepCreateOrConnectWithoutTemplateInput[]
    createMany?: TemplateStepCreateManyTemplateInputEnvelope
    connect?: TemplateStepWhereUniqueInput | TemplateStepWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutTemplatesNestedInput = {
    create?: XOR<UserCreateWithoutTemplatesInput, UserUncheckedCreateWithoutTemplatesInput>
    connectOrCreate?: UserCreateOrConnectWithoutTemplatesInput
    upsert?: UserUpsertWithoutTemplatesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTemplatesInput, UserUpdateWithoutTemplatesInput>, UserUncheckedUpdateWithoutTemplatesInput>
  }

  export type DocumentUpdateManyWithoutTemplateUsedNestedInput = {
    create?: XOR<DocumentCreateWithoutTemplateUsedInput, DocumentUncheckedCreateWithoutTemplateUsedInput> | DocumentCreateWithoutTemplateUsedInput[] | DocumentUncheckedCreateWithoutTemplateUsedInput[]
    connectOrCreate?: DocumentCreateOrConnectWithoutTemplateUsedInput | DocumentCreateOrConnectWithoutTemplateUsedInput[]
    upsert?: DocumentUpsertWithWhereUniqueWithoutTemplateUsedInput | DocumentUpsertWithWhereUniqueWithoutTemplateUsedInput[]
    createMany?: DocumentCreateManyTemplateUsedInputEnvelope
    set?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    disconnect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    delete?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    connect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    update?: DocumentUpdateWithWhereUniqueWithoutTemplateUsedInput | DocumentUpdateWithWhereUniqueWithoutTemplateUsedInput[]
    updateMany?: DocumentUpdateManyWithWhereWithoutTemplateUsedInput | DocumentUpdateManyWithWhereWithoutTemplateUsedInput[]
    deleteMany?: DocumentScalarWhereInput | DocumentScalarWhereInput[]
  }

  export type TemplateStepUpdateManyWithoutTemplateNestedInput = {
    create?: XOR<TemplateStepCreateWithoutTemplateInput, TemplateStepUncheckedCreateWithoutTemplateInput> | TemplateStepCreateWithoutTemplateInput[] | TemplateStepUncheckedCreateWithoutTemplateInput[]
    connectOrCreate?: TemplateStepCreateOrConnectWithoutTemplateInput | TemplateStepCreateOrConnectWithoutTemplateInput[]
    upsert?: TemplateStepUpsertWithWhereUniqueWithoutTemplateInput | TemplateStepUpsertWithWhereUniqueWithoutTemplateInput[]
    createMany?: TemplateStepCreateManyTemplateInputEnvelope
    set?: TemplateStepWhereUniqueInput | TemplateStepWhereUniqueInput[]
    disconnect?: TemplateStepWhereUniqueInput | TemplateStepWhereUniqueInput[]
    delete?: TemplateStepWhereUniqueInput | TemplateStepWhereUniqueInput[]
    connect?: TemplateStepWhereUniqueInput | TemplateStepWhereUniqueInput[]
    update?: TemplateStepUpdateWithWhereUniqueWithoutTemplateInput | TemplateStepUpdateWithWhereUniqueWithoutTemplateInput[]
    updateMany?: TemplateStepUpdateManyWithWhereWithoutTemplateInput | TemplateStepUpdateManyWithWhereWithoutTemplateInput[]
    deleteMany?: TemplateStepScalarWhereInput | TemplateStepScalarWhereInput[]
  }

  export type DocumentUncheckedUpdateManyWithoutTemplateUsedNestedInput = {
    create?: XOR<DocumentCreateWithoutTemplateUsedInput, DocumentUncheckedCreateWithoutTemplateUsedInput> | DocumentCreateWithoutTemplateUsedInput[] | DocumentUncheckedCreateWithoutTemplateUsedInput[]
    connectOrCreate?: DocumentCreateOrConnectWithoutTemplateUsedInput | DocumentCreateOrConnectWithoutTemplateUsedInput[]
    upsert?: DocumentUpsertWithWhereUniqueWithoutTemplateUsedInput | DocumentUpsertWithWhereUniqueWithoutTemplateUsedInput[]
    createMany?: DocumentCreateManyTemplateUsedInputEnvelope
    set?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    disconnect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    delete?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    connect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    update?: DocumentUpdateWithWhereUniqueWithoutTemplateUsedInput | DocumentUpdateWithWhereUniqueWithoutTemplateUsedInput[]
    updateMany?: DocumentUpdateManyWithWhereWithoutTemplateUsedInput | DocumentUpdateManyWithWhereWithoutTemplateUsedInput[]
    deleteMany?: DocumentScalarWhereInput | DocumentScalarWhereInput[]
  }

  export type TemplateStepUncheckedUpdateManyWithoutTemplateNestedInput = {
    create?: XOR<TemplateStepCreateWithoutTemplateInput, TemplateStepUncheckedCreateWithoutTemplateInput> | TemplateStepCreateWithoutTemplateInput[] | TemplateStepUncheckedCreateWithoutTemplateInput[]
    connectOrCreate?: TemplateStepCreateOrConnectWithoutTemplateInput | TemplateStepCreateOrConnectWithoutTemplateInput[]
    upsert?: TemplateStepUpsertWithWhereUniqueWithoutTemplateInput | TemplateStepUpsertWithWhereUniqueWithoutTemplateInput[]
    createMany?: TemplateStepCreateManyTemplateInputEnvelope
    set?: TemplateStepWhereUniqueInput | TemplateStepWhereUniqueInput[]
    disconnect?: TemplateStepWhereUniqueInput | TemplateStepWhereUniqueInput[]
    delete?: TemplateStepWhereUniqueInput | TemplateStepWhereUniqueInput[]
    connect?: TemplateStepWhereUniqueInput | TemplateStepWhereUniqueInput[]
    update?: TemplateStepUpdateWithWhereUniqueWithoutTemplateInput | TemplateStepUpdateWithWhereUniqueWithoutTemplateInput[]
    updateMany?: TemplateStepUpdateManyWithWhereWithoutTemplateInput | TemplateStepUpdateManyWithWhereWithoutTemplateInput[]
    deleteMany?: TemplateStepScalarWhereInput | TemplateStepScalarWhereInput[]
  }

  export type TemplateCreateNestedOneWithoutStepsInput = {
    create?: XOR<TemplateCreateWithoutStepsInput, TemplateUncheckedCreateWithoutStepsInput>
    connectOrCreate?: TemplateCreateOrConnectWithoutStepsInput
    connect?: TemplateWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutTemplateStepsInput = {
    create?: XOR<UserCreateWithoutTemplateStepsInput, UserUncheckedCreateWithoutTemplateStepsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTemplateStepsInput
    connect?: UserWhereUniqueInput
  }

  export type TemplateUpdateOneRequiredWithoutStepsNestedInput = {
    create?: XOR<TemplateCreateWithoutStepsInput, TemplateUncheckedCreateWithoutStepsInput>
    connectOrCreate?: TemplateCreateOrConnectWithoutStepsInput
    upsert?: TemplateUpsertWithoutStepsInput
    connect?: TemplateWhereUniqueInput
    update?: XOR<XOR<TemplateUpdateToOneWithWhereWithoutStepsInput, TemplateUpdateWithoutStepsInput>, TemplateUncheckedUpdateWithoutStepsInput>
  }

  export type UserUpdateOneRequiredWithoutTemplateStepsNestedInput = {
    create?: XOR<UserCreateWithoutTemplateStepsInput, UserUncheckedCreateWithoutTemplateStepsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTemplateStepsInput
    upsert?: UserUpsertWithoutTemplateStepsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTemplateStepsInput, UserUpdateWithoutTemplateStepsInput>, UserUncheckedUpdateWithoutTemplateStepsInput>
  }

  export type DocumentCreateNestedOneWithoutAuditTrailInput = {
    create?: XOR<DocumentCreateWithoutAuditTrailInput, DocumentUncheckedCreateWithoutAuditTrailInput>
    connectOrCreate?: DocumentCreateOrConnectWithoutAuditTrailInput
    connect?: DocumentWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutAuditTrailInput = {
    create?: XOR<UserCreateWithoutAuditTrailInput, UserUncheckedCreateWithoutAuditTrailInput>
    connectOrCreate?: UserCreateOrConnectWithoutAuditTrailInput
    connect?: UserWhereUniqueInput
  }

  export type EnumAuditActionFieldUpdateOperationsInput = {
    set?: $Enums.AuditAction
  }

  export type DocumentUpdateOneRequiredWithoutAuditTrailNestedInput = {
    create?: XOR<DocumentCreateWithoutAuditTrailInput, DocumentUncheckedCreateWithoutAuditTrailInput>
    connectOrCreate?: DocumentCreateOrConnectWithoutAuditTrailInput
    upsert?: DocumentUpsertWithoutAuditTrailInput
    connect?: DocumentWhereUniqueInput
    update?: XOR<XOR<DocumentUpdateToOneWithWhereWithoutAuditTrailInput, DocumentUpdateWithoutAuditTrailInput>, DocumentUncheckedUpdateWithoutAuditTrailInput>
  }

  export type UserUpdateOneRequiredWithoutAuditTrailNestedInput = {
    create?: XOR<UserCreateWithoutAuditTrailInput, UserUncheckedCreateWithoutAuditTrailInput>
    connectOrCreate?: UserCreateOrConnectWithoutAuditTrailInput
    upsert?: UserUpsertWithoutAuditTrailInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAuditTrailInput, UserUpdateWithoutAuditTrailInput>, UserUncheckedUpdateWithoutAuditTrailInput>
  }

  export type DocumentCreateNestedOneWithoutCapexFormInput = {
    create?: XOR<DocumentCreateWithoutCapexFormInput, DocumentUncheckedCreateWithoutCapexFormInput>
    connectOrCreate?: DocumentCreateOrConnectWithoutCapexFormInput
    connect?: DocumentWhereUniqueInput
  }

  export type DocumentUpdateOneRequiredWithoutCapexFormNestedInput = {
    create?: XOR<DocumentCreateWithoutCapexFormInput, DocumentUncheckedCreateWithoutCapexFormInput>
    connectOrCreate?: DocumentCreateOrConnectWithoutCapexFormInput
    upsert?: DocumentUpsertWithoutCapexFormInput
    connect?: DocumentWhereUniqueInput
    update?: XOR<XOR<DocumentUpdateToOneWithWhereWithoutCapexFormInput, DocumentUpdateWithoutCapexFormInput>, DocumentUncheckedUpdateWithoutCapexFormInput>
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
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
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
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
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
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBytesFilter<$PrismaModel = never> = {
    equals?: Uint8Array | BytesFieldRefInput<$PrismaModel>
    in?: Uint8Array[]
    notIn?: Uint8Array[]
    not?: NestedBytesFilter<$PrismaModel> | Uint8Array
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumDocumentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.DocumentStatus | EnumDocumentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DocumentStatus[]
    notIn?: $Enums.DocumentStatus[]
    not?: NestedEnumDocumentStatusFilter<$PrismaModel> | $Enums.DocumentStatus
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
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
    search?: string
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

  export type NestedBytesWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Uint8Array | BytesFieldRefInput<$PrismaModel>
    in?: Uint8Array[]
    notIn?: Uint8Array[]
    not?: NestedBytesWithAggregatesFilter<$PrismaModel> | Uint8Array
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBytesFilter<$PrismaModel>
    _max?: NestedBytesFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedEnumDocumentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DocumentStatus | EnumDocumentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DocumentStatus[]
    notIn?: $Enums.DocumentStatus[]
    not?: NestedEnumDocumentStatusWithAggregatesFilter<$PrismaModel> | $Enums.DocumentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDocumentStatusFilter<$PrismaModel>
    _max?: NestedEnumDocumentStatusFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumApprovalStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ApprovalStatus | EnumApprovalStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ApprovalStatus[]
    notIn?: $Enums.ApprovalStatus[]
    not?: NestedEnumApprovalStatusFilter<$PrismaModel> | $Enums.ApprovalStatus
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

  export type NestedEnumApprovalStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ApprovalStatus | EnumApprovalStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ApprovalStatus[]
    notIn?: $Enums.ApprovalStatus[]
    not?: NestedEnumApprovalStatusWithAggregatesFilter<$PrismaModel> | $Enums.ApprovalStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumApprovalStatusFilter<$PrismaModel>
    _max?: NestedEnumApprovalStatusFilter<$PrismaModel>
  }

  export type NestedEnumNotificationTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationType | EnumNotificationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.NotificationType[]
    notIn?: $Enums.NotificationType[]
    not?: NestedEnumNotificationTypeFilter<$PrismaModel> | $Enums.NotificationType
  }

  export type NestedEnumNotificationTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationType | EnumNotificationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.NotificationType[]
    notIn?: $Enums.NotificationType[]
    not?: NestedEnumNotificationTypeWithAggregatesFilter<$PrismaModel> | $Enums.NotificationType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumNotificationTypeFilter<$PrismaModel>
    _max?: NestedEnumNotificationTypeFilter<$PrismaModel>
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedEnumAuditActionFilter<$PrismaModel = never> = {
    equals?: $Enums.AuditAction | EnumAuditActionFieldRefInput<$PrismaModel>
    in?: $Enums.AuditAction[]
    notIn?: $Enums.AuditAction[]
    not?: NestedEnumAuditActionFilter<$PrismaModel> | $Enums.AuditAction
  }

  export type NestedEnumAuditActionWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AuditAction | EnumAuditActionFieldRefInput<$PrismaModel>
    in?: $Enums.AuditAction[]
    notIn?: $Enums.AuditAction[]
    not?: NestedEnumAuditActionWithAggregatesFilter<$PrismaModel> | $Enums.AuditAction
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAuditActionFilter<$PrismaModel>
    _max?: NestedEnumAuditActionFilter<$PrismaModel>
  }

  export type DocumentCreateWithoutInitiatorInput = {
    id?: string
    title: string
    description?: string | null
    file: Uint8Array
    fileName?: string | null
    fileType: string
    amount?: number | null
    type?: string | null
    status?: $Enums.DocumentStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    completedAt?: Date | string | null
    approvals?: ApprovalCreateNestedManyWithoutDocumentInput
    comments?: CommentCreateNestedManyWithoutDocumentInput
    auditTrail?: AuditCreateNestedManyWithoutDocumentInput
    templateUsed?: TemplateCreateNestedOneWithoutDocumentsInput
    capexForm?: CapexFormCreateNestedOneWithoutDocumentInput
  }

  export type DocumentUncheckedCreateWithoutInitiatorInput = {
    id?: string
    title: string
    description?: string | null
    file: Uint8Array
    fileName?: string | null
    fileType: string
    amount?: number | null
    type?: string | null
    status?: $Enums.DocumentStatus
    templateId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    completedAt?: Date | string | null
    approvals?: ApprovalUncheckedCreateNestedManyWithoutDocumentInput
    comments?: CommentUncheckedCreateNestedManyWithoutDocumentInput
    auditTrail?: AuditUncheckedCreateNestedManyWithoutDocumentInput
    capexForm?: CapexFormUncheckedCreateNestedOneWithoutDocumentInput
  }

  export type DocumentCreateOrConnectWithoutInitiatorInput = {
    where: DocumentWhereUniqueInput
    create: XOR<DocumentCreateWithoutInitiatorInput, DocumentUncheckedCreateWithoutInitiatorInput>
  }

  export type DocumentCreateManyInitiatorInputEnvelope = {
    data: DocumentCreateManyInitiatorInput | DocumentCreateManyInitiatorInput[]
    skipDuplicates?: boolean
  }

  export type ApprovalCreateWithoutApproverInput = {
    id?: string
    sequenceOrder: number
    status?: $Enums.ApprovalStatus
    approvedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    document: DocumentCreateNestedOneWithoutApprovalsInput
    comments?: CommentCreateNestedManyWithoutApprovalInput
  }

  export type ApprovalUncheckedCreateWithoutApproverInput = {
    id?: string
    sequenceOrder: number
    status?: $Enums.ApprovalStatus
    documentId: string
    approvedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    comments?: CommentUncheckedCreateNestedManyWithoutApprovalInput
  }

  export type ApprovalCreateOrConnectWithoutApproverInput = {
    where: ApprovalWhereUniqueInput
    create: XOR<ApprovalCreateWithoutApproverInput, ApprovalUncheckedCreateWithoutApproverInput>
  }

  export type ApprovalCreateManyApproverInputEnvelope = {
    data: ApprovalCreateManyApproverInput | ApprovalCreateManyApproverInput[]
    skipDuplicates?: boolean
  }

  export type CommentCreateWithoutUserInput = {
    id?: string
    content: string
    createdAt?: Date | string
    approval: ApprovalCreateNestedOneWithoutCommentsInput
    document: DocumentCreateNestedOneWithoutCommentsInput
  }

  export type CommentUncheckedCreateWithoutUserInput = {
    id?: string
    content: string
    approvalId: string
    documentId: string
    createdAt?: Date | string
  }

  export type CommentCreateOrConnectWithoutUserInput = {
    where: CommentWhereUniqueInput
    create: XOR<CommentCreateWithoutUserInput, CommentUncheckedCreateWithoutUserInput>
  }

  export type CommentCreateManyUserInputEnvelope = {
    data: CommentCreateManyUserInput | CommentCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type NotificationCreateWithoutUserInput = {
    id?: string
    type: $Enums.NotificationType
    message: string
    read?: boolean
    documentId?: string | null
    createdAt?: Date | string
  }

  export type NotificationUncheckedCreateWithoutUserInput = {
    id?: string
    type: $Enums.NotificationType
    message: string
    read?: boolean
    documentId?: string | null
    createdAt?: Date | string
  }

  export type NotificationCreateOrConnectWithoutUserInput = {
    where: NotificationWhereUniqueInput
    create: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput>
  }

  export type NotificationCreateManyUserInputEnvelope = {
    data: NotificationCreateManyUserInput | NotificationCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type TemplateCreateWithoutUserInput = {
    id?: string
    type: string
    name: string
    formData: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    documents?: DocumentCreateNestedManyWithoutTemplateUsedInput
    steps?: TemplateStepCreateNestedManyWithoutTemplateInput
  }

  export type TemplateUncheckedCreateWithoutUserInput = {
    id?: string
    type: string
    name: string
    formData: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    documents?: DocumentUncheckedCreateNestedManyWithoutTemplateUsedInput
    steps?: TemplateStepUncheckedCreateNestedManyWithoutTemplateInput
  }

  export type TemplateCreateOrConnectWithoutUserInput = {
    where: TemplateWhereUniqueInput
    create: XOR<TemplateCreateWithoutUserInput, TemplateUncheckedCreateWithoutUserInput>
  }

  export type TemplateCreateManyUserInputEnvelope = {
    data: TemplateCreateManyUserInput | TemplateCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type TemplateStepCreateWithoutApproverInput = {
    id?: string
    sequenceOrder: number
    createdAt?: Date | string
    template: TemplateCreateNestedOneWithoutStepsInput
  }

  export type TemplateStepUncheckedCreateWithoutApproverInput = {
    id?: string
    templateId: string
    sequenceOrder: number
    createdAt?: Date | string
  }

  export type TemplateStepCreateOrConnectWithoutApproverInput = {
    where: TemplateStepWhereUniqueInput
    create: XOR<TemplateStepCreateWithoutApproverInput, TemplateStepUncheckedCreateWithoutApproverInput>
  }

  export type TemplateStepCreateManyApproverInputEnvelope = {
    data: TemplateStepCreateManyApproverInput | TemplateStepCreateManyApproverInput[]
    skipDuplicates?: boolean
  }

  export type AuditCreateWithoutUserInput = {
    id?: string
    action: $Enums.AuditAction
    details?: string | null
    createdAt?: Date | string
    document: DocumentCreateNestedOneWithoutAuditTrailInput
  }

  export type AuditUncheckedCreateWithoutUserInput = {
    id?: string
    documentId: string
    action: $Enums.AuditAction
    details?: string | null
    createdAt?: Date | string
  }

  export type AuditCreateOrConnectWithoutUserInput = {
    where: AuditWhereUniqueInput
    create: XOR<AuditCreateWithoutUserInput, AuditUncheckedCreateWithoutUserInput>
  }

  export type AuditCreateManyUserInputEnvelope = {
    data: AuditCreateManyUserInput | AuditCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type DocumentUpsertWithWhereUniqueWithoutInitiatorInput = {
    where: DocumentWhereUniqueInput
    update: XOR<DocumentUpdateWithoutInitiatorInput, DocumentUncheckedUpdateWithoutInitiatorInput>
    create: XOR<DocumentCreateWithoutInitiatorInput, DocumentUncheckedCreateWithoutInitiatorInput>
  }

  export type DocumentUpdateWithWhereUniqueWithoutInitiatorInput = {
    where: DocumentWhereUniqueInput
    data: XOR<DocumentUpdateWithoutInitiatorInput, DocumentUncheckedUpdateWithoutInitiatorInput>
  }

  export type DocumentUpdateManyWithWhereWithoutInitiatorInput = {
    where: DocumentScalarWhereInput
    data: XOR<DocumentUpdateManyMutationInput, DocumentUncheckedUpdateManyWithoutInitiatorInput>
  }

  export type DocumentScalarWhereInput = {
    AND?: DocumentScalarWhereInput | DocumentScalarWhereInput[]
    OR?: DocumentScalarWhereInput[]
    NOT?: DocumentScalarWhereInput | DocumentScalarWhereInput[]
    id?: StringFilter<"Document"> | string
    title?: StringFilter<"Document"> | string
    description?: StringNullableFilter<"Document"> | string | null
    file?: BytesFilter<"Document"> | Uint8Array
    fileName?: StringNullableFilter<"Document"> | string | null
    fileType?: StringFilter<"Document"> | string
    amount?: FloatNullableFilter<"Document"> | number | null
    type?: StringNullableFilter<"Document"> | string | null
    status?: EnumDocumentStatusFilter<"Document"> | $Enums.DocumentStatus
    initiatorId?: StringFilter<"Document"> | string
    templateId?: StringNullableFilter<"Document"> | string | null
    createdAt?: DateTimeFilter<"Document"> | Date | string
    updatedAt?: DateTimeFilter<"Document"> | Date | string
    completedAt?: DateTimeNullableFilter<"Document"> | Date | string | null
  }

  export type ApprovalUpsertWithWhereUniqueWithoutApproverInput = {
    where: ApprovalWhereUniqueInput
    update: XOR<ApprovalUpdateWithoutApproverInput, ApprovalUncheckedUpdateWithoutApproverInput>
    create: XOR<ApprovalCreateWithoutApproverInput, ApprovalUncheckedCreateWithoutApproverInput>
  }

  export type ApprovalUpdateWithWhereUniqueWithoutApproverInput = {
    where: ApprovalWhereUniqueInput
    data: XOR<ApprovalUpdateWithoutApproverInput, ApprovalUncheckedUpdateWithoutApproverInput>
  }

  export type ApprovalUpdateManyWithWhereWithoutApproverInput = {
    where: ApprovalScalarWhereInput
    data: XOR<ApprovalUpdateManyMutationInput, ApprovalUncheckedUpdateManyWithoutApproverInput>
  }

  export type ApprovalScalarWhereInput = {
    AND?: ApprovalScalarWhereInput | ApprovalScalarWhereInput[]
    OR?: ApprovalScalarWhereInput[]
    NOT?: ApprovalScalarWhereInput | ApprovalScalarWhereInput[]
    id?: StringFilter<"Approval"> | string
    sequenceOrder?: IntFilter<"Approval"> | number
    status?: EnumApprovalStatusFilter<"Approval"> | $Enums.ApprovalStatus
    documentId?: StringFilter<"Approval"> | string
    approverId?: StringFilter<"Approval"> | string
    approvedAt?: DateTimeNullableFilter<"Approval"> | Date | string | null
    createdAt?: DateTimeFilter<"Approval"> | Date | string
    updatedAt?: DateTimeFilter<"Approval"> | Date | string
  }

  export type CommentUpsertWithWhereUniqueWithoutUserInput = {
    where: CommentWhereUniqueInput
    update: XOR<CommentUpdateWithoutUserInput, CommentUncheckedUpdateWithoutUserInput>
    create: XOR<CommentCreateWithoutUserInput, CommentUncheckedCreateWithoutUserInput>
  }

  export type CommentUpdateWithWhereUniqueWithoutUserInput = {
    where: CommentWhereUniqueInput
    data: XOR<CommentUpdateWithoutUserInput, CommentUncheckedUpdateWithoutUserInput>
  }

  export type CommentUpdateManyWithWhereWithoutUserInput = {
    where: CommentScalarWhereInput
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyWithoutUserInput>
  }

  export type CommentScalarWhereInput = {
    AND?: CommentScalarWhereInput | CommentScalarWhereInput[]
    OR?: CommentScalarWhereInput[]
    NOT?: CommentScalarWhereInput | CommentScalarWhereInput[]
    id?: StringFilter<"Comment"> | string
    content?: StringFilter<"Comment"> | string
    approvalId?: StringFilter<"Comment"> | string
    documentId?: StringFilter<"Comment"> | string
    userId?: StringFilter<"Comment"> | string
    createdAt?: DateTimeFilter<"Comment"> | Date | string
  }

  export type NotificationUpsertWithWhereUniqueWithoutUserInput = {
    where: NotificationWhereUniqueInput
    update: XOR<NotificationUpdateWithoutUserInput, NotificationUncheckedUpdateWithoutUserInput>
    create: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput>
  }

  export type NotificationUpdateWithWhereUniqueWithoutUserInput = {
    where: NotificationWhereUniqueInput
    data: XOR<NotificationUpdateWithoutUserInput, NotificationUncheckedUpdateWithoutUserInput>
  }

  export type NotificationUpdateManyWithWhereWithoutUserInput = {
    where: NotificationScalarWhereInput
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyWithoutUserInput>
  }

  export type NotificationScalarWhereInput = {
    AND?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
    OR?: NotificationScalarWhereInput[]
    NOT?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
    id?: StringFilter<"Notification"> | string
    type?: EnumNotificationTypeFilter<"Notification"> | $Enums.NotificationType
    message?: StringFilter<"Notification"> | string
    read?: BoolFilter<"Notification"> | boolean
    userId?: StringFilter<"Notification"> | string
    documentId?: StringNullableFilter<"Notification"> | string | null
    createdAt?: DateTimeFilter<"Notification"> | Date | string
  }

  export type TemplateUpsertWithWhereUniqueWithoutUserInput = {
    where: TemplateWhereUniqueInput
    update: XOR<TemplateUpdateWithoutUserInput, TemplateUncheckedUpdateWithoutUserInput>
    create: XOR<TemplateCreateWithoutUserInput, TemplateUncheckedCreateWithoutUserInput>
  }

  export type TemplateUpdateWithWhereUniqueWithoutUserInput = {
    where: TemplateWhereUniqueInput
    data: XOR<TemplateUpdateWithoutUserInput, TemplateUncheckedUpdateWithoutUserInput>
  }

  export type TemplateUpdateManyWithWhereWithoutUserInput = {
    where: TemplateScalarWhereInput
    data: XOR<TemplateUpdateManyMutationInput, TemplateUncheckedUpdateManyWithoutUserInput>
  }

  export type TemplateScalarWhereInput = {
    AND?: TemplateScalarWhereInput | TemplateScalarWhereInput[]
    OR?: TemplateScalarWhereInput[]
    NOT?: TemplateScalarWhereInput | TemplateScalarWhereInput[]
    id?: StringFilter<"Template"> | string
    userId?: StringFilter<"Template"> | string
    type?: StringFilter<"Template"> | string
    name?: StringFilter<"Template"> | string
    formData?: JsonFilter<"Template">
    createdAt?: DateTimeFilter<"Template"> | Date | string
    updatedAt?: DateTimeFilter<"Template"> | Date | string
  }

  export type TemplateStepUpsertWithWhereUniqueWithoutApproverInput = {
    where: TemplateStepWhereUniqueInput
    update: XOR<TemplateStepUpdateWithoutApproverInput, TemplateStepUncheckedUpdateWithoutApproverInput>
    create: XOR<TemplateStepCreateWithoutApproverInput, TemplateStepUncheckedCreateWithoutApproverInput>
  }

  export type TemplateStepUpdateWithWhereUniqueWithoutApproverInput = {
    where: TemplateStepWhereUniqueInput
    data: XOR<TemplateStepUpdateWithoutApproverInput, TemplateStepUncheckedUpdateWithoutApproverInput>
  }

  export type TemplateStepUpdateManyWithWhereWithoutApproverInput = {
    where: TemplateStepScalarWhereInput
    data: XOR<TemplateStepUpdateManyMutationInput, TemplateStepUncheckedUpdateManyWithoutApproverInput>
  }

  export type TemplateStepScalarWhereInput = {
    AND?: TemplateStepScalarWhereInput | TemplateStepScalarWhereInput[]
    OR?: TemplateStepScalarWhereInput[]
    NOT?: TemplateStepScalarWhereInput | TemplateStepScalarWhereInput[]
    id?: StringFilter<"TemplateStep"> | string
    templateId?: StringFilter<"TemplateStep"> | string
    approverId?: StringFilter<"TemplateStep"> | string
    sequenceOrder?: IntFilter<"TemplateStep"> | number
    createdAt?: DateTimeFilter<"TemplateStep"> | Date | string
  }

  export type AuditUpsertWithWhereUniqueWithoutUserInput = {
    where: AuditWhereUniqueInput
    update: XOR<AuditUpdateWithoutUserInput, AuditUncheckedUpdateWithoutUserInput>
    create: XOR<AuditCreateWithoutUserInput, AuditUncheckedCreateWithoutUserInput>
  }

  export type AuditUpdateWithWhereUniqueWithoutUserInput = {
    where: AuditWhereUniqueInput
    data: XOR<AuditUpdateWithoutUserInput, AuditUncheckedUpdateWithoutUserInput>
  }

  export type AuditUpdateManyWithWhereWithoutUserInput = {
    where: AuditScalarWhereInput
    data: XOR<AuditUpdateManyMutationInput, AuditUncheckedUpdateManyWithoutUserInput>
  }

  export type AuditScalarWhereInput = {
    AND?: AuditScalarWhereInput | AuditScalarWhereInput[]
    OR?: AuditScalarWhereInput[]
    NOT?: AuditScalarWhereInput | AuditScalarWhereInput[]
    id?: StringFilter<"Audit"> | string
    documentId?: StringFilter<"Audit"> | string
    userId?: StringFilter<"Audit"> | string
    action?: EnumAuditActionFilter<"Audit"> | $Enums.AuditAction
    details?: StringNullableFilter<"Audit"> | string | null
    createdAt?: DateTimeFilter<"Audit"> | Date | string
  }

  export type UserCreateWithoutDocumentsInput = {
    id?: string
    email: string
    password: string
    firstName: string
    lastName: string
    department?: string
    isVerified?: boolean
    isAdmin?: boolean
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    approvals?: ApprovalCreateNestedManyWithoutApproverInput
    comments?: CommentCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    templates?: TemplateCreateNestedManyWithoutUserInput
    templateSteps?: TemplateStepCreateNestedManyWithoutApproverInput
    auditTrail?: AuditCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutDocumentsInput = {
    id?: string
    email: string
    password: string
    firstName: string
    lastName: string
    department?: string
    isVerified?: boolean
    isAdmin?: boolean
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    approvals?: ApprovalUncheckedCreateNestedManyWithoutApproverInput
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    templates?: TemplateUncheckedCreateNestedManyWithoutUserInput
    templateSteps?: TemplateStepUncheckedCreateNestedManyWithoutApproverInput
    auditTrail?: AuditUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutDocumentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutDocumentsInput, UserUncheckedCreateWithoutDocumentsInput>
  }

  export type ApprovalCreateWithoutDocumentInput = {
    id?: string
    sequenceOrder: number
    status?: $Enums.ApprovalStatus
    approvedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    approver: UserCreateNestedOneWithoutApprovalsInput
    comments?: CommentCreateNestedManyWithoutApprovalInput
  }

  export type ApprovalUncheckedCreateWithoutDocumentInput = {
    id?: string
    sequenceOrder: number
    status?: $Enums.ApprovalStatus
    approverId: string
    approvedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    comments?: CommentUncheckedCreateNestedManyWithoutApprovalInput
  }

  export type ApprovalCreateOrConnectWithoutDocumentInput = {
    where: ApprovalWhereUniqueInput
    create: XOR<ApprovalCreateWithoutDocumentInput, ApprovalUncheckedCreateWithoutDocumentInput>
  }

  export type ApprovalCreateManyDocumentInputEnvelope = {
    data: ApprovalCreateManyDocumentInput | ApprovalCreateManyDocumentInput[]
    skipDuplicates?: boolean
  }

  export type CommentCreateWithoutDocumentInput = {
    id?: string
    content: string
    createdAt?: Date | string
    approval: ApprovalCreateNestedOneWithoutCommentsInput
    user: UserCreateNestedOneWithoutCommentsInput
  }

  export type CommentUncheckedCreateWithoutDocumentInput = {
    id?: string
    content: string
    approvalId: string
    userId: string
    createdAt?: Date | string
  }

  export type CommentCreateOrConnectWithoutDocumentInput = {
    where: CommentWhereUniqueInput
    create: XOR<CommentCreateWithoutDocumentInput, CommentUncheckedCreateWithoutDocumentInput>
  }

  export type CommentCreateManyDocumentInputEnvelope = {
    data: CommentCreateManyDocumentInput | CommentCreateManyDocumentInput[]
    skipDuplicates?: boolean
  }

  export type AuditCreateWithoutDocumentInput = {
    id?: string
    action: $Enums.AuditAction
    details?: string | null
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutAuditTrailInput
  }

  export type AuditUncheckedCreateWithoutDocumentInput = {
    id?: string
    userId: string
    action: $Enums.AuditAction
    details?: string | null
    createdAt?: Date | string
  }

  export type AuditCreateOrConnectWithoutDocumentInput = {
    where: AuditWhereUniqueInput
    create: XOR<AuditCreateWithoutDocumentInput, AuditUncheckedCreateWithoutDocumentInput>
  }

  export type AuditCreateManyDocumentInputEnvelope = {
    data: AuditCreateManyDocumentInput | AuditCreateManyDocumentInput[]
    skipDuplicates?: boolean
  }

  export type TemplateCreateWithoutDocumentsInput = {
    id?: string
    type: string
    name: string
    formData: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutTemplatesInput
    steps?: TemplateStepCreateNestedManyWithoutTemplateInput
  }

  export type TemplateUncheckedCreateWithoutDocumentsInput = {
    id?: string
    userId: string
    type: string
    name: string
    formData: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    steps?: TemplateStepUncheckedCreateNestedManyWithoutTemplateInput
  }

  export type TemplateCreateOrConnectWithoutDocumentsInput = {
    where: TemplateWhereUniqueInput
    create: XOR<TemplateCreateWithoutDocumentsInput, TemplateUncheckedCreateWithoutDocumentsInput>
  }

  export type CapexFormCreateWithoutDocumentInput = {
    id?: string
    title: string
    unit: string
    location: string
    projectManager: string
    projectHead: string
    requestDate?: Date | string
    priority: string
    budgetType: string
    description: string
    projectStart: Date | string
    projectEnd: Date | string
    oldAssets: string
    technicalSuitability: string
    compliance: string
    implications: string
    costTable: JsonNullValueInput | InputJsonValue
    economicViability: string
    spendingPlan: JsonNullValueInput | InputJsonValue
    additionalComments: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CapexFormUncheckedCreateWithoutDocumentInput = {
    id?: string
    title: string
    unit: string
    location: string
    projectManager: string
    projectHead: string
    requestDate?: Date | string
    priority: string
    budgetType: string
    description: string
    projectStart: Date | string
    projectEnd: Date | string
    oldAssets: string
    technicalSuitability: string
    compliance: string
    implications: string
    costTable: JsonNullValueInput | InputJsonValue
    economicViability: string
    spendingPlan: JsonNullValueInput | InputJsonValue
    additionalComments: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CapexFormCreateOrConnectWithoutDocumentInput = {
    where: CapexFormWhereUniqueInput
    create: XOR<CapexFormCreateWithoutDocumentInput, CapexFormUncheckedCreateWithoutDocumentInput>
  }

  export type UserUpsertWithoutDocumentsInput = {
    update: XOR<UserUpdateWithoutDocumentsInput, UserUncheckedUpdateWithoutDocumentsInput>
    create: XOR<UserCreateWithoutDocumentsInput, UserUncheckedCreateWithoutDocumentsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutDocumentsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutDocumentsInput, UserUncheckedUpdateWithoutDocumentsInput>
  }

  export type UserUpdateWithoutDocumentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    approvals?: ApprovalUpdateManyWithoutApproverNestedInput
    comments?: CommentUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    templates?: TemplateUpdateManyWithoutUserNestedInput
    templateSteps?: TemplateStepUpdateManyWithoutApproverNestedInput
    auditTrail?: AuditUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutDocumentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    approvals?: ApprovalUncheckedUpdateManyWithoutApproverNestedInput
    comments?: CommentUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    templates?: TemplateUncheckedUpdateManyWithoutUserNestedInput
    templateSteps?: TemplateStepUncheckedUpdateManyWithoutApproverNestedInput
    auditTrail?: AuditUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ApprovalUpsertWithWhereUniqueWithoutDocumentInput = {
    where: ApprovalWhereUniqueInput
    update: XOR<ApprovalUpdateWithoutDocumentInput, ApprovalUncheckedUpdateWithoutDocumentInput>
    create: XOR<ApprovalCreateWithoutDocumentInput, ApprovalUncheckedCreateWithoutDocumentInput>
  }

  export type ApprovalUpdateWithWhereUniqueWithoutDocumentInput = {
    where: ApprovalWhereUniqueInput
    data: XOR<ApprovalUpdateWithoutDocumentInput, ApprovalUncheckedUpdateWithoutDocumentInput>
  }

  export type ApprovalUpdateManyWithWhereWithoutDocumentInput = {
    where: ApprovalScalarWhereInput
    data: XOR<ApprovalUpdateManyMutationInput, ApprovalUncheckedUpdateManyWithoutDocumentInput>
  }

  export type CommentUpsertWithWhereUniqueWithoutDocumentInput = {
    where: CommentWhereUniqueInput
    update: XOR<CommentUpdateWithoutDocumentInput, CommentUncheckedUpdateWithoutDocumentInput>
    create: XOR<CommentCreateWithoutDocumentInput, CommentUncheckedCreateWithoutDocumentInput>
  }

  export type CommentUpdateWithWhereUniqueWithoutDocumentInput = {
    where: CommentWhereUniqueInput
    data: XOR<CommentUpdateWithoutDocumentInput, CommentUncheckedUpdateWithoutDocumentInput>
  }

  export type CommentUpdateManyWithWhereWithoutDocumentInput = {
    where: CommentScalarWhereInput
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyWithoutDocumentInput>
  }

  export type AuditUpsertWithWhereUniqueWithoutDocumentInput = {
    where: AuditWhereUniqueInput
    update: XOR<AuditUpdateWithoutDocumentInput, AuditUncheckedUpdateWithoutDocumentInput>
    create: XOR<AuditCreateWithoutDocumentInput, AuditUncheckedCreateWithoutDocumentInput>
  }

  export type AuditUpdateWithWhereUniqueWithoutDocumentInput = {
    where: AuditWhereUniqueInput
    data: XOR<AuditUpdateWithoutDocumentInput, AuditUncheckedUpdateWithoutDocumentInput>
  }

  export type AuditUpdateManyWithWhereWithoutDocumentInput = {
    where: AuditScalarWhereInput
    data: XOR<AuditUpdateManyMutationInput, AuditUncheckedUpdateManyWithoutDocumentInput>
  }

  export type TemplateUpsertWithoutDocumentsInput = {
    update: XOR<TemplateUpdateWithoutDocumentsInput, TemplateUncheckedUpdateWithoutDocumentsInput>
    create: XOR<TemplateCreateWithoutDocumentsInput, TemplateUncheckedCreateWithoutDocumentsInput>
    where?: TemplateWhereInput
  }

  export type TemplateUpdateToOneWithWhereWithoutDocumentsInput = {
    where?: TemplateWhereInput
    data: XOR<TemplateUpdateWithoutDocumentsInput, TemplateUncheckedUpdateWithoutDocumentsInput>
  }

  export type TemplateUpdateWithoutDocumentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    formData?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTemplatesNestedInput
    steps?: TemplateStepUpdateManyWithoutTemplateNestedInput
  }

  export type TemplateUncheckedUpdateWithoutDocumentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    formData?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    steps?: TemplateStepUncheckedUpdateManyWithoutTemplateNestedInput
  }

  export type CapexFormUpsertWithoutDocumentInput = {
    update: XOR<CapexFormUpdateWithoutDocumentInput, CapexFormUncheckedUpdateWithoutDocumentInput>
    create: XOR<CapexFormCreateWithoutDocumentInput, CapexFormUncheckedCreateWithoutDocumentInput>
    where?: CapexFormWhereInput
  }

  export type CapexFormUpdateToOneWithWhereWithoutDocumentInput = {
    where?: CapexFormWhereInput
    data: XOR<CapexFormUpdateWithoutDocumentInput, CapexFormUncheckedUpdateWithoutDocumentInput>
  }

  export type CapexFormUpdateWithoutDocumentInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    unit?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    projectManager?: StringFieldUpdateOperationsInput | string
    projectHead?: StringFieldUpdateOperationsInput | string
    requestDate?: DateTimeFieldUpdateOperationsInput | Date | string
    priority?: StringFieldUpdateOperationsInput | string
    budgetType?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    projectStart?: DateTimeFieldUpdateOperationsInput | Date | string
    projectEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    oldAssets?: StringFieldUpdateOperationsInput | string
    technicalSuitability?: StringFieldUpdateOperationsInput | string
    compliance?: StringFieldUpdateOperationsInput | string
    implications?: StringFieldUpdateOperationsInput | string
    costTable?: JsonNullValueInput | InputJsonValue
    economicViability?: StringFieldUpdateOperationsInput | string
    spendingPlan?: JsonNullValueInput | InputJsonValue
    additionalComments?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CapexFormUncheckedUpdateWithoutDocumentInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    unit?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    projectManager?: StringFieldUpdateOperationsInput | string
    projectHead?: StringFieldUpdateOperationsInput | string
    requestDate?: DateTimeFieldUpdateOperationsInput | Date | string
    priority?: StringFieldUpdateOperationsInput | string
    budgetType?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    projectStart?: DateTimeFieldUpdateOperationsInput | Date | string
    projectEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    oldAssets?: StringFieldUpdateOperationsInput | string
    technicalSuitability?: StringFieldUpdateOperationsInput | string
    compliance?: StringFieldUpdateOperationsInput | string
    implications?: StringFieldUpdateOperationsInput | string
    costTable?: JsonNullValueInput | InputJsonValue
    economicViability?: StringFieldUpdateOperationsInput | string
    spendingPlan?: JsonNullValueInput | InputJsonValue
    additionalComments?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocumentCreateWithoutApprovalsInput = {
    id?: string
    title: string
    description?: string | null
    file: Uint8Array
    fileName?: string | null
    fileType: string
    amount?: number | null
    type?: string | null
    status?: $Enums.DocumentStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    completedAt?: Date | string | null
    initiator: UserCreateNestedOneWithoutDocumentsInput
    comments?: CommentCreateNestedManyWithoutDocumentInput
    auditTrail?: AuditCreateNestedManyWithoutDocumentInput
    templateUsed?: TemplateCreateNestedOneWithoutDocumentsInput
    capexForm?: CapexFormCreateNestedOneWithoutDocumentInput
  }

  export type DocumentUncheckedCreateWithoutApprovalsInput = {
    id?: string
    title: string
    description?: string | null
    file: Uint8Array
    fileName?: string | null
    fileType: string
    amount?: number | null
    type?: string | null
    status?: $Enums.DocumentStatus
    initiatorId: string
    templateId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    completedAt?: Date | string | null
    comments?: CommentUncheckedCreateNestedManyWithoutDocumentInput
    auditTrail?: AuditUncheckedCreateNestedManyWithoutDocumentInput
    capexForm?: CapexFormUncheckedCreateNestedOneWithoutDocumentInput
  }

  export type DocumentCreateOrConnectWithoutApprovalsInput = {
    where: DocumentWhereUniqueInput
    create: XOR<DocumentCreateWithoutApprovalsInput, DocumentUncheckedCreateWithoutApprovalsInput>
  }

  export type UserCreateWithoutApprovalsInput = {
    id?: string
    email: string
    password: string
    firstName: string
    lastName: string
    department?: string
    isVerified?: boolean
    isAdmin?: boolean
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    documents?: DocumentCreateNestedManyWithoutInitiatorInput
    comments?: CommentCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    templates?: TemplateCreateNestedManyWithoutUserInput
    templateSteps?: TemplateStepCreateNestedManyWithoutApproverInput
    auditTrail?: AuditCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutApprovalsInput = {
    id?: string
    email: string
    password: string
    firstName: string
    lastName: string
    department?: string
    isVerified?: boolean
    isAdmin?: boolean
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    documents?: DocumentUncheckedCreateNestedManyWithoutInitiatorInput
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    templates?: TemplateUncheckedCreateNestedManyWithoutUserInput
    templateSteps?: TemplateStepUncheckedCreateNestedManyWithoutApproverInput
    auditTrail?: AuditUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutApprovalsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutApprovalsInput, UserUncheckedCreateWithoutApprovalsInput>
  }

  export type CommentCreateWithoutApprovalInput = {
    id?: string
    content: string
    createdAt?: Date | string
    document: DocumentCreateNestedOneWithoutCommentsInput
    user: UserCreateNestedOneWithoutCommentsInput
  }

  export type CommentUncheckedCreateWithoutApprovalInput = {
    id?: string
    content: string
    documentId: string
    userId: string
    createdAt?: Date | string
  }

  export type CommentCreateOrConnectWithoutApprovalInput = {
    where: CommentWhereUniqueInput
    create: XOR<CommentCreateWithoutApprovalInput, CommentUncheckedCreateWithoutApprovalInput>
  }

  export type CommentCreateManyApprovalInputEnvelope = {
    data: CommentCreateManyApprovalInput | CommentCreateManyApprovalInput[]
    skipDuplicates?: boolean
  }

  export type DocumentUpsertWithoutApprovalsInput = {
    update: XOR<DocumentUpdateWithoutApprovalsInput, DocumentUncheckedUpdateWithoutApprovalsInput>
    create: XOR<DocumentCreateWithoutApprovalsInput, DocumentUncheckedCreateWithoutApprovalsInput>
    where?: DocumentWhereInput
  }

  export type DocumentUpdateToOneWithWhereWithoutApprovalsInput = {
    where?: DocumentWhereInput
    data: XOR<DocumentUpdateWithoutApprovalsInput, DocumentUncheckedUpdateWithoutApprovalsInput>
  }

  export type DocumentUpdateWithoutApprovalsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    file?: BytesFieldUpdateOperationsInput | Uint8Array
    fileName?: NullableStringFieldUpdateOperationsInput | string | null
    fileType?: StringFieldUpdateOperationsInput | string
    amount?: NullableFloatFieldUpdateOperationsInput | number | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumDocumentStatusFieldUpdateOperationsInput | $Enums.DocumentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    initiator?: UserUpdateOneRequiredWithoutDocumentsNestedInput
    comments?: CommentUpdateManyWithoutDocumentNestedInput
    auditTrail?: AuditUpdateManyWithoutDocumentNestedInput
    templateUsed?: TemplateUpdateOneWithoutDocumentsNestedInput
    capexForm?: CapexFormUpdateOneWithoutDocumentNestedInput
  }

  export type DocumentUncheckedUpdateWithoutApprovalsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    file?: BytesFieldUpdateOperationsInput | Uint8Array
    fileName?: NullableStringFieldUpdateOperationsInput | string | null
    fileType?: StringFieldUpdateOperationsInput | string
    amount?: NullableFloatFieldUpdateOperationsInput | number | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumDocumentStatusFieldUpdateOperationsInput | $Enums.DocumentStatus
    initiatorId?: StringFieldUpdateOperationsInput | string
    templateId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    comments?: CommentUncheckedUpdateManyWithoutDocumentNestedInput
    auditTrail?: AuditUncheckedUpdateManyWithoutDocumentNestedInput
    capexForm?: CapexFormUncheckedUpdateOneWithoutDocumentNestedInput
  }

  export type UserUpsertWithoutApprovalsInput = {
    update: XOR<UserUpdateWithoutApprovalsInput, UserUncheckedUpdateWithoutApprovalsInput>
    create: XOR<UserCreateWithoutApprovalsInput, UserUncheckedCreateWithoutApprovalsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutApprovalsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutApprovalsInput, UserUncheckedUpdateWithoutApprovalsInput>
  }

  export type UserUpdateWithoutApprovalsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    documents?: DocumentUpdateManyWithoutInitiatorNestedInput
    comments?: CommentUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    templates?: TemplateUpdateManyWithoutUserNestedInput
    templateSteps?: TemplateStepUpdateManyWithoutApproverNestedInput
    auditTrail?: AuditUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutApprovalsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    documents?: DocumentUncheckedUpdateManyWithoutInitiatorNestedInput
    comments?: CommentUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    templates?: TemplateUncheckedUpdateManyWithoutUserNestedInput
    templateSteps?: TemplateStepUncheckedUpdateManyWithoutApproverNestedInput
    auditTrail?: AuditUncheckedUpdateManyWithoutUserNestedInput
  }

  export type CommentUpsertWithWhereUniqueWithoutApprovalInput = {
    where: CommentWhereUniqueInput
    update: XOR<CommentUpdateWithoutApprovalInput, CommentUncheckedUpdateWithoutApprovalInput>
    create: XOR<CommentCreateWithoutApprovalInput, CommentUncheckedCreateWithoutApprovalInput>
  }

  export type CommentUpdateWithWhereUniqueWithoutApprovalInput = {
    where: CommentWhereUniqueInput
    data: XOR<CommentUpdateWithoutApprovalInput, CommentUncheckedUpdateWithoutApprovalInput>
  }

  export type CommentUpdateManyWithWhereWithoutApprovalInput = {
    where: CommentScalarWhereInput
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyWithoutApprovalInput>
  }

  export type ApprovalCreateWithoutCommentsInput = {
    id?: string
    sequenceOrder: number
    status?: $Enums.ApprovalStatus
    approvedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    document: DocumentCreateNestedOneWithoutApprovalsInput
    approver: UserCreateNestedOneWithoutApprovalsInput
  }

  export type ApprovalUncheckedCreateWithoutCommentsInput = {
    id?: string
    sequenceOrder: number
    status?: $Enums.ApprovalStatus
    documentId: string
    approverId: string
    approvedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ApprovalCreateOrConnectWithoutCommentsInput = {
    where: ApprovalWhereUniqueInput
    create: XOR<ApprovalCreateWithoutCommentsInput, ApprovalUncheckedCreateWithoutCommentsInput>
  }

  export type DocumentCreateWithoutCommentsInput = {
    id?: string
    title: string
    description?: string | null
    file: Uint8Array
    fileName?: string | null
    fileType: string
    amount?: number | null
    type?: string | null
    status?: $Enums.DocumentStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    completedAt?: Date | string | null
    initiator: UserCreateNestedOneWithoutDocumentsInput
    approvals?: ApprovalCreateNestedManyWithoutDocumentInput
    auditTrail?: AuditCreateNestedManyWithoutDocumentInput
    templateUsed?: TemplateCreateNestedOneWithoutDocumentsInput
    capexForm?: CapexFormCreateNestedOneWithoutDocumentInput
  }

  export type DocumentUncheckedCreateWithoutCommentsInput = {
    id?: string
    title: string
    description?: string | null
    file: Uint8Array
    fileName?: string | null
    fileType: string
    amount?: number | null
    type?: string | null
    status?: $Enums.DocumentStatus
    initiatorId: string
    templateId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    completedAt?: Date | string | null
    approvals?: ApprovalUncheckedCreateNestedManyWithoutDocumentInput
    auditTrail?: AuditUncheckedCreateNestedManyWithoutDocumentInput
    capexForm?: CapexFormUncheckedCreateNestedOneWithoutDocumentInput
  }

  export type DocumentCreateOrConnectWithoutCommentsInput = {
    where: DocumentWhereUniqueInput
    create: XOR<DocumentCreateWithoutCommentsInput, DocumentUncheckedCreateWithoutCommentsInput>
  }

  export type UserCreateWithoutCommentsInput = {
    id?: string
    email: string
    password: string
    firstName: string
    lastName: string
    department?: string
    isVerified?: boolean
    isAdmin?: boolean
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    documents?: DocumentCreateNestedManyWithoutInitiatorInput
    approvals?: ApprovalCreateNestedManyWithoutApproverInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    templates?: TemplateCreateNestedManyWithoutUserInput
    templateSteps?: TemplateStepCreateNestedManyWithoutApproverInput
    auditTrail?: AuditCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCommentsInput = {
    id?: string
    email: string
    password: string
    firstName: string
    lastName: string
    department?: string
    isVerified?: boolean
    isAdmin?: boolean
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    documents?: DocumentUncheckedCreateNestedManyWithoutInitiatorInput
    approvals?: ApprovalUncheckedCreateNestedManyWithoutApproverInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    templates?: TemplateUncheckedCreateNestedManyWithoutUserInput
    templateSteps?: TemplateStepUncheckedCreateNestedManyWithoutApproverInput
    auditTrail?: AuditUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCommentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCommentsInput, UserUncheckedCreateWithoutCommentsInput>
  }

  export type ApprovalUpsertWithoutCommentsInput = {
    update: XOR<ApprovalUpdateWithoutCommentsInput, ApprovalUncheckedUpdateWithoutCommentsInput>
    create: XOR<ApprovalCreateWithoutCommentsInput, ApprovalUncheckedCreateWithoutCommentsInput>
    where?: ApprovalWhereInput
  }

  export type ApprovalUpdateToOneWithWhereWithoutCommentsInput = {
    where?: ApprovalWhereInput
    data: XOR<ApprovalUpdateWithoutCommentsInput, ApprovalUncheckedUpdateWithoutCommentsInput>
  }

  export type ApprovalUpdateWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    sequenceOrder?: IntFieldUpdateOperationsInput | number
    status?: EnumApprovalStatusFieldUpdateOperationsInput | $Enums.ApprovalStatus
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    document?: DocumentUpdateOneRequiredWithoutApprovalsNestedInput
    approver?: UserUpdateOneRequiredWithoutApprovalsNestedInput
  }

  export type ApprovalUncheckedUpdateWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    sequenceOrder?: IntFieldUpdateOperationsInput | number
    status?: EnumApprovalStatusFieldUpdateOperationsInput | $Enums.ApprovalStatus
    documentId?: StringFieldUpdateOperationsInput | string
    approverId?: StringFieldUpdateOperationsInput | string
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocumentUpsertWithoutCommentsInput = {
    update: XOR<DocumentUpdateWithoutCommentsInput, DocumentUncheckedUpdateWithoutCommentsInput>
    create: XOR<DocumentCreateWithoutCommentsInput, DocumentUncheckedCreateWithoutCommentsInput>
    where?: DocumentWhereInput
  }

  export type DocumentUpdateToOneWithWhereWithoutCommentsInput = {
    where?: DocumentWhereInput
    data: XOR<DocumentUpdateWithoutCommentsInput, DocumentUncheckedUpdateWithoutCommentsInput>
  }

  export type DocumentUpdateWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    file?: BytesFieldUpdateOperationsInput | Uint8Array
    fileName?: NullableStringFieldUpdateOperationsInput | string | null
    fileType?: StringFieldUpdateOperationsInput | string
    amount?: NullableFloatFieldUpdateOperationsInput | number | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumDocumentStatusFieldUpdateOperationsInput | $Enums.DocumentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    initiator?: UserUpdateOneRequiredWithoutDocumentsNestedInput
    approvals?: ApprovalUpdateManyWithoutDocumentNestedInput
    auditTrail?: AuditUpdateManyWithoutDocumentNestedInput
    templateUsed?: TemplateUpdateOneWithoutDocumentsNestedInput
    capexForm?: CapexFormUpdateOneWithoutDocumentNestedInput
  }

  export type DocumentUncheckedUpdateWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    file?: BytesFieldUpdateOperationsInput | Uint8Array
    fileName?: NullableStringFieldUpdateOperationsInput | string | null
    fileType?: StringFieldUpdateOperationsInput | string
    amount?: NullableFloatFieldUpdateOperationsInput | number | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumDocumentStatusFieldUpdateOperationsInput | $Enums.DocumentStatus
    initiatorId?: StringFieldUpdateOperationsInput | string
    templateId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approvals?: ApprovalUncheckedUpdateManyWithoutDocumentNestedInput
    auditTrail?: AuditUncheckedUpdateManyWithoutDocumentNestedInput
    capexForm?: CapexFormUncheckedUpdateOneWithoutDocumentNestedInput
  }

  export type UserUpsertWithoutCommentsInput = {
    update: XOR<UserUpdateWithoutCommentsInput, UserUncheckedUpdateWithoutCommentsInput>
    create: XOR<UserCreateWithoutCommentsInput, UserUncheckedCreateWithoutCommentsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCommentsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCommentsInput, UserUncheckedUpdateWithoutCommentsInput>
  }

  export type UserUpdateWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    documents?: DocumentUpdateManyWithoutInitiatorNestedInput
    approvals?: ApprovalUpdateManyWithoutApproverNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    templates?: TemplateUpdateManyWithoutUserNestedInput
    templateSteps?: TemplateStepUpdateManyWithoutApproverNestedInput
    auditTrail?: AuditUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    documents?: DocumentUncheckedUpdateManyWithoutInitiatorNestedInput
    approvals?: ApprovalUncheckedUpdateManyWithoutApproverNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    templates?: TemplateUncheckedUpdateManyWithoutUserNestedInput
    templateSteps?: TemplateStepUncheckedUpdateManyWithoutApproverNestedInput
    auditTrail?: AuditUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutNotificationsInput = {
    id?: string
    email: string
    password: string
    firstName: string
    lastName: string
    department?: string
    isVerified?: boolean
    isAdmin?: boolean
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    documents?: DocumentCreateNestedManyWithoutInitiatorInput
    approvals?: ApprovalCreateNestedManyWithoutApproverInput
    comments?: CommentCreateNestedManyWithoutUserInput
    templates?: TemplateCreateNestedManyWithoutUserInput
    templateSteps?: TemplateStepCreateNestedManyWithoutApproverInput
    auditTrail?: AuditCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutNotificationsInput = {
    id?: string
    email: string
    password: string
    firstName: string
    lastName: string
    department?: string
    isVerified?: boolean
    isAdmin?: boolean
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    documents?: DocumentUncheckedCreateNestedManyWithoutInitiatorInput
    approvals?: ApprovalUncheckedCreateNestedManyWithoutApproverInput
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput
    templates?: TemplateUncheckedCreateNestedManyWithoutUserInput
    templateSteps?: TemplateStepUncheckedCreateNestedManyWithoutApproverInput
    auditTrail?: AuditUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutNotificationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
  }

  export type UserUpsertWithoutNotificationsInput = {
    update: XOR<UserUpdateWithoutNotificationsInput, UserUncheckedUpdateWithoutNotificationsInput>
    create: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutNotificationsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutNotificationsInput, UserUncheckedUpdateWithoutNotificationsInput>
  }

  export type UserUpdateWithoutNotificationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    documents?: DocumentUpdateManyWithoutInitiatorNestedInput
    approvals?: ApprovalUpdateManyWithoutApproverNestedInput
    comments?: CommentUpdateManyWithoutUserNestedInput
    templates?: TemplateUpdateManyWithoutUserNestedInput
    templateSteps?: TemplateStepUpdateManyWithoutApproverNestedInput
    auditTrail?: AuditUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutNotificationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    documents?: DocumentUncheckedUpdateManyWithoutInitiatorNestedInput
    approvals?: ApprovalUncheckedUpdateManyWithoutApproverNestedInput
    comments?: CommentUncheckedUpdateManyWithoutUserNestedInput
    templates?: TemplateUncheckedUpdateManyWithoutUserNestedInput
    templateSteps?: TemplateStepUncheckedUpdateManyWithoutApproverNestedInput
    auditTrail?: AuditUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutTemplatesInput = {
    id?: string
    email: string
    password: string
    firstName: string
    lastName: string
    department?: string
    isVerified?: boolean
    isAdmin?: boolean
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    documents?: DocumentCreateNestedManyWithoutInitiatorInput
    approvals?: ApprovalCreateNestedManyWithoutApproverInput
    comments?: CommentCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    templateSteps?: TemplateStepCreateNestedManyWithoutApproverInput
    auditTrail?: AuditCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTemplatesInput = {
    id?: string
    email: string
    password: string
    firstName: string
    lastName: string
    department?: string
    isVerified?: boolean
    isAdmin?: boolean
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    documents?: DocumentUncheckedCreateNestedManyWithoutInitiatorInput
    approvals?: ApprovalUncheckedCreateNestedManyWithoutApproverInput
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    templateSteps?: TemplateStepUncheckedCreateNestedManyWithoutApproverInput
    auditTrail?: AuditUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTemplatesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTemplatesInput, UserUncheckedCreateWithoutTemplatesInput>
  }

  export type DocumentCreateWithoutTemplateUsedInput = {
    id?: string
    title: string
    description?: string | null
    file: Uint8Array
    fileName?: string | null
    fileType: string
    amount?: number | null
    type?: string | null
    status?: $Enums.DocumentStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    completedAt?: Date | string | null
    initiator: UserCreateNestedOneWithoutDocumentsInput
    approvals?: ApprovalCreateNestedManyWithoutDocumentInput
    comments?: CommentCreateNestedManyWithoutDocumentInput
    auditTrail?: AuditCreateNestedManyWithoutDocumentInput
    capexForm?: CapexFormCreateNestedOneWithoutDocumentInput
  }

  export type DocumentUncheckedCreateWithoutTemplateUsedInput = {
    id?: string
    title: string
    description?: string | null
    file: Uint8Array
    fileName?: string | null
    fileType: string
    amount?: number | null
    type?: string | null
    status?: $Enums.DocumentStatus
    initiatorId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    completedAt?: Date | string | null
    approvals?: ApprovalUncheckedCreateNestedManyWithoutDocumentInput
    comments?: CommentUncheckedCreateNestedManyWithoutDocumentInput
    auditTrail?: AuditUncheckedCreateNestedManyWithoutDocumentInput
    capexForm?: CapexFormUncheckedCreateNestedOneWithoutDocumentInput
  }

  export type DocumentCreateOrConnectWithoutTemplateUsedInput = {
    where: DocumentWhereUniqueInput
    create: XOR<DocumentCreateWithoutTemplateUsedInput, DocumentUncheckedCreateWithoutTemplateUsedInput>
  }

  export type DocumentCreateManyTemplateUsedInputEnvelope = {
    data: DocumentCreateManyTemplateUsedInput | DocumentCreateManyTemplateUsedInput[]
    skipDuplicates?: boolean
  }

  export type TemplateStepCreateWithoutTemplateInput = {
    id?: string
    sequenceOrder: number
    createdAt?: Date | string
    approver: UserCreateNestedOneWithoutTemplateStepsInput
  }

  export type TemplateStepUncheckedCreateWithoutTemplateInput = {
    id?: string
    approverId: string
    sequenceOrder: number
    createdAt?: Date | string
  }

  export type TemplateStepCreateOrConnectWithoutTemplateInput = {
    where: TemplateStepWhereUniqueInput
    create: XOR<TemplateStepCreateWithoutTemplateInput, TemplateStepUncheckedCreateWithoutTemplateInput>
  }

  export type TemplateStepCreateManyTemplateInputEnvelope = {
    data: TemplateStepCreateManyTemplateInput | TemplateStepCreateManyTemplateInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutTemplatesInput = {
    update: XOR<UserUpdateWithoutTemplatesInput, UserUncheckedUpdateWithoutTemplatesInput>
    create: XOR<UserCreateWithoutTemplatesInput, UserUncheckedCreateWithoutTemplatesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTemplatesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTemplatesInput, UserUncheckedUpdateWithoutTemplatesInput>
  }

  export type UserUpdateWithoutTemplatesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    documents?: DocumentUpdateManyWithoutInitiatorNestedInput
    approvals?: ApprovalUpdateManyWithoutApproverNestedInput
    comments?: CommentUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    templateSteps?: TemplateStepUpdateManyWithoutApproverNestedInput
    auditTrail?: AuditUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTemplatesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    documents?: DocumentUncheckedUpdateManyWithoutInitiatorNestedInput
    approvals?: ApprovalUncheckedUpdateManyWithoutApproverNestedInput
    comments?: CommentUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    templateSteps?: TemplateStepUncheckedUpdateManyWithoutApproverNestedInput
    auditTrail?: AuditUncheckedUpdateManyWithoutUserNestedInput
  }

  export type DocumentUpsertWithWhereUniqueWithoutTemplateUsedInput = {
    where: DocumentWhereUniqueInput
    update: XOR<DocumentUpdateWithoutTemplateUsedInput, DocumentUncheckedUpdateWithoutTemplateUsedInput>
    create: XOR<DocumentCreateWithoutTemplateUsedInput, DocumentUncheckedCreateWithoutTemplateUsedInput>
  }

  export type DocumentUpdateWithWhereUniqueWithoutTemplateUsedInput = {
    where: DocumentWhereUniqueInput
    data: XOR<DocumentUpdateWithoutTemplateUsedInput, DocumentUncheckedUpdateWithoutTemplateUsedInput>
  }

  export type DocumentUpdateManyWithWhereWithoutTemplateUsedInput = {
    where: DocumentScalarWhereInput
    data: XOR<DocumentUpdateManyMutationInput, DocumentUncheckedUpdateManyWithoutTemplateUsedInput>
  }

  export type TemplateStepUpsertWithWhereUniqueWithoutTemplateInput = {
    where: TemplateStepWhereUniqueInput
    update: XOR<TemplateStepUpdateWithoutTemplateInput, TemplateStepUncheckedUpdateWithoutTemplateInput>
    create: XOR<TemplateStepCreateWithoutTemplateInput, TemplateStepUncheckedCreateWithoutTemplateInput>
  }

  export type TemplateStepUpdateWithWhereUniqueWithoutTemplateInput = {
    where: TemplateStepWhereUniqueInput
    data: XOR<TemplateStepUpdateWithoutTemplateInput, TemplateStepUncheckedUpdateWithoutTemplateInput>
  }

  export type TemplateStepUpdateManyWithWhereWithoutTemplateInput = {
    where: TemplateStepScalarWhereInput
    data: XOR<TemplateStepUpdateManyMutationInput, TemplateStepUncheckedUpdateManyWithoutTemplateInput>
  }

  export type TemplateCreateWithoutStepsInput = {
    id?: string
    type: string
    name: string
    formData: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutTemplatesInput
    documents?: DocumentCreateNestedManyWithoutTemplateUsedInput
  }

  export type TemplateUncheckedCreateWithoutStepsInput = {
    id?: string
    userId: string
    type: string
    name: string
    formData: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    documents?: DocumentUncheckedCreateNestedManyWithoutTemplateUsedInput
  }

  export type TemplateCreateOrConnectWithoutStepsInput = {
    where: TemplateWhereUniqueInput
    create: XOR<TemplateCreateWithoutStepsInput, TemplateUncheckedCreateWithoutStepsInput>
  }

  export type UserCreateWithoutTemplateStepsInput = {
    id?: string
    email: string
    password: string
    firstName: string
    lastName: string
    department?: string
    isVerified?: boolean
    isAdmin?: boolean
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    documents?: DocumentCreateNestedManyWithoutInitiatorInput
    approvals?: ApprovalCreateNestedManyWithoutApproverInput
    comments?: CommentCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    templates?: TemplateCreateNestedManyWithoutUserInput
    auditTrail?: AuditCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTemplateStepsInput = {
    id?: string
    email: string
    password: string
    firstName: string
    lastName: string
    department?: string
    isVerified?: boolean
    isAdmin?: boolean
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    documents?: DocumentUncheckedCreateNestedManyWithoutInitiatorInput
    approvals?: ApprovalUncheckedCreateNestedManyWithoutApproverInput
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    templates?: TemplateUncheckedCreateNestedManyWithoutUserInput
    auditTrail?: AuditUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTemplateStepsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTemplateStepsInput, UserUncheckedCreateWithoutTemplateStepsInput>
  }

  export type TemplateUpsertWithoutStepsInput = {
    update: XOR<TemplateUpdateWithoutStepsInput, TemplateUncheckedUpdateWithoutStepsInput>
    create: XOR<TemplateCreateWithoutStepsInput, TemplateUncheckedCreateWithoutStepsInput>
    where?: TemplateWhereInput
  }

  export type TemplateUpdateToOneWithWhereWithoutStepsInput = {
    where?: TemplateWhereInput
    data: XOR<TemplateUpdateWithoutStepsInput, TemplateUncheckedUpdateWithoutStepsInput>
  }

  export type TemplateUpdateWithoutStepsInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    formData?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTemplatesNestedInput
    documents?: DocumentUpdateManyWithoutTemplateUsedNestedInput
  }

  export type TemplateUncheckedUpdateWithoutStepsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    formData?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    documents?: DocumentUncheckedUpdateManyWithoutTemplateUsedNestedInput
  }

  export type UserUpsertWithoutTemplateStepsInput = {
    update: XOR<UserUpdateWithoutTemplateStepsInput, UserUncheckedUpdateWithoutTemplateStepsInput>
    create: XOR<UserCreateWithoutTemplateStepsInput, UserUncheckedCreateWithoutTemplateStepsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTemplateStepsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTemplateStepsInput, UserUncheckedUpdateWithoutTemplateStepsInput>
  }

  export type UserUpdateWithoutTemplateStepsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    documents?: DocumentUpdateManyWithoutInitiatorNestedInput
    approvals?: ApprovalUpdateManyWithoutApproverNestedInput
    comments?: CommentUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    templates?: TemplateUpdateManyWithoutUserNestedInput
    auditTrail?: AuditUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTemplateStepsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    documents?: DocumentUncheckedUpdateManyWithoutInitiatorNestedInput
    approvals?: ApprovalUncheckedUpdateManyWithoutApproverNestedInput
    comments?: CommentUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    templates?: TemplateUncheckedUpdateManyWithoutUserNestedInput
    auditTrail?: AuditUncheckedUpdateManyWithoutUserNestedInput
  }

  export type DocumentCreateWithoutAuditTrailInput = {
    id?: string
    title: string
    description?: string | null
    file: Uint8Array
    fileName?: string | null
    fileType: string
    amount?: number | null
    type?: string | null
    status?: $Enums.DocumentStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    completedAt?: Date | string | null
    initiator: UserCreateNestedOneWithoutDocumentsInput
    approvals?: ApprovalCreateNestedManyWithoutDocumentInput
    comments?: CommentCreateNestedManyWithoutDocumentInput
    templateUsed?: TemplateCreateNestedOneWithoutDocumentsInput
    capexForm?: CapexFormCreateNestedOneWithoutDocumentInput
  }

  export type DocumentUncheckedCreateWithoutAuditTrailInput = {
    id?: string
    title: string
    description?: string | null
    file: Uint8Array
    fileName?: string | null
    fileType: string
    amount?: number | null
    type?: string | null
    status?: $Enums.DocumentStatus
    initiatorId: string
    templateId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    completedAt?: Date | string | null
    approvals?: ApprovalUncheckedCreateNestedManyWithoutDocumentInput
    comments?: CommentUncheckedCreateNestedManyWithoutDocumentInput
    capexForm?: CapexFormUncheckedCreateNestedOneWithoutDocumentInput
  }

  export type DocumentCreateOrConnectWithoutAuditTrailInput = {
    where: DocumentWhereUniqueInput
    create: XOR<DocumentCreateWithoutAuditTrailInput, DocumentUncheckedCreateWithoutAuditTrailInput>
  }

  export type UserCreateWithoutAuditTrailInput = {
    id?: string
    email: string
    password: string
    firstName: string
    lastName: string
    department?: string
    isVerified?: boolean
    isAdmin?: boolean
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    documents?: DocumentCreateNestedManyWithoutInitiatorInput
    approvals?: ApprovalCreateNestedManyWithoutApproverInput
    comments?: CommentCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    templates?: TemplateCreateNestedManyWithoutUserInput
    templateSteps?: TemplateStepCreateNestedManyWithoutApproverInput
  }

  export type UserUncheckedCreateWithoutAuditTrailInput = {
    id?: string
    email: string
    password: string
    firstName: string
    lastName: string
    department?: string
    isVerified?: boolean
    isAdmin?: boolean
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    documents?: DocumentUncheckedCreateNestedManyWithoutInitiatorInput
    approvals?: ApprovalUncheckedCreateNestedManyWithoutApproverInput
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    templates?: TemplateUncheckedCreateNestedManyWithoutUserInput
    templateSteps?: TemplateStepUncheckedCreateNestedManyWithoutApproverInput
  }

  export type UserCreateOrConnectWithoutAuditTrailInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAuditTrailInput, UserUncheckedCreateWithoutAuditTrailInput>
  }

  export type DocumentUpsertWithoutAuditTrailInput = {
    update: XOR<DocumentUpdateWithoutAuditTrailInput, DocumentUncheckedUpdateWithoutAuditTrailInput>
    create: XOR<DocumentCreateWithoutAuditTrailInput, DocumentUncheckedCreateWithoutAuditTrailInput>
    where?: DocumentWhereInput
  }

  export type DocumentUpdateToOneWithWhereWithoutAuditTrailInput = {
    where?: DocumentWhereInput
    data: XOR<DocumentUpdateWithoutAuditTrailInput, DocumentUncheckedUpdateWithoutAuditTrailInput>
  }

  export type DocumentUpdateWithoutAuditTrailInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    file?: BytesFieldUpdateOperationsInput | Uint8Array
    fileName?: NullableStringFieldUpdateOperationsInput | string | null
    fileType?: StringFieldUpdateOperationsInput | string
    amount?: NullableFloatFieldUpdateOperationsInput | number | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumDocumentStatusFieldUpdateOperationsInput | $Enums.DocumentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    initiator?: UserUpdateOneRequiredWithoutDocumentsNestedInput
    approvals?: ApprovalUpdateManyWithoutDocumentNestedInput
    comments?: CommentUpdateManyWithoutDocumentNestedInput
    templateUsed?: TemplateUpdateOneWithoutDocumentsNestedInput
    capexForm?: CapexFormUpdateOneWithoutDocumentNestedInput
  }

  export type DocumentUncheckedUpdateWithoutAuditTrailInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    file?: BytesFieldUpdateOperationsInput | Uint8Array
    fileName?: NullableStringFieldUpdateOperationsInput | string | null
    fileType?: StringFieldUpdateOperationsInput | string
    amount?: NullableFloatFieldUpdateOperationsInput | number | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumDocumentStatusFieldUpdateOperationsInput | $Enums.DocumentStatus
    initiatorId?: StringFieldUpdateOperationsInput | string
    templateId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approvals?: ApprovalUncheckedUpdateManyWithoutDocumentNestedInput
    comments?: CommentUncheckedUpdateManyWithoutDocumentNestedInput
    capexForm?: CapexFormUncheckedUpdateOneWithoutDocumentNestedInput
  }

  export type UserUpsertWithoutAuditTrailInput = {
    update: XOR<UserUpdateWithoutAuditTrailInput, UserUncheckedUpdateWithoutAuditTrailInput>
    create: XOR<UserCreateWithoutAuditTrailInput, UserUncheckedCreateWithoutAuditTrailInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAuditTrailInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAuditTrailInput, UserUncheckedUpdateWithoutAuditTrailInput>
  }

  export type UserUpdateWithoutAuditTrailInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    documents?: DocumentUpdateManyWithoutInitiatorNestedInput
    approvals?: ApprovalUpdateManyWithoutApproverNestedInput
    comments?: CommentUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    templates?: TemplateUpdateManyWithoutUserNestedInput
    templateSteps?: TemplateStepUpdateManyWithoutApproverNestedInput
  }

  export type UserUncheckedUpdateWithoutAuditTrailInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    documents?: DocumentUncheckedUpdateManyWithoutInitiatorNestedInput
    approvals?: ApprovalUncheckedUpdateManyWithoutApproverNestedInput
    comments?: CommentUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    templates?: TemplateUncheckedUpdateManyWithoutUserNestedInput
    templateSteps?: TemplateStepUncheckedUpdateManyWithoutApproverNestedInput
  }

  export type DocumentCreateWithoutCapexFormInput = {
    id?: string
    title: string
    description?: string | null
    file: Uint8Array
    fileName?: string | null
    fileType: string
    amount?: number | null
    type?: string | null
    status?: $Enums.DocumentStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    completedAt?: Date | string | null
    initiator: UserCreateNestedOneWithoutDocumentsInput
    approvals?: ApprovalCreateNestedManyWithoutDocumentInput
    comments?: CommentCreateNestedManyWithoutDocumentInput
    auditTrail?: AuditCreateNestedManyWithoutDocumentInput
    templateUsed?: TemplateCreateNestedOneWithoutDocumentsInput
  }

  export type DocumentUncheckedCreateWithoutCapexFormInput = {
    id?: string
    title: string
    description?: string | null
    file: Uint8Array
    fileName?: string | null
    fileType: string
    amount?: number | null
    type?: string | null
    status?: $Enums.DocumentStatus
    initiatorId: string
    templateId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    completedAt?: Date | string | null
    approvals?: ApprovalUncheckedCreateNestedManyWithoutDocumentInput
    comments?: CommentUncheckedCreateNestedManyWithoutDocumentInput
    auditTrail?: AuditUncheckedCreateNestedManyWithoutDocumentInput
  }

  export type DocumentCreateOrConnectWithoutCapexFormInput = {
    where: DocumentWhereUniqueInput
    create: XOR<DocumentCreateWithoutCapexFormInput, DocumentUncheckedCreateWithoutCapexFormInput>
  }

  export type DocumentUpsertWithoutCapexFormInput = {
    update: XOR<DocumentUpdateWithoutCapexFormInput, DocumentUncheckedUpdateWithoutCapexFormInput>
    create: XOR<DocumentCreateWithoutCapexFormInput, DocumentUncheckedCreateWithoutCapexFormInput>
    where?: DocumentWhereInput
  }

  export type DocumentUpdateToOneWithWhereWithoutCapexFormInput = {
    where?: DocumentWhereInput
    data: XOR<DocumentUpdateWithoutCapexFormInput, DocumentUncheckedUpdateWithoutCapexFormInput>
  }

  export type DocumentUpdateWithoutCapexFormInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    file?: BytesFieldUpdateOperationsInput | Uint8Array
    fileName?: NullableStringFieldUpdateOperationsInput | string | null
    fileType?: StringFieldUpdateOperationsInput | string
    amount?: NullableFloatFieldUpdateOperationsInput | number | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumDocumentStatusFieldUpdateOperationsInput | $Enums.DocumentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    initiator?: UserUpdateOneRequiredWithoutDocumentsNestedInput
    approvals?: ApprovalUpdateManyWithoutDocumentNestedInput
    comments?: CommentUpdateManyWithoutDocumentNestedInput
    auditTrail?: AuditUpdateManyWithoutDocumentNestedInput
    templateUsed?: TemplateUpdateOneWithoutDocumentsNestedInput
  }

  export type DocumentUncheckedUpdateWithoutCapexFormInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    file?: BytesFieldUpdateOperationsInput | Uint8Array
    fileName?: NullableStringFieldUpdateOperationsInput | string | null
    fileType?: StringFieldUpdateOperationsInput | string
    amount?: NullableFloatFieldUpdateOperationsInput | number | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumDocumentStatusFieldUpdateOperationsInput | $Enums.DocumentStatus
    initiatorId?: StringFieldUpdateOperationsInput | string
    templateId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approvals?: ApprovalUncheckedUpdateManyWithoutDocumentNestedInput
    comments?: CommentUncheckedUpdateManyWithoutDocumentNestedInput
    auditTrail?: AuditUncheckedUpdateManyWithoutDocumentNestedInput
  }

  export type DocumentCreateManyInitiatorInput = {
    id?: string
    title: string
    description?: string | null
    file: Uint8Array
    fileName?: string | null
    fileType: string
    amount?: number | null
    type?: string | null
    status?: $Enums.DocumentStatus
    templateId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    completedAt?: Date | string | null
  }

  export type ApprovalCreateManyApproverInput = {
    id?: string
    sequenceOrder: number
    status?: $Enums.ApprovalStatus
    documentId: string
    approvedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CommentCreateManyUserInput = {
    id?: string
    content: string
    approvalId: string
    documentId: string
    createdAt?: Date | string
  }

  export type NotificationCreateManyUserInput = {
    id?: string
    type: $Enums.NotificationType
    message: string
    read?: boolean
    documentId?: string | null
    createdAt?: Date | string
  }

  export type TemplateCreateManyUserInput = {
    id?: string
    type: string
    name: string
    formData: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TemplateStepCreateManyApproverInput = {
    id?: string
    templateId: string
    sequenceOrder: number
    createdAt?: Date | string
  }

  export type AuditCreateManyUserInput = {
    id?: string
    documentId: string
    action: $Enums.AuditAction
    details?: string | null
    createdAt?: Date | string
  }

  export type DocumentUpdateWithoutInitiatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    file?: BytesFieldUpdateOperationsInput | Uint8Array
    fileName?: NullableStringFieldUpdateOperationsInput | string | null
    fileType?: StringFieldUpdateOperationsInput | string
    amount?: NullableFloatFieldUpdateOperationsInput | number | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumDocumentStatusFieldUpdateOperationsInput | $Enums.DocumentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approvals?: ApprovalUpdateManyWithoutDocumentNestedInput
    comments?: CommentUpdateManyWithoutDocumentNestedInput
    auditTrail?: AuditUpdateManyWithoutDocumentNestedInput
    templateUsed?: TemplateUpdateOneWithoutDocumentsNestedInput
    capexForm?: CapexFormUpdateOneWithoutDocumentNestedInput
  }

  export type DocumentUncheckedUpdateWithoutInitiatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    file?: BytesFieldUpdateOperationsInput | Uint8Array
    fileName?: NullableStringFieldUpdateOperationsInput | string | null
    fileType?: StringFieldUpdateOperationsInput | string
    amount?: NullableFloatFieldUpdateOperationsInput | number | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumDocumentStatusFieldUpdateOperationsInput | $Enums.DocumentStatus
    templateId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approvals?: ApprovalUncheckedUpdateManyWithoutDocumentNestedInput
    comments?: CommentUncheckedUpdateManyWithoutDocumentNestedInput
    auditTrail?: AuditUncheckedUpdateManyWithoutDocumentNestedInput
    capexForm?: CapexFormUncheckedUpdateOneWithoutDocumentNestedInput
  }

  export type DocumentUncheckedUpdateManyWithoutInitiatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    file?: BytesFieldUpdateOperationsInput | Uint8Array
    fileName?: NullableStringFieldUpdateOperationsInput | string | null
    fileType?: StringFieldUpdateOperationsInput | string
    amount?: NullableFloatFieldUpdateOperationsInput | number | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumDocumentStatusFieldUpdateOperationsInput | $Enums.DocumentStatus
    templateId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ApprovalUpdateWithoutApproverInput = {
    id?: StringFieldUpdateOperationsInput | string
    sequenceOrder?: IntFieldUpdateOperationsInput | number
    status?: EnumApprovalStatusFieldUpdateOperationsInput | $Enums.ApprovalStatus
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    document?: DocumentUpdateOneRequiredWithoutApprovalsNestedInput
    comments?: CommentUpdateManyWithoutApprovalNestedInput
  }

  export type ApprovalUncheckedUpdateWithoutApproverInput = {
    id?: StringFieldUpdateOperationsInput | string
    sequenceOrder?: IntFieldUpdateOperationsInput | number
    status?: EnumApprovalStatusFieldUpdateOperationsInput | $Enums.ApprovalStatus
    documentId?: StringFieldUpdateOperationsInput | string
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comments?: CommentUncheckedUpdateManyWithoutApprovalNestedInput
  }

  export type ApprovalUncheckedUpdateManyWithoutApproverInput = {
    id?: StringFieldUpdateOperationsInput | string
    sequenceOrder?: IntFieldUpdateOperationsInput | number
    status?: EnumApprovalStatusFieldUpdateOperationsInput | $Enums.ApprovalStatus
    documentId?: StringFieldUpdateOperationsInput | string
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    approval?: ApprovalUpdateOneRequiredWithoutCommentsNestedInput
    document?: DocumentUpdateOneRequiredWithoutCommentsNestedInput
  }

  export type CommentUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    approvalId?: StringFieldUpdateOperationsInput | string
    documentId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    approvalId?: StringFieldUpdateOperationsInput | string
    documentId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    message?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
    documentId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    message?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
    documentId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    message?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
    documentId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TemplateUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    formData?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    documents?: DocumentUpdateManyWithoutTemplateUsedNestedInput
    steps?: TemplateStepUpdateManyWithoutTemplateNestedInput
  }

  export type TemplateUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    formData?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    documents?: DocumentUncheckedUpdateManyWithoutTemplateUsedNestedInput
    steps?: TemplateStepUncheckedUpdateManyWithoutTemplateNestedInput
  }

  export type TemplateUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    formData?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TemplateStepUpdateWithoutApproverInput = {
    id?: StringFieldUpdateOperationsInput | string
    sequenceOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    template?: TemplateUpdateOneRequiredWithoutStepsNestedInput
  }

  export type TemplateStepUncheckedUpdateWithoutApproverInput = {
    id?: StringFieldUpdateOperationsInput | string
    templateId?: StringFieldUpdateOperationsInput | string
    sequenceOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TemplateStepUncheckedUpdateManyWithoutApproverInput = {
    id?: StringFieldUpdateOperationsInput | string
    templateId?: StringFieldUpdateOperationsInput | string
    sequenceOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: EnumAuditActionFieldUpdateOperationsInput | $Enums.AuditAction
    details?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    document?: DocumentUpdateOneRequiredWithoutAuditTrailNestedInput
  }

  export type AuditUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    documentId?: StringFieldUpdateOperationsInput | string
    action?: EnumAuditActionFieldUpdateOperationsInput | $Enums.AuditAction
    details?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    documentId?: StringFieldUpdateOperationsInput | string
    action?: EnumAuditActionFieldUpdateOperationsInput | $Enums.AuditAction
    details?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApprovalCreateManyDocumentInput = {
    id?: string
    sequenceOrder: number
    status?: $Enums.ApprovalStatus
    approverId: string
    approvedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CommentCreateManyDocumentInput = {
    id?: string
    content: string
    approvalId: string
    userId: string
    createdAt?: Date | string
  }

  export type AuditCreateManyDocumentInput = {
    id?: string
    userId: string
    action: $Enums.AuditAction
    details?: string | null
    createdAt?: Date | string
  }

  export type ApprovalUpdateWithoutDocumentInput = {
    id?: StringFieldUpdateOperationsInput | string
    sequenceOrder?: IntFieldUpdateOperationsInput | number
    status?: EnumApprovalStatusFieldUpdateOperationsInput | $Enums.ApprovalStatus
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    approver?: UserUpdateOneRequiredWithoutApprovalsNestedInput
    comments?: CommentUpdateManyWithoutApprovalNestedInput
  }

  export type ApprovalUncheckedUpdateWithoutDocumentInput = {
    id?: StringFieldUpdateOperationsInput | string
    sequenceOrder?: IntFieldUpdateOperationsInput | number
    status?: EnumApprovalStatusFieldUpdateOperationsInput | $Enums.ApprovalStatus
    approverId?: StringFieldUpdateOperationsInput | string
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comments?: CommentUncheckedUpdateManyWithoutApprovalNestedInput
  }

  export type ApprovalUncheckedUpdateManyWithoutDocumentInput = {
    id?: StringFieldUpdateOperationsInput | string
    sequenceOrder?: IntFieldUpdateOperationsInput | number
    status?: EnumApprovalStatusFieldUpdateOperationsInput | $Enums.ApprovalStatus
    approverId?: StringFieldUpdateOperationsInput | string
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentUpdateWithoutDocumentInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    approval?: ApprovalUpdateOneRequiredWithoutCommentsNestedInput
    user?: UserUpdateOneRequiredWithoutCommentsNestedInput
  }

  export type CommentUncheckedUpdateWithoutDocumentInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    approvalId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentUncheckedUpdateManyWithoutDocumentInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    approvalId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditUpdateWithoutDocumentInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: EnumAuditActionFieldUpdateOperationsInput | $Enums.AuditAction
    details?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutAuditTrailNestedInput
  }

  export type AuditUncheckedUpdateWithoutDocumentInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    action?: EnumAuditActionFieldUpdateOperationsInput | $Enums.AuditAction
    details?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditUncheckedUpdateManyWithoutDocumentInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    action?: EnumAuditActionFieldUpdateOperationsInput | $Enums.AuditAction
    details?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentCreateManyApprovalInput = {
    id?: string
    content: string
    documentId: string
    userId: string
    createdAt?: Date | string
  }

  export type CommentUpdateWithoutApprovalInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    document?: DocumentUpdateOneRequiredWithoutCommentsNestedInput
    user?: UserUpdateOneRequiredWithoutCommentsNestedInput
  }

  export type CommentUncheckedUpdateWithoutApprovalInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    documentId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentUncheckedUpdateManyWithoutApprovalInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    documentId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocumentCreateManyTemplateUsedInput = {
    id?: string
    title: string
    description?: string | null
    file: Uint8Array
    fileName?: string | null
    fileType: string
    amount?: number | null
    type?: string | null
    status?: $Enums.DocumentStatus
    initiatorId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    completedAt?: Date | string | null
  }

  export type TemplateStepCreateManyTemplateInput = {
    id?: string
    approverId: string
    sequenceOrder: number
    createdAt?: Date | string
  }

  export type DocumentUpdateWithoutTemplateUsedInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    file?: BytesFieldUpdateOperationsInput | Uint8Array
    fileName?: NullableStringFieldUpdateOperationsInput | string | null
    fileType?: StringFieldUpdateOperationsInput | string
    amount?: NullableFloatFieldUpdateOperationsInput | number | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumDocumentStatusFieldUpdateOperationsInput | $Enums.DocumentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    initiator?: UserUpdateOneRequiredWithoutDocumentsNestedInput
    approvals?: ApprovalUpdateManyWithoutDocumentNestedInput
    comments?: CommentUpdateManyWithoutDocumentNestedInput
    auditTrail?: AuditUpdateManyWithoutDocumentNestedInput
    capexForm?: CapexFormUpdateOneWithoutDocumentNestedInput
  }

  export type DocumentUncheckedUpdateWithoutTemplateUsedInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    file?: BytesFieldUpdateOperationsInput | Uint8Array
    fileName?: NullableStringFieldUpdateOperationsInput | string | null
    fileType?: StringFieldUpdateOperationsInput | string
    amount?: NullableFloatFieldUpdateOperationsInput | number | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumDocumentStatusFieldUpdateOperationsInput | $Enums.DocumentStatus
    initiatorId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approvals?: ApprovalUncheckedUpdateManyWithoutDocumentNestedInput
    comments?: CommentUncheckedUpdateManyWithoutDocumentNestedInput
    auditTrail?: AuditUncheckedUpdateManyWithoutDocumentNestedInput
    capexForm?: CapexFormUncheckedUpdateOneWithoutDocumentNestedInput
  }

  export type DocumentUncheckedUpdateManyWithoutTemplateUsedInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    file?: BytesFieldUpdateOperationsInput | Uint8Array
    fileName?: NullableStringFieldUpdateOperationsInput | string | null
    fileType?: StringFieldUpdateOperationsInput | string
    amount?: NullableFloatFieldUpdateOperationsInput | number | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumDocumentStatusFieldUpdateOperationsInput | $Enums.DocumentStatus
    initiatorId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TemplateStepUpdateWithoutTemplateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sequenceOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    approver?: UserUpdateOneRequiredWithoutTemplateStepsNestedInput
  }

  export type TemplateStepUncheckedUpdateWithoutTemplateInput = {
    id?: StringFieldUpdateOperationsInput | string
    approverId?: StringFieldUpdateOperationsInput | string
    sequenceOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TemplateStepUncheckedUpdateManyWithoutTemplateInput = {
    id?: StringFieldUpdateOperationsInput | string
    approverId?: StringFieldUpdateOperationsInput | string
    sequenceOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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