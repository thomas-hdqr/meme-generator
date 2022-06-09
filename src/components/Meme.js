import memesData from './memeData.js'
import React, { useState } from "react";



export default function Meme() {


    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    }) 


    const [allMemeImages, setAllMemeImages] = React.useState(memesData)

  
    

    function getMemeImage() {
        const memesArray = allMemeImages.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
    }

    return (
        <main>
            <div className="meme">
                <div className="meme-input">
                    <input className="meme-input-1" type="text" placeholder="Top text"></input>
                    <input className="meme-input-2" type="text"placeholder="Bottom text"></input>
                </div>
                <div>
                    <button className="meme-button gradient" onClick={getMemeImage}>Get new meme image 🖼</button>
                </div>
                <div>
                    <img src={meme.randomImage} alt="" className="meme-image"/>
                </div>
            </div>
        </main>
    )
}