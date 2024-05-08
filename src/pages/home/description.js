import React, { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;  
  width: 100vw;
  max-width: 1000px;
  justify-content: center;
  align-items: center;
  font-family: 'biryani', sans-serif;
  text-align: center;
  font-size: 1.2rem;
  margin-top: 25px;
  margin-bottom: 75px;
  opacity: ${props => props.isVisible ? 1 : 0};
  transition: opacity 1.3s ease;
`;

const StyledH2 = styled.h2`
  font-size: 2rem;
  margin: 50px;
`;

function Description() {
    const [isVisible, setIsVisible] = useState(false);
    const containerRef = useRef(null);

    useEffect(() => {
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.8
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
        <StyledContainer ref={containerRef} isVisible={isVisible}>
            <StyledH2>Transporteur routier régionale et national</StyledH2>
            <div>L'entreprise familliale Bram's Transport située à Étrépagny propose un service d'acheminement de marchandises en vrac liquide (carburant, éthanol, chimique...), gaz, bitume et contenaire</div>
        </StyledContainer>
    );
}

export default Description;
