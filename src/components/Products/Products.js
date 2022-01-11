import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import { Button, Container } from "../../globalStyles";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function Products() {
  let header = useRef(null);
  let desc = useRef(null);
  let btn = useRef(null);

  let Reveal1 = useRef(null);
  let Reveal2 = useRef(null);
  let Reveal3 = useRef(null);
  let img1 = useRef(null);
  let img2 = useRef(null);
  let img3 = useRef(null);

  let Reveal4 = useRef(null);
  let image = useRef(null);
  let title1 = useRef(null);
  let title2 = useRef(null);
  let text = useRef(null);
  let btn2 = useRef(null);

  const tl = gsap.timeline({
    scrollTrigger: {
      ease: "power3.out",
      trigger: header.current,
      start: "2100px",
      toggleActions: "play",
      // markers: true,
    },
  });
  useEffect(() => {
    tl.from(header, 1.3, {
      delay: "-1.6",
      y: 55,
    })
      .from(desc, 1, {
        delay: "-1",
        opacity: "0",
        y: 20,
      })
      .from(btn, 1, {
        delay: "-0.3",
        opacity: "0",
        y: 20,
      });
  });

  const ntl = gsap.timeline({
    scrollTrigger: {
      ease: "power3.out",
      trigger: Reveal1.current,
      start: "2200px 10%",
      toggleActions: "play",
      // markers: true,
    },
  });
  useEffect(() => {
    ntl
      .to(Reveal1, 2, {
        height: "0%",
        delay: ".4",
      })
      .from(img1, 2, {
        scale: 1.6,
        delay: "-1.7",
      })
      .to(Reveal2, 2, {
        delay: "-2",
        height: "0%",
      })
      .from(img2, 2, {
        scale: 1.6,
        delay: "-1.7",
      })
      .to(Reveal3, 2, {
        delay: "-2",
        height: "0%",
      })
      .from(img3, 2, {
        scale: 1.6,
        delay: "-1.7",
      });
  });

  const nntl = gsap.timeline({
    scrollTrigger: {
      ease: "power2.out",
      trigger: Reveal4.current,
      start: "3000px",
      toggleActions: "play",
      // markers: true,
    },
  });

  useEffect(() => {
    nntl
      .to(Reveal4, 2, {
        width: "0%",
        delay: ".4",
      })
      .from(image, 2, {
        scale: 1.6,
        delay: "-1.7",
      })
      .from([title1, title2], 2, {
        delay: "-2",
        y: 58,
        stagger: { amount: 0.4 },
      })
      .from(text, 1.5, {
        delay: "-2",
        opacity: "0",
        y: "50",
      })
      .from(btn2, 1, {
        opacity: "0",
        delay: "-2",
      });
  });
  return (
    <>
      <ProductsSection>
        <ProductsContainer>
          <ProductItem type="text">
            <TextWrapper>
              <Header>
                <LineWrap>
                  <Line
                    ref={(el) => {
                      header = el;
                    }}
                  >
                    THE CHERRY ON TOP?
                  </Line>
                </LineWrap>
              </Header>
              <Description
                ref={(el) => {
                  desc = el;
                }}
              >
                Made with ingredients that soothe the physical manifestations of
                feelings.
              </Description>
              <Button
                ref={(el) => {
                  btn = el;
                }}
              >
                SHOP ALL
              </Button>
            </TextWrapper>
          </ProductItem>

          <ProductItem>
            <ProductReveal
              ref={(el) => {
                Reveal1 = el;
              }}
            />
            <ImageWrapper>
              <Image
                ref={(el) => {
                  img1 = el;
                }}
                src="https://res.cloudinary.com/starchypirate/image/upload/v1641857481/selfcare/drops_v2meyo.webp"
                alt="Selfcare Essential Oil"
              />
            </ImageWrapper>
            <Desc>
              <Text>SELFCARE ESSENTIAL OIL</Text>
              <ShopButton>SHOP NOW</ShopButton>
            </Desc>
          </ProductItem>

          <ProductItem>
            <ProductReveal
              ref={(el) => {
                Reveal2 = el;
              }}
            />
            <ImageWrapper>
              <Image
                ref={(el) => {
                  img2 = el;
                }}
                src="https://res.cloudinary.com/starchypirate/image/upload/v1641857481/selfcare/Oils_zirg01.webp"
                alt="Selfcare Moisturizing Oil"
              />
            </ImageWrapper>
            <Desc>
              <Text>SELFCARE MOISTURIZING OIL</Text>
              <ShopButton>SHOP NOW</ShopButton>
            </Desc>
          </ProductItem>

          <ProductItem>
            <ProductReveal
              ref={(el) => {
                Reveal3 = el;
              }}
            />
            <ImageWrapper>
              <Image
                ref={(el) => {
                  img3 = el;
                }}
                src="https://res.cloudinary.com/starchypirate/image/upload/v1641857481/selfcare/cream_jh1v5e.webp"
                alt="Selfcare Cream"
              />
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
            <TWrapper>
              <Title>
                <LineWrap>
                  <Line
                    ref={(el) => {
                      title1 = el;
                    }}
                  >
                    Re-imagining self-care for
                  </Line>
                </LineWrap>
                <LineWrap>
                  <Line
                    ref={(el) => {
                      title2 = el;
                    }}
                  >
                    every body and mind.
                  </Line>
                </LineWrap>
              </Title>
              <Subtitle
                ref={(el) => {
                  text = el;
                }}
              >
                Science shows that caring for your emotional well-being is just
                as important as your skin care routine. Our goal? To democratize
                access to education, inspire conversation, and destroy taboos
                around emotional wellness, and inspire thoughtful daily routines
                that go beyond physical self-maintenance. Join us as we dream up
                a new way to care in an effort to build moments of emotional
                exploration into your daily routine.
              </Subtitle>
              <Button
                ref={(el) => {
                  btn2 = el;
                }}
              >
                GET TO KNOW US
              </Button>
            </TWrapper>
          </Column>
          <Column>
            <LadyReveal
              ref={(el) => {
                Reveal4 = el;
              }}
            />
            <ImgWrapper>
              <Img
                ref={(el) => {
                  image = el;
                }}
                src="https://res.cloudinary.com/starchypirate/image/upload/v1641859347/selfcare/pexels-olha-ruskykh-6102176-2_s5fypr.webp"
                alt="Pretty lady with clear skin"
              />
            </ImgWrapper>
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
const ProductReveal = styled.div`
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  right: 0;
  background-color: var(--cream);
  z-index: 2;
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
`;
const LineWrap = styled.div`
  overflow: hidden;
  height: 58px;
`;
const Line = styled.div`
  font-family: "Voyage-regular", serif;
  font-size: 42px;

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
  height: 100%;
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

  @media screen and (max-width: 768px) {
    flex-direction: column-reverse;
    flex-wrap: nowrap;
  }
`;
const Column = styled.div`
  display: flex;
  flex: 1;
  flex-basis: 50%;
  max-width: 50%;
  justify-content: center;
  position: relative;
  /* cursor: ${(props) => props.type === "first" && "pointer"}; */

  @media screen and (max-width: 768px) {
    flex-basis: 100%;
    max-width: 100%;
    display: flex;
    justify-content: center;
    /* order: ${(props) => props.type === "first" && "1"}; */
  }
`;
const LadyReveal = styled.div`
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: var(--cream);
  z-index: 2;
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
