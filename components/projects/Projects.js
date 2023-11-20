import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo, projectThree, projectFour, projectFive, projectSix} from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO "
          des="Some Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="AR sign translation Artificial intelligence glasses + Mobile App"
          des=" Wearable augmented reality glasses that allows non-sign language speaker to understand deaf or/and mute people trough sign language
translation to text using AI. Deaf persons can also see translated language with speech to text translation.
• RasberryPI is also used to achieve this project. Mobile device application UI made with React Native and firebase, AI model with
Python and TensorFlow (SKlearn and Media pipes libraries)"
          src={projectOne}
          githubLink="https://github.com/Bensmrz/CEG4912-4913-CapstoneGroup4"
          websiteLink="https://github.com/Bensmrz/CEG4912-4913-CapstoneGroup4"
        />
        <ProjectsCard
          title="RISC multicycle processor design"
          des=" • Developped a multicycle processor based on RISC archutecture using QuartusII and VHDL.
• To achieve this, I had to develop much more components such as MUX, Adder, ALU’s etc."
          src={projectTwo}
        />
        <ProjectsCard
          title="Barber website"
          des="• Website allows to see products, schedule appointments , contact the barber and more.Made with HTML,CSS,JavaScript"
          src={projectFour}
          githubLink="https://github.com/ImCalebP/seg3125CalebParadisProject1.github.io"
          websiteLink="https://imcalebp.github.io/seg3125CalebParadisProject1.github.io/"
        />
        <ProjectsCard
          title="My resume website"
          des=" You currently are browsing it. Made with ReactJS, feel free to contact me at the bottom for any questions!"
          src={projectThree}
          githubLink="https://github.com/ImCalebP/JobResume"
          websiteLink="https://github.com/ImCalebP/JobResume"
        />
        <ProjectsCard
          title="Church Website"
          des=" Allows visitors to register to events, contact the church, see news, share testimonies, navigate on the website and more. Made with ReactJS."
          src={projectFive}
          githubLink="https://github.com/ImCalebP/Project2FINALCalebXPRIENCE"
          websiteLink="https://64bb827a4bb20436a4a94171--enchanting-khapse-3ea22a.netlify.app/"
        />
        <ProjectsCard
          title="Governmental mobile application"
          des=" Services such as car immatriculation, health and insurances offered on the application for a ”fake” government service.
Android studio and Java has been used."
          src={projectSix}
        />
      </div>
    </section>
  );
}

export default Projects