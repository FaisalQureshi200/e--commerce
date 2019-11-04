import React from 'react'

import { MDBCard, MDBCardBody,MDBInput } from 'mdbreact'
class MobileAddCart extends React.Component {
    constructor(){
        super()
        this.state={
            price:15000,
            quantity:1
          
        
        }
            }
            handleChange=(e)=>{
                
                var quantity=this.state.quantity
                if(quantity===2){
                    this.setState({price:e.target.price-100})
                }
                else{
                    
                    this.setState({price:e.target.price})
                }
                this.setState({quantity:e.target.quantity})
            }
    render() {
        return (
            <div>
               <link href="//netdna.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css"></link>
              <script src="//netdna.bootstrapcdn.com/bootstrap/3.2.0/js/bootstrap.min.js"></script>
               <script src="//code.jquery.com/jquery-1.11.1.min.js"></script> 
                <MDBCard className="cartcard">
                    <MDBCardBody>
                    <MDBInput containerClass="cartinput1"  type="text" label="First name" size="lg"  />
                    <MDBInput containerClass="cartinput2" type="text" label="Last name" size="lg" />
                    <MDBInput containerClass="cartinput3" type="email" label="Email" size="lg" />
                    <MDBInput containerClass="cartinput4" type="text" label="Address" size="lg" />
                    <MDBInput onChange={this.handleChange}  value={this.state.quantity} label="Quantity" type="number" min="1" size="lg"  />
                    <MDBInput onChange={this.handleChange} value={this.state.price} containerClass="cartinput5" type="text" label="Price" size="lg" />
                    <button type="button" class="btn btn-default btn-round-lg btn-lg" style={{color:'white',fontSize:'15px',position:'relative',left:'130px'}}>Add Cart</button>
                    </MDBCardBody>
                </MDBCard>
            </div>
        )
    }
}
export default MobileAddCart