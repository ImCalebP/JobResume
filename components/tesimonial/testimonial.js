import React from 'react';
import Title from '../layouts/Title';

const Testimonial = () => {
  return (
    <section id="testimonial" className="w-full py-20 border-b-[1px] border-b-black">
      <div className="flex justify-center items-center text-center">
        <Title title="My Life" des="Outside of Work" />
        
      </div>
      <div className="flex justify-center items-center text-center">
      <p className="text-base text-gray-400">
          I'm a passionate computer engineering graduate who finds joy in the world beyond lines of code. While my professional journey revolves around crafting innovative solutions in the digital realm, there's a vibrant tapestry of interests that color my life outside the confines of work.
          </p>
        
      </div>
      <div className="w-full">

        {/* Outside of Work Section */}
        <div className="w-full p-8 mt-8 bg-gradient-to-r from-[#1e2024] to-[#23272b] rounded-lg shadow-shadowOne">
          <h2 className="text-xl md:text-2xl font-semibold group-hover:text-white duration-300">Guitar</h2>
          <p className="text-base text-gray-400">
          When I'm not immersed in the captivating world of technology, you'll likely find me strumming away on my guitar, exploring the endless possibilities of musical expression. The rhythmic cadence of chords and melodies serves as a harmonious counterpoint to the logical precision demanded by my engineering endeavors.
          </p>
        </div>
        <div className="w-full p-8 mt-8 bg-gradient-to-r from-[#1e2024] to-[#23272b] rounded-lg shadow-shadowOne">
          <h2 className="text-xl md:text-2xl font-semibold group-hover:text-white duration-300">Fitness</h2>
          <p className="text-base text-gray-400">
          Fitness is not just a routine for me; it's a way of life. The daily pilgrimage to the gym is my personal commitment to physical well-being. It's not just about lifting weights; it's about the discipline, resilience, and the continual pursuit of personal bests.
          </p>
        </div>
        <div className="w-full p-8 mt-8 bg-gradient-to-r from-[#1e2024] to-[#23272b] rounded-lg shadow-shadowOne">
          <h2 className="text-xl md:text-2xl font-semibold group-hover:text-white duration-300">Snowboarding</h2>
          <p className="text-base text-gray-400">
          As the winter chill sets in, my heart races with anticipation for the snow-covered slopes. Snowboarding is not just a sport; it's a dance with the mountains, an exhilarating expression of freedom against a backdrop of pristine snow. Gliding down the slopes is my winter escape, a thrilling adventure that complements the precision of my engineering pursuits.
          </p>
        </div>
        <div className="w-full p-8 mt-8 bg-gradient-to-r from-[#1e2024] to-[#23272b] rounded-lg shadow-shadowOne">
          <h2 className="text-xl md:text-2xl font-semibold group-hover:text-white duration-300">Family and Social</h2>
          <p className="text-base text-gray-400">
          In the ebb and flow of life, I cherish both personal solitude and the camaraderie of shared moments. An easy-going nature defines my interactions with others, as I value the beauty of connections and the diverse stories each individual brings to the table. Whether it's immersing myself in a good book, exploring new avenues of creativity, or simply enjoying quiet moments of reflection, I find solace and inspiration in the balance between personal time and shared experiences.

Life is a multifaceted journey, and my portfolio is a testament not only to my technical expertise but also to the rich tapestry of interests that shape who I am. Join me as I navigate the intersection of technology and the human experience, creating a symphony of code and creativity that reflects the diverse facets of a life well-lived.
          </p>
        </div>

      </div>
      
    </section>
  );
}

export default Testimonial;
