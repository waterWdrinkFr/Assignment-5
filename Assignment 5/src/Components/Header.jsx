function Header() {
    return (
        <div className="fixed top-0 left-0 w-full h-[110px] bg-gradient-to-b from-black to-transparent z-20 px-8">
            <div className="flex justify-between items-center h-full">
                <button className="w-[230px] text-3xl font-bold text-white bg-blue-900 cursor-pointer">JStreaming </button>
                <input className="ml-90 w-[500px] h-[30px] rounded-full border-none px-4 text-base outline-none bg-white text-black"
                    placeholder="Search Title"/>
                <span className="mt-6 mr-40 h-[40px] w-[70px] text-xl font-bold text-blue-900 underline cursor-pointer">
                    Genres
                </span>
                <button className="h-[35px] w-[70px] rounded-lg text-xs font-bold text-white bg-blue-900 cursor-pointer">
                    LOGIN
                </button>
                <button className="h-[35px] w-[90px] rounded-lg text-xs font-bold text-white bg-blue-900 cursor-pointer">
                    REGISTER
                </button>

            </div>
        </div>
    );
}

export default Header;