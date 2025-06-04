"use client"

import { useState } from "react"
import {
  Menu,
  X,
  Code,
  Star,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  CheckCircle,
} from "lucide-react"
import {SparklesCore} from '../components/ui/sparkles'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
// Removed: import Image from "next/image" // This import caused the error as it's Next.js specific

export default function VeridianWebPortfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  return (
    // Main container with the overall background gradient matching the image
    <div className="min-h-screen bg-gradient-to-br  from-[#0a0a2b] via-[#0a1a3d] to-[#1a003d] text-white ">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-gradient-to-br from-indigo-900 via-blue-900 text-white">
        <div className="container mx-auto  ">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <img src="./Logo.png" alt="Logo"  className="w-20 h-20"/>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8 text-white">
              {["home", "services", "projects", "pricing", "contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="text-white/90 hover:text-orange-400 transition-colors capitalize text-lg font-medium"
                >
                  {item === "home" ? "Home" : item}
                </button>
              ))}
              {/* Login Button */}
              <Button
                onClick={() => alert("Login functionality not implemented yet!")} // Using alert as a placeholder for now
                className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full shadow-md transition-all duration-300"
              >
                Login
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 bg-gradient-to-br from-indigo-900/90 via-blue-900/90 to-purple-900/90 rounded-lg shadow-lg border border-white/20">
              {["home", "services", "projects", "pricing", "contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block w-full text-left px-4 py-3 text-white hover:bg-white/10 transition-colors capitalize text-lg"
                >
                  {item === "home" ? "Home" : item}
                </button>
              ))}
              <div className="px-4 py-2">
                <Button
                  onClick={() => alert("Login functionality not implemented yet!")} // Using alert as a placeholder for now
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full shadow-md transition-all duration-300"
                >
                  Login
                </Button>
              </div>
            </div>
          )}
        </div>
      </nav>


      {/* My  Hero  Section */}
      
  {/*
      <section id="home" className="min-h-screen flex items-center justify-center  relative overflow-hidden">
        <div className="container mx-auto px-4 py-16 md:py-24 flex flex-col md:flex-row items-center justify-between relative z-10">
          <div className="md:w-1/2 text-center md:text-left mb-12 md:mb-0 relative">
            <div className="absolute -top-10 left-1/2 md:left-0 transform -translate-x-1/2 md:-translate-x-1/4 w-24 h-24 bg-orange-400 rounded-full opacity-70 blur-xl z-0"></div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6 relative z-10">
              Build 
              Beautiful
               <span className="text-orange-400">Web</span>
              <br/>
              Pages and 
              <br/>
              Services.
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-xl mx-auto md:mx-0 relative z-10">
                We craft modern, full-stack web solutions — from elegant landing pages to scalable backend systems. Whether you're a startup or an enterprise, we turn your vision into reality.
 
            </p>
            <Button
              onClick={() => scrollToSection("contact")}
              className="bg-orange-500 hover:bg-orange-600 text-white px-10 py-4 text-lg font-bold rounded-full shadow-lg transform transition duration-300 ease-in-out hover:scale-105 relative z-10"
            >
              ORDER NOW!
            </Button>
          </div>

          <div className="md:w-1/2 flex justify-center items-center relative">
            <div className="absolute inset-0 bg-purple-700 rounded-full opacity-60 blur-3xl transform scale-150 md:scale-125 lg:scale-100 xl:scale-90 -right-1/4 md:-right-1/3 lg:-right-1/2 xl:-right-1/4 -top-1/4 md:-top-1/3 lg:-top-1/2 xl:-top-1/4"></div>

            <img
              src="./image.png" // Using the uploaded image as the source
              alt="Web Development Isometric Illustration"
              className="relative z-20"
              // Fallback for image loading errors
              
            />
          </div>
        </div>

      </section>
*/}


{/* Default Hero Section */}
  <section id="home" className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
  {/* Orb Container */}
  <div className="absolute inset-0 pointer-events-none z-10">
    <div className="absolute rounded-full bg-gradient-to-r from-blue-300 to-purple-400 opacity-50 filter blur-xl animate-pulse" style={{ top: '10%', left: '10%', width: '100px', height: '100px' }}></div>
    <div className="absolute rounded-full bg-gradient-to-r from-purple-400 to-pink-500 opacity-50 filter blur-xl animate-pulse delay-1000" style={{ top: '10%', right: '15%', width: '150px', height: '150px' }}></div>
    <div className="absolute rounded-full bg-gradient-to-r from-pink-500 to-red-400 opacity-50 filter blur-xl animate-pulse delay-2000" style={{ bottom: '20%', left: '25%', width: '80px', height: '80px' }}></div>
    <div className="absolute rounded-full bg-gradient-to-r from-blue-400 to-indigo-500 opacity-50 filter blur-xl animate-pulse delay-500" style={{ bottom: '10%', right: '30%', width: '120px', height: '120px' }}></div>
    <div className="absolute rounded-full bg-gradient-to-r from-blue-400 to-indigo-500 opacity-50 filter blur-xl animate-pulse delay-500" style={{ bottom: '50%', right: '30%', width: '120px', height: '120px' }}></div>
    <div className="absolute rounded-full bg-gradient-to-r from-green-300 to-yellow-400 opacity-50 filter blur-xl animate-pulse delay-1500" style={{ top: '35%', left: '20%', width: '110px', height: '110px' }}></div>
    <div className="absolute rounded-full bg-gradient-to-r from-yellow-400 to-green-500 opacity-50 filter blur-xl animate-pulse delay-2500" style={{ top: '40%', right: '15%', width: '140px', height: '140px' }}></div>
    {/* <div className="absolute rounded-full bg-gradient-to-r from-green-500 to-teal-400 opacity-50 filter blur-xl animate-pulse delay-3000" style={{ bottom: '40%', left: '15%', width: '90px', height: '90px' }}></div> */}
    <div className="absolute rounded-full bg-gradient-to-r from-teal-400 to-blue-500 opacity-50 filter blur-xl animate-pulse delay-1000" style={{ bottom: '5%', right: '10%', width: '130px', height: '130px' }}></div>
    <div className="absolute rounded-full bg-gradient-to-r from-blue-500 to-green-400 opacity-50 filter blur-xl animate-pulse delay-2000" style={{ bottom: '10%', right: '90%', width: '115px', height: '115px' }}></div>

    {/* Add more orbs as needed */}
  </div>

  <div className="container mx-auto px-4 text-center relative"> {/* Added relative here */}
    <div className="rounded-3xl borderp-12 max-w-4xl mx-auto">
      <div className="w-48 h-48 bg-gradient-to-r from-blue-400 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-8">
        <img src="./Logo.png" alt="Logo" className="w-48 h-48"/>
      </div>
      <h1 className="text-6xl md:text-8xl font-bold text-white mb-6">Veridian Web</h1>
      {/* Spakles code */}

       <div className="w-[20rem] md:w-[40rem] h-20 relative md:left-36">
        {/* Gradients */}
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />
 
        {/* Core component */}
        <SparklesCore
          background="transparent"
          minSize={0.5}
          maxSize={1}
          particleDensity={1200}
          className="w-full h-1/2"
          particleColor="#FFFFFF"
          
        />
      </div>
 
        {/* Radial Gradient to prevent sharp edges */}
        {/* <div className="absolute inset-0 w-full h-1/2 bg-transparent [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div> */}

   
      <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
        Crafting Digital Excellence Through Innovative Web Development & Stunning Graphics Design
      </p>
      <Button
        onClick={() => scrollToSection("contact")}
        className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-3 text-lg"
      >
        Get Started <ArrowRight className="ml-2 w-5 h-5" />
      </Button>
    </div>
  </div>
</section>
      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Services</h2>
            <p className="text-md md:text-lg text-blue-100 max-w-2xl mx-auto">
              We offer comprehensive digital solutions to bring your vision to life
            </p>
          </div>
          {/* Service Cards */}
          <div className="flex justify-center px-5 mx-auto">
            {[
              {
                icon: <Code className="w-8 h-8" />,
                title: "Frontend Development",
                description: "Crafting intuitive and responsive user interfaces with modern frameworks like React and Next.js.",
              },
              {
                icon: <Code className="w-8 h-8" />,
                title: "Full Stack Development",
                description: "Building robust end-to-end web applications, from database design to API development and deployment.",
              },
            ].map((service, index) => (
              <Card
                key={index}
                className="backdrop-blur-md bg-gradient-to-br from-blue-900/20 to-purple-900/20 border border-blue-400/30 text-white hover:bg-blue-800/30 hover:shadow-2xl hover:border-blue-400 transition-all duration-300 transform hover:-translate-y-1 md:max-w-2/3 mx-auto"
              >
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl font-semibold text-white">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-blue-200 text-center text-base">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Projects</h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Showcasing our latest work and successful collaborations
            </p>
          </div>

          {/* Project Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto">
            {[
              {
                title: "E-Commerce Platform",
                category: "Web Development",
                image: "/placeholder.svg?height=300&width=400",
                description: "Modern e-commerce solution with payment integration",
              },
              {
                title: "Brand Identity Design",
                category: "Graphics Design",
                image: "/placeholder.svg?height=300&width=400",
                description: "Complete branding package for tech startup",
              },
              {
                title: "Mobile Banking App",
                category: "Mobile Development",
                image: "/placeholder.svg?height=300&width=400",
                description: "Secure and user-friendly banking application",
              },
              {
                title: "Restaurant Website",
                category: "Web Development",
                image: "/placeholder.svg?height=300&width=400",
                description: "Responsive website with online ordering system",
              },
              {
                title: "Marketing Campaign",
                category: "Graphics Design",
                image: "/placeholder.svg?height=300&width=400",
                description: "Creative marketing materials for product launch",
              },
              {
                title: "Portfolio Website",
                category: "Web Development",
                image: "/placeholder.svg?height=300&width=400",
                description: "Professional portfolio for creative agency",
              },
            ].map((project, index) => (
              <Card
                key={index}
                className="backdrop-blur-md bg-white/10 border-white/20 overflow-hidden hover:bg-white/20 transition-all duration-300 group mx-auto"
              >
                <div className="relative overflow-hidden">
                  {/* Changed to <img> tag */}
                  <img
                    src={project.image || "https://placehold.co/400x300/6B7280/FFFFFF?text=Project+Image"}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    
                  />
                  <Badge className="absolute top-4 left-4 bg-gradient-to-r from-blue-500 to-purple-600">
                    {project.category}
                  </Badge>
                </div>
                <CardHeader>
                  <CardTitle className="text-white">{project.title}</CardTitle>
                  <CardDescription className="text-blue-100">{project.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Pricing Plans</h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">Choose the perfect plan for your business needs</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: "Starter",
                price: "$999",
                period: "per project",
                features: ["Basic Website Design", "Responsive Layout", "Contact Form", "Basic SEO", "1 Month Support"],
                popular: false,
              },
              {
                name: "Professional",
                price: "$2,499",
                period: "per project",
                features: [
                  "Custom Web Development",
                  "Advanced Features",
                  "CMS Integration",
                  "E-commerce Ready",
                  "3 Months Support",
                  "Analytics Setup",
                ],
                popular: true,
              },
              {
                name: "Enterprise",
                price: "$4,999",
                period: "per project",
                features: [
                  "Full-Stack Development",
                  "Custom Integrations",
                  "Advanced Security",
                  "Performance Optimization",
                  "6 Months Support",
                  "Training Included",
                ],
                popular: false,
              },
            ].map((plan, index) => (
              <Card
                key={index}
                className={`backdrop-blur-md border-white/20 relative ${
                  plan.popular ? "bg-gradient-to-b from-white/20 to-white/10 border-2 border-blue-400" : "bg-white/10"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-1">
                      Most Popular
                    </Badge>
                  </div>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl text-white">{plan.name}</CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-blue-100 ml-2">{plan.period}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-blue-100">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button
                    className={`w-full ${
                      plan.popular
                        ? "bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
                        : "bg-white/20 hover:bg-white/30 border border-white/30"
                    } text-white`}
                    onClick={() => scrollToSection("contact")}
                  >
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Contact Us</h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Ready to start your project? Get in touch with us today
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <Card className="backdrop-blur-md bg-white/10 border-white/20">
              <CardHeader>
                <CardTitle className="text-2xl text-white">Send us a message</CardTitle>
                <CardDescription className="text-blue-100">
                  Fill out the form below and we&apos;ll get back to you within 24 hours
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <Input
                    placeholder="First Name"
                    className="bg-white/10 border-white/20 text-white placeholder:text-blue-200"
                  />
                  <Input
                    placeholder="Last Name"
                    className="bg-white/10 border-white/20 text-white placeholder:text-blue-200"
                  />
                </div>
                <Input
                  type="email"
                  placeholder="Email Address"
                  className="bg-white/10 border-white/20 text-white placeholder:text-blue-200"
                />
                <Input
                  placeholder="Subject"
                  className="bg-white/10 border-white/20 text-white placeholder:text-blue-200"
                />
                <Textarea
                  placeholder="Your Message"
                  rows={5}
                  className="bg-white/10 border-white/20 text-white placeholder:text-blue-200"
                />
                <Button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white">
                  Send Message
                </Button>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="backdrop-blur-md bg-white/10 border-white/20">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-purple-500 rounded-lg flex items-center justify-center">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">Email</h3>
                      <p className="text-blue-100">hello@veridianweb.com</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="backdrop-blur-md bg-white/10 border-white/20">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-purple-500 rounded-lg flex items-center justify-center">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">Phone</h3>
                      <p className="text-blue-100">+1 (555) 123-4567</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="backdrop-blur-md bg-white/10 border-white/20">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-purple-500 rounded-lg flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">Address</h3>
                      <p className="text-blue-100">
                        123 Digital Avenue
                        <br />
                        Tech City, TC 12345
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-4">Why Choose Veridian Web?</h3>
                <ul className="space-y-2 text-blue-100">
                  <li className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-400 mr-2" />
                    5+ Years of Experience
                  </li>
                  <li className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-400 mr-2" />
                    100+ Successful Projects
                  </li>
                  <li className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-400 mr-2" />
                    24/7 Customer Support
                  </li>
                  <li className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-400 mr-2" />
                    Money-Back Guarantee
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-white/20">
        <div className="container mx-auto px-4 text-center">
          <p className="text-blue-100">
            © 2024 Veridian Web. All rights reserved. Crafted with ❤️ for digital excellence.
          </p>
        </div>
      </footer>
    </div>
  )
}
