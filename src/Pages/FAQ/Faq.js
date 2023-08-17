import { Fragment, useState } from "react";
import { Accordion, AccordionHeader, AccordionBody } from "@material-tailwind/react";
import "./Faq.css";
import { LargeScreenNavbar, Footer, Breadcrumbs, NavbarTop } from "../../Components/SharedComponents";

//
export default function Faq() {
  const name = "FAQ";
  return (
    <>
      <NavbarTop />
      <LargeScreenNavbar />
      <Breadcrumbs name={name} />
      <FaqSection />
      <Footer />
    </>
  );
}

function Icon({ id, open }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className={`${id === open ? "rotate-180" : ""} h-5 w-5 transition-transform`}
      fill='none'
      viewBox='0 0 24 24'
      stroke='currentColor'
      strokeWidth={2}
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M19 9l-7 7-7-7'
      />
    </svg>
  );
}

function FaqSection() {
  const [open, setOpen] = useState(0);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <>
      <div className=' section-padding common-mt '>
        <div className='row'>
          <div className='col-lg-10  how-can-we-help'>
            <h2>How can we help you?</h2>
            <p>Returns are free for orders shipped within the U.S. We include a UPS return label in every package which is at no cost to use.</p>
            <p>Follow the steps below for a seamless returns process:</p>
            <p>- Please indicate a reason for return using one of the Return Codes listed on the order form included in your package. </p>
            <p>- Attach your UPS return label to the outside of the package. There is no cost to use this label. </p>
            <p>- please make note of your tracking number so that you are able to track it on its way back to us </p>
            <p>
              You will receive an email once your return has been processed. Please allow 06 – 12 business days from the time your package arrives
              back to us for a refund to be issued.{" "}
            </p>
          </div>
          <div className='line'></div>
          <div className='col-lg-6 pt-16 information'>
            <h2>Shopping Information</h2>
            <Accordion
              open={open === 1}
              icon={
                <Icon
                  id={1}
                  open={open}
                />
              }
            >
              <AccordionHeader
                className='heading pb-2'
                onClick={() => handleOpen(1)}
              >
                What is Material Tailwind?
              </AccordionHeader>
              <AccordionBody>
                <p className=''>
                  Were not always in the position that we want to be at. Were constantly growing. Were constantly making mistakes. Were constantly
                  trying to express ourselves and actualize our dreams.
                </p>
              </AccordionBody>
            </Accordion>
            <Accordion
              open={open === 2}
              icon={
                <Icon
                  id={2}
                  open={open}
                />
              }
            >
              <AccordionHeader
                className='heading pb-2'
                onClick={() => handleOpen(2)}
              >
                How to use Material Tailwind?
              </AccordionHeader>
              <AccordionBody>
                <p>
                  Were not always in the position that we want to be at. Were constantly growing. Were constantly making mistakes. Were constantly
                  trying to express ourselves and actualize our dreams.
                </p>
              </AccordionBody>
            </Accordion>
            <Accordion
              open={open === 3}
              icon={
                <Icon
                  id={3}
                  open={open}
                />
              }
            >
              <AccordionHeader
                className='heading pb-2'
                onClick={() => handleOpen(3)}
              >
                What can I do with Material Tailwind?
              </AccordionHeader>
              <AccordionBody>
                Were not always in the position that we want to be at. Were constantly growing. Were constantly making mistakes. Were constantly
                trying to express ourselves and actualize our dreams.
              </AccordionBody>
            </Accordion>
          </div>
          <div className='col-lg-6 pt-16 information'>
            <h2>Payment information</h2>
            <Accordion
              open={open === 4}
              icon={
                <Icon
                  id={4}
                  open={open}
                />
              }
            >
              <AccordionHeader
                className='heading pb-2'
                onClick={() => handleOpen(4)}
              >
                What is Material Tailwind?
              </AccordionHeader>
              <AccordionBody>
                Were not always in the position that we want to be at. Were constantly growing. Were constantly making mistakes. Were constantly
                trying to express ourselves and actualize our dreams.
              </AccordionBody>
            </Accordion>
            <Accordion
              open={open === 5}
              icon={
                <Icon
                  id={5}
                  open={open}
                />
              }
            >
              <AccordionHeader
                className='heading pb-2'
                onClick={() => handleOpen(6)}
              >
                How to use Material Tailwind?
              </AccordionHeader>
              <AccordionBody>
                Were not always in the position that we want to be at. Were constantly growing. Were constantly making mistakes. Were constantly
                trying to express ourselves and actualize our dreams.
              </AccordionBody>
            </Accordion>
            <Accordion
              open={open === 6}
              icon={
                <Icon
                  id={6}
                  open={open}
                />
              }
            >
              <AccordionHeader
                className='heading pb-2'
                onClick={() => handleOpen(6)}
              >
                What can I do with Material Tailwind?
              </AccordionHeader>
              <AccordionBody>
                Were not always in the position that we want to be at. Were constantly growing. Were constantly making mistakes. Were constantly
                trying to express ourselves and actualize our dreams.
              </AccordionBody>
            </Accordion>
          </div>
          <div className='col-lg-6 pt-16 information'>
            <h2>Payment information</h2>
            <Accordion
              open={open === 7}
              icon={
                <Icon
                  id={7}
                  open={open}
                />
              }
            >
              <AccordionHeader
                className='heading pb-2'
                onClick={() => handleOpen(7)}
              >
                What is Material Tailwind?
              </AccordionHeader>
              <AccordionBody>
                Were not always in the position that we want to be at. Were constantly growing. Were constantly making mistakes. Were constantly
                trying to express ourselves and actualize our dreams.
              </AccordionBody>
            </Accordion>
            <Accordion
              open={open === 8}
              icon={
                <Icon
                  id={8}
                  open={open}
                />
              }
            >
              <AccordionHeader
                className='heading pb-2'
                onClick={() => handleOpen(8)}
              >
                How to use Material Tailwind?
              </AccordionHeader>
              <AccordionBody>
                Were not always in the position that we want to be at. Were constantly growing. Were constantly making mistakes. Were constantly
                trying to express ourselves and actualize our dreams.
              </AccordionBody>
            </Accordion>
            <Accordion
              open={open === 9}
              icon={
                <Icon
                  id={9}
                  open={open}
                />
              }
            >
              <AccordionHeader
                className='heading pb-2'
                onClick={() => handleOpen(9)}
              >
                What can I do with Material Tailwind?
              </AccordionHeader>
              <AccordionBody>
                Were not always in the position that we want to be at. Were constantly growing. Were constantly making mistakes. Were constantly
                trying to express ourselves and actualize our dreams.
              </AccordionBody>
            </Accordion>
          </div>
        </div>
      </div>
    </>
  );
}
