import React, { useState } from 'react'
import styled, { keyframes } from 'styled-components'
import LogoComponent from '../subComponents/LogoComponent'
import PowerButton from '../subComponents/PowerButton'
import SocialIcons from '../subComponents/SocialIcons'
import { NavLink } from 'react-router-dom'

import Intro from './Intro'
import { motion } from 'framer-motion'
import SoundBar from '../subComponents/SoundBar'
const MainContainer=styled.div`
    background: #c2c2c2;
    width:100vw;
    height:100vh;
    overflow:hidden; 
    position:relative;
    h2,h3,h4,h5,h6{
        font-family:'Karla',sans-serif;
        font-weight:500;
    }
    @media screen and (max-width:640px){
        h2{
            font-size:1.2em;
        }
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
    color: ${props=>props.click ? 'white':'black'};
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
    color: ${props=>props.click ? 'white':'black'};
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
    top: ${props=>props.click ?'85%':'50%'};
    left:${props=>props.click ? '92%':'50%'};
    transform:translate(-50%,-50%);
    border:none;
    outline:none; 
    background-color:transparent;
    cursor:pointer;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    transition: all 1s ease;
    &>:first-child{
        animation:${rotate} infinite 1.5s linear;
    }
    &>:last-child{
        display:${props=>props.click ? 'none':'inline-block'}
        padding-top:1rem;
    }
    @media screen and (max-width:800px){
        width:150px;
        height:150px;
        top: ${props=>props.click ?'90%':'50%'};
        left:${props=>props.click ? '90%':'50%'};
        width: ${props=>props.click ? '80px':'150px'};
        height: ${props=>props.click ? '80px':'150px'};      
    }
    @media screen and (max-width:400px){
        top: ${props=>props.click ?'87%':'50%'};
        left:${props=>props.click ? '90%':'50%'};
    }



`

const DarkDiv=styled.div`
    position:absolute;
    background-color:#000;
    top:0;
    bottom:0;
    right:50%;
    width:${props=>props.click ? '50%':'0%'};
    height:${props=>props.click ? '100%':'0%'};
    z-index:1;
    transition: height 0.5s ease, width 1s ease 0.5s;

`

const Main=()=> {

    const [click,setClick]=useState(false);

    const handleClick=()=>setClick(!click);
    
  return (
    <MainContainer>
        <SoundBar/>
        <DarkDiv click={click}/>
        <Container>
            <PowerButton/>
            <LogoComponent theme={click ?'dark':'light'}/>
            <SocialIcons theme={click ?'dark':'light'}/>
        
            <Center click={click}>
             <svg onClick={()=>handleClick()} width={click ? 120:200} height={click ? 120:200} aria-hidden="true" focusable="false" data-prefix="fas" data-icon="yin-yang" class="svg-inline--fa fa-yin-yang fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path fill="currentColor" d="M248 8C111.03 8 0 119.03 0 256s111.03 248 248 248 248-111.03 248-248S384.97 8 248 8zm0 376c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32zm0-128c-53.02 0-96 42.98-96 96s42.98 96 96 96c-106.04 0-192-85.96-192-192S141.96 64 248 64c53.02 0 96 42.98 96 96s-42.98 96-96 96zm0-128c-17.67 0-32 14.33-32 32s14.33 32 32 32 32-14.33 32-32-14.33-32-32-32z"></path></svg>
                <span>Click Here</span>
            </Center>
            <Contact target="_blank" to={{pathname:"mailto:sahityanijhawan@gmail.com"}}>
                <motion.h2
                    initial={{
                        y:-200,
                        transition:{type:'spring',duration:1.5,delay:1}
                    }}
                    
                    animate={{
                        y:0,
                        transition:{type:'spring',duration:1.5,delay:1}
                    }}
                    whileHover={{scale:1.1}}
                    whileTap={{scale:0.9}}
                >
                    Say hi..
                </motion.h2>
            </Contact>
            <Blog to="/blog">
                <motion.h2
                    initial={{
                        y:-200,
                        transition:{type:'spring',duration:1.5,delay:1}
                    }}
                    
                    animate={{
                        y:0,
                        transition:{type:'spring',duration:1.5,delay:1}
                    }}
                 whileHover={{scale:1.1}}
                 whileTap={{scale:0.9}}
                >
                    Blog
                </motion.h2>
            </Blog>
            <Work to="/work" click={click}>
                <motion.h2
                    initial={{
                        y:-200,
                        transition:{type:'spring',duration:1.5,delay:1}
                    }}
                    
                    animate={{
                        y:0,
                        transition:{type:'spring',duration:1.5,delay:1}
                    }}                
                 whileHover={{scale:1.1}}
                 whileTap={{scale:0.9}}
                >
                    Work
                </motion.h2>
            </Work>
            <BottomBar>
                <About to="/about" click={click}>
                    <motion.h2
                    initial={{
                        y:200,
                        transition:{type:'spring',duration:1.5,delay:1}
                    }}
                    
                    animate={{
                        y:0,
                        transition:{type:'spring',duration:1.5,delay:1}
                    }}                    
                     whileHover={{scale:1.1}}
                     whileTap={{scale:0.9}}
                    >
                        About Me.
                    </motion.h2>
                </About>
                <Skills to="/skills">
                    <motion.h2
                    initial={{
                        y:200,
                        transition:{type:'spring',duration:1.5,delay:1}
                    }}
                    
                    animate={{
                        y:0,
                        transition:{type:'spring',duration:1.5,delay:1}
                    }}                    
                     whileHover={{scale:1.1}}
                     whileTap={{scale:0.9}}
                    >
                        My Skills.
                    </motion.h2>
                </Skills>
            </BottomBar>
        </Container>
        {click ?<Intro click={click}/>:null}
    </MainContainer>
  )
}

export default Main