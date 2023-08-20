import React, { useState } from "react";
import { Button, Drawer, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton } from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import { ChakraProvider} from "@chakra-ui/react";
import { ShoppingBagIcon,FavoriteBorderIcon, AddShoppingCartOutlined } from "../SharedIcons";
import "./Sidebar.css";
import CartProduct from "../../Pages/Cart/CartProduct";
import Wishlist from "../../Pages/Account/Wishlist/Wishlist";
import { useNavigate } from "react-router-dom";

// 
const MenuItemsSidebar = () => {
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const size = "md";
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);

  const handleFavoriteClick = () => {
    setIsWishlistOpen(true);
    onOpen();
  };

  const handleCartClick = () => {
    setIsWishlistOpen(false);
    onOpen();
  };
  const handleNavigate = () => {
  navigate("/mycart")
}
  return (
    <>
      <ChakraProvider>
        <Button
          ref={btnRef}
          className='bg-transparent p-0 '
          onClick={handleCartClick}
          style={{ height: "auto", width: "auto" }}
        >
            <ShoppingBagIcon className='cart-bag' />
        </Button>
        <Button
          className='bg-transparent p-0 ml-3'
          onClick={handleFavoriteClick}
          style={{ height: "auto", width: "auto" }}
        >
          <FavoriteBorderIcon className='fav-icon' />
        </Button>
        <Button
          onClick={() => handleNavigate()}
          className='bg-transparent p-0 ml-3'
          style={{ height: "auto", width: "auto" }}
        >
          <AddShoppingCartOutlined className='fav-icon' />
        </Button>
        <Drawer
          isOpen={isOpen}
          placement='right'
          onClose={onClose}
          finalFocusRef={btnRef}
          size={size}
        >
          <DrawerOverlay />
          <DrawerContent
                      className="pl-4 pr-4"

            style={{ overflow: "auto" }} // Add this style to enable scrolling
          >
            <DrawerCloseButton />
            <DrawerHeader className='mb-0 p-0 pt-4 pb-4'>Products {isWishlistOpen ? "In Your Wishlist" : "In Your Cart"}</DrawerHeader>
            {isWishlistOpen ? <Wishlist /> : <CartProduct />}
           
          </DrawerContent>
        </Drawer>
      </ChakraProvider>
    </>
  );
};

export  {MenuItemsSidebar};
