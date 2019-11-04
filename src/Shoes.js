import React from 'react'
import { MDBRow, MDBCol, MDBCard, MDBCardImage,MDBCardBody,MDBBtn,MDBIcon} from 'mdbreact'
class Shoes extends React.Component{
    handleview1=()=>{
        
        return(
            this.props.history.push('/shoes/view/1')

        )
    
}
handleview2=()=>{
        
    return(
        this.props.history.push('/shoes/view/2')

    )

}
handleview3=()=>{
        
    return(
        this.props.history.push('/shirts/view/3')

    )

}
handleview4=()=>{
        
    return(
        this.props.history.push('/shoes/view/4')

    )

}
handleview5=()=>{
        
    return(
        this.props.history.push('/shoes/view/5')

    )

}
handleview6=()=>{
        
    return(
        this.props.history.push('/shoes/view/6')

    )

}
handleAddCart = () => {
    return (
        this.props.history.push('/shoes/AddCart')
    )
}
    render(){
       
    
        return(
            <div>
                <MDBRow>
                    <MDBCol md="4">
                        <MDBCard className="shoescard-1">
                            <MDBCardImage className="shoes-1" src="https://i.ebayimg.com/images/g/rVAAAOSwhktdCuzc/s-l300.jpg"/>
                            <MDBCardBody>
                            <h3 style={{textAlign:"center",position:'relative',bottom:'5px'}}>Rs-500</h3>
                                    <MDBBtn onClick={this.handleview1}  color="primary">View Detail</MDBBtn>
                                    <MDBBtn onClick={this.handleAddCart} color="secondary"> <MDBIcon icon="shopping-cart" size="1x"/>&ensp;Add To Cart</MDBBtn> 
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                    <MDBCol md="4">
                        <MDBCard className="shoescard-2">
                            <MDBCardImage className="shoes-2" src="https://www.karitraa.com/dw/image/v2/BCKX_PRD/on/demandware.static/-/Sites-masterCatalog_KariTraa/default/dwcce13021/images/hi-res/640103_Trinn-Sneakers_THYME_PRODUCT_1_Karitraa.jpg?sw=496&sh=618"/>
                            <MDBCardBody>
                                
                            <h3 style={{textAlign:"center",position:'relative',bottom:'5px'}}>Rs-500</h3>
                            
                                
                                   
                                    <MDBBtn onClick={this.handleview2}  color="primary">View Detail</MDBBtn>
                                    <MDBBtn onClick={this.handleAddCart} color="secondary"> <MDBIcon icon="shopping-cart" size="1x"/>&ensp;Add To Cart</MDBBtn>
                                
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                    <MDBCol md="4">
                        <MDBCard className="shoescard-3">
                            <MDBCardImage className="shoes-3" src="https://www.famousfootwear.com/productimages/shoes_ia78191.jpg?trim.threshold=105&width=630&height=480&paddingWidth=60"/>
                            <MDBCardBody>
                            <h3 style={{textAlign:"center",position:'relative',bottom:'5px'}}>Rs-500</h3>
                            
                                
                                   <div className="button-3">
                                    <MDBBtn onClick={this.handleview3}  color="primary">View Detail</MDBBtn>
                                    <MDBBtn onClick={this.handleAddCart} color="secondary"> <MDBIcon icon="shopping-cart" size="1x"/>&ensp;Add To Cart</MDBBtn>
                                    </div>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                    <MDBCol md="4">
                        <MDBCard className="shoescard-4">
                            <MDBCardImage className="shoes-4" src="http://www.godsextendedhand.com/images/large/Brands_Shoes/Hot%20Sales%20adidas%20Barricade%20Court%202%20Tennis%20Shoes%20Hot%20Sales%20adidas%20Tennis%20Shoes%20Women%20White%20Tech%20Ink%20Hi-Res%20Aqua%20adidas%20Women%20Tennis%20Shoes%20United%20Kingdom%20Sale%20139_LRG.jpg"/>
                            <MDBCardBody>
                            <h3 style={{textAlign:"center",position:'relative',bottom:'5px'}}>Rs-500</h3>
                            
                                <div className="button-4">
                                    <MDBBtn onClick={this.handleview4}  color="primary">View Detail</MDBBtn>
                                    <MDBBtn onClick={this.handleAddCart} color="secondary"> <MDBIcon icon="shopping-cart" size="1x"/>&ensp;Add To Cart</MDBBtn>
                                </div>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                    <MDBCol md="4">
                        <MDBCard className="shoescard-5">
                            <MDBCardImage className="shoes-5" src="https://www.childrensalonoutlet.com/media/catalog/product/cache/0/image/1000x1000/9df78eab33525d08d6e5fb8d27136e95/i/l/il-gufo-boys-blue-white-leather-deck-shoes-173620-42f48eb8d09da4ebb4ace1e041abc1857c2afdc2.jpg"/>
                            <MDBCardBody>
                            <h3 style={{textAlign:"center",position:'relative',bottom:'5px'}}>Rs-500</h3>
                            
                                    <MDBBtn onClick={this.handleview5}  color="primary">View Detail</MDBBtn>
                                    <MDBBtn onClick={this.handleAddCart} color="secondary"> <MDBIcon icon="shopping-cart" size="1x"/>&ensp;Add To Cart</MDBBtn>
                                
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                    <MDBCol md="4">
                        <MDBCard className="shoescard-6">
                            <MDBCardImage className="shoes-6" src="https://www.childrensalonoutlet.com/media/catalog/product/cache/0/image/1000x1000/9df78eab33525d08d6e5fb8d27136e95/h/a/hackett-boys-navy-blue-beige-leather-deck-shoes-117427-b077e3cbbb6e14a97409992a6a9344c04042767a.jpg"/>
                            <MDBCardBody>
                            <h3 style={{textAlign:"center",position:'relative',bottom:'5px'}}>Rs-500</h3>
                             
                                    <MDBBtn onClick={this.handleview6}  color="primary">View Detail</MDBBtn>
                                    <MDBBtn onClick={this.handleAddCart} color="secondary"> <MDBIcon icon="shopping-cart" size="1x"/>&ensp;Add To Cart</MDBBtn>
                                
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                    
                   
                </MDBRow>
                <br/> <br/>
            </div>
        )
    }
}
export default Shoes