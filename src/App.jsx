import React, { useState, useEffect } from "react";
import './App.css'
import Liste from './Liste'
import Arama from './Arama'
import Kategori from './Kategori'
function App() {
  
  const yaziListesi = [
    {
      "id": 1,
      "baslik": "Sicilya'da Bir Aşk Hikayesi",
      "yazar": "Ann Radcliffe",
      "kategori": "Klasik",
      "puan": 3
    },
    {
      "id": 2,
      "baslik": "Uğultulu Tepeler",
      "yazar": "Emily Bronte",
      "kategori": "Klasik",
      "puan": 5
    },
    {
      "id": 3,
      "baslik": "Gurur ve Önyargı",
      "yazar": "Jane Austen",
      "kategori": "Klasik",
      "puan": 5
    },
    {
      "id": 4,
      "baslik": "Genç Werther'in Acıları",
      "yazar": "Goethe",
      "kategori": "Klasik",
      "puan": 4
    },
    {
      "id": 5,
      "baslik": "Fahrenheit 451",
      "yazar": "Ray Bradbury",
      "kategori": "Bilim Kurgu",
      "puan": 3
    },
    {
      "id": 6,
      "baslik": "Babil",
      "yazar": "R. F. Kuang",
      "kategori": "Bilim Kurgu",
      "puan": 2
    },
    {
      "id": 7,
      "baslik": "Deli Kurt",
      "yazar": "Hüseyin Nihal Atsız",
      "kategori": "Tarihi Kurgu",
      "puan": 4
    },
    {
      "id": 8,
      "baslik": "Ateşten Gömlek",
      "yazar": "Halide Edip Adıvar",
      "kategori": "Tarihi Kurgu",
      "puan": 3
    },
    {
      "id": 9,
      "baslik": "Uzun Beyaz Bulut - Gelibolu",
      "yazar": "Buket Uzuner",
      "kategori": "Tarihi Kurgu",
      "puan": 4
    },
    {
      "id": 10,
      "baslik": "Hayvan Çiftliği",
      "yazar": "George Orwell",
      "kategori": "Bilim Kurgu",
      "puan": 3
    },
    {
      "id": 11,
      "baslik": "1984",
      "yazar": "George Orwell",
      "kategori": "Bilim Kurgu",
      "puan": 4
    },
  ];

  const kategoriler = Array.from(new Set(yaziListesi.map(yazi => yazi.kategori)));

  const [aramaMetni, setAramaMetni] = React.useState(localStorage.getItem("aranan") || "");
  const [selectedKategori, setSelectedKategori] = useState("");

  const [favorites, setFavorites] = useState(
    JSON.parse(localStorage.getItem("favoriler")) || []
  );
  const [showFavorites, setShowFavorites] = useState(false);

  useEffect(() => {
    localStorage.setItem("aranan", aramaMetni);
  }, [aramaMetni]);

  useEffect(() => {
    localStorage.setItem("favoriler", JSON.stringify(favorites));
  }, [favorites]);

  function handleSearch(event) {
    setAramaMetni(event.target.value);
    localStorage.setItem("aranan", event.target.value);
  }

   function handleKategoriChange(yeniKategori) {
    setSelectedKategori(yeniKategori);
  };

  function karsila(selamlama) {
    return selamlama;
  }

  const handleToggleFavorite = (id) => {
    if (favorites.includes(id)) {
      setFavorites(favorites.filter(favId => favId !== id));
    } else {
      setFavorites([...favorites, id]);
    }
  };

  const arananYazilar = yaziListesi.filter((yazi) => {
     if (showFavorites && favorites.length > 0 && !favorites.includes(yazi.id))  {
      return false;
    }
    const aramaUygun = yazi.baslik.toLowerCase().includes(aramaMetni.toLowerCase());
    const kategoriUygun = selectedKategori === "" || yazi.kategori === selectedKategori;
    return aramaUygun && kategoriUygun;
  })

  return (
    <>
      <h1>{karsila("Kitaplığa Hoşgeldin")}</h1>
      <Arama aramaMetni={aramaMetni} onSearch={handleSearch} />
      <Kategori
        selected={selectedKategori}
        onChange={handleKategoriChange}
        kategoriler={kategoriler}
      />
      <hr />

      
          <button
            onClick={() => setShowFavorites(!showFavorites)}
            className={`p-3 rounded-lg font-semibold transition-all ${
              showFavorites
                ? 'bg-amber-500 text-white shadow-lg'
                : 'bg-gray-200 text-gray-700'
            }`}
          >
            {showFavorites ? 'Tüm Kitapları Göster' : `Sadece Favorileri Göster (${favorites.length})`}
          </button>

          {showFavorites && favorites.length === 0 ? (
            <p>Henüz favori kitap yok. Favori eklemek için listeden bir kitabın kalp butonuna basın.</p>
          ) : (
            <Liste
              yazilar={arananYazilar}
              favorites={favorites}
              onToggleFavorite={handleToggleFavorite}
            />
          )}
    </>
  )
}
export default App