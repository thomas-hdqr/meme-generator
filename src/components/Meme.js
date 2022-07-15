import React, { useState } from "react";



export default function Meme() {


    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    }) 


    const [allMemes, setAllMemes] = React.useState([])

    React.useEffect(() => {
        async function getMemes() {
            const res = await fetch("https://api.imgflip.com/get_memes")
            const data = await res.json()
            setAllMemes(data.data.memes)
        }
        getMemes()
    }, [])

  
    

    function getMemeImage() {
        const randomNumber = Math.floor(Math.random() * allMemes.length)
        const url = allMemes[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
    }


    function handleChange(event) {
        const { name, value } = event.target
        setMeme(prevMeme => ({ ...prevMeme, [name]: value 
        }))

    }

    return (
        <main>
            <div className="meme">
                <div className="meme-input">
                    <input className="meme-input-1" type="text" placeholder="Top text" name="topText" value={meme.topText} onChange={handleChange}></input>
                    <input className="meme-input-2" type="text"placeholder="Bottom text" name="bottomText" value={meme.bottomText} onChange={handleChange}></input>
                </div>
                <div>
                    <button className="meme-button gradient" onClick={getMemeImage}>Get new meme image 🖼</button>
                </div>
                <div className="meme-text">
                    <img src={meme.randomImage} alt="" className="meme-image"/>
                    <h2 className="meme-text top">{meme.topText}</h2>
                    <h2 className="meme-text bottom">{meme.bottomText}</h2>
                </div>
            </div>
        </main>
    )
    }