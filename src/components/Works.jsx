import { Link } from "react-router-dom";
import usehooks from "../assets/images/usehooks.png"
import mailmen from "../assets/images/mailmen.png"
import align from "../assets/images/align.png"

function Works() {
  return (
    <div id="works" className="bg-primaryBg h-full">
      <div className="bg-black rounded-3xl p-5">
      <div className="p-10">
        <p className="font-bold text-7xl text-primaryBg">WORKS/</p>
      </div>
      <div className="flex flex-row ml-5 mb-40">
        <div className="flex flex-col w-1/2">
         <div className="py-5">
          <p className="font-bold text-3xl text-primaryBg">UseHooks</p>
         </div>
         <div className="p-1 w-11/12">
          <p className="font-medium leading-6 text-primaryBg">
          useHooks is a dynamic and efficient web application designed to streamline your shopping experience. 
          With a commitment to saving time and enhancing convenience, useHooks empowers users to shop smarter by leveraging modern technology. 
          Whether you're browsing for essentials or exploring new products.         
          </p>
         </div>
         <div className="flex flex-row flex-wrap gap-1 mt-3">
          <img 
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" 
            className="w-10 h-10 object-contain"
          />  
          <p className="font-medium text-primaryBg p-3 border border-gray-500 rounded">JavaScript</p>
          <img 
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" 
            className="w-10 h-10 object-contain"
          />  
          <p className="font-medium text-primaryBg p-3 border border-gray-500 rounded">React</p>
         </div>
         <div className="flex flex-row mt-10 gap-10">
          <Link 
            to="https://usehooks-delta.vercel.app/"
            target="_blank"
            className="font-medium text-primaryBg bg-tertiaryType p-5 rounded"
          >
            View Live
          </Link>
          <Link 
            to="https://github.com/gensampayan/usehooks"
            target="_blank"
            className="font-medium text-primaryBg bg-tertiaryType p-5 rounded"
          >
            View Code
          </Link>
         </div>
        </div>
        <div className="flex flex-col w-1/2"> 
          <Link
            to="https://usehooks-delta.vercel.app/"
            target="_blank"
          >
            <img src={usehooks} alt="project-usehooks"  className="object-contain rounded"/>
          </Link>
        </div>
      </div>
      
      <div className="flex flex-row ml-5 mb-40">
        <div className="flex flex-col w-1/2">
         <div className="py-5">
          <p className="font-bold text-3xl text-primaryBg">MailMen</p>
         </div>
         <div className="p-1 w-11/12">
          <p className="font-medium leading-6 text-primaryBg">
          MailMen is an innovative application designed to bridge the gap between digital communication and physical delivery. 
          With MailMen, users can transform their digital emails into physical mail items effortlessly. 
          MailMen ensures that your emails reach their destination as tangible, printed mail delivered right to your doorstep. 
          </p>
         </div>
         <div className="flex flex-row flex-wrap gap-1 mt-3">
          <img 
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" 
            className="w-10 h-10 object-contain bg-green-900 rounded-full p-1"
          />  
          <p className="font-medium text-primaryBg p-3 border border-gray-500 rounded">MongoDB</p>
          <img 
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" 
            className="w-10 h-10 object-contain"
          />  
          <p className="font-medium text-primaryBg p-3 border border-gray-500 rounded">React</p>   
          <img 
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg" 
            className="w-10 h-10 object-contain bg-white rounded-full p-1"
          />      
          <p className="font-medium text-primaryBg p-3 border border-gray-500 rounded">Express.js</p>
          <img 
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" 
            className="w-10 h-10 object-contain"
          />  
          <p className="font-medium text-primaryBg p-3 border border-gray-500 rounded">Node.js</p>
         </div>
         <div className="flex flex-row mt-10 gap-10">
          <Link 
            to="https://mailmen.vercel.app/"
            target="_blank"
            className="font-medium text-primaryBg bg-tertiaryType p-5 rounded"
          >
            View Live
          </Link>
          <Link 
            to="https://github.com/gensampayan/mailmen"
            target="_blank"
            className="font-medium text-primaryBg bg-tertiaryType p-5 rounded"
          >
            View Code
          </Link>
         </div>
        </div>
        <div className="flex flex-col w-1/2"> 
          <Link
            to="https://mailmen.vercel.app/"
            target="_blank"
          >
            <img src={mailmen} alt="project-mailmen"  className="object-contain rounded"/>
          </Link>
        </div>
      </div>

      <div className="flex flex-row ml-5 mb-40">
        <div className="flex flex-col w-1/2">
         <div className="py-5">
          <p className="font-bold text-3xl text-primaryBg">Align</p>
         </div>
         <div className="p-1 w-11/12">
          <p className="font-medium leading-6 text-primaryBg">
          Align is a platform dedicated to fostering community connections through intuitive tools designed for organizing, promoting, 
          and managing a wide range of social, educational, and recreational events. 
          Whether it's a local gathering, educational workshop, or cultural celebration, 
          Align ensures that every event contributes positively to the communities.       
          </p>
         </div>
         <div className="flex flex-row flex-wrap gap-1 mt-3">
         <img 
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" 
            className="w-10 h-10 object-contain bg-green-900 rounded-full p-1"
          />  
          <p className="font-medium text-primaryBg p-3 border border-gray-500 rounded">MongoDB</p>
          <img 
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" 
            className="w-10 h-10 object-contain"
          />  
          <p className="font-medium text-primaryBg p-3 border border-gray-500 rounded">React</p>   
          <img 
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg" 
            className="w-10 h-10 object-contain bg-white rounded-full p-1"
          />      
          <p className="font-medium text-primaryBg p-3 border border-gray-500 rounded">Express.js</p>
          <img 
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" 
            className="w-10 h-10 object-contain"
          />  
          <p className="font-medium text-primaryBg p-3 border border-gray-500 rounded">Node.js</p>
         </div>
         <div className="flex flex-row mt-10 gap-10">
          <Link 
            to="https://align-mern-app.vercel.app/"
            target="_blank"
            className="font-medium text-primaryBg bg-tertiaryType p-5 rounded"
          >
            View Live
          </Link>
          <Link 
            to="https://github.com/gensampayan/align"
            target="_blank"
            className="font-medium text-primaryBg bg-tertiaryType p-5 rounded"
          >
            View Code
          </Link>
         </div>
        </div>
        <div className="flex flex-col w-1/2"> 
          <Link
            to="https://align-mern-app.vercel.app/"
            target="_blank"
          >
            <img src={align} alt="project-align"  className="object-contain rounded"/>
          </Link>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Works;
