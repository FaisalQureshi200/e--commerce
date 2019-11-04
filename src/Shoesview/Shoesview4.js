import React from "react";
import {MDBRow,MDBCol,MDBIcon,MDBBtn} from 'mdbreact'
class Shoesview4 extends React.Component{
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
     
            
            <img id="myimage" className=" picshirt-1" src="http://www.godsextendedhand.com/images/large/Brands_Shoes/Hot%20Sales%20adidas%20Barricade%20Court%202%20Tennis%20Shoes%20Hot%20Sales%20adidas%20Tennis%20Shoes%20Women%20White%20Tech%20Ink%20Hi-Res%20Aqua%20adidas%20Women%20Tennis%20Shoes%20United%20Kingdom%20Sale%20139_LRG.jpg" alt="" />
             <img className="zoomshirt-1" src="http://www.godsextendedhand.com/images/large/Brands_Shoes/Hot%20Sales%20adidas%20Barricade%20Court%202%20Tennis%20Shoes%20Hot%20Sales%20adidas%20Tennis%20Shoes%20Women%20White%20Tech%20Ink%20Hi-Res%20Aqua%20adidas%20Women%20Tennis%20Shoes%20United%20Kingdom%20Sale%20139_LRG.jpg" alt=""/>
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
export default Shoesview4