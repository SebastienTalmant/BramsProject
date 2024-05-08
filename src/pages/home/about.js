import React, { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';
import truck from '../../pictures/truck.png';

const StyledContainer = styled.div`
  display: flex;
  flex-direction: row;  
  width: 100vw;
  justify-content: center;
  align-items: center;
  padding: 50px;
  margin-top: -20px;
  font-family: 'biryani', sans-serif;
  background-image: linear-gradient(to right, #FFFDFD 75%, #14327C 75%);
`;

const StyledContainerText = styled.div`
  width: 100%;
  max-width: 650px;
  padding: 20px;
  margin-right: 50px;
  text-align: justify;
  opacity: ${props => props.isVisible ? 1 : 0};
  transform: translateX(${props => props.isVisible ? 0 : '-300px'});
  transition: opacity 0.8s ease, transform 0.8s ease;
`;

const StyledTitle = styled.h2`
  font-size: 0.8rem;
  margin-bottom: 20px;
  position: relative;
  display: flex;
  align-items: center;
`;

const StyledLine = styled.div`
  height: 2px;
  width: 50px;
  background-color: #14327C;
`;

const StyledList = styled.ul`
  list-style-type: square;
  margin-left: 20px;
`;

const StyledListItem = styled.li`
  margin-bottom: 10px;
`;

const StyledSubtitlePictures = styled.img`
  width: 100vw;
  max-width: 650px;
  box-shadow: 5px 5px 10px #CBCBCB;  opacity: ${props => props.isVisible ? 1 : 0};
  transform: translateX(${props => props.isVisible ? 0 : '300px'});
  transition: opacity 1.2s ease, transform 1.2s ease;
`;


function About() {
    const [isVisible, setIsVisible] = useState(false);
    const containerRef = useRef(null);

    useEffect(() => {
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.5
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            });
        }, options);

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => {
            if (containerRef.current) {
                observer.unobserve(containerRef.current);
            }
        };
    }, []);

    return (
        <StyledContainer ref={containerRef}>
            <StyledContainerText isVisible={isVisible}>
                <StyledTitle>À PROPOS &nbsp; &nbsp; &nbsp;<StyledLine /></StyledTitle>
                <p>
                    Nous sommes des transporteurs routiers de confiance, implantés à Etrépagny depuis 2016, au carrefour stratégique de l'axe Rouen-Paris-Beauvais. Avec une équipe de 27 chauffeurs parmi nos 33 employés, nous nous engageons à fournir un service logistique de premier ordre, adapté à vos besoins spécifiques.
                </p>
                <p>
                    Notre spécialité réside dans le transport sécurisé et efficace de différents produits, notamment : 
                </p>
                <StyledList>
                    <StyledListItem>Carburants, produits chimiques et gaz, assurant leur livraison en toute sécurité.</StyledListItem>
                    <StyledListItem>Containers, facilitant le flux continu de vos marchandises.</StyledListItem>
                    <StyledListItem>Matériaux divers, tels que le bitume, répondant aux besoins de construction.</StyledListItem>
                </StyledList>
                <p>
                    Avec une flotte de camions diversifiée, nous vous offrons des solutions logistiques sur mesure. Depuis notre établissement en 2016, nous avons consolidé notre réputation en tant que partenaire de confiance dans le secteur du transport routier.
                </p>
                <p>
                    Avec notre dévouement constant envers l'excellence et notre positionnement stratégique, nous sommes prêts à relever tous les défis logistiques que vous nous confierez.
                </p>
            </StyledContainerText>
            <StyledSubtitlePictures isVisible={isVisible} src={truck} alt="camion" />
        </StyledContainer>
    );
}

export default About;
