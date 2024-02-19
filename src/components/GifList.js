


function GifList({SearchedTerm}) {
return (
    <div style={{display:"flex"}}>
      <ul>
        {SearchedTerm.map(gif=>{
          return(
            <div key={gif.id}>
            <img src={gif.images.original.url} alt={gif.slug} />
            </div>
          )
        })}
      </ul>
      
    </div>
  )
}

export default GifList
