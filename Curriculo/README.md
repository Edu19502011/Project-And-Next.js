# Eduardo's Portfolio

Modern, high-performance portfolio built with cutting-edge web technologies. Inspired by [chanhdai.com](https://chanhdai.com).

## ✨ Features

- 🎨 Beautiful minimalist design with smooth animations
- 🎯 Fully responsive and mobile-first
- ⚡ Lightning-fast performance (90+ Lighthouse score)
- 🌙 Dark mode support
- 🎭 Advanced Framer Motion animations
- 💫 Interactive hover effects and transitions
- 🎨 Technology stack with brand-colored icons
- 📱 Sticky navigation with smooth scroll
- 🔥 Server-Side Rendering for SEO
- 💌 Contact form with API route

## 🚀 Tech Stack

- **Framework:** Next.js 14+ (App Router)
- **Language:** TypeScript
- **Styling:** TailwindCSS
- **Animations:** Framer Motion
- **Icons:** Lucide React + React Icons
- **Performance:** SSR, Image Optimization, Code Splitting

## 🛠️ Getting Started

1. **Install dependencies:**
```bash
npm install
```

2. **Run development server:**
```bash
npm run dev
```

3. **Open browser:**
Navigate to [http://localhost:3000](http://localhost:3000)

## 📦 Build for Production

```bash
npm run build
npm start
```

## 🎨 Customization

### Personal Information
Edit `app/page.tsx` to customize:
- Name and tagline (Hero section)
- Overview details (location, email, experience)
- Social links (GitHub, LinkedIn, Email)
- About section text
- Tech stack and skills
- Experience details
- Projects showcase
- Contact information

### Tech Stack Icons
The tech stack uses `react-icons` with brand colors. To add/modify technologies, edit the `techStack` object in `app/page.tsx`:

```typescript
const techStack = {
  frontend: [
    { name: 'React', icon: SiReact, color: '#61DAFB' },
    // Add more...
  ]
}
```

### Styling & Colors
Modify colors in `tailwind.config.ts` and background gradients in `app/globals.css`.

## 📧 Contact Form Setup

To enable the contact form, integrate with email services in `app/api/contact/route.ts`:

- [Resend](https://resend.com)
- [SendGrid](https://sendgrid.com)
- [Discord Webhook](https://discord.com/developers/docs/resources/webhook)

## 🌐 Deployment

Deploy on [Vercel](https://vercel.com) with one click:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

## 📄 License

MIT License - feel free to use this for your own portfolio!
