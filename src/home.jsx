import React, { useState } from 'react';
import { Code2, Sparkles } from 'lucide-react';
import MeRounded from "./MeRounded.png";
import "./Portfolio.css";

function Home() {
    const skills = [
        'HTML & CSS',
        'JavaScript',
        'React',
        'Node.js',
        'PHP',
        'Python',
        'MySQL',
        'PostgreSQL',
        'WordPress',
        'Git/GitHub',
        'Figma',
        'Canva'
    ];

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>
            {/* Hero Section */}
            <section id="home" className="pt-32 pb-20 px-4 bg-gradient-to-br from-blue-50 via-white to-slate-50">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="flex justify-center mb-8">
                        <img src={MeRounded} alt="Profile" className="w-48 h-48 md:w-56 md:h-56 rounded-full shadow-xl border-4 border-white" />
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 leading-tight">
                        Hello, I'm <span className="text-blue-600">Laurie</span>
                    </h1>
                    <p className="text-xl text-gray-600 mb-6">
                        UX/UI Designer & Front-End Developer
                    </p>
                    <p className="text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed">
                        A self-taught developer with a solid foundation in modern web technologies.
                        I've dedicated myself to learning through hands-on practice and personal projects,
                        and I'm ready to bring my skills and enthusiasm to a professional environment.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link to="/contact">
                            <button
                                className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition transform hover:scale-105 font-medium shadow-md"
                            >
                                Get In Touch
                            </button>
                            </Link>
                        <button
                            onClick={() => scrollToSection('about')}
                            className="bg-white text-gray-700 px-8 py-3 rounded-lg hover:bg-gray-50 transition transform hover:scale-105 font-medium border-2 border-gray-200 shadow-sm"
                        >
                            Learn More
                        </button>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="py-20 px-4 bg-white">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
                            About Me
                        </h2>
                        <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-xl border border-blue-100 shadow-sm">
                            <div className="flex items-center mb-4">
                                <Code2 className="text-blue-600 mr-3" size={24} />
                                <h3 className="text-xl font-bold text-gray-800">Development</h3>
                            </div>
                            <p className="text-gray-600 leading-relaxed">
                                I build responsive, accessible websites using modern technologies like HTML, CSS, JavaScript,
                                and React. I'm committed to writing clean code and following best practices to create
                                reliable web experiences.
                            </p>
                        </div>
                        <div className="bg-gradient-to-br from-slate-50 to-white p-8 rounded-xl border border-slate-100 shadow-sm">
                            <div className="flex items-center mb-4">
                                <Sparkles className="text-slate-600 mr-3" size={24} />
                                <h3 className="text-xl font-bold text-gray-800">Design</h3>
                            </div>
                            <p className="text-gray-600 leading-relaxed">
                                User experience drives my design decisions. I focus on creating intuitive, clean interfaces
                                that prioritize usability and accessibility, ensuring every element serves a purpose and
                                enhances the user journey.
                            </p>
                        </div>
                    </div>

                    <div className="mt-12 bg-gradient-to-br from-slate-50 to-blue-50 p-8 rounded-xl border border-slate-200 shadow-sm">
                        <h3 className="text-xl font-bold text-gray-800 mb-4">My Journey</h3>
                        <p className="text-gray-600 leading-relaxed mb-4">
                            I'm at the beginning of my professional career in web development and design, with a strong
                            foundation built through self-learning and personal projects. I've invested significant time
                            mastering various technologies and tools, and I'm excited to apply this knowledge in a
                            professional setting.
                        </p>
                        <p className="text-gray-600 leading-relaxed">
                            While I don't have formal work experience yet, I'm eager to contribute, learn from experienced
                            developers, and grow within a team environment. I'm passionate about creating impactful digital
                            solutions and ready to take on new challenges.
                        </p>
                    </div>
                </div>
            </section>

            {/* Skills Section */}
            <section id="skills" className="py-20 px-4 bg-gradient-to-br from-slate-50 to-blue-50">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">Technical Skills</h2>
                        <p className="text-gray-600">Technologies and tools I work with</p>
                        <div className="w-20 h-1 bg-blue-600 mx-auto mt-4 rounded-full"></div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                        {skills.map(skill => (
                            <div key={skill} className="bg-white p-4 rounded-xl border border-slate-200 text-center shadow-sm hover:shadow-md transition">
                                <span className="font-medium text-gray-700">{skill}</span>
                            </div>
                        ))}
                    </div>

                    <div className="mt-12 text-center">
                        <p className="text-gray-600 mb-6 italic">
                            Self-taught and ready to contribute to real-world projects
                        </p>
                    </div>
                </div>
            </section>

            {/* Personal Interests Section */}
            <section id="interests" className="py-20 px-4 bg-white">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
                            Personal Interests
                        </h2>
                        <p className="text-gray-600">Things I enjoy outside of work</p>
                        <div className="w-20 h-1 bg-blue-600 mx-auto mt-4 rounded-full"></div>
                    </div>

                    <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6">
                        <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl border border-blue-100 shadow-sm text-center hover:shadow-md transition">
                            <span role="img" aria-label="Gaming" className="text-3xl mb-2 block">🎮</span>
                            <p className="text-gray-700 font-medium">Gaming</p>
                        </div>
                        <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl border border-blue-100 shadow-sm text-center hover:shadow-md transition">
                            <span role="img" aria-label="Reading" className="text-3xl mb-2 block">📚</span>
                            <p className="text-gray-700 font-medium">Reading</p>
                        </div>
                        <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl border border-blue-100 shadow-sm text-center hover:shadow-md transition">
                            <span role="img" aria-label="Cooking" className="text-3xl mb-2 block">🍳</span>
                            <p className="text-gray-700 font-medium">Cooking</p>
                        </div>
                    </div>
                </div>
            </section>


        </>
    );
}

export default Home;