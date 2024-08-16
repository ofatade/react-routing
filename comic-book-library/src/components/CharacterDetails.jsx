import  { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const CharacterDetails = () => {
  const { characterId } = useParams();
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    axios.get(`https://gateway.marvel.com/v1/public/characters/${characterId}?ts=1&apikey=0ec5de34697a81d434e81762a1f7dbc5&hash=d4174a5272eaac6c0c6c9ea863a0add8`)
      .then(response => setCharacter(response.data.data.results[0]))
      .catch(error => console.error('Error fetching character:', error));
  }, [characterId]);

  if (!character) return <p>Loading...</p>;

  return (
    <div>
      <h1>{character.name}</h1>
      <img src={`${character.thumbnail.path}.${character.thumbnail.extension}`} alt={character.name} />
      <p>{character.description}</p>
      {/* Display list of comics or any other details here */}
    </div>
  );
};

export default CharacterDetails;
