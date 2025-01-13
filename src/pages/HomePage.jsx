import poster1 from "../assets/images/poster_1.jpg";
import poster2 from "../assets/images/poster_2.jpg";
import poster3 from "../assets/images/poster_3.jpg";
import poster4 from "../assets/images/poster_4.jpg";
import poster5 from "../assets/images/poster_5.jpg";
import poster6 from "../assets/images/poster_6.jpg";
import styled from "styled-components";

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
  padding: 20px;
`;

const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  padding: 20px;
`;

const ImageCard = styled.div`
  width: 200px;
  background-color: #f9f9f9;
  padding: 10px;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  border-radius: 5px;
`;

const HomePage = ({ layout }) => {
  const images = [
    { id: 1, src: poster1, alt: "Poster 1" },
    { id: 2, src: poster2, alt: "Poster 2" },
    { id: 3, src: poster3, alt: "Poster 3" },
    { id: 4, src: poster4, alt: "Poster 4" },
    { id: 5, src: poster5, alt: "Poster 5" },
    { id: 6, src: poster6, alt: "Poster 6" },
  ];

  // Dynamically choose between Grid or Flex layout
  const Container = layout === "grid" ? GridContainer : FlexContainer;

  return (
    <Container>
      {images.map((img) => (
        <ImageCard key={img.id}>
          <Image src={img.src} alt={img.alt} />
        </ImageCard>
      ))}
    </Container>
  );
};

export default HomePage;
