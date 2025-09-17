// Utility function to get the correct image path for different environments
export const getImagePath = (path: string): string => {
  // Check if we're in production build (GitHub Pages)
  if (typeof window !== 'undefined') {
    // Client-side: check if we're on GitHub Pages
    const isGitHubPages = window.location.hostname === 'iscj-web.github.io';
    return isGitHubPages ? `/sanad-website${path}` : path;
  }
  
  // Server-side: check NODE_ENV
  return process.env.NODE_ENV === 'production' ? `/sanad-website${path}` : path;
};
