// @flow
export const ROOT_ROUTE = '/';
export const HOME_PAGE_ROUTE = '/home';
export const ABOUT_PAGE_ROUTE = '/about';
export const FAQ_PAGE_ROUTE = '/faq';
export const NOT_FOUND_PAGE_ROUTE = '/404';

export const helloEndpointRoute = (num: ?number) =>
  `/ajax/hello/${num || ':num'}`;
