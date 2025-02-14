export interface BaseAdvertisement {
  name: string;
  description: string;
  location: string;
  type: "Недвижимость" | "Авто" | "Услуги";
  image?: string;
}

export interface RealEstateAdvertisement extends BaseAdvertisement {
  type: "Недвижимость";
  propertyType: string;
  area: number;
  rooms: number;
  price: number;
}

export interface AutoAdvertisement extends BaseAdvertisement {
  type: "Авто";
  brand: string;
  model: string;
  year: number;
  mileage?: number;
}

export interface ServiceAdvertisement extends BaseAdvertisement {
  type: "Услуги";
  serviceType: string;
  experience: number;
  cost: number;
  workSchedule?: string;
}

export type Advertisement =
  | RealEstateAdvertisement
  | AutoAdvertisement
  | ServiceAdvertisement;

export type AdvertisementResponse = Advertisement & { id: number };
