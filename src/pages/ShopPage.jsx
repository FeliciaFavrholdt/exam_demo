import { useState, useEffect } from "react";
import styled from "styled-components";
import { sortByPriceAsc, sortByPriceDesc, sortByPopularity, sortByNameAsc } from "../utils/sorting";
import SortDropdown from "../components/SortDropdown";
import ProductList from "../components/ProductList";
import SearchBar from "../components/SearchBar";

const Container = styled.div`
  padding: 20px;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 20px;
  color: #333;
`;

const ShopPage = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [sortOption, setSortOption] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("/data/products.json")
      .then((response) => response.json())
      .then((data) => {
        const updatedProducts = data.map((product) => ({
          ...product,
          popularity: Math.floor(Math.random() * 5) + 1,
        }));
        setProducts(updatedProducts);
        setFilteredProducts(updatedProducts);
      })
      .catch((error) => console.error("Error loading products:", error));
  }, []);

  const handleSortChange = (e) => {
    const option = e.target.value;
    setSortOption(option);
    applyFilters(option, searchTerm);
  };

  const handleSearch = (searchValue) => {
    setSearchTerm(searchValue);
    applyFilters(sortOption, searchValue);
  };

  const applyFilters = (sortOption, searchValue) => {
    let filtered = products.filter((product) =>
      product.name.toLowerCase().includes(searchValue.toLowerCase())
    );

    switch (sortOption) {
      case "priceAsc":
        filtered.sort(sortByPriceAsc);
        break;
      case "priceDesc":
        filtered.sort(sortByPriceDesc);
        break;
      case "popularity":
        filtered.sort(sortByPopularity);
        break;
      case "nameAsc":
        filtered.sort(sortByNameAsc);
        break;
      default:
        break;
    }

    setFilteredProducts(filtered);
  };

  return (
    <Container>
      <Title>Shop Posters</Title>
      <SearchBar onSearch={handleSearch} />
      <SortDropdown sortOption={sortOption} handleSortChange={handleSortChange} />
      <ProductList products={filteredProducts} />
    </Container>
  );
};

export default ShopPage;
