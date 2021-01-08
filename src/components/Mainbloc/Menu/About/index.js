import React from "react";
import "./about.scss";

const About = () => {
  return (
    <div id="about">
      <div className="section-title">
        <div data-aos="fade-right">About</div>
        <div
          className="underline"
          data-aos="flip-right"
          data-aos-delay="400"
        ></div>
      </div>
      <div className="content">
        <div className="text">
        Know everything about my proffessionnal career, and personnal passions.
        </div>
        <div
          className="container about-container animated-border"
          data-aos="fade-left"
          data-aos-delay="500"
        >
          <div className="item">
            <h2>Career</h2>
            <h3>Web development studies</h3>
            <p>
              Let's talk about O'clock. It is a school specializing in web
              developer training, with a particularity ... Everything happens in
              telepresencial! 5 months of intense training, a specialization in
              React and at the end, the diploma "Web Developer and Mobile Web
              Level III" (bac+2).
            </p>

            <h3>Ready to work for you</h3>
            <p>
              I'm currently based in the region of Lille, France, but ready to
              move anywhere in Europe for my first job as a web developer. For
              this first profesional experience, I am more than ever eager to
              gain skills and knowledge. Very motivated and enthusiastic, I will
              use my coding skills to provide technological solutions for the
              collaborators and customers.
            </p>
          </div>

          <div className="item">
            <h2>Objectives</h2>
            <h3>Improve</h3>
            <p>
              At the top of my 25 years old, taking experience and always
              continue to learn is something essential for me. Passionate by
              web development, I always need to push my limits, create
              new applications, learn new librairies/framkeworks, best
              practices, and over all produce quality code.
              <br />
            </p>
            <h3>FullStack</h3>
            <p>
              Currently I use Javascript and PHP it to build Web Applications,
              with technologies such as React or Symfony. I also continue to,
              by creating new website, with NodeJS for example. Continue to improve
              my basic Javascript and PHP knowledges is the most important thing now.
              Basicaly, learning new things and improve constantly.
            </p>
          </div>

          <div className="item">
            <h2>Passions</h2>
            <h3>Adventure</h3>
            <p>
              Sport and outdoor activities are an important role in my life,
              especially cycling and running. I have been lucky enough to live
              in few countries in recent years (Norway, Australia, Japan), with
              a seasonal activity, mainly in hotels / restaurants.
              <br />
            </p>
            <h3>Technology</h3>
            <p>
              Impossible to escape there being born at this time! Technology is
              now totaly essential for all of us, and contributing to this new
              area by developing application is for me a huge priviledge and
              satisfaction.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
