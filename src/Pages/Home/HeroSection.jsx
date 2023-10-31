import { Link } from "react-scroll";

export default function HeroSection() {
    return (
    <section id="heroSection" className="hero--section">
        <div className="hero--section--content-box">
            <div className="hero--section--content">
                <p className="section--title">
                Hey I'm John
                </p>
                <h1 className="hero--section--title">
                  <span className="hero--section--title--color">
                    Full Stack
                  </span>  {""}
                  <br/>
                  Developer
                </h1>
                <p className="hero--section-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                <br/>
                Nam convallis, ante in.
                </p>
            </div>

            <Link
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="ContactMe"
              className="btn btn-primary"
            >Get In Touch</Link>
         
        </div>
        <div className="hero--section--img">
          <img className="hero--img" src="./img/hero_image.png" alt="Hero Section"></img>
        </div>
    </section>
    );
}
