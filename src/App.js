import React, { useState} from 'react';
import './color.css';


function App() {
  
 


  
  var [islit,setstate]=useState(true);

return(
<div className={"rome "+(islit? "darke":"lite")}   >
 <br></br>
the light is {islit? "lit":"dark"}<br></br>
<button onClick={()=>setstate(!islit)}>switch</button>
</div>)

} 

export default App
