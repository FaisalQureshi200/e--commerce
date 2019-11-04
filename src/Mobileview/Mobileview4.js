import  React  from "react";
import {MDBRow,MDBCol,MDBBtn,MDBIcon} from 'mdbreact'
class Mobileview4 extends React.Component{
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
     
            
            <img id="myimage" className=" picmobile-4" src="https://m.xcite.com/media/catalog/product/cache/1/thumbnail/700x700/9df78eab33525d08d6e5fb8d27136e95/b/u/buy_huawei_y9_2019_phone_-_black_lowest_price_in_kuwait.jpg"  />
             <img className="zoommobile-4" src="https://m.xcite.com/media/catalog/product/cache/1/thumbnail/700x700/9df78eab33525d08d6e5fb8d27136e95/b/u/buy_huawei_y9_2019_phone_-_black_lowest_price_in_kuwait.jpg"/>
     </MDBCol>
     <MDBCol md="2">
     <h2>Rs-15000</h2>
       
     <MDBBtn onClick={this.handleAddCart}  color="cyan"><MDBIcon icon="shopping-cart" size="1x"/>&ensp;Add To Cart</MDBBtn>

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
export default Mobileview4