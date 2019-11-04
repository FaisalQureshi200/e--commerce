import React from "react";
import { MDBRow,MDBCol,MDBBtn,MDBIcon } from "mdbreact";
class Shoesview1 extends React.Component{
    handleAddCart = () => {
        return (
            this.props.history.push('/shoes/AddCart')
        )
    }

    render(){
        return(
            <div>
                <MDBRow>
     <MDBCol md="4">
     
            
            <img id="myimage" className=" picshirt-1" src="https://i.ebayimg.com/images/g/rVAAAOSwhktdCuzc/s-l300.jpg" alt="" />
             <img className="zoomshirt-1" src="https://i.ebayimg.com/images/g/rVAAAOSwhktdCuzc/s-l300.jpg" alt=""/>
             
        </MDBCol>
        <MDBCol md="2">
         <h2>Rs-300</h2>
       
     <MDBBtn  onClick={this.handleAddCart} color="cyan"><MDBIcon icon="shopping-cart" size="1x"/>&ensp;Add To Cart</MDBBtn>

     </MDBCol>
     <MDBCol className="shirtcard-1detail">
         <h2 ><b>Boys Shoes</b></h2><hr/>
         <br/>
     Keeping our synchronization with the development taking place in this 
     industry, we are engrossed in delivering a broad range of Boys .
             
         
     </MDBCol>
 </MDBRow>
            </div>
        )
    }
}
export default Shoesview1