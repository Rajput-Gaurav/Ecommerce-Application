// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  // Admin Login:
  ADMIN_LOGIN: '/adminLogin/adminLogin',
  // Admin adminLogin:
  CREATE_ADMIN_USER: '/adminLogin/create',
  GET_ADMIN_USER: '/adminLogin/getadminLogin',
  GET_ADMIN_USER_BY_ID: '/adminLogin/getUserById/',
  UPDATE_ADMIN_USER_BY_ID: '/adminLogin/updateUserById/',
  DELETE_ADMIN_USER_BY_ID: '/adminLogin/deleteUserById/',
  // User userLogin:
  CREATE_USER: '/userLogin/create',
  GET_USER: '/userLogin/getUsers',
  GET_USER_BY_ID: '/userLogin/getUsersById/',
  UPDATE_USER_BY_ID: '/userLogin/updateUserById/',
  DELETE_USER_BY_ID: '/userLogin/deleteUserById/',
  // Product Categories:
  CREATE_PRODUCT_CATEGORIES: '/productCategories/create',
  GET_All_PRODUCT_CATEGORIES: '/productCategories/getProductCategories',
  GET_PRODUCT_CATEGORIES_BY_ID: '/productCategories/getProductCategoriesById/',
  UPDATE_PRODUCT_CATEGORIES_BY_ID: '/productCategories/updateProductCategories/',
  DELETE_PRODUCT_CATEGORIES_BY_ID: '/productCategories/deleteProductCategories/',
  // Product Details:
  CREATE_PRODUCTS: '/products/create',
  GET_All_PRODUCTS: '/products/getAllProduct',
  GET_PRODUCTS_BY_ID: '/products/getProductById/',
  GET_PRODUCTS_BY_FILTER: '/products/findFilterProduct',
  UPDATE_PRODUCTS_STATUS_BY_ID: '/products/updateProductStatus/',
  UPDATE_PRODUCTS_BY_ID: '/products/updateProductById/',
  DELETE_PRODUCTS_BY_ID: '/products/deleteProductById/',
  // GROCERY:
  CREATE_GROCERY: '/grocery/create',
  GET_All_GROCERY: '/grocery/getAllGrocery',
  GET_GROCERY_BY_ID: '/grocery/getGroceryById/',
  GET_GROCERY_BY_FILTER: '/grocery/findFilterGrocery',
  UPDATE_GROCERY_STATUS_BU_ID: '/grocery/updateGroceryStatus/',
  UPDATE_GROCERY_BY_ID: '/grocery/updateGroceryById/',
  DELETE_GROCERY_BY_ID: '/grocery/deleteGroceryById/',
  // HELP & SUPPORT:
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
