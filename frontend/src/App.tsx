import { Authenticated, GitHubBanner, Refine } from "@refinedev/core";
import { DevtoolsPanel, DevtoolsProvider } from "@refinedev/devtools";
import { RefineKbar, RefineKbarProvider } from "@refinedev/kbar";

import {
  ErrorComponent,
  ThemedLayoutV2,
  ThemedSiderV2,
  useNotificationProvider,
} from "@refinedev/antd";
import "@refinedev/antd/dist/reset.css";

import nestjsxCrudDataProvider from "@refinedev/nestjsx-crud";
import routerBindings, {
  CatchAllNavigate,
  DocumentTitleHandler,
  NavigateToResource,
  UnsavedChangesNotifier,
} from "@refinedev/react-router";
import { App as AntdApp } from "antd";
import { BrowserRouter, Outlet, Route, Routes } from "react-router";
import { authProvider } from "./authProvider";
import { Header } from "./components/header";
import { ColorModeContextProvider } from "./contexts/color-mode";
import {
  BlogPostCreate,
  BlogPostEdit,
  BlogPostList,
  BlogPostShow,
} from "./pages/blog-posts";
import {
  CategoryCreate,
  CategoryEdit,
  CategoryList,
  CategoryShow,
} from "./pages/categories";
import { ForgotPassword } from "./pages/forgotPassword";
import { Login } from "./pages/login";
import { Register } from "./pages/register";
import { LocationCreate, LocationEdit, LocationList, LocationShow } from "./pages/locations";
import { VenderCreate, VenderEdit, VenderList, VenderShow } from "./pages/venders";
import { CompanyCreate, CompanyEdit, CompanyList, CompanyShow } from "./pages/companies";
import { PurchaseOrderCreate, PurchaseOrderEdit, PurchaseOrderList, PurchaseOrderShow } from "./pages/purchase-orders";
import { AssetCreate, AssetEdit, AssetList, AssetShow } from "./pages/asset";

function App() {
  const API_URL = "http://localhost:3000";
  const dataProvider = nestjsxCrudDataProvider(API_URL);

  return (
    <BrowserRouter>
      
      <RefineKbarProvider>
        <ColorModeContextProvider>
          <AntdApp>
            <DevtoolsProvider>
              <Refine
                dataProvider={dataProvider}
                notificationProvider={useNotificationProvider}
                routerProvider={routerBindings}
                authProvider={authProvider}
                resources={[
                  /*
                  {
                    name: "blog_posts",
                    list: "/blog-posts",
                    create: "/blog-posts/create",
                    edit: "/blog-posts/edit/:id",
                    show: "/blog-posts/show/:id",
                    meta: {
                      canDelete: true,
                    },
                  },
                  {
                    name: "categories",
                    list: "/categories",
                    create: "/categories/create",
                    edit: "/categories/edit/:id",
                    show: "/categories/show/:id",
                    meta: {
                      canDelete: true,
                    },
                  },
                  */
                  {
                    name: "venders",
                    list: "/venders",
                    create: "/venders/create",
                    edit: "/venders/edit/:id",
                    show: "/venders/show/:id",
                    meta: {
                      canDelete: true,
                    },
                  },
                  {
                    name: "companies",
                    list: "/companies",
                    create: "/companies/create",
                    edit: "/companies/edit/:id",
                    show: "/companies/show/:id",
                    meta: {
                      canDelete: true,
                    },
                  },
                  {
                    name: "locations",
                    list: "/locations",
                    create: "/locations/create",
                    edit: "/locations/edit/:id",
                    show: "/locations/show/:id",
                    meta: {
                      canDelete: true,
                    },
                  },
                  {
                    name: "purchase-orders",
                    list: "/purchase-orders",
                    create: "/purchase-orders/create",
                    edit: "/purchase-orders/edit/:id",
                    show: "/purchase-orders/show/:id",
                    meta: {
                      canDelete: true,
                    },
                  },
                  {
                    name: "assets",
                    list: "/assets",
                    create: "/assets/create",
                    edit: "/assets/edit/:id",
                    show: "/assets/show/:id",
                    meta: {
                      canDelete: true,
                    },
                  }
                ]}
                options={{
                  syncWithLocation: true,
                  warnWhenUnsavedChanges: true,
                  useNewQueryKeys: true,
                  projectId: "AreP8u-EBfXw6-vlPzTl",
                }}
              >
                <Routes>
                  <Route
                    element={
                      <Authenticated
                        key="authenticated-inner"
                        fallback={<CatchAllNavigate to="/login" />}
                      >
                        <ThemedLayoutV2
                          Header={Header}
                          Sider={(props) => <ThemedSiderV2 {...props} fixed />}
                        >
                          <Outlet />
                        </ThemedLayoutV2>
                      </Authenticated>
                    }
                  >
                    <Route
                      index
                      element={<NavigateToResource resource="blog_posts" />}
                    />
                    <Route path="/blog-posts">
                      <Route index element={<BlogPostList />} />
                      <Route path="create" element={<BlogPostCreate />} />
                      <Route path="edit/:id" element={<BlogPostEdit />} />
                      <Route path="show/:id" element={<BlogPostShow />} />
                    </Route>
                    <Route path="/categories">
                      <Route index element={<CategoryList />} />
                      <Route path="create" element={<CategoryCreate />} />
                      <Route path="edit/:id" element={<CategoryEdit />} />
                      <Route path="show/:id" element={<CategoryShow />} />
                    </Route>
                    <Route path="/venders">
                      <Route index element={<VenderList />} />
                      <Route path="create" element={<VenderCreate />} />
                      <Route path="edit/:id" element={<VenderEdit />} />
                      <Route path="show/:id" element={<VenderShow />} />
                    </Route>
                    <Route path="/companies">
                      <Route index element={<CompanyList />} />
                      <Route path="create" element={<CompanyCreate />} />
                      <Route path="edit/:id" element={<CompanyEdit />} />
                      <Route path="show/:id" element={<CompanyShow />} />
                    </Route>
                    <Route path="/locations">
                      <Route index element={<LocationList />} />
                      <Route path="create" element={<LocationCreate />} />
                      <Route path="edit/:id" element={<LocationEdit />} />
                      <Route path="show/:id" element={<LocationShow />} />
                    </Route>
                    <Route path="/purchase-orders">
                      <Route index element={<PurchaseOrderList />} />
                      <Route path="create" element={<PurchaseOrderCreate />} />
                      <Route path="edit/:id" element={<PurchaseOrderEdit />} />
                      <Route path="show/:id" element={<PurchaseOrderShow />} />
                    </Route>
                    <Route path="/assets">
                      <Route index element={<AssetList />} />
                      <Route path="create" element={<AssetCreate />} />
                      <Route path="edit/:id" element={<AssetEdit />} />
                      <Route path="show/:id" element={<AssetShow />} />
                    </Route>
                    <Route path="*" element={<ErrorComponent />} />
                  </Route>
                  <Route
                    element={
                      <Authenticated
                        key="authenticated-outer"
                        fallback={<Outlet />}
                      >
                        <NavigateToResource />
                      </Authenticated>
                    }
                  >
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route
                      path="/forgot-password"
                      element={<ForgotPassword />}
                    />
                  </Route>
                </Routes>

                <RefineKbar />
                <UnsavedChangesNotifier />
                <DocumentTitleHandler />
              </Refine>
            </DevtoolsProvider>
          </AntdApp>
        </ColorModeContextProvider>
      </RefineKbarProvider>
    </BrowserRouter>
  );
}

export default App;
