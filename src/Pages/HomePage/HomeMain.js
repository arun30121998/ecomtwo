import React from "react";
import {
  TodayDealsBanner,
  TopOffers,
  ProductsCategorie,
  LargeScreenNavbar,
  HeroSlider,
  RecentProducts,
  Hightlightproducts,
  Footer,
  NavbarTop,
} from "../../Components/SharedComponents";
//

const HomeMain = () => {
  return (
    <>
      <NavbarTop />
      <LargeScreenNavbar />
      <HeroSlider />
      <TopOffers />
      <ProductsCategorie />
      <RecentProducts />
      <TodayDealsBanner />
      <Hightlightproducts />
      <Footer />
    </>
  );
};

export default HomeMain;
