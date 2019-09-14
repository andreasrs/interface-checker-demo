export interface Owner {
  name: string;
  profession: {
    sector: string;
  };
}

export interface Breed {
  name: string;
  coat: {
    colour: string;
  };
}

export type Owners = Owner[];
export type Breeds = Breed[];
