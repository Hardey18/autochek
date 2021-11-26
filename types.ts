export interface PopularMakes {
    makeList: MakeList[];
    pagination: Info
}

export interface MakeList {
    id: number;
    name: string;
    imageUrl: string;
}

export interface Info {
    total: string;
    currentPage: string;
    pageSize: string;
}