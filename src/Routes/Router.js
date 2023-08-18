import React, { useEffect, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import {
  AboutUs,
  ContactUs,
  Blog,
  Faq,
  BlogDetails,
  RegistrationForm,
  CartPage,
  Products,
  ProductDetails,
  UserLogin,
} from "../LazyLoading/LazyLoadingComponents";
import HomeMain from "../Pages/HomePage/HomeMain";
import SpinnerLoader from "../Components/SmallComponents/Spinner";
import AccountDetails from "../Pages/Account/Account";
import TrackingPage from "../Pages/Account/OrderTracking/StepperComponent";
import { Category } from "../Pages/Categories/Categories";

//
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 1);
  }, [pathname]);

  return null;
};

const RoutesConfig = () => {
  return (
    <Router >
      <ScrollToTop />
      <Suspense fallback={<SpinnerLoader />}>
        <Routes>
          <Route
            path='/'
            element={<HomeMain />}
          />
          <Route
            exact
            path='/category'
            element={<Category />}
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
          {/*  */}
          <Route
            path='/account/details'
            element={<AccountDetails />}
          />
          <Route
            path='/account/myorders'
            element={<AccountDetails />}
          />
          <Route
            path='/account/mywishlist'
            element={<AccountDetails />}
          />
          <Route
            path='/account/myaddress'
            element={<AccountDetails />}
          />
          
          <Route
            path='/myaccount'
            element={<AccountDetails />}
          />
          {/*  */}
          <Route
            path="/mycart"
            element = {<CartPage />}
          />
          <Route
            path="/mycart/order-tracking"
            element = {<TrackingPage />}
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
            path='/registration'
            element={<RegistrationForm />}
          />
          <Route
            path="/userLogin"
            element = {<UserLogin/>}
          />

          <Route
            path='/cart'
            element={<CartPage />}
          />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default RoutesConfig;
