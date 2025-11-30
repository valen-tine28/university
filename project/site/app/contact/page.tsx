"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [status, setStatus] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add your form submission logic here
    setStatus("Message sent successfully! I&apos;ll get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fadeIn">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Get In Touch
          </h1>
          <p className="text-lg md:text-xl text-base-content/70">
            Have a project in mind? Let&apos;s discuss how we can work together
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="animate-slideInLeft">
            <h2 className="text-2xl md:text-3xl font-bold mb-8">Contact Information</h2>
            
            <div className="space-y-4 mb-12">
              <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-base-200 transition-all group animate-slideInLeft stagger-1">
                <div className="text-4xl group-hover:scale-110 transition-transform">📧</div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Email</h3>
                  <a href="mailto:your.email@example.com" className="link link-primary hover:link-secondary transition-colors">
                    your.email@example.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-base-200 transition-all group animate-slideInLeft stagger-2">
                <div className="text-4xl group-hover:scale-110 transition-transform">📱</div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Phone</h3>
                  <a href="tel:+1234567890" className="link link-primary hover:link-secondary transition-colors">
                    +1 (234) 567-890
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-base-200 transition-all group animate-slideInLeft stagger-3">
                <div className="text-4xl group-hover:scale-110 transition-transform">📍</div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Location</h3>
                  <p className="text-base-content/70">City, Country</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-xl md:text-2xl font-bold mb-6 animate-fadeIn">Connect With Me</h3>
              <div className="flex flex-wrap gap-4 animate-scaleIn delay-300">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" 
                   className="btn btn-circle btn-lg btn-outline hover:btn-primary hover:scale-110 transition-all shadow-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>

                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
                   className="btn btn-circle btn-lg btn-outline hover:btn-secondary hover:scale-110 transition-all shadow-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>

                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"
                   className="btn btn-circle btn-lg btn-outline hover:btn-accent hover:scale-110 transition-all shadow-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>

                <a href="mailto:your.email@example.com"
                   className="btn btn-circle btn-lg btn-outline hover:btn-info hover:scale-110 transition-all shadow-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </a>
              </div>
            </div>

            {/* Availability Status */}
            <div className="mt-12 p-6 bg-success/20 rounded-lg border-2 border-success hover:shadow-lg transition-shadow animate-bounceIn delay-500">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-success rounded-full animate-pulse"></div>
                <div>
                  <h3 className="font-bold text-lg">Available for Work</h3>
                  <p className="text-sm text-base-content/70">Currently accepting new projects</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-slideInRight">
            <div className="card bg-base-200 shadow-xl border border-base-300 animate-scaleIn">
              <div className="card-body">
                <h2 className="card-title text-xl md:text-2xl mb-4">Send Me a Message</h2>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text font-semibold">Name</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your Name"
                      className="input input-bordered"
                      required
                    />
                  </div>

                  <div className="form-control">
                    <label className="label">
                      <span className="label-text font-semibold">Email</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      className="input input-bordered"
                      required
                    />
                  </div>

                  <div className="form-control">
                    <label className="label">
                      <span className="label-text font-semibold">Subject</span>
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Project Inquiry"
                      className="input input-bordered"
                      required
                    />
                  </div>

                  <div className="form-control">
                    <label className="label">
                      <span className="label-text font-semibold">Message</span>
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project..."
                      className="textarea textarea-bordered h-32"
                      required
                    ></textarea>
                  </div>

                  {status && (
                    <div className="alert alert-success shadow-lg animate-fadeIn">
                      <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>{status}</span>
                    </div>
                  )}

                  <button type="submit" className="btn btn-primary w-full btn-lg hover:scale-105 transition-transform shadow-lg">
                    <span>Send Message</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                </form>
              </div>
            </div>

            {/* Quick Contact Cards */}
            <div className="grid grid-cols-2 gap-4 mt-6">
              <a href="/projects" className="card bg-base-200 shadow hover:shadow-xl transition-all hover:-translate-y-1 border border-base-300 animate-slideUp stagger-1">
                <div className="card-body items-center text-center p-4 md:p-6">
                  <div className="text-3xl md:text-4xl mb-2">💼</div>
                  <p className="font-semibold">View Projects</p>
                </div>
              </a>
              
              <a href="/about" className="card bg-base-200 shadow hover:shadow-lg transition-shadow animate-slideUp stagger-2">
                <div className="card-body items-center text-center p-6">
                  <div className="text-3xl mb-2">👤</div>
                  <p className="font-semibold">About Me</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
