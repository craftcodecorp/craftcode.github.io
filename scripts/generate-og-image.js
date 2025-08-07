/**
 * Script to generate OpenGraph images for social sharing
 * This script creates optimized images for social media sharing
 * 
 * Usage: node scripts/generate-og-image.js
 */

import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import { createCanvas, registerFont, loadImage } from 'canvas';
import { fileURLToPath } from 'url';

// Get current directory name in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuration
const OUTPUT_DIR = path.join(__dirname, '../public/images');
const LOGO_PATH = path.join(__dirname, '../public/logo_white.png');
const FONT_PATH = path.join(__dirname, '../public/fonts/Inter-Bold.ttf');

// Ensure output directory exists
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

// Register font for canvas
try {
  registerFont(FONT_PATH, { family: 'Inter', weight: 'bold' });
} catch (error) {
  console.warn('Warning: Could not load Inter font. Using system fonts instead.');
  console.warn('To fix this, download Inter font and place it in public/fonts/Inter-Bold.ttf');
}

/**
 * Generate OpenGraph image for the main site
 */
async function generateMainOgImage() {
  // Create canvas with OG image dimensions (1200x630 is recommended for most platforms)
  const canvas = createCanvas(1200, 630);
  const ctx = canvas.getContext('2d');

  // Draw gradient background using CraftCode brand colors
  const gradient = ctx.createLinearGradient(0, 0, 1200, 630);
  gradient.addColorStop(0, '#121212');    // Preto Fosco - Primary brand color
  gradient.addColorStop(0.5, '#2B2B2B');  // Cinza Grafite
  gradient.addColorStop(1, '#121212');    // Preto Fosco - Primary brand color
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, 1200, 630);
  
  // Add a subtle radial gradient overlay for depth
  const radialGradient = ctx.createRadialGradient(600, 315, 100, 600, 315, 800);
  radialGradient.addColorStop(0, 'rgba(25, 118, 210, 0.1)');  // Azul Petróleo with opacity
  radialGradient.addColorStop(1, 'rgba(25, 118, 210, 0)');
  ctx.fillStyle = radialGradient;
  ctx.fillRect(0, 0, 1200, 630);

  // Add grid pattern
  ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
  ctx.lineWidth = 1;
  
  // Draw horizontal lines
  for (let y = 0; y < 630; y += 30) {
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(1200, y);
    ctx.stroke();
  }
  
  // Draw vertical lines
  for (let x = 0; x < 1200; x += 30) {
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, 630);
    ctx.stroke();
  }

  // Load and draw logo as the main focal point
  let logoHeight = 0;
  let logoBottom = 0;
  try {
    const logo = await loadImage(LOGO_PATH);
    // Draw logo at the top portion of the canvas with some padding
    const logoWidth = 350; // Slightly smaller for better proportion
    logoHeight = (logo.height / logo.width) * logoWidth;
    const logoY = 100; // Position logo with padding from top
    ctx.drawImage(logo, (1200 - logoWidth) / 2, logoY, logoWidth, logoHeight);
    logoBottom = logoY + logoHeight;
  } catch (error) {
    console.warn('Warning: Could not load logo. Skipping logo placement.');
    logoBottom = 200; // Fallback position if logo fails to load
  }

  // Set text alignment once for all text elements
  ctx.textAlign = 'center';
  
  // Add accent line directly below the logo
  const accentLineY = logoBottom + 20; // 20px spacing after logo
  ctx.strokeStyle = '#1976D2'; // Azul Petróleo - Secondary brand color
  ctx.lineWidth = 6;
  ctx.beginPath();
  ctx.moveTo(400, accentLineY);
  ctx.lineTo(800, accentLineY);
  ctx.stroke();
  
  // Add decorative elements on the accent line
  ctx.fillStyle = 'rgba(25, 118, 210, 0.8)'; // Azul Petróleo with opacity
  ctx.beginPath();
  ctx.arc(400, accentLineY, 8, 0, Math.PI * 2);
  ctx.fill();
  
  ctx.beginPath();
  ctx.arc(800, accentLineY, 8, 0, Math.PI * 2);
  ctx.fill();

  // Add subtitle with proper spacing below the accent line
  const subtitleY = accentLineY + 60; // 60px spacing after accent line
  ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
  ctx.font = '32px "Inter", sans-serif';
  ctx.fillText('Soluções Digitais para Negócios com Propósito', 600, subtitleY);
  
  // Add first tagline with proper spacing
  const taglineY = subtitleY + 50; // 50px spacing after subtitle
  ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
  ctx.font = 'bold 28px "Inter", sans-serif';
  ctx.fillText('Tecnologia com propósito', 600, taglineY);
  
  // Add second tagline
  const secondTaglineY = taglineY + 40; // 40px spacing after first tagline
  ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
  ctx.font = '24px "Inter", sans-serif';
  ctx.fillText('Soluções com impacto', 600, secondTaglineY);

  // Add website URL at the bottom
  ctx.fillStyle = 'rgba(255, 255, 255, 0.6)';
  ctx.font = '20px "Inter", sans-serif';
  ctx.fillText('craftcode.com.br', 600, 550);

  // Convert canvas to buffer and save as PNG
  const buffer = canvas.toBuffer('image/png');
  fs.writeFileSync(path.join(OUTPUT_DIR, 'og-craftcode.png'), buffer);

  // Use Sharp to convert to optimized JPEG for smaller file size
  await sharp(buffer)
    .jpeg({ quality: 90 })
    .toFile(path.join(OUTPUT_DIR, 'og-craftcode.jpg'));

  console.log('✅ Generated main OpenGraph image');
}

/**
 * Generate OpenGraph image for the CardapioFacil product
 */
async function generateCardapioFacilOgImage() {
  const canvas = createCanvas(1200, 630);
  const ctx = canvas.getContext('2d');

  // Draw gradient background - using a green palette for food-related product
  const gradient = ctx.createLinearGradient(0, 0, 1200, 630);
  gradient.addColorStop(0, '#0F766E');    // Teal 800 - Deep green
  gradient.addColorStop(0.5, '#14B8A6');  // Teal 500 - Vibrant green
  gradient.addColorStop(1, '#0F766E');    // Teal 800 - Deep green
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, 1200, 630);
  
  // Add a subtle radial gradient overlay for depth
  const radialGradient = ctx.createRadialGradient(600, 315, 100, 600, 315, 800);
  radialGradient.addColorStop(0, 'rgba(74, 222, 128, 0.15)');  // Green 400 with opacity
  radialGradient.addColorStop(1, 'rgba(74, 222, 128, 0)');
  ctx.fillStyle = radialGradient;
  ctx.fillRect(0, 0, 1200, 630);

  // Add grid pattern
  ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
  ctx.lineWidth = 1;
  
  // Draw horizontal lines
  for (let y = 0; y < 630; y += 30) {
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(1200, y);
    ctx.stroke();
  }
  
  // Draw vertical lines
  for (let x = 0; x < 1200; x += 30) {
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, 630);
    ctx.stroke();
  }

  // Add decorative food icon elements
  ctx.fillStyle = 'rgba(251, 191, 36, 0.15)';
  ctx.beginPath();
  ctx.arc(300, 200, 100, 0, Math.PI * 2);
  ctx.fill();
  
  ctx.beginPath();
  ctx.arc(900, 400, 80, 0, Math.PI * 2);
  ctx.fill();

  // Set text alignment once for all text elements
  ctx.textAlign = 'center';

  // Add title text
  ctx.fillStyle = '#ffffff';
  ctx.font = 'bold 80px "Inter", sans-serif';
  ctx.fillText('Cardápio Fácil', 600, 180); // Moved up from 280

  // Add subtitle with proper spacing
  ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
  ctx.font = 'bold 36px "Inter", sans-serif';
  ctx.fillText('Planejamento de Refeições com IA', 600, 250); // Moved up from 350

  // Add accent line with proper spacing
  const accentLineY = 300; // Fixed position with good spacing
  ctx.strokeStyle = '#4ACAA8'; // Verde Petróleo - Vibrant accent
  ctx.lineWidth = 6;
  ctx.beginPath();
  ctx.moveTo(300, accentLineY);
  ctx.lineTo(900, accentLineY);
  ctx.stroke();
  
  // Add decorative elements
  ctx.fillStyle = 'rgb(74, 222, 128)'; // Verde Petróleo - Secondary brand color
  ctx.beginPath();
  ctx.arc(300, accentLineY, 8, 0, Math.PI * 2);
  ctx.fill();
  
  ctx.beginPath();
  ctx.arc(900, accentLineY, 8, 0, Math.PI * 2);
  ctx.fill();

  // Add tagline with proper spacing
  ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
  ctx.font = 'bold 28px "Inter", sans-serif';
  ctx.fillText('Alimentação descomplicada com a força da IA', 600, 370); // Moved from 450

  // Add description text with proper spacing
  ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
  ctx.font = '22px "Inter", sans-serif';
  ctx.fillText('Planejamento de refeições automatizado via WhatsApp', 600, 430); // Moved from 520

  // Add website URL with proper spacing
  ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
  ctx.font = '22px "Inter", sans-serif';
  ctx.fillText('cardapiofacil.online', 600, 500); // Moved from 550

  // Add powered by text at the bottom with proper spacing
  ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
  ctx.font = '18px "Inter", sans-serif';
  ctx.fillText('Powered by CraftCode', 600, 550); // Moved from 580

  // Convert canvas to buffer and save as PNG
  const buffer = canvas.toBuffer('image/png');
  fs.writeFileSync(path.join(OUTPUT_DIR, 'og-cardapio.png'), buffer);

  // Use Sharp to convert to optimized JPEG for smaller file size
  await sharp(buffer)
    .jpeg({ quality: 90 })
    .toFile(path.join(OUTPUT_DIR, 'og-cardapio.jpg'));

  console.log('✅ Generated CardapioFacil OpenGraph image');
}

// Run the generation functions
async function main() {
  try {
    console.log('Generating OpenGraph images...');
    await generateMainOgImage();
    await generateCardapioFacilOgImage();
    console.log('✅ All OpenGraph images generated successfully!');
  } catch (error) {
    console.error('❌ Error generating OpenGraph images:', error);
    process.exit(1);
  }
}

main();
