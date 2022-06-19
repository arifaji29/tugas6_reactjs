import React, {Component} from 'react';
import Header from './Header';
import '../Style/Kontak.css'

class Kontak extends Component {
  render(){
    return(
      <div id='kontak_bg'>
        <Header/>
        <div className='kontak'>
            <h3>
                Jl. Swadaya IV, Pondok Rangon, Cipayung, Kota Jakarta Timur. Daerah Khusus Ibukota Jakarta {''}
            </h3>
            <p>08134567899</p>
        </div>
      </div>
    )
  }
}

export default Kontak;