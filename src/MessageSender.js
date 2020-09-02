import React from 'react'
import './MessageSender.css'
import { Avatar} from "@material-ui/core";

function MessageSender() {

    const handleSubmit = function(e){
        e.preventDefault()
    }
    return (
        <div className='messageSender'>
        <div className='messageSender__top'> 
            <Avatar/> 
            <form>
            <input type='text' placeholder='Whats on your mind Kraig?'/> <br/><br/><br/><br/>
            <input type='text' placeholder='Image URL (Optional)'/> 
            <button onClick={handleSubmit}  type='submit'/>
            </form>
        </div>
        <div className='messageSender__bottom'></div>
        </div>
    )
}

export default MessageSender
