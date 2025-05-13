/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface UserDto {
  id: number;
  username: string;
  email: string;
  avatarUrl: string;
  emailConfirmed: boolean;
  role: string;
  /** @format date-time */
  registeredAt: string;
  /** @format date-time */
  updatedAt: string;
}

export interface ErrorDto {
  message: string;
}

export interface SubcategoryDto {
  /**
   * ID подкатегории
   * @example "1"
   */
  id: number;
  /**
   * Название подкатегории
   * @example "Холодные салаты"
   */
  name: string;
}

export interface CategoryDto {
  /**
   * ID категории
   * @example "1"
   */
  id: number;
  /**
   * Название категории
   * @example "Салаты"
   */
  name: string;
  /** Массив подкатегорий данной категории */
  subcategories: SubcategoryDto[];
}

export interface TokensPairDto {
  /** Access Token */
  accessToken: string;
  /** Refresh Token */
  refreshToken: string;
}

export interface LoginDto {
  username: string;
  password: string;
}

export interface RefreshTokenDto {
  refreshToken: string;
}

export interface CreateUserDto {
  username: string;
  email: string;
  password: string;
}

export interface UsersControllerGetCurrentUserData {
  user?: UserDto;
}

export type UsersControllerGetCurrentUserError = ErrorDto;

export interface UsersControllerGetUserByIdData {
  user?: UserDto;
}

export type UsersControllerGetUserByIdError = ErrorDto;

export interface CategoriesControllerGetCategoriesData {
  categories?: CategoryDto[];
}

export type AuthControllerLoginData = TokensPairDto;

export type AuthControllerLoginError = ErrorDto;

export type AuthControllerRefreshData = TokensPairDto;

export type AuthControllerRefreshError = ErrorDto;

export interface AuthControllerRegisterData {
  user?: UserDto;
}

export type AuthControllerRegisterError = ErrorDto;

import type { AxiosInstance, AxiosRequestConfig, AxiosResponse, HeadersDefaults, ResponseType } from "axios";
import axios from "axios";

export type QueryParamsType = Record<string | number, any>;

export interface FullRequestParams extends Omit<AxiosRequestConfig, "data" | "params" | "url" | "responseType"> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseType;
  /** request body */
  body?: unknown;
}

export type RequestParams = Omit<FullRequestParams, "body" | "method" | "query" | "path">;

export interface ApiConfig<SecurityDataType = unknown> extends Omit<AxiosRequestConfig, "data" | "cancelToken"> {
  securityWorker?: (
    securityData: SecurityDataType | null,
  ) => Promise<AxiosRequestConfig | void> | AxiosRequestConfig | void;
  secure?: boolean;
  format?: ResponseType;
}

export enum ContentType {
  Json = "application/json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
  Text = "text/plain",
}

export class HttpClient<SecurityDataType = unknown> {
  public instance: AxiosInstance;
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>["securityWorker"];
  private secure?: boolean;
  private format?: ResponseType;

  constructor({ securityWorker, secure, format, ...axiosConfig }: ApiConfig<SecurityDataType> = {}) {
    this.instance = axios.create({ ...axiosConfig, baseURL: axiosConfig.baseURL || "" });
    this.secure = secure;
    this.format = format;
    this.securityWorker = securityWorker;
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  protected mergeRequestParams(params1: AxiosRequestConfig, params2?: AxiosRequestConfig): AxiosRequestConfig {
    const method = params1.method || (params2 && params2.method);

    return {
      ...this.instance.defaults,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...((method && this.instance.defaults.headers[method.toLowerCase() as keyof HeadersDefaults]) || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  protected stringifyFormItem(formItem: unknown) {
    if (typeof formItem === "object" && formItem !== null) {
      return JSON.stringify(formItem);
    } else {
      return `${formItem}`;
    }
  }

  protected createFormData(input: Record<string, unknown>): FormData {
    if (input instanceof FormData) {
      return input;
    }
    return Object.keys(input || {}).reduce((formData, key) => {
      const property = input[key];
      const propertyContent: any[] = property instanceof Array ? property : [property];

      for (const formItem of propertyContent) {
        const isFileType = formItem instanceof Blob || formItem instanceof File;
        formData.append(key, isFileType ? formItem : this.stringifyFormItem(formItem));
      }

      return formData;
    }, new FormData());
  }

  public request = async <T = any, _E = any>({
    secure,
    path,
    type,
    query,
    format,
    body,
    ...params
  }: FullRequestParams): Promise<AxiosResponse<T>> => {
    const secureParams =
      ((typeof secure === "boolean" ? secure : this.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const responseFormat = format || this.format || undefined;

    if (type === ContentType.FormData && body && body !== null && typeof body === "object") {
      body = this.createFormData(body as Record<string, unknown>);
    }

    if (type === ContentType.Text && body && body !== null && typeof body !== "string") {
      body = JSON.stringify(body);
    }

    return this.instance.request({
      ...requestParams,
      headers: {
        ...(requestParams.headers || {}),
        ...(type ? { "Content-Type": type } : {}),
      },
      params: query,
      responseType: responseFormat,
      data: body,
      url: path,
    });
  };
}

/**
 * @title DonReceipt API
 * @version 1.0
 * @contact
 */
export class Api<SecurityDataType extends unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  user = {
    /**
     * No description
     *
     * @tags Users
     * @name UsersControllerGetCurrentUser
     * @summary Получить информацию о текущем пользователе
     * @request GET:/user
     * @secure
     * @response `200` `UsersControllerGetCurrentUserData` Возвращает данные пользователя
     * @response `401` `ErrorDto` Неверный access токен
     */
    usersControllerGetCurrentUser: (params: RequestParams = {}) =>
      this.http.request<UsersControllerGetCurrentUserData, UsersControllerGetCurrentUserError>({
        path: `/user`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Users
     * @name UsersControllerGetUserById
     * @summary Получить пользователя по id (admin only)
     * @request GET:/user/{id}
     * @secure
     * @response `200` `UsersControllerGetUserByIdData` Данные пользователя
     * @response `403` `ErrorDto` Недостаточно прав
     * @response `404` `ErrorDto` Пользователь не найден
     */
    usersControllerGetUserById: (id: number, params: RequestParams = {}) =>
      this.http.request<UsersControllerGetUserByIdData, UsersControllerGetUserByIdError>({
        path: `/user/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),
  };
  categories = {
    /**
     * No description
     *
     * @tags Categories
     * @name CategoriesControllerGetCategories
     * @summary Получить все категории c их подкатегориями
     * @request GET:/categories
     * @response `200` `CategoriesControllerGetCategoriesData`
     */
    categoriesControllerGetCategories: (params: RequestParams = {}) =>
      this.http.request<CategoriesControllerGetCategoriesData, any>({
        path: `/categories`,
        method: "GET",
        format: "json",
        ...params,
      }),
  };
  auth = {
    /**
     * No description
     *
     * @tags Авторизация
     * @name AuthControllerLogin
     * @summary Вход пользователя и получение токенов
     * @request POST:/auth/login
     * @response `200` `AuthControllerLoginData` Возвращает accessToken и refreshToken
     * @response `401` `ErrorDto` Неверные учетные данные
     */
    authControllerLogin: (data: LoginDto, params: RequestParams = {}) =>
      this.http.request<AuthControllerLoginData, AuthControllerLoginError>({
        path: `/auth/login`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Авторизация
     * @name AuthControllerRefresh
     * @summary Обновление токенов
     * @request POST:/auth/refresh
     * @response `200` `AuthControllerRefreshData` Возвращает новые accessToken и refreshToken
     * @response `401` `ErrorDto` Неверный refresh токен
     */
    authControllerRefresh: (data: RefreshTokenDto, params: RequestParams = {}) =>
      this.http.request<AuthControllerRefreshData, AuthControllerRefreshError>({
        path: `/auth/refresh`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Авторизация
     * @name AuthControllerRegister
     * @summary Регистрация пользователя
     * @request POST:/auth/register
     * @response `200` `AuthControllerRegisterData` Пользователь зарегистрирован успешно
     * @response `400` `ErrorDto` Пользователь с таким логином или email уже существует
     */
    authControllerRegister: (data: CreateUserDto, params: RequestParams = {}) =>
      this.http.request<AuthControllerRegisterData, AuthControllerRegisterError>({
        path: `/auth/register`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
}
