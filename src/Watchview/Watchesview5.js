import React from "react";
import {MDBRow,MDBCol,MDBIcon,MDBBtn  } from "mdbreact";
class Watchesview5 extends React.Component{
    handleAddCart = () => {
        return (
            this.props.history.push('/watch/AddCart')
        )
    }
    render(){
        return(
      <div>
<MDBRow>
     <MDBCol md="4">
     
            
            <img id="myimage" className=" picshirt-1" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2Y9ez2GI8Z_kYQ6vaLl7LEe8_nSpZbf7L2Wy0r3eKNzUtDtlP&s"  />
             <img className="zoomshirt-1" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2Y9ez2GI8Z_kYQ6vaLl7LEe8_nSpZbf7L2Wy0r3eKNzUtDtlP&s"/>
             
              </MDBCol>
              <MDBCol md="2">
     <h2>Rs-500</h2>
       
     <MDBBtn onClick={this.handleAddCart} color="cyan"><MDBIcon icon="shopping-cart" size="1x"/>&ensp;Add To Cart</MDBBtn>

     </MDBCol>
     <MDBCol className="shirtcard-1detail">
         <h2 ><b>Boys Watch</b></h2><hr/>
         <br/>
     Keeping our synchronization with the development taking place in this 
     industry, we are engrossed in delivering a broad range of Boys.
             
         
     </MDBCol>
 </MDBRow>
      </div>
        )
    }
}
export default Watchesview5