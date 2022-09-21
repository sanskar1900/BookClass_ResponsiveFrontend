import React from 'react'

function Textbox(props) {
  return (
    <div style={{height:'fitContent', margin:'20px' ,width:'600px', boxShadow:'0px 0px 5px black',borderRadius:'20px', backgroundColor:'white'}}>
        <div className="d-flex fit-content-center justify-content-center " >
      <img style={{padding:'20px'}} src={props.imgsrc} />
      <div className="d-flex flex-column " style={{marginLeft:'20px',padding:'10px'}}>
        <div style={{padding: '10px', fontFamily:'ubuntu ', fontSize:'1.4rem',fontWeight:'800',color:'#0C0908'}}>{props.heading}</div>
      <div className='text-start' style={{width:'100%', height:'fitContent', padding:'10px' ,fontFamily:'ubuntu ', fontSize:'1.2rem'}}>
      {props.content}
      </div>
      </div>
      </div>
    </div>
  )
}

export default Textbox
