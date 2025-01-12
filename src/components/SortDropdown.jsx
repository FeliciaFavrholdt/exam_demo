const SortDropdown = ({ sortOption, handleSortChange }) => {
  return (
    <select onChange={handleSortChange} value={sortOption}>
      <option value="">Select Filter</option>
      <option value="priceAsc">Price: Low to High</option>
      <option value="priceDesc">Price: High to Low</option>
      <option value="popularity">Most Popular</option>
      <option value="nameAsc">A - Z</option>
    </select>
  );
};

export default SortDropdown;
