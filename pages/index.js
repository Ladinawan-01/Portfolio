import Head from 'next/head';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {

    const handleScroll = () => {
      let scrollPosition = window.scrollY;

      document.querySelectorAll('section').forEach(section => {
        if (
          scrollPosition >= section.offsetTop - 100 &&
          scrollPosition < section.offsetTop + section.offsetHeight - 100
        ) {
          const currentId = section.getAttribute('id');
          removeAllActiveClasses();
          addActiveClass(currentId);
        }
      });
    };

    const smoothScroll = (e) => {
      e.preventDefault();
      const href = e.currentTarget.getAttribute('href');
      const targetElement = document.querySelector(href);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth'
        });
      }
    };

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', smoothScroll);
    });

    window.addEventListener('scroll', handleScroll);

    const removeAllActiveClasses = () => {
      document.querySelectorAll('nav a').forEach(el => {
        el.classList.remove('active');
      });
    };

    const addActiveClass = id => {
      const selector = `nav a[href="#${id}"]`;
      const activeLink = document.querySelector(selector);
      if (activeLink) {
        activeLink.classList.add('active');
      }
    };

    const typingText = document.querySelector('.typing-text span');
    const words = ['Web Developer', 'React & Redux Expert', 'Next.js Developer', 'Full-Stack Developer'];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    const type = () => {
      const currentWord = words[wordIndex];
      if (isDeleting) {
        typingText.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
      } else {
        typingText.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;
      }

      if (!isDeleting && charIndex === currentWord.length) {
        isDeleting = true;
        setTimeout(type, 1500);
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        setTimeout(type, 500);
      } else {
        setTimeout(type, isDeleting ? 50 : 100);
      }
    };

    type();

    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', smoothScroll);
      });
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <>
      <Head>
        <title>Ladin Fazal - Portfolio Website</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
        />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      </Head>

      <header>
        <img src="/ladin-logo-svg.svg" className="logo" alt="Logo" />
        <nav>
          <a href="#home" className="active">Home</a>
          <a href="#services">Services</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#education">Education</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section id="home" className="home">
        <div className="home-img">
          <img src="/main.jpg" alt="Ladin Fazal" />
        </div>
        <div className="home-content">
          <h1>Hi, It's <span>Ladin Fazal</span></h1>
          <h3 className="typing-text">I'm a <span></span></h3>
          <p>I am a skilled developer with expertise in React, Redux, and Next.js. I specialize in building dynamic and responsive web applications with a focus on performance and user experience. My goal is to help bring your ideas to life with clean, efficient code.</p>
          <div className="social-icons">
            <a href="#"><i className="fa-brands fa-linkedin"></i></a>
            <a href="#"><i className="fa-brands fa-github"></i></a>
            <a href="#"><i className="fa-brands fa-x-twitter"></i></a>
            <a href="#"><i className="fa-brands fa-instagram"></i></a>
          </div>
          <a href="#contact" className="btn">Hire me</a>
        </div>
      </section>

      <section id="services" className="services">
        <h2 className="section-title">My Services</h2>
        <div className="services-container">
          <div className="service-card">
            <i className="fas fa-code" />
            <h3>Web Development</h3>
            <p>Custom web applications built with modern technologies like React, Next.js, and Node.js.</p>
          </div>
          <div className="service-card">
            <i className="fas fa-mobile-alt" />
            <h3>Responsive Design</h3>
            <p>Creating websites that look great and function flawlessly on all devices and screen sizes.</p>
          </div>
          <div className="service-card">
            <i className="fas fa-server" />
            <h3>API Development</h3>
            <p>Designing and implementing robust RESTful APIs to power your web and mobile applications.</p>
          </div>
        </div>
      </section>
      <section id="skills" className="skills">
        <h2 className="section-title">My Skills</h2>
        <div className="skills-container">
          <div className="skill-item">
            <h3>React</h3>
            <div className="skill-bar"><div className="skill-progress" style={{ width: '90%' }} /></div>
          </div>
          <div className="skill-item">
            <h3>Next.js</h3>
            <div className="skill-bar"><div className="skill-progress" style={{ width: '85%' }} /></div>
          </div>
          <div className="skill-item">
            <h3>Redux</h3>
            <div className="skill-bar"><div className="skill-progress" style={{ width: '80%' }} /></div>
          </div>
          <div className="skill-item">
            <h3>Node.js</h3>
            <div className="skill-bar"><div className="skill-progress" style={{ width: '75%' }} /></div>
          </div>
        </div>
      </section>
      <section id="projects" className="projects">
        <h2 className="section-title">My Projects</h2>
        <div className="projects-container">
          <div className="project-card">
            <img src="/api/placeholder/300/200" alt="Project 1" />
            <h3>Project 1</h3>
            <p>A brief description of Project 1 and the technologies used.</p>
            <a href="#" className="btn">View Project</a>
          </div>
          <div className="project-card">
            <img src="/api/placeholder/300/200" alt="Project 2" />
            <h3>Project 2</h3>
            <p>A brief description of Project 2 and the technologies used.</p>
            <a href="#" className="btn">View Project</a>
          </div>
          <div className="project-card">
            <img src="/api/placeholder/300/200" alt="Project 3" />
            <h3>Project 3</h3>
            <p>A brief description of Project 3 and the technologies used.</p>
            <a href="#" className="btn">View Project</a>
          </div>
          <div className="project-card">
            <img src="/api/placeholder/300/200" alt="Project 4" />
            <h3>Project 4</h3>
            <p>A brief description of Project 4 and the technologies used.</p>
            <a href="#" className="btn">View Project</a>
          </div>
        </div>
      </section>
      <section id="education" className="education">
        <h2 className="section-title">Education</h2>
        <div className="timeline">
          <div className="timeline-item">
            <h3>Bachelor's in Computer Science</h3>
            <p>University Name, 2018 - 2022</p>
            <p>Relevant coursework: Data Structures, Algorithms, Web Development</p>
          </div>
          <div className="timeline-item">
            <h3>Full Stack Web Development Bootcamp</h3>
            <p>Coding Academy, 2022</p>
            <p>Intensive 12-week program covering modern web technologies</p>
          </div>
        </div>
      </section>
      <section id="experience" className="experience">
        <h2 className="section-title">Work Experience</h2>
        <div className="timeline">
          <div className="timeline-item">
            <h3>Frontend Developer</h3>
            <p>Tech Company Inc., 2022 - Present</p>
            <p>Developing and maintaining React-based web applications</p>
          </div>
          <div className="timeline-item">
            <h3>Web Development Intern</h3>
            <p>StartUp Co., Summer 2021</p>
            <p>Assisted in building responsive websites using HTML, CSS, and JavaScript</p>
          </div>
        </div>
      </section>
      <section id="contact" className="contact-margin">
        <h2 className="section-title">Contact Us</h2>
        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" required defaultValue={""} />
          <button type="submit" className="btn">Send Message</button>
        </form>
      </section>
      <footer>
        <p>© 2024 Ladin Fazal. All rights reserved.</p>
      </footer>
    </>
  );
}
