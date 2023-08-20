import React from "react";
import { Drawer, Typography, IconButton } from "@material-tailwind/react";
import { CloseIcon,MenuIcon } from "../../SharedIcons";
import { MobileNavItems } from "./MobileNavItems";
import './MobileScreen.css'
// 

export  function MobileScreenNavbar() {
  const [open, setOpen] = React.useState(false);
  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);

  return (
    <div className='mobile-nav-bar'>
      <Typography onClick={openDrawer}>
        <MenuIcon className='menubar' />
      </Typography>
      <Drawer
        open={open}
        onClose={closeDrawer}
      >
        <div className='flex items-center justify-between pt-3 pl-4 pr-2'>
          <h6
            variant='h6'
            color='blue-gray'
            className='mt-2'
          >
            Daily Fresh
          </h6>
          <IconButton
            variant='text'
            color='blue-gray'
            onClick={closeDrawer}
          >
            <CloseIcon
              strokeWidth={2}
              className='h-5 w-5'
            />
          </IconButton>
        </div>
        {/* bag,cart,logout,Profile,wishlist are in below component */}
        <MobileNavItems />
      </Drawer>
    </div>
  );
}



