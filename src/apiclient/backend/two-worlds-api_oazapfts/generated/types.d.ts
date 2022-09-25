/* eslint-disable */
/**
 * Two Worlds service API
 * 0.0.1
 * DO NOT MODIFY - This file has been generated using oazapfts.
 * See https://www.npmjs.com/package/oazapfts
 */
import * as Oazapfts from "oazapfts/lib/runtime";
import * as QS from "oazapfts/lib/runtime/query";
export const defaults: Oazapfts.RequestOpts = {
    baseUrl: "/",
};
const oazapfts = Oazapfts.runtime(defaults);
export const servers = {};
export type CredentialsRequest = {
    password: string;
    username: string;
};
export type LoginTokenResponse = {
    access_token: string;
    refresh_token: string;
    token_type: string;
};
export type ValidationError = {
    loc: string[];
    msg: string;
    "type": string;
};
export type HttpValidationError = {
    detail?: ValidationError[];
};
export type LoginTokenResponse2 = {
    access_token: string;
};
/**
 * Openapi Ui
 */
export function openapiUiDocsGet(opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: any;
    }>("/docs", {
        ...opts
    });
}
/**
 * Health Check
 */
export function healthCheckHealthcheckGet(opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: any;
    }>("/healthcheck/", {
        ...opts
    });
}
/**
 * Login
 */
export function login(credentialsRequest: CredentialsRequest, { bindings }: {
    bindings?: any;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: LoginTokenResponse;
    } | {
        status: 401;
    } | {
        status: 422;
        data: HttpValidationError;
    }>(`/v1/login/${QS.query(QS.explode({
        bindings
    }))}`, oazapfts.json({
        ...opts,
        method: "POST",
        body: credentialsRequest
    }));
}
/**
 * refresh token
 */
export function refreshToken(body: {
    refresh_token: string;
}, { bindings }: {
    bindings?: any;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: LoginTokenResponse2 | null;
    } | {
        status: 401;
    } | {
        status: 422;
        data: HttpValidationError;
    }>(`/v1/refreshToken/${QS.query(QS.explode({
        bindings
    }))}`, oazapfts.json({
        ...opts,
        method: "POST",
        body
    }));
}

