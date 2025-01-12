import styled from "styled-components";

const Select = styled.select`
  padding: 8px;
  margin-bottom: 20px;
  border-radius: 5px;
  border: 1px solid #ccc;
`;

const SortDropdown = ({ sortOption, handleSortChange }) => {
  return (
    <Select value={sortOption} onChange={handleSortChange}>
      <option value="">Sort By</option>
      <option value="priceAsc">Price: Low to High</option>
      <option value="priceDesc">Price: High to Low</option>
      <option value="popularity">Most Popular</option>
      <option value="nameAsc">A - Z</option>
    </Select>
  );
};

export default SortDropdown;