'use client'

import { config } from '@/lib/config'
import { motion } from 'framer-motion'

const WhatsAppButton = () => {
  const phone = config.whatsapp.number.replace(/[^\d+]/g, '')
  const message = encodeURIComponent(config.whatsapp.defaultMessage)
  const href = `https://wa.me/${phone.replace(/^\+/, '')}?text=${message}`

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg flex items-center justify-center hover:shadow-xl hover:scale-105 transition-transform"
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-7 h-7" fill="currentColor">
        <path d="M19.11 17.44c-.29-.14-1.69-.83-1.95-.92-.26-.1-.45-.14-.64.14-.19.29-.74.92-.91 1.11-.17.19-.34.22-.63.07-.29-.14-1.23-.45-2.34-1.42-.86-.77-1.44-1.72-1.61-2.01-.17-.29-.02-.45.13-.59.13-.13.29-.34.43-.51.14-.17.19-.29.29-.48.1-.19.05-.36-.02-.51-.07-.14-.64-1.53-.88-2.1-.23-.55-.47-.48-.64-.48-.17 0-.36-.02-.55-.02s-.51.07-.78.36c-.26.29-1 1-1 2.44 0 1.44 1.02 2.84 1.16 3.03.14.19 2 3.06 4.83 4.29.67.29 1.19.46 1.6.59.67.21 1.28.18 1.76.11.54-.08 1.69-.69 1.93-1.35.24-.66.24-1.22.17-1.35-.07-.13-.26-.2-.55-.34z"/>
        <path d="M16.02 3.2c-7.09 0-12.86 5.77-12.86 12.86 0 2.26.6 4.47 1.74 6.41L3.2 28.8l6.5-1.7c1.86 1.02 3.97 1.56 6.12 1.56 7.09 0 12.86-5.77 12.86-12.86S23.11 3.2 16.02 3.2zm7.6 20.46c-2.03 2.03-4.73 3.15-7.6 3.15-1.9 0-3.73-.5-5.34-1.44l-.38-.22-3.86 1.01 1.03-3.76-.25-.39c-1.02-1.63-1.56-3.51-1.56-5.44 0-5.63 4.58-10.21 10.21-10.21 2.73 0 5.29 1.06 7.22 2.99 1.93 1.93 2.99 4.49 2.99 7.22-.01 2.87-1.13 5.58-3.16 7.61z"/>
      </svg>
    </motion.a>
  )
}

export default WhatsAppButton


