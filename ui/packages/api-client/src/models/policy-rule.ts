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



/**
 * 
 * @export
 * @interface PolicyRule
 */
export interface PolicyRule {
    /**
     * 
     * @type {Array<string>}
     * @memberof PolicyRule
     */
    'apiGroups'?: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof PolicyRule
     */
    'nonResourceURLs'?: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof PolicyRule
     */
    'resourceNames'?: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof PolicyRule
     */
    'resources'?: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof PolicyRule
     */
    'verbs'?: Array<string>;
}
