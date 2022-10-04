import {React,useState} from 'react'
import Alert from './Alert';
import Kidsgrade from './Kidsgrade'

function Submit(props) {
  const [d,setd]=useState(1);

  const check=()=>{
    if(props.danger===0){setd(0);}
  }
  return (
    
    <div className='' style={{width:'100%'}}>
    {d===0?<Alert/>:''}
      <button onClick={()=>check} type="button" className="btn btn-primary  " style={{borderTopLeftRadius:'0px',borderTopRightRadius:'0px',borderBottomLeftRadius:'10px',borderBottomRightRadius:'10px',marginTop:'20px',width:'100%', fontWeight:'1000', fontFamily:'ubuntu'}}>Schedule a Free Class</button>
    
    </div>

  )
}

export default Submit
