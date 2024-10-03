import React, { Suspense } from "react";
import { Route, Routes, useLocation, Navigate } from "react-router-dom";
import FeedPage from "./page/feed/FeedPage";
import Sidebar from "./components/layout/Siderbar";

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
    <div className="flex">
      {!isLoginPage && <Sidebar />}
      <main
        className={`flex-1 ${
          !isLoginPage ? "ml-[80px] md:ml-60" : ""
        } p-4 transition-all duration-300`}
      >
        <Suspense fallback={loading}>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/feed" element={<FeedPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/playground" element={<PlaygroundPage />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/favorite" element={<FavoritePage />} />
            <Route path="/shop" element={<ShopPage />} />
            <Route path="/" element={<Navigate to="/feed" replace />} />
            <Route path="*" element={<Navigate to="/feed" replace />} />
          </Routes>
        </Suspense>
      </main>
    </div>
  );
};

export default App;
