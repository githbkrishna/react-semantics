import React, { useState } from 'react'
import './App.css'

function Page({ image }) {
  
  console.log(image);
  const [imgset, setimgset] = useState(image[0].url)

  return (
    <div className='pagecontainer'>
      <div className='col4'>
        {
          image.map((val,i)=>{
            return(
              <figure key={i}>
                <img src={val.url} alt="" onClick={()=>setimgset(val.url)}/>
              </figure>
            )
          })
        }
      </div>
      <div className="bigimg">
        {/* <img src={image[0].url} alt="" /> */}
        <img src={imgset} alt="" />
      </div>
    </div>
  )
}

export default Page
