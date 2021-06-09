export interface ApodObject {
  copyright: string;
  date: string;
  explanation: string;
  hdurl: string;
  media_type: string;
  service_version: string;
  title: string;
  url: string;
}

export interface ApolloObject {
  collection: CollectionObject;
}
export interface CollectionObject {
  href: string;
  items: ItemsObject[];
  version: string;
}

export interface ItemsObject {
  href: string;
}

export interface AsteroidObject {
  near_earth_objects: object;
}
