#!/usr/bin/env node

/**
 * Bundle Size Analyzer Script
 * 
 * This script analyzes the production build bundle size and generates a report
 * to help identify large dependencies and optimize the bundle size.
 * 
 * Usage: node scripts/analyze-bundle.js
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { exec } from 'child_process';
import { promisify } from 'util';

// Get current directory name in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const execAsync = promisify(exec);

// Configuration
const DIST_DIR = path.join(__dirname, '../dist');
const REPORT_DIR = path.join(__dirname, '../bundle-reports');
const SIZE_UNITS = ['B', 'KB', 'MB', 'GB'];

// Create report directory if it doesn't exist
if (!fs.existsSync(REPORT_DIR)) {
  fs.mkdirSync(REPORT_DIR, { recursive: true });
}

/**
 * Format file size with appropriate unit
 */
function formatSize(bytes) {
  if (bytes === 0) return '0 B';
  
  const i = Math.floor(Math.log(bytes) / Math.log(1024));
  return `${parseFloat((bytes / Math.pow(1024, i)).toFixed(2))} ${SIZE_UNITS[i]}`;
}

/**
 * Analyze bundle size
 */
async function analyzeBundleSize() {
  // Check if dist directory exists
  if (!fs.existsSync(DIST_DIR)) {
    console.error('❌ Error: Build directory (dist) not found.');
    console.log('Please run the build command first: npm run build');
    process.exit(1);
  }
  
  console.log('📊 Analyzing bundle size...');
  
  // Get all JS and CSS files in the dist directory (recursive)
  const files = [];
  
  function scanDirectory(dir, baseDir = '') {
    const items = fs.readdirSync(dir);
    
    items.forEach(item => {
      const itemPath = path.join(dir, item);
      const relativePath = path.join(baseDir, item);
      const stat = fs.statSync(itemPath);
      
      if (stat.isDirectory()) {
        scanDirectory(itemPath, relativePath);
      } else if (/\.(js|css)$/.test(item)) {
        const size = stat.size;
        const type = path.extname(item).substring(1).toUpperCase();
        
        files.push({
          path: relativePath,
          size,
          formattedSize: formatSize(size),
          type
        });
      }
    });
  }
  
  scanDirectory(DIST_DIR);
  
  // Sort files by size (descending)
  files.sort((a, b) => b.size - a.size);
  
  // Calculate total size
  const totalSize = files.reduce((sum, file) => sum + file.size, 0);
  const totalJsSize = files
    .filter(file => file.type === 'JS')
    .reduce((sum, file) => sum + file.size, 0);
  const totalCssSize = files
    .filter(file => file.type === 'CSS')
    .reduce((sum, file) => sum + file.size, 0);
  
  // Generate report
  const timestamp = new Date().toISOString().replace(/:/g, '-').split('.')[0];
  const reportPath = path.join(REPORT_DIR, `bundle-report-${timestamp}.json`);
  const htmlReportPath = path.join(REPORT_DIR, `bundle-report-${timestamp}.html`);
  
  const report = {
    timestamp,
    totalSize,
    totalSizeFormatted: formatSize(totalSize),
    totalJsSize,
    totalJsSizeFormatted: formatSize(totalJsSize),
    totalCssSize,
    totalCssSizeFormatted: formatSize(totalCssSize),
    files
  };
  
  // Save JSON report
  fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
  
  // Generate HTML report
  const htmlReport = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Bundle Size Report - ${timestamp}</title>
  <style>
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
      line-height: 1.6;
      color: #333;
      max-width: 1200px;
      margin: 0 auto;
      padding: 20px;
    }
    h1 {
      color: #2563eb;
      border-bottom: 2px solid #e5e7eb;
      padding-bottom: 10px;
    }
    .summary {
      display: flex;
      gap: 20px;
      margin-bottom: 30px;
    }
    .summary-card {
      background-color: #f9fafb;
      border-radius: 8px;
      padding: 15px;
      flex: 1;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
    }
    .summary-card h3 {
      margin-top: 0;
      color: #4b5563;
    }
    .summary-card .size {
      font-size: 24px;
      font-weight: bold;
      color: #2563eb;
    }
    table {
      width: 100%;
      border-collapse: collapse;
    }
    th, td {
      padding: 12px 15px;
      text-align: left;
      border-bottom: 1px solid #e5e7eb;
    }
    th {
      background-color: #f9fafb;
      font-weight: 600;
    }
    tr:hover {
      background-color: #f9fafb;
    }
    .file-size {
      font-weight: 600;
    }
    .file-type {
      display: inline-block;
      padding: 2px 8px;
      border-radius: 4px;
      font-size: 12px;
      font-weight: 600;
    }
    .file-type.js {
      background-color: #dbeafe;
      color: #1e40af;
    }
    .file-type.css {
      background-color: #dcfce7;
      color: #166534;
    }
    .recommendations {
      margin-top: 40px;
      padding: 20px;
      background-color: #f0f9ff;
      border-radius: 8px;
      border-left: 4px solid #3b82f6;
    }
  </style>
</head>
<body>
  <h1>Bundle Size Report</h1>
  <p>Generated on: ${new Date().toLocaleString()}</p>
  
  <div class="summary">
    <div class="summary-card">
      <h3>Total Bundle Size</h3>
      <div class="size">${formatSize(totalSize)}</div>
    </div>
    <div class="summary-card">
      <h3>JavaScript Size</h3>
      <div class="size">${formatSize(totalJsSize)}</div>
    </div>
    <div class="summary-card">
      <h3>CSS Size</h3>
      <div class="size">${formatSize(totalCssSize)}</div>
    </div>
  </div>
  
  <h2>Files by Size</h2>
  <table>
    <thead>
      <tr>
        <th>File</th>
        <th>Type</th>
        <th>Size</th>
      </tr>
    </thead>
    <tbody>
      ${files.map(file => `
        <tr>
          <td>${file.path}</td>
          <td><span class="file-type ${file.type.toLowerCase()}">${file.type}</span></td>
          <td class="file-size">${file.formattedSize}</td>
        </tr>
      `).join('')}
    </tbody>
  </table>
  
  <div class="recommendations">
    <h2>Optimization Recommendations</h2>
    <ul>
      <li>Consider code splitting for large JavaScript bundles</li>
      <li>Use dynamic imports for non-critical components</li>
      <li>Analyze and remove unused dependencies</li>
      <li>Enable tree shaking for all dependencies</li>
      <li>Optimize images and consider using WebP format</li>
      <li>Minify CSS and JavaScript files</li>
    </ul>
  </div>
</body>
</html>
  `;
  
  fs.writeFileSync(htmlReportPath, htmlReport);
  
  // Print summary
  console.log('\n📊 Bundle Size Summary:');
  console.log(`Total Bundle Size: ${formatSize(totalSize)}`);
  console.log(`JavaScript Size: ${formatSize(totalJsSize)}`);
  console.log(`CSS Size: ${formatSize(totalCssSize)}`);
  
  console.log('\n📝 Top 5 Largest Files:');
  files.slice(0, 5).forEach((file, index) => {
    console.log(`${index + 1}. ${file.path} (${file.formattedSize})`);
  });
  
  console.log(`\n✅ Report saved to: ${reportPath}`);
  console.log(`✅ HTML Report saved to: ${htmlReportPath}`);
  
  // Provide recommendations
  console.log('\n🔧 Optimization Recommendations:');
  console.log('- Consider code splitting for large JavaScript bundles');
  console.log('- Use dynamic imports for non-critical components');
  console.log('- Analyze and remove unused dependencies');
  console.log('- Enable tree shaking for all dependencies');
  console.log('- Optimize images and consider using WebP format');
  console.log('- Minify CSS and JavaScript files');
}

/**
 * Main function
 */
async function main() {
  console.log('📦 Bundle Size Analyzer');
  console.log('======================');
  
  try {
    await analyzeBundleSize();
  } catch (error) {
    console.error('❌ Error analyzing bundle size:', error);
    process.exit(1);
  }
}

main();
