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
import { ConfigMap } from '../models';
// @ts-ignore
import { ConfigMapList } from '../models';
// @ts-ignore
import { JsonPatchInner } from '../models';
/**
 * ConfigMapV1alpha1Api - axios parameter creator
 * @export
 */
export const ConfigMapV1alpha1ApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Create ConfigMap
         * @param {ConfigMap} [configMap] Fresh configmap
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createConfigMap: async (configMap?: ConfigMap, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/v1alpha1/configmaps`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(configMap, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Delete ConfigMap
         * @param {string} name Name of configmap
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteConfigMap: async (name: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'name' is not null or undefined
            assertParamExists('deleteConfigMap', 'name', name)
            const localVarPath = `/api/v1alpha1/configmaps/{name}`
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
         * Get ConfigMap
         * @param {string} name Name of configmap
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getConfigMap: async (name: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'name' is not null or undefined
            assertParamExists('getConfigMap', 'name', name)
            const localVarPath = `/api/v1alpha1/configmaps/{name}`
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
         * List ConfigMap
         * @param {number} [page] Page number. Default is 0.
         * @param {number} [size] Size number. Default is 0.
         * @param {Array<string>} [labelSelector] Label selector. e.g.: hidden!&#x3D;true
         * @param {Array<string>} [fieldSelector] Field selector. e.g.: metadata.name&#x3D;&#x3D;halo
         * @param {Array<string>} [sort] Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listConfigMap: async (page?: number, size?: number, labelSelector?: Array<string>, fieldSelector?: Array<string>, sort?: Array<string>, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/v1alpha1/configmaps`;
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
         * Patch ConfigMap
         * @param {string} name Name of configmap
         * @param {Array<JsonPatchInner>} [jsonPatchInner] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        patchConfigMap: async (name: string, jsonPatchInner?: Array<JsonPatchInner>, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'name' is not null or undefined
            assertParamExists('patchConfigMap', 'name', name)
            const localVarPath = `/api/v1alpha1/configmaps/{name}`
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
         * Update ConfigMap
         * @param {string} name Name of configmap
         * @param {ConfigMap} [configMap] Updated configmap
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateConfigMap: async (name: string, configMap?: ConfigMap, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'name' is not null or undefined
            assertParamExists('updateConfigMap', 'name', name)
            const localVarPath = `/api/v1alpha1/configmaps/{name}`
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
            localVarRequestOptions.data = serializeDataIfNeeded(configMap, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * ConfigMapV1alpha1Api - functional programming interface
 * @export
 */
export const ConfigMapV1alpha1ApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = ConfigMapV1alpha1ApiAxiosParamCreator(configuration)
    return {
        /**
         * Create ConfigMap
         * @param {ConfigMap} [configMap] Fresh configmap
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createConfigMap(configMap?: ConfigMap, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ConfigMap>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createConfigMap(configMap, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ConfigMapV1alpha1Api.createConfigMap']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Delete ConfigMap
         * @param {string} name Name of configmap
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteConfigMap(name: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteConfigMap(name, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ConfigMapV1alpha1Api.deleteConfigMap']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Get ConfigMap
         * @param {string} name Name of configmap
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getConfigMap(name: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ConfigMap>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getConfigMap(name, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ConfigMapV1alpha1Api.getConfigMap']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * List ConfigMap
         * @param {number} [page] Page number. Default is 0.
         * @param {number} [size] Size number. Default is 0.
         * @param {Array<string>} [labelSelector] Label selector. e.g.: hidden!&#x3D;true
         * @param {Array<string>} [fieldSelector] Field selector. e.g.: metadata.name&#x3D;&#x3D;halo
         * @param {Array<string>} [sort] Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async listConfigMap(page?: number, size?: number, labelSelector?: Array<string>, fieldSelector?: Array<string>, sort?: Array<string>, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ConfigMapList>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.listConfigMap(page, size, labelSelector, fieldSelector, sort, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ConfigMapV1alpha1Api.listConfigMap']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Patch ConfigMap
         * @param {string} name Name of configmap
         * @param {Array<JsonPatchInner>} [jsonPatchInner] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async patchConfigMap(name: string, jsonPatchInner?: Array<JsonPatchInner>, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ConfigMap>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.patchConfigMap(name, jsonPatchInner, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ConfigMapV1alpha1Api.patchConfigMap']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Update ConfigMap
         * @param {string} name Name of configmap
         * @param {ConfigMap} [configMap] Updated configmap
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateConfigMap(name: string, configMap?: ConfigMap, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ConfigMap>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateConfigMap(name, configMap, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ConfigMapV1alpha1Api.updateConfigMap']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * ConfigMapV1alpha1Api - factory interface
 * @export
 */
export const ConfigMapV1alpha1ApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = ConfigMapV1alpha1ApiFp(configuration)
    return {
        /**
         * Create ConfigMap
         * @param {ConfigMapV1alpha1ApiCreateConfigMapRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createConfigMap(requestParameters: ConfigMapV1alpha1ApiCreateConfigMapRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<ConfigMap> {
            return localVarFp.createConfigMap(requestParameters.configMap, options).then((request) => request(axios, basePath));
        },
        /**
         * Delete ConfigMap
         * @param {ConfigMapV1alpha1ApiDeleteConfigMapRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteConfigMap(requestParameters: ConfigMapV1alpha1ApiDeleteConfigMapRequest, options?: RawAxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.deleteConfigMap(requestParameters.name, options).then((request) => request(axios, basePath));
        },
        /**
         * Get ConfigMap
         * @param {ConfigMapV1alpha1ApiGetConfigMapRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getConfigMap(requestParameters: ConfigMapV1alpha1ApiGetConfigMapRequest, options?: RawAxiosRequestConfig): AxiosPromise<ConfigMap> {
            return localVarFp.getConfigMap(requestParameters.name, options).then((request) => request(axios, basePath));
        },
        /**
         * List ConfigMap
         * @param {ConfigMapV1alpha1ApiListConfigMapRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listConfigMap(requestParameters: ConfigMapV1alpha1ApiListConfigMapRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<ConfigMapList> {
            return localVarFp.listConfigMap(requestParameters.page, requestParameters.size, requestParameters.labelSelector, requestParameters.fieldSelector, requestParameters.sort, options).then((request) => request(axios, basePath));
        },
        /**
         * Patch ConfigMap
         * @param {ConfigMapV1alpha1ApiPatchConfigMapRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        patchConfigMap(requestParameters: ConfigMapV1alpha1ApiPatchConfigMapRequest, options?: RawAxiosRequestConfig): AxiosPromise<ConfigMap> {
            return localVarFp.patchConfigMap(requestParameters.name, requestParameters.jsonPatchInner, options).then((request) => request(axios, basePath));
        },
        /**
         * Update ConfigMap
         * @param {ConfigMapV1alpha1ApiUpdateConfigMapRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateConfigMap(requestParameters: ConfigMapV1alpha1ApiUpdateConfigMapRequest, options?: RawAxiosRequestConfig): AxiosPromise<ConfigMap> {
            return localVarFp.updateConfigMap(requestParameters.name, requestParameters.configMap, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for createConfigMap operation in ConfigMapV1alpha1Api.
 * @export
 * @interface ConfigMapV1alpha1ApiCreateConfigMapRequest
 */
export interface ConfigMapV1alpha1ApiCreateConfigMapRequest {
    /**
     * Fresh configmap
     * @type {ConfigMap}
     * @memberof ConfigMapV1alpha1ApiCreateConfigMap
     */
    readonly configMap?: ConfigMap
}

/**
 * Request parameters for deleteConfigMap operation in ConfigMapV1alpha1Api.
 * @export
 * @interface ConfigMapV1alpha1ApiDeleteConfigMapRequest
 */
export interface ConfigMapV1alpha1ApiDeleteConfigMapRequest {
    /**
     * Name of configmap
     * @type {string}
     * @memberof ConfigMapV1alpha1ApiDeleteConfigMap
     */
    readonly name: string
}

/**
 * Request parameters for getConfigMap operation in ConfigMapV1alpha1Api.
 * @export
 * @interface ConfigMapV1alpha1ApiGetConfigMapRequest
 */
export interface ConfigMapV1alpha1ApiGetConfigMapRequest {
    /**
     * Name of configmap
     * @type {string}
     * @memberof ConfigMapV1alpha1ApiGetConfigMap
     */
    readonly name: string
}

/**
 * Request parameters for listConfigMap operation in ConfigMapV1alpha1Api.
 * @export
 * @interface ConfigMapV1alpha1ApiListConfigMapRequest
 */
export interface ConfigMapV1alpha1ApiListConfigMapRequest {
    /**
     * Page number. Default is 0.
     * @type {number}
     * @memberof ConfigMapV1alpha1ApiListConfigMap
     */
    readonly page?: number

    /**
     * Size number. Default is 0.
     * @type {number}
     * @memberof ConfigMapV1alpha1ApiListConfigMap
     */
    readonly size?: number

    /**
     * Label selector. e.g.: hidden!&#x3D;true
     * @type {Array<string>}
     * @memberof ConfigMapV1alpha1ApiListConfigMap
     */
    readonly labelSelector?: Array<string>

    /**
     * Field selector. e.g.: metadata.name&#x3D;&#x3D;halo
     * @type {Array<string>}
     * @memberof ConfigMapV1alpha1ApiListConfigMap
     */
    readonly fieldSelector?: Array<string>

    /**
     * Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
     * @type {Array<string>}
     * @memberof ConfigMapV1alpha1ApiListConfigMap
     */
    readonly sort?: Array<string>
}

/**
 * Request parameters for patchConfigMap operation in ConfigMapV1alpha1Api.
 * @export
 * @interface ConfigMapV1alpha1ApiPatchConfigMapRequest
 */
export interface ConfigMapV1alpha1ApiPatchConfigMapRequest {
    /**
     * Name of configmap
     * @type {string}
     * @memberof ConfigMapV1alpha1ApiPatchConfigMap
     */
    readonly name: string

    /**
     * 
     * @type {Array<JsonPatchInner>}
     * @memberof ConfigMapV1alpha1ApiPatchConfigMap
     */
    readonly jsonPatchInner?: Array<JsonPatchInner>
}

/**
 * Request parameters for updateConfigMap operation in ConfigMapV1alpha1Api.
 * @export
 * @interface ConfigMapV1alpha1ApiUpdateConfigMapRequest
 */
export interface ConfigMapV1alpha1ApiUpdateConfigMapRequest {
    /**
     * Name of configmap
     * @type {string}
     * @memberof ConfigMapV1alpha1ApiUpdateConfigMap
     */
    readonly name: string

    /**
     * Updated configmap
     * @type {ConfigMap}
     * @memberof ConfigMapV1alpha1ApiUpdateConfigMap
     */
    readonly configMap?: ConfigMap
}

/**
 * ConfigMapV1alpha1Api - object-oriented interface
 * @export
 * @class ConfigMapV1alpha1Api
 * @extends {BaseAPI}
 */
export class ConfigMapV1alpha1Api extends BaseAPI {
    /**
     * Create ConfigMap
     * @param {ConfigMapV1alpha1ApiCreateConfigMapRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ConfigMapV1alpha1Api
     */
    public createConfigMap(requestParameters: ConfigMapV1alpha1ApiCreateConfigMapRequest = {}, options?: RawAxiosRequestConfig) {
        return ConfigMapV1alpha1ApiFp(this.configuration).createConfigMap(requestParameters.configMap, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Delete ConfigMap
     * @param {ConfigMapV1alpha1ApiDeleteConfigMapRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ConfigMapV1alpha1Api
     */
    public deleteConfigMap(requestParameters: ConfigMapV1alpha1ApiDeleteConfigMapRequest, options?: RawAxiosRequestConfig) {
        return ConfigMapV1alpha1ApiFp(this.configuration).deleteConfigMap(requestParameters.name, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Get ConfigMap
     * @param {ConfigMapV1alpha1ApiGetConfigMapRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ConfigMapV1alpha1Api
     */
    public getConfigMap(requestParameters: ConfigMapV1alpha1ApiGetConfigMapRequest, options?: RawAxiosRequestConfig) {
        return ConfigMapV1alpha1ApiFp(this.configuration).getConfigMap(requestParameters.name, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * List ConfigMap
     * @param {ConfigMapV1alpha1ApiListConfigMapRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ConfigMapV1alpha1Api
     */
    public listConfigMap(requestParameters: ConfigMapV1alpha1ApiListConfigMapRequest = {}, options?: RawAxiosRequestConfig) {
        return ConfigMapV1alpha1ApiFp(this.configuration).listConfigMap(requestParameters.page, requestParameters.size, requestParameters.labelSelector, requestParameters.fieldSelector, requestParameters.sort, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Patch ConfigMap
     * @param {ConfigMapV1alpha1ApiPatchConfigMapRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ConfigMapV1alpha1Api
     */
    public patchConfigMap(requestParameters: ConfigMapV1alpha1ApiPatchConfigMapRequest, options?: RawAxiosRequestConfig) {
        return ConfigMapV1alpha1ApiFp(this.configuration).patchConfigMap(requestParameters.name, requestParameters.jsonPatchInner, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Update ConfigMap
     * @param {ConfigMapV1alpha1ApiUpdateConfigMapRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ConfigMapV1alpha1Api
     */
    public updateConfigMap(requestParameters: ConfigMapV1alpha1ApiUpdateConfigMapRequest, options?: RawAxiosRequestConfig) {
        return ConfigMapV1alpha1ApiFp(this.configuration).updateConfigMap(requestParameters.name, requestParameters.configMap, options).then((request) => request(this.axios, this.basePath));
    }
}
