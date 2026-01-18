import React from "react";

export default function Maincontent() {
    const [meme, setMeme] = React.useState({
        topText: "One does not simply",
        bottomText: "Walk into Mordor",
        imageUrl: "http://i.imgflip.com/1bij.jpg",
    });
    const [allMemes, setAllMemes] = React.useState([])

    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemes(data.data.memes))
    }, [])

    function getMemeImage() {
        const randomIndex = Math.floor(Math.random() * allMemes.length)
        const randomMeme = allMemes[randomIndex].url
        setMeme(prevMeme => ({
            ...prevMeme,
            imageUrl: randomMeme
        }))
    }



    function handleChange(event) {
        const {value, name} = event.currentTarget
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    } 

    return (
    <div className="min-h-screen flex items-center justify-center px-4">
        <main className="w-full max-w-2xl p-6 md:p-8 flex flex-col gap-6">
            
            {/* Inputs */}
            <div className="flex flex-col md:flex-row gap-4 md:gap-6">
                <label className="flex flex-col gap-2 w-full">
                    <span className="font-medium">Top Text</span>
                    <input
                        type="text"
                        name="topText"
                        value={meme.topText}
                        onChange={handleChange}
                        className="border-2 border-gray-300 rounded px-4 py-3"
                    />
                </label>

                <label className="flex flex-col gap-2 w-full">
                    <span className="font-medium">Bottom Text</span>
                    <input
                        type="text"
                        name="bottomText"
                        value={meme.bottomText}
                        onChange={handleChange}
                        className="border-2 border-gray-300 rounded px-4 py-3"
                    />
                </label>
            </div>

            {/* Button */}
            <button
                onClick={getMemeImage}
                className="bg-purple-700 text-white rounded px-6 py-3 font-medium hover:bg-purple-800 transition"
            >
                Get a new meme image
            </button>

            {/* Meme */}
            <div className="relative flex justify-center">
                <img
                    src={meme.imageUrl}
                    alt="meme"
                    className="w-full max-w-full rounded"
                />

                <span className="absolute top-4 w-full text-center px-4 text-xl md:text-3xl font-bold uppercase text-white drop-shadow">
                    {meme.topText}
                </span>

                <span className="absolute bottom-4 w-full text-center px-4 text-xl md:text-3xl font-bold uppercase text-white drop-shadow">
                    {meme.bottomText}
                </span>
            </div>
        </main>
    </div>
);
}