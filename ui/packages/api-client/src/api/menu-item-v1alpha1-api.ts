/* tslint:disable */
/* eslint-disable */
/**
 * Halo
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2.20.10-SNAPSHOT
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import type { Configuration } from '../configuration';
import type { AxiosPromise, AxiosInstance, RawAxiosRequestConfig } from 'axios';
import globalAxios from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError, operationServerMap } from '../base';
// @ts-ignore
import { JsonPatchInner } from '../models';
// @ts-ignore
import { MenuItem } from '../models';
// @ts-ignore
import { MenuItemList } from '../models';
/**
 * MenuItemV1alpha1Api - axios parameter creator
 * @export
 */
export const MenuItemV1alpha1ApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Create MenuItem
         * @param {MenuItem} [menuItem] Fresh menuitem
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createMenuItem: async (menuItem?: MenuItem, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/v1alpha1/menuitems`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication basicAuth required
            // http basic authentication required
            setBasicAuthToObject(localVarRequestOptions, configuration)

            // authentication bearerAuth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(menuItem, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Delete MenuItem
         * @param {string} name Name of menuitem
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteMenuItem: async (name: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'name' is not null or undefined
            assertParamExists('deleteMenuItem', 'name', name)
            const localVarPath = `/api/v1alpha1/menuitems/{name}`
                .replace(`{${"name"}}`, encodeURIComponent(String(name)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication basicAuth required
            // http basic authentication required
            setBasicAuthToObject(localVarRequestOptions, configuration)

            // authentication bearerAuth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Get MenuItem
         * @param {string} name Name of menuitem
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getMenuItem: async (name: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'name' is not null or undefined
            assertParamExists('getMenuItem', 'name', name)
            const localVarPath = `/api/v1alpha1/menuitems/{name}`
                .replace(`{${"name"}}`, encodeURIComponent(String(name)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication basicAuth required
            // http basic authentication required
            setBasicAuthToObject(localVarRequestOptions, configuration)

            // authentication bearerAuth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * List MenuItem
         * @param {number} [page] Page number. Default is 0.
         * @param {number} [size] Size number. Default is 0.
         * @param {Array<string>} [labelSelector] Label selector. e.g.: hidden!&#x3D;true
         * @param {Array<string>} [fieldSelector] Field selector. e.g.: metadata.name&#x3D;&#x3D;halo
         * @param {Array<string>} [sort] Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listMenuItem: async (page?: number, size?: number, labelSelector?: Array<string>, fieldSelector?: Array<string>, sort?: Array<string>, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/v1alpha1/menuitems`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication basicAuth required
            // http basic authentication required
            setBasicAuthToObject(localVarRequestOptions, configuration)

            // authentication bearerAuth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)

            if (page !== undefined) {
                localVarQueryParameter['page'] = page;
            }

            if (size !== undefined) {
                localVarQueryParameter['size'] = size;
            }

            if (labelSelector) {
                localVarQueryParameter['labelSelector'] = labelSelector;
            }

            if (fieldSelector) {
                localVarQueryParameter['fieldSelector'] = fieldSelector;
            }

            if (sort) {
                localVarQueryParameter['sort'] = sort;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Patch MenuItem
         * @param {string} name Name of menuitem
         * @param {Array<JsonPatchInner>} [jsonPatchInner] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        patchMenuItem: async (name: string, jsonPatchInner?: Array<JsonPatchInner>, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'name' is not null or undefined
            assertParamExists('patchMenuItem', 'name', name)
            const localVarPath = `/api/v1alpha1/menuitems/{name}`
                .replace(`{${"name"}}`, encodeURIComponent(String(name)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PATCH', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication basicAuth required
            // http basic authentication required
            setBasicAuthToObject(localVarRequestOptions, configuration)

            // authentication bearerAuth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json-patch+json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(jsonPatchInner, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Update MenuItem
         * @param {string} name Name of menuitem
         * @param {MenuItem} [menuItem] Updated menuitem
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateMenuItem: async (name: string, menuItem?: MenuItem, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'name' is not null or undefined
            assertParamExists('updateMenuItem', 'name', name)
            const localVarPath = `/api/v1alpha1/menuitems/{name}`
                .replace(`{${"name"}}`, encodeURIComponent(String(name)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication basicAuth required
            // http basic authentication required
            setBasicAuthToObject(localVarRequestOptions, configuration)

            // authentication bearerAuth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(menuItem, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * MenuItemV1alpha1Api - functional programming interface
 * @export
 */
export const MenuItemV1alpha1ApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = MenuItemV1alpha1ApiAxiosParamCreator(configuration)
    return {
        /**
         * Create MenuItem
         * @param {MenuItem} [menuItem] Fresh menuitem
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createMenuItem(menuItem?: MenuItem, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<MenuItem>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createMenuItem(menuItem, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['MenuItemV1alpha1Api.createMenuItem']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Delete MenuItem
         * @param {string} name Name of menuitem
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteMenuItem(name: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteMenuItem(name, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['MenuItemV1alpha1Api.deleteMenuItem']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Get MenuItem
         * @param {string} name Name of menuitem
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getMenuItem(name: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<MenuItem>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getMenuItem(name, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['MenuItemV1alpha1Api.getMenuItem']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * List MenuItem
         * @param {number} [page] Page number. Default is 0.
         * @param {number} [size] Size number. Default is 0.
         * @param {Array<string>} [labelSelector] Label selector. e.g.: hidden!&#x3D;true
         * @param {Array<string>} [fieldSelector] Field selector. e.g.: metadata.name&#x3D;&#x3D;halo
         * @param {Array<string>} [sort] Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async listMenuItem(page?: number, size?: number, labelSelector?: Array<string>, fieldSelector?: Array<string>, sort?: Array<string>, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<MenuItemList>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.listMenuItem(page, size, labelSelector, fieldSelector, sort, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['MenuItemV1alpha1Api.listMenuItem']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Patch MenuItem
         * @param {string} name Name of menuitem
         * @param {Array<JsonPatchInner>} [jsonPatchInner] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async patchMenuItem(name: string, jsonPatchInner?: Array<JsonPatchInner>, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<MenuItem>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.patchMenuItem(name, jsonPatchInner, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['MenuItemV1alpha1Api.patchMenuItem']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Update MenuItem
         * @param {string} name Name of menuitem
         * @param {MenuItem} [menuItem] Updated menuitem
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateMenuItem(name: string, menuItem?: MenuItem, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<MenuItem>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateMenuItem(name, menuItem, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['MenuItemV1alpha1Api.updateMenuItem']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * MenuItemV1alpha1Api - factory interface
 * @export
 */
export const MenuItemV1alpha1ApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = MenuItemV1alpha1ApiFp(configuration)
    return {
        /**
         * Create MenuItem
         * @param {MenuItemV1alpha1ApiCreateMenuItemRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createMenuItem(requestParameters: MenuItemV1alpha1ApiCreateMenuItemRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<MenuItem> {
            return localVarFp.createMenuItem(requestParameters.menuItem, options).then((request) => request(axios, basePath));
        },
        /**
         * Delete MenuItem
         * @param {MenuItemV1alpha1ApiDeleteMenuItemRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteMenuItem(requestParameters: MenuItemV1alpha1ApiDeleteMenuItemRequest, options?: RawAxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.deleteMenuItem(requestParameters.name, options).then((request) => request(axios, basePath));
        },
        /**
         * Get MenuItem
         * @param {MenuItemV1alpha1ApiGetMenuItemRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getMenuItem(requestParameters: MenuItemV1alpha1ApiGetMenuItemRequest, options?: RawAxiosRequestConfig): AxiosPromise<MenuItem> {
            return localVarFp.getMenuItem(requestParameters.name, options).then((request) => request(axios, basePath));
        },
        /**
         * List MenuItem
         * @param {MenuItemV1alpha1ApiListMenuItemRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listMenuItem(requestParameters: MenuItemV1alpha1ApiListMenuItemRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<MenuItemList> {
            return localVarFp.listMenuItem(requestParameters.page, requestParameters.size, requestParameters.labelSelector, requestParameters.fieldSelector, requestParameters.sort, options).then((request) => request(axios, basePath));
        },
        /**
         * Patch MenuItem
         * @param {MenuItemV1alpha1ApiPatchMenuItemRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        patchMenuItem(requestParameters: MenuItemV1alpha1ApiPatchMenuItemRequest, options?: RawAxiosRequestConfig): AxiosPromise<MenuItem> {
            return localVarFp.patchMenuItem(requestParameters.name, requestParameters.jsonPatchInner, options).then((request) => request(axios, basePath));
        },
        /**
         * Update MenuItem
         * @param {MenuItemV1alpha1ApiUpdateMenuItemRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateMenuItem(requestParameters: MenuItemV1alpha1ApiUpdateMenuItemRequest, options?: RawAxiosRequestConfig): AxiosPromise<MenuItem> {
            return localVarFp.updateMenuItem(requestParameters.name, requestParameters.menuItem, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for createMenuItem operation in MenuItemV1alpha1Api.
 * @export
 * @interface MenuItemV1alpha1ApiCreateMenuItemRequest
 */
export interface MenuItemV1alpha1ApiCreateMenuItemRequest {
    /**
     * Fresh menuitem
     * @type {MenuItem}
     * @memberof MenuItemV1alpha1ApiCreateMenuItem
     */
    readonly menuItem?: MenuItem
}

/**
 * Request parameters for deleteMenuItem operation in MenuItemV1alpha1Api.
 * @export
 * @interface MenuItemV1alpha1ApiDeleteMenuItemRequest
 */
export interface MenuItemV1alpha1ApiDeleteMenuItemRequest {
    /**
     * Name of menuitem
     * @type {string}
     * @memberof MenuItemV1alpha1ApiDeleteMenuItem
     */
    readonly name: string
}

/**
 * Request parameters for getMenuItem operation in MenuItemV1alpha1Api.
 * @export
 * @interface MenuItemV1alpha1ApiGetMenuItemRequest
 */
export interface MenuItemV1alpha1ApiGetMenuItemRequest {
    /**
     * Name of menuitem
     * @type {string}
     * @memberof MenuItemV1alpha1ApiGetMenuItem
     */
    readonly name: string
}

/**
 * Request parameters for listMenuItem operation in MenuItemV1alpha1Api.
 * @export
 * @interface MenuItemV1alpha1ApiListMenuItemRequest
 */
export interface MenuItemV1alpha1ApiListMenuItemRequest {
    /**
     * Page number. Default is 0.
     * @type {number}
     * @memberof MenuItemV1alpha1ApiListMenuItem
     */
    readonly page?: number

    /**
     * Size number. Default is 0.
     * @type {number}
     * @memberof MenuItemV1alpha1ApiListMenuItem
     */
    readonly size?: number

    /**
     * Label selector. e.g.: hidden!&#x3D;true
     * @type {Array<string>}
     * @memberof MenuItemV1alpha1ApiListMenuItem
     */
    readonly labelSelector?: Array<string>

    /**
     * Field selector. e.g.: metadata.name&#x3D;&#x3D;halo
     * @type {Array<string>}
     * @memberof MenuItemV1alpha1ApiListMenuItem
     */
    readonly fieldSelector?: Array<string>

    /**
     * Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
     * @type {Array<string>}
     * @memberof MenuItemV1alpha1ApiListMenuItem
     */
    readonly sort?: Array<string>
}

/**
 * Request parameters for patchMenuItem operation in MenuItemV1alpha1Api.
 * @export
 * @interface MenuItemV1alpha1ApiPatchMenuItemRequest
 */
export interface MenuItemV1alpha1ApiPatchMenuItemRequest {
    /**
     * Name of menuitem
     * @type {string}
     * @memberof MenuItemV1alpha1ApiPatchMenuItem
     */
    readonly name: string

    /**
     * 
     * @type {Array<JsonPatchInner>}
     * @memberof MenuItemV1alpha1ApiPatchMenuItem
     */
    readonly jsonPatchInner?: Array<JsonPatchInner>
}

/**
 * Request parameters for updateMenuItem operation in MenuItemV1alpha1Api.
 * @export
 * @interface MenuItemV1alpha1ApiUpdateMenuItemRequest
 */
export interface MenuItemV1alpha1ApiUpdateMenuItemRequest {
    /**
     * Name of menuitem
     * @type {string}
     * @memberof MenuItemV1alpha1ApiUpdateMenuItem
     */
    readonly name: string

    /**
     * Updated menuitem
     * @type {MenuItem}
     * @memberof MenuItemV1alpha1ApiUpdateMenuItem
     */
    readonly menuItem?: MenuItem
}

/**
 * MenuItemV1alpha1Api - object-oriented interface
 * @export
 * @class MenuItemV1alpha1Api
 * @extends {BaseAPI}
 */
export class MenuItemV1alpha1Api extends BaseAPI {
    /**
     * Create MenuItem
     * @param {MenuItemV1alpha1ApiCreateMenuItemRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MenuItemV1alpha1Api
     */
    public createMenuItem(requestParameters: MenuItemV1alpha1ApiCreateMenuItemRequest = {}, options?: RawAxiosRequestConfig) {
        return MenuItemV1alpha1ApiFp(this.configuration).createMenuItem(requestParameters.menuItem, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Delete MenuItem
     * @param {MenuItemV1alpha1ApiDeleteMenuItemRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MenuItemV1alpha1Api
     */
    public deleteMenuItem(requestParameters: MenuItemV1alpha1ApiDeleteMenuItemRequest, options?: RawAxiosRequestConfig) {
        return MenuItemV1alpha1ApiFp(this.configuration).deleteMenuItem(requestParameters.name, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Get MenuItem
     * @param {MenuItemV1alpha1ApiGetMenuItemRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MenuItemV1alpha1Api
     */
    public getMenuItem(requestParameters: MenuItemV1alpha1ApiGetMenuItemRequest, options?: RawAxiosRequestConfig) {
        return MenuItemV1alpha1ApiFp(this.configuration).getMenuItem(requestParameters.name, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * List MenuItem
     * @param {MenuItemV1alpha1ApiListMenuItemRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MenuItemV1alpha1Api
     */
    public listMenuItem(requestParameters: MenuItemV1alpha1ApiListMenuItemRequest = {}, options?: RawAxiosRequestConfig) {
        return MenuItemV1alpha1ApiFp(this.configuration).listMenuItem(requestParameters.page, requestParameters.size, requestParameters.labelSelector, requestParameters.fieldSelector, requestParameters.sort, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Patch MenuItem
     * @param {MenuItemV1alpha1ApiPatchMenuItemRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MenuItemV1alpha1Api
     */
    public patchMenuItem(requestParameters: MenuItemV1alpha1ApiPatchMenuItemRequest, options?: RawAxiosRequestConfig) {
        return MenuItemV1alpha1ApiFp(this.configuration).patchMenuItem(requestParameters.name, requestParameters.jsonPatchInner, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Update MenuItem
     * @param {MenuItemV1alpha1ApiUpdateMenuItemRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MenuItemV1alpha1Api
     */
    public updateMenuItem(requestParameters: MenuItemV1alpha1ApiUpdateMenuItemRequest, options?: RawAxiosRequestConfig) {
        return MenuItemV1alpha1ApiFp(this.configuration).updateMenuItem(requestParameters.name, requestParameters.menuItem, options).then((request) => request(this.axios, this.basePath));
    }
}

