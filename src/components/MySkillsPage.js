import React from 'react'
import {ThemeProvider} from 'styled-components'
import {lightTheme} from './Themes'
import { Design, Develope } from './Allsvgs'
import styled from 'styled-components'
import LogoComponent from '../subComponents/LogoComponent'
import SocialIcons from '../subComponents/SocialIcons';
import PowerButton from '../subComponents/PowerButton';
import ParticleComponent from '../subComponents/ParticleComponent'
import SoundBar from '../subComponents/SoundBar'

const Box=styled.div`
  background-color:${props=>props.theme.body};
  width:100vw;
  height:100vh;
  position:relative;
  display:flex;
  justify-content:space-evenly;
  align-items:center;
  @media screen and (max-width:800px){
    flex-direction:column;
    height:104vh;
    margin-left:20px;
  }

`
const Main=styled.div`
  border:2px solid black;
  color:black;
  background-color:${props=>props.theme.body};
  padding: 2rem;
  width:30vw;
  height:60vh;
  z-index:3;
  line-height:1.5;
  cursor:pointer;
  font-family: 'Ubuntu Mono',monospace;
  display:flex;
  flex-direction:column;
  justify-content:space-between;
  &:hover{
    color:${props=>props.theme.body};
    background-color:${props=>props.theme.text};
  }
  @media screen and (max-width:800px){
    width:60vw;
    height:35vh;
    margin-top:-30px;
  }

`
const Title=styled.h2`
  display:flex;
  justify-content:center;
  align-items:center;
  font-size:calc(1em + 1vw);
  ${Main}:hover &{
    &>*{
      fill:${props=>props.theme.body};

    }
  }
  span{
    margin-left:1rem;
  }
  &*>:first-child{
    margin-left: 1rem;

  }
`
const Description=styled.div`
  color:${props=>props.theme.text};
  font-size:calc(0.6em + 1vw);
  padding:0.5rem 0;
  font-family:'Ubuntu Mono',monospace;
  ${Main}:hover &{
    
      color:${props=>props.theme.body};

    
  strong{
    margin-bottom: 1rem;
    text-transform: uppercase;

  }
  ul,p{
    margin-left: 2rem;
  }

`
const Text = styled.h1`
position: fixed;
top: 80%;
right: 30%;
color:rgba(0,0,0,0.1);
font-size: calc(5rem + 5vw);
z-index:0;
`
const MySkillsPage=()=> {
  return (
    <ThemeProvider theme={lightTheme}>
      <SoundBar/>
      <Box>
        <LogoComponent theme='light'/>
        <SocialIcons theme='light'/>
        <PowerButton/>
        <ParticleComponent theme='light'/>
        <Main>
          <Title>
            <Design width={40} height={40} /><span> Mobile Developer</span> 
          </Title>
          <Description>
            I love to make clean and simple mobile apps. 
          </Description>
          <Description>
            <strong>
              I like to Develop
            </strong>
            <ul>
              <li>
                Mobile Apps
              </li>
            </ul>
          </Description>
          <Description>
            <strong>
              Tools
            </strong>
            <ul>
              <li>
                Android Studio (Java)
              </li>
              <li>
                React Native
              </li>
            </ul>
          </Description>
        </Main>
        <Main>
          <Title>
            <Develope width={40} height={40} /><span>Frontend Developer</span> 
          </Title>
          <Description>
            I value buisness or brand for which i'm creating, thus i enjoy bringing new ideas to life. 
          </Description>
          <Description>
            <strong>
              Skills
            </strong>
            <p>
              Html, Css, Js, React, Redux, Sass, FireBase, MongoDb, SQL etc.
            </p>
          </Description>
          <Description>
            <strong>
              Tools
            </strong>
            <p>
              Vscode, Github, Codepen etc.
            </p>
          </Description>
        </Main>
        <Text>
          SKILLS
        </Text>
      </Box>
    </ThemeProvider>
    
  )
}

export default MySkillsPage