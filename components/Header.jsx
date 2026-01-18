import TrollFace from '../images/TrollFace.png'


export default function Header() {
    return (
        <header className="flex items-center w-full justify-center bg-purple-700 p-5">
            <img src={TrollFace}
            alt="Troll face"
            className="w-32"
            />
            <h1 className="text-3xl font-bold text-white">Meme Generator</h1>
        </header>
    )
}