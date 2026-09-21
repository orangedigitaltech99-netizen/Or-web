# Contact Form Setup Guide

## 🚀 Quick Setup with Formspree (Recommended)

### Step 1: Create Formspree Account
1. Go to [https://formspree.io/](https://formspree.io/)
2. Sign up for a free account
3. Create a new form
4. Copy your form ID (it looks like `xrgkqyvw`)

### Step 2: Update Configuration
1. Open `src/lib/config.ts`
2. Replace `YOUR_FORMSPREE_ID` with your actual form ID:
   ```typescript
   formspree: {
     formId: 'xrgkqyvw', // Your actual form ID
     endpoint: 'https://formspree.io/f/xrgkqyvw'
   }
   ```

### Step 3: Configure Email Notifications
Your emails are already configured:
- **Primary Email**: kiranreddy@orangedigitaltech.in
- **Secondary Email**: info@orangedigitaltech.in

In Formspree, you can set up email notifications to both addresses or choose which one receives the form submissions.

### Step 4: Test the Form
1. Deploy your website or run locally
2. Fill out the contact form
3. Check your email for the submission

## 📧 Alternative: EmailJS Setup

If you prefer EmailJS (client-side email sending):

### Step 1: Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Create a free account
3. Set up an email service (Gmail, Outlook, etc.)
4. Create an email template
5. Get your Service ID, Template ID, and Public Key

### Step 2: Install EmailJS
```bash
npm install @emailjs/browser
```

### Step 3: Update Contact Component
Replace the form submission logic with EmailJS code.

## 🗄️ Database Setup (Advanced)

For storing form data in a database:

### Option 1: Supabase (Recommended)
1. Create account at [supabase.com](https://supabase.com)
2. Create a new project
3. Create a `contact_submissions` table
4. Set up API endpoints

### Option 2: MongoDB Atlas
1. Create account at [mongodb.com/atlas](https://mongodb.com/atlas)
2. Create a cluster
3. Set up database and collection
4. Create API endpoints

## 📊 What Data You'll Receive

With the current setup, you'll receive:
- **Name**: Customer's full name
- **Email**: Customer's email address
- **Message**: Their inquiry/project details
- **Timestamp**: When they submitted (automatic)
- **Subject**: Auto-generated subject line

## 🔧 Customization Options

### Add More Fields
To add more fields (phone, company, etc.):
1. Update the `formData` state in `Contact.tsx`
2. Add the new input fields to the form
3. Include them in the form submission

### Email Templates
- **Formspree**: Customize email templates in your dashboard
- **EmailJS**: Create custom templates with your branding
- **Custom API**: Full control over email formatting

### Auto-responders
Set up automatic replies to customers:
- **Formspree**: Built-in auto-responder feature
- **EmailJS**: Send confirmation emails
- **Custom**: Full control over response logic

## 🛡️ Security & Spam Protection

### Built-in Protection
- **Formspree**: Built-in spam protection
- **EmailJS**: Rate limiting and validation
- **Custom**: Add CAPTCHA, rate limiting, validation

### Additional Security
- Add reCAPTCHA for extra spam protection
- Implement rate limiting
- Add form validation
- Use HTTPS for all form submissions

## 📈 Analytics & Tracking

### Track Form Submissions
- **Formspree**: Built-in analytics dashboard
- **Google Analytics**: Track form events
- **Custom**: Log submissions to your analytics

### Monitor Performance
- Track conversion rates
- Monitor form completion rates
- Analyze customer inquiries

## 🚨 Troubleshooting

### Common Issues
1. **Form not submitting**: Check your form ID in config
2. **Emails not received**: Check spam folder, verify email settings
3. **CORS errors**: Ensure proper API configuration
4. **Rate limiting**: Check if you've exceeded free tier limits

### Testing
- Test on different devices and browsers
- Verify email delivery
- Check console for errors
- Test with different email addresses

## 💰 Pricing

### Formspree
- **Free**: 50 submissions/month
- **Gold**: $10/month for 1,000 submissions
- **Platinum**: $20/month for 5,000 submissions

### EmailJS
- **Free**: 200 emails/month
- **Paid**: Starting at $15/month

### Custom Solutions
- **Supabase**: Free tier available
- **MongoDB Atlas**: Free tier available
- **Vercel/Netlify**: Free hosting for API functions

## 🎯 Next Steps

1. **Choose your solution** (Formspree recommended for beginners)
2. **Set up your account** and get your form ID
3. **Update the configuration** file
4. **Test the form** thoroughly
5. **Deploy and monitor** submissions

Need help? Check the documentation for your chosen service or reach out for support!
