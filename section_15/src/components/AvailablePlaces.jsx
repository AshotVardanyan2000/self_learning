import React, { useState, useEffect } from 'react';
import Places from './Places.jsx';
import { use } from 'react';

export default function AvailablePlaces({ onSelectPlace }) {
  const [availablePlaces, setAvailablePlaces] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch('http://localhost:3001/places');
        const data = await response.json();
        setAvailablePlaces(data.places);
      } catch (error) {
        console.error('Error fetching places:', error);
      }
    })();
  }, []);
  return (
    <Places
      title="Available Places"
      places={availablePlaces}
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}
