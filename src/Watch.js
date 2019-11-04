import React from 'react'
import { MDBRow, MDBCol, MDBCard, MDBCardImage,MDBCardBody,MDBBtn,MDBIcon} from 'mdbreact'
class Watch extends React.Component{
    handleview1=()=>{
        
        return(
            this.props.history.push('/watch/view/1')

        )
    
}
handleview2=()=>{
        
    return(
        this.props.history.push('/watch/view/2')

    )

}
handleview3=()=>{
        
    return(
        this.props.history.push('/watch/view/3')

    )

}
handleview4=()=>{
        
    return(
        this.props.history.push('/watch/view/4')

    )

}
handleview5=()=>{
        
    return(
        this.props.history.push('/watch/view/5')

    )

}
handleview6=()=>{
        
    return(
        this.props.history.push('/watch/view/6')

    )

}
handleAddCart = () => {
    return (
        this.props.history.push('/watch/AddCart')
    )
}
    render(){
        return(
            <div>
                <MDBRow>
                    <MDBCol md="4">
                        <MDBCard className="watchcard-1">
                            <MDBCardImage className="watch-1" src="https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/2336922/2017/12/19/11513687409680-Tommy-Hilfiger-Men-Watches-6981513687409689-1.jpg"/>
                            <MDBCardBody>
                                
                            <h3 style={{textAlign:"center",position:'relative',bottom:'-5px'}}>Rs-500</h3>
                                    <div className="watchbtn-1">
                                    <MDBBtn onClick={this.handleview1}  color="primary">View Detail</MDBBtn>
                                    <MDBBtn onClick={this.handleAddCart} color="secondary"> <MDBIcon icon="shopping-cart" size="1x"/>&ensp;Add To Cart</MDBBtn>
                                    </div>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                    <MDBCol md="4">
                        <MDBCard className="watchcard-2">
                            <MDBCardImage className="watch-2" src="https://ae01.alicdn.com/kf/HTB16jfSUSzqK1RjSZPcq6zTepXaw/SCOMAS-New-Fashion-Smart-Watch-1-3-IPS-High-Resolution-Blood-Pressure-Heart-Rate-Monitor-Men.jpg"/>
                            <MDBCardBody>
                               
                            <h3 style={{textAlign:"center",position:'relative',bottom:'-30px'}}>Rs-500</h3>
                            <div className="watchbtn-2">
                                    <MDBBtn onClick={this.handleview2}  color="primary">View Detail</MDBBtn>
                                    <MDBBtn onClick={this.handleAddCart} color="secondary"> <MDBIcon icon="shopping-cart" size="1x"/>&ensp;Add To Cart</MDBBtn>
                                </div>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                    <MDBCol md="4">
                        <MDBCard className="watchcard-3">
                            <MDBCardImage className="watch-3" src="https://www.sincerewatch.com/images/com_hikashop/upload/thumbnails/570x570f/ai6038_ss002_430_1.jpg"/>
                            <MDBCardBody>
                            <h3 style={{textAlign:"center",position:'relative',bottom:'-30px'}}>Rs-500</h3>
                            
                            <div className="watchbtn-3">
                                    <MDBBtn onClick={this.handleview3}  color="primary">View Detail</MDBBtn>
                                    <MDBBtn onClick={this.handleAddCart} color="secondary"> <MDBIcon icon="shopping-cart" size="1x"/>&ensp;Add To Cart</MDBBtn>
                                </div>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                    <MDBCol md="4">
                        <MDBCard className="watchcard-4">
                            <MDBCardImage className="watch-4" src="https://static.garmincdn.com/en/products/010-02063-00/g/cf-lg-cdd46e58-bcbb-41ed-af4c-491cfd20f25e.jpg"/>
                            <MDBCardBody>
                            <h3 style={{textAlign:"center",position:'relative',bottom:'-25px'}}>Rs-500</h3>
                            <div className="watchbtn-4">
                                    <MDBBtn onClick={this.handleview4}  color="primary">View Detail</MDBBtn>
                                    <MDBBtn onClick={this.handleAddCart} color="secondary"> <MDBIcon icon="shopping-cart" size="1x"/>&ensp;Add To Cart</MDBBtn>
                                </div>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                    <MDBCol md="4">
                        <MDBCard className="watchcard-5">
                            <MDBCardImage className="watch-5" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2Y9ez2GI8Z_kYQ6vaLl7LEe8_nSpZbf7L2Wy0r3eKNzUtDtlP&s"/>
                            <MDBCardBody>
                            <h3 style={{textAlign:"center",position:'relative',bottom:'5px'}}>Rs-500</h3>
                            
                            <div className="watchbtn-5">
                                    <MDBBtn onClick={this.handleview5}  color="primary">View Detail</MDBBtn>
                                    <MDBBtn onClick={this.handleAddCart} color="secondary"> <MDBIcon icon="shopping-cart" size="1x"/>&ensp;Add To Cart</MDBBtn>
                                     </div>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                    <MDBCol md="4">
                        <MDBCard className="watchcard-6">
                            <MDBCardImage className="watch-6" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk8cb6g_YMACFdm4ZDSZNfjvrPE1eV0OCEISf8el4HmEluw5zw&s"/>
                            <MDBCardBody>
                            <h3 style={{textAlign:"center",position:'relative',bottom:'-25px'}}>Rs-500</h3>
                            <div className="watchbtn-6">
                                    <MDBBtn onClick={this.handleview6}  color="primary">View Detail</MDBBtn>
                                    <MDBBtn onClick={this.handleAddCart}  color="secondary"> <MDBIcon icon="shopping-cart" size="1x"/>&ensp;Add To Cart</MDBBtn>
                                </div>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                    
                   
                </MDBRow>
                <br/> <br/>
            </div>
        )
    }
}
export default Watch