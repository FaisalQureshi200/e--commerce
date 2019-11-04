import React from "react";
import {MDBRow,MDBCol,MDBBtn,MDBIcon  } from "mdbreact";
class Watchesview4 extends React.Component{
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
     
            
            <img id="myimage" className=" picshirt-1" src="https://static.garmincdn.com/en/products/010-02063-00/g/cf-lg-cdd46e58-bcbb-41ed-af4c-491cfd20f25e.jpg"  />
             <img className="zoomshirt-1" src="https://static.garmincdn.com/en/products/010-02063-00/g/cf-lg-cdd46e58-bcbb-41ed-af4c-491cfd20f25e.jpg"/>
             
             

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
export default Watchesview4