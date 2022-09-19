/* eslint-disable */
import type {
  OpenAPIClient,
  Parameters,
  UnknownParamsObject,
  OperationResponse,
  AxiosRequestConfig,
} from 'openapi-client-axios'; 

declare namespace Components {
    namespace Schemas {
        /**
         * LoginTokenResponse
         */
        export interface AccessTokenResponse {
            /**
             * Access Token
             */
            access_token: string;
        }
        /**
         * CredentialsRequest
         */
        export interface CredentialsRequest {
            /**
             * Password
             */
            password: string;
            /**
             * Username
             */
            username: string;
        }
        /**
         * HTTPValidationError
         */
        export interface HTTPValidationError {
            /**
             * Detail
             */
            detail?: /* ValidationError */ ValidationError[];
        }
        /**
         * LoginTokenResponse
         */
        export interface LoginTokenResponse {
            /**
             * Access Token
             */
            access_token: string;
            /**
             * Refresh Token
             */
            refresh_token: string;
            /**
             * Token Type
             */
            token_type: string;
        }
        /**
         * ValidationError
         */
        export interface ValidationError {
            /**
             * Location
             */
            loc: string[];
            /**
             * Message
             */
            msg: string;
            /**
             * Error Type
             */
            type: string;
        }
    }
}
declare namespace Paths {
    namespace HealthCheckHealthcheckGet {
        namespace Responses {
            export type $200 = any;
        }
    }
    namespace Login {
        namespace Parameters {
            /**
             * Bindings
             */
            export type Bindings = any;
        }
        export interface QueryParameters {
            bindings?: /* Bindings */ Parameters.Bindings;
        }
        export type RequestBody = /* CredentialsRequest */ Components.Schemas.CredentialsRequest;
        namespace Responses {
            export type $200 = /* LoginTokenResponse */ Components.Schemas.LoginTokenResponse;
            export interface $401 {
            }
            export type $422 = /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
        }
    }
    namespace OpenapiUIDocsGet {
        namespace Responses {
            export type $200 = any;
        }
    }
    namespace RefreshToken {
        namespace Parameters {
            /**
             * Bindings
             */
            export type Bindings = any;
        }
        export interface QueryParameters {
            bindings?: /* Bindings */ Parameters.Bindings;
        }
        export interface RequestBody {
            /**
             * refresh token
             */
            refresh_token: string;
        }
        namespace Responses {
            export type $200 = /* LoginTokenResponse */ Components.Schemas.AccessTokenResponse;
            export interface $401 {
            }
            export type $422 = /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
        }
    }
}

export interface OperationMethods {
  /**
   * Openapi_UI_docs_get - Openapi Ui
   */
  'Openapi_UI_docs_get'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.OpenapiUIDocsGet.Responses.$200>
  /**
   * Health_check_healthcheck__get - Health Check
   * 
   * Check health of the service.
   */
  'Health_check_healthcheck__get'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.HealthCheckHealthcheckGet.Responses.$200>
  /**
   * login - Login
   */
  'login'(
    parameters?: Parameters<Paths.Login.QueryParameters> | null,
    data?: Paths.Login.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.Login.Responses.$200>
  /**
   * refreshToken - refresh token
   */
  'refreshToken'(
    parameters?: Parameters<Paths.RefreshToken.QueryParameters> | null,
    data?: Paths.RefreshToken.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.RefreshToken.Responses.$200>
}

export interface PathsDictionary {
  ['/docs']: {
    /**
     * Openapi_UI_docs_get - Openapi Ui
     */
    'get'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.OpenapiUIDocsGet.Responses.$200>
  }
  ['/healthcheck/']: {
    /**
     * Health_check_healthcheck__get - Health Check
     * 
     * Check health of the service.
     */
    'get'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.HealthCheckHealthcheckGet.Responses.$200>
  }
  ['/v1/login/']: {
    /**
     * login - Login
     */
    'post'(
      parameters?: Parameters<Paths.Login.QueryParameters> | null,
      data?: Paths.Login.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.Login.Responses.$200>
  }
  ['/v1/refreshToken/']: {
    /**
     * refreshToken - refresh token
     */
    'post'(
      parameters?: Parameters<Paths.RefreshToken.QueryParameters> | null,
      data?: Paths.RefreshToken.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.RefreshToken.Responses.$200>
  }
}

export type Client = OpenAPIClient<OperationMethods, PathsDictionary>
