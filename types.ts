export interface GetPopularMakesResults {
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

export interface GetAllCarsResults {
    result: GetCars[];
    pagination: Info
}

export interface GetCars {
    id: string;
    title: string;
    imageUrl: string;
    year: number;
    city: string;
    state: string;
    gradeScore?: number;
    sellingCondition: SellingCondition;
    hasWarranty: boolean;
    marketplacePrice: number;
    marketplaceOldPrice: number;
    hasFinancing: boolean;
    mileage: number;
    mileageUnit: MileageUnit;
    installment: number;
    depositReceived: boolean;
    loanValue: number;
    websiteUrl: string;
    stats: Stats;
    bodyTypeId: string;
    sold: boolean;
    hasThreeDImage: boolean;
}

export enum MileageUnit {
    KM = "km",
    Miles = "miles",
}

export enum SellingCondition {
    Local = "local",
    New = "new",
}

export interface Stats {
    webViewCount:       number;
    webViewerCount:     number;
    interestCount:      number;
    testDriveCount:     number;
    appViewCount:       number;
    appViewerCount:     number;
    processedLoanCount: number;
}