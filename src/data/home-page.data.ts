import data from '../content/home-page.json';
export interface IHomePageImage {
  image?: string;
  'english-image-title'?: string;
}
export interface IHomePageData {
  'gallery-images': IHomePageImage[];
  'english-ayat-meaning': string;
  'english-know-more-button'?: string;
  'hindi-ayat-meaning'?: string;
  'hindi-know-more-button'?: string;
  'urdu-ayat-meaning'?: string;
  'urdu-know-more-button'?: string;
}

export const homePageData: IHomePageData = data;
