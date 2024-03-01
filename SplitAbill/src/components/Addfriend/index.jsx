import React, { useState } from 'react'
import './add.css';

function index({ frndArray, setFrndArray }) {
  const [showComponent, setShowComponent] = useState(true);

  const [name, setName] = useState("")
  const [imag, setImag] = useState("")

  function addData() {
    let newData = {
      name: name,
      image: imag,

    }
    setFrndArray((prev) => [...prev, newData])

    console.log(frndArray);
    setName(" ")
    setImag(" ")
  }




  const handleClose = () => {
    setShowComponent(false);

  };
  return (
    <div className='addbox'>
      <div className='frname' >
        <p>Friend Name :</p>
        <input type="text" placeholder='Enter name' className='inpt' value={name}
          onChange={(e) => setName(e.target.value)} />
      </div>

      <div className='frname'>
        <p>Select image :</p>
        <input placeholder='Image location' className='inpt' value={imag}
          onChange={(e) => setImag(e.target.value)} />
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        {showComponent && (<button className='addbtn closebtn' onClick={handleClose}>Close</button>)}
        <button className='addbtn' onClick={addData}>ADD</button>
      </div>
    </div>
  )
}

export default index
