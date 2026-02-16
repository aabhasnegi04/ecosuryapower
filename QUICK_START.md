# Quick Start - Deploy to www.ecosuryapower.com

## Fastest Way to Deploy (5 minutes)

### Using Netlify (Recommended)

1. **Test build locally:**
   ```bash
   # On Windows
   deploy.bat
   
   # On Mac/Linux
   chmod +x deploy.sh
   ./deploy.sh
   ```

2. **Push to GitHub:**
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

3. **Deploy on Netlify:**
   - Go to https://app.netlify.com/signup
   - Click "Add new site" → "Import an existing project"
   - Choose GitHub and select your repository
   - Settings will auto-fill:
     - Base directory: `frontend`
     - Build command: `npm run build`
     - Publish directory: `frontend/dist`
   - Click "Deploy site"

4. **Add your domain:**
   - In Netlify, go to "Domain settings"
   - Click "Add custom domain"
   - Enter: `ecosuryapower.com`
   - Follow DNS instructions provided

5. **Update DNS at your domain registrar:**
   - Add the DNS records shown by Netlify
   - Wait 10-30 minutes for propagation
   - Done! Your site will be live at www.ecosuryapower.com

---

## Alternative: Manual Upload (Traditional Hosting)

1. **Build the project:**
   ```bash
   cd frontend
   npm install
   npm run build
   ```

2. **Upload files:**
   - Open FileZilla or your hosting's File Manager
   - Upload ALL files from `frontend/dist` to `public_html`
   - Make sure `.htaccess` is also uploaded

3. **Point your domain:**
   - In your domain registrar, set DNS:
     - A Record: @ → Your hosting IP
     - CNAME: www → ecosuryapower.com

---

## Files Created for Deployment

✅ `netlify.toml` - Netlify configuration
✅ `vercel.json` - Vercel configuration  
✅ `frontend/public/.htaccess` - Traditional hosting config
✅ `DEPLOYMENT_GUIDE.md` - Detailed instructions
✅ Updated sitemap.xml with new domain
✅ Updated robots.txt with new domain
✅ Updated all SEO URLs to www.ecosuryapower.com

---

## Need Help?

See `DEPLOYMENT_GUIDE.md` for detailed step-by-step instructions.
