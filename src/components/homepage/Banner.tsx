import Image from "next/image";
import { FiArrowDown } from "react-icons/fi";
import BannerImg from "@/assets/banner.png";

const Banner = () => {
    return (
        <section className="container mx-auto px-2 py-6 md:py-10">
            <div className="grid grid-cols-1 items-center gap-8 overflow-hidden rounded-4xl bg-[#15171D] px-6 py-10 md:grid-cols-[1.7fr_1fr] md:px-12 md:py-16 lg:px-20 lg:py-20">
                <div className="flex flex-col items-center gap-5 md:items-start md:gap-6">
                    <p className="text-sm font-bold tracking-wide text-[#C2F800]">WORKOUT LIBRARY</p>
                    <h1 className="[font-family:var(--font-oswald)] text-center text-4xl font-extrabold leading-[0.95] text-white md:text-left md:text-5xl lg:text-7xl">TRAIN WITH INTENT. LOG <br className="hidden md:block" />EVERY SET.</h1>
                    <p className="text-center text-sm leading-6 text-gray-500 md:text-left md:text-base lg:text-lg">FitLog is a dark, no-nonsense gym companion: pick a lift, lock it <br className="hidden md:block" />into today&apos;s plan, and watch the week&apos;s work add up.</p>
                    <a href="#library" className="btn mt-2 flex w-full items-center gap-2 border-0 bg-[#C2F800] px-8 font-semibold text-black hover:bg-[#b8ed00] md:w-fit">BROWSE WORKOUTS <FiArrowDown /></a>
                </div>
                <div className="flex items-center justify-center md:justify-end">
                    <Image src={BannerImg} className="h-auto w-full max-w-85 object-contain lg:max-w-90" alt="Workout illustration" priority />
                </div>
            </div>
        </section>
    );
};

export default Banner;