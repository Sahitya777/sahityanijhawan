import React from 'react'
import styled, { keyframes, ThemeProvider } from 'styled-components'
import {DarkTheme} from './Themes';
import SoundBar from '../subComponents/SoundBar';

import LogoComponent from '../subComponents/LogoComponent';
import SocialIcons from '../subComponents/SocialIcons';
import PowerButton from '../subComponents/PowerButton';
import ParticleComponentDark from '../subComponents/ParticleComponenetDark';

import astronaut from '../assets/Images/spaceman.png'

const Box = styled.div`
background-color: black;
width: 100vw;
height:100vh;
position: relative;
overflow: hidden;

`
const float = keyframes`
0% { transform: translateY(-10px) }
50% { transform: translateY(15px) translateX(15px) }
100% { transform: translateY(-10px) }
`
const Spaceman = styled.div`
position: absolute;
top: 10%;
right: 5%;
width: 20vw;
animation: ${float} 4s ease infinite;
img{
    width: 100%;
    height: auto;
}
`
const Main =  styled.div`
  border: 2px solid white;
  color: #FCF6F4;
  padding: 2rem;
  width: 50vw;
  height: 60vh;
  z-index: 3;
  line-height: 1.5;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(0.6rem + 1vw);
 backdrop-filter: blur(4px);
  
  position: absolute;
  left: calc(5rem + 5vw);
  top: 10rem;
  font-family: 'Ubuntu Mono', monospace;
  font-style: italic;
  @media screen and (max-width:640px){
    width: 60vw;
    height: 50vh;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
@media screen and (max-width:480px){
    width: 50vw;
    height: auto;
    backdrop-filter: none;
    margin-top: 2rem;
}
@media screen and (max-width:320px){
    padding:1rem;
    font-size:calc(0.5rem + 1vw);
}
`
const Text = styled.h1`
position: fixed;
top: 10%;
left: 5%;
color:rgba(255,255,255,0.1);
font-size: calc(5rem + 5vw);
z-index:0;
@media screen and (max-width:400px){
    font-size:calc(3rem + 5vw);
  }
`



const AboutPage = () => {
    return (
        <ThemeProvider theme={DarkTheme}>
        <SoundBar/>
<Box>

<LogoComponent theme='dark'/>
<SocialIcons theme='dark'/>
<PowerButton />
<ParticleComponentDark  />

        <Spaceman>
            <img src={astronaut} alt="spaceman" />
        </Spaceman>    
        <Main>
        I'm a Full Stack developer located in India. I love to create simple yet beautiful websites with great user experience.
<br /> <br/>
I'm interested in the whole frontend stack Like trying new things and building great projects. I love to write blogs, make websites and read books.
<br/> <br/>
I believe everything is an Art when you put your consciousness in it. You can connect with me via social links.
        </Main>
        <Text>
            ABOUT
        </Text>
        


        </Box>

        </ThemeProvider>
        
    )
}

export default AboutPage