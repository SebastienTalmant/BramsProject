import React from 'react';
import styled from 'styled-components';
import TitlePicture from './home/titlePicture';
import Description from './home/description';
import Value from './home/value';
import About from './home/about';

const StyledContainerPage = styled.div`
  display: flex;
  flex-direction: column;  
  width: 100vw;  
  background-color: #FFFDFD;
  justify-content; center;
  align-items: center;
`;

function Home() {
    return (
        <StyledContainerPage>
            <TitlePicture/>
            <Description/>
            <Value/>
            <About/>
        </StyledContainerPage>
    );
}

export default Home;

