const BASIC_URL = 'http://localhost:3000';

export const fetchAvailablePlaces = async () => {
  try {
    const response = await fetch(`${BASIC_URL}/places`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    return data.places;
  } catch (error) {
    console.error('Error fetching places:', error);
    return [];
  }
};

export const updateUserPlaces = async (places) => {
  try {
    const response = await fetch(`${BASIC_URL}/user-places`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ places }), // Example user ID
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error updating user places:', error);
    return null;
  }
};
