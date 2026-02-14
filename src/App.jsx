function App() {
  return (
    <div className="bg-black text-white">

      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-black shadow-md z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          
          <h1 className="text-2xl font-bold text-pink-500">
            Dharshini
          </h1>

          <ul className="flex space-x-6">
            <li><a href="#about" className="hover:text-pink-400">About</a></li>
            <li><a href="#skills" className="hover:text-pink-400">Skills</a></li>
            <li><a href="#projects" className="hover:text-pink-400">Projects</a></li>
            <li><a href="#contact" className="hover:text-pink-400">Contact</a></li>
          </ul>

        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center pt-24 px-4">
  
  <h1 className="text-6xl font-bold text-pink-500">
    Dharshini Portfolio 🔥
  </h1>

  <p className="text-xl mt-6 text-gray-300">
    B.Tech Information Technology
  </p>

  <p className="mt-4 text-gray-400">
    AI & Data Analytics Enthusiast
  </p>

  <button className="mt-8 px-6 py-3 bg-pink-500 hover:bg-pink-600 rounded-lg text-white font-semibold transition">
    View My Work
  </button>

</section>

      {/* About Section */}
      <section id="about" className="min-h-screen flex flex-col items-center justify-center text-center px-6">
  
  <h2 className="text-4xl font-bold text-pink-500 mb-6">
    About Me
  </h2>

  <p className="max-w-3xl text-gray-300 text-lg leading-relaxed">
    I'm Dharshini, a passionate B.Tech Information Technology student 
    with strong interest in Artificial Intelligence and Data Analytics. 
    I enjoy building smart solutions that solve real-world problems. 
    My final year project focuses on AI-based scam detection and job post validation.
  </p>

</section>

      {/* Skills Section */}
      <section id="skills" className="min-h-screen flex items-center justify-center">
        <h2 className="text-4xl font-bold text-pink-500">Skills</h2>
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen flex items-center justify-center">
        <h2 className="text-4xl font-bold text-pink-500">Projects</h2>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen flex items-center justify-center">
        <h2 className="text-4xl font-bold text-pink-500">Contact</h2>
      </section>

    </div>
  )
}

export default App
       