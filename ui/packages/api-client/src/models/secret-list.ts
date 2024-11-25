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
import { Secret } from './secret';

/**
 * 
 * @export
 * @interface SecretList
 */
export interface SecretList {
    /**
     * Indicates whether current page is the first page.
     * @type {boolean}
     * @memberof SecretList
     */
    'first': boolean;
    /**
     * Indicates whether current page has previous page.
     * @type {boolean}
     * @memberof SecretList
     */
    'hasNext': boolean;
    /**
     * Indicates whether current page has previous page.
     * @type {boolean}
     * @memberof SecretList
     */
    'hasPrevious': boolean;
    /**
     * A chunk of items.
     * @type {Array<Secret>}
     * @memberof SecretList
     */
    'items': Array<Secret>;
    /**
     * Indicates whether current page is the last page.
     * @type {boolean}
     * @memberof SecretList
     */
    'last': boolean;
    /**
     * Page number, starts from 1. If not set or equal to 0, it means no pagination.
     * @type {number}
     * @memberof SecretList
     */
    'page': number;
    /**
     * Size of each page. If not set or equal to 0, it means no pagination.
     * @type {number}
     * @memberof SecretList
     */
    'size': number;
    /**
     * Total elements.
     * @type {number}
     * @memberof SecretList
     */
    'total': number;
    /**
     * Indicates total pages.
     * @type {number}
     * @memberof SecretList
     */
    'totalPages': number;
}

