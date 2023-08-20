import React, { useState } from "react";
import { Tabs, TabsHeader, TabsBody, Tab, TabPanel } from "@material-tailwind/react";
import StepperComponent from "../OrderTracking/StepperComponent";
import MyOrderComponent from "../MyOrders/MyOrderComponent";
import Wishlist from "../Wishlist/Wishlist";
import AccountInformation from "../AccountInformation/AccountInformation";
import Addressbook from "../AddressBook/Addressbook";
import Password from "../Password/Password";
import "./MyAccount.css";
import { LargeScreenNavbar, Breadcrumbs, NavbarTop, Footer } from "../../../Components/SharedComponents";
import {  useLocation } from "react-router-dom";

const tabPanelData = [
  {
    id: 1,
    value: "myorders",
    title: "My Orders",
    component: <MyOrderComponent />,
  },
  {
    id: 2,
    value: "mywishlist",
    title: "Wishlist",
    component: <Wishlist />,
  },
  {
    id: 3,
    value: "account/information",
    title: "Account Information",
    component: <AccountInformation />,
  },
  {
    id: 4,
    value: "account/manageaddress",
    title: "Manage Address",
    component: <Addressbook />,
  },
  {
    id: 5,
    value: "account/changepassword",
    title: "Change Password",
    component: <Password />,
  },
  {
    id: 6,
    value: "ordertracking",
    title: "Order Tracking",
    component: <StepperComponent />,
  },
];

const MyAccount = () => {
  const { pathname } = useLocation();

  // Find the tab index based on the URL path
  const initialActiveTab = tabPanelData.findIndex((tab) => pathname.includes(tab.value));
  const defaultTabIndex = 0; // Set a default tab index in case the URL does not match any tab

  const [activeTab, setActiveTab] = useState(
    initialActiveTab !== -1 ? tabPanelData[initialActiveTab].value : tabPanelData[defaultTabIndex].value
  );

  const handleTabChange = (value) => {
    setActiveTab(value);
  };

  return (
    <>
      <NavbarTop />
      <LargeScreenNavbar />
      <Breadcrumbs name='My Account' />
      <MyAccountTabs activeTab={activeTab} handleTabChange={handleTabChange} />
      <Footer />
    </>
  );
};

const MyAccountTabs = ({ activeTab, handleTabChange }) => {
  return (
    <>
      <div className='section-padding common-mt'>
        <Tabs value={activeTab} orientation='vertical' onChange={handleTabChange} className='row p-0'>
          <div className='col-sm-12 col-lg-4 col-md-4'>
            <TabsHeader className=' tabs-header rounded-none tabs-bg'>
              {tabPanelData.map((tabPanel) => (
                <Tab
                  key={tabPanel.id}
                  value={tabPanel.value}
                  className='py-3 text-black border-b-2 rounded-none '
                >
                  {tabPanel.title}
                </Tab>
              ))}
            </TabsHeader>
          </div>
          <div className=' mt-0 col-sm-12 m-auto col-lg-8 col-md-8'>
            <TabsBody>
              {tabPanelData.map((tabPanel) => (
                <TabPanel
                  key={tabPanel.id}
                  value={tabPanel.value}
                  className='p-0  m-0 rounded-none'
                >
                  {tabPanel.component}
                </TabPanel>
              ))}
            </TabsBody>
          </div>
        </Tabs>
      </div>
    </>
  );
};

export default MyAccount;
