
import './App.css';
import { useState } from 'react';
import { data } from './data';

function App() {
  const[hotels,setHotels]=useState(data);
  console.log(data)
  const[showText,setShowText]=useState(false)
  const[showMore,setShowMore]=useState(false)

  const removeHotels =(id)=>{
    let newHotels=hotels.filter(item=>item.id!==id);
    setHotels(newHotels)
  }
  const showTextClick=(element)=>{
   element.showMore= !element.showMore
   setShowText(!showText)
  }
  return (<div>

    <div className="container">
     <h1>Nyc top {hotels.length} hotels</h1>
    </div>

{hotels.map((element =>{
  const {id,hotelName, description,image,source, showMore}=element;
  return(
    <div key={id}>
<div className="container">
    <h2>{id} - {hotelName}</h2>
</div>

<div className="container">
    <p>{showMore ? description:description.substring(0,242)+"....."}
    <button onClick={()=>showTextClick(element)}>{showMore?"show less":"show more"}</button>
    </p>
</div>

<div className="container">
    <img src="{image}" width="400px"  />
</div>

<div className="container">
    <p>{source}</p>
</div>

<div className="container">
   <button className='btn' onClick={()=>removeHotels(id)}>Remove</button>
</div>

    </div>
  )
}))}
</div>
  );
}

export default App;
