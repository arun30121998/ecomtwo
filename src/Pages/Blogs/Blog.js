import { Card, CardHeader, CardBody, CardFooter, Typography } from "@material-tailwind/react";
import "../../index.css";
import { BlogOneData } from "../../Data/DummyApi";
import { ChevronRightIcon } from "../../Components/SharedIcons";
import { useNavigate } from "react-router-dom";
import { LargeScreenNavbar, NavbarTop, Footer, Breadcrumbs } from "../../Components/SharedComponents";
//
export default function Blog() {
  const name = "Blog";
  return (
    <>
      <NavbarTop />
      <LargeScreenNavbar />
      <Breadcrumbs name={name} />
      <BlogComponent />
      <Footer />
    </>
  );
}

export function BlogComponent({ limit }) {
  const navigate = useNavigate();

  const limitDescription = (description) => {
    const words = description.split(" ");
    if (words.length > 10) {
      return words.slice(0, 10).join(" ") + "...";
    }
    return description;
  };
  const limitedData = BlogOneData.slice(0, limit);
  return (
    <div className=''>
      <div className='section-padding common-mt'>
        <div className='mb-10 col-lg-12 text-center'>
          <h1>Our Latest Blog</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor, illo!</p>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4'>
          {limitedData.map((data) => (
            <Card
              onClick={() => navigate(`/blog/${data.id}`)}
              className='mt-6 w-fill'
              key={data.id}
            >
              <CardHeader
                color='transparent'
                className='mx-0 relative h-56 rounded-lg'
              >
                <img
                  className='blog-img-style w-full object-center'
                  src={data.img}
                  alt='img-blur-shadow'
                  layout='fill'
                />
              </CardHeader>
              <CardBody>
                <Typography
                  variant='h5'
                  color='blue-gray'
                  className='mb-2'
                >
                  {data.name}
                </Typography>
                <Typography>{limitDescription(data.description)}</Typography>
              </CardBody>
              <CardFooter className='pt-0'>
                <div className='slider-btn'>
                  <button>
                    Know More
                    <ChevronRightIcon />{" "}
                  </button>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
