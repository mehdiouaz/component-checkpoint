import React from 'react'
import vladPic from './vladPic.jpg';

function ProfilePhoto() {
    return (
        <div>
            <img className="myPic" src={vladPic}alt ="pic"></img>
        </div>
    )
}

export default ProfilePhoto
