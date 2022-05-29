import React from 'react'
import {ThemeProvider} from 'styled-components'
import {lightTheme} from './Themes'
import { Design, Develope } from './Allsvgs'
import styled from 'styled-components'
const Box=styled.div`
  background-color:${props=>props.theme.body};
  width:100vw;
  height:100vh;
  position:relative;
  display:flex;
  justify-content:space-evenly;
  align-items:center;

`
const Main=styled.div`
  border:2px solid black;
  color:black;
  background-color:white;
  padding: 2rem;
  width:30vw;
  height:60vh;
  z-index:3;
  line-height:1.5;

  font-family:'Ubuntu Mono',monospace;
  display:flex;
  flex-direction:column;
  justify-content:space-between;

`
const Title=styled.h2`
  display:flex;
  justify-content:center;
  align-items:center;
  font-size:calc(1em + 1vw);
`
const MySkillsPage=()=> {
  return (
    <ThemeProvider theme={lightTheme}>
      <Box>
        <Main>
          <Title>
            <Design width={40} height={40} /> Mobile Developer
          </Title>
        </Main>
        <Main>
          <Title>
          <Develope width={40} height={40} /> Frontend Developer
          </Title>
        </Main>
      </Box>
    </ThemeProvider>
    
  )
}

export default MySkillsPage