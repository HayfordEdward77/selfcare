import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import { Button, Container } from "../../globalStyles";
import Navbar from "../Navbar/Navbar";
import { gsap } from "gsap";

function Hero() {
  let line1 = useRef(null);
  let line2 = useRef(null);
  let line3 = useRef(null);

  let subtext = useRef(null);
  let button = useRef(null);

  const tl = gsap.timeline();

  useEffect(() => {
    tl.from([line1, line2, line3], 2, {
      delay: 1,
      ease: "power3.out",
      y: 88,
      stagger: { amount: 0.4 },
    }).from([subtext, button], 1, {
      delay: "-1",
      ease: "power.out",
      opacity: "0",
      y: 24,
      stagger: { amount: 0.3 },
    });
  });
  return (
    <>
      <HeaderSection>
        <HeaderContainer>
          <VideoBg
            autoPlay
            loop
            muted
            src="https://res.cloudinary.com/starchypirate/video/upload/v1641824646/selfcare/SkincareBg_bqacg9.mp4"
            type="video/mp4"
          />
        </HeaderContainer>
        <HeaderContent>
          <Header>
            <LineWrap>
              <Line
                ref={(el) => {
                  line1 = el;
                }}
              >
                Personal care products
              </Line>
            </LineWrap>
            <LineWrap>
              <Line
                ref={(el) => {
                  line2 = el;
                }}
              >
                made with the whole you
              </Line>
            </LineWrap>
            <LineWrap>
              <Line
                ref={(el) => {
                  line3 = el;
                }}
              >
                in mind.
              </Line>
            </LineWrap>
          </Header>
          <SubText
            ref={(el) => {
              subtext = el;
            }}
          >
            Explore a more mindful routine
          </SubText>
          <HeaderBtnWrap
            ref={(el) => {
              button = el;
            }}
          >
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
  font-size: 72px;
  font-weight: 400;
  text-align: center;
  max-width: 800px;
  font-family: "Voyage-regular", serif;

  @media screen and (max-width: 768px) {
    font-size: 40px;
    max-width: 400px;
  }
`;
const LineWrap = styled.div`
  overflow: hidden;
  height: 90px;

  @media screen and (max-width: 768px) {
    height: 50px;
  }
`;
const Line = styled.div`
  font-family: "Voyage-regular", serif;
  font-size: 72px;

  @media screen and (max-width: 768px) {
    font-size: 38px;
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
