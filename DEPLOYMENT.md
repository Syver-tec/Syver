# Deployment Guide - Syver Website

This guide provides step-by-step instructions for deploying the Syver website to various hosting platforms.

## 🚀 Quick Start - Vercel (Recommended)

### Prerequisites
- Node.js installed (version 14 or higher)
- Git repository with your code

### Step 1: Install Vercel CLI
```bash
npm install -g vercel
```

### Step 2: Login to Vercel
```bash
vercel login
```

### Step 3: Deploy
```bash
vercel
```

### Step 4: Follow Prompts
- Link to existing project or create new
- Set project name (e.g., "syver-website")
- Confirm deployment settings

### Step 5: Production Deployment
```bash
vercel --prod
```

Your site will be available at: `https://your-project-name.vercel.app`

## 🌐 Alternative Deployment Options

### GitHub Pages

#### Method 1: GitHub Actions (Recommended)
1. **Create GitHub Repository**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/username/syver-website.git
   git push -u origin main
   ```

2. **Enable GitHub Pages**
   - Go to repository Settings
   - Navigate to Pages section
   - Select source: "Deploy from a branch"
   - Choose branch: `main`
   - Select folder: `/ (root)`

3. **Your site will be available at**: `https://username.github.io/syver-website`

#### Method 2: Manual Upload
1. **Create Repository** on GitHub
2. **Upload Files** via web interface
3. **Enable Pages** in Settings
4. **Wait for deployment** (usually 1-2 minutes)

### Netlify

#### Method 1: Drag & Drop
1. **Go to** [netlify.com](https://netlify.com)
2. **Sign up/Login**
3. **Drag** your project folder to the deploy area
4. **Wait** for deployment
5. **Your site** will be available immediately

#### Method 2: Git Integration
1. **Connect** your GitHub repository
2. **Configure** build settings:
   - Build command: (leave empty)
   - Publish directory: `/`
3. **Deploy** automatically on push

### Traditional Web Hosting

#### cPanel Hosting
1. **Upload Files** via File Manager or FTP
2. **Ensure** `index.html` is in the root directory
3. **Set Permissions** (644 for files, 755 for directories)
4. **Configure** domain to point to hosting

#### FTP Upload
```bash
# Using command line FTP
ftp your-server.com
# Enter credentials
put index.html
put -r css/
put -r js/
put -r assets/
quit
```

## 🔧 Configuration Files

### Vercel Configuration (`vercel.json`)
```json
{
  "version": 2,
  "name": "syver-website",
  "builds": [
    {
      "src": "**/*",
      "use": "@vercel/static"
    }
  ]
}
```

### Custom Domain Setup

#### Vercel
1. **Add Domain** in Vercel dashboard
2. **Update DNS** records:
   - Type: CNAME
   - Name: www
   - Value: cname.vercel-dns.com
3. **Wait** for DNS propagation (up to 24 hours)

#### GitHub Pages
1. **Add Custom Domain** in repository settings
2. **Create CNAME file** in root with your domain
3. **Update DNS** records to point to GitHub Pages

#### Netlify
1. **Add Custom Domain** in site settings
2. **Update DNS** records to Netlify's nameservers
3. **Verify** domain ownership

## 📊 Performance Optimization

### Before Deployment
1. **Optimize Images**
   ```bash
   # Install image optimization tools
   npm install -g imagemin-cli
   
   # Optimize images
   imagemin assets/img/* --out-dir=assets/img/optimized
   ```

2. **Minify CSS/JS** (optional)
   ```bash
   # Install minification tools
   npm install -g clean-css-cli uglify-js
   
   # Minify CSS
   cleancss -o css/style.min.css css/style.css
   
   # Minify JS
   uglifyjs js/script.js -o js/script.min.js
   ```

3. **Update HTML** to use minified files
   ```html
   <link rel="stylesheet" href="css/style.min.css">
   <script src="js/script.min.js"></script>
   ```

### Post-Deployment
1. **Test Performance** with tools like:
   - Google PageSpeed Insights
   - GTmetrix
   - WebPageTest

2. **Enable Compression** (if supported by hosting)
3. **Set Cache Headers** for static assets
4. **Monitor** site performance

## 🔍 SEO & Analytics

### Google Analytics
1. **Create** Google Analytics account
2. **Add** tracking code to `index.html`:
   ```html
   <!-- Google Analytics -->
   <script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
   <script>
     window.dataLayer = window.dataLayer || [];
     function gtag(){dataLayer.push(arguments);}
     gtag('js', new Date());
     gtag('config', 'GA_MEASUREMENT_ID');
   </script>
   ```

### Search Console
1. **Add** site to Google Search Console
2. **Verify** ownership
3. **Submit** sitemap (if created)

### Meta Tags
Ensure these are in your `index.html`:
```html
<meta name="description" content="Syver - Professional IT services including web development, IT support, infrastructure maintenance, and process automation.">
<meta name="keywords" content="IT services, web development, IT support, automation, technology solutions">
<meta name="author" content="Syver">
<meta property="og:title" content="Syver - Technology Solutions & IT Services">
<meta property="og:description" content="Professional IT services for modern businesses">
<meta property="og:image" content="https://syver.com/assets/img/og-image.jpg">
```

## 🛠️ Troubleshooting

### Common Issues

#### 404 Errors
- **Check** file paths are correct
- **Verify** `index.html` is in root directory
- **Ensure** case sensitivity matches

#### Styling Issues
- **Clear** browser cache
- **Check** CSS file paths
- **Verify** CSS syntax

#### JavaScript Errors
- **Open** browser developer tools
- **Check** console for errors
- **Verify** file paths in HTML

#### Mobile Issues
- **Test** on actual devices
- **Check** viewport meta tag
- **Verify** responsive CSS

### Debug Mode
Enable debug mode in browser console:
```javascript
localStorage.setItem('debug', 'true');
location.reload();
```

## 📞 Support

### Deployment Issues
- **Vercel**: Check [Vercel documentation](https://vercel.com/docs)
- **GitHub Pages**: Check [GitHub Pages docs](https://pages.github.com)
- **Netlify**: Check [Netlify documentation](https://docs.netlify.com)

### Performance Issues
- **PageSpeed Insights**: [pagespeed.web.dev](https://pagespeed.web.dev)
- **GTmetrix**: [gtmetrix.com](https://gtmetrix.com)
- **WebPageTest**: [webpagetest.org](https://webpagetest.org)

---

**Need Help?** Contact the Syver team at hello@syver.com

*Last updated: January 2025* 