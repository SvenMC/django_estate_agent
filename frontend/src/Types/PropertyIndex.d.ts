type PropertyIndex = {
    count: number;
    next: string|null;
    previous: string|null;
    results: PropertyIndexItems[];
}

type PropertyIndexItems = {
    id: number;
    url: string;
    created_at: string;
    last_updated: string;
    address: string;
};