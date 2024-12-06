import { Container } from './index.js';
import { ScrollTop } from '../components/ScrollTop/ScrollTop.jsx';
import { Header } from '../components/Header/Header.jsx';
import { Button } from '../components/Button/Button.jsx';
import { IconPerson } from '../components/IconsPerson/IconPerson.jsx';
import { Input } from '../components/Input/Input.jsx';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useRef, useState, useEffect } from 'react';
import {
  FaArrowRight,
  FaReact,
  FaJsSquare,
  FaNode,
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from 'react-icons/fa';
import { IoReaderOutline } from 'react-icons/io5';
import { Cards } from '../components/Cards/Cards.jsx';

export function App() {
  const home = useRef(null);
  const about = useRef(null);
  const projects = useRef(null);
  const contact = useRef(null);

  const scrollToSection = (sectionRef) => {
    sectionRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const txt = "Hi, I'm William";
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);
  const speed = 100;

  const typeWriter = () => {
    if (index < txt.length) {
      setDisplayedText((prev) => prev + txt.charAt(index));
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);

  useEffect(() => {
    if (index < txt.length) {
      const timer = setTimeout(typeWriter, speed);
      return () => clearTimeout(timer);
    }
  }, [index]);

  const [barraRolagemVisivel, setBarraRolagemVisivel] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setBarraRolagemVisivel(true);
      } else {
        setBarraRolagemVisivel(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Container
      className={barraRolagemVisivel ? 'scrollbar-visible' : 'scrollbar-hidden'}
      barraRolagemVisivel={barraRolagemVisivel}
    >
      <Header
        scrollToSection={scrollToSection}
        home={home}
        about={about}
        projects={projects}
        contact={contact}
      />
      <ScrollTop />

      <div className="main">
        <div className="presentation section" id='home'>
          <div className="presentation-text">
            <h1>{displayedText}</h1>
            <h2>Full-stack developer and innovation enthusiast</h2>
            <p>
              Over 4 years of experience in the tech industry. I specialize in
              building innovative web and mobile applications using technologies
              such as React, React Native, and Node.js.
            </p>
            <div className="presentation-text-buttons">
              <Button
                text="My resume"
                color={(props) => props.theme.background600}
                icon={<IoReaderOutline className="icon" />}
                href = 'https://tourmaline-channel-400.notion.site/William-Amorim-1483ae62dfc7801c89b0d40a0cc45d06'
                target = '_blank'
              />

              <Button 
                text="Get in touch"
                color={(props) => props.theme.primaryColor500}
                icon={<FaArrowRight className="icon" />}
                pos="right"
                href = "#contact"
              />
            </div>
          </div>
          <div className="presentation-text-imagens">
            <img
              src="/computer.png"
              alt="image of hands using a computer"
              data-aos="fade-left"
              data-aos-duration="2500"
              data-aos-delay="500"
              className='response-computer'
            />
            <img
              src="/graphic-arrow-down.png"
              alt=""
              data-aos="fade-down"
              data-aos-delay="1800"
              className='response-arrow'
            />
          </div>
        </div>

        <div className="aboutMe section" id='about'>
          <div className="aboutMeBody">
            <img
              src="/men-programing.png"
              alt=""
              data-aos="fade-right"
              data-aos-offset="250"
              className='response-img-about'
            />
            <div className="aboutMe-info">
              <div className="info-icons">
                <FaReact className="aboutMe-icons" />
                <FaJsSquare className="aboutMe-icons" />
                <FaNode className="aboutMe-icons" />
              </div>
              <div className="info-text">
                <span>About me</span>
                <h2>
                  I’m a passionate software developer looking for my first
                  international oppotunity
                </h2>
                <p>
                  Beyond coding, I'm a coffee enthusiast, a cat lover, and a
                  self-taught artist who enjoys spending my free time doodling.
                  I am currently seeking opportunities to bring my skills and
                  enthusiasm to a tech company in the United States or Europe
                  and am excited about the prospect of relocating to pursue new
                  challenges.
                </p>
              </div>
              <div className="info-buttons">
                <Button
                  text="My resume"
                  color={(props) => props.theme.primaryColor500}
                  icon={<IoReaderOutline className="icon" />}
                  href = 'https://tourmaline-channel-400.notion.site/William-Amorim-1483ae62dfc7801c89b0d40a0cc45d06'
                  target = '_blank'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="projects section" id='projects'>
        <div className="projectsBody">
          <div className="projects-text">
            <span data-aos="fade-down" data-aos-offset="80">
              Projects
            </span>
            <h2
              data-aos="fade-down"
              data-aos-offset="100"
              data-aos-delay="200"
              id="projects"
            >
              Take a look at my highlighted projects
            </h2>
          </div>
          <div className="projects-cards">
            <a href="" data-aos="fade-right" data-aos-offset="350">
              <Cards
                title="DevLinks"
                description="A link agragator for social media."
                date="Jul - Dec 2022"
                icons={[
                  <FaReact className="aboutMe-icons" />,
                  <FaReact className="aboutMe-icons" />,
                ]}
              />
            </a>

            <a href="" data-aos="fade-down" data-aos-offset="350">
              <Cards
                title="DevLinks"
                description="A link agragator for social media."
                date="Jul - Dec 2022"
                icons={[
                  <FaReact className="aboutMe-icons" />,
                  <FaReact className="aboutMe-icons" />,
                ]}
              />
            </a>

            <a href="" data-aos="fade-left" data-aos-offset="350">
              <Cards
                title="DevLinks"
                description="A link agragator for social media."
                date="Jul - Dec 2022"
                icons={[
                  <FaReact className="aboutMe-icons" />,
                  <FaReact className="aboutMe-icons" />,
                ]}
              />
            </a>
          </div>
          <div className="projects-button">
            <Button
              text="See all"
              color={(props) => props.theme.background600}
              icon={<FaArrowRight className="icon" />}
              pos="right"
            />
          </div>
        </div>
      </div>
      <div className="contact section" ref={contact} id='contact'>
        <div className="contactBody">
          <div className="contact-info">
            <div
              className="bg-img"
              data-aos="flip-left"
              data-aos-offset="250"
              data-aos-duration="2000"
            >
              <img src="/avatar.png" alt="" className="contact-avatar" />
            </div>
            <div className="contact-info-sub">
              <div className="contact-text">
                <span>Contact</span>
                <h2>Enjoyed my work? Let’s work together</h2>
              </div>
              <p>
                I’m always up for a chat. Pop me an email at{' '}
                <a href='mailto:william.amorim.job@gmail.com'>william.amorim.job@gmail.com</a> or give me a shout on
                social media.
              </p>
              <div className="contact-icons">
                <IconPerson
                  icon={<FaGithub />}
                  href="https://github.com/William-Am0rim"
                />
                <IconPerson
                  icon={<FaLinkedin />}
                  href="https://www.linkedin.com/in/william-amorim-46b92b2b6/"
                />
                <IconPerson
                  icon={<FaInstagram />}
                  href="https://www.instagram.com/_william_amorim_"
                />
              </div>
            </div>
          </div>

          <form action="">
          
            <Button
              text="Send me a message"
              color={(props) => props.theme.primaryColor500}
              icon={<FaArrowRight className="icon" />}
              pos="right"
              width="22.5rem"
              href = "https://form.respondi.app/FAL0du6r"
              target = '_blank'
            />
          </form>
        </div>
      </div>
      <footer>
        William Amorim 2024. Layout based on Rocketseat’s template.
      </footer>
    </Container>
  );
}
