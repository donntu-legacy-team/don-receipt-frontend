/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
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

export interface CreateUserDto {
  username: string;
  email: string;
  password: string;
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

export interface UsersControllerGetUserByIdParams {
  id: number;
}

export interface UsersControllerGetUserByIdData {
  user?: UserDto;
}

export type UsersControllerGetUserByIdError = ErrorDto;

export interface UsersControllerCreateUserData {
  user?: UserDto;
}

export type UsersControllerCreateUserError = ErrorDto;

export interface CategoriesControllerGetCategoriesData {
  categories?: CategoryDto[];
}

export type CategoriesControllerGetCategoriesError = ErrorDto;

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
 * @title DonReceipt api
 * @version 1.0
 * @contact
 */
export class Api<SecurityDataType extends unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  users = {
    /**
     * No description
     *
     * @tags Users
     * @name UsersControllerGetUserById
     * @summary Найти пользователя по id
     * @request GET:/users
     * @response `200` `UsersControllerGetUserByIdData` User retrieved successfully
     * @response `404` `ErrorDto` User not found
     */
    usersControllerGetUserById: (query: UsersControllerGetUserByIdParams, params: RequestParams = {}) =>
      this.http.request<UsersControllerGetUserByIdData, UsersControllerGetUserByIdError>({
        path: `/users`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Users
     * @name UsersControllerCreateUser
     * @summary Создать пользователя
     * @request POST:/users
     * @response `200` `UsersControllerCreateUserData` User created successfully
     * @response `400` `ErrorDto` User with this username or email already exists
     */
    usersControllerCreateUser: (data: CreateUserDto, params: RequestParams = {}) =>
      this.http.request<UsersControllerCreateUserData, UsersControllerCreateUserError>({
        path: `/users`,
        method: "POST",
        body: data,
        type: ContentType.Json,
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
     * @response `404` `ErrorDto` Categories not found
     */
    categoriesControllerGetCategories: (params: RequestParams = {}) =>
      this.http.request<CategoriesControllerGetCategoriesData, CategoriesControllerGetCategoriesError>({
        path: `/categories`,
        method: "GET",
        format: "json",
        ...params,
      }),
  };
}
