import React from 'react';
import styled from 'styled-components';
import picture2 from '../../pictures/picture2.png';


const StyledContainerTitle = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledSubtitlePictures = styled.img`
  z-index: -1;
  width: 100vw;
`;

const StyledTitleWrapper = styled.div`
  position: relative;
  text-align: center;
`;

const StyledH2 = styled.h2`
  color: #FFFDFD;
  font-size: 2.2rem;
  text-shadow: 5px 5px 10px grey;
  font-family: 'biryani', sans-serif;
  position: absolute;
  bottom: 50%;
  left: 50%;
  transform: translateX(-50%);
`;



function Value() {
    return (
        <StyledContainerTitle>
            <StyledTitleWrapper>
                <StyledSubtitlePictures src={picture2} alt="présentation" />
                <StyledH2>Transporteur routier de confiance</StyledH2>

            </StyledTitleWrapper>
        </StyledContainerTitle>
    );
}

export default Value;