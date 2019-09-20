import { Breeds, Owners } from './types';
import breedData from './data/breed';
import ownerData from './data/owner';

const API_TIMEOUT = 300;

export const fetchBreedData = async (): Promise<Breeds> => {
  return new Promise(resolve => {
    setTimeout(() => resolve(breedData), API_TIMEOUT);
  });
};

export const fetchOwnerData = async (): Promise<Owners> => {
  return new Promise(resolve => {
    setTimeout(() => resolve(ownerData), API_TIMEOUT);
  });
};
