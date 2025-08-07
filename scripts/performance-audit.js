#!/usr/bin/env node

/**
 * Performance Audit Script
 * 
 * This script runs a Lighthouse audit on the local development server
 * and generates a report with performance metrics and suggestions.
 * 
 * Usage: node scripts/performance-audit.js
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import lighthouse from 'lighthouse';
import chromeLauncher from 'chrome-launcher';
import { exec } from 'child_process';
import { promisify } from 'util';

// Get current directory name in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuration
const URL = 'http://localhost:5173'; // Default Vite dev server URL
const OUTPUT_DIR = path.join(__dirname, '../performance-reports');
const execAsync = promisify(exec);

// Create output directory if it doesn't exist
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

/**
 * Run Lighthouse audit
 */
async function runLighthouse() {
  console.log('🚀 Starting Chrome...');
  const chrome = await chromeLauncher.launch({ chromeFlags: ['--headless'] });
  
  const options = {
    logLevel: 'info',
    output: 'html',
    onlyCategories: ['performance', 'accessibility', 'best-practices', 'seo'],
    port: chrome.port,
  };
  
  console.log(`🔍 Running Lighthouse audit on ${URL}...`);
  const runnerResult = await lighthouse(URL, options);
  
  // Generate report
  const reportHtml = runnerResult.report;
  const timestamp = new Date().toISOString().replace(/:/g, '-').split('.')[0];
  const reportPath = path.join(OUTPUT_DIR, `lighthouse-report-${timestamp}.html`);
  
  fs.writeFileSync(reportPath, reportHtml);
  
  console.log(`\n✅ Report saved to: ${reportPath}`);
  
  // Log performance metrics
  const { performance, accessibility, 'best-practices': bestPractices, seo } = runnerResult.lhr.categories;
  
  console.log('\n📊 Performance Metrics:');
  console.log(`Performance: ${Math.round(performance.score * 100)}/100`);
  console.log(`Accessibility: ${Math.round(accessibility.score * 100)}/100`);
  console.log(`Best Practices: ${Math.round(bestPractices.score * 100)}/100`);
  console.log(`SEO: ${Math.round(seo.score * 100)}/100`);
  
  // Log Core Web Vitals
  const { metrics } = runnerResult.lhr.audits;
  
  console.log('\n⚡ Core Web Vitals:');
  console.log(`LCP (Largest Contentful Paint): ${metrics.details.items[0].largestContentfulPaint} ms`);
  console.log(`FID/TBT (Total Blocking Time): ${metrics.details.items[0].totalBlockingTime} ms`);
  console.log(`CLS (Cumulative Layout Shift): ${metrics.details.items[0].cumulativeLayoutShift}`);
  
  // Log opportunities for improvement
  console.log('\n🔧 Top Opportunities:');
  const opportunities = Object.values(runnerResult.lhr.audits)
    .filter(audit => audit.details && audit.details.type === 'opportunity' && audit.score < 1)
    .sort((a, b) => (b.numericValue || 0) - (a.numericValue || 0))
    .slice(0, 5);
  
  opportunities.forEach(opportunity => {
    console.log(`- ${opportunity.title}: ${opportunity.displayValue || 'No value'}`);
  });
  
  await chrome.kill();
}

/**
 * Check if dev server is running
 */
async function checkDevServer() {
  try {
    const { stdout } = await execAsync('lsof -i:5173 -t');
    return stdout.trim() !== '';
  } catch (error) {
    return false;
  }
}

/**
 * Main function
 */
async function main() {
  console.log('🔍 Performance Audit Tool');
  console.log('========================');
  
  // Check if dev server is running
  const isServerRunning = await checkDevServer();
  
  if (!isServerRunning) {
    console.error('❌ Error: Development server is not running on port 5173.');
    console.log('Please start the development server with: npm run dev');
    process.exit(1);
  }
  
  try {
    await runLighthouse();
  } catch (error) {
    console.error('❌ Error running Lighthouse audit:', error);
    process.exit(1);
  }
}

main();
