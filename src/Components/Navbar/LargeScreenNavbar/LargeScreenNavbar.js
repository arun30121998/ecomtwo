import Logo from "../../../images/logo/logo.png";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import * as React from "react";
import { MenuItemsSidebar, MobileScreenNavbar } from "../../SharedComponents";
import "./LargeScreenNavbar.css";
import { MenuUi } from "../../SmallComponents/Menu";
import SearchInputUi from "../../SearchUi/SearchInputUi";
import { PersonIcon, FavoriteBorderIcon, MarkunreadMailboxIcon, PowerSettingsNewIcon } from "../../SharedIcons";
import { useUserContext } from "../../../Context/UserContext";
import { useNavigate } from "react-router-dom";
//

export function LargeScreenNavbar() {
  const menuId = "primary-search-account-menu";

  return (
    <header className='nav-bg'>
      <nav
        className='mx-auto flex max-w-7xl items-center justify-between p-1 lg:px-8'
        aria-label='Global'
      >
        <LogoArea />

        <div className='hidden lg:flex lg:flex-1 lg:justify-end'>
          <NavSearchBar />
          {/* <ShoppingBagIcon />  <whishlist /> */}
          <MenuItemsSidebar />

          <IconButton
            size='large'
            aria-label='account of current user'
            aria-controls={menuId}
            sx={{ marginLeft: "10px", padding: "0px" }}
          >
          </IconButton>
        </div>
        <div className='mobile-navbar mt-3 '>
          <MobileScreenNavbar />
        </div>
      </nav>
    </header>
  );
}

export function LogoArea() {
  return (
    <>
      <div className='flex lg:flex-1'>
        <a
          href='./'
          className='-m-1.5 p-1.5'
        >
          <span className='sr-only'>Your Company</span>
          <img
            className='logo-img w-auto'
            src={Logo}
            alt=''
          />
        </a>
        <Typography
          variant='h4'
          noWrap
          fontWeight='bold'
          component='div'
          className='logo-in-text  pl-4 pt-2 text-lg sm:text-xs nav-logo-text'
          sx={{ display: { xs: "block", sm: "block" } }}
        >
          Daily Fresh
        </Typography>
      </div>
    </>
  );
}

export function NavSearchBar() {
  const { user, setUser } = useUserContext();
  const navigate = useNavigate();
  const handleLogout = () => {
    // Clear session storage and reset user state
    sessionStorage.removeItem("accessToken");
    sessionStorage.removeItem("phoneNumber");
    sessionStorage.removeItem("specificUser");
    setUser(null);

    // Navigate to the user login page
    navigate("/userLogin");
  };

  const menuItems = [
    {
      id: 4,
      title: user ? "Logout" : "Login",
      icon: <PowerSettingsNewIcon />,
      onClick: handleLogout,
      path: "/userLogin",
    },
  ];

  const userMenuItems = [
    {
      id: 1,
      title: "My Profile",
      icon: <PersonIcon />,
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
  ];

  return (
    <>
      <div className='relative flex w-full gap-2 md:w-max mr-4'>
        <div className='mt-2'>
          <SearchInputUi />
        </div>
        {user ? (
          <MenuUi
            classNameButton='navitems-btn'
            menuItems={userMenuItems.concat(menuItems)}
            defaultOpen={false}
            icon={<PersonIcon />}
            select={user?.fullName || "Guest"}
          />
        ) : (
          <MenuUi
            classNameButton='navitems-btn'
            menuItems={menuItems}
            defaultOpen={false}
            icon={<PersonIcon />}
            select={"Guest"}
          />
        )}
      </div>
    </>
  );
}
