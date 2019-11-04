import React from "react";
import {MDBRow,MDBCol,MDBIcon,MDBBtn} from 'mdbreact'
class Shoesview6 extends React.Component{
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
     
            
            <img id="myimage" className=" picshirt-1" src="https://www.childrensalonoutlet.com/media/catalog/product/cache/0/image/1000x1000/9df78eab33525d08d6e5fb8d27136e95/h/a/hackett-boys-navy-blue-beige-leather-deck-shoes-117427-b077e3cbbb6e14a97409992a6a9344c04042767a.jpg" alt=""  />
             <img className="zoomshirt-1" src="https://www.childrensalonoutlet.com/media/catalog/product/cache/0/image/1000x1000/9df78eab33525d08d6e5fb8d27136e95/h/a/hackett-boys-navy-blue-beige-leather-deck-shoes-117427-b077e3cbbb6e14a97409992a6a9344c04042767a.jpg" alt=""/>
             </MDBCol>
             <MDBCol md="2">
         <h2>Rs-500</h2>
       
     <MDBBtn  onClick={this.handleAddCart}   color="cyan"><MDBIcon icon="shopping-cart" size="1x"/>&ensp;Add To Cart</MDBBtn>

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
export default Shoesview6