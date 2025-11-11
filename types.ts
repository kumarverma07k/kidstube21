// FIX: Import React to resolve 'React' namespace not found error.
import React from 'react';

export interface Video {
  id: string;
  title: string;
  views: string;
  category: 'Rhymes' | 'Learning' | 'Stories';
}

export interface Game {
  id: number;
  title: string;
  icon: React.ElementType;
  color: string;
  path: string;
}

// FIX: Add Product interface to fix import error in pages/Shop.tsx.
export interface Product {
  id: number;
  name: string;
  description: string;
  price: string;
  imageUrl: string;
}

export interface Rhyme {
  id: string;
  title: string;
  imageUrl: string;
  lyrics: string;
}

export interface WriteForUsFormData {
  fullName: string;
  email: string;
  article: string;
}