// This file exports TypeScript types and interfaces used in the frontend application.

export interface Meal {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  address: string;
}

export interface Order {
  id: string;
  userId: string;
  mealIds: string[];
  totalAmount: number;
  orderDate: string;
}