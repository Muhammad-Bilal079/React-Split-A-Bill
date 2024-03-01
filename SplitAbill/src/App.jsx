import { useState } from 'react'
import Addfriend from './components/Addfriend'
import Friendlist from './components/Friendlist'


function App() {
  const[frndArray , setFrndArray] = useState([])

  return (
   <>
   <Friendlist frndArray={frndArray} setFrndArray={setFrndArray} />
   
   
   </>
  )
}

export default App
