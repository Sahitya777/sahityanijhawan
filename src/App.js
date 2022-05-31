import React from 'react'
import { Route } from 'react-router-dom'
import GlobalStyle from './GlobalStyles'
// import {ThemeProvider} from "styled-components"
 import { lightTheme } from './components/Themes'
import Main from './components/Main';
import AboutPage from './components/AboutPage';
import BlogPage from './components/BlogPage';
import WorkPage from './components/WorkPage';
import MySkillsPage from './components/MySkillsPage';
import { Switch } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
// import SoundBar from './subComponents/SoundBar';
import { ThemeProvider } from 'styled-components';



function App() {

  const location=useLocation();


  return (
    <div>
      <ThemeProvider theme={lightTheme}>
      <GlobalStyle/>
      
      <AnimatePresence exitBeforeEnter>
      <Switch location={location} key={location.pathname}>
          <Route exact path="/" component={Main} />
          <Route exact path="/about" component={AboutPage} />
          <Route exact path="/blog" component={BlogPage} />
          <Route exact path="/work" component={WorkPage} />
          <Route exact path="/skills" component={MySkillsPage} />
        </Switch>
        
      </AnimatePresence>
      </ThemeProvider>


      </div>

  )
}

export default App