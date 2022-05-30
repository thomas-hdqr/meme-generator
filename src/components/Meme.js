import memesData from './memeData.js'


export default function Meme() {

    function getMemeImage() {
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url
        console.log(url)
    }

    return (
        <main>
            <div className="meme">
                <div className="meme-input">
                    <input className="meme-input-1" type="text" placeholder="Write someting"></input>
                    <input className="meme-input-2" type="text"placeholder="Write someting here too"></input>
                </div>
                <div>
                    <button className="meme-button gradient" onClick={getMemeImage}>Get a new meme image 🖼</button>
                </div>
            </div>
        </main>
    )
}