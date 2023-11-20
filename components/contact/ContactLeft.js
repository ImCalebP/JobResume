import React from 'react';
import { FaLinkedinIn } from 'react-icons/fa';
import { contactImg } from '../../assets/index';

const ContactLeft = () => {
  const linkedinProfileLink = 'https://www.linkedin.com/in/caleb-paradis-69bba1205?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app';

  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={contactImg}
        alt="contactImg"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">Caleb Paradis</h3>
        <p className="text-lg font-normal text-gray-400">
          Computer engineering graduate
        </p>
        <p className="text-base text-gray-400 tracking-wide">
          I'm thrilled at the prospect of connecting with new opportunities and amazing individuals. Whether you have questions, want to discuss potential collaborations, or just fancy a friendly chat, feel free to reach out! Your message is always welcome, and I'm excited to hear from you. Let's make something great together!
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Phone: <span className="text-lightText">(819)355-2436</span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email: <span className="text-lightText">paradiscaleb@gmail.com</span>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
        <div className="flex gap-4">
          <a
            href={linkedinProfileLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bannerIcon"
          >
            <FaLinkedinIn />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactLeft;
