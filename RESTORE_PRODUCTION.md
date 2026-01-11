# How to Restore Production Version from Vercel

## Method 1: Download from Vercel Dashboard (Easiest)

1. Go to: https://vercel.com/dashboard
2. Find your project: `prestil-energy`
3. Find the deployment: `8YCJEH8aa` (deployed 2 days ago)
4. Click the "..." menu on that deployment
5. Select "Download Deployment"
6. Extract the ZIP file
7. Copy the files from the extracted folder to this project

## Method 2: Use Vercel CLI

```bash
# Install Vercel CLI if not installed
npm install -g vercel

# Login to Vercel
vercel login

# Link to your project
vercel link

# Download the specific deployment
vercel pull --yes --environment=production
```

## Method 3: Clone from GitHub (if production matches a specific commit)

If you know which commit matches production, you can:

```bash
# Check all commits
git log --oneline --all

# Checkout a specific commit
git checkout <commit-hash>

# Or checkout a branch
git checkout origin/update-addresses-footer-contact
```

## Current Status

- Currently on branch: `restore-production-version`
- Based on commit: `f37c338` (from `update-addresses-footer-contact` branch)
- This branch has:
  - Multiple contact addresses (India, UK, Ukraine)
  - Multiple email addresses
  - Phone numbers
  - More detailed footer

## Next Steps

1. Download the production files from Vercel (Method 1)
2. Compare the files with what's in this repo
3. Replace files that don't match
4. Commit the restored version
