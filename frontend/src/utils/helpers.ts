export const formatDate = (date: Date): string => {
  return date.toLocaleDateString('en-US');
};

export const calculateTotal = (items: Array<{ price: number }>): number => {
  return items.reduce((total, item) => total + item.price, 0);
};

export const generateUniqueId = (): string => {
  return 'id-' + Math.random().toString(36).substr(2, 9);
};