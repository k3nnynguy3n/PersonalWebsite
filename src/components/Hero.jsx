import './Hero.css';
// import logo from '../assets/logo.png';
import profile from '../assets/IMG_6305_Original.jpg';

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <header className="hero-header">
      {/*  <img src={logo} alt="Logo" className="logo" /> */}
        <nav className="nav-links">
          <a href="#hero">Home</a>
          <a href="#about">About Me</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact Me</a>
        </nav>
      </header>


      <div className="hero-content">
        <div className="hero-text">
          <h1>Hello! I'm glad you're here!</h1>
          <h3>I'm Kenny Nguyen</h3>
          <p>I’m an aspiring software engineer who enjoys uncovering the logic behind complex systems and working with real-world data to solve practical problems with visible, meaningful impact.</p>
          <a href="#contact" className="contact-btn">Contact Me</a>
        </div>
        <div className="hero-image">
          <div className="blob-bg"></div>
        {  <img src={profile} alt="Kenny Nguyen" />}
        </div>
      </div>
    </section>
  );
}
