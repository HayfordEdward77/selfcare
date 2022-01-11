import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import Hero from "../components/Hero/Hero";
import Philosophy from "../components/philosophy/Philosophy";
import Products from "../components/Products/Products";
import { gsap } from "gsap";

function Home() {
  let container = useRef(null);
  let pageReveal = useRef(null);

  const tl = gsap.timeline();

  useEffect(() => {
    tl.to(container, 0, {
      css: { visibility: "visible", height: "auto", position: "relative" },
    }).to(pageReveal, 1.4, { height: "0%", ease: "power3.out" });
  });
  return (
    <Container
      ref={(el) => {
        container = el;
      }}
    >
      <HeroWrapper
        ref={(el) => {
          pageReveal = el;
        }}
      />
      <Hero />
      <Philosophy />
      <Products />
    </Container>
  );
}

const Container = styled.div`
  position: fixed;
  height: 100vh;
  visibility: hidden;
`;
const HeroWrapper = styled.div`
  content: "";
  width: 100%;
  top: 0;
  right: 0;
  background-color: var(--cream);
  z-index: 2000;
  height: 100%;
  position: absolute;
`;

export default Home;
