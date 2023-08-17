import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Products from "../Pages/ProductList/ProductsComponent";
import HomeMain from "../Pages/HomePage/HomeMain";
import MyAccount from "../Pages/MyAccount/MyAccountTabs/MyAccount";
import ProductDetails from "../Pages/ProductDetails/ProductDetails";
import Login from "../Pages/Profile/Login";
import AboutUs from "../Pages/About-us/AboutUs";
import ContactUs from "../Pages/Contact-us/ContactUs";
import Blog from "../Pages/Blogs/Blog";
import Faq from "../Pages/FAQ/Faq";
import BlogDetails from "../Pages/Blogs/BlogDetails";
import ForgetPassword from "../Pages/Profile/ForgetPassword";
import Registration from "../Pages/Profile/Registration";
import CartPage from "../Pages/Cart/CartPage";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 1);
  }, [pathname]);

  return null;
};

const RoutesConfig = () => {
  return (
    <Router>
      <ScrollToTop />

      <Routes>
        <Route
          path='/'
          element={<HomeMain />}
        />
        <Route
          exact
          path='/productlist'
          element={<Products />}
        />
        <Route
          path='/productList/:category'
          element={<Products />}
        />{" "}
        <Route
          path='/productList/:category/:productId'
          element={<ProductDetails />}
        />
        <Route
          path='/myaccount'
          element={<MyAccount />}
        />
        <Route
          path='/login'
          element={<Login />}
        />
        <Route
          path='/aboutus'
          element={<AboutUs />}
        />
        <Route
          path='/contactus'
          element={<ContactUs />}
        />
        <Route
          path='/blog'
          element={<Blog />}
        />
        <Route
          path='/blog/:id'
          element={<BlogDetails />}
        />
        <Route
          path='/faq'
          element={<Faq />}
        />
        <Route
          path='/login'
          element={<Login />}
        />
        <Route
          path='/forgetPassword'
          element={<ForgetPassword />}
        />
        <Route
          path='/registration'
          element={<Registration />}
        />
        <Route
          path='/cart'
          element={<CartPage />}
        />
      </Routes>
    </Router>
  );
};

export default RoutesConfig;
