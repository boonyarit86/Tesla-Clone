import React from "react";
import styled from "styled-components";
import Section from "./Section";
import { selectCars } from "../features/car/productSlice";
import { useSelector } from "react-redux";

function Home() {
  const cars = useSelector(selectCars);
    
  return (
    <Container>
      {cars.map((car, index) => (
        <Section
          key={index}
          title={car.name}
          description={car.description}
          backgroundImg={car.image}
          leftBtnText="Custom order"
          rightBtnText="Existing inventory"
          nextSection={cars.length !== (index + 1) ? cars[index + 1].name : ""}
        />
      ))}
      <Section
        title="Lowest Cost Solar Panels in America"
        description="Money-back guarantee"
        backgroundImg="solar-panel.jpg"
        leftBtnText="Order now"
        rightBtnText="Learn more"
      />
      <Section
        title="Solar for New Roofs"
        description="Solar Roof Costs Less Than a New Roof Plus Solar Panels"
        backgroundImg="solar-roof.jpg"
        leftBtnText="Order now"
        rightBtnText="Learn more"
      />
      <Section
        title="Accessories"
        description=""
        backgroundImg="accessories.jpg"
        leftBtnText="Shop now"
      />
    </Container>
  );
}

export default Home;

const Container = styled.div`
  height: 100vh;
`;
