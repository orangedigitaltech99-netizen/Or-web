'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Sparkles, Star, Zap, Target, Monitor, Smartphone, Globe, TrendingUp, Palette, Code, Megaphone, Users, BarChart3, Search, MousePointer } from 'lucide-react'

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0">
        {/* Animated Gradient Mesh */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500 via-blue-500 to-purple-600 opacity-90">
          <div className="absolute inset-0 bg-gradient-to-tr from-pink-500/30 via-transparent to-cyan-500/30"></div>
        </div>
        
        {/* Animated Mesh Gradients */}
        <motion.div
          className="absolute inset-0 opacity-30"
          animate={{
            background: [
              'radial-gradient(circle at 20% 50%, #ff6b35 0%, transparent 50%), radial-gradient(circle at 80% 20%, #4ecdc4 0%, transparent 50%), radial-gradient(circle at 40% 80%, #45b7d1 0%, transparent 50%)',
              'radial-gradient(circle at 80% 20%, #ff6b35 0%, transparent 50%), radial-gradient(circle at 20% 80%, #4ecdc4 0%, transparent 50%), radial-gradient(circle at 60% 40%, #45b7d1 0%, transparent 50%)',
              'radial-gradient(circle at 40% 20%, #ff6b35 0%, transparent 50%), radial-gradient(circle at 60% 80%, #4ecdc4 0%, transparent 50%), radial-gradient(circle at 20% 60%, #45b7d1 0%, transparent 50%)',
            ]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/20"></div>
        
        {/* Enhanced Floating particles */}
        <div className="absolute inset-0">
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${2 + Math.random() * 4}px`,
                height: `${2 + Math.random() * 4}px`,
                background: i % 3 === 0 ? '#ff6b35' : i % 3 === 1 ? '#4ecdc4' : '#45b7d1',
                opacity: 0.4 + Math.random() * 0.4,
              }}
              animate={{
                y: [0, -50, 0],
                x: [0, Math.random() * 20 - 10, 0],
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 4 + Math.random() * 3,
                repeat: Infinity,
                delay: Math.random() * 3,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>

        {/* Floating Service Icons */}
        <div className="absolute inset-0">
          {/* Web Design Icons */}
          {[Monitor, Smartphone, Code, Palette].map((Icon, i) => (
            <motion.div
              key={`web-${i}`}
              className="absolute text-white/25"
              style={{
                left: `${10 + i * 25}%`,
                top: `${20 + (i % 2) * 30}%`,
              }}
              animate={{
                y: [0, -30, 0],
                rotate: [0, 360, 0],
                scale: [1, 1.2, 1],
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{
                duration: 8 + i * 2,
                repeat: Infinity,
                delay: i * 1.5,
                ease: "easeInOut"
              }}
            >
              <Icon size={32 + i * 4} />
            </motion.div>
          ))}
          
          {/* Digital Marketing Icons */}
          {[TrendingUp, Megaphone, BarChart3, Search].map((Icon, i) => (
            <motion.div
              key={`marketing-${i}`}
              className="absolute text-cyan-300/30"
              style={{
                left: `${60 + i * 15}%`,
                top: `${15 + (i % 3) * 25}%`,
              }}
              animate={{
                y: [0, -25, 0],
                x: [0, 10, 0],
                rotate: [0, -360, 0],
                scale: [1, 1.15, 1],
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                duration: 10 + i * 1.5,
                repeat: Infinity,
                delay: i * 2,
                ease: "easeInOut"
              }}
            >
              <Icon size={28 + i * 3} />
            </motion.div>
          ))}
          
          {/* Business Icons */}
          {[Users, Globe, MousePointer].map((Icon, i) => (
            <motion.div
              key={`business-${i}`}
              className="absolute text-yellow-300/25"
              style={{
                left: `${15 + i * 40}%`,
                top: `${70 + i * 10}%`,
              }}
              animate={{
                y: [0, -20, 0],
                rotate: [0, 180, 0],
                scale: [1, 1.1, 1],
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{
                duration: 12 + i * 2,
                repeat: Infinity,
                delay: i * 3,
                ease: "easeInOut"
              }}
            >
              <Icon size={36 + i * 2} />
            </motion.div>
          ))}
        </div>

        {/* Animated Mockup Elements */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Website Mockup */}
          <motion.div
            className="absolute top-20 right-10 w-32 h-20 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20"
            animate={{
              y: [0, -10, 0],
              rotateY: [0, 5, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <div className="p-2">
              <div className="w-full h-2 bg-white/30 rounded mb-1"></div>
              <div className="w-3/4 h-2 bg-white/20 rounded mb-1"></div>
              <div className="w-1/2 h-2 bg-white/20 rounded"></div>
            </div>
          </motion.div>

          {/* Mobile App Mockup */}
          <motion.div
            className="absolute top-40 left-8 w-16 h-24 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20"
            animate={{
              y: [0, 15, 0],
              rotate: [0, -5, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
          >
            <div className="p-2">
              <div className="w-full h-1 bg-white/30 rounded mb-1"></div>
              <div className="w-full h-1 bg-white/20 rounded mb-1"></div>
              <div className="w-full h-1 bg-white/20 rounded mb-1"></div>
              <div className="w-2/3 h-1 bg-white/20 rounded"></div>
            </div>
          </motion.div>

          {/* Analytics Chart */}
          <motion.div
            className="absolute bottom-32 left-16 w-24 h-16 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20"
            animate={{
              scale: [1, 1.05, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          >
            <div className="p-2">
              <div className="flex items-end space-x-1 h-8">
                <div className="w-2 bg-cyan-300/60 rounded-t" style={{height: '60%'}}></div>
                <div className="w-2 bg-cyan-300/80 rounded-t" style={{height: '80%'}}></div>
                <div className="w-2 bg-cyan-300/60 rounded-t" style={{height: '40%'}}></div>
                <div className="w-2 bg-cyan-300/90 rounded-t" style={{height: '90%'}}></div>
              </div>
            </div>
          </motion.div>

          {/* Social Media Icons */}
          <motion.div
            className="absolute bottom-20 right-20 flex space-x-2"
            animate={{
              y: [0, -8, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 3
            }}
          >
            {['📱', '💻', '📊', '🎯'].map((emoji, i) => (
              <motion.div
                key={i}
                className="w-8 h-8 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-sm border border-white/20"
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 3 + i,
                  repeat: Infinity,
                  delay: i * 0.5,
                  ease: "easeInOut"
                }}
              >
                {emoji}
              </motion.div>
            ))}
          </motion.div>

          {/* Floating Design Elements */}
          <motion.div
            className="absolute top-1/3 right-1/4 w-4 h-4 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-full"
            animate={{
              x: [0, 20, 0],
              y: [0, -20, 0],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          <motion.div
            className="absolute top-1/2 left-1/3 w-3 h-3 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full"
            animate={{
              x: [0, -15, 0],
              y: [0, 15, 0],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 9,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
          />
        </div>

        {/* Wave animation */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="relative block w-full h-16 lg:h-24"
          >
            <motion.path
              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
              opacity=".25"
              fill="white"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />
            <motion.path
              d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
              opacity=".5"
              fill="white"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, delay: 0.5, ease: "easeInOut" }}
            />
            <motion.path
              d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
              fill="white"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, delay: 1, ease: "easeInOut" }}
            />
          </svg>
        </div>
      </div>

      {/* Service Showcase Cards */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Web Design Card */}
        <motion.div
          className="absolute top-32 left-4 w-20 h-16 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 p-2"
          animate={{
            y: [0, -15, 0],
            rotate: [0, 2, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        >
          <div className="text-xs text-white/60 mb-1">Web Design</div>
          <div className="flex space-x-1">
            <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
            <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
          </div>
        </motion.div>

        {/* Digital Marketing Card */}
        <motion.div
          className="absolute top-48 right-4 w-20 h-16 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 p-2"
          animate={{
            y: [0, 15, 0],
            rotate: [0, -2, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        >
          <div className="text-xs text-white/60 mb-1">Marketing</div>
          <div className="flex space-x-1">
            <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
            <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
            <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
          </div>
        </motion.div>

        {/* SEO Card */}
        <motion.div
          className="absolute bottom-40 left-8 w-20 h-16 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 p-2"
          animate={{
            x: [0, 10, 0],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3
          }}
        >
          <div className="text-xs text-white/60 mb-1">SEO</div>
          <div className="flex space-x-1">
            <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
            <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
            <div className="w-2 h-2 bg-red-400 rounded-full"></div>
          </div>
        </motion.div>
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom text-center text-white pt-12 lg:pt-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Enhanced Sparkle icon with glow effect */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center mb-6"
          >
            <motion.div
              animate={{ 
                rotate: [0, 360],
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                rotate: { duration: 8, repeat: Infinity, ease: "linear" },
                scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
              }}
              className="relative"
            >
              <Sparkles className="w-16 h-16 text-yellow-300 drop-shadow-lg" />
              <div className="absolute inset-0 w-16 h-16 bg-yellow-300/20 rounded-full blur-xl"></div>
            </motion.div>
          </motion.div>

          {/* Enhanced Main headline with gradient text */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight flex flex-col items-center"
          >
            <img
              src="/images/Orange Digital Logo.png"
              alt="Orange Digital Tech Logo"
              className="w-24 h-24 md:w-32 md:h-32 mb-4 object-contain rounded shadow-lg bg-white/80"
            />
            <motion.span
              className="block"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              We Design.
            </motion.span>
            <motion.span
              className="block bg-gradient-to-r from-yellow-300 via-orange-300 to-yellow-400 bg-clip-text text-transparent"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              We Market.
            </motion.span>
            <motion.span
              className="block"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              We Grow.
            </motion.span>
          </motion.h1>

          {/* Enhanced Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="text-xl md:text-2xl mb-10 text-gray-100 max-w-3xl mx-auto leading-relaxed"
          >
            Transform your digital presence with our{' '}
            <span className="text-yellow-300 font-semibold">creative web design</span>{' '}
            and{' '}
            <span className="text-cyan-300 font-semibold">strategic digital marketing</span>{' '}
            solutions that drive real results.
          </motion.p>

          {/* Enhanced CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <motion.button
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 25px 50px rgba(0,0,0,0.4)",
                y: -2
              }}
              whileTap={{ scale: 0.95 }}
              className="relative bg-white text-gray-900 hover:bg-gray-100 font-bold py-5 px-10 rounded-xl transition-all duration-300 flex items-center space-x-3 text-lg shadow-2xl group overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-yellow-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              <span className="relative z-10">Explore Services</span>
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowRight className="w-5 h-5 relative z-10" />
              </motion.div>
            </motion.button>
            
            <motion.button
              whileHover={{ 
                scale: 1.05,
                backgroundColor: "rgba(255,255,255,0.1)",
                backdropFilter: "blur(10px)"
              }}
              whileTap={{ scale: 0.95 }}
              className="relative border-2 border-white/80 text-white hover:border-white font-bold py-5 px-10 rounded-xl transition-all duration-300 text-lg backdrop-blur-sm group overflow-hidden"
            >
              <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative z-10">View Portfolio</span>
            </motion.button>
          </motion.div>

          {/* Enhanced Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 pt-12 border-t border-white/20"
          >
            {[
              { number: '100+', label: 'Projects Completed', icon: '🎯' },
              { number: '50+', label: 'Happy Clients', icon: '😊' },
              { number: '5+', label: 'Years Experience', icon: '⭐' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ 
                  scale: 1.05,
                  y: -5
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.6 + index * 0.2 }}
                className="text-center group cursor-pointer"
              >
                <div className="relative p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 group-hover:bg-white/10 transition-all duration-300">
                  <div className="text-4xl mb-3">{stat.icon}</div>
                  <motion.div 
                    className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent mb-3"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: 1.8 + index * 0.2, type: "spring" }}
                  >
                    {stat.number}
                  </motion.div>
                  <div className="text-gray-200 font-medium">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
