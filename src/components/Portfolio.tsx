'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { ExternalLink, Eye, Code, Palette, TrendingUp } from 'lucide-react'

const Portfolio = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [selectedCategory, setSelectedCategory] = useState('all')

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'web', name: 'Web Design' },
    { id: 'marketing', name: 'Digital Marketing' },
    { id: 'branding', name: 'Branding' }
  ]

  const projects = [
    {
      id: 1,
      title: 'E-commerce Fashion Store',
      category: 'web',
      description: 'Modern e-commerce platform with advanced filtering and checkout system.',
      image: '/api/placeholder/600/400',
      tags: ['React', 'Node.js', 'MongoDB'],
      link: '#',
      type: 'Web Design'
    },
    {
      id: 2,
      title: 'Restaurant Marketing Campaign',
      category: 'marketing',
      description: 'Social media campaign that increased customer engagement by 300%.',
      image: '/api/placeholder/600/400',
      tags: ['Social Media', 'Content Strategy', 'Analytics'],
      link: '#',
      type: 'Digital Marketing'
    },
    {
      id: 3,
      title: 'Tech Startup Branding',
      category: 'branding',
      description: 'Complete brand identity design for a fintech startup.',
      image: '/api/placeholder/600/400',
      tags: ['Logo Design', 'Brand Guidelines', 'UI/UX'],
      link: '#',
      type: 'Branding'
    },
    {
      id: 4,
      title: 'Healthcare Website',
      category: 'web',
      description: 'Responsive medical website with appointment booking system.',
      image: '/api/placeholder/600/400',
      tags: ['WordPress', 'Custom Development', 'SEO'],
      link: '#',
      type: 'Web Design'
    },
    {
      id: 5,
      title: 'SaaS Product Launch',
      category: 'marketing',
      description: 'Multi-channel marketing strategy for software product launch.',
      image: '/api/placeholder/600/400',
      tags: ['Email Marketing', 'PPC', 'Content Marketing'],
      link: '#',
      type: 'Digital Marketing'
    },
    {
      id: 6,
      title: 'Fitness App Design',
      category: 'branding',
      description: 'Mobile app design with comprehensive brand guidelines.',
      image: '/api/placeholder/600/400',
      tags: ['Mobile Design', 'Prototyping', 'User Research'],
      link: '#',
      type: 'Branding'
    }
  ]

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory)

  return (
    <section id="portfolio" className="section-padding bg-gray-50">
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
            Our <span className="text-gradient">Portfolio</span>
          </motion.h2>
          
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto mb-8"
          >
            Explore our recent projects and see how we've helped businesses achieve their digital goals.
          </motion.p>

          {/* Category Filter */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-4"
          >
            {categories.map((category) => (
              <motion.button
                key={category.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-primary-500 text-white shadow-lg'
                    : 'bg-white text-gray-600 hover:bg-primary-50 hover:text-primary-500 border border-gray-200'
                }`}
              >
                {category.name}
              </motion.button>
            ))}
          </motion.div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -50, opacity: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <div className="w-full h-64 bg-gradient-to-br from-primary-100 to-secondary-100 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      {project.type === 'Web Design' ? (
                        <Code className="w-8 h-8 text-white" />
                      ) : project.type === 'Digital Marketing' ? (
                        <TrendingUp className="w-8 h-8 text-white" />
                      ) : (
                        <Palette className="w-8 h-8 text-white" />
                      )}
                    </div>
                    <p className="text-gray-500 font-medium">{project.type}</p>
                  </div>
                </div>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex space-x-4">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors duration-300"
                    >
                      <Eye className="w-5 h-5" />
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors duration-300"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </motion.button>
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-medium text-primary-500 bg-primary-50 px-3 py-1 rounded-full">
                    {project.type}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-500 transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* View Project Button */}
                <motion.button
                  whileHover={{ x: 5 }}
                  className="flex items-center space-x-2 text-primary-500 font-semibold group-hover:text-primary-600 transition-colors duration-300"
                >
                  <span>View Project</span>
                  <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>

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
            View All Projects
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default Portfolio
