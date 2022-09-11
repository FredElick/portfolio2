import React from 'react';

function Nav(props) {
  const{
    currentOption,
    setOption
  } = props;
  console.log(currentOption);

    return (
        <header className="flex-row px-1">
          <h2>
            <a data-testid="link" href="/">
               Fred Elick
            </a>
          </h2>
          <nav>
            <ul className="flex-row">
              <li className="mx-2">
                <a data-testid="about" href="#about" onClick={()=> setOption('About')} >
                  About me
                </a>
              </li>
                <li className='mx-2 navActive'>
                    <a href="#portfolio" onClick={()=> setOption('Portfolio')}>
                    Portfolio
                    </a>
                </li>
                <li className='mx-2'>
                    <a href="#contact" onClick={()=> setOption('Contact')}>
                    Contact
                    </a>
                </li>
                <li>
                    <a href="#resume" onClick={()=> setOption('Resume')}>
                        Resume
                    </a>
                </li>
            </ul>
          </nav>
          </header>
    )}

    export default Nav;
