import  React  from "react";
import {MDBRow,MDBCol,MDBIcon,MDBBtn} from 'mdbreact'
class Mobileview5 extends React.Component{
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
     <img  className=" picmobile-5" src="https://drop.ndtv.com/TECH/product_database/images/1017201780922PM_635_huawei_mate_10_lite.jpeg"  />
     <img className="zoommobile-5" src="https://drop.ndtv.com/TECH/product_database/images/1017201780922PM_635_huawei_mate_10_lite.jpeg"/>
             
     </MDBCol>
     <MDBCol md="2">
     <h2>Rs-15000</h2>
       
     <MDBBtn onClick={this.handleAddCart} color="cyan"><MDBIcon icon="shopping-cart" size="1x"/>&ensp;Add To Cart</MDBBtn>

     </MDBCol>
     <MDBCol className="shirtcard-1detail">
         <h2 ><b>HUAWEI MOBILE</b></h2><hr/>
         <br/>
         Huawei Technologies Co., Ltd is a Chinese multinational technology <br/> 
         company that provides Initially focused on manufacturing phone switches,<br/> 
         Huawei has expanded its business to include building telecommunications <br/>networks, 
              
         
     </MDBCol>
 </MDBRow>
</div>
        )
    }
}
export default Mobileview5