import { useState, useEffect } from "react";
import styled from "styled-components";
import { sortByPriceAsc, sortByPriceDesc, sortByPopularity, sortByNameAsc } from "../utils/sorting";
import SortDropdown from "../components/SortDropdown";
import ProductList from "../components/ProductList";
import LayoutToggleButton from "../components/LayoutToggleButton";
import SearchBar from "../components/SearchBar";
import { fetchProducts } from "../utils/fetchProducts";

const Container = styled.div`
  padding: 20px;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 20px;
  color: #333;
`;

const ErrorMessage = styled.p`
  color: red;
  font-weight: bold;
  margin-top: 20px;
`;

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
`;

const FlexWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;

const ShopPage = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [sortOption, setSortOption] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [layout, setLayout] = useState("grid");
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchProducts()
      .then((data) => {
        setProducts(data);
        setFilteredProducts(data);
      })
      .catch((error) => setError(error.message));
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

  const toggleLayout = () => {
    setLayout((prevLayout) => (prevLayout === "grid" ? "flex" : "grid"));
  };

  return (
    <Container>
      <Title>Shop Posters</Title>
      <LayoutToggleButton layout={layout} toggleLayout={toggleLayout} />
      <SearchBar onSearch={handleSearch} />
      <SortDropdown sortOption={sortOption} handleSortChange={handleSortChange} />
      {error && <ErrorMessage>{error}</ErrorMessage>}
      {layout === "grid" ? (
        <GridWrapper>
          <ProductList products={filteredProducts} />
        </GridWrapper>
      ) : (
        <FlexWrapper>
          <ProductList products={filteredProducts} />
        </FlexWrapper>
      )}
    </Container>
  );
};

export default ShopPage;