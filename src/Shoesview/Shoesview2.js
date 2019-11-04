import React from "react";
import { MDBRow,MDBCol,MDBIcon,MDBBtn } from "mdbreact";
class Shoesview2 extends React.Component{
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
     
            
            <img id="myimage" className=" picshirt-1" src="https://www.karitraa.com/dw/image/v2/BCKX_PRD/on/demandware.static/-/Sites-masterCatalog_KariTraa/default/dwcce13021/images/hi-res/640103_Trinn-Sneakers_THYME_PRODUCT_1_Karitraa.jpg?sw=496&sh=618"  />
             <img className="zoomshirt-1" src="https://www.karitraa.com/dw/image/v2/BCKX_PRD/on/demandware.static/-/Sites-masterCatalog_KariTraa/default/dwcce13021/images/hi-res/640103_Trinn-Sneakers_THYME_PRODUCT_1_Karitraa.jpg?sw=496&sh=618"/>
             </MDBCol>
             <MDBCol md="2">
         <h2>Rs-500</h2>
       
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
export default Shoesview2