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

export interface CreateCategoryDto {
  name: string;
}

export interface UpdateCategoryDto {
  id: number;
  name: string;
}

export interface FullSubcategoryDto {
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
  /**
   * Айди родительской категории
   * @example "1"
   */
  categoryId: number;
}

export interface CreateSubcategoryDto {
  categoryId: number;
  name: string;
}

export interface UpdateSubcategoryDto {
  id: number;
  categoryId: number;
  name: string;
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

export interface ReceiptDto {
  /**
   * Уникальный идентификатор рецепта
   * @example 1
   */
  id: number;
  /**
   * Заголовок рецепта
   * @example "Борщ"
   */
  title: string;
  /**
   * Пошаговый текст рецепта
   * @example "Нарезать овощи..."
   */
  receiptContent: string;
  /** Статус рецепта */
  receiptStatus: "DRAFT" | "PUBLISHED" | "ON_MODERATION" | "ARCHIVED";
  /**
   * ID автора (пользователя)
   * @example 42
   */
  authorId: number;
  /**
   * Дата создания
   * @format date-time
   * @example "2025-05-10T12:34:56.789Z"
   */
  createdAt: string;
  /**
   * Дата последнего обновления
   * @format date-time
   * @example "2025-05-10T12:34:56.789Z"
   */
  updatedAt: string;
  /**
   * Дата публикации рецепта
   * @example "2025-05-10T12:34:56.789Z"
   */
  publishedAt?: object | null;
  subcategory?: SubcategoryDto | null;
}

export interface CreateReceiptDraftDto {
  title?: string;
  receiptContent?: string;
  /** ID категории */
  categoryId?: number;
  /** ID подкатегории */
  subcategoryId?: number;
}

export interface UpdateReceiptDraftDto {
  title?: string;
  receiptContent?: string;
  /** ID категории */
  categoryId?: number;
  /** ID подкатегории */
  subcategoryId?: number;
}

export interface UsersControllerGetCurrentUserData {
  user?: UserDto;
}

export interface UsersControllerGetUserByIdData {
  user?: UserDto;
}

export type UsersControllerGetUserByIdError = ErrorDto;

export interface CategoriesControllerGetCategoriesData {
  categories?: CategoryDto[];
}

export interface CategoriesControllerCreateCategoryData {
  category?: CategoryDto;
}

export type CategoriesControllerCreateCategoryError = ErrorDto;

export interface CategoriesControllerUpdateCategoryData {
  category?: CategoryDto;
}

export type CategoriesControllerUpdateCategoryError = ErrorDto;

export interface SubcategoriesControllerCreateSubcategoryData {
  subcategory?: FullSubcategoryDto;
}

export type SubcategoriesControllerCreateSubcategoryError = ErrorDto;

export interface SubcategoriesControllerUpdateSubcategoryData {
  subcategory?: FullSubcategoryDto;
}

export type SubcategoriesControllerUpdateSubcategoryError = ErrorDto;

export type AuthControllerLoginData = TokensPairDto;

export type AuthControllerLoginError = ErrorDto;

export type AuthControllerRefreshData = TokensPairDto;

export type AuthControllerRefreshError = ErrorDto;

export interface AuthControllerRegisterData {
  user?: UserDto;
}

export type AuthControllerRegisterError = ErrorDto;

export interface ReceiptsControllerCreateDraftData {
  receipt?: ReceiptDto;
}

export interface ReceiptsControllerGetDraftsData {
  receipts?: ReceiptDto[];
}

export interface ReceiptsControllerUpdateDraftData {
  receipt?: ReceiptDto;
}

export type ReceiptsControllerUpdateDraftError = ErrorDto;

export interface ReceiptsControllerGetDraftByIdData {
  receipt?: ReceiptDto;
}

export type ReceiptsControllerGetDraftByIdError = ErrorDto;

export interface ReceiptsControllerPublishDraftData {
  receipt?: ReceiptDto;
}

export type ReceiptsControllerPublishDraftError = ErrorDto;

export interface ReceiptsControllerGetAllPublishedParams {
  /** Текст для поиска по заголовку и содержимому рецепта */
  searchText?: string;
  /** ID автора рецептов */
  authorId?: number;
  /** ID категории рецептов */
  categoryId?: number;
  /** ID подкатегории рецептов (имеет приоритет над categoryId) */
  subcategoryId?: number;
}

export interface ReceiptsControllerGetAllPublishedData {
  receipts?: ReceiptDto[];
}

export interface ReceiptsControllerGetPublishedByIdData {
  receipt?: ReceiptDto;
}

export type ReceiptsControllerGetPublishedByIdError = ErrorDto;

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
     */
    usersControllerGetCurrentUser: (params: RequestParams = {}) =>
      this.http.request<UsersControllerGetCurrentUserData, any>({
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
     * @summary (Администратор) Получить пользователя по id
     * @request GET:/user/{id}
     * @secure
     * @response `200` `UsersControllerGetUserByIdData` Данные пользователя
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
     * @secure
     * @response `200` `CategoriesControllerGetCategoriesData`
     */
    categoriesControllerGetCategories: (params: RequestParams = {}) =>
      this.http.request<CategoriesControllerGetCategoriesData, any>({
        path: `/categories`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Categories
     * @name CategoriesControllerCreateCategory
     * @summary (Администратор) Создать категорию
     * @request POST:/categories
     * @secure
     * @response `200` `CategoriesControllerCreateCategoryData` Категория успешно создана
     * @response `400` `ErrorDto` Категория с таким названием уже существует
     */
    categoriesControllerCreateCategory: (data: CreateCategoryDto, params: RequestParams = {}) =>
      this.http.request<CategoriesControllerCreateCategoryData, CategoriesControllerCreateCategoryError>({
        path: `/categories`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Categories
     * @name CategoriesControllerUpdateCategory
     * @summary (Администратор) Обновить категорию
     * @request PUT:/categories
     * @secure
     * @response `200` `CategoriesControllerUpdateCategoryData` Категория успешно обновлена
     * @response `400` `ErrorDto` Категория с таким названием уже существует
     * @response `404` `ErrorDto` Категория с таким id не существует
     */
    categoriesControllerUpdateCategory: (data: UpdateCategoryDto, params: RequestParams = {}) =>
      this.http.request<CategoriesControllerUpdateCategoryData, CategoriesControllerUpdateCategoryError>({
        path: `/categories`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  subcategories = {
    /**
     * No description
     *
     * @tags Subcategories
     * @name SubcategoriesControllerCreateSubcategory
     * @summary (Администратор) Создать подкатегорию для категории
     * @request POST:/subcategories
     * @secure
     * @response `200` `SubcategoriesControllerCreateSubcategoryData` Подкатегория успешно создана
     * @response `400` `ErrorDto` Подкатегория для категории с таким названием уже существует
     * @response `404` `ErrorDto` Категория с таким id не существует
     */
    subcategoriesControllerCreateSubcategory: (data: CreateSubcategoryDto, params: RequestParams = {}) =>
      this.http.request<SubcategoriesControllerCreateSubcategoryData, SubcategoriesControllerCreateSubcategoryError>({
        path: `/subcategories`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Subcategories
     * @name SubcategoriesControllerUpdateSubcategory
     * @summary (Администратор) Обновить подкатегорию категории
     * @request PUT:/subcategories
     * @secure
     * @response `200` `SubcategoriesControllerUpdateSubcategoryData` Подкатегория успешно обновлена
     * @response `404` `ErrorDto` Категория с таким id не существует / Подкатегория с таким id не существует
     */
    subcategoriesControllerUpdateSubcategory: (data: UpdateSubcategoryDto, params: RequestParams = {}) =>
      this.http.request<SubcategoriesControllerUpdateSubcategoryData, SubcategoriesControllerUpdateSubcategoryError>({
        path: `/subcategories`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
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
     * @response `400` `ErrorDto` Неверные учетные данные
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
     * @response `400` `ErrorDto` Неверный refresh токен
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
  receipts = {
    /**
     * No description
     *
     * @tags receipts
     * @name ReceiptsControllerCreateDraft
     * @summary Создать новый черновик рецепта
     * @request POST:/receipts/drafts
     * @secure
     * @response `200` `ReceiptsControllerCreateDraftData` Черновик успешно создан
     */
    receiptsControllerCreateDraft: (data: CreateReceiptDraftDto, params: RequestParams = {}) =>
      this.http.request<ReceiptsControllerCreateDraftData, any>({
        path: `/receipts/drafts`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags receipts
     * @name ReceiptsControllerGetDrafts
     * @summary Получить все черновики текущего пользователя
     * @request GET:/receipts/drafts
     * @secure
     * @response `200` `ReceiptsControllerGetDraftsData` Список черновиков пользователя
     */
    receiptsControllerGetDrafts: (params: RequestParams = {}) =>
      this.http.request<ReceiptsControllerGetDraftsData, any>({
        path: `/receipts/drafts`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags receipts
     * @name ReceiptsControllerUpdateDraft
     * @summary Обновить существующий черновик рецепта
     * @request PUT:/receipts/drafts/{id}
     * @secure
     * @response `200` `ReceiptsControllerUpdateDraftData` Черновик успешно обновлен
     * @response `400` `ErrorDto` Можно редактировать только черновики
     * @response `403` `ErrorDto` Доступ запрещён
     * @response `404` `ErrorDto` Черновик не найден
     */
    receiptsControllerUpdateDraft: (id: number, data: UpdateReceiptDraftDto, params: RequestParams = {}) =>
      this.http.request<ReceiptsControllerUpdateDraftData, ReceiptsControllerUpdateDraftError>({
        path: `/receipts/drafts/${id}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags receipts
     * @name ReceiptsControllerGetDraftById
     * @summary Получить черновик рецепта по id (только для автора)
     * @request GET:/receipts/drafts/{id}
     * @secure
     * @response `200` `ReceiptsControllerGetDraftByIdData` Черновик рецепта
     * @response `404` `ErrorDto` Черновик не найден
     */
    receiptsControllerGetDraftById: (id: number, params: RequestParams = {}) =>
      this.http.request<ReceiptsControllerGetDraftByIdData, ReceiptsControllerGetDraftByIdError>({
        path: `/receipts/drafts/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags receipts
     * @name ReceiptsControllerPublishDraft
     * @summary Опубликовать черновик рецепта
     * @request PUT:/receipts/publish/{id}
     * @secure
     * @response `200` `ReceiptsControllerPublishDraftData` Черновик успешно опубликован
     * @response `400` `ErrorDto` Нельзя публиковать не-черновики или черновики без подкатегории
     * @response `403` `ErrorDto` Доступ запрещён
     * @response `404` `ErrorDto` Черновик не найден
     */
    receiptsControllerPublishDraft: (id: number, params: RequestParams = {}) =>
      this.http.request<ReceiptsControllerPublishDraftData, ReceiptsControllerPublishDraftError>({
        path: `/receipts/publish/${id}`,
        method: "PUT",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags receipts
     * @name ReceiptsControllerGetAllPublished
     * @summary Получить все опубликованные рецепты
     * @request GET:/receipts
     * @secure
     * @response `200` `ReceiptsControllerGetAllPublishedData` Список опубликованных рецептов
     */
    receiptsControllerGetAllPublished: (query: ReceiptsControllerGetAllPublishedParams, params: RequestParams = {}) =>
      this.http.request<ReceiptsControllerGetAllPublishedData, any>({
        path: `/receipts`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags receipts
     * @name ReceiptsControllerGetPublishedById
     * @summary Получить опубликованный рецепт по id
     * @request GET:/receipts/{id}
     * @secure
     * @response `200` `ReceiptsControllerGetPublishedByIdData` Опубликованный рецепт
     * @response `404` `ErrorDto` Рецепт не найден
     */
    receiptsControllerGetPublishedById: (id: number, params: RequestParams = {}) =>
      this.http.request<ReceiptsControllerGetPublishedByIdData, ReceiptsControllerGetPublishedByIdError>({
        path: `/receipts/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),
  };
}
