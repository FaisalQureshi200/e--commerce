import React from "react";
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import {MDBIcon} from 'mdbreact'
import Main from './main'
import {Link} from 'react-router-dom'
import {Header,Navigation,Drawer,Content,Layout} from 'react-mdl'

const App = () => {
  return (
    <div  className="demo-big-content">
      <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
    <Layout fixedDrawer>
        <Header style={{backgroundColor:'#F2F2F2',color:'black'}}  scroll>
            <Navigation style={{position:'relative',left:'600px'}}>
               {/* <Link style={{color:'black'}} to = '/'>Home</Link> */}
               <Link style={{color:'black',position:'relative',left:'250px'}} ><MDBIcon icon="shopping-cart" className="indigo-text pr-3" size="2x"/>&ensp;<b style={{fontSize:"15px"}}>Add To Cart</b></Link>
               {/* <Link style={{color:'black'}} to = '/shirts'>Shirts</Link>
               <Link style={{color:'black'}} to = '/shoes'>Shoes</Link>
               <Link style={{color:'black'}} to = '/watches'>Watches</Link>
               <Link style={{color:'black'}} to = '/mobiles'>Mobiles</Link> */}
            </Navigation>
        </Header>
        <Drawer style={{height:'1000px'}}  title="Categories">
            <Navigation style={{backgroundColor:'#F2F2F2'}}>
            <Link style={{color:'black'}} to = '/'>Home</Link><hr/>
            <Link style={{color:'black'}} to = '/shirts'>Shirts</Link><hr/>
            <Link style={{color:'black'}} to = '/shoes'>Shoes</Link><hr/>
            <Link style={{color:'black'}} to = '/watches'>Watches</Link><hr/>
            <Link style={{color:'black'}} to = '/mobiles'>Mobiles</Link>
            
            </Navigation>
        </Drawer>
        <br/>
        <Content>
           <div className="page-content" />
            <Main/>
        </Content>
    </Layout>
</div>
  );
}

export default App;