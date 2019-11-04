import React from 'react'
import {MDBRow,MDBCol,MDBBtn,MDBIcon} from 'mdbreact'
class Shirtview3 extends React.Component{
    handleAddCart = () => {
        return (
            this.props.history.push('/shirt/AddCart')
        )
    }

    render(){
        return(
            <div>
 <MDBRow>
     <MDBCol md="4">
     
            
            <img className=" picshirt-1" src="https://www.qualitylogoproducts.com/polo-shirts/belmont-short-sleeve-polo-shirtbytrimarkmens-superextralarge.jpg" alt=""  />
             <img className="zoomshirt-1" src="https://www.qualitylogoproducts.com/polo-shirts/belmont-short-sleeve-polo-shirtbytrimarkmens-superextralarge.jpg" alt=""/>
              </MDBCol>
              <MDBCol md="2">
         <h2>Rs-300</h2>
       
     <MDBBtn onClick={this.handleAddCart} color="cyan"><MDBIcon icon="shopping-cart" size="1x"/>&ensp;Add To Cart</MDBBtn>

     </MDBCol>
     <MDBCol className="shirtcard-1detail">
         <h2 ><b>Boys Half T-Shirt</b></h2><hr/>
         <br/>
     Keeping our synchronization with the development taking place in this industry, 
     we are engrossed in delivering a broad range of Boys Stylish Half Sleeve T Shirts.
             
         
     </MDBCol>
 </MDBRow>
            </div>
        )
    }
}
export default Shirtview3