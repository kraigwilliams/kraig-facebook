import React from 'react';
import './Header.css';
import facebook from './images/facebook.png';
import {Avatar} from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import FlagIcon from '@material-ui/icons/Flag';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import StorefrontOutlinedIcon from '@material-ui/icons/StorefrontOutlined';
import SubscriptionsOutlinedIcon from '@material-ui/icons/SubscriptionsOutlined';

function Header() {
    return (
        <div className='header'>
            <div className='header__left'>
            <img  className='logo' src={facebook} alt='facebook=logo'/>
            <SearchIcon/>
            <HomeIcon/>
            <FlagIcon/>
            <input  />
            </div>
            <div className='header__middle'>
            
        </div>
        <div className='header__right'>
            <div className='header__info'>
            <Avatar />
            
        </div>
        
        </div>

        </div>
    )
}

export default Header
