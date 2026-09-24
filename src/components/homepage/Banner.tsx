import Image from "next/image";
import BannerImg from "@/assets/banner.png";


const Banner = () => {
    return (
        <div className="grid grid-cols-1 items-center p-10 md:p-25 gap-4 md:gap-20 md:grid-cols-3 bg-[#15171D] rounded-4xl m-4 md:m-8">
            <div className="grid grid-cols-1 gap-4 md:gap-6 md:col-span-2">
                <p className="text-[#C2F800] text-center md:text-left font-bold">WORKOUT LIBRARY</p>
                <h1 className="[font-family:var(--font-oswald)] text-3xl md:text-4xl lg:text-7xl font-extrabold text-center md:text-left"> TRAIN WITH INTENT. LOG <br className="hidden md:block"/>EVERY SET.</h1>
                <p className="md:text-xl text-gray-500 text-center md:text-left">FitLog is a dark, no-nonsense gym companion: pick a lift, lock it <br className="hidden md:block"/> into today&apos;s plan, and watch the week&apos;s work add up.</p>
                <button className="btn bg-[#C2F800] font-semibold text-black md:w-1/2 lg:w-1/3">BROWSE WORKOUTS</button>
            </div>
            <div className=" flex items-end">
                <Image src={BannerImg} className="max-w-full h-auto object-cover" alt=""></Image>
            </div>
        </div>
    );
};

export default Banner;