#!/usr/bin/env node

/**
 * Browser Compatibility Test Script
 * 
 * This script helps document and track browser compatibility issues
 * by providing a structured way to record test results.
 * 
 * Usage: node scripts/browser-compatibility.js
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import readline from 'readline';

// Get current directory name in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuration
const REPORT_DIR = path.join(__dirname, '../compatibility-reports');
const BROWSERS = ['Chrome', 'Firefox', 'Safari', 'Edge'];
const DEVICES = ['Desktop', 'Tablet', 'Mobile'];
const FEATURES = [
  'Layout rendering',
  'Responsive design',
  'Image loading',
  'WebP support',
  'Lazy loading',
  'Form validation',
  'Animations',
  'Hover effects',
  'Focus states',
  'Touch interactions'
];

// Create report directory if it doesn't exist
if (!fs.existsSync(REPORT_DIR)) {
  fs.mkdirSync(REPORT_DIR, { recursive: true });
}

// Create readline interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

/**
 * Prompt user for input
 */
function prompt(question) {
  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      resolve(answer);
    });
  });
}

/**
 * Run browser compatibility test
 */
async function runCompatibilityTest() {
  console.log('🌐 Browser Compatibility Test');
  console.log('============================');
  
  const timestamp = new Date().toISOString().replace(/:/g, '-').split('.')[0];
  const results = {
    timestamp,
    tester: '',
    tests: []
  };
  
  // Get tester name
  results.tester = await prompt('Enter your name: ');
  
  // Test each browser and device combination
  for (const browser of BROWSERS) {
    for (const device of DEVICES) {
      console.log(`\n📱 Testing ${browser} on ${device}...`);
      
      const browserTest = {
        browser,
        device,
        features: [],
        notes: ''
      };
      
      // Test each feature
      for (const feature of FEATURES) {
        const status = await prompt(`${feature} (pass/fail/partial/skip): `);
        
        if (status !== 'skip') {
          browserTest.features.push({
            name: feature,
            status,
            notes: status !== 'pass' ? await prompt('Notes for this issue: ') : ''
          });
        }
      }
      
      // Additional notes
      browserTest.notes = await prompt('Any additional notes for this browser/device combination: ');
      
      results.tests.push(browserTest);
    }
  }
  
  // Save results
  const reportPath = path.join(REPORT_DIR, `compatibility-report-${timestamp}.json`);
  const htmlReportPath = path.join(REPORT_DIR, `compatibility-report-${timestamp}.html`);
  
  fs.writeFileSync(reportPath, JSON.stringify(results, null, 2));
  
  // Generate HTML report
  const htmlReport = generateHtmlReport(results);
  fs.writeFileSync(htmlReportPath, htmlReport);
  
  console.log(`\n✅ Report saved to: ${reportPath}`);
  console.log(`✅ HTML Report saved to: ${htmlReportPath}`);
  
  rl.close();
}

/**
 * Generate HTML report
 */
function generateHtmlReport(results) {
  // Count issues
  const issues = results.tests.reduce((count, test) => {
    return count + test.features.filter(f => f.status === 'fail' || f.status === 'partial').length;
  }, 0);
  
  // Generate HTML
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Browser Compatibility Report - ${results.timestamp}</title>
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
    .summary-card .count {
      font-size: 24px;
      font-weight: bold;
    }
    .count.good {
      color: #10b981;
    }
    .count.warning {
      color: #f59e0b;
    }
    .count.bad {
      color: #ef4444;
    }
    .browser-test {
      margin-bottom: 30px;
      background-color: #fff;
      border-radius: 8px;
      padding: 20px;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
    }
    .browser-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 15px;
    }
    .browser-name {
      font-size: 18px;
      font-weight: 600;
    }
    .device-badge {
      background-color: #e5e7eb;
      color: #4b5563;
      padding: 4px 10px;
      border-radius: 4px;
      font-size: 14px;
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
    .status {
      display: inline-block;
      padding: 2px 8px;
      border-radius: 4px;
      font-size: 12px;
      font-weight: 600;
    }
    .status.pass {
      background-color: #dcfce7;
      color: #166534;
    }
    .status.partial {
      background-color: #fef3c7;
      color: #92400e;
    }
    .status.fail {
      background-color: #fee2e2;
      color: #b91c1c;
    }
    .notes {
      margin-top: 15px;
      padding: 10px;
      background-color: #f9fafb;
      border-radius: 4px;
      font-style: italic;
    }
  </style>
</head>
<body>
  <h1>Browser Compatibility Report</h1>
  <p>Generated on: ${new Date(results.timestamp).toLocaleString()}</p>
  <p>Tester: ${results.tester}</p>
  
  <div class="summary">
    <div class="summary-card">
      <h3>Total Tests</h3>
      <div class="count good">${results.tests.length}</div>
    </div>
    <div class="summary-card">
      <h3>Issues Found</h3>
      <div class="count ${issues > 5 ? 'bad' : issues > 0 ? 'warning' : 'good'}">${issues}</div>
    </div>
  </div>
  
  ${results.tests.map(test => `
    <div class="browser-test">
      <div class="browser-header">
        <div class="browser-name">${test.browser}</div>
        <div class="device-badge">${test.device}</div>
      </div>
      
      <table>
        <thead>
          <tr>
            <th>Feature</th>
            <th>Status</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
          ${test.features.map(feature => `
            <tr>
              <td>${feature.name}</td>
              <td><span class="status ${feature.status}">${feature.status}</span></td>
              <td>${feature.notes || '-'}</td>
            </tr>
          `).join('')}
        </tbody>
      </table>
      
      ${test.notes ? `<div class="notes">Additional notes: ${test.notes}</div>` : ''}
    </div>
  `).join('')}
</body>
</html>
  `;
}

/**
 * Main function
 */
async function main() {
  try {
    await runCompatibilityTest();
  } catch (error) {
    console.error('❌ Error running compatibility test:', error);
    process.exit(1);
  }
}

main();
