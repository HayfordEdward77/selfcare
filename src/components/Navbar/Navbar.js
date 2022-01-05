import React, { useState } from "react";
import styled from "styled-components";
import { logo, bag, search } from "../../media";
import { Link } from "react-router-dom";
import {
  IoMenuOutline,
  IoSearchOutline,
  IoCloseOutline,
} from "react-icons/io5";
function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const closeMobileMenu = () => setClick(false);
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavItem>
            <NavLink>
              <Icon src={search} />
            </NavLink>
            <NavLink to="/Shop">SHOP</NavLink>
            <NavLink to="/About">ABOUT</NavLink>
          </NavItem>

          <MobileIcon onClick={handleClick}>
            <IoMenuOutline />
          </MobileIcon>

          <NavLogo to="/" onClick={closeMobileMenu}>
            <Img src={logo} />
          </NavLogo>

          <MobileSearchIcon>
            <IoSearchOutline />
          </MobileSearchIcon>

          <NavItem>
            <NavLink to="/Membership">MEMBERSHIP</NavLink>
            <NavLink to="/Login">LOGIN</NavLink>
            <NavLink>
              <Icon src={bag} />
            </NavLink>
          </NavItem>
        </NavbarContainer>
      </Nav>

      <MobileNav click={click}>
        <MobileNavContainer>
          <NavHeaderWrapper>
            <MobileCloseIcon>
              <IoCloseOutline onClick={handleClick} />
            </MobileCloseIcon>
            <NavLogo to="/" onClick={closeMobileMenu}>
              <Img src={logo} />
            </NavLogo>
            <MobileSearchedIcon>
              <Icon src={bag} />
            </MobileSearchedIcon>
          </NavHeaderWrapper>

          <NavItemsWrapper>
            <MobileNavItem>
              <NavLink to="/Shop">SHOP</NavLink>
            </MobileNavItem>
            <MobileNavItem>
              <NavLink to="/About">ABOUT</NavLink>
            </MobileNavItem>
            <MobileNavItem>
              <NavLink to="/Membership">MEMBERSHIP</NavLink>
            </MobileNavItem>
            <MobileNavItem>
              <NavLink to="/Login">LOGIN</NavLink>
            </MobileNavItem>
          </NavItemsWrapper>
        </MobileNavContainer>
      </MobileNav>
    </>
  );
}

const Nav = styled.nav`
  background: var(--light);
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 16px;
  position: sticky;
  border: 1px solid var(--dark);
  z-index: 998;
  top: 0;
`;

const NavbarContainer = styled.div`
  z-index: 1;
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  padding: 0px 20px;
  display: flex;
  justify-content: space-between;
  height: 80px;
`;
const MobileNav = styled.div`
  top: ${({ click }) => (click ? 0 : "-500%")};
  z-index: 999;
  display: block;
  position: fixed;
  background-color: var(--light);
  height: 100%;
  width: 100%;
  transition: all 0.5s ease;
`;
const MobileNavContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const NavHeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid var(--dark);
  width: 100%;
  padding: 20px 10px;
`;
const MobileCloseIcon = styled.div`
  display: flex;
  cursor: pointer;
  font-size: 1.8rem;
  align-items: center;
  justify-content: center;
`;
const MobileSearchedIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 1.8rem;
`;
const NavItemsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
`;
const MobileNavItem = styled.div`
  display: flex;
  border: 1px solid var(--dark);
  padding: 12px 20px;
  width: 150px;
  align-items: center;
  justify-content: center;
  margin: 8px 0px;
  border-radius: 50px;
`;
const NavItem = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled(Link)`
  color: var(--dark);
  display: flex;
  align-items: center;
  text-decoration: none;
  justify-content: center;
  text-align: center;
  font-size: 12px;
  font-weight: 300;
  margin: 0px 24px;

  @media screen and (max-width: 768px) {
    margin: 0px 10px;
  }
`;

const NavLogo = styled(Link)`
  justify-content: center;
  cursor: pointer;
  display: flex;
  align-items: center;
  padding-left: 40px;

  @media screen and (max-width: 768px) {
    padding-left: 0px;
  }
`;

const Img = styled.img`
  width: 100px;
`;
const Icon = styled.img`
  width: 20px;
`;
const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    top: 0;
    left: 0;
    transform: translate(0%, 35%);
    cursor: pointer;
    font-size: 1.8rem;
  }
`;
const MobileSearchIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    top: 0;
    right: 0;
    transform: translate(0%, 35%);
    cursor: pointer;
    font-size: 1.8rem;
  }
`;

export default Navbar;
