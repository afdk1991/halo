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
import { PostSpec } from './post-spec';
// May contain unused imports in some cases
// @ts-ignore
import { PostStatus } from './post-status';

/**
 * 
 * @export
 * @interface Post
 */
export interface Post {
    /**
     * 
     * @type {string}
     * @memberof Post
     */
    'apiVersion': string;
    /**
     * 
     * @type {string}
     * @memberof Post
     */
    'kind': string;
    /**
     * 
     * @type {Metadata}
     * @memberof Post
     */
    'metadata': Metadata;
    /**
     * 
     * @type {PostSpec}
     * @memberof Post
     */
    'spec': PostSpec;
    /**
     * 
     * @type {PostStatus}
     * @memberof Post
     */
    'status'?: PostStatus;
}

