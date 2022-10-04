import {React,useState} from 'react'
import Kidsgrade from './Kidsgrade'
// import Kidsgrade2 from './Kidsgrade2'
import Label from './Label'
import Leftimg from './Leftimg'
import Phone from './Phone'
import Radio from './Radio';
import Submit from './Submit';
// import Style from './Style'

function Midivs() {
  const [danger,setdanger]=useState(0);
  const bringData=(data)=>{
      if(data===''){setdanger(1);}
      else {setdanger(0);}
  }
  return (
    // left Div
    <div className='d-flex  middivs' style={{height:'fitContent', border:''}} >
      <div className="picture" style={{height:'fitContent', margin:'10px'}}>
      <Label ></Label>
      <div className='d-flex flex-column'>
      <h1 style={{fontSize:'3rem', fontWeight:'800'}}  className="em">Make Your Kid a Tech Leader</h1>
      <Leftimg></Leftimg>
      </div>
     
    
      </div>
      {/* Right Div */}
      <div  style={{height:'fitContent',width:'100%'
    }} className='rightdiv formr d-flex flex-column'>
      <div ><h1  style={{padding:'10px',fontSize:'1.6rem', fontWeight:'800',width:'100%' ,fontFamily:'ubuntu' , marginTop:'20px' } } >Book Now and Get Certified</h1></div>
      <Phone danger = {danger => setdanger(danger)}></Phone>
      <h6 style={{padding:'10px',color:'grey', fontWeight:'600', marginTop:'10px'}}>Kid's Grade</h6>
      <Kidsgrade></Kidsgrade>
      <h6 style={{padding:'10px',color:'grey', fontWeight:'600'}}>Do you have laptop / PC at home for class?</h6>
      <Radio ></Radio>
     
      <Submit  danger={danger}></Submit>
      </div>
      
    </div>
  )
}

export default Midivs
