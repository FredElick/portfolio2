

import About from './About';
import Nav from './Nav';
import Portfolio from './Portfolio';
import Resume from './Resume';
import ContactForm from './Contact';
import { SocialIcon } from 'react-social-icons';
import React, {useState} from 'react';
function App() {
  const [currentOption, setOption]=useState('About');

  return (
    <div className="App">
      <header className="App-header">
      </header>
      <Nav
      currentOption={currentOption}
      setOption ={setOption}
      />
      <main>
      {currentOption==='About' ? (
          <About/>
        ) : currentOption ==='Portfolio'?(
          <Portfolio/>
        ) : currentOption ==='Contact'?( 
        <ContactForm/>
        ) : (<Resume></Resume>) 
      }
      </main>

    <footer>
    <SocialIcon url="https://twitter.com/Fredorz"/>
    <SocialIcon url="https://github.com/FredElick"/>
    <SocialIcon url="https://www.linkedin.com/in/fred-elick-a80436235/"/>
    </footer>
    </div>
  );
}

export default App;
