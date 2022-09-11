import React from "react";

function Portfolio(){
    return(
        <div>
        <header>
            Portfolio
        </header>
        <div className="apps">
            <a href="https://fredelick.github.io/portfolio/">
                <img
                src={require('../assets/images/screenshots/01.PNG')}
                alt="First portfolio"
                className="screenshots"
                />
            </a>
            <a href="https://roo116.github.io/character-search/index.html">
                <img
                src={require('../assets/images/screenshots/02.JPG')}
                alt="character search"
                className="screenshots"
                />
            </a>
            <a href="https://fredelick.github.io/run-buddy/">
                <img
                src={require('../assets/images/screenshots/03.JPG')}
                alt="Run Buddy"
                className="screenshots"
                />
            </a>
        </div>
        </div>

    )

}

export default Portfolio;