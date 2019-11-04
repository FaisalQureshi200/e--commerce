import React from "react";
import {MDBRow,MDBCol,MDBIcon,MDBBtn  } from "mdbreact";
class Watchesview1 extends React.Component{
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
     
            
            <img id="myimage" className=" picshirt-1" src="https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/2336922/2017/12/19/11513687409680-Tommy-Hilfiger-Men-Watches-6981513687409689-1.jpg"  />
             <img className="zoomshirt-1" src="https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/2336922/2017/12/19/11513687409680-Tommy-Hilfiger-Men-Watches-6981513687409689-1.jpg"/>
             
             

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
export default Watchesview1