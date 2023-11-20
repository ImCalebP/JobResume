import React from "react";
import {motion} from "framer-motion"
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2010 - 2022</p>
          <h2 className="text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
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
            title="Lab technician student"
            subTitle="White Burch papier Masson (Mai 2021-Sep 2022) "
            result="Gatineau,QC,CA "
            des="Water quality test , air quality tests and wood humidity calculations. General maintenance of lab equipment and equipment of the factory. "
          />
          <ResumeCard
            title="Computer technician"
            subTitle="Staples (July 2019-Sep 2020) "
            result="Gatineau,QC,CA "
            des="In charge of repairing customers computers and mobile devices.Hardware ordering,hardware and software repairs,computer setup and malware removal.Also took the role of a sale associate."
          />
          
        </div>
      </div>
      <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2003 - 2024</p>
          <h2 className="text-4xl font-bold">Other Experiences</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
        <ResumeCard
            title="Electronic sports team manager"
            subTitle="Kataklysme Esports(2018 - 2021)"
            result="Canada-United-States"
            des="Managed over 50+ members including coaches, players, designers or other members and contributors to the team at
once.
• Website and social media maintenance and management
• Events manager
• Intercessor with sponsors and partnerships"
          />
          <ResumeCard
            title="Food Bank Volunteering"
            subTitle="Food bank of Malartic (2016 - 2018)"
            result="Malartic, Qc, CA"
            des="Food distribution to people in need , food packing, food management.
• Help and volunteering during fund raising events."
          />
          
          <ResumeCard
            title="Classical guitar classes"
            subTitle="Conservatoire de musique et de dance (2012-2018)"
            result="Val-D'Or, Qc, CA"
            des="Learned classical, acoustic and electric guitar and participated in multiple music events"
          />
          
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
