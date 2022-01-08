import React from "react";
import styled from "styled-components";
import { Button, Container } from "../../globalStyles";

function Products() {
  return (
    <>
      <ProductsSection>
        <ProductsContainer>
          <ProductItem type="text">
            <TextWrapper>
              <Header>THE CHERRY ON TOP?</Header>
              <Description>
                Made with ingredients that soothe the physical manifestations of
                feelings.
              </Description>
              <Button>SHOP ALL</Button>
            </TextWrapper>
          </ProductItem>

          <ProductItem>
            <ImageWrapper>
              <Image src="https://res.cloudinary.com/starchypirate/image/upload/v1641516982/selfcare/WhatsApp_Image_2022-01-06_at_1.17.09_AM_nbspox.jpg" />
            </ImageWrapper>
            <Desc>
              <Text>SELFCARE ESSENTIAL OIL</Text>
              <ShopButton>SHOP NOW</ShopButton>
            </Desc>
          </ProductItem>

          <ProductItem>
            <ImageWrapper>
              <Image src="https://res.cloudinary.com/starchypirate/image/upload/v1641516979/selfcare/WhatsApp_Image_2022-01-06_at_1.17.09_AM-2_fvppmw.jpg" />
            </ImageWrapper>
            <Desc>
              <Text>SELFCARE MOISTURIZING OIL</Text>
              <ShopButton>SHOP NOW</ShopButton>
            </Desc>
          </ProductItem>

          <ProductItem>
            <ImageWrapper>
              <Image src="https://res.cloudinary.com/starchypirate/image/upload/v1641516982/selfcare/WhatsApp_Image_2022-01-06_at_1.17.10_AM_hpqqb3.jpg" />
            </ImageWrapper>
            <Desc>
              <Text>SELFCARE CREAM</Text>
              <ShopButton>SHOP NOW</ShopButton>
            </Desc>
          </ProductItem>
        </ProductsContainer>
      </ProductsSection>

      <ImagineSection>
        <ImagineContainer>
          <Column>
            <ImgWrapper>
              <Img src="https://res.cloudinary.com/starchypirate/image/upload/v1641604949/selfcare/pexels-olha-ruskykh-6102176-2_mirsrq.jpg" />
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
const ProductsSection = styled.section`
  display: flex;
  height: 80vh;
  padding: 24px 0px;

  @media screen and (max-width: 768px) {
    height: auto;
  }
`;
const ProductsContainer = styled(Container)`
  display: flex;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;
const Desc = styled.div`
  position: absolute;
  background-color: var(--light);
  display: flex;
  width: 100%;
  bottom: -20px;
  opacity: 0;
  border-top: 1px solid var(--dark);
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    bottom: 0px;
    opacity: 1;
  }
`;
const ProductItem = styled.div`
  flex: 1;
  border: 1px solid var(--dark);
  display: flex;
  position: relative;
  padding: ${(props) => props.type === "text" && "12px"};
  overflow: hidden;

  &:hover ${Desc} {
    bottom: 0px;
    opacity: 1;
    transition: all 0.2s linear;
  }
`;
const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;

  @media screen and (max-width: 768px) {
    align-items: center;
    justify-content: center;
  }
`;
const Header = styled.h2`
  font-family: "Voyage-regular", serif;
  font-size: 48px;

  @media screen and (max-width: 768px) {
    font-size: 32px;
    text-align: center;
  }
`;
const Description = styled.p`
  font-weight: 100;
  line-height: 2rem;
  margin: 24px 0px;

  @media screen and (max-width: 768px) {
    line-height: 1.5rem;
    font-size: 15px;
    margin: 12px 0px;
    text-align: center;
  }
`;

const ImageWrapper = styled.div`
  display: flex;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    width: 400px;
  }
`;
const Image = styled.img`
  width: 100%;
  object-fit: cover;
`;
const Text = styled.h3`
  font-size: 14px;
  font-weight: 300;
  padding: 12px 12px;
`;
const ShopButton = styled.button`
  background-color: var(--dark);
  outline: none;
  border: none;
  color: var(--light);
  padding: 12px 24px;
  cursor: pointer;

  &:hover {
    background-color: #393737;
  }
`;
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
    display: flex;
    justify-content: center;
  }
`;
const ImgWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 700px;
  height: 500px;
  overflow: hidden;

  @media screen and (max-width: 768px) {
    width: 500px;
    height: 500px;
    overflow: hidden;
  }
`;
const Img = styled.img`
  width: 650px;
  overflow: hidden;

  @media screen and (max-width: 768px) {
    width: 700px;
  }
`;
const TWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media screen and (max-width: 768px) {
    margin-top: 36px;
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
