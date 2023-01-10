import "./App.css";
import styled from "styled-components";
import IconOne from "../src/images/icon-sedans.svg";
import IconTwo from "../src/images/icon-suvs.svg";
import IconThree from "../src/images/icon-luxury.svg";

function App() {
  const StyledMain = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    padding: 1em;
    background-color: hsla(0, 0%, 100%, 0.75);

    @media (min-width: 768px) {
      flex-direction: row;
    }
  `;
  const StyledCard = styled.div`
    display: flex;
    flex-direction: column;
    color: #f2f2f2;
    gap: 1em;
    padding: 3em 2em;
    width: 195px;
    background-color: ${(props) => props.backgroundColor};
    border-radius: ${(props) => props.borderRadius};

    @media (min-width: 768px) {
      border-radius: ${(props) => props.borderRadiusOrientation};
    }
  `;

  const Image = styled.img`
    width: 70px;
    height: 50px;
  `;

  const Title = styled.p`
    font-size: 2em;
    font-family: "Big Shoulders Display", cursive;
    font-weight: 700;
  `;

  const Paragraph = styled.p`
    width: 90%;
    font-size: 0.8em;
    font-family: "Lexend Deca", sans-serif;
    font-weight: 300;
    line-height: 1.5em;
  `;

  const StyledButton = styled.button`
    border-radius: 20px;
    padding: 8px 20px;
    border: none;
    width: 10em;
    font-family: "Lexend Deca", sans-serif;
    font-weight: 400;
    font-size: 0.7em;
    border: 2px solid ${(props) => props.borderColor};
    color: ${(props) => props.ButtonColor};
    :hover {
      background-color: ${(props) => props.ButtonColor};
      cursor: pointer;
      color: #f2f2f2;
      border: 2px solid #f2f2f2;
    }
  `;

  return (
    <StyledMain>
      <StyledCard
        backgroundColor='hsl(31, 77%, 52%)'
        borderRadius='0.8em 0.8em 0 0'
        borderRadiusOrientation='0.8em 0 0 0.8em'>
        <Image src={IconOne} alt='Sedans Car icon' />
        <Title>Sedans</Title>
        <Paragraph>
          Choose a sedan for its affordability and excellent fuel economy. Ideal
          for cruising in the city or on your next road trip.
        </Paragraph>
        <StyledButton
          borderColor='hsl(31, 77%, 52%)'
          ButtonColor='hsl(31, 77%, 52%)'>
          Learn More
        </StyledButton>
      </StyledCard>
      <StyledCard backgroundColor='hsl(184, 100%, 22%)' borderRadius='0'>
        <Image src={IconTwo} alt='SUVs Car icon' />
        <Title>SUVs</Title>
        <Paragraph>
          Take an SUV for its spacious interior, power, and versatility. Perfect
          for your next family vacation and off-road adventures.
        </Paragraph>
        <StyledButton
          borderColor='hsl(184, 100%, 22%)'
          ButtonColor='hsl(184, 100%, 22%)'>
          Learn More
        </StyledButton>
      </StyledCard>
      <StyledCard
        backgroundColor='hsl(179, 100%, 13%)'
        borderRadius='0 0 0.8em 0.8em'
        borderRadiusOrientation='0 0.8em 0.8em 0'>
        <Image src={IconThree} alt='Luxury Car icon' />
        <Title>Luxury</Title>
        <Paragraph>
          Cruise in the best car brands without the bloated prices. Enjoy the
          enhanced comfort of a luxury rental and arrive in style.
        </Paragraph>
        <StyledButton
          borderColor='hsl(179, 100%, 13%)'
          ButtonColor='hsl(179, 100%, 13%)'>
          Learn More
        </StyledButton>
      </StyledCard>
    </StyledMain>
  );
}

export default App;
