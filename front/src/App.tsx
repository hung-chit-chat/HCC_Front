import React, { Suspense } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Layout from "./components/layout/defaultLayout";
import { Outlet } from "react-router-dom";
import PublicRoute from "./utility/PublicRoute";
import PrivateRoute from "./utility/privateRoute";

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
);

const Login = React.lazy(() => import("./page/login/LoginPage"));
const ProfilePage = React.lazy(() => import("./page/profile/ProfilePage"));
const PlaygroundPage = React.lazy(
  () => import("./page/playground/PlaygroundPage")
);
const SearchPage = React.lazy(() => import("./page/search/SearchPage"));
const FavoritePage = React.lazy(() => import("./page/favoriate/FavoritePage"));
const Signup = React.lazy(() => import("./page/signup/SignupPage"));
const Shop = React.lazy(() => import("./page/shop/ShopPage"));
const ShopItem = React.lazy(() => import("./page/shop/ShopItemPage"));
const FeedPage = React.lazy(() => import("./page/feed/FeedPage"));
const Auction = React.lazy(() => import("./page/auction/AuctionPage"));
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
  // const isLoginPage = location.pathname === "/login";

  // if (!session && !isLoginPage) {
  //   return <Navigate to="/login" replace />;
  // }

  // if (isLoginPage && session) {
  //   return <Navigate to="/feed" replace />;
  // }

  return (
    <Suspense fallback={loading}>
      <Routes>
        //로그인 필요 x
        <Route element={<PublicRoute session={session} />}>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Route>
        //로그인 필요 o
        <Route element={<PrivateRoute session={session} />}></Route>
        //일반 페이지
        <Route path="/" element={<Navigate to="/feed" replace />} />
        {/* <Route path="/signup" element={<Signup />} /> */}
        <Route path="*" element={<NotFound />} />
        <Route path="/*" element={<ShopLayout />}>
          <Route path="feed" element={<FeedPage />} />
          <Route path="shop" element={<Shop />} />
          <Route path="playground" element={<PlaygroundPage />} />
          <Route path="search" element={<SearchPage />} />
          <Route path="search" element={<SearchPage />} />
          <Route path="favorite" element={<FavoritePage />} />
          <Route path="profile" element={<ProfilePage />} />
          <Route path="shop/:id" element={<ShopItem />} />
          <Route path="auction" element={<Auction />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default App;
