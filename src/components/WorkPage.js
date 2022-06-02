import React, { useEffect, useRef } from 'react'
import styled, {ThemeProvider } from 'styled-components'
import {DarkTheme} from './Themes';


import LogoComponent from '../subComponents/LogoComponent';
import SocialIcons from '../subComponents/SocialIcons';
import PowerButton from '../subComponents/PowerButton';

import {Work} from '../data/WorkData'
import Card from '../subComponents/Card';

import { motion } from 'framer-motion';
import SoundBar from '../subComponents/SoundBar';

const Box = styled.div`
background-color: black;
height:400vh;
position: relative;
display:flex;
align-items:center;



`
const Main=styled(motion.ul)`
    position:fixed;
    top:12rem;
    left:calc(10rem + 15vw);
    height:40vh;
    display:flex;
    color:white;
    @media screen and (max-width:800px){
        left: calc(8rem + 15vw);
    }
    @media screen and  (max-width: 640px)
{
    left:calc(2rem + 15vw);
    top:30%;
}
@media screen and (max-width:400px){
    left:calc(1rem + 15vw);
}



`
const Rotate=styled.span`
    display:block;
    position:fixed;
    right:1rem;
    bottom:1rem;
    width:80px;
    height:80px;
    z-index:1;
    @media screen and(max-width:640px){
        svg.svg-inline--fa.fa-yin-yang.fa-w-16{
            width:60px;
            height:60px;
        }
    }

`
const Text = styled.h1`
position: fixed;
top: 10%;
right: 20%;
color:rgba(255,255,255,0.1);
font-size: calc(5rem + 5vw);
z-index:0;
@media screen and (max-width:400px){
    font-size:calc(3rem + 5vw);
  }
`

const container={
    hidden:{opacity:0},
    show:{
        opacity:1,
        transition:{
            staggerChildren:0.5,
            duration:0.5,

        }
    }
}
const WorkPage = () => {
    const ref=useRef(null);
    const yinyang=useRef(null);
    useEffect(()=>{
        let element=ref.current;

        const rotate=()=>{
            element.style.transform=`translateX(${-window.pageYOffset}px)`

            return (yinyang.current.style.transform =
                'rotate(' + -window.pageYOffset + 'deg)')
        }

        window.addEventListener('scroll',rotate)
        return()=>window.removeEventListener('scroll',rotate)
    },[])


    return (
        <ThemeProvider theme={DarkTheme}>
        <SoundBar/>
<Box>

<LogoComponent theme='dark'/>
<SocialIcons theme='dark'/>
<PowerButton />


    <Main ref={ref} variants={container} initial='hidden' animate='show'>
        {
            Work.map(d=>
                <Card key={d.id} data={d} />
            )
        }
    </Main>
    <Rotate ref={yinyang}>
        <svg aria-hidden="true" width={80} height={80} focusable="false" data-prefix="fas" data-icon="yin-yang" class="svg-inline--fa fa-yin-yang fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path fill={DarkTheme.text} d="M248 8C111.03 8 0 119.03 0 256s111.03 248 248 248 248-111.03 248-248S384.97 8 248 8zm0 376c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32zm0-128c-53.02 0-96 42.98-96 96s42.98 96 96 96c-106.04 0-192-85.96-192-192S141.96 64 248 64c53.02 0 96 42.98 96 96s-42.98 96-96 96zm0-128c-17.67 0-32 14.33-32 32s14.33 32 32 32 32-14.33 32-32-14.33-32-32-32z"></path></svg>
    </Rotate>
    <Text>
        WORK
        
    </Text>

        </Box>

        </ThemeProvider>
        
    )
}

export default WorkPage