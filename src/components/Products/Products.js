import React from "react";
import styled from "styled-components";
import { Button, Container } from "../../globalStyles";
import { lady } from "../../media";

function Products() {
  return (
    <>
      <ProductsSection>
        <ProductsContainer>
          <ProductItem>
            <TextWrapper></TextWrapper>
          </ProductItem>
        </ProductsContainer>
      </ProductsSection>

      <ImagineSection>
        <ImagineContainer>
          <Column>
            <ImgWrapper>
              <Img src={lady} />
            </ImgWrapper>
          </Column>
          <Column>
            <TWrapper>
              <Title>Re-imagining self-care for every body and mind</Title>
              <Subtitle>
                Science shows that caring for your emotional well-being is just
                as important as your skin care routine. Our goal? To democratize
                access to education, inspire conversation, and destroy taboos
                around emotional wellness, and inspire thoughtful daily routines
                that go beyond physical self-maintenance. Join us as we dream up
                a new way to care in an effort to build moments of emotional
                exploration into your daily routine.
              </Subtitle>
              <Button>GET TO KNOW US</Button>
            </TWrapper>
          </Column>
        </ImagineContainer>
      </ImagineSection>
    </>
  );
}
const ProductsSection = styled.section``;
const ProductsContainer = styled(Container)``;
const ProductItem = styled.div``;
const TextWrapper = styled.div``;

const ImagineSection = styled.section`
  display: flex;
  justify-content: center;
  padding: 144px 0px;
`;
const ImagineContainer = styled(Container)`
  display: flex;
  flex-wrap: wrap;
`;
const Column = styled.div`
  display: flex;
  flex: 1;
  flex-basis: 50%;
  max-width: 50%;

  @media screen and (max-width: 768px) {
    flex-basis: 100%;
    max-width: 100%;
  }
`;
const ImgWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 768px) {
    width: 400px;
  }
`;
const Img = styled.img`
  width: 750px;

  @media screen and (max-width: 768px) {
    width: 350px;
  }
`;
const TWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media screen and (max-width: 768px) {
    margin-top: 24px;
  }
`;
const Title = styled.h2`
  color: var(--dark);
  font-size: 36px;
  font-family: "Voyage-regular", serif;
  text-align: center;
  letter-spacing: 1px;
  font-weight: 400;
  max-width: 600px;

  @media screen and (max-width: 768px) {
    font-size: 28px;
  }
`;
const Subtitle = styled.p`
  font-weight: 100;
  margin: 36px 0px;
  line-height: 2rem;
  text-align: center;
  max-width: 600px;
  font-size: 15px;

  @media screen and (max-width: 768px) {
    margin: 18px 0px;
  }
`;
export default Products;
