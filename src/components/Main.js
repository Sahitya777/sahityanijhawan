import React from 'react'
import styled, { keyframes } from 'styled-components'
import LogoComponent from '../subComponents/LogoComponent'
import PowerButton from '../subComponents/PowerButton'
import SocialIcons from '../subComponents/SocialIcons'
import { NavLink } from 'react-router-dom'
import { YinYang } from './Allsvgs'

const MainContainer=styled.div`
    background: ${props=>props.theme.text};
    width:100vw;
    height:100vh;
    overflow:hidden;


    position:relative;
    h2,h3,h4,h5,h6{
        font-family:'Karla',sans-serif;
        font-weight:500;

    }
`
const Container=styled.div`
    padding:2rem;
`

const Contact=styled(NavLink)`
    color: black;
    position: absolute;
    top: 2rem;
    right: calc(1rem + 2vw);
    text-decoration: none;
    z-index: 1;
`


const Blog=styled(NavLink)`
    color: black;
    position: absolute;
    top: 50%;
    right: calc(1rem + 2vw);
    transform:rotate(90deg) translate(-50%,-50%);

    text-decoration: none;
    z-index: 1;
`
const Work=styled(NavLink)`
    color: black;
    position: absolute;
    top: 50%;
    left: calc(1rem + 2vw);
    transform: translate(-50%,-50%) rotate(-90deg);
    text-decoration: none;
    z-index: 1;
`

const BottomBar=styled.div`
    position:absolute;
    bottom:1rem;
    left:0;
    right:0;
    width:100%;

    display:flex;
    justify-content:space-evenly;
`
const About=styled(NavLink)`
    color: black;
    text-decoration: none;
    z-index: 1;
`
const Skills=styled(NavLink)`
    color: black;
    text-decoration: none;
    z-index: 1;
`
const rotate=keyframes`
    from{
        transform:rotate(0);
    }
    to{
        transform:rotate(360deg);
    }
`
const Center=styled.button`
    position:absolute;
    top:50%;
    left:50%;
    transform:translate(-50%,-50%);
    border:none;
    outline:none;
    background-color:transparent;
    cursor:pointer;

    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    &>:first-child{
        animation:${rotate} infinite 1.5s linear;
    }
    &>:last-child{
        padding-top:1rem;
    }
`
const Main=()=> {
  return (
    <MainContainer>
        <Container>
            <PowerButton/>
            <LogoComponent/>
            <SocialIcons/>


            <Center>
                <YinYang width={200} height={200} fill='currentColor'/>
                <span>Click Here</span>
            </Center>
            <Contact target="_blank" to={{pathname:"mailto:sahityanijhawan@gmail.com"}}>
                <h3>
                    Say hi..
                </h3>
            </Contact>
            <Blog to="/blog">
                <h3>
                    Blog
                </h3>
            </Blog>
            <Work to="/work">
                <h3>
                    Work
                </h3>
            </Work>
            <BottomBar>
                <About to="/about">
                    <h3>
                        About Me.
                    </h3>
                </About>
                <Skills to="/skills">
                    <h3>
                        My Skills.
                    </h3>
                </Skills>
            </BottomBar>
        </Container>
    </MainContainer>
  )
}

export default Main