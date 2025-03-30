import Header from "./Header";
import Footer from "./Footer";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        {/* Hero Section with more sophisticated gradient and animation */}
        <section className="min-h-screen flex flex-col items-center justify-center text-white text-center px-6 bg-gradient-to-br from-blue-800 via-teal-700 to-cyan-600 relative overflow-hidden">
          {/* Background particles or geometric shapes could be added here */}
          <div className="relative z-10 max-w-4xl">
            <h1 className="text-6xl font-extrabold mb-4 tracking-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-cyan-200">
                Hi, I&apos;m Kyno.
              </span>
            </h1>
            <p className="mt-4 text-xl text-gray-100 font-light">
              Business Analyst | Applied Computer Science Student
              <span className="block mt-2 text-cyan-200">
                Graduating from HOGENT in 2025 🎓
              </span>
            </p>

            <div className="mt-12 flex flex-col sm:flex-row justify-center items-center gap-6">
              <Link href="#projects">
                <button className="bg-white text-blue-800 px-8 py-4 rounded-lg shadow-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 font-semibold text-lg">
                  View Projects
                </button>
              </Link>

              <div className="flex gap-4 mt-6 sm:mt-0">
                <a
                  href="https://www.linkedin.com/in/kyno-van-de-velde-7bb876266/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center bg-blue-600 hover:bg-blue-700 w-12 h-12 rounded-full transition-all duration-300 transform hover:scale-110 shadow-lg"
                  aria-label="LinkedIn Profile"
                >
                  <svg
                    className="w-6 h-6 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.454C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                  </svg>
                </a>
                <a
                  href="https://drive.google.com/file/d/1zhqhBcyivf4QRc0oVnZ1GjvGRE_58c0J/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-medium px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                  Download CV
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* About Me - More professional layout with cards */}
        <section id="about" className="py-24 bg-gray-50">
          <div className="container mx-auto max-w-5xl px-6">
            <h2 className="text-4xl font-bold text-gray-800 text-center mb-12">
              <span className="inline-block pb-2 border-b-4 border-teal-600">
                About Me
              </span>
            </h2>
            <div className="grid md:grid-cols-1 gap-8 items-center">
              <div className="bg-white rounded-xl shadow-xl p-8 transform transition-all hover:shadow-2xl">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                  Professional Background
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  I am a{" "}
                  <span className="font-semibold text-teal-700">
                    Business Analysis
                  </span>{" "}
                  student at
                  <span className="font-semibold text-teal-700"> Hogent</span>,
                  specializing in
                  <span className="font-semibold text-teal-700">
                    {" "}
                    Applied Computer Science
                  </span>{" "}
                  with a focus on
                  <span className="font-semibold text-teal-700">
                    {" "}
                    Functional & Business Analysis
                  </span>
                  .
                </p>
                <p className="text-gray-600 leading-relaxed mt-4">
                  My education has equipped me with the skills to identify how
                  IT solutions can help organizations optimize processes and
                  achieve strategic objectives through effective
                  business-technology alignment.
                </p>
                <p className="text-gray-600 leading-relaxed mt-4">
                  Beyond my technical expertise, I have a deep passion for{" "}
                  <span className="font-semibold text-teal-700">Formula 1</span>
                  , where I admire the speed, precision, and strategic thinking
                  that define both racing and business. These qualities—quick
                  analysis, accuracy, and a big-picture mindset—drive me to
                  develop effective solutions.
                </p>
                <p className="text-gray-600 leading-relaxed mt-4">
                  I am committed to continuously refining my skills to bridge
                  the gap between{" "}
                  <span className="font-semibold text-teal-700">
                    business needs
                  </span>{" "}
                  and{" "}
                  <span className="font-semibold text-teal-700">
                    technical solutions
                  </span>
                  .
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Formula 1 Passion Section - More visually engaging */}
        <section
          id="f1-passion"
          className="py-24 bg-gradient-to-br from-gray-900 to-gray-800 text-white"
        >
          <div className="container mx-auto max-w-5xl px-6">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-2/5 flex justify-center">
                <div className="relative rounded-full bg-gradient-to-br from-red-600 to-red-700 p-1 shadow-2xl">
                  <img
                    src="/F1.svg.webp"
                    alt="Formula 1 Logo"
                    className="w-64 h-64 object-contain p-8"
                  />
                </div>
              </div>

              <div className="md:w-3/5">
                <h2 className="text-4xl font-bold mb-8 inline-block pb-2 border-b-4 border-red-500">
                  My Passion for Formula 1
                </h2>

                <div className="space-y-4">
                  <p className="text-gray-300 leading-relaxed">
                    My passion for Formula 1 extends beyond entertainment –
                    it&apos;s about the perfect harmony of
                    <span className="font-semibold text-red-400">
                      {" "}
                      technology
                    </span>
                    ,
                    <span className="font-semibold text-red-400">
                      {" "}
                      strategy
                    </span>
                    , and
                    <span className="font-semibold text-red-400">
                      {" "}
                      human performance
                    </span>
                    . This mindset directly influences my approach to business
                    analysis.
                  </p>

                  <p className="text-gray-300 leading-relaxed">
                    Just as F1 teams relentlessly pursue improvement through
                    data and innovation, I approach business challenges with the
                    same analytical precision and drive for optimization.
                  </p>

                  <p className="text-gray-300 leading-relaxed">
                    I actively participate in{" "}
                    <span className="font-semibold text-red-400">
                      league racing
                    </span>{" "}
                    competitions, where I&apos;ve secured a{" "}
                    <span className="font-semibold text-red-400">
                      Constructor Championship
                    </span>
                    . This experience has strengthened my ability to make quick
                    decisions, optimize performance, and adapt to dynamic
                    challenges.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills - Modern card-based layout */}
        <section id="skills" className="py-24 bg-gray-50">
          <div className="container mx-auto max-w-6xl px-6">
            <h2 className="text-4xl font-bold text-gray-800 text-center mb-6">
              <span className="inline-block pb-2 border-b-4 border-teal-600">
                Technical Expertise
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto text-center leading-relaxed mb-12"></p>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
              {[
                { icon: "/skills/drupal.png", name: "Drupal" },
                { icon: "/skills/react.png", name: "React" },
                { icon: "/skills/javascript.png", name: "JavaScript" },
                { icon: "/skills/sql.png", name: "SQL" },
                { icon: "/skills/java.png", name: "Java" },
                { icon: "/skills/html.png", name: "HTML5" },
                { icon: "/skills/css.png", name: "CSS3" },
                { icon: "/skills/nextjs.png", name: "Next.js" },
                { icon: "/skills/node.png", name: "Node.js" },
                { icon: "/skills/abap.png", name: "ABAP" },
                { icon: "/skills/sapui.png", name: "SAP UI5" },
                { icon: "/skills/Figma-Logo.png", name: "Figma" },
                { icon: "/skills/xml.svg", name: "XML" },
                { icon: "/skills/cap.png", name: "SAP CAP" },
                { icon: "/skills/Git_icon.svg.png", name: "Git" },
              ].map(({ icon, name }, index) => (
                <div
                  key={index}
                  className="bg-white shadow-md hover:shadow-xl rounded-lg p-6 flex flex-col items-center transition-all duration-300 transform hover:scale-105 hover:bg-gray-50"
                >
                  <Image
                    src={icon}
                    alt={name}
                    width={70}
                    height={70}
                    className="mb-4 object-contain"
                  />
                  <span className="text-sm font-medium text-gray-700">
                    {name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Education - Timeline style */}
        <section
          id="education"
          className="py-24 bg-gradient-to-br from-blue-800 to-blue-900 text-white"
        >
          <div className="container mx-auto max-w-5xl px-6">
            <h2 className="text-4xl font-bold text-center mb-16">
              <span className="inline-block pb-2 border-b-4 border-cyan-400">
                Educational Journey
              </span>
            </h2>

            <div className="relative">
              {/* Timeline line */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-cyan-400 to-blue-400"></div>

              <div className="space-y-12">
                {[
                  {
                    title: "Applied Computer Science",
                    institution: "Hogeschool Gent",
                    duration: "2022 - Present",
                    description:
                      "Focused on Functional & Business Analysis, gaining expertise in bridging the gap between technical and business needs.",
                    logo: "/hogent.jpg",
                    align: "right",
                  },
                  {
                    title: "High School Diploma",
                    institution: "Lyceum Aalst",
                    duration: "2016 - 2022",
                    description: "Economics & Modern Languages",
                    logo: "/lyceum.png",
                    align: "left",
                  },
                ].map((edu, index) => (
                  <div
                    key={index}
                    className="relative flex flex-col md:flex-row items-center"
                  >
                    <div
                      className={`md:w-1/2 ${
                        edu.align === "left"
                          ? "md:pr-12"
                          : "md:order-last md:pl-12"
                      }`}
                    >
                      <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 shadow-xl hover:shadow-2xl transition-all transform hover:scale-102 border border-white/20">
                        <div className="flex items-center mb-4">
                          <div className="bg-white rounded-full p-1 mr-4">
                            <Image
                              src={edu.logo}
                              alt={`${edu.institution} logo`}
                              className="w-12 h-12 object-contain rounded-full"
                              width={48}
                              height={48}
                            />
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-cyan-100">
                              {edu.title}
                            </h3>
                            <p className="text-cyan-200">{edu.institution}</p>
                          </div>
                        </div>
                        <p className="text-blue-200 text-sm mb-2">
                          {edu.duration}
                        </p>
                        <p className="text-gray-100">{edu.description}</p>
                      </div>
                    </div>

                    {/* Timeline dot */}
                    <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-cyan-400 border-4 border-blue-900 z-10"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Work Experience - Modern design */}
        <section id="work-experience" className="py-24 bg-gray-50">
          <div className="container mx-auto max-w-6xl px-6">
            <h2 className="text-4xl font-bold text-gray-800 text-center mb-16">
              <span className="inline-block pb-2 border-b-4 border-teal-600">
                Professional Experience
              </span>
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {[
                {
                  company: "Flexso",
                  role: "Internship",
                  duration: "Feb 2025 - Present",
                  description:
                    "Currently developing a SAP UI5 budget application with CAP backend and exploring potential LLM implementations.",
                  logo: "/flexso.png",
                  color: "bg-blue-600",
                },
                {
                  company: "TD SYNNEX",
                  role: "System Configurator",
                  duration: "Jun 2021 - Present",
                  description:
                    "Responsible for configuring systems and solving technical problems. Managing tasks including imaging and upgrading laptops according to client specifications, as well as preparing orders, printing labels, and mentoring new team members. Successfully developed leadership skills while collaborating in a multilingual environment with non-Dutch speaking colleagues.",
                  logo: "/tdsynnex.png",
                  color: "bg-red-600",
                },
              ].map((job, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-xl overflow-hidden transform transition-all hover:shadow-2xl"
                >
                  <div className={`${job.color} h-2`}></div>
                  <div className="p-8">
                    <div className="flex items-center mb-6">
                      <div className="mr-6">
                        <Image
                          src={job.logo}
                          alt={`${job.company} logo`}
                          className="w-20 h-20 object-contain rounded-lg border border-gray-200 p-2 bg-white shadow-sm"
                          width={80}
                          height={80}
                        />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-800">
                          {job.role}
                        </h3>
                        <p className="text-lg text-blue-700 font-medium">
                          {job.company}
                        </p>
                        <p className="text-gray-500 text-sm">{job.duration}</p>
                      </div>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      {job.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects - Modern card layout with hover effects */}
        <section
          id="projects"
          className="py-24 bg-gradient-to-br from-gray-900 to-blue-900 text-white"
        >
          <div className="container mx-auto max-w-6xl px-6">
            <h2 className="text-4xl font-bold text-center mb-16">
              <span className="inline-block pb-2 border-b-4 border-cyan-400">
                Featured Projects
              </span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Studyfile",
                  description:
                    "Interactive math exercise platform with personalized learning features. A collaborative project with Arthur Vercammen and Seppe Visart.",
                  link: "https://studyfile.be/",
                  image: "/studyfile.png",
                  tags: ["Next.js", "React", "Educational Tech"],
                },
                {
                  title: "MK Luxe Detailing",
                  description:
                    "Premium website developed with Next.js for a luxury car detailing service, showcasing their premium offerings with an elegant design.",
                  link: "https://mkluxedetailing.be/",
                  image: "/mkluxedetailing.webp",
                  tags: ["Next.js", "React", "UI/UX"],
                },
                {
                  title: "Spots of Knowledge",
                  description:
                    "Comprehensive booking platform for events built using Drupal, providing intuitive user experiences for both customers and administrators.",
                  link: "https://test-spotsofknowledge.pantheonsite.io/",
                  image: "/spots.jpg",
                  tags: ["Drupal", "CMS", "Events"],
                },
                {
                  title: "Flexso Business Software",
                  description:
                    "Event management application developed with SAP CAP, demonstrating proficiency in enterprise-grade business software solutions.",
                  link: "https://github.com/flexso-hogent/P2BS_2324_Aalst",
                  image: "/flexso.png",
                  tags: ["SAP CAP", "SAPUI5", "Business Software"],
                },
                {
                  title: "PrestigeDrive",
                  description:
                    "Luxury car rental platform with React.js frontend and Node.js backend, featuring elegant UI and streamlined booking process.",
                  image: "/prestigedrive.webp",
                  tags: ["React", "Node.js", "Full-Stack"],
                },
                {
                  title: "Splendor Game",
                  description:
                    "A Java implementation of the popular board game Splendor, featuring a polished JavaFX user interface and complete game logic.",
                  image: "/splendor.jpg",
                  tags: ["Java", "JavaFX", "Game Development"],
                },
                {
                  title: "SAP Build App",
                  description:
                    "Car management application allowing users to add, edit, and remove cars, utilizing a custom API hosted on Google Cloud Firestore.",
                  image: "",
                  tags: ["SAP Build", "API Integration", "Cloud"],
                },
                {
                  title: "SAP Fiori App",
                  description:
                    "Interactive application built with SAP Fiori showcasing favorite games with responsive design and clean user interface.",
                  image: "",
                  tags: ["SAP Fiori", "HTML/CSS", "JavaScript"],
                },
              ].map((project, index) => (
                <div
                  key={index}
                  className={`group bg-gray-800 rounded-xl overflow-hidden shadow-xl transition-all duration-300 hover:shadow-2xl hover:translate-y-[-5px] flex flex-col h-full`}
                >
                  {project.image ? (
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={project.image}
                        alt={`${project.title} preview`}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        width={400}
                        height={200}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
                    </div>
                  ) : (
                    <div className="h-16 bg-gradient-to-r from-blue-600 to-teal-600"></div>
                  )}

                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-xl font-bold text-white mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 text-sm flex-1">
                      {project.description}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.tags?.map((tag, i) => (
                        <span
                          key={i}
                          className="text-xs px-2 py-1 rounded-full bg-gray-700 text-gray-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 inline-block text-cyan-400 hover:text-cyan-300 font-medium text-sm"
                      >
                        View Project →
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact - More professional */}
        <section id="contact" className="py-24 bg-gray-50">
          <div className="container mx-auto max-w-4xl px-6 text-center">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              <span className="inline-block pb-2 border-b-4 border-teal-600">
                Let&apos;s Connect
              </span>
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              I&apos;m always open to discussing new projects, opportunities in
              business analysis, or technology innovations. Feel free to reach
              out!
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <a
                href="mailto:kyno1204@gmail.com"
                className="inline-flex items-center justify-center bg-gradient-to-r from-teal-600 to-blue-600 text-white px-8 py-4 rounded-lg shadow-lg hover:from-teal-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 font-medium"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                Contact Me
              </a>
              <a
                href="https://www.linkedin.com/in/kyno-van-de-velde-7bb876266/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-blue-600 text-white px-8 py-4 rounded-lg shadow-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 font-medium"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.454C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                </svg>
                LinkedIn
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
