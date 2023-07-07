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
  width: 85%;
`;

export default function App() {
  return (
    <StyledMainWrapper>
      <StyledCard>
        <Image />
      </StyledCard>
    </StyledMainWrapper>
  );
}
