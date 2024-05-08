import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import HomeImage from '../../pictures/HomeImage.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

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

const StyledH1 = styled.h1`
  color: #14327C;
  font-size: 3.2rem;
  text-shadow: 5px 5px 10px grey;
  font-family: 'biryani', sans-serif;
  position: absolute;
  bottom: 50%;
  left: 50%;
  transform: translateX(-50%);
  opacity: ${props => props.show ? 1 : 0};
  transition: opacity 0.8s ease;
`;

const StyledH1Bis = styled.h1`
  color: #14327C;
  font-size: 3.2rem;
  text-shadow: 5px 5px 10px grey;
  font-family: 'biryani', sans-serif;
  position: absolute;
  bottom: 40%;
  left: 50%;
  transform: translateX(-50%);
  opacity: ${props => props.show ? 1 : 0};
  transition: opacity 1.2s ease;
`;

const StyledTransport = styled.span`
  color: white;
`;

const StyledContact = styled.div`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  display: flex;  
  font-family: Montserrat, sans-serif;
  font-size: 1.5rem;
  align-items: end;
`;

const StyledAdress = styled.div`
  width: 450px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 2vh;
  background-color: #FFFDFD;
  box-shadow: 5px 5px 10px #CBCBCB;
  z-index: 5;
  height: 90px;
  opacity: ${props => props.show ? 1 : 0};
  transform: translateY(${props => props.show ? 0 : '300px'});
  transition: opacity 0.8s ease, transform 0.8s ease;
`;

const StyledShedule = styled.div`
  width: 600px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;
  padding: 2vh;
  background-color: #FFFDFD;
  box-shadow: 5px 5px 10px #CBCBCB;
  height: 50px;
  opacity: ${props => props.show ? 1 : 0};
  transform: translateY(${props => props.show ? 0 : '300px'});
  transition: opacity 1s ease, transform 1s ease;
`;

const StyledPhone = styled.div`
  width: 300px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 2vh;
  color: white;
  background-color: #14327C;
  box-shadow: 5px 5px 10px #CBCBCB;
  z-index: 5;
  height: 50px;
  opacity: ${props => props.show ? 1 : 0};
  transform: translateY(${props => props.show ? 0 : '300px'});
  transition: opacity 1.2s ease, transform 1.2s ease;
`;

function TitlePicture() {
  const [showTitle, setShowTitle] = useState(false);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowTitle(true);
    }, 500);

    setTimeout(() => {
      setShowContent(true);
    }, 1100);
  }, []);

  return (
    <StyledContainerTitle>
      <StyledTitleWrapper>
        <StyledSubtitlePictures src={HomeImage} alt="présentation" />
        <StyledH1 show={showTitle}>BRAM'S <StyledTransport>TRANSPORT -</StyledTransport></StyledH1>
        <StyledH1Bis show={showTitle}><StyledTransport>ETREPAGNY (27)</StyledTransport></StyledH1Bis>
        <StyledContact>
          <StyledAdress show={showContent}><div><FontAwesomeIcon icon={faMapMarkerAlt} />&nbsp;44 Résidence le Marquis</div>
                        <div>27150 Étrépagny</div></StyledAdress>
          <StyledShedule show={showContent}>Lun - Vend : 8h - 12h|13h30 - 17h30</StyledShedule>
          <StyledPhone show={showContent}><FontAwesomeIcon icon={faPhone} />&nbsp;06 06 06 06 06</StyledPhone>
        </StyledContact>
      </StyledTitleWrapper>
    </StyledContainerTitle>
  );
}

export default TitlePicture;
