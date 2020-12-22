
import React from 'react';


function MyForm(props) {
    return (

    <div>
       
    
    <div className='row' id='rowdiv'>
      <div className='col-6-lg' id='filter'>
    Filter By:
    <button type="button" className="btn btn-outline-secondary" onClick={() => props.filterGender("female")}>Female</button>
      </div>

      <div className='col-6-lg' id='sort'>
        Sort By:
      <button type="button" className="btn btn-outline-secondary" onClick={() => props.SortNat()}>Nationality</button>
      </div>
      </div>
</div>
       
    )
}


export default MyForm;

