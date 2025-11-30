import { TestimonialsCarousel } from "./components/TestimonialsCarousel";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden -mt-20">
        {/* Background Image */}
        <div className="absolute inset-0 top-0 overflow-hidden rounded-b-[3rem]">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat h-full"
            style={{ backgroundImage: "url('/hero.png')" }}
          />
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-black/30 rounded-b-[3rem]"></div>
        </div>
        
        <div className="hero-content text-center z-10 px-4">
          <div className="max-w-4xl animate-fadeIn">
            {/* Profile Image Placeholder with enhanced styling */}
            {/* <div className="avatar mb-8">
              <div className="w-32 md:w-48 rounded-full ring-4 ring-primary ring-offset-base-100 ring-offset-4 bg-linear-to-br from-primary to-secondary shadow-2xl hover:scale-105 transition-transform duration-300">
                <div className="flex items-center justify-center h-full text-5xl md:text-6xl">👨‍💻</div>
              </div>
            </div> */}
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-white">
              Transforming Ideas Into 
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent animate-gradient">
                {" Digital Experiences "}Digital Experiences
              </span>
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl mb-8 text-white/90 max-w-2xl mx-auto">
              Frontend Developer specializing in building stunning, pixel-perfect interfaces that users love. I turn complex problems into elegant solutions with clean code and creative design.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/projects" className="relative btn btn-primary btn-lg rounded-xl px-8 overflow-hidden group border-0 shadow-2xl hover:shadow-primary/50 transition-all duration-300 hover:scale-105">
                View My Work
              </a>
              <a href="/contact" className="relative btn btn-lg rounded-xl px-8 border-2 border-white/40 bg-white/10 backdrop-blur-sm text-white hover:bg-white hover:text-primary hover:border-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                Get In Touch
              </a>
            </div>
            
            {/* Scroll indicator */}
            <div className="mt-16 animate-bounce">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mx-auto opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Overview Section */}
      <section className="py-24 px-4 bg-base-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">My Expertise</h2>
            <p className="text-lg text-base-content/70">Crafting exceptional user experiences with modern frontend technologies</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-4">
            <div className="card bg-base-200 card-shadow-light transition-all duration-300 hover:-translate-y-2 border border-base-300 animate-slideUp stagger-1">
              <div className="card-body items-center text-center p-8">
                <div className="text-7xl mb-6 hover:scale-110 transition-transform animate-bounceIn delay-200">🎨</div>
                <h3 className="card-title text-2xl mb-4">Frontend Development</h3>
                <p className="text-base-content/70 mb-6 leading-relaxed">Building responsive and interactive user interfaces with modern frameworks like React and Next.js</p>
                <div className="flex flex-wrap justify-center gap-2 mt-auto">
                  <span className="badge badge-primary badge-md px-4 py-3">Tailwind CSS</span>
                  <span className="badge badge-primary badge-md px-4 py-3">React</span>
                  <span className="badge badge-primary badge-md px-4 py-3">Next.js</span>
                  <span className="badge badge-primary badge-md px-4 py-3">TypeScript</span>
                </div>
              </div>
            </div>
            
            <div className="card bg-base-200 card-shadow-secondary transition-all duration-300 hover:-translate-y-2 border border-base-300 animate-slideUp stagger-2">
              <div className="card-body items-center text-center p-8">
                <div className="text-7xl mb-6 hover:scale-110 transition-transform animate-bounceIn delay-400">⚡</div>
                <h3 className="card-title text-2xl mb-4">Performance Optimization</h3>
                <p className="text-base-content/70 mb-6 leading-relaxed">Optimizing load times, bundle sizes, and runtime performance for lightning-fast user experiences</p>
                <div className="flex flex-wrap justify-center gap-2 mt-auto">
                  <span className="badge badge-secondary badge-md px-4 py-3">Webpack</span>
                  <span className="badge badge-secondary badge-md px-4 py-3">Lazy Loading</span>
                  <span className="badge badge-secondary badge-md px-4 py-3">Code Splitting</span>
                </div>
              </div>
            </div>
            
            <div className="card bg-base-200 card-shadow-accent transition-all duration-300 hover:-translate-y-2 border border-base-300 animate-slideUp stagger-3">
              <div className="card-body items-center text-center p-8">
                <div className="text-7xl mb-6 hover:scale-110 transition-transform animate-bounceIn delay-600">🎯</div>
                <h3 className="card-title text-2xl mb-4">UI/UX Design</h3>
                <p className="text-base-content/70 mb-6 leading-relaxed">Creating intuitive, accessible interfaces with pixel-perfect designs and smooth animations</p>
                <div className="flex flex-wrap justify-center gap-2 mt-auto">
                  <span className="badge badge-accent badge-md px-4 py-3">Figma</span>
                  <span className="badge badge-accent badge-md px-4 py-3">Tailwind</span>
                  <span className="badge badge-accent badge-md px-4 py-3">Animations</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Preview */}
      <section className="py-20 px-4 bg-base-200">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fadeIn">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 animate-slideDown">Featured Projects</h2>
            <p className="text-lg text-base-content/70 animate-fadeIn delay-300">Check out some of my recent work</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="card bg-base-100 project-shadow-light hover:-translate-y-3 transition-all duration-300 group border border-base-300 animate-slideInLeft">
              {/* Project Image */}
              <figure className="h-64 overflow-hidden relative">
                <img 
                  src="/site 1.png" 
                  alt="Portfolio Website" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-300"></div>
              </figure>
              <div className="card-body">
                <h3 className="card-title text-2xl">Creative Portfolio</h3>
                <p className="text-base-content/70">Stunning portfolio website with immersive animations, dynamic content sections, and seamless navigation</p>
                <div className="card-actions justify-between items-center mt-4">
                  <div className="flex flex-wrap gap-2">
                    <div className="badge badge-primary">React</div>
                    <div className="badge badge-primary">Next.js</div>
                    <div className="badge badge-primary">Framer Motion</div>
                  </div>
                  <a href="/projects" className="btn btn-sm btn-ghost">View →</a>
                </div>
              </div>
            </div>
            
            <div className="card bg-base-100 card-shadow-secondary hover:-translate-y-3 transition-all duration-300 group border border-base-300 animate-slideInRight">
              {/* Project Image */}
              <figure className="h-64 overflow-hidden relative">
                <img 
                  src="/site 1.png" 
                  alt="Portfolio Website" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-secondary/0 group-hover:bg-secondary/10 transition-colors duration-300"></div>
              </figure>
              <div className="card-body">
                <h3 className="card-title text-2xl">Portfolio Website</h3>
                <p className="text-base-content/70">Modern portfolio site showcasing creative work with smooth animations, responsive design, and optimized performance</p>
                <div className="card-actions justify-between items-center mt-4">
                  <div className="flex flex-wrap gap-2">
                    <div className="badge badge-secondary">Next.js</div>
                    <div className="badge badge-secondary">Tailwind</div>
                    <div className="badge badge-secondary">Animations</div>
                  </div>
                  <a href="/projects" className="btn btn-sm btn-ghost">View →</a>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center">
            <a href="/projects" className="btn btn-primary btn-lg hover:scale-105 transition-transform shadow-2xl hover:shadow-primary/50">
              View All Projects
            </a>
          </div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="py-20 px-4 bg-base-100">
        <div className="max-w-4xl mx-auto">
          <div className="stats stats-vertical lg:stats-horizontal stats-shadow w-full bg-base-200 border border-base-300 animate-scaleIn transition-shadow duration-300">
            <div className="stat place-items-center">
              <div className="stat-title">Projects Completed</div>
              <div className="stat-value text-primary">5+</div>
              <div className="stat-desc">Delivered successfully</div>
            </div>
            
            <div className="stat place-items-center">
              <div className="stat-title">Happy Clients</div>
              <div className="stat-value text-secondary">5+</div>
              <div className="stat-desc">Worldwide</div>
            </div>
            
            <div className="stat place-items-center">
              <div className="stat-title">Years Experience</div>
              <div className="stat-value text-accent">2+</div>
              <div className="stat-desc">And counting</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-base-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fadeIn">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 animate-slideDown">What Clients Say</h2>
            <p className="text-lg text-base-content/70 animate-fadeIn delay-300">Testimonials from satisfied clients</p>
          </div>
          <TestimonialsCarousel />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-linear-to-br from-primary/10 via-secondary/10 to-accent/10 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary/10 rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-slideUp">Ready to Start Your Project?</h2>
          <p className="text-lg md:text-xl text-base-content/80 mb-8 max-w-2xl mx-auto animate-fadeIn delay-300">
            Let&apos;s collaborate and bring your ideas to life with modern web solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="btn btn-primary btn-lg hover:scale-105 transition-transform shadow-2xl hover:shadow-primary/50 gap-2">
              <span>Get Started</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
            <a href="/projects" className="btn btn-outline btn-lg hover:scale-105 transition-transform shadow-xl hover:shadow-2xl">
              View Portfolio
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
