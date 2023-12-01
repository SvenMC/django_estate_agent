export type PropertyIndexTypes = {
  count: number;
  next: string | null;
  previous: string | null;
  results: PropertyIndexItemsTypes[];
};

export type PropertyIndexItemsTypes = {
  id: number;
  url: string;
  created_at: string;
  last_updated: string;
  title: string;
  address: string;
  price: number;
  bathrooms: number;
  bedrooms: number;
  dimensions: string;
};
