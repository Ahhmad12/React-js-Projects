import React, { useState } from 'react'
import my from '../images/my.jpg'
import './Heeader.css'
const Header = ({item}) => {
    return (


        <div className='headerd'>

            <div className='circlediv'>
                <div className='circle'>
                    <img src={item.image} alt='' className='image' />
                </div>

            </div>
        </div>
    );
}




export default Header;
