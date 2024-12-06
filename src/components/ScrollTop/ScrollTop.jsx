import { useEffect, useState } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { FaArrowCircleUp } from 'react-icons/fa';
import { ScrollTopContainerDiv, ScrollTopDiv} from './index.js';

export function ScrollTop() {
  const [toTopButton, setToTopButton] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 250) {
        setToTopButton(true);
      } else {
        setToTopButton(false);
      }
    });

    Aos.init({
      duration: 1000,
    });
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {toTopButton && (
        <ScrollTopContainerDiv onClick={scrollUp} data-aos="fade-left">
          <ScrollTopDiv>
            <FaArrowCircleUp onClick={scrollUp} className='icon-scroll-top'/>
          </ScrollTopDiv>
        </ScrollTopContainerDiv>
      )}
    </>
  );
}
