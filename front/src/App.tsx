import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout/defaultLayout";
import { Outlet } from "react-router-dom";

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
);

const Login = React.lazy(() => import("./page/login/login"));
const Signup = React.lazy(() => import("./page/signup/signup"));
const Shop = React.lazy(() => import("./page/shop/shop"));
const ShopItem = React.lazy(() => import("./page/shop/shopItem"));
const FeedPage = React.lazy(() => import("./page/feed/feed"));
const Auction = React.lazy(() => import("./page/auction/auction"));
const NotFound = React.lazy(() => import("./page/notPage"));

const ShopLayout = () => {
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
};

const App = () => {
  const session = "a";

  return (
    <Suspense fallback={loading}>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={session ? <Login /> : <Login />} />
        <Route path="/feed" element={<FeedPage />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/*" element={<ShopLayout />}>
          <Route path="shop" element={<Shop />} />
          <Route path="shop/:id" element={<ShopItem />} />
          <Route path="auction" element={<Auction />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default App;
