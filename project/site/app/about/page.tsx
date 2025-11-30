export default function About() {
  return (
    <div className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* About Header */}
        <div className="text-center mb-16 animate-fadeIn">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            About Me
          </h1>
          <p className="text-lg md:text-xl text-base-content/70">Get to know more about my journey and expertise</p>
        </div>

        {/* Profile Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20 items-center">
          <div className="flex justify-center items-center animate-slideInLeft">
            {/* Profile Image Placeholder */}
            <div className="avatar">
              <div className="w-64 md:w-80 h-64 md:h-80 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center shadow-2xl hover:scale-105 transition-transform duration-300 border-4 border-primary/30">
                <div className="text-8xl md:text-9xl">👨‍💻</div>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col justify-center animate-slideInRight space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold">Hi, I&apos;m a Web Developer</h2>
            <p className="text-base md:text-lg text-base-content/80 leading-relaxed">
              I&apos;m a passionate web developer with expertise in building modern, 
              scalable web applications. I love turning complex problems into 
              simple, beautiful, and intuitive solutions.
            </p>
            <p className="text-base md:text-lg text-base-content/80 leading-relaxed">
              With a strong foundation in both frontend and backend development, 
              I create full-stack applications that deliver exceptional user experiences.
            </p>
            <p className="text-base md:text-lg text-base-content/80 leading-relaxed">
              When I&apos;m not coding, you can find me exploring new technologies, 
              contributing to open-source projects, or sharing knowledge with the developer community.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a href="/contact" className="btn btn-primary hover:scale-105 transition-transform">
                Get In Touch
              </a>
              <a href="/projects" className="btn btn-outline hover:scale-105 transition-transform">
                View Projects
              </a>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Skills</h2>
            <p className="text-base-content/70">Technologies I work with</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Frontend Skills */}
            <div className="card bg-base-200 shadow-xl hover:shadow-2xl transition-all duration-300 border border-base-300 animate-slideInLeft">
              <div className="card-body">
                <h3 className="card-title text-xl md:text-2xl mb-6 text-primary">
                  <span className="text-3xl mr-2">🎨</span>
                  Frontend Development
                </h3>
                <div className="space-y-4">
                  <div className="hover:bg-base-300/50 p-2 rounded-lg transition-colors">
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">React & Next.js</span>
                      <span className="font-bold text-primary">90%</span>
                    </div>
                    <progress className="progress progress-primary w-full" value="90" max="100"></progress>
                  </div>
                  <div className="hover:bg-base-300/50 p-2 rounded-lg transition-colors">
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">TypeScript</span>
                      <span className="font-bold text-primary">85%</span>
                    </div>
                    <progress className="progress progress-primary w-full" value="85" max="100"></progress>
                  </div>
                  <div className="hover:bg-base-300/50 p-2 rounded-lg transition-colors">
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">HTML/CSS</span>
                      <span className="font-bold text-primary">95%</span>
                    </div>
                    <progress className="progress progress-primary w-full" value="95" max="100"></progress>
                  </div>
                  <div className="hover:bg-base-300/50 p-2 rounded-lg transition-colors">
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">Tailwind CSS</span>
                      <span className="font-bold text-primary">90%</span>
                    </div>
                    <progress className="progress progress-primary w-full" value="90" max="100"></progress>
                  </div>
                </div>
              </div>
            </div>

            {/* Backend Skills */}
            <div className="card bg-base-200 shadow-xl hover:shadow-2xl transition-all duration-300 border border-base-300 animate-slideInRight">
              <div className="card-body">
                <h3 className="card-title text-xl md:text-2xl mb-6 text-secondary">
                  <span className="text-3xl mr-2">⚙️</span>
                  Backend Development
                </h3>
                <div className="space-y-4">
                  <div className="hover:bg-base-300/50 p-2 rounded-lg transition-colors">
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">Node.js</span>
                      <span className="font-bold text-secondary">85%</span>
                    </div>
                    <progress className="progress progress-secondary w-full" value="85" max="100"></progress>
                  </div>
                  <div className="hover:bg-base-300/50 p-2 rounded-lg transition-colors">
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">Database (SQL/NoSQL)</span>
                      <span className="font-bold text-secondary">80%</span>
                    </div>
                    <progress className="progress progress-secondary w-full" value="80" max="100"></progress>
                  </div>
                  <div className="hover:bg-base-300/50 p-2 rounded-lg transition-colors">
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">RESTful APIs</span>
                      <span className="font-bold text-secondary">90%</span>
                    </div>
                    <progress className="progress progress-secondary w-full" value="90" max="100"></progress>
                  </div>
                  <div className="hover:bg-base-300/50 p-2 rounded-lg transition-colors">
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">Git & Version Control</span>
                      <span className="font-bold text-secondary">95%</span>
                    </div>
                    <progress className="progress progress-secondary w-full" value="95" max="100"></progress>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Experience Timeline */}
        <div className="mb-20">
          <div className="text-center mb-12 animate-fadeIn">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-slideDown">Experience</h2>
            <p className="text-base-content/70 animate-fadeIn delay-300">My professional journey</p>
          </div>
          
          <ul className="timeline timeline-vertical animate-fadeIn">
            <li>
              <div className="timeline-start timeline-box bg-base-200 border border-base-300 hover:shadow-lg transition-shadow">
                <div className="font-bold text-primary">2024 - Present</div>
                <div className="text-lg font-semibold">Senior Web Developer</div>
                <div className="text-sm text-base-content/70">Company Name</div>
                <p className="text-sm mt-2">Leading development of modern web applications using React, Next.js, and TypeScript.</p>
              </div>
              <div className="timeline-middle">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-primary">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                </svg>
              </div>
              <hr className="bg-primary"/>
            </li>
            
            <li>
              <hr className="bg-primary"/>
              <div className="timeline-middle">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-secondary">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="timeline-end timeline-box bg-base-200 border border-base-300 hover:shadow-lg transition-shadow">
                <div className="font-bold text-secondary">2022 - 2024</div>
                <div className="text-lg font-semibold">Web Developer</div>
                <div className="text-sm text-base-content/70">Previous Company</div>
                <p className="text-sm mt-2">Developed responsive websites and web applications for various clients.</p>
              </div>
              <hr className="bg-secondary"/>
            </li>
            
            <li>
              <hr className="bg-secondary"/>
              <div className="timeline-start timeline-box bg-base-200 border border-base-300 hover:shadow-lg transition-shadow">
                <div className="font-bold text-accent">2020 - 2022</div>
                <div className="text-lg font-semibold">Junior Developer</div>
                <div className="text-sm text-base-content/70">First Company</div>
                <p className="text-sm mt-2">Started my journey in web development, learning and growing every day.</p>
              </div>
              <div className="timeline-middle">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-accent">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                </svg>
              </div>
            </li>
          </ul>
        </div>

        {/* Education or Certifications */}
        <div>
          <div className="text-center mb-12 animate-fadeIn">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-slideDown">Education & Certifications</h2>
            <p className="text-base-content/70 animate-fadeIn delay-300">My learning credentials</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="card bg-base-200 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-base-300 animate-scaleIn stagger-1">
              <div className="card-body items-center text-center">
                <div className="text-5xl mb-4 hover:scale-110 transition-transform">🎓</div>
                <h3 className="card-title">Computer Science</h3>
                <p className="text-base-content/70">Bachelor&apos;s Degree in Computer Science</p>
                <div className="badge badge-primary mt-2">2016 - 2020</div>
              </div>
            </div>
            
            <div className="card bg-base-200 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-base-300 animate-scaleIn stagger-2">
              <div className="card-body items-center text-center">
                <div className="text-5xl mb-4 hover:scale-110 transition-transform">📜</div>
                <h3 className="card-title">Web Development</h3>
                <p className="text-base-content/70">Professional Web Development Certification</p>
                <div className="badge badge-secondary mt-2">2021</div>
              </div>
            </div>
            
            <div className="card bg-base-200 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-base-300 animate-scaleIn stagger-3">
              <div className="card-body items-center text-center">
                <div className="text-5xl mb-4 hover:scale-110 transition-transform">🏆</div>
                <h3 className="card-title">Cloud Computing</h3>
                <p className="text-base-content/70">AWS Certified Solutions Architect</p>
                <div className="badge badge-accent mt-2">2023</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
