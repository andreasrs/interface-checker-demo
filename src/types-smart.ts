import typesRuntime from './types-ti';
import { createCheckers } from 'ts-interface-checker';
import { Breeds, Owners } from './types';

const { Owners: OwnersChecker, Breeds: BreedsChecker } = createCheckers(typesRuntime);

export const isOwner = function(data: any): data is Owners {
  return OwnersChecker.validate(data) === null;
}

export const isBreeds = function(data: any): data is Breeds {
  return BreedsChecker.validate(data) === null;
}