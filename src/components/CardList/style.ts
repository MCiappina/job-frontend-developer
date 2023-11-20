import styled, { keyframes} from 'styled-components';

interface StyledCardItemProps {
    $hasData: boolean
}

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const CardsContainer = styled.div<StyledCardItemProps>`
  display: grid;
  padding: 0 20px;
  grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
  opacity: 0;
  animation: ${fadeIn} 0.5s ease-in-out forwards; 
  max-height: 80vh;
  overflow-y: scroll;
  overflow-x: hidden;
  gap: 15px;
  box-shadow: 0 10px 15px rgba(0,0,0, .3);
  transform: scale(1.03);
  letter-spacing: 1px;
  border-radius: 20px;
`;

export const CardItem = styled.div<StyledCardItemProps>`
  box-shadow: 0 5px 10px rgba(0,0,0, .2);
  border-radius: 5px;
  background: #fff;
  text-align: center;
  padding: 30px 20px;
  cursor: pointer;
  overflow: hidden;
  opacity: ${({ $hasData }) => {
        return ($hasData ? 1 : 0)
    }};
  transition: box-shadow 0.3s ease, transform 0.3s ease, letter-spacing 0.3s ease, opacity 0.3s ease;

  &:hover{
    box-shadow: 0 10px 15px rgba(0,0,0, .3);
    transform: scale(1.03);
    letter-spacing: 1px;
  }
`;

export const CardImg = styled.img`
  height: 80px;
  max-width: 100%;
`;

export const CardTitle = styled.h3`
  color: #444;
  font-size: 22px;
  padding: 10px 0;
  overflow: hidden;
`;

export const CardDescription = styled.p`
  color: #777;
  font-size: 15px;
  line-height: 1.8;
  overflow: hidden;
`;

CardItem.defaultProps = {
    $hasData: false,
};
CardsContainer.defaultProps = {
    $hasData: false,
};