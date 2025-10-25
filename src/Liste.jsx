import React from 'react';
import Yazi from './Yazi';

function Liste({ yazilar = [], favorites = [], onToggleFavorite = () => {} }) {

    return(
    <>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}> 
                    {yazilar.map((yazi) => (
                    <Yazi
                        key={yazi.id}
                        {...yazi} 
                        isFavorite={favorites.includes(yazi.id)}
                        onToggleFavorite={onToggleFavorite} 
                         />
                    ))}
                
            </ul>
        </>
    );
}
export default Liste;