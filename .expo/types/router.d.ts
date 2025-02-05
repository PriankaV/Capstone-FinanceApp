/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string | object = string> {
      hrefInputParams: { pathname: Router.RelativePathString, params?: Router.UnknownInputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownInputParams } | { pathname: `/_sitemap`; params?: Router.UnknownInputParams; } | { pathname: `/frontend/app/screens/LoginScreen`; params?: Router.UnknownInputParams; } | { pathname: `/frontend/app/screens/SignupScreen`; params?: Router.UnknownInputParams; };
      hrefOutputParams: { pathname: Router.RelativePathString, params?: Router.UnknownOutputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownOutputParams } | { pathname: `/_sitemap`; params?: Router.UnknownOutputParams; } | { pathname: `/frontend/app/screens/LoginScreen`; params?: Router.UnknownOutputParams; } | { pathname: `/frontend/app/screens/SignupScreen`; params?: Router.UnknownOutputParams; };
      href: Router.RelativePathString | Router.ExternalPathString | `/_sitemap${`?${string}` | `#${string}` | ''}` | `/frontend/app/screens/LoginScreen${`?${string}` | `#${string}` | ''}` | `/frontend/app/screens/SignupScreen${`?${string}` | `#${string}` | ''}` | { pathname: Router.RelativePathString, params?: Router.UnknownInputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownInputParams } | { pathname: `/_sitemap`; params?: Router.UnknownInputParams; } | { pathname: `/frontend/app/screens/LoginScreen`; params?: Router.UnknownInputParams; } | { pathname: `/frontend/app/screens/SignupScreen`; params?: Router.UnknownInputParams; };
    }
  }
}
