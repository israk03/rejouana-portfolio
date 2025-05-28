import { useState } from "react";
import {
  Menu,
  X,
  GraduationCap,
  BookOpen,
  School,
  Code2,
  Mail,
  MessageCircle,
  FileText,
  Globe,
  MousePointerClick,
} from "lucide-react";
import profilePic from "./assets/profile_without_background.png";
import educationIllustration from "./assets/education.svg";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen(!isOpen);
  const handleClose = () => setIsOpen(false);

  return (
    <div className="font-sans bg-white text-gray-800 scroll-smooth">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-white shadow z-50">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <h1 className="text-lg font-bold text-blue-600">Enni</h1>

          {/* Desktop Nav */}
          <ul className="hidden md:flex gap-6 text-sm font-medium">
            {["home", "about", "skills", "contact"].map((id) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  onClick={handleClose}
                  className="hover:text-blue-500 capitalize"
                >
                  {id}
                </a>
              </li>
            ))}
          </ul>

          {/* Hamburger Button */}
          <button className="md:hidden" onClick={handleToggle}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {isOpen && (
          <div className="md:hidden px-4 pb-4 bg-white shadow">
            <ul className="flex flex-col gap-3">
              {["home", "about", "skills", "contact"].map((id) => (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    onClick={handleClose}
                    className="block py-1 text-gray-700 hover:text-blue-500 capitalize"
                  >
                    {id}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>

      <main className="pt-20 space-y-24 px-4 max-w-4xl mx-auto">
        {/* Hero Section */}
        <section
          id="home"
          className="min-h-96 flex flex-col-reverse lg:flex-row items-center justify-center gap-10 px-6 md:px-12 py-16 bg-gradient-to-r from-blue-50 to-white"
        >
          {/* Left content */}
          <div className="text-center lg:text-left max-w-xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-800 leading-tight">
              Hi, I’m <span className="text-blue-600">Rejouana Akter Enni</span>
            </h1>
            <h2 className="text-lg md:text-xl font-medium text-blue-500 mb-4">
              Aspiring Web Developer
            </h2>
            <p className="text-gray-600 mb-6">
              Self-motivated, adaptable, diligent, and optimistic team player
              ready to give my best effort in achieving goals.
            </p>
            <a
              href="./assets/cv_rejouana.pdf"
              download
              className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
            >
              Download Resume
            </a>
          </div>

          {/* Profile image */}
          <div className="flex-shrink-0">
            <img
              src={profilePic}
              alt="Profile"
              className="w-40 h-40 md:w-52 md:h-52 lg:w-74 lg:h-74 object-cover rounded-full border-4 border-blue-500 shadow-lg"
            />
          </div>
        </section>

        {/* About Me Section */}
        <section id="about" className="py-16 px-6 md:px-12 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
              About Me
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
              {/* Introduction Card */}
              <div className="bg-white rounded-2xl shadow-md p-6">
                <p className="text-gray-700 text-lg leading-relaxed mb-4">
                  As a Computer Science and Engineering student, I am driven by
                  a passion for innovation and problem-solving. I aspire to
                  build a career in the tech industry where I can contribute to
                  impactful solutions through creativity and technical
                  excellence.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed">
                  My ambition is to grow in a dynamic and competitive
                  environment that challenges me to think differently and
                  continuously improve. I aim to develop technologies that not
                  only advance my career but also create value for society and
                  the world.
                </p>
              </div>

              {/* Education Card with Icons */}
              <div className="bg-white rounded-2xl shadow-md p-6 space-y-6">
                <div className="flex items-start space-x-4">
                  <GraduationCap className="w-6 h-6 text-blue-600 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">
                      Undergraduate
                    </h3>
                    <p className="text-gray-600">
                      B.Sc. in CSE, Presidency University <br />
                      <span className="text-sm text-gray-500">
                        2023 – Present
                      </span>
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <BookOpen className="w-6 h-6 text-green-600 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">
                      Higher Secondary (HSC)
                    </h3>
                    <p className="text-gray-600">
                      Tejgaon College <br />
                      <span className="text-sm text-gray-500">
                        GPA: 4.25 / 5.00 (2021)
                      </span>
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <School className="w-6 h-6 text-purple-600 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">
                      Secondary School (SSC)
                    </h3>
                    <p className="text-gray-600">
                      I.P.H School & College <br />
                      <span className="text-sm text-gray-500">
                        GPA: 4.00 / 5.00 (2019)
                      </span>
                    </p>
                  </div>
                </div>
                <div className="flex justify-center">
                  <img
                    src={educationIllustration}
                    alt="Education Illustration"
                    className="w-40 h-auto mt-4"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-16 px-6 md:px-12 bg-white">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-10">Skills</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {/* Programming Languages */}
              <div className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-md transition">
                <Code2 className="w-8 h-8 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-800">
                  Programming
                </h3>
                <p className="text-gray-600 mt-2">C, Python, JavaScript</p>
              </div>

              {/* Web Technologies */}
              <div className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-md transition">
                <Globe className="w-8 h-8 text-green-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-800">
                  Web Development
                </h3>
                <p className="text-gray-600 mt-2">HTML, CSS</p>
              </div>

              {/* Office Tools */}
              <div className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-md transition">
                <FileText className="w-8 h-8 text-yellow-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-800">
                  MS Office
                </h3>
                <p className="text-gray-600 mt-2">Word, Excel, PowerPoint</p>
              </div>

              {/* Digital & Internet Skills */}
              <div className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-md transition">
                <MousePointerClick className="w-8 h-8 text-purple-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-800">
                  Digital Skills
                </h3>
                <p className="text-gray-600 mt-2">
                  Digital Marketing, Internet Knowledge
                </p>
              </div>

              {/* Data Entry */}
              <div className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-md transition col-span-1 sm:col-span-2 md:col-span-1">
                <Code2 className="w-8 h-8 text-red-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-800">Other</h3>
                <p className="text-gray-600 mt-2">Data Entry</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 px-6 md:px-12 bg-gray-50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">
              Contact Me
            </h2>

            <form
              action="https://formspree.io/f/your-form-id" // Replace with your Formspree endpoint
              method="POST"
              className="bg-white p-6 rounded-2xl shadow space-y-6 text-left"
            >
              <div>
                <label
                  htmlFor="name"
                  className="block font-medium text-gray-700"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block font-medium text-gray-700"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block font-medium text-gray-700"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  required
                  className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition"
              >
                Send Message
              </button>
            </form>

            <div className="mt-8 text-gray-600">
              <p className="flex items-center justify-center gap-2">
                <Mail className="w-5 h-5 text-blue-500" /> rejo.enni@example.com
              </p>
              <p className="flex items-center justify-center gap-2 mt-2">
                <MessageCircle className="w-5 h-5 text-green-500" /> Open for
                collaborations!
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer Section */}
      <footer className="bg-gray-100 py-8 border-t">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between text-center md:text-left gap-4">
          {/* Logo or Name */}
          <h2 className="text-xl font-semibold text-blue-600">Enni</h2>

          {/* Social Links */}
          <div className="flex gap-4 justify-center">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-blue-600 transition"
              aria-label="Facebook"
            >
              <svg
                className="w-5 h-5 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M22.675 0h-21.35C.594 0 0 .593 0 1.326v21.348C0 23.406.594 24 1.326 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.894-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.796.715-1.796 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.324-.594 1.324-1.326V1.326C24 .593 23.406 0 22.675 0z" />
              </svg>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-blue-600 transition"
              aria-label="LinkedIn"
            >
              <svg
                className="w-5 h-5 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M4.98 3.5C4.98 5.43 3.43 7 1.5 7S-2 5.43-2 3.5 1.57 0 3.5 0 4.98 1.57 4.98 3.5zM.5 8h4v16h-4V8zM8.5 8h3.7v2.2h.1c.6-1.1 2-2.2 4.2-2.2 4.4 0 5.2 2.9 5.2 6.6V24h-4V15.1c0-2.2-.1-5-3-5-3 0-3.4 2.3-3.4 4.8V24h-4V8z" />
              </svg>
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-blue-600 transition"
              aria-label="GitHub"
            >
              <svg
                className="w-5 h-5 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.207 11.387.6.112.793-.262.793-.583 0-.288-.01-1.05-.016-2.06-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.09-.746.082-.731.082-.731 1.205.084 1.84 1.238 1.84 1.238 1.07 1.835 2.807 1.305 3.492.998.108-.776.418-1.305.76-1.605-2.665-.3-5.466-1.333-5.466-5.931 0-1.31.468-2.38 1.236-3.22-.124-.303-.536-1.52.117-3.176 0 0 1.008-.322 3.3 1.23A11.52 11.52 0 0112 6.844a11.53 11.53 0 012.998.403c2.29-1.552 3.296-1.23 3.296-1.23.655 1.656.243 2.873.12 3.176.77.84 1.233 1.91 1.233 3.22 0 4.61-2.804 5.628-5.475 5.922.43.37.814 1.096.814 2.21 0 1.595-.014 2.878-.014 3.27 0 .323.192.699.8.58C20.565 21.796 24 17.298 24 12c0-6.63-5.373-12-12-12z" />
              </svg>
            </a>
          </div>

          {/* Copyright */}
          <p className="text-sm text-gray-500 mt-4 md:mt-0">
            &copy; {new Date().getFullYear()} All rights reserved by Rejouna
            Akter Enni.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
