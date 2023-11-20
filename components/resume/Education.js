import React from 'react'
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2008 - 2024</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="BASc in Computer engineering , option in entrepreneurship"
            subTitle="University of Ottawa (2020 - 2024)"
            result="Ottawa,ON,CA"
            des="I successfully obtained a bachelor in computer engineering and entrepreneurship and gained experience in those domains. It allowed me to expand deeply my knowledge about computer architecture, software development, circuit and electronics analysis, math , algorithms, buisness management and more."
          />
          
          <ResumeCard
            title="HighSchool diploma"
            subTitle="Polyvalente le Carrefour (2020)"
            result="Gatineau, Quebec, Canada / International (IB) diploma "
            des="I Obtained my highschool diploma in 2020. Due to my highgrades I could go directly from highschool in Quebec to university in Ontario with a summer math course. I was enrolled in the IB program aswell wich led me to do multiple volunteering activities."
          />
        </div>
      </div>
      {/* part Two */}

      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2019 - 2024</p>
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience (brief) </h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="IT professional intern"
            subTitle="Global Affairs Canada - (Mai-Sep 2023)"
            result="Ottawa,ON,CA"
            des="In charge of Global Affair's Canada  minister's devices maintenance, attribution and troubleshooting. From software coding,PowerBI to project management within the department, this experience brought me a lot of knowledge in IT and computer engineering all around."
          />
          <ResumeCard
            title="Internet technician"
            subTitle="Bell technical solutions - (Mai-Sep 2022)"
            result="Gatineau,QC, CA"
            des="Internet cable wiring from outside ( CSP-terminal-home) to inside. In charge of all the installation process. Technology used: Fiber, copper. I also did some troubleshooting for the network."
          />
          <ResumeCard
            title="Computer technician"
            subTitle="Staples (July 2019-Sep 2020) "
            result="Gatineau,QC,CA "
            des="I was in charge of repairing customers computers and mobile devices. I did from hardware ordering , to hardware and software repairs , to computer setup and malware removal. I also took the role of a sale associate sometimes."
          />
        </div>
      </div>
    </motion.div>
  );
}

export default Education