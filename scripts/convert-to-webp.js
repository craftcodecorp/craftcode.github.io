#!/usr/bin/env node

/**
 * WebP Conversion Script
 * 
 * Script to convert images to WebP format
 * This script will convert all images in the public folder to WebP format
 * 
 * Usage: node scripts/convert-to-webp.js
 */

import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

// Get current directory name in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuration
const SOURCE_DIR = path.join(__dirname, '../public');
const TARGET_DIR = path.join(__dirname, '../public/images/webp');
const extensions = ['.jpg', '.jpeg', '.png', '.gif'];
const quality = 80; // WebP quality (0-100)

// Create target directory if it doesn't exist
if (!fs.existsSync(TARGET_DIR)) {
  fs.mkdirSync(TARGET_DIR, { recursive: true });
}

// Function to recursively find all image files
function findImageFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory() && !filePath.includes('node_modules') && !filePath.includes('.git')) {
      findImageFiles(filePath, fileList);
    } else {
      const ext = path.extname(file).toLowerCase();
      if (extensions.includes(ext)) {
        fileList.push(filePath);
      }
    }
  });
  
  return fileList;
}

// Function to convert an image to WebP
async function convertToWebP(filePath) {
  try {
    const fileName = path.basename(filePath, path.extname(filePath));
    const relativePath = path.relative(SOURCE_DIR, filePath);
    const relativeDir = path.dirname(relativePath);
    
    // Create subdirectory structure in target directory if needed
    const targetSubDir = path.join(TARGET_DIR, relativeDir);
    if (!fs.existsSync(targetSubDir)) {
      fs.mkdirSync(targetSubDir, { recursive: true });
    }
    
    const outputPath = path.join(targetSubDir, `${fileName}.webp`);
    
    // Skip if WebP version already exists and is newer than source
    if (fs.existsSync(outputPath)) {
      const sourceStats = fs.statSync(filePath);
      const targetStats = fs.statSync(outputPath);
      
      if (targetStats.mtime > sourceStats.mtime) {
        console.log(`Skipping ${relativePath} (already converted)`);
        return;
      }
    }
    
    // Convert image to WebP
    await sharp(filePath)
      .webp({ quality })
      .toFile(outputPath);
    
    console.log(`Converted ${relativePath} to WebP`);
    
    // Generate responsive versions for larger images
    const metadata = await sharp(filePath).metadata();
    if (metadata.width > 800) {
      // Generate medium size (800px width)
      const mediumPath = path.join(targetSubDir, `${fileName}_w_800.webp`);
      await sharp(filePath)
        .resize({ width: 800 })
        .webp({ quality })
        .toFile(mediumPath);
      
      // Generate small size (480px width)
      const smallPath = path.join(targetSubDir, `${fileName}_w_480.webp`);
      await sharp(filePath)
        .resize({ width: 480 })
        .webp({ quality })
        .toFile(smallPath);
      
      console.log(`Created responsive versions for ${relativePath}`);
    }
  } catch (error) {
    console.error(`Error converting ${filePath}: ${error.message}`);
  }
}

// Main function
async function main() {
  console.log('Finding images...');
  const imageFiles = findImageFiles(SOURCE_DIR);
  console.log(`Found ${imageFiles.length} images to convert`);
  
  // Process images sequentially to avoid memory issues
  for (const file of imageFiles) {
    await convertToWebP(file);
  }
  
  console.log('Conversion complete!');
}

main().catch(error => {
  console.error('Error:', error);
  process.exit(1);
});
