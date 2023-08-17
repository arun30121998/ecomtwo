import React from "react";
import { HomeIcon,CategoryIcon } from "../SharedIcons";
import { Link } from "react-router-dom";
// 


const Breadcrumbs = ({ name ,productId }) => {
  return (
    <>
      <nav
        className='flex  bg-gray-50 text-gray-700 border border-gray-200 py-0 px-5 dark:bg-gray-800 dark:border-gray-700'
        aria-label='Breadcrumb'
      >
        <ol className='mt-1 mb-1 inline-flex items-center space-x-1 md:space-x-3'>
          <li className='inline-flex items-center hover:text-lime-700'>
            <HomeIcon />
            <Link
               to={'/'}
              className='ml-1 text-sm text-gray-700 hover:text-lime-700 inline-flex items-center dark:text-gray-400 dark:hover:text-white'
            >
              Home
            </Link>
          </li>
          <li>
            <div className='flex items-center hover:text-lime-700'>
              <CategoryIcon className="ml-2"/>
              <p
                className='m-0 text-gray-700 hover:text-lime-700 ml-1 md:ml-2 text-sm font-medium dark:text-gray-400 dark:hover:text-white'
              >
                {name} {productId}
              </p>
            </div>
          </li>
        </ol>
      </nav>
    </>
  );
};

export  {Breadcrumbs};
