import * as React from "react";
import { Breadcrumbs, LargeScreenNavbar } from "../../Components/SharedComponents";
import { TabList, Tabs, Tab, TabPanels, TabPanel } from "@chakra-ui/react";
import "./Account.css";
import {
  BusinessIcon,
  FavoriteBorderIcon,
  KeyOffIcon,
  ManageAccountsIcon,
  MarkunreadMailboxIcon,
  PowerSettingsNewIcon,
} from "../../Components/SharedIcons";
import MyOrderComponent from "./MyOrders/MyOrderComponent";
import AccountInformation from "./AccountInformation/AccountInformation";
import Wishlist from "../Account/Wishlist/Wishlist";
import Addressbook from "./AddressBook/Addressbook";
import Password from "./Password/Password";
import { useLocation } from "react-router-dom";

const accountTabs = [
  {
    id: 1,
    title: "Account Details",
    icon: <ManageAccountsIcon />,
    path: "/account/details",
  },
  {
    id: 2,
    title: "My Orders",
    icon: <MarkunreadMailboxIcon />,
    path: "/account/myorders",
  },
  {
    id: 3,
    title: "Wishlist",
    icon: <FavoriteBorderIcon />,
    path: "/account/mywishlist",
  },
  {
    id: 4,
    title: "Manage Address",
    icon: <BusinessIcon />,
    path: "/account/myaddress",
  },
  {
    id: 5,
    title: "Change Password",
    icon: <KeyOffIcon />,
    path: "/account/changepassword",
  },
  {
    id: 6,
    title: "Logout",
    icon: <PowerSettingsNewIcon />,
    path: "/account/logout",
  },
];

export default function AccountDetails() {
  const location = useLocation();
  const [activeTab, setActiveTab] = React.useState(0);
  const [name, setName] = React.useState(location.pathname);

  // Use useEffect to detect changes in the URL and update the active tab and name accordingly
  React.useEffect(() => {
    const pathname = location.pathname;
    const tabIndex = accountTabs.findIndex((account) => account.path === pathname);

    if (tabIndex !== -1) {
      setActiveTab(tabIndex);
    }
  }, [location]);

  const handleTabChange = (index, path) => {
    setActiveTab(index);
    setName(path);

    window.history.pushState(null, "", path); // Programmatically update the URL when clicking on a tab
  };

  return (
    <>
      <LargeScreenNavbar />
      <Breadcrumbs name={name} />
      <div className='section-padding common-mt'>
        <Tabs
          className='row '
          index={activeTab}
          onChange={handleTabChange}
        >
          <div className='col-12 col-lg-3'>
            <h2>Hello Roy</h2>
            <TabList className='account-tabs-style'>
              {accountTabs.map((account, index) => (
                <Tab
                  key={index}
                  className={`account-tabs ${activeTab === index ? "active" : ""}`}
                  onClick={() => handleTabChange(index, account.path)}
                >
                  <p>
                    <span>{account.icon}</span>
                    {account.title}
                  </p>
                </Tab>
              ))}
            </TabList>
          </div>
          <div className='col-12 col-lg-9'>
            <TabPanels>
              {accountTabs.map((account, index) => (
                <TabPanel
                  key={index}
                  className='tab-content'
                >
                  {activeTab === index && (
                    <div>
                      {account.title === "My Orders" && <MyOrderComponent />}
                      {account.title === "Account Details" && <AccountInformation />}
                      {account.title === "Wishlist" && <Wishlist />}
                      {account.title === "Manage Address" && <Addressbook />}
                      {account.title === "Change Password" && <Password />}
                    </div>
                  )}
                </TabPanel>
              ))}
            </TabPanels>
          </div>
        </Tabs>
      </div>
    </>
  );
}
