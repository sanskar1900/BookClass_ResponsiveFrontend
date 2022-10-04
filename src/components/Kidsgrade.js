import {React,useState} from 'react'
function Kidsgrade() {
    const [myStyle1,setMystyle1]=useState({backgroundColor:'white',border:'0px solid black',height:'fitContent',width:'fitContent',color:'black',margin:'10px'});
    const [myStyle2,setMystyle2]=useState({backgroundColor:'white',border:'0px solid black',height:'fitContent',width:'fitContent',color:'black',margin:'10px'});
    const [myStyle3,setMystyle3]=useState({backgroundColor:'white',border:'0px solid black',height:'fitContent',width:'fitContent',color:'black',margin:'10px'});
    const [myStyle4,setMystyle4]=useState({backgroundColor:'white',border:'0px solid black',height:'fitContent',width:'fitContent',color:'black',margin:'10px'});
    const [myStyle5,setMystyle5]=useState({backgroundColor:'white',border:'0px solid black',height:'fitContent',width:'fitContent',color:'black',margin:'10px'});
    const togglestyle=()=>{
        if(myStyle2.border=='2px solid #0047ab')
        {
            setMystyle2({border:'0px solid black',height:'fitContent',width:'fitContent',color:'black',margin:'10px'});
        }
        if(myStyle2.backgroundColor=='#6693F5')
        {
            setMystyle2({backgroundColor:'white',border:'0px solid black',height:'fitContent',width:'fitContent',color:'black',margin:'10px'});
        }
        if(myStyle3.border=='2px solid #0047ab')
        {
            setMystyle3({border:'0px solid black',height:'fitContent',width:'fitContent',color:'black',margin:'10px'});
        }
        if(myStyle3.backgroundColor=='#6693F5')
        {
            setMystyle3({backgroundColor:'white',border:'0px solid black',height:'fitContent',width:'fitContent',color:'black',margin:'10px'});
        }
        if(myStyle4.border=='2px solid #0047ab')
        {
            setMystyle4({border:'0px solid black',height:'fitContent',width:'fitContent',color:'black',margin:'10px'});
        }
        if(myStyle4.backgroundColor=='#6693F5')
        {
            setMystyle4({backgroundColor:'white',border:'0px solid black',height:'fitContent',width:'fitContent',color:'black',margin:'10px'});
        }
        if(myStyle5.border=='2px solid #0047ab')
        {
            setMystyle5({border:'0px solid black',height:'fitContent',width:'fitContent',color:'black',margin:'10px'});
        }
        if(myStyle5.backgroundColor=='#6693F5')
        {
            setMystyle5({backgroundColor:'white',border:'0px solid black',height:'fitContent',width:'fitContent',color:'black',margin:'10px'});
        }
        if(myStyle1.border=='0px solid black')
        {
            setMystyle1({border:'2px solid #0047ab',height:'fitContent',width:'fitContent',color:' #0047ab',margin:'10px'});
        }
        if(myStyle1.backgroundColor=='white')
        {
            setMystyle1({backgroundColor:'#6693F5',border:'2px solid #0047ab',height:'fitContent',width:'fitContent',color:'white',margin:'10px'});
        }
    }
    const togglestyle2=()=>{
        if(myStyle3.border=='2px solid #0047ab')
        {
            setMystyle3({border:'0px solid black',height:'fitContent',width:'fitContent',color:'black',margin:'10px'});
        }
        if(myStyle3.backgroundColor=='#6693F5')
        {
            setMystyle3({backgroundColor:'white',border:'0px solid black',height:'fitContent',width:'fitContent',color:'black',margin:'10px'});
        }
        if(myStyle5.border=='2px solid #0047ab')
        {
            setMystyle5({border:'0px solid black',height:'fitContent',width:'fitContent',color:'black',margin:'10px'});
        }
        if(myStyle5.backgroundColor=='#6693F5')
        {
            setMystyle5({backgroundColor:'white',border:'0px solid black',height:'fitContent',width:'fitContent',color:'black',margin:'10px'});
        }
        if(myStyle4.border=='2px solid #0047ab')
        {
            setMystyle4({border:'0px solid black',height:'fitContent',width:'fitContent',color:'black',margin:'10px'});
        }
        if(myStyle4.backgroundColor=='#6693F5')
        {
            setMystyle4({backgroundColor:'white',border:'0px solid black',height:'fitContent',width:'fitContent',color:'black',margin:'10px'});
        }
        if(myStyle1.border=='2px solid #0047ab')
        {
            setMystyle1({border:'0px solid black',height:'fitContent',width:'fitContent',color:'black',margin:'10px'});
        }
        if(myStyle1.backgroundColor=='#6693F5')
        {
            setMystyle1({backgroundColor:'white',border:'0px solid black',height:'fitContent',width:'fitContent',color:'black',margin:'10px'});
        }
        if(myStyle2.border=='0px solid black')
        {
            setMystyle2({border:'2px solid #0047ab',height:'fitContent',width:'fitContent',color:' #0047ab',margin:'10px'});
        }
        if(myStyle2.backgroundColor=='white')
        {
            setMystyle2({backgroundColor:'#6693F5',border:'2px solid #0047ab',height:'fitContent',width:'fitContent',color:'white',margin:'10px'});
        }
    }
    const togglestyle3=()=>{
        if(myStyle2.border=='2px solid #0047ab')
        {
            setMystyle2({border:'0px solid black',height:'fitContent',width:'fitContent',color:'black',margin:'10px'});
        }
        if(myStyle2.backgroundColor=='#6693F5')
        {
            setMystyle2({backgroundColor:'white',border:'0px solid black',height:'fitContent',width:'fitContent',color:'black',margin:'10px'});
        }
        if(myStyle5.border=='2px solid #0047ab')
        {
            setMystyle5({border:'0px solid black',height:'fitContent',width:'fitContent',color:'black',margin:'10px'});
        }
        if(myStyle5.backgroundColor=='#6693F5')
        {
            setMystyle5({backgroundColor:'white',border:'0px solid black',height:'fitContent',width:'fitContent',color:'black',margin:'10px'});
        }
        if(myStyle4.border=='2px solid #0047ab')
        {
            setMystyle4({border:'0px solid black',height:'fitContent',width:'fitContent',color:'black',margin:'10px'});
        }
        if(myStyle4.backgroundColor=='#6693F5')
        {
            setMystyle4({backgroundColor:'white',border:'0px solid black',height:'fitContent',width:'fitContent',color:'black',margin:'10px'});
        }
        if(myStyle1.border=='2px solid #0047ab')
        {
            setMystyle1({border:'0px solid black',height:'fitContent',width:'fitContent',color:'black',margin:'10px'});
        }
        if(myStyle1.backgroundColor=='#6693F5')
        {
            setMystyle1({backgroundColor:'white',border:'0px solid black',height:'fitContent',width:'fitContent',color:'black',margin:'10px'});
        }
        if(myStyle3.border=='0px solid black')
        {
            setMystyle3({border:'2px solid #0047ab',height:'fitContent',width:'fitContent',color:' #0047ab',margin:'10px'});
        }
        if(myStyle3.backgroundColor=='white')
        {
            setMystyle3({backgroundColor:'#6693F5',border:'2px solid #0047ab',height:'fitContent',width:'fitContent',color:'white',margin:'10px'});
        }
    }

    const togglestyle4=()=>{
        if(myStyle2.border=='2px solid #0047ab')
        {
            setMystyle2({border:'0px solid black',height:'fitContent',width:'fitContent',color:'black',margin:'10px'});
        }
        if(myStyle2.backgroundColor=='#6693F5')
        {
            setMystyle2({backgroundColor:'white',border:'0px solid black',height:'fitContent',width:'fitContent',color:'black',margin:'10px'});
        }
        if(myStyle5.border=='2px solid #0047ab')
        {
            setMystyle5({border:'0px solid black',height:'fitContent',width:'fitContent',color:'black',margin:'10px'});
        }
        if(myStyle5.backgroundColor=='#6693F5')
        {
            setMystyle5({backgroundColor:'white',border:'0px solid black',height:'fitContent',width:'fitContent',color:'black',margin:'10px'});
        }
        if(myStyle3.border=='2px solid #0047ab')
        {
            setMystyle3({border:'0px solid black',height:'fitContent',width:'fitContent',color:'black',margin:'10px'});
        }
        if(myStyle3.backgroundColor=='#6693F5')
        {
            setMystyle3({backgroundColor:'white',border:'0px solid black',height:'fitContent',width:'fitContent',color:'black',margin:'10px'});
        }
        if(myStyle1.border=='2px solid #0047ab')
        {
            setMystyle1({border:'0px solid black',height:'fitContent',width:'fitContent',color:'black',margin:'10px'});
        }
        if(myStyle1.backgroundColor=='#6693F5')
        {
            setMystyle1({backgroundColor:'white',border:'0px solid black',height:'fitContent',width:'fitContent',color:'black',margin:'10px'});
        }
        if(myStyle4.border=='0px solid black')
        {
            setMystyle4({border:'2px solid #0047ab',height:'fitContent',width:'fitContent',color:' #0047ab',margin:'10px'});
        }
        if(myStyle4.backgroundColor=='white')
        {
            setMystyle4({backgroundColor:'#6693F5',border:'2px solid #0047ab',height:'fitContent',width:'fitContent',color:'white',margin:'10px'});
        }
    }

    const togglestyle5=()=>{
        if(myStyle2.border=='2px solid #0047ab')
        {
            setMystyle2({border:'0px solid black',height:'fitContent',width:'fitContent',color:'black',margin:'10px'});
        }
        if(myStyle2.backgroundColor=='#6693F5')
        {
            setMystyle2({backgroundColor:'white',border:'0px solid black',height:'fitContent',width:'fitContent',color:'black',margin:'10px'});
        }
        if(myStyle4.border=='2px solid #0047ab')
        {
            setMystyle4({border:'0px solid black',height:'fitContent',width:'fitContent',color:'black',margin:'10px'});
        }
        if(myStyle4.backgroundColor=='#6693F5')
        {
            setMystyle4({backgroundColor:'white',border:'0px solid black',height:'fitContent',width:'fitContent',color:'black',margin:'10px'});
        }
        if(myStyle3.border=='2px solid #0047ab')
        {
            setMystyle3({border:'0px solid black',height:'fitContent',width:'fitContent',color:'black',margin:'10px'});
        }
        if(myStyle3.backgroundColor=='#6693F5')
        {
            setMystyle3({backgroundColor:'white',border:'0px solid black',height:'fitContent',width:'fitContent',color:'black',margin:'10px'});
        }
        if(myStyle1.border=='2px solid #0047ab')
        {
            setMystyle1({border:'0px solid black',height:'fitContent',width:'fitContent',color:'black',margin:'10px'});
        }
        if(myStyle1.backgroundColor=='#6693F5')
        {
            setMystyle1({backgroundColor:'white',border:'0px solid black',height:'fitContent',width:'fitContent',color:'black',margin:'10px'});
        }
        if(myStyle5.border=='0px solid black')
        {
            setMystyle5({border:'2px solid #0047ab',height:'fitContent',width:'fitContent',color:' #0047ab',margin:'10px'});
        }
        if(myStyle5.backgroundColor=='white')
        {
            setMystyle5({backgroundColor:'#6693F5',border:'2px solid #0047ab',height:'fitContent',width:'fitContent',color:'white',margin:'10px'});
        }
    }
  return (
    <div  className='d-flex flex-wrap '  >
      <button  onClick={togglestyle}  type="button" class="btn  btn-large shadow mb-5  rounded" style={myStyle1}>
        <div className="d-flex flex-column align-items-center justify-content-center">
        <h6 style={{fontFamily:'Arial, Helvetica, sans-serif' , fontSize:'1rem'}}>Grade</h6>
         <h6 style={{fontSize:'1rem'}}>1</h6>
        </div>
        </button>
        <button  onClick={togglestyle2}  type="button" class="btn  btn-large shadow mb-5  rounded" style={myStyle2}>
        <div className="d-flex flex-column align-items-center justify-content-center">
        <h6 style={{fontFamily:'Arial, Helvetica, sans-serif' , fontSize:'1rem'}}>Grade</h6>
         <h6 style={{fontSize:'1rem'}}>2 - 3</h6>
        </div>
        </button>
        <button  onClick={togglestyle3}  type="button" class="btn  btn-large shadow mb-5  rounded" style={myStyle3}>
        <div className="d-flex flex-column align-items-center justify-content-center">
        <h6 style={{fontFamily:'Arial, Helvetica, sans-serif' , fontSize:'1rem'}}>Grade</h6>
         <h6 style={{fontSize:'1rem'}}>4 - 6</h6>
        </div>
        </button>
        <button  onClick={togglestyle4}  type="button" class="btn  btn-large shadow mb-5  rounded" style={myStyle4}>
        <div className="d-flex flex-column align-items-center justify-content-center">
        <h6 style={{fontFamily:'Arial, Helvetica, sans-serif' , fontSize:'1rem'}}>Grade</h6>
         <h6 style={{fontSize:'1rem'}}>7 - 9</h6>
        </div>
        </button>
        <button  onClick={togglestyle5}  type="button" class="btn  btn-large shadow mb-5  rounded" style={myStyle5}>
        <div className="d-flex flex-column align-items-center justify-content-center">
        <h6 style={{fontFamily:'Arial, Helvetica, sans-serif' , fontSize:'1rem'}}>Grade</h6>
         <h6 style={{fontSize:'1rem'}}>10 - 12</h6>
        </div>
        </button>
    </div>
  )
}
export default Kidsgrade
