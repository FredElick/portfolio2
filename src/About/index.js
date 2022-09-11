import React from 'react'
import coverImage from "../assets/images/profilePic.jpg";

function About() {

  return (
    <section className="my-5" >
      <h1 id="about">Who am I?</h1>
      <img src={coverImage} className="my-2 pfp"  alt="cover" />
      <div className="my-2">
        <p>
          I am Fred Elick, a fullstack web developer looking to get his feet wet in the world of professional
          web development. While I am still polishing my skills and focusing on personal projects, I am excited
          to begin working with more experienced developers and learning all that I can.
      </p>
      </div>
    </section>
  )
}

export default About