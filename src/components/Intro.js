import React from 'react'
import styled from 'styled-components'
import Me from '../assets/Images/profile-img.png'

import { motion } from 'framer-motion'
const Box=styled(motion.div)`
position: absolute;
left: 50%;
top: 50%;
transform: translate(-50%, -50%);
width: 65vw;
height:55vh;
display: flex;
background: linear-gradient(
    to right,
    white 50%,
    black 50%) bottom,
    linear-gradient(
    to right,
    white 50%,
    black 50%) top;
    background-size: 100% 2px;
    background-repeat:no-repeat;
    border-left: 2px solid white;
    border-right: 2px solid black;
    z-index:1;
    @media screen and (max-width:768px){
        width:50vw;
    }
`
const SubBox=styled.div`
    width:50%;
    position:relative;
    display:flex;

    .pic{
        position:absolute;
        bottom:0;
        left:50%;
        transform: translate(-50%,0);
        width:100%;
        heigth:auto;
    }

`
const Text=styled.div`
    font-size: calc(1em + 1.5vw);
    color:white;
    padding:2rem;
    cursor:pointer;
    display:flex;
    flex-direction:column;
    justify-content:space-evenly;

    &>*:last-child{
        color: rgba(252, 246, 244,0.6);
        font-size:calc(0.5rem +1.5vw);
        font-weight:300;
    }
`
const Intro=(props)=> {
  return (
    <Box
        initial={{height:0}}
        animate={{height:'55vh'}}
        transition={{type:'spring',duration:2,delay:1}}
    >  
        <SubBox>
            <Text>
                <h1>Hi,</h1>
                <h3>I'm Sahitya.</h3>
                <h6>I Code simple yet beautiful websites.</h6>
            </Text>
        </SubBox>
        <SubBox>
            <motion.div
             initial={{opacity:0}}
             animate={{opacity:1}}
             transition={{duration:1,delay:2}}
            >
                <img className='pic' src={Me} alt="Profile Pic" />
            </motion.div>
        </SubBox>
    </Box>
  )
}

export default Intro