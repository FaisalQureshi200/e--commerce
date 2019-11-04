import React from 'react'
import {MDBRow,MDBCol,MDBIcon,MDBBtn} from 'mdbreact'
class Shirtview2 extends React.Component{
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
     
            
            <img className=" picshirt-1" src="https://m.media-amazon.com/images/I/B1qmQK-r4OS._CLa%7C2140,2000%7C71QC82OMv9L.png%7C0,0,2140,2000+0.0,0.0,2140.0,2000.0._UX522_.png" alt="" />
             <img className="zoomshirt-1" src="https://m.media-amazon.com/images/I/B1qmQK-r4OS._CLa%7C2140,2000%7C71QC82OMv9L.png%7C0,0,2140,2000+0.0,0.0,2140.0,2000.0._UX522_.png" alt=""/>
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
export default Shirtview2