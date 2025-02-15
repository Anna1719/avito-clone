export interface BaseAdvertisement {
  name: string;
  description: string;
  location: string;
  type: "Недвижимость" | "Авто" | "Услуги";
  image?: string;
}

export const PROPERTY_TYPES = [
  "Квартира",
  "Дом",
  "Коттедж",
  "Таунхаус",
  "Офис",
  "Гараж",
  "Коммерческое помещение",
  "Дача",
  "Склад",
  "Земельный участок",
];

export type PropertyType = (typeof PROPERTY_TYPES)[number];

export const CAR_BRANDS = [
  "Toyota",
  "Honda",
  "BMW",
  "Mercedes-Benz",
  "Ford",
  "Audi",
  "Volkswagen",
  "Hyundai",
  "Nissan",
  "Kia",
  "Chevrolet",
  "Lexus",
  "Mazda",
  "Subaru",
  "Porsche",
];

export type CarBrand = (typeof CAR_BRANDS)[number];

export const SERVICE_TYPES = [
  "Ремонт",
  "Уборка",
  "Репетиторство",
  "Юридические услуги",
  "Доставка",
  "Грузоперевозки",
  "Фотосъемка",
  "Парикмахерские услуги",
  "Сантехнические работы",
  "Электромонтаж",
];

export type ServiceType = (typeof SERVICE_TYPES)[number];

export interface RealEstateAdvertisement extends BaseAdvertisement {
  type: "Недвижимость";
  propertyType: PropertyType;
  area: number;
  rooms: number;
  price: number;
}

export interface AutoAdvertisement extends BaseAdvertisement {
  type: "Авто";
  brand: CarBrand;
  model: string;
  year: number;
  mileage?: number;
}

export interface ServiceAdvertisement extends BaseAdvertisement {
  type: "Услуги";
  serviceType: ServiceType;
  experience: number;
  cost: number;
  workSchedule?: string;
}

export type Advertisement =
  | RealEstateAdvertisement
  | AutoAdvertisement
  | ServiceAdvertisement;

export type AdvertisementResponse = Advertisement & { id: number };
