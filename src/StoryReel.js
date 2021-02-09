import React from 'react'
import Story from './Story'
import "./StoryReel.css"

function StoryReel() {
    return (
        <div className="storyReel">
            <Story 
            image="https://www.aljazeera.com/wp-content/uploads/2020/04/ecab8c7af42a439d9043b0ade6e1f05b_18.jpeg?fit=999%2C562" 
            profileSrc="https://yt3.ggpht.com/ytc/AAUvwniwccxGvXvGzzwka5f73aPbmdxvEX4G_cUd7TEzkw=s900-c-k-c0x00ffffff-no-rj" 
            title="Rafeh Qazi"/>

            <Story 
            image="https://wallpaperaccess.com/full/359112.jpg"
            profileSrc="https://images.complex.com/complex/images/c_scale,w_1920/fl_lossy,pg_1,q_auto/yd2fugirkvheajytvvmy/michael-jordan-mvp-madison-square-garden-1998-getty"
            title="Mickle Jordan"/>

            <Story 
            image="https://assets.vogue.com/photos/59132f18dc6868483f55b55a/master/w_2560%2Cc_limit/00-lede-the-rock.jpg"
            profileSrc="https://firstsportz.com/wp-content/uploads/2020/10/the-rock-dwayne-johnson.jpg"
            title="Dwayne Johnson"/>

            <Story 
            image="https://mangathrill.com/wp-content/uploads/2019/10/1555467275196640x360.png"
            profileSrc="https://lastfm.freetls.fastly.net/i/u/770x0/4fd5bd73d27995fa888b518492939d44.jpg"
            title="Celeina Ann"/>

            <Story 
            image="https://images.everyeye.it/img-notizie/radwimps-cantante-your-name-offeso-pesantemente-battuta-fan-nazista-v3-460575.jpg"
            profileSrc="https://media.vgm.io/artists/09/19990/19990-1470487819.png"
            title="Yojiro Noda"/>
        </div>
    )
}

export default StoryReel
