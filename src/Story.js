import React from 'react'
import "./Story.css"
import {Avatar} from "@material-ui/core";
import SimpleModal from './SimpleModal';

function Story({ image, profileSrc, title }) {
    return (
        <SimpleModal
        body={
            <div className="StoryModal">
                <div className="story__info">
                    <Avatar className="story__avatar" src={profileSrc}/>
                    <h4>{title}</h4>
                </div>
                <div className="story__image">
                    <img src={image}/>
                </div>
            </div>
        }
        opensrc={
            <div style={{ backgroundImage: `url(${image})` }} className="story">
            <Avatar className="story__avatar" src={profileSrc}/>
            <h4>{title}</h4>
        </div>
        } />
    )
}

export default Story
