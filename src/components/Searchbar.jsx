import styled from "styled-components";

const Input = styled.input`
  padding: 8px;
  margin-bottom: 20px;
  width: 300px;
  border-radius: 5px;
  border: 1px solid #ccc;
`;

const SearchBar = ({ onSearch }) => {
  return (
    <Input
      type="text"
      placeholder="Search products..."
      onChange={(e) => onSearch(e.target.value)}
    />
  );
};

export default SearchBar;

//INLINE CSS 
/* return (
    <input
      type="text"
      placeholder="Search products..."
      onChange={handleSearch}
      style={{
        padding: "8px",
        margin: "10px",
        width: "200px",
        border: "1px solid #ccc",
        borderRadius: "5px",
      }}
    />
  );
}; */


