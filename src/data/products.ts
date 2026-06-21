import salmonImg from '@/assets/fish-salmon.jpg';
import salmonFilletImg from '@/assets/fish-salmon-fillet.jpg';
import salmonSteaksImg from '@/assets/fish-salmon-steaks.jpg';
import salmonWholeImg from '@/assets/fish-salmon-whole.jpg';
import tunaImg from '@/assets/fish-tuna.jpg';
import halibutImg from '@/assets/fish-halibut.jpg';
import halibutSteaksImg from '@/assets/fish-halibut-steaks.jpg';
import snapperImg from '@/assets/fish-snapper.jpg';
import snapperFilletImg from '@/assets/fish-snapper-fillet.jpg';
import snapperWholeImg from '@/assets/fish-snapper-whole.jpg';
import codImg from '@/assets/fish-cod.jpg';
import seabassImg from '@/assets/fish-seabass.jpg';
import seabassWholeImg from '@/assets/fish-seabass-whole.jpg';
import steaksImg from '@/assets/fish-steaks.jpg';
import branzinoImg from '@/assets/fish-branzino.jpg';
import branzinoFilletImg from '@/assets/fish-branzino-fillet.jpg';
import branzinoWholeImg from '@/assets/fish-branzino-whole.jpg';
import branzinoButterflyImg from '@/assets/fish-branzino-butterfly.jpg';
import grouperImg from '@/assets/fish-grouper.jpg';
import grouperSteaksImg from '@/assets/fish-grouper-steaks.jpg';
import grouperWholeImg from '@/assets/fish-grouper-whole.jpg';
import flounderImg from '@/assets/fish-flounder.jpg';
import flounderWholeImg from '@/assets/fish-flounder-whole.jpg';
import tilefishImg from '@/assets/fish-tilefish.jpg';
import tilefishWholeImg from '@/assets/fish-tilefish-whole.jpg';
import whitingAsset from '@/assets/fish-whiting.jpg.asset.json';
import whitingWholeAsset from '@/assets/fish-whiting-whole.png.asset.json';
import whitingButterflyImg from '@/assets/fish-whiting-butterfly.jpg';
import whitingHeadoffImg from '@/assets/fish-whiting-headoff.jpg';

import mulletImg from '@/assets/fish-mullet.jpg';
import mulletSteaksImg from '@/assets/fish-mullet-steaks.jpg';
import mulletWholeImg from '@/assets/fish-mullet-whole.jpg';
import buffaloImg from '@/assets/fish-buffalo.jpg';
import buffaloFilletImg from '@/assets/fish-buffalo-fillet.jpg';
import buffaloSteaksImg from '@/assets/fish-buffalo-steaks.jpg';
import buffaloHalfmoonImg from '@/assets/fish-buffalo-halfmoon.jpg';
import buffaloWholeImg from '@/assets/fish-buffalo-whole.jpg';
import carpImg from '@/assets/fish-carp.jpg';
import carpFilletImg from '@/assets/fish-carp-fillet.jpg';
import carpSteaksImg from '@/assets/fish-carp-steaks.jpg';
import carpHalfmoonImg from '@/assets/fish-carp-halfmoon.jpg';
import carpWholeImg from '@/assets/fish-carp-whole.jpg';
import doradoFilletImg from '@/assets/fish-dorado-fillet.jpg';
import doradoWholeAsset from '@/assets/fish-dorado-whole.png.asset.json';
import tilapiaFilletImg from '@/assets/fish-tilapia-fillet.jpg';
import tilapiaWholeImg from '@/assets/fish-tilapia-whole.jpg';

// Generic product imagery placeholders
import genericFilletImg from '@/assets/fish-fillet.jpg';
import genericWholeImg from '@/assets/fish-whole.jpg';

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
  // Salmon
  { id: 1, name: 'King Salmon Fillet', species: 'salmon', origin: 'Alaska', price: 36.99, weight: '5lbs', type: 'Fillet Sushi Grade', rating: 5, image: salmonImg, badge: 'Best Seller', badgeColor: 'bg-accent' },
  { id: 2, name: 'Salmon Fillet', species: 'salmon', origin: 'Norway', price: 29.99, weight: '5lb', type: 'Fillet Sushi Grade', rating: 5, image: salmonFilletImg },
  { id: 3, name: 'Salmon Steaks', species: 'salmon', origin: 'Norway', price: 22.99, weight: '5lb', type: 'Steaks', rating: 5, image: salmonSteaksImg },
  
  
  // Tuna
  { id: 5, name: 'Tuna Fillet Fresh', species: 'tuna', origin: 'Pacific Ocean', price: 24.99, weight: '5lbs', type: 'Sushi Grade', rating: 5, image: tunaImg, badge: 'Premium', badgeColor: 'bg-secondary' },
  { id: 6, name: 'Tuna Steaks', species: 'tuna', origin: 'Vietnam/Thailand', price: 18.99, weight: '5lb', type: 'Steaks Frozen', rating: 5, image: steaksImg },
  
  // Halibut
  { id: 7, name: 'Halibut Fillet', species: 'halibut', origin: 'Arctic Ocean', price: 36.99, weight: '5lbs', type: 'Fillet', rating: 5, image: halibutImg },
  { id: 8, name: 'Halibut Steaks', species: 'halibut', origin: 'Arctic Ocean', price: 29.99, weight: '5lb', type: 'Steaks', rating: 5, image: halibutSteaksImg },
  
  // Red Snapper
  { id: 9, name: 'Red Snapper Fillet', species: 'snapper', origin: 'USA', price: 23.99, weight: '5lb', type: 'Fillet', rating: 5, image: snapperFilletImg },
  { id: 10, name: 'Red Snapper Whole', species: 'snapper', origin: 'USA', price: 16.99, weight: '5lb', type: 'Whole Fish', rating: 5, image: snapperWholeImg },
  
  // COD
  { id: 11, name: 'COD Fillet', species: 'cod', origin: 'Alaska', price: 19.99, weight: '5lbs', type: 'Fillet', rating: 5, image: codImg },
  
  // Chilean Sea Bass
  { id: 12, name: 'Chilean Sea Bass', species: 'seabass', origin: 'Antarctica', price: 32.99, weight: '5lb', type: 'Cut by Pound', rating: 5, image: seabassImg, badge: 'Chef Favorite', badgeColor: 'bg-primary' },
  { id: 13, name: 'Chilean Sea Bass Whole', species: 'seabass', origin: 'Antarctica', price: 29.99, weight: '15lb', type: 'Whole Fish w/o Head', rating: 5, image: seabassWholeImg },
  
  // Branzino
  { id: 14, name: 'Branzino Fillet', species: 'branzino', origin: 'Greece', price: 27.99, weight: '5lb', type: 'Fillet', rating: 5, image: branzinoFilletImg },
  { id: 15, name: 'Branzino Fillet', species: 'branzino', origin: 'Turkey', price: 23.99, weight: '5lb', type: 'Fillet', rating: 5, image: branzinoFilletImg },
  { id: 16, name: 'Branzino Butterfly', species: 'branzino', origin: 'Turkey', price: 23.99, weight: '5lb', type: 'Butterfly', rating: 5, image: branzinoButterflyImg },
  { id: 17, name: 'Branzino Whole', species: 'branzino', origin: 'Greece', price: 18.99, weight: '5lb', type: 'Whole Fish', rating: 5, image: branzinoWholeImg },
  { id: 18, name: 'Branzino Whole', species: 'branzino', origin: 'Turkey', price: 15.99, weight: '5lb', type: 'Whole Fish', rating: 5, image: branzinoWholeImg },
  
  // Grouper
  { id: 19, name: 'Grouper Fillet', species: 'grouper', origin: 'USA', price: 28.99, weight: '5lb', type: 'Fillet', rating: 5, image: grouperImg },
  { id: 20, name: 'Grouper Steaks', species: 'grouper', origin: 'USA', price: 26.99, weight: '5lb', type: 'Steaks', rating: 5, image: grouperSteaksImg },
  { id: 21, name: 'Grouper Whole', species: 'grouper', origin: 'USA', price: 22.99, weight: '5-8lb', type: 'Whole Fish', rating: 5, image: grouperWholeImg },
  
  // Flounder
  { id: 22, name: 'Flounder Fillet', species: 'flounder', origin: 'USA', price: 22.99, weight: '5lb', type: 'Fillet', rating: 5, image: flounderImg },
  { id: 23, name: 'Flounder Whole', species: 'flounder', origin: 'USA', price: 18.99, weight: '5lb', type: 'Whole Fish', rating: 5, image: flounderWholeImg },
  
  // Tile Fish
  { id: 24, name: 'Tile Fish Fillet', species: 'tilefish', origin: 'USA', price: 19.99, weight: '5lbs', type: 'Fillet', rating: 5, image: tilefishImg },
  { id: 25, name: 'Tile Fish Whole', species: 'tilefish', origin: 'USA', price: 16.99, weight: '5lbs', type: 'Whole Fish', rating: 5, image: tilefishWholeImg },
  
  // Whiting
  { id: 26, name: 'Whiting Butterfly Fillet', species: 'whiting', origin: 'USA', price: 14.99, weight: '5lb', type: 'Butterfly Fillet', rating: 5, image: whitingButterflyImg },
  { id: 27, name: 'Whiting Head Off', species: 'whiting', origin: 'USA', price: 12.99, weight: '5lb', type: 'Head Off Clean', rating: 5, image: whitingHeadoffImg },
  { id: 28, name: 'Whiting Whole', species: 'whiting', origin: 'USA', price: 9.99, weight: '5lb', type: 'Whole Fish', rating: 5, image: whitingWholeAsset.url },
  
  // Mullet
  { id: 29, name: 'Mullet Fillet', species: 'mullet', origin: 'USA', price: 19.99, weight: '5lb', type: 'Fillet', rating: 5, image: mulletImg },
  { id: 30, name: 'Mullet Steaks', species: 'mullet', origin: 'USA', price: 12.99, weight: '5lb', type: 'Steaks', rating: 5, image: mulletSteaksImg },
  { id: 31, name: 'Mullet Whole', species: 'mullet', origin: 'USA', price: 11.99, weight: '5lbs', type: 'Whole Fish', rating: 5, image: mulletWholeImg },
  
  // Buffalo
  { id: 32, name: 'Buffalo Fillet', species: 'buffalo', origin: 'Mississippi River', price: 19.99, weight: '5lb', type: 'Fillet', rating: 5, image: buffaloFilletImg },
  { id: 33, name: 'Buffalo Steaks', species: 'buffalo', origin: 'Mississippi River', price: 14.99, weight: '5lbs', type: 'Circle Cuts', rating: 5, image: buffaloSteaksImg },
  { id: 34, name: 'Buffalo Half Moon', species: 'buffalo', origin: 'Mississippi River', price: 14.99, weight: '5lbs', type: 'Half Moon Cuts', rating: 5, image: buffaloHalfmoonImg },
  { id: 35, name: 'Buffalo Whole', species: 'buffalo', origin: 'Mississippi River', price: 9.99, weight: '10-12lb', type: 'Whole Fish Clean', rating: 5, image: buffaloWholeImg },
  
  // Carp
  { id: 36, name: 'Carp Fillet', species: 'carp', origin: 'Mississippi River', price: 19.99, weight: '5lbs', type: 'Fillet', rating: 5, image: carpFilletImg },
  { id: 37, name: 'Carp Steaks', species: 'carp', origin: 'Mississippi River', price: 14.99, weight: '5lbs', type: 'Circle Cuts', rating: 5, image: carpSteaksImg },
  { id: 38, name: 'Carp Half Moon', species: 'carp', origin: 'Mississippi River', price: 14.99, weight: '5lbs', type: 'Half Moon Cuts', rating: 5, image: carpHalfmoonImg },
  { id: 39, name: 'Carp Whole', species: 'carp', origin: 'Mississippi River', price: 9.99, weight: '10-12lb', type: 'Whole Fish Clean', rating: 5, image: carpWholeImg },

  // Dorado (Mahi-Mahi)
  { id: 40, name: 'Dorado Fillet', species: 'dorado', origin: 'USA', price: 27.99, weight: '5lb', type: 'Fillet', rating: 5, image: doradoFilletImg },
  { id: 41, name: 'Dorado Whole', species: 'dorado', origin: 'USA', price: 18.99, weight: '5-8lb', type: 'Whole Fish Clean', rating: 5, image: doradoWholeAsset.url },

  // Tilapia
  { id: 42, name: 'Tilapia Fillet', species: 'tilapia', origin: 'USA', price: 7.00, weight: '5lb', type: 'Fillet', rating: 5, image: tilapiaFilletImg },
  { id: 43, name: 'Tilapia Whole', species: 'tilapia', origin: 'USA', price: 9.99, weight: '5lb', type: 'Whole Fish', rating: 5, image: tilapiaWholeAsset.url },
];

// Get flag image for origin
export const getFlagImage = (origin: string): string | null => {
  const flagMap: Record<string, string> = {
    'Alaska': usaFlagImg,
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
    'Alaska': '🇺🇸',
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
  salmon: {
    slug: 'salmon',
    name: 'Salmon',
    description: 'Wild-caught and farm-raised salmon from the pristine waters of Alaska and Norway. Known for its rich, buttery flavor and beautiful pink-orange flesh.',
    heroImage: salmonImg,
  },
  tuna: {
    slug: 'tuna',
    name: 'Tuna',
    description: 'Premium sushi-grade tuna from the Pacific Ocean. Prized for its deep red color and clean, meaty flavor perfect for sashimi or searing.',
    heroImage: tunaImg,
  },
  halibut: {
    slug: 'halibut',
    name: 'Halibut',
    description: 'Wild-caught halibut from the cold Arctic waters. Celebrated for its firm, snow-white flesh and sweet, delicate flavor.',
    heroImage: halibutImg,
  },
  snapper: {
    slug: 'snapper',
    name: 'Red Snapper',
    description: 'Fresh-caught red snapper from the Gulf of Mexico. Offers a sweet, nutty flavor with a firm texture that holds up beautifully to any cooking method.',
    heroImage: snapperImg,
  },
  cod: {
    slug: 'cod',
    name: 'Cod',
    description: 'Wild Alaskan cod with its mild, slightly sweet flavor and flaky white flesh. A versatile favorite for fish and chips to elegant preparations.',
    heroImage: codImg,
  },
  seabass: {
    slug: 'seabass',
    name: 'Chilean Sea Bass',
    description: 'The legendary Patagonian toothfish, prized by chefs worldwide for its rich, buttery flavor and velvety texture that melts in your mouth.',
    heroImage: seabassImg,
  },
  branzino: {
    slug: 'branzino',
    name: 'Branzino',
    description: 'Mediterranean sea bass from Greece and Turkey. Known for its delicate, flaky white flesh and subtle, sweet flavor perfect for whole roasting.',
    heroImage: branzinoImg,
  },
  grouper: {
    slug: 'grouper',
    name: 'Grouper',
    description: 'Wild-caught grouper from the Atlantic. Features a mild, sweet flavor with a firm texture that makes it perfect for grilling and blackening.',
    heroImage: grouperImg,
  },
  flounder: {
    slug: 'flounder',
    name: 'Flounder',
    description: 'Fresh Atlantic flounder with its delicate, fine-textured white flesh. Its mild, sweet taste makes it a versatile choice for any preparation.',
    heroImage: flounderImg,
  },
  tilefish: {
    slug: 'tilefish',
    name: 'Tile Fish',
    description: 'Wild-caught tilefish from the Atlantic coast. Features a sweet, slightly firm flesh reminiscent of lobster with excellent versatility.',
    heroImage: tilefishImg,
  },
  whiting: {
    slug: 'whiting',
    name: 'Whiting',
    description: 'Fresh Atlantic whiting with tender, flaky white flesh. An affordable, mild-flavored fish perfect for frying and casual preparations.',
    heroImage: whitingAsset.url,
  },
  mullet: {
    slug: 'mullet',
    name: 'Mullet',
    description: 'Wild-caught mullet from coastal waters. Known for its rich, distinctive flavor and firm texture ideal for smoking and grilling.',
    heroImage: mulletImg,
  },
  buffalo: {
    slug: 'buffalo',
    name: 'Buffalo Fish',
    description: 'Sustainably harvested buffalo fish from the Mississippi River. A traditional favorite with firm, flavorful flesh perfect for traditional preparations.',
    heroImage: buffaloImg,
  },
  carp: {
    slug: 'carp',
    name: 'Carp',
    description: 'Fresh carp from the Mississippi River. Prized in many cuisines for its firm texture and rich flavor, especially in traditional Jewish and Asian cooking.',
    heroImage: carpImg,
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
};

export const getProductsBySpecies = (species: string): Product[] => {
  return products.filter(p => p.species === species);
};

export const getAllSpecies = (): string[] => {
  return Object.keys(speciesInfo);
};
