import React from 'react'

function Radio() {
  return (
    <div className='d-flex'>
      <div class="form-check">
  <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked/>
  <label className="form-check-label font-weight-bold" for="exampleRadios1">
   Yes
  </label>
</div>
<div class="form-check mx-2">
  <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2"/>
  <label className="form-check-label " for="exampleRadios2">
   No
  </label>
</div>
    </div>
  )
}

export default Radio
