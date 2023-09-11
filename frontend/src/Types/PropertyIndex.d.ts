type PropertyIndexTypes = {
  count: number;
  next: string | null;
  previous: string | null;
  results: PropertyIndexItems[];
};

type PropertyIndexItemsTypes = {
  id: number;
  url: string;
  created_at: string;
  last_updated: string;
  address: string;
};
