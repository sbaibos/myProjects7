// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  baseUrl  : "http://localhost/websites/api/api",
  delete : "http://localhost/websites/api/delete",
 update:"http://localhost/websites/api/update",
 userUrl  : "http://localhost/websites/api/user_api",
 userDelete : "http://localhost/websites/api/delete_user",
 userUpdate:"http://localhost/websites/api/update_user"
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
