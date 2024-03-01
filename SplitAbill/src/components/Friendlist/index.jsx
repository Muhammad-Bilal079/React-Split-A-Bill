import React,{useState} from 'react'
import './friend.css';
import Addfriend from '../../components/Addfriend/index.jsx'
function index({frndArray , setFrndArray}) {
  const [showAddFriend, setShowAddFriend] = useState(false);


  return (
    <>
    <div className='frndlist'>
      <div className='friend'>
  
        <div className='img'>
          <img src="https://images.pexels.com/photos/906052/pexels-photo-906052.jpeg?
          auto=compress&cs=tinysrgb&w=600"  height={80} width={80}  className='img' alt="" />
        </div>
  
        <div className='paras'>
          <p>Bilal</p>
          <p>decription</p>
        </div>
  
        <div>
          <button className='select'>select</button>
        </div>
  
      </div>
  
      
      <button className='addfriend' onClick={() => setShowAddFriend(true)}>Add Friend</button>
  
    </div>
    <div style={{marginTop:'10px'}}>
    {showAddFriend && <Addfriend  frndArray={frndArray} setFrndArray={setFrndArray}/>}
  
    </div>
  </>
   
  )
}

export default index


