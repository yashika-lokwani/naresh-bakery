import { promises as fs } from 'fs';
import path from 'path';

/**
 * Get all image files from a category folder
 * @param categoryImage - The category image name (used as folder name)
 * @returns Array of image filenames without extension
 */
export async function getCategoryImages(categoryImage: string): Promise<string[]> {
  try {
    const categoriesDir = path.join(process.cwd(), 'public', 'categories', categoryImage);
    
    // Check if directory exists first
    try {
      await fs.access(categoriesDir);
    } catch {
      // Directory doesn't exist, return empty array silently
      return [];
    }
    
    const files = await fs.readdir(categoriesDir);
    
    // Filter for image files and extract the numeric part
    const imageFiles = files
      .filter(file => file.match(/\.(png|jpe?g|gif|webp)$/i))
      .filter(file => file.startsWith(categoryImage))
      .sort((a, b) => {
        // Extract the number from filename for proper sorting
        const numA = parseInt(a.match(/-(\d+)\./)?.[1] || '0');
        const numB = parseInt(b.match(/-(\d+)\./)?.[1] || '0');
        return numA - numB;
      });
    
    return imageFiles;
  } catch (error) {
    console.error(`Error reading category images for ${categoryImage}:`, error);
    return [];
  }
}

/**
 * Get the count of images in a category folder
 * @param categoryImage - The category image name (used as folder name)
 * @returns Number of images found
 */
export async function getCategoryImageCount(categoryImage: string): Promise<number> {
  const images = await getCategoryImages(categoryImage);
  return images.length;
}

/**
 * Check if a specific image exists in a category
 * @param categoryImage - The category image name
 * @param imageIndex - The image index
 * @returns boolean indicating if the image exists
 */
export async function categoryImageExists(categoryImage: string, imageIndex: number): Promise<boolean> {
  const images = await getCategoryImages(categoryImage);
  return images.some(file => file.includes(`-${imageIndex}.`));
}