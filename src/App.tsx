import { SideBar } from './components/SideBar';
import { Content } from './components/Content';
import { useState } from 'react';

import './styles/global.scss';

import './styles/sidebar.scss';
import './styles/content.scss';

export function App() {

  const [genreId, setGenreId] = useState(1);

  function handleGenreChange(genreId: number) {
    setGenreId(genreId);
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      {/* Passing functions to child components: https://reactjs.org/docs/faq-functions.html */}
      <SideBar genreId={genreId} onGenreChange={handleGenreChange} />
      <Content genreId={genreId} />
    </div>
  )
}