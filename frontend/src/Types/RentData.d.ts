type RentIndex = {
    count: number;
    next: string|null;
    previous: string|null;
    results: RentItems[];
}

type RentItems = {
    id: number;
    url: string;
    created_at: string;
    last_updated: string;
    address: string;
};