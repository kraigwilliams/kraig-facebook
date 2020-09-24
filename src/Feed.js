import React, {useState, useEffect} from 'react';
import StoryReel from './StoryReel';
import './Feed.css'
import MessageSender from './MessageSender'
import Post from './Post'
import avatar from './images/face.png';
import post1 from './images/background1.png';
import db from './firebase'
import firebase from 'firebase'


function Feed() {

    const [posts, setPosts] = useState([])
useEffect(()=>{
    db.collection('posts').onSnapshot(snapshot=>(
        setPosts(snapshot.docs.map((doc)=>({id:doc.id,data:doc.data()})))
    ))
},[])


    return (
        <div className='feed'>
            
            <StoryReel/>
            <MessageSender/>
            <Post
            // key={id}
            profilePic={avatar}
            message='my first port'
            timestamp='some time in history'
            image={post1}
            />
            <Post/>
            <Post/>
        </div>
    )
}

export default Feed
