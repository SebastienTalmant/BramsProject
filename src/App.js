import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import styled from 'styled-components';
import Home from './pages/home';
import Services from './pages/services';
import Contact from './pages/contact';
import Fleet from './pages/fleet';
import Galery from './pages/galery';
import logo from './pictures/logo.png';


const Header = styled.header`
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 80px;
  text-align: center;
  transition: top 0.3s;
  z-index: 1;
  @media (min-width: 768px) {
    background-color: #FBFBFB;
  }
`;

const ImageLogo = styled.img`
  height: 60px;
  @media (min-width: 768px) {
    height: 80px;
  }
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 75%;
  background-color: #FBFBFB;
  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
  position: absolute;
  top: 0px;
  right: 0;
  font-family: 'signika', serif;
  font-size: 1.5rem;
  padding-top: 100px;
  padding-bottom: 100px;
  @media (min-width: 768px) {
    position: static;
    flex-direction: row;
    justify-content: flex-end;
    transform: none;
    font-size: 1.2rem;
    padding-top: 0px;
    padding-bottom: 0px;
  }
`;



const NavLink = styled(Link)`
  position: relative;
  margin: 0 30px;
  text-decoration: none;
  font-family: 'signika', sans-serif;
  color: #14327C;
  margin-top: 20px;
  font-size: 1.5rem;

  &:before {
    content: '';
    display: block;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 1px;
    background-color: #14327C;
    transition: width 0.5s;
  }

  &:hover:before {
    width: 100%;
  }

  @media (min-width: 768px) {
    margin-top: 0px;
  }
`;

const BurgerButton = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;
  margin-right: 20px;
  @media (min-width: 768px) {
    display: none;
  }
`;

const BurgerLine = styled.div`
  width: 2rem;
  height: 0.25rem;
  background: #14327C;
  border-radius: 10px;
  transition: all 0.3s linear;
  position: relative;
  transform-origin: 1px;

  :first-child {
    transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
  }

  :nth-child(2) {
    opacity: ${({ open }) => open ? '0' : '1'};
  }

  :nth-child(3) {
    transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
  }
`;

function App() {

  const [open, setOpen] = useState(false);

  const closeMenu = () => {
    setOpen(false);
  }
  return (
      <Router>
        <Header>          
          <ImageLogo src={logo} alt="Logo" />
          <BurgerButton open={open} onClick={() => setOpen(!open)}>
            <BurgerLine open={open} />
            <BurgerLine open={open} />
            <BurgerLine open={open} />
          </BurgerButton>
          <Nav open={open}>
            <NavLink to="/" onClick={closeMenu}>Accueil</NavLink>
            <NavLink to="/prestations" onClick={closeMenu}>Nos prestations</NavLink>
            <NavLink to="/fleet" onClick={closeMenu}>Notre flotte</NavLink>
            <NavLink to="/galery" onClick={closeMenu}>Galerie</NavLink>
            <NavLink to="/contact" onClick={closeMenu}>Contact</NavLink>
          </Nav>
        </Header>

        <Routes>
          <Route path="/prestations" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/fleet" element={<Fleet />} />
          <Route path="/" element={<Home />} />
          <Route path="/galery" element={<Galery />} />
        </Routes>
      </Router>
  );
}

export default App;

