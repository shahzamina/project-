import React from 'react'
import './Mainhead.css'
const Mainhead = ({head }) => {
  return (
  <div className='pack-class border border-black '>
    <div className='main-class  text-center shadow align-item-center ' style={{ marginTop:'2%',  padding:'10px',height:'90px'}}>
      <h1 className='style p-2' >{head}</h1>
   </div>
    </div>
  )
}

export default Mainhead
