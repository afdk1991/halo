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


// May contain unused imports in some cases
// @ts-ignore
import { Metadata } from './metadata';
// May contain unused imports in some cases
// @ts-ignore
import { UserConnectionSpec } from './user-connection-spec';

/**
 * 
 * @export
 * @interface UserConnection
 */
export interface UserConnection {
    /**
     * 
     * @type {string}
     * @memberof UserConnection
     */
    'apiVersion': string;
    /**
     * 
     * @type {string}
     * @memberof UserConnection
     */
    'kind': string;
    /**
     * 
     * @type {Metadata}
     * @memberof UserConnection
     */
    'metadata': Metadata;
    /**
     * 
     * @type {UserConnectionSpec}
     * @memberof UserConnection
     */
    'spec': UserConnectionSpec;
}

