export default function Meme() {
    return (
        <div>
            <form className="meme">
                <div className="meme-input">
                    <input className="meme-input-1" type="text" placeholder="Write someting"></input>
                    <input className="meme-input-2" type="text"placeholder="Write someting here too"></input>
                </div>
                <div>
                    <input className="meme-button gradient" type="submit" value="Get a new meme image 🖼"></input>
                </div>
            </form>
        </div>
    )
}