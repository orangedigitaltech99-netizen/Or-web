// Configuration file for your website
export const config = {
  // Formspree Configuration
  // Get your form ID from https://formspree.io/
  formspree: {
    formId: 'YOUR_FORMSPREE_ID', // Replace with your actual Formspree form ID
    endpoint: 'https://formspree.io/f/YOUR_FORMSPREE_ID'
  },
  
  // Email Configuration (if using custom email service)
  email: {
    to: 'kiranreddy@orangedigitaltech.in', // Primary business email
    toSecondary: 'info@orangedigitaltech.in', // Secondary business email
    toTertiary: 'orangedigitaltech99@gmail.com', // Backup Gmail inbox
    from: 'noreply@orangedigitaltech.com', // Your domain email
  },
  
  // Contact Information
  contact: {
    email: 'kiranreddy@orangedigitaltech.in',
    emailSecondary: 'info@orangedigitaltech.in',
    emailTertiary: 'orangedigitaltech99@gmail.com',
    phone: '+91 9849194699',
    address: 'No 5 GVR Towers Beside Novotel Bharathi Nagar Vijayawada-520010',
    businessHours: 'Mon-Fri from 8am to 5pm'
  },
  
  // Messaging
  whatsapp: {
    // Use international format without spaces for URLs
    number: '+919849194699',
    defaultMessage: 'Hello! I would like to know more about your services.'
  },
  
  // Social Media Links
  social: {
    facebook: '#',
    twitter: '#',
    instagram: '#',
    linkedin: '#'
  }
}
