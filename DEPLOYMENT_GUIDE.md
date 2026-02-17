# Deployment Guide for www.ecosuryapower.com

## Prerequisites
- Domain: ecosuryapower.com (registered and accessible)
- Git repository (GitHub/GitLab/Bitbucket recommended)
- Node.js installed locally for building

## Recommended: Deploy with Netlify

### Step 1: Prepare Your Project
```bash
cd frontend
npm install
npm run build
```
This creates a `dist` folder with your production-ready files.

### Step 2: Deploy to Netlify

#### Option A: Deploy via Git (Recommended)
1. Push your code to GitHub/GitLab/Bitbucket
2. Go to https://netlify.com and sign up/login
3. Click "Add new site" → "Import an existing project"
4. Connect your Git repository
5. Configure build settings:
   - **Base directory:** `frontend`
   - **Build command:** `npm run build`
   - **Publish directory:** `frontend/dist`
6. Click "Deploy site"

#### Option B: Manual Deploy (Drag & Drop)
1. Build your project: `npm run build`
2. Go to https://netlify.com
3. Drag the `frontend/dist` folder to Netlify's deploy zone
4. Your site is live!

### Step 3: Buy Domain from Hostinger

1. Go to https://hostinger.com
2. Search for `ecosuryapower.com`
3. **Buy ONLY the domain** (around $0.99 first year, ~$10-12/year renewal)
4. Complete the purchase

### Step 4: Connect Domain to Netlify

1. In Netlify dashboard, go to "Domain settings"
2. Click "Add custom domain"
3. Enter: `ecosuryapower.com`
4. Netlify will show you DNS records to add

### Step 5: Update DNS at Hostinger

1. Login to Hostinger dashboard
2. Go to **Domains** → Click on `ecosuryapower.com` → **DNS / Name Servers**
3. Click **Manage** next to DNS Records
4. Add these records:
   
   ```
   Type: A
   Name: @
   Value: 75.2.60.5
   TTL: 3600
   
   Type: CNAME
   Name: www
   Value: [your-site-name].netlify.app
   TTL: 3600
   ```
   
   (Replace `[your-site-name]` with your actual Netlify site name)

5. **Delete any existing A or CNAME records** for @ and www if they exist
6. Save changes

### Step 6: Wait for DNS Propagation

- Usually takes 15 minutes to 2 hours
- Can take up to 24-48 hours in rare cases
- Check status at: https://dnschecker.org
- Netlify automatically provisions FREE SSL certificate (HTTPS)

---

## Alternative: Deploy with Vercel

### Step 1: Deploy to Vercel
1. Go to https://vercel.com and sign up/login
2. Click "Add New" → "Project"
3. Import your Git repository
4. Vercel auto-detects settings:
   - **Root Directory:** `frontend`
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
5. Click "Deploy"

### Step 2: Add Custom Domain
1. Go to Project Settings → Domains
2. Add `ecosuryapower.com` and `www.ecosuryapower.com`
3. Update DNS records at your domain registrar as instructed by Vercel

---

## Alternative: Traditional Hosting (cPanel/Shared Hosting)

### Step 1: Build Your Project
```bash
cd frontend
npm install
npm run build
```

### Step 2: Upload Files
1. The build creates a `frontend/dist` folder
2. Connect to your hosting via FTP (FileZilla) or use cPanel File Manager
3. Upload ALL contents of `frontend/dist` to your `public_html` folder
4. Make sure `index.html` is in the root of `public_html`

### Step 3: Configure .htaccess for React Router
Create a `.htaccess` file in `public_html`:

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteCond %{REQUEST_FILENAME} !-l
  RewriteRule . /index.html [L]
</IfModule>
```

### Step 4: Point Domain
1. In your domain registrar, update DNS:
   ```
   Type: A
   Name: @
   Value: [Your hosting IP address]
   
   Type: CNAME
   Name: www
   Value: ecosuryapower.com
   ```
2. Wait for DNS propagation

---

## Post-Deployment Checklist

- [ ] Website loads at ecosuryapower.com
- [ ] Website loads at www.ecosuryapower.com
- [ ] HTTPS is working (SSL certificate)
- [ ] All pages are accessible (test navigation)
- [ ] Contact form works
- [ ] Phone numbers are clickable on mobile
- [ ] Images load correctly
- [ ] Check on mobile devices
- [ ] Test in different browsers

---

## Continuous Deployment (Recommended)

Once set up with Netlify or Vercel:
- Every push to your main branch automatically deploys
- Preview deployments for pull requests
- Rollback to previous versions easily

---

## Troubleshooting

### Issue: 404 errors on page refresh
**Solution:** Ensure your hosting has proper redirect rules (see .htaccess above for traditional hosting)

### Issue: Images not loading
**Solution:** Check that all image paths are correct and images are in the `public` folder

### Issue: DNS not propagating
**Solution:** Wait 24-48 hours, or use https://dnschecker.org to check propagation status

### Issue: SSL certificate not working
**Solution:** Netlify/Vercel handle this automatically. For traditional hosting, contact your hosting provider.

---

## Need Help?

- Netlify Docs: https://docs.netlify.com
- Vercel Docs: https://vercel.com/docs
- Contact your hosting provider for traditional hosting support
