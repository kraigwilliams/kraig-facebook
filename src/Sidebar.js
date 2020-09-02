import React from 'react'
import './Sidebar.css'
import SidebarRow from './SidebarRow'
import LocalHospitalIcon from '@material-ui/icons/LocalHospital'
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags'
import PeopleIcon from '@material-ui/icons/People'
import ChatIcom from '@material-ui/icons/Chat'
import StorefrontIcon from '@material-ui/icons/Storefront'
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary'
import avatar from './images/face.png'

function Sidebar() {
    return (
        <div className='sidebar'>
            <SidebarRow src={avatar} title='Kraig Williams'/>
            <SidebarRow Icon={LocalHospitalIcon} title='Covid-19 Information Center'/>
            <SidebarRow Icon={EmojiFlagsIcon} title='People'/>
            <SidebarRow Icon={PeopleIcon} title='Friends'/>
            <SidebarRow Icon={ChatIcom} title='Messenger'/>
            <SidebarRow Icon={StorefrontIcon} title='Marketplace'/>
            <SidebarRow Icon={VideoLibraryIcon} title='Videos'/>
             
            
        </div>
    )
}

export default Sidebar
