function App() {
  return (
    <div className="bg-sky-50 text-gray-800 scroll-smooth">

      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-white shadow-sm z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-sky-500 tracking-wide">
            Dharshini
          </h1>
          <ul className="flex space-x-6 font-medium">
            <li><a href="#about" className="hover:text-sky-500 transition">About</a></li>
            <li><a href="#skills" className="hover:text-sky-500 transition">Skills</a></li>
            <li><a href="#projects" className="hover:text-sky-500 transition">Projects</a></li>
            <li><a href="#contact" className="hover:text-sky-500 transition">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex flex-col items-center justify-center text-center px-6 pt-24"
      >
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight mb-6 leading-tight">
          Hi, I'm <span className="text-sky-500">Dharshini</span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-600 mb-6">
          Frontend Developer & Creative Web Builder
        </p>

        <p className="max-w-2xl text-gray-500 text-lg mb-8">
          I design and build clean, responsive websites using 
          <span className="text-sky-500 font-medium"> React </span> 
          and 
          <span className="text-sky-500 font-medium"> Tailwind CSS</span>.
        </p>

        <a
          href="#projects"
          className="px-8 py-3 bg-sky-500 text-white font-semibold rounded-lg shadow-md hover:bg-sky-600 transition duration-300"
        >
          View My Work
        </a>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="min-h-screen flex flex-col items-center justify-center text-center px-6"
      >
        <h2 className="text-4xl font-bold text-sky-500 mb-6">
          About Me
        </h2>
        <p className="max-w-3xl text-gray-600 text-lg leading-relaxed">
          I'm Dharshini, a passionate B.Tech Information Technology student 
          with strong interest in Artificial Intelligence and Data Analytics. 
          I enjoy building smart solutions that solve real-world problems.
        </p>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        className="min-h-screen flex flex-col items-center justify-center px-6 bg-sky-50"
      >
        <h2 className="text-4xl font-bold text-sky-500 mb-6">
          Skills
        </h2>
        <div className="flex flex-wrap justify-center gap-4">
          {["Python", "Java", "SQL", "React", "Tailwind CSS"].map(skill => (
            <span
              key={skill}
              className="px-5 py-2 bg-white border border-sky-200 rounded-full shadow-sm hover:bg-sky-500 hover:text-white transition"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="min-h-screen px-6 py-20"
      >
        <h2 className="text-4xl font-bold text-sky-500 text-center mb-12">
          My Projects
        </h2>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl border border-sky-100 shadow-md hover:shadow-xl hover:-translate-y-2 transition duration-300">
            <img
              src="https://via.placeholder.com/400x200"
              alt="Project Screenshot"
              className="w-full h-48 object-cover rounded-t-xl"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-2 text-sky-500">
                Project 1
              </h3>
              <p className="text-gray-600 mb-4">
                A brief description about Project 1, what tech was used and purpose.
              </p>
              <div className="flex justify-between">
                <a
                  href="#"
                  className="text-sky-500 font-medium hover:underline"
                >
                  GitHub
                </a>
                <a
                  href="#"
                  className="text-sky-500 font-medium hover:underline"
                >
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
  id="contact"
  className="min-h-screen flex flex-col items-center justify-center bg-sky-50 text-black-500 px-6"
>
  <h2 className="text-4xl font-bold text-sky-500 mb-6">
    Contact Me
  </h2>

  {/* Contact Info */}
  <div className="space-y-4 text-center text-lg text-sky-500">

    {/* Phone */}
    <p>
      📞 Phone:  
      <a href="tel:+919962191639" className="text-black-500 hover:underline ml-2">
        +91 99621 91639
      </a>
    </p>

    {/* Email */}
    <p>
      ✉️ Email:  
      <a href="mailto:dharshhoffl@gmail.com" className="text-black-500 hover:underline ml-2">
        dharshhoffl@gmail.com
      </a>
    </p>

    {/* Website Link */}
    <p>
      🔗 Website:  
      <a href="https://dharshini-portfolio-murex.vercel.app/"
         target="_blank"
         rel="noopener noreferrer"
         className="text-black-500 hover:underline ml-2"
      >
        https://dharshini-portfolio-murex.vercel.app/
      </a>
    </p>

    {/* LinkedIn */}
    <p>
      💼 LinkedIn:  
      <a href="https://www.linkedin.com/in/dharshini-a-2026/" 
         target="_blank"
         rel="noopener noreferrer"
         className="text-black-500 hover:underline ml-2"
      >
        Dharshini A
      </a>
    </p>

  </div>
</section>

    </div>
  )
}

export default App
