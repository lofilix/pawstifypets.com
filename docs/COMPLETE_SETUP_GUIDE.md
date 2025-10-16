# Complete Setup Guide: Git + GitHub + Vercel

## Prerequisites Check

Before we start, we need to install Git on your Windows system.

## Step 1: Install Git for Windows

### Download and Install Git:
1. **Go to**: https://git-scm.com/download/win
2. **Download** the latest version for Windows
3. **Run the installer** with these recommended settings:
   - ✅ **Use Git from the command line and also from 3rd-party software**
   - ✅ **Use the OpenSSL library**
   - ✅ **Checkout Windows-style, commit Unix-style line endings**
   - ✅ **Use Windows' default console window**
   - ✅ **Enable file system caching**

4. **Complete installation** and restart your terminal/PowerShell

### Verify Installation:
```bash
git --version
```
Should show: `git version 2.x.x`

## Step 2: Configure Git (First Time Setup)

### Set up your identity:
```bash
# Replace with your actual name and email
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"

# Verify configuration
git config --list
```

## Step 3: Create GitHub Account

1. **Go to**: https://github.com
2. **Sign up** with your email
3. **Verify your email** address
4. **Complete profile setup**

## Step 4: Create GitHub Repository

### In GitHub Dashboard:
1. **Click "+" → "New repository"**
2. **Repository name**: `pawstifyweb`
3. **Description**: `Pawstify Pet Health Management - Landing Page & Beta Signup`
4. **Visibility**: Public (recommended)
5. **DO NOT** initialize with README, .gitignore, or license
6. **Click "Create repository"**

## Step 5: Initialize Local Git Repository

### In your project directory (C:\Projects\pawstifyweb):

```bash
# Initialize git repository
git init

# Add all files to staging
git add .

# Create initial commit
git commit -m "Initial commit: Pawstify landing page with animations and Supabase integration"

# Add remote origin (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/pawstifyweb.git

# Set main branch
git branch -M main

# Push to GitHub
git push -u origin main
```

## Step 6: Create Professional README

### Create `README.md` in your project root:

```markdown
# 🐾 Pawstify - Pet Health Management

A modern, responsive landing page for Pawstify, a pet health management application that helps pet owners track vaccinations, prescriptions, and health reminders.

## ✨ Features

- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Modern Animations**: Lightweight, performance-optimized animations
- **Contact Forms**: Supabase-powered contact and signup forms
- **SEO Optimized**: Complete meta tags, structured data, and sitemap
- **Accessibility**: WCAG 2.1 AA compliant design
- **Performance**: Optimized for Core Web Vitals

## 🚀 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Database**: Supabase
- **Deployment**: Vercel
- **Language**: TypeScript

## 🛠 Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Run linting
npm run lint
```

## 📱 Live Demo

Visit: [https://pawstifypets.com](https://pawstifypets.com)

## 📄 License

This project is private and proprietary to Pawstify.
```

## Step 7: Push README to GitHub

```bash
# Add README to staging
git add README.md

# Commit the README
git commit -m "Add professional README documentation"

# Push to GitHub
git push origin main
```

## Step 8: Connect to Vercel

### In Vercel Dashboard:
1. **Click "New Project"**
2. **Import from GitHub**
3. **Select** `pawstifyweb` repository
4. **Framework**: Next.js (auto-detected)
5. **Click "Deploy"**

## Step 9: Configure Environment Variables

### In Vercel Project Settings:
1. **Go to Settings → Environment Variables**
2. **Add these variables for Production:**

```
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key
NEXT_PUBLIC_SITE_URL=https://pawstifypets.com
```

3. **Redeploy** the project

## Step 10: Set Up Custom Domain

### In Vercel Project Settings:
1. **Go to Settings → Domains**
2. **Add Domain**: `pawstifypets.com`
3. **Configure DNS** (if you own the domain)
4. **Enable HTTPS** (automatic)

## Troubleshooting

### Git Issues:
**"git is not recognized"**
- Restart your terminal after Git installation
- Check Git is in your PATH

**"Authentication failed"**
- Use Personal Access Token instead of password
- Or use GitHub CLI: `gh auth login`

### GitHub Issues:
**"Repository not found"**
- Check repository name and username
- Verify repository exists and is accessible

**"Push rejected"**
- Check if repository is empty
- Use `git push -f origin main` (force push) if needed

### Vercel Issues:
**"Build failed"**
- Check environment variables are set
- Verify all dependencies are in package.json
- Check build logs in Vercel dashboard

## Success Checklist

- [ ] Git installed and configured
- [ ] GitHub account created
- [ ] Repository created on GitHub
- [ ] Code pushed to GitHub
- [ ] README.md added
- [ ] Vercel project connected
- [ ] Environment variables configured
- [ ] Custom domain set up
- [ ] Site is live and accessible

## Next Steps After Setup

1. **Test all functionality** on live site
2. **Set up Google Analytics**
3. **Configure monitoring and alerts**
4. **Plan marketing launch strategy**

---

**Repository**: https://github.com/YOUR_USERNAME/pawstifyweb
**Live Site**: https://pawstifypets.com
