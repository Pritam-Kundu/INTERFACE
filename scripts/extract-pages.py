import sys
import os
import fitz  # PyMuPDF
from PIL import Image
import io

def extract_pages(year):
    base_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    pdf_path = os.path.join(base_dir, 'public', 'magazines', str(year), f'INTERFACE-{year}.pdf')
    output_dir = os.path.join(base_dir, 'public', 'magazines', str(year), 'pages')

    if not os.path.exists(pdf_path):
        print(f"Error: PDF not found at {pdf_path}")
        sys.exit(1)

    os.makedirs(output_dir, exist_ok=True)

    print(f"Loading PDF: {pdf_path}...")
    doc = fitz.open(pdf_path)
    num_pages = len(doc)
    print(f"Found {num_pages} pages.")

    # Higher resolution (2.0 scale)
    zoom_x = 2.0
    zoom_y = 2.0
    mat = fitz.Matrix(zoom_x, zoom_y)

    for i in range(num_pages):
        page = doc.load_page(i)
        print(f"Rendering page {i+1}/{num_pages}...")
        
        pix = page.get_pixmap(matrix=mat, alpha=False)
        img = Image.frombytes("RGB", [pix.width, pix.height], pix.samples)

        page_name = f"page-{(i+1):03d}.webp"
        output_path = os.path.join(output_dir, page_name)
        
        img.save(output_path, "webp", quality=80)
        print(f"Saved {page_name}")

    print("Extraction complete!")

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Please provide a year, e.g., python extract-pages.py 2025")
        sys.exit(1)
    
    extract_pages(sys.argv[1])
