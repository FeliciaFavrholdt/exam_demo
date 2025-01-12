import styled from "styled-components";

const Button = styled.button`
  padding: 10px 20px;
  margin: 10px 0;
  background-color: #5a4b41;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #8c6d5a;
  }
`;

const LayoutToggleButton = ({ layout, toggleLayout }) => {
  return (
    <Button onClick={toggleLayout}>
      Switch to {layout === "grid" ? "Flexbox" : "Grid"} View
    </Button>
  );
};

export default LayoutToggleButton;