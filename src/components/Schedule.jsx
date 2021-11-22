import React from 'react'
import '../style.css'
import Card from 'react-bootstrap/Card';
import icon1 from '../assets/Vector.svg'
const Schedule = () => {
    return (
<div className="schedule" style={{marginTop:"70px"}}>
  <h1 className='Schedule_text' style={{color:"#FFFFFF"}}>Schedule</h1>
        <div className="row" style={{padding:"2rem"}}>
          <div className=" col-lg-4 col-md-12 col-xs-12 col-sm-12" >
       <Card className="card" style={{backgroundColor:'#414141',width: '25rem',height:'20rem',marginRight:"1rem"}}>
  <Card.Body style={{padding:"2rem"}}>
    <Card.Title><Card.Img  variant="topright" src={icon1} /></Card.Title>
    <Card.Text className="text" style={{color:'#FFFFFF'}}>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
  </Card.Body>
</Card>
</div>
<div className=" cards col-lg-4 col-md-12 col-xs-12 col-sm-12" >
       <Card className="card" style={{backgroundColor:'#414141',width: '25rem',height:'20rem',marginRight:"1rem"}}>
 
  <Card.Body style={{padding:"2rem"}}>
    <Card.Title><Card.Img variant="topright" src={icon1} /></Card.Title>
    <Card.Text className="text" style={{color:'#FFFFFF'}}>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
  </Card.Body>
</Card>
</div>
<div className="cards col-lg-4 col-md-12 col-xs-12 col-sm-12" >
       <Card className="card" style={{backgroundColor:'#414141',width: '25rem',height:'20rem',marginRight:"1rem"}}>
 
  <Card.Body style={{padding:"2rem"}}>
    <Card.Title><Card.Img variant="topright" src={icon1} /></Card.Title>
    <Card.Text className="text" style={{color:'#FFFFFF'}}>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
  </Card.Body>
</Card>
</div>


</div>
</div>
      
    )
}

export default Schedule
