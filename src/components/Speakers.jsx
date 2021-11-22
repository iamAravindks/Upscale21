import React from 'react'
import vect from '../assets/Ellipse 5.svg'
const Speakers = () => {
    return (
        <div className="speakers" style={{marginTop:"70px"}}>
              <h1 className='Schedule_text' style={{color:"#FFFFFF"}}>Speakers</h1>

       <div className="row" style={{paddingLeft:"80px"}}>
           <div  className="col-md-12 col-lg-4">
 <div  class="arc-wrapper">
        <div class="arc arc_start"></div> 
        <div class="arc arc_end">
            <div className="bla" ><img className="img2" src={vect} ></img></div>
        </div>
      </div>
      <h1 className="Name">Name</h1>
      <h3 className="Topic">Topic</h3>
      </div>
      <div   className="col-md-12 col-lg-4">
 <div  class="arc-wrapper">
        <div class="arc arc_start"></div> 
        <div class="arc arc_end">
            <div className="bla" ><img className="img2" src={vect} ></img></div>
        </div>
        <h1 className="Name">Name</h1>
        <h3 className="Topic">Topic</h3>
      </div>
      </div>
      <div   className="col-md-12 col-lg-4">
 <div  class="arc-wrapper">
        <div class="arc arc_start"></div> 
        <div class="arc arc_end">
            <div className="bla" ><img className="img2" src={vect} ></img></div>
        </div>
        <h1 className="Name">Name</h1>
        <h3 className="Topic">Topic</h3>
      </div>
      </div>
       </div>
        
        </div>
    )
}

export default Speakers
