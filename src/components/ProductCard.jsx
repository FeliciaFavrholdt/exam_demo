import styled from "styled-components";

const Card = styled.div`
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 15px;
  width: 200px;
  text-align: center;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

const Image = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-radius: 10px 10px 0 0;
`;

const Name = styled.h3`
  font-size: 1.2rem;
  margin: 10px 0;
`;

const Price = styled.p`
  color: #5a4b41;
  font-weight: bold;
`;

const PopularityStars = styled.div`
  color: #f5a623;
  margin-top: 5px;
`;

const ProductCard = ({ product }) => {
  const renderStars = (popularity) => {
    const safePopularity = Math.max(0, Math.min(popularity, 5));
    return "★".repeat(safePopularity) + "☆".repeat(5 - safePopularity);
  };

  return (
    <Card>
      <Image src={product.image} alt={product.name} />
      <Name>{product.name}</Name>
      <Price>${product.price}</Price>
      <PopularityStars>{renderStars(product.popularity)}</PopularityStars>
    </Card>
  );
};

export default ProductCard;
