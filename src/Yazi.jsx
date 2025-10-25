import React from 'react';

function Yazi({ id, baslik, yazar, kategori, puan, isFavorite, onToggleFavorite }) {
  const handleFavoriteClick = () => {
    if (typeof onToggleFavorite === 'function') onToggleFavorite(id);
  };

  return (
    <li>
      <div className="app-shell">
        <strong className="liste">{baslik}</strong>{' '}
        <span className="liste">({kategori})</span>
        <p className="liste">Yazar: {yazar}</p>

      <span className="liste"> 
        {Array(puan).fill('⭐').join('')}
      </span>

      <button
        onClick={handleFavoriteClick}
        title={isFavorite ? 'Favorilerden Çıkar' : 'Favorilere Ekle'}
      >
        {isFavorite ? '❤️' : '🤍'}
      </button>
      </div>
    </li>
  );
}

export default Yazi;