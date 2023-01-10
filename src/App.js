import "./App.css";
import styled from "styled-components";
import Card from "./components/Card";
import IconOne from "../src/images/icon-sedans.svg";
import IconTwo from "../src/images/icon-suvs.svg";
import IconThree from "../src/images/icon-luxury.svg";
import { ThemeProvider } from "styled-components";

function App() {
  const Main = styled.main`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 1em;
  `;

  const StyledCard = styled(Card)`
    background-color: ${(props) => props.theme.backgroundColor};
  `;

  const theme = {
    backgroundColor: "",
  };

  return (
    <Main>
      <ThemeProvider theme={theme}>
        <StyledCard
          theme={{ backgroundColor: "blue" }}
          URL={IconOne}
          cardIcon='SEDANS Car Icon'
          title='SEDANS'
          text='Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city 
  or on your next road trip.'
        />
        <StyledCard
          theme={{ backgroundColor: "green" }}
          URL={IconTwo}
          cardIcon='SUVs Car icon'
          title='SUVs'
          text='Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation 
  and off-road adventures.'
        />
        <StyledCard
          theme={{ backgroundColor: "yellow" }}
          URL={IconThree}
          cardIcon='Luxury Car icon'
          title='Luxury'
          text='Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury 
  rental and arrive in style.'
        />
      </ThemeProvider>
    </Main>
  );
}

export default App;
