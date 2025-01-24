import Header from "./Header";
import Footer from "./Footer";
import Image from "next/image";
export default function Home() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-purple-600 to-cyan-500 text-white text-center px-6">
          <h1 className="text-5xl font-extrabold">Hi, I'm Kyno.</h1>
          <p className="mt-4 text-lg text-gray-200">
            Business Analyst Student at Hogent
          </p>
          <button className="mt-6 bg-white text-purple-600 px-6 py-3 rounded-full shadow-lg hover:bg-gray-100 transition">
            Check out my projects
          </button>
          <div className="mt-8 flex justify-center space-x-12">
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/kyno-van-de-velde-7bb876266/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-xl font-semibold px-8 py-3 rounded-full border-2 border-transparent bg-blue-600 hover:bg-blue-700 hover:border-blue-600 transition-all duration-300 transform hover:scale-105"
            >
              LinkedIn
            </a>
            {/* Download CV */}
            <a
              href="https://drive.google.com/file/d/1j3UWdCA0DhvsZXmY99lboJP4EhUB5akK/view"
              target="_blank"
              className="text-white text-xl font-semibold px-8 py-3 rounded-full border-2 border-transparent bg-green-500 hover:bg-green-600 hover:border-green-500 transition-all duration-300 transform hover:scale-105"
            >
              Download CV
            </a>
          </div>
        </section>
        {/* About Me */}
        <section id="about" className="py-20 bg-gray-100">
          <div className="container mx-auto max-w-4xl text-center space-y-6">
            <h2 className="text-4xl font-bold text-gray-800">About Me</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              I am a Business Analysis student at Hogent, studying Applied
              Computer Science with a focus on Functional & Business Analysis.
              My studies have taught me how IT solutions can help organizations
              optimize processes and achieve strategic goals. In addition to my
              technical skills, I am passionate about Formula 1, where I admire
              the speed, precision, and strategic thinking that are essential in
              both racing and business. I believe these traits quick analysis,
              accuracy, and always considering the bigger picture drive me to
              find effective, strategic solutions in my professional life. I am
              committed to continuously improving my skills to bridge the gap
              between business needs and technical solutions.
            </p>
          </div>
        </section>
        {/* Skills */}

        <section id="skills" className="py-20 bg-gray-50">
          <div className="container mx-auto max-w-6xl text-center space-y-10">
            <h2 className="text-4xl font-bold text-gray-800">My Skills</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              I have experience in a variety of technologies that enable me to
              create powerful, scalable solutions. Below are the skills that I
              use to build innovative projects.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
              {[
                { icon: "/skills/drupal.png" },
                { icon: "/skills/react.png" },
                { icon: "/skills/javascript.png" },
                { icon: "/skills/sql.png" },
                { icon: "/skills/java.png" },
                { icon: "/skills/html.png" },
                { icon: "/skills/css.png" },
                { icon: "/skills/nextjs.png" },
                { icon: "/skills/node.png" },
                { icon: "/skills/abap.png" },
              ].map(({ icon }, index) => (
                <div
                  key={index}
                  className="bg-white shadow-xl hover:shadow-xl rounded-xl p-8 transition-transform transform hover:scale-105"
                >
                  <Image
                    src={icon}
                    alt={`Skill ${index + 1}`}
                    width={100} // Fixed width
                    height={100} // Fixed height
                    className="mx-auto object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Contact */}
        <section id="contact" className="py-20 bg-gray-900 text-gray-300">
          <div className="container mx-auto max-w-4xl text-center space-y-6">
            <h2 className="text-4xl font-bold text-white">Get in Touch</h2>
            <p className="text-lg">
              Feel free to reach out for collaborations or just to say hi!
            </p>
            <a
              href="mailto:your-email@example.com"
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-500 transition"
            >
              Contact Me
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
