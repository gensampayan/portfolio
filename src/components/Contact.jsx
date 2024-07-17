import { Link } from "react-router-dom";
import touch from "../assets/images/touch.png";

function Contact() {
  return (
    <div id="contact" className="bg-primaryBg h-full">
      <div className="text-center">
        <p className="font-bold text-3xl text-tertiaryType pt-5 mb-5">Do you need a website for your business?</p>
      </div>
      <div className="flex justify-center w-full">
        <Link
          to="geneno.sampayan@gmail.com" 
          target="_blank" 
          className="underline-none bg-transparent font-bold text-lg text-white" 
        >
          <img src={touch} alt="GET IN TOUCH" />
        </Link>
      </div>
      <div className="flex flex-row justify-around p-20">
        <div className="flex flex-col gap-5 w-1/2">
          <div className="font-bold text-tertiaryType">Social</div>
          <span className="block border-t border-secondaryType w-96"></span>
          <Link 
            to="https://www.linkedin.com/in/gene%C3%B1o-sampayan/"
            target="_blank"
            className="font-bold text-tertiaryType"
          >
            LinkedIn
          </Link>
          <Link 
            to="https://github.com/gensampayan"
            target="_blank"
            className="font-bold text-tertiaryType"
          >
            Github
          </Link>
          <Link 
            to="https://codepen.io/gensampayan"
            target="_blank"
            className="font-bold text-tertiaryType"
          >
            Codepen
          </Link>
        </div>
        <div className="flex flex-col gap-5 w-1/2">
          <a 
            href="#home" 
            className="font-bold text-9xl text-tertiaryType hover:skew-x-12 transform transition duration-500 ease-in-out"
          >
            GEN&#8598;
          </a>
          <p className="font-bold text-9xl text-tertiaryType">2024</p>
        </div>
      </div>
    </div>
  )
}

export default Contact;
