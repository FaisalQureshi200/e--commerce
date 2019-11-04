import  React  from "react";
import {MDBRow,MDBCol,MDBIcon,MDBBtn} from 'mdbreact'
class Mobileview1 extends React.Component{
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
     
            
            <img id="myimage" className=" picshirt-1" src="https://drop.ndtv.com/TECH/product_database/images/614201714427PM_635_j7pro-db.jpeg" alt=""  />
             <img className="zoomshirt-1" src="https://drop.ndtv.com/TECH/product_database/images/614201714427PM_635_j7pro-db.jpeg" alt=""/>
             
             

     </MDBCol>
     <MDBCol md="2">
     <h2>Rs-15000</h2>
       
     <MDBBtn onClick={this.handleAddCart} color="cyan"><MDBIcon icon="shopping-cart" size="1x"/>&ensp;Add To Cart</MDBBtn>

     </MDBCol>
     <MDBCol className="shirtcard-1detail">
         <h2 ><b>SAMSUNG MOBILE</b></h2><hr/>
         <br/>
         Samsung Galaxy (stylized as SAMSUNG Galaxy since 2015, previously stylized<br/> 
         as Samsung GALAXY) is a series of mobile computing devices designed, 
         manufactured and marketed by Samsung Electronics
         
     </MDBCol>
 </MDBRow> 
    

</div>
        )
    }
}
export default Mobileview1