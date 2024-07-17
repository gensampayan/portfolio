import { Link } from "react-router-dom";
import logo from "../assets/images/logo.svg";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Home() {
  useEffect(() => {
    AOS.init({
      duration: 800, 
      easing: 'ease', 
      once: false
    });
  }, []);

  return (
    <div id="home" className="bg-primaryBg h-screen">
      <nav className="flex flex-row justify-between">
        <div>
          <img src={logo} alt="GEN" />
        </div>
        <div className="p-5">
          <Link
            to="/"
            className="text-secondaryType"
          >
            BASE IN CEBU, PHILIPPINES
          </Link>
        </div>
        <div className="flex flex-row gap-10 p-10">
          <div data-aos="flip-up">
            <a
              href="https://docs.google.com/document/d/1BxyXCzOLrlnd8Rvaqe525gu_D78FCmOqfPQCHh3HyAA/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-secondaryType"
            >
              VIEW RESUME
            </a>
          </div>
          <div>
            <a href="#works" className="font-bold text-secondaryType cursor-pointer">WORKS</a>
          </div>
          <div>
            <a href="#contact" className="font-bold text-secondaryType cursor-pointer">CONTACT</a>
          </div>
        </div>
      </nav>
      <section>
        <div className="flex flex-col">
          <div className="pt-10 px-10">
            <p className="font-extrabold text-9xl" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
              GENEÑO
            </p>
            <p className="font-extrabold text-9xl" data-aos="fade-up">
              SAMPAYAN
            </p>
          </div>
        </div>
        <div className="flex flex-row">
          <div className="flex flex-col gap-3">
            <div className="pt-10 pl-12 w-2/4">
              <p className="font-medium leading-9 text-tertiaryType">
                Full Stack Web Developer passionate about creating dynamic and user-friendly web applications. Vision to develop websites that help businesses and boost community social interaction.
              </p>
            </div>
            <div className="pl-12">
              <button className="bg-versatile p-5 rounded-lg">
                <a
                  href="mailto:geneno.sampayan@gmail.com" 
                  target="_blank" 
                  className="underline-none bg-transparent font-bold text-lg text-white" 
                  rel="noopener noreferrer"
                >
                  GET IN TOUCH
                </a>
              </button>
            </div>
          </div>
          <div>
            <div className="flex flex-col mr-10">
              <div className="pt-10 w-96">
                <p className="font-medium text-secondaryType">AVAILABLE FOR WORK</p>
              </div>
              <div className="hover:rotate-180 transform transition duration-300 ease-in-out">
                <p className="font-bold text-9xl">OPEN</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
