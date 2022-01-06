import React from "react";
import styled from "styled-components";
import { Button, Container } from "../../globalStyles";
import Navbar from "../Navbar/Navbar";
function Hero() {
  return (
    <>
      <HeaderSection>
        <HeaderContainer>
          <VideoBg
            autoPlay
            loop
            muted
            src="https://res.cloudinary.com/starchypirate/video/upload/v1641431535/selfcare/SkincareBg_uyzcof.mp4"
            type="video/mp4"
          />
        </HeaderContainer>
        <HeaderContent>
          <Header>
            Personal care products made with the whole you in mind.
          </Header>
          <SubText>Explore a more mindful routine</SubText>
          <HeaderBtnWrap>
            <Button background>START NOW</Button>
          </HeaderBtnWrap>
        </HeaderContent>
      </HeaderSection>

      <Navbar />
    </>
  );
}

const HeaderSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 1;
  height: 100vh;
`;
const HeaderContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  overflow: hidden;
`;
const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
`;
const HeaderContent = styled(Container)`
  z-index: 3;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Header = styled.h1`
  color: var(--light);
  font-size: 64px;
  font-weight: 400;
  text-align: center;
  max-width: 600px;
  font-family: "Voyage-regular", serif;

  @media screen and (max-width: 768px) {
    font-size: 40px;
  }
`;
const SubText = styled.p`
  margin-top: 24px;
  color: var(--light);
  font-size: 24px;
  text-align: center;
  font-weight: 100;

  @media screen and (max-width: 768px) {
    font-size: 18px;
  }
`;
const HeaderBtnWrap = styled.div`
  margin-top: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default Hero;
