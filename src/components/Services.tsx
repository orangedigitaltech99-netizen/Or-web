'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { 
  Palette, 
  TrendingUp, 
  Search, 
  Smartphone, 
  Globe, 
  BarChart3,
  ArrowRight
} from 'lucide-react'

const Services = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const services = [
    {
      icon: Palette,
      title: 'Web Design',
      description: 'Create stunning, responsive websites that captivate your audience and drive conversions.',
      features: ['Responsive Design', 'UI/UX Optimization', 'Custom Development', 'Performance Optimization'],
      color: 'from-pink-500 to-rose-500'
    },
    {
      icon: TrendingUp,
      title: 'Digital Marketing',
      description: 'Boost your online presence with strategic digital marketing campaigns that deliver results.',
      features: ['Social Media Marketing', 'PPC Campaigns', 'Email Marketing', 'Analytics & Reporting'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Search,
      title: 'SEO & Branding',
      description: 'Enhance your brand visibility and search engine rankings with our comprehensive SEO strategies.',
      features: ['Keyword Research', 'Content Strategy', 'Brand Identity', 'Local SEO'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Smartphone,
      title: 'Mobile Solutions',
      description: 'Optimize your business for mobile users with responsive designs and mobile-first strategies.',
      features: ['Mobile App Design', 'Responsive Websites', 'Mobile Marketing', 'App Store Optimization'],
      color: 'from-purple-500 to-violet-500'
    },
    {
      icon: Globe,
      title: 'E-commerce',
      description: 'Build powerful online stores that convert visitors into customers with seamless shopping experiences.',
      features: ['Online Store Setup', 'Payment Integration', 'Inventory Management', 'Customer Analytics'],
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: BarChart3,
      title: 'Analytics & Growth',
      description: 'Track performance and optimize your digital strategy with data-driven insights and reporting.',
      features: ['Performance Tracking', 'Growth Strategy', 'A/B Testing', 'ROI Optimization'],
      color: 'from-indigo-500 to-blue-500'
    }
  ]

  return (
    <section id="services" className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4"
          >
            Our <span className="text-gradient">Services</span>
          </motion.h2>
          
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            We offer comprehensive digital solutions to help your business grow and succeed in the online world.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.1 * index }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-transparent"
            >
              {/* Icon */}
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                <service.icon className="w-8 h-8 text-white" />
              </motion.div>

              {/* Content */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary-500 transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>

                {/* Features List */}
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <motion.li
                      key={featureIndex}
                      initial={{ x: -20, opacity: 0 }}
                      animate={isInView ? { x: 0, opacity: 1 } : { x: -20, opacity: 0 }}
                      transition={{ duration: 0.5, delay: 0.1 * index + 0.1 * featureIndex }}
                      className="flex items-center space-x-2 text-sm text-gray-500"
                    >
                      <div className="w-1.5 h-1.5 bg-primary-500 rounded-full"></div>
                      <span>{feature}</span>
                    </motion.li>
                  ))}
                </ul>

                {/* CTA */}
                <motion.button
                  whileHover={{ x: 5 }}
                  className="flex items-center space-x-2 text-primary-500 font-semibold group-hover:text-primary-600 transition-colors duration-300 mt-6"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </motion.button>
              </div>

              {/* Hover Effect Background */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500/5 to-secondary-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(249, 115, 22, 0.3)" }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary text-lg px-8 py-4"
          >
            Get Started Today
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default Services
