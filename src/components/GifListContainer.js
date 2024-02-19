import React from 'react'
import GifList from './GifList'
import { useEffect,useState } from 'react'
import GifSearch from './GifSearch'
function GifListContainer() {
  const [listGif, getlistGif]=useState([])
const [input, setInput]=useState("")

const SearchedTerm=listGif.filter(gif=>{
    const FetchTerm=input ==="" ||gif.slug.toUpperCase().includes(input.toUpperCase())
  return FetchTerm
})

function HandleChange(e){
setInput(e.target.value)
}
console.log(listGif)
useEffect(()=>{
fetch(`https://api.giphy.com/v1/gifs/search?q=${input}&api_key=GFqux5hbD7MjkrjyQDP4SdEo0L1Lb4gn`)

.then(res=>{
  if(!res.ok){
     console.log("error")
  }
  return res.json()
})
.then(data=>{getlistGif(data.data)})
},[input])
  return (
    <div style={{display:"flex"}}>
      <GifList SearchedTerm={SearchedTerm}/>
      <GifSearch value={input} HandleChange={HandleChange}/>
    </div>
  )
}

export default GifListContainer
