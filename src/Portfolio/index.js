import React from "react";

function Portfolio(){
    return(
        <div>
        <header>
            Portfolio
        </header>
        <div>
            <a href="https://fredelick.github.io/portfolio/">
                <img
                src={require('../assets/images/screenshots/01.PNG')}
                alt="First portfolio"
                />
            </a>
            <a href="https://roo116.github.io/character-search/index.html">
                <img
                src={require('../assets/images/screenshots/02.JPG')}
                alt="character search"
                />
            </a>
            <a href="https://fredelick.github.io/run-buddy/">
                <img
                src={require('../assets/images/screenshots/03.JPG')}
                alt="Run Buddy"
                />
            </a>
        </div>
        </div>

    )

}

export default Portfolio;