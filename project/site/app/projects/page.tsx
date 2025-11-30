"use client";

import { useState } from "react";

export default function Projects() {
  const [filter, setFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with payment integration, product management, and user authentication.",
      category: "fullstack",
      technologies: ["Next.js", "TypeScript", "Stripe", "MongoDB"],
      imageAlt: "E-Commerce Platform Screenshot"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "Modern task management application with drag-and-drop functionality and real-time updates.",
      category: "frontend",
      technologies: ["React", "Redux", "Tailwind CSS"],
      imageAlt: "Task Management App Screenshot"
    },
    {
      id: 3,
      title: "RESTful API Service",
      description: "Scalable REST API with authentication, rate limiting, and comprehensive documentation.",
      category: "backend",
      technologies: ["Node.js", "Express", "PostgreSQL", "JWT"],
      imageAlt: "API Service Documentation"
    },
    {
      id: 4,
      title: "Portfolio Website Builder",
      description: "No-code portfolio builder allowing users to create beautiful portfolio websites in minutes.",
      category: "fullstack",
      technologies: ["Next.js", "Prisma", "Tailwind CSS"],
      imageAlt: "Portfolio Builder Interface",
      image: "/site 1.png"
    },
    {
      id: 5,
      title: "Social Media Dashboard",
      description: "Analytics dashboard for social media management with real-time data visualization.",
      category: "frontend",
      technologies: ["React", "Chart.js", "TypeScript"],
      imageAlt: "Dashboard Analytics View"
    },
    {
      id: 6,
      title: "Blog Platform",
      description: "Modern blogging platform with markdown support, comments, and user profiles.",
      category: "fullstack",
      technologies: ["Next.js", "MongoDB", "NextAuth"],
      imageAlt: "Blog Platform Homepage"
    },
  ];

  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <div className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fadeIn">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            My Projects
          </h1>
          <p className="text-lg md:text-xl text-base-content/70">
            A showcase of my recent work and personal projects
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 animate-fadeIn">
          <button 
            onClick={() => setFilter("all")}
            className={`btn btn-sm md:btn-md ${filter === "all" ? "btn-primary" : "btn-outline"} hover:scale-105 transition-transform`}
          >
            All Projects
          </button>
          <button 
            onClick={() => setFilter("frontend")}
            className={`btn btn-sm md:btn-md ${filter === "frontend" ? "btn-primary" : "btn-outline"} hover:scale-105 transition-transform`}
          >
            <span className="hidden sm:inline">Frontend</span>
            <span className="sm:hidden">🎨</span>
          </button>
          <button 
            onClick={() => setFilter("backend")}
            className={`btn btn-sm md:btn-md ${filter === "backend" ? "btn-primary" : "btn-outline"} hover:scale-105 transition-transform`}
          >
            <span className="hidden sm:inline">Backend</span>
            <span className="sm:hidden">⚙️</span>
          </button>
          <button 
            onClick={() => setFilter("fullstack")}
            className={`btn btn-sm md:btn-md ${filter === "fullstack" ? "btn-primary" : "btn-outline"} hover:scale-105 transition-transform`}
          >
            <span className="hidden sm:inline">Full Stack</span>
            <span className="sm:hidden">💻</span>
          </button>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id} 
              className="card bg-base-200 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-base-300 group animate-scaleIn"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Project Image */}
              <figure className="bg-gradient-to-br from-primary/20 to-secondary/20 h-56 flex items-center justify-center relative overflow-hidden">
                {project.image ? (
                  <img 
                    src={project.image} 
                    alt={project.imageAlt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                ) : (
                  <div className="text-center z-10">
                    <div className="text-7xl mb-2 group-hover:scale-110 transition-transform duration-300">🖼️</div>
                    <p className="text-sm text-base-content/60">{project.imageAlt}</p>
                  </div>
                )}
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-300"></div>
              </figure>
              
              <div className="card-body">
                <h2 className="card-title text-lg md:text-xl">{project.title}</h2>
                <p className="text-sm text-base-content/70">{project.description}</p>
                
                {/* Technologies */}
                <div className="card-actions flex-wrap mt-4">
                  {project.technologies.map((tech, index) => (
                    <div key={index} className="badge badge-outline">{tech}</div>
                  ))}
                </div>
                
                {/* Action Buttons */}
                <div className="card-actions justify-end mt-4">
                  <button className="btn btn-primary btn-sm">Live Demo</button>
                  <button className="btn btn-ghost btn-sm">View Code</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Featured Project Section */}
        <div className="mt-20">
          <div className="text-center mb-12 animate-fadeIn">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-slideDown">Featured Project</h2>
            <p className="text-base-content/70 animate-fadeIn delay-300">My most recent and ambitious project</p>
          </div>
          <div className="card lg:card-side bg-base-200 shadow-2xl border border-base-300 hover:shadow-3xl transition-shadow animate-slideUp">
            {/* Featured Project Image Placeholder */}
            <figure className="lg:w-1/2 bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center min-h-[400px] relative overflow-hidden group">
              <div className="text-center z-10">
                <div className="text-9xl mb-4 group-hover:scale-110 transition-transform duration-300">🚀</div>
                <p className="text-lg text-base-content/60">Featured Project Screenshot</p>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-accent/0 group-hover:from-primary/10 group-hover:to-accent/10 transition-all duration-300"></div>
            </figure>
            
            <div className="card-body lg:w-1/2">
              <h2 className="card-title text-2xl md:text-3xl">Real-Time Collaboration Tool</h2>
              <p className="text-base md:text-lg mt-4 text-base-content/80">
                A comprehensive real-time collaboration platform enabling teams to work together 
                seamlessly. Features include live editing, video chat, screen sharing, and 
                project management tools.
              </p>
              
              <div className="mt-6">
                <h3 className="font-bold mb-3">Key Features:</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Real-time collaborative editing</li>
                  <li>WebRTC-based video conferencing</li>
                  <li>Role-based access control</li>
                  <li>Cloud storage integration</li>
                  <li>Mobile responsive design</li>
                </ul>
              </div>
              
              <div className="flex flex-wrap gap-2 mt-6">
                <div className="badge badge-primary">Next.js</div>
                <div className="badge badge-primary">WebSocket</div>
                <div className="badge badge-primary">WebRTC</div>
                <div className="badge badge-primary">PostgreSQL</div>
                <div className="badge badge-primary">Redis</div>
              </div>
              
              <div className="card-actions mt-8">
                <button className="btn btn-primary btn-lg">View Live Demo</button>
                <button className="btn btn-outline btn-lg">GitHub Repository</button>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-20 p-10 bg-base-200 rounded-lg animate-bounceIn">
          <h2 className="text-3xl font-bold mb-4">Interested in working together?</h2>
          <p className="text-lg mb-6">
            I&apos;m always open to discussing new projects and opportunities.
          </p>
          <a href="/contact" className="btn btn-primary btn-lg">Let&apos;s Talk</a>
        </div>
      </div>
    </div>
  );
}
