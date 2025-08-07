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

  // Draw gradient background
  const gradient = ctx.createLinearGradient(0, 0, 1200, 630);
  gradient.addColorStop(0, '#0f172a');    // Tailwind slate-900
  gradient.addColorStop(0.5, '#1e293b');  // Tailwind slate-800
  gradient.addColorStop(1, '#0f172a');    // Tailwind slate-900
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, 1200, 630);
  
  // Add a subtle radial gradient overlay for depth
  const radialGradient = ctx.createRadialGradient(600, 315, 100, 600, 315, 800);
  radialGradient.addColorStop(0, 'rgba(56, 189, 248, 0.1)');  // Tailwind sky-400 with opacity
  radialGradient.addColorStop(1, 'rgba(56, 189, 248, 0)');
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

  // Load and draw logo
  try {
    const logo = await loadImage(LOGO_PATH);
    // Draw logo at the top center
    const logoWidth = 200;
    const logoHeight = (logo.height / logo.width) * logoWidth;
    ctx.drawImage(logo, (1200 - logoWidth) / 2, 80, logoWidth, logoHeight);
  } catch (error) {
    console.warn('Warning: Could not load logo. Skipping logo placement.');
  }

  // Add title text
  ctx.fillStyle = '#ffffff';
  ctx.font = 'bold 70px "Inter", sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText('CraftCode', 600, 300);

  // Add subtitle
  ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
  ctx.font = '32px "Inter", sans-serif';
  ctx.fillText('Soluções Digitais para Negócios com Propósito', 600, 360);

  // Add accent line
  ctx.strokeStyle = '#38bdf8'; // Tailwind sky-400
  ctx.lineWidth = 6;
  ctx.beginPath();
  ctx.moveTo(400, 400);
  ctx.lineTo(800, 400);
  ctx.stroke();
  
  // Add decorative elements
  ctx.fillStyle = 'rgba(56, 189, 248, 0.7)';
  ctx.beginPath();
  ctx.arc(400, 400, 8, 0, Math.PI * 2);
  ctx.fill();
  
  ctx.beginPath();
  ctx.arc(800, 400, 8, 0, Math.PI * 2);
  ctx.fill();

  // Add tagline
  ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
  ctx.font = 'bold 28px "Inter", sans-serif';
  ctx.fillText('Tecnologia com propósito', 600, 450);
  
  ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
  ctx.font = '24px "Inter", sans-serif';
  ctx.fillText('Soluções com impacto', 600, 490);

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

  // Draw gradient background - using a warmer color palette for food-related product
  const gradient = ctx.createLinearGradient(0, 0, 1200, 630);
  gradient.addColorStop(0, '#7c2d12');    // Tailwind amber-900
  gradient.addColorStop(0.5, '#9a3412');  // Tailwind amber-800
  gradient.addColorStop(1, '#7c2d12');    // Tailwind amber-900
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, 1200, 630);
  
  // Add a subtle radial gradient overlay for depth
  const radialGradient = ctx.createRadialGradient(600, 315, 100, 600, 315, 800);
  radialGradient.addColorStop(0, 'rgba(251, 191, 36, 0.1)');  // Tailwind amber-400 with opacity
  radialGradient.addColorStop(1, 'rgba(251, 191, 36, 0)');
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

  // Add title text
  ctx.fillStyle = '#ffffff';
  ctx.font = 'bold 80px "Inter", sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText('Cardápio Fácil', 600, 280);

  // Add subtitle
  ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
  ctx.font = 'bold 36px "Inter", sans-serif';
  ctx.fillText('Planejamento de Refeições com IA', 600, 350);

  // Add accent line
  ctx.strokeStyle = '#fbbf24'; // Tailwind amber-400
  ctx.lineWidth = 6;
  ctx.beginPath();
  ctx.moveTo(300, 400);
  ctx.lineTo(900, 400);
  ctx.stroke();
  
  // Add decorative elements
  ctx.fillStyle = 'rgba(251, 191, 36, 0.8)';
  ctx.beginPath();
  ctx.arc(300, 400, 8, 0, Math.PI * 2);
  ctx.fill();
  
  ctx.beginPath();
  ctx.arc(900, 400, 8, 0, Math.PI * 2);
  ctx.fill();

  // Add tagline
  ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
  ctx.font = 'bold 28px "Inter", sans-serif';
  ctx.fillText('Alimentação descomplicada com a força da IA', 600, 450);

  // Add description text
  ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
  ctx.font = '22px "Inter", sans-serif';
  ctx.fillText('Planejamento de refeições automatizado via WhatsApp', 600, 520);

  // Add website URL at the bottom
  ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
  ctx.font = '22px "Inter", sans-serif';
  ctx.fillText('cardapiofacil.online', 600, 550);

  // Add powered by text
  ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
  ctx.font = '18px "Inter", sans-serif';
  ctx.fillText('Powered by CraftCode', 600, 580);

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
