import React from 'react';
import { Code2, Sparkles } from 'lucide-react';
import MeRounded from "./MeRounded.png";
import "./Portfolio.css";

function Home() {
  const skills = [
    'HTML & CSS', 'JavaScript', 'React', 'Node.js',
    'PHP', 'Python', 'MySQL', 'PostgreSQL',
    'WordPress', 'Git/GitHub', 'Figma', 'Canva'
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-4 bg-gradient-to-br from-[#F5F5F5] via-[#D9E4F5] to-[#F5F5F5]">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-8">
            <img src={MeRounded} alt="Profile" className="w-48 h-48 md:w-56 md:h-56 rounded-full shadow-xl border-4 border-[#D9E4F5]" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-[#0B3C5D] mb-4 leading-tight">
            Hello, I'm <span className="text-[#328CC1]">Laurie</span>
          </h1>
          <p className="text-xl text-[#0B3C5D] mb-6">
            UX/UI Designer & Front-End Developer
          </p>
          <p className="text-[#0B3C5D] max-w-2xl mx-auto mb-10 leading-relaxed">
            A self-taught developer with a solid foundation in modern web technologies. 
            I've dedicated myself to learning through hands-on practice and personal projects, 
            and I'm ready to bring my skills and enthusiasm to a professional environment.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button onClick={() => scrollToSection('contact')} className="btn-primary">
              Get In Touch
            </button>
            <button onClick={() => scrollToSection('about')} className="btn-secondary">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-[#F5F5F5]">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0B3C5D] mb-3">About Me</h2>
          <div className="w-20 h-1 bg-[#328CC1] mx-auto rounded-full"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="card">
            <div className="flex items-center mb-4">
              <Code2 className="text-[#328CC1] mr-3" size={24} />
              <h3 className="text-xl font-bold text-[#0B3C5D]">Development</h3>
            </div>
            <p className="text-[#0B3C5D] leading-relaxed">
              I build responsive, accessible websites using modern technologies like HTML, CSS, JavaScript, 
              and React. I'm committed to writing clean code and following best practices to create 
              reliable web experiences.
            </p>
          </div>
          <div className="card">
            <div className="flex items-center mb-4">
              <Sparkles className="text-[#328CC1] mr-3" size={24} />
              <h3 className="text-xl font-bold text-[#0B3C5D]">Design</h3>
            </div>
            <p className="text-[#0B3C5D] leading-relaxed">
              User experience drives my design decisions. I focus on creating intuitive, clean interfaces 
              that prioritize usability and accessibility, ensuring every element serves a purpose and 
              enhances the user journey.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 bg-[#D9E4F5]">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0B3C5D] mb-3">Technical Skills</h2>
          <div className="w-20 h-1 bg-[#328CC1] mx-auto rounded-full"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
          {skills.map(skill => (
            <div key={skill} className="card text-center">
              <span className="font-medium text-[#0B3C5D]">{skill}</span>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Home;
