import { useNavigate } from "react-router-dom";

function Header() {
    const navigate = useNavigate();

    return (
        <div className="fixed top-0 left-0 w-full h-[120px] bg-gradient-to-b from-black to-transparent z-20">
            <div className="flex items-center h-full">
                <button className="mt-0.5 ml-5 w-[230px] rounded-lg text-3xl font-bold text-white bg-blue-900 cursor-pointer"
                    onClick={() => navigate("/")} > JStreaming </button>
                <input className="mt-0.5 ml-100 w-[500px] h-[30px] rounded-full border-none px-4 text-base outline-none bg-white text-black"
                    placeholder="Search Title" />
                <span className="mt-6 ml-10 h-[40px] w-[70px] text-xl font-bold text-sky-600 underline cursor-pointer whitespace-nowrap"
                    onClick={() => navigate("/movies")} > Explore Movies </span>
                <button className="mt-0.5 ml-40 h-[35px] w-[70px] rounded-lg text-xs font-bold text-white bg-blue-900 cursor-pointer"
                    onClick={() => navigate("/login")} > LOGIN </button>
                <button className="mt-0.5 ml-5 h-[35px] w-[90px] rounded-lg text-xs font-bold text-white bg-blue-900 cursor-pointer">
                    REGISTER </button>
            </div>
        </div>
    );
}

export default Header;