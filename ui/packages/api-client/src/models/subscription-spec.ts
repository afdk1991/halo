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


// May contain unused imports in some cases
// @ts-ignore
import { InterestReason } from './interest-reason';
// May contain unused imports in some cases
// @ts-ignore
import { SubscriptionSubscriber } from './subscription-subscriber';

/**
 * 
 * @export
 * @interface SubscriptionSpec
 */
export interface SubscriptionSpec {
    /**
     * Perhaps users need to unsubscribe and interact without receiving notifications again
     * @type {boolean}
     * @memberof SubscriptionSpec
     */
    'disabled'?: boolean;
    /**
     * 
     * @type {InterestReason}
     * @memberof SubscriptionSpec
     */
    'reason': InterestReason;
    /**
     * 
     * @type {SubscriptionSubscriber}
     * @memberof SubscriptionSpec
     */
    'subscriber': SubscriptionSubscriber;
    /**
     * The token to unsubscribe
     * @type {string}
     * @memberof SubscriptionSpec
     */
    'unsubscribeToken': string;
}
