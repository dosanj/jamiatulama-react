import data from "../content/home-page.json";
export interface IHomePageImage {
  image?: string;
  "english-image-title"?: string;
}
export interface IHomePageData {
  "gallery-images": IHomePageImage[];
  "english-purpose": string;
  "english-know-more-button"?: string;
  "hindi-purpose"?: string;
  "hindi-know-more-button"?: string;
  "urdu-purpose"?: string;
  "urdu-know-more-button"?: string;
}

export const homePageData: IHomePageData = data;
