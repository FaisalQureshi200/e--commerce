import React from "react";
import {MDBRow,MDBCol,MDBBtn,MDBIcon } from "mdbreact";
class Watchesview6 extends React.Component{
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
     
            
            <img id="myimage" className=" picshirt-1" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk8cb6g_YMACFdm4ZDSZNfjvrPE1eV0OCEISf8el4HmEluw5zw&s"  />
             <img className="zoomshirt-1" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk8cb6g_YMACFdm4ZDSZNfjvrPE1eV0OCEISf8el4HmEluw5zw&s"/>
             
             

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
export default Watchesview6