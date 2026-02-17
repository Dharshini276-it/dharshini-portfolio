function App() {
  return (
    <div className="bg-black text-white">

      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-black shadow-md z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-pink-500">Dharshini</h1>
          <ul className="flex space-x-6">
            <li><a href="#about" className="hover:text-pink-400 transition">About</a></li>
            <li><a href="#skills" className="hover:text-pink-400 transition">Skills</a></li>
            <li><a href="#projects" className="hover:text-pink-400 transition">Projects</a></li>
            <li><a href="#contact" className="hover:text-pink-400 transition">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-pink-900 via-black to-pink-800 opacity-30 animate-gradientSlow -z-10"></div>

        <h1 className="text-6xl sm:text-7xl font-arial black text-pink-500 animate-fadeIn">
          Dharshini's Portfolio
        </h1>

        <p className="text-xl sm:text-2xl mt-4 text-gray-300 animate-fadeIn delay-200">
          Data Analyst | Frontend Developer
        </p>

        <a
          href="#projects"
          className="mt-8 px-8 py-3 bg-pink-500 text-black font-semibold rounded-lg hover:bg-pink-600 transition transform hover:scale-105 duration-300 animate-fadeIn delay-400"
        >
          View My Work
        </a>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="min-h-screen flex flex-col items-center justify-center text-center px-6"
      >
        <h2 className="text-4xl font-bold text-pink-500 mb-6 animate-fadeIn">
          About Me
        </h2>
        <p className="max-w-3xl text-gray-300 text-lg leading-relaxed animate-fadeIn delay-200">
          I'm Dharshini, a passionate B.Tech Information Technology student 
          with strong interest in Artificial Intelligence and Data Analytics. 
          I enjoy building smart solutions that solve real-world problems.
        </p>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        className="min-h-screen flex flex-col items-center justify-center px-6"
      >
        <h2 className="text-4xl font-bold text-pink-500 mb-6 animate-fadeIn">
          Skills
        </h2>
        <div className="flex flex-wrap justify-center gap-4 animate-fadeIn delay-200">
          <span className="px-4 py-2 bg-gray-800 rounded-full text-gray-300 hover:bg-pink-500 hover:text-black transition">Python</span>
          <span className="px-4 py-2 bg-gray-800 rounded-full text-gray-300 hover:bg-pink-500 hover:text-black transition">Java</span>
          <span className="px-4 py-2 bg-gray-800 rounded-full text-gray-300 hover:bg-pink-500 hover:text-black transition">SQL</span>
          <span className="px-4 py-2 bg-gray-800 rounded-full text-gray-300 hover:bg-pink-500 hover:text-black transition">React</span>
          <span className="px-4 py-2 bg-gray-800 rounded-full text-gray-300 hover:bg-pink-500 hover:text-black transition">Tailwind CSS</span>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="min-h-screen bg-black text-white px-6 py-12"
      >
        <h2 className="text-4xl font-bold text-pink-500 text-center mb-12 animate-fadeIn">
          My Projects
        </h2>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Example Project Card */}
          <div className="bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:scale-105 transform transition duration-300">
            <img
              src="https://via.placeholder.com/400x200"
              alt="Project Screenshot"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-2 text-pink-500">
                Project 1
              </h3>
              <p className="text-gray-300 mb-4">
                A brief description about Project 1, what tech was used and purpose.
              </p>
              <div className="flex justify-between">
                <a
                  href="https://github.com/yourusername/project1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink-400 hover:underline"
                >
                  GitHub
                </a>
                <a
                  href="https://project1-live-link.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink-400 hover:underline"
                >
                  Live Demo
                </a>
              </div>
            </div>
          </div>
          {/* Duplicate / add more cards for additional projects */}
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="min-h-screen flex flex-col items-center justify-center bg-black text-white px-6"
      >
        <h2 className="text-4xl font-bold text-pink-500 mb-6 animate-fadeIn">
          Contact Me
        </h2>

        <div className="space-y-4 text-center text-lg text-gray-300 animate-fadeIn delay-200">

          <p>
            📞 Phone:  
            <a href="tel:+919962191639" className="text-pink-400 hover:underline ml-2">
              +91 99621 91639
            </a>
          </p>

          <p>
            ✉️ Email:  
            <a href="mailto:dharshhoffl@gmail.com" className="text-pink-400 hover:underline ml-2">
              dharshhoffl@gmail.com
            </a>
          </p>

          <p>
            🔗 Website:  
            <a href="https://dharshini-portfolio-murex.vercel.app/"
               target="_blank"
               rel="noopener noreferrer"
               className="text-pink-400 hover:underline ml-2"
            >
              https://dharshini-portfolio-murex.vercel.app/
            </a>
          </p>

          <p>
            💼 LinkedIn:  
            <a href="https://www.linkedin.com/in/dharshini-a-2026/" 
               target="_blank"
               rel="noopener noreferrer"
               className="text-pink-400 hover:underline ml-2"
            >
              Dharshini Mahalakshmi
            </a>
          </p>

        </div>
      </section>

    </div>
  )
}

export default App

