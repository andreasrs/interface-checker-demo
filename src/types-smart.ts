import typesRuntime from './types-ti';
import { createCheckers } from 'ts-interface-checker';
import { Breeds, Owners } from './types';

const { Owners, Breeds } = createCheckers(typesRuntime);

export const isOwner = function(data: any): data is Owners {
  return Owners.validate(data) === null;
}

export const isBreeds = function(data: any): data is Breeds {
  return Breeds.validate(data) === null;
}