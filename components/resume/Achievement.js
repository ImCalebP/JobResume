import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Achievement = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      <div>
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2018 - 2024</p>
          <h2 className="text-4xl font-bold">Other acquisitions</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Micro-intern Quantum Computing"
            subTitle="University of Sherbrooke"
            result="Sherbrooke,Qc,CA (Mar-2021)"
            des="Learned a lot of concepts about the fascinating world of quantum physics, more particularly in Computers."
          />
          <ResumeCard
            title="Health and safety at work "
            subTitle="Papier Masson White Burch"
            result="Gatineau,Qc,CA"
            des="Learned how to stay safe at work in a factory or other dangerous work conditions and cadenassage"
          />
          <ResumeCard
            title="Lifts operation ( Liftow )"
            subTitle="Papier Masson White Burch"
            result="Gatineau,Qc,CA"
            des="Learned how to operate lifts and elevated bridges."
          />
        </div>
      </div>
      <div>
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2018 - 2024</p>
          <h2 className="text-4xl font-bold">Projects</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="AI Sign language augmented reality glasses"
            subTitle="Python, React Native, SKlearn, mediapipe, Git"
            result="Sep 2023-Ongoing"
            des="• Wearable glasses that allows non-sign language speaker to understand deaf or/and mute people trough sign language
translation to text using Deep learning. Deaf persons can also see translated language with speech to text translation.
• RasberryPI is also used to achieve this project. Mobile device application UI made with react native, AI model with
Python (SKlearn and Media pipes libraries)"
          />
          <ResumeCard
            title="Barber Website"
            subTitle="React JS (HTML+JavaScript+CSS), Git"
            result="June 2023"
            des="Website allows to see products, schedule appointments , contact the barber and more"
          />
          <ResumeCard
            title="RISC multicycle processor design"
            subTitle="VHDL, Verilog"
            result="Feb 2022"
            des="• Developped a multicycle processor based on RISC archutecture using QuartusII and VHDL.
• To achieve this, I had to develop much more components such as MUX, Adder, ALU’s etc."
          />
          <ResumeCard
            title="Governmental mobile application"
            subTitle="Java, Android Studio, GIT"
            result="Oct.2021-Dec.2021"
            des="Services such as car immatriculation, health and insurances offered on the application for a ”fake” government service.
Android studio and Java has been used."
          />
          
        </div>
      </div>
    </motion.div>
  );
};

export default Achievement;
