import { styled } from 'styled-components';

const StyledImageMobile = styled.img`
  width: 100%;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;

  @media only screen and (min-width: 1440px) {
    display: none;
  }
`;

const StyledImageDesktop = styled.img`
  display: none;
  width: 100%;

  @media only screen and (min-width: 1440px) {
    display: inline;
    width: 100%;
    height: 100%;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
  }
`;

const ImageWrapper = styled.div`
  @media only screen and (min-width: 1440px) {
    width: 50%;
  }
`;

export default function Image() {
  return (
    <ImageWrapper>
      <StyledImageMobile src='./images/image-product-mobile.jpg' alt='' />
      <StyledImageDesktop src='./images/image-product-desktop.jpg' alt='' />
    </ImageWrapper>
  );
}
