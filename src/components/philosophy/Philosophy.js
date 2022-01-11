import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Container } from "../../globalStyles";

gsap.registerPlugin(ScrollTrigger);

function Philosophy() {
  let reveal = useRef(null);
  let image = useRef(null);
  let line = useRef(null);
  let subtext = useRef(null);
  let icon1 = useRef(null);
  let icon2 = useRef(null);
  let icon3 = useRef(null);
  let icon4 = useRef(null);
  let icon5 = useRef(null);
  let icon6 = useRef(null);
  let video1 = useRef(null);
  let video2 = useRef(null);
  let text1 = useRef(null);
  let text2 = useRef(null);

  const tl = gsap.timeline({
    scrollTrigger: {
      ease: "power3.out",
      trigger: reveal.current,
      start: "800px",
      toggleActions: "play",
    },
  });

  useEffect(() => {
    tl.to(reveal, {
      duration: "2",
      width: "0%",
    }).from(image, 2, {
      scale: 1.6,
      delay: "-1.7",
    });
    tl.from(line, 1, {
      delay: "-1.6",
      y: 55,
    })
      .from(subtext, 1, {
        delay: "-1",
        y: 55,
        opacity: "0",
      })
      .from([icon1, icon2, icon3, icon4, icon5, icon6], 1, {
        delay: "-0.5",
        opacity: "0",
        stagger: {
          amount: 0.3,
        },
      })
      .from([video1, video2], 2, {
        delay: "-1",
        opacity: "0",
        stagger: { amount: 0.6 },
      })
      .from([text1, text2], 1, {
        delay: "-2",
        opacity: "0",
        stagger: { amount: 0.6 },
      });
  });
  let vids = [
    "https://res.cloudinary.com/starchypirate/video/upload/v1641431536/selfcare/CLEAN_d0dvrs.mp4",
    "https://res.cloudinary.com/starchypirate/video/upload/v1641431745/selfcare/CRUELTY_bmobnb.mp4",
    "https://res.cloudinary.com/starchypirate/video/upload/v1641431527/selfcare/SKINTYPES_kfdp8p.mp4",
  ];
  return (
    <>
      <PhilosophySection>
        <PhilosophyContainer>
          <Column>
            <ImageWrapper>
              <ImageReveal
                ref={(el) => {
                  reveal = el;
                }}
              />
              <Image
                ref={(el) => {
                  image = el;
                }}
                src="https://res.cloudinary.com/starchypirate/image/upload/v1641859758/selfcare/hands_gel8is.webp"
                alt="hands in contact"
              />
            </ImageWrapper>
          </Column>
          <Column>
            <TextWrapper>
              <Header>
                <LineWrap>
                  <Line
                    ref={(el) => {
                      line = el;
                    }}
                  >
                    OUR PHILOSOPHY
                  </Line>
                </LineWrap>
              </Header>
              <SubText
                ref={(el) => {
                  subtext = el;
                }}
              >
                Emotionally intelligent personal care, made to nurture your
                emotional world and your physical self. Healing-centered and
                science-driven, we're here to support you inside and out.
              </SubText>
            </TextWrapper>
          </Column>
        </PhilosophyContainer>
      </PhilosophySection>

      <LogosSection>
        <LogosContainer>
          <LogoItem
            ref={(el) => {
              icon5 = el;
            }}
          >
            <Logo
              src="https://res.cloudinary.com/starchypirate/image/upload/v1641859759/selfcare/Vogue_hjdhsv.webp"
              alt="Vogue logo"
            />
          </LogoItem>
          <LogoItem
            ref={(el) => {
              icon3 = el;
            }}
          >
            <Logo
              src="https://res.cloudinary.com/starchypirate/image/upload/v1641859757/selfcare/Cosmopolitan_yzlszs.webp"
              alt="Cosmopolitan logo"
            />
          </LogoItem>
          <LogoItem
            ref={(el) => {
              icon1 = el;
            }}
          >
            <Logo
              src="https://res.cloudinary.com/starchypirate/image/upload/v1641859759/selfcare/Vanity_iojyc9.webp"
              alt="Vanity logo"
            />
          </LogoItem>
          <LogoItem
            ref={(el) => {
              icon2 = el;
            }}
          >
            <Logo
              src="https://res.cloudinary.com/starchypirate/image/upload/v1641859757/selfcare/Elle_gjbcmj.webp"
              alt="Elle logo"
            />
          </LogoItem>
          <LogoItem
            ref={(el) => {
              icon4 = el;
            }}
          >
            <Logo
              src="https://res.cloudinary.com/starchypirate/image/upload/v1641859758/selfcare/people_vaxzyq.webp"
              alt="People logo"
            />
          </LogoItem>
          <LogoItem
            ref={(el) => {
              icon6 = el;
            }}
          >
            <Logo
              src="https://res.cloudinary.com/starchypirate/image/upload/v1641859757/selfcare/Glamour_ubw5kh.webp"
              alt="Glamour logo"
            />
          </LogoItem>
        </LogosContainer>
      </LogosSection>

      <VideosSection>
        <VideosContainer>
          <VideoItem>
            <VideoWrapper
              ref={(el) => {
                video1 = el;
              }}
            >
              <Video autoPlay muted loop src={vids[0]} type="video/mp4" />
            </VideoWrapper>
            <TWrapper
              ref={(el) => {
                text1 = el;
              }}
            >
              <Title>CLEAN</Title>
              <Description>and non toxic</Description>
            </TWrapper>
          </VideoItem>
          {/* <VideoItem>
            <VideoWrapper>
              <Video autoPlay muted loop src={vids[1]} />
            </VideoWrapper>
            <TWrapper>
              <Title>CRUELTY-</Title>
              <Description>free</Description>
            </TWrapper>
          </VideoItem> */}
          <VideoItem>
            <VideoWrapper
              ref={(el) => {
                video2 = el;
              }}
            >
              <Video autoPlay muted loop src={vids[2]} type="video/mp4" />
            </VideoWrapper>
            <TWrapper
              ref={(el) => {
                text2 = el;
              }}
            >
              <Title>MADE</Title>
              <Description>for all skin types</Description>
            </TWrapper>
          </VideoItem>
        </VideosContainer>
      </VideosSection>

      <MarqueeSection>
        <MarqueeContainer>
          <MarqueeItem>&nbsp; NO FORMALDEHYDES</MarqueeItem>
          <MarqueeItem>&nbsp; NO MICROPLASTICS</MarqueeItem>
          <MarqueeItem>&nbsp; NO HORMONE DISRUPTING INGREDIENTS</MarqueeItem>
          <MarqueeItem>&nbsp; NO PARABENS</MarqueeItem>
          <MarqueeItem>&nbsp; NO PHALATES</MarqueeItem>
          <MarqueeItem>&nbsp; ALCOHOL FREE</MarqueeItem>
          <MarqueeItem>&nbsp; NO SULFATES</MarqueeItem>
          <MarqueeItem>&nbsp; SILICONE FREE</MarqueeItem>
          <MarqueeItem>&nbsp; NO FORMALDEHYDES</MarqueeItem>
          <MarqueeItem>&nbsp; NO MICROPLASTICS</MarqueeItem>
          <MarqueeItem>&nbsp; NO HORMONE DISRUPTING INGREDIENTS</MarqueeItem>
          <MarqueeItem>&nbsp; NO PARABENS</MarqueeItem>
          <MarqueeItem>&nbsp; NO PHALATES</MarqueeItem>
          <MarqueeItem>&nbsp; ALCOHOL FREE</MarqueeItem>
          <MarqueeItem>&nbsp; NO SULFATES</MarqueeItem>
          <MarqueeItem>&nbsp; SILICONE FREE</MarqueeItem>
          <MarqueeItem>&nbsp; NO FORMALDEHYDES</MarqueeItem>
          <MarqueeItem>&nbsp; NO MICROPLASTICS</MarqueeItem>
          <MarqueeItem>&nbsp; NO HORMONE DISRUPTING INGREDIENTS</MarqueeItem>
          <MarqueeItem>&nbsp; NO PARABENS</MarqueeItem>
          <MarqueeItem>&nbsp; NO PHALATES</MarqueeItem>
          <MarqueeItem>&nbsp; ALCOHOL FREE</MarqueeItem>
          <MarqueeItem>&nbsp; NO SULFATES</MarqueeItem>
          <MarqueeItem>&nbsp; SILICONE FREE</MarqueeItem>
          <MarqueeItem>&nbsp; NO FORMALDEHYDES</MarqueeItem>
          <MarqueeItem>&nbsp; NO MICROPLASTICS</MarqueeItem>
          <MarqueeItem>&nbsp; NO HORMONE DISRUPTING INGREDIENTS</MarqueeItem>
          <MarqueeItem>&nbsp; NO PARABENS</MarqueeItem>
          <MarqueeItem>&nbsp; NO PHALATES</MarqueeItem>
          <MarqueeItem>&nbsp; ALCOHOL FREE</MarqueeItem>
          <MarqueeItem>&nbsp; NO SULFATES</MarqueeItem>
          <MarqueeItem>&nbsp; SILICONE FREE</MarqueeItem>
        </MarqueeContainer>
      </MarqueeSection>
    </>
  );
}

const PhilosophySection = styled.section`
  display: flex;
`;
const PhilosophyContainer = styled(Container)`
  display: flex;
  flex-wrap: wrap;
`;
const Column = styled.div`
  background-color: var(--light);
  display: flex;
  flex-basis: 50%;
  max-width: 50%;
  flex: 1;

  @media screen and (max-width: 768px) {
    flex-basis: 100%;
    max-width: 100%;
    display: flex;
    justify-content: center;
  }
`;
const ImageWrapper = styled.div`
  display: flex;
  position: relative;
  width: 768px;
  height: 600px;
  overflow: hidden;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 960px) {
    width: 600px;
  }
`;

const ImageReveal = styled.div`
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  right: 0;
  background-color: #fff;
  z-index: 2;
`;
const Image = styled.img`
  width: 800px;
  height: 1300px;
  position: relative;
  top: 40%;

  @media screen and (max-width: 769px) {
    width: 600px;
  }
`;
const TextWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: flex-end;

  @media screen and (max-width: 768px) {
    margin-top: 36px;
    padding: 0px 20px;
  }
`;
const Header = styled.h2`
  font-size: 48px;
  font-family: "Voyage-regular", serif;
  color: var(--dark);
  letter-spacing: 1px;
  font-weight: 400;

  @media screen and (max-width: 768px) {
    font-size: 36px;
  }
`;
const LineWrap = styled.div`
  overflow: hidden;
  height: 50px;
`;
const Line = styled.div`
  font-family: "Voyage-regular", serif;
  font-size: 48px;

  @media screen and (max-width: 768px) {
    font-size: 36px;
  }
`;
const SubText = styled.p`
  font-size: 18px;
  color: var(--dark);
  line-height: 2rem;
  font-weight: 100;
  margin: 48px 0px;
  max-width: 600px;

  @media screen and (max-width: 768px) {
    margin: 18px 0px;
    font-size: 15px;
    line-height: 1.8rem;
  }
`;

const LogosSection = styled.section`
  background-color: var(--warm);
  display: flex;
  border: 1px solid var(--dark);
`;
const LogosContainer = styled(Container)`
  padding: 6px 20px;
  justify-content: space-between;
  align-items: center;
`;
const LogoItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
`;
const Logo = styled.img`
  width: 70px;
  /* height: 20px; */

  @media screen and (max-width: 768px) {
    width: 40px;
  }
`;

const VideosSection = styled.section`
  display: flex;
  background-color: var(--cream);
  padding: 64px 0px;
`;
const VideosContainer = styled(Container)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
const VideoItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const VideoWrapper = styled.div`
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 400px;
  height: 300px;
  overflow: hidden;

  @media screen and (max-width: 768px) {
    width: 350px;
    height: 290px;
  }

  @media screen and (max-width: 320px) {
    width: 300px;
    height: 290px;
  }
  @media screen and (max-width: 280px) {
    width: 250px;
  }
`;
const Video = styled.video`
  width: 400px;
  border-radius: 50%;

  @media screen and (max-width: 768px) {
    width: 350px;
  }
  @media screen and (max-width: 320px) {
    width: 300px;
  }
  @media screen and (max-width: 280px) {
    width: 250px;
  }
`;
const TWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Title = styled.h2`
  color: var(--dark);
  font-family: "Voyage-regular", serif;
  letter-spacing: 1px;
  font-weight: 400;
  font-size: 36px;

  @media screen and (max-width: 768px) {
    font-size: 28px;
  }
`;
const Description = styled.p`
  color: var(--dark);
  margin-top: 12px;
  font-weight: 100;
`;

const MarqueeSection = styled.section`
  width: 100%;
  overflow: hidden;
  margin: 64px 0px;
`;
const MarqueeContainer = styled(Container)`
  display: flex;
  align-items: center;
  white-space: nowrap;
  width: fit-content;
  will-change: transform;
  animation: animation-reel 220s infinite linear;

  @keyframes animation-reel {
    from {
      transform: translateX(0%);
    }
    to {
      transform: translateX(-100%);
    }
  }
`;
const MarqueeItem = styled.div`
  font-size: 14px;
  font-weight: 300;
  margin: 0px 36px;
`;
export default Philosophy;
