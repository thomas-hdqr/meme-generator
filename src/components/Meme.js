import memesData from './memeData.js'
import React, { useState } from "react";



export default function Meme() {


    const [memeImage, setMemeImage] = React.useState("")

    function getMemeImage() {
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        setMemeImage(memesArray[randomNumber].url)
    }

    return (
        <main>
            <div className="meme">
                <div className="meme-input">
                    <input className="meme-input-1" type="text" placeholder="Top text"></input>
                    <input className="meme-input-2" type="text"placeholder="Bottom text"></input>
                </div>
                <div>
                    <button className="meme-button gradient" onClick={getMemeImage}>Get a new meme image 🖼</button>
                </div>
                <div>
                    <img src={memeImage} alt="" className="meme-image"/>
                </div>
            </div>
        </main>
    )
}