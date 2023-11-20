import { VideoItem } from '@/types/api/youtube';
import styled from 'styled-components';

interface StyledSearchFormProps {
  $hasData: boolean
}

export const SearchForm = styled.form<StyledSearchFormProps>`
  margin: 25px auto;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: ${({ $hasData }) => $hasData ? '0.5%' : '40%'};
  transform: ${({ $hasData }) => $hasData && 'translateY(50%)'};
  transition: top 0.3s ease, transform 0.3s ease;
  width: 80vw;
  max-width: 800px;
  padding: 10px 20px;
  border-radius: 60px;
  box-sizing: border-box;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(4px) saturate(180%);
`;

export const ButtonImg = styled.img`
  width: 25px;
`;

SearchForm.defaultProps = {
  $hasData: false,
};