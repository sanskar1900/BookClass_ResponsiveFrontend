import React from 'react'
import Kidsgrade from './Kidsgrade'
// import Kidsgrade2 from './Kidsgrade2'
import Label from './Label'
import Leftimg from './Leftimg'
import Phone from './Phone'
import Radio from './Radio';
import Submit from './Submit';
// import Style from './Style'
function Midivs() {
  return (
    // left Div
    <div className='d-flex align-items-center justify-content-center middivs' style={{height:'fitContent', border:''}} >
      <div className="picture" style={{height:'fitContent', margin:'10px'}}>
      <Label ></Label>
      <div className='d-flex flex-column'>
      <h1 style={{fontSize:'3rem', fontWeight:'800'}}  className="em">Make Your Kid a Tech Leader</h1>
      <Leftimg></Leftimg>
      </div>
     
    
      </div>
      {/* Right Div */}
      <div  style={{height:'fitContent',width:'100%'
    }} className='rightdiv formr d-flex flex-column align-items-center'>
      <div ><h1  style={{fontSize:'1.5rem', fontWeight:'400',width:'100%' ,fontFamily:'ubuntu' , marginTop:'20px' } } className='rightTopText shadow-sm mb-5 bg-white rounded text-center' >Book Now and Get Certified</h1></div>
      <Phone></Phone>
      <h5 style={{color:'grey', fontWeight:'400', marginTop:'30px'}}>Kid's Grade</h5>
      <Kidsgrade></Kidsgrade>
      <h5 style={{color:'grey', fontWeight:'400'}}>Do you have laptop / PC at home for class?</h5>
      <Radio></Radio>
      <Submit></Submit>
       
      </div>
    </div>
  )
}

export default Midivs
