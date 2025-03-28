import Header from "./Header";
import Footer from "./Footer";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Header />

      <main className="bg-gradient-to-br from-purple-600 to-cyan-500">
        {/* Hero Section */}
        <section className="min-h-screen flex flex-col items-center justify-center text-white text-center px-6">
          <h1 className="text-5xl font-extrabold">Hi, I&apos;m Kyno.</h1>
          <p className="mt-4 text-lg text-gray-200">
            Business Analyst Student at Hogent
          </p>
          <Link href="#projects">
            <button className="mt-6 bg-white text-purple-600 px-6 py-3 rounded-full shadow-lg hover:bg-gray-100 transition">
              Check out my projects
            </button>
          </Link>
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
        <section id="about" className="py-20 text-white text-center px-6">
          <div className="container mx-auto max-w-3xl">
            <h2 className="text-5xl font-extrabold tracking-tight mb-6">
              About Me
            </h2>
            <p className="text-lg text-gray-200 leading-relaxed">
              I am a <span className="font-semibold">Business Analysis</span>{" "}
              student at
              <span className="font-semibold"> Hogent</span>, studying
              <span className="font-semibold"> Applied Computer Science</span>
              with a focus on{" "}
              <span className="font-semibold">
                Functional & Business Analysis
              </span>
              . My studies have taught me how IT solutions can help
              organizations optimize processes and achieve strategic goals.
            </p>
            <p className="text-lg text-gray-200 leading-relaxed mt-4">
              Beyond my technical expertise, I have a deep passion for
              <span className="font-semibold"> Formula 1</span>, where I admire
              the speed, precision, and strategic thinking that define both
              racing and business. These qualities—quick analysis, accuracy, and
              a big-picture mindset—drive me to develop effective solutions.
            </p>
            <p className="text-lg text-gray-200 leading-relaxed mt-4">
              I am committed to continuously refining my skills to bridge the
              gap between
              <span className="font-semibold"> business needs</span>
              and <span className="font-semibold">technical solutions</span>.
            </p>
          </div>
        </section>
        {/* Formula 1 Passion Section */}
        <section id="f1-passion" className="py-20  text-white text-center px-6">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-5xl font-extrabold tracking-tight mb-8">
              My Passion for Formula 1
            </h2>
            {/* Formula 1 Logo and Enhanced Visuals */}
            <div className="flex justify-center mb-12">
              <img
                src="/F1.svg.webp" // Ensure to use a high-quality image
                alt="Formula 1 Logo"
                className="w-36 h-auto object-contain mb-6 " // Enlarge the logo and add shadow
              />
            </div>
            <p className="text-lg text-gray-200 leading-relaxed">
              My passion for <span className="font-semibold">Formula 1</span>{" "}
              goes beyond just the thrill of the sport. It’s about the
              combination of speed, precision, and strategic thinking that
              defines both the racing world and the business arena. Much like
              F1, I strive to balance pushing the limits while staying ahead of
              the competition. This mindset drives my approach to business
              analysis.
            </p>
            <p className="text-lg text-gray-200 leading-relaxed mt-6">
              The relentless pursuit of improvement, whether in racing or
              business, fuels my ambitions. Just like the engineers who
              fine-tune F1 cars, I focus on optimizing processes, ensuring peak
              performance, and adapting strategies to stay competitive. The
              strategic decisions made by drivers and teams on and off the track
              continually inspire my approach to problem-solving in the business
              world.
            </p>
            <p className="text-lg text-gray-200 leading-relaxed mt-6">
              Beyond the professional world, I also participate in{" "}
              <span className="font-semibold">league racing</span> on the F1
              game. Competing at a high level in virtual racing has enhanced my
              understanding of competition, strategy, and the importance of
              teamwork. In fact, I have won the{" "}
              <span className="font-semibold">Constructor Championship</span> in
              my league, an achievement that reflects my ability to build a
              strong, cohesive team and execute flawless strategies under
              pressure. These experiences have further refined my skills in
              making quick decisions, optimizing performance, and adapting to
              ever-changing challenges.
            </p>

            <p className="text-lg text-gray-200 leading-relaxed mt-6">
              Whether in racing or business, my focus is always on mastering the
              details while keeping the bigger picture in mind. In both domains,
              it’s all about performance, precision, and adaptability.
            </p>
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="py-20 text-white text-center px-6">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-5xl font-extrabold tracking-tight mb-6">
              My Skills
            </h2>
            <p className="text-lg text-gray-200 max-w-3xl mx-auto leading-relaxed">
              I have experience in a variety of technologies that enable me to
              create powerful, scalable solutions. Below are the skills I use to
              build innovative projects.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 mt-8">
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
                { icon: "/skills/SApUI5.png" },
                { icon: "/skills/Figma-Logo.png" },
                { icon: "/skills/xml.svg" },
                { icon: "/skills/cap.png" },
                { icon: "/skills/Git_icon.svg.png" },
              ].map(({ icon }, index) => (
                <div
                  key={index}
                  className="bg-white shadow-lg hover:shadow-2xl rounded-xl p-8 transition-transform transform hover:scale-105"
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

        {/* Education */}
        <section id="education" className="py-20 text-white text-center px-6">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-5xl font-extrabold tracking-tight mb-6">
              My Education
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "Applied Computer Science",
                  institution: "Hogeschool Gent",
                  duration: "2022 - Present",
                  description:
                    "Focused on Functional & Business Analysis, gaining expertise in bridging the gap between technical and business needs.",
                  logo: "/hogent.jpg", // Ensure the correct relative path
                },
                {
                  title: "High School Diploma",
                  institution: "Lyceum Aalst",
                  duration: "2016 - 2022",
                  description: "Economics & Modern Languages",
                  logo: "/lyceum.png", // Ensure the correct relative path
                },
              ].map((edu, index) => (
                <div
                  key={index}
                  className="bg-white shadow-lg hover:shadow-2xl rounded-xl p-8 transition-all transform hover:scale-105"
                >
                  <div className="flex justify-center mb-4">
                    <Image
                      src={edu.logo}
                      alt={`${edu.institution} logo`}
                      className="w-16 h-16 object-contain"
                      width={100}
                      height={100}
                    />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-800">
                    {edu.title}
                  </h3>
                  <p className="text-gray-600 mt-2">{edu.institution}</p>
                  <p className="text-gray-500 mt-1">{edu.duration}</p>
                  <p className="text-gray-600 mt-4">{edu.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Work Experience */}
        <section
          id="work-experience"
          className="py-20 text-white text-center px-6"
        >
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-5xl font-extrabold tracking-tight mb-6">
              My Work Experience
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
              {[
                {
                  company: "Flexso",
                  role: "Internship",
                  duration: "Feb 2025 - Present",
                  description: `During my internship at Flexso, I will work on a SAP UI5 budget application with CAP and explored potential LLM implementations.`,
                  logo: "/flexso.png",
                },
                {
                  company: "TD SYNNEX",
                  role: "System Configurator",
                  duration: "Jun 2021 - Present",
                  description: `Responsible for configuring systems and solving technical problems. Since 2021, I have worked every summer at TD Synnex as a system configurator, managing tasks like imaging and upgrading laptops for Signpost according to client specifications, such as additional RAM or storage. Additionally, I resolve technical issues during the process. Over time, I have taken on more responsibilities, such as preparing orders, printing labels, and mentoring new team members. This role has enhanced my leadership and communication skills, including collaborating in English with non-Dutch-speaking colleagues.`,
                  logo: "/tdsynnex.png",
                },
              ].map((job, index) => (
                <div
                  key={index}
                  className="bg-white shadow-lg hover:shadow-2xl rounded-xl p-8 transition-all transform hover:scale-105"
                >
                  <div className="flex justify-center mb-4">
                    <Image
                      src={job.logo}
                      alt={`${job.company} logo`}
                      className="w-16 h-16 object-contain"
                      width={100}
                      height={100}
                    />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-800">
                    {job.role}
                  </h3>
                  <p className="text-gray-600 mt-2">{job.company}</p>
                  <p className="text-gray-500 mt-1">{job.duration}</p>
                  <p className="text-gray-600 mt-4">{job.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="py-20  text-white text-center px-6">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-5xl font-extrabold tracking-tight mb-6">
              My Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              {/* Oefeningenwebsite */}
              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105">
                <h3 className="text-xl font-semibold text-gray-800">
                  Studyfile
                </h3>
                <p className="text-gray-600 mt-2">
                  Currently in development, a collaborative project with Arthur
                  Vercammen to create an interactive math exercise platform with
                  personalized learning features.
                </p>
                <a
                  href="https://studyfile.be/"
                  target="_blank"
                  className="text-blue-500 hover:underline"
                >
                  Link
                </a>
              </div>

              {/* MK Luxe Detailing - Next.js Website */}
              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105">
                <h3 className="text-xl font-semibold text-gray-800">
                  MK Luxe Detailing Website
                </h3>
                <p className="text-gray-600 mt-2">
                  A website developed with Next.js for MK Luxe Detailing,
                  showcasing their services and offerings.
                </p>
                <p className="text-gray-600 mt-2">
                  <strong>Skills:</strong> Next.js
                </p>
                <a
                  href="https://mkluxedetailing.be/"
                  target="_blank"
                  className="text-blue-500 hover:underline"
                >
                  Link
                </a>
              </div>

              {/* Spots of Knowledge - Drupal Website */}
              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105">
                <h3 className="text-xl font-semibold text-gray-800">
                  Spots of Knowledge - Website
                </h3>
                <p className="text-gray-600 mt-2">
                  A booking platform for events built using Drupal, providing an
                  intuitive user experience for both customers and admins.
                </p>
                <p className="text-gray-600 mt-2">
                  <strong>Skills:</strong> Drupal
                </p>
                <a
                  href="https://test-spotsofknowledge.pantheonsite.io/"
                  target="_blank"
                  className="text-blue-500 hover:underline"
                >
                  Link
                </a>
              </div>

              {/* Sap Build App */}
              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105">
                <h3 className="text-xl font-semibold text-gray-800">
                  Sap Build App
                </h3>
                <p className="text-gray-600 mt-2">
                  A car management app where users can add, edit, and remove
                  cars, utilizing a custom API hosted on Google Cloud Firestore.
                </p>
                <p className="text-gray-600 mt-2">
                  <strong>Skills:</strong> SAP Build, Cloud Firestore
                </p>
              </div>

              {/* Sap Fiori App */}
              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105">
                <h3 className="text-xl font-semibold text-gray-800">
                  Sap Fiori App
                </h3>
                <p className="text-gray-600 mt-2">
                  A simple app built with SAP Fiori showcasing favorite games
                  for a student. Includes basic web technologies such as HTML,
                  CSS, and JavaScript.
                </p>
                <p className="text-gray-600 mt-2">
                  <strong>Skills:</strong> JavaScript, CSS, HTML
                </p>
              </div>

              {/* Flexso - Business Software Project */}
              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105">
                <h3 className="text-xl font-semibold text-gray-800">
                  Flexso - Business Software Project
                </h3>
                <p className="text-gray-600 mt-2">
                  A project aimed at familiarizing with SAP technologies by
                  developing an event management application with SAP CAP.
                </p>
                <p className="text-gray-600 mt-2">
                  <strong>Skills:</strong> SAP, JavaScript, CSS, XML
                </p>
                <a
                  href="https://github.com/flexso-hogent/P2BS_2324_Aalst"
                  target="_blank"
                  className="text-blue-500 hover:underline"
                >
                  View on GitHub
                </a>
              </div>

              {/* PrestigeDrive */}
              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105">
                <h3 className="text-xl font-semibold text-gray-800">
                  PrestigeDrive
                </h3>
                <p className="text-gray-600 mt-2">
                  A car rental website developed with React.js for the frontend
                  and Node.js for the backend.
                </p>
                <p className="text-gray-600 mt-2">
                  <strong>Skills:</strong> React.js, Node.js, SQL
                </p>
              </div>

              {/* Splendor Game */}
              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105">
                <h3 className="text-xl font-semibold text-gray-800">
                  Splendor Game
                </h3>
                <p className="text-gray-600 mt-2">
                  A Java implementation of the game Splendor, using JavaFX for
                  the user interface.
                </p>
                <p className="text-gray-600 mt-2">
                  <strong>Skills:</strong> Java, JavaFX
                </p>
              </div>
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
              href="mailto:kyno1204@gmail.com"
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
