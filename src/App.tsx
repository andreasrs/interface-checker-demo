import React, { useState } from 'react';
import { Owners, Breeds } from './types';
import { fetchOwnerData, fetchBreedData } from './dog-service-smart';
import './App.css';

function App() {
  const [ownerData, setOwnerData] = useState<Owners | undefined>(undefined);
  const [ownerError, setOwnerError] = useState<string | undefined>(undefined);
  const [breedData, setBreedData] = useState<Breeds | undefined>(undefined);
  const [breedError, setBreedError] = useState<string | undefined>(undefined);
  const [sectors, setSectors] = useState<string[] | undefined>(undefined);
  const [colours, setColours] = useState<string[] | undefined>(undefined);

  return (
    <div className="app">
      <h1>Dog Info - The Ultimate dog service</h1>

      <button
        onClick={async () => {
          try {
            const data = await fetchOwnerData();
            setOwnerData(data);
            setOwnerError(undefined);
          } catch (err) {
            setOwnerError(err);
          }
        }}
      >
        Fetch owner data
      </button>

      <button
        onClick={async () => {
          try {
            const data = await fetchBreedData();
            setBreedData(data);
            setBreedError(undefined);
          } catch (err) {
            setBreedError(err);
          }
        }}
      >
        Fetch breed data
      </button>

      <div>
        {ownerError && 'Error processing owners'}
        {ownerData && (
          <div>
            <h2>Owner Data:</h2>
            <pre>{JSON.stringify(ownerData, null, 2)}</pre>
            <button
              onClick={() =>
                setSectors(ownerData.map(o => o.profession.sector))
              }
            >
              Filter sectors
            </button>
            {sectors && (
              <div>
                <h3>Sectors</h3>
                {sectors}
              </div>
            )}
          </div>
        )}
        {breedError && 'Error processing breeds'}
        {breedData && (
          <div>
            <h2>Breed Data:</h2>
            <pre>{JSON.stringify(breedData, null, 2)}</pre>
            <button
              onClick={() => setColours(breedData.map(b => b.coat.colour))}
            >
              Filter colours
            </button>
            {colours && (
              <div>
                <h3>Colours</h3>
                {colours.map(c => `${c} `)}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
