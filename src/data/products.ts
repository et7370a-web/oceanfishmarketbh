import snapperWholeImg from '@/assets/fish-snapper-whole.jpg';
import seabassWholeImg from '@/assets/fish-seabass-whole.jpg';
import branzinoWholeImg from '@/assets/fish-branzino-whole.jpg';
import grouperWholeImg from '@/assets/fish-grouper-whole.jpg';
import flounderWholeImg from '@/assets/fish-flounder-whole.jpg';
import tilefishWholeImg from '@/assets/fish-tilefish-whole.jpg';
import whitingWholeAsset from '@/assets/fish-whiting-whole.png.asset.json';
import mulletWholeImg from '@/assets/fish-mullet-whole.jpg';
import buffaloWholeImg from '@/assets/fish-buffalo-whole.jpg';
import carpWholeImg from '@/assets/fish-carp-whole.jpg';
import doradoWholeAsset from '@/assets/fish-dorado-whole.png.asset.json';
import tilapiaWholeImg from '@/assets/fish-tilapia-whole.jpg';
import graySoleAsset from '@/assets/fish-gray-sole.jpg.asset.json';

// Flag images
import usaFlagImg from '@/assets/flag-usa.png';
import norwayFlagImg from '@/assets/flag-norway.png';
import japanFlagImg from '@/assets/flag-japan.png';
import vietnamFlagImg from '@/assets/flag-vietnam.png';
import canadaFlagImg from '@/assets/flag-canada.png';
import chileFlagImg from '@/assets/flag-chile.png';
import greeceFlagImg from '@/assets/flag-greece.png';
import turkeyFlagImg from '@/assets/flag-turkey.png';

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

export const products: Product[] = [
  { id: 10, name: 'Red Snapper Whole', species: 'snapper', origin: 'USA', price: 9.99, weight: '5lb', type: 'Whole Fish', rating: 5, image: snapperWholeImg },
  { id: 13, name: 'Chilean Sea Bass Whole', species: 'seabass', origin: 'Antarctica', price: 9.99, weight: '15lb', type: 'Whole Fish w/o Head', rating: 5, image: seabassWholeImg },
  { id: 17, name: 'Branzino Whole', species: 'branzino', origin: 'Greece', price: 9.99, weight: '5lb', type: 'Whole Fish', rating: 5, image: branzinoWholeImg },
  { id: 18, name: 'Branzino Whole', species: 'branzino', origin: 'Turkey', price: 9.99, weight: '5lb', type: 'Whole Fish', rating: 5, image: branzinoWholeImg },
  { id: 21, name: 'Grouper Whole', species: 'grouper', origin: 'USA', price: 9.99, weight: '5-8lb', type: 'Whole Fish', rating: 5, image: grouperWholeImg },
  { id: 23, name: 'Flounder Whole', species: 'flounder', origin: 'USA', price: 9.99, weight: '5lb', type: 'Whole Fish', rating: 5, image: flounderWholeImg },
  { id: 25, name: 'Tile Fish Whole', species: 'tilefish', origin: 'USA', price: 9.99, weight: '5lbs', type: 'Whole Fish', rating: 5, image: tilefishWholeImg },
  { id: 28, name: 'Whiting Whole', species: 'whiting', origin: 'USA', price: 9.99, weight: '5lb', type: 'Whole Fish', rating: 5, image: whitingWholeAsset.url },
  { id: 31, name: 'Mullet Whole', species: 'mullet', origin: 'USA', price: 9.99, weight: '5lbs', type: 'Whole Fish', rating: 5, image: mulletWholeImg },
  { id: 35, name: 'Buffalo Whole', species: 'buffalo', origin: 'Mississippi River', price: 9.99, weight: '10-12lb', type: 'Whole Fish Clean', rating: 5, image: buffaloWholeImg },
  { id: 39, name: 'Carp Whole', species: 'carp', origin: 'Mississippi River', price: 9.99, weight: '10-12lb', type: 'Whole Fish Clean', rating: 5, image: carpWholeImg },
  { id: 41, name: 'Dorado Whole', species: 'dorado', origin: 'USA', price: 9.99, weight: '5-8lb', type: 'Whole Fish Clean', rating: 5, image: doradoWholeAsset.url },
  { id: 43, name: 'Tilapia Whole', species: 'tilapia', origin: 'USA', price: 9.99, weight: '5lb', type: 'Whole Fish', rating: 5, image: tilapiaWholeImg },
  { id: 44, name: 'Gray Sole', species: 'gray-sole', origin: 'USA', price: 9.99, weight: '5lb', type: 'Whole Fish', rating: 5, image: graySoleAsset.url },
];

// Get flag image for origin
export const getFlagImage = (origin: string): string | null => {
  const flagMap: Record<string, string> = {
    'USA': usaFlagImg,
    'Mississippi River': usaFlagImg,
    'Norway': norwayFlagImg,
    'Pacific Ocean': japanFlagImg,
    'Vietnam/Thailand': vietnamFlagImg,
    'Arctic Ocean': canadaFlagImg,
    'Antarctica': chileFlagImg,
    'Greece': greeceFlagImg,
    'Turkey': turkeyFlagImg,
  };
  return flagMap[origin] || null;
};

// Country flag emoji for text display
export const getCountryFlag = (origin: string): string => {
  const flagMap: Record<string, string> = {
    'USA': '🇺🇸',
    'Norway': '🇳🇴',
    'Pacific Ocean': '🇯🇵',
    'Vietnam/Thailand': '🇻🇳🇹🇭',
    'Arctic Ocean': '🇨🇦',
    'Antarctica': '🇨🇱',
    'Greece': '🇬🇷',
    'Turkey': '🇹🇷',
    'Mississippi River': '🇺🇸',
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
  snapper: {
    slug: 'snapper',
    name: 'Red Snapper',
    description: 'Fresh-caught red snapper from the Gulf of Mexico. Offers a sweet, nutty flavor with a firm texture that holds up beautifully to any cooking method.',
    heroImage: snapperWholeImg,
  },
  seabass: {
    slug: 'seabass',
    name: 'Chilean Sea Bass',
    description: 'The legendary Patagonian toothfish, prized by chefs worldwide for its rich, buttery flavor and velvety texture that melts in your mouth.',
    heroImage: seabassWholeImg,
  },
  branzino: {
    slug: 'branzino',
    name: 'Branzino',
    description: 'Mediterranean sea bass from Greece and Turkey. Known for its delicate, flaky white flesh and subtle, sweet flavor perfect for whole roasting.',
    heroImage: branzinoWholeImg,
  },
  grouper: {
    slug: 'grouper',
    name: 'Grouper',
    description: 'Wild-caught grouper from the Atlantic. Features a mild, sweet flavor with a firm texture that makes it perfect for grilling and blackening.',
    heroImage: grouperWholeImg,
  },
  flounder: {
    slug: 'flounder',
    name: 'Flounder',
    description: 'Fresh Atlantic flounder with its delicate, fine-textured white flesh. Its mild, sweet taste makes it a versatile choice for any preparation.',
    heroImage: flounderWholeImg,
  },
  tilefish: {
    slug: 'tilefish',
    name: 'Tile Fish',
    description: 'Wild-caught tilefish from the Atlantic coast. Features a sweet, slightly firm flesh reminiscent of lobster with excellent versatility.',
    heroImage: tilefishWholeImg,
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
    heroImage: mulletWholeImg,
  },
  buffalo: {
    slug: 'buffalo',
    name: 'Buffalo Fish',
    description: 'Sustainably harvested buffalo fish from the Mississippi River. A traditional favorite with firm, flavorful flesh perfect for traditional preparations.',
    heroImage: buffaloWholeImg,
  },
  carp: {
    slug: 'carp',
    name: 'Carp',
    description: 'Fresh carp from the Mississippi River. Prized in many cuisines for its firm texture and rich flavor, especially in traditional Jewish and Asian cooking.',
    heroImage: carpWholeImg,
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
    heroImage: tilapiaWholeImg,
  },
  'gray-sole': {
    slug: 'gray-sole',
    name: 'Gray Sole',
    description: 'Delicate gray sole from Atlantic waters, prized for its thin, mild fillets and fine, flaky texture. A refined flatfish perfect for light sautéing and classic preparations.',
    heroImage: graySoleAsset.url,
  },
};

export const getProductsBySpecies = (species: string): Product[] => {
  return products.filter(p => p.species === species);
};

export const getAllSpecies = (): string[] => {
  return Object.keys(speciesInfo);
};
