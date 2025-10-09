# Teamwork Safe Operations Limited - Website

A modern, production-ready marketing website for **Teamwork Safe Operations Limited**, a leading provider of construction, project management, renewable energy, and equipment services in Nigeria.

## 🎨 Brand Identity

### Color Palette

```
Primary:  #2C4175 - Headings, key UI accents
Accent:   #B69A6F - Buttons, highlights
Text:     #2C2825 - Body text
Surface:  #FFFFFF - Card backgrounds
BG:       #EFEFEF - Alternate sections
Muted:    #A9BAC6 - Secondary text
Border:   #E3E3E3 - Dividers
```

### Typography

- **Body**: Inter (Google Fonts)
- **Headings**: Plus Jakarta Sans (Google Fonts)
- **Base Size**: 16px
- **Scale**: 1.125
- **Line Heights**: Headings 1.2, Body 1.65

### Spacing Rhythm

12px, 16px, 24px, 32px, 48px, 64px

## 🚀 Tech Stack

- **Next.js 14** with App Router
- **TypeScript**
- **Tailwind CSS** for styling
- **shadcn/ui** for UI components
- **Framer Motion** for animations
- **Lucide React** for icons
- **React Hook Form** + **Zod** for form validation
- **@vercel/analytics** and **@vercel/speed-insights**

## 📁 Project Structure

```
teamwork-safe-operations/
├── app/                    # Next.js 14 App Router pages
│   ├── about/
│   ├── services/
│   ├── projects/
│   ├── equipment/
│   ├── hse/
│   ├── clients/
│   ├── careers/
│   ├── blog/
│   ├── contact/
│   └── staff-login/
├── components/
│   ├── home/              # Home page sections
│   ├── layout/            # Header and Footer
│   ├── shared/            # Reusable components
│   └── ui/                # shadcn/ui components
├── data/                  # JSON data files
│   ├── services.json
│   ├── projects.json
│   ├── equipment.json
│   ├── testimonials.json
│   ├── clients.json
│   └── jobs.json
└── public/                # Static assets
```

## 🛠 Setup Instructions

1. **Clone the repository**

```bash
git clone <repository-url>
cd teamwork-safe-operations
```

2. **Install dependencies**

```bash
npm install
```

3. **Run development server**

```bash
npm run dev
```

The site will be available at `http://localhost:3000`

4. **Build for production**

```bash
npm run build
npm start
```

## 📷 Adding Images

Replace placeholder images in the `public/images/` directory:

### Required Image Directories

- `public/images/hero-construction.jpg` - Homepage hero background
- `public/images/services/` - Service page images
- `public/images/projects/` - Project images and galleries
- `public/images/equipment/` - Equipment catalogue photos
- `public/images/team/` - Leadership team photos
- `public/images/clients/` - Client logos
- `public/images/testimonials/` - Client testimonial photos
- `public/images/blog/` - Blog post featured images

### Image Specifications

- **Hero Images**: 1920x1080px minimum
- **Service Cards**: 800x600px
- **Project Images**: 1200x800px
- **Equipment Photos**: 800x600px
- **Logos**: SVG or PNG with transparent background
- **Team Photos**: 500x500px (square)

## 🎯 Features

### Implemented

- ✅ Responsive design (mobile-first)
- ✅ Sticky header with mega menu
- ✅ Smooth animations with Framer Motion
- ✅ Form validation with React Hook Form + Zod
- ✅ SEO optimization with metadata
- ✅ Sitemap and robots.txt
- ✅ Equipment catalogue with filtering
- ✅ Project showcase with case studies
- ✅ Job listings with filters
- ✅ Blog layout
- ✅ Contact forms
- ✅ HSE policy pages
- ✅ Client testimonials carousel
- ✅ Analytics integration ready

### To Customize

- Update contact information in `data/` files
- Replace placeholder images
- Configure analytics tracking IDs
- Add real API endpoints for form submissions
- Implement authentication for staff login
- Add actual blog posts (currently placeholder)

## 🔧 Configuration

### Tailwind Theme

Custom theme is configured in `tailwind.config.ts`:
- Brand colors
- Custom fonts
- Spacing scale
- Line heights

### Metadata & SEO

Global metadata in `app/layout.tsx`. Page-specific metadata in each page component.

## 📱 Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px
- Max container: 1200px

## ♿ Accessibility

- AA contrast ratios on all text
- Focus visible indicators
- ARIA labels on interactive elements
- Keyboard navigation support
- Semantic HTML

## 🚢 Deployment

### Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

### Other Platforms

1. Build the project: `npm run build`
2. Deploy the `.next` folder and `package.json`
3. Set Node.js version to 18+

## 📞 Support

For questions about the website codebase, please contact the development team.

## 📄 License

© 2024 Teamwork Safe Operations Limited. All rights reserved.

---

**Built with ❤️ for Teamwork Safe Operations Limited**
