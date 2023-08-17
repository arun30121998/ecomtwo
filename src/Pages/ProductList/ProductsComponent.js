import React,{useState} from "react";
import { useParams, useNavigate } from "react-router-dom";
import { cartProducts, products } from "../../Data/ProductData";
import { Footer, ProductCard, LargeScreenNavbar, NavbarTop, Breadcrumbs } from "../../Components/SharedComponents";
import "./ProductList.css";
import {
  ChakraProvider,
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  Checkbox,
  Accordion,
  AccordionItem,
  AccordionButton,
  Box,
  AccordionIcon,
  AccordionPanel,
} from "@chakra-ui/react";

// 
const Products = () => {
  const { category } = useParams();
  const navigate = useNavigate();
  const [rangeValues, setRangeValues] = useState([100, 10000]);

  // Filter products based on the selected category and price range
  const filteredProducts = products.filter((product) => {
    const variant = product.variants[0]; // Assuming each product has at least one variant
    const price = variant.price;
    return product.category === category && price >= rangeValues[0] && price <= rangeValues[1];
  });

  const handleRangeChange = (values) => {
    setRangeValues(values);
  };

  const handleCardClick = (productId) => {
    navigate(`/productList/${category}/${productId}`);
  };

  const handleCard = (productId) => {
    const clickedProduct = products.find((product) => product.id === productId);
    if (clickedProduct) {
      cartProducts.push(clickedProduct);
    }
  };
  return (
    <>
      <NavbarTop />
      <LargeScreenNavbar />
      <Breadcrumbs name={category} />
      <Filter onRangeChange={handleRangeChange} rangeValues={rangeValues} />
      <div className='section-padding mt-24'>
        <h2 className='mb-3'>List Of Products In {category}</h2>
        <div className='col-12'>
          <div className='row'>
            {filteredProducts.map((product) => (
              <div
                className='col-6 col-lg-3 col-md-4 mb-3'
                key={product.id}
              >
                <ProductComponent
                  relatedProduct={product}
                  onClick={handleCardClick}
                  handleCard={handleCard}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

const ProductComponent = ({ relatedProduct, onClick, handleCard }) => {
  const variant = relatedProduct.variants[0]; // Get the first variant

  return (
    <div>
      <ProductCard
        id={`product-${relatedProduct.id}`} // Unique identifier using the product ID
        name={relatedProduct.name}
        grams={variant.grams}
        price={variant.price}
        mrp={variant.mrp}
        availability={variant.availability}
        mainImg={variant.mainImg}
        ratings={variant.ratings}
        onClick={() => onClick(relatedProduct.id)} // Pass the product ID as the parameter
        handleCard={() => handleCard(relatedProduct.id)}
      />
    </div>
  );
};

export default Products;

const Filter = ({onRangeChange,rangeValues}) => {
  const handleRangeChange = (values) => {
    onRangeChange(values);
  };
 
  return (
    <>
      <div className='row section-padding  parent-style'>
        <ChakraProvider>
          <Accordion
            className=' filter-style'
            defaultIndex={[0]}
            allowMultiple
          >
            <div className='row'>
              <div className=' col-lg-2 col-6'>
                <AccordionItem>
                  <h2 className='filter-block'>
                    <AccordionButton className='accoundion-btn'>
                      <Box
                        as='span'
                        flex='1'
                        textAlign='left'
                        className='filter-headings'
                      >
                        Prize
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    <RangeSlider
                      // aria-label={["min", "max"]}
                      defaultValue={[10, 1000]}
                      onChange={handleRangeChange}
                      min={0}
                      max={10000}
                      value={rangeValues}
                    >
                      <RangeSliderTrack>
                        <RangeSliderFilledTrack />
                      </RangeSliderTrack>
                      <RangeSliderThumb index={0} />
                      <RangeSliderThumb index={1} />
                    </RangeSlider>
                    <p>prize {`${rangeValues[0]} - ${rangeValues[1]}`}</p>
                  </AccordionPanel>
                </AccordionItem>
              </div>
              
              <div className='col-lg-2 col-6'>
                <AccordionItem>
                  <h2 className='filter-block'>
                    <AccordionButton className='accoundion-btn'>
                      <Box
                        as='span'
                        flex='1'
                        textAlign='left'
                        className='filter-headings'
                      >
                        Discounts
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    <Checkbox
                      size='md'
                      colorScheme='green'
                      className=' text-green-800'
                    >
                      50% offers
                    </Checkbox>
                    <br />
                    <Checkbox
                      size='md'
                      colorScheme='green'
                      className=' text-green-800'
                    >
                      40% offers
                    </Checkbox>
                    <br />
                    <Checkbox
                      size='md'
                      colorScheme='green'
                      className=' text-green-800'
                    >
                      30% offers
                    </Checkbox>
                    <br />
                    <Checkbox
                      size='md'
                      colorScheme='green'
                      className=' text-green-800'
                    >
                      10% offers{" "}
                    </Checkbox>
                  </AccordionPanel>
                </AccordionItem>
              </div>
            </div>
          </Accordion>
        </ChakraProvider>
      </div>
    </>
  );
};
