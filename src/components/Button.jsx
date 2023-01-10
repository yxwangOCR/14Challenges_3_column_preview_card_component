import styled from "styled-components";

const StyledButton = styled.button`
  border-radius: 20px;
  background-color: #f2f2f2;
  padding: 8px 30px;
  border: none;
`;

const Button = () => {
  return <StyledButton>Learn More</StyledButton>;
};

export default Button;
