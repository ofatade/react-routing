import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const BrowseCharacters = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios.get('https://gateway.marvel.com/v1/public/characters?ts=1&apikey=0ec5de34697a81d434e81762a1f7dbc5&hash=d4174a5272eaac6c0c6c9ea863a0add8')
      .then(response => setCharacters(response.data.data.results))
      .catch(error => console.error('Error fetching characters:', error));
  }, []);

  return (
    <div>
      <h1>Browse Characters</h1>
      <ul>
        {characters.map(character => (
          <li key={character.id}>
            <Link to={`/characters/${character.id}`}>
              <img src={`${character.thumbnail.path}.${character.thumbnail.extension}`} alt={character.name} />
              <p>{character.name}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BrowseCharacters;
