import { Typography } from "@material-tailwind/react";
import { Input, Button } from "@material-tailwind/react";
import React from "react";
import { Pages } from "../../Data/DummyApi";
import { ElectricBoltIcon, AccountBalanceWalletIcon, SupportIcon, InstagramIcon, TwitterIcon, WhatsAppIcon, LinkedInIcon } from "../SharedIcons";
import { useNavigate } from "react-router-dom";
import "./Footer.css";
//

const currentYear = new Date().getFullYear();
const socialMediaIcons = [
  {
    id: 1,
    icon: <InstagramIcon />,
    url: "#",
  },
  {
    id: 2,
    icon: <TwitterIcon />,
    url: "#",
  },
  {
    id: 3,
    icon: <WhatsAppIcon />,
    url: "#",
  },
  {
    id: 4,
    icon: <LinkedInIcon />,
    url: "#",
  },
];

export function Footer() {
  
  const navigate = useNavigate();
  const [email, setEmail] = React.useState("");
  const onChange = ({ target }) => setEmail(target.value);

  return (
    <footer className=' section-padding common-mt  relative w-full pt-10   footer-bg'>
      <div className=''>
        <div className='row pt-12 pb-4'>
          <div className='col-lg-4 col-md-4 text-center'>
            <div className='border-1 pt-2 mt-2'>
              <ElectricBoltIcon className='footer-content-titles ' />
              <h2 className='footer-content-titles mt-2'>Fast Delivery</h2>
              <p className='footer-content-style'>100% Safe Delivery</p>
            </div>
          </div>
          <div className='col-lg-4 col-md-4 text-center'>
            <div className='border-1 pt-2 mt-2'>
              <AccountBalanceWalletIcon className='footer-content-titles ' />
              <h2 className='footer-content-titles mt-2'>safe payment</h2>
              <p className='footer-content-style'>100% Secure Payment</p>
            </div>
          </div>
          <div className='col-lg-4 col-md-4 text-center'>
            <div className='border-1 pt-2 mt-2'>
              <SupportIcon className='footer-content-titles  ' />
              <h2 className='footer-content-titles mt-2'>Help Center</h2>
              <p className='footer-content-style'> Dedicated 24/7 Support </p>
            </div>
          </div>
        </div>
        <hr />
        <div className='row pt-4'>
          <div className='col-lg-5'>
            <Typography
              variant='h5'
              className='mb-6 nav-logo-text'
            >
              Daily Fresh
            </Typography>
            <Typography
              variant='h6'
              className='mb-6 footer-content-style'
            >
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit quidem consequuntur nam nulla illum excepturi, eius dolorum ab
              enim quis.
            </Typography>
            <div className='flex gap-4 text-blue-gray-900 sm:justify-left'>
              <Typography
                variant='h6'
                className='mb-6 footer-content-style'
              >
                Social Media :
              </Typography>
              {socialMediaIcons.map((icon) => (
                <Typography
                  key={icon.id}
                  as='a'
                  href={icon.url}
                  className='opacity-80 transition-opacity hover:opacity-100 footer-content-style'
                >
                  {icon.icon}
                </Typography>
              ))}
            </div>
          </div>
          <div className='col-lg-3'>
            <ul className='p-0'>
              <Typography
                variant='h5'
                className=' mb-3  font-large footer-content-titles'
              >
                Quick Links
              </Typography>
              {Pages.map((page) => (
                <li key={page.page}
                onClick={() => navigate(page.path)}
                >
                  <Typography
                   variant="h6"
                    
                    className='cursor-pointer px-0 py-1.5 font-normal transition-colors hover:text-white footer-content-style'
                  >
                    {page.page}
                  </Typography>
                </li>
              ))}
            </ul>
          </div>

          <div className='col-lg-4'>
            <Typography
              variant='h5'
              className='mb-6 footer-content-titles'
            >
              Our Newsletter
            </Typography>
            <p className='footer-content-style'>Subscribe to the Daily Fresh mailing list to receive updates on new arrivals & other information.</p>
            <div className='relative flex w-full max-w-[24rem]'>
              <Input
                type='email'
                label='Email Address'
                value={email}
                onChange={onChange}
                className='pr-20'
                containerProps={{
                  className: "min-w-0",
                }}
              />
              <Button
                size='sm'
                color={email ? "blue" : "green"}
                //  disabled={!email}
                className='!absolute right-1 top-1 rounded footer-content-style'
              >
                Subscribe
              </Button>
            </div>
            <div className='flex mt-4'>
              <input
                type='checkbox'
                className='border-gray-300 rounded h-5 w-5'
              />

              <div className='flex flex-col'>
                <p className='ml-2 text-gray-700 font-medium leading-none footer-content-style'>I accept terms & conditions & privacy policy. </p>
              </div>
            </div>
          </div>
        </div>
        <div className='mt-12 flex w-full flex-col items-center justify-center border-t border-blue-gray-50 py-4 md:flex-row md:justify-between'>
          <Typography
            variant='small'
            className='mb-4 text-center font-normal text-blue-gray-900 md:mb-0 footer-content-style'
          >
            Copyright &copy; {currentYear} Daily Fresh | All Rights Reserved .Design by Arun
          </Typography>
        </div>
      </div>
    </footer>
  );
}
