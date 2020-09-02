import React from 'react'
import './StoryReel.css'
import Story from './Story'
import avatar from './images/face.png';
import background1 from './images/background1.png';
import background2 from './images/background2.png';
import background3 from './images/background3.png';
import background4 from './images/background4.png';

function StoryReel() {
    return (
        <div className='storyReel'>
            <Story image={background1} profileSrc={avatar} title='Kraig'/>
            <Story image={background2} profileSrc={avatar} title='Kraig'/>
            <Story image={background3} profileSrc={avatar}title='Kraig'/>
            <Story image={background4} profileSrc={avatar}title='Kraig'/>
        </div>
    )
}

export default StoryReel
