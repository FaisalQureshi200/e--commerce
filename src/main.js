import React from 'react'
import Home from './Home'
import Shirts from './Shirts'
import Shoes from './Shoes'
import Watch from './Watch'
import Mobile from './Mobile'
import Shirtsview1 from './Shirtview/Shirtsview1'
import Shirtsview2 from './Shirtview/Shirtsview2'
import Shirtsview3 from './Shirtview/Shirtsview3'
import Shirtsview4 from './Shirtview/Shirtsview4'
import Shirtsview5 from './Shirtview/Shirtsview5'
import Shirtsview6 from './Shirtview/Shirtsview6'
import Shoesview1 from './Shoesview/Shoesview1'
import Shoesview2 from './Shoesview/Shoesview2';
import Shoesview3 from './Shoesview/Shoesview3';
import Shoesview4 from './Shoesview/Shoesview4';
import Shoesview5 from './Shoesview/Shoesview5';
import Shoesview6 from './Shoesview/Shoesview6';
import Watchesview1 from "./Watchview/Watchesview1";
import Watchesview2 from "./Watchview/Watchesview2";
import Watchesview3 from "./Watchview/Watchesview3";
import Watchesview4 from "./Watchview/Watchesview4";
import Watchesview5 from "./Watchview/Watchesview5";
import Watchesview6 from "./Watchview/Watchesview6";
import Mobileview1 from "./Mobileview/Mobileview1";
import Mobileview2 from "./Mobileview/Mobileview2";
import Mobileview3 from "./Mobileview/Mobileview3";
import Mobileview4 from "./Mobileview/Mobileview4";
import Mobileview5 from "./Mobileview/Mobileview5";
import Mobileview6 from "./Mobileview/Mobileview6";
import ShirtAddCart from './ShirtAddCart/ShirtAddCart'
import ShoesAddCart from './ShoesAddCart/ShoesAddCart'
import WatchAddCart from './WatchAddCart/WatchAddCart'
import MobileAddCart from './MobileAddCart/MobileAddCart'
import {Switch,Route} from 'react-router-dom'
const Main=()=>(
   <Switch>
       <Route exact path='/' component={Home}/>
       <Route exact path='/shirts' component={Shirts}/>
       <Route exact path='/shirts/view/1' component={Shirtsview1}/>
       <Route exact path='/shirts/view/2' component={Shirtsview2}/>
       <Route exact path='/shirts/view/3' component={Shirtsview3}/>
       <Route exact path='/shirts/view/4' component={Shirtsview4}/>
       <Route exact path='/shirts/view/5' component={Shirtsview5}/>
       <Route exact path='/shirts/view/6' component={Shirtsview6}/>
       <Route exact path='/shoes' component={Shoes}/>
       <Route exact path='/shoes/view/1' component={Shoesview1}/>
       <Route exact path='/shoes/view/2' component={Shoesview2}/>
       <Route exact path='/shoes/view/3' component={Shoesview3}/>
       <Route exact path='/shoes/view/4' component={Shoesview4}/>
       <Route exact path='/shoes/view/5' component={Shoesview5}/>
       <Route exact path='/shoes/view/6' component={Shoesview6}/>
       <Route exact path='/watches' component={Watch}/>
       <Route exact path='/watch/view/1' component={Watchesview1}/>
       <Route exact path='/watch/view/2' component={Watchesview2}/>
       <Route exact path='/watch/view/3' component={Watchesview3}/>
       <Route exact path='/watch/view/4' component={Watchesview4}/>
       <Route exact path='/watch/view/5' component={Watchesview5}/>
       <Route exact path='/watch/view/6' component={Watchesview6}/>
       <Route exact path='/mobiles' component={Mobile}/>
       <Route exact path='/mobile/view/1' component={Mobileview1}/>
       <Route exact path='/mobile/view/2' component={Mobileview2}/>
       <Route exact path='/mobile/view/3' component={Mobileview3}/>
       <Route exact path='/mobile/view/4' component={Mobileview4}/>
       <Route exact path='/mobile/view/5' component={Mobileview5}/>
       <Route exact path='/mobile/view/6' component={Mobileview6}/>
       <Route exact path='/shirt/AddCart' component={ShirtAddCart}/>
       <Route exact path='/shoes/AddCart' component={ShoesAddCart}/>
       <Route exact path='/watch/AddCart' component={WatchAddCart}/>
       <Route exact path='/mobile/AddCart' component={MobileAddCart}/>
   </Switch>
)
export default Main