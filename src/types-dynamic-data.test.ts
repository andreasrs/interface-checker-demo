import typesRuntime from './types-ti';
import { createCheckers, Checker } from 'ts-interface-checker';
import { fetchBreedData, fetchOwnerData } from './dogService';
import { Breeds, Owners } from './types';

const typeCheckers = createCheckers(typesRuntime);

describe('dynamic data', () => {
  let breedsData: Breeds;
  let ownersData: Owners;

  beforeAll(async () => {
    breedsData = await fetchBreedData();
    ownersData = await fetchOwnerData();
  });

  it('has breeds data', () => {
    expect(breedsData).toBeTruthy();
  });

  it('has owners data', () => {
    expect(ownersData).toBeTruthy();
  });

  describe('dynamic data typing', () => {
    let BreedsChecker: Checker;
    let OwnersChecker: Checker;

    beforeAll(() => {
      BreedsChecker = typeCheckers.Breeds;
      OwnersChecker = typeCheckers.Owners;
    });

    it('has valid type-definition for dynamic data: Breeds', () => {
      BreedsChecker.check(breedsData);
    });

    it('has valid type-definition for dynamic data: Owners', () => {
      OwnersChecker.check(ownersData);
    });
  });
});
