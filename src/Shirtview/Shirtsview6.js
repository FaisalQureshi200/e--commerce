import React from 'react'
import {MDBRow,MDBCol,MDBIcon,MDBBtn} from 'mdbreact'
class Shirtview6 extends React.Component{

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
     
            
            <img className=" picshirt-1" src="https://www.sefiles.net/images/library/small/specialized-s-3-4-t-shirt-262818-1.jpg"  alt="" />
             <img className="zoomshirt-1" src="https://www.sefiles.net/images/library/small/specialized-s-3-4-t-shirt-262818-1.jpg" alt=""/>
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
export default Shirtview6