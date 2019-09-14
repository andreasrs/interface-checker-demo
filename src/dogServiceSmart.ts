import { createCheckers } from 'ts-interface-checker';
import { Breeds, Owners } from './types';
import typesRuntime from './types-ti';
import breedData from './data/breed';
import ownerData from './data/owner';

const API_TIMEOUT = 300;

const { Breeds: BreedsChecker, Owners: OwnersChecker } = createCheckers(
  typesRuntime
);

export const fetchBreedData = async (): Promise<Breeds> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const isInvalid = BreedsChecker.validate(breedData);
      const isInvalidStrict = BreedsChecker.strictValidate(breedData);

      if (isInvalidStrict) {
        console.warn('strict type check failed', isInvalidStrict);
      }

      if (isInvalid) {
        reject(isInvalid);
      } else {
        resolve(breedData);
      }
    }, API_TIMEOUT);
  });
};

export const fetchOwnerData = async (): Promise<Owners> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const isInvalid = OwnersChecker.validate(ownerData);
      const isInvalidStrict = OwnersChecker.strictValidate(ownerData);

      if (isInvalidStrict) {
        console.warn('strict type check failed', isInvalidStrict);
      }

      if (isInvalid) {
        reject(isInvalid);
      } else {
        resolve(ownerData);
      }
    }, API_TIMEOUT);
  });
};
