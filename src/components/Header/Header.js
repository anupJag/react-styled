import React from 'react';
import styled from 'styled-components';
import logo from '../../assets/images/logo.png';

const Header = styled.header`
  height: 8%;
  width: 100%;
  display: block;
  background-color: rgba(0,0,0,0.2);
  box-shadow: 2px 2px 2px 2px #aaaaaa;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
`;

const HeadWrapper = styled.section`
   height: 100%;
   width: 100%;
   display: flex;
   flex-direction: row;
   justify-content: space-between; 
`;

const LogoContainer = styled.div`
   height: 100%;
   width: 10%;
   padding-left: 6%;
`;

const ImgContainer = styled.img`
   height: 100%;
   width: auto;
`;

const Title = styled.div`
   display: block;
   width: 60%;
   text-transform: uppercase;
   
   > h2 {
       color: black;
   }
`;



export default (props) => {
    return (
        <Header>
            <HeadWrapper>
                <LogoContainer>
                    <ImgContainer src={logo} alt="logo" />
                </LogoContainer>
                <Title>
                    <h3>Styled Components With React</h3>
                </Title>
            </HeadWrapper>
        </Header>
    );
}

