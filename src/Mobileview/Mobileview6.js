import  React  from "react";
import {MDBRow,MDBCol,MDBBtn,MDBIcon} from 'mdbreact'
class Mobileview6 extends React.Component{
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
     
            
            <img  className=" picmobile-6" src="http://www.globalaccess.co.in/wp-content/uploads/2018/09/df8dea75ffee2338cada469f218b7926a4883aed.jpeg"  />
             <img className="zoommobile-6" src="http://www.globalaccess.co.in/wp-content/uploads/2018/09/df8dea75ffee2338cada469f218b7926a4883aed.jpeg"/>
             </MDBCol>
             <MDBCol md="2">
     <h2>Rs-15000</h2>
       
     <MDBBtn onClick={this.handleAddCart} color="cyan"><MDBIcon icon="shopping-cart" size="1x"/>&ensp;Add To Cart</MDBBtn>

     </MDBCol>
     <MDBCol className="shirtcard-1detail">
         <h2 ><b>OPPO MOBILE</b></h2><hr/>
         <br/>
         OPPO PHONES The Oppo A11 runs Android 9 Pie and is powered by a <br/>5000mAh. The Oppo A11 is a dual SIM smartphone that accepts Nano-SIM and Nano-SIM. Connectivity options include Wi-Fi, GPS, Bluetooth, Wi-Fi Direct,<br/> Active 4G on both SIM cards, 3G and 4G
             
         
     </MDBCol>
 </MDBRow>
</div>
        )
    }
}
export default Mobileview6