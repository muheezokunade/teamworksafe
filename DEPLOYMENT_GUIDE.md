# Netlify Deployment Guide

## 🚀 Deploy Teamwork Safe Operations to Netlify

### Method 1: Connect GitHub Repository (Recommended)

1. **Go to Netlify Dashboard**
   - Visit [netlify.com](https://netlify.com)
   - Sign in to your account

2. **Create New Site from Git**
   - Click "New site from Git"
   - Choose "GitHub" as your Git provider
   - Authorize Netlify to access your GitHub account

3. **Select Repository**
   - Find and select `muheezokunade/teamworksafe`
   - Click "Deploy site"

4. **Configure Build Settings**
   - **Build command**: `npm run build`
   - **Publish directory**: `.next`
   - **Node version**: 18

5. **Environment Variables** (Optional)
   - Go to Site settings → Environment variables
   - Add any required environment variables

### Method 2: Manual Deploy

1. **Build the Project Locally**
   ```bash
   npm install
   npm run build
   ```

2. **Deploy to Netlify**
   - Go to Netlify Dashboard
   - Drag and drop the `.next` folder
   - Or use Netlify CLI: `netlify deploy --prod --dir=.next`

### 🔧 Configuration Files Added

- **netlify.toml**: Build configuration and headers
- **_redirects**: SPA routing support
- **@netlify/plugin-nextjs**: Next.js optimization plugin

### 🌐 Custom Domain Setup

1. **Add Custom Domain**
   - Go to Site settings → Domain management
   - Add your custom domain (e.g., teamworksafeoperations.com)

2. **DNS Configuration**
   - Add CNAME record pointing to your Netlify site
   - Or use Netlify DNS nameservers

3. **SSL Certificate**
   - Netlify automatically provides SSL certificates
   - Force HTTPS redirect in site settings

### 📊 Post-Deployment Checklist

- [ ] Site loads correctly
- [ ] All images display properly
- [ ] Navigation works on all pages
- [ ] Contact forms are functional
- [ ] Mobile responsiveness verified
- [ ] SEO metadata is working
- [ ] Analytics tracking active
- [ ] Custom domain configured
- [ ] SSL certificate active

### 🔍 Troubleshooting

**Build Failures:**
- Check Node.js version (should be 18)
- Verify all dependencies are in package.json
- Check build logs in Netlify dashboard

**Image Loading Issues:**
- Verify image paths in public folder
- Check Next.js image optimization settings
- Ensure proper file permissions

**Routing Issues:**
- Verify _redirects file is present
- Check netlify.toml configuration
- Test SPA routing functionality

### 📈 Performance Optimization

- Images are automatically optimized by Next.js
- Static assets are cached with proper headers
- CDN distribution through Netlify Edge Network
- Automatic compression and minification

### 🔒 Security Features

- Security headers configured in netlify.toml
- HTTPS enforcement
- XSS protection
- Content type validation
- Frame options protection

---

**Repository**: https://github.com/muheezokunade/teamworksafe.git  
**Netlify Site**: Will be available at `https://[random-name].netlify.app`

For support, check the [Netlify Documentation](https://docs.netlify.com/) or contact the development team.
