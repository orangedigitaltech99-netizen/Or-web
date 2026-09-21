# Orange Digital Tech Website

A modern, responsive website for Orange Digital Tech - a web design and digital marketing agency. Built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## 🚀 Features

- **Modern Design**: Clean, tech-oriented design with orange and sky blue color scheme
- **Fully Responsive**: Optimized for all devices and screen sizes
- **Smooth Animations**: Beautiful animations and transitions using Framer Motion
- **Interactive Components**: Hover effects, scroll animations, and interactive elements
- **SEO Optimized**: Proper meta tags and semantic HTML structure
- **Performance Optimized**: Fast loading times and optimized images

## 🎨 Design & Theme

- **Primary Color**: Orange (#f97316)
- **Secondary Color**: Sky Blue (#0ea5e9)
- **Background**: White with gradient accents
- **Typography**: Inter font family with bold headings and clean body text
- **Style**: Modern, futuristic, and tech-oriented

## 📱 Sections

1. **Navbar**: Sticky navigation with smooth scroll and mobile menu
2. **Hero Section**: Full-screen section with animated headline and background
3. **About Section**: Split layout showcasing company information
4. **Services Section**: Animated cards displaying service offerings
5. **Portfolio Section**: Grid layout with project showcases and filtering
6. **Contact Section**: Contact form with Google Maps integration
7. **Footer**: Comprehensive footer with links and social media

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Font**: Inter (Google Fonts)

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd orange-digital-tech
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles and Tailwind imports
│   ├── layout.tsx           # Root layout component
│   └── page.tsx             # Main page component
├── components/
│   ├── Navbar.tsx           # Navigation component
│   ├── Hero.tsx             # Hero section
│   ├── About.tsx            # About section
│   ├── Services.tsx         # Services section
│   ├── Portfolio.tsx        # Portfolio section
│   ├── Contact.tsx          # Contact section
│   └── Footer.tsx           # Footer component
└── lib/                     # Utility functions (if needed)
```

## 🎯 Key Features

### Animations
- Smooth scroll between sections
- Fade-in and slide-up animations
- Hover effects on buttons and cards
- Background particle animations
- Loading animations

### Responsive Design
- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Flexible grid layouts
- Responsive typography

### Performance
- Optimized images and assets
- Lazy loading for animations
- Efficient bundle splitting
- SEO optimization

## 🎨 Customization

### Colors
Update colors in `tailwind.config.ts`:
```typescript
colors: {
  primary: {
    500: '#f97316', // Main orange
    // ... other shades
  },
  secondary: {
    500: '#0ea5e9', // Sky blue
    // ... other shades
  }
}
```

### Content
- Update company information in components
- Replace placeholder images with actual project images
- Modify contact information in Contact and Footer components
- Update social media links

### Animations
Customize animations in individual components or add new ones using Framer Motion.

## 📱 Mobile Optimization

The website is fully responsive and optimized for mobile devices:
- Touch-friendly navigation
- Optimized images for different screen sizes
- Readable typography on small screens
- Fast loading on mobile networks

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms
The project can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📞 Support

For support or questions, please contact:
- Email: hello@orangedigitaltech.com
- Phone: +1 (555) 123-4567

---

Built with ❤️ by Orange Digital Tech
