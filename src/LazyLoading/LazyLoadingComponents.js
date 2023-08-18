import { lazy } from "react";

export const Products = lazy(() => import("../Pages/ProductList/ProductsComponent"));
export const ProductDetails = lazy(() => import("../Pages/ProductDetails/ProductDetails"));
export const MyAccount = lazy(() => import("../Pages/Account/MyAccountTabs/MyAccount"));
export const ContactUs = lazy(() => import("../Pages/Contact-us/ContactUs"));
export const Blog = lazy(() => import("../Pages/Blogs/Blog"));
export const Faq = lazy(() => import("../Pages/FAQ/Faq"));
export const BlogDetails = lazy(() => import("../Pages/Blogs/BlogDetails"));
export const RegistrationForm = lazy(() => import("../Pages/Profile/RegisterForm"));
export const CartPage = lazy(() => import("../Pages/Cart/CartPage"));
export const AboutUs = lazy(() => import("../Pages/About-us/AboutUs"));
export const UserLogin = lazy(() => import('../Pages/Profile/UserLogin'))
