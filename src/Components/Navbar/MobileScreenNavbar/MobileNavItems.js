import React from "react";
import { List, ListItem, ListItemPrefix } from "@material-tailwind/react";
import { Card, ListItemSuffix, Chip, Accordion, AccordionHeader, AccordionBody, Input } from "@material-tailwind/react";
import {
  KeyboardArrowDownIcon,
  ShoppingBagIcon,
  SearchIcon,
  AccountCircleIcon,
  FavoriteBorderIcon,
  PowerSettingsNewIcon,
  SettingsIcon,
  CategoryIcon,
} from "../../SharedIcons";
import { useNavigate } from "react-router-dom";

export function MobileNavItems() {
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(0);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <Card>
      <div className='p-2'>
        <Input
          icon={<SearchIcon className='h-5 w-5' />}
          label='Search'
        />
      </div>

      <List>
        <hr className='my-2 border-blue-gray-50' />
        <ListItem
          onClick={() => navigate("/category")}
          className='py-3 pt-2 pb-2'
        >
          <ListItemPrefix>
            <CategoryIcon className='h-5 w-5' />
          </ListItemPrefix>
          All Categories
        </ListItem>
        <ListItem
        onClick={() => navigate('/mycart')}
          className='py-3 pt-2 pb-2'>
          <ListItemPrefix>
            <ShoppingBagIcon className='h-5 w-5' />
          </ListItemPrefix>
          Cart
          <ListItemSuffix>
            <Chip
              value='14'
              size='sm'
              variant='ghost'
              color='blue-gray'
              className='rounded-full'
            />
          </ListItemSuffix>
        </ListItem>
        <ListItem
          className='py-3 pt-2 pb-2'
          onClick={() => navigate("/account/mywishlist")}
        >
          <ListItemPrefix>
            <FavoriteBorderIcon className='h-5 w-5' />
          </ListItemPrefix>
          WishList
          <ListItemSuffix>
            <Chip
              value='5'
              size='sm'
              variant='ghost'
              color='blue-gray'
              className='rounded-full'
            />
          </ListItemSuffix>
        </ListItem>
        <Accordion
          open={open === 1}
          icon={
            <KeyboardArrowDownIcon
              strokeWidth={2.5}
              className={`mx-auto h-4 w-4 transition-transform ${open === 1 ? "rotate-180" : ""}`}
            />
          }
        >
          <ListItem
            className='p-0'
            selected={open === 1}
          >
            <AccordionHeader
              onClick={() => handleOpen(1)}
              className='border-b-0 p-3 pt-0 pb-0'
            >
              <ListItemPrefix>
                <AccountCircleIcon className='h-5 w-5' />
              </ListItemPrefix>
              <h6
                color='blue-gray'
                className='mr-auto font-normal  pt-2'
              >
                Profile
              </h6>
            </AccordionHeader>
          </ListItem>
          <AccordionBody className='py-1 px-2'>
            <List className='py-2'>
              <ListItem
                className='py-3 pt-2 pb-2 '
                onClick={() => navigate("/myaccount")}
              >
                Log In
              </ListItem>
              <ListItem
                className='py-3 pt-2 pb-2 '
                onClick={() => navigate("/myaccount")}
              >
                My Account
              </ListItem>
            </List>
          </AccordionBody>
        </Accordion>
        <ListItem className='py-3 pt-2 pb-2'>
          <ListItemPrefix>
            <SettingsIcon className='h-5 w-5' />
          </ListItemPrefix>
          Settings
        </ListItem>
        <ListItem className='py-3 pt-2 pb-2'>
          <ListItemPrefix>
            <PowerSettingsNewIcon className='h-5 w-5' />
          </ListItemPrefix>
          Log Out
        </ListItem>
      </List>
    </Card>
  );
}
