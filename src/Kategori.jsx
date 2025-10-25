import React from "react";

function Kategori({ selected, onChange, kategoriler }) {
  
  const handleChange = (event) => {
      onChange(event.target.value);
  }

  return (
    <>
      <label htmlFor="kategori" className="block mb-2 font-medium text-gray-700">
      </label>
      <select
        id="kategori"
        value={selected}
        onChange={handleChange} 
        className="border border-gray-300 rounded-lg p-2 w-full max-w-xs focus:ring-indigo-500 focus:border-indigo-500"
      >
        <option value="">-- Tüm Kategoriler --</option>
        {kategoriler && kategoriler.map((kategori, index) => (
          <option key={index} value={kategori}>
            {kategori}
          </option>
        ))}
      </select>
    </>
  );
}

export default Kategori;