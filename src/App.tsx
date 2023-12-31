import { styled } from 'styled-components';

import Image from './components/Image';

const StyledMainWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: hsl(30, 38%, 92%);
`;

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 320px;
  min-width: 320px;
  background-color: hsl(0, 0%, 100%);
  border-radius: 10px;

  @media only screen and (min-width: 1440px) {
    flex-direction: row;
    align-items: normal;
    width: 750px;
    max-width: 750px;
  }
`;

const StyledPHeader = styled.p`
  text-transform: uppercase;
  color: hsl(228, 12%, 48%);
  font-size: 0.75rem;
  letter-spacing: 6px;

  @media only screen and (min-width: 1440px) {
    font-size: 1rem;
    margin-top: 0.5rem;
  }
`;

const StyledContentWrapper = styled.div`
  padding: 1.25rem;

  @media only screen and (min-width: 1440px) {
    padding: 2.25rem;
    width: 50%;
  }
`;

const StyledH1 = styled.h1`
  font-family: Fraunces;
  font-size: 1.75rem;
  margin-top: 0.75rem;
  line-height: 1;
  color: hsl(212, 21%, 14%);

  @media only screen and (min-width: 1440px) {
    margin-top: 1.5rem;
    font-size: 2.75rem;
  }
`;

const StyledP = styled.p`
  color: hsl(228, 12%, 48%);
  font-size: 0.85rem;
  margin-top: 0.75rem;
  line-height: 1.5;

  @media only screen and (min-width: 1440px) {
    margin-top: 1.75rem;
    font-size: 1rem;
  }
`;

const StyledPriceDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 1rem;

  @media only screen and (min-width: 1440px) {
    margin-top: 2.25rem;
  }
`;

const BigPriceSpan = styled.span`
  color: hsl(158, 36%, 37%);
  font-family: Fraunces;
  font-size: 1.75rem;

  @media only screen and (min-width: 1440px) {
    font-size: 2rem;
  }
`;

const SmallPriceSpan = styled.span`
  color: hsl(228, 12%, 48%);
  text-decoration: line-through;
  font-size: 0.75rem;
  margin-left: 1.25rem;

  @media only screen and (min-width: 1440px) {
    font-size: 1rem;
  }
`;

const CartButton = styled.button`
  width: 100%;
  font-weight: bold;
  font-size: 0.75rem;
  background-color: hsl(158, 36%, 37%);
  color: hsl(0, 0%, 100%);
  font-family: Montserrat;
  padding: 1.25em;
  border-radius: 5px;
  border: none;
  margin-top: 1rem;
  transition: background-color 0.2s ease;

  &:hover {
    cursor: pointer;
    background-color: hsl(158, 36%, 20%);
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  img {
    width: 1em;
    margin-right: 0.75rem;
  }

  @media only screen and (min-width: 1440px) {
    margin-top: 2.25rem;
    font-size: 1rem;
  }
`;

export default function App() {
  return (
    <StyledMainWrapper>
      <StyledCard>
        <Image />
        <StyledContentWrapper>
          <StyledPHeader>Perfume</StyledPHeader>
          <StyledH1>Gabrielle Essence Eau De Parfum</StyledH1>
          <StyledP>
            A floral, solar and voluptuous interpretation composed by Olivier
            Polge, Perfumer-Creator for the House of CHANEL.
          </StyledP>
          <StyledPriceDiv>
            <BigPriceSpan>$149.99</BigPriceSpan>
            <SmallPriceSpan>$169.99</SmallPriceSpan>
          </StyledPriceDiv>
          <CartButton>
            <div>
              <img src='images/icon-cart.svg' alt='' />
              <span>Add to Cart</span>
            </div>
          </CartButton>
        </StyledContentWrapper>
      </StyledCard>
    </StyledMainWrapper>
  );
}
