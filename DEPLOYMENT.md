# GitHub Pages Deployment Guide

This guide will help you deploy the Sanad Institute website to GitHub Pages in a shared organization.

## Prerequisites

- GitHub account with access to the organization
- Repository created in the organization
- Admin access to the repository (for GitHub Pages settings)

## Step-by-Step Deployment

### 1. Repository Setup

1. **Create a new repository** in your organization:
   - Go to your organization on GitHub
   - Click "New repository"
   - Name it (e.g., `sanad-institute-website`)
   - Make it public (required for free GitHub Pages)
   - Initialize with README (optional)

2. **Clone the repository** to your local machine:
   ```bash
   git clone https://github.com/YOUR_ORG_NAME/YOUR_REPO_NAME.git
   cd YOUR_REPO_NAME
   ```

### 2. Code Setup

1. **Copy all project files** to the repository directory
2. **Update package.json** with your organization details:
   ```json
   {
     "homepage": "https://YOUR_ORG_NAME.github.io/YOUR_REPO_NAME"
   }
   ```

3. **Commit and push** your code:
   ```bash
   git add .
   git commit -m "Initial commit: Sanad Institute website"
   git push origin main
   ```

### 3. GitHub Pages Configuration

1. **Go to repository settings**:
   - Navigate to your repository on GitHub
   - Click on "Settings" tab
   - Scroll down to "Pages" section

2. **Configure GitHub Pages**:
   - Source: "GitHub Actions"
   - This will use the workflow file we created

3. **Enable GitHub Actions** (if not already enabled):
   - Go to "Actions" tab in your repository
   - Click "I understand my workflows, go ahead and enable them"

### 4. Automatic Deployment

The GitHub Actions workflow will automatically:
- Build your Next.js static site
- Deploy it to GitHub Pages
- Trigger on every push to main/master branch

### 5. Access Your Website

Once deployed, your website will be available at:
```
https://YOUR_ORG_NAME.github.io/YOUR_REPO_NAME
```

## Custom Domain (Optional)

If you have a custom domain:

1. **Add CNAME file** to the `public` folder:
   ```
   your-domain.com
   ```

2. **Update GitHub Actions workflow**:
   ```yaml
   with:
     github_token: ${{ secrets.GITHUB_TOKEN }}
     publish_dir: ./out
     cname: your-domain.com
   ```

3. **Configure DNS**:
   - Add CNAME record pointing to `YOUR_ORG_NAME.github.io`

## Manual Deployment (Alternative)

If you prefer manual deployment:

1. **Build the site**:
   ```bash
   npm run build
   ```

2. **Deploy using gh-pages**:
   ```bash
   npm install --save-dev gh-pages
   npm run deploy
   ```

## Troubleshooting

### Common Issues:

1. **404 Error**: Make sure the repository is public
2. **Build Fails**: Check GitHub Actions logs for errors
3. **Styling Issues**: Ensure all assets are properly referenced

### GitHub Actions Logs:

- Go to "Actions" tab in your repository
- Click on the latest workflow run
- Check the logs for any errors

## Organization Benefits

Deploying in a shared organization provides:
- **Centralized Management**: All projects in one place
- **Team Collaboration**: Multiple contributors can manage the site
- **Professional URL**: `orgname.github.io/projectname`
- **Version Control**: Full Git history and collaboration features

## Security Considerations

- Repository must be public for free GitHub Pages
- Consider using organization secrets for sensitive data
- Review GitHub Actions permissions

## Support

For issues with GitHub Pages deployment:
- Check GitHub Pages documentation
- Review GitHub Actions logs
- Contact GitHub support if needed
