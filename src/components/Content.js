import React from 'react'
import Textbox from './Textbox'

function Content() {
  return (
    <div style={{height:'fitContent' , width:'fitContent',border:' ' ,backgroundColor:' #F0F8FF'}}>
        <div className='d-flex align-items-center justify-content-center'>
            <h1 style={{padding:'50px', fontWeight:'800', fontSize:'4rem' , fontFamily:'ubuntu', color:'rgb(46,36,36)'} } className='text-center'>Top Features of Our Courses</h1>
            
        </div>
       <div className="d-flex justify-content-center align-items-center flex-wrap">
        <Textbox imgsrc="https://learn.brightchamps.com/images/icon-1.svg" heading="World's first & only" content="We offer an all encompassing technology curriculum for kids, covering coding foundation to scientific exploration, and design thinking to robotics"></Textbox>
        <Textbox imgsrc="https://learn.brightchamps.com/images/icon-2.svg" heading="Academic excellence quotient" content="Using our unique and only scientific exploration program, kids will develop in-depth understanding of numerous maths & science concepts" ></Textbox>
        <Textbox imgsrc="https://learn.brightchamps.com/images/icon-3.svg" heading="Unique Hands-on Learning" content="Kids will develop real life mobile apps, scientific simulation and hardware like tech-entrepreneurs and scientists" ></Textbox>
        <Textbox imgsrc="https://learn.brightchamps.com/images/icon-4.svg" heading="Top skills in new age" content="Kids will advance skills like complex problem solving, critical thinking, creativity, emotional intelligence and cognitive flexibility" ></Textbox>
       </div>
      
    </div>
  )
}

export default Content
