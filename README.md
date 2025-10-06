# PeopleCore - The GPT of HR

A production-ready homepage for PeopleCore, the world's most advanced conversational AI for human resources. Built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- **Modern Design**: Premium gradient backgrounds, glassmorphism effects, and smooth animations
- **AI Demo**: Interactive "Ask PeopleCore" widget with React Flow workflow visualization
- **Responsive**: Mobile-first design that works perfectly on all devices
- **Accessible**: WCAG compliant with keyboard navigation and screen reader support
- **Performance**: Optimized for Core Web Vitals with lazy loading and reduced motion support
- **SEO Ready**: Complete meta tags, Open Graph, Twitter Cards, and structured data

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom animations
- **UI Components**: shadcn/ui with Radix UI primitives
- **Animations**: Framer Motion with accessibility considerations
- **Workflow Visualization**: React Flow (lazy-loaded)
- **Form Handling**: Server Actions with Zod validation
- **Email**: Resend integration for waitlist notifications

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd peoplecore-website
```

2. Install dependencies:
```bash
npm install
```

3. Copy environment variables:
```bash
cp env.example .env.local
```

4. Start the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the homepage.

## Design System

### Colors
- **Primary**: Blue to Purple gradients
- **Secondary**: Slate grays for text and backgrounds
- **Accents**: Green, Orange, Pink for feature highlights

### Typography
- **Headings**: Geist Sans (bold weights)
- **Body**: Geist Sans (regular/medium)
- **Code**: Geist Mono

### Components
- **Buttons**: Multiple variants (default, outline, gradient)
- **Cards**: Glassmorphism with hover effects
- **Forms**: Floating labels with validation states

## Sections

1. **Hero**: Animated gradient background with CTA buttons
2. **Demo**: Interactive AI chat with workflow visualization
3. **Value Props**: 5 key benefits with animated icons
4. **Features**: 6 core HR modules with hover effects
5. **Use Cases**: Persona-based scenarios (HR, Ops, Finance)
6. **Social Proof**: Testimonials and company logos
7. **Pricing**: Beta free tier with feature comparison
8. **Waitlist**: Form with server-side validation
9. **Footer**: Links, newsletter signup, and social icons

## Configuration

### Environment Variables

```bash
# Email Configuration (Optional)
RESEND_API_KEY=your_resend_api_key_here

# Database Configuration (Optional)
DATABASE_URL=your_database_url_here

# Analytics (Optional)
NEXT_PUBLIC_GA_ID=your_google_analytics_id
```

### Customization

- **Colors**: Update `app/globals.css` CSS variables
- **Content**: Modify section components in `app/components/sections/`
- **Animations**: Adjust Framer Motion variants in component files
- **SEO**: Update metadata in `app/layout.tsx`

## Deployment

### Build for Production

```bash
npm run build
npm start
```

### Deploy to Vercel

1. Push to GitHub
2. Connect repository to Vercel
3. Set environment variables in Vercel dashboard
4. Deploy automatically on push

### Deploy to Other platforms

The app is a standard Next.js application and can be deployed to:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify
- Any Node.js hosting provider

## Performance

- **Lighthouse Score**: 90+ across all metrics
- **Core Web Vitals**: Optimized for LCP, FID, and CLS
- **Bundle Size**: Minimized with dynamic imports
- **Images**: Next.js Image optimization
- **Fonts**: Self-hosted with font-display: swap

## Accessibility

- **WCAG 2.1 AA**: Compliant color contrast and focus management
- **Keyboard Navigation**: Full keyboard support
- **Screen Readers**: Semantic HTML and ARIA labels
- **Reduced Motion**: Respects user preferences
- **Focus Management**: Visible focus indicators

## Testing

```bash
# Type checking
npm run type-check

# Linting
npm run lint

# Build test
npm run build
```

## License

This project is proprietary software for PeopleCore. All rights reserved.

## Contributing

This is a private project. For internal team members:

1. Create a feature branch
2. Make your changes
3. Test thoroughly
4. Submit a pull request
5. Ensure CI passes

## Support

For technical issues or questions:
- Internal: Slack #dev-team
- External: hello@peoplecore.ai

---

Built with ❤️ by the PeopleCore team
