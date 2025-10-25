import React from 'react';
function Arama({aramaMetni,onSearch}){
const handleChange=(event)=>{
  onSearch(event);
}
return(
<>
  <label htmlFor="arama">Arama:</label>
      <input type="text" id="arama" onChange={handleChange} value={aramaMetni} placeholder="Başlık ara..."/>
</>
)

}
export default Arama;