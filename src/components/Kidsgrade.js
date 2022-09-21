import {React,useState} from 'react'
function Kidsgrade() {
    const [myStyle1,setMystyle1]=useState({border:'1px solid black',height:'60px',width:'80px',color:'black',margin:'10px'});
    const [myStyle2,setMystyle2]=useState({border:'1px solid black',height:'60px',width:'80px',color:'black',margin:'10px'});
    const [myStyle3,setMystyle3]=useState({border:'1px solid black',height:'60px',width:'80px',color:'black',margin:'10px'});
    const [myStyle4,setMystyle4]=useState({border:'1px solid black',height:'60px',width:'80px',color:'black',margin:'10px'});
    const [myStyle5,setMystyle5]=useState({border:'1px solid black',height:'60px',width:'80px',color:'black',margin:'10px'});
    const togglestyle=()=>{
        if(myStyle2.border=='2px solid #0047ab')
        {
            setMystyle2({border:'1px solid black',height:'60px',width:'80px',color:'black',margin:'10px'});
        }
        if(myStyle3.border=='2px solid #0047ab')
        {
            setMystyle3({border:'1px solid black',height:'60px',width:'80px',color:'black',margin:'10px'});
        }
        if(myStyle4.border=='2px solid #0047ab')
        {
            setMystyle4({border:'1px solid black',height:'60px',width:'80px',color:'black',margin:'10px'});
        }
        if(myStyle5.border=='2px solid #0047ab')
        {
            setMystyle5({border:'1px solid black',height:'60px',width:'80px',color:'black',margin:'10px'});
        }
        if(myStyle1.border=='1px solid black')
        {
            setMystyle1({border:'2px solid #0047ab',height:'60px',width:'80px',color:' #0047ab',margin:'10px'});
        }
        
    }
    const togglestyle2=()=>{
        if(myStyle1.border=='2px solid #0047ab')
        {
            setMystyle1({border:'1px solid black',height:'60px',width:'80px',color:'black',margin:'10px'});
        }
        if(myStyle3.border=='2px solid #0047ab')
        {
            setMystyle3({border:'1px solid black',height:'60px',width:'80px',color:'black',margin:'10px'});
        }
        if(myStyle4.border=='2px solid #0047ab')
        {
            setMystyle4({border:'1px solid black',height:'60px',width:'80px',color:'black',margin:'10px'});
        }
        if(myStyle5.border=='2px solid #0047ab')
        {
            setMystyle5({border:'1px solid black',height:'60px',width:'80px',color:'black',margin:'10px'});
        }
        if(myStyle2.border=='1px solid black')
        {
            setMystyle2({border:'2px solid #0047ab',height:'60px',width:'80px',color:'#0047ab',margin:'10px'});
        }
       
    }
    const togglestyle3=()=>{
        if(myStyle1.border=='2px solid #0047ab')
        {
            setMystyle1({border:'1px solid black',height:'60px',width:'80px',color:'black',margin:'10px'});
        }
        if(myStyle2.border=='2px solid #0047ab')
        {
            setMystyle2({border:'1px solid black',height:'60px',width:'80px',color:'black',margin:'10px'});
        }
        if(myStyle4.border=='2px solid #0047ab')
        {
            setMystyle4({border:'1px solid black',height:'60px',width:'80px',color:'black',margin:'10px'});
        }
        if(myStyle5.border=='2px solid #0047ab')
        {
            setMystyle5({border:'1px solid black',height:'60px',width:'80px',color:'black',margin:'10px'});
        }
        if(myStyle3.border=='1px solid black')
        {
            setMystyle3({border:'2px solid #0047ab',height:'60px',width:'80px',color:'#0047ab',margin:'10px'});
        }
       
    }

    const togglestyle4=()=>{
        if(myStyle1.border=='2px solid #0047ab')
        {
            setMystyle1({border:'1px solid black',height:'60px',width:'80px',color:'black',margin:'10px'});
        }
        if(myStyle2.border=='2px solid #0047ab')
        {
            setMystyle2({border:'1px solid black',height:'60px',width:'80px',color:'black',margin:'10px'});
        }
        if(myStyle3.border=='2px solid #0047ab')
        {
            setMystyle3({border:'1px solid black',height:'60px',width:'80px',color:'black',margin:'10px'});
        }
        if(myStyle5.border=='2px solid #0047ab')
        {
            setMystyle5({border:'1px solid black',height:'60px',width:'80px',color:'black',margin:'10px'});
        }
        if(myStyle4.border=='1px solid black')
        {
            setMystyle4({border:'2px solid #0047ab',height:'60px',width:'80px',color:'#0047ab',margin:'10px'});
        }
       
    }

    const togglestyle5=()=>{
        if(myStyle1.border=='2px solid #0047ab')
        {
            setMystyle1({border:'1px solid black',height:'60px',width:'80px',color:'black',margin:'10px'});
        }
        if(myStyle2.border=='2px solid #0047ab')
        {
            setMystyle2({border:'1px solid black',height:'60px',width:'80px',color:'black',margin:'10px'});
        }
        if(myStyle3.border=='2px solid #0047ab')
        {
            setMystyle3({border:'1px solid black',height:'60px',width:'80px',color:'black',margin:'10px'});
        }
        if(myStyle4.border=='2px solid #0047ab')
        {
            setMystyle4({border:'1px solid black',height:'60px',width:'80px',color:'black',margin:'10px'});
        }
        if(myStyle5.border=='1px solid black')
        {
            setMystyle5({border:'2px solid #0047ab',height:'60px',width:'80px',color:'#0047ab',margin:'10px'});
        }
       
    }
  return (
    <div className='d-flex flex-wrap align-items-center justify-content-center'>
      <button  onClick={togglestyle}  type="button" class="btn btn-dark btn-large shadow mb-5 bg-white rounded" style={myStyle1}>
        <div className="d-flex flex-column align-items-center justify-content-center">
        <h6 style={{fontFamily:'Arial, Helvetica, sans-serif'}}>Grade</h6>
        1
        </div>
        </button>
        <button  onClick={togglestyle2}  type="button" class="btn btn-dark btn-large shadow mb-5 bg-white rounded" style={myStyle2}>
        <div className="d-flex flex-column align-items-center justify-content-center">
        <h6 style={{fontFamily:'Arial, Helvetica, sans-serif'}}>Grade</h6>
        2-3
        </div>
        </button>
        <button  onClick={togglestyle3}  type="button" class="btn btn-dark btn-large shadow mb-5 bg-white rounded" style={myStyle3}>
        <div className="d-flex flex-column align-items-center justify-content-center">
        <h6 style={{fontFamily:'Arial, Helvetica, sans-serif'}}>Grade</h6>
        4-6
        </div>
        </button>
        <button  onClick={togglestyle4}  type="button" class="btn btn-dark btn-large shadow mb-5 bg-white rounded" style={myStyle4}>
        <div className="d-flex flex-column align-items-center justify-content-center">
        <h6 style={{fontFamily:'Arial, Helvetica, sans-serif'}}>Grade</h6>
        7-9
        </div>
        </button>
        <button  onClick={togglestyle5}  type="button" class="btn btn-dark btn-large shadow mb-5 bg-white rounded" style={myStyle5}>
        <div className="d-flex flex-column align-items-center justify-content-center">
        <h6 style={{fontFamily:'Arial, Helvetica, sans-serif'}}>Grade</h6>
        10-12
        </div>
        </button>
    </div>
  )
}
export default Kidsgrade
