import salmonWholeAsset from '@/assets/fish-whole-salmon.png.asset.json';
import tunaWholeAsset from '@/assets/fish-whole-tuna.png.asset.json';
import branzinoWholeAsset from '@/assets/fish-whole-branzino.png.asset.json';
import redSnapperWholeAsset from '@/assets/fish-whole-red-snapper.png.asset.json';
import grouperWholeAsset from '@/assets/fish-whole-grouper.png.asset.json';
import codWholeAsset from '@/assets/fish-whole-cod.png.asset.json';
import halibutWholeAsset from '@/assets/fish-whole-halibut.png.asset.json';
import flounderWholeAsset from '@/assets/fish-whole-flounder.png.asset.json';
import tileFishWholeAsset from '@/assets/fish-whole-tile-fish.png.asset.json';
import whitingWholeAsset from '@/assets/fish-whole-whiting.png.asset.json';
import mulletWholeAsset from '@/assets/fish-whole-mullet.png.asset.json';
import buffaloWholeAsset from '@/assets/fish-whole-buffalo.png.asset.json';
import carpWholeAsset from '@/assets/fish-whole-carp.png.asset.json';
import doradoWholeAsset from '@/assets/fish-whole-dorado.png.asset.json';
import tilapiaWholeAsset from '@/assets/fish-whole-tilapia.png.asset.json';
import graySoleWholeAsset from '@/assets/fish-whole-gray-sole.png.asset.json';

// Flag images
import usaFlagImg from '@/assets/flag-usa.png';
import japanFlagImg from '@/assets/flag-japan.png';
import canadaFlagImg from '@/assets/flag-canada.png';
import greeceFlagImg from '@/assets/flag-greece.png';

export interface Product {
  id: number;
  name: string;
  species: string;
  origin: string;
  price: number;
  weight: string;
  type: string;
  rating: number;
  image: string;
  badge?: string;
  badgeColor?: string;
}

const WHOLE_PRICE = 9.99;

export const products: Product[] = [
  { id: 1, name: 'Whole Salmon', species: 'salmon', origin: 'Alaska', price: WHOLE_PRICE, weight: '5lb', type: 'Whole Fish', rating: 5, image: salmonWholeAsset.url },
  { id: 2, name: 'Whole Tuna', species: 'tuna', origin: 'Pacific Ocean', price: WHOLE_PRICE, weight: '5lb', type: 'Whole Fish', rating: 5, image: tunaWholeAsset.url },
  { id: 3, name: 'Whole Branzino', species: 'branzino', origin: 'Greece', price: WHOLE_PRICE, weight: '5lb', type: 'Whole Fish', rating: 5, image: branzinoWholeAsset.url },
  { id: 4, name: 'Whole Red Snapper', species: 'snapper', origin: 'USA', price: WHOLE_PRICE, weight: '5lb', type: 'Whole Fish', rating: 5, image: redSnapperWholeAsset.url },
  { id: 5, name: 'Whole Grouper', species: 'grouper', origin: 'USA', price: WHOLE_PRICE, weight: '5-8lb', type: 'Whole Fish', rating: 5, image: grouperWholeAsset.url },
  { id: 6, name: 'Whole Cod', species: 'cod', origin: 'Alaska', price: WHOLE_PRICE, weight: '5lb', type: 'Whole Fish', rating: 5, image: codWholeAsset.url },
  { id: 7, name: 'Whole Halibut', species: 'halibut', origin: 'Arctic Ocean', price: WHOLE_PRICE, weight: '5lb', type: 'Whole Fish', rating: 5, image: halibutWholeAsset.url },
  { id: 8, name: 'Whole Flounder', species: 'flounder', origin: 'USA', price: WHOLE_PRICE, weight: '5lb', type: 'Whole Fish', rating: 5, image: flounderWholeAsset.url },
  { id: 9, name: 'Tile Fish', species: 'tilefish', origin: 'USA', price: WHOLE_PRICE, weight: '5lb', type: 'Whole Fish', rating: 5, image: tileFishWholeAsset.url },
  { id: 10, name: 'Whiting', species: 'whiting', origin: 'USA', price: WHOLE_PRICE, weight: '5lb', type: 'Whole Fish', rating: 5, image: whitingWholeAsset.url },
  { id: 11, name: 'Mullet', species: 'mullet', origin: 'USA', price: WHOLE_PRICE, weight: '5lb', type: 'Whole Fish', rating: 5, image: mulletWholeAsset.url },
  { id: 12, name: 'Buffalo Fish', species: 'buffalo', origin: 'Mississippi River', price: WHOLE_PRICE, weight: '10-12lb', type: 'Whole Fish Clean', rating: 5, image: buffaloWholeAsset.url },
  { id: 13, name: 'Carp', species: 'carp', origin: 'Mississippi River', price: WHOLE_PRICE, weight: '10-12lb', type: 'Whole Fish Clean', rating: 5, image: carpWholeAsset.url },
  { id: 14, name: 'Dorado', species: 'dorado', origin: 'USA', price: WHOLE_PRICE, weight: '5-8lb', type: 'Whole Fish Clean', rating: 5, image: doradoWholeAsset.url },
  { id: 15, name: 'Tilapia', species: 'tilapia', origin: 'USA', price: WHOLE_PRICE, weight: '5lb', type: 'Whole Fish', rating: 5, image: tilapiaWholeAsset.url },
  { id: 16, name: 'Gray Sole', species: 'gray-sole', origin: 'USA', price: WHOLE_PRICE, weight: '5lb', type: 'Whole Fish', rating: 5, image: graySoleWholeAsset.url },
];

// Get flag image for origin
export const getFlagImage = (origin: string): string | null => {
  const flagMap: Record<string, string> = {
    'Alaska': usaFlagImg,
    'USA': usaFlagImg,
    'Mississippi River': usaFlagImg,
    'Pacific Ocean': japanFlagImg,
    'Arctic Ocean': canadaFlagImg,
    'Greece': greeceFlagImg,
  };
  return flagMap[origin] || null;
};

// Country flag emoji for text display
export const getCountryFlag = (origin: string): string => {
  const flagMap: Record<string, string> = {
    'Alaska': '🇺🇸',
    'USA': '🇺🇸',
    'Mississippi River': '🇺🇸',
    'Pacific Ocean': '🇯🇵',
    'Arctic Ocean': '🇨🇦',
    'Greece': '🇬🇷',
  };
  return flagMap[origin] || '🌍';
};

// Species info for pages
export interface SpeciesInfo {
  slug: string;
  name: string;
  description: string;
  heroImage: string;
}

export const speciesInfo: Record<string, SpeciesInfo> = {
  salmon: {
    slug: 'salmon',
    name: 'Salmon',
    description: 'Wild-caught salmon from the pristine waters of Alaska. Known for its rich, buttery flavor and beautiful pink-orange flesh.',
    heroImage: salmonWholeAsset.url,
  },
  tuna: {
    slug: 'tuna',
    name: 'Tuna',
    description: 'Premium tuna from the Pacific Ocean. Prized for its deep red color and clean, meaty flavor.',
    heroImage: tunaWholeAsset.url,
  },
  branzino: {
    slug: 'branzino',
    name: 'Branzino',
    description: 'Mediterranean sea bass from Greece. Known for its delicate, flaky white flesh and subtle, sweet flavor perfect for whole roasting.',
    heroImage: branzinoWholeAsset.url,
  },
  snapper: {
    slug: 'snapper',
    name: 'Red Snapper',
    description: 'Fresh-caught red snapper from the Gulf of Mexico. Offers a sweet, nutty flavor with a firm texture that holds up beautifully to any cooking method.',
    heroImage: redSnapperWholeAsset.url,
  },
  grouper: {
    slug: 'grouper',
    name: 'Grouper',
    description: 'Wild-caught grouper from the Atlantic. Features a mild, sweet flavor with a firm texture that makes it perfect for grilling and blackening.',
    heroImage: grouperWholeAsset.url,
  },
  cod: {
    slug: 'cod',
    name: 'Cod',
    description: 'Wild Alaskan cod with its mild, slightly sweet flavor and flaky white flesh. A versatile favorite for fish and chips to elegant preparations.',
    heroImage: codWholeAsset.url,
  },
  halibut: {
    slug: 'halibut',
    name: 'Halibut',
    description: 'Wild-caught halibut from the cold Arctic waters. Celebrated for its firm, snow-white flesh and sweet, delicate flavor.',
    heroImage: halibutWholeAsset.url,
  },
  flounder: {
    slug: 'flounder',
    name: 'Flounder',
    description: 'Fresh Atlantic flounder with its delicate, fine-textured white flesh. Its mild, sweet taste makes it a versatile choice for any preparation.',
    heroImage: flounderWholeAsset.url,
  },
  tilefish: {
    slug: 'tilefish',
    name: 'Tile Fish',
    description: 'Wild-caught tilefish from the Atlantic coast. Features a sweet, slightly firm flesh reminiscent of lobster with excellent versatility.',
    heroImage: tileFishWholeAsset.url,
  },
  whiting: {
    slug: 'whiting',
    name: 'Whiting',
    description: 'Fresh Atlantic whiting with tender, flaky white flesh. An affordable, mild-flavored fish perfect for frying and casual preparations.',
    heroImage: whitingWholeAsset.url,
  },
  mullet: {
    slug: 'mullet',
    name: 'Mullet',
    description: 'Wild-caught mullet from coastal waters. Known for its rich, distinctive flavor and firm texture ideal for smoking and grilling.',
    heroImage: mulletWholeAsset.url,
  },
  buffalo: {
    slug: 'buffalo',
    name: 'Buffalo Fish',
    description: 'Sustainably harvested buffalo fish from the Mississippi River. A traditional favorite with firm, flavorful flesh perfect for traditional preparations.',
    heroImage: buffaloWholeAsset.url,
  },
  carp: {
    slug: 'carp',
    name: 'Carp',
    description: 'Fresh carp from the Mississippi River. Prized in many cuisines for its firm texture and rich flavor, especially in traditional Jewish and Asian cooking.',
    heroImage: carpWholeAsset.url,
  },
  dorado: {
    slug: 'dorado',
    name: 'Dorado',
    description: 'Wild-caught dorado, also known as mahi-mahi, from warm Atlantic waters. Prized for its firm, lean flesh and mild, slightly sweet flavor that grills beautifully.',
    heroImage: doradoWholeAsset.url,
  },
  tilapia: {
    slug: 'tilapia',
    name: 'Tilapia',
    description: 'Fresh farm-raised tilapia from clean U.S. waters. Known for its mild, flaky white flesh and versatility in everything from frying to baking.',
    heroImage: tilapiaWholeAsset.url,
  },
  'gray-sole': {
    slug: 'gray-sole',
    name: 'Gray Sole',
    description: 'Delicate gray sole from Atlantic waters, prized for its thin, mild fillets and fine, flaky texture. A refined flatfish perfect for light sautéing and classic preparations.',
    heroImage: graySoleWholeAsset.url,
  },
};

export const getProductsBySpecies = (species: string): Product[] => {
  return products.filter(p => p.species === species);
};

export const getAllSpecies = (): string[] => {
  return Object.keys(speciesInfo);
};
