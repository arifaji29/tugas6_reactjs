import React, {Component} from 'react';
import Header from './Header';


class MenuHome extends Component {
    render(){
      return(
        <div>
           <Header/>
           <br></br>
           <h1>
            <center>
                selamat datang di Halaman Utama !
            </center>
           </h1>
           <div className='image_header'>
            <br></br>
            </div>
        </div>
      
      )
    }
  }
  
  export default MenuHome;
  