import React from 'react'
import { MDBRow, MDBCol, MDBCard, MDBCardImage,MDBCardBody,MDBBtn,MDBIcon} from 'mdbreact'
class Mobile extends React.Component{
    handleview1=()=>{
        
        return(
            this.props.history.push('/mobile/view/1')

        )
    
}
handleview2=()=>{
        
    return(
        this.props.history.push('/mobile/view/2')

    )

}
handleview3=()=>{
        
    return(
        this.props.history.push('/mobile/view/3')

    )

}
handleview4=()=>{
        
    return(
        this.props.history.push('/mobile/view/4')

    )

}
handleview5=()=>{
        
    return(
        this.props.history.push('/mobile/view/5')

    )

}
handleview6=()=>{
        
    return(
        this.props.history.push('mobile/view/6')

    )

}
handleAddCart = () => {
    return (
        this.props.history.push('/mobile/AddCart')
    )
}
    render(){
        return(
            <div>
                <MDBRow>
                    <MDBCol md="4">
                        <MDBCard className="mobilecard-1">
                        
                            <MDBCardImage className="mobile-1" src="https://drop.ndtv.com/TECH/product_database/images/614201714427PM_635_j7pro-db.jpeg"/>
                           
                            <MDBCardBody>
                            <h3 style={{textAlign:"center",position:'relative',bottom:'-15px'}}>Rs-15000</h3>
                                   <div className="mobilebutton-1">
                                    <MDBBtn onClick={this.handleview1}  color="primary">View Detail</MDBBtn>
                                    <MDBBtn onClick={this.handleAddCart}  color="secondary"> <MDBIcon icon="shopping-cart" size="1x"/>&ensp;Add To Cart</MDBBtn>
                                    </div>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                    <MDBCol md="4">
                        <MDBCard className="mobilecard-2">
                            <MDBCardImage className="mobile-2" src="https://http2.mlstatic.com/samsung-j7-pro-55p-16gb-3gb-ram-sd-256-gb-cam-13mpx-huella-D_NQ_NP_843464-MLA31362601759_072019-Q.jpg"/>
                            <MDBCardBody>
                            <h3 style={{textAlign:"center",position:'relative',bottom:'-15px'}}>Rs-15000</h3>
                            <div className="mobilebutton-2">
                                    <MDBBtn onClick={this.handleview2}  color="primary">View Detail</MDBBtn>
                                    <MDBBtn onClick={this.handleAddCart}  color="secondary"> <MDBIcon icon="shopping-cart" size="1x"/>&ensp;Add To Cart</MDBBtn>
                                </div>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                    <MDBCol md="4">
                        <MDBCard className="mobilecard-3">
                            <MDBCardImage className="mobile-3" src="https://i0.wp.com/www.cacellular.co.za/wp-content/uploads/2017/05/Samsung-Galaxy-S8-Maple-Gold-high-res.jpg"/>
                            <MDBCardBody>
                            <h3 style={{textAlign:"center",position:'relative',bottom:'10px'}}>Rs-15000</h3> 
                            <div className="mobilebutton-3">
                                <MDBBtn onClick={this.handleview3}  color="primary">View Detail</MDBBtn>
                                    <MDBBtn onClick={this.handleAddCart}   color="secondary"> <MDBIcon icon="shopping-cart" size="1x"/>&ensp;Add To Cart</MDBBtn>
                                </div>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                    <MDBCol md="4">
                        <MDBCard className="mobilecard-4">
                            <MDBCardImage className="mobile-4" src="https://m.xcite.com/media/catalog/product/cache/1/thumbnail/700x700/9df78eab33525d08d6e5fb8d27136e95/b/u/buy_huawei_y9_2019_phone_-_black_lowest_price_in_kuwait.jpg"/>
                            <MDBCardBody>
                            <h3 style={{textAlign:"center",position:'relative',bottom:'-3px'}}>Rs-15000</h3>
                                    <MDBBtn onClick={this.handleview4}  color="primary">View Detail</MDBBtn>
                                    <MDBBtn onClick={this.handleAddCart}  color="secondary"> <MDBIcon icon="shopping-cart" size="1x"/>&ensp;Add To Cart</MDBBtn>
                                
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                    <MDBCol md="4">
                        <MDBCard className="mobilecard-5">
                            <MDBCardImage className="mobile-5" src="https://drop.ndtv.com/TECH/product_database/images/1017201780922PM_635_huawei_mate_10_lite.jpeg"/>
                            <MDBCardBody>
                            <h3 style={{textAlign:"center",position:'relative',bottom:'-30px'}}>Rs-15000</h3>
                                   <div className="mobilebutton-5">
                                    <MDBBtn onClick={this.handleview5}  color="primary">View Detail</MDBBtn>
                                    <MDBBtn onClick={this.handleAddCart}   color="secondary"> <MDBIcon icon="shopping-cart" size="1x"/>&ensp;Add To Cart</MDBBtn>
                                    </div>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                    <MDBCol md="4">
                        <MDBCard className="mobilecard-6">
                            <MDBCardImage className="mobile-6" src="http://www.globalaccess.co.in/wp-content/uploads/2018/09/df8dea75ffee2338cada469f218b7926a4883aed.jpeg"/>
                            <MDBCardBody>
                            <h3 style={{textAlign:"center",position:'relative',bottom:'-30px'}}>Rs-15000</h3>
                                    <div className="mobilebutton-6">
                                    <MDBBtn onClick={this.handleview6}  color="primary">View Detail</MDBBtn>
                                    <MDBBtn onClick={this.handleAddCart}  color="secondary"> <MDBIcon icon="shopping-cart" size="1x"/>&ensp;Add To Cart</MDBBtn>
                                    </div>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                    
                   
                </MDBRow>
                <br/><br/>
            </div>
        )
    }
}
export default Mobile