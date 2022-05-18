import { HeaderOnly } from "~/components/Layout";
import Following from "~/pages/Following";
import Home from "~/pages/Home";
import Search from "~/pages/Search";
import Upload from "~/pages/Upload";

// route is not login
const publicRoute = [
  { path: "/", component: Home },
  { path: "/following", component: Following },
  { path: "/upload", component: Upload, layout: HeaderOnly },
  { path: "/search", component: Search, layout: null },
];

const privateRoute = [];

export { publicRoute, privateRoute };
