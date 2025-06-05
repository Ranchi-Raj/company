"use client"

import { useState } from "react"
import {
  Menu,
  X,
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
              {/* <Button
                onClick={() => alert("Login functionality not implemented yet!")} // Using alert as a placeholder for now
                className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full shadow-md transition-all duration-300"
              >
                Login
              </Button> */}
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

  <div className="flex justify-center items-center">
    <hr className=" w-1/2 border-t-2 border-gray-300 dark:border-gray-500 opacity-50 bg-gradient-to-t from-transparent via-transparent to-black dark:via-black dark:to-transparent" style={{ maskImage: "linear-gradient(to bottom, black 50%, transparent)" }} />
      </div>
      {/* Services Section */}
     <section id="services" className="w-full  py-16 px-4 md:px-8">
  <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center gap-8">

   <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto">
  {
  [
  {
    title: "Frontend Development",
    description:
      "Crafting intuitive and responsive user interfaces with modern frameworks like React and Next.js.",
    image: "./Frontend.png",
    alt: "Frontend",
  },
  {
    title: "Full Stack Development",
    description:
      "Building robust end-to-end web applications, from database design to API development and deployment.",
    image: "./download.png",
    alt: "Full Stack",
  },
  {
    title: "Graphics Design",
    description:
      "Brochures, posters, logos and much more, tailored to meet the unique needs and goals of our clients.",
    image: "./graphics.png",
    alt: "Graphics Design",
  },
  ].map((card, index) => (
    <div
      key={index}
      className="w-full max-w-sm rounded-xl bg-[#0a0f1f] text-white p-6 text-center backdrop-blur-md hover:scale-[1.02] transition duration-300 shadow-md border border-[#1c1f2f]"
    >
      <img src={card.image} alt={card.alt} className="w-screen objext-cover" />
      <h3 className="text-xl font-semibold mt-4">{card.title}</h3>
      <p className="text-sm text-slate-300">{card.description}</p>
    </div>
  ))}
</div>
  </div>
</section>



      {/* Projects Section */}
      <section id="projects">
        <div className="container mx-auto px-4  mt-16">
          <div className="text-center mb-16 ">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">Our Projects</h2>
            <p className="md:text-md text-lg text-blue-100 max-w-2xl mx-auto">
              Showcasing our latest work and successful collaborations
            </p>
          </div>

          {/* Project Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto px-8">
         {[
              {
                title: "MoodMigo",
                category: "Full Stack Development",
                image: "/Moodmigo.png?height=500&width=400",
                description: "MoodMigo is a compassionate mental wellness platform designed to support individuals on their emotional health journey. It offers personalized assessments, expert guidance, and tools to promote self-care, emotional resilience, and well-being—all in a safe and user-friendly space.",
                link:"https://moodmigo.vercel.app/"
              },
              {
                title: "Zentra",
                category: "Full Stack Development",
                image: "/Zentra.png?height=300&width=400",
                description: "Zentra is a socail media platform for sharing daily thoughts and views though Nudges, A chatbot Zenith is specially designed here to automate the process of creating and publishing the nudges one can like and comment on a nudge",
                link:"https://zentra-eead.onrender.com/"
              },
              {
                title : "Zuno Gaming",
                category: "Full Stack Development",
                image: "/zuno.png?height=300&width=400",
                description: "A full-featured Casino type gaming platform built with React, Node.js, and Appwrite with payment intergration and a dedicated admin panel for proper scrutiny.",
                link:"https://zuno-gaming.vercel.app/"
              }
            ].map((project, index) => (
              <Card
                key={index}
                className="backdrop-blur-md bg-white/10 border-white/20 overflow-hidden hover:bg-white/20 transition-all duration-300 "
              >
                <div className="relative overflow-hidden">
                  {/* Changed to <img> tag */}
                  <img
                    src={project.image || "https://placehold.co/400x300/6B7280/FFFFFF?text=Project+Image"}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    
                  />
                  <Badge className="absolute top-4 left-4 bg-gradient-to-r from-blue-500 to-purple-600">
                    {project.category}
                  </Badge>
                </div>
                <CardHeader>
                  <CardTitle className="text-white">{project.title}</CardTitle>
                  <CardDescription className="text-blue-100">{project.description}</CardDescription>
                  <div className="mt-4 flex items-center justify-center">
                  <a className="h-10 w-20 bg-indigo-800 rounded-2xl flex items-center justify-center text-white" href={project.link} target="_blank">Click  here</a>
                  </div>
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
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">Pricing Plans</h2>
            <p className="md:text-md text-lg text-blue-100 max-w-2xl mx-auto">Choose the perfect plan for your business needs</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: "Front-End Development",
                price: "₹10,000",
                period: "onwards",
                features: ["Basic Website Design", "Responsive Layout", "Contact Form", "1 Month Support"],
                popular: false,
                dollar : "≈ $120",
              },
              {
                name: "Full Stack Development",
                price: "₹35,000",
                period: "onwards",
                features: [
                  "Custom Web Development",
                  "Advanced Features",
                  "Automation's",
                  "Chatt-Bot's",
                  "3 Months Support",
                  "Scalable product design and development"
                ],
                popular: true,
                dollar: "≈ $420",
              },
               {
                name: "Graphics Design",
                price: "₹1,000",
                period: "onwards",
                features: [
                  "Brochure Design",
                  "Poster Design",
                  "Logo Design",
                  "Business Card Design",
                  "Social Media Assets",
                  "1 Month Support",
                ],
                popular: false,
                dollar: "≈ $12",
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
                    {/* <div className="mt-2"> */}
                      <span className="text-sm text-blue-100 mr-2"> {plan.dollar}</span>
                    {/* </div> */}
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
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">Contact Us</h2>
            <p className="md:text-md text-lg text-blue-100 max-w-2xl mx-auto">
              Ready to start your project? Get in touch with us today
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <Card className="backdrop-blur-md bg-white/10 border-white/20 justify-self-center">
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
                    Experienced in designing scalable Product in IIT Bhubaneshwar web Design society.
                    <br/>
                    
                    Designed a full scalable and production ready product for MoodMigo.pvt.lmt
                  </li>
                  <li className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-400 mr-2" />
                    Sucessfull Delevry of projcts
                  </li>
                  <li className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-400 mr-2" />
                    24/7  Support
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
