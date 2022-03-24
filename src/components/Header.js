import React, { useContext } from "react";
import styled from "styled-components";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import { selectCars } from "../features/car/productSlice";
import { useSelector } from "react-redux";
import { stateContext } from "../context/index";

function Header() {
  const action = useContext(stateContext);
  const cars = useSelector(selectCars);

  const handleBurger = () => {
    action.handleBackdrop();
  };

  return (
    <Container>
      <a href="#">
        <img src="/images/logo.svg" alt="tesla logo" />
      </a>
      <Menu>
        {cars &&
          cars.map((car, index) => (
            <a key={index} href={`#${car.name}`}>
              {car.name}
            </a>
          ))}
      </Menu>
      <RightMenu>
        <a href="#">Shop</a>
        <a href="#">Account</a>
        <CustomMenu onClick={handleBurger} />
      </RightMenu>
      <BurgerNav show={action.isBackdropOpen}>
        <CloseWrapper>
          <CustomClose onClick={handleBurger} />
        </CloseWrapper>
        {cars &&
          cars.map((car, index) => (
            <li key={index}>
              <a href={`#${car.name}`} onClick={handleBurger}>
                {car.name}
              </a>
            </li>
          ))}
        <li>
          <a href="#" onClick={handleBurger}>
            Existing Inventory
          </a>
        </li>
        <li>
          <a href="#" onClick={handleBurger}>
            Used Inventory
          </a>
        </li>
        <li>
          <a href="#" onClick={handleBurger}>
            Trade-in
          </a>
        </li>
        <li>
          <a href="#" onClick={handleBurger}>
            Cybertrunk
          </a>
        </li>
        <li>
          <a href="#" onClick={handleBurger}>
            Roadaster
          </a>
        </li>
      </BurgerNav>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  justify-content: center;

  a {
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;
    flex-wrap: nowrap;
    color: #000;
    transition: all 0.3s;

  }
  a:hover {
    background-color: rgba(0, 0, 0, 0.05);
    padding: 10px;
    border-radius: 20px;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const RightMenu = styled.div`
  display: flex;
  align-items: center;

  a {
    font-weight: 600;
    text-transform: uppercase;
    flex-wrap: nowrap;
    transition: all 0.3s;
    padding: 0 10px;
  }

  a:hover {
    background-color: rgba(0, 0, 0, 0.05);
    padding: 10px;
    border-radius: 20px;
  }
`;

const CustomMenu = styled(MenuIcon)`
  cursor: pointer;
`;

const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background: #fff;
  width: 300px;
  z-index: 16;
  list-style: none;
  padding: 20px;
  display: flex;
  flex-direction: column;
  text-align: start;
  transform: ${(props) => (props.show ? "translateX(0)" : "translateX(100%)")};
  transition: transform 0.3s ease;

  li {
    padding: 15px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);

    a {
      font-weight: 600;
    }
  }

  li:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }
`;

const CustomClose = styled(CloseIcon)`
  cursor: pointer;
`;

const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;
