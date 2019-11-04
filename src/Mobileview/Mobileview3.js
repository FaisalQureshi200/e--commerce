import  React  from "react";
import {MDBRow,MDBCol,MDBIcon,MDBBtn} from 'mdbreact'
class Mobileview3 extends React.Component{
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
     
            
            <img id="myimage" className=" picshirt-1" src="https://i0.wp.com/www.cacellular.co.za/wp-content/uploads/2017/05/Samsung-Galaxy-S8-Maple-Gold-high-res.jpg"  />
             <img className="zoomshirt-1" src="https://i0.wp.com/www.cacellular.co.za/wp-content/uploads/2017/05/Samsung-Galaxy-S8-Maple-Gold-high-res.jpg"/>
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
export default Mobileview3