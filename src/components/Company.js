import React from 'react'

function Company() {
  return (
    <div style={{hight:'fitContent', width:'fitContent', border:'', backgroundColor:'white'}} className="d-flex justify-content-center align-item-center justify-content-around">
        <div className="d-flex flex-column justify-content-center align-items-center" style={{border:'', hight:'fitContent', width:'fitContent'}}>
      <div className='div1' style={{padding:'40px'}}><img  style={{ padding:'' , width:'300px',marginTop:'15px'} } className="logo d-flex justify-content-center align-item-center" src="https://learn.brightchamps.com/images/logo.png" alt="logo" /></div>
      <div><a className='homepage underline-on-hover pointer'><h5 style={{fontFamily:'Arial, Helvetica, sans-serif', color:'gray'}}>Home</h5></a></div>
      <div><a className='aboutus underline-on-hover pointer'><h5 style={{fontFamily:'Arial, Helvetica, sans-serif', color:'gray'}}>About  Us</h5></a></div>
      </div>
      <div className="my12">
      <div className='bottomright d-flex flex-column '  >
      <a className='homepage2 underline-on-hover' style={{fontFamily:'Arial, Helvetica, sans-serif',textDecoration:'none'}}><h5 style={{fontFamily:'Arial, Helvetica, sans-serif'}}>Home</h5></a>
      <a className='aboutus2 underline-on-hover' style={{fontFamily:'Arial, Helvetica, sans-serif',textDecoration:'none'}}><h5 style={{fontFamily:'Arial, Helvetica, sans-serif'}}>About Us</h5></a>
      </div>
      </div>
    </div>
  )
}

export default Company
