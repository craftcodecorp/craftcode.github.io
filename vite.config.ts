import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import { execSync } from "child_process";

// Get repository name for GitHub Pages base path
function getRepoName() {
  try {
    // Try to get the repository name from git remote URL
    const remoteUrl = execSync('git config --get remote.origin.url').toString().trim();
    const match = remoteUrl.match(/([\w-]+)(\.git)?$/i);
    return match ? match[1] : 'craftcode-digital-hub';
  } catch (e) {
    // Default to repository name if git command fails
    return 'craftcode-digital-hub';
  }
}

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  // Set base path for GitHub Pages deployment
  base: mode === 'production' ? `/${getRepoName()}/` : '/',
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
