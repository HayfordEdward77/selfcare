import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Container } from "../../globalStyles";
import { arrow, fb, ig, logo, tik } from "../../media";

function Footer() {
  return (
    <>
      <FooterSection>
        <FooterContainer>
          <Column>
            <LogoWrapper>
              <Logo src={logo} />
            </LogoWrapper>
          </Column>
          <Column>
            <FormWrapper>
              <Text>We respect your inbox boundaries</Text>
              <Form>
                <Input name="email" placeholder="ENTER EMAIL" />
                <Submit>
                  <Arrow src={arrow} />
                </Submit>
              </Form>
            </FormWrapper>
          </Column>
          <Column>
            <LinksContainer>
              <TextLinks>
                <LinkColumn>
                  <LinkWrapper>
                    <HyperLink>Shop all</HyperLink>
                  </LinkWrapper>
                  <LinkWrapper>
                    <HyperLink>Membership</HyperLink>
                  </LinkWrapper>
                  <LinkWrapper>
                    <HyperLink>FAQ</HyperLink>
                  </LinkWrapper>
                </LinkColumn>
                <LinkColumn>
                  <LinkWrapper>
                    <HyperLink>About</HyperLink>
                  </LinkWrapper>
                  <LinkWrapper>
                    <HyperLink>T&Cs</HyperLink>
                  </LinkWrapper>
                  <LinkWrapper>
                    <HyperLink>Privacy Policy</HyperLink>
                  </LinkWrapper>
                </LinkColumn>
                <LinkColumn>
                  <LinkWrapper>
                    <HyperLink>Contact us</HyperLink>
                  </LinkWrapper>
                  <LinkWrapper>
                    <HyperLink>Shipping & returns</HyperLink>
                  </LinkWrapper>
                </LinkColumn>
              </TextLinks>
              <SocialLinks>
                <LinkWrapper>
                  <Social src={fb} />
                </LinkWrapper>
                <LinkWrapper>
                  <Social src={ig} />
                </LinkWrapper>
                <LinkWrapper>
                  <Social src={tik} />
                </LinkWrapper>
              </SocialLinks>
            </LinksContainer>
          </Column>
        </FooterContainer>
      </FooterSection>
    </>
  );
}

const FooterSection = styled.section`
  display: flex;
  background-color: var(--cream);
`;
const FooterContainer = styled(Container)`
  display: grid;
  grid-template-columns: 1fr 2fr 3fr;
  gap: 0px;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
const Column = styled.div`
  background-color: var(--light);

  display: flex;
  justify-content: center;
  border: 1px solid var(--dark);

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;
const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0px 50px;

  @media screen and (max-width: 768px) {
    padding: 50px 50px;
  }
`;
const Logo = styled.img`
  width: 100px;
`;
const FormWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 0px 50px;

  @media screen and (max-width: 768px) {
    padding: 50px 50px;
  }
`;
const Text = styled.p`
  font-size: 14px;
  font-weight: 300;
`;
const Form = styled.form`
  margin-top: 24px;
  border-bottom: 1px solid var(--dark);
  padding: 10px 0px;
`;
const Input = styled.input`
  outline: none;
  font-size: 14px;
  border: none;
`;
const Submit = styled(Link)``;
const Arrow = styled.img`
  width: 30px;
`;
const LinksContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;
const TextLinks = styled.div`
  display: flex;
  align-items: flex-start;
`;
const LinkColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
const LinkWrapper = styled(Link)`
  padding: 20px;
  text-decoration: none;

  @media screen and (max-width: 768px) {
    padding: 15px;
  }
`;
const HyperLink = styled.p`
  font-size: 14px;
  color: var(--dark);
  font-weight: 300;
`;
const SocialLinks = styled.div`
  display: flex;
  align-items: center;
  padding-left: 100px;

  @media screen and (max-width: 768px) {
    padding-left: 0px;
  }
`;
const Social = styled.img`
  width: 30px;
`;
export default Footer;
