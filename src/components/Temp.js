import React from 'react'
import Label from './Label'
import Logo from './Logo'

function Temp() {
  return (
    <div className='tempparent'>
        <div className='tempdiv d-flex align-items-center justify-content-center flex-column'>
            {/* <<Logo></Logo>> */}
           
           <div> <Label></Label></div>
        <div><h1 style={{fontSize:'3rem', fontWeight:'800',color:'gray'}}  className="em">Make Your Kid a Tech Leader</h1></div>
        </div>
      
    </div>
  )
}

export default Temp
