import React from "react";
import { useParams } from "react-router-dom";
import { BlogOneData } from "../../Data/DummyApi";
import "./Blog.css";
import { Breadcrumbs,ShareSocialMedia, LargeScreenNavbar, NavbarTop, Footer } from "../../Components/SharedComponents";

export default function BlogDetails() {
  const name = "Blog Details";
  return (
    <div>
      <NavbarTop />
      <LargeScreenNavbar />
      <Breadcrumbs name={name} />
      <BlogDetailsComponent />
      <Footer />
    </div>
  );
}
export function BlogDetailsComponent() {
  const { id } = useParams();
  const blog = BlogOneData.find((data) => data.id === parseInt(id));
  const tags = ["sweets", "Mango", "Laddu", "Chochlate", "Dairymilk", "Potato", "Chips", "Milk"];

  if (!blog) {
    return <div>Blog not found</div>;
  }
  const limitDescription = (description) => {
    const words = description.split(" ");
    if (words.length > 4) {
      return words.slice(0, 4).join(" ") + "...";
    }
    return description;
  };
  return (
    <div className=" section-padding common-mt ">
      <div className='row '>
        <div
          className='col-lg-8 '
          key={blog.id}
        >
          <div className='blog-details'>
            <h2>{blog.name}</h2>
            <img
              className='blog-details-img'
              src={blog.img}
              alt=''
            />
            <p>{blog.description}</p>
            {/* Render the rest of the details */}
            {/* share  */}
            <ShareSocialMedia
              classNameParent ="d-flex mb-10"
              text='Share'
              showIcons={true}
            ></ShareSocialMedia>
          </div>
        </div>
        <div className='col-lg-4 recent-post '>
          <h2>Recent Post</h2>
          {BlogOneData.map((data) => (
            <div className='recent-post-card d-flex p-2'>
              <div className='card-image'>
                <img
                  className='content-img'
                  src={data.img}
                  alt=''
                />
              </div>
              <div className='content'>
                <h2>{data.name}</h2>
                <p>{limitDescription(data.description)}</p>
              </div>
            </div>
          ))}
          <hr className='mt-10 mb-10' />
          <div className='tags'>
            <h2>Tags</h2>
            {tags.map((tag, index) => (
              <button
                className='tag-btn'
                key={index}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
