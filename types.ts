
export interface Product {
  id: string;
  name: string;
  category: 'Tea' | 'Oil' | 'Salve' | 'Supplement';
  price: number;
  description: string;
  longDescription: string;
  image: string; // Keep for thumbnail backward compatibility or fallback
  images: string[]; // New array for gallery
  benefits: string[];
  ingredients: string[];
  usage: string;
}

export interface CartItem extends Product {
  quantity: number;
}
