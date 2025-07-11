"use client"

import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react"

const Footer = () => {
  const footerSections = [
    {
      title: "Learning Resources",
      links: [
        { name: "Chest X-Ray", href: "#" },
        { name: "CT Fundamentals", href: "#" },
        { name: "MRI Basics", href: "#" },
        { name: "Ultrasound", href: "#" },
        { name: "Nuclear Medicine", href: "#" },
      ],
    },
    {
      title: "For Educators",
      links: [
        { name: "Create Content", href: "#" },
        { name: "Manage Classes", href: "#" },
        { name: "Track Progress", href: "#" },
        { name: "Assessment Tools", href: "#" },
        { name: "Certification", href: "#" },
      ],
    },
    {
      title: "Support",
      links: [
        { name: "Help Center", href: "#" },
        { name: "Contact Us", href: "#" },
        { name: "Technical Support", href: "#" },
        { name: "Community Forum", href: "#" },
        { name: "Feedback", href: "#" },
      ],
    },
  ]

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Instagram, href: "#", label: "Instagram" },
  ]

  return (
    <footer className="bg-gradient-to-br from-gray-800 to-gray-900 text-white mt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-8">
          {/* Brand Section - Mobile Responsive */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="sm:col-span-2 lg:col-span-1"
          >
            <div className="flex items-center gap-3 mb-4">
              <img
                 src="/images/logos/logo.png"
                alt="RadiologyHub Logo"
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl object-cover"
                onError={(e) => {
                  e.target.style.display = "none"
                  e.target.nextSibling.style.display = "flex"
                }}
              />
              <div
                className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-red-700 to-red-900 rounded-xl flex items-center justify-center"
                style={{ display: "none" }}
              >
                <span className="text-white font-bold text-sm sm:text-base">RH</span>
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold">RH RADeL</h3>
                <p className="text-white/70 text-xs sm:text-sm">Technology Solutions Pvt. Ltd</p>
              </div>
            </div>
            <p className="text-white/80 mb-4 leading-relaxed text-sm sm:text-base">
              Empowering medical professionals with comprehensive radiology education through interactive learning
              experiences.
            </p>

            {/* Contact Info */}
            <div className="space-y-2 text-xs sm:text-sm text-white/70">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <span className="break-all">rhradel@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span>+91 9704059830</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 flex-shrink-0" />
                <span>Radiology Education</span>
              </div>
            </div>
          </motion.div>

          {/* Footer Links - Mobile Responsive */}
          {footerSections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * (index + 1) }}
              className="min-w-0"
            >
              <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-orange-400">{section.title}</h4>
              <ul className="space-y-1 sm:space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-white/70 hover:text-orange-400 transition-colors duration-200 text-xs sm:text-sm block py-1"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom Section - Mobile Responsive */}
        <div className="border-t border-white/20 pt-6 sm:pt-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <div className="text-white/70 text-xs sm:text-sm text-center sm:text-left">
              © 2025 RH RADeL. All rights reserved.
              <span className="hidden sm:inline"> | Privacy Policy | Terms of Service</span>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3 sm:gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-8 h-8 sm:w-10 sm:h-10 bg-white/10 hover:bg-orange-400/20 rounded-lg flex items-center justify-center transition-colors duration-200"
                    aria-label={social.label}
                  >
                    <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-white/70 hover:text-orange-400" />
                  </motion.a>
                )
              })}
            </div>
          </div>

          {/* Mobile Copyright Links */}
          <div className="sm:hidden text-center mt-4 text-xs text-white/60">
            <a href="#" className="hover:text-orange-400">
              Privacy Policy
            </a>{" "}
            |{" "}
            <a href="#" className="hover:text-orange-400">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
