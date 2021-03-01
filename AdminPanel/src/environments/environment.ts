// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  // Admin Login:
  ADMIN_LOGIN: '/Users/adminLogin',
  // Admin Users:
  CREATE_ADMIN_USER: '/Users/create',
  GET_ADMIN_USER: '/Users/getUsers',
  GET_ADMIN_USER_BY_ID: '/Users/getUserById/',
  UPDATE_ADMIN_USER_BY_ID: '/Users/updateUserById/',
  DELETE_ADMIN_USER_BY_ID: '/Users/deleteUserById/',
  // Product Categories:
  CREATE_PRODUCT_CATEGORIES: '/productCategories/create',
  GET_All_PRODUCT_CATEGORIES: '/productCategories/getProductCategories',
  GET_PRODUCT_CATEGORIES_BY_ID: '/productCategories/getProductCategoriesById/',
  UPDATE_PRODUCT_CATEGORIES_BY_ID: '/productCategories/updateProductCategories/',
  DELETE_PRODUCT_CATEGORIES_BY_ID: '/productCategories/deleteProductCategories/',
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
