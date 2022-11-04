import { Home } from "./home/home";
import { Login, } from "./components/login";
import { BaseLayout } from "./base/base";
import { Dashboard } from "./dashboard/dashboard";
import { RequireAuth } from "./components/require_auth";
import { PageNotFound } from './404/404';

export { Home, Dashboard, Login, RequireAuth, BaseLayout, PageNotFound };
export default BaseLayout;