import React from "react";
import styled from "styled-components";
import { Container } from "../../globalStyles";
import {
  clean,
  cosmopolitan,
  cruelty,
  elle,
  glamour,
  people,
  philosophy,
  skin,
  vanity,
  vogue,
} from "../../media";

function Philosophy() {
  return (
    <>
      <PhilosophySection>
        <PhilosophyContainer>
          <Column>
            <ImageWrapper>
              <Image src={philosophy} />
            </ImageWrapper>
          </Column>
          <Column>
            <TextWrapper>
              <Header>OUR PHILOSOPHY</Header>
              <SubText>
                Emotionally intelligent personal care, made to nurture your
                emotional world and your physical self. Healing-centered and
                science-driven, we’re here to support you inside and out.
              </SubText>
            </TextWrapper>
          </Column>
        </PhilosophyContainer>
      </PhilosophySection>

      <LogosSection>
        <LogosContainer>
          <LogoItem>
            <Logo src={vogue} />
          </LogoItem>
          <LogoItem>
            <Logo src={cosmopolitan} />
          </LogoItem>
          <LogoItem>
            <Logo src={vanity} />
          </LogoItem>
          <LogoItem>
            <Logo src={elle} />
          </LogoItem>
          <LogoItem>
            <Logo src={people} />
          </LogoItem>
          <LogoItem>
            <Logo src={glamour} />
          </LogoItem>
        </LogosContainer>
      </LogosSection>

      <VideosSection>
        <VideosContainer>
          <VideoItem>
            <VideoWrapper>
              <Video autoPlay muted loop src={clean} />
            </VideoWrapper>
            <TWrapper>
              <Title>CLEAN</Title>
              <Description>and non toxic</Description>
            </TWrapper>
          </VideoItem>
          <VideoItem>
            <VideoWrapper>
              <Video autoPlay muted loop src={cruelty} />
            </VideoWrapper>
            <TWrapper>
              <Title>CRUELTY-</Title>
              <Description>free</Description>
            </TWrapper>
          </VideoItem>
          <VideoItem>
            <VideoWrapper>
              <Video autoPlay muted loop src={skin} />
            </VideoWrapper>
            <TWrapper>
              <Title>MADE</Title>
              <Description>for all skin types</Description>
            </TWrapper>
          </VideoItem>
        </VideosContainer>
      </VideosSection>
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
  width: 768px;
  height: 600px;
  overflow: hidden;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 960px) {
    width: 600px;
  }
`;
const Image = styled.img`
  width: 800px;
  position: relative;
  top: 40%;

  @media and screen and (max-width: 769px) {
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
  color: var(--dark);

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
  padding: 12px 20px;
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
  grid-template-columns: repeat(3, 1fr);

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
`;
const Video = styled.video`
  width: 400px;
  border-radius: 50%;

  @media screen and (max-width: 768px) {
    width: 350px;
  }
`;
const TWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Title = styled.h2`
  color: var(--dark);
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
export default Philosophy;
