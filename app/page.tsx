"use client"

import { useState } from "react"
import {
  Menu,
  X,
  Code,
  Palette,
  Smartphone,
  Globe,
  Star,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  CheckCircle,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
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
  <div className="min-h-screen bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-800">
    {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-white/10 border-b border-white/20">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-purple-500 rounded-lg flex items-center justify-center">
                <Globe className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">Veridian Web</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {["home", "services", "projects", "pricing", "contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="text-white/90 hover:text-white transition-colors capitalize"
                >
                  {item === "home" ? "Home" : item}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 backdrop-blur-md bg-white/10 rounded-lg border border-white/20">
              {["home", "services", "projects", "pricing", "contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block w-full text-left px-4 py-2 text-white/90 hover:text-white transition-colors capitalize"
                >
                  {item === "home" ? "Home" : item}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Home Section */}
      <section id="home" className="min-h-screen flex items-center justify-center pt-20">
        <div className="container mx-auto px-4 text-center">
          <div className="rounded-3xl borderp-12 max-w-4xl mx-auto">
            <div className="w-24 h-24 bg-gradient-to-r from-blue-400 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-8">
              <Globe className="w-12 h-12 text-white" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">Veridian Web</h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-2xl mx-auto">
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
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              We offer comprehensive digital solutions to bring your vision to life
            </p>
          </div>
          {/* Service Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center mx-auto">
            {[
              {
                icon: <Code className="w-8 h-8" />,
                title: "Frontend Development",
                description: "Landing pages, portfolios, and responsive designs using modern technologies",
              },
              {
                icon: <Code className="w-8 h-8" />,
                title: "Full Stack Development",
                description: "Complete web applications with backend integration and database management",
              },
              {
                icon: <Palette className="w-8 h-8" />,
                title: "Graphics Design",
                description: "Creative visual solutions including brochures,logos, branding, and marketing materials",
              },
              // {
              //   icon: <Globe className="w-8 h-8" />,
              //   title: "Digital Marketing",
              //   description: "SEO optimization and digital marketing strategies to grow your business",
              // },
            ].map((service, index) => (
              <Card
                key={index}
                className="backdrop-blur-md bg-white/10 border-white/20 text-white hover:bg-white/20 transition-all duration-300 md:max-w-2/3 mx-auto"
              >
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-blue-100 text-center">{service.description}</CardDescription>
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
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={400}
                    height={300}
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
