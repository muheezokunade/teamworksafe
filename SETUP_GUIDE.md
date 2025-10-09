# Setup Guide - Teamwork Safe Operations Website

## Quick Start

1. **Navigate to the project directory:**
   ```bash
   cd /Users/mac/Documents/Teamworksafeoperations/teamwork-safe-operations
   ```

2. **Install dependencies (already done):**
   ```bash
   npm install
   ```

3. **Run development server:**
   ```bash
   npm run dev
   ```
   
   The site will be available at `http://localhost:3001`

4. **Build for production:**
   ```bash
   npm run build
   npm start
   ```

## Next Steps - Before Going Live

### 1. Add Images

The project is currently using placeholder image paths. You need to add real images to:

```
public/images/
├── hero-construction.jpg (1920x1080px)
├── about-office.jpg (1200x800px)
├── og-image.jpg (1200x630px - for social sharing)
├── services/
│   ├── construction.jpg
│   ├── project-management.jpg
│   ├── renewable-energy.jpg
│   ├── equipment-leasing.jpg
│   ├── maintenance.jpg
│   └── consultation.jpg
├── projects/
│   ├── lekki-plaza.jpg
│   ├── lekki-plaza-1.jpg through lekki-plaza-4.jpg
│   ├── solar-farm.jpg
│   ├── solar-farm-1.jpg through solar-farm-4.jpg
│   └── ... (for all 5 projects)
├── equipment/
│   ├── excavator-320d.jpg
│   ├── jcb-3cx.jpg
│   └── ... (12 equipment images)
├── team/
│   ├── md.jpg
│   ├── operations.jpg
│   └── technical.jpg
├── clients/
│   └── [20 client logo PNG/SVG files]
├── testimonials/
│   └── [6 testimonial photos]
└── blog/
    └── [6 blog post featured images]
```

**Image Optimization Tips:**
- Use JPEG for photos
- Use PNG or SVG for logos
- Compress images before upload (use tools like TinyPNG)
- Keep file sizes under 500KB for photos
- Use descriptive filenames

### 2. Update Configuration

**Environment Variables:**
```bash
cp .env.local.example .env.local
```

Then edit `.env.local` with your actual values:
- Site URL
- Email configuration (for contact forms)
- Analytics IDs (if using)

**Site URL:**
Update `metadataBase` in `app/layout.tsx` if using a different domain.

### 3. Implement Form Submission

The contact forms currently use placeholder logic. You need to:

1. **Option A: Use a form service**
   - FormSpree
   - EmailJS
   - SendGrid

2. **Option B: Implement API routes**
   - Create `/app/api/contact/route.ts`
   - Set up email sending with Nodemailer or Resend
   - Update form components to POST to this endpoint

Example API route structure:
```typescript
// app/api/contact/route.ts
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const data = await request.json();
  
  // Send email logic here
  
  return NextResponse.json({ success: true });
}
```

### 4. Staff Portal Authentication

The staff login page is currently a mockup. To implement:

1. **Use NextAuth.js** (recommended):
   ```bash
   npm install next-auth
   ```

2. Set up authentication providers
3. Create protected routes
4. Build the actual staff dashboard

### 5. Deploy to Production

**Recommended: Vercel**

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

**Alternative: Other platforms**
- Netlify
- AWS Amplify
- Railway
- Your own VPS

**Build command:** `npm run build`
**Start command:** `npm start`
**Node version:** 18.x or higher

### 6. Domain Configuration

1. Purchase domain (if not already done)
2. Update DNS settings
3. Configure SSL certificate
4. Update `NEXT_PUBLIC_SITE_URL` in `.env.local`

### 7. Analytics Setup

The project includes Vercel Analytics and Speed Insights. If deploying to Vercel, these work automatically.

For Google Analytics:
1. Get GA4 tracking ID
2. Add to `.env.local`
3. Configure in `app/layout.tsx`

### 8. SEO Verification

1. **Google Search Console:**
   - Add property
   - Verify ownership
   - Submit sitemap: `https://yoursite.com/sitemap.xml`

2. **Test SEO:**
   - Use Google Rich Results Test
   - Check Open Graph tags with Facebook Debugger
   - Validate structured data

### 9. Performance Optimization

Before launch, run:
```bash
npm run build
```

Then test with Lighthouse:
- Performance should be ≥90
- Accessibility should be ≥90
- Best Practices should be ≥90
- SEO should be 100

### 10. Security Checklist

- [ ] Environment variables secured
- [ ] Form validation implemented
- [ ] Rate limiting on forms
- [ ] HTTPS enabled
- [ ] Security headers configured
- [ ] Dependencies updated

## Features Overview

### Pages Implemented
- ✅ Home (with all sections)
- ✅ About
- ✅ Services (hub + 6 detail pages)
- ✅ Projects (index + 5 case studies)
- ✅ Equipment Catalogue
- ✅ HSE
- ✅ Clients
- ✅ Careers
- ✅ Blog
- ✅ Contact
- ✅ Staff Login (mockup)

### Components Built
- SiteHeader (sticky with mega menu)
- Footer
- Hero
- Service Cards
- Project Cards
- Testimonial Carousel
- Filter Chips
- Contact Forms
- Stat Items
- Logo Strip
- Quote Basket (for equipment)

### Features
- Responsive design (mobile-first)
- Smooth animations (Framer Motion)
- Form validation (React Hook Form + Zod)
- SEO optimized (metadata, sitemap, robots.txt)
- Accessible (ARIA labels, keyboard navigation)
- Analytics ready (Vercel)

## Content Management

All content is stored in JSON files under `/data`:
- `services.json`
- `projects.json`
- `equipment.json`
- `testimonials.json`
- `clients.json`
- `jobs.json`

To add/edit content, simply update these JSON files. The site will automatically reflect changes after rebuild.

## Support

For technical issues with the codebase:
1. Check the README.md
2. Review Next.js 14 documentation
3. Check component comments

## Launch Checklist

Before going live:
- [ ] All images added and optimized
- [ ] Environment variables configured
- [ ] Form submissions tested
- [ ] Contact information verified
- [ ] All links tested
- [ ] Cross-browser testing done
- [ ] Mobile responsiveness verified
- [ ] Lighthouse scores > 90
- [ ] SEO metadata reviewed
- [ ] Analytics configured
- [ ] Domain configured
- [ ] SSL certificate active
- [ ] Backup strategy in place

---

**Project Built:** October 2024  
**Framework:** Next.js 14  
**Status:** Ready for image integration and deployment



