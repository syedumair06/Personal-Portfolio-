import React from "react";

function About() {
  return (
    <section id="about">
      <div className="min-h-screen w-full bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Hero Section */}
          <div className="text-center space-y-8 mb-16">
            <h1 className="text-5xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-teal-500 bg-clip-text text-transparent">
              Hi, I'm Syed Umair
            </h1>
            <p className="text-xl text-gray-500 max-w-3xl mx-auto leading-relaxed">
              Aspiring Full Stack Developer passionate about building clean,
              user-friendly web apps and continuously improving my skills.
            </p>
          </div>
          {/* Profile Image */}
          <div className="relative flex justify-center mb-16">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-purple-600 to-teal-500 rounded-full blur-lg opacity-20"></div>
            <img
              src="/assets/profile.jpg"
              alt="Profile"
              className="rounded-full transform hover:scale-110 transition duration-300 shadow-lg relative z-10 border-4 border-white w-48 h-48 object-cover"
            />
          </div>
          {/* Professional Background */}
          <div className="bg-white p-8 rounded-xl shadow-lg mb-16">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
              Professional Journey
            </h2>
            <div className="space-y-6 text-left max-w-4xl mx-auto">
              <p className="text-lg text-gray-600">
                I started my web development journey in 2023, diving into
                projects that helped me learn both frontend and backend
                technologies. Since then, I’ve been sharpening my skills in
                React and Node.js while exploring cloud tools to build efficient
                and modern web applications. <br /> I’m passionate about
                creating clean, user-friendly solutions that perform well and
                solve real problems.
              </p>
              <p></p>
            </div>
          </div>
          <section id="extra">
            {/* Skills Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-2xl text-indigo-600 font-semibold mb-4">
                  Frontend Development
                </h3>
                <p className="text-lg text-gray-600">
                  Building beautiful, responsive user interfaces with React,
                  Vue.js, and CSS frameworks like Tailwind.
                </p>
              </div>
              <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-2xl text-purple-600 font-semibold mb-4">
                  Backend Development
                </h3>
                <p className="text-lg text-gray-600">
                  Developing reliable and scalable backend systems with Node.js
                  and Express.js, integrating databases such as PostgreSQL and
                  MongoDB, and leveraging cloud platforms for efficient
                  deployment.
                </p>
              </div>
              <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-2xl text-teal-600 font-semibold mb-4">
                  API Integration
                </h3>
                <p className="text-lg text-gray-600">
                  Experienced in integrating RESTful APIs to connect frontend
                  and backend, enabling seamless data flow and dynamic user
                  experiences.
                </p>
              </div>
            </div>
            {/* Personal Interests */}
            <div className="bg-white p-8 rounded-xl shadow-lg mb-16">
              <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">
                Beyond Coding
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left max-w-4xl mx-auto">
                <div className="space-y-3">
                  <h3 className="text-2xl text-indigo-600 font-semibold">
                    Gamer
                  </h3>
                  <p className="text-lg text-gray-600">
                    Passionate gamer who enjoys strategy and problem-solving
                    through immersive gameplay.
                  </p>
                </div>
                <div className="space-y-3">
                  <h3 className="text-2xl text-purple-600 font-semibold">
                    Editor
                  </h3>
                  <p className="text-lg text-gray-600">
                    Skilled in editing content to create polished and engaging
                    digital media.
                  </p>
                </div>
                <div className="space-y-3">
                  <h3 className="text-2xl text-teal-600 font-semibold">
                    Creator
                  </h3>
                  <p className="text-lg text-gray-600">
                    Creative content creator focused on producing videos,
                    graphics, and digital storytelling.
                  </p>
                </div>
                <div className="space-y-3">
                  <h3 className="text-2xl text-indigo-600 font-semibold">
                    Learner
                  </h3>
                  <p className="text-lg text-gray-600">
                    Committed lifelong learner, always exploring new skills and
                    technologies.
                  </p>
                </div>
              </div>
            </div>
          </section>
          {/* Call to Action */}
          <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-teal-500 p-12 rounded-xl text-white text-center">
            <h2 className="text-4xl font-semibold mb-6">Let's Work Together</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              I’m always eager to connect and collaborate on new projects,
              creative ideas, or opportunities that align with your vision.
            </p>
            <a
              href="#contact"
              className="inline-block bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold text-lg hover:bg-opacity-90 transition-colors duration-200"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
