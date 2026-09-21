#!/usr/bin/env node

/**
 * Development Setup Script for Orange Digital Tech Website
 * This script helps set up the development environment
 */

const fs = require('fs');
const path = require('path');

console.log('🚀 Orange Digital Tech - Development Setup');
console.log('==========================================\n');

// Check if package.json exists
if (!fs.existsSync('package.json')) {
  console.error('❌ package.json not found. Please run this script from the project root.');
  process.exit(1);
}

console.log('✅ Project structure looks good!');
console.log('\n📋 Next steps:');
console.log('1. Install dependencies: npm install');
console.log('2. Start development server: npm run dev');
console.log('3. Open http://localhost:3000 in your browser');
console.log('\n🎨 Customization:');
console.log('- Update colors in tailwind.config.ts');
console.log('- Modify content in src/components/');
console.log('- Add your own images and assets');
console.log('\n📚 Documentation: See README.md for detailed instructions');
console.log('\nHappy coding! 🎉');
