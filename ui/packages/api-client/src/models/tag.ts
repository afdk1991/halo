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
import { TagSpec } from './tag-spec';
// May contain unused imports in some cases
// @ts-ignore
import { TagStatus } from './tag-status';

/**
 * 
 * @export
 * @interface Tag
 */
export interface Tag {
    /**
     * 
     * @type {string}
     * @memberof Tag
     */
    'apiVersion': string;
    /**
     * 
     * @type {string}
     * @memberof Tag
     */
    'kind': string;
    /**
     * 
     * @type {Metadata}
     * @memberof Tag
     */
    'metadata': Metadata;
    /**
     * 
     * @type {TagSpec}
     * @memberof Tag
     */
    'spec': TagSpec;
    /**
     * 
     * @type {TagStatus}
     * @memberof Tag
     */
    'status'?: TagStatus;
}

