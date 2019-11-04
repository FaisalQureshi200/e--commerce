import React from 'react'
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView, MDBContainer } from "mdbreact";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
class Home extends React.Component{
    render()
    {
        return(
            <div>
                <MDBContainer>
      <MDBCarousel
        activeItem={1}
        length={3}
        showControls={true}
        showIndicators={true}
        className="z-depth-1"
      >
        <MDBCarouselInner>
          <MDBCarouselItem itemId="1" >
            <MDBView >
              <img
               className="img-1"
                src="https://geeksided.com/wp-content/blogs.dir/317/files/2014/06/iphone5shtconem8.jpg"
                alt="First slide"
              />
              
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="2">
            <MDBView>
              <img
                className="img-2"
                src="https://goodmockups.com/wp-content/uploads/2017/08/Free-Black-White-Half-Sleeves-T-Shirt-Mockup-PSD-1024x743.jpg"
                alt="Second slide"
              />
             
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="3">
            <MDBView>
              <img
                className="img-3"
                src="https://www.macworld.co.uk/cmsdata/reviews/3544044/Apple_Watch_Lifestyle_home2.jpg"
                alt="Third slide"
              />
              
            </MDBView>
          </MDBCarouselItem>
        </MDBCarouselInner>
      </MDBCarousel>
    </MDBContainer>

            </div>
        )
    }
}
export default Home