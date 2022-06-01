import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import img from '../assets/Images/patrick-tomasso-Oaqk7qqNh_c-unsplash.jpg'
import LogoComponent from '../subComponents/LogoComponent'
import PowerButton from '../subComponents/PowerButton'
import SocialIcons from '../subComponents/SocialIcons'
import {Blogs} from '../data/BlogData';
import BlogComponent from './BlogComponent'
import AnchorComponent from '../subComponents/Anchor'
import { motion } from 'framer-motion'


const MainContainer=styled(motion.div)`
  background-image:url(${img});
  background-size:cover;
  background-repeat:no-repeat;
  background-attachment;fixed;
  background-position:center;

`
const Container=styled.div`
  background-color:rgba(252, 246, 244,0.8);
  width:100%;
  height:auto;
  position:relative;
  padding-bottom:5rem;
`
const Center =styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  padding-top:10rem;

`
const Grid=styled.div`
  display:grid;
  grid-template-columns: repeat(2,minmax(calc(10rem + 15vw),1fr));
  grid-gap:calc(1rem + 2vw);
  @media screen and (max-width:800px){
    grid-template-columns:100%;
  }

`
const Text = styled.h1`
position: fixed;
top: 5rem;
left:5rem;
color:rgba(0,0,0,0.1);
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

const BlogPage=()=> {
  const [numbers,setnumbers]=useState(0);
  useEffect(()=>{
    let num=(window.innerHeight -70)/30;
    setnumbers(parseInt(num));
  },[])
  return (
    <MainContainer
    variants={container}
    initial='hidden'
    animate='show'
    exit={{
      opacity:0,transition:{duration:0.5}
    }}
    >
      <Container>
        <LogoComponent/>
        <PowerButton/>
        <SocialIcons/>
        <AnchorComponent numbers={numbers}/>
        <Center>
          <Grid>
            {
              Blogs.map(blog=>{
                return <BlogComponent key={blog.id} blog={blog}/>
              })
            }
          </Grid>
        </Center>
        <Text>
          BLOG
        </Text>
      </Container>
    </MainContainer>
  )
}

export default BlogPage