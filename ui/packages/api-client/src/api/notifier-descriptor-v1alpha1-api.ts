/* tslint:disable */
/* eslint-disable */
/**
 * Halo
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2.20.11-SNAPSHOT
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
import { NotifierDescriptor } from '../models';
// @ts-ignore
import { NotifierDescriptorList } from '../models';
/**
 * NotifierDescriptorV1alpha1Api - axios parameter creator
 * @export
 */
export const NotifierDescriptorV1alpha1ApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Create NotifierDescriptor
         * @param {NotifierDescriptor} [notifierDescriptor] Fresh notifierDescriptor
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createNotifierDescriptor: async (notifierDescriptor?: NotifierDescriptor, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/apis/notification.halo.run/v1alpha1/notifierDescriptors`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(notifierDescriptor, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Delete NotifierDescriptor
         * @param {string} name Name of notifierDescriptor
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteNotifierDescriptor: async (name: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'name' is not null or undefined
            assertParamExists('deleteNotifierDescriptor', 'name', name)
            const localVarPath = `/apis/notification.halo.run/v1alpha1/notifierDescriptors/{name}`
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
         * Get NotifierDescriptor
         * @param {string} name Name of notifierDescriptor
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getNotifierDescriptor: async (name: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'name' is not null or undefined
            assertParamExists('getNotifierDescriptor', 'name', name)
            const localVarPath = `/apis/notification.halo.run/v1alpha1/notifierDescriptors/{name}`
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
         * List NotifierDescriptor
         * @param {number} [page] Page number. Default is 0.
         * @param {number} [size] Size number. Default is 0.
         * @param {Array<string>} [labelSelector] Label selector. e.g.: hidden!&#x3D;true
         * @param {Array<string>} [fieldSelector] Field selector. e.g.: metadata.name&#x3D;&#x3D;halo
         * @param {Array<string>} [sort] Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listNotifierDescriptor: async (page?: number, size?: number, labelSelector?: Array<string>, fieldSelector?: Array<string>, sort?: Array<string>, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/apis/notification.halo.run/v1alpha1/notifierDescriptors`;
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
         * Patch NotifierDescriptor
         * @param {string} name Name of notifierDescriptor
         * @param {Array<JsonPatchInner>} [jsonPatchInner] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        patchNotifierDescriptor: async (name: string, jsonPatchInner?: Array<JsonPatchInner>, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'name' is not null or undefined
            assertParamExists('patchNotifierDescriptor', 'name', name)
            const localVarPath = `/apis/notification.halo.run/v1alpha1/notifierDescriptors/{name}`
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
         * Update NotifierDescriptor
         * @param {string} name Name of notifierDescriptor
         * @param {NotifierDescriptor} [notifierDescriptor] Updated notifierDescriptor
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateNotifierDescriptor: async (name: string, notifierDescriptor?: NotifierDescriptor, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'name' is not null or undefined
            assertParamExists('updateNotifierDescriptor', 'name', name)
            const localVarPath = `/apis/notification.halo.run/v1alpha1/notifierDescriptors/{name}`
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
            localVarRequestOptions.data = serializeDataIfNeeded(notifierDescriptor, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * NotifierDescriptorV1alpha1Api - functional programming interface
 * @export
 */
export const NotifierDescriptorV1alpha1ApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = NotifierDescriptorV1alpha1ApiAxiosParamCreator(configuration)
    return {
        /**
         * Create NotifierDescriptor
         * @param {NotifierDescriptor} [notifierDescriptor] Fresh notifierDescriptor
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createNotifierDescriptor(notifierDescriptor?: NotifierDescriptor, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<NotifierDescriptor>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createNotifierDescriptor(notifierDescriptor, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['NotifierDescriptorV1alpha1Api.createNotifierDescriptor']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Delete NotifierDescriptor
         * @param {string} name Name of notifierDescriptor
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteNotifierDescriptor(name: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteNotifierDescriptor(name, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['NotifierDescriptorV1alpha1Api.deleteNotifierDescriptor']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Get NotifierDescriptor
         * @param {string} name Name of notifierDescriptor
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getNotifierDescriptor(name: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<NotifierDescriptor>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getNotifierDescriptor(name, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['NotifierDescriptorV1alpha1Api.getNotifierDescriptor']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * List NotifierDescriptor
         * @param {number} [page] Page number. Default is 0.
         * @param {number} [size] Size number. Default is 0.
         * @param {Array<string>} [labelSelector] Label selector. e.g.: hidden!&#x3D;true
         * @param {Array<string>} [fieldSelector] Field selector. e.g.: metadata.name&#x3D;&#x3D;halo
         * @param {Array<string>} [sort] Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async listNotifierDescriptor(page?: number, size?: number, labelSelector?: Array<string>, fieldSelector?: Array<string>, sort?: Array<string>, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<NotifierDescriptorList>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.listNotifierDescriptor(page, size, labelSelector, fieldSelector, sort, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['NotifierDescriptorV1alpha1Api.listNotifierDescriptor']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Patch NotifierDescriptor
         * @param {string} name Name of notifierDescriptor
         * @param {Array<JsonPatchInner>} [jsonPatchInner] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async patchNotifierDescriptor(name: string, jsonPatchInner?: Array<JsonPatchInner>, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<NotifierDescriptor>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.patchNotifierDescriptor(name, jsonPatchInner, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['NotifierDescriptorV1alpha1Api.patchNotifierDescriptor']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Update NotifierDescriptor
         * @param {string} name Name of notifierDescriptor
         * @param {NotifierDescriptor} [notifierDescriptor] Updated notifierDescriptor
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateNotifierDescriptor(name: string, notifierDescriptor?: NotifierDescriptor, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<NotifierDescriptor>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateNotifierDescriptor(name, notifierDescriptor, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['NotifierDescriptorV1alpha1Api.updateNotifierDescriptor']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * NotifierDescriptorV1alpha1Api - factory interface
 * @export
 */
export const NotifierDescriptorV1alpha1ApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = NotifierDescriptorV1alpha1ApiFp(configuration)
    return {
        /**
         * Create NotifierDescriptor
         * @param {NotifierDescriptorV1alpha1ApiCreateNotifierDescriptorRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createNotifierDescriptor(requestParameters: NotifierDescriptorV1alpha1ApiCreateNotifierDescriptorRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<NotifierDescriptor> {
            return localVarFp.createNotifierDescriptor(requestParameters.notifierDescriptor, options).then((request) => request(axios, basePath));
        },
        /**
         * Delete NotifierDescriptor
         * @param {NotifierDescriptorV1alpha1ApiDeleteNotifierDescriptorRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteNotifierDescriptor(requestParameters: NotifierDescriptorV1alpha1ApiDeleteNotifierDescriptorRequest, options?: RawAxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.deleteNotifierDescriptor(requestParameters.name, options).then((request) => request(axios, basePath));
        },
        /**
         * Get NotifierDescriptor
         * @param {NotifierDescriptorV1alpha1ApiGetNotifierDescriptorRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getNotifierDescriptor(requestParameters: NotifierDescriptorV1alpha1ApiGetNotifierDescriptorRequest, options?: RawAxiosRequestConfig): AxiosPromise<NotifierDescriptor> {
            return localVarFp.getNotifierDescriptor(requestParameters.name, options).then((request) => request(axios, basePath));
        },
        /**
         * List NotifierDescriptor
         * @param {NotifierDescriptorV1alpha1ApiListNotifierDescriptorRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listNotifierDescriptor(requestParameters: NotifierDescriptorV1alpha1ApiListNotifierDescriptorRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<NotifierDescriptorList> {
            return localVarFp.listNotifierDescriptor(requestParameters.page, requestParameters.size, requestParameters.labelSelector, requestParameters.fieldSelector, requestParameters.sort, options).then((request) => request(axios, basePath));
        },
        /**
         * Patch NotifierDescriptor
         * @param {NotifierDescriptorV1alpha1ApiPatchNotifierDescriptorRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        patchNotifierDescriptor(requestParameters: NotifierDescriptorV1alpha1ApiPatchNotifierDescriptorRequest, options?: RawAxiosRequestConfig): AxiosPromise<NotifierDescriptor> {
            return localVarFp.patchNotifierDescriptor(requestParameters.name, requestParameters.jsonPatchInner, options).then((request) => request(axios, basePath));
        },
        /**
         * Update NotifierDescriptor
         * @param {NotifierDescriptorV1alpha1ApiUpdateNotifierDescriptorRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateNotifierDescriptor(requestParameters: NotifierDescriptorV1alpha1ApiUpdateNotifierDescriptorRequest, options?: RawAxiosRequestConfig): AxiosPromise<NotifierDescriptor> {
            return localVarFp.updateNotifierDescriptor(requestParameters.name, requestParameters.notifierDescriptor, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for createNotifierDescriptor operation in NotifierDescriptorV1alpha1Api.
 * @export
 * @interface NotifierDescriptorV1alpha1ApiCreateNotifierDescriptorRequest
 */
export interface NotifierDescriptorV1alpha1ApiCreateNotifierDescriptorRequest {
    /**
     * Fresh notifierDescriptor
     * @type {NotifierDescriptor}
     * @memberof NotifierDescriptorV1alpha1ApiCreateNotifierDescriptor
     */
    readonly notifierDescriptor?: NotifierDescriptor
}

/**
 * Request parameters for deleteNotifierDescriptor operation in NotifierDescriptorV1alpha1Api.
 * @export
 * @interface NotifierDescriptorV1alpha1ApiDeleteNotifierDescriptorRequest
 */
export interface NotifierDescriptorV1alpha1ApiDeleteNotifierDescriptorRequest {
    /**
     * Name of notifierDescriptor
     * @type {string}
     * @memberof NotifierDescriptorV1alpha1ApiDeleteNotifierDescriptor
     */
    readonly name: string
}

/**
 * Request parameters for getNotifierDescriptor operation in NotifierDescriptorV1alpha1Api.
 * @export
 * @interface NotifierDescriptorV1alpha1ApiGetNotifierDescriptorRequest
 */
export interface NotifierDescriptorV1alpha1ApiGetNotifierDescriptorRequest {
    /**
     * Name of notifierDescriptor
     * @type {string}
     * @memberof NotifierDescriptorV1alpha1ApiGetNotifierDescriptor
     */
    readonly name: string
}

/**
 * Request parameters for listNotifierDescriptor operation in NotifierDescriptorV1alpha1Api.
 * @export
 * @interface NotifierDescriptorV1alpha1ApiListNotifierDescriptorRequest
 */
export interface NotifierDescriptorV1alpha1ApiListNotifierDescriptorRequest {
    /**
     * Page number. Default is 0.
     * @type {number}
     * @memberof NotifierDescriptorV1alpha1ApiListNotifierDescriptor
     */
    readonly page?: number

    /**
     * Size number. Default is 0.
     * @type {number}
     * @memberof NotifierDescriptorV1alpha1ApiListNotifierDescriptor
     */
    readonly size?: number

    /**
     * Label selector. e.g.: hidden!&#x3D;true
     * @type {Array<string>}
     * @memberof NotifierDescriptorV1alpha1ApiListNotifierDescriptor
     */
    readonly labelSelector?: Array<string>

    /**
     * Field selector. e.g.: metadata.name&#x3D;&#x3D;halo
     * @type {Array<string>}
     * @memberof NotifierDescriptorV1alpha1ApiListNotifierDescriptor
     */
    readonly fieldSelector?: Array<string>

    /**
     * Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
     * @type {Array<string>}
     * @memberof NotifierDescriptorV1alpha1ApiListNotifierDescriptor
     */
    readonly sort?: Array<string>
}

/**
 * Request parameters for patchNotifierDescriptor operation in NotifierDescriptorV1alpha1Api.
 * @export
 * @interface NotifierDescriptorV1alpha1ApiPatchNotifierDescriptorRequest
 */
export interface NotifierDescriptorV1alpha1ApiPatchNotifierDescriptorRequest {
    /**
     * Name of notifierDescriptor
     * @type {string}
     * @memberof NotifierDescriptorV1alpha1ApiPatchNotifierDescriptor
     */
    readonly name: string

    /**
     * 
     * @type {Array<JsonPatchInner>}
     * @memberof NotifierDescriptorV1alpha1ApiPatchNotifierDescriptor
     */
    readonly jsonPatchInner?: Array<JsonPatchInner>
}

/**
 * Request parameters for updateNotifierDescriptor operation in NotifierDescriptorV1alpha1Api.
 * @export
 * @interface NotifierDescriptorV1alpha1ApiUpdateNotifierDescriptorRequest
 */
export interface NotifierDescriptorV1alpha1ApiUpdateNotifierDescriptorRequest {
    /**
     * Name of notifierDescriptor
     * @type {string}
     * @memberof NotifierDescriptorV1alpha1ApiUpdateNotifierDescriptor
     */
    readonly name: string

    /**
     * Updated notifierDescriptor
     * @type {NotifierDescriptor}
     * @memberof NotifierDescriptorV1alpha1ApiUpdateNotifierDescriptor
     */
    readonly notifierDescriptor?: NotifierDescriptor
}

/**
 * NotifierDescriptorV1alpha1Api - object-oriented interface
 * @export
 * @class NotifierDescriptorV1alpha1Api
 * @extends {BaseAPI}
 */
export class NotifierDescriptorV1alpha1Api extends BaseAPI {
    /**
     * Create NotifierDescriptor
     * @param {NotifierDescriptorV1alpha1ApiCreateNotifierDescriptorRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof NotifierDescriptorV1alpha1Api
     */
    public createNotifierDescriptor(requestParameters: NotifierDescriptorV1alpha1ApiCreateNotifierDescriptorRequest = {}, options?: RawAxiosRequestConfig) {
        return NotifierDescriptorV1alpha1ApiFp(this.configuration).createNotifierDescriptor(requestParameters.notifierDescriptor, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Delete NotifierDescriptor
     * @param {NotifierDescriptorV1alpha1ApiDeleteNotifierDescriptorRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof NotifierDescriptorV1alpha1Api
     */
    public deleteNotifierDescriptor(requestParameters: NotifierDescriptorV1alpha1ApiDeleteNotifierDescriptorRequest, options?: RawAxiosRequestConfig) {
        return NotifierDescriptorV1alpha1ApiFp(this.configuration).deleteNotifierDescriptor(requestParameters.name, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Get NotifierDescriptor
     * @param {NotifierDescriptorV1alpha1ApiGetNotifierDescriptorRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof NotifierDescriptorV1alpha1Api
     */
    public getNotifierDescriptor(requestParameters: NotifierDescriptorV1alpha1ApiGetNotifierDescriptorRequest, options?: RawAxiosRequestConfig) {
        return NotifierDescriptorV1alpha1ApiFp(this.configuration).getNotifierDescriptor(requestParameters.name, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * List NotifierDescriptor
     * @param {NotifierDescriptorV1alpha1ApiListNotifierDescriptorRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof NotifierDescriptorV1alpha1Api
     */
    public listNotifierDescriptor(requestParameters: NotifierDescriptorV1alpha1ApiListNotifierDescriptorRequest = {}, options?: RawAxiosRequestConfig) {
        return NotifierDescriptorV1alpha1ApiFp(this.configuration).listNotifierDescriptor(requestParameters.page, requestParameters.size, requestParameters.labelSelector, requestParameters.fieldSelector, requestParameters.sort, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Patch NotifierDescriptor
     * @param {NotifierDescriptorV1alpha1ApiPatchNotifierDescriptorRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof NotifierDescriptorV1alpha1Api
     */
    public patchNotifierDescriptor(requestParameters: NotifierDescriptorV1alpha1ApiPatchNotifierDescriptorRequest, options?: RawAxiosRequestConfig) {
        return NotifierDescriptorV1alpha1ApiFp(this.configuration).patchNotifierDescriptor(requestParameters.name, requestParameters.jsonPatchInner, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Update NotifierDescriptor
     * @param {NotifierDescriptorV1alpha1ApiUpdateNotifierDescriptorRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof NotifierDescriptorV1alpha1Api
     */
    public updateNotifierDescriptor(requestParameters: NotifierDescriptorV1alpha1ApiUpdateNotifierDescriptorRequest, options?: RawAxiosRequestConfig) {
        return NotifierDescriptorV1alpha1ApiFp(this.configuration).updateNotifierDescriptor(requestParameters.name, requestParameters.notifierDescriptor, options).then((request) => request(this.axios, this.basePath));
    }
}

