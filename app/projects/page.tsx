// app/projects/page.tsx

import Header from "../Header";
import Footer from "../Footer";

export default function Projects() {
  return (
    <>
      <Header />
      <main className="py-20 bg-gray-100">
        <div className="container mx-auto max-w-6xl text-center space-y-10">
          <h2 className="text-4xl font-bold text-gray-800">My Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg">
              <h3 className="text-xl font-semibold text-gray-800">Project 1</h3>
              <p className="text-gray-600 mt-2">
                A description of project 1...
              </p>
              <a
                href="https://github.com/your-repo"
                target="_blank"
                className="text-blue-500 hover:underline"
              >
                View on GitHub
              </a>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg">
              <h3 className="text-xl font-semibold text-gray-800">Project 2</h3>
              <p className="text-gray-600 mt-2">
                A description of project 2...
              </p>
              <a
                href="https://github.com/your-repo"
                target="_blank"
                className="text-blue-500 hover:underline"
              >
                View on GitHub
              </a>
            </div>
            {/* Add more projects here */}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
