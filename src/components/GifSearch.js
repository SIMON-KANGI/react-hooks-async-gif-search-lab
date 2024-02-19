import React from 'react'

function GifSearch({value,HandleChange}) {
  return (
    <div style={{display:"block"}}>
    <label>Enter a search term</label>
    <br></br>
      <input type="search" onChange={HandleChange} value={value} placeholder='search gif'/>
      <button>Find Gif</button>
    </div>
  )
}

export default GifSearch
