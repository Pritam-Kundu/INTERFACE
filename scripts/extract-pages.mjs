import fs from 'fs';
import path from 'path';
import { getDocument } from 'pdfjs-dist/legacy/build/pdf.mjs';
import { createCanvas, Image } from 'canvas';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

global.Image = Image;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function extractPages(year) {
  if (!year) {
    console.error('Please provide a year, e.g., node extract-pages.mjs 2025');
    process.exit(1);
  }

  const pdfPath = path.resolve(__dirname, `../public/magazines/${year}/INTERFACE-${year}.pdf`);
  const outputDir = path.resolve(__dirname, `../public/magazines/${year}/pages`);

  if (!fs.existsSync(pdfPath)) {
    console.error(`PDF not found at: ${pdfPath}`);
    process.exit(1);
  }

  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  console.log(`Loading PDF: ${pdfPath}...`);
  const loadingTask = getDocument({
    url: pdfPath,
    standardFontDataUrl: path.join(__dirname, '../node_modules/pdfjs-dist/standard_fonts/').replace(/\\/g, '/') + '/',
    disableFontFace: true,
  });

  const pdfDocument = await loadingTask.promise;
  const numPages = pdfDocument.numPages;
  console.log(`Found ${numPages} pages.`);

  for (let i = 1; i <= numPages; i++) {
    const page = await pdfDocument.getPage(i);
    // Increase scale for better quality text
    const scale = 2.0; 
    const viewport = page.getViewport({ scale });

    const canvas = createCanvas(viewport.width, viewport.height);
    const context = canvas.getContext('2d');

    const renderContext = {
      canvasContext: context,
      viewport: viewport,
    };

    console.log(`Rendering page ${i}/${numPages}...`);
    await page.render(renderContext).promise;

    const pageName = `page-${String(i).padStart(3, '0')}.webp`;
    const outputPath = path.join(outputDir, pageName);
    
    // Convert raw canvas output to optimized WebP using sharp
    const buffer = canvas.toBuffer('image/png');
    await sharp(buffer)
      .webp({ quality: 80 })
      .toFile(outputPath);
      
    console.log(`Saved ${pageName}`);
  }
  
  console.log('Extraction complete!');
}

const yearArg = process.argv[2];
extractPages(yearArg).catch(err => {
  console.error(err);
  process.exit(1);
});
