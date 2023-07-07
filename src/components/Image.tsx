import { styled } from 'styled-components';

const StyledImage = styled.img`
  width: 100%;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

export default function Image() {
  return <StyledImage src='/public/images/image-product-mobile.jpg' alt='' />;
}
