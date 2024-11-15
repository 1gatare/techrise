import React, { useState, useEffect } from 'react';
import { Menu, X, Code, CircuitBoard, Cpu, ChevronRight, MessageSquare, Users, Award, ArrowRight, Star, Mail, Phone, MapPin } from 'lucide-react';
import image1 from "./1.jpeg";
import image2 from "./2.jpeg";
import image3 from "./3.jpeg";
import image4 from "./4.jpeg";
import image5 from "./5.jpeg";
import image6 from "./6.jpeg";

function App() {
  const [isFormVisible, setFormVisible] = useState(false);

  const toggleForm = () => {
    setFormVisible(!isFormVisible);
  };
  return (
    <div>
      {/* Navigation */}
      <div className="hidden md:flex items-center space-x-8">
        <a href="#home" className="text-gray-600 hover:text-indigo-600 transition-colors duration-300">Home</a>
        <a href="#programs" className="text-gray-600 hover:text-indigo-600 transition-colors duration-300">Programs</a>
        <a href="#about" className="text-gray-600 hover:text-indigo-600 transition-colors duration-300">About</a>
        <a href="#gallery" className="text-gray-600 hover:text-indigo-600 transition-colors duration-300">Gallery</a>
        <a href="#contact" className="text-gray-600 hover:text-indigo-600 transition-colors duration-300">Contact</a>
        <button
          className="bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700 transform hover:scale-105 transition-all duration-300"
          onClick={toggleForm}
        >
          Enroll Now
        </button>
      </div>

      {/* Form Section */}
      {isFormVisible && (
        <div className="mt-8 p-6 border rounded-md shadow-lg max-w-md mx-auto bg-white">
          <h2 className="text-xl font-bold mb-4">Enrollment Form</h2>
          <form>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 mb-2">Name</label>
              <input
                type="text"
                id="name"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
                placeholder="Enter your name"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
              <input
                type="email"
                id="email"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="phone" className="block text-gray-700 mb-2">Phone</label>
              <input
                type="text"
                id="phone"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
                placeholder="Enter your phone number"
              />
            </div>
            <button
              type="submit"
              className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition duration-300"
            >
              Submit
            </button>
          </form>
        </div>
      )}
    </div>
  );
}



// ImageContainer Component
const ImageContainer = ({ images }) => {
  return (
    <div className="py-12 bg-gray-50" data-animate id="images">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center mb-10">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
            Our Gallery
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Inspiring Moments
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-56 object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-white text-lg font-semibold">{image.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};


const TechRiseLanding = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [isVisible, setIsVisible] = useState({});
  const [scrollProgress, setScrollProgress] = useState(0);


  const images = [
    { src: image1, alt: "Robotics Workshop", caption: "Robotics Workshop" },
    { src: image2, alt: "Training Kids", caption: "Training Kids" },
    { src: image3, alt: "IoT Projects", caption: "IoT Projects" },
    { src: image4, alt: "Group Activity", caption: "Group Activity" },
    { src: image5, alt: "Training Kids", caption: "Training Kids" },
    { src: image6, alt: "Group Photo", caption: "Group Activity" },
  ];
  

  // Scroll progress bar
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentProgress = (window.pageYOffset / totalScroll) * 100;
      setScrollProgress(currentProgress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Intersection Observer for fade-in animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          setIsVisible(prev => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting
          }));
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll('[data-animate]');
    sections.forEach(section => observer.observe(section));

    return () => sections.forEach(section => observer.unobserve(section));
  }, []);

  const programs = [
    {
      title: "Programming for Kids",
      description: "Learn block-based and text programming in a fun, interactive way",
      icon: <Code className="w-6 h-6 text-indigo-600" />,
      age: "Ages 8-14",
      technologies: ["Scratch", "Python", "HTML/CSS"]
    },
    {
      title: "Robotics Workshop",
      description: "Build and program robots while learning engineering principles",
      icon: <CircuitBoard className="w-6 h-6 text-indigo-600" />,
      age: "Ages 10-16",
      technologies: ["Arduino", "Sensors", "Motors"]
    },
    {
      title: "IoT Projects",
      description: "Create smart devices and learn about connected technology",
      icon: <Cpu className="w-6 h-6 text-indigo-600" />,
      age: "Ages 12-16",
      technologies: ["Raspberry Pi", "Electronics", "Cloud"]
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Parent",
      content: "My daughter loves the programming classes! She's already built her first website.",
      rating: 5
    },
    {
      name: "Mike Chen",
      role: "Student",
      content: "The robotics workshop was amazing! I learned so much about engineering.",
      rating: 5
    },
    {
      name: "Emily Davis",
      role: "Parent",
      content: "TechRise has sparked a real interest in technology for my son.",
      rating: 5
    }
  ];

  const stats = [
    { value: "1000+", label: "Students Trained", prefix: "+" },
    { value: "95%", label: "Satisfaction Rate", prefix: "" },
    { value: "50+", label: "Projects Completed", prefix: "+" },
    { value: "3", label: "Specialized Programs", prefix: "" }
  ];

  // Animated counter hook
  const AnimatedCounter = ({ value, prefix }) => {
    const [count, setCount] = useState(0);
    const finalValue = parseInt(value) || 0;
    
    useEffect(() => {
      const duration = 2000; // 2 seconds
      const steps = 60;
      const stepValue = finalValue / steps;
      let current = 0;
      
      const timer = setInterval(() => {
        current += stepValue;
        if (current >= finalValue) {
          setCount(finalValue);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);
      
      return () => clearInterval(timer);
    }, [finalValue]);

    return <span>{count}{prefix}</span>;
  };

  // Floating animation class
  const floatingAnimation = "hover:-translate-y-2 transition-transform duration-300";

  return (
    <div className="min-h-screen bg-white">
      {/* Progress bar */}
      <div 
        className="fixed top-0 left-0 h-1 bg-indigo-600 z-50 transition-all duration-300"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Navigation */}
      <nav className="bg-white shadow-sm fixed w-full z-40 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-indigo-600 hover:text-indigo-500 transition-colors duration-300">
                TechRise
              </span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
  <a href="#" className="text-gray-600 hover:text-indigo-600 transition-colors duration-300">Home</a>
  <a href="#programs" className="text-gray-600 hover:text-indigo-600 transition-colors duration-300">Programs</a>
  <a href="#about" className="text-gray-600 hover:text-indigo-600 transition-colors duration-300">About</a>
  <a href="#images" className="text-gray-600 hover:text-indigo-600 transition-colors duration-300">Gallery</a>
  <a href="#contact" className="text-gray-600 hover:text-indigo-600 transition-colors duration-300">Contact</a>
  <button 
    className="bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700 transform hover:scale-105 transition-all duration-300"
    onClick={() => document.getElementById('enroll').scrollIntoView({ behavior: 'smooth' })}
  >
    Enroll Now
  </button>
</div>


            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-600 hover:text-gray-900 transition-colors duration-300"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden transition-all duration-300 ${isMenuOpen ? 'max-h-64' : 'max-h-0'} overflow-hidden`}>
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a href="#" className="block px-3 py-2 text-gray-600 hover:text-indigo-600 transition-colors duration-300">Home</a>
            <a href="#" className="block px-3 py-2 text-gray-600 hover:text-indigo-600 transition-colors duration-300">Programs</a>
            <a href="#" className="block px-3 py-2 text-gray-600 hover:text-indigo-600 transition-colors duration-300">About</a>
            <a href="#" className="block px-3 py-2 text-gray-600 hover:text-indigo-600 transition-colors duration-300">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative bg-white overflow-hidden pt-16">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32">
            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 lg:mt-16 lg:px-8 xl:mt-28">
              <div className="text-center lg:text-left" data-animate id="hero">
                <h1 className={`text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl ${
                  isVisible.hero ? 'animate-fade-in-up' : 'opacity-0'
                }`}>
                  <span className="block">Empowering Young Minds</span>
                  <span className="block text-indigo-600">Through Technology</span>
                </h1>
                <p className={`mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0 ${
                  isVisible.hero ? 'animate-fade-in-up delay-300' : 'opacity-0'
                }`}>
                  Help your child explore the world of programming, robotics, and IoT through hands-on learning experiences designed for young innovators.
                </p>
                <div className={`mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start ${
                  isVisible.hero ? 'animate-fade-in-up delay-500' : 'opacity-0'
                }`}>
                  <div className="rounded-md shadow">
                    <button className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10 transform hover:scale-105 transition-all duration-300">
                      Get Started <ArrowRight className="ml-2 h-5 w-5" />
                    </button>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <button className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10 transform hover:scale-105 transition-all duration-300">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>

      {/* Programs Section */}
      <div className="py-12 bg-gray-50" data-animate id="programs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Our Programs</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Technology Learning for Every Child
            </p>
          </div>

          <div className="mt-10">
            <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
              {programs.map((program, index) => (
                <div 
                  key={index}
                  className={`relative bg-white p-6 rounded-lg shadow-md transform hover:-translate-y-2 transition-all duration-300 ${
                    isVisible.programs ? 'animate-fade-in-up delay-' + (index * 200) : 'opacity-0'
                  }`}
                >
                  <div className="absolute -top-3 -left-3 bg-indigo-100 rounded-full p-3">
                    {program.icon}
                  </div>
                  <h3 className="mt-8 text-lg font-medium text-gray-900">{program.title}</h3>
                  <p className="mt-2 text-base text-gray-500">{program.description}</p>
                  <p className="mt-2 text-sm font-medium text-indigo-600">{program.age}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {program.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-2 py-1 bg-indigo-100 text-indigo-600 rounded-full text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <button className="mt-4 inline-flex items-center text-indigo-600 hover:text-indigo-500">
                    Learn more <ChevronRight className="ml-1 w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-indigo-800" data-animate id="stats">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className={`text-center transform hover:scale-105 transition-all duration-300 ${
                  isVisible.stats ? 'animate-fade-in-up delay-' + (index * 200) : 'opacity-0'
                }`}
              >
                <p className="text-3xl font-extrabold text-white">
                  <AnimatedCounter value={stat.value} prefix={stat.prefix} />
                </p>
                <p className="mt-1 text-base font-medium text-indigo-100">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

 {/* Image Gallery Section */}
 <ImageContainer images={images} />


      {/* Testimonials Section */}
      <div className="py-12 bg-white" data-animate id="testimonials">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center mb-10">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Testimonials</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              What Our Students Say
            </p>
          </div>

          <div className="relative">
            <div className="flex overflow-hidden">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className={`w-full flex-shrink-0 transition-all duration-500 transform ${
                    index === activeTestimonial ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0 absolute'
                  }`}
                  >
                  <div className="bg-white p-8 rounded-xl shadow-lg max-w-2xl mx-auto">
                    <div className="flex items-center mb-4">
                      <div className="h-12 w-12 bg-indigo-100 rounded-full flex items-center justify-center">
                        <span className="text-xl font-bold text-indigo-600">
                          {testimonial.name[0]}
                        </span>
                      </div>
                      <div className="ml-4">
                        <h4 className="text-lg font-semibold">{testimonial.name}</h4>
                        <p className="text-gray-500">{testimonial.role}</p>
                      </div>
                    </div>
                    <p className="text-gray-600 italic">{testimonial.content}</p>
                    <div className="mt-4 flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center mt-6 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`h-2 w-2 rounded-full transition-all duration-300 ${
                    index === activeTestimonial ? 'bg-indigo-600 w-4' : 'bg-gray-300'
                  }`}
                  onClick={() => setActiveTestimonial(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="py-12 bg-gray-50" data-animate id="contact">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center mb-10">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Contact Us</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Get in Touch
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className={`space-y-6 ${isVisible.contact ? 'animate-fade-in-right' : 'opacity-0'}`}>
              <div className="flex items-center space-x-4 group">
                <div className="bg-indigo-100 p-3 rounded-full group-hover:bg-indigo-200 transition-colors duration-300">
                  <Mail className="h-6 w-6 text-indigo-600" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900">Email Us</h3>
                  <p className="text-gray-600">info@techrise.com</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 group">
                <div className="bg-indigo-100 p-3 rounded-full group-hover:bg-indigo-200 transition-colors duration-300">
                  <Phone className="h-6 w-6 text-indigo-600" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900">Call Us</h3>
                  <p className="text-gray-600">+250 783487100</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 group">
                <div className="bg-indigo-100 p-3 rounded-full group-hover:bg-indigo-200 transition-colors duration-300">
                  <MapPin className="h-6 w-6 text-indigo-600" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900">Visit Us</h3>
                  <p className="text-gray-600">123 Tech Street, Innovation City</p>
                </div>
              </div>
            </div>

            <form className={`space-y-6 ${isVisible.contact ? 'animate-fade-in-left' : 'opacity-0'}`}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 transition-all duration-300"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 transition-all duration-300"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 transition-all duration-300"
                />
              </div>

              <button
                type="submit"
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transform hover:scale-105 transition-all duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>


      {/* Footer */}
      <footer className="bg-gray-800">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <span className="text-2xl font-bold text-white hover:text-indigo-400 transition-colors duration-300">
                TechRise
              </span>
              <p className="mt-2 text-gray-300">
                Empowering the next generation of innovators through technology education.
              </p>
            </div>
            <div>
              <h3 className="text-white font-medium">Quick Links</h3>
              <ul className="mt-4 space-y-2">
                {['Programs', 'About Us', 'Contact', 'Enroll Now'].map((item, index) => (
                  <li key={index}>
                    <a 
                      href="#" 
                      className="text-gray-300 hover:text-white hover:translate-x-2 inline-block transition-all duration-300"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-white font-medium">Contact Us</h3>
              <ul className="mt-4 space-y-2">
                <li className="text-gray-300">info@techrise.com</li>
                <li className="text-gray-300">+250 783487100</li>
                <li className="text-gray-300">123 Tech Street</li>
                <li className="text-gray-300">Innovation City, IC 12345</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-700 pt-8">
          <div className="text-center text-gray-400">
    <p>Created by Eze</p>
    <p>© 2024 TechRise. All rights reserved.</p>
</div>

          </div>
        </div>
      </footer>

      {/* Add CSS for animations */}
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
        }

        .animate-fade-in-right {
          animation: fadeInRight 0.6s ease-out forwards;
        }

        .animate-fade-in-left {
          animation: fadeInLeft 0.6s ease-out forwards;
        }

        .delay-200 {
          animation-delay: 200ms;
        }

        .delay-300 {
          animation-delay: 300ms;
        }

        .delay-400 {
          animation-delay: 400ms;
        }

        .delay-500 {
          animation-delay: 500ms;
        }
      `}</style>
    </div>
  );
};

export default TechRiseLanding;