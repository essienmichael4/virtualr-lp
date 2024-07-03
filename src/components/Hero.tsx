import video1 from "../assets/video1.mp4"
import video2 from "../assets/video2.mp4"

const Hero = () => {
  return (
    <div className="flex flex-col items-center mt-6 ">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
            VirtualR build tools <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">for developers</span>
        </h1>

        <p className="mt-10 text-center text-lg text-neutral-500 max-w-4xl">Empower your creativity and bring you VR app ideas to life with our intuitive development tools. Get started today and turn your imagination into immersive reality.</p>
        <div className="flex justify-center my-10 space-x-6">
            <a href="#" className="bg-gradient-to-r text-white from-orange-500 to-orange-800 py-2 px-3 rounded-md">Start for free</a>
            <a href="#" className="border text-neutral-500 py-2 px-3 rounded-md">Documentation</a>
        </div>
        <div className="flex justify-center mt-10 mb-4">
            <video autoPlay loop muted className="rounded-lg w-1/2 border border-orange-700 shadow shadow-orange-400 mx-2">
                <source src={video1} type="viddeo/mp4"/>
                Your browser does not support the video
            </video>
            <video autoPlay loop muted className="rounded-lg w-1/2 border border-orange-700 shadow shadow-orange-400 mx-2">
                <source src={video2} type="viddeo/mp4"/>
                Your browser does not support the video
            </video>
        </div>
    </div>
  )
}

export default Hero
