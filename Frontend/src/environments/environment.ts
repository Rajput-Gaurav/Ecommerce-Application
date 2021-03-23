
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  // Users Login
  USERS_LOGIN: '/userLogin/userLogin',
  // Users
  CREATE_USERS: '/userLogin/create',
  GET_All_USERS: '/userLogin/getUsers',
  GET_USERS_BY_ID: '/userLogin/getUserById/',
  UPDATE_USERS_BY_ID: '/userLogin/updateUserById/',
  DELETE_USERS_BY_ID: '/userLogin/deleteUserById/',
  // SUPPORT:
  CREATE_SUPPORT: '/support/create',
  GET_All_SUPPORT: '/support/getAllSupport',
};

export const BASE_URL = "http://localhost:5000";

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
