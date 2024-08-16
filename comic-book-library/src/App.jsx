import { Routes, Route, NavLink } from 'react-router-dom';
import Home from './components/Home';
import BrowseCharacters from './components/BrowseCharacters';
import CharacterDetails from './components/CharacterDetails';
import Comics from './components/Comics';
import NotFound from './components/NotFound';

const App = () => {
  return (
    <div>
      <nav>
        <ul>
          <li><NavLink to="/" exact activeClassName="active-link">Home</NavLink></li>
          <li><NavLink to="/characters" activeClassName="active-link">Browse Characters</NavLink></li>
          <li><NavLink to="/comics" activeClassName="active-link">Comics</NavLink></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/characters" element={<BrowseCharacters />} />
        <Route path="/characters/:characterId" element={<CharacterDetails />} />
        <Route path="/comics" element={<Comics />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
