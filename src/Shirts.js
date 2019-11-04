import React from 'react'
import { MDBRow, MDBCol, MDBCard, MDBCardImage, MDBCardBody, MDBBtn, MDBIcon } from 'mdbreact'
class Shirts extends React.Component {


    handleview1 = () => {

        return (
            this.props.history.push('/shirts/view/1')

        )

    }
    handleview2 = () => {

        return (
            this.props.history.push('/shirts/view/2')

        )

    }
    handleview3 = () => {

        return (
            this.props.history.push('/shirts/view/3')

        )

    }
    handleview4 = () => {

        return (
            this.props.history.push('/shirts/view/4')

        )

    }
    handleview5 = () => {

        return (
            this.props.history.push('/shirts/view/5')

        )

    }
    handleview6 = () => {

        return (
            this.props.history.push('/shirts/view/6')

        )

    }
    handleAddCart = () => {
        return (
            this.props.history.push('/shirt/AddCart')
        )
    }


    render() {
        return (
            <div>
                <MDBRow>
                    <MDBCol md="4">
                        <MDBCard className="shirtcard-1">
                            <MDBCardImage className="shirt-1" src="https://images-na.ssl-images-amazon.com/images/I/61nsbyWlw9L._UX466_.jpg" />
                            <MDBCardBody>
                                <h3 style={{ textAlign: "center" }} >Rs-300</h3>


                                <MDBBtn onClick={this.handleview1} color="primary">View Detail</MDBBtn>
                                <MDBBtn onClick={this.handleAddCart} color="secondary"> <MDBIcon icon="shopping-cart" size="1x" />&ensp;Add To Cart</MDBBtn>

                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                    <MDBCol md="4">
                        <MDBCard className="shirtcard-2">
                            <MDBCardImage className="shirt-2" src="https://m.media-amazon.com/images/I/B1qmQK-r4OS._CLa%7C2140,2000%7C71QC82OMv9L.png%7C0,0,2140,2000+0.0,0.0,2140.0,2000.0._UX522_.png" />
                            <MDBCardBody>
                                <h3 style={{ textAlign: "center", position: 'relative', bottom: "-45px" }}>Rs-300</h3>
                                <div className="shirtbtn2">
                                    <MDBBtn onClick={this.handleview2} color="primary">View Detail</MDBBtn>
                                    <MDBBtn onClick={this.handleAddCart} color="secondary"> <MDBIcon icon="shopping-cart" size="1x" />&ensp;Add To Cart</MDBBtn>
                                </div>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                    <MDBCol md="4">
                        <MDBCard className="shirtcard-3">
                            <MDBCardImage className="shirt-3" src="https://www.qualitylogoproducts.com/polo-shirts/belmont-short-sleeve-polo-shirtbytrimarkmens-superextralarge.jpg" />
                            <MDBCardBody>
                                <h3 style={{ textAlign: "center", position: 'relative', bottom: "-30px" }}>Rs-300</h3>
                                <div className="shirtbtn3">
                                    <MDBBtn onClick={this.handleview3} size="2x" color="primary">View Detail</MDBBtn>
                                    <MDBBtn onClick={this.handleAddCart} color="secondary"> <MDBIcon icon="shopping-cart" size="1x" />&ensp;Add To Cart</MDBBtn>
                                </div>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                    <MDBCol md="4">
                        <MDBCard className="shirtcard-4">
                            <MDBCardImage className="shirt-4" src="https://www.jbswear.com.au/ClientData/ClientImages/Products/7PCPSWX_2_635488066398283974.jpg" />
                            <MDBCardBody>
                                <h3 style={{ textAlign: "center" }}>Rs-300</h3>

                                <MDBBtn onClick={this.handleview4} size="2x" color="primary">View Detail</MDBBtn>
                                <MDBBtn onClick={this.handleAddCart} color="secondary"> <MDBIcon icon="shopping-cart" size="1x" />&ensp;Add To Cart</MDBBtn>

                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                    <MDBCol md="4">
                        <MDBCard className="shirtcard-5">
                            <MDBCardImage className="shirt-5" src="https://images-na.ssl-images-amazon.com/images/I/81zt6KZKB2L._UX679_.jpg" />
                            <MDBCardBody>
                                <h3 style={{ textAlign: "center", position: 'relative', bottom: "-40px" }}>Rs-300</h3>
                                <div className="shirtbtn5">
                                    <MDBBtn onClick={this.handleview5} size="2x" color="primary">View Detail</MDBBtn>
                                    <MDBBtn onClick={this.handleAddCart} color="secondary"> <MDBIcon icon="shopping-cart" size="1x" />&ensp;Add To Cart</MDBBtn>
                                </div>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                    <MDBCol md="4">
                        <MDBCard className="shirtcard-6">
                            <MDBCardImage className="shirt-6" src="https://www.sefiles.net/images/library/small/specialized-s-3-4-t-shirt-262818-1.jpg" />
                            <MDBCardBody>
                                <h3 style={{ textAlign: "center", position: 'relative', bottom: "-30px" }}>Rs-300</h3>
                                <div className="shirtbtn6">
                                    <MDBBtn onClick={this.handleview6} size="2x" color="primary">View Detail</MDBBtn>
                                    <MDBBtn onClick={this.handleAddCart} color="secondary"> <MDBIcon icon="shopping-cart" size="1x" />&ensp;Add To Cart</MDBBtn>
                                </div>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>


                </MDBRow>
                <br /> <br />
            </div>
        )
    }
}
export default Shirts