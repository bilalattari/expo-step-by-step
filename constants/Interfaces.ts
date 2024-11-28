export interface Category {
  slug: string; // Unique identifier for the category
  name: string; // Display name of the category
  url: string; // URL linking to the category
}

interface Review {
  rating: number; // Rating given by the reviewer
  comment: string; // Reviewer's comment
  date: string; // Date of the review in ISO format
  reviewerName: string; // Name of the reviewer
  reviewerEmail: string; // Email of the reviewer
}

interface Dimensions {
  width: number; // Width of the product
  height: number; // Height of the product
  depth: number; // Depth of the product
}

interface Meta {
  createdAt: string; // Creation date in ISO format
  updatedAt: string; // Last update date in ISO format
  barcode: string; // Barcode of the product
  qrCode: string; // QR code URL for the product
}

export interface Product {
  id: number; // Unique identifier for the product
  title: string; // Name of the product
  description: string; // Description of the product
  category: string; // Category the product belongs to
  price: number; // Price of the product
  discountPercentage: number; // Discount percentage
  rating: number; // Overall rating of the product
  stock: number; // Stock availability
  tags: string[]; // Tags associated with the product
  brand: string; // Brand of the product
  sku: string; // SKU (Stock Keeping Unit) of the product
  weight: number; // Weight of the product
  dimensions: Dimensions; // Physical dimensions of the product
  warrantyInformation: string; // Warranty details
  shippingInformation: string; // Shipping details
  availabilityStatus: string; // Status of product availability
  reviews: Review[]; // Array of reviews
  returnPolicy: string; // Return policy information
  minimumOrderQuantity: number; // Minimum quantity required for purchase
  meta: Meta; // Metadata related to the product
  images: string[]; // Array of image URLs
  thumbnail: string; // Thumbnail image URL
}
