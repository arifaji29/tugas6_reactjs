import React, {Component} from 'react';
import '../Style/Header.css';
import {Link} from "react-router-dom";

class Header extends Component {
    render(){
      return(
        <div  id='head'>
            <table style={{width:'100%'}}>
                <tbody>
                    <tr>
                        <center>
                            <td>
                                <h2>
                                    <Link to='/' className='link'>Home</Link>
                                    |
                                </h2>
                            </td>
                            <td>
                                <h2>
                                    <Link to='/menu_makanan' className='link'>Menu Makanan</Link>
                                    |
                                </h2>
                            </td>
                            <td>
                                <h2>
                                    <Link to='/menu_minuman' className='link'>Menu Minuman</Link>
                                    |
                                </h2>
                            </td>
                            <td>
                                <h2>
                                    <Link to='/Kontak' className='link'>Kontak</Link>
                                    |
                                </h2>
                            </td>
                            
                        </center>
                    </tr>
                </tbody>

            </table>
          
        </div>
      )
    }
  }
  
  export default Header;