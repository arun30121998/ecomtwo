import React from "react";

const DummyApi = () => {
  return <div>DuyApi</div>;
};

export const Navbar = [
  {
    id: 1,
    logo: require("../images/common/banner1.jpg"),
    item: "Home",
    icon: "SearchIcon",
  },
  {
    id: 2,
    item: "Contact",
    icon: "PersonIcon",
  },
  {
    id: 3,
    item: "services",
    icon: "PersonIcon",
  },
  {
    id: 4,
    item: "About",
    icon: "PersonIcon",
  },
];

export const Pages = [
  {

    page: "About Us",
    path: "/aboutus",
  },
  {
    page: "Contact Us",
    path: "/contactus",
  },
  {
    page: "Faq Us",
    path: "/faq",
  },
  {
    page: "Blog",
    path : "/blog"
  }
];

export const SliderContent = [
  {
    id: 1,
    img: require("../images/common/banner1.jpg"),
    addline: "Top seller Of The Week 1",
    title: "Choose Your Healthy Lifestyle",
    subtitle: "Presentation matters. Lorem ipsum dolor sit 1 ",
    btn: "Shop Now 1",
  },
  {
    id: 2,
    img: require("../images/common/banner2.jpg"),
    addline: "Top seller Of The Week 2",
    title: "Choose Your Healthy Lifestyle",
    subtitle: "Presentation matters. Lorem ipsum dolor sit 2",
    btn: "Shop Now 2",
  },
  {
    id: 3,
    img: require("../images/common/banner3.jpg"),
    addline: "Top seller Of The Week",
    title: "Choose Your Healthy Lifestyle",
    subtitle: "Presentation matters. Lorem ipsum dolor sit ",
    btn: "Shop Now",
  },
];

export const BannerContents = [
  {
    id: 1,
    offers: "Top Offers",
    title: "Banner Title",
    btn: "Shop Now",
    img: require("../images/banner/banner-1.jpg"),
  },
  {
    id: 2,
    offers: "Top Offers",
    title: "Banner Title",
    btn: "Shop Now",
    img: require("../images/banner/banner-3.jpg"),
  },
  {
    id: 3,
    offers: "Top Offers",
    title: "Banner Title",
    btn: "Shop Now",
    img: require("../images/banner/banner-1.jpg"),
  },
  {
    id: 4,
    offers: "Top Offers",
    title: "Banner Title",
    btn: "Shop Now",
    img: require("../images/banner/banner-1.jpg"),
  },
];

export const NewlyArrived = [
  {
    id: 1,
    img: require("../images/common/coffeecat.jpg"),
    name: "Aval Mixture",
    prize: 2343,
    mrp: 3434,
    rating: 3,
    quantity: 1,
  },
  {
    id: 2,
    img: require("../images/common/karuppu.jpg"),
    name: "Aval Mixture",
    prize: 2343,
    mrp: 3434,
    rating: 4,
    quantity: 4,
  },
  {
    id: 3,
    img: require("../images/common/ladoo.jpg"),
    name: "Aval Mixture",
    prize: 2343,
    mrp: 3434,
    rating: 5,
    quantity: 2,
  },
  {
    id: 4,
    img: require("../images/common/pallipati.jpg"),
    name: "Aval Mixture",
    prize: 2343,
    mrp: 3434,
    rating: 4,
    quantity: 3,
  },
  {
    id: 5,
    img: require("../images/common/coffeecat.jpg"),
    name: "Aval Mixture",
    prize: 2343,
    mrp: 3434,
    rating: 2,
  },
  {
    id: 6,
    img: require("../images/common/sweetscat.jpg"),
    name: "Aval Mixture",
    prize: 2343,
    mrp: 3434,
    rating: 2,
  },
];

export const Offers = [
  {
    id: 1,
    addline: "Top offers",
    title: "Best Sweets",
    btn: "Shop Now",
  },
  {
    id: 2,
    addline: "Top offers",
    title: "Best Sweets",
    btn: "Shop Now",
  },
  {
    id: 3,
    addline: "Top offers",
    title: "Best Sweets",
    btn: "Shop Now",
  },
];

export const ProductData = [
  {
    id: "1",
    name: "Sweets",
    description: "Everyone's favorite cat who loves to hate",
    prize: 1500,
    img: require("../images/common/coffeecat.jpg"),
  },
  {
    id: "2",
    name: "Nomad Tumbler2",
    description: "He bends! He stretches! He even ties in knots, but always returns to his original shape!",
    prize: 2000,
    img: require("../images/common/coffeecat.jpg"),
  },
  {
    id: "3",
    name: "Nomad Tumbler3",
    description: "It's a race, it's a chase, hurry up and feed their face! Who will win? No one knows! Feed the hungry hip-ip-pos!",
    prize: 3000,
    img: require("../images/common/coffeecat.jpg"),
  },
  {
    id: "4",
    name: "Nomad Tumbler4",
    description: "You'll get caught up in the crossfire!",
    prize: 3500,
    img: require("../images/common/coffeecat.jpg"),
  },
  {
    id: "5",
    name: "Nomad Tumbler5",
    description: "You'll get caught up in the crossfire!",
    price: 3500,
    img: require("../images/common/coffeecat.jpg"),
  },
  {
    id: "6",
    name: "Nomad Tumbler6",
    description: "You'll get caught up in the crossfire!",
    price: 350,
    img: require("../images/common/coffeecat.jpg"),
  },
];

export const TopProducts = [
  {
    id: 1,
    img: require("../images/common/countrysugar.jpg"),
    name: "Pallapatti Mixture",
    subname: "subtitle",
    prize: 1200,
    mrp: 2200,
    rating: 2,
  },
  {
    id: 2,
    img: require("../images/common/pudhina.jpg"),
    name: "Country Sugar",
    subname: "subtitle",
    prize: 1200,
    mrp: 3200,
    rating: 4,
  },
  {
    id: 3,
    img: require("../images/common/ghee.jpg"),
    name: "A2 Cow Ghee",
    subname: "subtitle",
    prize: 1200,
    mrp: 2500,
    rating: 5,
  },
  {
    id: 4,
    img: require("../images/common/gheecat.jpg"),
    name: "Motichoor Ladoo",
    subname: "subtitle",
    prize: 1200,
    mrp: 2205,
    rating: 1,
  },
  {
    id: 5,
    img: require("../images/common/savcat.jpg"),
    name: "Aval Mixture",
    subname: "subtitle",
    prize: 1200,
    mrp: 2244,
    rating: 4,
  },
  {
    id: 6,
    img: require("../images/common/ladoo.jpg"),
    name: "Motichoor Ladoo",
    subname: "subtitle",
    prize: 1200,
    mrp: 2288,
    rating: 3,
  },
  {
    id: 7,
    img: require("../images/common/pudhina.jpg"),
    name: "A2 Cow Ghee",
    subname: "subtitle",
    prize: 1200,
    mrp: 2500,
    rating: 5,
  },
];

export const BlogOneData = [
  {
    id: 1,
    img: require("../images/common/pallipati.jpg"),
    name: "Best Laddu",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse obcaecati fugit ratione blanditiis facilis, eligendi optio, a dignissimos corrupti debitis fugiat voluptate nobis nulla repellat animi, incidunt nesciunt porro. Excepturi ratione voluptatibus, aliquid dicta quae repellat dolore impedit quisquam? Repudiandae possimus porro a nemo quos sunt iure quae maiores et. Dolorum minima officia magni cum ipsam itaque odio necessitatibus neque dolor laboriosam velit, porro culpa tenetur facilis quae provident natus doloremque? Iusto nemo beatae architecto asperiores, repellat rerum possimus unde laborum commodi nobis cum facilis sunt ab sint magnam inventore non quis. Cumque nostrum ab ullam recusandae exercitationem accusamus. Consequuntur! Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore earum repellat quaerat voluptates velit recusandae beatae adipisci accusamus, laborum aliquid obcaecati nisi voluptatem magni expedita sapiente ex saepe sunt inventore blanditiis vitae enim, aut voluptatibus? Itaque optio tempore labore culpa!",
  },
  {
    id: 2,
    img: require("../images/common/pudhina.jpg"),
    name: "Best Sweets",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse obcaecati fugit ratione blanditiis facilis, eligendi optio, a dignissimos corrupti debitis fugiat voluptate nobis nulla repellat animi, incidunt nesciunt porro. Excepturi ratione voluptatibus, aliquid dicta quae repellat dolore impedit quisquam? Repudiandae possimus porro a nemo quos sunt iure quae maiores et. Dolorum minima officia magni cum ipsam itaque odio necessitatibus neque dolor laboriosam velit, porro culpa tenetur facilis quae provident natus doloremque? Iusto nemo beatae architecto asperiores, repellat rerum possimus unde laborum commodi nobis cum facilis sunt ab sint magnam inventore non quis. Cumque nostrum ab ullam recusandae exercitationem accusamus. Consequuntur!",
  },
  {
    id: 3,
    img: require("../images/common/savcat.jpg"),
    name: "Best Kaaram",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse obcaecati fugit ratione blanditiis facilis, eligendi optio, a dignissimos corrupti debitis fugiat voluptate nobis nulla repellat animi, incidunt nesciunt porro. Excepturi ratione voluptatibus, aliquid dicta quae repellat dolore impedit quisquam? Repudiandae possimus porro a nemo quos sunt iure quae maiores et. Dolorum minima officia magni cum ipsam itaque odio necessitatibus neque dolor laboriosam velit, porro culpa tenetur facilis quae provident natus doloremque? Iusto nemo beatae architecto asperiores, repellat rerum possimus unde laborum commodi nobis cum facilis sunt ab sint magnam inventore non quis. Cumque nostrum ab ullam recusandae exercitationem accusamus. Consequuntur!",
  },
  {
    id: 4,
    img: require("../images/common/savcat.jpg"),
    name: "Best Savouries",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse obcaecati fugit ratione blanditiis facilis, eligendi optio, a dignissimos corrupti debitis fugiat voluptate nobis nulla repellat animi, incidunt nesciunt porro. Excepturi ratione voluptatibus, aliquid dicta quae repellat dolore impedit quisquam? Repudiandae possimus porro a nemo quos sunt iure quae maiores et. Dolorum minima officia magni cum ipsam itaque odio necessitatibus neque dolor laboriosam velit, porro culpa tenetur facilis quae provident natus doloremque? Iusto nemo beatae architecto asperiores, repellat rerum possimus unde laborum commodi nobis cum facilis sunt ab sint magnam inventore non quis. Cumque nostrum ab ullam recusandae exercitationem accusamus. Consequuntur!",
  },
  {
    id: 5,
    img: require("../images/common/savcat.jpg"),
    name: "Best Savouries",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse obcaecati fugit ratione blanditiis facilis, eligendi optio, a dignissimos corrupti debitis fugiat voluptate nobis nulla repellat animi, incidunt nesciunt porro. Excepturi ratione voluptatibus, aliquid dicta quae repellat dolore impedit quisquam? Repudiandae possimus porro a nemo quos sunt iure quae maiores et. Dolorum minima officia magni cum ipsam itaque odio necessitatibus neque dolor laboriosam velit, porro culpa tenetur facilis quae provident natus doloremque? Iusto nemo beatae architecto asperiores, repellat rerum possimus unde laborum commodi nobis cum facilis sunt ab sint magnam inventore non quis. Cumque nostrum ab ullam recusandae exercitationem accusamus. Consequuntur!",
  },
];

export const AccountInformation = [
  {
    label: "My Orders",
    value: "hml",
    desc: `It really matters and then like it really doesn't matter.
        What matters is the people who are sparked by it. And the people
        who are like offended by it, it doesn't matter.`,
  },
];

export const Categories = [
  {
    id: 1,
    name: "Sweets ",
    item: "6 items",
    img: require("../images/common/coffeecat.jpg"),
    imageAlt: "Olive drab green insulated bottle with flared screw lid and flat top.",
    path: "productlist/coffee",
    button: "Go To Sweets",
  },
  {
    id: 2,
    name: "Kitkat",
    item: "4 items",
    img: require("../images/common/ghee.jpg"),
    imageAlt: "Olive drab green insulated bottle with flared screw lid and flat top.",
    path: "productlist/kitkat",
    button: "Go To Kitkat",
  },
  {
    id: 3,
    name: "Laddu",
    item: "12 items",
    img: require("../images/common/councat.jpg"),
    imageAlt: "Olive drab green insulated bottle with flared screw lid and flat top.",
    path: "productlist/laddu",
    button: "Go To Laddu",
  },
];

export const Coffee = [
  {
    id: 1,
    img: require("../images/common/ghee.jpg"),
    subImg: [require("../images/common/countrysugar.jpg"), require("../images/common/gheecat.jpg"), require("../images/common/ladoo.jpg")],
    name: "cofffee Controls The Insuline",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus aperiam facere nulla accusamus sunt quod. Tempore autem delectus dolores, voluptate asperiores quos rerum reprehenderit doloremque, eum architecto in facere soluta distinctio accusamus corporis maxime quidem iste aspernatur eligendi officiis iure praesentium veniam suscipit! Minus autem ab dolor dolorem quas sunt, iusto repellat repudiandae debitis ducimus molestiae laboriosam, quidem maiores consequuntur nisi! Dolorum eos aperiam nemo soluta obcaecati doloremque nisi deleniti et corrupti, totam voluptate repellendus autem omnis. Velit, laboriosam! Incidunt similique nam dignissimos? Harum, minima. Laborum dolore quia soluta vitae aspernatur assumenda praesentium ducimus fugiat ad. Eius possimus ullam, autem facere illum, at commodi, corporis omnis perferendis cumque quod nihil?",
    prize: 1500,
    mrp: "2344",
    rating: 4,
  },

  {
    id: 2,
    name: "cofffee Controls The Insuline",
    img: require("../images/common/karuppu.jpg"),
    subImg: [require("../images/common/countrysugar.jpg"), require("../images/common/gheecat.jpg"), require("../images/common/ladoo.jpg")],
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    prize: 1500,
    mrp: "2344",
    rating: 4,
  },
  {
    id: 3,
    name: "cofffee Controls The Insuline",
    img: require("../images/common/councat.jpg"),
    subImg: [require("../images/common/countrysugar.jpg"), require("../images/common/gheecat.jpg"), require("../images/common/ladoo.jpg")],
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    prize: 1500,
    mrp: 2200,
    rating: 4,
  },
  {
    id: 4,
    name: "cofffee Controls The Insuline",
    img: require("../images/common/countrysugar.jpg"),
    subImg: [require("../images/common/countrysugar.jpg"), require("../images/common/gheecat.jpg"), require("../images/common/ladoo.jpg")],
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    prize: 1500,
    mrp: "2344",
    rating: 4,
  },
];

export const Kitkat = [
  {
    id: 1,
    img: require("../images/common/gheecat.jpg"),
    name: "kitkat 1",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    prize: 1500,
    mrp: "2344",
    rating: 4,
  },
  {
    id: 2,
    img: require("../images/common/pudhina.jpg"),
    name: "kitkat 2",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    prize: 1500,
    mrp: "2344",
    rating: 4,
  },
  {
    id: 3,
    img: require("../images/common/karuppu.jpg"),
    name: "kitkat 3",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    prize: 1500,
    mrp: "2344",
    rating: 4,
  },
  {
    id: 4,
    img: require("../images/common/honeycat.jpg"),
    name: "kitkat 4",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    prize: 1500,
    mrp: "2344",
    rating: 4,
  },
];

export const Laddu = [
  {
    id: 1,
    img: require("../images/common/aval.jpg"),
    name: "Laddu 1",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    prize: 1500,
    mrp: "2344",
    rating: 4,
  },
  {
    id: 2,
    img: require("../images/common/sweetscat.jpg"),
    name: "Laddu 2",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    prize: 1500,
    mrp: "2344",
    rating: 4,
  },
  {
    id: 3,
    img: require("../images/common/pallipati.jpg"),
    name: "Laddu 3",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    prize: 1500,
    mrp: "2344",
    rating: 4,
  },
  {
    id: 4,
    img: require("../images/common/gheecat.jpg"),
    name: "Laddu 4",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    prize: 1500,
    mrp: "2344",
    rating: 4,
  },
];

//
export const TopNavItems = [
  {
    id: 1,
    name: "About Us",
    path: "/aboutus",
  },
  {
    id: 2,
    name: "Contact Us",
    path: "/contactus",
  },
  {
    id: 3,
    name: "Blog",
    path: "/blog",
  },
  {
    id: 4,
    name: "Order Tracking",
    path: "/myaccount",
  },
  {
    id: 5,
    name: "FAQs",
    path: "/faq",
  },
];

export const AboutUsData = [
  {
    id: 1,
    heading: "Choose Your Healthy Lifestyle",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est ducimus, nisi, inventore quaerat laudantium aliquam aspernatur quod, itaque non atque odit! Tempore placeat maxime sapiente nobis tempora beatae commodi voluptates.\n\nLorem ipsum dolor, sit amet consectetur adipisicing elit. Est ducimus, nisi, inventore quaerat laudantium aliquam aspernatur quod, itaque non atque odit! Tempore placeat maxime sapiente nobis tempora beatae commodi voluptates.",
    points: {
      pointone: "Track your daily activity.",
      pointtwo: "Select Your Products",
      pointthree: "Deliver To Your Address",
    },
    img: require("../images/common/c.jpg"),
  },
];

export const WhyChooseUsData = [
  {
    id: 1,
    title: "100% Fresh Food",
    description: "The liber tempor cum soluta nobis eleifend option congue doming quod mazim.",
    img: require("../images/icons/organic.png"),
  },
  {
    id: 2,
    title: "Premium Quality",
    description: "The liber tempor cum soluta nobis eleifend option congue doming quod mazim.",
    img: require("../images/icons/premium-quality.png"),
  },
  {
    id: 3,
    title: "100% Natural",
    description: "The liber tempor cum soluta nobis eleifend option congue doming quod mazim.",
    img: require("../images/icons/organic.png"),
  },
  {
    id: 4,
    title: "100% Organic Goods",
    description: "The liber tempor cum soluta nobis eleifend option congue doming quod mazim.",
    img: require("../images/icons/hop.png"),
  },
];

export default DummyApi;
