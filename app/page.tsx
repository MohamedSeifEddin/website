"use client";
import Header from "./Header";
import Footer from "./Footer";
import "./globals.css";

// Extend the Window interface to include scrollTimeout
declare global {
  interface Window {
    scrollTimeout?: NodeJS.Timeout;
  }
}
import { useRef, useState, useEffect } from "react";
import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaChess,
  FaDumbbell,
  FaMicrophone,
} from "react-icons/fa";
import Image from "next/image";

export default function Home() {
  const aboutRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const [activeSection, setActiveSection] = useState(null);
  const [isScrolling, setIsScrolling] = useState(false);

  const scrollToSection = (ref: any, label: any) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
    setActiveSection(label);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolling(true);

      const sections = [
        { ref: aboutRef, label: "Over Mij" },
        { ref: skillsRef, label: "Vaardigheden" },
        { ref: experienceRef, label: "Hobby's" },
        { ref: projectsRef, label: "Projecten" },
        { ref: contactRef, label: "Contact" },
      ];

      let currentActive = null;
      sections.forEach(({ ref, label }) => {
        if (ref.current) {
          const rect = ref.current.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            currentActive = label;
          }
        }
      });
      setActiveSection(currentActive);

      // Reset scrolling state after animation is done
      clearTimeout(window.scrollTimeout);
      window.scrollTimeout = setTimeout(() => {
        setIsScrolling(false);
      }, 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(window.scrollTimeout);
    };
  }, []);

  return (
    <div className="bg-gradient-to-b from-[#0d1117] to-[#161b22] min-h-screen">
      <Header />
      <main className="text-white">
        {/* Navigation Bar */}
        <nav
          className={`fixed w-full z-50 bg-[#161b22]/80 backdrop-blur-md py-4 shadow-lg transition-all duration-300 ${
            isScrolling ? "translate-y-0" : ""
          }`}
        >
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex justify-between items-center">
              <div className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">
                Mohamed Seif Eddin
              </div>
              <div className="flex items-center flex-wrap gap-4">
                {[
                  { label: "Over Mij", ref: aboutRef },
                  { label: "Vaardigheden", ref: skillsRef },
                  { label: "Hobby's", ref: experienceRef },
                  { label: "Projecten", ref: projectsRef },
                  { label: "Contact", ref: contactRef },
                ].map((item, index) => (
                  <button
                    key={index}
                    onClick={() => scrollToSection(item.ref, item.label)}
                    className={`text-sm sm:text-base px-3 py-1 transition-all duration-300 hover:text-teal-400 relative ${
                      activeSection === item.label
                        ? "text-teal-400 font-semibold"
                        : "text-gray-300"
                    }`}
                  >
                    {item.label}
                    {activeSection === item.label && (
                      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-teal-400 to-blue-500 rounded-full"></span>
                    )}
                  </button>
                ))}
                <a href="/Mohamed_SeifEddin_cv.pdf" download className="ml-2">
                  <button className="bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white px-4 py-2 rounded-full text-sm shadow-lg transition-all duration-300 hover:shadow-teal-500/20 hover:scale-105">
                    Download CV
                  </button>
                </a>
              </div>
            </div>
          </div>
        </nav>

        <div className="max-w-6xl mx-auto px-6 pt-32 space-y-32">
          {/* Hero Section */}
          <section className="min-h-screen flex flex-col justify-center">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h1 className="text-5xl font-bold leading-tight">
                  <span className="block">Hallo, ik ben</span>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">
                    Mohamed Seif Eddin
                  </span>
                </h1>
                <p className="text-xl text-gray-300">
                  Student Toegepaste Informatica met een passie voor Business
                  Analysis en Web Development
                </p>
                <div className="flex gap-4">
                  <button
                    onClick={() => scrollToSection(projectsRef, "Projecten")}
                    className="bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-600 hover:to-blue-600 text-white px-6 py-3 rounded-full font-medium shadow-lg transition-all duration-300 hover:shadow-teal-500/20 hover:scale-105"
                  >
                    Bekijk mijn werk
                  </button>
                  <button
                    onClick={() => scrollToSection(contactRef, "Contact")}
                    className="border border-teal-500 text-teal-400 px-6 py-3 rounded-full font-medium hover:bg-teal-500/10 transition-all duration-300 hover:scale-105"
                  >
                    Neem contact op
                  </button>
                </div>
                <div className="flex gap-4 pt-4">
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-teal-400 transition-colors"
                  >
                    <FaLinkedin size={24} />
                  </a>
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-teal-400 transition-colors"
                  >
                    <FaGithub size={24} />
                  </a>
                  <a
                    href="mailto:example@email.com"
                    className="text-gray-400 hover:text-teal-400 transition-colors"
                  >
                    <FaEnvelope size={24} />
                  </a>
                </div>
              </div>
              <div className="relative">
                <div className="relative z-10 rounded-full w-64 h-64 mx-auto overflow-hidden border-4 border-teal-400 shadow-xl shadow-teal-500/20">
                  <Image
                    src="https://i.postimg.cc/zf1d3YfW/126155811.jpg"
                    alt="Mohamed Seif Eddin"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-teal-500/20 to-blue-500/20 rounded-full blur-3xl w-64 h-64 mx-auto"></div>
              </div>
            </div>
          </section>

          {/* About Section */}
          <section ref={aboutRef} className="min-h-screen py-16">
            <div className="flex flex-col md:flex-row items-center gap-16">
              <div className="md:w-1/3 flex-shrink-0">
                <div className="relative">
                  <div className="relative z-10 overflow-hidden rounded-2xl border-2 border-teal-500/30 shadow-xl">
                    <Image
                      src="https://i.postimg.cc/zf1d3YfW/126155811.jpg"
                      alt="Mohamed Seif Eddin"
                      width={400}
                      height={500}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="absolute -bottom-4 -right-4 w-full h-full bg-gradient-to-br from-teal-500 to-blue-500 rounded-2xl -z-10"></div>
                </div>
              </div>
              <div className="md:w-2/3">
                <h2 className="text-4xl font-bold mb-6">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">
                    Over Mij
                  </span>
                </h2>
                <div className="space-y-6 text-gray-300 text-lg">
                  <p>
                    Hallo! Mijn naam is{" "}
                    <span className="font-bold text-teal-400">
                      Mohamed Seif Eddin
                    </span>
                    . Ik studeer{" "}
                    <span className="font-bold text-teal-400">
                      Toegepaste Informatica
                    </span>{" "}
                    met specialisatie in{" "}
                    <span className="font-bold text-teal-400">
                      Business Analysis
                    </span>
                    . Ik ben gepassioneerd door technologie en groei.
                  </p>
                  <p>
                    Ik heb werkervaring in de voedingsindustrie en ben een{" "}
                    <span className="font-bold text-teal-400">teamspeler</span>{" "}
                    die waarde hecht aan{" "}
                    <span className="font-bold text-teal-400">
                      nauwkeurigheid
                    </span>{" "}
                    en{" "}
                    <span className="font-bold text-teal-400">
                      flexibiliteit
                    </span>
                    .
                  </p>
                  <p>
                    Mijn doel is om efficiënte en innovatieve oplossingen te
                    bieden en voortdurend te blijven groeien.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Skills Section */}
          <section ref={skillsRef} className="min-h-screen py-16">
            <h2 className="text-4xl font-bold text-center mb-16">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">
                Vaardigheden
              </span>
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
              {[
                { name: "React", level: 85 },
                { name: "Next.js", level: 80 },
                { name: "JavaScript", level: 90 },
                { name: "TypeScript", level: 75 },
                { name: "Python", level: 65 },
                { name: "Java", level: 70 },
                { name: "SQL", level: 80 },
                { name: "HTML", level: 95 },
                { name: "CSS", level: 85 },
                { name: "Git", level: 75 },
                { name: "Figma", level: 60 },
                { name: "SAP UI5", level: 70 },
                { name: "SAP CAP", level: 65 },
              ].map((skill, index) => (
                <div
                  key={index}
                  className="bg-[#1c2431] p-6 rounded-xl shadow-lg hover:shadow-teal-500/10 transition-all duration-300 hover:-translate-y-2 group"
                >
                  <h3 className="text-lg font-medium text-white mb-3 group-hover:text-teal-400 transition-colors">
                    {skill.name}
                  </h3>
                  <div className="h-2 w-full bg-gray-700 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-teal-400 to-blue-500 rounded-full transition-all duration-500 ease-out"
                      style={{
                        width: `${skill.level}%`,
                        animationDelay: `${index * 100}ms`,
                      }}
                    ></div>
                  </div>
                  <p className="text-right text-sm text-gray-400 mt-1">
                    {skill.level}%
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Hobbies Section */}
          <section ref={experienceRef} className="min-h-screen py-16">
            <h2 className="text-4xl font-bold text-center mb-16">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">
                Hobby&apos;s
              </span>
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-[#1c2431] p-8 rounded-xl shadow-lg hover:shadow-teal-500/10 transition-all duration-300 hover:-translate-y-2 relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-teal-400 to-blue-500"></div>
                <div className="text-4xl text-teal-400 mb-4">
                  <FaChess />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-teal-400 transition-colors">
                  Schaken
                </h3>
                <p className="text-gray-300">
                  Strategisch denken, vooruit plannen en analytisch vermogen
                  zijn vaardigheden die ik ook inzet in projecten.
                </p>
              </div>

              <div className="bg-[#1c2431] p-8 rounded-xl shadow-lg hover:shadow-teal-500/10 transition-all duration-300 hover:-translate-y-2 relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-teal-400 to-blue-500"></div>
                <div className="text-4xl text-teal-400 mb-4">
                  <FaDumbbell />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-teal-400 transition-colors">
                  Fitness
                </h3>
                <p className="text-gray-300">
                  Discipline, doorzettingsvermogen en een gezonde mindset pas ik
                  toe in werk én sport.
                </p>
              </div>

              <div className="bg-[#1c2431] p-8 rounded-xl shadow-lg hover:shadow-teal-500/10 transition-all duration-300 hover:-translate-y-2 relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-teal-400 to-blue-500"></div>
                <div className="text-4xl text-teal-400 mb-4">
                  <FaMicrophone />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-teal-400 transition-colors">
                  Podcasten & Video
                </h3>
                <p className="text-gray-300">
                  Met mijn podcast en videoprojecten op TikTok en YouTube wil ik
                  mensen motiveren om hun beste zelf te worden.
                </p>
              </div>
            </div>
          </section>

          {/* Projects Section (Placeholder since it wasn't in original code) */}
          <section ref={projectsRef} className="min-h-screen py-16">
            <h2 className="text-4xl font-bold text-center mb-16">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">
                Projecten
              </span>
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[1, 2, 3, 4].map((item) => (
                <div
                  key={item}
                  className="bg-[#1c2431] rounded-xl overflow-hidden shadow-lg hover:shadow-teal-500/10 transition-all duration-300 hover:-translate-y-2 group"
                >
                  <div className="h-48 bg-gray-800 relative">
                    <div className="absolute inset-0 flex items-center justify-center text-gray-600">
                      Project Afbeelding
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-teal-400 transition-colors">
                      Project Titel {item}
                    </h3>
                    <p className="text-gray-300 mb-4">
                      Korte beschrijving van het project. Wat het doel was en
                      welke technologieën zijn gebruikt.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="text-xs bg-teal-500/20 text-teal-400 px-2 py-1 rounded">
                        React
                      </span>
                      <span className="text-xs bg-blue-500/20 text-blue-400 px-2 py-1 rounded">
                        NextJS
                      </span>
                      <span className="text-xs bg-purple-500/20 text-purple-400 px-2 py-1 rounded">
                        TailwindCSS
                      </span>
                    </div>
                    <div className="flex gap-4">
                      <a
                        href="#"
                        className="text-sm text-teal-400 hover:text-teal-300 transition-colors"
                      >
                        Live Demo →
                      </a>
                      <a
                        href="#"
                        className="text-sm text-blue-400 hover:text-blue-300 transition-colors"
                      >
                        GitHub →
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Contact Section (Placeholder since it wasn't in original code) */}
          <section ref={contactRef} className="min-h-screen py-16">
            <h2 className="text-4xl font-bold text-center mb-16">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">
                Contact
              </span>
            </h2>
            <div className="max-w-2xl mx-auto">
              <div className="bg-[#1c2431] p-8 rounded-xl shadow-lg">
                <p className="text-center text-gray-300 mb-8">
                  Neem contact met me op voor samenwerkingen of vragen. Ik sta
                  open voor nieuwe mogelijkheden!
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4 text-gray-300">
                    <FaEnvelope className="text-teal-400" />
                    <span>email@example.com</span>
                  </div>
                  <div className="flex items-center space-x-4 text-gray-300">
                    <FaLinkedin className="text-teal-400" />
                    <a
                      href="#"
                      className="hover:text-teal-400 transition-colors"
                    >
                      LinkedIn Profiel
                    </a>
                  </div>
                  <div className="flex items-center space-x-4 text-gray-300">
                    <FaGithub className="text-teal-400" />
                    <a
                      href="#"
                      className="hover:text-teal-400 transition-colors"
                    >
                      GitHub Profiel
                    </a>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-gray-700">
                  <form className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-gray-400 mb-1"
                        >
                          Naam
                        </label>
                        <input
                          type="text"
                          id="name"
                          className="w-full bg-[#0d1117] text-white border border-gray-700 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-gray-400 mb-1"
                        >
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          className="w-full bg-[#0d1117] text-white border border-gray-700 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-sm font-medium text-gray-400 mb-1"
                      >
                        Onderwerp
                      </label>
                      <input
                        type="text"
                        id="subject"
                        className="w-full bg-[#0d1117] text-white border border-gray-700 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-gray-400 mb-1"
                      >
                        Bericht
                      </label>
                      <textarea
                        id="message"
                        rows={5}
                        className="w-full bg-[#0d1117] text-white border border-gray-700 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-600 hover:to-blue-600 text-white font-medium py-3 px-4 rounded-lg transition-all duration-300 hover:shadow-lg"
                    >
                      Verstuur Bericht
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
