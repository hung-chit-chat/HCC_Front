import React, { Suspense } from "react";
import { Route, Routes, useLocation, Navigate } from "react-router-dom";
import Sidebar from "./components/layout/Siderbar";
import Layout from "./components/layout/defaultLayout";
import { Outlet } from "react-router-dom";

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
);

const Login = React.lazy(() => import("./page/login/login"));
const ProfilePage = React.lazy(() => import("./page/profile/ProfilePage"));
const PlaygroundPage = React.lazy(
  () => import("./page/playground/PlaygroundPage")
);
const SearchPage = React.lazy(() => import("./page/search/SearchPage"));
const FavoritePage = React.lazy(() => import("./page/favoriate/FavoritePage"));
const ShopPage = React.lazy(() => import("./page/shop/ShopPage"));
const Signup = React.lazy(() => import("./page/signup/signup"));
const Shop = React.lazy(() => import("./page/shop/shop"));
const ShopItem = React.lazy(() => import("./page/shop/shopItem"));
const FeedPage = React.lazy(() => import("./page/feed/FeedPage"));
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
  const location = useLocation();
  const session = "a";
  const isLoginPage = location.pathname === "/login";

  if (!session && !isLoginPage) {
    return <Navigate to="/login" replace />;
  }

  if (isLoginPage && session) {
    return <Navigate to="/feed" replace />;
  }

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
    // <div className="flex">
    //   {!isLoginPage && <Sidebar />}
    //   <main
    //     className={`flex-1 ${
    //       !isLoginPage ? "ml-[80px] md:ml-60" : ""
    //     } p-4 transition-all duration-300`}
    //   >
    //     <Suspense fallback={loading}>
    //       <Routes>
    //         <Route path="/login" element={session ? <Login /> : <Login />} />
    //         <Route path="/feed" element={<FeedPage />} />
    //         <Route path="/profile" element={<ProfilePage />} />
    //         <Route path="/playground" element={<PlaygroundPage />} />
    //         <Route path="/search" element={<SearchPage />} />
    //         <Route path="/favorite" element={<FavoritePage />} />
    //         <Route path="/shop" element={<ShopPage />} />
    //         <Route path="/" element={<Navigate to="/feed" replace />} />
    //         <Route path="*" element={<Navigate to="/feed" replace />} />
    //       </Routes>
    //     </Suspense>
    //   </main>
    // </div>
  );
};

export default App;
