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
import { SearchEngine } from '../models';
// @ts-ignore
import { SearchEngineList } from '../models';
/**
 * SearchEngineV1alpha1Api - axios parameter creator
 * @export
 */
export const SearchEngineV1alpha1ApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Create SearchEngine
         * @param {SearchEngine} [searchEngine] Fresh searchengine
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createSearchEngine: async (searchEngine?: SearchEngine, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/apis/plugin.halo.run/v1alpha1/searchengines`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(searchEngine, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Delete SearchEngine
         * @param {string} name Name of searchengine
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteSearchEngine: async (name: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'name' is not null or undefined
            assertParamExists('deleteSearchEngine', 'name', name)
            const localVarPath = `/apis/plugin.halo.run/v1alpha1/searchengines/{name}`
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
         * Get SearchEngine
         * @param {string} name Name of searchengine
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getSearchEngine: async (name: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'name' is not null or undefined
            assertParamExists('getSearchEngine', 'name', name)
            const localVarPath = `/apis/plugin.halo.run/v1alpha1/searchengines/{name}`
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
         * List SearchEngine
         * @param {number} [page] Page number. Default is 0.
         * @param {number} [size] Size number. Default is 0.
         * @param {Array<string>} [labelSelector] Label selector. e.g.: hidden!&#x3D;true
         * @param {Array<string>} [fieldSelector] Field selector. e.g.: metadata.name&#x3D;&#x3D;halo
         * @param {Array<string>} [sort] Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listSearchEngine: async (page?: number, size?: number, labelSelector?: Array<string>, fieldSelector?: Array<string>, sort?: Array<string>, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/apis/plugin.halo.run/v1alpha1/searchengines`;
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
         * Patch SearchEngine
         * @param {string} name Name of searchengine
         * @param {Array<JsonPatchInner>} [jsonPatchInner] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        patchSearchEngine: async (name: string, jsonPatchInner?: Array<JsonPatchInner>, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'name' is not null or undefined
            assertParamExists('patchSearchEngine', 'name', name)
            const localVarPath = `/apis/plugin.halo.run/v1alpha1/searchengines/{name}`
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
         * Update SearchEngine
         * @param {string} name Name of searchengine
         * @param {SearchEngine} [searchEngine] Updated searchengine
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateSearchEngine: async (name: string, searchEngine?: SearchEngine, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'name' is not null or undefined
            assertParamExists('updateSearchEngine', 'name', name)
            const localVarPath = `/apis/plugin.halo.run/v1alpha1/searchengines/{name}`
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
            localVarRequestOptions.data = serializeDataIfNeeded(searchEngine, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * SearchEngineV1alpha1Api - functional programming interface
 * @export
 */
export const SearchEngineV1alpha1ApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = SearchEngineV1alpha1ApiAxiosParamCreator(configuration)
    return {
        /**
         * Create SearchEngine
         * @param {SearchEngine} [searchEngine] Fresh searchengine
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createSearchEngine(searchEngine?: SearchEngine, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<SearchEngine>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createSearchEngine(searchEngine, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SearchEngineV1alpha1Api.createSearchEngine']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Delete SearchEngine
         * @param {string} name Name of searchengine
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteSearchEngine(name: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteSearchEngine(name, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SearchEngineV1alpha1Api.deleteSearchEngine']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Get SearchEngine
         * @param {string} name Name of searchengine
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getSearchEngine(name: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<SearchEngine>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getSearchEngine(name, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SearchEngineV1alpha1Api.getSearchEngine']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * List SearchEngine
         * @param {number} [page] Page number. Default is 0.
         * @param {number} [size] Size number. Default is 0.
         * @param {Array<string>} [labelSelector] Label selector. e.g.: hidden!&#x3D;true
         * @param {Array<string>} [fieldSelector] Field selector. e.g.: metadata.name&#x3D;&#x3D;halo
         * @param {Array<string>} [sort] Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async listSearchEngine(page?: number, size?: number, labelSelector?: Array<string>, fieldSelector?: Array<string>, sort?: Array<string>, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<SearchEngineList>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.listSearchEngine(page, size, labelSelector, fieldSelector, sort, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SearchEngineV1alpha1Api.listSearchEngine']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Patch SearchEngine
         * @param {string} name Name of searchengine
         * @param {Array<JsonPatchInner>} [jsonPatchInner] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async patchSearchEngine(name: string, jsonPatchInner?: Array<JsonPatchInner>, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<SearchEngine>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.patchSearchEngine(name, jsonPatchInner, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SearchEngineV1alpha1Api.patchSearchEngine']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Update SearchEngine
         * @param {string} name Name of searchengine
         * @param {SearchEngine} [searchEngine] Updated searchengine
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateSearchEngine(name: string, searchEngine?: SearchEngine, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<SearchEngine>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateSearchEngine(name, searchEngine, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SearchEngineV1alpha1Api.updateSearchEngine']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * SearchEngineV1alpha1Api - factory interface
 * @export
 */
export const SearchEngineV1alpha1ApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = SearchEngineV1alpha1ApiFp(configuration)
    return {
        /**
         * Create SearchEngine
         * @param {SearchEngineV1alpha1ApiCreateSearchEngineRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createSearchEngine(requestParameters: SearchEngineV1alpha1ApiCreateSearchEngineRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<SearchEngine> {
            return localVarFp.createSearchEngine(requestParameters.searchEngine, options).then((request) => request(axios, basePath));
        },
        /**
         * Delete SearchEngine
         * @param {SearchEngineV1alpha1ApiDeleteSearchEngineRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteSearchEngine(requestParameters: SearchEngineV1alpha1ApiDeleteSearchEngineRequest, options?: RawAxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.deleteSearchEngine(requestParameters.name, options).then((request) => request(axios, basePath));
        },
        /**
         * Get SearchEngine
         * @param {SearchEngineV1alpha1ApiGetSearchEngineRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getSearchEngine(requestParameters: SearchEngineV1alpha1ApiGetSearchEngineRequest, options?: RawAxiosRequestConfig): AxiosPromise<SearchEngine> {
            return localVarFp.getSearchEngine(requestParameters.name, options).then((request) => request(axios, basePath));
        },
        /**
         * List SearchEngine
         * @param {SearchEngineV1alpha1ApiListSearchEngineRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listSearchEngine(requestParameters: SearchEngineV1alpha1ApiListSearchEngineRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<SearchEngineList> {
            return localVarFp.listSearchEngine(requestParameters.page, requestParameters.size, requestParameters.labelSelector, requestParameters.fieldSelector, requestParameters.sort, options).then((request) => request(axios, basePath));
        },
        /**
         * Patch SearchEngine
         * @param {SearchEngineV1alpha1ApiPatchSearchEngineRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        patchSearchEngine(requestParameters: SearchEngineV1alpha1ApiPatchSearchEngineRequest, options?: RawAxiosRequestConfig): AxiosPromise<SearchEngine> {
            return localVarFp.patchSearchEngine(requestParameters.name, requestParameters.jsonPatchInner, options).then((request) => request(axios, basePath));
        },
        /**
         * Update SearchEngine
         * @param {SearchEngineV1alpha1ApiUpdateSearchEngineRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateSearchEngine(requestParameters: SearchEngineV1alpha1ApiUpdateSearchEngineRequest, options?: RawAxiosRequestConfig): AxiosPromise<SearchEngine> {
            return localVarFp.updateSearchEngine(requestParameters.name, requestParameters.searchEngine, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for createSearchEngine operation in SearchEngineV1alpha1Api.
 * @export
 * @interface SearchEngineV1alpha1ApiCreateSearchEngineRequest
 */
export interface SearchEngineV1alpha1ApiCreateSearchEngineRequest {
    /**
     * Fresh searchengine
     * @type {SearchEngine}
     * @memberof SearchEngineV1alpha1ApiCreateSearchEngine
     */
    readonly searchEngine?: SearchEngine
}

/**
 * Request parameters for deleteSearchEngine operation in SearchEngineV1alpha1Api.
 * @export
 * @interface SearchEngineV1alpha1ApiDeleteSearchEngineRequest
 */
export interface SearchEngineV1alpha1ApiDeleteSearchEngineRequest {
    /**
     * Name of searchengine
     * @type {string}
     * @memberof SearchEngineV1alpha1ApiDeleteSearchEngine
     */
    readonly name: string
}

/**
 * Request parameters for getSearchEngine operation in SearchEngineV1alpha1Api.
 * @export
 * @interface SearchEngineV1alpha1ApiGetSearchEngineRequest
 */
export interface SearchEngineV1alpha1ApiGetSearchEngineRequest {
    /**
     * Name of searchengine
     * @type {string}
     * @memberof SearchEngineV1alpha1ApiGetSearchEngine
     */
    readonly name: string
}

/**
 * Request parameters for listSearchEngine operation in SearchEngineV1alpha1Api.
 * @export
 * @interface SearchEngineV1alpha1ApiListSearchEngineRequest
 */
export interface SearchEngineV1alpha1ApiListSearchEngineRequest {
    /**
     * Page number. Default is 0.
     * @type {number}
     * @memberof SearchEngineV1alpha1ApiListSearchEngine
     */
    readonly page?: number

    /**
     * Size number. Default is 0.
     * @type {number}
     * @memberof SearchEngineV1alpha1ApiListSearchEngine
     */
    readonly size?: number

    /**
     * Label selector. e.g.: hidden!&#x3D;true
     * @type {Array<string>}
     * @memberof SearchEngineV1alpha1ApiListSearchEngine
     */
    readonly labelSelector?: Array<string>

    /**
     * Field selector. e.g.: metadata.name&#x3D;&#x3D;halo
     * @type {Array<string>}
     * @memberof SearchEngineV1alpha1ApiListSearchEngine
     */
    readonly fieldSelector?: Array<string>

    /**
     * Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
     * @type {Array<string>}
     * @memberof SearchEngineV1alpha1ApiListSearchEngine
     */
    readonly sort?: Array<string>
}

/**
 * Request parameters for patchSearchEngine operation in SearchEngineV1alpha1Api.
 * @export
 * @interface SearchEngineV1alpha1ApiPatchSearchEngineRequest
 */
export interface SearchEngineV1alpha1ApiPatchSearchEngineRequest {
    /**
     * Name of searchengine
     * @type {string}
     * @memberof SearchEngineV1alpha1ApiPatchSearchEngine
     */
    readonly name: string

    /**
     * 
     * @type {Array<JsonPatchInner>}
     * @memberof SearchEngineV1alpha1ApiPatchSearchEngine
     */
    readonly jsonPatchInner?: Array<JsonPatchInner>
}

/**
 * Request parameters for updateSearchEngine operation in SearchEngineV1alpha1Api.
 * @export
 * @interface SearchEngineV1alpha1ApiUpdateSearchEngineRequest
 */
export interface SearchEngineV1alpha1ApiUpdateSearchEngineRequest {
    /**
     * Name of searchengine
     * @type {string}
     * @memberof SearchEngineV1alpha1ApiUpdateSearchEngine
     */
    readonly name: string

    /**
     * Updated searchengine
     * @type {SearchEngine}
     * @memberof SearchEngineV1alpha1ApiUpdateSearchEngine
     */
    readonly searchEngine?: SearchEngine
}

/**
 * SearchEngineV1alpha1Api - object-oriented interface
 * @export
 * @class SearchEngineV1alpha1Api
 * @extends {BaseAPI}
 */
export class SearchEngineV1alpha1Api extends BaseAPI {
    /**
     * Create SearchEngine
     * @param {SearchEngineV1alpha1ApiCreateSearchEngineRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SearchEngineV1alpha1Api
     */
    public createSearchEngine(requestParameters: SearchEngineV1alpha1ApiCreateSearchEngineRequest = {}, options?: RawAxiosRequestConfig) {
        return SearchEngineV1alpha1ApiFp(this.configuration).createSearchEngine(requestParameters.searchEngine, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Delete SearchEngine
     * @param {SearchEngineV1alpha1ApiDeleteSearchEngineRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SearchEngineV1alpha1Api
     */
    public deleteSearchEngine(requestParameters: SearchEngineV1alpha1ApiDeleteSearchEngineRequest, options?: RawAxiosRequestConfig) {
        return SearchEngineV1alpha1ApiFp(this.configuration).deleteSearchEngine(requestParameters.name, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Get SearchEngine
     * @param {SearchEngineV1alpha1ApiGetSearchEngineRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SearchEngineV1alpha1Api
     */
    public getSearchEngine(requestParameters: SearchEngineV1alpha1ApiGetSearchEngineRequest, options?: RawAxiosRequestConfig) {
        return SearchEngineV1alpha1ApiFp(this.configuration).getSearchEngine(requestParameters.name, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * List SearchEngine
     * @param {SearchEngineV1alpha1ApiListSearchEngineRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SearchEngineV1alpha1Api
     */
    public listSearchEngine(requestParameters: SearchEngineV1alpha1ApiListSearchEngineRequest = {}, options?: RawAxiosRequestConfig) {
        return SearchEngineV1alpha1ApiFp(this.configuration).listSearchEngine(requestParameters.page, requestParameters.size, requestParameters.labelSelector, requestParameters.fieldSelector, requestParameters.sort, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Patch SearchEngine
     * @param {SearchEngineV1alpha1ApiPatchSearchEngineRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SearchEngineV1alpha1Api
     */
    public patchSearchEngine(requestParameters: SearchEngineV1alpha1ApiPatchSearchEngineRequest, options?: RawAxiosRequestConfig) {
        return SearchEngineV1alpha1ApiFp(this.configuration).patchSearchEngine(requestParameters.name, requestParameters.jsonPatchInner, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Update SearchEngine
     * @param {SearchEngineV1alpha1ApiUpdateSearchEngineRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SearchEngineV1alpha1Api
     */
    public updateSearchEngine(requestParameters: SearchEngineV1alpha1ApiUpdateSearchEngineRequest, options?: RawAxiosRequestConfig) {
        return SearchEngineV1alpha1ApiFp(this.configuration).updateSearchEngine(requestParameters.name, requestParameters.searchEngine, options).then((request) => request(this.axios, this.basePath));
    }
}

