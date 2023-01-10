import Button from "./Button";
import styled from "styled-components";

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1em 2em;
  color: #f2f2f2;
  gap: 2em;
`;

const Image = styled.img`
  width: 70px;
  height: 50px;
`;

const Title = styled.p`
  font-size: 1.5em;
`;

const Paragraph = styled.p`
  width: 60%;
  font-size: 1em;
`;

const Card = ({ URL, cardIcon, title, text }) => {
  return (
    <StyledCard>
      <Image src={URL} alt={cardIcon} />
      <Title>{title}</Title>
      <Paragraph>{text}</Paragraph>
      <Button />
    </StyledCard>
  );
};

export default Card;