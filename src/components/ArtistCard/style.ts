import styled, { keyframes } from "styled-components";

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

export const ArtistCard = styled.div`
  margin: 0 auto 50px;
  display: flex;
  flex-wrap: wrap;
  opacity: 0;
  animation: ${fadeIn} 0.5s ease-in-out forwards; 
  align-items: center;
  justify-content: space-around;
  padding: 3rem;
  width: 90vw;
  max-width: 800px;
  background-color: #1b2028;
  border-radius: 16px;
  position: relative;
  border: 3px solid transparent;
  background-clip: padding-box;
  text-align: center;
  color: #f1f3f3;
  background-image: linear-gradient(
    135deg,
    rgba(#2e4b7c, 0.35),
    rgba(#2c33ff, 0.1) 20%,
    #1b2028 20%,
    #1b2028 100%
  );
  &:after {
    content: "";
    display: block;
    top: -3px;
    left: -3px;
    bottom: -3px;
    right: -3px;
    z-index: -1;
    position: absolute;
    border-radius: 16px;
    background-image: linear-gradient(
      135deg,
      #2e4b7c,
      #2c33ff 20%,
      #1b2028 30%,
      #2c333e 100%
    );
  }
`;

export const ImageWrapper = styled.div`
  border-radius: 50%;
  overflow: hidden;
  width: 175px;
  height: 175px;
  position: relative;
  img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
  }
`;

export const ArtistInfoWrapper = styled.div`
margin: 0 15px;
  
`;

export const ArtistName = styled.div`
  font-size: 1.5rem;
  font-weight: 600;
  margin-top: 1.5rem;
`;

export const ArtistGenre = styled.div`
  color: #7d8396;
`;

export const ArtistLinkWrapper = styled.div`
  display: flex;
  width: 15vw;
  max-width: 50px;
  min-width: 20px;
  flex-direction: column;
  justify-content: center;
  @media (max-width: 658px) {
    flex-direction: row;
    max-width: 100px;

  }

`;

export const ArtistLink = styled.a`
  text-decoration: none;
  color: #7d8396;
  display: block;
  width: 100%;
  margin: 1rem 0.375rem;
  img {
    filter: invert(100%) sepia(99%) saturate(2%) hue-rotate(253deg) brightness(106%) contrast(100%);
  }
`;
