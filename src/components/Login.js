import React from 'react'
import styled from 'styled-components';
import Originals from './Originals';

const Login = (props) => {
  return (
    <Container>
        <Content>
          <Cta>
            <Ctalogo src='./images\cta-logo-one.svg'/>
            <Signup>Get all there</Signup>
            <Discription>
               Get Premier Access to Raya and the Last Dragon for an
               additional fee withaDisney+subscription.As of 03/26/22,the price of
               Disney+and The Disney Bundle will increase by$1.
            </Discription>
            <Ctalogo src='./images\cta-logo-two.png' />
          </Cta>
          <BgImage/>
          <Originals/>
        </Content>
        
    </Container>  
  )
}

const Container = styled.section`
    overflow:hidden;
    display:flex;
    flex-direction:column;
    text-align:center;
    height:100vh; 
`;

const Content= styled.div`
    margin-bottom:10vw;
    width:100%;
    position:relative;
    min-height:100vh;
    box-sizing:border-box;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    padding:80px 40px;
    height:100%;

`;

const BgImage = styled.div`
  height:100%;
  background-position:top;
  background-size:cover;
  background-repeat: no-repeat;
  background-image: url("./images/login-background.jpg");
  position:absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: -1;
`;

const Cta =styled.div`
    margin-bottom: 2vw;
    max-width: 650px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-left: auto;
    margin-right: auto;
    margin-top: 0;
    width : 100%;
    transition: opacity 0.2s;
    text-align: center;
    transition-timing-function: ease-out;  
`;

const Ctalogo =styled.img`
margin-bottom: 12px;
max-width: 600px;
min-width: 1px;
display: block;
width: 100%;
`;

const Signup=styled.button`
letter-spacing: 1.5px;
font-weight: bold;
background-color: #0063e5;
color: white;
margin-bottom: 12px;
width: 100%;
font-size: 18px;
padding: 16.5px 0;
border: 1px solid transparent;
border-radius: 4px;

&:hover {
  background-color: #0483ee;
}
`;

const Discription =styled.p`
  color: hsla(0,0,95.3%,1%);
  font-size:15px;
  margin:0 0 24px;
  line-height:1.5;
  letter-spacing: 1.5px;

`

export default Login

