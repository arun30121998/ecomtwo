import React from "react";
import { Menu, MenuHandler, MenuList, MenuItem } from "@material-tailwind/react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import "./Design.css";
import { useNavigate } from "react-router-dom";

const MenuUi = ({ icon, select, menuItems, defaultOpen, classNameButton }) => {
  const [openMenu, setOpenMenu] = React.useState(defaultOpen);
  const navigate = useNavigate();
  const triggers = {
    onMouseEnter: () => setOpenMenu(true),
    onMouseLeave: () => setOpenMenu(false),
  };

  const handleItemClick = (path, onClick) => {
    if (onClick) {
      onClick(); // Call the onClick function if provided
    }
    navigate(path); // Navigate to the new path
    setOpenMenu(false); // Close the menu when a menu item is clicked
  };

  return (
    <Menu open={openMenu} handler={setOpenMenu}>
      <MenuHandler className={` ${classNameButton}    outline-none d-flex   items-center`}>
        <button {...triggers} variant='text' className={` p-0 m-0 flex items-center  `}>
          <span className="mr-2"> {icon}</span> {select}{" "}
          <ChevronDownIcon className={`h-3.5 w-3.5 mt-1  ml-2 transition-transform ${openMenu ? "rotate-180" : ""}`} />
        </button>
      </MenuHandler>
      <MenuList {...triggers} className='overflow-visible p-0 m-0'>
        {menuItems.map(({ id, title, icon, path, onClick }) => (
          <MenuItem key={id}>
            <p onClick={() => handleItemClick(path, onClick)} color='blue-gray' className='mb-1'>
              <span className='mr-2'>{icon}</span> {title}
            </p>
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export { MenuUi };
