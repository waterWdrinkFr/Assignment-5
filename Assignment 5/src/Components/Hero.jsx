function Hero() {
    return (
        <div  className = "absolute top-[100px] w-full">
            <div className = "relative flex justify-center items-center text-center">
                <h1
                    className = "absolute bottom-[60%] w-[85%] p-4 rounded text-4xl font-bold text-sky-500 bg-[rgba(94,94,94,0.4)]">
                    Catch Up On the Latest and Greatest Shows and Movies
                </h1>
                <button
                    className = "absolute bottom-[1.5%] left-[7.25%] w-[45%] h-[12.5%] text-4xl font-bold text-sky-500 bg-gradient-to-r from-black/50 to-transparent border-none cursor-pointer">
                    Watch Now
                </button>
            </div>
        </div>
    );
}

export default Hero;