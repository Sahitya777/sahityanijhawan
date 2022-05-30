import React from 'react'
import styled, {ThemeProvider } from 'styled-components'
import {DarkTheme} from './Themes';


import LogoComponent from '../subComponents/LogoComponent';
import SocialIcons from '../subComponents/SocialIcons';
import PowerButton from '../subComponents/PowerButton';

import {Work} from '../data/WorkData'

const Box = styled.div`
background-color: black;
width: 100vw;
height:100vh;
position: relative;
overflow: hidden;
`





const WorkPage = () => {
    return (
        <ThemeProvider theme={DarkTheme}>
<Box>

<LogoComponent theme='dark'/>
<SocialIcons theme='dark'/>
<PowerButton />


        


        </Box>

        </ThemeProvider>
        
    )
}

export default WorkPage