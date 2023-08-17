import React, { useState } from "react";
import { SearchIcon } from "../SharedIcons";
import { Stack, ChakraProvider, InputGroup, Input, InputRightAddon } from "@chakra-ui/react";
import "./SearchInputUi.css";
import { products } from "../../Data/ProductData";
import { useNavigate } from "react-router-dom";

export default function SearchInputUi() {
  const uniqueCategories = [...new Set(products.map((product) => product.category))];
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState("");

  const handleCategoryClick = (category) => {
    navigate(`/productList/${category}`);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchValue.trim() !== "") {
      // Navigate to the productList page with the searchValue as the category
      navigate(`/productList/${searchValue}`);
    }
  };

  return (
    <ChakraProvider>
      <Stack spacing={4}>
        <InputGroup >
          <form className="d-flex"  onSubmit={handleSearchSubmit}>
            <div>
              <select name='all' id='' className="input-select">
                <option value='all'>All Products</option>
                {uniqueCategories.map((category) => {
                  const filteredProducts = products.filter((product) => product.category === category);
                  const product = filteredProducts[0];
                  return (
                    <option key={category} onClick={() => handleCategoryClick(category)} value={category}>
                      {product.category}
                    </option>
                  );
                })}
              </select>
            </div>
            <Input 
              className="search-bar"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              placeholder='search'
            />
            <InputRightAddon onClick={handleSearchSubmit} children={<SearchIcon />} />
          </form>
        </InputGroup>
      </Stack>
    </ChakraProvider>
  );
}
